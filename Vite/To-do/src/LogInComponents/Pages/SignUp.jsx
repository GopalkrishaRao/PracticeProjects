import React, {useState} from 'react';
import { account } from '../appwrite/appwriteConfig';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function Signup() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    //Signup 
    const signupUser = async (e) => {
        e.preventDefault()

        const promise = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        );

        promise.then(
            function(response){
                console.log(response);
                navigate("/") //success
            },
            function(error) {
                console.log(error); // Failure
            }
        )


    }

  return (
    <>
        <div className="">Sign up</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className=""
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className=""
                    onChange={(e) => {
                        setUser({
                            ...user,
                            name: e.target.value
                        })
                    }}
                  />
                </div>
              </div>
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
                  className=""
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

              <div>
                <button
                  type="submit"
                  className=""
                  onClick={signupUser}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      
</>
  )
}

export default Signup