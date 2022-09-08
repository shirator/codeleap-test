import { DeleteWrapper } from "./style";
import { api } from "../../actions/api";
import { DeleteProps } from "../../interfaces";

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  targetId,
}: DeleteProps) => {
  if (!showDeleteModal) return null;

  const deletePost = (targetId: number) => {
    api.delete(`/careers/${targetId}/`).then((res) => console.log(res));
  };

  return (
    <>
      <DeleteWrapper>
        <div className="modalContent">
          <h1>Are you sure you want to delete this item?</h1>
          <div className="buttons">
            <button onClick={() => setShowDeleteModal(false)}>Cancel</button>
            <button onClick={() => deletePost(targetId)}>Ok</button>
          </div>
        </div>
      </DeleteWrapper>
    </>
  );
};

export default DeleteModal;
