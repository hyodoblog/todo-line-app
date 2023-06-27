import { useContext } from 'react'
import { WoffContext } from '~/contexts/WoffContext'

export const WoffProfile = () => {
  const { profile } = useContext(WoffContext)

  return (
    <div>
      <div>ddd</div>
      <div>{profile?.userId}</div>
      <div>{profile?.displayName}</div>
    </div>
  )
}
