import React from "react";
import Layout from "../../components/Layout/Layout";
import myVideo from "../../previewVideo.mp4";

const Preview = () => {
  return (
    <Layout title={"Preview"}>
      <div className="container text-center mt-5">
        <h1 className="mt-5">Project Preview</h1>
        <div className="d-flex justify-content-center">
          <video width="840" height="460" controls>
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="mt-3">
          We hope you enjoyed the preview of our project. Stay tuned for more
          updates!
        </p>
      </div>
    </Layout>
  );
};

export default Preview;
