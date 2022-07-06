import React from "react";

import "./EmailForm.scss";

const EmailForm = () => {
  const [message, setMessage] = React.useState("");
  const [input, setInput] = React.useState("");

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const emailValidation = () => {
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!input || emailRegex.test(input) === false);
  };

  const countryValidation = () => {
    const countryRegex = /.co$/;
    return !input || countryRegex.test(input) === false;
  };

  const onSubmit = () => {
    const isEmailValid = emailValidation();
    const countryValid = countryValidation();

    if (Object.keys(input).length === 0) {
      setMessage("Email adress is required!");
    } else if (!countryValid) {
      setMessage("We are not accepting subscriptions from Colombia emails!");
    } else if (!isEmailValid) {
      setMessage("Email Address not valid!");
    } else {
      setMessage("Thanks for subscribing!");
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={preventDefault}
        action="#"
        id="subscriptionForm"
        className="subscriptionForm"
      >
        <input
          id="email_field"
          type="text"
          className="emailField"
          value={input}
          onChange={inputChangeHandler}
          name="email_field"
          placeholder="Type your email address here…"
        />
        <button className="submitButton" onClick={onSubmit}></button>
        <div className="message">{message}</div>
      </form>
    </div>
  );
};

export default EmailForm;
