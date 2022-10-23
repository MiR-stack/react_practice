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

  const init = ObjectToArray().reduce((acc, cur) => {
    const name = cur.name;
    acc[name] = cur.value || "";

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

  function submit(values) {
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
          {ObjectToArray().map((formItem) => (
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
          ))}

          <Button type="submit">submit</Button>
          <Button type="reset" onClick={clear}>
            reset
          </Button>
        </Form>
      </Container>
    </PageLayout>
  );
}
