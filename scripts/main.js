var swapped = false;
function swap() {
    if (swapped == false) {
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('underlay').style.display = 'none'
    swapped = true;
    }
    else {
        document.getElementById('overlay').style.display = 'none'
        document.getElementById('underlay').style.display = 'block'
        swapped = false;
    }
}

