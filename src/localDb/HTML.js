const htmlData = [
    {
        name: 'introduction', //component name wise property
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
        }
    }
];

export default htmlData;