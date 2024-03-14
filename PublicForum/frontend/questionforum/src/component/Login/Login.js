// import React, { useEffect, useState } from "react";
// import {
//   Stack,
//   HStack,
//   VStack,
//   Input,
//   InputGroup,
//   InputRightElement,
//   Button,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import {
//   useToast,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
// } from "@chakra-ui/react";
// import axios from "axios";

// function Login() {
//   const [Email, setEmail] = useState();
//   const [Visible, setVisible] = useState(false);
//   const [loading, SetLoading] = useState(false);
//   const [password, SetPassword] = useState();
//   // useEffect(() => {
//   //   console.log(Email);
//   // }, [Email]);
//   // const typing = () => {
//   //   console.log(Email);
//   // };
//   const history = useNavigate();
//   const Toast = useToast();
//   const submitHandler = async () => {
//     SetLoading(true);
//     if (!Email || !password) {
//       Toast({
//         duration: 5000,
//         status: "warning",
//         title: "Enter all required fields",
//         position: "bottom",
//       });
//       SetLoading(false);
//       return;
//     }
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/User/login/",
//         {
//           email: Email,
//           password: password,
//         },
//         config
//       );
//       // Toast({
//       //   title: "Login successful",
//       //   duration: 5000,
//       //   status: "success",
//       //   position: "bottom",
//       // });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       SetLoading(false);
//       history("/chat");
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const Visiblilty = function HandleToggle() {
//     setVisible(!Visible);
//   };
//   return (
//     <VStack>
//       <FormControl isRequired>
//         <FormLabel>Email address</FormLabel>
//         <Input
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//             // console.log(setEmail);
//           }}
//         />
//         {/* {console.log(setEmail)} */}
//       </FormControl>
//       {/* <FormControl isRequired> */}
//       {/* <FormLabel>copy Email address</FormLabel> */}
//       {/* <Input
//           type="email"
//           value={Email}
//           // onChange={(e) => {
//           //   setEmail(e.target.value);
//           //   // console.log(setEmail);
//           // }}
//         /> */}
//       {/* {console.log(setEmail)} */}
//       {/* </FormControl> */}
//       <FormControl isRequired>
//         <FormLabel>password</FormLabel>
//         <InputGroup>
//           <Input
//             type={Visible ? "text" : "password"}
//             onChange={(e) => {
//               SetPassword(e.target.value);
//             }}
//           />
//           <InputRightElement width={"4.5rem"}>
//             <Button h={"1.75rem"} size={"sm"} onClick={Visiblilty}>
//               {Visible ? "Hide" : "Show"}
//             </Button>
//           </InputRightElement>
//         </InputGroup>
//       </FormControl>
//       <Button
//         colorScheme="blue"
//         width="100%"
//         style={{ marginTop: 15 }}
//         onClick={submitHandler}
//         // isLoading={loading}
//       >
//         Login
//       </Button>
//     </VStack>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "/User/login/",
        {
          email: email,
          password: password,
        },
        config
      );
      console.log(response);

      // Assuming the cookie is returned in the response headers
      const cookie = response.headers["set-cookie"];



navigate('/index')
      // Handle the cookie (e.g., store it in local storage or cookie storage)

      // Handle successful login (e.g., redirect to another page)
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
