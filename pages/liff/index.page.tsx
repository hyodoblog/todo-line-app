import { LiffProvider } from '~/contexts/LiffContext'
import { LiffTasks } from './Tasks'

export default function LiffTopPage() {
  return (
    <LiffProvider>
      <LiffTasks />
    </LiffProvider>
  )
}
