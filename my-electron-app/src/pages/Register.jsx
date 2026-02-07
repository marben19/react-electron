import { useState } from "react";
import signinImg from '../assets/img/illustrations/signin.svg';

export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
      confirmPassword,
      agreeTerms
    });

    // Later: call API / Redux action
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
                  {/* Email */}
                  <div className="form-group mb-4">
                    <label htmlFor="email">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="example@company.com"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="form-group mb-4">
                    <label htmlFor="password">Your Password</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </span>
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
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group mb-4">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </span>
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
                      I agree to the <a href="#" className="fw-bold" onClick={(e) => e.preventDefault()}>terms and conditions</a>
                    </label>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">Sign up</button>
                  </div>
                </form>

                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?{' '}
                    <a href="/" className="fw-bold" >Login here</a>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );


}