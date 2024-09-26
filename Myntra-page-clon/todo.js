let todolist=[
]

displayitem()

function addTodo(){
  let inpel=document.querySelector('#inpTodo');
  let inpitem=inpel.value;
let dateel=document.querySelector('#todoDate');
let dateitem=dateel.value;
if(inpel.value=='' && dateel.value==''){
  alert('plise Enter Todo and Date ')
}  else{
todolist.push({item:inpitem, dudate:dateitem,});}
  inpel.value=''
  dateel.value=''
  displayitem()

}
function displayitem(){
  let discon=document.querySelector('.containar');
  let newhtml='';
  // let datastor=document.querySelector('.localdata');
  // localStorage.setItem('tododata',JSON.stringify(todolist));
  // objdata=JSON.parse(localStorage.getItem('tododata'));   
   



  for (i=0;i<todolist.length;i++){
    
    
    let {item ,dudate}=todolist[i];
    newhtml +=`
    <span>${item}</span>
      <span>${dudate}</span>
    <button class="del" onclick=" todolist.splice(${i},1);displayitem();">Del</button>
    `;
  }

  discon.innerHTML=newhtml;
}
