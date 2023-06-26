import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/clients/line.client'
import { prismaClient } from '~/clients/prisma.client'
import { getTaskListMsg } from '~/noticeMessages/task-list'

export const deleteTaskUsecase = async (event: PostbackEvent) => {
  const [_, __, taskId] = event.postback.data.split('_')

  const task = await prismaClient.task.findUnique({ where: { id: parseInt(taskId, 10) } })
  if (task === null) {
    await lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: `すでにクローズされています`
    })
    return
  }

  await prismaClient.task.delete({
    where: {
      id: parseInt(taskId, 10)
    }
  })

  const tasks = await prismaClient.task.findMany()

  await lineClient.replyMessage(event.replyToken, [
    {
      type: 'text',
      text: `「${task.title}」をクローズしました`
    },
    getTaskListMsg(tasks)
  ])
}
