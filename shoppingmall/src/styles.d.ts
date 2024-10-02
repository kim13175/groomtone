// scss 소스 파일 사용하는 모듈 import 하기 위한 ts 정의 파일
// npm install sass 설치 부터 해야 함
 
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}