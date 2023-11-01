import { INIT_BALANCE, HISTORY_LIST,INCOME_CATEGORY,EXPEND_CATEGORY } from "./constant.js";

let filteredHistory=HISTORY_LIST;
let allHistory=HISTORY_LIST;


/**
 * category 첫 렌더링때만 초기화하는 함수
 */
function setCategory(){
    if(!localStorage.getItem("income_category") || !localStorage.getItem("expend_category") ){
        let incomeCategory=JSON.stringify(INCOME_CATEGORY);
        localStorage.setItem('income_category',incomeCategory);
        let expendCategory=JSON.stringify(EXPEND_CATEGORY);
        localStorage.setItem('expend_category',expendCategory);
    }
}
setCategory();


/**
 * 수입 지출 목록 구현
 */

const withdrawUl = document.querySelector('.withdraw__ul');

function createWithdrawItem(item) {
    const li = document.createElement('li');
    li.className = 'withdraw__li';

    const category = document.createElement('p');
    category.className = 'category__article';
    category.textContent = item.category;
    li.appendChild(category);

    const title = document.createElement('p');
    title.className = 'title__article';
    title.textContent = item.name;
    li.appendChild(title);

    const money = document.createElement('p');
    money.className = `history__article ${item.type==="income"? 'income' : 'expend'}`;
    money.textContent = item.type==="income" ? `+ ${item.money.toLocaleString()}` : `- ${Math.abs(item.money).toLocaleString()}`;
    li.appendChild(money);

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    li.appendChild(deleteBtn);

    return li;
}


/**
 * 렌더링 함수
 */

function renderWithdrawList(filteredHistory) {

/**
 * 나의자산 & 수입 & 지출 헤더
 */
    const totalMoney = allHistory.reduce((total, item) => {
        if (item.type === "income") {
            total += item.money;
        } else {
            total -= Math.abs(item.money);
        }
        return total;
    }, 0);
    const depositSection = document.querySelector('.deposit__section');
    const totalMoneyElement = depositSection.querySelector('p');
    
    const income=depositSection.querySelector(".income__article");
    const expend=depositSection.querySelector(".expend__article");
    
    const filterIncome=allHistory.filter(item=>item.type==="income");
    const totalIncome = filterIncome.reduce((total, item) => total + item.money, 0);
    
    const filterExpend=allHistory.filter(item=>item.type==="expend");
    const totalExpend = filterExpend.reduce((total, item) => total + item.money, 0);
    
    
    totalMoneyElement.textContent = totalMoney.toLocaleString(); // 숫자 포맷팅 (콤마 추가)
    income.textContent =`+ ${totalIncome.toLocaleString()}`; 
    expend.textContent=`- ${totalExpend.toLocaleString()}`
    
    /**
     * 내역리스트 렌더링
     */
    withdrawUl.innerHTML = '';
    filteredHistory.forEach(item => {
        const listItem = createWithdrawItem(item);
        withdrawUl.appendChild(listItem);
    });
}


/**
 * 수입 지출 목록 필터링
 */
const income_checkbox=document.querySelector(".income-checkbox__input");
const expend_checkbox=document.querySelector(".expend-checkbox__input");


function updateFilteredHistory() {
    const showIncome = income_checkbox.checked;
    const showExpend = expend_checkbox.checked;

     const filterCheckHistory = filteredHistory.filter(item => {
        if (showIncome && showExpend) {
            return true; 
        } else if (showIncome) {
            return item.type === 'income'; 
        } else if (showExpend) {
            return item.type === 'expend';
        }
        return false; 
    });

    renderWithdrawList(filterCheckHistory);
}


income_checkbox.addEventListener('change', updateFilteredHistory);
 expend_checkbox.addEventListener('change', updateFilteredHistory);
 updateFilteredHistory(); 


