import React from 'react';
import { Link } from 'react-router-dom'; // Ensure to import Link if you're using React Router
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Remove the generic type

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .posthttps://mindful-backend-lixt.onrender.com", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login In Successfully");
           navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user)); //browserlocastorage
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for the modal */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3")?.close()} // Close the modal
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            {/* Password field */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-red-500">{errors.password.message}</span>}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
