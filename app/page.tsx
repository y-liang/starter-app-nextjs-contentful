import Header from "./ui/header";
import Cards from "./ui/cards";
import Footer from "./ui/footer";

import { Detail } from "./lib/types";
import { getEntries } from "./lib/getEntries";


export default async function Page() {

   const data = await getEntries();
   const { details, features } = data;

   // return detail by label
   const findDetail = (label: string) => {
      return details?.find((detail: Detail) => detail.label == label); // replace filter
   };

   return (<>
      { data &&
         <div className="px-4" >

            <Header
               foreword={ findDetail('foreword') }
               category={ findDetail('category') }
            />


            <Cards features={ features } />


            <Footer afterword={ findDetail('afterword') } />

         </div >
      }
   </>);
}


