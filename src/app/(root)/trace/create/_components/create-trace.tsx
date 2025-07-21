"use client";

import { createTrace } from "@/actions/createTrace";
import { checkAndGetTitle, checkAndGetTldr, getContent } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useAuthStore } from "@/store/auth-store";
import { getGhost } from "@/actions/getGhost";
import { createClient } from "@/lib/supabase/client";

const TextEditor = dynamic(() => import("@/components/text-editor"), {
  ssr: false,
});

export default function CreateTrace() {
  const [markdown, setMarkdown] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const ghost = useAuthStore((state) => state.ghost);
  const setGhost = useAuthStore((state) => state.setGhost);

  useEffect(() => {
    (async () => {
      if (!ghost) {
        const user = await createClient().auth.getUser();
        const email = user.data.user?.email || "";

        const ghost = await getGhost({ email });
        if (ghost.data) {
          setGhost(ghost.data);
        }
      }
    })();
  }, [ghost, setGhost]);

  const submitHandler = async () => {
    setLoading(true);
    const title = checkAndGetTitle(markdown);
    const tldr = checkAndGetTldr(markdown, true);
    const { content } = getContent(markdown);

    if (!title || !tldr || !ghost) return;

    await createTrace({
      title,
      tldr,
      username: ghost.username,
      content: content.join("\n"),
    });
    setLoading(false);
  };

  return (
    <div>
      <Navbar loading={loading} onClick={submitHandler} disabled={disabled} />

      <div className="rounded-md flex-1 mb-4 overflow-auto shadow-xs min-h-[50vh] -z-10">
        <TextEditor setMarkdown={setMarkdown} setDisabled={setDisabled} />
      </div>
    </div>
  );
}
