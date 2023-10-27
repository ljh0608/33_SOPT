
const top_btn=document.querySelector(".top_btn");

function handleScroll(){
    const positionY=window.scrollY;
    const windowY=window.innerHeight;

    top_btn.style.opacity=`${positionY/(document.body.clientHeight - 
        windowY)}`;
}

window.addEventListener("scroll",handleScroll);



function checkSubtextHeight() {
    let subTextElements = document.querySelectorAll('.subText');
    subTextElements.forEach(function(subTextElement) {

        if (subTextElement.innerHTML.length > 40) { 
            subTextElement.nextElementSibling.style.display = 'block'; 
        }
    });
}

let allItem = document.querySelector(".all-item__ul");


document.querySelector('.scroll-button.left').addEventListener('click', function() {
   allItem.scrollTo(
        {
            top:0,
            left:0,
            behavior: 'smooth' // 부드러운 스크롤
        }
        );

});

document.querySelector('.scroll-button.right').addEventListener('click', function() {
   allItem.scrollTo({
        top:0,
        left:document.querySelector('.all-item__ul').scrollWidth,
        behavior: 'smooth' // 부드러운 스크롤을 위해 추가합니다.
    });
});


checkSubtextHeight();
