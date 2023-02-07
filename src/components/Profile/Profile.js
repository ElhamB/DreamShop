import Button from "../UI/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import parse from "date-fns/parse";


const Profile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min("3", "First name is too short")
        .max(50, "First name is too Long!")
        .required("First name is required"),
      lastName: Yup.string()
        .min("3", "Last name is too short")
        .max(50, "Last name is too Long!")
        .required("Last name is required"),
      birthDate: Yup.date()
        .transform(function (value, originalValue) {
          if (this.isType(value)) {
            return value;
          }
          const result = parse(originalValue, "MM/dd/yyyy", new Date());
          return result;
        })
        .typeError("please enter a valid date")
        .max("2005-01-01", "Your age is not acceptable to buy from the site"),
    }),
  });
  return (
    <form className="row g-3 mb-4 order-container" onSubmit={formik.handleSubmit}>
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">
          First name*
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-danger">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">
          Last name*
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-danger">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">
          Email
        </label>
        <span></span>
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">
          Birth date
        </label>
      </div>
      <div>
        <Button type="submit">Edit Save</Button>
      </div>
    </form>
  );
};

export default Profile;
