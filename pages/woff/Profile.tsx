import { Task } from '@prisma/client'
import { useContext, useEffect, useState } from 'react'
import { prismaClient } from '~/clients/prisma.client'
import { MiniLoader } from '~/components/Loader/Mini'
import { WoffContext } from '~/contexts/WoffContext'

export const WoffProfile = () => {
  const { profile } = useContext(WoffContext)
  const [tasks, setTasks] = useState<Task[] | null>(null)

  useEffect(() => {
    ;(async () => {
      if (profile) {
        const res = await fetch('api/db/tasks/get')
        const data = await res.json()
        setTasks(data as Task[])
      }
    })()
  }, [profile])

  return (
    <div>
      {tasks === null ? (
        <MiniLoader />
      ) : (
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <div>{task.title}</div>
              <div>{task.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
