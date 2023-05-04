import { MessageEvent } from '@line/bot-sdk'
import { createZoomMeeting } from '../domains/zoom.domain'
import { lineClient } from '../client'

export const issueZoomURLUsecase = async (event: MessageEvent) => {
  const zoomMeeting = await createZoomMeeting({
    topic: String(event.timestamp),
    waiting_room: false,
    allow_multiple_devices: true,
    participant_video: true,
    screen_sharing: true
  })

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: zoomMeeting.join_url
  })
}
