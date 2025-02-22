import AbstractImage, { ImageInterface } from "./AbstractImagen";

export default class Image extends AbstractImage {
  constructor(imageInterface: ImageInterface) {
    super(imageInterface);
  }

  public isNull(): boolean {
    return false;
  }
}
