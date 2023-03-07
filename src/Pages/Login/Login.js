import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/icons/google.png";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 ">
        <h2 className="text-xl text-primary  text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email Address is required" })}
              placeholder="Enter Your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters",
                },
              })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>

          <input className="btn btn-accent  text-white w-full" type="submit" />
          {loginError && <p className="text-red-500">{loginError}</p>}
        </form>
        <p>
          New to Doctors Portal?
          <Link className="text-secondary" to="/signup">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className=" w-full text-center btn btn-outline flex justify-evenly">
          CONTINUE WITH GOOGLE
          <img className="w-6" src={google} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Login;
