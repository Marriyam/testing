// import React, {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";
// import Header from "./header";

// const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const history = useNavigate();
//     return <Component history={history} {...props} />;
//   };
//   return Wrapper;
// };
// function UpdateMember(props) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       let result = await fetch(
//         "http://127.0.0.1:8000/api/member/" + props.match.params.id
//       );


// import React, {useEffect, useState} from "react";
// import {useNavigate, useParams} from "react-router-dom";
// import Header from "./header";

// function UpdateMember() {
//   const [Name, setName] = useState('');
//   const [Email, setEmail] = useState('');
//   const [Designation, setDesignation] = useState('');
//   const [OrderNum, setOrderNum] = useState('');
//   const { id } = useParams();
//   const history = useNavigate();
  
//   useEffect(() => {
//     async function fetchData() {
//     //   let result = await fetch(`http://127.0.0.1:8000/api/member/${id}`);
//     //   result = await result.json();
//     //   setData(result);
//     let item ={Name, Email, Designation, OrderNum}

//     let result = await fetch("http://127.0.0.1:8000/api/addMember", {
//       //this will fetch the data from the backend api
//       method: "PUT", //this will send the data to the backend api
//       body: JSON.stringify(item), //this will convert the data into stringed json format
//       headers: {
//         "Content-Type": "application/json", //this will tell the backend api that the data is in json format
//         Accept: "application/json", //this will tell the backend api that the data to eb accepted is in json format
//       },
//     });

//     result = await result.json();
//     // console.warn("result", result);
//     localStorage.setItem("user-info", JSON.stringify(result));
//         alert("Data has been updated");
//     }
//     fetchData();
//   }, []);
  
//   return (
//     <>
//         <Header />
//         <br /><br />
//     <div className="container">
//         <div className="row">
//             <div className="col-md-6">
//                 <div className="card">
//                     <div className="card-header">
//                     <br /><h2>Updating Member Page</h2><br />
//                     <input type="text" defaultValue={Name} onChange={(e) => setName(e.target.value)}/>
//                     <br />
//                     <br />
//                     <input type="text" defaultValue={Email} onChange={(e) => setEmail(e.target.value)}/>
//                     <br />
//                     <br />
//                     <input type="text" defaultValue={Designation} onChange={(e) => setDesignation(e.target.value)}/>
//                     <br />
//                     <br />
//                     <input type="text" defaultValue={OrderNum} onChange={(e) => setOrderNum(e.target.value)}/>
//                     <br />
//                     <br />
//                     <button onClick={UpdateMember}>Update Member</button><br />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   );
//   }
// export default UpdateMember;

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Header from "./header";

function UpdateMember(props) {
  
  console.log('props..........', props);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [order_num, setOrderNum] = useState("");
  const { id } = useParams();
  console.log('props..........', id);

  useEffect(() => {
    async function fetchData() {
      let result = await fetch(`http://127.0.0.1:8000/api/members/${id}`);
      result = await result.json();
      setName(result.name);
      setEmail(result.email);
      setDesignation(result.designation);
      setOrderNum(result.order_num);
    }
    fetchData();
  }, [id]);

  const handleUpdateMember = async () => {
    const data = { name, email, designation, order_num };

    let result = await fetch(
      `http://127.0.0.1:8000/api/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        
      }
    );
    result = await result.json();
    console.log("result", result);
    alert("Data has been updated");
  };

  return (

    <div>
      <Header />
      <br />
      <h1>Update Member</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder={name}
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder={email}
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDesignation(e.target.value)}
          placeholder={designation}
        />
        <br />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setOrderNum(e.target.value)}
          placeholder={order_num}
        />
        <br />
        <button onClick={handleUpdateMember} className="btn btn-primary">
          Update Member
        </button>
      </div>
    </div>
  );
}

export default UpdateMember;
