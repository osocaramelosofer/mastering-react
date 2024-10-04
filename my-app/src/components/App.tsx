import { commentApi } from 'api'
import { useEffect, useState } from 'react'
import CommentForm from './comment-form'
import { IComment } from 'types/comment'
import { Providers } from 'providers'
import { CommentList } from './comment-list'

function App() {
  const [comments, setComments] = useState<IComment[]>([])

  const handleDelete = async (id: string) => {
    const { success, message } = await commentApi.deleteComment(id)
    if (!success) alert('We could not delete the todo, try later')

    const newComments = comments.filter((comment) => comment.id !== id)
    setComments(newComments)
    alert(message)
  }

  const addComment = (comment: IComment) => {
    setComments((prevComments) => {
      return [...prevComments, comment]
    })
  }

  useEffect(() => {
    const fetchComments = async () => {
      const res = await commentApi.list()
      setComments(res)
    }
    fetchComments()
  }, [])

  return (
    <Providers>
      <main className="flex size-full flex-col">
        <h1 className="text-center text-4xl font-bold">Leave Comments</h1>

        <section className="mx-auto mt-5 ">
          <CommentForm addComment={addComment} />
        </section>

        <section className="mx-auto mt-5">
          <CommentList
            comments={comments}
            handleDelete={handleDelete}
            setComments={setComments}
          />
        </section>
      </main>
    </Providers>
  )
}

export default App
