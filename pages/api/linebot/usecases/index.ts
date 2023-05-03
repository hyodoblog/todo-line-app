import { WebhookEvent } from '@line/bot-sdk'
import { issueZoomURLUsecase } from './issue-zoom-url'
import { addTaskUsecase } from './add-task'

const zoomWordList = ['Zoom', 'zoom', 'ZOOM', 'ズーム']

export const usecases = async (event: WebhookEvent) => {
  // issue zoom url.
  if (
    event.type === 'message' &&
    event.message.type === 'text' &&
    zoomWordList.includes(event.message.text)
  ) {
    return await issueZoomURLUsecase(event)
  }

  // todo store.
  if (event.type === 'message' && event.message.type === 'text' && event.source.type === 'user') {
    return await addTaskUsecase(event, event.message, event.source)
  }
}
