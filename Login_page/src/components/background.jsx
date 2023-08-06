// src/components/GradientBackground.js
import React from "react";
import Signin from "./signin";
import Signup from "./signup";
import "../styles.css";

const GradientBackground = () => {
  return (
    <div className="gradient-background">
      <Signin />
      <Signup />
    </div>
  );
};

export default GradientBackground;
