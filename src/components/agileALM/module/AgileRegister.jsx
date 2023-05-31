import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';
import StepComp from '../../EnvironmentSetup/StepComp';
import MuiAlert from '@mui/material/Alert';
import TabSelection2 from '../TabSelection2';
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
import validator from 'validator'
import Link from 'next/link'
import axios from 'axios'
import { Alert, notification, Spin } from 'antd'
import { useRouter } from 'next/router'

function SignUp({ setTwoStep }) {
    let Router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const [inputType, setInputType] = useState('password')

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState(null)

    const handlePassType = () => {
        if (inputType === 'password') {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }

    const registorValidator = (firstName, lastName, email, password) => {
        let error = {}

        if (!firstName) {
            error.firstName = 'Enter your first name'
        }
        if (!lastName) {
            error.lastName = 'Enter your first name'
        }


        if (!email) {
            error.email = 'Enter your email'

        } else if (!validator.isEmail(email)) {
            error.email = 'Enter your valid email'
        }

        if (!password) {
            error.password = "Enter your password"
        } else if (password.length < 6) {
            error.password = "Password must be six digit long"
        }

        return {
            error,
            isError: Object.keys(error).length == 0
        }
    }


    const handleSubmit = () => {
        const validate = registorValidator(firstName, lastName, email, password)

        if (!validate.isError) {
            return setErrors(validate.error)
        }

        setErrors(null)
        setIsLoading(true)
        let data = {
            firstName,
            lastName,
            email,
            password
        }

        axios.post('/user/register', data)
            .then(res => {
                setIsLoading(false)
                if (res.data.isOtpSend) {
                    setTwoStep(email)
                } else {
                    notification.success("Regsitered successfully")
                    Router.push(Router.query.callback ? /auth/login?callback=${Router.query.callback} : '/auth/login')
                }

            })
            .catch(err => {
                setIsLoading(false)
                err && err.response && setErrors(err.response?.data)
            })


    }

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            handleSubmit()
        }
    }
    return (
        <>

            <div className="top">
                <img src="/AgileAlM-Navy-Blue-V2.png" alt="icon" />
                <h4>Register to Get Started</h4>
            </div>

            {
                errors && errors.error && <Alert type='error' style={{ margin: "10px 0" }} message={errors.error} />
            }

            <div className="form_wrapper">
                <div className={input_item ${errors && errors.firstName ? "error" : ""}}>
                    {/* <label htmlFor="fname">First Name <span className='required'>*</span></label> */}
                    <div className="input_wrapper">
                        <input placeholder={First Name} onKeyUp={e => handleEnter(e)} value={firstName} onChange={e => setFirstName(e.target.value)} type="text" id='fname' />
                        
                        <img src="/icons/error.svg" className='icon error' alt="error" />
                    </div>
                    <span className='error_text'>{errors && errors.firstName || ""}</span>
                </div>


                <div className={input_item ${errors && errors.lastName ? "error" : ""}}>
                    {/* <label htmlFor="lname">Last Name <span className='required'>*</span></label> */}
                    <div className="input_wrapper">
                        <input placeholder='Last Name' onKeyUp={e => handleEnter(e)} value={lastName} onChange={e => setLastName(e.target.value)} type="text" id='lname' />
                        <img src="/icons/error.svg" className='icon error' alt="error" />
                    </div>
                    <span className='error_text'>{errors && errors.lastName || ""}</span>
                </div>


                <div className={input_item ${errors && errors.email ? "error" : ""}}>
                    {/* <label htmlFor="email">Email <span className='required'>*</span></label> */}
                    <div className="input_wrapper">
                        <input placeholder='Email Address' onKeyUp={e => handleEnter(e)} value={email} onChange={e => setEmail(e.target.value)} type="text" id='email' />
                        <img src="/icons/error.svg" className='icon error' alt="error" />
                    </div>
                    <span className='error_text'>{errors && errors.email || ""}</span>
                </div>

                <div className={input_item ${errors && errors.password ? "error" : ""}}>
                    {/* <label htmlFor="password">Password <span className='required'>*</span></label> */}
                    <div className="input_wrapper">
                        <input placeholder='Password' onKeyUp={e => handleEnter(e)} value={password} onChange={e => setPassword(e.target.value)} type={inputType} id='phone' />
                        <img onClick={() => handlePassType()} className='icon' src={inputType === 'text' ? "/icons/eye-visible.svg" : "/icons/eye-hidden.svg"} alt="" />
                    </div>
                    <span className='error_text'>{errors && errors.password || ""}</span>
                </div>


                <div className='submit_container2'>
                    <button disabled={isLoading} className='submit' onClick={() => handleSubmit()}> {isLoading && <Spin />}Register Now</button>
                </div>

                <div className='bottom_section'>
                    <p style={{ color: '#828282' }}>Already have an account? <Link href={Router.query.callback ? /auth/login?callback=${Router.query.callback} : '/auth/login'}><a style={{ color: "#F87A1D" }} id="forget">Login</a></Link></p>

                </div>
                {/* <p>Already have an account? <Link href={Router.query.callback ? /auth/login?callback=${Router.query.callback} : '/auth/login'}><a href="#">Login</a></Link></p> */}
            </div>


        </>
    )
}

