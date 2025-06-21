"use client";

import EditorJS, {
  EditorConfig,
  ToolConstructable,
  ToolSettings,
} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect, useRef } from "react";

type CustomToolSetting = ToolSettings & {
  class: ToolConstructable;
  config?: object;
};

interface CustomEditorConfig extends EditorConfig {
  tools: {
    [toolName: string]: CustomToolSetting | object;
  };
}

const EDITOR_TOOLS = {
  header: {
    class: Header,
    shortcut: "CMD+SHIFT+H",
    config: {
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  list: List,
};

const TextEditor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const editor = useRef<EditorJS>(null);
  const spawnRef = useRef(false);

  useEffect(() => {
    if (!spawnRef.current) {
      if (!containerRef.current) return;

      const config: CustomEditorConfig = {
        holder: containerRef.current,
        tools: EDITOR_TOOLS,
      };

      editor.current = new EditorJS(config);
      spawnRef.current = true;
    }
  });

  return (
    <>
      <div className="border" id="editorjs" ref={containerRef}>
        TextEditor
      </div>
    </>
  );
};

export default TextEditor;
