import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center text-levender lg:text-left">
            <h1 className="text-4xl font-bold uppercase">Please SignUp</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-dark text-dark">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-grey">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-grey">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-grey">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn btn-primary" />
                </div>
              </form>
              <Link to="/login">
                <p className="text-steel">
                  <small>Already Registered?</small> <small className="link link-secondary">Please Login</small>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
