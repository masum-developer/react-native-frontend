const htmlData = [
    {
        name: 'introduction', //component name wise property,
        title: 'What is HTML',
        desc: 'HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages. HTML was created by Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML specification which was published in 1995. HTML 4.01 was a major version of HTML and it was published in late 1999. Though HTML 4.01 version is widely used but currently we are having HTML-5 version which is an extension to HTML 4.01, and this version was published in 2012.',
        section1: {
            title1: 'Why do we learn HTML?',
            desc1: 'Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.',
            lists1: [
                {
                    title: 'You can create a website or customize an existing web template if you know HTML well.'
                },
                {
                    title: 'If you want to start a carrer as a professional web designer, HTML and CSS designing is a must skill.'
                },
                {
                    title: 'If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield best results.'
                },
                {
                    title: 'Once you understands the basic of HTML then other related technologies like javascript, php, or angular are become easier to understand.'
                },
            ]
        },
        section2: {
            title2: 'Hello World using HTML',
            codeTemplate2: `<!DOCTYPE html>
<html>
    <head>
        <title>This is document title</title>
    </head>	
    <body>
        <h1>This is a heading</h1>
        <p>Hello World!</p>
    </body>	
</html>`
        },

    },

    {
        name: 'overview',
        section1: {
            desc: 'HTML stands for Hypertext Markup Language, and it is the most widely used language to write Web Pages.',
        },

        section2: {
            lists2: [
                {
                    title: 'Hypertext refers to the way in which Web pages (HTML documents) are linked together. Thus, the link available on a webpage is called Hypertext.'
                },
                {
                    title: 'As its name suggests, HTML is a Markup Language which means you use HTML to simply "mark-up" a text document with tags that tell a Web browser how to structure it to display.'
                },

            ],
        },

        section3: {
            title3: "Basic HTML",
            codeTemplate3: `<!DOCTYPE html>
                <html>
                    <head>
                        <title>This is document title</title>
                    </head>	
                    <body>
                        <h1>Learning HTML</h1>
                        <p>Learn MERN stack development from TS4U</p>
                    </body>	
                </html>`
        }

    },
    {
        name: "basictags",
        section1: {
            title1: "What is Basic Tags in HTML?",
            title: "What are the Tags in HTML?",
            desc: "As told earlier, HTML is a markup language and makes use of various tags to format the content. These tags are enclosed within angle braces. Except few tags, most of the tags have their corresponding closing tags.For example, (<html>) has its closing tag (</html>) and (<body>) tag has its closing tag (</body>) tag etc."
        },
        section2: {
            title2: "Example",
            codeTemplate2: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <h1>Welcome to TS4U</h1>
                    </body>	
                </html>`
        },
        section3: {
            title3: "Why should we use Tags in HTML?",
            desc3: "Tags are an essential part of HTML (Hypertext Markup Language) and are used to define the structure and content of a web page. Tags are essentially keywords that tell the browser how to display the content of the page. Here are some reasons why we should use tags in HTML:",
            list3: ['Structure: HTML tags provide a structured way to define the layout and structure of a web page. By using tags such as <header>, <nav>, <main>, <footer>, etc., we can clearly define the different parts of a web page, making it easier for search engines to crawl and index the content.', 'Accessibility: HTML tags provide important accessibility features for users who may use assistive technology to access web content. For example, using the <img> tag to add alt text to images allows users with visual impairments to understand the content of the image.', 'SEO: HTML tags are important for search engine optimization (SEO) as they help search engines understand the content of a web page. Using tags such as <title>, <meta>, <h1>, and <p> helps search engines to understand the hierarchy and relevance of the content on the page, which can improve the pages ranking in search results.', 'Consistency: By using consistent HTML tags, web designers and developers can create a consistent look and feel across multiple pages of a website. This makes it easier for users to navigate the site and find the content they are looking for.']
        }

    },
    {
        name: "elements",
        section1: {
            title1: "What is Elements in HTML?",
            title: "What are the Elements Tags in HTML?",
            desc: "Well , As we said that HTML (Hypertext Markup Language) is the standard markup language which is used to create web pages. HTML elements are the building blocks of HTML pages. Basically HTML elements are defined by tags, which are enclosed in angle brackets.There are two types of tags: opening tags and closing tags.Opening tags start with the less than symbol (<) followed by the tag name, and closing tags start with the less than symbol (<) followed by a forward slash (/), the tag name, and then the greater than symbol (>).The HTML element is everything from the start tag to the end tag: (<tagname> Contents goes here ..... </tagname>)",

        },
        section2: {
            title2: "Example",
            codeTemplate2: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <h1>Welcome to TS4U</h1>
                    </body>	
                </html>`
        },
        section3: {
            codeTemplate3: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <p>Welcome to TS4U</p>
                    </body>	
                </html>`

        },
        section4: {
            codeTemplate4: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <a>Visit TS4U Website</a>
                    </body>	
                </html>`
        },
        section5: {
            codeTemplate5: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <img src="logo.svg" alt="Ts4u"></img>
                    </body>	
                </html>`
        },
        section6: {
            codeTemplate6: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <ol start="8">
                             <li>Item 8</li>
                             <li>Item 9</li>
                             <li>Item 10</li>
                        </ol>
                    </body>	
                </html>`
        },
        section7: {
            codeTemplate7: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <ul start="1">
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </body>	
                </html>`
        },
        section8: {
            codeTemplate8: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <table>
                 <caption>Employee Details</caption>
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
        }
    }, {
        name: "attributes",
        section1: {
            title1: " What is Attributes in HTML?",
            title: "What are the Attributes Tags in HTML?",
            desc: "Well Now talking about the Html Attributes which are additional information provided within the tags of an HTML element to define its characteristics and behavior. Attributes provide extra functionality and customization to the elements they are applied to.Attributes are always specified in the start tag. And It usually come in name/value pairs like: name='value'."
        },
        section2: {
            title2: "Example",
            codeTemplate2: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                        <style>
                            p{text-decoration:'underline'}
                        </style>
                    </head>	
                    <body>
                        <p>Welcome to TS4U</p>
                    </body>	
                </html>`
        },
        section3: {
            codeTemplate3: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <p>Title Output is shown in the browser's title bar</p>
                    </body>	
                </html>`

        },
        section4: {
            codeTemplate4: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <img src="logo.svg" alt="Ts4u"></img>
                    </body>	
                </html>`
        }
    },

    {
        name: "formatting",
        section1: {
            title1: 'What is Formatting in HTML?',
            title: "What are the Formatting Tags in HTML?",
            desc: 'Basically HTML tags are used to format and structure the content in a web page. HTML Formatting is a process of formatting text for better look and feel. HTML provides us ability to format text without using CSS. There are many formatting tags in HTML. These tags are used to make text bold, italicized, or underlined. There are almost 14 options available that how text appears in HTML and XHTML. The formatting tags are divided into two categories: Physical tag and Logical tag.',

        },
        section2: {
            title2: "Example",
            codeTemplate2: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <p><strong>Learn MERN stack development from TS4U</strong></p>
                    </body>	
                </html>`


        },
        section3: {
            codeTemplate3: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <p><i> MERN stack development from TS4U. Follow Us.</i></p>
                    </body>	
                </html>`

        },
        section4: {
            codeTemplate4: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <p><big>Welcome to TS4U</big></p>
                    </body>	
                </html>`

        },
        section5: {
            codeTemplate5: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <p style={{text-decoration:'underline'}}>MERN stack development</p>
                    </body>	
                </html>`

        },
        section6: {
            codeTemplate6: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <h1><small>Welcome to TS4U</small></h1>
                        <h2><mark>Learn MERN stack development with
                 TS4U</mark></h2>
                    </body>	
                </html>`

        },
        section7: {
            codeTemplate7: `<!DOCTYPE html>
                 <html>
                    <head>
                        <title>Ts4u-Mern Stack Development Track</title>
                    </head>	
                    <body>
                        <h1>Welcome to TS4U</h1>
                        <p><small>Learn MERN stack development with
                 TS4U</small></p>
                    </body>	
                </html>`

        },

    },
    {
        name: "images",
        section1: {
            title1: "What is Images in HTML?",
            desc: "The HTML <img> tag is used to embed an image in a web page.Images are not technically inserted into a web page; images are linked to web pages.The < img > tag creates a holding space for the referenced image.The < img > tag is empty, it contains attributes only, and does not have a closing tag. Here is the some exclusive examples:"
        },
        section2: {
            title2: "Example",
            codeTemplate2: `<img src="logo.svg" alt="Ts4u">
            
            `
        },
        section3: {
            desc3: "In this example, the src attribute specifies the URL of the image file, and the alt attribute provides alternative text that will be displayed if the image cannot be loaded or read by screen readers.You can also specify additional attributes such as width and height to control the size of the image, and title to add a tooltip when the user hovers over the image: "
        },
        section4: {
            codeTemplate4: `<img src="logo2.png" alt="Ts4u" width="500" height="500">
            
            `
        },
        section5: {
            desc5: "Note that it's important Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads."
        },
        section6: {
            title6: "Why should we use Images in HTML?",
            desc6: "Images are a powerful tool for enhancing the visual appeal of a web page and conveying information in a more engaging and memorable way. Here are some reasons why we should use images in HTML:",
            list6: ['Visual Appeal: Images can make a web page more visually appealing and interesting to users. By using images, web designers can break up large blocks of text and make a page look more visually balanced and attractive.', 'Engagement: Images can engage users and encourage them to spend more time on a web page. Relevant and interesting images can help to draw users in and keep them engaged with the content.', 'Explanation: Images can help to explain complex concepts or data in a more visual and accessible way. For example, charts and graphs can be used to illustrate data trends, and diagrams can be used to show the relationships between different parts of a system.', 'Branding: Images can be used to reinforce a brands identity and personality.By using consistent imagery across a website, businesses can create a recognizable and memorable brand image that users will associate with their products or services.', 'Accessibility: Images can also be used to improve accessibility for users with visual impairments. By providing alternative text (alt text) for images, screen readers can read out a description of the image, allowing users with visual impairments to understand the content of the page.']

        }
    },
    {
        name: "tables",
        section1: {
            title1: "What is Tables in Html?",
            title: "Why should we use Tables in HTML?",
            desc1: 'Tables are a powerful tool in HTML (Hypertext Markup Language) for displaying data in a structured and organized way. Here are some reasons why we should use tables in HTML:',
            desc: "Well , Basically, HTML tables allow web developers to arrange data into rows and columns.HTML provides a way to create tables using the <table> tag and a combination of other tags to define the table structure, headings, rows, and cells. Here's a basic example:",
            list1: ['Data organization: Tables are an effective way to organize data in a clear and structured manner, making it easier for users to read and understand. Tables allow data to be arranged in rows and columns, and can include headers and footers to provide context and additional information.', 'Comparison: Tables can be used to compare data from different sources or periods of time. By presenting data in a table, users can quickly and easily see differences and similarities between different data sets.', 'Accessibility: Tables can improve accessibility for users with visual impairments by providing a clear structure and context for data. Screen readers can read out table headers and footers, making it easier for users to understand the content of the table.', 'Customization: Tables in HTML can be customized using CSS (Cascading Style Sheets) to change the appearance and layout of the table. This allows web designers to create tables that match the look and feel of the rest of the web page, improving the overall user experience.', 'Printability: Tables can be easily printed, making them a useful tool for printing data or reports for offline use.']
        },
        section2: {
            title2: "Example",
            codeTemplate2: `<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Huma Khan</td>
      <td>25</td>
      <td>Female</td>
    </tr>
    <tr>
      <td>Jane Smith deo</td>
      <td>30</td>
      <td>Male</td>
    </tr>
  </tbody>
</table>`
        },
        section3: {
            desc3: "As we can see from this example, the table has a header section (<thead>) with one row (<tr>) containing three heading cells (<th>) for the columns. The table body (<tbody>) contains two rows of data (<tr>), each with three cells (<td>) for the name, age, and gender.",
            desc4: "You can also use the <caption> tag to add a caption to the table Like below this Example:"

        },
        section4: {
            codeTemplate4: `<table>
  <caption>Employee Details</caption>
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
`,
            desc5: 'See This will add the caption "Employee Information" above the table.',
            desc6: 'You can also use other tags such as <colgroup> and <tfoot> to define additional table elements and attributes such as colspan and rowspan to merge cells across rows or columns.'
        },

    },
    {
        name: "lists",
        section1: {
            title1: "What is Lists in HTML?",
            desc1: "At First we have think how this 'List' word carries its valueable meaning. So we can define like 'A list is a record of short pieces of related information or used to display the data or any information on web pages in the ordered or unordered form.' Now  I know that you think how we can make lists using Html.  ",
            title: "Why should we use Lists in HTML?",
            desc: "Lists are an essential part of HTML (Hypertext Markup Language) and are used to organize content into an ordered or unordered list. Here are some reasons why we should use lists in HTML:",
            list1: ['Organization: Lists provide a clear and organized way to present information. By grouping related items together, lists can help to make content more readable and easier to understand.', 'Accessibility: Lists can improve accessibility for users with visual impairments by providing a clear structure and context for content. Screen readers can read out list items and their relationships to each other, making it easier for users to understand the content.', 'SEO: Lists can be used to improve search engine optimization (SEO) by providing a clear and structured way to present information. By using lists with descriptive headings, search engines can better understand the content of the page, which can improve its ranking in search results.', 'Customization: Lists in HTML can be customized using CSS (Cascading Style Sheets) to change the appearance and layout of the list. This allows web designers to create lists that match the look and feel of the rest of the web page, improving the overall user experience.', 'Readability: Lists can improve the readability of content by breaking up large blocks of text into more manageable chunks. By using lists, web designers can make content more scannable and easier to read.']
        },
        section2: {
            title2: "What is Ordered Lists?",
            desc2: "An ordered list is a list of items that are numbered in a specific order. To create an ordered list, use the <ol> tag with <li> tags for each item:"
        },
        section3: {
            codeTemplate3: `<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
`,
            desc3: 'This will create an ordered list with the numbers "1.", "2.", and "3." before each item.'


        },
        section4: {
            desc4: 'You can also use the `start` attribute to specify the starting number of the list:',
            codeTemplate4: `<ol start="8">
  <li>Item 8</li>
  <li>Item 9</li>
  <li>Item 10</li>
</ol>
`

        },
        section5: {
            desc5: 'This will start the list with the number "5".',
            title5: "What is Unordered Lists?"
        },
        section6: {
            desc6: "An unordered list is a list of items that are not numbered. To create an unordered list, use the <ul> tag with <li> tags for each item:",
            codeTemplate6: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
`,


        },
        section7: {
            desc7: "This will create an unordered list with bullet points before each item.",
        },
        section8: {
            desc8: "You can also use the type attribute to specify a different `type` of bullet point, such as a circle or square:",
            codeTemplate8: `<ul type="square">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
`
        },
        section9: {
            desc9: "This will create an unordered list with square bullet points.",
            title9: "Description Lists",

        },
        section10: {
            desc10: "A description list is a list of terms and their corresponding definitions. To create a description list, use the <dl> tag with <dt> tags for each term and <dd> tags for each definition:",
            codeTemplate10: `<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
  <dt>Term 3</dt>
  <dd>Definition 3</dd>
</dl>
`,
            desc11: "This will create a description list with each term followed by its corresponding definition."
        },
        section12: {
            title12: "What are the Types of Lists?",
            desc12: "Well,Basically, HTML provides three types of lists: ordered lists (<ol>), unordered lists (<ul>), and description lists (<dl>)."
        }
    }, {
        name: "textlinks",
        section1: {
            title1: "What is Text Links in HTML?",
            desc1: "In HTML, you can create links to other web pages or resources using the <a> tag. Here's an example:",
            title: "Why should we use Text Links in HTML?",
            desc: "Text links, also known as hyperlinks, are an important part of HTML (Hypertext Markup Language) and are used to create clickable links that connect different web pages or sections within a page. Here are some reasons why we should use text links in HTML:",
            list1: ['Navigation: Text links provide an intuitive and easy-to-use way for users to navigate a website. By using text links, users can quickly and easily move between different pages or sections within a page, improving the overall user experience.', 'SEO: Text links can improve search engine optimization (SEO) by providing clear and descriptive anchor text for search engines to crawl and index. By using relevant and descriptive anchor text, web designers can help search engines to better understand the content of the linked page, which can improve its ranking in search results.', 'Accessibility: Text links can improve accessibility for users with visual impairments by providing clear and descriptive anchor text that can be read out by screen readers. This makes it easier for users with visual impairments to navigate the website and understand the content.', 'Usability: Text links are a widely recognized and understood convention on the web, making them a familiar and easy-to-use element for users. By using text links, web designers can create a consistent and intuitive user interface that improves usability and enhances the overall user experience.', 'Customization: Text links in HTML can be customized using CSS (Cascading Style Sheets) to change the appearance and layout of the link. This allows web designers to create links that match the look and feel of the rest of the web page, improving the overall user experience.']
        },
        section2: {
            title2: "Example",
            codeTemplate2: `<a href="https://ts4u.us/">Follow Our TS4U WebPage</a>`,
            desc2: 'In this example, the `href` attribute specifies the URL of the page or resource you want to link to, and the text "Link to Example" is the clickable text for the link.'

        },
        section3: {
            desc3: 'You can also use relative URLs to link to pages within your own website or to other resources on your server. For example:',
            codeTemplate3: `<a href="about.html">About TS4U</a>`
        },
        section4: {
            desc4: 'In this example, the `href `attribute specifies a relative URL for a page called "about.html" in the same directory as the current page.'
        },
        section5: {
            desc5: 'You can add additional attributes to the <a> tag to control the link behavior, such as target="_blank" to open the linked page in a new browser window or tab:',
            codeTemplate5: `<a href="https://ts4u.us/" target="_blank"> Welcome to TS4U Abroad</a>`
        },
        section6: {
            desc6: "You can also use text or images as links. To use an image as a link, just wrap the <img> tag inside the <a> tag:",
            codeTemplate6: `<a href="https://ts4u.us/"><img src="mern.png" alt="ts4u"></a>`,
            desc7: ' Well you can see in this example, the <img> tag specifies the image file to display, and the <a> tag creates a link around the image.'
        }
    }
];

export default htmlData;