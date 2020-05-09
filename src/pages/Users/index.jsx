import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { url } from '../../config/env';
import { getUsers } from '../../api/Endpoints.json';

export default function Users() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [errors, setErrors] = useState(null);
  const [data, setData] = useState([]);

  const row = data.map((datum) => (
    <tr>
      <td>{datum.uid}</td>
      <td>{datum.name}</td>
      <td>{datum.email}</td>
      <td>{datum.cid}</td>
    </tr>
  ));

  useEffect(() => {
    fetch(
      url + getUsers,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result !== null) setData(result);
          else setData([]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setErrors(error);
        },
      );
  }, []);

  return (
    <div style={{ margin: 10 }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course ID</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </Table>
    </div>
  );
}
