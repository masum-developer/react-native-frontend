import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';
import UserStoryComp from '../../global/UserStoryComp';

const res = {
    data: {
        token: ''
    }
}

const errors = {
    password: '',
    email: '',
}

const Router = {
    query: {
        callback: ''
    }
}

const token = '';

const codeSnippet = `import React, { useState } from 'react'
import Link from 'next/link'
import validator from 'validator'
import axios from 'axios'
import { Alert, Spin } from 'antd'
function ForgotPassword({ setVerify }) {
    const [email, setEmail] = useState("")


    const [errors, setErrors] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const EmailValidator = (email) => {
        let error = {}
        if (!email) {
            error.email = 'Enter your email'

        } else if (!validator.isEmail(email)) {
            error.email = 'Enter your valid email'
        }
        return {
            error,
            isError: Object.keys(error).length == 0
        }
    }

    const handleSubmit = () => {
        const validateEmail = EmailValidator(email)

        if (!validateEmail.isError) {
            return setErrors(validateEmail.error)
        }

        setErrors(null)
        setIsLoading(true)
        axios.post('/user/forgot-password', { email })
            .then(res => {
                setIsLoading(false)
                setVerify(email)
            })
            .catch(err => {
                setIsLoading(false)
                setErrors(err?.response?.data)
            })

    }
    return (
        <>

            <div className="top">
                <img src="/AgileAlM-Navy-Blue-V2.png" alt="icon" />
                <h4>Please enter your email address to reset password</h4>
            </div>

            <div className="form_wrapper">
                {errors?.error && <Alert message={errors?.error} type='error' style={{ margin: "10px 0" }} />}
                <div className={input_item ${errors && errors.email ? "error" : ""}}>
                    {/* <label htmlFor="email">Enter Email:</label> */}
                    <div className="input_wrapper">
                        <input placeholder='Alexzander.Tessot@totanota-mail.com' value={email} onChange={e => setEmail(e.target.value)} type="text" id='email' />
                        <img src="/icons/error.svg" className='icon error' alt="error"/>
                    </div>
                    <span className='error_text'>{errors && errors.email || ""}</span>
                </div>





                <div className='submit_container2'>
                    <button className='submit forgot' disabled={email.length === 0 || isLoading} onClick={() => handleSubmit()}>{isLoading && <Spin />} Reset Password</button>
                </div>

                <div className='reset_text'>
                    <p>If you have an account which is already been registered with Agilealm then you will get an <span>email for resetting your password.</span></p>
                </div>

            </div>


        </>
    )
}

export default ForgotPassword
`

const list = [
    "The code imports necessary dependencies and components, including React, useState, Link from Next.js, validator, axios, and components from Ant Design (Alert and Spin).",
    "The ForgotPassword component is defined as a functional component that receives a prop called setVerify.",
    "Inside the component, the initial state is set using the useState hook. Two state variables are defined: email: stores the value of the email entered by the user, errors: stores any validation errors related to the email input, isLoading: indicates whether the form is currently being submitted or not.",
    "The EmailValidator function is defined to validate the email input. It checks if the email is empty and if it is a valid email using the validator.isEmail method. If any errors are found, they are returned in an error object along with an isError flag indicating whether there are any errors.",
    "The handleSubmit function is defined to handle the form submission. It first calls the EmailValidator function to validate the email input. If there are any validation errors, they are set in the errors state variable, and the function returns.",
    "If the email input passes the validation, the errors state is reset, and the isLoading state is set to true to indicate that the form submission is in progress.",
    "The axios.post method is called to make a POST request to /user/forgot-password with the email data. If the request is successful, the isLoading state is set to false, and the setVerify function (received as a prop) is called with the email parameter.",
    "If there is an error during the request, the isLoading state is set to false, and the error data is set in the errors state variable.",
];

const codeSnippet2 = `
.form_wrapper {
      width: 100%;

      .input_item {
          margin-top: 12px;
          width: 100%;

          label {

              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 20px;
              margin-bottom: 5px;
              display: inline-block;

              color: #302d45;

              .required {
                  color: #FF0B37;
                  ;
              }

              .optional {
                  color: #6E7191;
              }
          }

          .input_wrapper {
              position: relative;

              input {
                  max-width: 400px;
                  width: 100%;
                  height: 44px;
                  background: #ffffff;
                  border: 1px solid #d9dbe9;
                  box-sizing: border-box;
                  border-radius: 5px;

                  font-style: normal;
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 20px;
                  /* identical to box height, or 111% */
                  padding: 0 10px;
                  /* typeface color */

                  color: #302d45;

                  &:focus {
                      outline: none;
                      border: 1px solid $primary_color
                  }
              }

              .icon {
                  position: absolute;
                  right: 2%;
                  top: 33%;
                  cursor: pointer;

                  &.error {
                      display: none;
                  }
              }

          }

          .error_text {
              display: none;
          }

          &.error {
              .input_wrapper {
                  input {
                      border: 1px solid #E93C3C;
                      background: #FFEFEF;
                  }

                  .icon.error {
                      display: block;
                  }
              }

              .error_text {
                  display: block;

                  font-style: normal;
                  font-weight: normal;
                  font-size: 18px;
                  line-height: 25px;
                  color: #E93C3C;
              }
          }
      }

      .submit {
          width: 100%;
          height: 44px;
          left: 520px;
          top: 527px;
          background: $primary_color;
          border-radius: 5px;

          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 20px;
          color: #ffffff;
          outline: none;
          border: none;
          cursor: pointer;
          margin-top: 24px;

          &:disabled {
              background: #E3E4E4;
              color: #A0A0A6;
              cursor: not-allowed;
          }
      }

      .resend {
          //width: 98px;
          //height: 28px;
          padding: 5px 10px;
          border: none;
          outline: none;
          background: #ECEDF4;
          border-radius: 5px;

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          text-align: center;
          color: #302D45;
          cursor: pointer;

          &.active {
              color: $primary_color;
          }
      }

      p {

          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 1.6;
          color: #6e7191;
          text-align: center;
          margin: 5px 0;

          a {
              text-decoration-line: underline;
              color: $primary_color;
          }
      }
}
`

