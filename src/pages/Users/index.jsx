import React from 'react';
import Table from 'react-bootstrap/Table';

export default function Users() {
  const data = [{
    id: 1, fname: 'Mark', lname: 'Otta', username: '@mdo',
  }];

  const row = data.map((datum) => (
    <tr>
      <td>{datum.id}</td>
      <td>{datum.fname}</td>
      <td>{datum.lname}</td>
      <td>{datum.username}</td>
    </tr>
  ));

  return (
    <div style={{ margin: 10 }}>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </Table>
    </div>
  );
}
