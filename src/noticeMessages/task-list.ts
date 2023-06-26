import { FlexComponent, FlexMessage } from '@line/bot-sdk'
import { Task } from '@prisma/client'

export const getTaskListMsg = (tasks: Task[]): FlexMessage => {
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
          text: 'クローズ',
          size: 'md',
          color: '#FF2E2EFF',
          flex: 3,
          align: 'end',
          action: {
            type: 'postback',
            label: 'クローズ',
            displayText: `「${task.title}」をクローズ`,
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
      size: 'giga',
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
