import { NextApiRequest, NextApiResponse } from 'next'
import { prismaClient } from '~/clients/prisma.client'
import { lineClient } from '~/clients/line.client'
import { getTaskListMsg } from '~/noticeMessages/task-list'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.info('cron start.')

    const tasks = await prismaClient.task.findMany()

    if (tasks.length > 0) {
      await lineClient.pushMessage(tasks[0].userId, getTaskListMsg(tasks))
    }

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(405).end('Internal Server Error')
  }
}
