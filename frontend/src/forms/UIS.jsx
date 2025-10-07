import React from 'react'
import Typography from "@mui/material/Typography"
import Box from '@mui/system/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
// import Grid from '@material-ui/core/Grid'
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


// import { useEffect } from 'react'
// import axios from 'axios'
import unifiedLogo from '../assets/unifiedLogo.png'

const UIS = () => {

    // useEffect(() => {
    //     axios.get('http://localhost:8081/users')
    //     .then(res => () => {
    //         console.log(res);
    //     })
    //     .catch(error)
    // }, [])
    
  return (

        <Stack>
            <Box sx={{ height: '100vh' }}>
                <Stack alignItems='center' >
                    <Stack sx={{width: 300, marginY:'10px'}}>
                            <img src={unifiedLogo} />
                    </Stack>
                </Stack>
            
                <Stack alignItems='center'>
                    <Typography variant='h6' color='black' sx={{textTransform: 'capitalize', fontWeight: 'bold', letterSpacing: 1}}>UNIFIED INTAKE SHEET</Typography>
                    <Typography variant='body1' sx={{textTransform: 'uppercase', fontWeight: 'bold'}}>Ospital ng Parañaque</Typography>
                </Stack>

                <Stack direction="row" padding='3px' sx={{borderBottom: 1, marginTop:'12px', justifyContent: 'space-between', paddingX: '15px'}} >
                        <Stack direction='row'>
                            <Typography fontSize='11px'>PhilHealth Identification No.: </Typography>
                            <Typography fontSize='11px' fontWeight='bolder'>0123456789123</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Case No.: </Typography>
                            <Typography fontSize='11px' fontWeight='bolder'>0123456789123</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Ward: </Typography>
                            <Typography fontSize='11px' fontWeight='bolder'>0123456789123</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Hospital No.: </Typography>
                            <Typography fontSize='11px' fontWeight='bolder'>0123456789123</Typography>
                        </Stack>    
                </Stack>
                <Stack direction="row" sx={{justifyContent: 'space-between', paddingX: '15px'}} >
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Date of Intake/Interview (Petsa ng Panayam):</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px' fontWeight='bolder' sx={{textDecoration: 'underline'}}>4/12/2024</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Time of Interview (Oras ng Panayam): </Typography>
                        </Stack>     
                        <Stack direction='row'>
                            <Typography fontSize='11px' fontWeight='bolder' sx={{textDecoration: 'underline'}}>11:41:00 AM</Typography>
                        </Stack>     
                </Stack>

                <Stack direction="row" sx={{justifyContent: 'space-between', paddingX: '15px'}} >
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Name of Informant (Pangalan ng Impormante): </Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px' fontWeight='bolder' sx={{textDecoration: 'underline'}}>JUANITO PEDRO</Typography>
                        </Stack>
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Relation to Patient (Relasyon sa Pasyente): </Typography>
                        </Stack>     
                        <Stack direction='row'>
                            <Typography fontSize='11px' fontWeight='bolder' sx={{textDecoration: 'underline'}}>FATHER</Typography>
                        </Stack>     
                </Stack>

                <Stack direction="row" sx={{justifyContent: 'space-between', paddingX: '15px'}} >
                        <Stack direction='row'>
                            <Typography fontSize='11px' fontWeight='bolder' sx={{textDecoration: 'underline'}}>440 QUIRINO AVENUE, LA HUERTA, PARAÑAQUE CITY</Typography>
                        </Stack>   
                        <Stack direction='row'>
                            <Typography fontSize='11px' fontWeight='bolder' sx={{textDecoration: 'underline'}}>0912-345-67891</Typography>
                        </Stack>   
                </Stack>

                <Stack direction="row" sx={{justifyContent: 'space-between', paddingX: '15px'}} >
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Address (Tirahan)</Typography>
                        </Stack>   
                        <Stack direction='row'>
                            <Typography fontSize='11px'>Contact Number (Telepono Bilang)</Typography>
                        </Stack>   
                </Stack>
                <hr/>

                <Grid>
                    <Typography fontSize='11px' fontWeight='bold' >I. IDENTIFYING INFORMATION (Impormasyon ng Pagkakakilanlan)</Typography>
                </Grid>

                <Grid container>
                    <Grid item xs={2} md={2}>
                        <Typography fontSize='11px' fontWeight='bolder'>Client&apos;s Name: </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{borderBottom:1}}>
                        <Typography fontSize='11px' fontWeight='bolder'>PEDRO</Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{borderBottom:1}}>
                        <Typography fontSize='11px' fontWeight='bolder'>JUANA</Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{borderBottom:1}}>
                        <Typography fontSize='11px' fontWeight='bolder'>MANUEL</Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{borderBottom:1}}>
                        <Typography fontSize='11px' fontWeight='bolder'></Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{borderBottom:1}}>
                        <Typography fontSize='11px' fontWeight='bolder'>MALE</Typography>
                    </Grid>
                </Grid>
                
                <Grid container>
                    <Grid item xs={2} md={2}>
                        <Typography fontSize='10px'>(Pangalan ng Pasyente)</Typography>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Typography fontSize='10px'>Last Name(Apelyido)</Typography>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Typography fontSize='10px'>First Name (Pangalan)</Typography>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Typography fontSize='10px'>Middle Name (Gitnang Pangalan)</Typography>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Typography fontSize='10px'>Ext. (Sr. Jr.)</Typography>
                    </Grid>
                    <Grid item xs={2} md={1}>
                        <Typography fontSize='10px'>Sex(Seks)</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={4} md={4}>
                        <Typography fontSize='10px'>Permanent Address/Permanenteng Tirahan : </Typography>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <Typography fontSize='11px' fontWeight='bold'>440 QUIRINO AVENUE, LA HUERTA, PARAÑAQUE CITY</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={4} md={4}>
                        <Typography fontSize='10px'></Typography>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <Typography fontSize='10px'>Street Number, Barangay, City/Municipality, District, Province, Region</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={4} md={4}>
                        <Typography fontSize='10px'>Present Address/Kasalukuyang Tirahan:</Typography>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <Typography fontSize='11px' fontWeight='bold'>440 QUIRINO AVENUE, LA HUERTA, PARAÑAQUE CITY</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={4} md={4}>
                        <Typography fontSize='10px'></Typography>
                    </Grid>
                    <Grid item xs={8} md={8}>
                        <Typography fontSize='10px'>Street Number, Barangay, City/Municipality, District, Province, Region</Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Single"
                            name="radio-buttons-group"
                        >
                        <Grid item xs={2} md={2}>
                            <FormLabel id="demo-radio-buttons-group-label">Civil Status: </FormLabel>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <FormControlLabel value="Single" control={<Radio />} label="Single" />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <FormControlLabel value="Married" control={<Radio />} label="Married" />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <FormControlLabel value="Widow/Widower" control={<Radio />} label="Widow/Widower" />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <FormControlLabel value="Separated with Common Law Partner" control={<Radio />} label="Separated with Common Law Partner" />
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <FormControlLabel value="Child" control={<Radio />} label="Child" />
                        </Grid>
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Box>
        </Stack>

  )
}

export default UIS