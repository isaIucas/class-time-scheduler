
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

const abutton1 =document.createElement("button")
const abutton2 =document.createElement("button")
const abutton3 =document.createElement("button")
const abutton4 =document.createElement("button")
const abutton4attr=document.createAttribute("class")
abutton4attr.value="button4size"
abutton4.setAttributeNode(abutton4attr)


abutton1.textContent="Important"
abutton2.textContent="Semi-Important"
abutton3.textContent="Free"
abutton4.textContent="Finish"


const paragraph1=document.createElement("pre")
const paragraph2=document.createElement("pre")
const paragraph3=document.createElement("pre")

const paragraphDate1=document.createElement("pre")
const paragraphDate2=document.createElement("pre")
const paragraphDate3=document.createElement("pre")

const information=document.createElement("pre")
information.textContent="Recording Now: "
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





const generalDiv =document.createElement("div")
    const message =document.createElement("div")
    const message2 =document.createElement("div")
    const adiv1 =document.createElement("div")
        const adiv1_1 =document.createElement("div")
        const adiv1_2 =document.createElement("div")
            const adiv1_2_1 =document.createElement("div")
            const adiv1_2_2 =document.createElement("div")
    const adiv2 =document.createElement("div")
        const adiv2_1 =document.createElement("div")
        const adiv2_2 =document.createElement("div")
            const adiv2_2_1 =document.createElement("div")
            const adiv2_2_2 =document.createElement("div")
    const adiv3 =document.createElement("div")
        const adiv3_1 =document.createElement("div")
        const adiv3_2 =document.createElement("div")
            const adiv3_2_1 =document.createElement("div")
            const adiv3_2_2 =document.createElement("div")

const generalDivAttr=document.createAttribute("class")
generalDivAttr.value="generalDiv"
generalDiv.setAttributeNode(generalDivAttr)

const message2Attr=document.createAttribute("class")
message2Attr.value="message"
message2.setAttributeNode(message2Attr)

const adiv1_2Attr=document.createAttribute("class")
adiv1_2Attr.value="adiv_2"
adiv1_2.setAttributeNode(adiv1_2Attr)
const adiv2_2Attr=document.createAttribute("class")
adiv2_2Attr.value="adiv_2"
adiv2_2.setAttributeNode(adiv2_2Attr)
const adiv3_2Attr=document.createAttribute("class")
adiv3_2Attr.value="adiv_2"
adiv3_2.setAttributeNode(adiv3_2Attr)

const adiv1_2_1Attr=document.createAttribute("class")
adiv1_2_1Attr.value="adiv_2_1"
adiv1_2_1.setAttributeNode(adiv1_2_1Attr)
const adiv2_2_1Attr=document.createAttribute("class")
adiv2_2_1Attr.value="adiv_2_1"
adiv2_2_1.setAttributeNode(adiv2_2_1Attr)
const adiv3_2_1Attr=document.createAttribute("class")
adiv3_2_1Attr.value="adiv_2_1"
adiv3_2_1.setAttributeNode(adiv3_2_1Attr)

const adiv1_2_2Attr=document.createAttribute("class")
adiv1_2_2Attr.value="adiv_2_2"
adiv1_2_2.setAttributeNode(adiv1_2_2Attr)
const adiv2_2_2Attr=document.createAttribute("class")
adiv2_2_2Attr.value="adiv_2_2"
adiv2_2_2.setAttributeNode(adiv2_2_2Attr)
const adiv3_2_2Attr=document.createAttribute("class")
adiv3_2_2Attr.value="adiv_2_2"
adiv3_2_2.setAttributeNode(adiv3_2_2Attr)


body.appendChild(generalDiv)
    generalDiv.appendChild(message)
    generalDiv.appendChild(message2)

        message.appendChild(information)
        message2.appendChild(adiv1) 
            adiv1.appendChild(adiv1_1) 
                adiv1_1.appendChild(abutton1) // important button
            adiv1.appendChild(adiv1_2)
                adiv1_2.appendChild(adiv1_2_1) 
                    adiv1_2_1.appendChild(paragraphDate1)//column: AM PM
                adiv1_2.appendChild(adiv1_2_2)
                    adiv1_2_2.appendChild(paragraph1) //column: min/hr
        message2.appendChild(adiv2)
            adiv2.appendChild(adiv2_1) 
                adiv2_1.appendChild(abutton2)// semi-important button
            adiv2.appendChild(adiv2_2)
                adiv2_2.appendChild(adiv2_2_1) 
                    adiv2_2_1.appendChild(paragraphDate2)//column: AM PM
                adiv2_2.appendChild(adiv2_2_2) 
                    adiv2_2_2.appendChild(paragraph2) //column: min/hr

        message2.appendChild(adiv3)
            adiv3.appendChild(adiv3_1) 
                adiv3_1.appendChild(abutton3) //free button
            adiv3.appendChild(adiv3_2)
                adiv3_2.appendChild(adiv3_2_1) 
                    adiv3_2_1.appendChild(paragraphDate3)//column: AM PM
                adiv3_2.appendChild(adiv3_2_2) 
                    adiv3_2_2.appendChild(paragraph3) //column: min/hr

    generalDiv.appendChild(abutton4) //finish button
    generalDiv.appendChild(result)



