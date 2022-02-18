import {ImageFileInterface} from "../../interfaces";
import {useRef} from "react";
import './styles/FileInputStyle.scss';

const FileInput = ({id, label, type, disabled, defaultValue, ...props}: ImageFileInterface) => {
  const imageSrc = typeof defaultValue === 'string' ? defaultValue : undefined;
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="d-flex flex-column ">
      {imageSrc ? <div onClick={() => inputRef && inputRef?.current?.click()}>
        <img className="img-thumbnail rounded-circle cursor-pointer"
             width={200} height={200}
             src={imageSrc} alt="Image"/>

      </div> : <input className="form-control d-none"
                      ref={inputRef}
                      {...{id, type, disabled}}
                      {...props}/>}
    </div>
  )
}
export default FileInput;
