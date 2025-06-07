import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await axios.post(`forgot-password`, data);
    alert("Password reset link sent to your email.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("email")} placeholder="Enter your email" />
      <button type="submit">Send Reset Link</button>
    </form>
  );
};

export default ForgotPassword;
