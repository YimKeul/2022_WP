const AddActor = document.getElementById("AddActor");
const DelActor = document.getElementById("DelActor");
const AddInfo = document.getElementById("AddInfo");
const SearchPlace = document.getElementById("SearchPlace");
const Place = document.getElementsByClassName("Place");
const Date_ = document.getElementById("Date");
const Title = document.getElementById("Title");
const Director = document.getElementById("Director");
const Actor = document.getElementsByClassName("Actor");

Title.addEventListener("change", () => {
  if (Title.value != "") {
    Title.style.backgroundColor = "#E8F0FE";
  }
});

Director.addEventListener("change", () => {
  if (Director.value != "") {
    Director.style.backgroundColor = "#E8F0FE";
  }
});
Actor[0].addEventListener("change", () => {
  if (Actor[0].value != "") {
    Actor[0].style.backgroundColor = "#E8F0FE";
  }
});

//배우 추가
AddActor.addEventListener("click", () => {
  if (Actor.length < 3) {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "Actor";
    input.name = "Actor[]";
    document.getElementById("ActorBox").appendChild(input);
  }
  for (let i = 0; i < Actor.length; i++) {
    Actor[i].addEventListener("change", () => {
      if (Actor[i].value != "") {
        Actor[i].style.backgroundColor = "#E8F0FE";
      }
    });
  }
});
//베우 삭제
DelActor.addEventListener("click", () => {
  if (Actor.length > 1) {
    Actor[Actor.length - 1].remove();
  }
});

//input 활성화
SearchPlace.addEventListener("click", () => {
  StartSave();
});
//input 비활성화
AddInfo.addEventListener("click", () => {
  AddInfo_();
  EndSave();
});

//input 활성화 함수
function StartSave() {
  if (Date_.value != "") {
    AddInfo.disabled = false;
    for (let i = 0; i < Place.length; i++) {
      Place[i].disabled = false;
    }
  }
}
//input 비활성화 함수
function EndSave() {
  AddInfo.disabled = true;
}

//영화상영 정보 추가
function AddInfo_() {
  const placelist = document.getElementsByName("PlaceRadio");
  var isPlace;
  placelist.forEach((node) => {
    if (node.checked) {
      isPlace = node.value;
    }
  });
  var enter = document.createElement("br");
  var label = document.createElement("label");
  label.className = "Labels";
  var input = document.createElement("input");
  input.type = "text";
  input.className = "AddInfoData";
  input.name = "AddInfoData[]";
  input.value = Date_.value + "," + isPlace;
  if (CheckAddInfo_(input.value)) {
    const AddInfoBox = document.getElementById("AddInfoBox");
    AddInfoBox.appendChild(enter);
    AddInfoBox.appendChild(label);
    AddInfoBox.appendChild(input);
  }
}

function CheckAddInfo_(target) {
  var AID = document.getElementsByClassName("AddInfoData");

  // console.log("test : " + AID.value + " " + AID.length);
  for (let i = 0; i < AID.length; i++) {
    if (target == AID[i].value) {
      alert("같은 날짜에 이미 추가되었습니다.");
      return false;
    }
  }
  return true;
}
