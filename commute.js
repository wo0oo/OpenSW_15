//import fs from "fs"; //파일 입출력 처리를 위해

function toDate(str) {
  let _year = parseInt(str.slice(0, 4));
  let _month = parseInt(str.slice(5, 7));
  let _date = parseInt(str.slice(8, 10));
  let _hour = parseInt(str.slice(11, 13));
  let _minute = parseInt(str.slice(14, 16));
  let _DATE = new Date(_year, _month - 1, _date, _hour, _minute, 0, 0);
  // console.log("[toDate]:", _year, _month - 1, _date, _hour, _minute, 0, 0);
  return _DATE;
}

function DatetoString(_date) {
  return _date.getFullYear() + '-' + _date.getMonth() + '-' + _date.getDate() + '-' + _date.getHours() + '-' + _date.getMinutes();
}

function commute_insert(inTime, outTime, _date_arr) {
  let obj = { start: inTime, end: outTime };
  console.log(typeof (obj));
  _date_arr.push(obj);
  console.log(_date_arr[1]);

  const userId = sessionStorage.getItem("userId");
  const userName = sessionStorage.getItem("userName");
  const birthDay = sessionStorage.getItem("birthDay");
  const phoneNumber = sessionStorage.getItem("phoneNumber");
  const adminkey = sessionStorage.getItem("adminkey");


  fetch("http://localhost:8000/auth/commute_insert", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      employId: userId,
      username: userName,
      phoneNumber: phoneNumber,
      birthday: birthDay,
      date_arr: _date_arr,
    })
  })
    .then((res) => {
      if (res.ok) {
        // 2xx 응답 코드일 경우
        sessionStorage.setItem("date_arr", JSON.stringify(_date_arr));
        alert("변경이 완료되었습니다.");


      } else {
        // 2xx 응답 코드가 아닐 경우

        alert("입력하신 정보를 다시 확인하세요");
        // console.log(res.json());
      }
    })

    .catch((err) => {
      console.error("Error:", err.response);
      alert("서버 에러입니다. Error 정보 : " + err.response);
    });
}

