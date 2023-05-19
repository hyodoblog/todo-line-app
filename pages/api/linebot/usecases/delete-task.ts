import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/clients/line.client'
import { prismaClient } from '~/clients/prisma.client'

export const deleteTaskUsecase = async (event: PostbackEvent) => {
  const [_, __, taskId] = event.postback.data.split('_')

  const task = await prismaClient.task.findUnique({ where: { id: parseInt(taskId, 10) } })
  if (task === null) {
    await lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: `すでに削除されています`
    })
    return
  }

  await prismaClient.task.delete({
    where: {
      id: parseInt(taskId, 10)
    }
  })

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: `「${task.title}」を削除しました`
  })
}
