import { Box, TextField, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import Layout from '../../src/components/global/Layout';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Cookies from 'js-cookie';
import { Alert, message, notification, Space, Spin } from 'antd';


const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loginErrors, setLoginErrors] = useState(null);
    const [showNotification, setShowNotification] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log('data', data);

        setIsLoading(true)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, data)
            .then(res => {
                let { isOtpSend, success, token } = res.data;
                if (isOtpSend) {
                    return notification.error({ message: "You did not verify your email! Please go to ts4u.us and verify your email" })
                };

                console.log('res.data.success', res.data.success);

                if (res.data.success) {
                    Cookies.set(process.env.NEXT_PUBLIC_TOKEN_NAME, `Bearer ${res.data.token}`);
                    message.success("Logged in successfully");
                    setShowNotification(true)

                }

                window.location.href = "/";
                setIsLoading(false);

            })
            .catch((err) => {
                console.log(err);
                err && err.response && setLoginErrors(err.response.data);
                setIsLoading(false);
            });
    }

    return (
        <Layout>
            <Box sx={{ display: 'grid', minHeight: '100vh' }}>
                <Box sx={{ placeSelf: 'center' }}>
                    {/* <DesignedBox paddingLarge> */}
                    <Box textAlign="center">
                        <Typography gutterBottom variant="h3">
                            Sign In
                        </Typography>
                    </Box>


                    {loginErrors && loginErrors.error && (
                        <Alert
                            style={{ marginBottom: "10px" }}
                            message={loginErrors.error}
                            type="error"
                        />
                    )}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <Box width={{ xs: '280px', sm: '350px' }} my={2}>
                            <TextField fullWidth sx={{ display: 'block' }} id="outlined-basic1" label="Email" variant="outlined" {...register("email", { required: "Email is Required." })} placeholder="Email" type="email" />
                        </Box>
                        {errors.email && <p style={{ color: 'red' }}>Email is required</p>}

                        <Box width={{ xs: '280px', sm: '350px' }} my={2}>
                            <TextField fullWidth sx={{ display: 'block' }} id="outlined-basic2" label="Password" variant="outlined"  {...register("password", { required: "Password is Required." })} placeholder="Password" type="password" />
                        </Box>

                        {errors.password && <p style={{ color: 'red' }}>Password is required</p>}

                        <Button disabled={isLoading} variant="contained" type="submit" fullWidth color="primary" size="large" sx={{
                            padding: '10px 0', backgroundColor: '#313641', '&:hover': {
                                backgroundColor: '#CDC0F8',
                                color: 'black',
                            }
                        }} disableElevation>
                            {isLoading && <CircularProgress size={20} />}
                            Sign In with TS4U

                        </Button>

                        {/* <input type="submit" /> */}
                    </form>
                </Box>
            </Box>
        </Layout>
    );
};

export default Login;