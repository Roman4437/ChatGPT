import { DocumentData } from "firebase/firestore"
import Code from "./Code"

type Props = {
  message: DocumentData
}

export default function Message({ message }: Props) {
  return (
    <div className="message_row">
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img className="h-8 w-8 rounded" src={message.user.pfp} alt="pfp" />
        {message.text.role === 'assistant'
          ? <Code>
            {message.text.content}
          </Code>
          : <p className="whitespace-pre-wrap">
            {message.text.content}
          </p>}
      </div>
    </div >
  )
}
