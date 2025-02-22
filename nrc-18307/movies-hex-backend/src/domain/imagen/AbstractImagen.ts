export default abstract class AbstractImage {
    protected name: string;
    protected path: string;
  
    constructor(imageInterface: ImageInterface) {
      this.name = imageInterface.name;
      this.path = imageInterface.path;
    }
  
    public abstract isNull(): boolean;
  
  
  }
  
  interface ImageInterface {
    name: string;
    path: string;
  }
  
  export { ImageInterface };
  