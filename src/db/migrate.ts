import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { env } from '../env.mjs'

const connectionString = env.DATABASE_URL

const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);

migrate(db, { migrationsFolder: "drizzle" }).then(() => {
    console.log("Migration complete ✅");
}).catch((error) => {
    console.error("Migration failed ❌");
    console.error(error);
}).finally(() => {
    sql.end();
});
