const LoginBox = document.getElementById("LoginBox");
const ShowTable = document.getElementById("ShowTable");
let loginstate = false; //true : 로그인 , false :로그아웃
function saveLoginState(type) {
  loginstate = type;
}
function returnLoginState() {
  return loginstate;
}
let whologin = "";
function saveWhoLogin(who) {
  whologin = who;
}
function returnWhoLogin() {
  return whologin;
}
//리로딩
window.addEventListener("load", () => {
  $.ajax({
    url: "check.php",
    type: "post",
    success: function (data) {
      // console.log(data);
      if (data != "false") {
        //로그인중
        isLoginBoxs(data);
        saveLoginState(true);
        saveWhoLogin(data);
        renderTable();
      } else {
        //로그아웃
        console.log("adsfas");
      }
    },
  });
});

//로그인중 상단바
function isLoginBoxs(data) {
  const label = document.createElement("label");
  label.id = "LoginInfo";
  label.appendChild(document.createTextNode(data));
  const label2 = document.createElement("label");
  label2.appendChild(document.createTextNode("회원"));
  LoginBox.appendChild(label);
  LoginBox.appendChild(label2);
}

//테이블 만들기
function renderTable() {
  $.ajax({
    url: "UserReservationInfo.php",
    type: "post",
    data: {
      User: returnWhoLogin(),
    },
    success: function (data) {
      $("#ShowTable").empty();
      $("#ShowTable").append(data);
      const input = document.createElement("input");
      input.type = "button";
      input.name = "cancel";
      input.id = "CancelBtn";
      input.value = "취소하기";
      input.addEventListener("click", () => {
        const table = ShowTable.childNodes[1].childNodes[1];
        const td = table.childElementCount - 1;
        for (let i = 1; i <= td; i++) {
          checkbox = table.childNodes[i].childNodes[1].childNodes[0];
          //체크된것들
          if (checkbox.checked) {
            // console.log(i);
            const UserID = table.childNodes[i].childNodes[3].innerText;
            // console.log(UserID);
            $.ajax({
              url: "UserDeleteReservationInfo.php",
              type: "post",
              data: {
                nowUser: returnWhoLogin(),
                UserID: UserID,
              },
            });
          }
        }
        alert("예약이 취소되었습니다.");
        window.location.reload();
      });
      $("#ShowTable").append(input);
    },
  });
}
