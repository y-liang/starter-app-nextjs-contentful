
import { Detail } from "../lib/types";

export default function Header(
   { foreword }: { foreword: Detail | undefined; }
) {

   const categories = foreword?.subtitle.split(', ') || [];
   const urls = foreword?.link.split(', ') || [];

   return (<>
      { foreword &&
         <div id="foreword" className="justify-center text-center mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8 gap-12">
            <div className="relative z-20 mx-auto max-w-[60rem] pb-4 pt-8 lg:mx-0 lg:w-[60rem] lg:max-w-none lg:flex-none lg:pb-4 lg:pt-16">
               <h1 className="text-sm sm:text-base font-light leading-6 text-slate-400">
                  {/* { foreword.subtitle } */ }
                  For demo purposes only, a minimal setup for making a website with the most relevant web technologies
               </h1>
               <p className="mt-4 text-5xl leading-[1em] font-extrabold tracking-[-0.04em] text-blue-500 sm:text-8xl sm:leading-[6rem]">
                  { foreword.title }
               </p>
               <div className="flex flex-wrap mt-8 justify-center ">
                  <div className="flex items-center text-xs sm:text-sm font-medium text-slate-500">

                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z" />
                     </svg>
                     <span className="ml-2.5">
                        { categories[0] }&nbsp;+&nbsp;{ categories[1] }
                     </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                     </svg>
                     <span className="ml-2.5">
                        { categories[2] }
                     </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
                     </svg>
                     <span className="ml-2.5">
                        { categories[3] }&nbsp;+&nbsp;{ categories[4] }
                     </span>
                  </div>
               </div>
               <p className="mt-4 text-sm sm:text-lg leading-6 text-slate-800">
                  { foreword.description }
               </p>
               <div className="mt-8 flex gap-4 justify-center">
                  <a className="inline-flex justify-center rounded-lg text-sm font-normal py-3 px-4 bg-blue-400 text-white font-semibold hover:bg-blue-500 ease-linear duration-300" href={ urls[1] }>
                     <span>{ urls[0] }</span>
                  </a>
                  <a className="inline-flex justify-center rounded-lg text-sm font-normal py-3 px-4 bg-white text-slate-500 font-semibold border border-blue-400 hover:bg-white/25 hover:border-blue-500 ease-linear duration-300" href={ urls[3] }>
                     <span>{ urls[2] }</span>
                  </a>
               </div>
            </div>

         </div>
      }
   </>);
}
