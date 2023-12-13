import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, sendEmailVerification, auth } from "../../js/auth";

const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function LoginModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null);
  const [emailValidationError, setEmailValidationError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!pattern.test(formData.email)) {
      setEmailValidationError("Please enter a valid email address.");
      return; // Exit the function if email is not valid
    } else {
      setEmailValidationError(null); // Clear any previous error message
    }

    try {
      await signIn(formData.email, formData.password);

      const user = auth.currentUser;

      console.log(user);
      navigate("/");
    } catch (error) {
      console.error("login error:", error.code, error.message);
      setLoginError(error.message);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Log in with email</h1>
        <form onSubmit={(e) => handleLogin(e)}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            {emailValidationError && (
              <p className="text-red-500">{emailValidationError}</p>
            )}
          </div>

          <div>
            <label>Password:</label>

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>
          <button type="submit"> Done </button>
        </form>
        {loginError && <p>Error: {loginError}</p>}
        <button onClick={onClose}> Exit </button>
      </div>
    </div>
  );
}

export default LoginModal;
