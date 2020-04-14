import React from "react";
import MaskedInput from "react-text-mask";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

function TimeMask(props) {
  const { inputRef, ...other } = props;
  let mask = [/[0-5]/, /\d/, ":", /[0-5]/, /\d/];

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
      placeholder={props.placeholder}
      placeholderChar={"\u2000"}
    />
  );
}

export default function TimeInput(props) {
  const [field, meta] = useField(props.name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  function handleChange(event) {
    props.setFieldValue(props.name, event.target.value);
  }

  return (
    <TextField
      {...field}
      helperText={errorText}
      error={!!errorText}
      label={props.label}
      onChange={handleChange}
      className="input-control"
      variant="outlined"
      InputProps={{
        inputComponent: TimeMask,
        placeholder: props.placeholder,
        name: props.name,
      }}
    />
  );
}
