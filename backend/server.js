const http = require("http");
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');

const server = http.createServer((req, res) =>{
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);


    if(page == '/'){
        fs.readFile("../index.html", (error, data) =>{
            if(error){
                console.log('404 error html');
                res.writeHead(404);
                return res.end("404 page not found")
            }

            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data);
        })
    }

    else if(page === `/result`){
        let name = {
            'one': ""
        }
        let score = 0
        let options = ["MR", "SR", "The", "OG", "W.", "Ghost", "OP", "GOAT"];
        let optionsTwo = ['Killer', "Master", "Killah", "GZS", "NRE", "ASW"];
        // For question One
        if("QuestionOne" in params){
            if(params["QuestionOne"] == "introvert" || params['QuestionOne'] == 'extrovert'){
                score += 1;
            }
        }
        // for Question two
        if("QuestionTwo" in params){
            if(params["QuestionTwo"] == "optimistic" || params['QuestionTwo'] == 'pessimistic'){
                score += 1;
            }
        }
        // For question three
        if("QuestionThree" in params){
            if(params["QuestionThree"] == "spontaneous" || params['QuestionThree'] == 'planned'){
                score += 1;
            }
        }
        // For question four
        if("QuestionFour" in params){
            if(params["QuestionFour"] == "alone" || params['QuestionFour'] == 'group'){
                score += 1;
            }
        }
        // For Question 5
        if("QuestionFive" in params){
            if(params["QuestionFive"] == "detail-oriented" || params['QuestionFive'] == 'big-picture'){
                score += 1;
            }
        }

        if(score == 5){
            res.writeHead(200, {'Content-Type': 'application/json'});
            name['one'] += `${options[Math.floor(Math.random() * options.length)]} ${optionsTwo[Math.floor(Math.random() * optionsTwo.length)]} `;
            res.end(JSON.stringify(name));
        }
        else{
            res.writeHead(200, {'Content-Type': 'application/json'});
            name['one'] = 'Submit the 5 answers.'
            res.end(JSON.stringify(name));
        }

    }

    else if(page === '/css/index.css'){
        fs.readFile("../css/index.css", (error, data) =>{
            if(error){
                console.log("404 css not found");
                res.writeHead(404);
                return res.end("404 css not found")
            }

            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(data);
        })
    }

    else if(page === '/js/index.js'){
        fs.readFile('../js/index.js', (error, data) =>{
            if(error){
                console.log(error);
                res.writeHead(404);
                return res.end('404 not js file');
            }

            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(data);
        })
    }
})

server.listen(5000);