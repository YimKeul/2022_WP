//추가 모달 변수들
const inputText = document.getElementById("inputText");
const importBox = document.getElementById("importBox");
const weekStart = document.getElementById("weekStart");
const weekFin = document.getElementById("weekFin");
const timeStart = document.getElementById("timeStart");
const timeFin = document.getElementById("timeFin");
// 수정 모달 변수
const inputText2 = document.getElementById("inputText2");
const importBox2 = document.getElementById("importBox2");
const weekStart2 = document.getElementById("weekStart2");
const weekFin2 = document.getElementById("weekFin2");
const timeStart2 = document.getElementById("timeStart2");
const timeFin2 = document.getElementById("timeFin2");
//버튼
const submitBtn = document.getElementById("submitBtn");
const deletBtn = document.getElementById("deletBtn");
const editBtn = document.getElementById("editBtn"); //수정
const editFinBtn = document.getElementById("editFinBtn"); //수정완료
//테이블 변수
const todoBox = document.querySelectorAll(".todoBox");
const td = document.getElementsByClassName("todoBox");
// 정렬 버튼
const sortingBox = document.getElementById("sortingBox");
sortingBox.value = "base"; //초기 정렬값

//추가 모달
function open() {
  document.querySelector(".modal").classList.remove("hidden");
}
function close() {
  document.querySelector(".modal").classList.add("hidden");
  addModalDataReset();
}
// 추가 모달 데이터 초기화
function addModalDataReset() {
  inputText.value = "";
  importBox.value = "상";
  weekStart.value = 0;
  weekFin.value = 0;
  timeStart.value = null;
  timeFin.value = null;
}

// 수정 모달

//수정->수정완료 버튼
//데이터 수정 활성화 , 수정->수정완료 버튼 표시
function editToeditFinBtn() {
  doEnabled();
  document.querySelector(".editBtn").classList.add("hidden");
  document.querySelector(".editFinBtn").classList.remove("hidden");
}

//수정완료 -> 데이터 저장 및 닫기
//수정완료 -> 수정 버튼 표시
function editFinToeditBtn(p) {
  document.querySelector(".editFinBtn").classList.add("hidden");
  document.querySelector(".editBtn").classList.remove("hidden");

  p = {
    id: p.id,
    IT: inputText2.value,
    IB: importBox2.value,
    WS: weekStart2.value,
    WF: weekFin2.value,
    TS: timeStart2.value,
    TF: timeFin2.value,
  };
  // console.log("editFinToeditBtn : p :: ", p);
  modifyTodo(p);
}

// 수정할 수 있는 모달 열기
function openModifyModal(p) {
  document.querySelector(".modal2").classList.remove("hidden");
  doDisabled();
  let props = p;
  //데이터표시
  inputText2.value = props.IT;
  importBox2.value = props.IB;
  weekStart2.value = props.WS;
  weekFin2.value = props.WF;
  timeStart2.value = props.TS;
  timeFin2.value = props.TF;

  // --2번실행
  setPassData({
    id: props.id,
    IT: inputText2.value,
    IB: importBox2.value,
    WS: weekStart2.value,
    WF: weekFin2.value,
    TS: timeStart2.value,
    TF: timeFin2.value,
  });

  const checkpassdata = getPassData();

  // console.log("openModifyModal : passdata :: ", checkpassdata);
}

let passData;
function setPassData(pd) {
  passData = pd;
  console.log("passData : ", passData);
}
function getPassData() {
  return passData;
}

let DB = [];
let id = DB.length;

function setDB(newDB) {
  DB = newDB;
  console.log("setDB : ", DB);
}

function getDB() {
  return DB;
}
//DB 전체값 업데이트
function updateDB() {
  const newId = id++;
  const newDB = [
    ...getDB(),
    {
      id: newId,
      IT: inputText.value,
      IB: importBox.value,
      WS: weekStart.value,
      WF: weekFin.value,
      TS: timeStart.value,
      TF: timeFin.value,
    },
  ];
  setDB(newDB);
}
//DB 특정ID값부터 업데이트 --삭제때사용
function updateDBID(temp) {
  let popStartID = temp.id;
  let allDB = getDB();
  for (let i = popStartID; i < getDB().length; i++) {
    allDB[i].id -= 1;
  }
  setDB(allDB);
}

//
function closeModifyModal() {
  document.querySelector(".modal2").classList.add("hidden");
  //   modifyModalDataReset();
}
//비활성화
function doDisabled() {
  inputText2.disabled = true;
  importBox2.disabled = true;
  weekStart2.disabled = true;
  weekFin2.disabled = true;
  timeStart2.disabled = true;
  timeFin2.disabled = true;
}
//활성화
function doEnabled() {
  inputText2.disabled = false;
  importBox2.disabled = false;
  weekStart2.disabled = false;
  weekFin2.disabled = false;
  timeStart2.disabled = false;
  timeFin2.disabled = false;
}

/* check Validation*/
function checkIT() {
  if (inputText.value == null || inputText.value == "") {
    alert("일정을 입력해 주세요.");
    return false;
  } else {
    return true;
  }
}

function checkIB() {
  if (importBox.value) {
    return true;
  } else {
    return false;
  }
}

