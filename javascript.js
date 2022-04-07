let pomodoro=[];
let minutes=0;
let hours=0;
let mandatoryHrArr=[]
let mandatoryMinArr=[]
let customHrArr=[]
let customMinArr=[]

let dateNow= ""; 
let dateTmr=""

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
    const caption1=document.createElement("caption")
        const tr1=document.createElement("tr")
            const col1=document.createElement("col")
            const col2=document.createElement("col")
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

        // second table for date schedule
        const table2=document.createElement("table")
        const caption2=document.createElement("caption")

        const tr2_1=document.createElement("tr")
            const col2_1=document.createElement("col")
            const col2_2=document.createElement("col")
            const col2_3=document.createElement("col")
        const tr2_2=document.createElement("tr")
            const td2_1=document.createElement("td")
            const th2_1=document.createElement("th")
            const th2_2=document.createElement("th")
        const tr2_3=document.createElement("tr")

            const th2_3=document.createElement("th")
            const td2_2=document.createElement("td")
            const td2_3=document.createElement("td")
        const tr2_4=document.createElement("tr")

            const th2_4=document.createElement("th")
            const td2_4=document.createElement("td")
            const td2_5=document.createElement("td")
        const tr2_5=document.createElement("tr")

            const th2_5=document.createElement("th")
            const td2_6=document.createElement("td")
            const td2_7=document.createElement("td")
        const tr2_6=document.createElement("tr")

            const th2_6=document.createElement("th")
            const td2_8=document.createElement("td")
            const td2_9=document.createElement("td")
        const tr2_7=document.createElement("tr")

            const th2_7=document.createElement("th")
            const td2_10=document.createElement("td")
            const td2_11=document.createElement("td")
        const tr2_8=document.createElement("tr")

            const td2_12=document.createElement("td")
            const td2_13=document.createElement("td")
            const td2_14=document.createElement("td")



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

const tr9class=document.createAttribute("class");
tr9class.value="totalCSS";
tr2_8.setAttributeNode(tr9class);


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
th3.textContent="!Study/Code!"
th4.textContent="Play Time"
th5.textContent="*Eat/Walk/Dishes*"
th6.textContent="Research/Important"
th7.textContent="Offline/Linux"

th2_1.textContent="From"
th2_2.textContent="To"
th2_3.textContent="!Study/Code!"
th2_4.textContent="Play Time"
th2_5.textContent="*Eat/Walk/Dishes*"
th2_6.textContent="Research/Important"
th2_7.textContent="Offline/Linux"



function appendTable(){

    body.appendChild(container)
        container.appendChild(table)
        table.appendChild(caption1)
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

    container.appendChild(table2)
        table2.appendChild(tr2_1)
        table2.appendChild(caption2)
            tr2_1.appendChild(col2_1)
            tr2_1.appendChild(col2_2)
            tr2_1.appendChild(col2_3)
        table2.appendChild(tr2_2)

            tr2_2.appendChild(td2_1)
            tr2_2.appendChild(th2_1)
            tr2_2.appendChild(th2_2)
        table2.appendChild(tr2_3)

            tr2_3.appendChild(th2_3)
            tr2_3.appendChild(td2_2)
            tr2_3.appendChild(td2_3)
        table2.appendChild(tr2_4)
            tr2_4.appendChild(th2_4)
            tr2_4.appendChild(td2_4)
            tr2_4.appendChild(td2_5)
        table2.appendChild(tr2_5)
            tr2_5.appendChild(th2_5)
            tr2_5.appendChild(td2_6)
            tr2_5.appendChild(td2_7)
        table2.appendChild(tr2_6)
            tr2_6.appendChild(th2_6)
            tr2_6.appendChild(td2_8)
            tr2_6.appendChild(td2_9)
        table2.appendChild(tr2_7)
            tr2_7.appendChild(th2_7)
            tr2_7.appendChild(td2_10)
            tr2_7.appendChild(td2_11)
        table2.appendChild(tr2_8)
            tr2_8.appendChild(td2_12)
            tr2_8.appendChild(td2_13)
            tr2_8.appendChild(td2_14)

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
    }
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
        }
    display()

})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = new FormData(form);
    pomodoro=[]
    for (const [name,value] of data) {
        pomodoro.push(value)
        console.log(`name,value: ${name,value}`)

    }

    display()

})