let start1Boolean=false;
let start2Boolean=false;
let start3Boolean=false;
let start1=[]
let start2=[]
let start3=[]
let elapsed1=[]
let elapsed2=[]
let elapsed3=[]

let timeDuration1=[]
let timeDuration2=[]
let timeDuration3=[]
let recordingNow=""
let previousRecording=""

function display(){
    paragraph1.textContent=""
    paragraph2.textContent=""
    paragraph3.textContent=""
    paragraphDate1.textContent=""
    paragraphDate2.textContent=""
    paragraphDate3.textContent=""
    console.log(`display elapsed1: ${elapsed1}`)
    console.log(`display elapsed2: ${elapsed2}`)
    console.log(`display elapsed3: ${elapsed3}`)

    //manipulate timeDuration1
    for(let i=0;i<timeDuration1.length;i++){
        paragraphDate1.textContent+=`${formatAMPM(start1[i])} ~ ${formatAMPM(elapsed1[i])} \n`
        paragraph1.textContent+=`${displayMinOrHr(timeDuration1[i])} \n`
    }

    for(let i=0;i<timeDuration2.length;i++){
        paragraphDate2.textContent+=`${formatAMPM(start2[i])} ~ ${formatAMPM(elapsed2[i])} \n`
        paragraph2.textContent+=`${displayMinOrHr(timeDuration2[i])} \n`


    }
    for(let i=0;i<timeDuration3.length;i++){
        paragraphDate3.textContent+=`${formatAMPM(start2[i])} ~ ${formatAMPM(elapsed2[i])} \n`
        paragraph3.textContent+=`${displayMinOrHr(timeDuration3[i])} \n`


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
        elapsed2.push(new Date())

    }else if (start3Boolean===true){
        previousRecording="Free"
        start3Boolean=false
        timeDuration3.push(+((new Date() - start3[start3.length-1])/60000).toFixed(3))
        elapsed3.push(new Date())

    }
    abutton1.disabled=true;
    abutton2.disabled=false;
    abutton3.disabled=false;
    start1Boolean=true;
    start1.push(new Date());

    recordingNow="Important"
    display()
    console.log(`start1:${start1}`)
    console.log(`start2:${start2}`)
    console.log(`start3:${start3}`)
    console.log(`elapsed1: ${elapsed1}`)
    console.log(`elapsed2: ${elapsed2}`)
    console.log(`elapsed3: ${elapsed3}`)
})
abutton2.addEventListener("click",()=>{

    console.log("Semi-Important clicked")

    if (start1Boolean===true){
        previousRecording="Important"
        start1Boolean=false
        timeDuration1.push(+((new Date() - start1[start1.length-1])/60000).toFixed(3))
        elapsed1.push(new Date())


    }else if (start3Boolean===true){
        previousRecording="Free"
        start3Boolean=false
        timeDuration3.push(+((new Date() - start3[start3.length-1])/60000).toFixed(3))
        elapsed3.push(new Date())

    }

    abutton1.disabled=false;
    abutton2.disabled=true;
    abutton3.disabled=false;
    start2Boolean=true;

    start2.push(new Date());
    recordingNow="Semi-Important"
    display()
    console.log(`start1:${start1}`)
    console.log(`start2:${start2}`)
    console.log(`start3:${start3}`)
    console.log(`elapsed1: ${elapsed1}`)
    console.log(`elapsed2: ${elapsed2}`)
    console.log(`elapsed3: ${elapsed3}`)
})
abutton3.addEventListener("click",()=>{

    console.log("Free clicked")
    if (start1Boolean===true){

        previousRecording="Important"

        start1Boolean=false
        timeDuration1.push(+((new Date() - start1[start1.length-1])/60000).toFixed(3))
            elapsed1.push(new Date())

    }else if (start2Boolean===true){
        previousRecording="Semi-Important"

        start2Boolean=false
        timeDuration2.push(+((new Date() - start2[start2.length-1])/60000).toFixed(3))
            elapsed2.push(new Date())
    }

    abutton1.disabled=false;
    abutton2.disabled=false;
    abutton3.disabled=true;
    start3Boolean=true;
    start3.push(new Date());

    recordingNow="Free"
    display()
    console.log(`start1:${start1}`)
    console.log(`start2:${start2}`)
    console.log(`start3:${start3}`)
    console.log(`elapsed1: ${elapsed1}`)
    console.log(`elapsed2: ${elapsed2}`)
    console.log(`elapsed3: ${elapsed3}`)
})

abutton4.addEventListener("click",()=>{
    console.log("Finish clicked")
    
    if (start1Boolean===true){
        start1Boolean==false
        timeDuration1.push(+((new Date() - start1[start1.length-1])/60000).toFixed(3))
        elapsed1.push(new Date())


    }else if (start2Boolean===true){
        start2Boolean==false
        timeDuration2.push(+((new Date() - start2[start2.length-1])/60000).toFixed(3))
        elapsed2.push(new Date())


    }else if (start3Boolean===true){
        start3Boolean==false
        timeDuration3.push(+((new Date() - start3[start3.length-1])/60000).toFixed(3))
        elapsed3.push(new Date())

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
    result.textContent= `!Total Result!\n Important: ${displayMinOrHr(totalNum1)} \n Semi-Important: ${displayMinOrHr(totalNum2)} \n Free: ${displayMinOrHr(totalNum3)}`
}

})

