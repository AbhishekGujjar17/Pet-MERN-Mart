import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/AuthStyles.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    answer: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, answer, newPassword } = credentials;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/forgot-password`,
        { email, answer, newPassword }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password"}>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4>Update Password</h4>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputNewPassword"
              placeholder="New Password"
              name="newPassword"
              value={credentials.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAnswer" className="form-label">
              Security Question
            </label>
            <input
              type="answer"
              className="form-control"
              id="exampleInputAnswer"
              placeholder="Your dream job!"
              name="answer"
              value={credentials.answer}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
