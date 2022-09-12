import { useState } from "react";
import PageLayout from "../../layout/pageLayout";
import formItems from "./formData.json";

import { Button, Container, Form, FormItem, Header,Input } from "./form-componets";

export default function DynamicForm() {
  /**
   *
   * @param {Object} obj
   * @returns
   */
  const ObjectToArray = (obj) => {
    return Object.keys(obj).map((key) => ({ name: key, ...formItems[key] }));
  };

  let obj = {};

  for (let key in formItems) {
    obj[key] = "";
  }

  const [user, setUser] = useState(obj);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <PageLayout>
      <Container>
        <Header> dynamic form</Header>
        <Form onSubmit={handleSubmit}>
          {ObjectToArray(formItems).map((formItem) => (
            <FormItem key={formItem.name}>
              <label htmlFor={formItem.name}>{formItem.label}</label>
              <Input
                type={formItem.type}
                placeholder={formItem.placeholder}
                name={formItem.name}
                id={formItem.name}
                value={user[formItem.name]}
                onChange={handleChange}
              />
            </FormItem>
          ))}

          <Button onClick={()=>{console.log('button clicked')}}>submit</Button>
        </Form>

        {/* <form onSubmit={handleSubmit}>
          
        </form> */}
      </Container>
    </PageLayout>
  );
}
