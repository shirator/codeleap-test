import { api } from "../../actions/api";
import { MainScreenModalWrapper } from "./style";
import { useEffect, useState } from "react";
import { AllPropsProps } from "../../interfaces";
import Posts from "./../Posts";

const MainScreenModal = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [allPosts, setAllPosts] = useState<AllPropsProps[]>([]);
  const username = localStorage.getItem("username")!;

  useEffect(() => {
    if (title === "" || content === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [title, content]);

  useEffect(() => {
    api.get("/careers/").then((res) => {
      setAllPosts(res.data.results);
    });
  }, [allPosts]);

  const createPost = (username: string, title: string, content: string) => {
    const postContent = { username, title, content };
    api.post("/careers/", postContent);
  };

  return (
    <MainScreenModalWrapper isEmpty={isEmpty}>
      <header>
        <h1>CodeLeap Network</h1>
      </header>
      <section className="createPost">
        <h2>What's on your mind?</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPost(username, title, content);
          }}
        >
          <label>
            Title
            <input
              type="text"
              placeholder="Give your post a title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Content
            <textarea
              placeholder="Write something here"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </label>
          <div className="btn">
            <button type="submit" disabled={isEmpty}>
              Create
            </button>
          </div>
        </form>
      </section>
      <section className="posts">
        {allPosts.map((post) => {
          return <Posts post={post} key={post.id} />;
        })}
      </section>
    </MainScreenModalWrapper>
  );
};

export default MainScreenModal;
