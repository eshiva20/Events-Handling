import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [contact, setContact] = useState("");
  const [contactErr, setContactErr] = useState(false);
  const[btnBg,setBtnBg]=useState("#67bdfc")

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var contactRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
  var nameRegex = /^[A-Za-z]+$/;

  const getEmail = (e) => {
    setEmail(e.target.value);
    if (emailRegex.test(email)) {
      setEmailErr(false);
    } else {
      setEmailErr(true);
    }
  };

  const getName = (e) => {
    setName(e.target.value);
    if (name.length < 2 || name.length > 9 || !nameRegex.test(name)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  };

  const getContact = (e) => {
    setContact(e.target.value);

    if (contact.length != 9 || isNaN(contact)|| contactRegex.test(contact)) {
      setContactErr(true);
    } else {
      setContactErr(false);
    }
  };
  console.log(contact.length);

  function validate() {
    if (name && email && contact && !emailErr && !nameErr && !contactErr) {
      setBtnBg("#2cef52")
      alert("form Submitted");
      setEmail("");
      setName("");
      setContact("");
      
    } else {
      alert("enter complete Details");
    }
   
  }

  return (
    <>
      <div className="main">
        <input
          placeholder="Enter Your Name"
          onChange={(e) => getName(e)}
          value={name}
          type="text"
        />
        {nameErr && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Name length should be between 3 to 10
          </p>
        )}
        <input
          placeholder="Enter Your email"
          onChange={getEmail}
          value={email}
          type="text"
        />
        {emailErr && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Enter Correct Email id
          </p>
        )}
        <input
          placeholder="Enter Your Contact Number"
          onChange={getContact}
          type="text"
          value={contact}
        />
        {contactErr && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Enter 10Digit Correct Mobile Number
          </p>
        )}
        <button style={{backgroundColor:`${btnBg}`}} onClick={validate} className="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default Form;
