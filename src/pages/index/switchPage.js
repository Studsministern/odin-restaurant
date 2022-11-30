const _homePage = (parent) => {
    const home = document.createElement('div');
    parent.append(home);
    home.classList.add(
        'page',
        'home'
    );

    // Welcome text
    const homeHeader = document.createElement('h2');
    const homeText = document.createElement('h2');
    home.append(homeHeader);
    home.append(homeText);
    homeHeader.innerText = 'Welcome!';
    homeText.innerText = 'This is a fake restaurant page for a fake restaurant. The location is also fake. And the food. But you should try the real food, in real life it is good.';
    homeHeader.classList.add('home-header');
}

const _menuItem = (
        parent, 
        name,
        description
    ) => {
    const item = document.createElement('li');
    parent.append(item);

    // Menu item div
    const itemDiv = document.createElement('div');
    item.append(itemDiv);
    
    // Menu item header
    const itemName = document.createElement('h2');
    itemDiv.append(itemName);
    itemName.innerText = name;

    // Menu item description
    const itemDescription = document.createElement('h2');
    itemDiv.append(itemDescription);
    itemDescription.innerText = description;
}

const _menuPage = (parent) => {
    const menu = document.createElement('div');
    parent.append(menu);
    menu.classList.add(
        'page',
        'menu'
    );

    // Appertizer header
    const appertizerHeader = document.createElement('h2');
    menu.append(appertizerHeader);
    appertizerHeader.innerText = 'Appertizers:';
    appertizerHeader.classList.add('menu-header');
    
    // Appertizer menu
    const appertizerMenu = document.createElement('ol');
    menu.append(appertizerMenu);
    
    let appertizerItems = [
        _menuItem(appertizerMenu, 'Garlic bread', 'Italian bread with garlic butter.'),
        _menuItem(appertizerMenu, 'Bruschetta', 'Italian bread with fresh tomato, basil and olive oil.')
    ];

    // Main courses header
    const mainCourseHeader = document.createElement('h2');
    menu.append(mainCourseHeader);
    mainCourseHeader.innerText = 'Main courses:';
    mainCourseHeader.classList.add('menu-header');
    
    // Main courses menu
    const mainCourseMenu = document.createElement('ol');
    menu.append(mainCourseMenu);
    
    let mainCourseItems = [
        _menuItem(mainCourseMenu, 'Spaghetti carbonara', 'Made using pancetta, eggs and parmiggiano reggiano.'),
        _menuItem(mainCourseMenu, 'Margharita', 'The classic pizza with tomato sauce, mozzarella and basil.')
    ];

    mainCourseMenu.setAttribute('start', appertizerItems.length + 1); // Continuing the list

    // Dessert header
    const dessertHeader = document.createElement('h2');
    menu.append(dessertHeader);
    dessertHeader.innerText = 'Desserts:';
    dessertHeader.classList.add('menu-header');
    
    // Main courses menu
    const dessertMenu = document.createElement('ol');
    menu.append(dessertMenu);
    
    let dessertItems = [
        _menuItem(dessertMenu, 'Tiramisu', 'With a creamy base and containing a hint of conjac.'),
        _menuItem(dessertMenu, 'Panna cotta', 'With raspberry, blueberry and a gelatin leaf.')
    ];

    dessertMenu.setAttribute('start', appertizerItems.length + mainCourseItems.length + 1); // Continuing the list
}

const _aboutPage = (parent) => {
    const about = document.createElement('div');
    parent.append(about);
    about.classList.add(
        'page',
        'about'
    );

    // Intro
    const aboutHeader = document.createElement('h2');
    const aboutText = document.createElement('h2');
    about.append(aboutHeader);
    about.append(aboutText);
    aboutHeader.innerText = 'About us:';
    aboutText.innerText = 'This is a fake restaurant page made by me. You can find my GitHub link at the bottom of this page! :)';
    aboutHeader.classList.add('about-header');
}

export function switchPage(tab) {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    switch(tab.innerText) {
        case 'Home':
            _homePage(content);
            break;
        case 'Menu':
            _menuPage(content);
            break;
        case 'About':
            _aboutPage(content);
            break;
    }
}

export function initSwitchPage() {
    const content = document.querySelector('#content');
    _homePage(content);
}