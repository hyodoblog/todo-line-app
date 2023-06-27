import type { Liff } from '@line/liff/exports'
import { WoffProfile } from './woff'

type Woff = {
  init: ({ woffId }: { woffId: string }) => Promise<any>
  getProfile: () => Promise<WoffProfile>
}

declare global {
  const liff: Liff
  const woff: Woff
}
