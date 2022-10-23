import { useState } from "react";
import { deepClone, isEmpty } from "../components/utils/object_utils";

/**
 *
 * @param {Object} init
 * @param {(Function|boolean)} validate
 */

function useForm(init, validate) {
  const [state, setState] = useState(mapInitToState(init));

  function handleChange(e) {
    const { name, value } = e.target;

    const oldState = deepClone(state);
    oldState[name] = { ...oldState[name], value };

    const { error, hasError } = getError();

    if (hasError) {
      oldState[name].error = error[name];
    } else {
      oldState[name].error = "";
    }

    setState(oldState);
  }

  function handleFocuse(e) {
    const { name } = e.target;

    const oldState = deepClone(state);

    if (!oldState[name].touched) {
      oldState[name] = { ...oldState[name], touched: true };
    }
    setState(oldState);
  }

  function handleBlur(e) {
    const { name } = e.target;

    const oldState = deepClone(state);

    const { error, hasError } = getError();

    if (hasError) {
      oldState[name].error = error[name];
    } else {
      oldState[name].error = "";
    }

    setState(oldState);
  }

  function handleSubmit(e, cb) {
    e.preventDefault();

    const oldState = deepClone(state);
    const values = mapStateToKey(state, "value");

    const { error, hasError } = getError();

    if (hasError) {
      Object.keys(error).forEach((name) => {
        oldState[name] = { ...oldState[name], error: error[name] || "" };
      });

      setState(oldState);
    } else {
      cb(values);
      clear();
    }
  }

  function clear() {
    setState(mapInitToState(init, true));
  }

  function getError() {
    let hasError = null,
      error = null;

    const values = mapStateToKey(state, "value");

    if (typeof validate === "boolean") {
      if (validate) {
        hasError = false;
        error = {};
      } else {
        hasError = true;
        error = mapStateToKey(state, "error");
      }

      return { hasError, error };
    } else if (typeof validate === "function") {
      const errorFromCb = validate(values);

      hasError = !isEmpty(errorFromCb);

      if (hasError) {
        error = errorFromCb;
      } else {
        error = {};
      }

      return { hasError, error };
    } else {
      throw new Error("validate must be boolean or function");
    }
  }

  return {
    formState: state,
    error: mapStateToKey(state, "error"),
    handleChange,
    handleFocuse,
    handleBlur,
    handleSubmit,
    clear,
  };
}

export default useForm;

// helper functions

function mapInitToState(obj, clear = false) {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      value: clear ? "" : obj[cur],
      error: "",
      touched: false,
    };

    return acc;
  }, {});
}

function mapStateToKey(obj, key) {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = obj[cur][key];

    return acc;
  }, {});
}
