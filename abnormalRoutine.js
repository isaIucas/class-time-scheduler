
abnormalRoutine.addEventListener("click", ()=>{
    abnormalRoutine.disabled=true;
    normalRoutine.disabled=false;
    const nodeList = document.body.childNodes;
    let number = nodeList.length;
    /*
    console.log(number)
    //onsole.log(body.lastChild)
    for (let i = 0; i < nodeList.length; i++) { 
        console.log(nodeList[i]); 
    }
    */
    while(nodeList.length>5){
        body.removeChild(body.lastChild)
    }

const adiv = document.createElement("div")
const adiv2 = document.createElement("div")
const abutton1 =document.createElement("button")
const abutton2 =document.createElement("button")
const abutton3 =document.createElement("button")
const abutton4 =document.createElement("button")

abutton1.textContent="Important"
abutton2.textContent="Semi-Important"
abutton3.textContent="Free"
abutton4.textContent="Finish"


const paragraph1=document.createElement("pre")
const paragraph2=document.createElement("pre")
const paragraph3=document.createElement("pre")

const information=document.createElement("pre")
information.textContent=""
const infoclass=document.createAttribute("class")
infoclass.value="absolute"
information.setAttributeNode(infoclass)
body.appendChild(information)

const result=document.createElement("pre")
result.textContent=""
const resultclass=document.createAttribute("class")
resultclass.value="resultabsolute"
result.setAttributeNode(resultclass)
body.appendChild(result)

body.appendChild(adiv)
adiv.appendChild(abutton1)
adiv.appendChild(abutton2)
adiv.appendChild(abutton3)
adiv.appendChild(abutton4)

const adiv2class=document.createAttribute("class")
adiv2class.value="divcontainer"
adiv2.setAttributeNode(adiv2class)


body.appendChild(adiv2)
adiv2.appendChild(paragraph1)
adiv2.appendChild(paragraph2)
adiv2.appendChild(paragraph3)

let start1Boolean=false;
let start2Boolean=false;
let start3Boolean=false;
let start1=[]
let start2=[]
let start3=[]
let timeDuration1=[]
let timeDuration2=[]
let timeDuration3=[]
let recordingNow=""
let previousRecording=""

function display(){
    paragraph1.textContent="Important\n"
    paragraph2.textContent="Semi-Important\n"
    paragraph3.textContent="Free\n"
    for(let i=0;i<timeDuration1.length;i++){
        paragraph1.textContent+=`${timeDuration1[i]} minutes\n`
    }

    for(let i=0;i<timeDuration2.length;i++){
        paragraph2.textContent+=`${timeDuration2[i]} minutes\n`

    }
    for(let i=0;i<timeDuration3.length;i++){
        paragraph3.textContent+=`${timeDuration3[i]} minutes\n`

    }
    information.textContent=`Recording Now: ${recordingNow}\n Previous Record: ${previousRecording}`

}
console.log(`timeDuration1:${timeDuration1}`)
console.log(`timeDuration2:${timeDuration2}`)
console.log(`timeDuration3:${timeDuration3}`)


abutton1.addEventListener("click",()=>{
    console.log("Important clicked")
    if (start2Boolean===true){
        previousRecording="Semi-Important"
        start2Boolean=false
        timeDuration2.push(+((new Date() - start2[start2.length-1])/60000).toFixed(3))
        console.log(`start1Boolean:${timeDuration1}`)

    }else if (start3Boolean===true){
        previousRecording="Free"
        start3Boolean=false
        timeDuration3.push(+((new Date() - start3[start3.length-1])/60000).toFixed(3))

    }
    abutton1.disabled=true;
    abutton2.disabled=false;
    abutton3.disabled=false;
    start1Boolean=true;
    start1.push(new Date());
    recordingNow="Important"
    display()

})
abutton2.addEventListener("click",()=>{
    console.log("Semi-Important clicked")

    if (start1Boolean===true){
        previousRecording="Important"
        start1Boolean=false
        timeDuration1.push(+((new Date() - start1[start1.length-1])/60000).toFixed(3))

    }else if (start3Boolean===true){
        previousRecording="Free"
        start3Boolean=false
        timeDuration3.push(+((new Date() - start3[start3.length-1])/60000).toFixed(3))

    }

    abutton1.disabled=false;
    abutton2.disabled=true;
    abutton3.disabled=false;
    start2Boolean=true;

    start2.push(new Date());
    recordingNow="Semi-Important"
    display()

})
abutton3.addEventListener("click",()=>{
    console.log("Free clicked")
    if (start1Boolean===true){
        previousRecording="Important"

        start1Boolean=false
        timeDuration1.push(+((new Date() - start1[start1.length-1])/60000).toFixed(3))

    }else if (start2Boolean===true){
        previousRecording="Semi-Important"

        start2Boolean=false
        timeDuration2.push(+((new Date() - start2[start2.length-1])/60000).toFixed(3))

    }

    abutton1.disabled=false;
    abutton2.disabled=false;
    abutton3.disabled=true;
    start3Boolean=true;
    start3.push(new Date());

    recordingNow="Free"
    display()

})

abutton4.addEventListener("click",()=>{
    console.log("Finish clicked")
    
    if (start1Boolean===true){
        start1Boolean==false
        timeDuration1.push(+((new Date() - start1[start1.length-1])/60000).toFixed(3))

    }else if (start2Boolean===true){
        start2Boolean==false
        timeDuration2.push(+((new Date() - start2[start2.length-1])/60000).toFixed(3))

    }else if (start3Boolean===true){
        start3Boolean==false
        timeDuration3.push(+((new Date() - start3[start3.length-1])/60000).toFixed(3))
    }
    display()

    abutton1.disabled=true;
    abutton2.disabled=true;
    abutton3.disabled=true;
    abutton4.disabled=true;
    RecordingNow=""
    displayResult()

})
function displayResult(){
    let totalNum1=0
    let totalNum2=0
    let totalNum3=0
    console.log(timeDuration1)
    console.log(timeDuration2)
    console.log(timeDuration3)

    for(let i=0;i<timeDuration1.length;i++){
        totalNum1+=timeDuration1[i]
    }

    for(let i=0;i<timeDuration2.length;i++){
        totalNum2+=timeDuration2[i]

    }
    for(let i=0;i<timeDuration3.length;i++){
        totalNum3+=timeDuration3[i]
    }
    information.textContent=`Recording Now: ${recordingNow}\n Previous Record: ${previousRecording}`
    result.textContent= `!Total Result!\n Important: ${totalNum1}\n Semi-Important: ${totalNum2}\n Free: ${totalNum3}`
}

})

