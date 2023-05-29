import React from 'react';

const IconCom = ({ image }) => {
    return (
        <>
            <img style={{ width: '35px', height: '35px', objectFit: 'contain' }} src={image} alt="icon"></img>
        </>
    );
};

export default IconCom;