import { MessageEvent, TextEventMessage, User as SourceUser } from '@line/bot-sdk'
import { lineClient } from '../client'
import { prisma } from '~/libs/prisma'

export const addTaskUsecase = async (
  event: MessageEvent,
  message: TextEventMessage,
  source: SourceUser
) => {
  await prisma.task.create({
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

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: 'タスクを保存しました'
  })
}
