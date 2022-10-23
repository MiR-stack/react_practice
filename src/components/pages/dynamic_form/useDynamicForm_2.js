import { useState } from "react";
import formItems from "./formData.json";

const useDynamicForm_O2 = () => {
  const ObjectToArray = () => {
    return Object.keys(formItems).map((key) => ({
      name: key,
      ...formItems[key],
    }));
  };

  const init = Object.keys(formItems).reduce((acc, cur) => {
    acc[cur] = {
      value: "",
      error: "",
      focus: false,
    };
    return acc;
  }, {});

  const [state, setState] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: { ...state[name], value } });
  };
  const handleBlur = () => {};

  const handleSubmit = () => {};

  return {
    ObjectToArray,
    handleChange,
    handleSubmit,
    handleBlur,
    state,
  };
};

export default useDynamicForm_O2;

