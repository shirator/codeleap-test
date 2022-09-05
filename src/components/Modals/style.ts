import styled from "styled-components";

export const DeleteWrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContent {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 170px;
    background: #fff;

    h1 {
      font-weight: 500;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      padding: 30px;
      gap: 10px;

      button {
        width: 150px;
        height: 30px;
        font-weight: bold;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }
`;

export const EditWrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContent {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 350px;
    background: #fff;

    h1 {
      font-weight: bold;
      text-align: left;
      padding: 0 30px;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        display: flex;
        flex-direction: column;
        text-align: left;
        font-weight: bold;

        input,
        textarea {
          width: 600px;
          padding: 5px;
          border-radius: var(--radius);
          border: 2px solid var(--grey);
        }
        textarea {
          height: 100px;
        }
      }
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
      padding: 30px;
      gap: 10px;

      button {
        width: 150px;
        height: 30px;
        font-weight: bold;

        &:hover {
          background: #000;
          color: #fff;
        }
      }
    }
  }
`;
