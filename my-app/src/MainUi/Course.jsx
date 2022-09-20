import React from 'react'
import Gren from "../image/pair-programming.svg";
import Blockchain from "../image/BLOCKCHAIN.jpeg";
import Solidity from "../image/SOLIDITY.jpeg";
import Remix from "../image/REMIX.jpeg";
import Nft from "../image/NFT.jpeg";
import REact from "../image/REACT.jpeg";
import Hardhat from "../image/HARDHAT.jpeg";


const Course = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Become a Web3 Developer 🚀

              {/* <br className="hidden lg:inline-block" />hands-on creative
              <br className="hidden lg:inline-block" />classNamees. */}

            </h1>
            <b>Start learning for free Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cumque harum facere, illum voluptatum sint et facilis minus expedita maiores dicta, doloribus quo, exercitationem aspernatur perspiciatis. Beatae omnis cum aspernatur.</b>
            <b>lore</b>
            <p className="mb-8 leading-relaxed"></p>
            <div className="justify-center">
              <button className=" text-white bg-[#F6851B] border-0 py-4 px-14 focus:outline-none hover:bg-[#cc6e16] rounded text-lg">Metamask</button>
              <div className='py-4'>
                <button className="  text-white bg-indigo-700 border-0 py-4 px-14 focus:outline-none hover:bg-indigo-800 rounded text-lg">Unstoppable</button>
              </div>

              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Gren} />
          </div>
        </div>


        {/* 2nd PAGE */}




        <section class="text-gray-600 body-font">
          <div class="container px-6 py-22 mx-auto">
            <div class="flex flex-col">
              
              </div>
              <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Getting Started with Web3 Development 😎</h1>
      <div class="h-1 bg-gray-200 rounded overflow-hidden">
      <div class="w-100 h-full bg-indigo-500"></div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
    </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src={Blockchain} />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Introduction to blockchain Developement</h2>
                <p class="text-base leading-relaxed mt-2">Web3School is a platform where developers hangout to learn web3 with each other</p>
                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src={Solidity} />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Write your first smart Contract on solidity</h2>
                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img alt="content" class="object-cover object-center h-full w-full" src={Nft} />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Learn everything about NFT</h2>
                <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="container px-3 py-22 mx-auto">
            <div class="flex flex-col">

              <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12"></div>
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src={Remix} />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5">How to use Remix IDE</h2>
                  <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                  <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src={REact} />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Learn React for Blockchain developement</h2>
                  <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                  <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src={Hardhat} />
                  </div>
                  <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Hardhat tutorial</h2>
                  <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                  <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* 2nd PAGE */}


          
        </section>



      </section>

    </div>
  )
}

export default Course