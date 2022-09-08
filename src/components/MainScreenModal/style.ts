import styled from "styled-components";

interface Props {
  isEmpty: boolean;
}

export const MainScreenModalWrapper = styled.main<Props>`
  width: 800px;
  background: var(--white);
  header {
    background: var(--black);
    color: var(--white);

    h1 {
      padding: 25px;
      font-size: 20px;
      text-align: left;
      font-weight: 500;
    }
  }

  section {
    width: 80%;
    margin: 30px auto 0;
  }

  .posts {
    display: flex;
    flex-direction: column;
    height: 450px;
    overflow-y: scroll;
    gap: 50px;

    ::-webkit-scrollbar-track {
      border: 5px solid white;
      background-color: #b2bec3;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background-color: #dfe6e9;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--black);
    }
  }
  
  .createPost {
    border: 2px solid var(--grey);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;

    h2 {
      text-align: left;
      padding: 0 40px;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      label {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 5px;

        input,
        textarea {
          width: 550px;
          border-radius: var(--radius);
          padding: 5px;
          margin-bottom: 30px;
          border: 2px solid var(--grey);
        }

        textarea {
          height: 75px;
        }
      }
      .btn {
        display: flex;
        justify-content: flex-end;
        padding: 0 0 20px 0;

        button {
          border: none;
          background: ${(props) =>
            props.isEmpty ? "var(--grey)" : "var(--black)"};
          padding: 5px 30px;
          color: var(--white);
          font-size: 1rem;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
  }
`;
