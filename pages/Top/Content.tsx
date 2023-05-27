import { useEffect, useState } from 'react'

export const TopContent: React.FC = () => {
  const [isSupport, setIsSupport] = useState<boolean>(false)

  useEffect(() => {
    if ('SpeechRecognition' in window) {
      // ユーザのブラウザは音声合成に対応しています。
      setIsSupport(true)
    } else {
      // ユーザのブラウザは音声合成に対応していません。
      setIsSupport(false)
    }
  }, [])

  return (
    <>
      {/*  */}
      {/*  */}
      {/*  */}
      {isSupport ? <div>サポート中</div> : <div>サポートしていません</div>}
    </>
  )
}
