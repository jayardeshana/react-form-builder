import React, { useState } from "react";
import "../css/Login.css";
const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    bio: "",
    country: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    window.alert(`Welcome ${formData.firstName}`);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="title">Register</div>
          <div className="input-box underline">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              required
            />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your Firstname"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Lastname"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <div className="underline"></div>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="bio"
              placeholder="Enter your bio"
              value={formData.bio}
              onChange={handleInputChange}
              required
            />
            <div className="underline"></div>
          </div>

          <div className="input-box">
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
            <div className="underline"></div>
          </div>

          <div className="input-box button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
