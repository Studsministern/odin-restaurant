import './styles.css';
import { initPage } from './pages/index/initPage';

const tabs = initPage();

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log(tab.innerText);
    });
});