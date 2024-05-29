import * as React from 'react'
// import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
// import { Tabs, Tab } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


// const theme = createTheme({
//     components:{
//       MuiButtonBase:{
//         styleOverrides:{
//         root:{
//           '&.MuiTab-root.Mui-selected': {
//               color: '#fff',
//               backgroundColor:'#fff3',
//               borderRadius:'10px',
//               padding:'0'
//             },
//             '&.MuiTab-root': {
//               minHeight:'24px'
//             },
//           }
//         }
//         }
//       }

//   });

// const icons=[
//     {iconName : 'All' , path : '../', title : 'All'},
//     {iconName : 'Games' , path : '../category/games', title : 'Games'},
//     {iconName : 'Funny' , path : '../category/funny', title : 'Funny'},
//     {iconName : 'Music', path : '../category/music', title : 'Music'},
//     {iconName :  'Movies', path : '../category/movies', title : 'Movies'},
//     {iconName :  'Animals', path : '../category/animals', title : 'Animals'},
//     {iconName :  'Nature', path : '../category/nature', title : 'Nature'}
// ]
const tabs = [
  {
    "mainTab": "Countries",
    "subMenuTabs": [
      { "iconName": "USA", "path": "../category/USA", "title": "USA" },
      { "iconName": "Canada", "path": "../category/Canada", "title": "Canada" },
      { "iconName": "UK", "path": "../category/UK", "title": "UK" },
      { "iconName": "Australia", "path": "../category/Australia", "title": "Australia" },
      { "iconName": "India", "path": "../category/India", "title": "India" },
      { "iconName": "Japan", "path": "../category/Japan", "title": "Japan" }
    ]
  },
  {
    "mainTab": "Genre",
    "subMenuTabs": [
      { "iconName": "Action", "path": "../category/Action", "title": "Action" },
      { "iconName": "Comedy", "path": "../category/Comedy", "title": "Comedy" },
      { "iconName": "Drama", "path": "../category/Drama", "title": "Drama" },
      { "iconName": "Horror", "path": "../category/Horror", "title": "Horror" },
      { "iconName": "Sci-Fi", "path": "../category/Sci-Fi", "title": "Sci-Fi" },
      { "iconName": "Documentary", "path": "../category/Documentary", "title": "Documentary" }
    ]
  },
  {
    "mainTab": "Creators",
    "subMenuTabs": [
      { "iconName": "Independent", "path": "../category/Independent", "title": "Independent" },
      { "iconName": "Studio", "path": "../category/Studio", "title": "Studio" },
      { "iconName": "Vloggers", "path": "../category/Vloggers", "title": "Vloggers" },
      { "iconName": "Animators", "path": "../category/Animators", "title": "Animators" },
      { "iconName": "Educators", "path": "../category/Educators", "title": "Educators" }
    ]
  },
  {
    "mainTab": "Video Type",
    "subMenuTabs": [
      { "iconName": "Short Film", "path": "../category/Short-Film", "title": "Short Film" },
      { "iconName": "Web Series", "path": "../category/Web-Series", "title": "Web Series" },
      { "iconName": "Tutorial", "path": "../category/Tutorial", "title": "Tutorial" },
      { "iconName": "Review", "path": "../category/Review", "title": "Review" },
      { "iconName": "Live Stream", "path": "../category/Live-Stream", "title": "Live Stream" }
    ]
  },
  {
    "mainTab": "Age Group",
    "subMenuTabs": [
      { "iconName": "Kids", "path": "../category/Kids", "title": "Kids" },
      { "iconName": "Teens", "path": "../category/Teens", "title": "Teens" },
      { "iconName": "Adults", "path": "../category/Adults", "title": "Adults" },
      { "iconName": "Family", "path": "../category/Family", "title": "Family" }
    ]
  },
  {
    "mainTab": "Production Quality",
    "subMenuTabs": [
      { "iconName": "4K", "path": "../category/4K", "title": "4K" },
      { "iconName": "HD", "path": "../category/HD", "title": "HD" },
      { "iconName": "SD", "path": "../category/SD", "title": "SD" },
      { "iconName": "Mobile", "path": "../category/Mobile", "title": "Mobile" }
    ]
  },
];

// function Category() {
//   const [value, setValue] = React.useState(0);
//   // value = icons.findIndex((tab) => location.pathname === tab.path);
//   const handleChange = (_,newValue) =>{
//     setValue(newValue);
//   }
//   return (

//         <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}}>
//           <ThemeProvider theme={theme}>
//         <Box sx={{ maxWidth: { xs: 320, sm: 480,md:'100%' }}}>

//             <Tabs
//               value={value}
//               onChange={handleChange}
//               variant="scrollable"
//               scrollButtons="auto"
//               indicatorColor='none'
//               sx={{ backgroundColor: 'transparent'}}
//             >
//               {icons.map((icon, index)=> {
//                 return <Tab key={index}
//                             label={icon.iconName}
//                             component={Link}
//                             to={icon.path}
//                             title={icon.title} 
//                             sx={{color:'#fff',padding:'12px !important'}}/>
//               })}
//             </Tabs>

//         </Box>
//         </ThemeProvider>
//         </Box>

//   )
// }

function Category(props) {
  const [selectedTab, setSelectedTab] = React.useState(null);

  const handleMainTabEnter = (index) => {
    setSelectedTab(index);
  };

  const handleMainTabLeave = () => {
    setSelectedTab(null);
  };

  return (
    <Box style={{ marginLeft: "20px" }} sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, gap: '20px' }}>
      {tabs.map((tab, index) => (
        <>
          <Typography key={index} onMouseEnter={() => handleMainTabEnter(index)}
            onMouseLeave={() => handleMainTabLeave()} style={{ cursor: 'pointer', display: 'flex', position: 'relative' }}>
            {tab.mainTab}<KeyboardArrowDownIcon />
            {selectedTab === index && (
              <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: { md: '24px', xs: '24px' }, left: '20px', zIndex: '1', color: { md: '#000000de', xs: '#fff' }, background: { md: '#fff', xs: '#000000de' }, padding: '8px 0', borderRadius: '4px' }}>
                {tab.subMenuTabs.map((subTab) => (
                  <Link key={subTab.iconName} to={subTab.path} style={{ padding: '6px 30px 6px 16px', textDecoration: 'none' }} onClick={props.handleCloseNavMenu}>
                    <Typography sx={{ color: { md: '#000000de', xs: '#fff' } }}>
                      {subTab.iconName}
                    </Typography>
                  </Link>

                ))}
              </Box>
            )}
          </Typography>

        </>
      ))}
    </Box>
  );
}


export default Category
