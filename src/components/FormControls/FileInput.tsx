import {ImageFileInterface} from "../../interfaces";
import {useRef} from "react";
import './styles/FileInputStyle.scss';
import placeholder from './assets/placeholder-image.png';

const FileInput = ({id, label, type, disabled, defaultValue, ...props}: ImageFileInterface) => {
  const imageSrc: any = defaultValue ? defaultValue : placeholder;
  const inputRef = useRef<HTMLInputElement>(null);
  const dimensionsXY = 200;
  return (
    <div className="d-flex flex-column align-items-center">
      {imageSrc &&
        <div className="d-flex flex-column align-items-center cursor-pointer"
             onClick={() => inputRef && inputRef?.current?.click()}>
          <img width={dimensionsXY} height={dimensionsXY}
               src={imageSrc} alt="Image"/>
          <small className="text-muted">Choose to Edit</small>

        </div>}
      <input className="form-control d-none"
             ref={inputRef}
             {...{id, type, disabled}}
             {...props}/>
    </div>
  )
}
export default FileInput;
