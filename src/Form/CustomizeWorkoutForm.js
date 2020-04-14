import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Checkbox } from "@material-ui/core";
import * as Yup from "yup";
import Equipment from "./Equipment";
import TextInput from "../Shared/TextInput";
import TimeInput from "../Shared/TimeInput";

function CustomizeWorkoutForm() {
  let validationSchema = Yup.object().shape({
    rounds: Yup.number()
      .min(1, "Workout must be at least 1 round!")
      .max(100, "Take it easy tough guy, 100 rounds max")
      .required("Please Enter Number of Rounds"),
    roundLength: Yup.string().required("Please Enter a Time"),
    restLength: Yup.string().required("Please Enter a Time"),
  });
  return (
    <div>
      <Formik
        validateOnChange={true}
        initialValues={{
          rounds: 0,
          roundLength: "03:00",
          restLength: "00:30",
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
        {({ values, errors, isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <TextInput name="rounds" label="Number of Rounds" maxLength="3" />
              <br />
              <br />
              <TimeInput
                name="roundLength"
                label="Length of Round"
                setFieldValue={setFieldValue}
              />
              <br />
              <br />
              <TimeInput
                name="restLength"
                label="Length of Rest"
                setFieldValue={setFieldValue}
              />
            </div>

            <Equipment setFieldValue={setFieldValue} />
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
