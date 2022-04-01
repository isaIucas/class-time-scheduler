let pomodoro=0;
let minutes=0;
let hours=0;


const form= document.querySelector("form")
const body= document.querySelector("body")

const container=document.createElement("div")
const attr1=document.createAttribute("class");
attr1.value="container";
container.setAttributeNode(attr1);
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
       

th1.textContent="Hours"
th2.textContent="Minutes"
th3.textContent="Study Time"
th4.textContent="Play Time"
th5.textContent="Research/Important"
th6.textContent="Eating and walking"
th7.textContent="Offline or Linux"



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
        container.appendChild(chartContainer)
            chartContainer.appendChild(chart)
}

const discord=document.createElement("div")
const underline=document.createElement("u")


const wrapper=document.createElement("div")
const study=document.createElement("div")
const play=document.createElement("div")
const research=document.createElement("div")
const eatnwalk=document.createElement("div")
const offline=document.createElement("div")




form.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = new FormData(form);
    for (const [name,value] of data) {
        pomodoro = value
        console.log(name,value)
    }
    minutes = pomodoro * 30;
    hours = minutes / 60;
    appendTable();
    
    console.log(col1)
    console.log(col2)
    console.log(col3)


    body.appendChild(discord)
    discord.appendChild(underline)
    body.appendChild(wrapper)
    wrapper.appendChild(study)
    wrapper.appendChild(play)
    wrapper.appendChild(research)
    wrapper.appendChild(eatnwalk)
    wrapper.appendChild(offline)

    td2.textContent=`${hours}`
    td3.textContent=`${minutes}`
    td4.textContent=`${hours}`
    td5.textContent=`${minutes}`
    td6.textContent=`${hours}`
    td7.textContent=`${minutes}`
    td8.textContent=`1.5`
    td9.textContent=`90`
    td10.textContent=`${15-1.5-hours*3}`
    td11.textContent=`${900-90-minutes*3}`

    underline.textContent = "Copy text to discord:"
    study.textContent=`Study Time: ${hours} hours; ${minutes} minutes`
    play.textContent=`Play Time: ${hours} hours; ${minutes} minutes`
    research.textContent=`Research/Important: ${hours} hours; ${minutes} minutes`
    eatnwalk.textContent=`Eating & walking: 1.5 hours; 90 minutes`
    offline.textContent=`Offline or Linux: ${15-1.5-hours*3} hours; ${900-90-minutes*3} minutes`

    anychart.onDocumentReady(function() {

        // set the data
        var data = [
            {x: "Study", value: hours},
            {x: "Play", value: hours},
            {x: "Research/Important", value: hours},
            {x: "Offline or Linux", value: 15-1.5-hours*3},
        ];
      
        // create the chart
        var chart = anychart.pie();
      
        // set the chart title
        chart.title("Time Schedule");
      
        // add the data
        chart.data(data);
      
        // display the chart in the container
        chart.container('container');
        chart.draw();
      
      });
})

