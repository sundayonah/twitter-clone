import React from 'react'
import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import {  HiEnvelope } from 'react-icons/hi2'
import {  BsBell, BsBookmark, BsThreeDots, BsTwitter } from 'react-icons/bs'
import Link from 'next/link';

const NAV_ITEMS = [
  {
    title:  'Twitter',
    icon: BsTwitter,
  },
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

const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col h-screen">
    <div className='flex flex-col items-stretch h-screen space-y-4 mt-4'>
    {NAV_ITEMS.map((item) =>(
        <Link 
        key={item.title}
        href={`/${item.title.toLowerCase}`}
        className='hover:bg-white/10 transition duration-200 flex items-center justify-start 
           w-fit space-x-2 rounded-3xl p-2 text-2xl py-2 px-6'
        >
        <div>
          <item.icon />
        </div>
        <div>{item.title !== 'Twitter' && item.title}</div>
        </Link>
      ))}
      <button className='rounded-full m-4 bg-primary p-4 text-2xl text-center
        hover:bg-opacity-70 transition duration-200'>Tweet</button>
    </div>
    <button className='rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center
        hover:bg-white/10 transition duration-200 w-full justify-between'>
          <div className='flex items-center space-x-2'>
              <div className='rounded-full bg-slate-400 w-12 h-12'></div>
              <div className='text-left text-sm'>
              <div className='font-semibold'>xhunTeq the Buggers</div>
              <div className=''>@xhunTeqtheBuggers</div>
              </div>
            </div>
             <div>
              <BsThreeDots />
             </div>
        </button>
    </section>
  )
}

export default LeftSidebar