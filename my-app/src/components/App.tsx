import { commentApi } from 'api'
import { useEffect } from 'react'
import CommentForm from './comment-form'
import { IComment } from 'types/comment'
import { CommentList } from './comment-list'
import { Divider } from '@nextui-org/react'
import { useCommentContext } from 'hooks/useCommentContext'

function App() {
  // const [comments, setComments] = useState<IComment[]>([])
  const { comments, setComments } = useCommentContext()
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
    <main className="flex size-full flex-col">
      <h1 className="text-center text-4xl font-bold">Leave Comments</h1>

      <section className="mx-auto ">
        <CommentForm addComment={addComment} />
      </section>

      <Divider className="mt-5" />
      <section className="mx-auto mt-7">
        <h2 className="mb-4 text-center text-2xl font-bold">Comment list</h2>
        <CommentList
          comments={comments}
          handleDelete={handleDelete}
          setComments={setComments}
        />
      </section>
    </main>
  )
}

export default App
