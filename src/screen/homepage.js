import { Carousel, Card, Button, Row, Col } from "react-bootstrap";
import DefaultTemplate from "../template/DefaultTemplate";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/movies")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return (
    <DefaultTemplate className="container-fluid" title="">
      <div className="mt-3 mb-3">
        <h1 className="text-center" style={{ fontFamily: "monospace" }}>
          MOVIE TICKET WEB G-03 <br />
          <i style={{ fontSize: "15px" }}>
            Where you can order tickets for a movie.
          </i>
        </h1>
      </div>

      <div>
        <Carousel>
          {movies.map((m) => (
            <Carousel.Item key={m.id}>
              <a href={"/Movies/Detail/" + m.id}>
                <img
                  src={m.Slider}
                  className="d-block w-100"
                  style={{ height: "500px", objectFit: "cover" }}
                  alt="..."
                />
              </a>
              <Carousel.Caption>
                <h5>{m.title}</h5>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="mt-5">
        <h1 className="text-center" style={{ fontFamily: "monospace" }}>
          MOVIE SELECTION
        </h1>
      </div>

      <div className="container">
        <div className="row">
          {movies.map((m) => (
            <div className="col-3">
            <Card
              key={m.id}
              style={{ width: "18rem", padding: "10px", margin: "18px" }}
            >
              <Card.Img
                variant="top"
                style={{ height: "400px", objectFit: "cover" }}
                src={m.Poster}
              />
              <Card.Body>
                <Card.Title style={{ height: "50px" }}>{m.title}</Card.Title>
                <Card.Text></Card.Text>
                <Button
                  style={{
                    borderRadius: "30px",
                    padding: "2px 20px",
                    backgroundColor: "black",
                  }}
                  href={"/Movies/Detail/" + m.id}
                >
                  View Detail
                </Button>
              </Card.Body>
            </Card>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </DefaultTemplate>
  );
};
export default Home;
