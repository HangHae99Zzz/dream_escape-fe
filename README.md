# zzz 꿈깨

<!-- <img src="https://user-images.githubusercontent.com/74045440/159398628-3296c8af-a716-48c6-80ca-81f3cbc78368.png" align=left width=100> -->

> 온라인 3D 방탈출 게임 서비스 😴

<br />

## 💭 About

> ‘zzz’ 는 꿈을 꾸는 상태를 표현한 단어이자, 게임 프로젝트의 이름입니다
>
> ‘꿈’ 이라는 매체를 이용하여 상상하고 문제를 풀면서 해결하여
> 방탈출을 하는 것이 본 게임을 이어나갈 수 있는 방법입니다
>
> 당신은 꿈 속에서 얼마만큼의 역량을 발휘할 수 있는지 궁금하지 않으신가요?

<!-- <img width="1363" alt="스크린샷 2022-01-22 오전 5 27 36" src="https://user-images.githubusercontent.com/75469131/150595708-bd84f11e-ed2d-4dfe-9242-1b69e10756ac.png"> -->

<br />

## ✨ 주요 기능

- **`홈`**
  방탈출 게임을 위한 방을 만들고, 랭킹조회 및 게임 설명을 확인할 수 있습니다.
- **`대기`**
  현재 대기중인 인원을 체크하고 게임을 시작할 수 있습니다.
- **`게임`**
  팀원들과 보이스채팅을 나누며 방에 배치된 3D 물체를 클릭해 주어진 문제를 풀고 탈출할 수 있습니다.

