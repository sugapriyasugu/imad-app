var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
articleone:{
    title:'Article one | Sugapriya',
    heading:'Article one',
    date:' March 18, 2018',
    content:`<p>
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
                <p>
                    This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>`
},
articletwo:{
    title:'Article two | Sugapriya',
    heading:'Article two',
    date:' March 18, 2018',
    content:`<p>
                    This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
                </p>
                <p>
                    This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
                </p>
                <p>
                    This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
                </p>`
},
articlethree:{
    title:'Article three | Sugapriya',
    heading:'Article three',
    date:' March 18, 2018',
    content:`<p>
                    This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
                </p>
                <p>
                    This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
                </p>
                <p>
                    This is the content for my third article.This is the content for my third article.This is the content for my third article.This is the content for my third article.
                </p>`
}
};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var templateHTML=`<html>
        <head>
            ${title}
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="ui/style.css">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                ${heading}
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return templateHTML;
}

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
