import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import Signin from "./Signin";

const Home = ()=>{
 const context = useContext(UserContext);
 const [query, setQuery]=useState('');
 const [user, setUser] = useState(null);
const fetchDetails =async () =>{
  try {
    const {data} = await Axios.get(`https://api.github.com/users/${query}`);
    setUser(data)
  } catch (error) {
    toast("Not able to locate user", {type: "error"})
  }
}

// Put anypage behind login
if (!context.user?.uid){
  return <Signin/>
}

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <div className="input-group-append">
            <Button 
              onClick={fetchDetails}
              color="primary">Fetch User</Button>
            </div>
          </InputGroup>
        {user ? <UserCard user={user}/>: null}  
        </Col>
        <Col md="7">
          {user ? <Repos repos_url={user.repos_url}/>: null}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;