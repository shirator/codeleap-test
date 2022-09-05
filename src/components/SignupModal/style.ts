import styled from "styled-components";

interface Props {
  isEmpty: boolean;
}

export const SignupModalWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 500px;
  height: 220px;
  border: 1px solid #ccc;

  h2 {
    text-align: left;
    padding: 0 30px;
  }
  form {
    label {
      color: var(--black);
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 30px;
      gap: 10px;
      font-weight: 400;
      input {
        width: 90%;
        padding: 5px;
        border-radius: var(--radius);
        border: 1px solid #777777;

        &::placeholder {
          color: #ccc;
          padding: 5px;
        }
      }
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      margin: 20px 35px 0 0;

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
`;
