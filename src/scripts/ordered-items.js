export const orderedItems = [
  {
    name: 'The Chelsea Booy',
    type: 'Black',
    quantity: 1,
    price: '235',
    url: 'https://dks.scene7.com/is/image/dkscdn/19NIKMDWNSHFTR9RDRNN_Black_White_is?wid=1080&fmt=jpg',
  },
  {
    name: 'The Twill Snack Backpack',
    type: 'Reverse Denim + Brown leather',
    quantity: 1,
    price: '65',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44kqNEuS-yYYhklGDXaqD8diBPUpI1GZrAl09gvhgITZSnBi90w&s',
  },
  {
    name: 'The Twill Zip Toe',
    type: 'Reverse Denim + Black leather',
    quantity: 1,
    price: '48',
    url: 'https://images.riverisland.com/is/image/RiverIsland/742229_back?$ProductPageZoom$',
  },
]

export const render = () => {
  const items = orderedItems.map(el => (
   (`<div class='orders__wrapper'>
        <div class='orders__wrapper__item'>
          <img src='${el.url}' alt="">
        </div>
        <div class='orders__wrapper__item'>
          <h4>${el.name}</h4>
          <span>${el.type}</span>
          <span>Quantity: ${el.quantity}</span>
        </div>
        <div class="orders__wrapper__item">
          $${el.price}
        </div>
      </div>`)
  )).join('');

  const itemsRoot = document.getElementById('ordered-items');
  itemsRoot.innerHTML = items;
}


const subtotal = document.getElementById('subtotal');

let total = 0;

const taxes = document.getElementById('taxes').innerText;
const taxNumbers = taxes.substr(1);
for(let i =0; i<orderedItems.length; i++){
  total = total + Number(orderedItems[i].price);
}
subtotal.innerText = '$' + total
const taxesIncluded = total + Number(taxNumbers);
const totalRoot = document.getElementById('total-root');
totalRoot.innerHTML = '$' + taxesIncluded;