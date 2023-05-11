import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/utils/createEmotionCache'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/global.scss';
import store from '../store';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import withAuth from '../helper/withAuth'
import 'nprogress/nprogress.css';
import Router from 'next/router';
import NProgress from 'nprogress';

// import "./node_modules/codemirror/lib/codemirror.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	React.useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();
	
		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);
	
		return () => {
		  // Make sure to remove the event handler on unmount!
		  Router.events.off('routeChangeStart', handleRouteStart);
		  Router.events.off('routeChangeComplete', handleRouteDone);
		  Router.events.off('routeChangeError', handleRouteDone);
		};
	  }, []);

	const theme = createTheme({
		typography: {
			h1: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 700,
				fontSize: '45px',
				lineHeight: '57px'
			},
			h2: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 700,
				fontSize: '40px',
				lineHeight: '49px'
			},
			h3: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 700,
				fontSize: '28px',
				lineHeight: '49px'
			},
			h4: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 500,
				fontSize: '18px',
				lineHeight: '21px'
			},
			subtitle1: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 400,
				fontSize: '18px',
				lineHeight: '26.44px'
			},
			subtitle2: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 400,
				fontSize: '16px',
				lineHeight: '24px'
			},
			subtitle3: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 400,
				fontSize: '14px',
				lineHeight: '24px'
			},
			body1: {
				fontFamily: [
					'Heebo', 'sans-serif'
				].join(','),
				fontWeight: 400,
				fontSize: '16px',
				lineHeight: '24px'
			}
		},
		palette: {
			background: {
				default: "#FFFFFF",
			}
		}
		,
	})

	return (
		<Provider store={store}>

			<CacheProvider value={emotionCache}>
				<Head>
					<meta name='viewport' content='initial-scale=1, width=device-width' />
				</Head>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</Provider>

	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}

const makestore = () => store
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(withAuth(MyApp))