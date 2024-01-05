import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PortfolioBlock(props) {
   const { image, live, source, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
      // <Card>
      //    <CardMedia
      //       component={'img'}
      //       image={image}
      //       title={title}
      //    />
      //    <CardContent>
      //       <Typography gutterBottom variant="h5" component="div">
      //          {title}
      //       </Typography>
      //       <Typography variant="body2" color="text.secondary">
      //          Lizards are a widespread group of squamate reptiles, with over 6,000
      //          species, ranging across all continents except Antarctica
      //       </Typography>
      //    </CardContent>
      //    <CardActions>
      //       <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
      //             <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
      //          </Box>
      //          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
      //             <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
      //          </Box>
      //    </CardActions>
      // </Card>
   );
}

export default PortfolioBlock;