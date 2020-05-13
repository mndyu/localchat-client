import React, { useState, useEffect } from 'react';
import styles from './ImageImport.scss'
import Compressor from 'compressorjs';


type Props = {
    DropEvent: FileList;
};
// image upload compressor -> Save 50% over Size
//https://fengyuanchen.github.io/compressorjs/
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

        new Compressor(images, {
            quality: 0.6,

            success(result: any) {
                console.log(result)
            },
            error(error: any) {
                console.log(error)
            }
        })
    }

    return (
        <div className={styles.container}>
            <div>
                group create form
            </div>
            <div>
                image body;
                <ul className={styles.previewContainer} >
                    {images.map((el: any, idx: number) => {
                        return <li key={idx}>
                            <img className={styles.imagecont}  src={el}/>            
                        </li>
                    })}
                </ul>
            </div>
            <div>
                <input type="button" value="upload" onClick={Upload} />
            </div>
        </div>
    );
  }
  
export default App;