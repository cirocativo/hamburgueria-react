import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  animation: smoothAppearance 3s ease 0s normal none;

  figure {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 70px;

    background-color: #e0e0e0;
    border-radius: 5px;
    margin: 0;

    img {
      width: 70px;
    }
  }

  .cartDiv {
    display: flex;
    gap: 0.5rem;
  }

  .cartMainContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    height: 70px;

    h4,
    p {
      margin: 0;
      text-align: left;
    }
  }

  .cartRemoveContainer {
    display: flex;
    align-items: center;

    height: 70px;

    p {
      cursor: pointer;
    }
  }

  p {
    font-size: 12px;
    color: #828282;
  }

  @keyframes smoothAppearance {
    0.0% {
      opacity: 0;
    }

    30% {
      opacity: 1;
    }
  }
`;