export default SignUp`

const list = [
    "The required dependencies and components are imported, including React, useState, validator, Link from Next.js, axios for making HTTP requests, and components from the Ant Design library.",
    "The SignUp component is defined as a functional component that takes a prop called setTwoStep.",
    "The component initializes state variables using the useState hook: isLoading: Represents the loading state of the form, inputType: Manages the visibility of the password input field, firstName, lastName, email, password: Store the input values of the form fields, errors: Holds the validation errors, if any.",
    "The handlePassType function toggles the inputType state between 'password' and 'text', changing the input field type from password to plain text and vice versa.",
    "The handlePassType function is defined to toggle the visibility of the password input field.",
    "The registorValidator function is a validation function that takes the input values (firstName, lastName, email, password) and performs various validation checks. It returns an object containing error (validation error messages) and isError (a boolean indicating if there are any validation errors).",
    "The handleSubmit function is triggered when the form is submitted. It first validates the input values using the registorValidator function. If there are validation errors, it sets the errors state accordingly.",
    "If there are no validation errors, it sets the isLoading state to true to indicate that the form submission is in progress. It creates an object (data) containing the input values.",
    "It makes a POST request to the /user/register endpoint using axios.post. The request includes the data object as the request body.",
    "If the request is successful (status code 200), it checks if the response contains isOtpSend set to true. If true, it invokes the setTwoStep function passed as a prop, passing the email as an argument. Otherwise, it displays a success notification using the Ant Design notification.success method and redirects the user to the login page.",
    "If there is an error (status code is not 200), it sets the errors state with the error response data. The error response data is accessed from the err.response.data property.",
    "The handleEnter function is triggered when a key is pressed. If the key code is 13 (Enter key), it calls the handleSubmit function.",
    "The component renders JSX elements representing the sign-up form. It includes input fields for first name, last name, email, and password. The fields are bound to their respective state variables and update their values using the onChange event handler.",
    "If there are errors (errors.error exists), an Ant Design Alert component is rendered to display the error message.",
    "The form includes a submit button that is disabled when isLoading is true. Clicking the button triggers the handleSubmit function.",
    "The component also renders a link to the login page using the Link component from Next.js. The link is conditionally generated based on the value of the Router.query.callback property.",
    "The SignUp component is exported as the default export of the module."

];

const codeSnippet_1 = `import React, { useState } from 'react'
import SignUp from '../../components/auth/Register'
import TwoStep from '../../components/auth/TwoStep'
import SeoComponent from '../../components/global/SeoComponent'
import TopHeader from '../../components/TopHeader/TopHeader'

