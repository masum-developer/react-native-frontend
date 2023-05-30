import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import Process from '../../EnvironmentSetup/Process';
import ImageComp from '../../EnvironmentSetup/ImageComp';
import TabSelection from '../TabSelection';
import StepComp from '../../EnvironmentSetup/StepComp';
import MuiAlert from '@mui/material/Alert';

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
import { Alert, notification, Spin } from 'antd'
import Cookies from "js-cookie";
import axios from 'axios'
import { useRouter } from 'next/router'

function SignIn({ setTwoStep }) {
  const Router = useRouter()


  const [isLoading, setIsLoading] = useState(false)
  const [inputType, setInputType] = useState('password')

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

  const loginValidator = (email, password) => {
      let error = {}
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
      const validate = loginValidator(email, password)

      if (!validate.isError) {
          return setErrors(validate.error)
      }

      setErrors(null)
      setIsLoading(true)
      let data = {
          email,
          password
      }
      axios.post('/user/login', data)
          .then(res => {
              if (res.data.isOtpSend) {
                  setTwoStep(email)
              } else if (res.status === 200) {
                  Cookies.set(process.env.NEXT_PUBLIC_TOKEN_NAME, Bearer ${res.data.token});
                  notification.success({ message: "Logged in successfully!" })
                  setIsLoading(false)
                  // setTimeout(() => {
                  //     window.location.pathname = '/'
                  // }, 1000);
                  if (Router.query.callback) {
                      window.location.pathname = Router.query.callback
                  } else {
                      window.location.pathname = '/organization'
                  }
              }
          })
          .catch(err => {
              setErrors(err && err.response && err.response.data);
              setIsLoading(false)
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
              <h4>Sign In</h4>
          </div>

          {
              errors && errors.error && <Alert type='error' style={{ margin: "10px 0" }} message={errors.error} />
          }


          <div className="form_wrapper">

              <div className={input_item ${errors && errors.email ? "error" : ""}}>
                  {/* <label htmlFor="email">Email <span className='required'>*</span></label> */}
                  <div className="input_wrapper">
                      <input placeholder='Enter your email' onKeyUp={e => handleEnter(e)} value={email} onChange={e => setEmail(e.target.value)} type="text" id='email' />
                      <img src="/icons/error.svg" className='icon error' alt="error" />
                  </div>
                  <span className='error_text'>{errors && errors.email || ""}</span>
              </div>

              <div className={input_item ${errors && errors.password ? "error" : ""}}>
                  {/* <label htmlFor="password">Password <span className='required'>*</span></label> */}
                  <div className="input_wrapper">
                      <input placeholder='Enter Password' onKeyUp={e => handleEnter(e)} value={password} onChange={e => setPassword(e.target.value)} type={inputType} id='phone' />
                      <img onClick={() => handlePassType()} className='icon' src={inputType === 'text' ? "/icons/eye-visible.svg" : "/icons/eye-hidden.svg"} alt="" />
                  </div>
                  <span className='error_text'>{errors && errors.password || ""}</span>
              </div>

              <div className='bottom_section'>
                  <p style={{ color: '#828282' }}>Forgot Password? <Link href='/auth/forgot-password'><a style={{ color: "#F87A1D" }} id="forget">Recover now!</a></Link></p>

                  <p style={{ color: '#828282' }}>New to Agile ALM? <Link href={Router.query.callback ? /auth/register?callback=${Router.query.callback} : '/auth/register'}><a style={{ color: "#F87A1D" }} id="forget">Create</a></Link> an account</p>
              </div>


              <div className='submit_container'>
                  <button disabled={isLoading} className='submit' onClick={() => handleSubmit()}>{isLoading && <Spin />} Login</button>
              </div>
          </div>
      </>
  )
}

export default SignIn
`

const list = [
    "The code begins with importing necessary dependencies and components from various libraries and frameworks.",
    "The SignIn function component is defined, which receives the setTwoStep prop.",
    "The useRouter hook from the next/router module is used to get the router instance.",
    "Several state variables are initialized using the useState hook: here, isLoading is a boolean state variable used to track the loading state, inputType represents the type of the input field (either 'password' or 'text'), email stores the value of the email input field., password stores the value of the password input field, errors is a state variable used to store error messages.",
    "The handlePassType function is defined to toggle the visibility of the password input field.",
    "The loginValidator function takes in the email and password as parameters and performs validation. It checks if the email is not empty and is a valid email address using the validator.isEmail function. It also checks if the password is not empty and has a minimum length of 6 characters. It returns an object with error and isError properties.",
    "The handleSubmit function is called when the form is submitted. It validates the email and password using the loginValidator function. If there are validation errors, it sets the errors state variable and returns. Otherwise, it clears the errors and proceeds with the login process.",
    "Inside the handleSubmit function, an HTTP POST request is made using the axios library to the /user/login endpoint with the email and password data.",
    "If the login request is successful (status 200), it checks if an OTP (one-time password) is sent. If yes, it calls the setTwoStep function, passing the email. If not, it stores the user's token in a cookie using js-cookie, shows a success notification using antd notification, and redirects the user to the homepage or a specified callback URL.",
    "If there's an error during the login request, the catch block is executed. It sets the errors state variable with the error response from the server and sets the loading state to false.",
    "The handleEnter function is called when a key is pressed in the input fields. If the Enter key is pressed (keyCode 13), it calls the handleSubmit function.",
    "73-75. The JSX code defines the structure and layout of the sign-in form. It includes HTML elements, conditional rendering of error messages, and event handlers.",
    "The SignIn component is exported as the default export of the module. That's the breakdown of the code line by line. Let me know if you have any further questions!"
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

const codeSnippet3 = `exports.login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
      return res.status(400).json({ error: "Email and password is required" })
  }

  try {
      let user = await User.findOne({ email }).exec()

      if (!user) return res.status(400).json({ error: "User not found" });


      if (user.isEmailVerified.status) {
          const isPassword = await user.authenticate(req.body.password);
          if (isPassword) {
              const token = generateJwtToken(user._id, user.email);
              res.status(200).json({
                  success: true,
                  token: ${token},
              });
          } else {
              return res.status(400).json({
                  error: "Invalid credentials",
              });
          }
      } else {
          let otpCode = generateOTP()
          const otp_token = jwt.sign({ otp: otpCode, email }, process.env.EMAIL_SECRET, {
              expiresIn: '1d',
          });

          let isEmailVerified = {
              status: false,
              token: otp_token,
          }

          let user = await User.findOneAndUpdate({ email }, { $set: { isEmailVerified } }, { new: true }).exec()
          let templateId = "d-43379e19432348c9ad64265ceb631d8d"
          let dynamicTemplateData = {
              subject: "Ts4u PM email verification",
              fname: "",
              code: otpCode
          }

          await sendDynamicEmail(email, templateId, dynamicTemplateData)
          res.status(200).json({
              isOtpSend: true
          })

      }

  } catch (error) {
      console.log(error);
      return res.status(400).json({ error: "something went wrong" })
  }

}`

const list3 = [
    "The function is defined as an asynchronous function and takes two parameters, req and res, which represent the request and response objects respectively.",
    "The email and password are extracted from the request body using destructuring assignment.",
    "The code checks if the email or password is missing. If either of them is missing, it sends a response with a 400 status code and a JSON object containing an error message stating that email and password are required.",
    "If the email and password are provided, the code attempts to find a user in the database based on the provided email using the findOne method of the User model. The await keyword is used to wait for the asynchronous operation to complete.",
    "If no user is found with the provided email, it sends a response with a 400 status code and a JSON object containing an error message stating that the user is not found.",
    "If the user is found, it checks if the user's email is verified. If the isEmailVerified.status property is true, it proceeds to authenticate the provided password using the authenticate method of the user model. The authenticate method is not shown in the code snippet, but it likely compares the provided password with the hashed password stored in the user document.",
    "If the password is valid, it generates a JSON Web Token (JWT) using the generateJwtToken function, passing the user's ID (user._id) and email (user.email) as payload data.",
    "It sends a response with a 200 status code and a JSON object containing a success flag set to true and the generated token.",
    "If the password is invalid, it sends a response with a 400 status code and a JSON object containing an error message stating that the credentials are invalid.",
    "If the user's email is not verified (isEmailVerified.status is false), it generates a one-time password (OTP) code using the generateOTP function.",
    "It creates a JWT token (otp_token) containing the OTP code and the email. This token will be used to verify the email later.",
    "It updates the user document in the database, setting the isEmailVerified field as an object with status set to false and token set to the otp_token.",
    "It sends an email to the user's email address using the sendDynamicEmail function, passing the email, a template ID, and dynamic template data. The template ID and dynamic template data may vary based on the email service provider and implementation.",
    "Finally, it sends a response with a 200 status code and a JSON object containing isOtpSend set to true, indicating that the OTP has been sent to the user's email.",
    "If any error occurs during the execution of the try block, it catches the error, logs it to the console, and sends a response with a 400 status code and a JSON object containing an error message stating that something went wrong."
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

const ImageInterface = () => {
    return (
        <ImageComp image={"/agileALM/login.png"} imageTitle={"Screenshot 1: Login"}></ImageComp>
    )
}

const FrontendComp = () => {
    return (
        <Box>
            <Typography mt={2} variant='h4'>Login.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list}></Process>


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
            <Typography mt={2} variant='h4'>Login controller function</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet3}></CodeBox>
            <Typography mt={2} variant='h4'>Description of the codebase</Typography>
            <Process list={list3}></Process>
        </Box>
    )
}

const AgileExecution = () => {
    const epicList = [
        "Title: AgileALM web application developement.",
        "Assinged To: Rafiur Rahman Protik",
        "Description: The application will be built on several requirements. It includes frontend implementation, backend implementation, and database modeling, The user interface will be built from the Figma file.",
        "Priority: 1",
        "Risk: 1",
        "Effort: 3 months",
        "Start Date: 2023/03/30",
        "Effort: 2023/05/30",
    ];

    const featureList = [
        "Title: Authentication process development",
        "Assinged To: Rafiur Rahman Protik",
        "Description: The authentication process development will consist of user signing, and registering, User sign-in and register will contain the user interface, frontend, backend, and database model.",
        "Priority: 1",
        "Risk: 1",
        "Effort: 7 days",
        "Start Date: 2023/03/01",
        "Effort: 2023/03/07",
    ];

    const userStoryList = [
        "Title: User sign in user interface building",
        "Assinged To: Rafiur Rahman Protik",
        `Description: The user interface will be designed from the Figma file,
        Link: https://www.figma.com/file/RWGn1WB8agL4ipB7T5Dcr8/%F0%9F%93%81-Azure-ALM-(1)?node-id=203%3A1669&t=2D9blv0UiSNmJvKR-0`,
        "Priority: 1",
        "Risk: 1",
        "Effort: 2 days",
        "Start Date: 2023/03/01",
        "Effort: 2023/03/03",
    ];

    const task1 = [
        "Title: Sign in page form design.",
        "Assinged To: Rafiur Rahman Protik",
        `Description: Sign-in form design with SASS`,
        "Priority: 1",
        "Risk: 1",
        "Effort: 4 hours",
        "Start Date: 2023/03/01",
        "Effort: 2023/03/01",
    ]

    const task2 = [
        "Title: Mobile responsiveness adding in the form page",
        "Assinged To: Rafiur Rahman Protik",
        `Description: Mobile responsiveness will be added so user can use from their phone smoothly.`,
        "Priority: 1",
        "Risk: 1",
        "Effort: 1 hour",
        "Start Date: 2023/03/01",
        "Effort: 2023/03/01",
    ]

    const stages = [
        "New: This is the initial stage of a task where it is created and has not yet been assigned or actively worked on. In this stage, the task is typically awaiting assignment or further action.",

        "Active: When a task is actively being worked on by a team member, it transitions to the Active or In Progress stage. This indicates that the assigned individual is actively performing the required work to complete the task.",

        "Resolved: The Resolved stage indicates that the work on the task has been completed by the assigned team member. At this stage, the task is considered finished from the perspective of development or implementation.",

        "Closed: Once the task is reviewed, validated, and accepted by relevant stakeholders or the Scrum Master, it can be transitioned to the Closed or Done stage. This stage signifies that the task has been completed successfully and is considered closed."
    ]
    return (
        <Box>
            <Box mt={5}>
                <StepComp stepText="Step 1:"></StepComp>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ImageComp image="/agile/login/epic.png"></ImageComp>
            </Box>
            <Box>
                <Typography variant='h3'>What is an Epic?</Typography>
                <Typography variant='subtitle2'>An Epic is a high-level work item type used to represent large and valuable pieces of work that cannot be easily completed within a single iteration or sprint. Epics provide a way to organize and manage large-scale initiatives or features in a structured manner. They help break down complex projects into manageable units and allow for better planning and tracking of work.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the epic:
                </Typography>

                <Process list={epicList}></Process>
            </Box>

            <Box mt={2}>
                <Box mt={5}>
                    <StepComp stepText="Step 2:"></StepComp>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login/feature.png"></ImageComp>
                </Box>
                <Typography variant='h3'>What is Feature?</Typography>
                <Typography variant='subtitle2'>A Feature is a work item type used to represent a distinct and valuable functionality or capability of a software application. Features are typically smaller in scope than Epics but larger than User Stories. They provide a way to organize and manage the development of specific functionalities or enhancements within a product or project.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the feature:
                </Typography>

                <Process list={featureList}></Process>
            </Box>

            <Box mt={2}>
                <Box mt={5}>
                    <StepComp stepText="Step 3:"></StepComp>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login/userStory.png"></ImageComp>
                </Box>
                <Typography variant='h3'>What is User Story?</Typography>
                <Typography variant='subtitle2'>A User Story is a work item type used to represent a single piece of functionality or a specific requirement from the perspective of an end user or customer. User Stories are used to capture and describe user requirements or desired system behavior in a concise and actionable manner.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the user story:
                </Typography>

                <Process list={userStoryList}></Process>
            </Box>

            {/* task 1 */}

            <Box mt={2}>
                <Box mt={5}>
                    <StepComp stepText="Step 4:"></StepComp>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login/task1.png"></ImageComp>
                </Box>
                <Typography variant='h3'>What is a Task?</Typography>
                <Typography variant='subtitle2'>A Task is a work item type used to represent a specific unit of work or an individual action required to complete a User Story or other work items. Tasks break down the work into smaller, actionable items that can be assigned, tracked, and completed by individual team members.</Typography>

                <Typography variant='h4' mt={2}>Here we give some information related to the task:
                </Typography>

                <Process list={task1}></Process>
            </Box>

            {/* task 2 */}

            <Box mt={2}>
                <Box mt={5}>
                    <StepComp stepText="Step 5:"></StepComp>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login/task2.png"></ImageComp>
                </Box>

                <Typography variant='h4' mt={2}>Another task:
                </Typography>

                <Process list={task2}></Process>

                <Box mt={3}>
                    <MuiAlert severity="info" variant="filled">Note: User Story can have multiple tasks.</MuiAlert>
                </Box>
            </Box>

            <Box mt={2}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ImageComp image="/agile/login/taskboard.png"></ImageComp>
                </Box>

                <Typography variant='h3' mt={2}>Different stages of the tasks on the Taskboard
                </Typography>
                <Typography variant='subtitle2'>Work items such as Tasks can go through different stages or states to reflect their current status within the development process. While the specific names and stages may vary based on the customization of the project, here are some common task stages:</Typography>

                <Process list={stages}></Process>
            </Box>

        </Box>
    )
}

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



const AgileLogin = () => {

    return (
        <Box pb={3}>
            <TabSelection imageComp={<ImageInterface />} frontendComp={<FrontendComp />} backendComp={<BackendComp />} databaseComp={<ModelComp />} agileExecution={<AgileExecution />}></TabSelection>
        </Box>
    );
};

export default AgileLogin;