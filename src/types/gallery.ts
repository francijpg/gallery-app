export interface GalleryImage {
  id?: string;
  imageUrl: string;
  filePath: string;
  fileName: string;
  createdAt: number;
  uploaderName: string;
  uploaderId: string;
  privacity: boolean;
}

export interface GalleryState {
  images: GalleryImage[];
  imagesLoaded: boolean;
  imagesPrivates: boolean;
}