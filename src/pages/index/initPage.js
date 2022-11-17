const createTab = (text, tabs) => {
    const tab = document.createElement('button');
    tabs.append(tab);
    
    tab.classList.add([
        'tab', 
        'hover-up', 
        'hover-line', 
        'semi-transparent'
    ]);
    tab.innerText = text;

    return tab;
}

const header = () => {
    const header = document.querySelector('header');

    // Restaurant text
    const headerText = document.createElement('h1');
    header.append(headerText);
    headerText.innerText = 'Restaurant';

    // Tab div
    const tabDiv = document.createElement('div');
    header.append(tabDiv);
    tabDiv.classList.add('tabs');

    // Tabs
    let tabs = [
        createTab('Home', tabDiv),
        createTab('Menu', tabDiv),
        createTab('About', tabDiv)
    ];

    return tabs;
}

const footer = () => {
    const footer = document.querySelector('footer');

    // Credit text
    const creditText = document.createElement('div');
    footer.append(creditText);
    
    // Author text
    const authorText = document.createElement('h2');
    creditText.append(authorText);
    authorText.innerText = 'Created by ';

    // GitHub Link
    const gitHubLink = document.createElement('a');
    creditText.append(gitHubLink);
    gitHubLink.href = 'https://github.com/Studsministern';
    gitHubLink.innerText = 'Eric Weidow';
}

export function initPage() {
    let tabs = header();
    const content = document.querySelector('#content');
    footer();
}