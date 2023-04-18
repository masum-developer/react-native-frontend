import Head from 'next/head';
import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <meta name='keywords' content={keywords}></meta>
            </Head>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

Layout.defaultProps = {
    title: 'TS4U - MERN Stack Developer Track.',
    description: 'our website application aims to provide students with a well-rounded educational experience, addressing the challenges in the technology of MERN stack. ',
    keywords: 'MERN, educational, JS, ReactJs, NodeJs, MongoDB'
}

export default Layout;