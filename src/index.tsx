import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [selectedArticleState, setArticleState] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': selectedArticleState.fontFamilyOption.value,
					'--font-size': selectedArticleState.fontSizeOption.value,
					'--font-color': selectedArticleState.fontColor.value,
					'--container-width': selectedArticleState.contentWidth.value,
					'--bg-color': selectedArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={selectedArticleState}
				setArticleStateForm={setArticleState}
				defaultArticleState={defaultArticleState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
