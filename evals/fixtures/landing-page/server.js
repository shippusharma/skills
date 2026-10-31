import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';

const port = process.env.PORT || 3000;

createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(await readFile(new URL('./index.html', import.meta.url)));
    return;
  }
  res.writeHead(404).end('Not found');
}).listen(port, () => console.log(`http://localhost:${port}`));
