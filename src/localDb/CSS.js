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
    },
    section4: {
      title4: 'How can we use display in CSS',
      desc4: 'To use the display property in CSS, you need to target the element using a selector and then set the display property to the desired value. For example, to make a paragraph element a block-level element, you can use the following CSS code:',
      codeTemplate4: `p {
  display: block;
}
`
    },
    section5: {
      desc5: 'This will make all paragraph elements on the page block-level elements. You can also use the display property to create more complex layouts by using flexbox or grid, which allow you to control the positioning and sizing of elements in a container.'
    },
    section6: {
      title6: 'Example',
      codeTemplate6: `<!DOCTYPE html>
<html>
<head>
	<title>Display Example</title>
	<style>
		.container{
            margin:20px;
            border:5px solid #4CAF89;
        }
        h2.block{
            display:block;
            background-color:black;
            color:blue;
        }
        h3.inline-block{
            display:inline-block;
            background-color:black;
            color:violet;
        }
        h4.inline{
            display:inline;
            background-color:black;
            color:yellow;
        }
		
	</style>
</head>
<body>
	<div class="container">
		<h3 class="inline-block">Welcome to TS4U Abroad</h3>
		<h2 class="block">Welcome to TS4U Abroad</h2>
		<h4 class="inline">Welcome to TS4U Abroad</h4>
		
	</div>
</body>
</html>
`

    }
  },
  {
    name: 'position',
    section1: {
      title1: 'What is Position in CSS?',
      desc1: 'In CSS, the position property is used to control the positioning of an HTML element on a webpage. The position property has several values that you can use to control how an element is positioned relative to its parent element or the viewport.'
    },
    section2: {
      title2: 'What are the values of Position in CSS?',
      desc2: 'In CSS, the position property can have the following values:',
      list2: ['static - This is the default value, which means that the element is positioned according to the normal flow of the document. It is not affected by the top, bottom, left, right, and z-index properties.', 'relative - This value positions the element relative to its normal position, without affecting the layout of the other elements on the page. When you use relative positioning, you can use the top, bottom, left, and right properties to offset the element from its normal position.', 'absolute - This value positions the element relative to its nearest positioned ancestor, which is an element that has a position value other than static. If no positioned ancestor is found, the element is positioned relative to the initial containing block (usually the body element). Absolute positioning takes the element out of the normal flow of the document, so other elements on the page will not be affected by its position. When you use absolute positioning, you can use the top, bottom, left, and right properties to position the element precisely.', 'fixed - This value positions the element relative to the viewport, which means that it stays in the same position even when the page is scrolled. Fixed positioning takes the element out of the normal flow of the document, so other elements on the page will not be affected by its position. When you use fixed positioning, you can use the top, bottom, left, and right properties to position the element precisely.', 'sticky - This value is a hybrid of relative and fixed positioning. When you use sticky positioning, the element behaves like a relatively positioned element until it reaches a certain threshold (usually the top or bottom of the viewport), at which point it becomes fixed to the viewport. This can be useful for creating sticky navigation menus or other elements that need to remain visible as the user scrolls.']
    },
    section3: {
      title3: "Why we should use Position in CSS?",
      desc3: 'We use the position property in CSS to control the position of an HTML element on a webpage. There are several reasons why we might want to do this:',
      list3: ['Create a specific layout: By using positioning, we can create a more specific layout for our webpage, placing elements in specific locations on the page and creating more complex designs.', 'Overlap elements: By using relative and absolute positioning, we can overlap elements on top of each other. This can be useful for creating effects like tooltips, dropdown menus, or popups.', 'Create fixed or sticky elements: By using fixed or sticky positioning, we can create elements that stay in a fixed position on the page, even as the user scrolls. This can be useful for creating navigation menus or other elements that need to remain visible.', 'Responsive design: Positioning can also be used to create responsive designs that adjust to different screen sizes or device orientations. By using relative or absolute positioning, we can position elements in specific locations on the page that adjust to different screen sizes.']
    },
    section4: {
      title4: 'How can we use Position in CSS?',
      desc4: 'In CSS, the position property is used to control the positioning of an HTML element on a webpage. There are several ways to use the position property, depending on the effect you want to achieve.'
    },
    section5: {
      list5: ['1. Static positioning: This is the default value of the position property, and it positions the element according to the normal flow of the document. To use static positioning, you do not need to set the position property at all.'],
      codeTemplate5: `div {
  /* This element is positioned statically by default */
}
`
    },
    section6: {
      list6: ['2. Relative positioning: This value positions the element relative to its normal position, without affecting the layout of other elements on the page. To use relative positioning, set the position property to "relative" and then use the top, bottom, left, and right properties to offset the element from its normal position.'],
      codeTemplate6: `div {
  position: relative;
  top: 10px;
  left: 20px;
}
`
    },
    section7: {
      list7: ['3. Absolute positioning: This value positions the element relative to its nearest positioned ancestor, or to the initial containing block if no positioned ancestor is found. Absolute positioning takes the element out of the normal flow of the document, so other elements on the page will not be affected by its position. To use absolute positioning, set the position property to "absolute" and then use the top, bottom, left, and right properties to position the element precisely.'],
      codeTemplate7: `div {
  position: absolute;
  top: 100px;
  left: 50px;
}
`
    },
    section8: {
      list8: ['4. Fixed positioning: This value positions the element relative to the viewport, which means that it stays in the same position even when the page is scrolled. Fixed positioning takes the element out of the normal flow of the document, so other elements on the page will not be affected by its position. To use fixed positioning, set the position property to "fixed" and then use the top, bottom, left, and right properties to position the element precisely.'],
      codeTemplate8: `div {
  position: fixed;
  top: 0;
  left: 0;
}
`,
    },
    section9: {
      list9: ['5. Sticky positioning: This value is a hybrid of relative and fixed positioning. When you use sticky positioning, the element behaves like a relatively positioned element until it reaches a certain threshold, at which point it becomes fixed to the viewport. To use sticky positioning, set the position property to "sticky" and then use the top, bottom, left, and right properties to position the element precisely.'],
      codeTemplate9: `div {
  position: sticky;
  top: 10px;
}
`
    },
    section10: {
      title10: 'Example',
      codeTemplate10: `<!DOCTYPE html>
<html>
<head>
	<title>Display Example</title>
	<style>
		.container{
            margin:20px;
            border:5px solid #4CAF;
        }
        h1.absolute{
            position:absolute;
            background-color:black;
            color:blue;
        }
        h2.initial{
            position:initial;
            background-color:black;
            color:violet;
        }
        h3.relative{
            position:relative;
            background-color:black;
            color:yellow;
        }
        h4.sticky{
            position:sticky;
            background-color:black;
            color:red;
        }
		
	</style>
</head>
<body>
	<div class="container">
		
		<h2 class="initial">Welcome to TS4U Abroad</h2>
		<h3 class="relative">Welcome to TS4U Abroad</h3>
        <h4 class="sticky">Welcome to TS4U Abroad</h4>
        <h1 class="absolute">Welcome to TS4U Abroad</h1>
		
	</div>
</body>
</html>`
    }
  },
  {
    name: 'z-index',
    section1: {
      title1: 'What is Z-Index in CSS?',
      desc1: 'The z-index is a CSS property that specifies the stack order of an element. It controls how elements are positioned and layered on top of each other within the document flow.The z-index property applies only to elements that have a position value of relative, absolute, or fixed. The z-index value can be any integer or the keyword auto.The higher the z-index value, the closer the element is to the top of the stack, and the more likely it is to appear on top of other elements with lower z-index values. If two elements have the same z-index value, the one that comes later in the HTML document will be on top.'

    },
    section2: {
      title2: 'What are the properties of Z-index in CSS?',
      desc2: '`z-index` is a single CSS property that accepts an integer or the keyword auto. It does not have any sub-properties or additional values.However, z-index can only be applied to elements that have a position value of relative, absolute, or fixed.',
      codeTemplate2: `.box {
  position: relative;
  z-index: 2;
}

.container {
  position: relative;
  z-index: 1;
}
`
    },
    section3: {
      desc3: 'In this example, the element with the class .box will appear on top of the element with the class `.container` because it has a higher z-index value.'
    },
    section4: {
      title4: 'How can we use z-index in CSS?',
      desc4: 'You can use z-index to control the stacking order of elements on a webpage. Here are some ways to use z-index:',
      list4: ['Stacking elements: You can use z-index to position one element above or below another. For example, if you have a dropdown menu that needs to appear above other page content, you can give it a higher z-index value than the other elements.',
        'Creating overlapping effects: You can use z-index to create interesting visual effects by overlapping elements with different z-index values. For example, you can position a background image behind a text block by giving the text block a higher z-index value.', 'Controlling element visibility: You can use z-index to control which elements are visible on the page. For example, you can position a modal popup window above other content by giving it a higher z-index value, and then remove it from view by resetting its z-index value to a lower value.']
    },
    section5: {
      title5: 'Example',
      desc5: "Here's an example of how to use z-index to create overlapping effects:",
      codeTemplate5: `<!DOCTYPE html>
<html>
<head>
	<title>Display Example</title>
	<style>
		.container{
            margin:20px;
            border:5px solid #4CAF;
        }
        h1.absolute{
            position:absolute;
            z-index: 2;
            background-color:black;
            color:blue;
        }
        h2.initial{
            position:initial;
            z-index: 1;
            background-color:black;
            color:violet;
        }
        h3.relative{
            position:relative;
            z-index: 3;
            background-color:black;
            color:yellow;
        }
        h4.sticky{
            position:sticky;
            z-index: 1;
            background-color:black;
            color:red;
        }
		
	</style>
</head>
<body>
	<div class="container">
		
		<h2 class="initial">Welcome to TS4U Abroad</h2>
		<h3 class="relative">Welcome to TS4U Abroad</h3>
        <h4 class="sticky">Welcome to TS4U Abroad</h4>
        <h1 class="absolute">Welcome to TS4U Abroad</h1>
		
	</div>
</body>
</html>`

    }
  },
  {
    name: 'float',
    section1: {
      title1: "What is Float in CSS?",
      desc1: 'In CSS, a float is a property that specifies how an element should be positioned in relation to other elements. When an element is floated, it is taken out of the normal document flow and positioned to the left or right of its container.',

    },
    section2: {
      desc2: 'The float property can have one of three values: left, right, or none. When set to left or right, the element will be positioned to the left or right of its container, respectively. When set to none, the element will not be floated and will remain in its default position in the document flow.'
    },
    section3: {
      desc3: 'Floating elements can be used to create multi-column layouts, or to position elements such as images and captions in relation to each other. However, it is important to use them judiciously and to be aware of their effects on the surrounding content, as they can sometimes cause unexpected layout issues.'
    },
    section4: {
      title4: 'What are the values of Float in CSS?',
      desc4: 'In CSS, the float property can have one of three possible values:',
      list4: ['left: The element is floated to the left of its container.',
        'right: The element is floated to the right of its container.',
        'none: The element is not floated and remains in the normal document flow.']

    },
    section5: {
      desc5: "It's important to note that when an element is floated, it is taken out of the normal document flow and its surrounding elements will flow around it. This can have unintended consequences on the layout of the page, so it's important to use floating elements with care and to test the layout in different browsers and screen sizes."
    },
    section6: {
      title6: 'Why should we use Float in CSS?',
      desc6: "Floats can be useful in CSS for a number of reasons:",
      list6: ['Creating Multi-Column Layouts: Floats can be used to create multi-column layouts, where content is divided into columns and floated to the left or right. This is a common technique for creating responsive designs that adapt to different screen sizes.', 'Positioning Elements: Floats can also be used to position elements, such as images or captions, within a container. For example, an image can be floated to the left or right of a paragraph of text, with the text flowing around it.',
        'Clearing Floats: When elements are floated, they are taken out of the normal document flow and can cause other elements to flow around them in unexpected ways. To prevent this, the clear property can be used to force elements to start on a new line below the last floated element.']
    },
    section7: {
      desc7: "However, it's important to note that floats can also have unintended consequences on the layout of the page, and can sometimes cause issues with responsive design or accessibility. As a result, newer CSS layout techniques such as flexbox and grid are becoming more popular for modern web design."
    },
    section8: {
      title8: 'How can we use Float in CSS?',
      desc8: "To use float in CSS, you need to apply the float property to an element that you want to float. The float property can take one of three values: left, right, or none."
    },
    section9: {
      desc9: 'For example, to float an image to the left of a paragraph of text, you can use the following CSS:',
      codeTemplate9: `img {
  float: left;
  margin-right: 10px; /* Add some space between the image and the text */
}
`
    },
    section10: {
      desc10: 'This will float the image to the left of the container, and the text will flow around it. You can also float elements to the right by using float: right; instead.'
    },
    section11: {
      desc11: "It's important to note that when you use float, the floated element is taken out of the normal document flow and can cause other elements to flow around it in unexpected ways. To prevent this, you may need to use the clear property to force elements to start on a new line below the last floated element."
    },
    section12: {
      desc12: "For example, to clear floats and start a new line, you can use the following CSS:",
      codeTemplate12: `.clearfix {
  clear: both;
}
`
    },
    section13: {
      desc13: 'Then add the clearfix class to the element immediately following the floated element, like this:'
    },
    section14: {
      codeTemplate14: `<img src="image.jpg" alt="An image">
<p class="clearfix">Some text</p>
`,
      desc14: 'This will ensure that the text starts on a new line below the floated image, without flowing around it.'

    },
    section15: {
      title15: "Example",
      codeTemplate15: `<!DOCTYPE html>
    <html>
       <head>
       <style>
           div {
              float: left;
              padding: 15px; 
            }

          .div1 {
              background: red;
            }

          .div2 {
              background: yellow;
            }

          .div3 {
              background: green;
            }
      </style>
      </head>
      <body>

         <div class="div1">Div 1</div>
         <div class="div2">Div 2</div>
         <div class="div3">Div 3</div>

      </body>
    </html>
`

    }


  },
  {
    name: 'block',
    section1: {
      title1: "What is Block in CSS?",
      desc1: 'In CSS, a block refers to a section of code enclosed within curly braces {}. A block typically contains one or more CSS declarations, each of which consists of a property and its associated value. The properties define the visual style of an HTML element, such as its color, font-size, margin, padding, and so on.'


    },
    section2: {
      desc2: 'Here is an example of a CSS block:',
      codeTemplate2: `p {
  font-size: 16px;
  color: blue;
}
`,


    },
    section3: {
      desc3: "In this example, the CSS block targets all <p> elements and sets their font size to 16 pixels and their color to blue. The block contains two declarations, each of which specifies a property and its associated value."
    },
    section4: {
      desc4: 'CSS blocks can also be nested within each other to create more specific styles. For example:',
      codeTemplate4: `div {
  background-color: yellow;
  padding: 10px;
  border: 1px solid black;
}

div p {
  color: red;
}
`
    },
    section5: {
      desc5: 'In this example, the first block targets all <div> elements and sets their background color, padding, and border properties. The second block targets any <p> elements that are inside a <div> element and sets their color to red.'
    },
    section6: {
      title6: "Why should we use Blocks in CSS?",
      desc6: 'CSS blocks are used to group related CSS declarations together and apply them to specific HTML elements. Using blocks in CSS has several advantages:',
      list6: ['Organization: Blocks help to organize CSS code by grouping related declarations together. This makes it easier to read and maintain CSS code, especially for larger websites or applications.', 'Reusability: By defining CSS blocks, you can easily apply the same styles to multiple HTML elements throughout your website or application. This helps to ensure consistency in the visual style of your website or application.', 'Specificity: CSS blocks allow you to apply specific styles to specific HTML elements. This gives you fine-grained control over the appearance of your website or application.', 'Modularity: CSS blocks can be reused across different pages or components, making it easier to create modular CSS code that can be used throughout your website or application.',

      ]

    },
    section7: {
      title7: "How can we use Block in CSS?",
      desc7: "In CSS, you can use blocks to group related CSS declarations together and apply them to specific HTML elements. Here's an example of how to use a block in CSS:",
      codeTemplate7: `/* Define a block that applies styles to all <h1> elements */
h1 {
  color: red;
  font-size: 32px;
}

/* Define a block that applies styles to all <p> elements with class "intro" */
p.intro {
  color: blue;
  font-size: 16px;
}

/* Define a block that applies styles to all elements with class "button" */
.button {
  background-color: green;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
`
    },
    section8: {
      desc8: "In this example, we've defined three different CSS blocks. The first block applies styles to all <h1> elements, setting their color to red and their font size to 32 pixels. The second block applies styles to all <p> elements with the class intro, setting their color to blue and their font size to 16 pixels. The third block applies styles to all elements with the class button, setting their background color to green, their text color to white, and adding some padding and border-radius to create a button-like appearance."
    },
    section9: {
      desc9: "To use these blocks in your HTML code, you would simply add the appropriate class or tag to the elements you want to style. For example:",
      codeTemplate9: `<h1>Welcome to Our TS4U website</h1>
<p class="intro">Join our Bootcamp , set your Carrer and Live your dreams</p>
<button class="button">Follow Us</button>
`
    },
    section10: {
      desc10: 'In this example, the first element (an <h1> tag) would be styled with the first block, the second element (a <p> tag with class "intro") would be styled with the second block, and the third element (a <button> tag with class "button") would be styled with the third block.'
    },
    section11: {
      title11: "Example",
      codeTemplate11: `<!DOCTYPE html>
<html>
<head>
	<title>Block Example</title>
	<style>
		.container{
            margin:20px;
            border:5px solid #4CAF89;
        }
        h2.block{
            display:block;
            background-color:black;
            color:blue;
        }
        h3.inline-block{
            display:inline-block;
            background-color:black;
            color:violet;
        }
        h4.inline{
            display:inline;
            background-color:black;
            color:yellow;
        }
		
	</style>
</head>
<body>
	<div class="container">
		<h3 class="inline-block">Welcome to TS4U Abroad</h3>
		<h2 class="block">Welcome to TS4U Abroad</h2>
		<h4 class="inline">Welcome to TS4U Abroad</h4>
		
	</div>
</body>
</html>`
    }
  },
  {
    name: "align",
    section1: {
      title1: "What is Align in css?",
      desc1: 'In CSS, the "align" property refers to the horizontal alignment of an element within its containing element.There are several different values that can be used with the "align" property:',
      list1: ['"left" - aligns the element to the left edge of its containing element.', '"right" - aligns the element to the right edge of its containing element.',
        '"center" - centers the element horizontally within its containing element.', '"justify" - expands the element to fill the width of its containing element and spaces out the content evenly.']
    },
    section2: {
      desc2: 'The "align" property can be applied to various types of elements, including text, images, and blocks of content. It is often used in conjunction with other CSS properties to achieve the desired layout and presentation of web pages.'

    },
    section3: {
      title3: "Why Should we use Align in CSS?",
      desc3: 'Aligning elements in CSS is important for creating a visually appealing and well-structured layout on a webpage. Here are some reasons why alignment is important:',
      list3: ['Readability: Proper alignment ensures that text and other content on a page are easy to read and follow. For example, aligning text to the left or right can make it easier to scan and read.', 'Visual Hierarchy: Alignment helps to establish a visual hierarchy on a page, making it clear which elements are related to each other and which ones are more important. This can help guide the users attention and improve the overall user experience.', 'Consistency: Aligning elements consistently throughout a website creates a sense of unity and coherence. This makes it easier for users to navigate and understand the content on a page.', 'Responsiveness: With the use of responsive design, aligning elements becomes even more important as it ensures that content is properly displayed on various devices and screen sizes.']
    },
    section4: {
      title4: 'How can we use Align in CSS?',
      desc4: 'The "align" property in CSS can be applied to various types of elements such as text, images, and blocks of content. Here are some ways to use the "align" property in CSS:',
      list4: ['Aligning text: To align text within a container, use the "text-align" property. For example, to align text to the center, use:'],
      codeTemplate4: `text-align: center;
`
    },
    section5: {
      list5: ['Aligning images:To align images within a container, use the "display" and "margin" properties. For example, to align an image to the center, use:',],
      codeTemplate5: `display: block;
margin: 0 auto;
`
    },
    section6: {
      list6: ['Aligning blocks of content: To align blocks of content within a container, use the "display" and "margin" properties as well. For example, to align a block of content to the center, use:'],
      codeTemplate6: `display: flex;
justify-content: center;
align-items: center;
`
    },
    section7: {
      title7: 'Example',
      desc7: 'In the above example, we are using the "display: flex" property to create a flexible container, and then using the "justify-content" and "align-items" properties to center the content horizontally and vertically.',
      codeTemplate7: `<!DOCTYPE html>
<html>
<head>
	<title>Align Example</title>
	<style>
		.container{
            margin:20px;
            border:5px solid #4CAF89;
        }
        h2.block{
            display:block;
            background-color:black;
            color:violet;
            text-align: center
        }
       
		
	</style>
</head>
<body>
	<div class="container">
		
		<h2 class="block">Welcome to TS4U Abroad</h2>
		
		
	</div>
</body>
</html>`
    }
  },
  {
    name: 'dropdown',
    section1: {
      title1: 'What is DropDown in CSS?',
      desc1: "A dropdown menu in CSS is a user interface element that allows users to select an option from a list that drops down from a button or a link when clicked or hovered over. Dropdown menus are commonly used in web development to create navigational menus, select options, or to provide a more user-friendly interface for complex forms."
    },
    section2: {
      desc2: "In CSS, a dropdown menu can be created using various techniques such as the use of the :hover and :focus pseudo-classes, the display property, and positioning. Dropdown menus are typically created using nested HTML elements, such as lists and nested lists, and then styled using CSS."

    },
    section3: {
      desc3: 'There are many ways to create dropdown menus in CSS, ranging from simple to more complex, depending on the specific design requirements. However, some common features of dropdown menus include a visible trigger element, such as a button or link, and a hidden list of options that appears when the trigger element is clicked or hovered over. The dropdown list typically disappears when the user clicks outside of the dropdown or selects an option.'
    },
    section4: {
      title4: "Why should we use DropDown in CSS?",
      desc4: "There are various reasons for using Dropown in CSS. Among of them:",
      list4: ['Dropdown menus in CSS are useful because they provide an easy and intuitive way for users to navigate a website or application, especially when there are many options to choose from. Dropdown menus can help to declutter the user interface by hiding some options until they are needed, making it easier for users to find what they are looking for.', 'Dropdown menus are also very flexible and can be used for a variety of purposes. For example, they can be used to create hierarchical navigation menus, where users can drill down through multiple levels of options to find the information they need. They can also be used to create forms with many options, where users can select from a list of pre-defined options rather than typing in the information themselves.',]
    },
    section5: {
      title5: "How can we use DropDown in CSS?",
      desc5: "There are several ways to create dropdown menus using CSS. Here are a few common techniques:",
      list5: ['Using the "hover" pseudo-class: This is a simple technique where the dropdown menu appears when the user hovers over the trigger element. Here is an example:'],
      codeTemplate5: `<ul>
  <li><a href="#">Home</a></li>
  <li class="dropdown">
    <a href="#">Products</a>
    <ul class="dropdown-menu">
      <li><a href="#">Product 1</a></li>
      <li><a href="#">Product 2</a></li>
      <li><a href="#">Product 3</a></li>
    </ul>
  </li>
  <li><a href="#">Contact Us</a></li>
</ul>
`
    },
    section6: {
      codeTemplate6: `.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
`,
      desc6: 'In this example, the dropdown menu appears when the user hovers over the "Products" link.'
    },
    section7: {
      list7: ['Using the "click" event: This technique requires JavaScript to toggle the visibility of the dropdown menu when the user clicks on the trigger element. Here is an example:'],
      codeTemplate7: `<ul>
  <li><a href="#">Home</a></li>
  <li class="dropdown">
    <a href="#">Products</a>
    <ul class="dropdown-menu">
      <li><a href="#">Product 1</a></li>
      <li><a href="#">Product 2</a></li>
      <li><a href="#">Product 3</a></li>
    </ul>
  </li>
  <li><a href="#">Contact Us</a></li>
</ul>
`
    },
    section8: {
      codeTemplate8: `.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 0;
}

.dropdown.open .dropdown-menu {
  display: block;
}
`
    },
    section9: {
      codeTemplate9: `var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
  var trigger = dropdown.querySelector('a');

  trigger.addEventListener('click', function(event) {
    event.preventDefault();
    dropdown.classList.toggle('open');
  });
});
`,
      desc9: 'In this example, the dropdown menu appears when the user clicks on the "Products" link. The JavaScript code toggles the "open" class on the parent element when the trigger element is clicked, which in turn toggles the visibility of the dropdown menu.'
    },
    section10: {
      title10: 'Example',
      codeTemplate10: `<!DOCTYPE html>
<html>
<head>
  <title>Dropdown Menu Example</title>
  <style>
    /* styles for the menu */
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: #333;
    }

    li {
      display: inline-block;
      margin-right: 10px;
    }

    a {
      display: block;
      color: #fff;
      padding: 10px;
      text-decoration: none;
    }

    /* styles for the dropdown menu */
    .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      padding: 0;
      border: 5px solid violet;
    }

    .dropdown:hover .dropdown-menu {
      display: block;
      background-color:blue;
    }

    .dropdown-menu li {
      display: block;
      margin: 0;
    }

    .dropdown-menu a {
      display: block;
      padding: 10px;
      color: #333;
    }
  </style>
</head>
<body>
  <ul>
   
    <li class="dropdown">
   
      <div class="dropdown-menu">
        <option><a href="#">HTML</a></option>
        <option><a href="#">CSS</a></option>
        <option><a href="#">JAVASCRIPT</a></option>
      </div>
    </li>
  </ul>
</body>
</html>
`
    }
  },
  {
    name: "form",
    section1: {
      title1: 'What is Form in CSS?',
      desc1: "In CSS, a form refers to the section of an HTML document that contains user-input fields, such as text boxes, radio buttons, checkboxes, dropdown lists, and buttons. CSS can be used to style the various elements within a form, such as changing the background color, font size, and spacing between elements.",
    },
    section2: {
      desc2: "The <form> element in HTML is used to create a form and is typically used in conjunction with input elements to create user-friendly interfaces for collecting and submitting data."
    },
    section3: {
      desc3: "When styling a form using CSS, you can target specific elements within the form by using selectors such as input, label, select, and button. You can also use CSS to control the layout and positioning of the various form elements on the page."
    },
    section4: {
      title4: "Why should we use Form in CSS?",
      desc4: "CSS is used to style the appearance of HTML forms, which can help make them more visually appealing and user-friendly. By using CSS to customize the look and feel of forms, you can create a more cohesive and consistent design across your website or application.",
    },
    section5: {
      desc5: 'Here are some reasons why you should use CSS to style your forms:',
      list5: ['Consistency: By using CSS to style your forms, you can ensure that all form elements on your website have a consistent appearance, which can help improve the user experience.', 'Accessibility: CSS can be used to make forms more accessible to users with disabilities by changing the color, size, and contrast of form elements. This can help ensure that all users are able to interact with your forms.', 'Branding: Customizing the appearance of your forms with CSS can help reinforce your brand identity and create a more professional-looking website.', 'User experience: By making your forms more visually appealing and easier to use, you can improve the overall user experience on your website, which can lead to higher engagement and conversions.']
    },
    section6: {
      title6: "How can we use Form in CSS?",
      desc6: "To style a form in CSS, you can target the various form elements using CSS selectors and apply styling properties to them. Here are some examples:"
    },
    section7: {
      desc7: " 1. Styling Input Fields: To style the input fields in a form, you can use the input selector.For example, to change the border color of all input fields in a form to blue, you can use the following code: ",
      codeTemplate7: `input {
  border: 1px solid blue;
}
`
    },
    section8: {
      desc8: "2. Styling Labels: To style the labels in a form, you can use the label selector.For example, to change the font size of all labels in a form to 16 pixels, you can use the following code: ",
      codeTemplate8: `label {
  font-size: 16px;
}
`
    },
    section9: {
      desc9: "3. Styling Buttons: To style the buttons in a form, you can use the button selector.For example, to change the background color of all buttons in a form to green, you can use the following code: ",
      codeTemplate9: `button {
  background-color: green;
}
`
    },
    section10: {
      desc10: "4. Styling Select Lists: To style the select lists in a form, you can use the select selector.For example, to change the font family of all select lists in a form to Arial, you can use the following code: ",
      codeTemplate10: `select {
  font-family: Arial;
}
`
    },
    section11: {
      title11: "Example",
      codeTemplate11: `<form>
  <label for="name">First Name:</label>
  <input type="text" id="first" name="first"><br>

  <label for="email">Last Name:</label>
  <input type="text" id="last" name="last"><br>

 

  <button type="submit" value="Submit"></button>
</form>
`
    },
    section12: {
      codeTemplate12: `form {
  background-color: #f2f2f2;
  padding-bottom: 2px;
  box-shadow: 0px 0px 10px #888;
  max-width: 500px;
  margin: 0 auto;
  text-align:center;
  border: 2px solid blue;

}

label {
  display: block;
  font-weight: bold;
}

input[type="text"], textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px #ddd;
}

input[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

`
    }
  },
  {
    name: 'cssimages',
    section1: {
      title1: "What is Images in CSS?",
      desc1: "In CSS, images can be added to web pages using the background-image property or the img tag. The background-image property is used to add a background image to an element, such as a div, and can be set to a URL that points to the location of the image file. The img tag is used to display an image within an HTML document, and the src attribute is used to specify the URL of the image.",
    },
    section2: {
      desc2: "CSS provides additional properties to control the behavior and appearance of images, such as background-size, background-repeat, background-position, and object-fit for img tag. These properties can be used to resize, position, and repeat the image, or to control how the image is displayed within its container.",
    },
    section3: {
      desc3: "It's important to optimize images for web use to reduce the file size and ensure faster loading times. Techniques like compressing, resizing, and choosing the appropriate file format can help to optimize images for web use."
    },
    section4: {
      title4: "Why should we use Images in CSS?",
      desc4: "Using images in CSS can help to enhance the visual design and appeal of web pages, making them more engaging and interesting to users. Images can be used to convey important information, such as product images on an e-commerce site, or to create a specific mood or atmosphere on a website.",
    },
    section5: {
      desc5: "In addition, images can be used to create visual hierarchy and structure on a web page, helping to guide users through the content and highlighting important information. For example, a large, high-quality image can be used as a background for a section of a page to draw the user's attention and create a visual focal point."
    },
    section6: {
      desc6: "Images can also be used as part of responsive web design, allowing web pages to adapt to different screen sizes and device types. By using CSS to control the size and position of images, web designers can ensure that images are displayed correctly and optimally across a range of devices, from desktop computers to mobile phones and tablets."
    },
    section7: {
      title7: "How can we use Images in CSS?",
      desc7: "There are two main ways to use images in CSS: as a background image using the background-image property, or as an inline image using the img tag. Here's a brief overview of how to use each method:",
    },
    section8: {
      list8: [
        "1. Background images: To use an image as a background in CSS, you need to specify the background-image property and set its value to the URL of the image file. Here's an example:"
      ],
      codeTemplate8: `div {
  background-image: url("path/to/image.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
`

    },
    section9: {
      desc9: "In this example, we're setting the background image of a div element to path/to/image.jpg. We're also using the background-size, background-repeat, and background-position properties to control the appearance of the background image.",
      list9: ["2. Inline images: To use an image as an inline element in HTML, you can use the img tag and set its src attribute to the URL of the image file. Here's an example:"],
      codeTemplate9: `<img src="path/to/image.jpg" alt="Image description">
`

    },
    section10: {
      desc10: "In this example, we're using the img tag to display an image inline in an HTML document. The src attribute is set to path/to/image.jpg, and we're also including an alt attribute to provide a text description of the image for accessibility purposes."
    },
    section11: {
      title11: "Example",
      desc11: "HTML CODE:",
      codeTemplate11: `<!DOCTYPE html>
<html>
<head>
	<title>Background Image Example</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="header">
		<h1>Welcome to Our TS4U Website</h1>
	</div>
	<div class="content">
		<p>We offer the best IT Engineering Bootcamp Program for both IT professionals and non-IT professionals. We commit to providing 100% effort to getting you a high-paying job with 85% success rate. Let's begin your career together.</p>
	</div>
</body>
</html>
`

    },
    section12: {
      desc12: "CSS CODE:",
      codeTemplate12: `.header {
	background-image: url("header-bg.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
}

.content {
	background-color: #fff;
	padding: 20px;
	margin: 20px;
	box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
}
`
    }

  },
  {
    name: 'units',
    section1: {
      title1: "What is Units in CSS?",
      desc1: "In CSS, a unit is a measurement that is used to specify the size or position of an element on a web page. There are several types of units in CSS, including:",
      list1: ['Pixels (px) - This is a fixed unit of measurement that is commonly used for defining the size of elements on a web page. One pixel is equal to one dot on a computer screen.', 'Percentages (%) - This unit is used to define a size or position relative to the parent element. For example, if an element has a width of 50%, it will be half the width of its parent element.', 'Em - This unit is based on the font size of the element. One em is equal to the font size of the element. For example, if the font size of an element is 16 pixels, one em is equal to 16 pixels.', 'Rem - This unit is similar to em, but it is based on the font size of the root element (i.e., the <html> element). This makes it easier to create responsive designs that scale with the size of the viewport.', 'Viewport units (vw, vh, vmin, vmax) - These units are based on the size of the viewport (i.e., the size of the browser window). For example, 1vw is equal to 1% of the viewport width, and 1vh is equal to 1% of the viewport height.']
    },
    section2: {
      title2: "Why should we use Units in CSS?",
      desc2: "Using units in CSS is important because it allows web developers to define the size and position of elements on a web page in a consistent and scalable way. By using units, we can ensure that our web pages are accessible and responsive on different devices and screen sizes.",
    },
    section3: {
      desc3: "For example, using relative units such as percentages, ems, or rems can help ensure that elements on a web page scale appropriately when the user changes the size of their browser window or views the page on a different device. This makes our web pages more accessible to users with different screen sizes and resolutions, and can also improve our website's search engine optimization (SEO) by making our content more readable and accessible."
    },
    section4: {
      desc4: "Additionally, using units in CSS can help ensure that our designs are consistent across different browsers and platforms. Different browsers may render CSS units slightly differently, but by using units that are widely supported and consistent across platforms, we can minimize these differences and create a more cohesive user experience."
    },
    section5: {
      title5: 'How can we use Units in CSS?',
      desc5: "To use units in CSS, you simply need to specify the desired unit after the numerical value of the property you're setting. Here are a few examples:"

    },
    section6: {
      desc6: '1. Pixels (px)',
      codeTemplate6: `.my-element {
  width: 100px;
  height: 50px;
  font-size: 16px;
}
`
    },
    section7: {
      desc7: 'In this example, we are setting the width and height of an element to 100 pixels and 50 pixels, respectively, and the font size to 16 pixels.'
    },
    section8: {
      desc8: "2. Percentages (%)",
      codeTemplate8: `.my-element {
  width: 50%;
  height: 25%;
}
`


    },
    section9: {
      desc9: 'In this example, we are setting the width and height of an element to 50% and 25% of the width and height of its parent element, respectively.'
    },
    section10: {
      desc10: "3.Em",
      codeTemplate10: `.my-element {
  font-size: 1.5em;
  padding: 1em;
}
`
    },
    section11: {
      desc11: 'In this example, we are setting the font size of an element to 1.5 times the font size of its parent element, and the padding to 1 times the font size of the element.'
    },
    section12: {
      desc12: "4. Rem",
      codeTemplate12: `html {
  font-size: 16px;
}

.my-element {
  font-size: 1.5rem;
  padding: 1rem;
}
`
    },
    section13: {
      desc13: "In this example, we're setting the font size of the root element (i.e., the <html> element) to 16 pixels, and then setting the font size of an element to 1.5 times the font size of the root element, and the padding to 1 times the font size of the root element."
    }, section14: {
      desc14: '5. Viewport units (vw, vh, vmin, vmax)',
      codeTemplate14: `.my-element {
  width: 50vw;
  height: 25vh;
}
`
    },
    section15: {
      desc15: `In this example, we're setting the width of an element to 50% of the viewport width, and the height to 25% of the viewport height.`
    },
    section16: {
      title16: "Example",
      codeTemplate16: `<!DOCTYPE html>
<html>
<head>
	<title>Units Example</title>
	<style>
  h1{
    font-size: 60px;
  }
  p{
    font-size: 25px;
    line-height: 50px;
  }
  </style>
</head>
 <body>
	  <div>
		  <h1>Welcome to Our TS4U Website</h1>
	  </div>
	  <div>
		  <p>We offer the best IT Engineering Bootcamp Program for both IT professionals and non-IT professionals. We commit to providing 100% effort to getting you a high-paying job with 85% success rate. Let's begin your career together.</p>
	  </div>
  </body>
</html>`

    }
  },
  {
    name: "specificity",
    section1: {
      title1: "What is Specificity in CSS?",
      desc1: "In CSS (Cascading Style Sheets), specificity refers to the way the browser calculates which CSS styles to apply to an HTML element when there are multiple styles that could apply. Specifically, specificity is a measure of how 'specific' a CSS selector is, relative to other selectors that target the same element."
    },
    section2: {
      desc2: "The more specific a selector is, the higher its specificity value and the more weight it carries when determining which style to apply. For example, an ID selector (#example) is more specific than a class selector (.example), which is more specific than an element selector (div)."
    },
    section3: {
      desc3: "The specificity of a selector is calculated using a four-part formula, where each part represents the number of matching selectors for a particular type of selector:",
      list3: ['Count the number of ID selectors in the selector.', 'Count the number of class selectors, attribute selectors, and pseudo-classes in the selector.', 'Count the number of element selectors and pseudo-elements in the selector.', 'If there are any inline styles applied to the element, add 1 to the specificity value.']
    },
    section4: {
      desc4: "By comparing the specificity values of different selectors, the browser can determine which styles to apply to a given element. In general, it's best to use the simplest, most general selectors possible to target elements, as this can help prevent unintended styling conflicts. However, in cases where you need to override existing styles or apply styles to specific elements, understanding specificity can be useful for crafting effective CSS selectors."


    },
    section5: {
      title5: "Why should we use Specificity in CSS?",
      desc5: "We use specificity in CSS for several reasons:"
    },
    section6: {
      desc6: "1. Avoiding Conflicts: Specificity helps avoid conflicts between different styles and selectors. When multiple styles target the same element, the browser uses specificity to determine which style takes precedence. This helps ensure that styles are applied consistently across an entire website."
    },
    section7: {
      desc7: "2. Overriding Default Styles: Sometimes, we need to override the default styles of an element provided by a browser or framework. Specificity helps us do this by allowing us to create more specific selectors that take precedence over default styles."
    },
    section8: {
      desc8: "3. Targeting Specific Elements: Specificity allows us to target specific elements on a webpage. By using more specific selectors, we can apply styles to specific elements without affecting other elements on the page."
    },
    section9: {
      desc9: "4. Reusability of Styles: Specificity allows us to create reusable styles that can be applied to different elements on a website. By using more general selectors, we can apply styles to multiple elements at once, saving time and effort."
    },
    section10: {
      title10: "How can we use Specificity in CSS?",
      desc10: "In CSS, there are several ways to increase specificity:"
    },
    section11: {
      desc11: "1. Use ID selectors: ID selectors have a higher specificity value than class or element selectors. You can use them to target specific elements on a page."
    },
    section12: {
      desc12: "2. Use multiple selectors: You can increase the specificity of a selector by combining multiple selectors. For example, h1.special targets all h1 elements with a class of 'special'. This selector has a higher specificity value than either h1 or .special alone."
    },
    section13: {
      desc13: "3. Use nested selectors: You can increase specificity by nesting selectors within other selectors. For example, ul li a targets all a elements that are descendants of li elements that are descendants of ul elements."
    },
    section14: {
      title14: "Example",
      desc14: "4. Use the !important rule: Adding the `!important`  rule to a style declaration overrides any conflicting styles for that element. However, it's generally not recommended to use this rule, as it can make your CSS more difficult to maintain.",
      codeTemplate14: `<!DOChtml>
      <html>
      <head>
      </head>
         <body>
             <h1 style="color: red;"> Follow Our TS4U WebPage!</h1>

         </body>
      </html>`
    }
  },
  {
    name: "important",
    section1: {
      title1: "What is !Important in CSS?",
      desc1: "In CSS, `!important` is a keyword that can be added to a CSS declaration to give it higher specificity than other rules that may also apply to the same element."
    },
    section2: {
      desc2: "When a CSS declaration includes the !important keyword, it will take precedence over other rules for that property, even if those rules have a higher specificity or are declared later in the stylesheet."
    },
    section3: {
      desc3: "Here is an example:",
      codeTemplate3: `p {
  color: blue;
}

.highlight {
  color: red !important;
}
`
    },
    section4: {
      desc4: "In this example, we have two rules that target p elements. The first rule sets the color property to blue, while the second rule sets it to red and includes the !important keyword. As a result, any p elements with the class highlight will have red text, even if they are nested within elements that have the blue text color declared."
    },
    section5: {
      title5: "Why should we use !important in CSS?",
      desc5: "Using !important in CSS should be done sparingly and only in certain situations where it's necessary.Some reasons why you might use !important include:",
      list5: ['Overriding default styles: In some cases, default styles applied by a browser or a third-party library might be difficult to override without using !important. For example, if you need to change the font color of a link that is styled with a library like Bootstrap, you might need to use !important to override the default link color.', 'Fixing layout issues: Sometimes, layout issues can be caused by conflicting styles that are difficult to debug. In these cases, using !important to force a particular style can be a quick and easy solution.', 'Applying critical styles: If you need to ensure that a particular style is always applied to an element, even if other styles might conflict, !important can be a useful tool.']
    },
    section6: {
      title6: "How can we use !important in CSS?",
      desc6: "To use !important in CSS, simply add it to the end of a style declaration, like this:",
      codeTemplate6: `.example {
  color: red !important;
}
`
    },
    section7: {
      desc7: "In this example, the !important keyword is added to the color property. This ensures that the color property will take precedence over any other conflicting styles, even if those styles have higher specificity or are defined later in the stylesheet."
    },
    section8: {
      desc8: "It's important to note that !important should be used sparingly and only when necessary. Overuse of !important can lead to specificity wars and make your CSS harder to maintain and debug. In general, it's better to use more specific selectors or refactor your CSS code to avoid using !important whenever possible."
    },
    section9: {
      title9: "Example",
      codeTemplate9: `<!DOChtml>
      <html>
      <head>
      <style>
          h1{
            color: Blue;
          }
          p{
            color : white !important;
            background-color:black
          }
      
      </style>
      </head>
         <body>
             <h1> Follow Our TS4U WebPage!</h1>
             <p>We offer the best IT Engineering Bootcamp Program for both IT professionals and non-IT professionals. We commit to providing 100% effort to getting you a high-paying job with 85% success rate. Let's begin your career together.</p>

         </body>
      </html>`

    }
  },
  {
    name: 'flexbox',
    section1: {
      title1: "What is Flexbox in CSS?",
      desc1: "Flexbox is a layout module in CSS that provides a more efficient way to create complex and flexible layouts compared to traditional block and inline layout methods. It allows you to distribute space among items in a container, align and reorder them, and adjust their size and position based on available space."
    },
    section2: {
      title2: "What are the properties of a Flex Container?",
      desc2: "Flexbox works by defining a container element (the flex container) and applying specific properties to its child elements (the flex items). The main properties of a flex container are:",
      list2: ['`display: flex;` : This property turns the container into a flex container, allowing its child elements to be treated as flex items.',
        '`flex-direction: row/column;`: This property defines the main axis of the flex container, which determines the direction in which flex items are arranged.', '`justify-content: center/flex-start/flex-end/space-between/space-around/space-evenly;`: This property aligns flex items along the main axis of the flex container.',
        '`align-items: center/flex-start/flex-end/stretch/baseline;`: This property aligns flex items along the cross axis of the flex container.'

      ]
    },
    section3: {
      title3: "Why should we use Flexbox in CSS?",
      desc3: "There are several reasons why you should use flexbox in your CSS layouts:"
    },
    section4: {
      desc4: "1. Flexible and responsive layouts: Flexbox makes it easy to create flexible and responsive layouts that adapt to different screen sizes and device types. With flexbox, you can define how your content should flow and adjust the size and positioning of your elements based on the available space. "
    },
    section5: {
      desc5: "2. Simplifies layout structure: Flexbox simplifies the layout structure and reduces the need for nested containers, floats, and positioning techniques, which can be cumbersome and hard to maintain."
    },
    section6: {
      desc6: "3. Easy alignment and distribution: With flexbox, you can easily align and distribute items within a container. You can center items vertically and horizontally, and distribute space between or around items with just a few lines of code."
    },
    section7: {
      desc7: "4. Reordering of content: Flexbox makes it easy to reorder content visually without changing the source order of your HTML. This is particularly useful for responsive layouts, where you may want to rearrange elements for different screen sizes."
    },
    section8: {
      desc8: "5. Cross-browser compatibility: Flexbox has excellent cross-browser compatibility, which means that it works in all modern web browsers, including older versions of Internet Explorer."
    }, section9: {
      title9: "How can we use Flexbox in CSS?",
      desc9: "To use flexbox in CSS, you need to follow these steps: ",
      list9: ['Define a flex container: You need to set the `display` property of the container element to flex to turn it into a `flex` container. For example:'],
      codeTemplate9: `.container {
  display: flex;
}
`
    },
    section10: {
      list10: ['Define the flex items: The child elements of the container become the flex items, and you need to define specific properties for them to control their layout. Some common properties you can use are flex-grow, flex-shrink, flex-basis, align-self, and order. For example:'],
      codeTemplate10: `.item {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 20%;
  align-self: center;
  order: 2;
}
`

    },
    section11: {
      list11: ["Define the flexbox layout: You need to use the properties that control the flexbox layout, such as flex-direction, justify-content, and align-items, to position and align the flex items inside the container. For example:"],
      codeTemplate11: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
`, desc11: "This example creates a row-oriented flex container with space between the flex items and center alignment along the cross-axis.You can also nest flex containers inside other flex containers to create more complex layouts, and use media queries to adapt the layout for different screen sizes and device types."
    },
    section12: {
      title12: "Example",
      desc12: "Flex-Container:",
      codeTemplate12: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
    <body>
        <h1>Flexible Boxes</h1>

        <div class="flex-container">
             <div>1</div>
             <div>2</div>
             <div>3</div>  
             <div>4</div>
             <div>5</div>
             <div>6</div>  
             <div>7</div>
             <div>8</div>
        </div>


    </body>
</html>`
    },
    section13: {
      desc13: "Flex-Direction:",
      codeTemplate13: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
    <body>
       <h1>Flexible Boxes</h1>

       <div class="flex-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>  
          <div>4</div>
  
       </div>


    </body>
</html>`
    },

  },
  {
    name: "grid",
    section1: {
      title1: "What is Grid in CSS?",
      desc1: "CSS Grid is a layout module in CSS that allows you to create complex and responsive grid layouts. It provides a two-dimensional grid system that lets you control the layout of elements in rows and columns, and create dynamic and flexible layouts with just a few lines of code."
    },
    section2: {
      title2: "What are the properties of Grid in CSS?",
      desc2: "Grid works by defining a container element (the grid container) and applying specific properties to its child elements (the grid items). The main properties of a grid container are:",
      list2: ['`display: grid;`: This property turns the container into a grid container, allowing its child elements to be treated as grid items.', '`grid-template-rows`: This property defines the height of each row in the grid.', '`grid-template-columns`: This property defines the width of each column in the grid.', '`grid-template-areas`: This property defines the layout of the grid using named grid areas.']
    },
    section3: {
      desc3: "Grid also provides powerful alignment and positioning properties, such as justify-items, align-items, justify-content, and align-content, which allow you to align and position grid items within the grid container."
    },
    section4: {
      title4: "Why Should we use Grid in CSS?",
      desc4: "Here are some reasons why you should consider using CSS Grid in your projects:"
    },
    section5: {
      desc5: "1. Create complex layouts easily: CSS Grid makes it easy to create complex and sophisticated layouts with just a few lines of code. You can create grid structures with multiple rows and columns, and adjust the size and position of elements within the grid."

    },
    section6: {
      desc6: "2. Responsive design: CSS Grid is responsive by nature, which means that you can adjust the layout of your grid items based on screen size and device type. You can set breakpoints and use media queries to change the grid layout as needed."
    }, section7: {
      desc7: "3. Reduce code complexity: CSS Grid can simplify your code and reduce the need for nested containers and complex positioning techniques. With grid, you can control the layout of multiple elements with just a few lines of code, making your code more readable and easier to maintain."
    },
    section8: {
      desc8: "4. Accessibility: CSS Grid can improve accessibility by providing a more structured layout that can be easily navigated by users with screen readers or other assistive technologies."
    },
    section9: {
      desc9: "5. Cross-browser compatibility: CSS Grid has excellent cross-browser compatibility, which means that it works in all modern web browsers, including older versions of Internet Explorer."
    },
    section10: {
      title10: "How can we use Grid in CSS?",
      desc10: "To use CSS Grid, you need to follow these steps:"
    },
    section11: {
      list11: ['Define a grid container: You need to set the display property of the container element to grid to turn it into a grid container. For example:'],
      codeTemplate11: `.container {
  display: grid;
}
`
    },
    section12: {
      list12: ['Define the grid layout: You need to use the grid-template-rows and grid-template-columns properties to define the size and number of rows and columns in the grid. You can use absolute or relative units to define the size of each row and column, and you can also use the repeat() function to simplify the definition of multiple rows or columns with the same size. For example:'],
      codeTemplate12: `.container {
  display: grid;
  grid-template-rows: 100px 200px 100px;
  grid-template-columns: 1fr 2fr 1fr;
}
`,
      desc12: "In this example, we have defined a grid container with three rows of 100px, 200px, and 100px height, and three columns with a ratio of 1:2:1."

    },
    section13: {
      list13: ['Define grid items: The child elements of the container become the grid items, and you need to use the grid-row and grid-column properties to position and size them within the grid. You can use absolute or relative values to specify the start and end positions of a grid item, or you can use named grid areas defined by the grid-template-areas property. For example:'],
      codeTemplate13: `.item {
  grid-row: 1 / 2;
  grid-column: 2 / 4;
}
`,
      desc13: "In this example, we have positioned an item in the first row and the second column, spanning two columns."
    },
    section14: {
      list14: ['Use grid-specific properties: CSS Grid provides many other properties that allow you to control the placement, sizing, and spacing of grid items, including grid-gap, grid-auto-rows, grid-auto-columns, justify-items, align-items, justify-content, and align-content.']
    },
    section15: {
      title15: "Example",
      desc15: "Grid-Container:",
      codeTemplate15: `<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  background-color: #2199;
  padding: 10px;
}

.grid-container > div {
  background-color: #fff;
  border: 1px solid black;
  text-align: center;
  font-size: 30px;
  padding:5px;
}
</style>
</head>
     <body>
         <div class="grid-container">
              <div>1</div>
              <div>2</div>
              <div>3</div>  
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
         </div>



     </body>
</html>


`

    },
    section16: {
      desc16: "Grid-Items:",
      codeTemplate16: `<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  gap: 10px;
  background-color: #2199;
  padding: 10px;
}

.grid-items{
  background-color: #fff;
  text-align: center;
  font-size: 30px;
  padding:5px;
}
.item1{
  grid-column:1 / span 2;
  grid-row:1;
}
.item2{
  grid-column:1/ span 2 ;
  grid-row: 2;

}

.item5 {
  grid-column:  3;
  grid-row:1/ span 3 ;
</style>
</head>
     <body>
         <div class="grid-container">
              <div class="grid-item item-1>1</div>
              <div class="grid-item item-2>2</div>
              <div class="grid-item item-3>3</div>  
              <div class="grid-item item-4>4</div>
              <div class="grid-item item-5>5</div>
            
         </div>



     </body>
</html>`
    }

  }
];

export default CssData;