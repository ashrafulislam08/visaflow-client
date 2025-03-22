import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-1/2 mx-auto my-8">
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">
          Login to explore
        </h2>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            className="w-full border-2 mb-2 py-2 px-2 rounded-md"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            className="w-full border-2 mb-2 py-2 px-2 rounded-md"
            type="password"
            name="password"
            placeholder="Enter a password"
          />
        </div>
        <button className="btn btn-neutral w-full">Login</button>
      </form>
      <p className="text-xl mt-2 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
