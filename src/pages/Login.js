import React from "react";
import axios from 'axios';
function Login() 
{ const signin = () => {
    axios.get('https://65bc-2405-201-f012-20bb-55ca-f1d8-7c5d-6aa.ngrok-free.app/api/login/')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
} 
    return (
      <div
      style={{
        backgroundColor: "#454080",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
      }}
      className="flex justify-center items-center h-screen">
        <div className="text-left w-full max-w-lg">
          <div className="bg-cyan py-6 sm:py-8 lg:py-12 px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl text-white md:mb-8 lg:text-3xl font-poppins">Login</h2>
  
            <form className="rounded-lg">
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                  
                    className="mb-2 inline-block text-sm text-white sm:text-base font-poppins"
                  >
                    Username
                  </label>
                  <input
                    
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring font-poppins"
                    style={{ color: "#514B96" }}
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 inline-block text-sm text-white sm:text-base font-poppins"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring font-poppins"
                    style={{ color: "#514B96" }}
                  />
                </div>
  
                <div className="flex items-center gap-2 text-white font-poppins">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
  
                <button onClick={signin}
                  className="block rounded-lg bg-#F47458 px-8 py-3 text-center text-sm text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base font-poppins"
                  style={{backgroundColor: "#F47458"}}
                  >
                  Sign In
                </button>
              
  
  
                <div className="flex items-center gap-2 text-white font-poppins">
                  <p className="flex items-center gap-2 text-center text-sm text-white-500 font-poppins">
                   Don't have an account?{" "}
                    <a
                      href="#"
                      className="text-#F47458 transition duration-100 hover:text-indigo-600 active:text-indigo-700 font-poppins"
                      style={{color: "#F47458"}}
                      >
                      Register
                    </a>
                 </p>
                </div> 
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  

      
export default Login;