function display(){
    dateNow = new Date(); 
    check=pomodoro[2].split(":")
    if (check[0]>=12){
    dateTmr=new Date(`${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()} ` + pomodoro[2]);
    }else{
        dateTmr=new Date(`${dateNow.getFullYear()}-${dateNow.getMonth()+1}-${dateNow.getDate()+1} ` + pomodoro[2]);
    }

    minutes = pomodoro[1] * pomodoro[0];
    hours = minutes / 60;

    //#tmr
    let totalDate= new Date();
    totalDate.setMinutes(totalDate.getMinutes()-minutes)
    RemainingMiliseconds=(Math.abs(totalDate - dateTmr))
    RemainingMinutes=RemainingMiliseconds/60000
    RemainingHours=RemainingMinutes/60


  
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
        mandatoryHrArr.push(customhr*mandatoryRatio[i]).toFixed(2)
        mandatoryMinArr.push(custommin*mandatoryRatio[i]).toFixed(2)
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
            if((RemainingHours-(totalTemp1-customhr))<0){ //check if the calculation goes negative then automatically 0
                customHrArr.push(0)
                customMinArr.push(0)
            }else if (totalTemp1<RemainingHours){
                customHrArr.push(customhr)
                customMinArr.push(custommin)
            }else{
                console.log(`(RemainingHours-(${totalTemp1}-${customhr}))=${(RemainingHours-(totalTemp1-customhr))}`)
                customHrArr.push(RemainingHours-(totalTemp1-customhr))
                customMinArr.push(RemainingMinutes-(totalTemp2-custommin))
            }
            console.log(`totalTemp1:${totalTemp1}`)

        }else*/ 
        if (i==0){
            customHrArr.push(hours)
            customMinArr.push(minutes)
        }
        else if (totalTemp1 < RemainingHours){
            customHrArr.push(+(hours*customRatio[i-1]).toFixed(2))
            customMinArr.push(+(minutes*customRatio[i-1]).toFixed(2))
        }else{ //totalTemp1 > RemainingHours
            console.log(`(RemainingHours-(${totalTemp1}-${hours}))=${(RemainingHours-(totalTemp1-hours))}`)
            if((RemainingHours-(totalTemp1-hours))<0){ //check if the calculation goes negative then automatically 0
                customHrArr.push(0)
                customMinArr.push(0)
            }else{
                customHrArr.push(+((RemainingHours-(totalTemp1-hours))*customRatio[i-1].toFixed(2)))
                customMinArr.push(+((RemainingMinutes-(totalTemp2-minutes))*customRatio[i-1].toFixed(2)))
            }
        }
    }
    /*
    for(let i=0;i<1;i++){ //mandatoryRatio for mandatory hours
        mandatoryHrArr[i]=+(mandatoryHrArr[i]*mandatoryRatio[i]).toFixed(2)
        mandatoryMinArr[i]=+(mandatoryMinArr[i]*mandatoryRatio[i]).toFixed(2)
    }
    for(let i=1;i<3;i++){ //customRatio for custom hours [i-1] is to exclude study/code
        customHrArr[i]=+(customHrArr[i]*customRatio[i-1]).toFixed(2)
        customMinArr[i]=+(customMinArr[i]*customRatio[i-1]).toFixed(2)
    }
    */

    //custom pos[,,,3]
    const sum = mandatoryHrArr.reduce((partialSum, a) => partialSum + a, 0) +customHrArr.reduce((partialSum, a) => partialSum + a, 0);
    const sum2= mandatoryMinArr.reduce((partialSum, a) => partialSum + a, 0) + customMinArr.reduce((partialSum, a) => partialSum + a, 0);
    if (sum>RemainingHours){
        customHrArr.push(0)
        customMinArr.push(0)

    }else{
        customHrArr.push(+(RemainingHours-sum).toFixed(2))
        customMinArr.push(+(RemainingMinutes-sum2).toFixed(2))
    }
    //custom pos[,,,,4]
    const totalSum = mandatoryHrArr.reduce((partialSum, a) => partialSum + a, 0) + customHrArr.reduce((partialSum, a) => partialSum + a, 0);
    const totalSum2 = mandatoryMinArr.reduce((partialSum, a) => partialSum + a, 0) + customMinArr.reduce((partialSum, a) => partialSum + a, 0);

    customHrArr.push(+(totalSum).toFixed(2))
    customMinArr.push(+(totalSum2).toFixed(2))

    //just in case
    customHrArr[0]=+(customHrArr[0]).toFixed(2)

    caption1.textContent="Rough estimate!"
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

    //dateNow Time
    caption2.textContent="Today's schedule!"
    let tempDate= new Date();
    tempDate.setMinutes(tempDate.getMinutes()-customMinArr[0])
    let originDate = formatAMPM(tempDate);
    td2_2.textContent=`${formatAMPM(tempDate)}`
    td2_3.textContent=`${formatAMPM(dateNow)}`
    tempDate.setMinutes(tempDate.getMinutes()+customMinArr[0])
    dateNow.setMinutes(dateNow.getMinutes()+customMinArr[1])
    td2_4.textContent=`${formatAMPM(tempDate)}`
    td2_5.textContent=`${formatAMPM(dateNow)}`
    tempDate.setMinutes(tempDate.getMinutes()+customMinArr[1])
    dateNow.setMinutes(dateNow.getMinutes()+mandatoryMinArr[0])
    td2_6.textContent=`${formatAMPM(tempDate)}`
    td2_7.textContent=`${formatAMPM(dateNow)}`
    tempDate.setMinutes(tempDate.getMinutes()+mandatoryMinArr[0])
    dateNow.setMinutes(dateNow.getMinutes()+customMinArr[2])
    td2_8.textContent=`${formatAMPM(tempDate)}`
    td2_9.textContent=`${formatAMPM(dateNow)}`
    tempDate.setMinutes(tempDate.getMinutes()+customMinArr[2])
    dateNow.setMinutes(dateNow.getMinutes()+customMinArr[3])
    td2_10.textContent=`${formatAMPM(tempDate)}`
    td2_11.textContent=`${formatAMPM(dateNow)}`

    td2_13.textContent=`${originDate}`
    td2_14.textContent=`${formatAMPM(dateNow)}`




    underline.textContent = "Copy text to discord:"
    discordTextOuput.textContent =      "+-----------------{what I did today}--------------------+\n"+
    `Pomodoro (${pomodoro[0]} min): ${pomodoro[1]}` +"\n" +
    `Study/Code: ${customHrArr[0]} hours; ${customMinArr[0]} minutes  ` +"\n" +    
    `Play Time (x${customRatio[0]}): ${customHrArr[1]} hours; ${customMinArr[1]} minutes  `+"\n" +    
    `Eat/walk/dishes (x${mandatoryRatio[0]}): ${mandatoryHrArr[0]} hours; ${mandatoryMinArr[0]} minutes`+"\n" +    
    `Research/Important (x${customRatio[1]}): ${customHrArr[2]} hours;  ${customMinArr[2]} minutes`+"\n" +    
    `Offline/Linux: ${customHrArr[3]} hours; ${customMinArr[3]} minutes`+"\n" +
    "+-------------------------------------------------------+"


    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }


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
const div4=document.createElement("pre")
div4.textContent="! is exclusive \n* is mandatory"
const divclass=document.createAttribute("class")
divclass.value="fixed"
div4.setAttributeNode(divclass)
body.appendChild(div4)
