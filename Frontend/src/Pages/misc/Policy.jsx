import React from "react";
import Layout from "../../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 mt-5 ">
          <img
            src="/images/privacy.jpeg"
            alt="contactus"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
        <div className="col-md-4 mt-5">
          <h2 className="mt-5">Last updated: 14th May, 2023</h2>
          <p>
            PET MERN-MART is a personal project and not a functioning product
            website. We have a payment method but you should not process
            payments, and we are not responsible for any financial transactions
            or losses incurred.
          </p>
          <p>
            We collect limited personally identifiable information, such as
            name, email address, and phone number, solely for a personalized
            website experience.
          </p>
          <p>
            While we strive to protect your information, please understand that
            online security is not guaranteed.
          </p>
          <p>
            This Privacy Policy is effective as of the date stated above. We may
            update it without notice
          </p>
          <p>
            Please note, we do not provide any customer support, product
            purchase or payment inquiries, as we dont sell these products.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
