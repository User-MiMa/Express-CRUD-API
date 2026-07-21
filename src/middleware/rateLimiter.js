import rateLimit from "express-rate-limit";

export const requestLimiter = rateLimit({
    windowMs: 30 * 1000,
    limit: 5,
    message: {status:429, message: "Too many requests"}
});

export const authLimiter = rateLimit({
    windowMs: 30 * 1000,
    limit: 3,
    message: {status:429, message: "Too many login attempts"}
});

export const admLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 1,
    message: {status:429, message: "Too many admins created"}
});