import styles from './Photo.module.scss';


export const Photo = (props) => {
	return <img className={styles.photo} src={props.url} />;
};
