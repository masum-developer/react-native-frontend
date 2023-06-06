import React from 'react';

const IconCom = ({ image }) => {
    return (
        <>
            <img style={{ width: '30px', height: '30px', objectFit: 'contain' }} src={image} alt="icon"></img>
        </>
    );
};

export default IconCom;