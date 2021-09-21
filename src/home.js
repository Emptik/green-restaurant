import Article from './components/article/ArticleView.js';
import Btn from './components/btn/BtnView.js';

const initArticle = () => {
    const article = new Article();
    article.displayArticle();
};

const btnPropagator = () => {
    initArticle();
};

const initBtn = () => {
    const btn = new Btn();
    btn.addEventHandler(btnPropagator);
};

initBtn();
