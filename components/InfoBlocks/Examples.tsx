import { SunIcon } from "@heroicons/react/24/outline";

export default function Examples() {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mb-5'>
        <SunIcon className='h-8 w-8' />
        <h2>Examples</h2>
      </div>
      <div className='space-y-2'>
        <p className='info_text'>&quot;Explain quantum computing in simple terms&quot;</p>
        <p className='info_text'>&quot;Got any creative ideas for a 10 year old`s birthday?&quot;</p>
        <p className='info_text'>&quot;How do I make an HTTP request in Javascript?&quot;</p>
      </div>
    </div>
  )
}
