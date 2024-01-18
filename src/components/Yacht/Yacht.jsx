import styles from './Yacht.module.scss';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const Yacht = (props) => {
	return <Card sx={{ width: 330, height: 300 }}>
	<CardMedia
	  sx={{ height: 140 }}
	  image={ props.url }
	  title={ props.title }
	/>
	<CardContent>
		<Typography gutterBottom variant="h5" type={"left"} component="div">
			{ props.title.split(" ")[0] }
		</Typography>
		<Typography variant="body2" type={"left"} color="text.secondary">
			{ props.title }
		</Typography>
	</CardContent>
	<CardActions>
	  <Button size="small">Share</Button>
	  <Button size="small">Learn More</Button>
	</CardActions>
  </Card>;
};
