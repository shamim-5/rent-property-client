import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user || gUser) {
    navigate("/");
  }
  if (loading || gLoading) {
    return <p>Loading</p>;
  }
  let logInError;
  if (error || gError) {
    logInError = (
      <p className="text-secondary">
        <small>{error?.message || gError.message}</small>
      </p>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center text-levender lg:text-left">
            <h1 className="text-4xl font-bold uppercase">Please Login !</h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-dark text-dark">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
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
                {logInError}
                <div className="form-control mt-6">
                  <input type="submit" value="Login" className="btn btn-primary" />
                </div>
              </form>
              <Link to="/signup">
                <p className="text-steel">
                  <small>Don't Have Any Account ?</small> <small className="link link-primary">Please Register</small>
                </p>
              </Link>
              <div className="divider text-steel">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="text-info hover:text-secondary rounded py-2 uppercase font-semibold text-center border border-steel"
              >
                Continue with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
