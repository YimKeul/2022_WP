const LoginBox = document.getElementById("LoginBox");

const id = document.getElementById("id");
const pw = document.getElementById("pw");
const Submit = document.getElementById("Submit");
const Signin = document.getElementById("Signin");

const modal2CloseBtn = document.getElementById("modal2CloseBtn");
const modal2ReservationBtn = document.getElementById("modal2ReservationBtn");
const modal2Input = document.getElementById("modal2Input");

const id_vali = /^([A-Za-z0-9]){6,15}$/;
const pw_vali = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

//모달 열기
function open(target) {
  document.querySelector(target).classList.remove("hidden");
}
//모달 닫기
function close(target) {
  document.querySelector(target).classList.add("hidden");
}

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
      } else {
        //로그아웃
        isLogoutBoxs();
        saveLoginState(false);
      }
    },
  });
});

//로그인중 상단바
function isLoginBoxs(data) {
  const label = document.createElement("label");
  label.id = "LoginInfo";
  label.appendChild(document.createTextNode(data));
  const input = document.createElement("input");
  input.type = "button";
  input.name = "logout";
  input.value = "로그아웃";
  input.id = "logout";
  input.className = "logout";
  input.addEventListener("click", () => {
    $.ajax({
      url: "Logout.php",
      type: "post",
      success: function () {
        close(".modal");
        window.location.reload();
      },
    });
    alert("로그아웃이 되었습니다.");
  });

  const a = document.createElement("a");
  a.href = "UserReservationInfo.html";
  a.id = "ReservationInfo";
  a.style.textDecoration = "none";
  a.style.color = "black";
  a.appendChild(document.createTextNode("예약정보"));

  LoginBox.appendChild(label);
  LoginBox.appendChild(input);
  LoginBox.appendChild(a);
}

//로그아웃중 상단바
function isLogoutBoxs() {
  const input = document.createElement("input");
  input.type = "button";
  input.name = "login";
  input.value = "로그인";
  input.id = "login";
  input.className = "login";
  input.addEventListener("click", () => {
    open(".modal");
  });
  const a = document.createElement("a");
  // a.href = "";
  a.id = "ReservationInfo";
  a.addEventListener("click", () => {
    alert("로그인 후 예약정보 보기가 가능합니다.");
  });
  a.style.cursor = "pointer";
  a.appendChild(document.createTextNode("예약정보"));
  LoginBox.appendChild(input);
  LoginBox.appendChild(a);
}

//로그인 입력 확인
function loginvali(vali, target) {
  const isSuccess = vali.exec(target);
  if (isSuccess) {
    return true;
  } else {
    return false;
  }
}

//제출 (로그인 작동)
Submit.addEventListener("click", () => {
  const iid = loginvali(id_vali, id.value);
  const ppw = loginvali(pw_vali, pw.value);
  if (id.value == "" && pw.value == "") {
    alert("아이디 또는 패스워드의 입력양식을 체크해주세요");
  } else {
    if (iid && ppw) {
      $.ajax({
        url: "Submit.php",
        type: "post",
        data: {
          Name: $("#id").val(),
          Password: $("#pw").val(),
        },
        success: function () {
          close(".modal");
          window.location.reload();
        },
      });
    } else {
      close(".modal");
      alert("아이디 또는 패스워드의 입력양식을 체크해주세요");
      id.value = null;
      pw.value = null;
    }
  }
});

//회원가입
Signin.addEventListener("click", () => {
  const iid = loginvali(id_vali, id.value);
  const ppw = loginvali(pw_vali, pw.value);
  if (id.value == "" && pw.value == "") {
    alert("아이디 또는 패스워드의 입력양식을 체크해주세요");
  } else {
    if (iid && ppw) {
      alert("회원가입이 완료되었습니다.");
      $.ajax({
        url: "Signin.php",
        type: "post",
        data: {
          Name: $("#id").val(),
          Password: $("#pw").val(),
        },
      });
    } else {
      alert("아이디 또는 패스워드의 입력양식을 체크해주세요");
      id.value = null;
      pw.value = null;
      close(".modal");
    }
  }
});

const temp = document.getElementById("test");
let targetMovieID = "";
function saveMovieID(data) {
  targetMovieID = data;
}
function returnMovieID() {
  return targetMovieID;
}

function checkunder10() {
  if (modal2Input.value <= 10) {
    return parseInt(modal2Input.value);
  } else if (modal2Input.value > 10) {
    return false;
  }
}

//영화 찾기 , 상영관 검색
const findMovie = document.getElementById("findMovie");
findMovie.addEventListener("click", () => {
  if ($("#word").val() != "") {
    $.ajax({
      url: "SearchAjax.php",
      type: "post",
      data: {
        name: $("#word").val(),
      },
      success: function (data) {
        $("#test").empty();
        $("#test").append(data);
        const input = document.createElement("input");
        input.type = "button";
        input.name = "SearchScreen";
        input.id = "SearchScreenBtn";
        input.value = "상영관 검색하기";
        input.addEventListener("click", () => {
          open(".modal2");
          const table = temp.childNodes[2].childNodes[1];
          const td = table.childElementCount - 1;

          for (let i = 1; i <= td; i++) {
            radio = table.childNodes[i].childNodes[1].childNodes[1];
            if (radio.checked) {
              const target = radio.id;

              saveMovieID(target);
              $.ajax({
                url: "Search2Ajax.php",
                type: "post",
                data: {
                  Movie_id: target,
                },
                success: function (data) {
                  $("#modal2Table").empty();
                  $("#modal2Table").append(data);
                },
              });

              break;
              // radio.checked = false;
            }
          }
        });
        $("#test").append(input);
      },
    });
  }
});

//영화관 예약 모달 닫기 버튼
modal2CloseBtn.addEventListener("click", () => {
  close(".modal2");
});

const temp2 = document.getElementById("modal2Table");
modal2ReservationBtn.addEventListener("click", () => {
  const table = temp2.childNodes[1].childNodes[1];
  const td = table.childElementCount - 1;
  const reserve_num = checkunder10();
  if (returnLoginState() == true) {
    for (let i = 1; i <= td; i++) {
      radio = table.childNodes[i].childNodes[1].childNodes[1];
      if (radio.checked) {
        const targetID = radio.id;
        const nowUser = returnWhoLogin();
        const CurrentReservationInfo = parseInt(
          table.childNodes[i].childNodes[7].innerText
        );
        // console.log(CurrentReservationInfo);
        const targetMovieID = returnMovieID();
        if (reserve_num == false) {
          alert("한 번에 예약 가능한 인원은 최대 10명까지 입니다.");
        } else if (CurrentReservationInfo + reserve_num > 20) {
          alert("하나의 상영관의 최대 수용 인원은 20명까지입니다.");
        } else {
          $.ajax({
            url: "ReservationAjax.php",
            type: "post",
            data: {
              nowUser: nowUser,
              movie_id: targetMovieID,
              s_id: targetID,
              reserve_num: reserve_num,
            },
            success: function () {
              //로그인중
              alert("예약되었습니다.");
            },
          });
        }
      }
      close(".modal2");
      modal2Input.value = null;
    }
  } else {
    alert("로그인 후 영화 예약이 가능합니다.");
  }
});
