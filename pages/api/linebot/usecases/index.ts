import { WebhookEvent } from '@line/bot-sdk'
import { issueZoomURLUsecase } from './issue-zoom-url'
import { addTaskUsecase } from './add-task'
import { viewTasksUsecase } from './view-tasks.ts'
import { deleteTaskUsecase } from './delete-task'

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

  // view todo list.
  if (event.type === 'message' && event.message.type === 'text' && event.source.type === 'user') {
    return await viewTasksUsecase(event)
  }

  // add task.
  if (event.type === 'message' && event.message.type === 'text' && event.source.type === 'user') {
    return await addTaskUsecase(event, event.message, event.source)
  }

  // delete task.
  if (
    event.type === 'postback' &&
    event.source.type === 'user' &&
    event.postback.data.startsWith('delete_task_')
  ) {
    return await deleteTaskUsecase(event)
  }
}
