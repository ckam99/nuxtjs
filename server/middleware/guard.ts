
import type { IncomingMessage, ServerResponse } from 'http'

const isAuthenticated = false;

export default async (req: IncomingMessage, res: ServerResponse, next: any) => {
    console.log("guard middleware is running...");

    // if (isAuthenticated && req.url === '/login') {
    //     res.writeHead(301, { Location: '/' });
    //     res.end();
    // } else if (isAuthenticated || req.url === '/login') {
    //     next();
    // } else {
    //     res.writeHead(301, { Location: '/login' });
    //     res.end();
    // }
    next()
}