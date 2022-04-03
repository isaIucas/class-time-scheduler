let pomodoro=0;
let minutes=0;
let hours=0;
let totalHrs=0;
let totalMins=0;
let arr=[]
let arr2=[]

let studyHrs=0;
let playHrs=0;
let researchHrs=0;
let offlineHrs=0;

ratio=[1,1,1,1]

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
const input1=document.createElement("input")
const input1type1=document.createAttribute("type");
input1type1.value="number";
const input1type2=document.createAttribute("name");
input1type2.value="number";
const input1type3=document.createAttribute("min");
input1type3.value="1";
const input1type4=document.createAttribute("max");
input1type4.value="20";
const input1type5=document.createAttribute("value");
input1type5.value="1";
const input1type6=document.createAttribute("class");
input1type6.value="ratio";

const input2=document.createElement("input")
const input2type1=document.createAttribute("type");
input2type1.value="number";
const input2type2=document.createAttribute("name");
input2type2.value="number";
const input2type3=document.createAttribute("min");
input2type3.value="1";
const input2type4=document.createAttribute("max");
input2type4.value="20";
const input2type5=document.createAttribute("value");
input2type5.value="1";
const input2type6=document.createAttribute("class");
input2type6.value="ratio";

const input3=document.createElement("input")
const input3type1=document.createAttribute("type");
input3type1.value="number";
const input3type2=document.createAttribute("name");
input3type2.value="number";
const input3type3=document.createAttribute("min");
input3type3.value="1";
const input3type4=document.createAttribute("max");
input3type4.value="20";
const input3type5=document.createAttribute("value");
input3type5.value="1";
const input3type6=document.createAttribute("class");
input3type6.value="ratio";

const input4=document.createElement("input")
const input4type1=document.createAttribute("type");
input4type1.value="number";
const input4type2=document.createAttribute("name");
input4type2.value="number";
const input4type3=document.createAttribute("min");
input4type3.value="1";
const input4type4=document.createAttribute("max");
input4type4.value="20";
const input4type5=document.createAttribute("value");
input4type5.value="1";
const submit=document.createElement("button")
submit.textContent="Submit"
const input4type6=document.createAttribute("class");
input4type6.value="ratio";


input1.setAttributeNode(input1type1);
input1.setAttributeNode(input1type2);
input1.setAttributeNode(input1type3);
input1.setAttributeNode(input1type4);
input1.setAttributeNode(input1type5);
input1.setAttributeNode(input1type6);


input2.setAttributeNode(input2type1);
input2.setAttributeNode(input2type2);
input2.setAttributeNode(input2type3);
input2.setAttributeNode(input2type4);
input2.setAttributeNode(input2type5);
input2.setAttributeNode(input2type6);



input3.setAttributeNode(input3type1);
input3.setAttributeNode(input3type2);
input3.setAttributeNode(input3type3);
input3.setAttributeNode(input3type4);
input3.setAttributeNode(input3type5);
input3.setAttributeNode(input3type6);



input4.setAttributeNode(input4type1);
input4.setAttributeNode(input4type2);
input4.setAttributeNode(input4type3);
input4.setAttributeNode(input4type4);
input4.setAttributeNode(input4type5);
input4.setAttributeNode(input4type6);


/*
const container2=document.createElement("div");
const container2Class=document.createAttribute("class");
container2Class.value="container2"
container2.setAttributeNode(container2Class)
container.appendChild(container2)
container2.appendChild(form2)
*/
container.appendChild(form2)
form2.appendChild(input1)
form2.appendChild(input2)
form2.appendChild(input3)
form2.appendChild(input4)
form2.appendChild(submit)

th1.textContent="Hours"
th2.textContent="Minutes"
th3.textContent="Study/Code"
th4.textContent="Play Time"
th5.textContent="Eat/Walk/Dishes"
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
           //console.log(document.querySelector("#container"))
           let anyChartSpammer=document.querySelector("#container")
            let anychartNull= anyChartSpammer!=null
            if(anychartNull){
                anyChartSpammer.removeChild(anyChartSpammer.firstChild)

            }


            
            //console.log(document.querySelector("#container"))

        container.appendChild(chartContainer)
            chartContainer.appendChild(chart)
            //console.log(document.querySelector("#container"))

}

function reset(){
    totalHrs=0;
    totalMins=0;
    arr=[]
    arr2=[]
}

const discord=document.createElement("div")
const underline=document.createElement("u")


const wrapper=document.createElement("div")
const attr4=document.createAttribute("class");
attr4.value="wrapper";
wrapper.setAttributeNode(attr4);
const pomodoroNum=document.createElement("pre")

form2.addEventListener("submit", function(e) {
    
    e.preventDefault();
    var data = new FormData(form2);
    ratio=[]
    for (const [name,value] of data) {
        ratio.push(value) 
        console.log(`name,value: ${name,value}`)
    }
    console.log(ratio)
    display()

})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = new FormData(form);
    for (const [name,value] of data) {
        pomodoro = value
        console.log(`name,value: ${name,value}`)
    }

    display()

})

