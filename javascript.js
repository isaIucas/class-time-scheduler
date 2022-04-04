let pomodoro=0;
let minutes=0;
let hours=0;
let arr=[]
let arr2=[]

ratio=[1,1,1]

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
const input1=document.createElement("input")
const input1type1=document.createAttribute("type");
input1type1.value="number";
const input1type2=document.createAttribute("name");
input1type2.value="number";
const input1type3=document.createAttribute("min");
input1type3.value=".1";
const input1type4=document.createAttribute("max");
input1type4.value="20";
const input1type5=document.createAttribute("value");
input1type5.value="1";
const input1type6=document.createAttribute("class");
input1type6.value="ratio";
const input1type7=document.createAttribute("step");
input1type7.value=".1";

const input2=document.createElement("input")
const input2type1=document.createAttribute("type");
input2type1.value="number";
const input2type2=document.createAttribute("name");
input2type2.value="number";
const input2type3=document.createAttribute("min");
input2type3.value=".1";
const input2type4=document.createAttribute("max");
input2type4.value="20";
const input2type5=document.createAttribute("value");
input2type5.value="1";
const input2type6=document.createAttribute("class");
input2type6.value="ratio";
const input2type7=document.createAttribute("step");
input2type7.value=".1";

const input3=document.createElement("input")
const input3type1=document.createAttribute("type");
input3type1.value="number";
const input3type2=document.createAttribute("name");
input3type2.value="number";
const input3type3=document.createAttribute("min");
input3type3.value=".1";
const input3type4=document.createAttribute("max");
input3type4.value="20";
const input3type5=document.createAttribute("value");
input3type5.value="1";
const input3type6=document.createAttribute("class");
input3type6.value="ratio";
const input3type7=document.createAttribute("step");
input3type7.value=".1";
/*
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
const input4type6=document.createAttribute("class");
input4type6.value="ratio";
*/
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


input2.setAttributeNode(input2type1);
input2.setAttributeNode(input2type2);
input2.setAttributeNode(input2type3);
input2.setAttributeNode(input2type4);
input2.setAttributeNode(input2type5);
input2.setAttributeNode(input2type6);
input2.setAttributeNode(input2type7);



input3.setAttributeNode(input3type1);
input3.setAttributeNode(input3type2);
input3.setAttributeNode(input3type3);
input3.setAttributeNode(input3type4);
input3.setAttributeNode(input3type5);
input3.setAttributeNode(input3type6);
input3.setAttributeNode(input3type7);


/*
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
//form2.appendChild(input4)
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
            table.appendChild(tr8)
                tr8.appendChild(td12)
                tr8.appendChild(td13)
                tr8.appendChild(td14)
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

    arr=[]
    arr2=[]
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
    minutes = pomodoro * 30;
    hours = minutes / 60;
    appendTable();

    body.appendChild(discord)
    discord.appendChild(underline)
    body.appendChild(wrapper)
    wrapper.appendChild(discordTextOuput)

    reset()
    let totalTemp1=0
    let totalTemp2=0

    for(let i=0;i<4;i++){ // looping through 4 items while item 5 is outside [index 2 will be excluded from the pattern]
        totalTemp1 += hours
        totalTemp2 += minutes
        console.log(`totalTemp1:${totalTemp1}`)

        if(i==2){//index 2 is it's own contained pattern
            customhr=2;
            custommin=120;
            totalTemp1 -= hours 
            totalTemp2 -= minutes;
            totalTemp1 += customhr;
            totalTemp2 += custommin;
            if((15-(totalTemp1-customhr))<0){ //check if the calculation goes negative then automatically 0
                arr.push(0)
                arr2.push(0)
            }else if (totalTemp1<15){
                arr.push(customhr)
                arr2.push(custommin)
            }else{
                console.log(`(15-(${totalTemp1}-${customhr}))=${(15-(totalTemp1-customhr))}`)
                arr.push(15-(totalTemp1-customhr))
                arr2.push(900-(totalTemp2-custommin))
            }
            console.log(`totalTemp1:${totalTemp1}`)

        }else if (totalTemp1 < 15){
            arr.push(hours)
            arr2.push(minutes)
        }else{ //totalTemp1 > 15
            console.log(`(15-(${totalTemp1}-${hours}))=${(15-(totalTemp1-hours))}`)
            if((15-(totalTemp1-hours))<0){ //check if the calculation goes negative then automatically 0
                arr.push(0)
                arr2.push(0)
            }else{
                arr.push(15-(totalTemp1-hours))
                arr2.push(900-(totalTemp2-minutes))
            }
            
        }
    }

    for(let i=1;i<4;i++){
        console.log("adding ratios to arr")
        console.log(arr)
        console.log(ratio)

        arr[i]=+(arr[i]*ratio[i-1]).toFixed(2)
        arr2[i]=+(arr2[i]*ratio[i-1]).toFixed(2)

    }

    //item 5
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    const sum2= arr2.reduce((partialSum, a) => partialSum + a, 0);
    if (sum>15){
        arr.push(0)
        arr2.push(0)

    }else{
        arr.push(+(15-sum).toFixed(2))
        arr2.push(+(900-sum2).toFixed(2))
    }

    const totalSum = arr.reduce((partialSum, a) => partialSum + a, 0);
    const totalSum2 = arr2.reduce((partialSum, a) => partialSum + a, 0);

    arr.push(+(totalSum).toFixed(2))
    arr2.push(+(totalSum2).toFixed(2))




    td2.textContent=`${arr[0]}`
    td3.textContent=`${arr2[0]}`
    td4.textContent=`${arr[1]}`
    td5.textContent=`${arr2[1]}`
    td6.textContent=`${arr[2]}`
    td7.textContent=`${arr2[2]}`
    td8.textContent=`${arr[3]}`
    td9.textContent=`${arr2[3]}`
    td10.textContent=`${arr[4]}`
    td11.textContent=`${arr2[4]}`
    td13.textContent=`${arr[5]}`
    td14.textContent=`${arr2[5]}`

    underline.textContent = "Copy text to discord:"
    discordTextOuput.textContent =      "+-------------------------------------------------------+\n"+
    `Pomodoro (30 min): ${pomodoro}` +"\n" +
    `Study/Code: ${arr[0]} hours; ${arr2[0]} minutes  ` +"\n" +    
    `Play Time (x${ratio[0]}): ${arr[1]} hours; ${arr2[1]} minutes  `+"\n" +    
    `Eat/walk/dishes (x${ratio[1]}): ${arr[2]} hours; ${arr2[2]} minutes`+"\n" +    
    `Research/Important (x${ratio[2]}): ${arr[3]} hours;  ${arr2[3]} minutes`+"\n" +    
    `Offline/Linux: ${arr[4]} hours; ${arr2[4]} minutes`+"\n" +
    "+-------------------------------------------------------+"





    anychart.onDocumentReady(function() {

        // set the data
        let data = [
            {x: "Study/Code", value: arr[0]},
            {x: "Play Time", value: arr[1]},
            {x: "Eat/walk/dishes", value: arr[2]},
            {x: "Research/Important", value: arr[3]},
            {x: "Offline/Linux", value: arr[4]},
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

