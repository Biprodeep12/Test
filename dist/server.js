"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http_1 = __importDefault(require("http"));
const utils_1 = require("./utils");
const PORT = 3000;
const envTest = process.env.TEST_VARIABLE || 'Default Value';
const server = http_1.default.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.end(`<h1>Welcome to the Simple Server! ${envTest}</h1>`);
    }
    else if (req.url === '/about') {
        res.end('<h1>About Page</h1><p>This is a simple Node.js server.</p>');
    }
    else if (req.url === '/test') {
        // Demo TypeScript features
        const message = (0, utils_1.greet)('TypeScript');
        const sum = (0, utils_1.add)(10, 20);
        const user = { name: 'Alice', age: 30, email: 'alice@example.com' };
        res.end(`
      <h1>TypeScript Test Page</h1>
      <p>${message}</p>
      <p>10 + 20 = ${sum}</p>
      <p>${(0, utils_1.describeUser)(user)}</p>
    `);
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 - Page Not Found</h1>');
    }
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
//# sourceMappingURL=server.js.map