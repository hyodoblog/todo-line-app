import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const TopContent: React.FC = () => {
  const {
    browserSupportsSpeechRecognition: isSupport,
    listening: isListening,
    resetTranscript,
    transcript
  } = useSpeechRecognition()

  const handleStartListening = () => {
    resetTranscript()
    SpeechRecognition.startListening({ continuous: true })
  }

  const handleStopListening = () => {
    SpeechRecognition.stopListening()
  }

  return (
    <>
      {/*  */}
      {/*  */}
      {/*  */}
      {isSupport ? <div>サポート中</div> : <div>サポートしていません</div>}

      {isListening ? <div>Listening...</div> : <div>Not listening</div>}

      {transcript}

      <button onClick={handleStartListening}>開始</button>
      <button onClick={handleStopListening}>停止</button>
    </>
  )
}
