import { EditWrapper } from "./style";
import { api } from "../../actions/api";
import { useState } from "react";

interface Props {
  showEditModal: boolean;
  setShowEditModal: (value: boolean) => void;
  targetId: number;
  content: string;
  title: string;
}

const EditModal = ({
  showEditModal,
  setShowEditModal,
  targetId,
  content,
  title,
}: Props) => {
  if (!showEditModal) return null;

  const [newContent, setNewContent] = useState(content);
  const [newTitle, setNewTitle] = useState(title);

  const editPost = (targetId: number) => {
    const newData = { content: newContent, title: newTitle };
    api
      .patch(`/careers/${targetId}/`, newData)
      .then((res) => setShowEditModal(false));
  };
  return (
    <EditWrapper>
      <div className="modalContent">
        <h1>Edit Item</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Title
            <input
              type="text"
              placeholder="Edit your title"
              defaultValue={title}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </label>
          <label>
            Content
            <textarea
              placeholder="Edit your content"
              defaultValue={content}
              onChange={(e) => setNewContent(e.target.value)}
            ></textarea>
          </label>
          <div className="buttons">
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
            <button onClick={() => editPost(targetId)}>Save</button>
          </div>
        </form>
      </div>
    </EditWrapper>
  );
};

export default EditModal;
