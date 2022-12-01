const createTab = (text, tabs) => {
    const tab = document.createElement('button');
    tabs.append(tab);
    
    tab.classList.add(
        'tab', 
        'hover-up', 
        'hover-line'
    );
    tab.innerText = text;

    return tab;
}

const header = () => {
    const header = document.querySelector('header');

    // Restaurant text
    const headerText = document.createElement('h1');
    header.append(headerText);
    headerText.innerText = 'Restaurant page';

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

    // Credit div
    const creditDiv = document.createElement('div');
    footer.append(creditDiv);
    
    // Author text
    const authorText = document.createElement('h2');
    creditDiv.append(authorText);
    authorText.innerText = 'Created by ';

    // GitHub Link
    const gitHubLink = document.createElement('a');
    creditDiv.append(gitHubLink);
    gitHubLink.href = 'https://github.com/Studsministern';
    gitHubLink.innerText = 'Eric Weidow';

    // Image div
    const imageDiv = document.createElement('div');
    footer.append(imageDiv);

    // Image reference text
    const imageText = document.createElement('h2');
    imageDiv.append(imageText);
    imageText.innerText = 'Photo by'
    
    // Photograph link
    const photographLink = document.createElement('a');
    imageDiv.append(photographLink);
    photographLink.href = 'https://unsplash.com/@nik_owens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    photographLink.innerText = 'Nik Owens';

    imageDiv.append(document.createElement('h2').innerText = 'on');

    // Image link
    const imageLink = document.createElement('a');
    imageDiv.append(imageLink);
    imageLink.href = 'https://unsplash.com/s/photos/Neapolitan-pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText';
    imageLink.innerText = 'Unsplash';
}

export function initPage() {
    let tabs = header();
    const content = document.querySelector('#content');
    content.classList.add( 
        'side-shadows'
    );
    footer();

    return tabs;
}