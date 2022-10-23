import { useState } from "react";
import Filter from "./filter";
import InputContact from "./InputContact";
import ShowContacts from "./showContacts";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  margin: 50px auto;
  
  @media only screen and (max-width:600px){
    width:95%;
  }
`;

export default function ContactList() {
  const [contacts, setContacts] = useState([
    {
      name: "jhon doe",
      email: "jhon@gmail.com",
      group: "office",
    },
    {
      name: "rahim",
      email: "rahim@gmail.com",
      group: "office",
    },
    {
      name: "anis ahmed",
      email: "anis@gmail.com",
      group: "home",
    },
  ]);
  const [filteredContacts, setFilterdContacts] = useState(contacts);

  const handleContact = (contact) => {
    setContacts([contact, ...contacts]);
  };
  const handleFilter = (contacts) => {
    setFilterdContacts(contacts);
  };

  return (
    <Container>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contact App</h1>
      <InputContact submit={handleContact} />
      <Filter contacts={contacts} handleFilter={handleFilter} />
      <ShowContacts contacts={filteredContacts} />
    </Container>
  );
}
