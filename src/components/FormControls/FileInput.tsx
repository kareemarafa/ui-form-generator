import {ImageFileInterface} from "../../interfaces";
import {useRef, useState} from "react";
import './styles/FileInputStyle.scss';
import placeholder from './assets/placeholder-image.png';

const FileInput = ({id, type, disabled, defaultValue}: ImageFileInterface) => {
  const imageSrc: any = defaultValue ? defaultValue : placeholder;
  const [image, setImage] = useState<string>(imageSrc);
  const inputRef = useRef<HTMLInputElement>(null);
  const dimensionsXY = 200;

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      {imageSrc &&
        <div className="d-flex flex-column align-items-center cursor-pointer"
             onClick={() => inputRef && inputRef?.current?.click()}>
          <img style={{minWidth: dimensionsXY}} height={dimensionsXY}
               src={image} alt="Image"/>
          <small className="text-muted">Choose to Edit</small>
        </div>}
      <input className="d-none"
             ref={inputRef}
             onChange={onImageChange}
             {...{id, type, disabled}}/>
    </div>
  )
}
export default FileInput;
