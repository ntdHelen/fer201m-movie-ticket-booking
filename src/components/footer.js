import React from "react";
import {Bandaid, Clock, EnvelopeAt, Facebook, Instagram, PhoneFlip, Telephone, TicketPerforated, Youtube} from 'react-bootstrap-icons';
export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase"><TicketPerforated/> Movie Ticket Web </h5>
            <p>
            Where you can order tickets for a movie.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase"><Bandaid/> Customer care</h5>
            <ul className="list-unstyled" style={{textAlign: "left", paddingLeft : "45px"}}>
              <li>
                <p className="mb-0"><Telephone/> Hotline: 1900 6017(CGV)</p>
              </li>
              <li>
                <p className="mb-0"><Clock/> Working hours</p>
              </li>
              <li>
              <p className="mb-0"><EnvelopeAt/> Email: help@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase"><PhoneFlip/> Connect with us</h5>
            <ul className="list-unstyled" style={{textAlign: "left", paddingLeft : "45px"}}>
              <li>
                <a href="#!" className="mb-0" style={{textDecoration: "none", color : 'black'}}><Facebook/> MovieTicket_G03</a>
              </li>
              <li>
                <a href="#!" className="mb-0" style={{textDecoration: "none", color : 'black'}}><Instagram/> MovieTicket_G03</a>
              </li>
              <li>
                <a href="#!" className="mb-0" style={{textDecoration: "none", color : 'black'}}><Youtube/> MovieTicket_G03</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2023 Copyright: SE1721 - Group 03
      </div>
    </footer>
  );
}
