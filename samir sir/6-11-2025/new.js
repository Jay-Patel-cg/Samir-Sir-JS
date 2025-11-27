var img = document.querySelector('img');
var nextBtn = document.querySelector('button');

nextBtn.addEventListener('click',nextImg);

const imgContainer= [
    "https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png",
    "https://cdn.pixabay.com/photo/2022/08/31/16/22/silhouette-7423726_640.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTshXPT_QlL-o-FR4iQ5qUCk3ZzlgbcOoLZfxoknrXCGscGkxaSESGLaiUIcsu8kSz5_w&usqp=CAU"
]

var count = 0;


function nextImg(){
    img.setAttribute('src',imgContainer[count]);

    count++;
    if(count == 2){
        count = 0;
    }
}