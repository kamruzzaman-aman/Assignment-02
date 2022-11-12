const http = require("http"); 
const fs = require("fs"); 

const server = http.createServer(function(request, response){
    if(request.url=="/"){
        const myData = fs.readFileSync("home.html", "utf8");
        // response.writeHead(200, {"Content-Type":"text/html"});
        // response.write(myData);
        // response.end();
        //=======================or===================
        response.end(myData);
    }
    else if(request.url=="/blogPage"){
        const myData = fs.readFileSync("blog.html", "utf8");
        response.end(myData);
    }
    else if(request.url=="/galleryPage"){
        const myData = fs.readFileSync("gallery.html", "utf8");
        response.end(myData);
    }
    else if(request.url=="/aboutPage"){
        const myData = fs.readFileSync("about.html", "utf8");
        response.end(myData);
    }
    else if(request.url=="/contactPage"){
        const myData = fs.readFileSync("contact.html", "utf8");
        response.end(myData);
    }
    else if(request.url=="/termsPage"){
        const myData = fs.readFileSync("terms.html", "utf8");
        response.end(myData);
    }
    else if(request.url=="/privacyPage"){
        const myData = fs.readFileSync("privacy.html", "utf8");
        response.end(myData);
    }
    else{
        response.end("404 not found page");
    }
})
server.listen(2020, ()=>{
    console.log("Server Run Success");
})