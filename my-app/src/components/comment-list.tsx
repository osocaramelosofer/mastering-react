import { Textarea, Tooltip } from '@nextui-org/react'
import { commentApi } from 'api'
import { useEffect, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { EditableComment, IComment } from 'types/comment'
import { CommentComponent } from './comment-component'

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

  const enableEditing = (id: string) => {
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
      {editableComments && editableComments.length > 0 ? (
        editableComments.map((currentComment) => {
          return (
            <CommentComponent
              key={currentComment.id}
              editingComment={editingComment}
              handleDelete={handleDelete}
              enableEditing={enableEditing}
              updateComment={updateComment}
              currentComment={currentComment}
            />
          )
        })
      ) : (
        <span>no comments yet</span>
      )}
    </ul>
  )
}
