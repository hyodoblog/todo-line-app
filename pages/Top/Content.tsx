import { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'

const appId = process.env.NEXT_PUBLIC_SPEECHLY_APP_ID!
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

export const TopContent: React.FC = () => {
  const [error, setError] = useState<string | null>(null)
  const {
    browserSupportsSpeechRecognition: isSupport,
    listening: isListening,
    resetTranscript,
    transcript
  } = useSpeechRecognition()

  const handleStartListening = () => {
    try {
      resetTranscript()
      SpeechRecognition.startListening({ continuous: true })
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

      {isListening ? <div>Listening...</div> : <div>Not listening</div>}

      {error && <div>{error}</div>}

      {transcript}

      <button onClick={handleStartListening}>開始</button>
      <button onClick={handleStopListening}>停止</button>
    </>
  )
}
