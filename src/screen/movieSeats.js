import { Button, Container, Form } from "react-bootstrap";
import "../style/movieSeats.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieSeats = () => {

    const [seats, setSeats] = useState([]);
    const [price, setPrice] = useState(50000);
    const [total, setTotal] = useState(0);
    const [tickets, setTickets] = useState([]);

    const [i, setId] = useState(0);
    const [seat, setSeat] = useState("");
    const [datetime, setDateTime] = useState("");
    const { id } = useParams();
    const [movie, setMovie] = useState("");

    function addSeats(seat) {
        if (seats.includes(seat)) {
            delete seats[seats.indexOf(seat)];
        }
        else
            seats.push(seat)

        setSeats(seats)
        setTotal(price * seats.length);
    }

    useEffect(() => {
        fetch("http://localhost:9999/movies/" + id)
          .then((res) => res.json())
          .then((result) => {
            setMovie(result.title);
            console.log("i= " + id);
          }).catch((err) => {
            console.log(err.message);
          });
      }, []);

    useEffect(() => {
        fetch("http://localhost:9999/tickets")
        .then((resp) => resp.json())
        .then((data) => {
            setTickets(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tickets = {
            i,
            movie,
            seat,
            datetime
        };
        console.log(tickets);

        fetch("http://localhost:9999/tickets", {
            method: "POST",
            headers: { "Content-type": "Application/Json", Charset: "UTF8" },
            body: JSON.stringify(tickets),
        }).then(() => {
            alert("book success");
            navigate("/");
        }).catch((err) => console.log(err.message));
    }



  return (
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="movie-container">
            <label>Pick a datetime:</label>
            <input type="datetime-local" id="movietime" name="movietime" onChange={(e) => setDateTime(e.target.value)}></input>
            <Button type="submit" style={{float: "right"}} variant="success">Confirm</Button>
        </div>

        <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>N/A</small>
            </li>
            <li>
                <div className="seat selected"></div>
                <small>Selected</small>
            </li>
            <li>
                <div class="seat occupied"></div>
                <small>Occupied</small>
            </li>
        </ul>

        <div className="showcase-container">
            <div className="movie-screen">
                <img src='images/screen-thumb.png' alt='screen' />
            </div>

            <div className="row-container">
                <div className="row">
                    <div onClick={() => {addSeats(0); setSeat("A1")}} className="seat">A1</div>
                    <div onClick={() => {addSeats(1); setSeat("A2")}} className="seat">A2</div>
                    <div onClick={() => {addSeats(2); setSeat("A3")}} className="seat">A3</div>
                    <div onClick={() => {addSeats(3); setSeat("A4")}} className="seat">A4</div>
                    <div onClick={() => {addSeats(4); setSeat("A5")}} className="seat">A5</div>
                    <div onClick={() => {addSeats(5); setSeat("A6")}} className="seat">A6</div>
                    <div onClick={() => {addSeats(6); setSeat("A7")}} className="seat">A7</div>
                    <div onClick={() => {addSeats(7); setSeat("A8")}} className="seat">A8</div>
                </div>
                <div className="row">
                    <div onClick={() => {addSeats(8); setSeat("B1")}} className="seat">B1</div>
                    <div onClick={() => {addSeats(9); setSeat("B2")}} className="seat">B2</div>
                    <div onClick={() => {addSeats(10); setSeat("B3")}} className="seat">B3</div>
                    <div onClick={() => {addSeats(11); setSeat("B4")}} className="seat">B4</div>
                    <div onClick={() => {addSeats(12); setSeat("B5")}} className="seat occupied">B5</div>
                    <div onClick={() => {addSeats(13); setSeat("B6")}} className="seat occupied">B6</div>
                    <div onClick={() => {addSeats(14); setSeat("B7")}} className="seat">B7</div>
                    <div onClick={() => {addSeats(15); setSeat("B8")}} className="seat">B8</div>
                </div>
                <div className="row">
                    <div onClick={() => {addSeats(16); setSeat("C1")}} className="seat">C1</div>
                    <div onClick={() => {addSeats(17); setSeat("C2")}} className="seat">C2</div>
                    <div onClick={() => {addSeats(18); setSeat("C3")}} className="seat">C3</div>
                    <div onClick={() => {addSeats(19); setSeat("C4")}} className="seat">C4</div>
                    <div onClick={() => {addSeats(20); setSeat("C5")}} className="seat">C5</div>
                    <div onClick={() => {addSeats(21); setSeat("C6")}} className="seat">C6</div>
                    <div className="seat occupied">C7</div>
                    <div className="seat occupied">C8</div>
                </div>
                <div className="row">
                    <div onClick={() => {addSeats(24); setSeat("D1")}} className="seat">D1</div>
                    <div onClick={() => {addSeats(25); setSeat("D2")}} className="seat">D2</div>
                    <div onClick={() => {addSeats(26); setSeat("D3")}} className="seat">D3</div>
                    <div onClick={() => {addSeats(27); setSeat("D4")}} className="seat">D4</div>
                    <div onClick={() => {addSeats(28); setSeat("D5")}} className="seat occupied">D5</div>
                    <div onClick={() => {addSeats(29); setSeat("D6")}} className="seat occupied">D6</div>
                    <div onClick={() => {addSeats(30); setSeat("D7")}} className="seat">D7</div>
                    <div onClick={() => {addSeats(31); setSeat("D8")}} className="seat">D8</div>
                </div>
                <div className="row">
                    <div onClick={() => {addSeats(32); setSeat("E1")}} className="seat">E1</div>
                    <div onClick={() => {addSeats(33); setSeat("E2")}} className="seat">E2</div>
                    <div onClick={() => {addSeats(34); setSeat("E3")}} className="seat">E3</div>
                    <div onClick={() => {addSeats(35); setSeat("E4")}} className="seat">E4</div>
                    <div onClick={() => {addSeats(36); setSeat("E5")}} className="seat">E5</div>
                    <div onClick={() => {addSeats(37); setSeat("E6")}} className="seat">E6</div>
                    <div onClick={() => {addSeats(38); setSeat("E7")}} className="seat">E7</div>
                    <div onClick={() => {addSeats(39); setSeat("E8")}} className="seat">E8</div>
                </div>
                <h5 className='subtitle'>GOLD </h5>
                <div className="row">
                    <div onClick={() => {addSeats(40); setSeat("F1")}} className="seat">F1</div>
                    <div onClick={() => {addSeats(41); setSeat("F2")}} className="seat occupied">F2</div>
                    <div onClick={() => {addSeats(42); setSeat("F3")}} className="seat">F3</div>
                    <div onClick={() => {addSeats(43); setSeat("F4")}} className="seat">F4</div>
                    <div onClick={() => {addSeats(44); setSeat("F5")}} className="seat">F5</div>
                    <div onClick={() => {addSeats(45); setSeat("F6")}} className="seat occupied">F6</div>
                    <div onClick={() => {addSeats(46); setSeat("F7")}} className="seat">F7</div>
                    <div onClick={() => {addSeats(47); setSeat("F8")}} className="seat">F8</div>
                </div>
                <div className="row">
                    <div onClick={() => {addSeats(48); setSeat("G1")}} className="seat">G1</div>
                    <div onClick={() => {addSeats(49); setSeat("G2")}} className="seat">G2</div>
                    <div onClick={() => {addSeats(50); setSeat("G3")}} className="seat">G3</div>
                    <div onClick={() => {addSeats(51); setSeat("G4")}} className="seat">G4</div>
                    <div className="seat occupied">G5</div>
                    <div className="seat occupied">G6</div>
                    <div className="seat occupied">G7</div>
                    <div onClick={() => {addSeats(55); setSeat("G8")}} className="seat">G8</div>
                </div>
                <h5 onClick={() => addSeats(55)} className='subtitle'>DIAMOND </h5>

                <div className="text-wrapper">
                    <p className="text">Selected Seats <span id='count'>{seats.length}</span></p>
                    <p className="text">Total Price<span id="total">{total}</span> VNĐ</p>
                </div>
            </div>

        </div>
      </Form>
  );
};
export default MovieSeats;
