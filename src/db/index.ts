import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL must be set')
}

const client = postgres(connectionString)
const db = drizzle(client, { schema });

export default db;
