let pomodoro = [];
let minutes = 0;
let hours = 0;
let mandatoryHrArr = [];
let mandatoryMinArr = [];
let customHrArr = [];
let customMinArr = [];

let dateNow = "";
let dateTmr = "";

mandatoryRatio = [1, 1, 1, 1];
customRatio = [1, 1, 1, 1, 1];

const body = document.querySelector("body");

//create min pomodoro and time of sleep data fields
const pomodoroDiv = document.createElement("div");
const pomodoroForm = document.createElement("form");
const pomodoroAction = document.createAttribute("action");
pomodoroAction.value = "";
pomodoroForm.setAttributeNode(pomodoroAction);
const pomodoroInnerDiv = document.createElement("div");
const pomodoroInput1 = document.createElement("input");
const pomodoroInput2 = document.createElement("input");
const pomodoroInput1Action1 = document.createAttribute("type");
const pomodoroInput1Action2 = document.createAttribute("name");
const pomodoroInput1Action3 = document.createAttribute("id");
const pomodoroInput1Action4 = document.createAttribute("min");
const pomodoroInput1Action5 = document.createAttribute("value");
pomodoroInput1Action1.value = "number";
pomodoroInput1Action2.value = "time";
pomodoroInput1Action3.value = "time";
pomodoroInput1Action4.value = "5";
pomodoroInput1Action5.value = "30";
pomodoroInput1.setAttributeNode(pomodoroInput1Action1);
pomodoroInput1.setAttributeNode(pomodoroInput1Action2);
pomodoroInput1.setAttributeNode(pomodoroInput1Action3);
pomodoroInput1.setAttributeNode(pomodoroInput1Action4);
pomodoroInput1.setAttributeNode(pomodoroInput1Action5);
const pomodoroInput1Label = document.createElement("label");
const pomodoroInput1LabelAction = document.createAttribute("for");
pomodoroInput1LabelAction.value = "time";
pomodoroInput1Label.setAttributeNode(pomodoroInput1LabelAction);
pomodoroInput1Label.textContent = " min of";

const pomodoroInput2Label = document.createElement("label");
const pomodoroInput2LabelAction = document.createAttribute("for");
pomodoroInput2LabelAction.value = "pomodoro";
pomodoroInput2Label.setAttributeNode(pomodoroInput2LabelAction);
pomodoroInput2Label.textContent = " pomodoro: ";
let pomodoroInput2Actions = [];
let defaultAttr = ["type", "name", "id", "min", "max", "value"];
let defaultAttr2 = ["number", "pomodoro", "pomodoro", "3", "20", "3"];
for (let i = 0; i < 6; i++) {
  pomodoroInput2Actions.push(document.createAttribute(defaultAttr[i]));
}
for (let i = 0; i < 6; i++) {
  pomodoroInput2Actions[i].value = defaultAttr2[i];
}
for (let i = 0; i < 6; i++) {
  pomodoroInput2.setAttributeNode(pomodoroInput2Actions[i]);
}
const pomodoroInput3 = document.createElement("input");
const labelTime = document.createElement("label");
const labelTimeAction = document.createAttribute("for");
labelTimeAction.value = "pomodoro";
labelTime.setAttributeNode(labelTimeAction);
labelTime.textContent = "Select a time to sleep: ";
let labelTimeActions = [];
let labelTimedefaultAttr = ["type", "id", "name", "value"];
let labelTimedefaultAttr2 = ["time", "appt", "appt", "00:00"];
for (let i = 0; i < 6; i++) {
  labelTimeActions.push(document.createAttribute(labelTimedefaultAttr[i]));
}
for (let i = 0; i < 6; i++) {
  labelTimeActions[i].value = labelTimedefaultAttr2[i];
}
for (let i = 0; i < 6; i++) {
  pomodoroInput3.setAttributeNode(labelTimeActions[i]);
}
const pomodoroButton = document.createElement("button");
pomodoroButton.textContent = "Submit";

const normalRoutine = document.querySelector(".normal");
const abnormalRoutine = document.querySelector(".abnormal");
let normalRoutineBoolean = false
normalRoutine.addEventListener("click", () => {
  let text = "Do you want to clear your current data?"
  if(abnormalRoutineBoolean){
    if(confirm(text)== true){
      abnormalRoutineBoolean=false
      normalRoutineBoolean=false
    }else{
      return;
    }
  }
  normalRoutine.disabled = true;
  abnormalRoutine.disabled = false;
  const nodeList = document.body.childNodes;
  let number = nodeList.length;
  console.log(number);
  //onsole.log(body.lastChild)
  for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i]);
  }
  while (nodeList.length > 5) {
    body.removeChild(body.lastChild);
  }
  body.appendChild(pomodoroDiv);
  pomodoroDiv.appendChild(pomodoroForm);
  pomodoroForm.appendChild(pomodoroInnerDiv);
  pomodoroInnerDiv.appendChild(pomodoroInput1);
  pomodoroInnerDiv.appendChild(pomodoroInput1Label);
  pomodoroInnerDiv.appendChild(pomodoroInput2Label);
  pomodoroInnerDiv.appendChild(pomodoroInput2);
  pomodoroForm.appendChild(labelTime);
  pomodoroForm.appendChild(pomodoroInput3);
  pomodoroForm.appendChild(pomodoroButton);
});

//need to change
const form = document.querySelector("form");

const container = document.createElement("div");
const attr1 = document.createAttribute("class");
attr1.value = "container";
container.setAttributeNode(attr1);

//left side table
const button = document.createElement("input");
const table = document.createElement("table");
const caption1 = document.createElement("caption");
const tr1 = document.createElement("tr");
const col1 = document.createElement("col");
const col2 = document.createElement("col");
const col3 = document.createElement("col");
const tr2 = document.createElement("tr");
const td1 = document.createElement("td");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const tr3 = document.createElement("tr");

const th3 = document.createElement("th");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const tr4 = document.createElement("tr");

const th4 = document.createElement("th");
const td4 = document.createElement("td");
const td5 = document.createElement("td");
const tr5 = document.createElement("tr");

const th5 = document.createElement("th");
const td6 = document.createElement("td");
const td7 = document.createElement("td");
const tr6 = document.createElement("tr");

const th6 = document.createElement("th");
const td8 = document.createElement("td");
const td9 = document.createElement("td");
const tr7 = document.createElement("tr");

const th7 = document.createElement("th");
const td10 = document.createElement("td");
const td11 = document.createElement("td");
const tr8 = document.createElement("tr");

const th8 = document.createElement("th");
const td12 = document.createElement("td");
const td13 = document.createElement("td");
const tr9 = document.createElement("tr");

const th9 = document.createElement("th");
const td14 = document.createElement("td");
const td15 = document.createElement("td");
const tr10 = document.createElement("tr");

const th10 = document.createElement("th");
const td16 = document.createElement("td");
const td17 = document.createElement("td");
const tr11 = document.createElement("tr");

const td18 = document.createElement("td");
const td19 = document.createElement("td");
const td20 = document.createElement("td");

// chart in the middle
const chartContainer = document.createElement("div");
const chart = document.createElement("div");
const attr3 = document.createAttribute("id");
attr3.value = "container";
chart.setAttributeNode(attr3);

// right side table
const table2 = document.createElement("table");
const caption2 = document.createElement("caption");

const tr2_1 = document.createElement("tr");
const col2_1 = document.createElement("col");
const col2_2 = document.createElement("col");
const col2_3 = document.createElement("col");
const tr2_2 = document.createElement("tr");
const td2_1 = document.createElement("td");
const th2_1 = document.createElement("th");
const th2_2 = document.createElement("th");
const tr2_3 = document.createElement("tr");

const th2_3 = document.createElement("th");
const td2_2 = document.createElement("td");
const td2_3 = document.createElement("td");
const tr2_4 = document.createElement("tr");

