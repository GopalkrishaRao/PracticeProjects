import React, {useEffect, useState} from 'react';
import { account } from '../appwrite/appwriteConfig';
import {useNavigate, Link} from 'react-router-dom';
import Todo from '../../TodoComponents/Todo'


export default function Profile() {
  

const navigate = useNavigate()

const [userDetails, setUserDetails] = useState();
useEffect(()=>{
    const getData = account.get()
    getData.then(
        function(response){
            setUserDetails(response)
        },
        function(error){
            console.log(error)
        }
    )
}, [])

const handleLogout = async () => {
    try {
        await account.deleteSession("current")
        navigate("/")
    } catch (error) {
        console.log(error);
    }
};

return (
    <>
    {userDetails ? (
      <>
        <div className="">
          <div>
            <p className="text-xl">Hello {userDetails.name}</p>
          </div>
          <div>
            <button
              className="bg-red-400 text-white p-1 rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <Todo/>
      </>
    ) : (
      <p className="">
        {/* Please Login To see Profile{" "} */}
        <Link to="/">
          <span className="">
            Login
          </span>
        </Link>
      </p>
    )}
  </>
  )
}