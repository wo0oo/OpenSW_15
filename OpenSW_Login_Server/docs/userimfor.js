로그인 서버에서 받는 변수를 

개인정보
employNumber
password
userName
email 
phoneNumber
birthday
adminkey
라고 가정하고

서버에 넘겨줄때 변수는 (로그인 or 회원가입 or MY페이지 접속 전 비밀번호를 확인 or MY페이지 접속)

const [inputEmployNumber, setInputEmployNumber] = useState("");
const [inputPassword, setInputPassword] = useState("");
const [inputUserName, setInputUserName] = useState("");
const [inputPhoneNumber, setInputPhoneNumber] = useState("");
const [inputEmail, setInputEmail] = useState("");
const [inputBirthday, setInputBirthday] = useState("");
const [inputAdminKey, setInputAdminKey] = useState(""); 

서버에서 받은 변수를 프론트에서 저장할 때는 (개인정보를 출력하기 위해)

const [myUserName, setMyUserName] = useState("");
const [myEmployNumber, setMyemployNumber] = useState("");
const [myPhoneNumber, setMyPhoneNumber] = useState("");
const [myEmail, setMyEmail] = useState("");
const [myBirthday, setMyBirthday] = useState("");

서버로부터 비밀번호는 전송만하고 받지않게 설계했습니당 
adminkey는 서버로 부터 받은 response의 adminkey를 확인하여 setAuth 함수를 통해 설정합니다. 방식은 아래와 같습니다.
/////////////////////////////////////////////////////
.then((res) => {
    setToken(res.data.access_token);
    console.log(res);
    navigate("/search");
    setMyUserID(inputEmployNumber);
    if (jwt_decode(res.data.access_token).adminkey) {
      setAuth(2);
    } else {
      setAuth(1);
    }
    setLogInModal(false);
  })

  .catch((err) => {
    console.log(err.response.data);
    setErrorText("아이디와 비밀번호를 확인하세요.");
  });
////////////////////////////////////////////////////////////


로그인 기능을 사용하면서 이용되는 부가적인 변수는 아래와 같다.

const [auth, setAuth] = useState(0); //로그인 사용자의 권한을 저장하기 위한 변수와 함수
const [token, setToken] = useState(""); //서버로 부터 받은 토큰을 저장하기 위한 변수와 함수

