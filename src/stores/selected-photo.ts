import { atom } from "nanostores";

type Photo = {
  id: string;
  src: string;
};

const SelectedPhotoStore = atom<Photo | null>(null);

function selectPhoto(photo: Photo) {
  SelectedPhotoStore.set(photo);
}

function removePhoto() {
  SelectedPhotoStore.set(null);
}

export { selectPhoto, removePhoto };
export default SelectedPhotoStore;
