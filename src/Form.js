import React, { useState } from 'react';
import "./Form.css"

function Form() {

  /* Define constants */
  const agreement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci ligula. Vivamus finibus sem vitae lorem aliquet, eget hendrerit velit mattis. Nulla porttitor metus id urna placerat blandit. Sed vel ultricies dui, sed vestibulum eros. Etiam non ipsum at erat porta convallis. Phasellus ultrices nisl sed tincidunt ultricies. Nullam eget lectus ac tellus congue hendrerit. Proin luctus nec diam vitae luctus. Suspendisse commodo enim at felis interdum sagittis. Praesent commodo feugiat justo, et lobortis ante luctus vitae. In orci odio, auctor vitae dignissim vitae, mattis sagittis arcu. Morbi tristique orci a tristique condimentum.";
  const demographics = [ "Name", "Email", "Address", "City", "Country"];
  const medical = [ "Family history", "Medications", "Diseases", "Allergies"];
  const [input, setInputs] = useState({})

  /* Handle any sort of input into the form */
  function inputChange (event, field) {
    const inputCopy = {...input};
    if (event.target.type === "checkbox") {
      inputCopy["checked"] = event.target.checked;
    } else {
      inputCopy[field] = event.target.value;
    }
    setInputs(inputCopy);
  }

  /* Handle submission of the form */
  function submitForm(event) {
    event.preventDefault()
    if (!input["checked"]) {
      alert("accept the terms and conditions");
    }
    if (Object.keys(input).length !== demographics.length + medical.length + 1) {
      alert("please fill out all the data")
    }
    console.log(input);
  }



  return (
    <div className="form-container">
      <form onSubmit={submitForm}>
        <h1> Ingest Form </h1>

        <h2> Demographic Data </h2>
        {
          demographics.map((field) =>
            <div key={field}>
              <p> {field} </p>
              <input checked={input.checked || false} onChange={(e) => inputChange(e, field)} type="text" value={input[field] || ""} />
            </div>
          )
        }

        <h2> Medical History </h2>
        {
            medical.map((field) =>
            <div key={field}>
              <p> {field} </p>
              <input onChange={(e) => inputChange(e, field)} type="text" value={input[field] || ""} />
            </div>
          )
        }

        <h2> Acceptance of Contract </h2>
          <div>
            {agreement}
          </div>
          <div>
            <p style={{fontWeight:"bold"}}> I acknowledge by checking this box </p>
            <input checked={input["checked"] || false} onChange={(e) => inputChange(e)} type="checkbox"/>
          </div>
        <h2> Summary/Preview </h2>
        { demographics.map((field) =>
            <div style={{marginTop:"2px"}} key={field}> <span> {`${field}: ${input[field] || `${field} needs to be filled out`}`} </span> </div>)
        }
        { medical.map((field) =>
            <div style={{marginTop:"2px"}} key={field}> <span> {`${field}: ${input[field] || `${field} needs to be filled out`}`} </span> </div>)
        }

        <h2> Submit </h2>
          <button onClick={submitForm} type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default Form;
