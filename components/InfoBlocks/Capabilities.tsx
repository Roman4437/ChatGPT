import { BoltIcon } from "@heroicons/react/24/outline";

export default function Capabilities() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mb-5'>
        <BoltIcon className='h-8 w-8' />
        <h2>Capabilities</h2>
      </div>
      <div className='space-y-2'>
        <p className='info_text'>Remembers what user said earlier in the conversation</p>
        <p className='info_text'>Allows user to provide follow-up corrections</p>
        <p className='info_text'>Trained to decline inappropriate requests</p>
      </div>
    </div>
  )
}
