import { useContext, useState } from "react";
import axios from "axios";
import './FbFilePicker.css'
import {  storage } from "../../../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


export default function FbFilePicker() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (file) {
     

      const date = new Date().getTime();
      const storageRef = ref(storage, `${"owner" + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            if(downloadURL)
            {
             console.log(downloadURL)
            }  

          } catch (err) {
            console.log(err);
           
            
          }
        });
      });
    }
    
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
    
        </div>
       
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
  
}
