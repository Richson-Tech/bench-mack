import React from "react";
import styles from "./page.module.css";

const category = ({ params }) => {
  return (
    <div>
      <h1>{params.category}</h1>
    </div>
  );
};

export default category;
