import React from "react";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

export default function TextInput(props) {
  const [field, meta] = useField(props.name);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      label={props.label}
      {...field}
      id={props.id}
      helperText={errorText}
      error={!!errorText}
      className="input-control"
      variant="outlined"
      type="number"
      inputProps={{ maxLength: props.maxLength || "40" }}
    />
  );
}
