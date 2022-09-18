import React, { useState } from 'react'
import addAvatar from "../images/addAvatar.png";
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth,storage,db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate,Link } from 'react-router-dom';


const Register = () => {

  const [err,setErr]= useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName=e.target[0].value;
    const email=e.target[1].value;
    const password=e.target[2].value;
    // var x=e.target[3].files.size();
    const file=e.target[3].files[0];

   try{
     const res= await createUserWithEmailAndPassword(auth, email, password);

    //  console.log(res);
     setErr(false);

const storageRef = ref(storage, displayName);//this is going to be the name of the file in our firebase storage, we use username as the name of files

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on('state_changed', 
  // (error) => {
  //   setErr(true);
  //   console.log("cant upload bruh");
  // }, 
  () => {
    setErr(false);
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      console.log(downloadURL);
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      });
      await setDoc(doc(db,"users", res.user.uid),{
        uid:res.user.uid,
        displayName,
        email,
        photoURL:downloadURL,
      });

      await setDoc(doc(db,"userChats", res.user.uid),{});
      navigate("/");
    });
  }
);
   }catch(err){
      // console.log("bruhhhhh");
     setErr(true);
   }
  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Convey</span>
            <span className="title">Sign up</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file"/>
                <label htmlFor='file'>
                  <img src={addAvatar} alt="Add your Profile Pic" />
                  <span>Add your profile pic</span>
                </label>
                <button>Sign Up</button>
                {err && <span className='errorClass'>Something went wrong, Try again</span>}
            </form>
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
    </div>
  )
} 

export default Register;