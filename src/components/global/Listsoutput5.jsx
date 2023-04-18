import { Box, Typography } from '@mui/material';
import React from 'react';

const ListsOutput5 = () => {
    return (
    
                <ol>
  <li>Element Selector: Selects HTML elements based on their tag name. For example, the selector `p` will select all `p` elements on the page and allow you to apply styles to them.</li>
  <li>Class selector - selects elements based on their class attribute. For example,` .my-class` selects all elements with `class= `my-class``.</li>
  <li>ID selector - selects elements based on their id attribute. For example, `#my-id` selects the element with `id=`my-id``.</li>
  <li>Universal selector - selects all elements. For example, `*` selects all elements in the document.</li>
  <li>Descendant selector - selects elements that are descendants of another element. For example, `div p` selects all `p` elements that are descendants of a `div` element.</li>
 <li>Attribute selector - selects elements based on the value of their attributes. For example, `input[type=`text`]` selects all input elements with `type=`text``.</li>
            </ol>



    

    )
}

export default ListsOutput5;