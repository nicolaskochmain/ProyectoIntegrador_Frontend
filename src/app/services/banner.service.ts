import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  list,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  url: string = '';
  constructor(private storage: Storage) {}

  public uploadBanner($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `banner/${name}`);
    uploadBytes(imgRef, file)
      .then((response) => {
        this.getImages();
      })
      .catch((error) => console.log(error));
  }

  getImages() {
    const imagesRef = ref(this.storage, 'banner');
    list(imagesRef)
      .then(async (response) => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log(`La URL del banner es: ${this.url}`);
        }
      })
      .catch((error) => console.log(error));
  }
}
