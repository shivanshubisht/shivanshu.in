import { env } from '@/env'
import { Pool } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-serverless'

const globalForDb = globalThis as unknown as {
  pool: Pool | undefined
}

const pool =
  globalForDb.pool ?? new Pool({ connectionString: env.DATABASE_URL })
if (process.env.NODE_ENV !== 'production') globalForDb.pool = pool

export const db = drizzle(pool)
