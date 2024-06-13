// import React, {useState} from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { LoginPageContainer, LoginFormWrapper, LoginForm, Title, FormGroup, Label, Input, Button, RegisterLink } from '../styles/LoginStyles';
// import { Link } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate()
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/login",
//         {
//           email : email,
//           password : password,
//         },
//         { withCredentials: true }
//       );
//       navigate("/dashboard");
//       console.log(response.data);
//     } catch (error) {
//       if (error.response) {
//         setMsg(error.response.data.msg);
//       }
//       // console.error(error);
//     }
//   };
 
//   return (
//     <LoginPageContainer>
//       <LoginFormWrapper>
//         <LoginForm>
//           <form onSubmit={handleSubmit}>
//             <Title>Login</Title>
//             <p className="has-text-centered">{msg}</p>
//             <FormGroup>
//               <Label>Username</Label>
//               <Input type="text" placeholder="Enter username" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </FormGroup>
//             <FormGroup>
//               <Label>Password</Label>
//               <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </FormGroup>
//             <br></br>
//             <Button type="submit">
//               Login
//             </Button>
//             <RegisterLink>
//               Belum punya akun? <Link to="/register">Create</Link>
//             </RegisterLink>
//           </form>
//         </LoginForm>
//       </LoginFormWrapper>
//     </LoginPageContainer>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginPageContainer, LoginFormWrapper, LoginForm, Title, FormGroup, Label, Input, Button, RegisterLink } from "../styles/LoginStyles";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      const role = response.data.role;
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home2");
      }
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <LoginPageContainer>
      <LoginFormWrapper>
        <LoginForm>
          <form onSubmit={handleSubmit}>
            <Title>Login</Title>
            <p className="has-text-centered">{msg}</p>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <br></br>
            <Button type="submit">Login</Button>
            <RegisterLink>
              Belum punya akun? <Link to="/register">Create</Link>
            </RegisterLink>
          </form>
        </LoginForm>
      </LoginFormWrapper>
    </LoginPageContainer>
  );
};

export default LoginPage;
