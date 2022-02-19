import {FileInterface} from "../../interfaces";
import {useEffect, useRef, useState} from "react";
import './styles/FileInputStyle.scss';
import placeholder from './assets/placeholder-image.png';

const FileInput = ({id, ...props}: FileInterface) => {
  const [image, setImage] = useState<string>(placeholder);
  const inputRef = useRef<HTMLInputElement>(null);
  const dimensionsXY = 200;

  useEffect(() => {
    const updatedImage = props?.value as string;
    if (updatedImage) {
      setImage(updatedImage);
    } else {
      setImage(placeholder);
    }
  }, [props?.value]);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className="d-flex flex-column align-items-center">
      {image &&
        <div className={`d-flex flex-column align-items-center ${!props.disabled && 'cursor-pointer'}`}
             onClick={() => !props.disabled && inputRef && inputRef?.current?.click()}>
          {image && <img style={{minWidth: dimensionsXY}} height={dimensionsXY}
                         src={image} alt={'missing'}/>}
          {!props.disabled ? <small className="text-muted">Choose to Edit</small>
            : <small className="text-danger">cannot modify current image</small>}
        </div>}
      <input className="d-none"
             ref={inputRef}
             onChange={onImageChange}
             type={props.type}
             disabled={props.disabled}
             id={id}/>
    </div>
  )
}
export default FileInput;