function display(){
    console.log("hello??")
    minutes = pomodoro * 30;
    hours = minutes / 60;
    appendTable();

    body.appendChild(discord)
    discord.appendChild(underline)
    body.appendChild(wrapper)
    wrapper.appendChild(pomodoroNum)

    reset()
    let totalTemp1=0
    let totalTemp2=0
    let temp1=0
    let temp2=0

    for(let i=0;i<4;i++){
        totalHrs += hours
        totalMins += minutes

        if(i==2){
            temp1=2*ratio[i-1]
            temp2=120*ratio[i-1]
            totalTemp1+=temp1
            totalTemp2+=temp2
            
            arr.push(temp1)
            arr2.push(temp2)

        } else if(totalTemp1<15){
            temp1=(15-(totalHrs-hours))*ratio[i-1]
            temp2=(900-(totalMins-minutes))*ratio[i-1]
            totalTemp1+=temp1
            totalTemp2+=temp2

            arr.push(temp1)
            arr2.push(temp2)
        } else {
            arr.push(0)
            arr2.push(0)
        }

/*        if(i==2){//ratio time [Eat/Walk/Dishes]
            temp1=2*ratio[i-1]
            temp2=120*ratio[i-1]
            totalTemp1+=temp1
            totalTemp2+=temp2
            
            arr.push(temp1)
            arr2.push(temp2)

        } else if (totalHrs>15){
            if(i>0){ //ratio time [play time] maybe [research/important]
                temp1=(15-(totalHrs-hours))*ratio[i-1]
                temp2=(900-(totalMins-minutes))*ratio[i-1]
                totalTemp1+=temp1
                totalTemp2+=temp2

                arr.push(temp1)
                arr2.push(temp2)
            }else{ //[study/code] only
                temp1=(15-(totalHrs-hours))
                temp2=(900-(totalMins-minutes))
                totalTemp1+=temp1
                totalTemp2+=temp2

                arr.push(temp1)
                arr2.push(temp2)
            }
            break;
        }else{
            if(i>0){ //ratio time 
                temp1=(hours*ratio[i-1])
                temp2=(minutes*ratio[i-1])
                totalTemp1+=temp1
                totalTemp2+=temp2

                arr.push(temp1)
                arr2.push(temp2)
            }else{ //study/code only
                temp1=(hours)
                temp2=(minutes)
                totalTemp1+=temp1
                totalTemp2+=temp2

                arr.push(temp1)
                arr2.push(temp2)
            }
        }
        //console.log(arr)
        //console.log(arr2)
        */
    } 
    if (totalTemp1>15){
        arr.push(0)
        arr2.push(0)
    }else{
        arr.push(15-totalTemp1)
        arr2.push(900-totalTemp2)
    }

    /*
    if (totalTemp1<15){
        temp1=((15-totalHrs))
        temp2=((900-totalMins))
        totalTemp1+=temp1
        totalTemp2+=temp2

        arr.push(temp1)
        arr2.push(temp2)
    }else{
        arr.push(0)
        arr2.push(0)

    }
    if (arr[3]==undefined){
        arr.push(0)
        arr2.push(0)
    }

    */
    console.log(arr)

    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);    



    td2.textContent=`${arr[0]}`
    td3.textContent=`${arr2[0]}`
    td4.textContent=`${arr[1]}`
    td5.textContent=`${arr2[1]}`
    td6.textContent=`${arr[2]}`
    td7.textContent=`${arr[2]}`
    td8.textContent=`${arr[3]}`
    td9.textContent=`${arr2[3]}`
    td10.textContent=`${arr[4]}`
    td11.textContent=`${arr2[4]}`

    underline.textContent = "Copy text to discord:"
    pomodoroNum.textContent =      "+-------------------------------------------------------+\n"+
    `Pomodoro (30 min): ${pomodoro}` +Array(5).fill('\x09').join('') +"\n" +
    `Study/Code(ratio): ${arr[0]} hours; ${arr2[0]} minutes  `+Array(2).fill('\x09').join('') +"\n" +    
    `Play Time(ratio): ${arr[1]} hours; ${arr2[1]} minutes  `+Array(2).fill('\x09').join('') +"\n" +    
    `Eat/walk/dishes (ratio): 2 hours; 120 minutes`+Array(2).fill('\x09').join('') +"\n" +    
    `Research/Important (ratio): ${arr[2]} hours;  ${arr2[2]} minutes`+Array(1).fill('\x09').join('') +"\n" +    
    `Offline/Linux (ratio): ${arr[3]} hours; ${arr2[3]} minutes`+Array(2).fill('\x09').join('') +"\n" +
    "+-------------------------------------------------------+"





    anychart.onDocumentReady(function() {

        // set the data
        let data = [
            {x: "Study/Code", value: arr[0]},
            {x: "Play Time", value: arr[1]},
            {x: "Eat/walk/dishes", value: 2},
            {x: "Research/Important", value: arr[2]},
            {x: "Offline/Linux", value: arr[3]},
        ];

        // create the pieChart
        let pieChart = anychart.pie();
      
        // set the pieChart title
        pieChart.title("15 Hr Time Schedule");
      
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

