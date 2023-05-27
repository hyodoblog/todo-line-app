import { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const TopContent: React.FC = () => {
  const {
    browserSupportsSpeechRecognition: isSupport,
    listening: isListening,
    isMicrophoneAvailable,

    transcript,
    resetTranscript
  } = useSpeechRecognition()

  const [error, setError] = useState<string | null>(null)

  const handleStartListening = () => {
    try {
      resetTranscript()
      SpeechRecognition.startListening({ language: 'ja', continuous: true })
    } catch (err) {
      setError(JSON.stringify(err))
    }
  }

  const handleStopListening = () => {
    try {
      SpeechRecognition.stopListening()
    } catch (err) {
      setError(JSON.stringify(err))
    }
  }

  return (
    <>
      {isSupport ? <div>サポート中</div> : <div>サポートしていません</div>}
      {SpeechRecognition.browserSupportsSpeechRecognition() ? (
        <div>サポート中</div>
      ) : (
        <div>サポートしていません</div>
      )}

      {isMicrophoneAvailable ? <div>マイクサポート中</div> : <div>マイクサポートしてません</div>}

      {isListening ? <div>Listening...</div> : <div>Not listening</div>}

      {error && <div>{error}</div>}

      {transcript}

      <button onClick={handleStartListening}>開始</button>
      <button onClick={handleStopListening}>停止</button>
    </>
  )
}
