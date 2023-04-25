import Image from "next/image"

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#343541]">
      <Image src='/loading.svg' width={30} height={30} alt="loading_spin" />
    </div>
  )
}
