import styled from "styled-components";

const Table = styled.table`
  margin-top: 20px;
  width:100%;
  text-align:left;
`;

function ShowContacts({ contacts }) {
  return (
    <Table>
      <thead style={{textTransform:'capitalize'}}>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>group</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr key={index}>
            <td style={{textTransform:'capitalize'}}>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.group}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ShowContacts;
