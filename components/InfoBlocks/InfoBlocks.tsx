import Capabilities from '@/components/InfoBlocks/Capabilities'
import Examples from '@/components/InfoBlocks/Examples'
import Limitations from '@/components/InfoBlocks/Limitations'

export default function InfoBlocks() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white overflow-y-auto scrollbar-hide">
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <Examples />
        <Capabilities />
        <Limitations />
      </div>
    </div>
  )
}
