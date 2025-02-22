import AbstractImage from "./AbstractImagen";

export default class NullImage extends AbstractImage {
  constructor() {
    super({ name: "No Image",
         path: "iamgenPorDefecto.png " }); // no se que colocarle para el null
  }

  public isNull(): boolean {
    return true;
  }
}
