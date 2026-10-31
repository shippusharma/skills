import { createServer } from 'node:http';
import { store } from './store.js';

const port = process.env.PORT || 3000;

createServer(async (req, res) => {
  const userId = Number(req.headers['x-user-id']);
  if (!userId) return send(res, 401, { error: 'missing x-user-id' });

  const [, resource, id] = req.url.split('/');
  if (resource !== 'notes') return send(res, 404, { error: 'not found' });

  if (req.method === 'GET' && !id) return send(res, 200, store.listNotes(userId));
  if (req.method === 'POST' && !id) return send(res, 201, store.createNote(userId, await readJson(req)));
  if (req.method === 'PUT' && id) return send(res, 200, store.updateNote(userId, Number(id), await readJson(req)));
  if (req.method === 'DELETE' && id) return send(res, 204, store.deleteNote(userId, Number(id)));
  send(res, 405, { error: 'method not allowed' });
}).listen(port);

function send(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(body === undefined ? '' : JSON.stringify(body));
}

async function readJson(req) {
  let text = '';
  for await (const chunk of req) text += chunk;
  return JSON.parse(text || '{}');
}
