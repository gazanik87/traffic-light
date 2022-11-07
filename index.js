let luys=new Array();
let guyn=new  Array();
guyn[0]="red";
guyn[1]="yellow";
guyn[2]="green";

document.body.style.display="flex";

let button=document.createElement("div");
button.style.width="30px";
button.style.height="30px";
button.style.border="2px solid black";
button.style.borderRadius="100%";
button.style.backgroundColor="grey";
button.style.margin="50px";

let svet=document.createElement("section");
svet.style.width="120px";
svet.style.height="340px";
svet.style.margin="50px";
svet.style.border="3px solid black";
svet.style.borderRadius="5px";
svet.style.backgroundColor="grey";

document.body.appendChild(button);
document.body.appendChild(svet);



for(let i=0;i<3;i++){
luys[i]=document.createElement("div");
luys[i].style.width="100px";
luys[i].style.height="100px";
luys[i].style.margin="auto";
luys[i].style.marginTop="9px";
luys[i].style.border="2px solid black";
luys[i].style.borderRadius="100%";
luys[i].style.fontSize="72px";

luys[i].style.color="white";
luys[i].style.textAlign="center";
svet.appendChild(luys[i]);
}
luys[0].style.backgroundColor=guyn[0];

const change=ms=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(),ms)
  })
}


let j=0;
function svetafor(){
  if(j<3){
  luys[j].style.backgroundColor=guyn[j];
  change(2000).then(()=>{
    luys[j].style.backgroundColor="inherit";
    j++;
    
    svetafor();
    
    
  })
}
else{
  luys[2].style.backgroundColor=guyn[2];
}
}
let time=10;
let k=0;
function walktime(){
if(time!=0){
  if (time==2){
    svetafor();
  }
  luys[k].innerHTML=time;
  change(1000).then(()=>{
    time--;
    walktime();
  })
}
if(time==0){
  luys[0].innerHTML="";
  time=10;
}
}

button.onclick=function(){
  button.style.backgroundColor="green";
  walktime();
 
  change(12000).then(()=>{
    k=2;
    walktime();
  });
  change(22000).then(()=>{
    luys[2].style.backgroundColor="inherit";
    luys[2].innerHTML="";
    luys[0].style.backgroundColor=guyn[0];
    k=0;
    button.style.backgroundColor="grey";
    j=0;
  })
  
}
