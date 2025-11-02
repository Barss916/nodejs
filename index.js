import { createServer } from "node:http";
import { allNotes, createNote, deleteNote, updateNote } from "./db.js";

const host = "127.0.0.1";
const port = 5000;

const server = createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (url === "/" && method === "GET"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(allNotes()));
        res.end();
    }
    if (url === "/notes" && method === "POST"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json")
        let body = [];
        let text;
        req.on("data", (chunk) => body.push(chunk));
        req.on("end", () => {
            const buffer = Buffer.concat(body);
            const rawDataString = buffer.toString();
            const data = JSON.parse(rawDataString);
            createNote(data);
        });
        res.end(JSON.stringify({"statusCode" : 200}));
    }
    if (url === "/notes/delete" && method === "DELETE"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        let body = [];
        req.on("data", (chunk) => body.push(chunk));
        req.on("end", () => {
            const buffer = Buffer.concat(body);
            const rawDataString = buffer.toString();
            const data = JSON.parse(rawDataString);
            deleteNote(data);
        });
        res.end(JSON.stringify({"statusCode" : 200}));
    }

    if (url === "/notes/update" && method === "PUT"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        let body = [];
        req.on("data", (chunk) => body.push(chunk));
        req.on("end", () => {
            const buffer = Buffer.concat(body);
            const rawDataString = buffer.toString();
            const data = JSON.parse(rawDataString);
            updateNote(data);
        });
        res.end(JSON.stringify({"statusCode" : 200}));
    }
});

server.listen(port, host, () => {
    console.log(`Server run: http://${host}:${port}`);
});