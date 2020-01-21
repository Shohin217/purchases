const rootEl = document.getElementById('root')
rootEl.innerHTML = `
<form data-id="form-sum">
<label for="sum-input">Введите сумму: </label>
<input id="sum-input" data-id="sum-input" type="number">
<label for="sum-input">Введите сумму: </label>
<input data-id="category-input">
<button data-action="add">Добвить</button>

</form>
<div data-id="amount"></div>
`

const formEl = rootEl.querySelector('[data-id=form-sum]') 
const inputSumEl = formEl.querySelector('[data-id=sum-input]')
const inputCategoryEl = formEl.querySelector('[data-id=category-input]')
const buttonAddEl = formEl.querySelector('[data-action=add]')
const amountEl = rootEl.querySelector('[data-id=amount]')

amountEl.textContent = 'Общяя сумма: 0'
let sum = 0;
buttonAddEl.onclick = (evt) => {
    evt.preventDefault();
    sum+=parseFloat(inputSumEl.value)
    amountEl.textContent = `Общяя сумма: ${sum}`
    inputSumEl.value = ''
    inputCategoryEl.value = ''
}