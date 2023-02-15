import Button from "../UI/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message:""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name is too short!")
        .max(50, "Name is too long!")
        .required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(10, "Your message is too short!")
        .max(250, "Your message is too long!"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...formik.getFieldProps("name")}
          />
    {formik.touched.name && formik.errors.name ? (<div className="text-danger">{formik.errors.name}</div>):null}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...formik.getFieldProps("email")}
          />
     {formik.touched.email && formik.errors.email ? (<div className="text-danger">{formik.errors.email}</div>):null}
        </div>
        <div className="col-md-12">
          <label htmlFor="message" className="form-label">
            Your message
          </label>
          <textarea
            className="form-control"
            id="message"
            {...formik.getFieldProps("message")}
          />
         {formik.touched.message && formik.errors.message ? (<div className="text-danger">{formik.errors.message}</div>):null}
        </div>
        <div className="col-md-12 text-center">
        <Button>send message</Button>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
