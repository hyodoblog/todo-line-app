import { MessageEvent } from '@line/bot-sdk'
import { lineClient } from '../client'
import { prisma } from '~/libs/prisma'
import { getTaskListMsg } from '~/noticeMessages/task-list'

export const viewTasksUsecase = async (event: MessageEvent) => {
  const tasks = await prisma.task.findMany()

  if (tasks.length === 0) {
    await lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: '登録しているタスクはありません。'
    })
    return
  }

  await lineClient.replyMessage(event.replyToken, getTaskListMsg(tasks))
}
