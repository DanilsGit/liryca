import { storage } from "@/firebase/config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export const uploadMediaToFirebase = async (
  file: any,
  folder: string,
  name: string,
) => {
  try {
    const uri = file.uri;

    const blob = await uriToBlob(uri);

    // Crea una referencia al archivo en Firebase
    const storageRef = ref(storage, `${folder}/${name}`);
    // Sube el archivo a Firebase
    await uploadBytes(storageRef, blob);

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error al subir el archivo:", error);
  }
};

export function uriToBlob(uri: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    // If successful -> return with blob
    xhr.onload = function () {
      resolve(xhr.response);
    };

    // reject on error
    xhr.onerror = function () {
      reject(new Error("uriToBlob failed"));
    };

    // Set the response type to 'blob' - this means the server's response
    // will be accessed as a binary object
    xhr.responseType = "blob";

    // Initialize the request. The third argument set to 'true' denotes
    // that the request is asynchronous
    xhr.open("GET", uri, true);

    // Send the request. The 'null' argument means that no body content is given for the request
    xhr.send(null);
  });
}

export async function renameFileFirebase(path, file, folder, name) {
  const oldRef = ref(storage, path);
  // Eliminar el archivo antiguo
  await deleteObject(oldRef);

  const newUrl = await uploadImageToFirebase(file, folder, name);

  return newUrl;
}

export async function deleteFileFirebase(path) {
  const oldRef = ref(storage, path);
  // Eliminar el archivo antiguo
  await deleteObject(oldRef);
}
