import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '~/libs/prisma'

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { title, description } = JSON.parse(request.body)

  try {
    const data = await prisma.todo.create({
      select: {
        id: true,
        title: true,
        description: true
      },
      data: {
        title: title,
        description: description
      }
    })

    return response.status(200).json({ data })
  } catch (error) {
    return response.status(500).json({ error })
  }
}