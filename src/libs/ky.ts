import ky from 'ky-universal'
import { KyInstance } from 'ky/distribution/types/ky'

export const openPgpClient: KyInstance = ky.extend({
  prefixUrl: 'https://keys.openpgp.org',
})
