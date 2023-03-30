# VS CODE 설정 
<br>
settings.json
<br>

```javascript
// "editor.tabSize": 2,
// "editor.defaultFormatter": "esbenp.prettier-vscode",

// "editor.formatOnSave": true,

// 문제:  .prettierrc 파일의 옵션이 적용되지 않음.
// tabWidth를 예로 들었을 때, tabWidth: 4로 설정했는데,
// 파일의 tabWidth가 2인 경우, 오류라고 표시는 하지만 막상 포맷팅하면
// 4로 갔다가 다시 2로 돌아오는 이상한 상황이 발생했음.
// 해결: editor.formatOnSave를 끄니까 된다.


// add & edit

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
  ],
  "eslint.lintTask.enable": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[html]": {
    "editor.formatOnSave": false
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.formatOnSave": true
  },
  "[scss]": {
    "editor.formatOnSave": true
  },
  "[less]": {
    "editor.formatOnSave": true
  },
  "[markdown]": {
    "editor.formatOnSave": true
  }

```
