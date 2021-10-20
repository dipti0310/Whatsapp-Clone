import React,{useState,useEffect} from 'react';
import "./SidebarChat.css";
import {Avatar,IconButton} from "@material-ui/core";
import db from "./firebase";
import {Link} from "react-router-dom";


function SidebarChat({id, name,addNewChat}) {
    const[seed,setSeed]=useState("");
    const [messages,setMessages]=useState("");

    useEffect(()=>{
    if(id){
        db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=>
        doc.data()))
        );
    }
    },[id])

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    const val=Math.floor(Math.random()*4000);
    setSeed(val);
  });

  const createChat=()=>{
      const roomName=prompt("Please enter name for chat room");
      if(roomName){
          //do some database stuff here
          db.collection("rooms").add({
              name:roomName,
          });
      }
  }




    return !addNewChat?  (
        <Link to={`/rooms/${id}`}>
 <div className='sidebarchat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chatInfo">
            <h2>{name}</h2>
            <p>{messages[0]?.message.substring(0,50)}</p>
            </div>
           
        </div>
        </Link>
       
    ):(
        <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat;