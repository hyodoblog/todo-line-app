import { MessageEvent } from '@line/bot-sdk'
import { createZoomMeeting } from './domains/zoom.domain'
import { lineClient } from './client'

export const issueZoomURL = async (event: MessageEvent) => {
  const zoomMeeting = await createZoomMeeting({
    topic: String(event.timestamp)
  })

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: zoomMeeting.join_url
  })
}
