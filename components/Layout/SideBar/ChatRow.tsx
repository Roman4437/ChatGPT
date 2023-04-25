import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { MouseEvent, useEffect, useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore"
import { db } from "@/firebase"

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline"

type Props = {
  id: string
}

export default function ChatRow({ id }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [active, setActive] = useState(false)

  const [messages] = useCollection(session && query(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
    orderBy('createdAt', 'asc')
    )
  )

  useEffect(() => {
    if(!pathname) return

    setActive(pathname.includes(id))
  }, [pathname])

  async function deleteRow(event: MouseEvent<SVGSVGElement>) {
    event.stopPropagation()

    await deleteDoc(
      doc(db, 'users', session?.user?.email!, 'chats', id)
    )

    router.replace('/')
  }

  return (
    <div onClick={() => router.push(`/chat/${id}`)} className={`chat_row justify-between ${active && 'bg-gray-700/50'}`}>
      <ChatBubbleLeftIcon className="w-5 h-5"/>
      <p className='flex-1 hidden md:block truncate'>
        {messages?.docs[0]?.data().text.content || 'New Chat'}
      </p>
      <TrashIcon onClick={deleteRow} className='w-5 h-5 text-gray-700 hover:text-red-700'/>
    </div>
  )
}
