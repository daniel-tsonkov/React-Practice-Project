import {
  EditorContent,
  useEditor,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../../styles/tiptap.scss';

const TipTap = ({ setEditorState, editorContent = '' }) => {
  const editor = useEditor({
    content: editorContent,
    extensions: [StarterKit],
    onUpdate: ({ editor }) => {
      //console.log(editor.getJSON());
    },
  });
  return (
    <>
      <span>
        <EditorContent editor={editor} />
      </span>
    </>
  );
};

export default TipTap;
