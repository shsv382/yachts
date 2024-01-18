import styles from './Yachts.module.scss';
import { Yacht } from '../Yacht';

export const Yachts = ({ yachts }) => {
	return (
		<ul className={ styles.yachts }>
		{
			yachts.map((yacht) => <Yacht {...yacht} key={"yacht-" + yacht.id} />)
		}
		</ul>
	);
};
