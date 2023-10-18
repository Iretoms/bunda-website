import styled from "styled-components";

export const Form = styled.article`
  width: 65%;
  margin: 0 auto;
  .signup_link {
    text-align: right;
    color: ${(props) => props.theme.text2};
    margin-bottom: 1rem;
    a {
      font-weight: bold;
      text-decoration: underline;
      color: ${(props) => props.theme.text1};
    }
  }
  .title {
    color: ${(props) => props.theme.text1};
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  form {
    width: 80%;
    .form_control {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 1.5rem;
      label {
        color: ${(props) => props.theme.text1};
        font-weight: bold;
      }
      input {
        color: ${(props) => props.theme.text3};
        font-family: inherit;
        font-size: 1.1rem;
        padding: 1rem 0.5rem;
        height: 2.5rem;
        border: ${(props) => props.theme.FB};
        border-radius: 3px;
        background-color: transparent;
        &:focus {
          border-color: ${(props) => props.theme.blue};
          outline: none;
        }
      }
      p {
        color: red;
      }
    }
    .password {
      .password_input {
        position: relative;
        input {
          width: 100%;
        }
        button {
          cursor: pointer;
          position: absolute;
          right: 0.7rem;
          top: 0.5rem;
          border: none;
          background-color: transparent;
          svg {
            font-size: 1.2rem;
            color: ${(props) => props.theme.text3};
          }
        }
      }
      a {
        display: block;
        color: ${(props) => props.theme.text1};
        text-align: right;
      }
    }
    .btn_container {
      .submit_btn {
        cursor: pointer;
        width: 100%;
        height: 2.5rem;
        border: none;
        border-radius: 3px;
        background-color: ${(props) => props.theme.blue};
        color: #fff;
        font-family: inherit;
        font-size: 1rem;
        &:active {
          transform: scale(0.98);
        }
      }
    }
  }

  .googleBtn_container {
    width: 80%;
    margin-top: 1.5rem;
    p {
      text-align: center;
      font-weight: bold;
      color: ${(props) => props.theme.text2};
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 40rem) {
    width: 100%;
    .title {
      font-size: 1.8rem;
    }
    form {
      width: 100%;
    }
    .googleBtn_container {
      width: 100%;
    }
  }
`;