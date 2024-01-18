import styles from './LoadingProgress.module.scss';
import CircularProgress from '@mui/material/CircularProgress';

export const LoadingProgress = (props) => {
	return <div className={ styles.loading }><CircularProgress /></div>;
};
