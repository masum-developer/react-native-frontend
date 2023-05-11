import React, { Component, useContext } from "react";
// import AppContext from "../context/AppContext"
import Cookies from "js-cookie";
import axios from "axios";
import { SpinnerCircularFixed } from 'spinners-react';
// import { message } from "antd";
import store from "../store";

const configureAxiosHeader = () => {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
    const token = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME);
    if (token) {
        axios.defaults.headers.common = {
            Authorization: token,
        };
    }
};





const withAuth = (AuthComponent) => {

    return class Authenticated extends Component {
        static async getInitialProps(ctx) {

            // Ensures material-ui renders the correct css prefixes server-side
            let userAgent;
            // eslint-disable-next-line no-undef
            if (process.browser) {
                // eslint-disable-next-line prefer-destructuring
                userAgent = navigator.userAgent;
            } else {
                userAgent = ctx.req?.headers["user-agent"];
            }

            // Check if Page has a `getInitialProps`; if so, call it.
            const pageProps =
                AuthComponent.getInitialProps &&
                (await AuthComponent.getInitialProps(ctx));
            // Return props.
            return { ...pageProps, userAgent };
        }

        constructor(props) {
            super(props);
            this.state = {
                isLoading: false,
                userData: [],
            };
        }



        async componentDidMount() {

            configureAxiosHeader();

            const token = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME)

            if (token) {
                this.setState({ isLoading: true });
                axios
                    // eslint-disable-next-line no-undef
                    .post(`${process.env.NEXT_PUBLIC_API_URL}/user/verify`, {})
                    .then((res) => {
                        if (res.status === 200 && res.data.success) {

                            store.dispatch({
                                type: "SET_USER",
                                payload: res.data.user
                            })
                            
                        }
                        this.setState({ isLoading: false });
                    })
                    .catch((err) => {
                        console.log(err);
                        this.setState({ isLoading: false });
                        Cookies.remove(process.env.NEXT_PUBLIC_TOKEN_NAME);
                        // message.error(err?.response?.data?.error || "Something went wrong")
                        store.dispatch({
                            type: "LOGOUT"
                        })

                        if (window.location.pathname !== '/auth/login') {

                            window.location.pathname = '/auth/login'

                        }

                    });
            } else {
                if (window.location.pathname !== '/') {
                    window.location.pathname = '/'

                }

            }

        }

        render() {
            return (
                <div>
                    {this.state.isLoading ? (
                        <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <SpinnerCircularFixed style={{ margin: "0 auto" }} size={100} thickness={160} speed={100} color="#36D7B7" secondaryColor="rgba(0, 0, 0, .05)" />
                        </div>
                    ) : (
                        <AuthComponent {...this.props} userData={this.state.userData} />
                    )}
                </div>
            );
        }
    };
};
export default withAuth;
