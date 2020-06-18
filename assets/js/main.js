// cards
setActive = (type) => {
    let myActiveItem = document.querySelector('.menu-items.active');

    if (myActiveItem) {
        myActiveItem.classList.remove('active');
    }

    let myListItems = document.querySelectorAll('.menu-items');

    let myCards = document.querySelectorAll('.card-holder');

    for (let i = 0; i < myCards.length; i++) {
        const card = myCards[i];
        card.style.display = 'none';
    }

    switch (type) {
        case 'marketing':
            myListItems[0].classList.add('active');

            let myMarketingCards = document.querySelectorAll('.card-holder.marketing')
            for (let i = 0; i < myMarketingCards.length; i++) {
                const card = myMarketingCards[i];
                card.style.display = 'block';
            }
            break;
        case 'development':
            myListItems[1].classList.add('active');

            let myDevelopmentCards = document.querySelectorAll('.card-holder.developer')
            for (let i = 0; i < myDevelopmentCards.length; i++) {
                const card = myDevelopmentCards[i];
                card.style.display = 'block';
            }
            break;
        case 'design':
            myListItems[2].classList.add('active');

            let myDesignCards = document.querySelectorAll('.card-holder.designer')
            for (let i = 0; i < myDesignCards.length; i++) {
                const card = myDesignCards[i];
                card.style.display = 'block';
            }
            break;
        default:
            break;
    }
}

// sidebar
showSidebar = () => document.querySelector('.sidebar').style.width = '100%';

closeSidebar = () => document.querySelector('.sidebar').style.width = '0';
