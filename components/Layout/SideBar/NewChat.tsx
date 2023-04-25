import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { db } from '@/firebase'

import { PlusIcon } from '@heroicons/react/24/solid'

export default function NewChat() {
  const router = useRouter()
  const { data: session } = useSession()

  async function createNewChat () {
    const document = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'), {
      userId: session?.user?.email,
      createdAt: serverTimestamp()
    })

    router.push(`/chat/${document.id}`)
 }

  return (
    <div onClick={createNewChat} className='chat_row border border-gray-700'>
      <PlusIcon className='h-4 w-4'/>
      <p className='hidden md:block'>New Chat</p>
    </div>
  )
}
