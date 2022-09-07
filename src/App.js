import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, ThemeProvider, createTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import * as React from 'react';
import './App.css';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#1976d2'
		}
	}
})

function App() {
	return (
		<div>
			<Box sx={{ flexGrow: 1}}>
			<ThemeProvider theme={darkTheme}>
				<AppBar position="fixed">
						<Toolbar>
								<IconButton
									size="large"
									edge="start"
									color="primary"
									aria-label="menu"
									sx={{ mr: 2 }}
								>
									<TabList value={value} onChange={handleChange} aria-label="basic tabs example">
										<Tab label="Item One" {...a11yProps(0)} />
										<Tab label="Item Two" {...a11yProps(1)} />
										<Tab label="Item Three" {...a11yProps(2)} />
									</TabList>
									<MenuIcon />
								</IconButton>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

							</Typography>
							<Button color="inherit">Home Page</Button>
						</Toolbar>
				</AppBar>
			</ThemeProvider>
			</Box>
			<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia
				component="img"
				height="140"
				image="/static/images/cards/contemplative-reptile.jpg"
				alt="green iguana"
				/>
				<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					Lizard
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
				</CardContent>
			</CardActionArea>
			</Card>
		</div>
	)
}

export default App
