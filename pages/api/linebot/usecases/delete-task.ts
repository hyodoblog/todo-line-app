import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '../client'
import { prisma } from '~/libs/prisma'

export const deleteTaskUsecase = async (event: PostbackEvent) => {
  const [_, __, taskId] = event.postback.data.split('_')

  await prisma.task.delete({
    where: {
      id: parseInt(taskId, 10)
    }
  })

  await lineClient.replyMessage(event.replyToken, {
    type: 'text',
    text: `${taskId}を削除しました`
  })
}
