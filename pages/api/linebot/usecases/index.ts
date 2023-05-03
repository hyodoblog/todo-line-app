import { WebhookEvent } from '@line/bot-sdk'
import { issueZoomURL } from './issue-zoom-url'

const zoomWordList = ['Zoom', 'zoom', 'ZOOM', 'ズーム']

export const usecases = async (event: WebhookEvent) => {
  // issue zoom url.
  if (
    event.type === 'message' &&
    event.message.type === 'text' &&
    zoomWordList.includes(event.message.text)
  ) {
    return await issueZoomURL(event)
  }

  // todo store.
  if (event.type === 'message' && event.message.type === 'text') {
    return await issueZoomURL(event)
  }
}
