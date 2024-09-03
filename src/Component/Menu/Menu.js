// // src/components/Menu.js
// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// const menuItems = [
//   { key: 'home', image: './images/h1.jpeg' },
//   { key: 'movies', image: './images/h2.jpeg' },
//   { key: 'tvShows', image: './images/h3.jpeg' },
//   { key: 'sports', image: './images/h4.jpeg' },
//   { key: 'live', image: './images/h5.jpeg' },
// ];

// function Menu({ labels }) {
//   return (
//     <Grid container spacing={2} >
//       {menuItems.map(item => (
//         <Grid item xs={12} key={item.key}>
//           <Box
//             sx={{
//               position: 'relative',
//               backgroundImage: `url(${item.image})`,
//               backgroundSize: 'cover',
//               height: 300,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
              
//             }}
//           >
//             <Box
//               sx={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               }}
//             />
//             <Typography
//               variant="h3"
//               component="div"
//               color="white"
//               sx={{ position: 'relative', zIndex: 1 }}
//             >
//               {labels[item.key]}
//             </Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default Menu;


import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const menuItems = [
  { key: 'home', image: './images/h1.jpeg' },
  { key: 'movies', image: './images/h5.jpeg' },
  { key: 'tvShows', image: './images/h3.jpeg' },
  { key: 'sports', image: './images/h4.jpeg' },
  { key: 'live', image: './images/h2.jpeg' },
];

function Menu({ labels }) {
  return (
    <Grid container spacing={2}>
      {menuItems.map((item) => (
        <Grid item xs={12} key={item.key}>
          <Box
            sx={{
              border: '2px solid #1976d2', // Blue border color
              borderRadius: '5px', // Border radius of 5px
              padding: '8px', // Padding between the border and background image
            }}
          >
            <Box
              sx={{
                position: 'relative',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                height: 300,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px', // Ensure the image inside is also rounded
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
              />
              <Typography
                variant="h3"
                component="div"
                color="white"
                sx={{ position: 'relative', zIndex: 1 }}
              >
                {labels[item.key]}
              </Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Menu;
