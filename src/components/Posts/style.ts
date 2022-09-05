import styled from "styled-components";

export const StyledPosts = styled.main`
  header {
    background: var(--black);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      padding: 10px;
      font-size: 20px;
      text-align: left;
      font-weight: 500;
    }
  }

  .content {
    border: 2px solid var(--grey);
    padding: 0 10px;
    text-align: left;

    .info {
      .username {
        font-weight: 600;
      }

      display: flex;
      justify-content: space-between;
      color: #777;
    }
  }

  button {
    background: none;
    svg {
      color: var(--white);
      width: 30px;
      height: 30px;
    }
  }
`;
