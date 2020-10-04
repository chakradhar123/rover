 let checkout=document.querySelector('.checkout')
if(checkout){
checkout.addEventListener('click',function(){
    onCheckOut()
})
}

let close=document.querySelector('.close')
if(close){
close.addEventListener('click',function(){
    document.querySelector('.receipt').classList.toggle('hide')
    document.querySelector('.receipt-inside').classList.toggle('hide')
})
}
let rovers=[{id:"1",img:'./roverimages/bgtrail3.jpg',name:"Roro Rover",desc:"A mars rover which topped the charts last week in best selling rover's ,will be a great pick for anyone who wants to explore mars.",fare:"359"},
{id:"2",img:'./roverimages/bgtrail6.jpg',name:"Tep Ranger",desc:"A moon rover which is easy to use and best one available at this price.Last year ,to everyone's shock  Trump called it 'The best rover ever!!'",fare:"152"},
{id:"3",img:'./roverimages/venus.jpg',name:"Venus Voger",desc:"A venus rover ,durable ,need some experience to use it with ease, high speed with HD Camera.It is becoming goto option for anyone who want to peek venus.",fare:"255"},
{id:"4",img:'./roverimages/alien.jpg',name:"Alien Hunter",desc:"Best Rover if you are in search of aliens,not very complicated to use and one of the most used rover to find aliens.This year we saw many discovering new alien species with Alien Hunter.",fare:"595"},
{id:"5",img:'./roverimages/last.jpg',name:"Trial Runner",desc:"A rover which can be good practice for beginners.If you recently started learning to use rovers and want a cheap one to practice your skills, then this one is for you.",fare:"55"}]

// let selected=1;
const grid=document.querySelector('.grid-wrapper')

function getRovers(){
    if(!grid){
        return;

    }
    rovers.forEach(rover=>{
        let card=document.createElement('div');
        let image=document.createElement('img');
        let cont=document.createElement('div');
        let h4=document.createElement('h4');
        let a=document.createElement('a')
        let b=document.createElement('b')
        let button=document.createElement('button');
        card.classList.add('card')
        cont.classList.add('cont')
        a.classList.add('button-ref')
        a.addEventListener('click',function(){
window.name=rover.id

        })
        a.setAttribute('href',"roverDetail.html")
        button.textContent="More Info"
image.setAttribute('src',rover.img);
image.setAttribute('style','width: 100%')

card.appendChild(image);
card.appendChild(cont);
cont.appendChild(h4);
cont.appendChild(a);
h4.appendChild(b);
b.textContent=rover.name
a.appendChild(button);


        grid.appendChild(card);
    })   
}
function selectRover(){

let rover=rovers.find(rover=>rover.id==window.name);
if(rover)
document.querySelector('.rover-name').textContent=rover.name
document.querySelector('.rover-image').setAttribute('src',rover.img)
document.querySelector('#price').textContent='$'+rover.fare+'/day'
document.querySelector('.card-bottom').textContent=rover.desc
}


getRovers()
if(window.name){
    selectRover()
}

function onCheckOut(){
    let rover=rovers.find(rover=>rover.id==window.name);
    let startDate=document.querySelector('#start_date').value
    let endDate=document.querySelector('#end_date').value
    let start = new Date(startDate); 
    let end = new Date(endDate); 
    let Difference_In_Time = end.getTime() -start.getTime(); 
  

    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){
        return;
    }
    let totalDays=Difference_In_Days+1;
     document.querySelector('.receipt-name').textContent=rover.name;
     document.querySelector('.receipt-start').textContent=startDate;
     document.querySelector('.receipt-end').textContent=endDate;
     document.querySelector('.receipt-fare').textContent='$'+rover.fare;

     document.querySelector('.receipt-days').textContent=totalDays;
     document.querySelector('.receipt-total').textContent='$'+totalDays*parseInt(rover.fare);
     document.querySelector('.receipt').classList.toggle('hide')
     document.querySelector('.receipt-inside').classList.toggle('hide')
  
}