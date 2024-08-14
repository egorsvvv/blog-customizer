import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState, useRef } from 'react';
import clsx from 'clsx';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	fontColors,
	fontFamilyOptions,
	contentWidthArr,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	setArticleStateForm: (state: ArticleStateType) => void;
	defaultArticleState: ArticleStateType;
};

export const ArticleParamsForm = ({
	articleState,
	setArticleStateForm,
	defaultArticleState,
}: ArticleParamsFormProps) => {
	const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
	const [selectedArticleState, setSelectedArticleState] =
		useState(articleState);

	const formRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen: isOpenForm,
		rootRef: formRef,
		onClose: () => setIsOpenForm(false),
		onChange: setIsOpenForm,
	});

	const changePage = (evt: FormEvent) => {
		evt.preventDefault();
		setArticleStateForm(selectedArticleState);
	};

	const resetPage = () => {
		setArticleStateForm(defaultArticleState);
		setSelectedArticleState(defaultArticleState);
	};

	const chooseBackgroundColor = (selectedItem: OptionType) => {
		setSelectedArticleState((prevState) => ({
			...prevState,
			backgroundColor: selectedItem,
		}));
	};

	const chooseFontFamily = (selectedItem: OptionType) => {
		setSelectedArticleState((prevState) => ({
			...prevState,
			fontFamilyOption: selectedItem,
		}));
	};

	const chooseFontColors = (selectedItem: OptionType) => {
		setSelectedArticleState((prevState) => ({
			...prevState,
			fontColor: selectedItem,
		}));
	};

	const chooseFontSizeOptions = (selectedItem: OptionType) => {
		setSelectedArticleState((prevState) => ({
			...prevState,
			fontSizeOption: selectedItem,
		}));
	};

	const chooseContentWidthArr = (selectedItem: OptionType) => {
		setSelectedArticleState((prevState) => ({
			...prevState,
			contentWidth: selectedItem,
		}));
	};

	return (
		<>
			<ArrowButton isOpenArrow={isOpenForm} setIsOpenArrow={setIsOpenForm} />
			<aside
				className={clsx(styles.container, isOpenForm && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={changePage}
					onReset={resetPage}
					onClick={(e) => e.stopPropagation()}>
					<Text as='h2' size={31} uppercase={true} weight={800}>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						title='шрифт'
						selected={selectedArticleState.fontFamilyOption}
						onChange={(option) => chooseFontFamily(option)}
					/>
					<RadioGroup
						name='fontSize'
						title='размер шрифта'
						options={fontSizeOptions}
						selected={selectedArticleState.fontSizeOption}
						onChange={(option) => chooseFontSizeOptions(option)}
					/>
					<Select
						options={fontColors}
						title='цвет шрифта'
						selected={selectedArticleState.fontColor}
						onChange={(option) => chooseFontColors(option)}
					/>
					<Separator></Separator>
					<Select
						options={backgroundColors}
						title='цвет фона'
						selected={selectedArticleState.backgroundColor}
						onChange={(option) => chooseBackgroundColor(option)}
					/>
					<Select
						options={contentWidthArr}
						title='ширина контента'
						selected={selectedArticleState.contentWidth}
						onChange={(option) => chooseContentWidthArr(option)}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