function login() {
    const [twoStepEmail, setTwoStepEmail] = useState(null)
    return (
        <>
            <SeoComponent
                title="Agile ALM - Register"
                description="Agile ALM Register form, one can easily sign in with email and password or by google sign in."
                url="auth/register"
            />


            <div className='auth_wrapper2_root'>
                <div className='register_container container'>
                    <div className='left_wrapper'>
                        <img src="/New_Template/sign-up-login.svg" alt="Register Hero"></img>
                    </div>
                    <div className='auth_wrapper2'>
                        {/* <div className="container"> */}
                        <div className="auth_bg2">
                            {
                                twoStepEmail ?
                                    <TwoStep email={twoStepEmail} /> :
                                    <SignUp setTwoStep={value => setTwoStepEmail(value)} />
                            }
                        </div>
                        {/* </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default login`;

const list_1 = [
    "The required dependencies and components are imported, including React, useState, and several custom components (SignUp, TwoStep, SeoComponent, and TopHeader).",
    "The login component is defined as a functional component.",
    "Inside the login component, there is a state variable twoStepEmail initialized to null using the useState hook. This state variable will store the email address when the registration process reaches the two-step verification stage.",
    "The component returns JSX elements representing the registration page.",
    "The SeoComponent component is rendered, which is responsible for managing the SEO-related meta tags.",
    "The TopHeader component is commented out in the provided code. It might represent a header component for the registration page.",
    "The main content of the registration page is wrapped in a div with the class auth_wrapper.",
    "Inside the auth_wrapper div, there is another div with the class container that wraps the content of the registration page.",
    "Within the container div, there is an auth_bg div that acts as a background for the registration form.",
    "The content to be displayed depends on the value of the twoStepEmail state variable. If twoStepEmail is not null, it renders the TwoStep component, passing the email address as a prop. This component likely represents the two-step verification process for completing the registration.",
    "If twoStepEmail is null, it renders the SignUp component, passing a function setTwoStep as a prop. The setTwoStep function is used to update the twoStepEmail state variable when the registration form is submitted successfully.",
    "The auth_wrapper div and its child divs are commented out, and an alternative structure is provided using div elements with classes auth_wrapper2_root, register_container, left_wrapper, and auth_wrapper2. This represents a different layout for the registration page with a hero image on the left and the registration form on the right.",
    "Inside the register_container div, there is a left_wrapper div that holds an img element displaying a hero image related to the registration process.",
    "Inside the register_container div, there is an auth_wrapper2 div that wraps the registration form.",
    "The content within the auth_wrapper2 div is the same as described earlier: it conditionally renders the TwoStep or SignUp component based on the value of twoStepEmail.",
    "The login component is exported as the default export of the module."
]

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

const codeSnippet3 = `exports.register = async (req, res) => {

    let { firstName, lastName, email, password } = req.body
    // if (!firstName || !lastName || !email || !password) {
    //     return res.status(400).json({ error: "Firstname Lastname, email and password is required" })
    // }
    const validate = registerValidator(
        firstName,
        lastName,
        email,
        password
    );

    if (!validate.isError) {
        return res.status(404).json(validate.error)
    }


    try {
        let user = await User.findOne({ email }).exec()
        if (user) return res.status(400).json({ error: "User is already registered with this email" })
        const hash_password = await bcrypt.hash(password, 10);
        let otpCode = generateOTP()
        const otp_token = jwt.sign({ otp: otpCode, email }, process.env.EMAIL_SECRET, {
            expiresIn: '1d',
        });

        let isEmailVerified = {
            status: false,
            token: otp_token,
        }

        let templateId = "d-43379e19432348c9ad64265ceb631d8d"
        let dynamicTemplateData = {
            subject: "Ts4u PM email verification",
            fname: firstName,
            code: otpCode
        }




        let _user = new User({
            email,
            firstName,
            lastName,
            hash_password,
            isEmailVerified
        })
        let savedUser = await _user.save()
        await sendDynamicEmail(email, templateId, dynamicTemplateData)
        res.status(200).json({ email: savedUser.email, isOtpSend: true })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "something went wrong" })
    }
}`

const list3 = [
    "The function is defined as an asynchronous function and takes two parameters, req and res, which represent the request and response objects respectively.",
    "The firstName, lastName, email, and password are extracted from the request body using destructuring assignment.",
    "There is a commented out code block that checks if any of the required fields (firstName, lastName, email, password) are missing. If any field is missing, it returns a response with a 400 status code and a JSON object containing an error message.",
    "The code then calls a registerValidator function to validate the input values (firstName, lastName, email, password). The registerValidator function is not shown in the provided code snippet, but it likely performs validation checks and returns an object containing error (validation error messages) and isError (a boolean indicating if there are any validation errors).",
    "If there are validation errors (validate.isError is false), it returns a response with a 404 status code and the validation error messages.",
    "If there are no validation errors, it attempts to find a user in the database based on the provided email using the findOne method of the User model. The await keyword is used to wait for the asynchronous operation to complete.",
    "If a user with the provided email already exists, it returns a response with a 400 status code and a JSON object containing an error message stating that the user is already registered with that email.",
    "If the email is unique, it proceeds to hash the password using bcrypt with a salt factor of 10. The bcrypt.hash function is an asynchronous operation and uses the await keyword to wait for the password hashing to complete.",
    "It generates a one-time password (OTP) code using the generateOTP function.",
    "It creates a JWT token (otp_token) containing the OTP code and the email. This token will be used to verify the email later.",
    "It creates an isEmailVerified object with status set to false and token set to the otp_token.",
    "It defines a templateId and dynamicTemplateData for sending an email verification email. These values may vary based on the email service provider and implementation.",
    "It creates a new User instance with the provided email, firstName, lastName, hashed password (hash_password), and isEmailVerified object.",
    "It saves the new user to the database using the save method.",
    "It sends a dynamic email to the user's email address using the sendDynamicEmail function, passing the email, template ID, and dynamic template data.",
    "It returns a response with a 200 status code and a JSON object containing the user's email and isOtpSend set to true.",
    "If any error occurs during the execution of the try block, it catches the error, logs it to the console, and returns a response with a 400 status code and a JSON object containing an error message stating that something went wrong."
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
        <ImageComp image={"/agileALM/register.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Register.js (pages)</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet_1}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list_1}></Process>

            <Box mt={3}>
                <Typography mt={2} variant='h4'>Register.js</Typography>
                {/* <StepComp stepText="Login.js"></StepComp> */}
                <CodeBox codeSnippet={codeSnippet}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the codebase</Typography>
                <Process list={list}></Process>
            </Box>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Login.css</Typography>
                {/* <StepComp stepText="Login.js"></StepComp> */}
                <CodeBox codeSnippet={codeSnippet2}></CodeBox>
                <Typography mt={2} variant='h4'>Description of the codebase</Typography>
                <Process list={list2}></Process>
            </Box>
        </Box>
    )
}

const BackendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Register controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}

const AgileExecution = () => {

    const userStory = {
        title: 'User Registration development.',
        assignedTo: 'Rafiur Rahman Protik',
        description: {
            title: "As a full-stack developer, I want to develop the user registration process on the website, So that new users can easily create an account and access the platform's features.",
            list: [
                "Design and develop the user registration form UI with proper input fields and validation.",
                 "Implement backend logic for processing the registration form data and saving user information securely.",
                 "Implement the logic to validate email addresses and mark user accounts as verified upon successful verification.",
                 "Handle and display clear error messages for any registration form issues or validation errors.",
                 "Ensure the user registration process is responsive and optimized for different devices using responsive design techniques."
                ]
        },
        priority: "1",
        risk: "1",
        effort: "2 days",
        startDate: "2023-03-02",
        endDate: "2023-03-03"
    }

    return (
        <Box>

            <Box mt={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/register.png"></ImageComp>
                </Box>
                <Typography mt={2} variant='h3'>What is User Story?</Typography>
                <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the user registration user story:
                </Typography>

                <UserStoryComp userStory={userStory}></UserStoryComp>
            </Box>

        </Box>
    )
}



const AgileRegister = () => {

    return (
        <Box pb={3}>
            <TabSelection2 imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution />}></TabSelection2>
        </Box>
    );
};

export default AgileRegister;