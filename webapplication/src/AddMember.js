import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "./header";

function AddMember() {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      Navigate("/addMember");
    }
  }, []);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Designation, setDesignation] = useState("");
  const [OrderNum, setOrderNumber] = useState("");
  const Navigate = useNavigate(); //Navigate function is extracted from the useNavigate hook

  async function addMember() {
    let item = { Name, Email, Designation, OrderNum };

    let response = await fetch("http://127.0.0.1:8000/api/addMember", {
      //this will fetch the data from the backend api
      method: "POST", //this will send the data to the backend api
      body: JSON.stringify(item), //this will convert the data into stringed json format
      headers: {
        "Content-Type": "application/json", //this will tell the backend api that the data is in json format
        Accept: "application/json", //this will tell the backend api that the data to eb accepted is in json format
      },
    });

    let result = await response.json();
    // console.warn("result", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    alert("Data has been saved");
    console.log("Data has been saved", result);
  }
  return (
    <div>
      <Header />
      <br />
      <h1>Add Member</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDesignation(e.target.value)}
          placeholder="Enter Designation"
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Enter Order Number"
        />
        <br />
        <button onClick={addMember} className="btn btn-primary">
          Add Member
        </button>
      </div>
    </div>
  );
}
export default AddMember;
