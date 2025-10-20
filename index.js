import {createServer} from "node:http";
import {allNotes, createNote} from "./db.js";

const host = "127.0.0.1";
const port = 3000;

// function parseData () {
//     let body = [];
//     let result;
//     req.on("data", chunk => body.push(chunk));
//     res.on(end => {
//         const buffer = Buffer.concat(body); 
//         const rawDataString = buffer.toString();
//         const data = JSON.parse(rawDataString);
//         result = data;
//     })
//     return data;
// }

const server = createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    if (url === "/" && method === "GET"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify({"id" : 1, "name" : "Alex"}));
    }
    if (url === "/notes" && method === "POST"){
        res.statusCode = 200;
        let body = [];
        req.on("data", chunk => body.push(chunk));
        res.on(end => {
            const buffer = Buffer.concat(body); 
            const rawDataString = buffer.toString();
            const data = JSON.parse(rawDataString);
            console.log();
        });
        res.end();
});

server.listen(port, host, () => {
    console.log(`Server run: http://${host}:${port}`);
});