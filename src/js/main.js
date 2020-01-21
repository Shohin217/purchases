const rootEl = document.getElementById('root')
rootEl.innerHTML = `
<form data-id="form-sum">
<input data-id="sum-input">
<input data-id="category-input">
<button data-action="add">Добвить</button>
<div data-id="amount"></div>
</form>
`

const formEl = rootEl.querySelector('[data-id=form-sum]') 
const inputSumEl = formEl.querySelector('[data-id=sum-input]')
const inputCategoryEl = formEl.querySelector('[data-id=category-input]')
const buttonAddEl = formEl.querySelector('[data-action=add]')
const amountEl = formEl.querySelector('[data-id=amount]')

amountEl.textContent = 'Общяя сумма: '
let sum = 0;
buttonAddEl.onclick = (evt) => {
    evt.preventDefault();
    sum+=parseFloat(inputSumEl.value)
    amountEl.textContent = `Общяя сумма: ${sum}`
    inputSumEl.value = ''
}