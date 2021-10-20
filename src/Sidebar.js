import React, { useState, useEffect } from 'react';
import {Avatar,IconButton} from "@material-ui/core";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Sidebar.css";
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { Photo } from '@mui/icons-material';
import {useStateValue} from "./StateProvider";



function Sidebar() {
   
const[rooms, setRooms]=useState([]);
const [{user},dispatch] = useStateValue();

console.log(user.photoURL);

useEffect(()=>{
const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>(
    setRooms(snapshot.docs.map(doc =>
        ({
            id:doc.id,
            data:doc.data(),

        }))
        )
))
return ()=>{unsubscribe();}},[]);

        return (
            <div className="sidebar">
                {/* <h1> Sidebar</h1> */}

                <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                {/* <AccountCircleIcon/> */}
                <div className="header_right">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
               
                </div>
                </div>

                <div className="sidebar_search">
                <div  className="sidebar_search_container">
                <SearchIcon/>
                <input placeholder="Search or start new chat" type="text"></input>
                </div>
                </div>

                <div className="sidebar_chats">
                {/* <h1>Add chat here</h1> */}
                <SidebarChat addNewChat/>
               {rooms.map(room=>(
                   <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
               ))}
                </div>


            </div>
        );
    }

export default Sidebar;