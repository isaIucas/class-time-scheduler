let pomodoro=[];
let minutes=0;
let hours=0;
let mandatoryHrArr=[]
let mandatoryMinArr=[]
let customHrArr=[]
let customMinArr=[]

let date= ""; 
let date2=""

mandatoryRatio=[1]
customRatio=[1,1,1]

const form= document.querySelector("form")
const body= document.querySelector("body")

const container=document.createElement("div")
const attr1=document.createAttribute("class");
attr1.value="container";
container.setAttributeNode(attr1);

const button=document.createElement("input")

    const table=document.createElement("table")
        const tr1=document.createElement("tr")
            const col1=document.createElement("col")
            const col2=document.createElement("col")
            const attr2=document.createAttribute("style");
            attr2.value="border: 1px solid red";
            col2.setAttributeNode(attr2);
            const col3=document.createElement("col")
        const tr2=document.createElement("tr")
            const td1=document.createElement("td")
            const th1=document.createElement("th")
            const th2=document.createElement("th")
        const tr3=document.createElement("tr")

            const th3=document.createElement("th")
            const td2=document.createElement("td")
            const td3=document.createElement("td")
        const tr4=document.createElement("tr")

            const th4=document.createElement("th")
            const td4=document.createElement("td")
            const td5=document.createElement("td")
        const tr5=document.createElement("tr")

            const th5=document.createElement("th")
            const td6=document.createElement("td")
            const td7=document.createElement("td")
        const tr6=document.createElement("tr")

            const th6=document.createElement("th")
            const td8=document.createElement("td")
            const td9=document.createElement("td")
        const tr7=document.createElement("tr")

            const th7=document.createElement("th")
            const td10=document.createElement("td")
            const td11=document.createElement("td")
        const tr8=document.createElement("tr")

            const td12=document.createElement("td")
            const td13=document.createElement("td")
            const td14=document.createElement("td")



const chartContainer=document.createElement("div")
const chart=document.createElement("div")
const attr3=document.createAttribute("id");
attr3.value="container";
chart.setAttributeNode(attr3);

const form2=document.createElement("form")
const form2attr1=document.createAttribute("action")
form2attr1.value=""
form2.setAttributeNode(form2attr1)
const form2attr2=document.createAttribute("class")
form2attr2.value="form2"
form2.setAttributeNode(form2attr2)

const form3=document.createElement("form")
const form3attr1=document.createAttribute("action")
form3attr1.value=""
form3.setAttributeNode(form3attr1)
const form3attr2=document.createAttribute("class")
form3attr2.value="form3"
form3.setAttributeNode(form3attr2)


const input1=document.createElement("input")
const input1type1=document.createAttribute("type");
input1type1.value="number";
const input1type2=document.createAttribute("name");
input1type2.value="customRatio";
const input1type3=document.createAttribute("min");
input1type3.value=".1";
const input1type4=document.createAttribute("max");
input1type4.value="20";
const input1type5=document.createAttribute("value");
input1type5.value="1";
const input1type6=document.createAttribute("class");
input1type6.value="customRatio";
const input1type7=document.createAttribute("step");
input1type7.value=".1";
const input1type8=document.createAttribute("id");
input1type8.value="des";

const ratioLabel1=document.createElement("label")
const ratioLabeltype1=document.createAttribute("for");
ratioLabeltype1.value="des";
ratioLabel1.textContent=" x";

//check later
const input2=document.createElement("input")
const input2type1=document.createAttribute("type");
input2type1.value="number";
const input2type2=document.createAttribute("name");
input2type2.value="mandatoryRatio";
const input2type3=document.createAttribute("min");
input2type3.value=".1";
const input2type4=document.createAttribute("max");
input2type4.value="20";
const input2type5=document.createAttribute("value");
input2type5.value="1";
const input2type6=document.createAttribute("class");
input2type6.value="mandatoryRatio";
const input2type7=document.createAttribute("step");
input2type7.value=".1";
const input2type8=document.createAttribute("id");
input1type8.value="des";

const ratioLabel2=document.createElement("label")
const ratioLabeltype2=document.createAttribute("for");
ratioLabeltype2.value="des";
ratioLabel2.textContent=" x";

