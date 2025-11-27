const img = document.getElementById('Image');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', () => {
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3hWAEmsgENSP5g0EtebQuSj0Ke5Am1NN1g&s';
    img.alt = 'Image 1';
});

btn2.addEventListener('click', () => {
    img.src = 'https://preview.redd.it/day-3-of-sketching-zoro-nothing-happened-v0-qomk4bnyb84d1.jpg?width=1080&crop=smart&auto=webp&s=2de711851b5edc8a71aa1cdf8fe123a2c0db0c00';
    img.alt = 'Image 2';
});