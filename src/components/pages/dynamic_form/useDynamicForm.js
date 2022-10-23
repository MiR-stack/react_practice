import { useState } from "react";
import formItems from "./formData.json";

function useDynamicForm() {
  const ObjectToArray = () => {
    return Object.keys(formItems).map((key) => ({
      name: key,
      ...formItems[key],
    }));
  };

  function initValue(value) {
    let obj = {};

    for (let key in formItems) {
      obj[key] = value;
    }
    return obj;
  }

  const initUser = initValue("");

  const [user, setUser] = useState(initUser);

  const [error, setError] = useState(initValue(false));

  const [isValid, setValid] = useState(false);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  function handleValidate() {
    const keys = Object.keys(user);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (user[key] === "") {
        setError((err) => {
          return {
            ...err,
            [key]: true,
          };
        });
        setValid(false);
      } else {
        setError((err) => {
          return {
            ...err,
            [key]: false,
          };
        });
      }
    }
    setError((err) => {
      if (!Object.values(err).includes(true)) {
        setValid(true);
      }
      return err;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleValidate();

    if (isValid) {
      setUser(initUser);
      setValid(false);
      console.log(user);
    }
  }

  function handleBlur(e) {
    if (user[e.target.name] === "") {
      setError({ ...error, [e.target.name]: true });
    } else {
      setError({ ...error, [e.target.name]: false });
    }
  }

  return {
    ObjectToArray,
    handleChange,
    handleSubmit,
    user,
    handleBlur,
    error,
  };
}

export default useDynamicForm;
