"use client";

// import { login } from "../../lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  // const [state, formAction] = useFormState(login, undefined);
  

   const router = useRouter();
   const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {


    console.log("bello iam in onsubmit signin page=================")
    setLoading(true);
    const { rollno, password } = data;
    
    const res = await signIn("credentials", {
      redirect: false,
      rollno,
      password,
    });
     
    if (res?.error) {
      toast.error("Invalid roll number or password!");
    } else {
      toast.success("Successfully logged in!");
      router.push("/"); // Redirect to a dashboard or home page
    }
    setLoading(false);
  };


    const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form className={styles.form}  onSubmit={handleSubmit(onSubmit)} >
      <input type="text" placeholder="username" name="username" {...register("rollno", { required: "Roll Number is required" })} />
      <input type="password" placeholder="password" name="password" {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              }
            })}/>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;