import { FormEvent, useState } from "react"
import { useSession } from "next-auth/react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import toast from "react-hot-toast"
import queryApi from "@/lib/queryApi"
import { db } from "@/firebase"

import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { ChatProps } from "./Chat"

import { Message } from "@/typings"

const model = 'gpt-3.5-turbo'

export default function Input({ chatId }: ChatProps) {
  const { data: session } = useSession()
  const [promt, setPromt] = useState<string>('')

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!promt) return

    const input = promt.trim()
    setPromt('')

    const message: Message = {
      text: {
        role: 'user',
        content: input
      },
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        pfp: session?.user?.image!
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )

    const notifications = toast.loading('ChatGPT is processing...')

    await queryApi(input, chatId, model, session)

    toast.success('ChatGPT has responded!', {
      id: notifications
    })
  }

  return (
    <div className="chat_container z-10 relative">
      <div className="chat_box">
        <form onSubmit={sendMessage} className="p-2 flex">
          <input
            className="chat_input"
            disabled={!session}
            onChange={event => setPromt(event.target.value)}
            value={promt} type="text"
            placeholder="Send a message..."
          />
          <button className="send_button" disabled={!promt || !session} type="submit">
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
          </button>
        </form>
      </div>
      <div className="hidden md:block absolute text-center p-2 text-xs text-gray-300 left-0 right-0 bottom-4">
        Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.
      </div>
    </div>
  )
}
