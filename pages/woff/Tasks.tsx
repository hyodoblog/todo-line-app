import { Task } from '@prisma/client'
import { useEffect, useState } from 'react'
import { MiniLoader } from '~/components/Loader/Mini'
import { TasksTable } from '~/components/Tasks/Table'

export const WoffTasks = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null)

  const init = async () => {
    const res = await fetch('/api/db/tasks/get')
    const { data } = await res.json()
    setTasks(data as Task[])
  }

  useEffect(() => {
    init()
  }, [])

  return <div>{tasks === null ? <MiniLoader /> : <TasksTable tasks={tasks} refetch={init} />}</div>
}
