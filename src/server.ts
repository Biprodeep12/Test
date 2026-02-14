import 'dotenv/config';
import http, { IncomingMessage, ServerResponse } from 'http';
import { greet, add, User, describeUser } from './utils';

const PORT: number = 3000;

const envTest: string = process.env.TEST_VARIABLE || 'Default Value';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    res.end(`<h1>Welcome to the Simple Server! ${envTest}</h1>`);
  } else if (req.url === '/about') {
    res.end('<h1>About Page</h1><p>This is a simple Node.js server.</p>');
  } else if (req.url === '/test') {
    // Demo TypeScript features
    const message = greet('TypeScript');
    const sum = add(10, 20);
    const user: User = { name: 'Alice', age: 30, email: 'alice@example.com' };

    res.end(`
      <h1>TypeScript Test Page</h1>
      <p>${message}</p>
      <p>10 + 20 = ${sum}</p>
      <p>${describeUser(user)}</p>
    `);
  } else {
    res.statusCode = 404;
    res.end('<h1>404 - Page Not Found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
