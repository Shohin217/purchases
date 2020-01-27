const rootEl = document.getElementById('root')
rootEl.innerHTML = `
<form data-id="form-sum">
<label for="sum-input">Введите сумму: </label>
<input id="sum-input" data-id="sum-input" type="number">
<label for="sum-category">Введите категрию: </label>
<input id=" sum-category" data-id="category-input">
<button data-action="add">Добвить</button>
</form>
<ul data-id="purchases-list"></ul>
<div data-id="amount"></div>
`

const formEl = rootEl.querySelector('[data-id=form-sum]') 
const inputSumEl = formEl.querySelector('[data-id=sum-input]')
const inputCategoryEl = formEl.querySelector('[data-id=category-input]')
const buttonAddEl = formEl.querySelector('[data-action=add]')
const amountEl = rootEl.querySelector('[data-id=amount]')

const purchasesListEl = rootEl.querySelector('[data-id=purchases-list]')



amountEl.textContent = 'Общяя сумма: 0'

let sum = 0;

buttonAddEl.onclick = (evt) => {
    evt.preventDefault();
    // sum+=parseFloat(inputSumEl.value)
    
    
    const category = inputCategoryEl.value
    const value  = parseInt (inputSumEl.value, 10)
    
    sum+=value

    const purchasesEl = document.createElement('li');
    
    amountEl.textContent = `Общяя сумма: ${sum}`
    purchasesEl.innerHTML =`
    Попукпа на сумму ${value}, в категрии ${category} <button data-action="up">UP</button> <button data-action="down">DOWN</button> <button data-action="remove">x</button>
    `;
    
    const purchasesRemove= purchasesEl.querySelector('[data-action=remove]')
    
    purchasesRemove.onclick = () =>{
        purchasesEl.removeChild()
        sum -= value
        amountEl.textContent = `Общяя сумма: ${sum}`
    } 

    purchasesListEl.insertBefore(purchasesEl, purchasesListEl.firstElementChild)
    inputSumEl.value = ''
    inputCategoryEl.value = ''
    inputSumEl.focus()
    
    const buttonUp = document.querySelector('[data-action=up]');
    const buttonDown = document.querySelector('[data-action=down]');
    
    buttonUp.onclick=()=>{
        if(purchasesEl==purchasesListEl.firstElementChild){
            purchasesListEl.insertBefore(purchasesEl, null)
        }else{
            purchasesListEl.insertBefore(purchasesEl, purchasesEl.previousElementSibling)
        }
    }

    buttonDown.onclick=()=>{
        if(purchasesEl===purchasesListEl.lastElementChild){
            purchasesListEl.insertBefore(purchasesEl, purchasesListEl.firstElementChild)
        }else{
            purchasesListEl.insertBefore(purchasesEl.nextElementSibling, purchasesEl )
        }
    }
}