function checkWeek() {
  if (weekStart.value > weekFin.value) {
    alert("요일 범위를 올바르게 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

function checkTime() {
  if (timeStart.value > timeFin.value) {
    alert("시간 범위를 올바르게 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

function isValidation() {
  if (checkIT() && checkIB() && checkWeek() && checkTime()) {
    return true;
  } else {
    return false;
  }
}

/* check Validation2*/

function checkIT2(temp) {
  if (temp == null || temp == "") {
    alert("일정을 입력해 주세요.");
    return false;
  } else {
    return true;
  }
}

function checkIB2(temp) {
  if (temp) {
    return true;
  } else {
    console.log("IB");

    return false;
  }
}

function checkWeek2(temp1, temp2) {
  if (temp1 > temp2) {
    alert("요일 범위를 올바르게 입력해주세요.");

    return false;
  } else {
    return true;
  }
}

function checkTime2(temp1, temp2) {
  if (temp1 > temp2) {
    alert("시간 범위를 올바르게 입력해주세요.");
    return false;
  } else {
    return true;
  }
}

function isValidation2(target) {
  if (
    checkIT2(target.IT) &&
    checkIB2(target.IB) &&
    checkWeek2(target.WS, target.WF) &&
    checkTime2(target.TS, target.TF)
  ) {
    console.log("통과");
    return true;
  } else {
    console.log("실패");
    return false;
  }
}

//추가
function addTodo() {
  if (isValidation) {
    updateDB();
    const AfterSort = Sort(getDB());
    addMakeTest(AfterSort);
    close();
  }
}

//수정
function modifyTodo(IDB) {
  if (isValidation2(IDB)) {
    let newDB = getDB();
    newDB[IDB.id] = IDB;
    setDB(newDB);
    let update = getDB();
    const AfterSort = Sort(update);
    addMakeTest(AfterSort);
    closeModifyModal();
  }
}

//삭제
function deletData(IDB) {
  let newDB = getDB();
  newDB.splice(IDB.id, 1);
  updateDBID(IDB);
  let update = getDB();
  const AfterSort = Sort(update);
  addMakeTest(AfterSort);
  // addMakeTest(update);
  closeModifyModal();
}

//정렬
function Sort(IDB) {
  const allDB = IDB;

  let priResult;
  let nameResult;
  let timeResult;
  let elseResult;

  if (sortingBox.value == "primary") {
    priResult = allDB.sort(function (a, b) {
      let x = a.IB.toLowerCase();
      let y = b.IB.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    addMakeTest(priResult);
    return priResult;
  } else if (sortingBox.value == "name") {
    nameResult = allDB.sort(function (a, b) {
      let x = a.IT.toLowerCase();
      let y = b.IT.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    addMakeTest(nameResult);
    return nameResult;
  } else if (sortingBox.value == "time") {
    timeResult = allDB.sort(function (a, b) {
      let x = a.TS;
      let y = b.TS;
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    addMakeTest(timeResult);
    return timeResult;
  } else {
    elseResult = allDB.sort((a, b) => a.id - b.id);
    addMakeTest(elseResult);
    return elseResult;
  }
}

//테이블 지우기
function clearDisplay() {
  for (let i = 0; i < todoBox.length; i++) {
    todoBox[i].innerHTML = null;
  }
}

//그리는 틀
function addMakeTest(IDB) {
  clearDisplay();
  console.log("그리기 시작");
  const allDB = IDB;

  allDB.forEach((db) => {
    for (let i = db.WS; i <= db.WF; i++) {
      const ul = document.createElement("ul");
      ul.style.borderRadius = "8px";
      ul.style.paddingBlock = "20px";
      if (db.IB == "상") {
        ul.style.background = "red";
        ul.style.border = "2px solid red";
      } else if (db.IB == "중") {
        ul.style.background = "yellow";
        ul.style.border = "2px solid yellow";
      } else {
        ul.style.background = "green";
        ul.style.border = "2px solid green";
      }
      const title = document.createElement("li");
      const time = document.createElement("li");
      title.appendChild(document.createTextNode(db.IT));
      time.appendChild(
        document.createTextNode("시간 : " + db.TS + "~" + db.TF)
      );
      ul.appendChild(title);
      ul.appendChild(time);
      ul.addEventListener("click", (e) => {
        openModifyModal(db);
      });

      td[i].appendChild(ul);
    }
  });
}

document.getElementById("openBtn").addEventListener("click", open);
document.getElementById("closeBtn").addEventListener("click", close);
document.getElementById("closeModalBtn").addEventListener("click", close);
document.getElementsByClassName("bg")[0].addEventListener("click", close);

document
  .getElementById("closeBtn2")
  .addEventListener("click", closeModifyModal); //X버튼
document
  .getElementById("closeModal2Btn")
  .addEventListener("click", closeModifyModal); //취소버튼
document
  .getElementsByClassName("bg2")[0]
  .addEventListener("click", closeModifyModal); //배경

inputText.addEventListener("change", checkIT);
importBox.addEventListener("change", checkIB);
weekStart.addEventListener("change", checkWeek);
weekFin.addEventListener("change", checkWeek);
timeStart.addEventListener("change", checkTime);
timeFin.addEventListener("change", checkTime);

//버튼 별 클릭 함수 추가
editBtn.addEventListener("click", (e) => editToeditFinBtn());

editFinBtn.addEventListener("click", (e) => editFinToeditBtn(passData));

deletBtn.addEventListener("click", (e) => deletData(passData));

submitBtn.addEventListener("click", addTodo);
sortingBox.addEventListener("change", (e) => Sort(getDB()));
