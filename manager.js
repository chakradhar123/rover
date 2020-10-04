let rovers=[{id:"1",img:'./roverimages/bgtrail3.jpg',name:"Roro Rover",desc:"A mars rover which topped the charts last week in best selling rover's ,will be a great pick for anyone who wants to explore mars",fare:"359"},
{id:"2",img:'./roverimages/bgtrail6.jpg',name:"Cry Rover",desc:"A mars rover which topped the charts last week in best selling rover's ,will be a great pick for anyone who wants to explore mars",fare:"152"},
{id:"3",img:'./roverimages/bgtrail3.jpg',name:"Roro Rover",desc:"A mars rover which topped the charts last week in best selling rover's ,will be a great pick for anyone who wants to explore mars",fare:"255"},
{id:"4",img:'./roverimages/bgtrail3.jpg',name:"Roro Rover",desc:"A mars rover which topped the charts last week in best selling rover's ,will be a great pick for anyone who wants to explore mars",fare:"595"},
{id:"5",img:'./roverimages/bgtrail3.jpg',name:"Roro Rover",desc:"A mars rover which topped the charts last week in best selling rover's ,will be a great pick for anyone who wants to explore mars",fare:"877"}]

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