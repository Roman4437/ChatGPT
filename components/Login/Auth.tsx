import { useSession } from "next-auth/react"

import Login from "./Login"
import Loading from "./Loading"

type Props = {
  children: JSX.Element
}

export default function Auth({ children }: Props) {
  const { status } = useSession()

  switch (status) {
    case 'loading':
      return <Loading />
    case 'unauthenticated':
      return <Login />
    case 'authenticated':
      return children
  }
}
