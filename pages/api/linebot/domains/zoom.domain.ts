import axios from 'axios'
import jwt from 'jsonwebtoken'

const ZOOM_API_KEY = String(process.env.ZOOM_API_KEY)
const ZOOM_API_SECRET = String(process.env.ZOOM_API_SECRET)

type CreateMeetingProps = {
  topic: string
}

type CreateMeeting = {
  uuid: string
  id: number
  host_id: string
  host_email: string
  topic: string
  type: 1
  status: 'waiting'
  timezone: 'Asia/Tokyo'
  created_at: string
  start_url: string
  join_url: string
  password: string
  h323_password: string
  pstn_password: string
  encrypted_password: string
}

export const createZoomMeeting = async (props: CreateMeetingProps): Promise<CreateMeeting> => {
  const { topic } = props

  const token = jwt.sign(
    {
      iss: ZOOM_API_KEY,
      exp: Date.now() + 5000
    },
    ZOOM_API_SECRET
  )

  const meetingConfig = {
    topic,
    type: 1
  }

  try {
    const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', meetingConfig, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    if (response.status !== 201) {
      throw new Error('Zoom API Error')
    }

    return response.data
  } catch (err) {
    console.error(err)
    throw Error
  }
}
