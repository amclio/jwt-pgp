import test from 'ava'
import { createSignedBody } from '../../src/modules/create-signed-body.js'
import { configs } from '../configs.js'

test('Create Signed Body', async (t) => {
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

  t.pass()
})