<!-- ![This is the last](https://user-images.githubusercontent.com/75469131/150535885-e6c38a60-19b0-4957-8919-2c78074cdb50.png) -->

<br />

## 🍎 Team Member - `FrontEnd`

| <img src="https://user-images.githubusercontent.com/74045440/159398343-db70bd0a-b93b-4e08-9193-5f666521f472.jpeg" width=200> | <img src="https://user-images.githubusercontent.com/74045440/159398563-46cd3461-4369-4bfd-b9bf-254277e878c8.jpeg" width=200> |
| :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: |
|                                                          **류강현**                                                          |                                                          **우혜민**                                                          |
|                                          [@Ryu ganghun](https://github.com/softwat)                                          |                                         [@Woo hyemin](https://github.com/hyemin9403)                                         |

#### 류강현

`메인 뷰` `게임 설명` `Web RTC 통신` `WebSocket 통신` `동시성 제어` `비즈니스 로직`

#### 우혜민

`사이드 바` `랭킹조회` `업데이트소식` `게임 로딩` `인게임 UI` `게임 엔딩` `3D룸` `게임 내 문제 조회 요청`

---

<!-- [어려웠던 부분과 극복 과정 보러가기](https://baejiann120.notion.site/Overcome-5e7c95d4783e468fa848b5e26b1473d7) -->

<br />

## 📚 Stack

<!-- ## 📚 Library -->

<div align=center>
  <img src="https://img.shields.io/badge/React-60d3f3?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>
  <img src="https://img.shields.io/badge/Redux-7247b5?style=for-the-badge&logo=redux&logoColor=white"> 
  <img src="https://img.shields.io/badge/styled-c260af?style=for-the-badge&logo=styledcomponents&logoColor=black">
  <img src="https://img.shields.io/badge/Router-ec4151?style=for-the-badge&logo=reactrouter&logoColor=black">
  <br>
  <img src="https://img.shields.io/badge/threejs-ffffff?style=for-the-badge&logo=three.js&logoColor=black"> 
  <img src="https://img.shields.io/badge/webrtc-ffffff?style=for-the-badge&logo=webrtc&logoColor=black">
  <img src="https://img.shields.io/badge/socket.io-ffffff?style=for-the-badge&logo=socket.io&logoColor=black">
  <br>
  <img src="https://img.shields.io/badge/lighthouse-1a73e8?style=for-the-badge&logo=lighthouse&logoColor=white">
  <img src="https://img.shields.io/badge/netlify-4fb5ba?style=for-the-badge&logo=netlify&logoColor=white">
  
</div>

<!-- | Name                              | Tag                  |
| --------------------------------- | -------------------- |
| React-Redux                       | Redux                |
| Immer, Redux-Actions, Redux-Thunk | Redux                |
| React-Router                      | Routing              |
| Axios                             | HTTP Networking      |
| Three(drei,fiber)                 | 3D Rendering         |
| socket.io                         | WebScoket Networking |
| Styled Component                  | Styling              | -->

<br />

## 🕹 Convention

`Coding Convention` · `Commit Convention`

<details markdown="1">
<summary>[Coding Convention]</summary>

### 📍 네이밍 Convention

폴더명, 파일명 첫 글자는 대문자(PascalCase)

```
ex) Page(O) page(X)
 LongFileName(O)
```

변수 첫 글자는 소문자(camelCase)

```
ex) handleComment(O) handle_comment(X)
```

</details>

<details markdown="2">
<summary>[Commit Convention]</summary>

```
💊 [zzz 꿈깨 Commit Message Template]
✅ [커밋 타입] 내용 (#이슈번호) 형식으로 작성
✅ ex. [Feat] 로그인 뷰 구현 (#1)
✅ 제목(title)을 아랫줄에 작성
✅ 최대 50글자, 제목 끝에 마침표 금지, 무엇을 했는지 명확하게 작성

########################
# ✅ 본문(body)을 아랫줄에 작성

########################
# ✅ 꼬릿말(footer)을 아랫줄에 작성

########################
```

</details>
 
<details markdown="3">
<summary>[Commit Type]</summary>

> 🚨 총 9개의 커밋 타입으로 구분한다.

```
[Docs]   문서 작성 및 수정 작업(README 등)
[Add]    기능이 아닌 것 생성 및 추가 작업(파일·익스텐션·프로토콜 등)
[Feat]   새로운 기능 추가 작업
[Style]  UI 관련 작업(UI 컴포넌트, Xib 파일, 컬러·폰트 작업 등)
[Fix]    에러 및 버그 수정, 기능에 대한 수정 작업
[Edit]   Fix가 아닌 모든 수정 작업(주석, 파일 및 폴더 위치, 코드 스타일 등)
[Del]    파일, 에셋 등 삭제 작업
[Set]    세팅 관련 작업
[Test]   테스트 관련 작업
```

</details>

<br />

## 🐾 Trouble Shooting

`Three JS` · `Socket` · `폴더 구조` · `깃허브` · `Lighthouse`

<details markdown="1">
<summary>Three JS를 리액트에서 사용할 수 있도록 세팅하기</summary>

- 패키지: @react-three, @three-fiber, @three-drei
- glb파일 확장자 변경하기
  https://github.com/CesiumGS/gltf-pipeline
- gltf파일을 JSX로 변경하기
  https://github.com/pmndrs/gltfjsx
- canvas 내에서 JSX로 변경한 gltf 파일 로딩(suspense를 사용해 Lazy loading)

</details>

<details markdown="2">
<summary>3D 파일 크기 줄이기</summary>

- 블렌더에서 Three JS로 줄 수 있는 애니메이션 등을 제거 및 압축해서 파일 크기 압축(130MB -> 12MB)

</details>

<details markdown="3">
<summary>폴더 구조 변경</summary>

- 프로젝트의 사이즈가 커지며 원하는 파일을 빠르고 정확하게 찾을 수 있도록 폴더 구조 리팩토링이 필요해짐
- 후(README > Folder Architecture 참고)

</details>

<details markdown="4">
<summary>깃허브 활성화</summary>

- 커밋 메시지(리드미 > convention > Commit Type 참고)
- 이슈, 풀리퀘스트 활성화

</details>

<details markdown="5">
<summary>페이지 성능향상(라이트하우스)</summary>

`develop` - default

- protected → 승인 받아야만 merge 가능

</details>

<br />

## 🗂 Folder Architecture

<details markdown="1">
<summary>폴더 구조✨</summary>

- 🗂 src
  - App.jsx
  - index.jsx
  - GlobalStyle.js
- 🗂 Page

  - index.js
  - Main.jsx
  - Rank.jsx
  - Description.jsx
  - Update.jsx
  - GameRoom.jsx

- 🗂 Layout

  - index.js
  - Header.jsx
  - Sidebar.jsx
  - Footer.jsx
  - DefaultLayout.jsx

- 🗂 Component

  - 🗂 Main
    - 🗂 Modal
    - index.js
    - RoomList.jsx
    - Contents.jsx
    - Loading.jsx
    - EndingCredit.jsx
  - 🗂 Game
    - 🗂 Modal
    - 🗂 UI
    - index.js
    - ThreeRoom.jsx
    - Test.js
    - WasdControls.js
  - 🗂 Element
    - index.js
    - Chat.jsx
    - MainUsers.jsx
    - MakeRoomBtn.jsx
    - ModalBG.jsx
    - MuteButton.jsx
    - Video.jsx

- 🗂 redux

  - configureStore.js

  -🗂 modules

  - escape.js(게임 퀴즈 관련 API )
  - game.js(게임 시작 및 종료 API)
  - rank.js(랭크 조회 API)
  - room.js(방 생성 삭제 API)
  - socket.js(소켓 관련 API)
  - user.js(유저 정보 조회 및 삭제 API)

- 🗂 Util

  - request.js

- 🗂 Asset

  - 🗂 Icon
  - 🗂 Image

</details>

<br />

## 📺 Detail
