import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Register = () => {
  const { createUser } = useAuthContext();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="md:w-1/2 mx-auto my-8">
      <div>
        <h2 className="text-3xl text-center font-bold mb-4">
          Register to explore
        </h2>
      </div>
      <form onSubmit={handleRegister}>
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
        <button className="btn btn-neutral w-full">Register</button>
      </form>
      <p className="text-xl mt-2 text-center">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
