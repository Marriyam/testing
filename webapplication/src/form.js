
import './_Symtoms.scss';

import {TextField} from '@material-ui/core';
import Box from '@mui/material/Box';
import * as React from 'react';


const AddSymptoms= ( ) => {
  
//     const Symptoms = [
//       {
//         value: 'Nausea',
//         label: 'Nausea',
//       },
//       {
//         value: 'Rash',
//         label: 'Rash',
//       },
//       {
//         value: 'Body Ache',
//         label: 'Body Ache',
//       },
//       {
//         value: 'Pain behind eye',
//         label: 'Pain behind eye',
//       },
//     ];
      
//         const [symptom1, setSymptom1] = React.useState(String);
//         const [symptom2, setSymptom2] = React.useState(String);
//         const [symptom3, setSymptom3] = React.useState(String);
//         const [symptom4, setSymptom4] = React.useState(String);
//         const [symptom5, setSymptom5] = React.useState(String);
//         const [symptom6, setSymptom6] = React.useState(String);
    
//         const navigate= useNavigate();
    
//         const handleSymptom1Value = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             setSymptom1(event.target.value);
//           };
//           const handleSymptom2Value = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             setSymptom2(event.target.value);
//           };
//           const handleSymptom3Value = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             setSymptom3(event.target.value);
//           };
//           const handleSymptom4Value = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             setSymptom4(event.target.value);
//           };
//           const handleSymptom5Value = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             setSymptom5(event.target.value);
//           };
//           const handleSymptom6Value = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//             setSymptom6(event.target.value);
//           };
          
//           const navigatetoDiagnosis=()=>{
//             navigate('/Diagnosis');
//           }
    
    
//         const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//           event.preventDefault();
    
//           const res = await fetch('http://localhost:8000/add_patient_appointment', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
              
//             }),
//           });
//         }
         
        return ( 
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
   
       </Box>
  )
    }
    
    export default AddSymptoms