const input3=document.createElement("input")
const input3type1=document.createAttribute("type");
input3type1.value="number";
const input3type2=document.createAttribute("name");
input3type2.value="customRatio";
const input3type3=document.createAttribute("min");
input3type3.value=".1";
const input3type4=document.createAttribute("max");
input3type4.value="20";
const input3type5=document.createAttribute("value");
input3type5.value="1";
const input3type6=document.createAttribute("class");
input3type6.value="customRatio";
const input3type7=document.createAttribute("step");
input3type7.value=".1";
const input3type8=document.createAttribute("id");
input1type8.value="des";

const ratioLabel3=document.createElement("label")
const ratioLabeltype3=document.createAttribute("for");
ratioLabeltype3.value="des";
ratioLabel3.textContent=" x";

const submit=document.createElement("button")
submit.textContent="Submit"
const class1=document.createAttribute("class");
class1.value="buttonsubmit";
submit.setAttributeNode(class1);

const tr8class=document.createAttribute("class");
tr8class.value="totalCSS";
tr8.setAttributeNode(tr8class);


input1.setAttributeNode(input1type1);
input1.setAttributeNode(input1type2);
input1.setAttributeNode(input1type3);
input1.setAttributeNode(input1type4);
input1.setAttributeNode(input1type5);
input1.setAttributeNode(input1type6);
input1.setAttributeNode(input1type7);
input1.setAttributeNode(input1type8);
ratioLabel1.setAttributeNode(ratioLabeltype1)


input2.setAttributeNode(input2type1);
input2.setAttributeNode(input2type2);
input2.setAttributeNode(input2type3);
input2.setAttributeNode(input2type4);
input2.setAttributeNode(input2type5);
input2.setAttributeNode(input2type6);
input2.setAttributeNode(input2type7);
ratioLabel2.setAttributeNode(ratioLabeltype2)



input3.setAttributeNode(input3type1);
input3.setAttributeNode(input3type2);
input3.setAttributeNode(input3type3);
input3.setAttributeNode(input3type4);
input3.setAttributeNode(input3type5);
input3.setAttributeNode(input3type6);
input3.setAttributeNode(input3type7);
ratioLabel3.setAttributeNode(ratioLabeltype3)


const div1=document.createElement("div")
const div2=document.createElement("div")
const div3=document.createElement("div")


container.appendChild(form2)
form2.appendChild(div1)
div1.appendChild(input1)
div1.appendChild(ratioLabel1)
form2.appendChild(div2)
div2.appendChild(input2)
div2.appendChild(ratioLabel2)
form2.appendChild(div3)
div3.appendChild(input3)
div3.appendChild(ratioLabel3)
form2.appendChild(submit)

th1.textContent="Hours"
th2.textContent="Minutes"
th3.textContent="*Study/Code*"
th4.textContent="Play Time"
th5.textContent="*Eat/Walk/Dishes*"
th6.textContent="Research/Important"
th7.textContent="Offline/Linux"



function appendTable(){

    body.appendChild(container)
        container.appendChild(table)
            table.appendChild(tr1)
                tr1.appendChild(col1)
                tr1.appendChild(col2)

                tr1.appendChild(col3)
            table.appendChild(tr2)

                tr2.appendChild(td1)
                tr2.appendChild(th1)
                tr2.appendChild(th2)
            table.appendChild(tr3)

                tr3.appendChild(th3)
                tr3.appendChild(td2)
                tr3.appendChild(td3)
            table.appendChild(tr4)
                tr4.appendChild(th4)
                tr4.appendChild(td4)
                tr4.appendChild(td5)
            table.appendChild(tr5)
                tr5.appendChild(th5)
                tr5.appendChild(td6)
                tr5.appendChild(td7)
            table.appendChild(tr6)
                tr6.appendChild(th6)
                tr6.appendChild(td8)
                tr6.appendChild(td9)
            table.appendChild(tr7)
                tr7.appendChild(th7)
                tr7.appendChild(td10)
                tr7.appendChild(td11)
            table.appendChild(tr8)
                tr8.appendChild(td12)
                tr8.appendChild(td13)
                tr8.appendChild(td14)
           let anyChartSpammer=document.querySelector("#container")
            let anychartNull= anyChartSpammer!=null
            if(anychartNull){
                anyChartSpammer.removeChild(anyChartSpammer.firstChild)

            }


            

        container.appendChild(chartContainer)
            chartContainer.appendChild(chart)

}

function reset(){
    mandatoryHrArr=[]
    mandatoryMinArr=[]
    customHrArr=[]
    customMinArr=[]
}

const discord=document.createElement("div")
const underline=document.createElement("u")


