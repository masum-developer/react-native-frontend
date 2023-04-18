import { Box, Typography } from '@mui/material';
import React from 'react';

const ListsOutput9 = () => {
    return (
        <Box mt={1} sx={{ backgroundColor: '#ECE4EC', padding: '10px 20px' }}>
   
            <ol>
  <li><b>`Width`and`Height`</b>: These properties are used to set the width and height of an element. By default, they refer to the size of the elements content box.</li>
  <li><b>`Padding`</b>:This property is used to set the space between the content and the border of an element. You can set the padding for each side of the element using the `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` properties.</li>
  <li><b>`Border`</b>: This property is used to create a border around the element. You can set the border width, style, and color using the `border-width`,` border-style`, and `border-color` properties, respectively. You can also use the shorthand border property to set all three values at once.</li>
  <li><b>`Margin`</b>:  This property is used to set the space between the elements border and other elements on the page. You can set the margin for each side of the element using the `margin-top`, `margin-right`,`margin-bottom`, and `margin-left` properties.</li>
</ol>

        </Box>

    )
}

export default ListsOutput9;