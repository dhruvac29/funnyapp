import React, { useState, useEffect } from "react";
import { storage, db } from "./firebase";
import "./App.css";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {Input,Button,Image} from 'antd';

const Photo =()=> {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [cameraImage, setCameraImage] = useState(null);
    const [file, setFile] = useState("");


    const captureImage = () => {
        const capture = async () => {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: true
            });
            const video = document.createElement('video');
            video.srcObject = mediaStream;
            await video.play();

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);

            setCameraImage(canvas.toDataURL());
        };
        capture();
    };
    const [percent, setPercent] = useState(0);

    const uploadFile = () => {
       if (!image) {
           alert("Please upload an image first!");
       }

       const storageRef = ref(storage, `/files/${image.name}`);

       // progress can be paused and resumed. It also exposes progress updates.
       // Receives the storage reference and the file to upload.
       const uploadTask = uploadBytesResumable(storageRef, image);

       uploadTask.on(
           "state_changed",
           (snapshot) => {
               const percent = Math.round(
                   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
               );

               // update progress
               setPercent(percent);
           },
           (err) => console.log(err),
           () => {
               // download url
               getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                   setUrl(url);
               });
           }
       );
        // if (image ) {
        //     const uploadTask = storage.ref(`images/${image ? image.name : "cameraImage"}`).put(image );
        //     uploadTask.on(
        //         "state_changed",
        //         (snapshot) => {
        //             // progress function ...
        //             const progress = Math.round(
        //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //             );
        //             setProgress(progress);
        //         },
        //         (error) => {
        //             // Error function ...
        //             console.log(error);
        //         },
        //         () => {
        //             // complete function ...
        //             storage
        //                 .ref("images")
        //                 .child(image ? image.name : "cameraImage")
        //                 .getDownloadURL()
        //                 .then((url) => {
        //                     setUrl(url);
        //                     db.collection("images").add({
        //                         url: url,
        //                         timestamp: Date.now(),
        //                     });
        //                 });
        //         }
        //     );
        // }
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };


    const captureFile = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const file = event.target.files[0];
console.log(file);
setImage(file)
    };

    const convertToBuffer = async (reader) => {
        // Convert file to buffer so that it can be uploaded to IPFS
        const imgBuffer =   Buffer(reader.result);
        setImage(imgBuffer);
        console.log(imgBuffer);

    }


    return (
        <div >
            <Button onClick={captureImage}>Use Camera</Button>
            <br />
            <Input type="file" onChange={captureFile} />
            <Button onClick={uploadFile}>Upload</Button>
            <br />
            <progress value={progress} max="100" />
            <br />
            <Image src={url || "http://via.placeholder.com/500x500"} alt="Uploaded Images" height="500" width="500" />
        </div>
    );
}

export default Photo;

