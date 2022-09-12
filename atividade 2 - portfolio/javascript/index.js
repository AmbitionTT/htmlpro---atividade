const chk=document.querySelector('.checkbox');
const body=document.querySelector('body');

chk.onclick=function(){
    this.classList.toggle('active');
    body.classList.toggle('active');
}