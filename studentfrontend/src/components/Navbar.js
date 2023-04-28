import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
          A simple  Spring Boot app with Reactjs to demonstrate REST API
          </Typography>
      
      </AppBar>
    </Box>
  );
}
//  <Box sx={{ width:500,m: 8 ,mx:50 }}>
  
//      {students.map(student=>(
//      <Card variant="outlined" key={student.id}>
//      ID: {student.id}

//        </Card>
//   ))
//  }
//      </Box> 