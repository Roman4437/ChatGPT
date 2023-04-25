import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function Login() {
  return (
    <div className='flex flex-col flex-1 items-center justify-center h-screen'>
      <Image src='/chatgpt-icon.svg' width={100} height={100} alt='logo' />
      <button
        className='flex text-white text-xl bg-blue-500 p-1 items-center justify-between space-x-2 shadow-lg rounded-sm'
        onClick={() => signIn('google', { callbackUrl: '/' })}
      >
        <Image className='rounded-sm' src='/google-icon.jpg' width={35} height={35} alt='google' />
        <p>Sign in with Google!</p>
      </button>
    </div>
  )
}
