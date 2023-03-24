import Header from "../ui/header";
import Cards from "../ui/cards";
import Footer from "../ui/footer";

import { Detail } from "../lib/types";
import { getEntries } from "../lib/getEntries";


export default async function DetailPage() {
   const data = await getEntries();
   const { details, features } = data;

   const findDetail = (label: string) => {
      return details?.find((detail: Detail) => detail.label == label);
   };

   return (<>
      { data &&
         <div className="px-4" >
            <Header foreword={ findDetail('foreword') } />
            <Cards features={ features } />
            <Footer afterword={ findDetail('afterword') } />
         </div >
      }
   </>);
}


