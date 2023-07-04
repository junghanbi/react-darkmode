# Ract Darkmode + 시간 + 날짜

[완성](사이트링)

## 설치한 라이브러리
1. styled-componets
2. react-icons
```
yarn add styled-components react-icons
```
[리액트아이콘 사이트로 이동](https://react-icons.github.io/react-icons/)


## root 폴더 내에 파일생성
1. [.prettierrc] - 협업시 vscode설정을 통일화시켜주는 작업
```
{
    "arrowParens": "always",
    "semi": true,
    "singleQuote": true,
    "useTabs": false,
    "trailingComma": "all",
    "tabWidth": 2,
    "printWidth": 80
}
```
2. jsconfig.json - import를 위한 절대 경로 설정
```
{
    "compilerOptions": {
        "target": "es6",
        "baseUrl": "src"
    },
    "include": ["src"]
}
```


## Themeprovider로 사용할 테마 설정
theme.js 파일 생성
```javascript
export const lightTheme ={
  bgColor : "#fff",
  textColor : "#000",
  headerColor : "#000",
  headerText : "#fff"
}
export const darkTheme ={
  bgColor : "#000",
  textColor : "#fff",
  headerColor : "#fff",
  headerText : "#000"
}
```

## Intl.DateTimeFormat API (날짜와 시간 설정)
```
const [time, setTime] = useState(new Date())
<DateTimer>{time.toLocaleDateString()}</DateTimer>
<HourTimer>{time.toLocaleTimeString()}</HourTimer>
```