const th2_4 = document.createElement("th");
const td2_4 = document.createElement("td");
const td2_5 = document.createElement("td");
const tr2_5 = document.createElement("tr");

const th2_5 = document.createElement("th");
const td2_6 = document.createElement("td");
const td2_7 = document.createElement("td");
const tr2_6 = document.createElement("tr");

const th2_6 = document.createElement("th");
const td2_8 = document.createElement("td");
const td2_9 = document.createElement("td");
const tr2_7 = document.createElement("tr");

const th2_7 = document.createElement("th");
const td2_10 = document.createElement("td");
const td2_11 = document.createElement("td");
const tr2_8 = document.createElement("tr");

const th2_8 = document.createElement("th");
const td2_12 = document.createElement("td");
const td2_13 = document.createElement("td");
const tr2_9 = document.createElement("tr");

const th2_9 = document.createElement("th");
const td2_14 = document.createElement("td");
const td2_15 = document.createElement("td");
const tr2_10 = document.createElement("tr");

const th2_10 = document.createElement("th");
const td2_16 = document.createElement("td");
const td2_17 = document.createElement("td");
const tr2_11 = document.createElement("tr");

const td2_18 = document.createElement("td");
const td2_19 = document.createElement("td");
const td2_20 = document.createElement("td");

//ratio inputs on the left side table
const form2 = document.createElement("form");
const form2attr1 = document.createAttribute("action");
form2attr1.value = "";
form2.setAttributeNode(form2attr1);
const form2attr2 = document.createAttribute("class");
form2attr2.value = "form2";
form2.setAttributeNode(form2attr2);

const form3 = document.createElement("form");
const form3attr1 = document.createAttribute("action");
form3attr1.value = "";
form3.setAttributeNode(form3attr1);
const form3attr2 = document.createAttribute("class");
form3attr2.value = "form3";
form3.setAttributeNode(form3attr2);

const input1 = document.createElement("input");
const input1type1 = document.createAttribute("type");
input1type1.value = "number";
const input1type2 = document.createAttribute("name");
input1type2.value = "mandatoryRatio";
const input1type3 = document.createAttribute("min");
input1type3.value = ".1";
const input1type4 = document.createAttribute("max");
input1type4.value = "20";
const input1type5 = document.createAttribute("value");
input1type5.value = "1";
const input1type6 = document.createAttribute("class");
input1type6.value = "customRatio";
const input1type7 = document.createAttribute("step");
input1type7.value = ".1";
const input1type8 = document.createAttribute("id");
input1type8.value = "des";

const ratioLabel1 = document.createElement("label");
const ratioLabeltype1 = document.createAttribute("for");
ratioLabeltype1.value = "des";
ratioLabel1.textContent = " x";

const input2 = document.createElement("input");
const input2type1 = document.createAttribute("type");
input2type1.value = "number";
const input2type2 = document.createAttribute("name");
input2type2.value = "mandatoryRatio";
const input2type3 = document.createAttribute("min");
input2type3.value = ".1";
const input2type4 = document.createAttribute("max");
input2type4.value = "20";
const input2type5 = document.createAttribute("value");
input2type5.value = "1";
const input2type6 = document.createAttribute("class");
input2type6.value = "mandatoryRatio";
const input2type7 = document.createAttribute("step");
input2type7.value = ".1";
const input2type8 = document.createAttribute("id");
input2type8.value = "des";

const ratioLabel2 = document.createElement("label");
const ratioLabeltype2 = document.createAttribute("for");
ratioLabeltype2.value = "des";
ratioLabel2.textContent = " x";

const input3 = document.createElement("input");
const input3type1 = document.createAttribute("type");
input3type1.value = "number";
const input3type2 = document.createAttribute("name");
input3type2.value = "customRatio";
const input3type3 = document.createAttribute("min");
input3type3.value = ".1";
const input3type4 = document.createAttribute("max");
input3type4.value = "20";
const input3type5 = document.createAttribute("value");
input3type5.value = "1";
const input3type6 = document.createAttribute("class");
input3type6.value = "customRatio";
const input3type7 = document.createAttribute("step");
input3type7.value = ".1";
const input3type8 = document.createAttribute("id");
input3type8.value = "des";

const ratioLabel3 = document.createElement("label");
const ratioLabeltype3 = document.createAttribute("for");
ratioLabeltype3.value = "des";
ratioLabel3.textContent = " x";

const ratioLabel3Pre = document.createElement("label");
const ratioLabeltype3Pre = document.createAttribute("for");
ratioLabeltype3Pre.value = "des";
ratioLabel3Pre.textContent = "(Max) ";

const input4 = document.createElement("input");
const input4type1 = document.createAttribute("type");
input4type1.value = "number";
const input4type2 = document.createAttribute("name");
input4type2.value = "customRatio";
const input4type3 = document.createAttribute("min");
input4type3.value = ".1";
const input4type4 = document.createAttribute("max");
input4type4.value = "20";
const input4type5 = document.createAttribute("value");
input4type5.value = "1";
const input4type6 = document.createAttribute("class");
input4type6.value = "customRatio";
const input4type7 = document.createAttribute("step");
input4type7.value = ".1";
const input4type8 = document.createAttribute("id");
input4type8.value = "des";

const ratioLabel4 = document.createElement("label");
const ratioLabeltype4 = document.createAttribute("for");
ratioLabeltype4.value = "des";
ratioLabel4.textContent = " x";

const input5 = document.createElement("input");
const input5type1 = document.createAttribute("type");
input5type1.value = "number";
const input5type2 = document.createAttribute("name");
input5type2.value = "mandatoryRatio";
const input5type3 = document.createAttribute("min");
input5type3.value = ".1";
const input5type4 = document.createAttribute("max");
input5type4.value = "20";
const input5type5 = document.createAttribute("value");
input5type5.value = "1";
const input5type6 = document.createAttribute("class");
input5type6.value = "customRatio";
const input5type7 = document.createAttribute("step");
input5type7.value = ".1";
const input5type8 = document.createAttribute("id");
input5type8.value = "des";

const ratioLabel5 = document.createElement("label");
const ratioLabeltype5 = document.createAttribute("for");
ratioLabeltype5.value = "des";
ratioLabel5.textContent = " x";

const input6 = document.createElement("input");
const input6type1 = document.createAttribute("type");
input6type1.value = "number";
const input6type2 = document.createAttribute("name");
input6type2.value = "mandatoryRatio";
const input6type3 = document.createAttribute("min");
input6type3.value = ".1";
const input6type4 = document.createAttribute("max");
input6type4.value = "20";
const input6type5 = document.createAttribute("value");
input6type5.value = "1";
const input6type6 = document.createAttribute("class");
input6type6.value = "special";
const input6type7 = document.createAttribute("step");
input6type7.value = ".1";
const input6type8 = document.createAttribute("id");
input6type8.value = "des";

const ratioLabel6 = document.createElement("label");
const ratioLabeltype6 = document.createAttribute("for");
ratioLabeltype6.value = "des";
ratioLabel6.textContent = " x";

const ratioLabel6Pre = document.createElement("label");
const ratioLabeltype6Pre = document.createAttribute("for");
ratioLabeltype6Pre.value = "des";
ratioLabel6Pre.textContent = "(Min) ";

const submit = document.createElement("button");
submit.textContent = "Submit";
const class1 = document.createAttribute("class");
class1.value = "buttonsubmit";
submit.setAttributeNode(class1);

//creating buttons of the right side
const clickButtons = document.createElement("div");
const buttonAttr = document.createAttribute("class");
buttonAttr.value = "clickDemButtons";
clickButtons.setAttributeNode(buttonAttr);
const button1 = document.createElement("button");
button1.textContent = "Finish";
const button2 = document.createElement("button");
button2.textContent = "Finish";
button2.disabled = true;
const button3 = document.createElement("button");
button3.textContent = "Finish";
button3.disabled = true;
const button4 = document.createElement("button");
button4.textContent = "Finish";
button4.disabled = true;
const button5 = document.createElement("button");
button5.textContent = "Finish";
button5.disabled = true;
const button6 = document.createElement("button");
button6.textContent = "Finish";
button6.disabled = true;
const button7 = document.createElement("button");
button7.textContent = "Finish";
button7.disabled = true;

