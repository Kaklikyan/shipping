import {getCountries} from './countries';

export const shippingHtml = () => {
  console.log('shipping');
  getCountries().then(res => {
    const selectCountries = document.getElementById('country');
    res.map(el => selectCountries.insertAdjacentHTML('afterbegin', `<option>${el.name}</option>`))
  })
    return (`<div class='item__actions--shipping'>
    <h2>Shipping Info</h2>
    <form class='item__actions__form' onsubmit='checkIfEmptyShipping(event)'>
      <span>Recepient</span>
      <input 
          name='fullName'
          value='${state.fullName}'
          type='text'
          placeholder='Full Name'
          class='item__actions__form__input--block'
          onkeypress='handleChangeShipping(event)'/>
      <div id='fullName' class='item__actions__form__error' ></div>
      <input
          type='number'
          placeholder='Daytime phone'
          name='phone'
          value='${state.phone}'
          onkeypress='handleChangeShipping(event)'/>
          <p>For delivery questions only</p>
      <div id='phone' class='item__actions__form__error'></div>    
     
      <span>Address</span>
      <input
          type='text' 
          placeholder='Street Address' 
          class='item__actions__form__input--block'
          name='address'
          value='${state.address}'
          onkeypress='handleChangeShipping(event)'
          />
      <div id='address' class='item__actions__form__error' ></div>
      <input
          type='text'
          placeholder='Apt, Suite, Bidg, Gate, Code. (Optional)' 
          class='item__actions__form__input--block'
          />
      <input 
          type='text' 
          placeholder='City' 
          class='item__actions__form__input--block'
          name='city'
          value='${state.city}'
          onkeypress='handleChangeShipping(event)'
          >
      <div class='item__actions__form__error' id='city'></div>   
      <select name='Country' id='country'>

      </select>
      <div class='item__actions__form__error' id='Country'></div>
      <input type='text' 
             placeholder='ZIP'
             name='zip' 
             value='${state.zip}'
             onkeypress='handleChangeShipping(event)'>
      <div id='zip' class='item__actions__form__error'></div>
      <input 
          id='continue'
          type='submit'
          value='Continue'
          type='submit'
          onclick='checkIfEmptyShipping(event)'
          />
    </form>
  </div>`)
}

const state = {
  fullName: '',
  address: '',
  city: '',
  phone: '',
  zip: '',
}

const handleChangeShipping = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  state[name] = value;
  for(let key in state){
    const elementErr = document.getElementById(`${key}`);
    if(state[key]){
      elementErr.innerHTML = '';
    }
  }
}

const checkIfEmptyShipping = (e) => {
  e.preventDefault();
  for(let key in state){
    const elementErr = document.getElementById(`${key}`);
    if(state[key] == ''){
      elementErr.innerHTML = `Please enter ${key}`; 
      false && handlePageChange(event, "billing");
    }else if(state[key]){
      elementErr.innerHTML = ''; 
      handlePageChange(event, "billing")
    }
  }
  return false;
}



// countries && countries.map(el => selectCountries.insertAdjacentHTML('afterbegin', `<option>${el.name}</option>`))

window.handleChangeShipping = handleChangeShipping;
window.checkIfEmptyShipping = checkIfEmptyShipping;