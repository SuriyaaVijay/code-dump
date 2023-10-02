import React, { useState } from "react";

const CalltoActionSection = () => {
  const [email, setEmail] = useState(""); // State to track the email input value

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic here

    // After handling the form submission logic, clear the email input
    setEmail("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email state as the user types
  };

  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you need more tips?</h2>
              <p>Sign up free and get the latest tips.</p>
              <form className="form-section" onSubmit={handleSubmit}>
                <input
                  placeholder="Your Email..."
                  name="email"
                  type="email"
                  value={email} // Binding the input value to the email state
                  onChange={handleEmailChange} // Handle input change
                />
                <input value="Yes. I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
