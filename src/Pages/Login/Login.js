import userEvent from "@testing-library/user-event";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { emailpassSignin } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password=form.password.value;
    emailpassSignin(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch((e)=>{
      console.error(e)
    })
    console.log(email,password)
  };
  return (
    <div style={{ alignItems: "center" }} className="">
      <section
        style={{
          marginBottom: "300px",
          height: "100%",
          width: "100%",
          margin: "auto",
        }}
        className="h-full gradient-form bg-gray-200 mx-auto   md:h-screen align-middle "
      >
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://i.ibb.co/KKPVnNg/logo.png"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The BongVo Team
                        </h4>
                      </div>
                      <form onSubmit={handleLogin}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                          name="email"
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                          name="password"
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                        <div className="form-control mt-6">
                            <button
                              style={{ backgroundColor: "rgb(189,156,28)" }}
                              className="btn btn-primary border-none"
                            >
                              SignIn
                            </button>
                          </div>
                         
                        </div>
                        
                      </form>
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "rgb(242,242,238)" }}
                    className="lg:w-6/12 flex items-center bg-orange-600 lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-3xl font-semibold mb-6 text-black">
                        Is this your first time here?
                      </h4>
                      <p className="text-sm text-black">
                        To take part in courses on Bongvo you will need to
                        create a free account. Do this by following the steps
                        below.
                      </p>
                      <h4 className="text-xl font-semibold mb-6 text-black">
                        Why do I need an account?
                      </h4>
                      <p className="text-sm text-black">
                        We also need to know who is taking part in courses so
                        that we can look at the impact of the courses we offer
                        and make sure we are creating courses that you want to
                        join.{" "}
                      </p>

                      <h4 className="text-xl font-semibold mb-6 text-black">
                        How do I create an account?
                      </h4>
                      <p className="text-sm text-black">
                        1.Complete the registration form at
                        localhost:3000/register <br />
                        2.When you submit the form, an email will be sent to the
                        email address you have given us <br />
                        3.To confirm your registration, click the link in the
                        email <br />
                        4.Your account will be confirmed and you will be able to
                        log in and start taking courses <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
