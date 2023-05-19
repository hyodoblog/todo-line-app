import { MessageEvent } from '@line/bot-sdk'
import { createZoomMeeting } from '../domains/zoom.domain'
import { lineClient } from '../../../../src/clients/line.client'

export const issueZoomURLUsecase = async (event: MessageEvent) => {
  const zoomMeeting = await createZoomMeeting({
    topic: String(event.timestamp),
    waiting_room: false
  })

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: zoomMeeting.join_url
  })
}
