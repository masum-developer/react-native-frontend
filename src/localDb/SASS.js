const SassData = [
  {
    name: "sassintroduction",
    section1: {
      title1: "What is SASS?",
      desc1: "Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is used to simplify and extend CSS (Cascading Style Sheets). Sass was created by Hampton Catlin in 2006, and it has become increasingly popular among web developers for its ability to make CSS more manageable and maintainable.",
      desc1_1: "Sass provides several features that are not available in traditional CSS, including variables, nesting, mixins, functions, and inheritance. These features make it easier to write and organize CSS code, and they can significantly reduce the amount of time it takes to develop and maintain a large CSS codebase.",
      desc1_2: "To use Sass, you need to install a preprocessor such as node-sass or sass-cli. Once installed, you can write your stylesheets in a .scss or .sass file, which will then be compiled into regular CSS that can be used by your web pages."
    },
    section2: {
      title2: "Why Should We learn SASS?",
      desc2: "There are various reasons why learning Sass is beneficial for web developers:",
      list2: ['Improved Efficiency: Sass can significantly reduce the amount of time it takes to develop and maintain CSS code. Sass provides features such as variables, mixins, functions, and nesting, which allow developers to write more modular and reusable code. This means that changes can be made more quickly and with less code duplication.', 'Better Code Organization: Sass makes it easier to organize CSS code by providing features such as nesting and partials. Nesting allows developers to group related styles together, making the code easier to read and modify. Partial files allow developers to break up their code into smaller, more manageable files.', 'Increased Flexibility: Sass provides features such as variables, functions, and mixins, which allow developers to create more dynamic and flexible styles. For example, variables can be used to define a color or font-size once, and then that value can be reused throughout the entire stylesheet. Functions and mixins can be used to create complex styles that can be easily reused and modified.', 'Compatibility with CSS: Sass is a superset of CSS, which means that any valid CSS code is also valid Sass code. This means that developers can gradually introduce Sass into their projects, without having to rewrite their entire codebase.', 'Growing Popularity: Sass is becoming increasingly popular among web developers and is widely used in many large-scale projects. Learning Sass can increase your job prospects and make you more valuable to potential employers.']
    },
    section3: {
      title3: "What are the features of SASS?",
      desc3: "There are several features of Sass:",
      list3: ['Sass is fully CSS-compatible.', 'It is more stable, powerful and elegant than CSS.', 'It is based on JavaScript and is superset of CSS.', 'It provides many useful functions for manipulating colors and other values', 'It provides well-formatted, customizable output', 'It provides many advanced features like control directives for libraries.']


    }

  },
  {
    name: "sassinstallation",
    section1: {
      title1: "How to install SASS?",
      desc1: "To use Sass, you first need to install a Sass preprocessor.There are several preprocessor options available, including node- sass, dart- sass, and sass - cli.",
      desc1_1: "Once you have a preprocessor installed, you can start writing your stylesheets in Sass syntax. Sass files use a .scss or .sass file extension, and they are compiled into regular CSS files that can be used by your web pages.",
      desc1_2: "Here are the basic steps to use Sass:",
      desc1_3: "1. Install a Sass preprocessor: You can install a preprocessor using a package manager such as npm or yarn. For example, to install node-sass, you can run the following command in your terminal:",
      desc1_4: "2. Set up your project: Create a directory for your project and create a new Sass file with a .scss or .sass file extension. You can use any text editor or IDE to write Sass code.",
      desc1_5: "3. Write Sass code: Write your styles using Sass syntax. Sass provides several features, including variables, nesting, mixins, functions, and inheritance, which can make your CSS more efficient and manageable.",
      desc1_6: "4. Compile Sass to CSS: Once you have written your Sass code, you need to compile it into regular CSS that can be used by your web pages. You can do this using the Sass preprocessor. For example, to compile a Sass file named styles.scss to a CSS file named styles.css, you can run the following command in your terminal:",


    },
    section2: {
      desc2_1: "5. Link CSS file to your HTML: After compiling your Sass code, you can link the resulting CSS file to your HTML file using a link tag.",
      codeTemplate2_1: `<link rel="stylesheet" href="styles.css">
`,
      desc2_2: "6. Test your web page: Open your HTML file in a web browser to test your styles."
    }

  },
  {
    name: "sassvariable",
    section1: {
      title1: "What is Variables in SASS?",
      desc1_1: "Variables are one of the most fundamental features of Sass. They allow you to define values that can be reused throughout your code, making it easier to make changes and maintain consistency.",
      desc1_2: "In Sass, you can define a variable by using the `$` symbol, followed by the name of the variable and its value. Here's an example:",
      codeTemplate1: `$primary-color: #007bff;
$secondary-color: #6c757d;

body {
  background-color: $primary-color;
  color: $secondary-color;
}
`,
      desc1_3: "In this example, we define two variables, $primary-color and $secondary-color, and set their values to specific hex codes. We then use these variables to set the background-color and color properties of the body element. This makes it easy to change the colors used throughout the page, by only updating the values of the variables."
    },
    section2: {
      title2: "Why should we use Variables in SASS?",
      desc2_1: "There are several benefits to using variables in Sass:",
      desc2_2: "1. Consistency: Variables make it easier to maintain consistency throughout your codebase. By using variables to store commonly used values such as colors, font sizes, and spacing, you can ensure that the same values are used consistently across your stylesheets.",
      desc2_3: "2. Readability: Using variables can make your code more readable and easier to understand. By giving meaningful names to your variables, you can make it clear what each value is used for, which can make it easier for other developers to understand and modify your code.",
      desc2_4: "3. Flexibility: Variables make it easier to make changes to your stylesheets. By defining values as variables, you can easily update them in one place and have the changes reflected throughout your code. This can be particularly useful when working with large projects with many stylesheets.",
      desc2_5: "4. Maintenance: Variables can make it easier to maintain your codebase over time. By using variables to store commonly used values, you can reduce the likelihood of errors caused by manually typing values multiple times.",
      desc2_6: "5. Responsiveness: Variables can be used in calculations, which can be useful for creating responsive layouts. By using variables to define values such as container width and gutter width, you can easily update the values to create different layouts for different screen sizes."

    },
    section3: {
      title3: "How can we use Variables in SASS?",
      desc3_1: "Using variables in Sass is straightforward. Here's an example of how to define and use variables in Sass:",
      codeTemplate3_1: `// Define variables
$primary-color: #007bff;
$secondary-color: #6c757d;

// Use variables
body {
  background-color: $primary-color;
  color: $secondary-color;
}

a {
  color: $primary-color;
  text-decoration: none;

  &:hover {
    color: darken($primary-color, 10%);
  }
}
`,
      desc3_2: "In this example, we define two variables, $primary-color and $secondary-color, and set their values to specific hex codes. We then use these variables to set the background-color, color, and text-decoration properties of the body and a elements. The &:hover selector is also used to apply a darker color to the link when the user hovers over it, using the darken function and the $primary-color variable.",
      desc3_3: "When this Sass code is compiled, it will generate the following CSS code:",
      codeTemplate3_2: `body {
  background-color: #007bff;
  color: #6c757d;
}
a {
  color: #007bff;
  text-decoration: none;
}
a:hover {
  color: #0069d9;
}
`,
      desc3_4: "As you can see, the variables have been replaced with their respective values in the compiled CSS code."
    },
    section4: {
      title4: "Example",
      desc4_1: ".scss File:",
      codeTemplate4_1: `$myColor: blue;

h1 {
  color: $myColor;
}`,
      desc4_2: ".css File:",
      codeTemplate4_2: `h1 {
  color: blue;
}`,
      desc4_3: "html File:",
      codeTemplate4_3: `<!DOChtml>
   <html>
   <head>
   <link rel="stylesheet" href="styles.css">
     <body>
        <h1>Welcome to TS4U Bootcamp</h1>
     </body>
   </head>
   </html>`
    }


  }, {
    name: "nesting",
    section1: {
      title1: "What is Nesting in SASS?",
      desc1: "Nesting is a powerful feature in Sass that allows you to write more efficient and readable CSS code. Nesting lets you group related styles together, making it easier to read and modify your code.",
      desc1_1: "In Sass, you can nest CSS selectors inside one another by using the same indentation as you would in HTML. Here's an example:",
      codeTemplate1_1: `nav {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 10px;

      a {
        color: blue;
        text-decoration: none;

        &:hover {
          color: red;
        }
      }
    }
  }
}
`,
      desc1_2: "In this example, we're styling a navigation menu. By using nesting, we can group related styles together and make the code easier to read. The ul and li selectors are nested inside the nav selector, and the a selector is nested inside the li selector. The &:hover selector is also used to apply styles when the user hovers over the link. When this Sass code is compiled, it will generate the following CSS code: ",
      codeTemplate1_2: `nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin: 0 10px;
}

nav ul li a {
  color: blue;
  text-decoration: none;
}

nav ul li a:hover {
  color: red;
}
`,
      desc1_3: "As you can see, the nested selectors have been expanded into regular CSS code, making it easy to read and modify. So , Nesting can be particularly useful when styling complex layouts, where styles need to be applied to multiple levels of nested elements.By using nesting, you can write more efficient and readable code, while also making it easier to maintain your stylesheets over time."
    },
    section2: {
      title2: "Why should we use Nesting in SASS?",
      desc2: "Nesting is a powerful feature in Sass that offers several benefits for web developers. Here are some reasons why you should consider using nesting in your Sass code:",
      list2: ['Improved Readability: Nesting makes it easier to read and understand your Sass code. By grouping related styles together, you can create a clear hierarchy of elements and their styles, which can make it easier to navigate and modify your code.', 'Simplified Maintenance: Nesting can simplify the process of maintaining your stylesheets. By grouping related styles together, you can make changes to multiple elements at once, rather than having to update each selector individually.', 'More Efficient Code: Nesting can help to reduce the amount of code you need to write by avoiding repetitive selectors. By nesting elements, you can avoid having to write long selectors that repeat multiple times in your code.', 'Easier to Override: Nesting can also make it easier to override styles in your code. By using nested selectors, you can apply more specific styles to elements, making it easier to override more general styles if needed.', 'Clearer Code Structure: Nesting can help to create a clearer structure in your Sass code. By using nested selectors, you can create a visual hierarchy of elements and styles, which can make it easier to understand how your code is organized.']
    },
    section3: {
      title3: "How can we use Nesting in SASS?",
      desc3_1: "Using nesting in Sass is easy.Here's an example of how to use nesting in your Sass code:",
      codeTemplate3_1: `nav {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0 10px;

      a {
        color: blue;
        text-decoration: none;

        &:hover {
          color: red;
        }
      }
    }
  }
}
`,
      desc3_2: "In this example, we are using nesting to style a navigation menu. The ul, li, and a selectors are nested inside the nav selector. The &:hover selector is also used to apply styles when the user hovers over the link.",
      desc3_3: "When this Sass code is compiled, it will generate the following CSS code:",
      codeTemplate3_2: `nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline-block;
  margin: 0 10px;
}

nav ul li a {
  color: blue;
  text-decoration: none;
}

nav ul li a:hover {
  color: red;
}
`,
      desc3_4: "As you can see, the nested selectors have been expanded into regular CSS code, making it easy to read and modify."

    },
    section4: {
      title4: "Example",
      desc4_1: ".scss file:",
      codeTemplate4_1: `nav {
  background-color:#4f421a;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin: 0;
      padding: 10px;

      a {
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 10px;

        &:hover {
          background-color: #04152abc;
        }
      }
    }
  }

  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    ul li a {
      padding: 5px;
    }
  }
}
`,
      desc4_2: ".css file:",
      codeTemplate4_2: `nav {
  background-color: #4f421a;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
  margin: 0;
  padding: 10px;
}
nav ul li a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
}
nav ul li a:hover {
  background-color: #04152abc;
}
nav.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
nav.sticky ul li a {
  padding: 5px;
}
`,
      desc4_3: "Html file:",
      codeTemplate4_3: `<!DOCHTML>
    <html>
    <head>
    <link rel="stylesheet" href="styles.css">
    <title>TS4u Webpage</title>
      <body>
          <section >
                 <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a></li>
                        <li>
                            <a  href="#">Categories</a></li>
                        <li>
                            <a  href="#">About</a></li>
                        <li>
                            <a href="#">Contact</a></li>
                    </ul>
                </nav>
            </section>   
        </body>
    </head>
    </html>`
    }

  }, {
    name: "import",
    section1: {
      title1: "What is @import in SASS ?",
      desc1: "In Sass(Syntactically Awesome Style Sheets), @import is a directive that is used to include the content of one Sass file into another Sass file.",
      desc1_1: "The @import directive allows you to split your Sass code into smaller, more manageable files and organize it in a modular way. This can make your code more maintainable and easier to work with.",
      desc1_2: "When you use @import in Sass, the content of the imported file is included in the output CSS file. This is different from using <link> tags to include external CSS files in an HTML document, where each file would result in an additional HTTP request.",
      desc1_3: "It's worth noting that in newer versions of Sass, the @import directive has been deprecated in favor of the @use rule, which provides more robust features for managing and sharing variables, functions, and mixins across different Sass files."
    },
    section2: {
      title2: "Why should we use @import in SASS?",
      desc2: "There are several reasons why you may want to use the @import directive in Sass: ",
      desc2_1: "1. Organize your code: By splitting your Sass code into smaller, more manageable files, you can organize your styles more effectively. This can make your code easier to read, maintain, and update over time.",
      desc2_2: "2. Reuse code: With the @import directive, you can reuse common styles across different parts of your project. This can help you avoid duplicating code, which can lead to bloated stylesheets and make it harder to update your styles consistently.",
      desc2_3: "3. Improve performance: Because Sass compiles to CSS, using @import can help you reduce the number of HTTP requests that your website makes. By including all of your styles in a single compiled CSS file, you can improve the performance of your website.",
      desc2_4: "4. Manage dependencies: If your Sass code depends on other Sass files or libraries, you can use @import to manage these dependencies. This can make it easier to add, remove, or update dependencies as your project evolves."
    },
    section3: {
      title3: "How can we use @import in SASS?",
      desc3: "To use @import in Sass, you can follow these steps: ",
      desc3_1: " 1. Create a new Sass file: Create a new .scss or .sass file that you want to import into another file.",
      desc3_2: "2. Import the file: In the file where you want to include the styles from the new Sass file, use the @import directive followed by the path to the file. For example:",
      codeTemplate3_1: `@import "path/to/file";
`,
      desc3_3: "The path can be either relative or absolute, and the file extension (.scss or .sass) can be omitted.",
      desc3_4: "3. Use the imported styles: Once you've imported the Sass file, you can use its styles just like you would any other Sass styles. For example, you could reference a variable or a mixin defined in the imported file.",


    },
    section4: {
      title4: "Example",
      desc4_1: "header.scss file:",
      codeTemplate4_1: `.heading{
color:aqua;
background-color: black;
padding: 10px;
text-align: center;
}`,
      desc4_2: "main.scss file:",
      codeTemplate4_2: `@import './main.scss';`,
      desc4_3: "style.css file:",
      codeTemplate4_3: `h2{
color:aqua;
background-color:black;
padding:10px;
text-align:center;
}`,
      desc4_4: "html file:",
      codeTemplate4_4: `<!DOChtml>
    <html>
    <head>
    <title>
        <body>
            <h2 class='heading'>TS4U BOOTCAMP</h2>
        </body>
    </title>
    </head>
    </html>`
    }

  },
  {
    name: "mixin",
    section1: {
      title1: "What is @mixin in SASS?",
      desc1: "In Sass (Syntactically Awesome Style Sheets), @mixin is a directive that allows you to define a set of CSS declarations that can be reused throughout your stylesheets. A mixin is essentially a block of reusable code that can be included in other selectors.",
      desc1_1: "Mixins can be used to create reusable styles for common design patterns, such as media queries, vendor prefixes, and more. They allow you to keep your code DRY (Don't Repeat Yourself) by defining common styles in one place and reusing them wherever necessary.",
      desc1_2: "Here's an example of a simple @mixin that defines a CSS border:",
      codeTemplate1_1: `@mixin border($size, $color) {
  border: $size solid $color;
}
`,

      desc1_3: "In this example, the @mixin directive defines a new mixin called border, which takes two arguments: $size and $color. The mixin includes a single CSS declaration, border, that uses the values of the two arguments to set the size and color of the border.",
      desc1_4: "You can then use the @include directive to include the mixin in other selectors, like so:",
      codeTemplate1_2: `.button {
  @include border(2px, #ccc);
  padding: 10px;
}
`, desc1_5: "In this example, we're using the @include directive to include the border mixin in the .button selector. This will add a border to the button with a size of 2 pixels and a color of #ccc."
    },
    section2: {
      title2: "Why should we use @mixin in SASS?",
      desc2: "There are several reasons why you may want to use @mixin in Sass:",
      desc2_1: "1. Reusability: One of the biggest advantages of @mixin is that it allows you to create reusable code that can be used in multiple places throughout your project. By defining common styles in a mixin, you can avoid duplicating code, which can make your stylesheets more maintainable and easier to update.",
      desc2_2: "2. Consistency: By using mixins to define common styles, you can ensure that the styles are consistent across your project. This can help you maintain a consistent design language and reduce the likelihood of inconsistencies or errors.",
      desc2_3: "3. Flexibility: Mixins can take arguments, which can make them more flexible and adaptable. For example, you could define a mixin for a CSS transition and pass in different duration or timing function values depending on the specific use case.",
      desc2_4: "4. Modularity: Mixins allow you to break your stylesheets into smaller, more modular pieces. This can make your code easier to work with and can help you isolate and fix issues more easily."
    },
    section3: {
      title3: "How can we use @mixin in SASS?",
      desc3: "To use @mixin in Sass, you can follow these steps:",
      list3_1: ['1. Define a mixin: To define a mixin, use the @mixin directive followed by the name of the mixin and any arguments it takes. Inside the mixin, define the CSS styles that you want to reuse throughout your project. For example:'],
      codeTemplate3_1: `@mixin border-radius($radius) {
  border-radius: $radius;
}
`,
      desc3_1: "In this example, we're defining a mixin called border-radius that takes a single argument, $radius. The mixin includes a single CSS declaration, border-radius, that uses the value of the $radius argument to set the radius of the border.",
      list3_2: ['2. Include the mixin: To use a mixin, use the @include directive followed by the name of the mixin and any arguments it takes. For example:'],
      codeTemplate3_2: `.button {
  @include border-radius(5px);
}
`,
      desc3_2: "In this example, we're including the border-radius mixin in the .button selector and passing in a value of 5px for the $radius argument. This will add a border radius of 5px to the button.",
      desc3_3: "You can also include multiple mixins in a single selector by chaining @include directive.",
      codeTemplate3_3: `.button {
  @include border-radius(5px);
  @include box-shadow(2px 2px 2px #ccc);
}
`, desc3_4: "In this example, we're including both the border-radius and box-shadow mixins in the .button selector.",





    },
    section4: {
      title4: "Example",
      desc4_1: ".scss file:",
      codeTemplate4_1: `@mixin commonproperty{
  color: blueviolet;
  background-color: gold;
  padding:10px;
  text-align: center
}
.Herosection{
  @include commonproperty();
}
`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.Herosection{
  color: blueviolet;
  background-color: gold;
  padding:10px;
  text-align: center  
}`,
      desc4_3: ".html file:",
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
        <h2 class="Herosection">TS4U BOOTCAMP</h2>
   </body>
</head>
</html>`

    }
  },
  {
    name: "extend",
    section1: {
      title1: "What is @extend in SASS?",
      desc1: "In Sass(Syntactically Awesome Style Sheets), @extend is a directive that allows you to share styles between CSS selectors.It provides a way to inherit styles from one selector to another, creating a relationship known as an extension.",
      desc1_1: "When you use @extend, you define a selector that you want to inherit styles from, and then specify another selector that should extend those styles. The syntax is as follows:",
      codeTemplate1_1: `.selector1 {
  /* Styles for selector1 */
}

.selector2 {
  @extend .selector1;
  /* Additional styles for selector2 */
}
`,
      desc1_2: "The @extend directive is useful when you have multiple selectors that share common styles. Instead of repeating the styles in each selector, you can define them once and extend them wherever needed. It helps in keeping your code DRY (Don't Repeat Yourself) and reduces redundancy.",

    },
    section2: {
      title2: "Why should we use @extend in SASS?",
      desc2: "The @extend directive in Sass offers several benefits and reasons for its usage:",
      list2: ['Code Reusability: Using @extend, you can define a set of styles once and easily apply them to multiple selectors. This promotes code reusability and helps in keeping your codebase concise and maintainable. Instead of duplicating the same styles across different selectors, you can extend them from a single source, reducing redundancy and making your code more efficient.', 'Consistent Styling: By extending styles from a common source, you ensure consistent styling throughout your project. If you need to update a shared style, you only have to modify it in one place, and all the selectors that extend it will automatically inherit the changes. This saves time and minimizes the chances of inconsistencies or errors caused by manually updating styles across multiple selectors.', 'Semantic CSS: The @extend directive allows you to create more semantic CSS code. Instead of adding additional classes or using complex selector combinations to achieve certain styles, you can extend from a semantic base selector. This approach improves the readability and maintainability of your code, making it easier for other developers to understand and work with.', 'Efficient CSS Output: When Sass compiles the code, it intelligently combines the extended selectors, reducing duplication in the generated CSS output. The resulting CSS contains only the necessary styles, avoiding unnecessary bloat. This can lead to smaller file sizes, faster loading times, and improved performance for your web pages.', 'Easier Refactoring: If you decide to restructure your CSS or make changes to the inheritance hierarchy, using @extend can simplify the process. Instead of manually updating each selector, you can modify the base selector or adjust the inheritance relationships, and the changes will automatically propagate to the extended selectors.']
    },
    section3: {
      title3: "How can we use @extend in SASS?",
      desc3: "To use the @extend directive in Sass, follow these steps:",
      desc3_1: "1. Define the Base Selector: Start by creating a selector that contains the styles you want to share or extend. This selector will serve as the base selector. For example:",
      codeTemplate3_1: `.base-selector {
  /* Styles for the base selector */
}
`,
      desc3_2: "Extend the Styles: In another selector, use the @extend directive followed by the base selector you want to inherit styles from. This new selector will extend the styles of the base selector. For example:",
      codeTemplate3_2: `.extended-selector {
  @extend .base-selector;
  /* Additional styles for the extended selector */
}
`,
      desc3_3: "Compile the Sass: Once you have defined the base and extended selectors, you need to compile the Sass code into CSS. Use a Sass compiler (e.g., command-line tools like sass or integrated tools in build systems like webpack or gulp) to compile your Sass code. The compiler will process the @extend directive and generate the appropriate CSS output.",
      desc3_4: `Observe the Resulting CSS: After compiling, the resulting CSS will contain a combined CSS rule for the extended selector, incorporating the styles from the base selector. For example:`,
      codeTemplate3_3: `.base-selector, .extended-selector {
  /* Styles for the base selector and extended selector */
}

.extended-selector {
  /* Additional styles for the extended selector */
}
`,
      desc3_5: "In the compiled CSS, you'll see a single CSS rule that combines the styles of both the base selector and the extended selector. This ensures that the extended selector inherits the shared styles while retaining any additional styles specific to itself.",



    },
    section4: {
      title4: "Example",
      desc4_1: ".scss file:",
      codeTemplate4_1: `.button-1 {
  padding: 10px 20px;
  background-color: #eaeaea;
  color: #333;
  font-weight: bold;
}
/* Extend the base selector */
.primary-button {
  @extend .button-1;
  background-color: #337783;
  color: black;
  display: flex;
  gap: 10px;
}`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.button-1, .primary-button{
  padding: 10px 20px;
  background-color: #eaeaea;
  color: #333;
  font-weight: bold;
}

.primary-button {
  background-color: #337783;
  color: black;
  display: flex;
 
}`,
      desc4_3: ".html file:",
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
       <button class="button-1">Follow Our Website</button>
       <button class="primary-button">Connect with Us</button>
   </body>
</head>
</html>`
    },

  },
  {
    name: "sassstring",
    section1: {
      title1: "What is String in SASS?",
      desc1: "In Sass, a string is a data type that represents a sequence of characters, such as text or a collection of characters enclosed in quotation marks. Strings are commonly used to store and manipulate text values within Sass code.",
      desc1_1: "You can create a string in Sass by enclosing the characters in either single quotes (') or double quotes ('').For example: ",
      codeTemplate1_1: `$myString: 'Hello, World!';
`,
      desc1_2: "In this example, $myString is a variable that holds the string value 'Hello, World!'."
    },
    section2: {
      title2: "Why should we use String in Sass?",
      desc2: "Strings in Sass provide several benefits and use cases",
      desc2_1: "1. Dynamic Content: Strings allow you to include dynamic content within your stylesheets. You can use string interpolation to insert variable values, calculations, or other expressions into strings. This is particularly useful when generating CSS based on dynamic data or when you need to create dynamic class names or URLs.",
      desc2_2: "2. Configuration and Theming: Strings can be used to store configuration values or theming options in your Sass code. For example, you can define a string variable to hold the base URL for assets or API endpoints, allowing for easy configuration and customization.",
      desc2_3: "3. Conditional Logic: Strings enable you to perform conditional checks and control flow in your Sass code. You can compare strings using logical operators (==, !=, etc.) or use string functions to manipulate and extract specific parts of a string. This can be handy when you need to conditionally apply styles based on specific string values.",
      desc2_4: "4. Generating CSS Classes: With strings, you can generate dynamic CSS classes or selector names. By concatenating strings with variable values or other strings, you can create class names on the fly. This is particularly useful when working with component-based architectures or generating complex CSS structures.",
      desc2_5: "5. Localization and Internationalization: If you need to support multiple languages or internationalization in your stylesheets, strings can be used to store text content. By defining strings for various localized versions, you can easily switch between different language-specific styles.",
      desc2_6: "6. Code Organization and Readability: Using strings to store text values, such as colors, font names, or common text snippets, can improve the organization and readability of your Sass code. By centralizing these values as strings, you can easily update them in a single place if needed."
    },
    section3: {
      title3: "How can we use String in Sass?",
      desc3: "To use strings in Sass, you can follow these guidelines:",
      list3_1: ["Assigning a String: To create a string variable, use the $ symbol followed by the variable name and assign a string value to it using either single quotes (') or double quotes(''). For example:"],
      codeTemplate3_1: `$myString: 'Hello, World!';
`,
      list3_2: ["Interpolating Variables: You can insert variable values or expressions within a string using string interpolation, which involves wrapping the expression with #{}. Sass evaluates the expression and inserts the result into the string. For example:"],
      codeTemplate3_2: `$name: 'John Doe';
$greeting: "Hello, #{$name}!";

`,
      desc3_1: 'The resulting value of $greeting will be "Hello, John Doe!".',
      list3_3: ['Concatenating Strings: To concatenate strings together, you can use the + operator. It combines two or more strings into a single string. For example:'],
      codeTemplate3_3: `$firstName: 'John';
$lastName: 'Doe';
$fullName: $firstName + ' ' + $lastName;
`,
      desc3_2: "The resulting value of $fullName will be 'John Doe'.",
      list3_4: ['Using String Functions: Sass provides built-in functions to manipulate strings. These functions allow you to perform operations like finding the length of a string, converting a string to lowercase or uppercase, extracting substrings, and more. Here are a few examples:'],
      codeTemplate3_4: `$string: 'Hello, World!';
$length: str-length($string); // Returns the length of the string.
$lowercase: tolower($string); // Converts the string to lowercase.
$uppercase: toupper($string); // Converts the string to uppercase.
`,
      list3_5: ['Using Strings in Selectors: You can use strings in CSS selectors by interpolating them using string interpolation. This is helpful when generating dynamic classes or selector names based on string values. For example:'],
      codeTemplate3_5: `$color: 'blue';
.$color {
  /* Styles for the dynamically generated class */
}
`

    },
    section4: {
      title4: "Example",
      desc4_1: ".scss file:",
      codeTemplate4_1: `.test{
  font-family: to-lower-case("Times New Roman");
}`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.test{
  font-family:times new roman;
}`,
      desc4_3: ".scss file:",
      codeTemplate4_3: `.pass{
  font-family: str-index("Helvetica Neue","e");
}`,
      desc4_4: ".css file:",
      codeTemplate4_4: `.pass{
        font-family:2;
}`,
      desc4_5: ".html file:",
      codeTemplate4_5: `<!DOChtml>
<html>
<head>
   <body>
       <h1 class="test">Welcome to</h1>
       <h1 class="past">Ts4u Bootcamp</h1>
   </body>
</head>
</html>`

    }
  },
  {
    name: "numberic",
    section1: {
      title1: "What is Numeric in Sass?",
      desc: "In Sass, number functions are built-in functions that allow you to perform mathematical operations and manipulate numeric values. These functions provide various capabilities for working with numbers in your Sass code.",
      desc1: "Here are some commonly used number functions in Sass:",
      desc1_1: "1. percentage($number): Converts a decimal or unitless number to a percentage value. For example:",
      codeTemplate1_1: `$value: 0.5;
$percentage: percentage($value); // Returns 50%
`,
      desc1_2: "2. round($number): Rounds a number to the nearest whole number. For example:",
      codeTemplate1_2: `$value: 2.6;
$rounded: round($value); // Returns 3
`,
      desc1_3: "3. ceil($number): Rounds a number up to the nearest whole number. For example:",
      codeTemplate1_3: `$value: 2.3;
$ceiled: ceil($value); // Returns 3
`,
      desc1_4: "4. floor($number): Rounds a number down to the nearest whole number. For example:",
      codeTemplate1_4: `$value: 2.7;
$floored: floor($value); // Returns 2
`,
      desc1_5: "5. abs($number): Returns the absolute value of a number (i.e., removes the sign). For example:",
      codeTemplate1_5: `$value: -5;
$absolute: abs($value); // Returns 5
`

    },
    section2: {
      title2: "Why should we use Numeric in Sass?",
      desc2: "Using number functions in Sass offers several benefits and use cases: ",
      list2: ['1. Mathematical Calculations: Number functions enable you to perform mathematical operations and calculations within your Sass code. You can add, subtract, multiply, divide, round, or manipulate numeric values to generate dynamic styles based on mathematical logic. This is particularly useful for creating responsive layouts, calculating proportions, or applying transformations to numeric values.', '2. Unit Conversion: Number functions allow you to convert between different units of measurement. You can convert pixels to percentages, ems to pixels, or vice versa, depending on your specific requirements. This flexibility helps in creating scalable and responsive designs by adapting measurements based on different screen sizes or contexts.', '3. Dynamic Styling: By using number functions, you can dynamically generate values for properties such as widths, heights, margins, or padding. This allows for more flexible and maintainable styles, as you can calculate or modify values based on variables, conditions, or other dynamic factors.', '4. Precision Control: Sass number functions give you control over the precision of decimal values. You can adjust the number of decimal places or round numbers to specific decimal points using functions like round(), ceil(), or floor(). This is especially useful when working with measurements that require specific precision, such as dimensions or calculations involving fractional values.', '5. Conditional Logic: Number functions can be utilized to perform conditional checks and control flow in your Sass code. You can compare numeric values, determine the minimum or maximum among a set of numbers, or use mathematical logic to control the application of styles based on specific conditions.', '6. Conditional Logic: Number functions can be utilized to perform conditional checks and control flow in your Sass code. You can compare numeric values, determine the minimum or maximum among a set of numbers, or use mathematical logic to control the application of styles based on specific conditions.'],
    },
    section3: {
      title3: "How can we use Numeric in Sass?",
      desc3: "To use number functions in Sass, you can follow these steps:",
      desc3_1: "1. Identify the Numeric Value: Determine the numeric value that you want to manipulate or perform calculations on. This can be a variable or a hardcoded value.",
      desc3_2: "2. Identify the Numeric Value: Determine the numeric value that you want to manipulate or perform calculations on. This can be a variable or a hardcoded value.",
      codeTemplate3_1: `$value: 5;

$rounded: round($value);
$ceiled: ceil($value);
$floored: floor($value);
$absolute: abs($value);
`,
      desc3_3: "In this example, the $value variable holds the numeric value 5. The number functions round(), ceil(), floor(), and abs() are applied to manipulate the value in different ways.",
      desc3_4: "3. Store the Result: Assign the result of the number function to a variable if you need to reuse it later in your Sass code. For example:",
      codeTemplate3_2: `$rounded: round($value);
`,
      desc3_5: "4. Incorporate the Result: Use the result of the number function in your styles or calculations as needed. For example:",
      codeTemplate3_3: `div {
  width: $rounded + px;
  margin-bottom: $ceiled * 10px;
}
`,
      desc3_6: "In this example, the rounded value is concatenated with the px unit and assigned to the width property of a div element. The ceiled value is multiplied by 10px and used for the margin-bottom property."
    },
    section4: {
      title4: "Example:",
      desc4_1: ".scss file:",
      codeTemplate4_1: `.number{
  margin:ceil($number: 4.4);
  padding:10px;
  background-color: #337783;
  color:#333;
}
`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.number{
  margin: 5 ;
  padding:10px;
  background-color: #337783;
  color:#333;
}
`,
      desc4_3: ".html file:",
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
        <h2 class="number">TS4U BOOTCAMP</h2>
   </body>
</head>
</html>`

    }
  },
  {
    name: "sasslist",
    section1: {
      title1: "What is List in Sass?",
      desc1: "In Sass, a list is a data type that represents an ordered collection of values.It allows you to group multiple values together into a single entity, similar to an array or a tuple in other programming languages.",
      desc1_1: "Lists in Sass can contain various types of values, including numbers, strings, colors, booleans, and even other lists. The values in a list are separated by commas and enclosed within parentheses ( ).",
      desc1_2: "Here's an example of a list in Sass:",
      codeTemplate1_1: `$myList: 1, 'two', #ff0000, true;
`,
      desc1_3: "In this example, $myList is a variable that holds a list with four values: the number 1, the string 'two', the color #ff0000 (red), and the boolean value true"

    },
    section2: {
      title2: "Why should we use List in Sass?",
      desc2: "Using lists in Sass offers several benefits and use cases: ",
      list2: ['1. Organizing Related Values: Lists provide a way to group related values together, making your code more organized and easier to manage. Instead of handling individual variables, you can store them as a list, which can be particularly useful when dealing with sets of related colors, font families, breakpoints, or other grouped data.', "2. Passing Multiple Arguments: Lists are helpful when you need to pass multiple arguments to a function or mixin. Instead of passing each argument separately, you can pass a single list containing all the values. This simplifies the function or mixin call and allows for cleaner code.", '3. Dynamic Data Manipulation: Lists enable dynamic data manipulation and transformation. You can use built-in list functions to add, remove, or modify elements within a list. This flexibility is beneficial when you need to generate dynamic styles based on user input, calculations, or conditions.', '4. Iterating and Looping: Lists can be iterated over using control directives like @each or @for. This enables you to loop through the values in a list and perform actions or generate styles dynamically based on each value. It is particularly useful when generating CSS rulesets, applying mixins, or performing repetitive tasks on a list of values.', '5. Generating CSS Rules: Lists are instrumental in generating CSS rules dynamically. By storing selector names, property-value pairs, or other CSS-related data in a list, you can loop through the list and generate CSS rules based on the values. This allows for the generation of complex and dynamic CSS structures, such as grids, utility classes, or responsive styles.', '6. Enhancing Code Reusability: Lists contribute to code reusability by allowing you to store and reuse sets of values across your Sass codebase. Instead of duplicating values or hardcoding them in multiple places, you can define a list once and reference it wherever needed. This improves code maintainability and reduces the likelihood of errors.']
    },
    section3: {
      title3: "How can we use List in Sass?",
      desc3: "To use lists in Sass, you can follow these steps:",
      desc3_1: "1. Create a List: Define a list by enclosing values within parentheses ( ) and separating them with commas. The values can be of various types, including numbers, strings, colors, booleans, or even other lists. For example:",
      codeTemplate3_1: `$myList: 1, 'two', #ff0000, true;
`,
      desc3_2: "2. Accessing List Elements: You can access individual elements of a list using the index notation. Sass uses a 1-based index system, where the first element has an index of 1. For example:",
      codeTemplate3_2: `$firstElement: nth($myList, 1); // Retrieves the first element (1)
$secondElement: nth($myList, 2); // Retrieves the second element ('two')
`,
      desc3_3: "3. Iterating over a List: You can iterate over the elements of a list using control directives like @each or @for. This allows you to perform actions or generate styles dynamically based on each element. For example:",
      codeTemplate3_3: `@each $element in $myList {
  // Perform actions or generate styles for each element
  // $element represents the current element in the iteration
  // ...
}
`,
      desc3_4: "4. List Functions: Sass provides various built-in functions to manipulate and transform lists. You can use these functions to add elements, remove elements, concatenate lists, extract sublists, modify values, or perform other operations on lists. For example:",
      codeTemplate3_4: `$modifiedList: append($myList, 'new value'); // Adds 'new value' to the end of the list
$sublist: slice($myList, 2, 3); // Retrieves a sublist from the list (from index 2 to 3)
`,
      desc3_5: "5. Using Lists for CSS Generation: Lists can be used to generate CSS rules dynamically. You can store selector names, property-value pairs, or other CSS-related data in a list and loop through it to generate CSS rules based on the values. For example:",
      codeTemplate3_5: `$breakpoints: (
  (small, 480px),
  (medium, 768px),
  (large, 1024px)
);

@each $breakpoint in $breakpoints {
  $name: nth($breakpoint, 1);
  $width: nth($breakpoint, 2);

  @media screen and (min-width: $width) {
    .container-#{$name} {
      width: $width;
    }
  }
}
`,
      desc3_6: "In this example, the $breakpoints list contains sublists representing the name and width of each breakpoint. The @each directive is used to iterate over the list, extract the values, and generate media queries and CSS rules dynamically based on each breakpoint.",

    },
    section4: {
      title4: "Example:",
      desc4_1: ".scss file",
      codeTemplate4_1: `/* List*/
$list: 20px 20px 30px;

.lists{
  padding: length($list);
  margin:8;
  border: #4f421a 2px solid;
  color: #333;
  border-radius: 3px;

}`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.lists{
  padding: 3;
  margin:8;
  border: #4f421a 2px solid;
  color: #333;
  border-radius: 3px;

}`,
      desc4_3: ".html file:",
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
        <h2 class="lists">TS4U BOOTCAMP</h2>
   </body>
</head>
</html>`
    }
  }, {
    name: "map",
    section1: {
      title1: "What is Map in Sass?",
      desc1: "In Sass(Syntactically Awesome Style Sheets), map refers to a data structure that stores key- value pairs.It is similar to an associative array or a dictionary in other programming languages.",
      desc1_1: "A map in Sass consists of a collection of key-value pairs, where each key is a unique identifier and each value is associated with that key. Maps provide a convenient way to organize and access data in a structured manner.",
      desc1_2: "Here's an example of how a map is defined in Sass:",
      codeTemplate1_1: `$colors: (
  primary: #FF0000,
  secondary: #00FF00,
  tertiary: #0000FF
);
`,
      desc1_3: "In this example, $colors is a map that stores three color values associated with their corresponding keys (primary, secondary, and tertiary). The keys are used to access the values stored in the map.",
      codeTemplate1_2: `$primaryColor: map-get($colors, primary); // Retrieves the value associated with the key 'primary'
`,

      desc1_4: "The $primaryColor variable will now hold the value #FF0000 from the $colors map."

    },
    section2: {
      title2: "Why should we use Map in Sass?",
      desc2: "Using maps in Sass offers several benefits:",
      desc2_1: "1. Organizing related data: Maps provide a structured way to organize related data. For example, you can use a map to store a set of colors, font families, breakpoints, or any other data that needs to be grouped together.",
      desc2_2: "2. Easy access to values: With maps, you can easily access the values associated with specific keys using the map-get() function. This simplifies retrieving and using data throughout your stylesheets.",
      desc2_3: "3. Code maintainability: By using maps, you can centralize and modularize your data. This improves code maintainability by reducing duplication and ensuring consistency. If you need to update a value, you can make the change in a single place (the map declaration) rather than searching for occurrences throughout your code. ",
      desc2_4: "4. Flexible data manipulation: Maps in Sass are not static; you can modify and manipulate them as needed. Sass provides functions to add, remove, or update values in a map dynamically. This flexibility allows you to create more dynamic and adaptable stylesheets.",
      desc2_5: "5. Conditional styling: Maps can be utilized in combination with control directives like @if and @each to perform conditional styling based on the values stored in the map. This enables you to write more concise and reusable code.",
      desc2_6: "6. Integration with other Sass features: Maps can be used in conjunction with other Sass features such as functions, mixins, and loops, enhancing their capabilities. This allows you to create powerful abstractions and reusable patterns in your stylesheets."
    },
    section3: {
      title3: "How can we use Map in Sass?",
      desc3: "In Sass, you can use maps in various ways. Here are some common operations and techniques for working with maps:",
      desc3_1: "1. Defining a map: To define a map, use the following syntax:",
      codeTemplate3_1: `$mapName: (
  key1: value1,
  key2: value2,
  // ...
);
`,
      desc3_2: "2. Replace $mapName with the name you want to give to your map. Keys (key1, key2, etc.) should be unique identifiers, and values (value1, value2, etc.) can be any valid Sass value.",
      desc3_3: "3. Accessing values: To access a value from a map, use the map-get() function:",
      codeTemplate3_2: `$value: map-get($mapName, key);
`,
      desc3_4: " Replace $mapName with the name of your map and key with the specific key you want to retrieve the value for. The $value variable will then hold the corresponding value from the map.",
      desc3_5: "4. Adding or updating values: You can add or update values in a map using the map-merge() function. This function combines two or more maps, and if there are duplicate keys, the last occurrence takes precedence:",
      codeTemplate3_3: `$newMap: map-merge($map1, $map2);
      
`,
      desc3_6: "Replace $newMap with the name you want to give to the resulting map, $map1 and $map2 with the maps you want to merge. The resulting map will contain the combined key-value pairs from both maps.",
      desc3_7: "5. Removing values: Sass doesn't provide a built-in function to directly remove a key-value pair from a map. However, you can create a custom function or use a workaround to filter out unwanted keys or create a new map without specific keys.",
      desc3_8: "6. Looping over maps: You can iterate over the keys and values of a map using the @each directive:",
      codeTemplate3_4: `@each $key, $value in $map {
  // Do something with $key and $value
}
`,
      desc3_9: "Replace $key and $value with the variable names you want to use for each iteration, and $map with the name of your map. Within the loop, you can access the current key-value pair using the assigned variables."

    },
    section4: {
      title4: "Example",
      desc4_1: ".scss file:",
      codeTemplate4_1: `$colors: (
  primary: #FF00,
  secondary: #00FF00,
  tertiary: #0000FF
);

// Accessing values from the map

$headerColor: map-get($colors, tertiary);

// Output the values
.mapheader {
  color: $headerColor;
}
`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.mapheader{
        color:tertiary;
}`,
      desc4_3: ".html file:",
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
        <h2 class="mapheader">TS4U BOOTCAMP</h2>
   </body>
</head>
</html>`
    },

  },
  {
    name: "sassselector",
    section1: {
      title1: "What is Selectors in Sass?",
      desc1: "In Sass, a selector refers to the part of a style rule that targets specific HTML elements or groups of elements to apply styles to.Selectors determine which elements on a web page will be affected by the associated CSS declarations.",
      desc1_1: "Sass selectors follow the same syntax as CSS selectors. They can target elements based on their tag names, class names, IDs, attributes, or their relationships to other elements in the HTML structure.",
      desc1_2: "Here are some examples of Sass selectors:",
      codeTemplate1_1: `// Targeting elements by tag name
h1 {
  /* Styles for h1 elements */
}

// Targeting elements by class name
.my-class {
  /* Styles for elements with class "my-class" */
}

// Targeting elements by ID
#my-id {
  /* Styles for an element with ID "my-id" */
}

// Targeting elements with specific attributes
[type="text"] {
  /* Styles for elements with attribute "type" set to "text" */
}

// Combining selectors
.header .logo {
  /* Styles for elements with class "logo" inside an element with class "header" */
}
`,
      desc1_3: "Selectors in Sass play a crucial role in determining which elements should receive specific styles. By leveraging the power of selectors, you can target elements accurately and apply styles to achieve the desired visual appearance on your web pages."

    },
    section2: {
      title2: "Why should we use Selectors in Sass?",
      desc2: "Selectors in Sass(and CSS) are essential for the following reasons: ",
      desc2_1: "1. Targeting specific elements: Selectors allow you to precisely target specific HTML elements or groups of elements on a web page. This enables you to apply styles to those elements selectively, controlling their visual appearance and behavior.",
      desc2_2: "2. Targeting specific elements: Selectors allow you to precisely target specific HTML elements or groups of elements on a web page. This enables you to apply styles to those elements selectively, controlling their visual appearance and behavior.",
      desc2_3: "3. Style inheritance: Selectors facilitate the inheritance of styles from parent elements to their children. By selecting parent elements and applying styles, you can affect the appearance of nested elements, reducing the need for duplicating styles.",
      desc2_4: "4. Styling states and interactions: Selectors enable you to target elements based on their state or interaction. For instance, you can style links differently when they are hovered, focused, or visited, or apply different styles when an element is in a particular state like active or disabled.",
      desc2_5: "5. Responsive and adaptive design: Selectors play a crucial role in creating responsive and adaptive designs. By using media queries and combining selectors, you can apply different styles based on screen sizes or other conditions, ensuring that your website looks and functions well across various devices and viewport sizes.",
      desc2_6: "6. Specificity and cascade: Selectors help determine the specificity and cascade of CSS rules. They allow you to control which styles take precedence when multiple rules target the same element. Understanding selector specificity is important for managing style conflicts and ensuring the desired styles are applied.",
      desc2_7: "7. Efficient styling: By using selectors wisely, you can apply styles to multiple elements simultaneously, reducing the need for repetitive declarations. This promotes efficient styling practices and minimizes code duplication."
    },
    section3: {
      title3: "How can we use Selectors in Sass?",
      desc3: "In Sass, you can use selectors in your stylesheets to target specific elements and apply styles to them. Here are some ways you can use selectors in Sass:",
      desc3_1: "1. Basic element selector: Target elements by their tag name:",
      codeTemplate3_1: `h1 {
  /* Styles for h1 elements */
}
`,
      desc3_2: "2. Class selector: Target elements by their class name:",
      codeTemplate3_2: `.my-class {
  /* Styles for elements with class "my-class" */
}
`,
      desc3_3: "3. ID selector: Target elements by their ID:",
      codeTemplate3_3: `#my-id {
  /* Styles for an element with ID "my-id" */
}
`,
      desc3_4: "4. Attribute selector: Target elements with specific attributes:",
      codeTemplate3_4: `[type="text"] {
  /* Styles for elements with attribute "type" set to "text" */
}
`,
      desc3_5: "5. Combining selectors: Combine multiple selectors to target specific elements or groups of elements:",
      codeTemplate3_5: `.header .logo {
  /* Styles for elements with class "logo" inside an element with class "header" */
}
`,
      desc3_6: "6. Pseudo-class selector: Target elements based on their state or interaction:",
      codeTemplate3_6: `a:hover {
  /* Styles for links when hovered */
}

