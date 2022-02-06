var toggle;
var navTable;

document.addEventListener("DOMContentLoaded", () => {
    toggle = document.getElementById('navi-toggle');
    navTable = document.getElementById('navigation__nav');

    return navClose();
});

function navigationItemClick() {
    return navClose();
}

function navCheckboxClick() {
    if (toggle.checked) {
        return navOpen();
    }

    return navClose();
}

function navClose() {
    setTimeout(() => {
        toggle.checked = false;
        navTable.style.display = 'none';
    }, 200)  
}

function navOpen() {
    setTimeout(() => {
        toggle.checked = true;
        navTable.style.display = 'block';
    }, 360)
    
}