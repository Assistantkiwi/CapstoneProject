import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { userModel } from "../model/userModel";

interface JwtPayloadWithId extends JwtPayload {
    _id: string;
}

export interface AuthenticatedRequest extends Request {
    user?: {
        _id: string;
        name: string;
        email: string;
    };
}

export const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).send({ message: 'Please authenticate.' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as JwtPayloadWithId;
        const user = await userModel.findById(decoded._id).select('_id name email'); // Select only necessary fields

        if (!user) {
            throw new Error();
        }

        req.user = user as AuthenticatedRequest['user']; // Type assertion
        next();
    } catch (error) {
        res.status(401).send({ message: 'Please authenticate.' });
    }
};
