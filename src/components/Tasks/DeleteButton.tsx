import { useState } from 'react'

type Props = {
  id: number
  refetch: () => Promise<void>
}

export const TaskDeleteButton: React.FC<Props> = ({ id, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleDelete = async () => {
    setIsLoading(true)
    try {
      await fetch('/api/db/tasks/delete', { body: JSON.stringify({ id: String(id) }) })
    } catch (err) {
      console.error(err)
    }
    setIsLoading(false)
    refetch()
  }

  return (
    <button disabled={isLoading} className="text-red-600 hover:text-red-900" onClick={handleDelete}>
      {isLoading ? (
        <div className="flex w-full justify-center px-2">
          <span className="border-red-400 h-4 w-4 animate-spin rounded-full border-4 border-t-transparent" />
        </div>
      ) : (
        '削除'
      )}
    </button>
  )
}
