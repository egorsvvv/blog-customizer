import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowButtonProps = {
	setIsOpenArrow: (state: boolean) => void;
	isOpenArrow: boolean;
};

export const ArrowButton = ({
	setIsOpenArrow,
	isOpenArrow,
}: ArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */

		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			onClick={() => setIsOpenArrow(!isOpenArrow)}
			className={clsx(styles.container, isOpenArrow && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpenArrow && styles.arrow_open)}
			/>
		</div>
	);
};
