import { Detail } from "../lib/types";

export default function Footer(
   { afterword }: { afterword: Detail | undefined; }
) {

   return (<>
      { afterword &&
         <footer className="mx-auto mt-4 w-full max-w-container px-4 sm:px-6 lg:px-8 bg-white">
            <div className="border-t py-4">
               <p className="my-4 text-center text-sm leading-6 text-slate-700">
                  © { new Date().getFullYear() } { afterword.title }&nbsp;{ afterword.subtitle }
               </p>
            </div>
         </footer >
      }
   </>);
}