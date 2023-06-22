import "./slider";
import modals from "./modules/modals";
import date from "./modules/date";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const deadline = "2023-08-01";

    let modalState = {};

    changeModalState(modalState);
    modals();
    date(".container1", deadline);
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(
        ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click",
    );
    tabs(
        ".balcon_icons",
        ".balcon_icons_img",
        ".big_img > img",
        "do_image_more",
        "inline-block",
    );
    forms(modalState);
    images();
});
