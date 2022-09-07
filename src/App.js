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
import { CardActionArea } from '@mui/material';

import * as React from 'react';
import './App.css';

function App() {
	return (
		<Box sx={{ flexGrow: 1}}>
			<AppBar position="fixed">
				<Toolbar>
          			<IconButton
            			size="large"
            			edge="start"
            			color="inherit"
            			aria-label="menu"
            			sx={{ mr: 2 }}
          			>
            			<MenuIcon />
          			</IconButton>
          			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          			</Typography>
          			<Button color="inherit">Button</Button>
        		</Toolbar>
			</AppBar>
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
	)
}

export default App
