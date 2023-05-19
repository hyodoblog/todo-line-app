import { NextApiRequest, NextApiResponse } from 'next'
import { prismaClient } from '~/clients/prisma.client'

export default async function handler(_request: NextApiRequest, response: NextApiResponse) {
  try {
    const data = await prismaClient.task.findMany()

    return response.status(200).json({ data })
  } catch (error) {
    return response.status(500).json({ error })
  }
}