const clickButtons_1 = document.createElement("div");
const buttonAttr_1 = document.createAttribute("class");
buttonAttr_1.value = "clickDemButtons";
clickButtons_1.setAttributeNode(buttonAttr_1);
const button1_1 = document.createElement("button");
button1_1.textContent = "Done";
const button2_1 = document.createElement("button");
button2_1.textContent = "Done";
button2_1.disabled = true;
const button3_1 = document.createElement("button");
button3_1.textContent = "Done";
button3_1.disabled = true;
const button4_1 = document.createElement("button");
button4_1.textContent = "Done";
button4_1.disabled = true;
const button5_1 = document.createElement("button");
button5_1.textContent = "Done";
button5_1.disabled = true;
const button6_1 = document.createElement("button");
button6_1.textContent = "Done";
button6_1.disabled = true;
const button7_1 = document.createElement("button");
button7_1.textContent = "Done";
button7_1.disabled = true;

const clickButtons_2 = document.createElement("div");
const buttonAttr_2 = document.createAttribute("class");
buttonAttr_2.value = "clickDemButtons";
clickButtons_2.setAttributeNode(buttonAttr_2);
const button1_2 = document.createElement("button");
button1_2.textContent = "skip";
const button2_2 = document.createElement("button");
button2_2.textContent = "skip";
button2_2.disabled = true;
const button3_2 = document.createElement("button");
button3_2.textContent = "skip";
button3_2.disabled = true;
const button4_2 = document.createElement("button");
button4_2.textContent = "skip";
button4_2.disabled = true;
const button5_2 = document.createElement("button");
button5_2.textContent = "skip";
button5_2.disabled = true;
const button6_2 = document.createElement("button");
button6_2.textContent = "skip";
button6_2.disabled = true;
const button7_2 = document.createElement("button");
button7_2.textContent = "skip";
button7_2.disabled = true;

//display the score after button is click
const scoreDisplay = document.createElement("div");
const scoreAttr = document.createAttribute("class");
scoreAttr.value = "scoreDisplay";
scoreDisplay.setAttributeNode(scoreAttr);
const description0 = document.createElement("div");
const description1 = document.createElement("div");
const description2 = document.createElement("div");
const description3 = document.createElement("div");
const description4 = document.createElement("div");
const description5 = document.createElement("div");
const description6 = document.createElement("div");
const description7 = document.createElement("div");

//setting colors to table
/*
{x: "Study/Code", value: customHrArr[0], normal: {fill:"PaleGreen"}},
{x: "Cook & eat", value: customHrArr[0], normal: {fill:"LightCyan"}},
{x: "walk", value: customHrArr[0], normal: {fill:"LightGoldenrodYellow"}},
{x: "Play", value: customHrArr[1], normal: {fill:"PaleTurquoise"}},
{x: "Research/Important", value: customHrArr[2], normal: {fill:"MistyRose	"}},
{x: "dishes", value: customHrArr[0], normal: {fill:"Lavender"}},
{x: "play", value: customHrArr[0], normal: {fill:"PaleTurquoise"}},
{x: "Offline/Linux", value: customHrArr[3], normal: {fill:"Honeydew	"}},
*/
th3.style = "background-color:PaleGreen";
td2.style = "background-color:PaleGreen";
td3.style = "background-color:PaleGreen";
td2_2.style = "background-color:PaleGreen";
td2_3.style = "background-color:PaleGreen";
th2_3.style = "background-color:PaleGreen";

th4.style = "background-color:LightCyan";
td4.style = "background-color:LightCyan";
td5.style = "background-color:LightCyan";
td2_4.style = "background-color:LightCyan";
td2_5.style = "background-color:LightCyan";
th2_4.style = "background-color:LightCyan";

th5.style = "background-color:LightGoldenrodYellow";
td6.style = "background-color:LightGoldenrodYellow";
td7.style = "background-color:LightGoldenrodYellow";
td2_6.style = "background-color:LightGoldenrodYellow";
td2_7.style = "background-color:LightGoldenrodYellow";
th2_5.style = "background-color:LightGoldenrodYellow";

th6.style = "background-color:PaleTurquoise";
td8.style = "background-color:PaleTurquoise";
td9.style = "background-color:PaleTurquoise";
td2_8.style = "background-color:PaleTurquoise";
td2_9.style = "background-color:PaleTurquoise";
th2_6.style = "background-color:PaleTurquoise";

th7.style = "background-color:MistyRose";
td10.style = "background-color:MistyRose";
td11.style = "background-color:MistyRose";
td2_10.style = "background-color:MistyRose";
td2_11.style = "background-color:MistyRose";
th2_7.style = "background-color:MistyRose";

th8.style = "background-color:Lavender";
td12.style = "background-color:Lavender";
td13.style = "background-color:Lavender";
td2_12.style = "background-color:Lavender";
td2_13.style = "background-color:Lavender";
th2_8.style = "background-color:Lavender";

th9.style = "background-color:PaleTurquoise";
td14.style = "background-color:PaleTurquoise";
td15.style = "background-color:PaleTurquoise";
td2_14.style = "background-color:PaleTurquoise";
td2_15.style = "background-color:PaleTurquoise";
th2_9.style = "background-color:PaleTurquoise";

th10.style = "background-color:Honeydew";
td16.style = "background-color:Honeydew";
td17.style = "background-color:Honeydew";
td2_16.style = "background-color:Honeydew";
td2_17.style = "background-color:Honeydew";
th2_10.style = "background-color:Honeydew";

tr11.style = "border-top: 1.5px solid black ";
tr2_11.style = "border-top: 1.5px solid black ";

input1.setAttributeNode(input1type1);
input1.setAttributeNode(input1type2);
input1.setAttributeNode(input1type3);
input1.setAttributeNode(input1type4);
input1.setAttributeNode(input1type5);
input1.setAttributeNode(input1type6);
input1.setAttributeNode(input1type7);
input1.setAttributeNode(input1type8);
ratioLabel1.setAttributeNode(ratioLabeltype1);

input2.setAttributeNode(input2type1);
input2.setAttributeNode(input2type2);
input2.setAttributeNode(input2type3);
input2.setAttributeNode(input2type4);
input2.setAttributeNode(input2type5);
input2.setAttributeNode(input2type6);
input2.setAttributeNode(input2type7);
ratioLabel2.setAttributeNode(ratioLabeltype2);

input3.setAttributeNode(input3type1);
input3.setAttributeNode(input3type2);
input3.setAttributeNode(input3type3);
input3.setAttributeNode(input3type4);
input3.setAttributeNode(input3type5);
input3.setAttributeNode(input3type6);
input3.setAttributeNode(input3type7);
ratioLabel3.setAttributeNode(ratioLabeltype3);

input4.setAttributeNode(input4type1);
input4.setAttributeNode(input4type2);
input4.setAttributeNode(input4type3);
input4.setAttributeNode(input4type4);
input4.setAttributeNode(input4type5);
input4.setAttributeNode(input4type6);
input4.setAttributeNode(input4type7);
ratioLabel3.setAttributeNode(ratioLabeltype4);

input5.setAttributeNode(input5type1);
input5.setAttributeNode(input5type2);
input5.setAttributeNode(input5type3);
input5.setAttributeNode(input5type4);
input5.setAttributeNode(input5type5);
input5.setAttributeNode(input5type6);
input5.setAttributeNode(input5type7);
ratioLabel3.setAttributeNode(ratioLabeltype5);

