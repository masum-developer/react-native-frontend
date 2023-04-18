const CssData = [
    {
        name: 'introductioncss',
        section1: {
            title1: 'What is CSS?',
            desc1: "Welcome to This Designing World Which we can called CSS. CSS stands for Cascading Style Sheets, which is a language used to describe the presentation of web pages. It is used to define the styles and layouts of HTML documents, including colors, fonts, positioning, and more."
        },
        section2: {
            title2: 'Why do we learn CSS?',
            desc2: 'CSS works by selecting HTML elements and applying styles to them. These styles can be defined in an external CSS file, which is linked to the HTML document, or they can be defined directly in the HTML document using the "style" attribute.',
            desc3: 'CSS also supports the concept of inheritance and cascading, which means that styles applied to a parent element will be inherited by its child elements, unless overridden by a more specific style.',
            title4: 'How to use CSS?',
            desc4: 'CSS uses selectors to target specific HTML elements, such as "h1" for heading elements or "p" for paragraph elements. Styles can then be applied to these selectors, such as setting the font size or color.',
            desc5: 'Overall, CSS is a powerful tool for controlling the appearance of web pages and plays an important role in web design and development.',
            desc6: "Here's a basic example of how CSS can be used to style a webpage. Let's say we want to style the text color of all the headings in our HTML document to blue.",
            title: "Example",
            desc7: "HTML Code:",
            codeTemplate2: `<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to Ts4u webpage</h1>
    <p>Hi, This is our Ts4u Bootcamp</p>
  </body>
</html>
`,
            desc8: "CSS Code:",
        },
        section3: {

            codeTemplate3: `h1, h2 {
  color: blue;
}
`
        }



    },
    {
        name: "selectors",

        section1: {
            title1: "What is CSS Selectors?",
            desc1: "Basically , CSS selector selects the HTML elements what do you want to style. CSS selectors are used to select HTML elements and apply styles to them."

        },
        section2: {
            title2: "How to used CSS Selectors?",
            desc: ' Here are some commonly used of CSS Selectors:',
            desc2: "So This is not the end.These are just a few examples of the many CSS selectors available. By using different combinations of selectors, you can target specific elements and apply styles to them."
        },
        section3: {
            title3: 'CSS ID Selector',
            desc3: 'The CSS ID Selector is used to select and apply styles to a specific HTML element based on its unique "id" attribute value. The syntax for the ID Selector is to use the "#" symbol followed by the value of the "id" attribute:',
            codeTemplate3: `#my-id {
   /* Styles will be write here */
}
`,

        },

        section4: {
            desc4: 'In the above example, the ID Selector selects the HTML element that has an "id" attribute value of "my-id" and applies styles to it. Heres an example of how you might use an ID Selector in HTML and CSS:',

        },
        section5: {
            desc5: "HTML Code",
            codeTemplate5: `<div id="header">
  <h1>Welcome to Ts4u website!</h1>
  <p>Here you will find all sorts of useful information.</p>
</div>
`

        },
        section6: {
            desc6: "CSS Code",
            codeTemplate6: `#header {
  background-color: yellow;
  color: blue;
  padding: 20px;
}
`
        },
        section7: {
            title7: "CSS Class Selector",
            desc7: 'The CSS Class Selector is used to select and apply styles to one or more HTML elements based on their shared class attribute value. The syntax for the Class Selector is to use the "." symbol followed by the value of the class attribute:',
            codeTemplate7: `.my-class {
   /* Styles will be write here */
}
`
        },
        section8: {
            desc8: 'In the above example, the Class Selector selects all HTML elements that have a "class" attribute value of "my-class" and applies styles to them. Here is an example of how you might use a Class Selector in HTML and CSS:',

        },
        section9: {
            desc9: "HTML Code",
            codeTemplate9: `<div class="box">
  <h2>Box title</h2>
  <p>Box content goes here...</p>
</div>

<div class="box">
  <h2>Another Box Title</h2>
  <p>More box content goes here...</p>
</div>
`
        },
        section10: {

            desc10: 'CSS Code',
            codeTemplate10: `.box {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
`,
            desc11: 'In this example, the Class Selector is used to select both "div" elements that have a "class" attribute value of "box" and apply a border, padding, and margin styles to them. The styles specified in the CSS will apply to all elements that share the same class attribute value in the HTML code.',
            desc12: "Output:"
        }

    },
    {
        name: 'colors',
        section1: {
            title1: "What is CSS Colors?",
            desc1: 'Well, We know that Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values. CSS Basically allows you to set colors for text, backgrounds, borders, and other elements using a variety of color formats. ',
        },
        section2: {
            title2: 'How to Specify colors in CSS?',
            desc: "Here are some ways to specify colors in CSS:",
            desc2: '1. Color Keywords: You can use a predefined set of color keywords in CSS, such as "red", "blue", "green", etc. For example:',
            codeTemplate2: `p {
  color: red;
}
`,


        },
        section3: {
            desc3: '2. Hexadecimal Notation: You can use a six-digit hexadecimal value to specify a color. The first two digits represent the red component, the next two digits represent the green component, and the last two digits represent the blue component. For example:',
            codeTemplate3: `p {
  color: #FF0000;
}
`
        },
        section4: {
            desc4: '3. RGB Notation: You can use the RGB notation to specify a color, where the values of red, green, and blue are specified using the RGB color model. For example:',
            codeTemplate4: `p {
  color: rgb(255, 0, 0);
}
`
        },
        section5: {
            desc5: '4. RGBA Notation: You can use the RGBA notation to specify a color with an alpha value, which represents the opacity of the color. For example:',
            codeTemplate5: `p {
  color: rgba(255, 0, 0, 0.5);
}
`
        },
        section6: {
            desc6: 'In this example, the alpha value is set to 0.5, which makes the text semi-transparent.'
        },
        section7: {
            desc7: 'These are just a few ways to specify colors in CSS. There are many other color formats you can use, such as HSL and HSLA.'
        },
        section8: {
            title8: "Example",
            desc8: "HTML Code:",
            codeTemplate8: `<div id="header">
  <h1>Welcome to Ts4u website!</h1>
  <p>Here you will find all sorts of useful information.</p>
</div>`
        },
        section9: {
            desc9: "CSS Code:",
            codeTemplate9: `#header {
        color: blue;
}`,

        }


    },
    {
        name: 'background',
        section1: {
            title1: "What is CSS Background?",
            desc1: 'In CSS, you can set the background properties of an HTML element, including the color, image, position, and repeat.'
        },
        section2: {
            title2: "How to use CSS Background?",
            desc: " Here are some commonly used background properties:",
            desc2: '1. Background Color: You can set the background color of an element using the background-color property. For example:',
            codeTemplate2: `div {
  background-color: #f2f2f2;
}
`
        },
        section3: {
            desc3: 'This sets the background color of all div elements to a light gray color.'
        },
        section4: {
            desc4: '2. Background Image: You can set a background image using the`background-image` property. For example:',
            codeTemplate4: `div {
  background-image: url('image.jpg');
}
`
        },
        section5: {
            desc5: 'This sets the background image of all `div` elements to the specified image.'
        },
        section6: {
            desc6: '3. Background Repeat: You can control the repeat behavior of a background image using the `background-repeat` property. For example:',
            codeTemplate6: `div {
  background-image: url('image.jpg');
  background-repeat: no-repeat;
}
`
        },
        section7: {
            desc7: '4.Background Position: You can control the position of a background image using the background-position property. For example:',
            codeTemplate7: `div {
  background-image: url('image.jpg');
  background-position: center;
}
`

        },
        section8: {
            desc8: 'This sets the background image of all `div` elements to the specified image and centers it within the element.',

        },
        section9: {
            desc9: '5. Background Attachment: You can control whether a background image scrolls with the content or stays fixed using the `background-attachment` property. For example',

            codeTemplate9: `div {
  background-image: url('image.jpg');
  background-attachment: fixed;
}
`
        },
        section10: {
            desc10: "This sets the background image of all div elements to the specified image and makes it fixed, so it doesn't scroll with the content."
        },
        section11: {
            title11: "Example",
            desc11: "HTML Code:",
            codeTemplate11: `<div id="header">
  <h1>Welcome to Ts4u website!</h1>
  <p>Here you will find all sorts of useful information.</p>
</div>`
        },
        section12: {
            desc12: "CSS Code:",
            codeTemplate12: `#header {
  background-color: yellow;
  color: blue;
  padding: 20px;
}`,

        }
    },
    {
        name: 'margin',
        section1: {
            title1: "What is Margin?",
            desc1: "In CSS, margin is the space outside the border of an element. It is used to create space between HTML elements."

        },
        section2: {
            title2: 'What are the sizes of Margin?',
            desc2: 'The margin property can be set using one, two, three, or four values, which define the size of the margin on each side of an element:'
        },
        section3: {
            title3: 'How to use Margin in your code?',
            desc3: 'You can set margin values using different units of measurement, such as pixels (px), ems (em), or percentages (%), among others. For example, to set a margin of 10 pixels on all sides of an element, you could use:',

        },
        section4: {
            desc4: 'CSS Code:',
            codeTemplate4: `margin: 10px;
`
        },
        section5: {
            desc5: 'To set different margin values for each side of an element, you can use:',
            codeTemplate5: `margin-top: 10px;
margin-right: 5px;
margin-bottom: 20px;
margin-left: 5px;
`
        },
        section6: {
            desc6: 'Alternatively, you can use shorthand properties to set multiple margin values in a single line. For example:',
            codeTemplate6: `margin: 10px 5px 20px;
`
        },
        section7: {
            desc7: 'This sets the top margin to 10 pixels, the right and left margins to 5 pixels, and the bottom margin to 20 pixels. You can also set all margins to the same value using shorthand, like so:',
            title7: 'Example',
            codeTemplate7: `<!DOCTYPE html>
<html>
     <head>
     <style>
        div {
           margin: 30px;
           border: 1px solid #4CAF89;
        }
      </style>
      </head>
      <body>
         <h2>Welcome to TS4U Abroad</h2>
      </body>
</html>`
        }
    },
    {
        name: 'padding',
        section1: {
            title1: "What is Padding?",
            desc1: 'In CSS, padding refers to the space between an elements content and its border.The padding property can be used to specify the amount of padding for each side of an element.With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).',
            title: 'What are the properties for specify the Padding?',
            desc: 'CSS has properties for specifying the padding for each side of an element:'

        },
        section2: {
            title2: 'How to use Padding in CSS?',
            desc2: 'Well Here we give some examples of how we can use padding in CSS :',
            codeTemplate2: `/* Set the padding of a div */
div {
  padding: 20px;
}
`
        },
        section3: {
            desc3: "This code sets the padding of all div elements to 20 pixels. This means that there will be 20 pixels of space between the content of the div element and its border."
        },
        section4: {
            desc4: "You can also specify different padding values for each side of an element. For example:",
            codeTemplate4: `/* Set the padding of a div */
div {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
`
        },
        section5: {
            desc5: "In this code, the padding on the top of the div element is set to 10 pixels, the padding on the right is set to 20 pixels, the padding on the bottom is set to 30 pixels, and the padding on the left is set to 40 pixels."
        },
        section6: {
            desc6: "You can use shorthand syntax to specify multiple padding values at once:",
            codeTemplate6: `/* Set the padding of a div */
div {
  padding: 10px 20px 30px 40px;
}
`
        },
        section7: {
            desc7: "In this code, the first value (10 pixels) sets the top padding, the second value (20 pixels) sets the right padding, the third value (30 pixels) sets the bottom padding, and the fourth value (40 pixels) sets the left padding."
        },
        section8: {
            title8: "Example",
            codeTemplate8: `<!DOCTYPE html>
<html>
     <head>
     <style>
        div {
           padding: 30px;
           border: 10px solid blue;
        }
      </style>
      </head>
      <body>
         <h1>Welcome to TS4U Abroad</h1>
      </body>
</html>`

        }
    },
    {
        name: 'boxmodel',
        section1: {
            title1: "What is Box Model? ",
            desc1: "The CSS box model is a design concept that describes how HTML elements are rendered on a webpage. Every HTML element is represented by a rectangular box that contains its content, padding, border, and margin."
        },
        section2: {
            title2: 'What are the layers of Box Model?',
            desc2: "The box model is composed of four layers:"
        },
        section3: {
            title3: 'How to use Box Model?',
            desc3: 'To use the box model in CSS, you can adjust the size and spacing of your HTML elements using the following properties:'

        },
        section4: {
            desc4: "Here's an example of how to use the box model to create a box with padding, border, and margin:",
            codeTemplate4: `/* Set the box model of a div */
div {
  box-sizing: border-box;
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
}
`
        },
        section5: {
            desc5: "In this example, we've set the width and height of the div element to 300 pixels and 200 pixels, respectively. We've added 20 pixels of padding around the content of the element, a 1-pixel solid black border around the padding, and a 10-pixel margin around the border.",
        },
        section6: {
            desc6: "By adjusting these properties, you can create a variety of different layouts and designs for your webpage using the box model in CSS."
        },
        section7: {
            title7: 'Example',
            codeTemplate7: `<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Set the box model of a div */
      div {
        box-sizing: border-box;
        width: 300px;
        height: 200px;
        padding: 20px;
        border: 1px solid black;
        margin: 10px;
      }
    </style>
  </head>
  <body>
    <div>
        <h2>Welcome to TS4U Abroad</h2>
        <p>Here We provide an Awesome Bootcamp. </p>
        <p>Join Us</p>
     
    </div>
  </body>
</html>
`,
            desc7: "In this example, we've created a div element with a width of 300 pixels, a height of 200 pixels, 20 pixels of padding, a 1-pixel solid black border, and a 10-pixel margin. We've also added some content inside the div element, including a heading and a paragraph."
        },
        section8: {
            desc8: "By using the box model, we've created a box that contains the content, padding, border, and margin. The box is centered on the page with space around it to improve the layout and readability of the page."
        },
        section9: {
            desc9: "So You can adjust the values of the width, height, padding, border, and margin properties to create different sizes and styles of boxes, depending on your design needs."
        }

    },
    {
        name: 'heightandwidth',
        section1: {
            title1: "What is Height And Width?",
            desc1: 'Height and width are the dimensions of an object, such as an image, a video, a container, or any other element in a web page or application. In CSS, the height and width properties are used to define the size of an HTML element such as a div, image, or input field.'
        },
        section2: {
            desc2: 'Height refers to the vertical measurement of an object from top to bottom, while width refers to the horizontal measurement from left to right. These dimensions are usually measured in pixels (px), but can also be specified in other units of measurement such as ems, rems, percentages, and more.'
        },
        section3: {
            desc3: "In web development, the height and width properties are commonly used in CSS to define the size of HTML elements, including images, videos, containers, and more. By setting the height and width properties, you can control the dimensions of an object, as well as how it is displayed and positioned on a web page."
        },
        section4: {
            title4: "Why do we use Height and Width in CSS?",
            desc4: 'In CSS, height and width are used to define the size of an HTML element, such as an image, a video, a container, or any other element on a web page. The main reasons for using height and width properties in CSS are:',
            list4: ['Control the size of an element: By setting the height and width of an element, you can control its size and ensure that it fits within a particular layout or design.',
                'Maintain consistency: Setting the height and width of elements can help maintain consistency across a web page or site. For example, images with the same dimensions can be aligned in a grid layout, making the design more uniform.',
                'Optimize page load time: By specifying the exact dimensions of an image, the browser can reserve the appropriate amount of space for it, which can help to optimize page load times.',
                'Improve accessibility: Setting the height and width of an element can help to improve accessibility for users with disabilities, as screen readers can use this information to provide more accurate descriptions of the content',

            ],
        },
        section5: {
            title5: "How to use Height and Width?",
            desc5: "To use height and width in CSS, you need to follow these steps:",
            list5: ['Select the HTML element that you want to size. For example, if you want to set the size of an image, you can select the <img> tag.',
                'Open your CSS file or add a <style> tag to the head section of your HTML file.',
                'Use the selector to target the HTML element you want to size. For example, to target an image with the class name my-image',

                'Inside the curly braces of the selector, use the height and width properties to set the size of the element. ',
                'Save your changes and refresh your web page to see the updated size of the element. ',

            ],

        },
        section6: {
            desc6: 'CSS Code',
            codeTemplate6: `.my-image {
  /* CSS rules go here */
}
`
        },
        section7: {
            desc7: "For example, to set the height and width of an image to 300 pixels.You can also use other units of measurement like ems or percentages, or even use relative units to make the size of the element responsive to changes in the browser window size.",
            codeTemplate7: `.my-image {
  height: 300px;
  width: 300px;
}
`
        },
        section8: {
            title8: "Example",
            desc8: 'You can also use other units of measurement like ems or percentages, or even use relative units to make the size of the element responsive to changes in the browser window size.',
            codeTemplate8: `<!DOCTYPE html>
<html>
  <head>
    <style>      
      div {  
        width: 300px;
        height: 200px;      
      }
    </style>
  </head>
  <body>
    <div>
        <img src="hero.png" class="TS4U_Hero">    
    </div>
  </body>
</html>`
        },
        section9: {
            desc9: 'In this example, we have an image with the class name "TS4U_Hero". In the CSS code, we have targeted this image by using the <style> tag. We have set the height property to 300px and the width property to 500px, which will resize the image to a height of 300 pixels and a width of 500 pixels.'
        },
        section10: {
            desc10: "As we can see clearly that by using height and width properties in this way, we can perfectly control the size of the image and ensure that it fits within a particular layout or design."
        }

    },
    {
        name: "font",
        section1: {
            title1: "What is Font?",
            desc1: 'In CSS (Cascading Style Sheets), the term "font" refers to the set of properties used to style and modify the appearance of text on a webpage. CSS provides various font-related properties that allow you to control the appearance of text, such as font family, font size, font weight, font style, and others.',
        },
        section2: {
            desc2: 'There are different types of font families available in CSS, such as serif, sans-serif, monospace, cursive, and fantasy.'
        },
        section3: {
            title3: 'How to specify Font in CSS ?',
            desc3: 'To specify a font in CSS, you can use the font-family property to specify the name of the font family you want to use, and you can also specify other properties like font-weight, font-style, font-size, and line-height.'

        },
        section4: {
            desc4: "Here's an example of how to specify a font in CSS:",
            codeTemplate4: `body {
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
`
        },
        section5: {

            desc5: "This example sets the font family to Arial, with sans-serif as a fallback option in case Arial is not available on the user's device. It also sets the font size to 16 pixels and the line height to 1.5 times the font size."
        },
        section6: {
            title6: "What are the properties associated with Font Properties?",
            desc6: "In CSS, font is a property that is used to specify the typeface, size, weight, style, and line-height of text on a web page. It is used to define the visual appearance of text content in web pages. There are several properties associated with the font property, including:",
            list6: ['font-family: Specifies the font family of the text, such as Arial, Times New Roman, or a custom font.',
                'font-size: Specifies the size of the font, typically in pixels (px), ems (em), or points (pt).',
                'font-style: Specifies whether the font should be italic, oblique, or normal.',

                'font-weight: Specifies the weight of the font, such as bold or normal.',
                'line-height: Specifies the height of each line of text, typically as a multiple of the font size.',

            ],

        },
        section7: {
            desc7: 'Here is an example of how to use the font property in CSS:',
            codeTemplate7: `p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
}
`
        },
        section8: {
            title8: "Example",
            desc8: 'This example sets the font family to Arial or any sans-serif font, sets the font size to 16 pixels, sets the font weight to bold, and sets the line-height to 1.5 times the font size. This will make all paragraphs on the page display with these font properties.',
            codeTemplate8: `<!DOCTYPE html>
<html>
  <head>
    <style>      
     .h1 {
        font-family: "Times New Roman", Times, serif;
}

     .p2 {
        font-family: Arial, Helvetica, sans-serif;
}

     .p3 {
        font-family: "Lucida Console", "Courier New", monospace;
}
    </style>
  </head>
  <body>
    <h1>Welcome to TS4U</h1>
    <p class="p2">Follow The Mern Website </p>
    <p class="p3">Build Your Carrer</p>
  </body>
</html>`
        }

    },
    {
        name: 'icons',
        section1: {
            title1: "What is Icons in CSS?",
            desc1: 'In CSS (Cascading Style Sheets), icons can be created using a combination of CSS properties, such as background color, border, and the use of pseudo-elements such as ::before and ::after. These icons can be used to enhance the visual appeal of a website or application, and also provide visual cues to the user.'
        },
        section2: {
            title2: 'What are the ways to use Icons in CSS?',
            desc2: 'One popular technique for creating icons in CSS is to use a font icon library, such as Font Awesome or Material Icons. These libraries provide a set of scalable vector icons that can be easily customized using CSS, such as changing the color, size, and style.'
        },
        section3: {
            desc3: 'Another way to create icons in CSS is to use SVG (Scalable Vector Graphics) icons, which are graphics that are defined using XML markup language. SVG icons can be easily customized using CSS, and can be scaled without losing their quality. They can also be animated using CSS animation properties.'
        },
        section4: {
            title4: 'How to use Icons in CSS?',
            desc4: 'There are several ways to use icons in CSS:',
            list4: ['Using icon fonts: Icon fonts are a popular method of using icons in CSS.They are font files that contain vector shapes of icons instead of letters and numbers.To use icon fonts, you first need to link to the font file in your HTML document.Then, you can use the font - family property in CSS to specify the font, and the content property to display the icon.Here is an example:'],
            codeTemplate4: `<link rel="stylesheet" href="path/to/icon/font.css">
<i class="fa fa-search"></i>

/* CSS */
.fa {
  font-family: "FontAwesome";
}
`
        },
        section5: {
            desc5: "In this example, we're using the FontAwesome icon font library, and displaying the search icon using the `fa- search` class.",
            list5: ['Using SVG icons: SVG icons are vector graphics that can be easily scaled without losing quality.To use SVG icons in CSS, you can embed the SVG code directly in your HTML or use an external SVG file.Then, you can use the content property in CSS to display the SVG icon. Here is an example:'],

            codeTemplate5: `<svg viewBox="0 0 24 24">
  <path d="M18.3 16.7l5.5 5.5-1.6 1.6-5.5-5.5v-.8l-.5-.5c-2.2 1.8-5.2 2.3-7.7 1.3-3-1.3-5.2-4.5-5.2-7.9 0-3.7 2.8-6.7 6.5-6.7 2.6 0 5.1 1.5 6.2 3.8l-.7.7zm-11.6-2.8c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7z"/>
</svg>

/* CSS */
.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: #000;
  border-radius: 50%;
  padding: 4px;
  box-sizing: border-box;
  fill: #fff;
}
`
        },
        section6: {
            desc6: 'In this example, we are displaying a search icon using SVG code, and applying some CSS styles to it.',
            list6: ['Using image icons: Image icons are bitmap images that can be displayed using the background - image property in CSS.To use image icons, you first need to have the image file in the correct format(such as PNG or JPG).Then, you can use the background - image property to display the icon. Here is an example:'],
            codeTemplate6: `<div class="icon"></div>

/* CSS */
.icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("path/to/image.png");
  background-size: cover;
}
`


        },
        section7: {
            desc7: "In this example, we're using an image file to display the icon, and applying some CSS styles to it.",
            title7: "Example",
            codeTemplate7: `<!DOCTYPE html>
<html>
<head>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>

<i class="fas fa-cloud"></i>
<i class="fas fa-heart"></i>
<i class="fas fa-car"></i>
<i class="fas fa-file"></i>
<i class="fas fa-bars"></i>

</body>
</html>`






        }
    },
    {
        name: 'list',
        section1: {
            title1: 'What is Lists in CSS?',
            desc1: 'In CSS, a list is an ordered or unordered set of items that can be displayed vertically or horizontally. Lists can be created using the HTML `<ul>` (unordered list) and `<ol>`(ordered list) elements, and can be styled using CSS properties.'
        },
        section2: {
            title2: 'What are the properties used to style List?',
            desc2: 'Here are some common CSS properties used to style lists:',
            list2: ['list-style-type: Specifies the type of bullet or numbering used in the list. Possible values include "disc", "circle", "square", "decimal", "lower-roman", "upper-roman", "lower-alpha", "upper-alpha", and "none".',
                'list-style-image: Specifies a custom image to be used as the bullet or numbering in the list.',
                'list-style-position: Specifies the position of the bullet or numbering in relation to the list item. Possible values include "inside" (the bullet/numbering appears inside the list item) and "outside" (the bullet/numbering appears outside the list item).',
                'padding-left: Specifies the padding to the left of the list item content, which can be used to align the bullet/numbering with the text.',
                'margin: Specifies the space between the list and other elements.',
                'text-indent: Specifies the indentation of the first line of text in the list item.',
                'line-height: Specifies the height of each line in the list item.',
                'color: Specifies the color of the text in the list item.',
                'background-color: Specifies the background color of the list item.',
                'font-size: Specifies the size of the text in the list item.']
        },
        section3: {
            title3: "How to style a List with CSS?",
            desc3: "Here's an example of how to style an unordered list with CSS:",
            codeTemplate3: `ul {
  list-style-type: square;
  list-style-position: outside;
  padding-left: 20px;
  margin: 20px 0;
}

li {
  margin-bottom: 10px;
  color: #333;
  background-color: #f5f5f5;
  font-size: 16px;
}
`,
        },
        section4: {
            desc4: "In this example, we're using the` list-style-type` property to specify that the list should have square bullets, and `list-style-position` to specify that the bullets should appear outside the list item. We're also using `padding-left` to create some space between the bullet and the text, and margin to create some space between the list and other elements. We're then using several other properties to style the text in the list items, including color, `background-color`, and font-size. Finally, we're using the margin-bottom property to create some space between list items."
        },
        section5: {
            desc5: "You can use similar CSS properties to style ordered lists (<ol>) and nested lists. Additionally, you can use CSS selectors to target specific list items, such as the first or last item, or items with a specific class or ID."
        },
        section6: {
            title6: 'Example',
            desc6: "Unordered list:",
            codeTemplate6: `<!DOCTYPE html>
<html>
<head>
<style>
    body{
        backgroundColor: green;
        padding: 10px 20px;
    }
    ul {
        backgroundColor: black; 
        color: white;
    }
</style>
</head>
 <body>
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ul>

 </body>
</html>`
        },
        section7: {
            desc7: "Ordered list",
            codeTemplate7: `<!DOCTYPE html>
<html>
<head>
<style>
    body{
        backgroundColor: red;
        padding: 10px 20px;
    }
    ul {
        backgroundColor: white; 
        color: black;
    }
</style>
</head>
 <body>
     <ol>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ol>

 </body>
</html>`
        },


    },
    {
        name: 'css_table',
        section1: {
            title1: 'What is Tables in CSS?',
            desc1: 'In CSS (Cascading Style Sheets), tables can be styled using a variety of properties to control the appearance of the table, including its borders, background, spacing, alignment, and typography.'
        },
        section2: {
            title2: 'What are the properties used to style Table?',
            desc2: "Here are some common CSS properties used to style tables:",
            list2: ['border:   Specifies the style, width, and color of the table borders.',
                'background-color:   Specifies the background color of the table cells.',
                'padding: Specifies the space between the cell content and the cell borders.',
                'text-align:  Specifies the horizontal alignment of the cell content.',
                'vertical-align:  Specifies the vertical alignment of the cell content.',
                'font-size:  Specifies the font size of the cell content.',
                'font-weight:  Specifies the font weight of the cell content.',
                'line-height:  Specifies the line height of the cell content.',
                'width: Specifies the width of the table or table cells.',
                'height:  Specifies the height of the table or table cells.'],

        },
        section3: {
            desc3: "Here's an example of how to style a basic table with CSS:",
            codeTemplate3: `table {
  border-collapse: collapse;
  width: 100%;
}

  th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

  th {
  background-color: #f2f2f2;
}

  tr:nth-child(even) {
  background-color: #f2f2f2;
}
`
        },
        section4: {
            desc4: "In this example, we're using the 'border-collapse' property to collapse the table borders into a single line, and the width property to set the table 'width' to 100%. We're then using the 'border' and 'padding 'properties to create borders and spacing around the table cells, and the 'text-align' property to align the cell content to the left. We're also using the 'background-color' property to alternate the background color of the table rows, and style the header (th) cells with a different background color. Finally, we're using the 'nth-child' pseudo-class to select even rows and apply a background color to them."
        },
        section5: {
            title5: "How to used Tables in CSS?",
            desc5: "In CSS, you can style tables by targeting the various components of the table structure such as the table element itself, table rows, table cells, and table headers. Here's an example of how to use tables in CSS:",

        },
        section6: {
            desc6: 'HTML CODE:',
            codeTemplate6: `<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product A</td>
      <td>$10</td>
      <td>2</td>
      <td>$20</td>
    </tr>
    <tr>
      <td>Product B</td>
      <td>$15</td>
      <td>3</td>
      <td>$45</td>
    </tr>
    <tr>
      <td>Product C</td>
      <td>$20</td>
      <td>1</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total</td>
      <td>$85</td>
    </tr>
  </tfoot>
</table>
`
        },
        section7: {
            desc7: 'CSS CODE:',
            codeTemplate7: `table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tfoot td {
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
`
        },
        section8: {
            title8: 'Example',
            desc8: "In this example, we've created a simple table with a header row, body rows, and a footer row. We're using the `border-collapse` property to collapse the table borders, and the `width` property to set the table width to 100%. We're also using the `border` and `padding` properties to create borders and spacing around the table cells, and the `text-align` property to align the cell content to the left. We're using the background-color property to style the header cells with a different `background color`, and to alternate the background color of the table rows. Finally, we're using the `tfoot` selector to target the footer row and apply a bold font weight to its cells.",
            codeTemplate8: `<!DOCTYPE html>
<html>
<head>
<style>
    body{
        background-color:#f2f380 ;
        padding: 30px 20px;
    }
    table{
        background-color:violet;
        color:black;
    }
    th,td {
        border: 2px solid black; 
        padding:8px;
        text-align:left;
    }
</style>
</head>
    <body>
         <table>
                <caption><strong>Employee Details</strong></caption>
                
         <thead>
              <tr>
                 <th>Name</th>
                 <th>Age</th>
                 <th>Gender</th>
             </tr>
        </thead>
        <tbody>
              <tr>
                 <td>Huma</td>
                 <td>25</td>
                 <td>Female</td>
              </tr>
              <tr>
                 <td>Jane</td>
                 <td>30</td>
                 <td>Male</td>
              </tr>
        </tbody>
        </table>
      

    </body>
</html>`
        },
    },
    {
        name: 'display',
        section1: {
            title1: "What is Display in CSS?",
            desc1: "In CSS, the display property specifies the type of box used for an HTML element. It controls the way an element is shown on a web page.Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline."
        },
        section2: {
            title2: 'What are the properties of Display in CSS?',
            desc2: "There are several values that can be assigned to the `display` property, each of which controls the layout and positioning of an element in different ways. Here are some common values:",
            list2: ['block: This value creates a block-level element that takes up the full width of its parent container and starts on a new line. Examples of block-level elements include div, p, and h1 through h6.',
                'inline: This value creates an inline element that flows within the text of a line. Examples of inline elements include span, a, and img.',
                'inline-block: This value creates an element that is both inline and block-level. It allows the element to flow within the text of a line, but also allows you to set the width and height of the element.',
                'none: This value hides the element completely, so it takes up no space on the page.',
                'flex: This value creates a flexible container for laying out elements in a row or a column, with the ability to control the alignment, spacing, and order of the elements.']
        },
        section3: {
            title3: 'Why should we use Display in CSS?',
            desc3: 'The `display` property in CSS determines how an HTML element should be displayed on the web page. It is an essential property because it controls the layout and positioning of the elements on the page. Here are some reasons why you should use the display property in CSS:',
            list3: ['Control Layout: The display property allows you to control the layout of elements on a web page. By choosing the appropriate display value, you can determine how much space an element should take up, whether it should be inline or block-level, and where it should be positioned on the page.',
                'Responsive Design: The display property is crucial for responsive web design. By changing the display value based on the screen size or device, you can ensure that the page layout looks good on all devices, from desktops to mobile phones.',
                'Accessibility: The display property can make web pages more accessible. For example, using the display: none; value for visually hidden content can improve accessibility for screen readers and other assistive technologies.',
                'Performance: Using the appropriate display value can improve page performance. For example, setting an element to display: none; removes it from the document flow, which can improve rendering speed.']
        }
    }
];
export default CssData;