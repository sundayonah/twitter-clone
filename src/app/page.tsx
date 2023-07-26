import LeftSidebar from '@/components/LeftSidebar';
const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* left sidebar for navigation */}
     
        <LeftSidebar />
        {/* <main>Home timeline </main>
        <section>Right</section> */}
      </div>
    </div>
  )
}

export default Home