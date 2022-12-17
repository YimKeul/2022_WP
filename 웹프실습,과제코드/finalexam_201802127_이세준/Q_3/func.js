const canvas_ = document.getElementById("canvas");
const ctx = canvas_.getContext("2d");
const MAX_VALUE = 100;

const Area = [];
const inputRegion = document.getElementById("inputRegion");
const firstRatio = document.getElementById("firstRatio");
const secondRatio = document.getElementById("secondRatio");

const saveBtn = document.getElementById("saveBtn");
const addBtn = document.getElementById("addBtn");

function AreaInfo(inputRegion, firstRatio, secondRatio, overRatio) {
  this.inputRegion = inputRegion;
  this.firstRatio = firstRatio;
  this.secondRatio = secondRatio;
  this.overRatio =
    AreaInfo.prototype.overRatio === undefined ? undefined : overRatio;
  this.Avg = function () {
    return (this.firstRatio + this.secondRatio) / 2;
  };
}

saveBtn.addEventListener("click", () => {
  Area.push(
    new AreaInfo(
      inputRegion.value,
      firstRatio.value,
      secondRatio.value,
      overRatio.value
    )
  );
  alert("저장되었습니다.");
  if (this.overRatio != null) {
    console.log("tt", Area);
  } else {
    console.log(Area);
  }
});

var count = 3;

const inputBoxArea = document.getElementById("inputBoxArea");

addBtn.addEventListener("click", () => {
  if (confirm("접종 횟수를 추가하시겠습니까?")) {
    // console.log("ttt");
    const inputBox = document.createElement("input");
    inputBox.id = "overRatio";
    inputBox.placeholder = count + "차 접종";
    inputBox.type = "text";

    inputBoxArea.appendChild(inputBox);
    count += 1;
    AreaInfo.prototype.overRatio = inputBox.innerText;
  } else {
    console.log("ddd");
  }
});
