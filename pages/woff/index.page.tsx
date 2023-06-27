import { WoffProvider } from '~/contexts/WoffContext'
import { WoffProfile } from './Profile'

export default function WoffTopPage() {
  return (
    <WoffProvider>
      <WoffProfile />
    </WoffProvider>
  )
}