input6.setAttributeNode(input6type1);
input6.setAttributeNode(input6type2);
input6.setAttributeNode(input6type3);
input6.setAttributeNode(input6type4);
input6.setAttributeNode(input6type5);
input6.setAttributeNode(input6type6);
input6.setAttributeNode(input6type7);
ratioLabel3.setAttributeNode(ratioLabeltype6);

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");

container.appendChild(form2);
form2.appendChild(div1);
div1.appendChild(input1);
div1.appendChild(ratioLabel1);
form2.appendChild(div2);
div2.appendChild(input2);
div2.appendChild(ratioLabel2);
form2.appendChild(div3);
div3.appendChild(ratioLabel3Pre);
div3.appendChild(input3);
div3.appendChild(ratioLabel3);

form2.appendChild(div4);
div4.appendChild(input4);
div4.appendChild(ratioLabel4);
form2.appendChild(div5);
div5.appendChild(input5);
div5.appendChild(ratioLabel5);
form2.appendChild(div6);
div6.appendChild(ratioLabel6Pre);
div6.appendChild(input6);
div6.appendChild(ratioLabel6);
form2.appendChild(submit);

th1.textContent = "Hours";
th2.textContent = "Minutes";
th3.textContent = "!Study/Code!+";
th4.textContent = "*cook & eat*";
th5.textContent = "*walk*+";
th6.textContent = "Play Time";
th7.textContent = "Research/Important+";
th8.textContent = "*Dishes*+";
th9.textContent = "Play";
th10.textContent = "*Offline/Chill*";

th2_1.textContent = "From";
th2_2.textContent = "To";
th2_3.textContent = "!Study/Code!+";
th2_4.textContent = "*cook & eat*";
th2_5.textContent = "*walk*+";
th2_6.textContent = "Play Time";
th2_7.textContent = "Research/Important+";
th2_8.textContent = "*Dishes*+";
th2_9.textContent = "Play";
th2_10.textContent = "*Offline/Chill*";

function appendTable() {
  body.appendChild(container);
  container.appendChild(table);
  table.appendChild(caption1);
  table.appendChild(tr1);
  tr1.appendChild(col1);
  tr1.appendChild(col2);
  tr1.appendChild(col3);
  table.appendChild(tr2);
  tr2.appendChild(td1);
  tr2.appendChild(th1);
  tr2.appendChild(th2);
  table.appendChild(tr3);
  tr3.appendChild(th3);
  tr3.appendChild(td2);
  tr3.appendChild(td3);
  table.appendChild(tr4);
  tr4.appendChild(th4);
  tr4.appendChild(td4);
  tr4.appendChild(td5);
  table.appendChild(tr5);
  tr5.appendChild(th5);
  tr5.appendChild(td6);
  tr5.appendChild(td7);
  table.appendChild(tr6);
  tr6.appendChild(th6);
  tr6.appendChild(td8);
  tr6.appendChild(td9);
  table.appendChild(tr7);
  tr7.appendChild(th7);
  tr7.appendChild(td10);
  tr7.appendChild(td11);
  table.appendChild(tr8);
  tr8.appendChild(th8);
  tr8.appendChild(td12);
  tr8.appendChild(td13);
  table.appendChild(tr9);
  tr9.appendChild(th9);
  tr9.appendChild(td14);
  tr9.appendChild(td15);
  table.appendChild(tr10);
  tr10.appendChild(th10);
  tr10.appendChild(td16);
  tr10.appendChild(td17);
  table.appendChild(tr11);
  tr11.appendChild(td18);
  tr11.appendChild(td19);
  tr11.appendChild(td20);

  let anyChartSpammer = document.querySelector("#container");
  let anychartNull = anyChartSpammer != null;
  if (anychartNull) {
    anyChartSpammer.removeChild(anyChartSpammer.firstChild);
  }
  container.appendChild(chartContainer);
  chartContainer.appendChild(chart);

  container.appendChild(table2);
  table2.appendChild(tr2_1);
  table2.appendChild(caption2);
  tr2_1.appendChild(col2_1);
  tr2_1.appendChild(col2_2);
  tr2_1.appendChild(col2_3);
  table2.appendChild(tr2_2);
  tr2_2.appendChild(th2_1);
  tr2_2.appendChild(th2_2);
  tr2_2.appendChild(td2_1);
  table2.appendChild(tr2_3);
  tr2_3.appendChild(td2_2);
  tr2_3.appendChild(td2_3);
  tr2_3.appendChild(th2_3);
  table2.appendChild(tr2_4);
  tr2_4.appendChild(td2_4);
  tr2_4.appendChild(td2_5);
  tr2_4.appendChild(th2_4);

  table2.appendChild(tr2_5);
  tr2_5.appendChild(td2_6);
  tr2_5.appendChild(td2_7);
  tr2_5.appendChild(th2_5);

  table2.appendChild(tr2_6);
  tr2_6.appendChild(td2_8);
  tr2_6.appendChild(td2_9);
  tr2_6.appendChild(th2_6);

  table2.appendChild(tr2_7);
  tr2_7.appendChild(td2_10);
  tr2_7.appendChild(td2_11);
  tr2_7.appendChild(th2_7);

  table2.appendChild(tr2_8);
  tr2_8.appendChild(td2_12);
  tr2_8.appendChild(td2_13);
  tr2_8.appendChild(th2_8);

  table2.appendChild(tr2_9);
  tr2_9.appendChild(td2_14);
  tr2_9.appendChild(td2_15);
  tr2_9.appendChild(th2_9);

  table2.appendChild(tr2_10);
  tr2_10.appendChild(td2_16);
  tr2_10.appendChild(td2_17);
  tr2_10.appendChild(th2_10);

  table2.appendChild(tr2_11);
  tr2_11.appendChild(td2_18);
  tr2_11.appendChild(td2_19);
  tr2_11.appendChild(td2_20);

  container.appendChild(clickButtons);
  clickButtons.appendChild(button1);
  clickButtons.appendChild(button2);
  clickButtons.appendChild(button3);
  clickButtons.appendChild(button4);
  clickButtons.appendChild(button5);
  clickButtons.appendChild(button6);
  clickButtons.appendChild(button7);

  container.appendChild(clickButtons_1);
  clickButtons_1.appendChild(button1_1);
  clickButtons_1.appendChild(button2_1);
  clickButtons_1.appendChild(button3_1);
  clickButtons_1.appendChild(button4_1);
  clickButtons_1.appendChild(button5_1);
  clickButtons_1.appendChild(button6_1);
  clickButtons_1.appendChild(button7_1);

  container.appendChild(clickButtons_2);
  clickButtons_2.appendChild(button1_2);
  clickButtons_2.appendChild(button2_2);
  clickButtons_2.appendChild(button3_2);
  clickButtons_2.appendChild(button4_2);
  clickButtons_2.appendChild(button5_2);
  clickButtons_2.appendChild(button6_2);
  clickButtons_2.appendChild(button7_2);

  container.appendChild(scoreDisplay);
  scoreDisplay.appendChild(description0);
  scoreDisplay.appendChild(description1);
  scoreDisplay.appendChild(description2);
  scoreDisplay.appendChild(description3);
  scoreDisplay.appendChild(description4);
  scoreDisplay.appendChild(description5);
  scoreDisplay.appendChild(description6);
  scoreDisplay.appendChild(description7);
}

function reset() {
  mandatoryHrArr = [];
  mandatoryMinArr = [];
  customHrArr = [];
  customMinArr = [];
  dateRecorded = [];
  scoreRecorded = [];
  timeRecorded = [];
}

const discord = document.createElement("div");
const underline = document.createElement("u");

const wrapper = document.createElement("div");
const attr4 = document.createAttribute("class");
attr4.value = "wrapper";
wrapper.setAttributeNode(attr4);
const discordTextOutput = document.createElement("pre");
const discordTextOutput2 = document.createElement("pre");

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  var data = new FormData(form2);
  customRatio = [];
  mandatoryRatio = [];
  for (const [name, value] of data) {
    if (name === "customRatio") {
      customRatio.push(value);
    } else {
      mandatoryRatio.push(value);
    }
  }
  display();
});

pomodoroForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var data = new FormData(pomodoroForm);
  pomodoro = [];
  for (const [name, value] of data) {
    pomodoro.push(value);
    console.log(`name,value: ${(name, value)}`);
  }

  display();
});
let dateRecorded = [];
let scoreRecorded = [];
let timeRecorded = [];

function displayMinOrHr(min) {
  return min > 59
    ? `${(min / 60).toFixed(2)} hours`
    : `${min.toFixed(2)} minutes`;
}

function noOver100(score) {
  console.log(score);
  if (score === Infinity || score === -Infinity) {
    return 0;
  }
  return score > 99 ? 100 : +score.toFixed(2);
}

button1.addEventListener("click", (e) => {

  normalRoutineBoolean=true

  console.log("cook pressed.");
  date1 = new Date();
  dateRecorded.push(date1);
  dateCalMin = Math.abs(dateRecorded[0] - date1) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[0]: ${dateRecorded[0]}`);
  console.log(`date1: ${date1}`);

  scoreRecorded.push(
    noOver100(+((dateCalMin / mandatoryMinArr[0]) * 100).toFixed(2))
  );
  timeRecorded.push(displayMinOrHr(dateCalMin)); //main issue
  console.log(scoreRecorded);
  description1.textContent = `Finished at ${formatAMPM(date1)} with total of ${
    timeRecorded[1]
  } = ${scoreRecorded[1]}/100 pts`;
  button1.disabled = true;
  button1_1.disabled = true;
  button1_2.disabled = true;
  button2.disabled = false;
  button2_1.disabled = false;
  button2_2.disabled = false;
});

button1_1.addEventListener("click", (e) => {

  normalRoutineBoolean=true

  console.log("cook done pressed.");
  date1 = new Date();
  dateRecorded.push(date1);
  dateCalMin = Math.abs(dateRecorded[0] - date1) / 60000;
  dateCalHr = dateCalMin / 60;

  scoreRecorded.push(noOver100(100));
  timeRecorded.push(displayMinOrHr(mandatoryMinArr[0]));
  console.log(scoreRecorded);
  description1.textContent = `Already done with total of ${timeRecorded[1]} = ${scoreRecorded[1]}/100 pts`;
  button1.disabled = true;
  button1_1.disabled = true;
  button1_2.disabled = true;
  button2.disabled = false;
  button2_1.disabled = false;
  button2_2.disabled = false;
});

button1_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("cook skip pressed.");
  date1 = new Date();
  dateRecorded.push(date1);

  scoreRecorded.push(noOver100(0));
  timeRecorded.push(displayMinOrHr(0));
  console.log(scoreRecorded);
  description1.textContent = `Skipped with total of ${timeRecorded[1]} = ${scoreRecorded[1]}/100 pts`;
  button1.disabled = true;
  button1_1.disabled = true;
  button1_2.disabled = true;
  button2.disabled = false;
  button2_1.disabled = false;
  button2_2.disabled = false;
});

button2.addEventListener("click", (e) => {

  normalRoutineBoolean=true

  console.log("walk pressed.");

  date2 = new Date();
  dateRecorded.push(date2);
  dateCalMin = Math.abs(dateRecorded[1] - date2) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[1]: ${dateRecorded[1]}`);
  console.log(`date2: ${date2}`);

  scoreRecorded.push(+((dateCalMin / mandatoryMinArr[1]) * 100).toFixed(2));
  timeRecorded.push(displayMinOrHr(dateCalMin));

  description2.textContent = `Finished at ${formatAMPM(date2)} with total of ${
    timeRecorded[2]
  } = ${scoreRecorded[2]}/100 pts`;
  button2.disabled = true;
  button2_1.disabled = true;
  button2_2.disabled = true;
  button3.disabled = false;
  button3_1.disabled = false;
  button3_2.disabled = false;
});

button2_1.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("walk pressed.");

  date2 = new Date();
  dateRecorded.push(date2);
  dateCalMin = Math.abs(dateRecorded[1] - date2) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[1]: ${dateRecorded[1]}`);
  console.log(`date2: ${date2}`);

  scoreRecorded.push(100);
  timeRecorded.push(displayMinOrHr(mandatoryMinArr[1]));

  description2.textContent = `Already done with total of ${timeRecorded[2]} = ${scoreRecorded[2]}/100 pts`;
  button2.disabled = true;
  button2_1.disabled = true;
  button2_2.disabled = true;
  button3.disabled = false;
  button3_1.disabled = false;
  button3_2.disabled = false;
});

button2_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("walk pressed.");

  date2 = new Date();
  dateRecorded.push(date2);
  dateCalMin = Math.abs(dateRecorded[1] - date2) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[1]: ${dateRecorded[1]}`);
  console.log(`date2: ${date2}`);

  scoreRecorded.push(0);
  timeRecorded.push(displayMinOrHr(0));

  description2.textContent = `Skipped with total of ${timeRecorded[2]} = ${scoreRecorded[2]}/100 pts`;
  button2.disabled = true;
  button2_1.disabled = true;
  button2_2.disabled = true;
  button3.disabled = false;
  button3_1.disabled = false;
  button3_2.disabled = false;
});

button3.addEventListener("click", (e) => {
  normalRoutineBoolean=true

  console.log("play pressed.");

  date3 = new Date();
  dateRecorded.push(date3);
  dateCalMin = Math.abs(dateRecorded[2] - date3) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[2]: ${dateRecorded[2]}`);
  console.log(`date3: ${date3}`);

  scoreRecorded.push(
    noOver100(+((dateCalMin / (customMinArr[1] / 2)) * 100).toFixed(2))
  );
  timeRecorded.push(displayMinOrHr(dateCalMin));

  description3.textContent = `Finished at ${formatAMPM(date3)} with total of ${
    timeRecorded[3]
  } = ${scoreRecorded[3]}/100 pts`;
  button3.disabled = true;
  button3_1.disabled = true;
  button3_2.disabled = true;

  button4.disabled = false;
  button4_1.disabled = false;
  button4_2.disabled = false;
});
button3_1.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("play pressed.");

  date3 = new Date();
  dateRecorded.push(date3);
  dateCalMin = Math.abs(dateRecorded[2] - date3) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[2]: ${dateRecorded[2]}`);
  console.log(`date3: ${date3}`);

  scoreRecorded.push(100);
  timeRecorded.push(displayMinOrHr(customMinArr[1] / 2));

  description3.textContent = `Already done with total of ${timeRecorded[3]} = ${scoreRecorded[3]}/100 pts`;
  button3.disabled = true;
  button3_1.disabled = true;
  button3_2.disabled = true;

  button4.disabled = false;
  button4_1.disabled = false;
  button4_2.disabled = false;
});
button3_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("play pressed.");

  date3 = new Date();
  dateRecorded.push(date3);
  dateCalMin = Math.abs(dateRecorded[2] - date3) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[2]: ${dateRecorded[2]}`);
  console.log(`date3: ${date3}`);

  scoreRecorded.push(0);
  timeRecorded.push(displayMinOrHr(0));

  description3.textContent = `Skipped with total of ${timeRecorded[3]} = ${scoreRecorded[3]}/100 pts`;
  button3.disabled = true;
  button3_1.disabled = true;
  button3_2.disabled = true;

  button4.disabled = false;
  button4_1.disabled = false;
  button4_2.disabled = false;
});

button4.addEventListener("click", (e) => {
  normalRoutineBoolean=true

  console.log("research pressed.");

  date4 = new Date();
  dateRecorded.push(date4);
  dateCalMin = Math.abs(dateRecorded[3] - date4) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[3]: ${dateRecorded[3]}`);
  console.log(`date4: ${date4}`);

  console.log(" ");
  console.log(dateCalMin);
  console.log(customMinArr[2]);
  console.log(dateCalMin / customMinArr[2]);

  console.log((dateCalMin / customMinArr[2]) * 100);
  console.log(" ");

  let nodividedbyzero = customMinArr[2];
  if (customMinArr[2] === 0) {
    scoreRecorded.push(+dateCalMin.toFixed(2));
  } else {
    scoreRecorded.push(+((dateCalMin / nodividedbyzero) * 100).toFixed(2));
  }
  timeRecorded.push(displayMinOrHr(dateCalMin));

  description4.textContent = `Finished at ${formatAMPM(date4)} with total of ${
    timeRecorded[4]
  } = ${scoreRecorded[4]}/100 pts`;
  button4.disabled = true;
  button4_1.disabled = true;
  button4_2.disabled = true;

  button5.disabled = false;
  button5_1.disabled = false;

  button5_2.disabled = false;
});

