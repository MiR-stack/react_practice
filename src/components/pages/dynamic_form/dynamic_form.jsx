import useForm from "../../../hooks/useForm";
import PageLayout from "../../layout/pageLayout";
import formData from "./formData.json";

import {
  Button,
  Container,
  Error,
  Form,
  FormItem,
  Header,
  Input,
} from "./form-componets";

export default function DynamicForm() {
  function ObjectToArray() {
    return Object.keys(formData).reduce((acc, cur) => {
      acc.push({ name: cur, ...formData[cur] });

      return acc;
    }, []);
  }

  let init = ObjectToArray().reduce((acc, cur) => {
    const name = cur.name;

    if (typeof cur.value === "boolean") {
      acc[name] = cur.value;
    } else {
      acc[name] = cur.value || "";
    }

    return acc;
  }, {});


  function validate(values) {
    return Object.keys(values).reduce((acc, curr) => {
      if (!values[curr] && formData[curr].error) {
        acc[curr] = formData[curr].error;
      }

      return acc;
    }, {});
  }

  const {
    formState,
    handleChange,
    handleFocuse,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm(init, validate);

  function submit(values, error) {
    console.log(values);
  }

  return (
    <PageLayout>
      <Container>
        <Header> dynamic form</Header>
        <Form
          onSubmit={(e) => {
            handleSubmit(e, submit);
          }}
        >
          {/* {ObjectToArray().map((formItem) => (
            <FormItem key={formItem.name}>
              <label htmlFor={formItem.name}>{formItem.label}</label>
              <div>
                <Input
                  type={formItem.type}
                  placeholder={formItem.placeholder}
                  name={formItem.name}
                  id={formItem.name}
                  value={formState[formItem.name].value}
                  error={formState[formItem.name].error}
                  onChange={handleChange}
                  onFocus={handleFocuse}
                  onBlur={handleBlur}
                />
                <Error error={formState[formItem.name].error}>
                  {formState[formItem.name].error}{" "}
                </Error>
              </div>
            </FormItem>
          ))} */}

          {ObjectToArray().map((input) => {
            if (input.type === "checkbox") {
              return (
                <FormItem key={input.name}>
                  <div>
                    <input
                      type={input.type}
                      name={input.name}
                      id={input.name}
                      checked={formState[input.name].value}
                      onChange={handleChange}
                      onFocus={handleFocuse}
                      onBlur={handleBlur}
                    />
                    <label htmlFor={input.name}>{input.label} </label>
                  </div>
                  <Error error={formState[input.name].error}>
                    {formState[input.name].error}{" "}
                  </Error>
                </FormItem>
              );
            } else if (input.type === "select") {
              return (
                <FormItem key={input.name}>
                  <select
                    name={input.name}
                    id={input.name}
                    value={formState[input.name].value}
                    error={formState[input.name].error}
                    onFocus={handleFocuse}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {Object.keys(input.options).map((option) => (
                      <option key={option} value={option}>
                        {input.options[option]}{" "}
                      </option>
                    ))}
                  </select>
                  <Error error={formState[input.name].error}>
                    {formState[input.name].error}{" "}
                  </Error>
                </FormItem>
              );
            } else {
              return (
                <FormItem key={input.name}>
                  <label htmlFor={input.name}>{input.label}</label>
                  <div>
                    <Input
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                      id={input.name}
                      value={formState[input.name].value}
                      error={formState[input.name].error}
                      onChange={handleChange}
                      onFocus={handleFocuse}
                      onBlur={handleBlur}
                    />
                    <Error error={formState[input.name].error}>
                      {formState[input.name].error}{" "}
                    </Error>
                  </div>
                </FormItem>
              );
            }
          })}

          <Button type="submit">submit</Button>
          <Button type="reset" onClick={clear}>
            reset
          </Button>
        </Form>
      </Container>
    </PageLayout>
  );
}