/**
 * 삭제 버튼 기능 구현
 */
    const deleteModal=document.querySelector(".deleteModal");
    const deleteBtn=document.querySelector(".deleteBtn");
    const closeDeleteBtn=document.querySelector(".closeDeleteBtn");

function deleteModalOpen(target){
  deleteModal.style.display="flex"
  deleteBtn.addEventListener("click",()=>deleteHistory(target));
  
}
function deleteModalClose(){
    deleteModal.style.display="none"
    
  }
function deleteHistory(target){
    const listItem = target.parentElement;
    console.log(listItem);

    const index = Array.from(listItem.parentElement.children).indexOf(listItem);
    
    filteredHistory.splice(index, 1);
    if (listItem && listItem.parentElement) {
        listItem.parentElement.removeChild(listItem);
    }
    deleteModalClose();
    renderWithdrawList(filteredHistory);

}

closeDeleteBtn.addEventListener("click",deleteModalClose);

withdrawUl.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('delete-btn')) {
        
        deleteModalOpen(target);      

    }
});

/**
 * 모달 handling
 */

const modal=document.querySelector(".modal");
const closeBtn=document.querySelector(".closeBtn");

  
function openModal(){

     modal.classList.add("modal-open")
}
function closeModal(){
     
 document.querySelector('.moneyInput').value = '';
    document.querySelector('.titleInput').value = '';
    modal.classList.remove("modal-open")
}

const modalOpen = document.querySelector(".plusBtn");
modalOpen.addEventListener("click",openModal);
modalOpen.addEventListener("click",renderCategory)
closeBtn.addEventListener("click",closeModal)



function renderCategory() {
    const parsingIncomeCatogry=JSON.parse(localStorage.getItem("income_category"));
const parsingExpendCatogry=JSON.parse(localStorage.getItem("expend_category"));
    parsingIncomeCatogry.forEach((item)=>{
        let option1_ = new Option(item, item);
        select.options.add(option1_);
    })
    document.querySelector('.modal-income__checkbox').addEventListener('change', function() {
        updateSelectOptions(this.checked, parsingIncomeCatogry);
    });
    
    document.querySelector('.modal-expend__checkbox').addEventListener('change', function() {
        updateSelectOptions(this.checked, parsingExpendCatogry);
    });
}

/**
 * type에 따른 category 생성
 */

const select = document.querySelector('.category');

function updateSelectOptions(isChecked, options) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    select.innerHTML = '';

    if (isChecked) {
        options.forEach((item)=>{
            let option1_ = new Option(item, item);
            select.options.add(option1_);
        })
    

    }
}




/**
 * 내역 추가 기능 구현
 */

document.querySelector('.submitBtn').addEventListener('click', function() {
  
    const type = document.querySelector('input[name="type"]:checked').value;
    const category = document.querySelector('.category').value;
    const money = parseInt(document.querySelector('.moneyInput').value.replaceAll(',', ''));

    const name = document.querySelector('.titleInput').value;
  
    if (!type || !category || isNaN(money) || money <= 0 || !name) {
        alert("올바른 값을 입력하세요.");
        return;
    }

    
    const newEntry = {
        category: category,
        name: name,
        money: money,
        type: type
    };

    alert("저장완료");
    filteredHistory.push(newEntry);
    renderWithdrawList(filteredHistory);
    /**
     * 입력값 초기화
     */
   document.querySelector('.moneyInput').value = '';
   document.querySelector('.titleInput').value = '';
});

// 추가 input 숫자에 , 넣기
const input = document.querySelector('.moneyInput');
input.addEventListener('keyup', function(e) {
  let value = e.target.value;
  value = Number(value.replaceAll(',', ''));

  if(isNaN(value)) {
    input.value = 0;
  }else {
    const formatValue = value.toLocaleString('ko-KR');
    input.value = formatValue;
  }
})

const categoryPlusBtn=document.querySelector(".categoryPlusBtn");
categoryPlusBtn.addEventListener('click',function(){
    location.href="category.html"
})