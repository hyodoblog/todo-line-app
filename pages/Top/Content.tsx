import { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill'

const appId = process.env.NEXT_PUBLIC_SPEECHLY_APP_ID!
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId)
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition)

export const TopContent: React.FC = () => {
  const {
    browserSupportsSpeechRecognition: isSupport,
    listening: isListening,
    resetTranscript
  } = useSpeechRecognition()
  const speechRecognition = new SpeechlySpeechRecognition()

  const [error, setError] = useState<string | null>(null)
  const [transcript, setTranscript] = useState<string | null>(null)

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

  speechRecognition.onresult = ({ results }) => {
    const transcript = results[0][0].transcript
    setTranscript(transcript)
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
