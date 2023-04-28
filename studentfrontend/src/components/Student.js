import * as React from 'react';
import Axios from "axios";
import { useState } from 'react';
import { useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Student() {
   
    const BASE_URL = "http://127.0.0.1:8080/student";
    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const [students, setStudents]=useState([])
    const sendDetail =() => {
        Axios.post(BASE_URL + `/add`,
        {
            name:name,
            address:address
        }).then(
       (response)=>{
       console.log(response.status, response.data.token)
    }
    );
};

     useEffect(() => {
        Axios.get(BASE_URL + `/getAll`).then(
       (response)=>{
       setStudents(response.data)
       console.log(students)
    
       }
        )

 }, []);
    const card = (
  <React.Fragment>
    <CardContent>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography variant="h4" sx={{ color: '#cc00ff' }}  gutterBottom>
       Add a Student
      </Typography>
        <TextField
          value={name}
          onChange={(e)=>setName(e.target.value)}
          label="Student Name"
        
        />
    </div>
      <div>
        <TextField
           value={address}
           onChange={(e)=>setAddress(e.target.value)}
           label="Address"   
        />    
      </div>
      <div> <Button variant="contained" color="secondary" onClick={()=>sendDetail()}>Submit</Button></div>
    </Box>
    </CardContent>
   
  </React.Fragment>
);


const handleClick=(e)=>{
   
}
  return (
    <Box sx={{ width:500,m: 8 ,mx:50 }}>
      <Card variant="outlined">{card}</Card>
       
  {students.map(student=>(
     <Card variant="outlined" style={{padding:"15px", margin:"10px"}} key={student.id}>
      ID: {student.id} {' '}
      Name: {student.name} {' '}
      Address : {student.address}
     
    
     </Card>
 ))
}
   </Box>
   
  );
}