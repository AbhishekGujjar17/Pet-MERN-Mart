import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title} - Pet MERN-Mart</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  description: "Ecommerce Project Built using MERN Stack",
  keywords: "react,node,javascript,express,mongodb,bootstrap,stripe,ecommerce",
  author: "Abhishek Gujjar",
  title: "Pets MERN-Mart",
};

export default Layout;