const wrapper=document.createElement("div")
const attr4=document.createAttribute("class");
attr4.value="wrapper";
wrapper.setAttributeNode(attr4);
const discordTextOuput=document.createElement("pre")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = new FormData(form);
    pomodoro=[]
    for (const [name,value] of data) {
        pomodoro.push(value)
        //console.log(`name,value: ${name,value}`)

    }
    //#tmr
    date = new Date(); 
    date2=new Date(`${date.getFullYear()}-${date.getDate()}-${date.getMonth()+2} ` + pomodoro[2]);

    display()

})

form2.addEventListener("submit", function(e) {
    
    e.preventDefault();
    var data = new FormData(form2);
    customRatio=[]
    mandatoryRatio=[]
    for (const [name,value] of data) {
        if (name==="customRatio"){
            customRatio.push(value) 
        }else{
            mandatoryRatio.push(value)
        }
        console.log(`name: ${name}`)
        console.log(`value: ${value}`)
    }
    console.log(`!customRatio: ${customRatio}`)
    console.log(`!mandatoryRatio: ${mandatoryRatio}`)
    display()

})

form3.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = new FormData(form2);
    customRatio=[]
    mandatoryRatio=[]
    for (const [name,value] of data) {
        customRatio.push(value) 
        console.log(`name,value: ${name,value}`)
        console.log("nani3")
        }
    display()

})



