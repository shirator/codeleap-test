import { EditWrapper } from "./style";
import { api } from "../../actions/api";
import { useState } from "react";
import { EditProps } from "../../interfaces";

const EditModal = ({
  showEditModal,
  setShowEditModal,
  targetId,
  content,
  title,
}: EditProps) => {
  const [newData, setNewData] = useState({ title, content });

  if (!showEditModal) return null;

  const editPost = (targetId: number) => {
    api
      .patch(`/careers/${targetId}/`, newData)
      .then(() => setShowEditModal(false));
    console.log(newData);
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
              onChange={(e) =>
                setNewData({ ...newData, title: e.target.value })
              }
            />
          </label>
          <label>
            Content
            <textarea
              placeholder="Edit your content"
              defaultValue={content}
              onChange={(e) =>
                setNewData({ ...newData, content: e.target.value })
              }
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
