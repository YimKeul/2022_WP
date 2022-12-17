var student = [];
var setting = false;
let add_class;
const name = document.getElementById("name");
const webScore = document.getElementById("webscore");
const itScore = document.getElementById("ITscore");
const createScore = document.getElementById("Createscore");
const otherClass = document.getElementById("otherclass");
const addBtn = document.getElementById("addbtn");
const searchName = document.getElementById("searchvalue");
const searchBtn = document.getElementById("searchbtn");
const searchResult = document.getElementById("searchresult");
const addClass = document.getElementById("addclass");

function StudentInfo(name, webScore, ITScore, createScore) {
  this.name = name;
  this.webscore = parseInt(webScore);
  this.ITscore = parseInt(ITScore);
  this.createscore = parseInt(createScore);

  this.sum = function () {
    if (this.otherscore != null) {
      return this.webscore + this.ITscore + this.createscore + this.otherscore;
    } else {
      return this.webscore + this.ITscore + this.createscore;
    }
  };
}

addBtn.addEventListener("click", () => {
  alert(name.value + "학생 정보가 저장되었습니다.");
  student.push(
    new StudentInfo(
      name.value,
      webScore.value,
      itScore.value,
      createScore.value
    )
  );
  // console.log(student);
  if (setting == true) {
    StudentInfo.prototype.otherscore = parseInt(otherClass.value);
    const resultText = document.getElementById("resultText");
    const Content = add_class + "을 추가하셨습니다.";
    resultText.innerHTML = Content;
    setting = false;
  }
});

searchBtn.addEventListener("click", () => {
  searchResult.innerHTML = "";
  for (var i = 0; i < student.length; i++) {
    if (student[i].name == searchName.value) {
      const InnerTable =
        "<tr><th>학생 이름</th><th>웹프로그래밍</th><th>IT 영어</th><th>창업 실습</th><th>os</th><th>합계</th></tr>" +
        "<tr><td>" +
        student[i].name +
        "</td><td>" +
        student[i].webscore +
        "</td><td>" +
        student[i].ITscore +
        "</td><td>" +
        student[i].createscore +
        "</td><td>" +
        student[i].otherscore +
        "</td><td>" +
        student[i].sum() +
        "</td></tr>";

      searchResult.innerHTML = InnerTable;
    }
  }
});

addClass.addEventListener("click", () => {
  setting = true;
  add_class = prompt("새로 추가할 과목 이름을 입력하세요:", "OS");
});
