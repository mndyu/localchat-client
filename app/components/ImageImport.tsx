import React, { useState, useEffect } from 'react';
import styles from './ImageImport.scss'
  
type Props = {
    DropEvent: FileList;
};

function App({DropEvent} : Props) {
    const [images, setImages] = useState([])

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let body = null;

    const setPreview = (files: FileList) => {
        console.log(files)
        let d = []

        for(let idx = 0; idx < files.length; idx++) {
            let dump = files.item(idx)

            let reader = new FileReader()  
            reader.addEventListener('load',function() {
                d.push(reader.result)
            },false)

            reader.onloadend = function(){
                setImages(d)
                forceUpdate()
            }
            reader.readAsDataURL(dump)
        }
    }

    useEffect(() => {
        setPreview(DropEvent)
    },[]);

    const Upload = (e :any) =>{
        console.log("update")
        console.log(images)
    }

    return (
        <div className={styles.container}>
            <div>
                group create form
            </div>
            <div>
                image body;
                {images.map((el: any, idx: number) => {
                    return <img className={styles.imagecont} key={idx}  src={el}/>            
                })}
            </div>
            <div>
                <input type="button" value="upload" onClick={Upload} />
            </div>
        </div>
    );
  }
  
export default App;