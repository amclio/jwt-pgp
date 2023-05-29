import test from 'ava'
import { createSignedBody } from '../../src/modules/create-signed-body.js'
import { issueToken } from '../../src/modules/issue-token.js'
import { configs } from '../configs.js'

test('Issue Token', async (t) => {
  const {
    publicKey,
    privateKey,
    email,
    privateKeyPassphrase: passphrase,
    jwtSecret,
  } = configs

  const signedBody = await createSignedBody({
    publicKey,
    privateKey,
    email,
    options: { passphrase },
  })

  const token = await issueToken({
    signedBody,
    email,
    secret: jwtSecret,
  })

  t.pass()
})
