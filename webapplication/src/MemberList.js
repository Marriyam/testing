import React, {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import Header from "./header";
function MemberList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getData();
  }
  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
  return (
    <div>
      <Header />
      <div className="col-md-9 offset-md-1">
        <br /> <h1>Member List</h1>
        <br />
        <Table striped bordered hover>
          <br />
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Order Number</th>
              <th>Turn</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.designation}</td>
                <td>{item.order_num}</td>
                <td>{item.Turns}</td>
                <td>
                  <span
                    onClick={() => deleteOperation(item.id)}
                    className="delete"
                  >
                    Delete
                  </span>
                </td>
                <td>
                    <Link to={"update/"+item.id}>
                  <span
                    className="update"
                  >
                    Update
                  </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MemberList;
