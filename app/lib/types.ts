export type Detail = {
   id: number;
   label: string;
   title: string;
   subtitle: string;
   description: string;
   link: string;
};

export type Feature = {
   id: number;
   title: string;
   description: string;
   image: Image;
   isIcon: boolean;
   link: string;
};

type Image = {
   url: string;
}

