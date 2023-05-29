import test from 'ava'
import { issueTokenWithValidated } from '../../src/modules/issue-token-with-validated.js'
import { configs } from '../configs.js'

test('Issue Token With Validated', async (t) => {
  const { email, jwtSecret } = configs
  const token = await issueTokenWithValidated({
    email,
    secret: jwtSecret,
    alg: 'HS256',
    expireAt: '1m',
  })

  t.pass()
})
