import test from 'ava'
import { createSignedBody } from '../../src/modules/create-signed-body.js'
import { configs } from '../configs.js'

test('Create Signed Body', async (t) => {
  const { publicKey, privateKey } = configs
  const signedBody = await createSignedBody({
    publicKey,
    privateKey,
    email: 'lincroe@gmail.com',
    options: { passphrase: 'rtu07@emT45h' },
  })

  t.pass()
})
