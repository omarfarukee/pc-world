import RootLayout from "@/components/RootLayout";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex justify-center">
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-info "
                  onClick={() =>
                    signIn("github", {
                      callbackUrl: "http://localhost:3000/",
                    })
                  }
                >
                  Sign-up with GitHub <FaGithub></FaGithub>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-48 p-14 bg-black rounded-2xl w-80">
        <div className="form-control mt-6">
          <button
            className="btn btn-info text-2xl h-28 lg:h-28 w-full "
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
          >
            Sign-up with GitHub <FaGithub></FaGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
