export function createJwtSecret(secret: string) {
  const encoder = new TextEncoder()
  const secretBuffer = encoder.encode(secret)

  return secretBuffer
}
