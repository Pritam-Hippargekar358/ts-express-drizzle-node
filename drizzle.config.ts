import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: "./src/model/*.ts",
  out: "./src/db/migrations",
  dialect: 'mysql',
  breakpoints: true,
  migrations: {
    prefix: 'supabase'
  },
  // Provides detailed information about what changes will be made
  verbose: true,
  // Requires confirmation before applying changes to the database schema
  strict: true, 
  dbCredentials: {
    host: "localhost",
    user: "root",
    password: "Password123#@!",
    port: 3306,
    database: "drizzle",
    // url: process.env.DATABASE_URL as string
  }
})