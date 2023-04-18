import { Box, Typography } from '@mui/material';
import React from 'react';

const HtmlOutput = ({ h1Text, pText,linkText,underline,links,small,italic,strong,mark,bigText,images1,images2,images3,aboutlink,title }) => {
    return (
        <Box mt={1}  sx={{ backgroundColor: '#ECE4EC', padding: '20px 10px' }}>
            {
                h1Text && <Typography variant='h2'>{h1Text}</Typography>
            }

            {
                pText && <Typography variant='subtitle2'>{pText}</Typography>
            }
            {
                linkText && <a href='https://ts4u.us/'>{linkText}</a> 
            }
            {
                underline && <h2 style={{ textDecoration: 'underline' }}>{underline}</h2>
            }
            {
                bigText && <big>{bigText}</big>
            }
            {
                links && <a href='https://ts4u.us/'>{links}</a>
            }
            {
                aboutlink && <a href="about.html">About TS4U</a>

            }
            {
                small && <small>{small}</small>
            }
            {
                italic && <i>{italic}</i>
            }
            {
                strong && <strong>{strong}</strong>
            }
            {
                mark && <mark>{mark}</mark>
            }
            {
                images1 && <img src="logo.svg" slt="logo"></img>
            }
            {
                images2 && <img src="hero.png" slt="logo"></img>
            }
            {
                images3 && <img src="mern.png" slt="logo"></img>
                
            }
            {
                title && <title>{title}</title>
            }
            
        </Box>
    );
};

export default HtmlOutput;