import Input from "./Input"
import Texting from "./Texting"

export type ChatProps = {
  chatId: string
}

export default function Chat({ chatId }: ChatProps) {
  return (
    <div className="flex relative flex-col h-[calc(100vh-60px)] md:h-screen overflow-hidden">
      <Texting chatId={chatId} />
      <Input chatId={chatId} />
    </div>
  )
}