import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL must be set')
}

const client = postgres(connectionString)
const db = drizzle(client);

export default db;
