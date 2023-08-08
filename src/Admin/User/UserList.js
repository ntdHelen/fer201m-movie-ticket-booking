import DefaultTemplate from "../../template/DefaultTemplate";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]); // Danh sách Product (có thể lấy từ API hoặc Redux store)

  // call API: http://localhost:9999/products
  useEffect(() => {
    fetch("http://localhost:9999/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []); // Danh sách User (có thể lấy từ API hoặc Redux store)

  const handleDeleteUsers = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/users/" + id, {
        method: "DELETE",
      })
        .then(() => {
          //Roloade page
          alert("Delete success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <DefaultTemplate className="container" title="">
      <Container>
        <Row>
          <h3 className="title text-center">USER MANAGEMENT</h3>
          <Row xs={12}>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th colSpan={2}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.phone}</td>
                      <td>{user.role === 1 ? "admin" : "customer"}</td>
                      <td>
                        <Link to={"user/edit/" + user.id}>Edit</Link>
                      </td>
                      <td>
                        <Link
                          to={"/"}
                          onClick={() => handleDeleteUsers(user.id)}
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Row>
      </Container>
    </DefaultTemplate>
  );
};
export default UserList;
