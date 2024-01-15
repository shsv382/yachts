import { FC } from 'react';
import styles from './Photo.module.scss';


export const Photo = (props) => {
	return <img src={props.url} />;
};
