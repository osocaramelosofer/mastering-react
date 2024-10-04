import { useState } from 'react'
import { IComment } from 'types/comment'
import { createContext } from 'react'

interface ICommentContext {
  comments: IComment[]
  setComments: (comments: IComment[]) => void
}
export const CommentContext = createContext<ICommentContext | null>(null)

export function CommentProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<IComment[]>([])

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  )
}