const list2 = [
    "The code defines CSS styles for the .form_wrapper class, which represents the container for the form.",
    "The .input_item class represents each input field section within the form.",
    "The margin-top and width properties are set for the .input_item class.",
    "The label element styles are defined for the .input_item class.",
    "The .required class styles the required indicator (*) within the label with a red color.",
    "The .optional class styles the optional indicator within the label with a gray color.",
    "The .input_wrapper class represents the container for the input field and its related elements.",
    "26-45. The styles for the input element within the .input_wrapper class are defined. It sets the width, height, background color, border, border radius, font styles, padding, and color.",
    "47-51. The :focus pseudo-class styles are defined for the input element, changing the outline and border color when it is focused.",
    "55-63. The .icon class represents the icon positioned on the right side of the input field. It sets the position, cursor, and displays it as none by default. The .error class is used to display the icon if there is an error.",
    "69-73. The .error_text class is used to display the error message. It is set to display none by default.",
    "76-90. The .error class is applied to the .input_item class when there is an error. It changes the input field border and background color to indicate the error. The .icon.error class is used to display the error icon. The .error_text class is used to display the error message text.",
    "93-108. The .submit class styles the submit button. It sets the width, height, background color, border radius, font styles, color, outline, border, and cursor. The :disabled pseudo-class styles are defined for the disabled state of the button."
]

const codeSnippet3 = `exports.resetPassword = async (req, res) => {
    let { email, otp, password } = req.body
    if (!email || !otp || !password) {
        return res.status(400).json({ error: "Enter valid data" })
    }


    const validate = passwordValidatorFunc(
        password
    );

    if (!validate.isError) {
        return res.status(404).json(validate.error)
    }

    const hash_password = await bcrypt.hash(password, 10);


    User.findOne({ email })
        .then(user => {
            if (user) {
                jwt.verify(user.password_reset_token, process.env.EMAIL_SECRET, function (err, decoded) {
                    if (err) {
                        return res.status(401).json({ error: "OTP expired" });
                    }

                    if (decoded.otp === otp) {
                        User.findByIdAndUpdate(user._id, { $set: { password_reset_token: "", hash_password } }, { new: true })
                            .select("-hash_password")
                            .then((updatedUser) => {
                                return res.status(200).json({ success: true });
                            });

                    } else {
                        return res.status(401).json({ error: "Invalid OTP" });
                    }


                });
            }
        })

}`

const list3 = [
    "The function receives the req (request) and res (response) parameters, which are objects representing the HTTP request and response, respectively.",
    "The function extracts the email, otp (one-time password), and password from the request body using destructuring.",
    "It checks if any of the required fields (email, otp, and password) are missing. If any of them are missing, it sends a response with a status code of 400 (Bad Request) and a JSON object containing an error property with the value Enter valid data.",
    "Next, it calls a passwordValidatorFunc function to validate the password. The result of the validation is stored in a validate variable.",
    "If the password validation fails (validate.isError is false), it sends a response with a status code of 404 (Not Found) and a JSON object containing the validation errors in the validate.error property.",
    "If the password validation passes, the function proceeds to hash the password using bcrypt.hash with a salt round of 10. The hashed password is stored in the hash_password variable.",
    "The function searches for a user in the database based on the provided email using the User.findOne method. It then handles the promise result using a .then callback.",
    "Inside the callback, it checks if a user with the specified email exists. If a user is found, it proceeds to verify the password_reset_token stored in the user object using jwt.verify and the process.env.EMAIL_SECRET as the secret key. The jwt.verify function is used to verify and decode the token.",
    "If there's an error during verification (err is truthy), it sends a response with a status code of 401 (Unauthorized) and a JSON object containing an error property with the value 'OTP expired'.",
    "If the OTP (one-time password) is successfully verified, it proceeds to update the user's record in the database using User.findByIdAndUpdate. It sets the password_reset_token to an empty string ('') and updates the hash_password field with the hashed password. The { new: true } option ensures that the updated user object is returned.",
    "The updated user object is then processed in the .then callback. It selects all properties except hash_password, and if the update is successful, it sends a response with a status code of 200 (OK) and a JSON object containing a success property with the value true.",
    "If the OTP verification fails (decoded.otp !== otp), it sends a response with a status code of 401 (Unauthorized) and a JSON object containing an error property with the value 'Invalid OTP'.",
]

