const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function() {
    paragraph.textContent = 'Modi Ki vajase ! Aur Do Modi Ko Vote!';
    paragraph.style.color = 'white';
    paragraph.style.backgroundColor = 'Orange';
    paragraph.style.fontSize = '2rem';
});