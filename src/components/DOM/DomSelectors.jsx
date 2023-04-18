import { Box, Typography } from '@mui/material';
import React from 'react';
import ImageComp from '../EnvironmentSetup/ImageComp';
import Block from '../global/Block';
import CodeBox from '../global/CodeBox';

const list = [
    "1. getElementById(): This method returns the element that has the specified ID. Example: document.getElementById('myElement');",
    "2. getElementsByClassName(): This method returns a collection of elements that have the specified class name. Example: document.getElementsByClassName('myClass');",
    "3. getElementsByTagName(): This method returns a collection of elements that have the specified tag name. Example: document.getElementsByTagName('p');",
    "4. querySelector(): This method returns the first element that matches the specified CSS selector. Example: document.querySelector('.myClass');",
    "5. querySelectorAll(): This method returns a collection of elements that match the specified CSS selector. Example: document.querySelectorAll('p');",
]

const codeTemplate = `<!DOCTYPE html>
<html>
<head>
	<title>Selecting Elements by ID</title>
</head>
<body>
	<h1 id="heading">Hello World</h1>

	<script>
		// Get the element by ID
		var heading = document.getElementById("heading");

		// Change the text of the element
		heading.innerHTML = "Welcome to My Website!";
	</script>
</body>
</html>`;

const codeTemplate2 = `<!DOCTYPE html>
<html>
  <head>
    <title>getElementsByClassName() Example</title>
  </head>
  <body>
    <div class="example">Example Div 1</div>
    <div class="example">Example Div 2</div>
    <div class="other">Other Div</div>

    <script>
    // Select all elements with class name 'example'
    const elements = document.getElementsByClassName('example');

    // Loop through the selected elements and log their text content
    for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
    }
    </script>
  </body>
</html>`;

const codeTemplate3 = `<div>
    <p>Hello World!</p>
    <p>How are you today?</p>
    <p>Have a nice day!</p>

    <script>
    const paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
    }
    </script>
</div>`;

const codeTemplate4 = `
<!DOCTYPE html>
<html>
  <head>
    <title>Example using querySelector</title>
  </head>
  <body>
    <p id="para1">This is the first paragraph.</p>
    <p>This is the second paragraph.</p>
    <script>
      const para = document.querySelector("#para1");
      para.textContent = "Updated text using querySelector!";
    </script>
  </body>
</html>`;

const codeTemplate5 = `<!DOCTYPE html>
<html>
  <head>
    <title>querySelectorAll example</title>
  </head>
  <body>
    <p class="example">This is a paragraph.</p>
    <p class="example">This is another paragraph.</p>
    <script>
      const paragraphs = document.querySelectorAll("p.example");
      for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "yellow";
      }
    </script>
  </body>
</html>`

const DomSelectors = () => {
    return (
        <Box pb={3}>

            <Typography variant='h3'>What is DOM selectors?</Typography>
            <Typography variant='subtitle2'>
                DOM selectors are methods that allow you to find and select elements in an HTML document using JavaScript. There are several DOM selectors available in JavaScript that you can use to select elements based on their ID, class, tag name, or any other attribute.
            </Typography>

            <Typography variant='subtitle2'>
                Here are some of the commonly used DOM selectors:
            </Typography>

            <Block list={list}></Block>
            <Box mt={3}>
                <Typography variant='h3'>What is 'getElementById()'</Typography>

                <Typography variant='subtitle2'>'getElementById' is a method in JavaScript that is used to select a single element in a web page by its unique identifier, which is defined by the id attribute. This method is commonly used to access specific HTML elements in the Document Object Model (DOM) of a web page and manipulate them dynamically using JavaScript. It returns the element object that matches the specified ID, or null if no matching element is found.</Typography>

                <CodeBox codeSnippet={codeTemplate}></CodeBox>


                <Typography variant='subtitle2'>
                    In the example above, we first define an h1 element with an id attribute of "heading". Then, in the JavaScript code, we use the getElementById() method to get the element with the ID "heading". Finally, we change the text of the element using the innerHTML property.
                </Typography>
            </Box>


            <Box mt={3}>
                <Typography variant='h3'>What is 'getElementsByClassName()'</Typography>

                <Typography variant='subtitle2'>'getElementsByClassName()' is a built-in JavaScript method used to select all the elements in a document that have a specific class name. It returns an HTMLCollection object which is an array-like collection of elements. This method can be used to apply a style or perform some action to multiple elements at once, without having to select them individually. Here's an example of using the getElementsByClassName() method to select all elements with a specific class name:</Typography>

                <CodeBox codeSnippet={codeTemplate2}></CodeBox>


                <Typography mt={2} variant='subtitle2'>
                    Output:
                </Typography>

                <CodeBox codeSnippet={`Example Div 1
Example Div 2`}></CodeBox>
            </Box>

            <Box mt={3}>
                <Typography variant='h3'>What is 'getElementsByTagName()'</Typography>

                <Typography variant='subtitle2'>{`'getElementsByTagName()' is a method in JavaScript that allows you to select all the elements on an HTML page with a specific tag name. For example, if you wanted to select all of the '<p>'elements on a page, you could use getElementsByTagName("p"). This method returns an HTMLCollection of all elements with the specified tag name, which can then be accessed and manipulated using JavaScript.`}</Typography>

                <CodeBox codeSnippet={codeTemplate3}></CodeBox>


                <Typography mt={2} variant='subtitle2'>
                    In this example, we select all the p elements in the HTML using getElementsByTagName() and then use a for loop to loop through the collection of elements and set their color to red using the style property.
                </Typography>
            </Box>


            <Box mt={3}>
                <Typography variant='h3'>What is 'querySelector()'</Typography>

                <Typography variant='subtitle2'>querySelector() is a method in JavaScript's DOM API that is used to select an element in the document using a CSS selector. It returns the first element that matches the specified selector. For example, if we want to select the first p element in the document, we can use the querySelector() method like this:</Typography>

                <CodeBox codeSnippet={`const firstParagraph = document.querySelector('p');`}></CodeBox>


                <Typography mt={2} variant='subtitle2'>
                    This will select the first p element that appears in the document and return it as a DOM element object. We can then manipulate this element using JavaScript to change its content or style.
                </Typography>

                <Typography mt={2} variant='subtitle2'>
                    Here's an example of using querySelector() to select the first paragraph element in an HTML document and changing its text content:
                </Typography>

                <CodeBox codeSnippet={codeTemplate4}></CodeBox>
                <Typography mt={2} variant='subtitle2'>
                    In this example, querySelector() is used to select the first paragraph element using its ID, which is "para1". The textContent property is then used to update the text content of the paragraph to "Updated text using querySelector!".
                </Typography>
            </Box>


            <Box mt={3}>
                <Typography variant='h3'>What is 'querySelectorAll()'</Typography>

                <Typography variant='subtitle2'>{`querySelectorAll() is a method of the Document and Element interfaces that returns a static (not live) NodeList of all the elements that match a specified CSS selector(s). The NodeList object represents a collection of nodes, which can be looped over using a for loop or converted to an Array using Array.from(). Here's an example of using querySelectorAll() to select all the <p> elements with a class of "example" and change their background color to yellow:`}</Typography>

                <CodeBox codeSnippet={codeTemplate5}></CodeBox>


                <Typography mt={2} variant='subtitle2'>
                    {`In this example, the querySelectorAll() method is called with the selector "p.example", which selects all the <p> elements with a class of "example". The resulting NodeList is looped over using a for loop, and the style property of each element is accessed to change its background color to yellow.`}
                </Typography>
            </Box>


        </Box>
    );
};

export default DomSelectors;