import { StyledPosts } from "./style";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import DeleteModal from "./../Modals/Delete";
import EditModal from "./../Modals/Edit";
import { useState } from "react";

interface ApiData {
  title: string;
  content: string;
  username: string;
  created_datetime: string;
  id: number;
}

interface Props {
  post: ApiData;
}

const Posts = ({ post }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [targetId, setTargetId] = useState<number>(0);

  return (
    <StyledPosts>
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        targetId={targetId}
      />
      <EditModal
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        targetId={targetId}
        content={post.content}
        title={post.title}
      />
      <header>
        <h1>{post.title}</h1>
        {post.username === localStorage.getItem("username") ? (
          <div>
            <button
              onClick={() => {
                setShowDeleteModal(true);
                setTargetId(post.id);
              }}
            >
              <MdDeleteForever />
            </button>
            <button
              onClick={() => {
                setShowEditModal(true);
                setTargetId(post.id);
              }}
            >
              <MdEdit />
            </button>
          </div>
        ) : (
          ""
        )}
      </header>

      <div className="content">
        <div className="info">
          <p className="username">@{post.username}</p>
          <p>
            {new Date(post.created_datetime).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <p>{post.content}</p>
      </div>
    </StyledPosts>
  );
};

export default Posts;
