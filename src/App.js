import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./screen/homepage";
import Header from "./components/header";
import Footer from "./components/footer";
import AllMovies from "./screen/allMovies";
import MoviesDetails from "./screen/movieDetails";
import ProductList from "./Admin/Product/ProductList";
import DashBoard from "./Admin/User/Dashboard";
import UserList from "./Admin/User/UserList";
import Profile from "./User/Profile/Profile";
import Box from "./User/Ticket/Box";
import Ticket from "./User/Ticket/Ticket";
import SignIn from "./screen/signIn";
import SignUp from "./screen/signUp";
import MovieSeats from "./screen/movieSeats";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Movies/All" element={<AllMovies/>}></Route>
          <Route path="/Movies/Detail/:id" element={<MoviesDetails/>}></Route>
          <Route path="/Admin/movieManagement" element={<ProductList/>}></Route>
          <Route path="/Admin/Dashboard" element={<DashBoard/>}></Route>
          <Route path="/Admin/userManagement" element={<UserList/>}></Route>
          <Route path="/User/Profile" element={<Profile/>}></Route>
          {/* <Route path="/Box" element={<Box/>}></Route> */}
          {/* <Route path="/bookTicket/:id" element={<MovieSeats/>}></Route> */}
          {/* <Route path="/Ticket" element={<Ticket/>}></Route> */}
          <Route path="/SignIn" element={<SignIn/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
