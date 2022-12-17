let infoArray = [];
let newSubjects = [];

let sArray =[];
let i = 0;
let j = 0;

let sums;

let subs = [];

let mySubject;

document.getElementById("c1").addEventListener("click",findInfo);
document.getElementById("a1").addEventListener("click",saveInfo);
document.getElementById("b1").addEventListener("click",addInfo);

//클래스 정의
function StudentInfo(name, subs) {
  this.studentName = name;
  this.webPrograming = parseInt(subs[0]);
  this.itEnglish = parseInt(subs[1]);
  this.startupPractice = parseInt(subs[2]);

  this.sums = function(subjectList) {

          let stusum = 0;

          for(l=0; l < subjectList.length ; l++) {

              stusum = subjectList[l] + stusum;
          }
           
          return stusum;
    }
}

function addInfo() {

    let text;
    let newS = prompt("새로 추가할 과목 이름을 입력하세요:", "OS");
    if (newS == null || newS == "") {
      text = "취소하셨습니다. ";
    } else {
      text = newS + "을 추가하셨습니다.";
    }
    document.getElementById("demo").innerHTML = text;

    let newS1 = {

          news : function (addSub) {
            return parseInt(addSub);
          }
          
    };

    StudentInfo.prototype = newS1;
}

//테이블의 내용을 객체형태로 배열로 저장하기
function saveInfo() {

    let subjectList=[];
    let subjectnewList=[];

    let nameVal1 = document.getElementById("name2").value;

    let classList= document.getElementsByClassName("classS");

    for (m=0; m < classList.length; m++) {

      if (classList[m] !== '') {

        subjectList[m] = classList[m].value;
      }

    }

   mySubject = new StudentInfo(nameVal1, subjectList);

   infoArray[0] = mySubject.studentName;

   infoArray[1] = mySubject.webPrograming;

   sArray[0] = infoArray[1];
   
   infoArray[2] = mySubject.itEnglish;

   sArray[1] = infoArray[2];
   
   infoArray[3] = mySubject.startupPractice;

   sArray[2] = infoArray[3];

   if(mySubject.news !== undefined) {

     infoArray[4] = mySubject.news(subjectList[3]);

     sArray[3] = infoArray[4];

  }

   subs = mySubject.sums(sArray);  

   i++;

  }


// 이름과 일치하는 값을 받아, sum() 메소드에 배열로 넘겨 준 후 합계를 리턴 받기
// 결과는 테이블로 출력
function findInfo() {

  let arrSubject = [];
  let subjectSum= [];

  let para = document.getElementById('sresult');

  if(para.childNodes.length > 0) {
    $("#sresult").empty();  // 이전 화면에서 결과 테이블 지우기
  }
  
  let findname = document.getElementById("sname1").value;
  
  for (let k=0; k < infoArray.length ; k++) {


     if (infoArray[0] == findname) {

       arrSubject[0] = infoArray[1];
       arrSubject[1] = infoArray[2];
       arrSubject[2] = infoArray[3];
       arrSubject[3] = infoArray[4];

        break;
    }

   }

    // DOM을 이용하여 결과 테이블 만들기
    const para0 = document.createElement("tr");
    const para1 = document.createElement("th");
    const node1  = document.createTextNode("학생 이름");
    para1.appendChild(node1);

    const para2 = document.createElement("th");
    const node2  = document.createTextNode("웹프로그래밍");
    para2.appendChild(node2);

    const para3 = document.createElement("th");
    const node3  = document.createTextNode("IT 영어");
    para3.appendChild(node3);

    const para4 = document.createElement("th");
    const node4  = document.createTextNode("창업 실습");
    para4.appendChild(node4);

    const para5 = document.createElement("th");
    const node5  = document.createTextNode("os");
    para5.appendChild(node5);

    const para6 = document.createElement("th");
    const node6  = document.createTextNode("합계");
    para6.appendChild(node6);

    const para00 = document.createElement("tr");
    const para11 = document.createElement("td");
    const node11  = document.createTextNode(findname);
    para11.appendChild(node11);

    const para22 = document.createElement("td");
    const node22  = document.createTextNode(arrSubject[0]);
    para22.appendChild(node22);

    const para33 = document.createElement("td");
    const node33  = document.createTextNode(arrSubject[1]);
    para33.appendChild(node33);

    const para44 = document.createElement("td");
    const node44  = document.createTextNode(arrSubject[2]);
    para44.appendChild(node44); 

    const para55 = document.createElement("td");
    const node55  = document.createTextNode(arrSubject[3]);
    para55.appendChild(node55); 

    const para66 = document.createElement("td");
    const node66  = document.createTextNode(subs);
    para66.appendChild(node66);

    para0.appendChild(para1);
    para0.appendChild(para2);
    para0.appendChild(para3);
    para0.appendChild(para4);
    para0.appendChild(para5);
    para0.appendChild(para6);

    para00.appendChild(para11);
    para00.appendChild(para22);
    para00.appendChild(para33);
    para00.appendChild(para44);
    para00.appendChild(para55);
    para00.appendChild(para66);

    para.appendChild(para0);
    para.appendChild(para00);
  }