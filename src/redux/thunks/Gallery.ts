import { addImageAction, getImagesAction, deleteImageAction, setImageError, privateImageAction } from '../actions/galleryActions';
import { setLoading } from "../actions/authActions";
import { AppThunk } from '../../types/types';
import { GalleryImage } from '../../types/gallery';
import { User } from '../../types/user';
import services from "../../services";

const { storage, firestore } = services

export const addOneImage = (file: File, user: User): AppThunk => {
  return async dispatch => {
    dispatch(setLoading(true));
    const filePath = `images/${user.id}/${new Date().getTime()}-${file.name}`;
    const storageRef = storage.ref(filePath);
    const imageRef = await storageRef.put(file);
    const downloadUrl = await imageRef.ref.getDownloadURL();

    try {
      const data: GalleryImage = {
        imageUrl: downloadUrl,
        fileName: file.name,
        filePath: filePath,
        uploaderName: user.firstName,
        uploaderId: user.id,
        createdAt: new Date().getTime(),
        privacity: false
      }
      const ref = await firestore.collection('gallery').add(data);
      data.id = ref.id;
      dispatch(addImageAction(data));
    } catch (err) {
      dispatch(setImageError(err.message));
    }
    dispatch(setLoading(false));
  }
}

export const addImages = (files: FileList, user: User, onProgress: (num: number, file: File) => void): AppThunk => {
  return async dispatch => {
    Array.from(files).forEach(async (file: File) => {
      const filePath = `images/${user.id}/${new Date().getTime()}-${file.name}`;
      const storageRef = storage.ref(filePath);
      const uploadTask = storageRef.put(file);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress(progress, file);
      }, (err) => {
        dispatch(setImageError(err.message));
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then(async (downloadUrl) => {
          try {
            const data: GalleryImage = {
              imageUrl: downloadUrl,
              fileName: file.name,
              filePath: filePath,
              uploaderName: user.firstName,
              uploaderId: user.id,
              createdAt: new Date().getTime(),
              privacity: false
            }
            const ref = await firestore.collection('gallery').add(data);
            data.id = ref.id;
            dispatch(addImageAction(data));
          } catch (err) {
            dispatch(setImageError(err.message));
          }
        }).catch(err => dispatch(setImageError(err.message)));
      });
    });
  }
}

export const deleteImage = (images: GalleryImage[], image: GalleryImage, onSuccess: () => void): AppThunk => {
  return async dispatch => {
    try {
      const imageRef = storage.ref().child(image.filePath);
      await imageRef.delete();
      await firestore.collection('gallery').doc(image.id).delete();

      const { id } = image
      let allImages: GalleryImage[] = []
      allImages = images.filter(i => i.id !== id)

      dispatch(deleteImageAction(allImages));
      onSuccess();
    } catch (err) {
      dispatch(setImageError(err.message));
    }
  }
}

export const privateImage = (images: GalleryImage[], image: GalleryImage): AppThunk => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      const { id, privacity } = image
      
      await firestore.collection('/gallery').doc(id).update({ privacity: !privacity })
      
      let allImages: GalleryImage[] = []
      allImages = images.map((imgs) => {
        if (imgs.id === id) {
          imgs.privacity = !privacity;
        }
        return imgs;
      });

      dispatch(privateImageAction(allImages));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setImageError(err.message));
    }
  }
}

export const getImages = (): AppThunk => {
  return async dispatch => {
    try {
      const docs = await firestore.collection('gallery').get();
      const arr: GalleryImage[] = [];
      docs.forEach(doc => {
        const { createdAt, fileName, filePath, imageUrl, uploaderName, uploaderId, privacity } = doc.data();
        arr.push({ createdAt, fileName, filePath, imageUrl, uploaderName, uploaderId, id: doc.id, privacity });
      });
      const imagesSorted = arr.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
      dispatch(getImagesAction(imagesSorted));
    } catch (err) {
      dispatch(setImageError(err.message));
    }
  }
}

// export const getUserImages = (userId: string | undefined): AppThunk => {
//   return async dispatch => {
//     try {
//       const docs = await firestore.collection('gallery')
//         .where("uploaderId", "==", userId)
//         .get();

//       const images: GalleryImage[] = [];
//       docs.forEach(doc => {
//         const { createdAt, fileName, filePath, imageUrl, uploaderName, uploaderId, privacity } = doc.data();
//         images.push({ createdAt, fileName, filePath, imageUrl, uploaderName, uploaderId, id: doc.id, privacity });
//       });
//       const imagesSorted = images.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : 1)
//       dispatch(getUserImagesAction(imagesSorted));
//     } catch (err) {
//       dispatch(setImageError(err.message));
//     }
//   }
// }