function display(){
    //#tmr
    RemainingMiliseconds=(Math.abs(date - date2))
    RemainingMinutes=RemainingMiliseconds/60000
    RemainingHours=RemainingMinutes/60

    minutes = pomodoro[1] * pomodoro[0];
    hours = minutes / 60;
    appendTable();

    body.appendChild(discord)
    discord.appendChild(underline)
    body.appendChild(wrapper)
    wrapper.appendChild(discordTextOuput)

    reset()
    let totalTemp1=0
    let totalTemp2=0
    //[eat/walk/dishes] pos[0]
    for(let i=0;i<1;i++){
        customhr=2;
        custommin=120;
        totalTemp1 += customhr;
        totalTemp2 += custommin;
        mandatoryHrArr.push(customhr)
        mandatoryMinArr.push(custommin)
    }

    //Study/code is part of customHrArr but is a special case since the number relates to research and play time
    //[study, play, research] custom pos[0,1,2, ]
    for(let i=0;i<3;i++){ 
        totalTemp1 += hours
        totalTemp2 += minutes
        //console.log(`totalTemp1:${totalTemp1}`)
        /* stored this code just in case of future custom feature that requires this pattern
        if(i==2){//index 2 is it's own contained pattern
            customhr=2;
            custommin=120;
            totalTemp1 -= hours 
            totalTemp2 -= minutes;
            totalTemp1 += customhr;
            totalTemp2 += custommin;
            if((15-(totalTemp1-customhr))<0){ //check if the calculation goes negative then automatically 0
                customHrArr.push(0)
                customMinArr.push(0)
            }else if (totalTemp1<15){
                customHrArr.push(customhr)
                customMinArr.push(custommin)
            }else{
                console.log(`(15-(${totalTemp1}-${customhr}))=${(15-(totalTemp1-customhr))}`)
                customHrArr.push(15-(totalTemp1-customhr))
                customMinArr.push(900-(totalTemp2-custommin))
            }
            console.log(`totalTemp1:${totalTemp1}`)

        }else*/ 
        if (totalTemp1 < 15){
            customHrArr.push(hours)
            customMinArr.push(minutes)
        }else{ //totalTemp1 > 15
            console.log(`(15-(${totalTemp1}-${hours}))=${(15-(totalTemp1-hours))}`)
            if((15-(totalTemp1-hours))<0){ //check if the calculation goes negative then automatically 0
                customHrArr.push(0)
                customMinArr.push(0)
            }else{
                customHrArr.push(15-(totalTemp1-hours))
                customMinArr.push(900-(totalTemp2-minutes))
            }
        }
    }
    for(let i=0;i<1;i++){ //mandatoryRatio for mandatory hours
        mandatoryHrArr[i]=+(mandatoryHrArr[i]*mandatoryRatio[i]).toFixed(2)
        mandatoryMinArr[i]=+(mandatoryMinArr[i]*mandatoryRatio[i]).toFixed(2)
    }
    for(let i=1;i<3;i++){ //customRatio for custom hours [i-1] is to exclude study/code
        customHrArr[i]=+(customHrArr[i]*customRatio[i-1]).toFixed(2)
        customMinArr[i]=+(customMinArr[i]*customRatio[i-1]).toFixed(2)
    }

    //custom pos[,,,3]
    console.log(`mandatoryHrArr: ${mandatoryHrArr}`)
    console.log(`customHrArr: ${customHrArr}`)
    const sum = mandatoryHrArr.reduce((partialSum, a) => partialSum + a, 0) +customHrArr.reduce((partialSum, a) => partialSum + a, 0);
    const sum2= mandatoryMinArr.reduce((partialSum, a) => partialSum + a, 0) + customMinArr.reduce((partialSum, a) => partialSum + a, 0);
    if (sum>15){
        customHrArr.push(0)
        customMinArr.push(0)

    }else{
        customHrArr.push(+(15-sum).toFixed(2))
        customMinArr.push(+(900-sum2).toFixed(2))
    }
    console.log(`mandatoryHrArr: ${mandatoryHrArr}`)
    console.log(`customHrArr: ${customHrArr}`)
    //custom pos[,,,,4]
    const totalSum = mandatoryHrArr.reduce((partialSum, a) => partialSum + a, 0) + customHrArr.reduce((partialSum, a) => partialSum + a, 0);
    const totalSum2 = mandatoryMinArr.reduce((partialSum, a) => partialSum + a, 0) + customMinArr.reduce((partialSum, a) => partialSum + a, 0);

    customHrArr.push(+(totalSum).toFixed(2))
    customMinArr.push(+(totalSum2).toFixed(2))

    //just in case
    customHrArr[0]=+(customHrArr[0]).toFixed(2)





    td2.textContent=`${customHrArr[0]}`
    td3.textContent=`${customMinArr[0]}`
    td4.textContent=`${customHrArr[1]}`
    td5.textContent=`${customMinArr[1]}`
    td6.textContent=`${mandatoryHrArr[0]}`
    td7.textContent=`${mandatoryMinArr[0]}`
    td8.textContent=`${customHrArr[2]}`
    td9.textContent=`${customMinArr[2]}`
    td10.textContent=`${customHrArr[3]}`
    td11.textContent=`${customMinArr[3]}`
    td13.textContent=`${customHrArr[4]}`
    td14.textContent=`${customMinArr[4]}`

    underline.textContent = "Copy text to discord:"
    discordTextOuput.textContent =      "+-----------------{what I did today}--------------------+\n"+
    `Pomodoro (${pomodoro[0]} min): ${pomodoro[1]}` +"\n" +
    `Study/Code: ${customHrArr[0]} hours; ${customMinArr[0]} minutes  ` +"\n" +    
    `Play Time (x${customRatio[0]}): ${customHrArr[1]} hours; ${customMinArr[1]} minutes  `+"\n" +    
    `Eat/walk/dishes (x${customRatio[1]}): ${mandatoryHrArr[0]} hours; ${mandatoryMinArr[0]} minutes`+"\n" +    
    `Research/Important (x${customRatio[2]}): ${customHrArr[2]} hours;  ${customMinArr[2]} minutes`+"\n" +    
    `Offline/Linux: ${customHrArr[3]} hours; ${customMinArr[3]} minutes`+"\n" +
    "+-------------------------------------------------------+"





    anychart.onDocumentReady(function() {

        // set the data
        let data = [
            {x: "Study/Code", value: customHrArr[0]},
            {x: "Play Time", value: customHrArr[1]},
            {x: "Eat/walk/dishes", value: mandatoryHrArr[0]},
            {x: "Research/Important", value: customHrArr[2]},
            {x: "Offline/Linux", value: customHrArr[3]},
        ];

        // create the pieChart
        let pieChart = anychart.pie();
      
        // set the pieChart title
        pieChart.title("Time Schedule");
      
        // add the data
        pieChart.data(data);
      
        // display the pieChart in the container
        pieChart.container('container');
        pieChart.draw();

        
      });

      let hasSVG = document.querySelector("svg") != null
      if (hasSVG){
          body.querySelector("svg").remove()
      }
      /*
      svg.addEventListener("onmouseenter",e=>{
        console.log(e)
    }, {once : true});
    */
    //bug fix potential!!!!I may want to try body[1] to find SVG to delete!!!!
}

//instruction
const div4=document.createElement("div")
div4.textContent="Study/Code and Eat/walk/dishes is mandatory!"
const divclass=document.createAttribute("class")
divclass.value="fixed"
div4.setAttributeNode(divclass)
body.appendChild(div4)
