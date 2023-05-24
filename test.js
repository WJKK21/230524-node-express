
//express로드 , 이를 통해 express모듈을 제어한다.
const express = require("express");
//express()가 application함수를 로드한다. 그것을 app변수에 선언하여 어플리케이션을 만든다.
const app = express();
//포트 지정
const port = 3000;

//middleware이다.
//client가 "/"경로에 get 요청을 보내면
//req는 요청객체, res는 응답객체 이다.
// "/"경로에 get요청 처리 middleware
app.get("/", (req, res) => {
  // res.sendFile()을 통해 안의 경로에 있는 파일이 띄워진다.
  // __dirname = 요청 파일의 경로를 단축시켜주는 절대경로 (현재 실행 중인 폴더 경로이다.)
  // __dirname + /src/index.html 파일을 보낸다.
  res.sendFile(__dirname + "/src/index.html");
});

//middleware
//port에 접속 성공하면 콜백 함수를 실행시킨다.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
