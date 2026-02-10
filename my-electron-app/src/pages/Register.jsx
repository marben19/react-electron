import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import signinImg from "../assets/img/illustrations/signin.svg";
import { registerUser } from "../redux/thunk/userThunk.js";

export default function Register() {
  const [name, setName] = useState(""); // NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      Swal.fire("Oops!", "All fields are required.", "warning");
      return;
    }

    if (!agreeTerms) {
      Swal.fire("Oops!", "You must agree to the terms and conditions.", "warning");
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire("Oops!", "Passwords do not match.", "error");
      return;
    }

    try {
      const resultAction = await dispatch(registerUser({ name, email, password })).unwrap();

      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: `Welcome!`, // SHOW NAME
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err || "Something went wrong.",
      });
    }
  };

  return (
    <main>
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div
            className="row justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${signinImg})` }}
          >
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center mb-4">
                  <h1 className="h3 mb-0">Create Account</h1>
                </div>

                <form className="mt-4" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="form-group mb-4">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="John Doe"
                      autoFocus
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-group mb-4">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group mb-4">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {/* Terms */}
                  <div className="mb-4 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeTerms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />
                    <label className="form-check-label fw-normal mb-0" htmlFor="agreeTerms">
                      I agree to the <a href="#" onClick={(e) => e.preventDefault()}>terms and conditions</a>
                    </label>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
