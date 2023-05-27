import { Box, Typography } from '@mui/material';
import React from 'react';
import CodeBox from '../../global/CodeBox';
import { useRouter } from 'next/router';
import Process from '../../EnvironmentSetup/Process';
import StepComp from '../../EnvironmentSetup/StepComp';

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

const LoginFront = () => {

    return (
        <Box>
            <Typography mt={2} variant='h4'>Login.js</Typography>
            {/* <StepComp stepText="Login.js"></StepComp> */}
            <CodeBox codeSnippet={codeSnippet}></CodeBox>
            <Typography mt={2} variant='h4'>Description if the codebase</Typography>
            <Process list={list}></Process>


            <Box mt="3">
                <Typography mt={2} variant='h4'>Login.css</Typography>
                {/* <StepComp stepText="Login.js"></StepComp> */}
                <CodeBox codeSnippet={codeSnippet2}></CodeBox>
                <Typography mt={2} variant='h4'>Description if the codebase</Typography>
                <Process list={list2}></Process>
            </Box>
        </Box>
    );
};

export default LoginFront;