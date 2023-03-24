export type Detail = {
   id: number;
   label: string;
   title: string;
   subtitle: string;
   description: string;
   url: string;
};

export type Feature = {
   id: number;
   title: string;
   description: string;
   image: Image;
   isPublished: boolean;
};

type Image = {
   url: string;
}

