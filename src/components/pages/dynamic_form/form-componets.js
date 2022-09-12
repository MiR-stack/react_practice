import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h2`
  text-transform: capitalize;
  font-size: calc(1rem + 1.2vw);
`;

const Form = styled.form.attrs((props) => {
})`
  margin: 20px 0;
  width:500px;

  @media only screen and (max-width:600px){
    width:95%;
  }
`;

const Button = styled.button.attrs(props => ({
    onclick:props.click,
    type:'submit'
}))`

    border:none;
    background:none;
    padding:10px 15px;
    border:2px solid black;
    text-transform:uppercase;
`

const FormItem = styled.div`

    display:flex;
    align-items:right;
    justify-content:center;
    flex-direction:column;
    gap:5px;
    text-transform:capitalize;
    margin:10px 0;
`

const Input = styled.input`

    padding:5px 10px;
    outline:none;
    border-radius:5px;

`


export { Container, Header, Form ,Button,FormItem,Input };
