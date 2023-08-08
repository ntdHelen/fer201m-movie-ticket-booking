import DefaultTemplate from "../../template/DefaultTemplate";
import { Container, Image } from "react-bootstrap";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';

// Component's Base CSS
import '../DataTable/DataTable.css';

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

const PosterValueResolver = (value) => {
  return (
    <img
      src={value.Poster}
      className="d-block w-300"
      style={{ height: "250px", width: "200px", objectFit: "cover" }}
      alt="..."
    />
  )
}

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a)),
};

const getSorter = (data) => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);
  
  if (data.field === 'id') {
    sorter = data.direction === 'ascending' ?
      SORTERS.NUMBER_ASCENDING(mapper) : SORTERS.NUMBER_DESCENDING(mapper);
  } else {
    sorter = data.direction === 'ascending' ?
      SORTERS.STRING_ASCENDING(mapper) : SORTERS.STRING_DESCENDING(mapper);
  }

  return sorter;
};

let tickets = []

let movieKeys = {
  "title": "",
  "Genres": "",
  "Directors": "",
  "length": "",
  "Description": "",
  "Poster": "",
}

let count = 0;

const service = {
  fetchItems: async (payload) => {
    await fetch("http://localhost:9999/tickets")
      .then((resp) => resp.json())
      .then((data) => {
        tickets = data;
        count = tickets.length;
      })
      .catch((err) => {
        console.log(err.message);
      });

    let result = Array.from(tickets);
    result = result.sort(getSorter(payload.sort));
    return Promise.resolve(result);
  },
  create: async (movie) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(movie)
    };

    await fetch("http://localhost:9999/tickets", requestOptions)
    .then(response => response.json())
    .then(result => {
      tickets.push(result);
      count = tickets.length;
    })
    .catch(error => console.log('error', error));

    return Promise.resolve(movie);
  },
  update: async (movie) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: JSON.stringify(movie)
    };

    await fetch("http://localhost:9999/tickets/" + movie.id, requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
    })
    .catch(error => console.log('error', error));

    const oldMovie = tickets.find(t => t.id === movie.id);

    for (const [key, value] of Object.entries(oldMovie)) {
      oldMovie[key] = movie[key];
    }

    return Promise.resolve(movie);
  },
  delete: async (movie) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    await fetch("http://localhost:9999/tickets/" + movie.id, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log('error', error));

    const oldMovie = tickets.find(t => t.id === movie.id);
    tickets = tickets.filter(t => t.id !== oldMovie.id);

    return Promise.resolve(movie);
  },
};

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const Ticket = () => {
  return (
      <Row>
          <CRUDTable
            caption=""
            fetchItems={payload => service.fetchItems(payload)}
          >
            <Fields>
              <Field
                name="id"
                label="Id"
                hideInCreateForm
                readOnly
              />
              <Field
                name="movie"
                label="Movie Name"
                placeholder="Movie Name"
              />
              <Field
                name="seat"
                label="Seats"
                placeholder="Seats"
              />
              <Field
                name="datetime"
                label="Datetime"
                placeholder="Datetime"
              />
            </Fields>
            <CreateForm
              title="Ticket Creation"
              message="Add a new ticket!"
              trigger="Add"
              onSubmit={movie => service.create(movie)}
              submitText="Add"
              validate={(values) => {
                const errors = {};
                
                for (const [key, value] of Object.entries(movieKeys)) {
                  if (!values[key]) {
                    errors[key] = `Please, provide ${key}`;
                  }
                }

                return errors;
              }}
            />

            <UpdateForm
              title="Ticket Edit Process"
              message="Edit ticket"
              trigger="Edit"
              onSubmit={movie => service.update(movie)}
              submitText="Edit"
              validate={(values) => {
                const errors = {};

                for (const [key, value] of Object.entries(movieKeys)) {
                  if (!values[key]) {
                    errors[key] = `Please, provide ${key}`;
                  }
                }

                return errors;
              }}
            />

            <DeleteForm
              title="Ticket Delete Process"
              message="Are you sure you want to delete the ticket?"
              trigger="Delete"
              onSubmit={movie => service.delete(movie)}
              submitText="Delete"
              validate={(values) => {
                const errors = {};
                return errors;
              }}
            />
          </CRUDTable>
      </Row>
  );
}

export default Ticket;