button4_1.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("research pressed.");

  date4 = new Date();
  dateRecorded.push(date4);
  dateCalMin = Math.abs(dateRecorded[3] - date4) / 60000;
  dateCalHr = dateCalMin / 60;

  scoreRecorded.push(100);
  timeRecorded.push(displayMinOrHr(customMinArr[2]));

  description4.textContent = `Already done with total of ${timeRecorded[4]} = ${scoreRecorded[4]}/100 pts`;
  button4.disabled = true;
  button4_1.disabled = true;
  button4_2.disabled = true;

  button5.disabled = false;
  button5_1.disabled = false;

  button5_2.disabled = false;
});

button4_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("research pressed.");

  date4 = new Date();
  dateRecorded.push(date4);
  dateCalMin = Math.abs(dateRecorded[3] - date4) / 60000;
  dateCalHr = dateCalMin / 60;

  scoreRecorded.push(0);
  timeRecorded.push(displayMinOrHr(0));

  description4.textContent = `Skipped with total of ${timeRecorded[4]} = ${scoreRecorded[4]}/100 pts`;
  button4.disabled = true;
  button4_1.disabled = true;
  button4_2.disabled = true;

  button5.disabled = false;
  button5_1.disabled = false;

  button5_2.disabled = false;
});

button5.addEventListener("click", (e) => {
  normalRoutineBoolean=true

  console.log("dishes pressed.");

  date5 = new Date();
  dateRecorded.push(date5);
  dateCalMin = Math.abs(dateRecorded[4] - date5) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[4]: ${dateRecorded[4]}`);
  console.log(`date5: ${date5}`);

  scoreRecorded.push(+((dateCalMin / mandatoryMinArr[2]) * 100).toFixed(2));
  timeRecorded.push(displayMinOrHr(dateCalMin));

  description5.textContent = `Finished at ${formatAMPM(date5)} with total of ${
    timeRecorded[5]
  } = ${scoreRecorded[5]}/100 pts`;
  button5.disabled = true;
  button5_1.disabled = true;

  button5_2.disabled = true;

  button6.disabled = false;
  button6_1.disabled = false;

  button6_2.disabled = false;
});

button5_1.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("dishes pressed.");

  date5 = new Date();
  dateRecorded.push(date5);
  dateCalMin = Math.abs(dateRecorded[4] - date5) / 60000;
  dateCalHr = dateCalMin / 60;

  scoreRecorded.push(100);
  timeRecorded.push(displayMinOrHr(mandatoryMinArr[2]));

  description5.textContent = `Already done with total of ${timeRecorded[5]} = ${scoreRecorded[5]}/100 pts`;
  button5.disabled = true;
  button5_1.disabled = true;

  button5_2.disabled = true;

  button6.disabled = false;
  button6_1.disabled = false;

  button6_2.disabled = false;
});

button5_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("dishes pressed.");

  date5 = new Date();
  dateRecorded.push(date5);
  dateCalMin = Math.abs(dateRecorded[4] - date5) / 60000;
  dateCalHr = dateCalMin / 60;

  scoreRecorded.push(0);
  timeRecorded.push(displayMinOrHr(0));

  description5.textContent = `Skipped with total of ${timeRecorded[5]} = ${scoreRecorded[5]}/100 pts`;
  button5.disabled = true;
  button5_1.disabled = true;

  button5_2.disabled = true;

  button6.disabled = false;
  button6_1.disabled = false;

  button6_2.disabled = false;
});

button6.addEventListener("click", (e) => {
  normalRoutineBoolean=true

  console.log("play pressed.");

  date6 = new Date();
  dateRecorded.push(date6);
  dateCalMin = Math.abs(dateRecorded[5] - date6) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[5]: ${dateRecorded[5]}`);
  console.log(`date6: ${date6}`);

  scoreRecorded.push(
    noOver100(+((dateCalMin / (customMinArr[1] / 2)) * 100).toFixed(2))
  );
  timeRecorded.push(displayMinOrHr(dateCalMin));

  description6.textContent = `Finished at ${formatAMPM(date6)} with total of ${
    timeRecorded[6]
  } = ${scoreRecorded[6]}/100 pts`;
  button6.disabled = true;
  button6_1.disabled = true;
  button6_2.disabled = true;

  button7.disabled = false;
  button7_1.disabled = false;

  button7_2.disabled = false;
});

button6_1.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("play pressed.");

  date6 = new Date();
  dateRecorded.push(date6);
  dateCalMin = Math.abs(dateRecorded[5] - date6) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[5]: ${dateRecorded[5]}`);
  console.log(`date6: ${date6}`);

  scoreRecorded.push(100);
  timeRecorded.push(displayMinOrHr(customMinArr[1] / 2));

  description6.textContent = `Already done with total of ${timeRecorded[6]} = ${scoreRecorded[6]}/100 pts`;
  button6.disabled = true;
  button6_1.disabled = true;
  button6_2.disabled = true;

  button7.disabled = false;
  button7_1.disabled = false;

  button7_2.disabled = false;
});

button6_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("play pressed.");

  date6 = new Date();
  dateRecorded.push(date6);
  dateCalMin = Math.abs(dateRecorded[5] - date6) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[5]: ${dateRecorded[5]}`);
  console.log(`date6: ${date6}`);

  scoreRecorded.push(0);
  timeRecorded.push(displayMinOrHr(0));

  description6.textContent = `Skipped with total of ${timeRecorded[6]} = ${scoreRecorded[6]}/100 pts`;
  button6.disabled = true;
  button6_1.disabled = true;
  button6_2.disabled = true;

  button7.disabled = false;
  button7_1.disabled = false;

  button7_2.disabled = false;
});

button7.addEventListener("click", (e) => {
  normalRoutineBoolean=true

  console.log("offline pressed.");

  date7 = new Date();
  dateRecorded.push(date7);
  dateCalMin = Math.abs(dateRecorded[6] - date7) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[6]: ${dateRecorded[6]}`);
  console.log(`date7: ${date7}`);

  scoreRecorded.push(
    noOver100(+((dateCalMin / customMinArr[3]) * 100).toFixed(2))
  );
  timeRecorded.push(displayMinOrHr(dateCalMin));

  description7.textContent = `Finished at ${formatAMPM(date7)} with total of ${
    timeRecorded[7]
  } = ${scoreRecorded[7]}/100 pts`;
  button7.disabled = true;
  button7_1.disabled = true;
  button7_2.disabled = true;

  console.log(scoreRecorded);
  displayScore();

  //modal jump?
});

button7_1.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("offline pressed.");

  date7 = new Date();
  dateRecorded.push(date7);
  dateCalMin = Math.abs(dateRecorded[6] - date7) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[6]: ${dateRecorded[6]}`);
  console.log(`date7: ${date7}`);

  scoreRecorded.push(100);
  timeRecorded.push(displayMinOrHr(customMinArr[3]));

  description7.textContent = `Already done with total of ${timeRecorded[7]} = ${scoreRecorded[7]}/100 pts`;
  button7.disabled = true;
  button7_1.disabled = true;
  button7_2.disabled = true;

  console.log(scoreRecorded);
  displayScore();

  //modal jump?
});

