import Image from "next/image";
import { getEntries } from "../lib/getEntries";
import { Feature } from "../lib/types";






export default async function DetailPage() {

   const data = await getEntries();
   const { features } = data;

   return (<>
      {features &&
         <div className="mx-8 pt-16 pb-48">
            {features.map((feature: Feature, index: number) => (
               <div key={index} id={`${feature.title}`}>
                  <h3 className="mt-12 mb-6 text-lg text-slate-500 text-center">
                     {feature.title.charAt(0).toUpperCase() + feature.title.slice(1)}
                  </h3>
                  <div className="relative border-t border-blue-50 overflow-hidden group-hover:opacity-100 sm:aspect-w-2 sm:aspect-h-1 sm:h-96 md:aspect-w-1 md:aspect-h-1">
                     <Image
                        src={feature.image?.url}
                        alt=""
                        className="h-full w-full object-contain object-center"
                        width={2400} height={2400}
                     />
                  </div>

               </div>
            ))}
         </div>
      }
   </>);
}


