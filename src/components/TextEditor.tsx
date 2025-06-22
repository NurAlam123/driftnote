import { BlockNoteView, lightDefaultTheme, Theme } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect } from "react";

export default function App({
  setMarkdown,
}: {
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}) {
  const editor = useCreateBlockNote({
    initialContent: [
      { type: "heading", content: "Title Here!" },
      {
        type: "paragraph",
        content: "Write anything here or type '/' for commands...",
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

  const getMarkdown = async () => {
    const markdown = await editor.blocksToMarkdownLossy(editor.document);
    setMarkdown(markdown);
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