input:focus {
  /* Styles for input elements when focused */
}
`,
      desc3_7: "7. Media queries: Use selectors in combination with media queries to apply styles based on different screen sizes or conditions:",
      codeTemplate3_7: `@media screen and (max-width: 768px) {
  /* Styles applied when the screen width is 768px or less */
}
`
    },
    section4: {
      title4: "Example",
      desc4_1: ".scss file:",
      codeTemplate4_1: `/* selectors*/
#my-id{
  color:#00FF00,
}`,
      desc4_2: ".css file:",
      codeTemplate4_2: `#my-id{
        color:#00FF00;
}`,
      desc4_3: '.html file:',
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
        <h2 id="my-id">TS4U BOOTCAMP</h2>
   </body>
</head>
</html>`
    }
  },
  {
    name: "sasscolors",
    section1: {
      title1: "What is Colors in SASS?",
      desc1: "In Sass, colors refer to a data type that represents a specific color value. Colors are fundamental for defining the visual appearance of elements in stylesheets. Sass supports various color formats and provides functions and operations for manipulating and working with colors.",
      desc1_1: "Here are some key points about colors in Sass:",
      list1_1: ['1. Color formats: Sass supports different color formats, including: Hexadecimal: #RRGGBB or #RGB.RGB: rgb(r, g, b) where r, g, and b are integers from 0 to 255 RGBA: rgba(r, g, b, alpha) where alpha is a decimal value from 0 to 1 representing the opacity.HSL: hsl(hue, saturation, lightness) where hue is an angle from 0 to 360, and saturation and lightness are percentages.HSLA: hsla(hue, saturation, lightness, alpha) where alpha is a decimal value from 0 to 1 representing the opacity.'],
      list1_2: ['2. Color functions: Sass provides a set of functions for working with colors. These functions allow you to perform operations such as adjusting brightness, saturation, and opacity, converting between color formats, and blending colors.'],
      codeTemplate1_1: `$color: #FF0000;
$lighterColor: lighten($color, 20%); // Lighten the color by 20%
$rgbaColor: rgba($color, 0.5); // Set the color's opacity to 0.5
`,
      list1_3: ['3. Color operations: Sass allows mathematical operations on colors, such as addition, subtraction, multiplication, and division. These operations are performed on the individual color components (red, green, blue) or the alpha value (opacity).'],
      codeTemplate1_2: `$color1: #FF0000;
$color2: #00FF00;
$combinedColor: $color1 + $color2; // Add the two colors together
`,
      list1_4: ['4. Color variables: Colors can be assigned to variables in Sass, allowing you to reuse and manage colors throughout your stylesheets.'],
      codeTemplate1_3: `$primaryColor: #FF0000;
$secondaryColor: #00FF00;

h1 {
  color: $primaryColor;
}

p {
  color: $secondaryColor;
}
`

    },
    section2: {
      title2: "Why should we use Colors in Sass?",
      desc2: "Using colors in Sass offers several advantages: ",
      desc2_1: "1. Consistency and reusability: By defining color variables, you can ensure consistency in your color scheme throughout your stylesheets. Color variables can be reused across multiple selectors, making it easy to update the color in a single place and have it reflected throughout your entire project.",
      desc2_2: "2. Modularity and maintainability: Sass allows you to create color-related mixins and functions, making it easier to manage and organize your color-related styles. This modularity promotes maintainability by separating concerns and keeping your stylesheets more organized.",
      desc2_3: "3. Flexible theming and customization: By defining color variables, you can create themes or allow for easy customization. By changing the value of a color variable, you can update the entire color scheme of your project, making it easy to create different visual themes or adapt to specific branding requirements.",
      desc2_4: "4. Dynamic color manipulation: Sass provides color functions and operations that allow you to dynamically manipulate colors. You can adjust brightness, saturation, opacity, and perform blending operations, which can be useful for creating hover effects, transitions, or generating shades and tints of colors.",
      desc2_5: "5. Responsive design: Using colors in conjunction with Sass media queries allows you to adapt your color scheme based on different screen sizes or conditions. This flexibility is important for creating responsive designs that adapt to different devices and contexts.",
      desc2_6: "6. Integration with other Sass features: Colors can be used in conjunction with other Sass features such as loops, conditionals, and mixins. This allows for more advanced color manipulation, pattern generation, and conditional styling based on color values.",
      desc2_7: "7. Code readability and maintainability: Using color variables instead of hard-coded color values improves code readability and maintainability. It enhances code comprehension, facilitates collaboration, and reduces the chance of introducing errors."
    },
    section3: {
      title3: "How can we use Colors in Sass?",
      desc3: "In Sass, you can use colors in various ways to define and apply styles. Here are some techniques for using colors in Sass:",
      desc3_1: "1. Defining color variables: Assign colors to variables to ensure consistency and reusability throughout your stylesheets. Here's an example:",
      codeTemplate3_1: `$primaryColor: #FF0000;
$secondaryColor: #00FF00;

h1 {
  color: $primaryColor;
}

p {
  color: $secondaryColor;
}
`,
      desc3_2: "In this example, the colors #FF0000 and #00FF00 are assigned to variables $primaryColor and $secondaryColor, respectively. These variables can then be used to apply colors to different selectors.",
      desc3_3: "2. Using color functions: Sass provides various color functions for manipulating colors. You can use these functions to adjust brightness, saturation, opacity, and perform color blending. Here's an example:",
      codeTemplate3_2: `$baseColor: #FF0000;
$lighterColor: lighten($baseColor, 20%); // Lighten the color by 20%
$rgbaColor: rgba($baseColor, 0.5); // Set the color's opacity to 0.5
`,
      desc3_4: "In this example, the lighten() function lightens the $baseColor by 20%, and the rgba() function sets the opacity of $baseColor to 0.5.",
      desc3_5: "3. Color operations: Sass allows you to perform mathematical operations on colors. You can add, subtract, multiply, or divide colors. Here's an example:",
      codeTemplate3_3: `$color1: #FF0000;
$color2: #00FF00;
$combinedColor: $color1 + $color2; // Add the two colors together
`,
      desc3_6: "In this example, the $combinedColor variable will store the result of adding $color1 and $color2 together.",
      desc3_7: "4. Using color mixins: Sass mixins allow you to define reusable styles, including color-related styles. Here's an example:",
      codeTemplate3_4: `@mixin button($bgColor, $textColor) {
  background-color: $bgColor;
  color: $textColor;
}

.primary-button {
  @include button($primaryColor, #FFFFFF);
}

.secondary-button {
  @include button($secondaryColor, #000000);
}
`,
      desc3_8: "In this example, the button mixin takes two arguments: $bgColor and $textColor. It applies the provided background and text colors to the .primary-button and .secondary-button selectors."
    },
    section4: {
      title4: "Example:",
      desc4_1: ".scss file",
      codeTemplate4_1: `/*Colors*/
$colors: purple;


.colorheader{
  color: $colors,
  
}
`,
      desc4_2: ".css file:",
      codeTemplate4_2: `.colorheader{
        color:purple;
        

}`,
      desc4_3: ".html file:",
      codeTemplate4_3: `<!DOChtml>
<html>
<head>
   <body>
        <h2 class="colorheader">Welcome to TS4U BOOTCAMP</h2>
   </body>
</head>
</html>`

    }
  }
];
export default SassData;