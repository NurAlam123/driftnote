import { checkAndGetTitle, getContent } from "@/lib/utils";
import { BlockNoteEditor } from "@blocknote/core";
import { en } from "@blocknote/core/locales";
import { BlockNoteView, lightDefaultTheme, Theme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect } from "react";

export default function App({
  setMarkdown,
  setDisabled,
}: {
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const locale = en;
  const editor: BlockNoteEditor = useCreateBlockNote({
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        emptyDocument: "Write anything here or type '/' for commands...",
        default: "Write anything here or type '/' for commands...",
      },
    },
    initialContent: [
      { type: "heading", content: "Title Here!" },
      {
        type: "paragraph",
        content: "",
      },
    ],
  });

  const lightTheme: Theme = {
    colors: {
      editor: {
        text: "#27272a",
        background: "#fafafa",
      },
      menu: {
        text: "#27272a",
        background: "#f4f4f5",
      },
      tooltip: {
        text: "#fafafa",
        background: "#3f3f46",
      },
      hovered: {
        text: "#27272a",
        background: "#e4e4e7",
      },
      selected: {
        text: "#27272a",
        background: "oklch(87.1% 0.006 286.286)",
      },
      disabled: {
        text: "#a2a2a2",
        background: "#e4e4e7",
      },
      shadow: "#d4d4d8",
      border: "#e4e4e7",
      sideMenu: "#27272a",
      highlights: lightDefaultTheme.colors!.highlights,
    },
    borderRadius: 6,
  };

  const checkContent = (markdown: string) => {
    const { lines, content } = getContent(markdown);
    let result = "";

    for (let i = 0; i < content.length; i++) {
      const line = content[i].trim();
      if (line) result += line + " ";
    }

    const title = checkAndGetTitle(lines[0]);

    if (result.trim() === "" || !title) {
      setDisabled(true);
      return;
    }

    setDisabled(false);
  };

  const getMarkdown = async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
    checkContent(markdown);
  };

  useEffect(() => {
    getMarkdown();
  });

  return (
    <div className="p-2">
      <BlockNoteView
        editor={editor}
        theme={lightTheme}
        data-block-note-font
        onChange={getMarkdown}
      />
    </div>
  );
}
