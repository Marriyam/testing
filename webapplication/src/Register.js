import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./header";

function Register() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
        Navigate('/Login');
    }
  }, []);
  async function authenticatedFetch(url, options) {
    const token = localStorage.getItem("access-token");
    
    if (!token) {
      // Handle the case where token is missing
      throw new Error("Access token is missing.");
    }
  
    const headers = {
      ...options.headers,
      "Authorization": `Bearer ${token}`,
    };
  
    return await fetch(url, { ...options, headers });
  }
  const [name, setName] = useState("");        //these are the three state variables
  const [password, setPassword] = useState("");   //to store the input values of the registration form fields
  const [email, setEmail] = useState("");
  const Navigate = useNavigate(); //Navigate function is extracted from the useNavigate hook
                                

  async function signUp() {
    let item = { name, password, email };
    console.warn(item);

    try {
    let response = await authenticatedFetch("http://localhost:8000/api/register", {
      //this will fetch the data from the backend api
      method: "POST", //this will send the data to the backend api
      body: JSON.stringify(item), //this will convert the data into stringed json format
      headers: {
        "Content-Type": "application/json", //this will tell the backend api that the data is in json format
        Accept: "application/json", //this will tell the backend api that the data to be accepted is in json format
      },
    }
    );
    // if (!response.ok) {
    //  alert("Registration failed.");
    //  return;
    // }
    if (response.status === 200) {
      let result = await response.json();
      localStorage.setItem("user-info", JSON.stringify(result));
    }
    let result = await response.json();    
    localStorage.setItem("user-info", JSON.stringify(result));
   
  } catch (error) {
    alert("Error during registration:", error.message);
    // Handle errors or show error messages to the user
  }
//   if (response.status === 200) {
//     let result = await response.json();
//     localStorage.setItem("user-info", JSON.stringify(result));
//     Navigate("/Login");
//   } else {
//     alert("Registration failed.");
//   }
// } catch (error) {
//   alert("Error during registration: " + error.message);
// }
}

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Register Page</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          placeholder="name"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
        />
        <br />
        <button onClick={signUp} className="btn btn-primary">
          Register
        </button>
      </div>
    </>
  );
}

export default Register;
