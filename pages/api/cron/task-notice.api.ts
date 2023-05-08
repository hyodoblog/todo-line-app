import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }

  try {
    //
    console.info('cron start.')

    res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(405).end('Internal Server Error')
  }
}
