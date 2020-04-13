import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";
import * as Yup from "yup";
import Equipment from "./Equipment";
import TextInput from "../Shared/TextInput";

function CustomizeWorkoutForm() {
  let validationSchema = Yup.object().shape({
    rounds: Yup.number()
      .min(1, "Workout must be at least 1 round!")
      .max(50, "Take it easy tough guy, 100 rounds max")
      .required("Please Enter Number of Rounds"),
    roundLength: Yup.number()
      .min(1, "Minimum 1 minute")
      .max(20, "Rounds cannot be over 20 minutes")
      .required("Please Enter a length for each round"),
    restLength: Yup.number()
      .min(5, "Rest must be at least 5 seconds")
      .max(300, "Rest Cannot be over 5 minutes")
      .required("Please Enter a length for each rest"),
  });
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          rounds: 0,
          roundLength: 0,
          restLength: 0,
          equipment: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          // make async call
          console.log("submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <TextInput name="rounds" label="Number of Rounds" maxLength="3" />
              <br />
              <br />
              <TextInput
                name="roundLength"
                label="Length of Round"
                maxLength="3"
              />
              <br />
              <br />
              <TextInput
                name="restLength"
                label="Length of Rest"
                maxLength="3"
              />
            </div>

            <Equipment />
            <div>
              <Button disabled={isSubmitting} type="submit">
                GET JACKED
              </Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CustomizeWorkoutForm;
