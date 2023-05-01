import 'dotenv/config'
import { Client } from '@line/bot-sdk'

// LINE Messaging APIの設定
export const lineConfig = {
  channelAccessToken: String(process.env.LINE_CHANNEL_ACCESS_TOKEN),
  channelSecret: String(process.env.LINE_CHANNEL_SECRET)
}

// LINE SDKのクライアントを作成
export const lineClient = new Client(lineConfig)
