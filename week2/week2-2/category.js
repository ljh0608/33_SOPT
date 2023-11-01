const btn=document.querySelector(".categoryPlusBtn");
btn.addEventListener("click",function(){
    location.href="index.html";
})


const parsingIncomeCatogry=JSON.parse(localStorage.getItem("income_category"));
const parsingExpendCatogry=JSON.parse(localStorage.getItem("expend_category"));

const incomeList=document.querySelector(".income__list");
parsingIncomeCatogry.forEach(item => {
    let li = document.createElement("li");
    li.textContent=item;
    incomeList.appendChild(li);
});

const expendList=document.querySelector(".expend__list");
parsingExpendCatogry.forEach(item => {
    let li = document.createElement("li");
    li.textContent=item;
    expendList.appendChild(li);
});

const incomeInput=document.querySelector(".income__input");
const expendInput=document.querySelector(".expend__input");

incomeInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        let temp=JSON.parse(localStorage.getItem("income_category"))||[];
        temp.push(event.target.value);
        console.log(temp);
        localStorage.setItem("income_category",JSON.stringify(temp));
            let li = document.createElement("li");
            li.textContent=event.target.value;
            incomeInput.value=null;
            incomeList.appendChild(li);
           
    }
});

expendInput.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            let temp=JSON.parse(localStorage.getItem("expend_category"))||[];
            temp.push(event.target.value);
            console.log(temp);
            localStorage.setItem("expend_category",JSON.stringify(temp));
                let li = document.createElement("li");
                li.textContent=event.target.value;
                expendInput.value=null;
                expendList.appendChild(li);
               
        }
    
     });