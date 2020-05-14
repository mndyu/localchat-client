import React, { useState, useEffect } from 'react';
import styles from './ImageImport.scss'
import Compressor from 'compressorjs';
import {MdClose} from 'react-icons/md'

type Props = {
    DropEvent: FileList;
};
// image upload compressor -> Save 50% over Size
//https://fengyuanchen.github.io/compressorjs/
function App({DropEvent} : Props) {
    const [images, setImages] = useState([])

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let image: React.ElementRef<"div">;

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

    const cancelImage = (e: any, idx: number) => {
        images.splice(idx,1)
        setImages(images)
        forceUpdate()

    }

    const reverseScroll = (e: React.WheelEvent) => {
        if (e.deltaX === 0) {
            if (e.deltaY > 0) {
                image.scrollBy({left: 30})
            } else {
                image.scrollBy({left: -30})
            }
        }
    }


    return (
        <div className={styles.container}>
            <div>
                Upload Images
            </div>
            <div>
            {`image files:${images.length}`}
            </div>
            <div>
                <div ref={el => image = el} className={styles.previewContainer} onWheel={reverseScroll}>
                    {images.map((el: any, idx: number) => {
                        return <div className={styles.imagecontainer} key={idx}>
                            <div className={styles.close} onClick={e => cancelImage(e,idx)} ><MdClose /></div>
                            <img className={styles.imagecont}  src={el}/>            
                        </div>
                    })}
                </div>
            </div>
            <div className={styles.upload}>
                <input type="button" value="upload" onClick={Upload} />
            </div>
        </div>
    );
  }
  
export default App;