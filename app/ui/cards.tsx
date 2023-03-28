import Link from "next/link";
import { Feature } from "../lib/types";

export default function Cards(
   { features }: { features: Feature[] | undefined; }
) {

   return (<>
      { features &&
         <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
               <div className="mx-auto max-w-2xl py-16 sm:py-8 md:max-w-none md:py-6">
                  <div className="my-6 space-y-12 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0">
                     { features.map((feature: Feature, index: number) => (
                        <Link key={ index } className="group relative hover:cursor-pointer text-slate-600 hover:underline underline-offset-4"
                           href={ `/detail#${feature.title}` }>

                           <div className="relative border border-blue-500 bg-white/50 overflow-hidden rounded-lg group-hover:opacity-100 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 md:aspect-w-1 md:aspect-h-1">
                              <img
                                 src={ feature.image?.url }
                                 alt=""
                                 className="h-full w-full object-cover object-center"
                              />
                           </div>
                           <h3 className="mt-6 text-xs text-slate-500 text-center">
                              <span className="absolute inset-0" />
                              <span className="text-slate-600 font-semibold">
                                 { feature.title?.toUpperCase() }
                              </span>
                              { ' · ' }
                              { feature.isPublished ? `Completed` : `In Progress` }
                           </h3>
                           <p className="text-base font-semibold text-slate-900">
                              { feature.description }
                           </p>

                        </Link>
                     )) }
                  </div>
               </div>
            </div>
         </div>
      }
   </>);
}