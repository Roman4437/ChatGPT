import { collection, getDocs } from "firebase/firestore"
import openai from "./chatgpt"
import { db } from "@/firebase"
import { ChatCompletionRequestMessage } from "openai"

export default async function queryChatGPT(prompt: string, model: string, chatId: string, email: string) {
  try {
    const messages = await getDocs(collection(db, 'users', email, 'chats', chatId, 'messages'))

    const prevMessages: ChatCompletionRequestMessage[] = []

    messages.docs.map(item => prevMessages.push(item.data().text))

    const req = await openai.createChatCompletion({
      model, temperature: 0, frequency_penalty: 0, presence_penalty: 0, messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...prevMessages,
        { role: "user", content: prompt }
      ]
    })

    const res = req.data.choices[0].message

    return res
  } catch (error) {
    return { role: 'assistant', content: 'Something went wrong! ChatGPT was unable to find an snwer!' }
  }
}