import { useState, useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const initailValue = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhone: "",
    userMessage: "",
  };
  const [formValues, setFormValues] = useState(initailValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("submited");
    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegx = /\d{3}\s?\d{3}\s?\d{3}/;
    const nameRegx = /\w{5,15}/;
    if (!values.userName) {
      errors.nameError = "Username is Required";
    } else if (!nameRegx.test(values.userName)) {
      errors.nameError = "Username Must Be Between 5,15 Characters";
    }
    if (!values.userEmail) {
      errors.emailError = "Email is Required";
    } else if (!emailRegx.test(values.userEmail)) {
      errors.emailError = "Email is Invalid";
    }
    if (!values.userPassword) {
      errors.passError = "Password is Required";
    } else if (
      values.userPassword.length < 8 ||
      values.userPassword.length > 20
    ) {
      errors.passError =
        "Password Must Be Larger Than 8 Characters And Less Than 20 Character";
    }
    if (!values.userPhone) {
      errors.phoneError = "Phone is Required";
    } else if (!phoneRegx.test(values.userPhone)) {
      errors.phoneError = "Phone  Must Be 9 Digits";
    }
    if (!values.userMessage) {
      errors.messError = "Message is Required";
    } else if (values.userMessage.length < 50) {
      errors.messError = "Message Must Be Larger Than 50 Characters";
    }
    return errors;
  };
  return (
    <div className="section">
      <h2 className="sub-head text-center">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-full lg:w-1/2 mx-auto lg:shadow-xl p-4"
      >
        <div className="box">
          <label htmlFor="name" className="label">
            Your Name
          </label>
          <input
            className="input"
            type="text"
            name="userName"
            id="name"
            placeholder="Enter Your Name...."
            value={formValues.userName}
            onChange={handleChange}
          />
          <span className="error">{formErrors.nameError} </span>
        </div>
        <div className="box">
          <label htmlFor="email" className="label">
            Your Email:
          </label>
          <input
            className="input"
            type="text"
            name="userEmail"
            id="email"
            placeholder="Ex:example12@gmail.com"
            value={formValues.userEmail}
            onChange={handleChange}
          />
          <span className="error">{formErrors.emailError}</span>
        </div>
        <div className="box">
          <label htmlFor="pass" className="label">
            Your Password:
          </label>
          <input
            className="input"
            type="password"
            name="userPassword"
            id="pass"
            placeholder="Enter Your Password...."
            value={formValues.userPassword}
            onChange={handleChange}
          />
        </div>

        <span className="error">{formErrors.passError}</span>
        <div className="box">
          <label htmlFor="num" className="label">
            Your Number
          </label>
          <input
            className="input"
            type="tel"
            name="userPhone"
            id="num"
            placeholder="Ex:123 456 789"
            value={formValues.userPhone}
            onChange={handleChange}
          />
          <span className="error">{formErrors.phoneError}</span>
        </div>
        <div className="box ">
          <label htmlFor="mess" className="label">
            Your Message
          </label>
          <div className="relative">
            <textarea
              className="input h-[200px] w-full resize-none"
              name="userMessage"
              id="mess"
              placeholder="Enter Your Message...."
              value={formValues.userMessage}
              onChange={handleChange}
            ></textarea>
            {formValues.userMessage.length < 50 && (
              <span className="absolute bottom-4 right-4 text-sm text-gray-600">
                {formValues.userMessage.length}/50
              </span>
            )}
          </div>
          <span className="error">{formErrors.messError}</span>
        </div>
        <button type="submit" className="bg-orange-600 mainBtn mt-0">
          Send Data
        </button>
      </form>
    </div>
  );
};

export default Contact;
