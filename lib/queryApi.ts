import { Session } from "next-auth"
import queryChatGPT from "./queryChatGPT"
import { Message } from '@/typings'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"

export default async function queryApi(input: string, chatId: string, model: string, session: Session | null) {
  try {
    const response = await queryChatGPT(input, model, chatId, session?.user?.email!)

    const message: Message = {
      text: response! || { role: "assistant", content: "ChatGPT was unable to find an answer!" },
      createdAt: serverTimestamp(),
      user: {
        _id: 'ChatGPT',
        name: 'ChatGPT',
        pfp: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}ChatGPT-Icon.png`
      }
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message
    )
  } catch (error) {
    console.error(error)
  }
}