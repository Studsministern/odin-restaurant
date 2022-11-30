import './styles.css';
import { initPage } from './pages/index/initPage';
import { switchPage, initSwitchPage } from './pages/index/switchPage';

const tabs = initPage();
initSwitchPage('Home');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchPage(tab);
    });
});