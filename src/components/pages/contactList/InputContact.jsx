import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.label`
  text-transform: capitalize;
`;
const Input = styled.input`
  padding: 10px 15px;
  outline: none;
  width: 100%;
  margin-top: 10px;
`;

const Select = styled.select`
  padding: 10px 15px;
  text-transform: capitalize;
  cursor: pointer;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  text-transform: capitalize;
  background: #00796b;
  margin: 20px auto;
  outline: none;
  border: none;
  color: #e0f2f1;
  cursor: pointer;
  font-weight: 700;
`;

export default function InputContact({ submit }) {
  const inputs = [
    {
      name: "name",
      type: "text",
      placeholder: `Enter your name`,
    },
    {
      name: "email",
      type: "email",
      placeholder: `Enter your email`,
    },
  ];

  const options = [
    { name: "select group", value: "" },
    { name: "home", value: "home" },
    { name: "office", value: "office" },
  ];

  const defaultContact = inputs.reduce(
    (acc, cur) => {
      acc[cur.name] = "";
      return acc;
    },
    { group: "" }
  );

  const [contact, setContact] = useState({ ...defaultContact });

  function handleChange(e) {
    setContact({ ...contact, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submit(contact);
    //  setContact(defaultContact);
  }

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <Wrapper key={input.name}>
          <Label htmlFor={input.name}>{input.name} : </Label>
          <Input
            type={input.type}
            id={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={handleChange}
            required
          />
        </Wrapper>
      ))}
      <div>
        <Label htmlFor="group">group : </Label>
        <br />
        <Select
          name="group"
          id="group"
          value={contact.group}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.name}{" "}
            </option>
          ))}
        </Select>
      </div>
      <Button type="submit">create new contact</Button>
    </form>
  );
}

InputContact.propTypes = {
  submit: PropTypes.func.isRequired,
};
