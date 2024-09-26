let bagitemObj;
onLoad();
function onLoad(){
  loadbagitemobj();
 displaybagitem();
 displaybagsummry();
}
function displaybagsummry(){
  let bagsumel=document.querySelector('.bag-summary');
  let totalitem=bagitemObj.length;
  let totalmrp=0;
  let totaldis=0;
  let conveniencefee=99;
bagitemObj.forEach(bagitem =>{ totalmrp +=bagitem.price.origprice;
  totaldis += bagitem.price.origprice- bagitem.price.curprice;
  
})
if(totalmrp == 0){
conveniencefee= 0;
}
let totalpayment = totalmrp - totaldis+conveniencefee;
  bagsumel.innerHTML=`
   <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalitem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalmrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totaldis}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${conveniencefee}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${totalpayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
}
//load item base on id in bagitem array
function loadbagitemobj()
{bagitemObj=bagitem.map(itemid => {
for(let i=0;i<item.length;i++)
{
  if(itemid == item[i].id)
  return item[i];
}
});
console.log(bagitemObj);
}
//display the item
function displaybagitem(){

let  bagitemCon=document.querySelector('.bag-items-container')
let inhtml='';  
bagitemObj.forEach(bagitem => 
 { 
  inhtml+=genItemHtml(bagitem);
  }
  );
 bagitemCon.innerHTML=inhtml;
 }


   function genItemHtml(item){
    return `<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="${item.itemimg}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.companyname}</div>
              <div class="item-name">${item.itemname}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.price.curprice}</span>
                <span class="original-price">Rs ${item.price.origprice}</span>
                <span class="discount-percentage">(${item.price.discount}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">14 days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">10 Oct 2023</span>
              </div>
            </div>

            <div class="remove-from-cart" onclick='removefrombag(${item.id})'>X</div>
          </div>`

   }
   function removefrombag(itemid){
   bagitem= bagitem.filter(bagitemid => bagitemid != itemid)
  localStorage.setItem('bagitem',JSON.stringify(bagitem)) 
  loadbagitemobj();
  addcountonbag();
  displaybagitem();
  displaybagsummry();
  }