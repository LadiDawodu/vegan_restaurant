import React, { useState } from "react";

import { signUp } from "../../js/auth.jsx";

import RegistrationModal from "./RegistrationModal.jsx";

function Registration() {
  const [isOpen, setIsOpen] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await signUp(
        formData.username,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );

      alert("SignUp successful");

      setIsOpen(false);
    } catch (error) {
      console.error("signup error:", error.message);
      setRegistrationError(error.message);
    }
  };

  return (
    <div className="registration">
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
        <button type="submit"> Sign Up</button>
      </form>
      {registrationError && <p> Error:{registrationError}</p>}
      <button onClick={toggleModal}></button>
      <RegistrationModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
}

export default Registration;
