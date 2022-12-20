const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab) => {
    tab.onclick = () => {
        if (!tab.classList.contains('tab_active')) {
            for (let t of tabs) {
                t.classList.remove('tab_active');
            }
            tab.classList.add('tab_active');

            const activeTab = document.querySelector('.tab_active'),
                index = tabs.indexOf(activeTab);
            contents.forEach((content) => {
                content.classList.remove('tab__content_active');
            });
            contents[index].classList.add('tab__content_active');
        } 
    };
});



