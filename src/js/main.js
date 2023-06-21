import "./slider";
import modals from "./modules/modals";
import date from "./modules/date";
import tabs from "./modules/tabs";
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const deadline = "2023-08-01";

    modals();
    date(".container1", deadline);
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(
        ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click",
    );
    forms();
});
