import { Card, Button } from "react-bootstrap";
import DefaultTemplate from "../template/DefaultTemplate";
import { useEffect, useState } from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  // const [filterMovie, setFilterMovies] = use([]);
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    console.log(lowerCase);
    setInputText(lowerCase);
  };

  useEffect(() => {
    fetch("http://localhost:9999/movies")
      .then((res) => res.json())
      .then((result) => {
        setMovies(result);
      });
  }, []);

  return (
    <DefaultTemplate className="container-fluid" title="">
      <div className="container">
        <label>Search </label>
        <div className="search">
          <input
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            label="Search"
          />
        </div>
      </div>

      <div className="mt-3 mb-3">
        <h1 className="text-center" style={{ fontFamily: "monospace" }}>
          ALL MOVIES
        </h1>
      </div>

      <div className="container">
        <div className="row">
          {movies
            .filter((m) => {
              if ((inputText === "")) return true;
              return m.title.toLowerCase().includes(inputText);
            })
            .map((m) => (
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
            ))}
        </div>
      </div>
      <hr />
    </DefaultTemplate>
  );
};
export default AllMovies;
