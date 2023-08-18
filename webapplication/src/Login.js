import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from './header';

function Login()
{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            Navigate('/addMember');
        }
      }, [])
    async function Login()
    {
        let item = {email, password};
        try{
        let result = await fetch("http://localhost:8000/api/login",{
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item),
        })
        
        if (result.status === 200) {
          result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        Navigate('/addMember');
        }
        else {
          alert("Failed....!");
          Navigate('/login');
        }

       
      } catch (error) {
        alert("Error during registration:", error.message);
        // Handle errors or show error messages to the user
      }
    }
    return(
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
        <h1>Login Page</h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="email"
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
        
        <br />
        <button onClick={Login} className="btn btn-primary">
          Login
        </button>
        
        </div>
        </div>
    )
}

export default Login