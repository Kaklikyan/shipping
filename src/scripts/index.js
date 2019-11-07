import '../styles/index.scss';
import {getCountries} from './countries';

import {shippingHtml} from './shipping';
import {orderDetails} from './orderDetails';
import {billingHtml} from './billing';
import paymentHtml from './payment';
import {render} from './ordered-items';

const rootEl = document.getElementById('root');
const rootElDetails = document.getElementById('details-root');
const ordersEl = document.getElementById('orders');


class navBar {
  constructor(active, page, root){
    this.active = active;
    this.page = page;
    this.root = root;
  }
  returnHtml() {
    this.root.innerHTML = this.page;
  }
}

const shippingActiveElement = new navBar('shipping', shippingHtml(), rootEl);
const detailsActiveElement = new navBar('details', orderDetails(), rootElDetails)


shippingActiveElement.returnHtml();


const handleClick = (arg, argthis) => {
  rootElDetails.innerHTML = '';
  ordersEl.style.opacity = '1';
  const parent = argthis.parentNode;

  [...parent.children].map(el => el.style.color = '#b0afb9')
  
  argthis.style.color = '#895acd';

  if(arg == 'shipping'){
    const shippingActiveElement = new navBar('shipping', shippingHtml(), rootEl);
    shippingActiveElement.returnHtml();
  }else if(arg == 'billing'){
    const billingActiveElement = new navBar('billing', billingHtml(), rootEl);
    billingActiveElement.returnHtml()
  }else if(arg == 'payment'){
    const paymentActiveElement = new navBar('payment', paymentHtml(), rootEl);
    paymentActiveElement.returnHtml();
  }
  $('#country').select2();
}


const handlePageChange = (e, type) => {
  e.preventDefault();
  if(type == 'shipping'){
    const shippingActiveElement = new navBar('shipping', shippingHtml(), rootEl);
    shippingActiveElement.returnHtml();
  }else if(type == 'billing'){
    const billingActiveElement = new navBar('billing', billingHtml(), rootEl);
    billingActiveElement.returnHtml();
  }else if(type == 'payment'){
    const paymentActiveElement = new navBar('payment', paymentHtml(), rootEl);
    paymentActiveElement.returnHtml();
  }else if(type='details'){
    
    detailsActiveElement.returnHtml();
    rootEl.innerHTML = '';
    navbar.innerHTML = '';
    ordersEl.style.opacity = '0.55';
  }
  const navParent = document.getElementById('navbar');
  let activeNav = [...navParent.children].filter(el => el.classList[1] == type);

  [...navParent.children].map(el => el.style.color = '#b0afb9');
  activeNav[0].style.color = '#895acd';
  $('#country').select2();
}


const navShipping = document.getElementsByClassName('shipping')[0];
navShipping.style.color = '#895acd';

window.handlePageChange  = handlePageChange;
window.handleClick = handleClick;
window.render = render;
window.getCountries = getCountries;
getCountries();
render();

$(document).ready(function() {
  $('#country').select2();
});





