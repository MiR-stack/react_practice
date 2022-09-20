import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Select = styled.select`
  padding: 5px 15px;
  text-transform: capitalize;
`;

const Search = styled.input`
  padding: 5px 10px;
`;

export default function Filter({ contacts, handleFilter }) {
  const options = ["all", "home", "office"];

  const [filter, setFilter] = useState({ group: "all", search: "" });

  let filteredContacts = contacts;

  if (filter.group !== "all") {
    filteredContacts = contacts.filter(
      (contact) => contact.group === filter.group
    );
  }

  filteredContacts = filteredContacts.filter(
    (contact) =>
      contact.name.includes(filter.search) ||
      contact.email.includes(filter.search)
  );

  function handleChange(e) {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    // console.log(filter);
    // setFilter(filter => {
    //     return { ...filter, [e.target.name]: e.target.value }
    // })
  }

  useEffect(() => {
    handleFilter(filteredContacts);
  }, [contacts,filter]);

  return (
    <Container>
      <Select name="group" onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}{" "}
          </option>
        ))}
      </Select>
      <Search
        type="search"
        name="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    </Container>
  );
}
