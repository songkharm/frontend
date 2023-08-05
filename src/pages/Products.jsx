import React, { useEffect, useState } from "react";
import { Paper, Box, Typography, Avatar, Container, Button } from "@mui/material";
import ProfileImg from "../assets/anny.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EditUserDialog from "../components/EditDialog";


export default function Profile(props) {
  
  const navigation = useNavigate()
  const [userData, setUserData] = useState({})


  const [open, setopen] = useState(false)
  const [editUserData, setEditUserData] = useState({})

  const handleSave = () => {
    const token = localStorage.getItem('token')
    axios({
        url: 'http://localhost:3000/user',
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        }, 
        data: editUserData
    }).then(res => {
      if(res.data.success){
        setUserData(res.data.data)
        props.setAvatarLetter (res.data.data.username.charAt(0).toUpperCase());
        setopen(false)
    }

        })
    }

  const handleClose = () => {
    setopen(false)
}


  const handleChange = (e) => {
    const { name, value } = e.target
    setEditUserData({
        ...editUserData,
        [name]: value
        })
    }
  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {

    axios({
      url: "http://localhost:3000/user",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.success) {
        props.setAvatarLetter (res.data.data.username.charAt(0).toUpperCase());
        setUserData (res.data.data)
      }
    });
  }

  }, []);

  const handleLogout = () => {
    localStorage. removeItem('token')
    props.setIsLoggedIn(false)
    navigation('/')
  }

  if (props.isLoggedIn) {
  return (
    <Container maxWidth="lg">
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={2}
        height={"90vh"}
        alignItems={"center"}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            flex: 1,
            height: "60vh",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${ProfileImg})`,
            backgroundSize: 'cover',
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ width: "10rem", height: "10rem", fontSize:'4rem' }} 
             
            
            > { props.avatarLetter}

            </Avatar>
            <Box sx={{ marginLeft: "1rem"  }}>
              <Typography variant="h4" align="center">
              {userData.username || 'No value'}
              </Typography>
              <Typography variant="body1" align="center">
                {userData.email || 'No value'}
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: "2rem", flex: 1, height: "60vh", width: "90%" }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            sx={{
              backgroundColor: "#f0f5f9",
              borderTopRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
            }}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Username
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
            {userData.username || 'No value'}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Age
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
            {userData.age || 'No value'}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            sx={{
              backgroundColor: "#f0f5f9",
            }}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Email
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
            {userData.email || 'No value'}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Address
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
            {userData.address || 'No value'}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"6vh"}
            sx={{
              backgroundColor: "#f0f5f9",
              borderBottomRightRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
            p={"1rem"}
          >
            <Typography variant="body1" flex={1}>
              Contact
            </Typography>
            <Typography variant="body1" flex={1}>
              :
            </Typography>
            <Typography variant="body1" flex={1}>
            {userData.contact || 'No value'}
            </Typography>
          </Box>
          <Button variant='contained' sx={{ marginTop: '1rem' }} onClick={()=> setopen(true)}>Edit Profile</Button>
          <Button variant='contained' color="error" sx={{ marginTop: '1rem', marginLeft: '1rem' }} onClick={handleLogout}> Logout </Button>
        
          <EditUserDialog
                    open={open}
                />

<EditUserDialog
                    open={open}
                    handleClose={handleClose}
                    handleChange={handleChange}
                    handleSave={handleSave}

                />
        
        </Paper>
      </Box>
    </Container>
  
  );
          } else {
            <div>
              <h1 style={{color: 'wheat'}}> Please Login </h1>
            </div>
          }
}
