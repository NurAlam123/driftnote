import { checkAndGetTitle, checkAndGetTldr, getContent } from "@/lib/utils";
import { BlockNoteEditor } from "@blocknote/core";
import { en } from "@blocknote/core/locales";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
} from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function App({
  setMarkdown,
  setDisabled,
}: {
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { resolvedTheme } = useTheme();

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
      { type: "heading", content: "" },
      { type: "quote", content: "TL;DR: " },
    ],
  });

  const lightTheme = {
    colors: {
      editor: {
        text: "oklch(0.1448 0 0)",
        background: "oklch(1 0 0)",
      },
      menu: {
        text: "oklch(0.1448 0 0)",
        background: "oklch(1 0 0)",
      },
      tooltip: {
        text: "oklch(1 0 0)",
        background: "oklch(0.1448 0 0)",
      },
      hovered: {
        text: "oklch(0.1448 0 0)",
        background: "oklch(97% 0 0)",
      },
      selected: {
        text: "oklch(0.1448 0 0)",
        background: "oklch(94% 0 0)",
      },
      disabled: {
        text: "oklch(60% 0 0)",
        background: "oklch(96% 0 0)",
      },
      shadow: "oklch(0.1448 0 0 / 0.1)",
      border: "oklch(90% 0 0)",
      sideMenu: "oklch(0.1448 0 0)",
      highlights: lightDefaultTheme.colors!.highlights,
    },
    borderRadius: 6,
  } satisfies Theme;

  const darkTheme = {
    colors: {
      editor: {
        text: "oklch(1 0 0)",
        background: "oklch(0.1448 0 0)",
      },
      menu: {
        text: "oklch(0.9851 0 0)",
        background: "oklch(0.2134 0 0)",
      },
      tooltip: {
        text: "oklch(0.9851 0 0)",
        background: "oklch(0.2686 0 0)",
      },
      hovered: {
        text: "oklch(0.9851 0 0)",
        background: "oklch(0.25 0 0)",
      },
      selected: {
        text: "oklch(1 0 0)",
        background: "oklch(0.3 0 0)",
      },
      disabled: {
        text: "oklch(50% 0 0)",
        background: "oklch(0.18 0 0)",
      },
      shadow: "oklch(0 0 0 / 0.3)",
      border: "oklch(0.3 0 0)",
      sideMenu: "oklch(1 0 0)",
      highlights: darkDefaultTheme.colors!.highlights,
    },
    borderRadius: 6,
  } satisfies Theme;

  const theme = {
    light: lightTheme,
    dark: darkTheme,
  };

  const checkContent = (markdown: string) => {
    const { lines, content } = getContent(markdown);
    let result = "";

    for (let i = 0; i < content.length; i++) {
      const line = content[i].trim();
      if (line) result += line + " ";
    }

    const title = checkAndGetTitle(lines[0]);
    const tldr = checkAndGetTldr(lines[2]);

    if (result.trim() === "" || !title || !tldr) {
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
    <div className="md:p-2 -z-10">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? theme.dark : theme.light}
        data-block-note-font
        onChange={getMarkdown}
      />
    </div>
  );
}
