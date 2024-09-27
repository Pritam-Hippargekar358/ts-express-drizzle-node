
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

import * as dotenv from 'dotenv';
dotenv.config();

// create the connection
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Password123#@!',
    database: 'drizzle',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, 
    idleTimeout: 30000, 
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

export const db = drizzle(pool);