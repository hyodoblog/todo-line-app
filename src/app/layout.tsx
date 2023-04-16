import { LiffProvider } from '~/contexts/LiffContext'
import './globals.css'

export const metadata = {
  title: 'AIタスク',
  description: 'AIでタスク管理を効率化しましょう'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LiffProvider>
      <html lang="ja">
        <body>{children}</body>
      </html>
    </LiffProvider>
  )
}
