import { useRouter } from "next/router"

import Chat from "@/components/Chat/Chat"

export default function Home() {
  const router = useRouter()
  const { id } = router.query

  return <Chat chatId={id as string}/>
}
