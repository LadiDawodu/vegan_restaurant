import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../js/auth";

function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [registrationError, setRegistrationError] = useState(null);

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      signUp(
        formData.username,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );

      navigate("/");
    } catch (error) {
      console.error("registration error:", error.message);
      setRegistrationError(error.message);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Sign up with email</h1>
        <form onSubmit={(e) => handleRegistration(e)}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label>Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
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

          <button type="submit" id="submit">
            Done
          </button>
        </form>
        {registrationError && <p>Error: {registrationError}</p>}
        <button onClick={onClose}> Exit </button>
      </div>
    </div>
  );
}

export default RegistrationModal;
