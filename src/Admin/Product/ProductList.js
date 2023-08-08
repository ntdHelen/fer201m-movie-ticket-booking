import DefaultTemplate from "../../template/DefaultTemplate";
import React, { useEffect, useState } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [movies, setMovies] = useState([]); // Danh sách Product (có thể lấy từ API hoặc Redux store)
  // call API: http://localhost:9999/products
  useEffect(() => {
    fetch("http://localhost:9999/movies")
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/movies/" + id, {
        method: "DELETE",
      })
        .then(() => {
          //Reload page
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
      <Row>
        <h3 className="title text-center">MOVIE MANAGEMENT</h3>
      </Row>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Poster</th>
                <th>Movie Name</th>
                <th>Directors</th>
                <th>Genres</th>
                <th>Length</th>
                <th>Description</th>
                <th colSpan={3}>Action</th>
              </tr>
            </thead>

            <tbody>
              {movies.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <img
                    src={product.Poster}
                    className="d-block w-300"
                    style={{
                      height: "250px",
                      width: "200px",
                      objectFit: "cover",
                    }}
                    alt="..."
                  />
                  <td>{product.title}</td>
                  <td>{product.Directors}</td>
                  <td>{product.Genres}</td>
                  <td>{product.length}</td>
                  <td>{product.Description}</td>
                  <td>
                    <Link to={"product/edit/" + movies.id}>Edit</Link>
                  </td>
                  <td>
                    <Link to={"/"} onClick={() => handleDelete(product.id)}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </DefaultTemplate>
  );
};
export default ProductList;
