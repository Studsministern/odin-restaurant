import './styles.css';
import { initPage } from './pages/index/initPage';
import { switchPage } from './pages/index/switchPage';

const tabs = initPage();

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchPage(tab);
    });
});