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
    <div className="sidebar">
      <div className="flex flex-col p-2 h-screen">
        <div className="flex-1">
          <div className="space-y-1">
            <NewChat/>
            {loading && <p className="text-white animate-pulse text-center">Loading...</p>}
            {chats?.docs.map(chat => <ChatRow key={chat.id} id={chat.id}/>)}
          </div>
        </div>
        <div onClick={() => signOut()} className='user_row'>
          <img src={session?.user?.image!} className="h-8 w-8 rounded-md" alt="pfp"/>
          <p>{session?.user?.name}</p>
        </div>
      </div>
    </div>
  )
}
