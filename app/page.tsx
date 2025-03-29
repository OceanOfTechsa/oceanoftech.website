import React from 'react';
import Loader from "@/components/Loader";

const Home = () => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center backdrop-blur-lg">
          <Loader />
          <p className="text-xs font-bold">Coming soon...</p>
        </div>
    )
}
export default Home
