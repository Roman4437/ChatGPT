import { useSession } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "@/firebase"

import { ChatProps } from "./Chat"
import Message from "./Message"
import { useEffect, useRef } from "react"

export default function Texting({ chatId }: ChatProps) {
  const { data: session } = useSession()
  const textingRef = useRef<HTMLDivElement>(null)

  const [messages] = useCollection(session && query(
    collection(db, 'users', session.user?.email!, 'chats', chatId, 'messages'),
    orderBy('createdAt', 'asc')
  ))

  useEffect(() => {
    textingRef.current?.scrollTo(0, textingRef.current?.scrollHeight)
  }, [messages])

  return (
    <div ref={textingRef} className="flex-1 overflow-y-auto scrollbar-hide">
      {messages?.empty && <p className="mt-10 text-center text-white font-bold">Type something to get started!</p>}
      {messages?.docs.map(message => <Message key={message.id} message={message.data()} />)}
    </div>
  )
}
