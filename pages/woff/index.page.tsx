import { WoffProvider } from '~/contexts/WoffContext'
import { WoffTasks } from './Tasks'

export default function WoffTopPage() {
  return (
    <WoffProvider>
      <WoffTasks />
    </WoffProvider>
  )
}
