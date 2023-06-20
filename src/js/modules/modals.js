const modals = () => {
    function showModalByTime(selector, time) {
        setTimeout(() => {
            const modal = document.querySelector(selector);
            showModal(modal);
        }, time);
    }

    function closeModal(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach((item) => {
            item.addEventListener("click", (event) => {
                if (event.target) {
                    event.preventDefault();
                }

                showModal(modal);
            });
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });

        close.addEventListener("click", () => {
            closeModal(modal);
        });

        document.addEventListener("keydown", (event) => {
            if (event.code === "Escape" && modal.style.display === "block") {
                closeModal(modal);
            }
        });
    }

    function showModal(modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    bindModal(
        ".popup_engineer_btn",
        ".popup_engineer",
        ".popup_engineer .popup_close",
    );

    bindModal(".phone_link", ".popup", ".popup .popup_close");

    showModalByTime(".popup", 60000);
};

export default modals;
