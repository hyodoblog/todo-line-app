import { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export const TopContent: React.FC = () => {
  const {
    browserSupportsSpeechRecognition: isSupport,
    listening: isListening,
    resetTranscript,
    transcript
  } = useSpeechRecognition()

  return (
    <>
      {/*  */}
      {/*  */}
      {/*  */}
      {isSupport ? <div>サポート中</div> : <div>サポートしていません</div>}

      {isListening ? <div>Listening...</div> : <div>Not listening</div>}

      {transcript}
    </>
  )
}
