import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '../client'
import { prisma } from '~/libs/prisma'

export const deleteTaskUsecase = async (event: PostbackEvent) => {
  const [_, __, taskId] = event.postback.data.split('_')

  const task = await prisma.task.findUnique({ where: { id: parseInt(taskId, 10) } })
  if (task === null) {
    await lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: `すでに削除されています`
    })
    return
  }

  await prisma.task.delete({
    where: {
      id: parseInt(taskId, 10)
    }
  })

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: `「${task.title}」を削除しました`
  })
}
