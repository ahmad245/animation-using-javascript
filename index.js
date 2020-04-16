let container=document.querySelector('.container');
let  text = document.getElementById('text');

const totalTime=7500;
const breatheTime=(totalTime /5) *2;
const hold=totalTime/5;

const breatheIn=()=>{

    text.innerText='breathe In';
    container.className='container grow';
    setTimeout(() => {
        text.innerText='hold';
        setTimeout(() => {
            container.className='container shrink';
            text.innerText='breathe out';
        }, hold);
      



    }, breatheTime);
}
breatheIn();
setInterval(breatheIn, totalTime);