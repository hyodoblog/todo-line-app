import { Task } from '@prisma/client'
import { TaskDeleteButton } from './DeleteButton'

type Props = {
  tasks: Task[]
  refetch: () => Promise<void>
}

export const TasksTable: React.FC<Props> = ({ tasks, refetch }) => {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            タイトル
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Action</span>
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 bg-white">
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {task.title}
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <TaskDeleteButton id={task.id} refetch={refetch} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
