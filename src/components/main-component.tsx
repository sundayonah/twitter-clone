// import ComposeTweet from "./server-components/compose-tweet";

// import { getTweets } from "@/lib/supabase/queries";
// import Tweet from "./client-components/tweet";
// import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
// import { cookies, headers } from "next/headers";

// const MainComponent = async () => {
//   const supabaseClient = createServerComponentSupabaseClient({
//     cookies,
//     headers,
//   });

//   const { data: userData, error: userError } =
//     await supabaseClient.auth.getUser();

//   const res = await getTweets({ currentUserID: userData.user?.id });

//   return (
//     <main className="flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
//       <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
//         Home
//       </h1>
//       <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
//         <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
//         <ComposeTweet />
//       </div>
//       <div className="w-full">
//         {res &&
//           res.map(({ likes, tweet, profile, hasLiked, replies }) => {
//             return (
//               <Tweet
//                 key={tweet.id}
//                 tweet={{
//                   tweetDetails: {
//                     ...tweet,
//                   },
//                   userProfile: {
//                     ...profile,
//                   },
//                 }}
//                 likesCount={likes.length}
//                 currentUserId={userData.user?.id}
//                 hasLiked={hasLiked}
//                 repliesCount={replies.length}
//               />
//             );
//           })}
//       </div>
//     </main>
//   );
// };

// export default MainComponent;



import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs';
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai'
import {IoStatsChart, IoShareOutline} from 'react-icons/io5'
const MainComponent = () => {
  return (
    <main className='ml-[275px] flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] 
    border-r-[0.5px] border-gray-700'>
     <h1 className='text-xl p-6 font-bold backdrop-blur bg-black/10 sticky top-0'>Home</h1>
     <div className='border-t-[0.5px] border-b-[0.5px] flex items-stretch px-4 py-4 space-x-2
       border-gray-600 h-32 relative'>
       <div className='w-10 h-10 bg-slate-400 rounded-full flex-none'></div>
       <div className='flex flex-col w-full h-full'>
          <textarea 
          className='w-full h-full placeholder:text-gray-600 text-2xl bg-transparent 
          border-b-[0.5] border-gray-600 p-4 outline-none border-none' 
          placeholder="What's happening ?"
          />
          <div className='w-full justify-between items-center flex'>
           <div></div>
           <div className='w-full max-w-[100px]'>
             <button className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center
              hover:bg-opacity-70 transition duration-200 font-bold'>
               Tweet
               </button>
           </div>
          </div>
       </div>
     </div>
          <div className='flex flex-col'>
           {Array.from({length: 5}).map((_, i)=>(
             <div 
             key={i}
             className='border-b-[0.5px] border-gray-600 p-4 flex space-x-4'>
               <div>
                 <div className='w-10 h-10 bg-slate-200 rounded-full'>
                 </div>
               </div>
               <div className='flex flex-col space-y-4'>
                  <div className='flex items-center w-full justify-between'>
                   <div className='flex items-center space-x-1 w-full'>
                   <div className='font-bold'>xhunTeq the Buggers</div>
                   <div className='text-gray-400'>@xhunTeqtheBurggers</div>
                   <div className='text-gray-400'><BsDot /></div>
                   <div className='text-gray-400'>1 hour ago</div>
                   </div>
                   <div className='text-gray-400'>
                     <BsThreeDots />
                   </div>
                  </div>
                  <div className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae dolore ut quaerat voluptas quibusdam, corporis consequatur possimus veritatis cumque ullam repellendus, sit earum iure, nisi perferendis expedita adipisci nemo.</div>
                  <div className='bg-slate-400 aspect-square w-full h-80 rounded-xl'></div>
                  <div className='flex justify-around items-center space-x-2 w-full'>
                   <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                     <BsChat />
                     </div>
                   <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                     <AiOutlineRetweet />
                     </div>
                   <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'>
                     <AiOutlineHeart />
                     </div>
                   <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'><IoStatsChart /></div>
                   <div className='rounded-full hover:bg-white/20 transition duration-200 p-3 cursor-pointer'><IoShareOutline/></div>
                  </div>
               </div>
             </div>
           ))}
          </div>
 </main>
  )
}

export default MainComponent;