import { MessageEvent, TextEventMessage, User as SourceUser } from '@line/bot-sdk'
import { lineClient } from '~/clients/line.client'
import { prismaClient } from '~/clients/prisma.client'
import { getTaskListMsg } from '~/noticeMessages/task-list'

export const addTaskUsecase = async (
  event: MessageEvent,
  message: TextEventMessage,
  source: SourceUser
) => {
  await prismaClient.task.create({
    select: {
      id: true,
      title: true,
      description: true
    },
    data: {
      userId: source.userId,
      title: message.text,
      description: ''
    }
  })

  const tasks = await prismaClient.task.findMany()

  await lineClient.replyMessage(event.replyToken, [
    {
      type: 'text',
      text: 'タスクを保存しました'
    },
    getTaskListMsg(tasks)
  ])
}
