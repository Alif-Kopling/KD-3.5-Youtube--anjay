import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  seed: {
    paths: ['node prisma/seed.js'],
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
