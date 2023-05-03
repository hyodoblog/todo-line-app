import { MessageEvent, FlexMessage, FlexComponent } from '@line/bot-sdk'
import { lineClient } from '../client'
import { prisma } from '~/libs/prisma'
import { Task } from '@prisma/client'

const getMessages = (tasks: Task[]): FlexMessage => {
  const taskFlexComponent: FlexComponent[] = tasks.map((task): FlexComponent => {
    return {
      type: 'box',
      layout: 'baseline',
      contents: [
        {
          type: 'text',
          text: task.title,
          weight: 'regular',
          flex: 7,
          margin: 'sm',
          wrap: true
        },
        {
          type: 'text',
          text: '削除',
          size: 'md',
          color: '#FF2E2EFF',
          flex: 2,
          align: 'end',
          action: {
            type: 'postback',
            label: '削除',
            displayText: '削除',
            data: `delete_task_${task.id}`
          }
        }
      ]
    }
  })

  return {
    type: 'flex',
    altText: 'タスク一覧',
    contents: {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        spacing: 'md',
        contents: [
          {
            type: 'text',
            text: 'タスク一覧',
            weight: 'bold',
            size: 'xl'
          },
          ...taskFlexComponent
        ]
      }
    }
  }
}

export const viewTasksUsecase = async (event: MessageEvent) => {
  const tasks = await prisma.task.findMany()

  if (tasks.length === 0) {
    await lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: '登録しているタスクはありません。'
    })
    return
  }

  await lineClient.replyMessage(event.replyToken, getMessages(tasks))
}
