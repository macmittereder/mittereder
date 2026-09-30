import assert from 'node:assert/strict'
import test from 'node:test'
import { GET } from './route.ts'
import { getStatus } from './status.ts'

test('status payload uses the supplied timestamp and stable health fields', () => {
  assert.deepEqual(getStatus(new Date('2026-09-29T12:00:00.000Z')), {
    status: 'ok',
    message: 'Mittereder website is running',
    timestamp: '2026-09-29T12:00:00.000Z',
  })
})

test('GET returns a JSON health response', async () => {
  const response = GET()

  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type') ?? '', /application\/json/)
  const body = await response.json() as ReturnType<typeof getStatus>
  assert.equal(body.status, 'ok')
  assert.equal(body.message, 'Mittereder website is running')
  assert.ok(Number.isFinite(Date.parse(body.timestamp)))
})
