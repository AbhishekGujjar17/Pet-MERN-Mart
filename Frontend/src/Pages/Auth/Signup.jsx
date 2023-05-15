import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../../styles/AuthStyles.css";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    answer: "",
  });
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, phone, address, answer } = credentials;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/auth/signup`,
        { name, email, password, phone, address, answer }
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
    <Layout title="Login">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4>SignUp Form</h4>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={credentials.name}
              required
            />
          </div>
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
              id="exampleInputPassword"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Phone"
              name="phone"
              value={credentials.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputAddress"
              placeholder="Address"
              name="address"
              value={credentials.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAnswer" className="form-label">
              Securtity Question
            </label>
            <input
              type="answer"
              className="form-control"
              id="exampleInputAnswer"
              placeholder="What is your dream job?"
              name="answer"
              value={credentials.answer}
              onChange={handleChange}
              required
            />
            <div id="answerHelp" className="form-text mt-2 fs-6">
              This will be asked if you forgot your password.
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 ">
            SignUp
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
