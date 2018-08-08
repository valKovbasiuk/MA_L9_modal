function makeVisible() {
    document.querySelector('.overlay').classList.add('visible');
    document.querySelector('.modal_window').classList.add('visible');
    document.querySelector('.overlay').addEventListener('click', hide);
    document.querySelector('.close').addEventListener('click', hide);
    document.querySelector('.close').focus();
}


function hide() {

document.querySelector('.visible').classList.remove('visible');
document.querySelector('.visible').classList.remove('visible');
document.querySelector('#click_me').focus();
}
window.onload = function() {
document.querySelector('#click_me').addEventListener('click', makeVisible);

}
