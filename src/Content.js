import "./Content.scss";

import EmailForm from "./EmailForm";

import Icons from "./Icons";

import Terms from "./Terms";

const Content = () => (
  <div className="row content">
    <div className="form">
      <h1 className="heading">Subscribe to newsletter</h1>
      <h2 className="subheading">
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </h2>
      <EmailForm />
      <Terms />
      <div className="line"></div>
      <Icons />
    </div>
  </div>
);

export default Content;
