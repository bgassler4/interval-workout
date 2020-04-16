import React from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import * as Yup from "yup";
import TextInput from "../Shared/TextInput";
import TimeInput from "../Shared/TimeInput";
import { Equipment } from "../Constants/Constants";
import CheckboxGroup from "../Shared/CheckboxGroup";
import { useDispatch } from "react-redux";
import { updateWorkoutSpecs } from "../actions";
import "../Styles/WorkoutForm.css";

function CustomizeWorkoutForm() {
  const dispatch = useDispatch();

  let validationSchema = Yup.object().shape({
    rounds: Yup.number()
      .min(1, "Workout must be at least 1 round!")
      .max(100, "Take it easy tough guy, 100 rounds max")
      .required("Please Enter Number of Rounds"),
    roundLength: Yup.string().required("Please Enter a Time"),
    restLength: Yup.string().required("Please Enter a Time"),
  });

  function createWorkout(data) {
    dispatch(updateWorkoutSpecs(data));
  }

  return (
    <div className="WorkoutForm">
      <Formik
        validateOnChange={true}
        initialValues={{
          rounds: 12,
          roundLength: "03:00",
          restLength: "00:30",
          equipment: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          createWorkout(data);
          console.log("submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <TextInput name="rounds" label="Number of Rounds" />
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

            <CheckboxGroup
              setFieldValue={setFieldValue}
              options={Equipment}
              name="equipment"
              label="Equipment"
            />
            <div>
              <Button
                disabled={isSubmitting}
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
              >
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
