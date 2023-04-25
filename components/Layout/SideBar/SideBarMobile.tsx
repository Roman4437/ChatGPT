import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'

import NewChat from './NewChat'
import ChatRow from './ChatRow'

export default function SideBar() {
  const { data: session } = useSession()
  
  const [chats, loading] = useCollection(session && query(
    collection(db, 'users', session.user?.email!, 'chats'),
    orderBy('createdAt', 'asc')
    )
  )

  return (
    <div className="sidebar_mobile">
      <NewChat/>
      <div className="flex flex-1 space-x-1 overflow-x-auto scrollbar-hide">
        {loading && <p className="text-white animate-pulse">Loading...</p>}
        {chats?.docs.map(chat => <ChatRow key={chat.id} id={chat.id}/>)}
      </div>
      <img 
        className="cursor-pointer h-8 w-8 rounded-md hover:opacity-50"
        onClick={() => signOut()} 
        src={session?.user?.image!} 
        alt="pfp"
      />
    </div>
  )
}
