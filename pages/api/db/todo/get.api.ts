import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '~/libs/prisma'

export default async function handler(_request: NextApiRequest, response: NextApiResponse) {
  try {
    const data = await prisma.todo.findMany()

    return response.status(200).json({ data })
  } catch (error) {
    return response.status(500).json({ error })
  }
}
