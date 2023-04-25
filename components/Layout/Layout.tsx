import SideBar from "./SideBar/SideBar";
import SideBarMobile from "./SideBar/SideBarMobile";

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className='flex flex-col md:flex-row'>
      <SideBarMobile />
      <SideBar />
      <div className='flex-1 bg-[#343541] overflow-y-auto'>
        {children}
      </div>
    </main>
  )
}
