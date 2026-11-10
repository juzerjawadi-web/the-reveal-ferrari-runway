import http from 'node:http';
import { createReadStream, statSync, existsSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
const PORT = Number(process.env.PORT) || 4173;
const BASE = process.cwd();
const MIME = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mp4':'video/mp4','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'};
http.createServer((req,res)=>{
  if(req.method !== 'GET' && req.method !== 'HEAD') {res.writeHead(405);res.end();return;}
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url,`http://localhost:${PORT}`).pathname); }
  catch {res.writeHead(400);res.end();return;}
  const filepath = resolve(BASE, '.' + (pathname==='/'?'/index.html':pathname));
  if(!filepath.startsWith(BASE+sep)){res.writeHead(403);res.end();return;}
  if(!existsSync(filepath)){res.writeHead(404);res.end('File not found');return;}
  let s;
  try {s=statSync(filepath);if(!s.isFile()) throw Error('not a file')}catch{res.writeHead(404);res.end();return;}
  const mime=MIME[extname(filepath).toLowerCase()]||'application/octet-stream';
  const headers={'Content-Type':mime,'Accept-Ranges':'bytes','Cache-Control':'no-cache'};
  const range=req.headers.range;
  if(range){
    const match=/^bytes=(\d*)-(\d*)$/.exec(range);
    if(!match){res.writeHead(416,{'Content-Range':`bytes */${s.size}`});res.end();return;}
    const suffixOnly=match[1]==='';
    let start=suffixOnly?Math.max(0,s.size-Number(match[2])):Number(match[1]);
    let end=suffixOnly?s.size-1:(match[2]===''?s.size-1:Math.min(Number(match[2]),s.size-1));
    if(start<0||start>=s.size||end<start){res.writeHead(416,{'Content-Range':`bytes */${s.size}`});res.end();return;}
    res.writeHead(206,{...headers,'Content-Range':`bytes ${start}-${end}/${s.size}`,'Content-Length':end-start+1});
    if(req.method==='HEAD')res.end();else createReadStream(filepath,{start,end}).pipe(res);
  }else{
    res.writeHead(200,{...headers,'Content-Length':s.size});
    if(req.method==='HEAD')res.end();else createReadStream(filepath).pipe(res);
  }
}).listen(PORT,()=>console.log(`Ferrari scroll hero ready at http://localhost:${PORT}`));
