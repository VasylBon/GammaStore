const tabs = (
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass,
    display = "block",
) => {
    let header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = "none";
            item.classList.add("animate__bounceOut");
        });

        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i) {
        content[i].style.display = display;
        content[i].classList.add("animate__zoomIn");
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent(0);

    header.addEventListener("click", (event) => {
        const target = event.target;

        if (
            target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
        ) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;
