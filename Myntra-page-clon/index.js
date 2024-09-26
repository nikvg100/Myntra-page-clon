
let bagitem;
let item = [
  {
    id: 1,
    itemimg:'img/1.jpg',
    rating: {
      stars: 4.5
      , noofreview: 1400,
    }
    , companyname: 'Carlton London'
    , itemname: 'Rhodium plated CZ Floral Stud'
    , price: {
      curprice: 606
      , origprice: 1045
      , discount: 40
    }

  },
  {
    id: 2,
    itemimg: 'img/2.jpg',
    rating: {
      stars: 4.2
      , noofreview: 1000,
    }
    , companyname: 'Lady Comfort'
    , itemname: 'Women Black Dress'
    , price: {
      curprice: 710
      , origprice: 1200
      , discount: 42
    }
  }
  , {
    id: 3,
    itemimg: 'img/4.jpg',
    rating: {
      stars: 4.6
      , noofreview: 1600,
    }
    , companyname: 'Sporty Look'
    , itemname: 'Indian criket jursi'
    , price: {
      curprice: 999
      , origprice: 1999
      , discount: 50
    }
  }
]
onLoad();

function onLoad() {
 let  bagitemstr=localStorage.getItem('bagitem');
bagitem=bagitemstr ? JSON.parse(bagitemstr):[];
  displayitem();
 addcountonbag();
}
//display item in the home page
function displayitem() {
  let itmesconEl = document.querySelector('.items-con');
  let innerHTML = '';
 if(!itmesconEl){
   return
 }
  item.forEach(item => {
    innerHTML += `<div class="item">
  <img class="itemimg" src="${item.itemimg}" alt="Item Image">
   <div class="rating">
   ${item.rating.stars} ⭐| ${item.rating.noofreview} 
   </div>
   <div class="companyname">
   ${item.companyname}
   </div>
   <div class="itemname">${item.itemname}</div>
   <div class="price">
      <span class="curprice">Rs${item.price.curprice} </span>
      <span class="origprice">Rs ${item.price.origprice}</span>
      <span class="discount">(${item.price.discount}% OFF)</span>
   </div>
  <button class="addbagbtn" onclick="addTobag(${item.id})">Add to Bag</button>
</div>
`;
  })

  itmesconEl.innerHTML = innerHTML;
}
//item add in bag


function addTobag(itemid) {
  bagitem.push(itemid)
  localStorage.setItem('bagitem',JSON.stringify(bagitem));
  addcountonbag();

}
function addcountonbag(){
  let countel=document.querySelector('.countadd');
  if(bagitem.length>0){
    countel.style.visibility='visible'
  countel.innerText=bagitem.length;
  }
  else{
    countel.style.visibility='hidden'
  }
}



