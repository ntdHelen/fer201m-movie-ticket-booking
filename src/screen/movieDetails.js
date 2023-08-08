import DefaultTemplate from "../template/DefaultTemplate";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieSeats from "./movieSeats";

const MoviesDetails = () => {
  const [m, setMovies] = useState([]);
  const [isBuying, setIsBuying] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:9999/movies/" + id)
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return (
    <DefaultTemplate className="container" title="">
      <div className="mt-3 mb-3">
        <h1 className="text-center" style={{ fontFamily: "monospace" }}>
          {m.title}
        </h1>
      </div>
      <Container>
        <Row>
          <Col xs={3}>
            <img
              src={m.Poster}
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              alt="..."
            />
          </Col>
          <Col xs={9}>
            <Row>
              <Col xs={2}>
                <p>Release Date: </p>
                <p>Genres: </p>
                <p>Directors: </p>
                <p>Length: </p>
              </Col>
              <Col xs={10}>
                <p>{m.ReleaseDate}</p>
                <p>{m.Genres}</p>
                <p>{m.Directors}</p>
                <p>{m.length}</p>
              </Col>
            </Row>
            <Row>
              <p>{m.Description}</p>
            </Row>
            <Row className="mt-5">
              <Col xs={8}>
                <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + m.Trailer} title={m.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Col>
              <Col xs={4}>
              { !isBuying && <Button
                  // variant="primary"
                  style={{
                    borderRadius: "30px",
                    padding: "2px 20px",
                    backgroundColor: "black",
                  }}
                  onClick={() => setIsBuying(true)}
                >
                  Buy Ticket
                </Button>
              }
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      { isBuying && <MovieSeats/>}
    </DefaultTemplate>
  );
};
export default MoviesDetails;
