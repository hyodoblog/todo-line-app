import { WebhookEvent } from '@line/bot-sdk'
import { issueZoomURL } from './issue-zoom-url'

export const usecases = async (event: WebhookEvent) => {
  if (event.type === 'message' && event.message.type === 'text' && event.message.text === 'Zoom') {
    await issueZoomURL(event)
  }
}
