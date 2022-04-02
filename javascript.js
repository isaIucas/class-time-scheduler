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
th5.textContent="Eating and walking"
th6.textContent="Research/Important"
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
           //console.log(document.querySelector("#container"))
           let deleteThisFUCKER=document.querySelector("#container")
            let fuckingSHIT= deleteThisFUCKER!=null
            if(fuckingSHIT){
                deleteThisFUCKER.removeChild(deleteThisFUCKER.firstChild)

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
        //console.log(name,value)
    }
    minutes = pomodoro * 30;
    hours = minutes / 60;
    appendTable();

    body.appendChild(discord)
    discord.appendChild(underline)
    body.appendChild(wrapper)
    wrapper.appendChild(study)
    wrapper.appendChild(play)
    wrapper.appendChild(research)
    wrapper.appendChild(eatnwalk)
    wrapper.appendChild(offline)



    reset()

    //totalHrs=0; hours =2.5
    for(let i=0;i<3;i++){
        totalHrs += hours
        totalMins += minutes
        if (totalHrs>13){
            arr.push(13-(totalHrs-hours))
            arr2.push(780-(totalMins-minutes))
            break;
        }else{
            arr.push(hours)
            arr2.push(minutes)

        }
        console.log(arr)
        console.log(arr2)
    }        

    if (totalHrs < 13){
        arr.push(13-totalHrs)
        arr2.push(780-totalMins)
    }else{
        arr.push(0)
        arr2.push(0)

    }
    if (arr[3]==undefined){
        arr.push(0)
        arr2.push(0)
    }
    console.log(arr)

    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);    



    td2.textContent=`${arr[0]}`
    td3.textContent=`${arr2[0]}`
    td4.textContent=`${arr[1]}`
    td5.textContent=`${arr2[1]}`
    td6.textContent=`2`
    td7.textContent=`120`
    td8.textContent=`${arr[2]}`
    td9.textContent=`${arr2[2]}`
    td10.textContent=`${arr[3]}`
    td11.textContent=`${arr2[3]}`

    underline.textContent = "Copy text to discord:"
    study.textContent=`Study Time: ${arr[0]} hours; ${arr2[0]} minutes`
    play.textContent=`Play Time: ${arr[1]} hours; ${arr2[1]} minutes`
    eatnwalk.textContent=`Eating/walk/dishes: 2 hours; 120 minutes`
    research.textContent=`Research/Important: ${arr[2]} hours; ${arr2[2]} minutes`
    offline.textContent=`Offline or Linux: ${arr[3]} hours; ${arr2[3]} minutes`


    anychart.onDocumentReady(function() {

        // set the data
        let data = [
            {x: "Study", value: arr[0]},
            {x: "Play", value: arr[1]},
            {x: "Eat n walk", value: 1.5},
            {x: "Research/Important", value: arr[2]},
            {x: "Offline or Linux", value: arr[3]},
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
})

