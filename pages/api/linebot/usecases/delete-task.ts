import { Message, PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/clients/line.client'
import { prismaClient } from '~/clients/prisma.client'
import { getTaskListMsg } from '~/noticeMessages/task-list'

export const deleteTaskUsecase = async (event: PostbackEvent) => {
  const [_, __, taskId] = event.postback.data.split('_')

  const task = await prismaClient.task.findUnique({ where: { id: parseInt(taskId, 10) } })
  if (task === null) {
    const tasks = await prismaClient.task.findMany()
    await lineClient.replyMessage(event.replyToken, [
      {
        type: 'text',
        text: `すでにクローズされています`
      },
      getTaskListMsg(tasks)
    ])
    return
  }

  await prismaClient.task.delete({
    where: {
      id: parseInt(taskId, 10)
    }
  })

  const tasks = await prismaClient.task.findMany()

  const messages: Message[] = [
    {
      type: 'text',
      text: `「${task.title}」をクローズしました`
    }
  ]

  if (tasks.length > 0) {
    messages.push(getTaskListMsg(tasks))
  }

  await lineClient.replyMessage(event.replyToken, messages)
}
