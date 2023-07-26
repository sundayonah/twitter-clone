import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import {  HiEnvelope } from 'react-icons/hi2'
import {  BsBell, BsBookmark, BsTwitter } from 'react-icons/bs'
import Link from 'next/link';

const NAV_ITEMS = [
  {
    title:  'Home',
    icon: BiHomeCircle,
  },
  {
    title:  'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title:  'Notifications',
    icon: BsBell,
  },
  {
    title:  'Message',
    icon: HiEnvelope,
  },
  {
    title:  'Bookmarks',
    icon: BsBookmark,
  },
  {
    title:  'Profile',
    icon: BiUser,
  }
];

const Home = () => {
  return (
    <div className="w-full h-full justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* left sidebar for navigation */}
        <section className="fixed w-72 flex flex-col h-screen">
          <Link href={'/'} className='mt-4'>
            <BsTwitter />
          </Link>
          {NAV_ITEMS.map((item) =>(
            <Link 
            key={item.title}
            href={`/${item.title.toLowerCase}`}
            className='bg-white/50 flex items-center justify-center space-x-2 rounded-3xl p-4'
            >
            <div>
              <item.icon />
            </div>
            <div>{item.title}</div>
            </Link>
          ))}
        </section>
        {/* <main>Home timeline </main>
        <section>Right</section> */}
      </div>
    </div>
  )
}

export default Home