import { Request, Response, NextFunction } from 'express';
import admin from 'firebase-admin';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
const header = req.headers.authorization;

if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing token' });
}

const token = header.split(' ')[1];

try {
    const decoded = await admin.auth().verifyIdToken(token);
    (req as any).user = decoded;
    next();
} catch {
    return res.status(401).json({ message: 'Invalid token' });
}
}

export function requireRole(role: 'admin' | 'user') {
return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || user.role !== role) {
    return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};
}