button7_2.addEventListener("click", (e) => {
    normalRoutineBoolean=true

  console.log("offline pressed.");

  date7 = new Date();
  dateRecorded.push(date7);
  dateCalMin = Math.abs(dateRecorded[6] - date7) / 60000;
  dateCalHr = dateCalMin / 60;

  console.log(`dateRecorded[6]: ${dateRecorded[6]}`);
  console.log(`date7: ${date7}`);

  scoreRecorded.push(0);
  timeRecorded.push(displayMinOrHr(0));

  description7.textContent = `Skipped with total of ${timeRecorded[7]} = ${scoreRecorded[7]}/100 pts`;
  button7.disabled = true;
  button7_1.disabled = true;
  button7_2.disabled = true;

  console.log(scoreRecorded);
  displayScore();

  //modal jump?
});

function displayScore() {
  console.log(`scoreRecorded: ${scoreRecorded}`);

  const sum1 = scoreRecorded.reduce((partialSum, a) => partialSum + a, 0);
  console.log(`sum1: ${sum1}`);

  let totalTimeRecorded = 0;
  someNum = timeRecorded[1].split(" ");
  totalTimeRecorded += +someNum[0];
  someNum = timeRecorded[2].split(" ");
  totalTimeRecorded += +someNum[0];
  someNum = timeRecorded[5].split(" ");
  totalTimeRecorded += +someNum[0];

  discordTextOutput2.textContent =
    "+-----------------{Your Total Score}-------------------+\n" +
    `${scoreRecorded}` +
    "\n" +
    `Study/Code: ${scoreRecorded[0]} points with ${timeRecorded[0]}` +
    "\n" +
    `cook & eat/walk/dishes(x${mandatoryRatio[0]}/x${mandatoryRatio[1]}/x${
      mandatoryRatio[2]
    }): ${(scoreRecorded[1] + scoreRecorded[2] + scoreRecorded[5]).toFixed(
      2
    )} points with ${displayMinOrHr(totalTimeRecorded)}` +
    "\n" +
    `Play Time(x${customRatio[0]}): ${
      scoreRecorded[3] + scoreRecorded[6]
    } points with ${timeRecorded[3] + timeRecorded[6]}` +
    "\n" +
    `Research/Important(x${customRatio[1]}): ${scoreRecorded[4]} points with ${timeRecorded[4]}` +
    "\n" +
    `Offline/Linux(x${mandatoryRatio[3]}): ${scoreRecorded[7]} points with ${timeRecorded[7]}` +
    "\n" +
    `total Score: ${((sum1 / 500) * 100).toFixed(2)}/100` +
    "\n" +
    "+-------------------------------------------------------+";
  dateRecorded = [];
  scoreRecorded = [];
  timeRecorded = [];
  scoreRecorded.push(+((new Date() / new Date()) * 100).toFixed(2));
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  //var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  //seconds = seconds < 10 ? '0'+seconds : seconds;

  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function display() {
  button1.disabled = false;
  discordTextOutput2.textContent = "";

  dateNow = new Date();
  check = pomodoro[2].split(":");
  if (check[0] >= 12) {
    dateTmr = new Date(
      `${dateNow.getFullYear()}-${
        dateNow.getMonth() + 1
      }-${dateNow.getDate()} ` + pomodoro[2]
    );
  } else {
    dateTmr = new Date(
      `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${
        dateNow.getDate() + 1
      } ` + pomodoro[2]
    );
  }

  minutes = pomodoro[1] * pomodoro[0];
  hours = minutes / 60;

  //#tmr
  let totalDate = new Date();
  totalDate.setMinutes(totalDate.getMinutes() - minutes);
  RemainingMiliseconds = Math.abs(totalDate - dateTmr);
  RemainingMinutes = RemainingMiliseconds / 60000;
  RemainingHours = RemainingMinutes / 60;

  appendTable();

  body.appendChild(discord);
  discord.appendChild(underline);
  body.appendChild(wrapper);
  wrapper.appendChild(discordTextOutput);
  wrapper.appendChild(discordTextOutput2);

  reset();
  let totalHours = 0;
  let totalMinutes = 0;
  //[*cook & eat*/*walk*/*Dishes*/*offline*] mandatory pos[0,1]
  totalHours += 0.5;
  totalMinutes += 30;
  mandatoryHrArr.push(+(0.5 * mandatoryRatio[0]).toFixed(1));
  mandatoryMinArr.push(+(30 * mandatoryRatio[0]).toFixed(0));

  totalHours += 1;
  totalMinutes += 60;
  mandatoryHrArr.push(+(1 * mandatoryRatio[1]).toFixed(1));
  mandatoryMinArr.push(+(60 * mandatoryRatio[1]).toFixed(0));

  totalHours += 0.33;
  totalMinutes += 20;
  mandatoryHrArr.push(+(0.33 * mandatoryRatio[2]).toFixed(1));
  mandatoryMinArr.push(+(20 * mandatoryRatio[2]).toFixed(0));

  totalHours += 0.5;
  totalMinutes += 30;
  mandatoryHrArr.push(+(0.5 * mandatoryRatio[3]).toFixed(1));
  mandatoryMinArr.push(+(30 * mandatoryRatio[3]).toFixed(0));

  //Study/code is part of customHrArr but is a special case since the number relates to research and play time
  //[study, play, research] custom pos[0,1,2, ]
  for (let i = 0; i < 3; i++) {
    totalHours += hours;
    totalMinutes += minutes;

    if (i == 0) {
      customHrArr.push(hours);
      customMinArr.push(minutes);
    } else if (totalHours < RemainingHours) {
      customHrArr.push(+(hours * customRatio[i - 1]).toFixed(1));
      customMinArr.push(+(minutes * customRatio[i - 1]).toFixed(0));
    } else {
      //totalHours > RemainingHours
      if (RemainingHours - (totalHours - hours) < 0) {
        //check if the calculation goes negative then automatically 0
        customHrArr.push(0);
        customMinArr.push(0);
      } else {
        customHrArr.push(
          +(
            (RemainingHours - (totalHours - hours)) *
            customRatio[i - 1]
          ).toFixed(1)
        );
        customMinArr.push(
          +(
            (RemainingMinutes - (totalMinutes - minutes)) *
            customRatio[i - 1]
          ).toFixed(0)
        );
      }
    }
  }

  //custom pos[,,,3] offline
  const sum =
    mandatoryHrArr.reduce((partialSum, a) => partialSum + a, 0) +
    customHrArr.reduce((partialSum, a) => partialSum + a, 0);
  const sum2 =
    mandatoryMinArr.reduce((partialSum, a) => partialSum + a, 0) +
    customMinArr.reduce((partialSum, a) => partialSum + a, 0);

  if (sum > RemainingHours) {
    console.log(` `);

    customHrArr.push(mandatoryHrArr[3]);
    customMinArr.push(mandatoryMinArr[3]);
  } else {
    customHrArr.push(+(RemainingHours - sum + mandatoryHrArr[3]).toFixed(1));
    customMinArr.push(
      +(RemainingMinutes - sum2 + mandatoryMinArr[3]).toFixed(0)
    );
  }
  //custom pos[,,,,4] total
  const totalSum =
    mandatoryHrArr.reduce((partialSum, a) => partialSum + a, 0) +
    customHrArr.reduce((partialSum, a) => partialSum + a, 0);
  const totalSum2 =
    mandatoryMinArr.reduce((partialSum, a) => partialSum + a, 0) +
    customMinArr.reduce((partialSum, a) => partialSum + a, 0);

  customHrArr.push(+totalSum.toFixed(1));
  customMinArr.push(+totalSum2.toFixed(0));

  //just in case
  customHrArr[0] = +customHrArr[0].toFixed(1);
  customMinArr[0] = +customMinArr[0].toFixed(0);

  timeRecorded.push(displayMinOrHr(customMinArr[0]));
  scoreRecorded.push((customMinArr[0] / 150) * 100);

  caption1.textContent = "Great job! Here's your estimate data :)";
  //study
  td2.textContent = `${customHrArr[0]}`;
  td3.textContent = `${customMinArr[0]}`;
  //cook
  td4.textContent = `${mandatoryHrArr[0]}`;
  td5.textContent = `${mandatoryMinArr[0]}`;
  //walk
  td6.textContent = `${mandatoryHrArr[1]}`;
  td7.textContent = `${mandatoryMinArr[1]}`;
  //play part 1
  td8.textContent = `(${customHrArr[1]}) ${customHrArr[1] / 2}`;
  td9.textContent = `(${customMinArr[1]}) ${customMinArr[1] / 2}`;
  //research
  td10.textContent = `${customHrArr[2]}`;
  td11.textContent = `${customMinArr[2]}`;
  //dish
  td12.textContent = `${mandatoryHrArr[2]}`;
  td13.textContent = `${mandatoryMinArr[2]}`;
  //play part 2
  td14.textContent = `${customHrArr[1] / 2}`;
  td15.textContent = `${customMinArr[1] / 2}`;
  //offline
  td16.textContent = `(${mandatoryHrArr[3]}) ${customHrArr[3]}`;
  td17.textContent = `(${mandatoryMinArr[3]}) ${customMinArr[3]}`;
  //total
  td19.textContent = `${customHrArr[4]}`;
  td20.textContent = `${customMinArr[4]}`;

  dateRecorded.push(new Date());
  description0.textContent = `Finished at ${formatAMPM(
    dateRecorded[0]
  )} with total of ${displayMinOrHr(customMinArr[0])} = ${
    scoreRecorded[0]
  }/100 pts `;
  description1.textContent = "<= click here to record your cook & eat time! ";
  description2.textContent = "<= click here to record your walk time!";
  description3.textContent = "<= click here to record your play time!";
  description4.textContent =
    "<= click here to record your research/important time!";
  description5.textContent = "<= click here to record your dishes time!";
  description6.textContent = "<= click here to record your play time!";
  description7.textContent = "<= click here to record your Offline/Chill time!";

  //dateNow Time
  caption2.textContent = "Today's schedule!";
  let tempDate = new Date();
  tempDate.setMinutes(tempDate.getMinutes() - customMinArr[0]);
  let originDate = formatAMPM(tempDate);
  //study
  td2_2.textContent = `${formatAMPM(tempDate)}`;
  td2_3.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + customMinArr[0]);
  dateNow.setMinutes(dateNow.getMinutes() + mandatoryMinArr[0]);
  //cook
  td2_4.textContent = `${formatAMPM(tempDate)}`;
  td2_5.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + mandatoryMinArr[0]);
  dateNow.setMinutes(dateNow.getMinutes() + mandatoryMinArr[1]);
  //play
  td2_6.textContent = `${formatAMPM(tempDate)}`;
  td2_7.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + mandatoryMinArr[1]);
  dateNow.setMinutes(dateNow.getMinutes() + customMinArr[1] / 2);
  //research
  td2_8.textContent = `${formatAMPM(tempDate)}`;
  td2_9.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + customMinArr[1] / 2);
  dateNow.setMinutes(dateNow.getMinutes() + customMinArr[2]);
  //dishes
  td2_10.textContent = `${formatAMPM(tempDate)}`;
  td2_11.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + customMinArr[2]);
  dateNow.setMinutes(dateNow.getMinutes() + mandatoryMinArr[2]);
  //play
  td2_12.textContent = `${formatAMPM(tempDate)}`;
  td2_13.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + mandatoryMinArr[2]);
  dateNow.setMinutes(dateNow.getMinutes() + customMinArr[1] / 2);
  //offline
  td2_14.textContent = `${formatAMPM(tempDate)}`;
  td2_15.textContent = `${formatAMPM(dateNow)}`;
  tempDate.setMinutes(tempDate.getMinutes() + customMinArr[1] / 2);
  dateNow.setMinutes(dateNow.getMinutes() + customMinArr[3]);
  //??
  td2_16.textContent = `${formatAMPM(tempDate)}`;
  td2_17.textContent = `${formatAMPM(dateNow)}`;

  td2_18.textContent = `${originDate}`;
  td2_19.textContent = `${formatAMPM(dateNow)}`;

  underline.textContent = "Copy text to discord:";
  discordTextOutput.textContent =
    "+-----------------{My plan for today}-------------------+\n" +
    `Pomodoro (${pomodoro[0]} min): ${pomodoro[1]}` +
    "\n" +
    `Study/Code: ${customHrArr[0]} hours; ${customMinArr[0]} minutes  ` +
    "\n" +
    `Play Time (x${customRatio[0]}): ${customHrArr[1]} hours; ${customMinArr[1]} minutes  ` +
    "\n" +
    `Cook & Eat/walk/dishes (x${mandatoryRatio[0]}/x${mandatoryRatio[1]}/x${
      mandatoryRatio[2]
    }): ${mandatoryHrArr[0] + mandatoryHrArr[1] + mandatoryHrArr[2]} hours; ${
      mandatoryMinArr[0] + mandatoryMinArr[1] + mandatoryMinArr[2]
    } minutes` +
    "\n" +
    `Research/Important (x${customRatio[1]}): ${customHrArr[2]} hours;  ${customMinArr[2]} minutes` +
    "\n" +
    `Offline/Linux(x${mandatoryRatio[3]}): ${customHrArr[3]} hours; ${customMinArr[3]} minutes` +
    "\n" +
    "+-------------------------------------------------------+";

  anychart.onDocumentReady(function () {
    // set the data
    let data = [
      { x: "Study/Code", value: customHrArr[0], normal: { fill: "PaleGreen" } },
      {
        x: "Cook & eat",
        value: mandatoryHrArr[0],
        normal: { fill: "LightCyan" },
      },
      {
        x: "walk",
        value: mandatoryHrArr[1],
        normal: { fill: "LightGoldenrodYellow" },
      },
      {
        x: "Play",
        value: customHrArr[1] / 2,
        normal: { fill: "PaleTurquoise" },
      },
      {
        x: "Research/Important",
        value: customHrArr[2],
        normal: { fill: "MistyRose	" },
      },
      { x: "dishes", value: mandatoryHrArr[2], normal: { fill: "Lavender" } },
      {
        x: "Play",
        value: customHrArr[1] / 2,
        normal: { fill: "PaleTurquoise" },
      },
      {
        x: "Offline/Linux",
        value: customHrArr[3],
        normal: { fill: "Honeydew	" },
      },
    ];

    // create the pieChart
    let pieChart = anychart.pie();

    // set the pieChart title
    pieChart.title("Time Schedule");

    // add the data
    pieChart.data(data);

    var labels = pieChart.labels();

    labels.fontColor("black");
    labels.fontWeight(400);

    // display the pieChart in the container
    pieChart.container("container");
    pieChart.draw();
  });

  let hasSVG = document.querySelector("svg") != null;
  if (hasSVG) {
    body.querySelector("svg").remove();
  }
  /*
      svg.addEventListener("onmouseenter",e=>{
        console.log(e)
    }, {once : true});
    */
  //bug fix potential!!!!I may want to try body[1] to find SVG to delete!!!!
  //instruction
  const div10 = document.createElement("pre");
  div10.textContent =
    "! is exclusive \n* is mandatory \n+ can go over 100 points\n default pomodoro aim is 5 or 150 mins";
  const divclass = document.createAttribute("class");
  divclass.value = "fixed";
  div10.setAttributeNode(divclass);
  body.appendChild(div10);
}
