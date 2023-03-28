
import { Detail } from "../lib/types";

export default function Header(
   { foreword }: { foreword: Detail | undefined; }
) {

   const categories = foreword?.subtitle.split(', ') || [];
   const urls = foreword?.url.split(', ') || [];

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
                        <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                     </svg>
                     <span className="ml-2.5">
                        { categories[0] }&nbsp;+&nbsp;{ categories[1] }
                     </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0111.573-2.226 3.75 3.75 0 014.133 4.303A4.5 4.5 0 0118 20.25H6.75a5.25 5.25 0 01-2.23-10.004 6.072 6.072 0 01-.02-.496z" clipRule="evenodd" />
                     </svg>
                     <span className="ml-2.5">
                        { categories[2] }
                     </span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-slate-500 ml-6">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clipRule="evenodd" />
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
