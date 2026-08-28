import { Hono } from 'hono'
import { prisma } from './src/lib/db'
import { createHash, timingSafeEqual } from 'crypto'

const app = new Hono()

const OWNER_EMAIL = 'donlegendwear@gmail.com'
const OWNER_PASSWORD_HASH = createHash('sha256').update('Bonana100'').digest('hex')
const SESSION_TOKEN = 'fkl_owner_session_' + createHash('sha256').update(Date.now().toString()).digest('hex').slice(0, 16)