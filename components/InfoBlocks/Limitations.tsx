import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Limitations() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mb-5'>
        <ExclamationTriangleIcon className='h-8 w-8' />
        <h2>Limitations</h2>
      </div>
      <div className='space-y-2'>
        <p className='info_text'>May occasionally generate incorrect information</p>
        <p className='info_text'>May occasionally produce harmful instructions or biased content</p>
        <p className='info_text'>Limited knowledge of world and events after 2021</p>
      </div>
    </div>
  )
}
