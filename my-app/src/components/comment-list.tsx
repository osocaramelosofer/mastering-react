import { Textarea, Tooltip } from '@nextui-org/react'
import { commentApi } from 'api'
import { useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { EditableComment, IComment } from 'types/comment'

interface CommentListProps {
  comments: IComment[]
  handleDelete: (id: string) => void
  setComments: (comments: IComment[]) => void
}

export function CommentList({
  comments,
  handleDelete,
  setComments
}: CommentListProps) {
  const [editableComments, setEditableComments] = useState<EditableComment[]>(
    []
  )

  useEffect(() => {
    const transformedComments: EditableComment[] = comments.map((comment) => ({
      ...comment,
      editing: false
    }))
    setEditableComments(transformedComments)
  }, [comments])

  const handleEdit = (id: string) => {
    const newComments = editableComments.map((comment) =>
      comment.id === id ? { ...comment, editing: !comment.editing } : comment
    )
    setEditableComments(newComments)
  }
  const editingComment = (value: string, id: string) => {
    setEditableComments(
      editableComments.map((comment) =>
        comment.id === id ? { ...comment, comment: value } : comment
      )
    )
  }
  const updateComment = async (comment: IComment) => {
    const updatedComment = await commentApi.updateComment(comment)
    if (updatedComment) {
      const newComments = comments.map((comment) =>
        comment.id === updatedComment.id ? updatedComment : comment
      )
      setComments(newComments)
      alert('comment updated successfully')
    }
  }
  return (
    <ul className="min-w-[300px] rounded-md">
      {editableComments &&
        editableComments.map(({ id, email, comment, editing }) => {
          return (
            <li key={id} className="mb-2 flex w-full gap-2">
              <div className="w-full">
                <Textarea
                  label={email}
                  isDisabled={!editing}
                  variant="bordered"
                  labelPlacement="inside"
                  value={comment}
                  onValueChange={(value) => editingComment(value, id)}
                  className=""
                />
                <div className="ml-2 flex items-center gap-2">
                  <Tooltip content="Delete the comment">
                    <span
                      onClick={() => handleDelete(id)}
                      className="m-0 flex items-center border-b-2 border-transparent p-0 text-[10px] font-bold text-stone-500 hover:cursor-pointer hover:border-stone-500"
                    >
                      delete
                    </span>
                  </Tooltip>
                  <Tooltip content="Enable the edition of the comment">
                    <span
                      onClick={() => handleEdit(id)}
                      className="m-0 flex items-center border-b-2 border-transparent p-0 text-[10px] font-bold text-stone-500 hover:cursor-pointer hover:border-stone-500"
                    >
                      edit
                    </span>
                  </Tooltip>
                  <Tooltip content="update comment">
                    <button
                      className={`${editing ? 'block' : 'hidden'} `}
                      onClick={() => updateComment({ id, email, comment })}
                    >
                      <IoSend size={10} className="text-sky-600" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </li>
          )
        })}
    </ul>
  )
}
