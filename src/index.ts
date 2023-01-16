import http from 'http';
import 'dotenv/config';

export const port = process.env.PORT || 4000;
export const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname as any, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})

server.on('error', err => {
  console.log(`Sever generate error with name:${err.name} and message:${err.message}`)
  if (err.name === 'EACCES') {
    console.log(`No access to port: ${port}`)
  }
})