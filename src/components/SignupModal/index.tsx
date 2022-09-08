import { SignupModalWrapper } from "./style";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignupModal = () => {
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(true);
  const [input, setInput] = useState("");

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    localStorage.setItem("username", input);
    navigate("/dashboard");
  };

  useEffect(() => {
    if (input === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [input]);

  return (
    <SignupModalWrapper isEmpty={isEmpty}>
      <h2 className="form-title">Welcome to CodeLeap network!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Please enter your username
          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <div className="btn">
          <button type="submit" disabled={isEmpty}>
            Enter
          </button>
        </div>
      </form>
    </SignupModalWrapper>
  );
};

export default SignupModal;
