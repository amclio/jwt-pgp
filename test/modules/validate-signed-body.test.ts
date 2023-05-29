import test from 'ava'
import { createSignedBody } from '../../src/modules/create-signed-body.js'
import { validateSignedBody } from '../../src/modules/validate-signed-body.js'
import { configs } from '../configs.js'

test('Validate Signed Body', async (t) => {
  const {
    publicKey,
    privateKey,
    email,
    privateKeyPassphrase: passphrase,
  } = configs

  const signedBody = await createSignedBody({
    publicKey,
    privateKey,
    email,
    options: { passphrase },
  })

  const validated = await validateSignedBody({
    signedBody,
    email,
    publicKey,
  })

  t.is(validated, true)
})
