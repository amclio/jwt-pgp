import * as pgp from 'openpgp'

interface Params {
  privateKey: string
  publicKey: string
  email: string
  options?: Options
}

interface Options {
  passphrase: string
}

export async function createSignedBody({
  privateKey,
  publicKey,
  email,
  options,
}: Params) {
  let key = await pgp.readPrivateKey({ armoredKey: privateKey })

  if (!key.isDecrypted()) {
    key = await pgp.decryptKey({
      privateKey: key,
      passphrase: options?.passphrase,
    })
  }

  const message = await pgp.createCleartextMessage({
    text: email,
  })

  const signedBody = await pgp.sign({ message, signingKeys: key })

  return signedBody
}
