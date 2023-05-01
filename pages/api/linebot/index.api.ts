import { NextApiRequest, NextApiResponse } from 'next'
import { WebhookEvent, middleware } from '@line/bot-sdk'
import { lineConfig } from './client'
import { usecases } from './usecase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // if (req.method !== 'POST') {
  //   res.setHeader('Allow', ['POST'])
  //   res.status(405).end(`Method ${req.method} Not Allowed`)
  //   return
  // }

  console.info(req.method)

  try {
    // LINEの署名検証
    middleware(lineConfig)

    const events = req.body.events as WebhookEvent[]

    await Promise.all(events.map(usecases))

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(500).end('Internal Server Error')
  }
}
