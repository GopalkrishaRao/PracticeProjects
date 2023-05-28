import React, {useState} from 'react';
import { account } from '../appwrite/appwriteConfig';
import {useNavigate} from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const loginUser = async (e) => {
      e.preventDefault()
      try {
          await account.createEmailSession(user.email, user.password)
          navigate("/")
          // navigate("/profile")
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <>
     
        <div className="text-center font-bold text-2xl">Log in</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className=""
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className=""
                    onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className=""
                    onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }}
                  />
                </div>
              </div>

              <div className="">
                <div className="text-sm">
                  <a
                    href="/signup"
                    className=""
                  >
                    Don't have Account, Sign Up
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className=""
                  onClick={loginUser}
                >
                  Log in
                </button>
              </div>
            </form>

            
        </div>
      </div>
    
    </>
  )
}
