import React from "react";
import Layout from "../../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About"} className="mt-5">
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "80%", height: "300px" }}
          />
        </div>
        <div className="col-md-4 text-justify mt-2">
          <h1>About US</h1>
          <hr />
          <h4>Welcome to PET MERN-MART!</h4>
          <p className="text-justify mt-2">
            PET MERN-MART is your one-stop destination for all your pet care
            needs. We specialize in providing high-quality products in the
            categories of care and grooming, food and treats, as well as toys
            and accessories.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
