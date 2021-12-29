import { Photo } from "../types/Photo";
import { storage } from "../libs/firebase";
import {
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

//biblioteca para gerar hash aleatório
import { v4 as createId } from "uuid";

//função pegar as fotos
export const getAll = async () => {
  let list: Photo[] = [];

  //referência dentro da storage na pasta images
  const imagesFolder = ref(storage, "images");

  //buscando tudo que esteja dentro da imagesFolder que está dentro da storage na pasta images
  //ler arquivos da pasta
  const photoList = await listAll(imagesFolder);

  for (let i in photoList.items) {
    //por padrão não é gerado a URL, utilizando código abaixo para gerar URL
    let photoUrl = await getDownloadURL(photoList.items[i]);

    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }

  return list;
};

export const insert = async (file: File) => {
  if (["image/jpeg", "image/jpg", "image/png"].includes(file.type)) {
    //gerando hash aleatório
    let randomName = createId();
    //criando uma nova referência
    let newFile = ref(storage, `images/${randomName}`);

    //upload do arquivo
    let upload = await uploadBytes(newFile, file);

    //obtendo link da foto referenciada
    let fotoUrl = await getDownloadURL(upload.ref);
    return { name: upload.ref.name, url: fotoUrl } as Photo;
  } else {
    return new Error("Tipo de arquivo não permitido");
  }
};

export const deletePhoto = async (name: string) => {
  let photoRef = ref(storage, `images/${name}`);
  await deleteObject(photoRef);
};