const model = `const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    profilePicture: { type: String, default: "" },
    firstName: { type: String, required: true },
    lastName: { type: String, default: "" },
    hash_password: String,
    role: { type: String, enum: ["master", "staff", "user"], default: "user" },
    password_reset_token: {
      type: String,
      default: ""
    },
    isEmailVerified: {
      status:{type:Boolean,default:"false"},
      token:String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};



module.exports = mongoose.model("User", userSchema);
`
const dbModelList = [
    "The module imports the required dependencies: mongoose and bcrypt.",

    "It creates a new Mongoose schema using the mongoose.Schema function. The schema defines the structure and properties of the User model.",

    "The schema consists of various fields: email: A string field representing the user's email address. It is required, unique, and stored in lowercase, profilePicture: A string field representing the URL or path to the user's profile picture. It has a default value of an empty string, firstName: A string field representing the user's first name. It is required, lastName: A string field representing the user's last name. It has a default value of an empty string, hash_password: A string field representing the hashed password of the user. This field stores the encrypted version of the user's password, role: A string field representing the role of the user. It accepts three possible values: 'master', 'staff', or 'user'. The default value is set to 'user', password_reset_token: A string field representing the token used for password reset. It has a default value of an empty string, isEmailVerified: An object field that represents the email verification status of the user. It has two properties: status (a boolean indicating if the email is verified) and token (a string representing the verification token).",

    "The schema also includes additional configuration options: timestamps: true: It automatically adds createdAt and updatedAt fields to the schema, tracking the creation and modification timestamps of the user documents, toJSON: { virtuals: true }: It enables the schema to include virtual properties when converting the user document to JSON, toObject: { virtuals: true }: It enables the schema to include virtual properties when converting the user document to a plain JavaScript object.",

    "The schema defines a method called authenticate, which is an asynchronous function that compares the provided password with the hashed password stored in the hash_password field. It uses bcrypt.compare to perform the comparison and returns a promise with the result.",

    "The schema defines a virtual property called fullName, which represents the full name of the user. It concatenates the firstName and lastName fields.",

    "Finally, the module exports the Mongoose model created from the schema using mongoose.model, with the model name 'User' and the defined userSchema."
]
const ModelComp = () => {
    return (
      <Box>
        <Typography mt={2} variant='h4'>Database model</Typography>
        {/* <StepComp stepText="Login.js"></StepComp> */}
        <CodeBox codeSnippet={model}></CodeBox>
        <Typography mt={2} variant='h4'>Description of the codebase</Typography>
        <Process list={dbModelList}></Process>
      </Box>
    )
  }

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/forget.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Box mt={3}>
                <Typography mt={2} variant='h4'>Forget.js</Typography>
                {/* <StepComp stepText="Login.js"></StepComp> */}
                <CodeBox codeSnippet={codeSnippet}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the codebase</Typography>
                <Process list={list}></Process>
            </Box>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Forget.css</Typography>
                {/* <StepComp stepText="Login.js"></StepComp> */}
                <CodeBox codeSnippet={codeSnippet2}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the codebase</Typography>
                <Process list={list2}></Process>
            </Box>
        </Box>
    )
}

const AgileExecution = () => {
    const userStory = {
        title: 'Forgot Password functionality development',
        assignedTo: 'Rafiur Rahman Protik',
        description: {
            title: 'As a full-stack developer, I want to develop the "Forgot Password" feature on the website, So that users can securely reset their passwords and regain access to their accounts.',
            list: [
                'Design and implement the "Forgot Password" link on the login page for easy access.',
                 "Develop the password reset page where users can enter their registered email addresses.",
                 "Implement the logic to generate a unique password reset token and send it via email to the user.",
                 "Create a password reset page where users can enter a new password securely.",
                 "Handle and display clear error messages for invalid email addresses or network errors during the password reset process.",
                ]
        },
        priority: "1",
        risk: "1",
        effort: "6 hours",
        startDate: "2023-05-31",
        endDate: "2023-05-32"
    }
    return (
        <Box>

            <Box mt={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login.png"></ImageComp>
                </Box>
                <Typography variant='h3'>What is User Story?</Typography>
                <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the forget password in user story:
                </Typography>

                <UserStoryComp userStory={userStory}></UserStoryComp>

            </Box>

        </Box>
    )
}

const BackendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Forget controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}



const AgileForgetPass = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp/>} agileExecution={<AgileExecution />}></TabSelection>
        </Box>
    );
};

export default AgileForgetPass;