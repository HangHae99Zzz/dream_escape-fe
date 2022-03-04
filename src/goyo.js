/* ///////////////////////////////////
// COMMON
/////////////////////////////////// */
//언어 체크
//cLog('navigator.language : ' + navigator.language || navigator.userLanguage);
//cLog('documentElement.lang : ' + document.documentElement.lang);
const locale = document.documentElement.lang;

var common_messages = {
  ko: {
    hints: {
      airlock_door_1: "숫자와 색이 같은 LUNAR SUIT STATUS의 알파벳을 찾자",
      airlock_door_2:
        "흰색 STATUS의 1번째 알파벳, 파랑 SUIT의 4번째 … 5개 알파벳",
      maincontrol_computer_main_1:
        "키보드 자판→서브 모니터에서 M3SF63.enc에 해당하는 알파벳 매칭",
      maincontrol_computer_main_2:
        "M→B, 3→A, S→L , F→-, 6→H, 정답은  BAL-H***TN",
      maincontrol_meetingroom_main_1:
        "이동 경로에 해당하는 도형의 꼭지점 수가 비밀번호다",
      maincontrol_meetingroom_main_2: "GATE7=사각형=4, COMMAND CENTER=원=0이다",
      mainlab_main_1:
        "데칼코마니 문제, 각각 점선 위에 도형을 대칭되게 그리면 알파벳 완성",
      mainlab_main_2: "정답은 알파벳 6개, ICE 보관을 위해 필요한 상자",
      infirmary_main_1:
        "초록은 왼쪽으로.. 노랑은 아래로…. 직선 한 칸씩 연결해보자.",
      infirmary_main_2: "정답은 좌,우 각각 2개의 숫자로 총 4자리다.",
      storage1_main_1: "수집품들의 기호는 저장고 벽의 알파벳과 위치가 대응된다",
      storage1_main_2:
        "수집품 패스워드 기호 순서로 조합해 나온 단어가 정답(TOP******)",
      storage2_main_1: "수집품들을 확인해 모스부호의 의미를 찾자",
      storage2_main_2: "캡슐 보관함을 정리해 3개의 알파벳을 표현하자",
    },
    alert_ios_browser:
      "본 사이트는 iOS Safari에 최적화되어 있습니다.\n다른 브라우저를 이용해 주세요.",
    alert_error: "정상적이지 않은 접근입니다.",
    alert_copied: "URL이 클립보드에 복사되었습니다.",
    alert_copied_err: "현재 브라우저에서 이 기능을 지원하지 않습니다.",
  },
  en: {
    hints: {
      airlock_door_1:
        "Look for letters in LUNAR SUIT STATUS that match the color of the numbers",
      airlock_door_2:
        "1st letter in white STATUS, 4th letter in blue SUIT…form a 5-letter code",
      maincontrol_computer_main_1:
        "Each letter and number in M3SF63.enc corresponds to a letter on the submonitor",
      maincontrol_computer_main_2:
        "M→B, 3→A, S→L , F→-, 6→H, the code: BAL*****TN",
      maincontrol_meetingroom_main_1:
        "How many angles does each shape in the directions have?",
      maincontrol_meetingroom_main_2: "GATE7=Square=4, COMMAND CENTER=Circle=0",
      mainlab_main_1:
        "With the dotted line being the axis, the code is written symmetrically",
      mainlab_main_2: "The code has 6 letters, we use ‘this’ to store ICE",
      infirmary_main_1:
        "Green=go left, yellow=go down, connect 2 diamonds at a time in a straight line",
      infirmary_main_2:
        "Find 2 digits each on both sides to write the 4-digit code",
      storage1_main_1:
        "Special characters in the inventory correspond to letters written on the wall",
      storage1_main_2:
        "Use collected special characters to write the code, TOP******",
      storage2_main_1:
        "Use collected items in the inventory to decrypt Morse code",
      storage2_main_2:
        "Insert sample holders in the right place to form 3 alphabet letters",
    },
    alert_ios_browser: "Safari browser for iOS users recommended",
    alert_error: "An error occurred.",
    alert_copied: "Copied, you can now paste into the application.",
    alert_copied_err: "this browser doesn`t support the api`s required.",
  },
};
//console.log(common_messages[locale].alert_error);
// CHECK FPS
//(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})();
//금지어
var prohibitArr = [
  "민주",
  "민주당",
  "더불어민주",
  "더불어민주당",
  "더민주",
  "국민의힘",
  "국힘",
  "국민의힘당",
  "국민의당",
  "열린민주당",
  "정의당",
  "국가혁명당",
  "국민혁명당",
  "우리공화당",
  "진보당",
  "무소속",
  "진보",
  "보수",
  "이재명",
  "윤석렬",
  "윤석열",
  "안철수",
  "심상정",
  "허경영",
  "정권교체",
  "대선후보",
  "문재인",
  "노무현",
  "박근혜",
  "이명박",
  "이낙연",
  "대깨문",
  "문재앙",
  "혜경궁김씨",
  "김경희",
  "빨갱이",
  "일베",
  "박정희",
  "전두환",
  "노태우",
  "김대중",
  "10새",
  "10새기",
  "10새리",
  "10세리",
  "10쉐이",
  "10쉑",
  "10스",
  "10쌔",
  "10쌔기",
  "10쎄",
  "10알",
  "10창",
  "10탱",
  "18것",
  "18넘",
  "18년",
  "18노",
  "18놈",
  "18뇬",
  "18럼",
  "18롬",
  "18새",
  "18새끼",
  "18색",
  "18세끼",
  "18세리",
  "18섹",
  "18쉑",
  "18스",
  "18아",
  "갈보",
  "갈보년",
  "개년",
  "개놈",
  "개뇬",
  "개새",
  "개색기",
  "개세",
  "개쇳기",
  "개쉐",
  "개쉐리",
  "개쉐이",
  "개쉑",
  "개쉽",
  "개스끼",
  "개시키",
  "개십새기",
  "개십새끼",
  "개쐑",
  "개쑈",
  "개씹",
  "개아들",
  "개자슥",
  "개좆",
  "개좌식",
  "걔새",
  "걔수작",
  "걔시끼",
  "걔시키",
  "걔썌",
  "게색기",
  "게색끼",
  "광뇬",
  "그년",
  "그새끼",
  "남창",
  "냄비",
  "뇬",
  "대가리",
  "도라이",
  "돈놈",
  "돌은놈",
  "딩시",
  "때놈",
  "또라이",
  "똘아이",
  "똘아이",
  "뚜쟁",
  "ㅁㅊ",
  "메친넘",
  "메친놈",
  "미1친",
  "미친년",
  "미친놈",
  "뱅신",
  "병쉰",
  "병신",
  "부랄",
  "부럴",
  "불알",
  "불할",
  "붕가",
  "붙어먹",
  "븅신",
  "빙시",
  "빙신",
  "빠가",
  "빠구리",
  "빠굴",
  "빠큐",
  "뻐큐",
  "뻑큐",
  "뽁큐",
  "섹1스",
  "섹스",
  "스패킹",
  "스팽",
  "시1발",
  "시끼",
  "시댕",
  "시뎅",
  "시랄",
  "시발",
  "시발년",
  "시발놈",
  "시밣",
  "시부랄",
  "시부럴",
  "시부리",
  "시불",
  "시브랄",
  "시팍",
  "시팔",
  "시펄",
  "신발끈",
  "심발끈",
  "심탱",
  "십8",
  "십라",
  "십새끼",
  "십스키",
  "십쌔",
  "십창",
  "십탱",
  "싶알",
  "쌉년",
  "쌍넘",
  "쌍년",
  "쌍놈",
  "쌍뇬",
  "쌩쑈",
  "쌴년",
  "썅",
  "썅년",
  "썅놈",
  "썡쇼",
  "써벌",
  "썩을년",
  "썩을놈",
  "쎄엑",
  "쎾!쓰",
  "쎾쓰",
  "쒸벌",
  "쒸뻘",
  "쒸팔",
  "쒸펄",
  "쓰바",
  "쓰박",
  "쓰발",
  "쓰벌",
  "쓰팔",
  "씁새",
  "씁얼",
  "씌파",
  "씨8",
  "씨끼",
  "씨댕",
  "씨뎅",
  "씨바",
  "씨바랄",
  "씨박",
  "씨발",
  "씨방",
  "씨방새",
  "씨방세",
  "씨밸",
  "씨뱅",
  "씨벌",
  "씨벨",
  "씨봉",
  "씨봉알",
  "씨부랄",
  "씨부럴",
  "씨부렁",
  "씨부리",
  "씨불",
  "씨붕",
  "씨브랄",
  "씨빠",
  "씨빨",
  "씨뽀랄",
  "씨앙",
  "씨파",
  "씨팍",
  "씨팔",
  "씨팔년",
  "씨팔놈",
  "씨펄",
  "씸년",
  "씸뇬",
  "씸새끼",
  "씹같",
  "씹년",
  "씹뇬",
  "씹보지",
  "씹새",
  "씹세",
  "씹쉐",
  "씹스키",
  "씹쌔",
  "씹이",
  "씹질",
  "씹창",
  "씹탱",
  "씹퇭",
  "씹팔",
  "씹할",
  "씹헐",
  "아가리",
  "아구창",
  "아구통",
  "아굴",
  "엄창",
  "엠병",
  "여물통",
  "염병",
  "엿같",
  "옘병",
  "옘빙",
  "오입",
  "욤병",
  "육갑",
  "은년",
  "을년",
  "잡넘",
  "잡년",
  "잡놈",
  "접년",
  "젖밥",
  "조까",
  "조까치",
  "조랭",
  "조빠",
  "조찐",
  "존만한",
  "좀물",
  "좁년",
  "좁밥",
  "좃",
  "좃까",
  "좃또",
  "좃만",
  "좃밥",
  "좃이",
  "좃찐",
  "좆",
  "좆같",
  "좆까",
  "좆나",
  "좆또",
  "좆만",
  "좆밥",
  "좆이",
  "좆찐",
  "좇같",
  "좇이",
  "죽통",
  "쥐랄",
  "쥐롤",
  "쥬디",
  "지1랄",
  "지랄",
  "지랼",
  "지롤",
  "지미랄",
  "쫍빱",
  "찌랄",
  "창녀",
  "창년",
  "창놈",
  "캐년",
  "캐놈",
  "퍽큐",
  "후라들",
  "후래자식",
  "후레",
  "후뢰",
  "bastard",
  "c파",
  "c팔",
  "eatdirt",
  "fuck",
  "sex",
  "SEX",
  "18",
  "십팔",
  "미친",
];

// 이미지 경로 정의
var IMG_PATH = "./resources/images/";
var VIDEO_PATH = "./resources/video/";
var AUDIO_PATH = "./resources/audio/";
var windowWidth, windowHeight;
// 스테이지 셋팅
var nowStage = 0; //TEST 시 값 변경 10:중앙통제실
var prevStage = 0;
var nowFloor = "F1";
var device = ""; //desktop / mobile
var stages = [
  "start",
  "intro_bridge",
  "setup",
  "enter",
  "airlock",
  "airlock_door", //에어락입구 문제, 힌트 2개??
  "airlock_door_wrong",
  "gate_bridge",
  "gate",
  "maincontrol_bridge",
  "maincontrol",
  "maincontrol_computer",
  "maincontrol_computer_main", //중앙통제실 컴퓨터 문제, 힌트 2개
  "maincontrol_computer_wrong",
  "maincontrol_meetingroom",
  "maincontrol_meetingroom_main", //중앙통제실 회의실 문제, 힌트 2개
  "maincontrol_meetingroom_wrong",
  "mainlab",
  "mainlab_main", //메인랩 문제, 힌트 2개
  "mainlab_wrong",
  "infirmary",
  "infirmary_main", //의무실 문제, 힌트 2개
  "infirmary_wrong",
  "storage1",
  "storage1_main", //저장고1 문제, 힌트 2개
  "storage1_wrong",
  "storage1_inside",
  "storage2",
  "storage2_main", //저장고2 문제, 힌트 2개
  "storage2_end",
  "ending_bridge",
  "ending",
];

//-- UI Setting
function settingUI($page) {
  //지도셋팅
  $("#pop_mainmap .mainmap_holder > div").removeClass("on");
  $("#pop_mainmap .mainmap_holder")
    .find(".mainmap_" + $page)
    .addClass("on");
  //UI 셋팅
  switch ($page) {
    case "start":
    case "intro_bridge":
    case "gate_bridge":
    case "maincontrol_bridge":
    case "ending_bridge":
    case "bridge":
    case "storage2_end":
      $("#timer").hide();
      $("#tools .share").hide();
      $("#tools .hint").hide().removeClass("active");
      $("#tools .clue").hide();
      $("#tools .minimap").hide();
      break;
    case "setup":
    case "enter":
      $("#timer").hide();
      $("#tools .share").hide();
      $("#tools .hint").hide().removeClass("active");
      $("#tools .clue").hide();
      $("#tools .minimap").hide();
      break;
    case "airlock":
    case "airlock_door_wrong":
    case "maincontrol_computer_wrong":
    case "maincontrol_meetingroom_wrong":
    case "mainlab_wrong":
    case "infirmary_wrong":
    case "storage1_wrong":
    case "gate":
      $("#timer").show();
      $("#tools .share").hide();
      $("#tools .hint").hide().removeClass("active");
      $("#tools .clue").hide();
      $("#tools .minimap").hide();
      break;
    case "maincontrol":
    case "maincontrol_computer":
    case "maincontrol_meetingroom":
    case "mainlab":
    case "infirmary":
    case "storage1":
    case "storage1_inside":
      $("#timer").show();
      $("#tools .share").show();
      $("#tools .minimap").show();
      $("#tools .hint").hide().removeClass("active");
      $("#tools .clue").show();
      break;
    case "storage2":
      $("#timer").show();
      $("#tools .share").show();
      $("#tools .minimap").hide();
      $("#tools .hint").hide().removeClass("active");
      $("#tools .clue").show();
      break;
    case "airlock_door":
      $("#timer").show();
      //$('#tools .hint').show().removeClass('active');
      break;
    case "maincontrol_computer_main":
    case "maincontrol_meetingroom_main":
    case "mainlab_main":
    case "infirmary_main":
    case "storage1_main":
    case "storage2_main":
      $("#timer").show();
      $("#tools .share").show();
      $("#tools .minimap").hide();
      $("#tools .hint").show().removeClass("active");
      $("#tools .clue").show();
      break;
    case "ending":
      break;
  }
  //위치
  var pos = "";
  switch ($page) {
    case "start":
    case "intro_bridge":
    case "setup":
    case "enter":
    case "airlock":
    case "airlock_door":
    case "airlock_door_wrong":
    case "gate_bridge":
    case "gate":
      pos = "gate";
      nowFloor = "F1";
      break;
    case "maincontrol_bridge":
    case "maincontrol":
    case "maincontrol_computer":
    case "maincontrol_computer_main":
    case "maincontrol_computer_wrong":
      pos = "maincontrol";
      nowFloor = "B1";
      break;
    case "maincontrol_meetingroom":
    case "maincontrol_meetingroom_main":
    case "maincontrol_meetingroom_wrong":
      pos = "maincontrol_meetingroom";
      nowFloor = "B1";
      break;
    case "storage1":
    case "storage1_main":
    case "storage1_inside":
    case "storage1_wrong":
      pos = "storage1";
      nowFloor = "B1";
      break;
    case "storage2":
    case "storage2_main":
    case "storage2_end":
    case "ending_bridge":
    case "ending":
      pos = "storage2";
      nowFloor = "B1";
      break;
    case "mainlab":
    case "mainlab_main":
    case "mainlab_wrong":
      pos = "mainlab";
      nowFloor = "B2";
      break;
    case "infirmary":
    case "infirmary_main":
    case "infirmary_wrong":
      pos = "infirmary";
      nowFloor = "B2";
      break;
  }
  if (pos) {
    var mimg = IMG_PATH + "minimap_" + nowFloor + "_" + pos + ".png";
    $("#tools .minimap_mapholder." + nowFloor)
      .find("img")
      .attr("src", mimg);
    $("#tools .minimap ul li." + nowFloor).trigger("click");
  }
}

// 타이머 셋팅
var timer = 0; //interval 객체
var count = 0; //카운트
var limit = 2 * 60 * 60; //제한시간 60분
// 단서
var clues = [];
// 힌트
var hintUseCnt = 0;
var hints = [];
// kjs 211220 힌트 문구 수정
hints.airlock_door = {
  useCnt: 0,
  txt1: common_messages[locale].hints.airlock_door_1,
  txt2: common_messages[locale].hints.airlock_door_2,
};
hints.maincontrol_computer_main = {
  useCnt: 0,
  txt1: common_messages[locale].hints.maincontrol_computer_main_1,
  txt2: common_messages[locale].hints.maincontrol_computer_main_2,
};
hints.maincontrol_meetingroom_main = {
  useCnt: 0,
  txt1: common_messages[locale].hints.maincontrol_meetingroom_main_1,
  txt2: common_messages[locale].hints.maincontrol_meetingroom_main_2,
};
hints.mainlab_main = {
  useCnt: 0,
  txt1: common_messages[locale].hints.mainlab_main_1,
  txt2: common_messages[locale].hints.mainlab_main_2,
};
hints.infirmary_main = {
  useCnt: 0,
  txt1: common_messages[locale].hints.infirmary_main_1,
  txt2: common_messages[locale].hints.infirmary_main_2,
};
hints.storage1_main = {
  useCnt: 0,
  txt1: common_messages[locale].hints.storage1_main_1,
  txt2: common_messages[locale].hints.storage1_main_2,
};
hints.storage2_main = {
  useCnt: 0,
  txt1: common_messages[locale].hints.storage2_main_1,
  txt2: common_messages[locale].hints.storage2_main_2,
};

// 닉네임
var nickname = "";
//FOR TEST
/* nickname = 'abcdeabcdeabcdeabcde';
$(function(){$('.nickname').html(nickname);}); */

//결과
var result = null;
// BGM
var bgm;
var useBgm = true;
var bgImg;
var bgMov;
//result = {}; //FOR TEST

//-- 나가기 경고창
window.onbeforeunload = function (event) {
  if (!result) {
    event.preventDefault();
    return "미션을 포기하시겠습니까?"; //귀찮으니 일단 주석
  }
};
//-- 브라우저 채크
var word;
var version = "N/A";
var agent = navigator.userAgent.toLowerCase();
var name = navigator.appName;
//console.log('Check Browser...');
//console.log('agent : ' + agent);
//console.log('name : ' + name);
// IE old version ( IE 11 or Lower )
var mobile_keys = new Array(
  "iPhone",
  "iPod",
  "iPad",
  "Android",
  "BlackBerry",
  "Windows Phone",
  "Windows CE",
  "LG",
  "MOT",
  "SAMSUNG",
  "SonyEricsson",
  "Nokia"
);
var device = "desktop";
var os = "pc";
for (i in mobile_keys) {
  if (navigator.userAgent.match(mobile_keys[i]) != null) {
    device = "mobile";
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.search("android") > -1) {
      os = "android";
    } else if (
      userAgent.search("iphone") > -1 ||
      userAgent.search("ipod") > -1 ||
      userAgent.search("ipad") > -1
    ) {
      os = "ios";
      //iOS 13 Chrome이슈 대응
      if (navigator.userAgent.match("CriOS")) {
        alert(common_messages[locale].alert_ios_browser);
      }
    } else {
      os = "other";
    }
    break;
  }
}
//ipadOS 13 이슈 해결
if (
  navigator.userAgent.indexOf("Safari") > 0 &&
  navigator.userAgent.indexOf("Android") < 0
) {
  if (navigator.maxTouchPoints > 1) {
    device = "mobile";
    os = "ios";
  }
}

// TODO : 모바일/웹 redirect
//cLog('device : ' + device);
//cLog('pathname : ' + window.location.pathname);
$(function () {
  cLog("device : " + device);
  cLog("os : " + os);
  cLog(navigator.userAgent);
  cLog(navigator.maxTouchPoints);
});
if (device == "mobile") {
  if (
    window.location.pathname == "/index.html" ||
    window.location.pathname == "/"
  ) {
    location.href = "mo_index.html";
  } else if (window.location.pathname == "/index_en.html") {
    location.href = "mo_index_en.html";
  }
} else if (device == "desktop") {
  if (window.location.pathname == "/mo_index.html") {
    location.href = "index.html";
  } else if (window.location.pathname == "/mo_index_en.html") {
    location.href = "index_en.html";
  }
}

if (device == "mobile") {
  IMG_PATH = "./resources/images/mo/";
}

if (name == "Microsoft Internet Explorer") {
  word = "msie ";
} else {
  if (agent.search("trident") > -1) {
    // IE 11
    word = "trident/.*rv:";
  } else if (agent.search("edge/") > -1) {
    // Microsoft Edge
    word = "edge/";
  }
}
//IE인 경우 경고창 -- 어짜피 app 마운트를 못한다.
var reg = new RegExp(word + "([0-9]{1,})(\\.{0,}[0-9]{0,1})");
if (reg.exec(agent) != null) {
  version = RegExp.$1 + RegExp.$2;
  var versionNumber = Math.floor(parseFloat(version));
  if (versionNumber <= 11) {
    alert(
      "본 사이트는 Chrome, Safari, Firefox 및 Microsoft Edge에 최적화되어 있습니다.\n" +
        "원활한 서비스 이용을 위하여 다른 브라우저를 이용해 주세요."
    );
  }
}

//-- INIT
$(function () {
  //viewport
  $(window).on("load resize", function () {
    getViewports();
  });
  getViewports();

  // a link
  $("a").each(function () {
    if (
      $(this).attr("href") == "#" ||
      $(this).attr("href") == "#none" ||
      $(this).attr("href") == ""
    ) {
      $(this).attr("href", "javascript:void(0)");
    }
  });

  //ios 더블탭 방지
  if (os == "ios") {
    var lastTouchEnd = 0;
    document.addEventListener(
      "touchend",
      (event) => {
        var now = new Date().getTime();
        //cLog('time : ' + (now - lastTouchEnd));
        if (now - lastTouchEnd <= 200) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      { passive: false }
    );
  }
  /*
	//ios 확대/축소 방지
	document.addEventListener("touchstart", event => {
		if(event.touches.length > 1) {
			console.log("zoom plz stahp");
			event.preventDefault();
			event.stopPropagation(); // maybe useless
		}
	}, {passive: false});
	*/
});

//-- 페이지 전환
function changeStage($idx) {
  cLog("changeStage : " + $idx);
  prevStage = nowStage;
  nowStage = $idx;
  var stage_nm = stages[$idx];
  logEvent("stage", $idx + ". " + stage_nm);
  //$('#loading').show().stop().animate({opacity:1},1000,'linear', function(){
  if (nowStage != 0) {
    $("#loading").css("opacity", "0").show();
  }
  closePop();
  gsap.killTweensOf($("#loading"));
  gsap.to($("#loading"), {
    duration: 1,
    opacity: 1.0,
    ease: Linear.easeOut,
    onComplete: function () {
      $(".chapter").hide();
      if (nowStage != 0) {
        try {
          new Function("destroy_" + stages[prevStage] + "();")();
        } catch (e) {
          console.warn(
            "stage(" + stages[prevStage] + ") function is not defined"
          );
          //console.log(e);
        }
      }
      //TODO preload
      settingUI(stage_nm);
      $("#" + stage_nm).show();
      try {
        new Function("init_" + stage_nm + "();")();
      } catch (e) {
        console.warn("stage(" + stage_nm + ") function is not defined");
        console.log(e);
      }

      //$('#loading').fadeOut(500); //todo animation
      gsap.to($("#loading"), {
        duration: 1,
        opacity: 0.0,
        ease: Linear.easeOut,
        onComplete: function () {
          $("#loading").hide();
        },
      });
    },
  });
}
function changeStageName($name) {
  var idx = stages.indexOf($name);
  if (idx < 0) {
    cLog($name + " stage not registed.");
    return;
  }
  changeStage(idx);
}
function changeStageBridge($name) {
  var vUrl = VIDEO_PATH + "bridge_mov.mp4";
  switch ($name) {
    case "gate":
      vUrl = VIDEO_PATH + "move02.mp4";
      break;
    case "maincontrol":
      vUrl = VIDEO_PATH + "39.move03.mp4";
      break;
    case "maincontrol_meetingroom":
      vUrl = VIDEO_PATH + "25.move01.mp4";
      break;
    case "mainlab":
      vUrl = VIDEO_PATH + "29.move05.mp4";
      break;
    case "infirmary":
      vUrl = VIDEO_PATH + "34.move04.mp4";
      break;
    case "storage1":
      vUrl = VIDEO_PATH + "39.move03.mp4";
      break;
    case "storage2":
      vUrl = VIDEO_PATH + "46.move06.mp4";
      break;
  }
  $("#loading").css("opacity", "0").show();
  closePop();
  gsap.to($("#loading"), {
    duration: 1,
    opacity: 1.0,
    ease: Linear.easeOut,
    onComplete: function () {
      settingUI("bridge");
      $(".chapter").hide();
      $("#loading").css("opacity", "0").hide();
      initVideo(vUrl, 'changeStageBridgeComplete("' + $name + '")');
    },
  });
}
function changeStageBridgeComplete($name) {
  $("#loading").css("opacity", "0").show();
  gsap.to($("#loading"), {
    duration: 1,
    opacity: 1.0,
    ease: Linear.easeOut,
    onComplete: function () {
      $("#loading").hide();
      changeStageName($name);
      destroyVideo();
    },
  });
}

//-- 로딩바
function showLoading() {
  $("#loading").show(); //animation
}
function hideLoading() {
  $("#loading").hide();
}

//-- 배경동영상
/*
 * $url : 호출영상 경로
 * $fn : 영상 재생 후 콜백 함수
 * $stop : 자동플레이여부 (대부분 자동플레이니까 true인 경우에만 멈춤상태)
 */
function initVideo($url, $fn, $stop) {
  bgMov = $("#video")[0];
  if ($fn) {
    $("#video").removeAttr("autoplay");
    bgMov.autoplay = false;
    $("#video").removeAttr("loop");
    bgMov.loop = false;
    if (os != "ios") {
      $("#video").removeAttr("muted");
      bgMov.muted = false;
    }
    $("#video").on("ended", function () {
      //cLog('video is ended, callback function is ' + $fn);
      $("#video").off("ended");
      new Function($fn)();
    });
    bgMov.volume = 1;
  } else {
    $("#video").attr("autoplay", "autoplay");
    bgMov.autoplay = true;
    $("#video").attr("loop", "loop");
    bgMov.loop = true;
    if (os != "ios") {
      $("#video").attr("muted", "muted");
      bgMov.muted = true;
    }
  }

  bgMov.src = $url;
  //bgMov.load();
  if (!$stop) {
    bgMov.play();
  }

  /*
	//canvas 사용 시 -- video display:none 처리 후 사용
	const canvas = document.querySelector('.canvas');
	const ctx = canvas.getContext('2d');
	let canPlayState = false;
	ctx.textAlign = 'center';
	ctx.fillText('비디오 로딩 중..', 300, 200);
	const videoElem = document.querySelector('.video');
	videoElem.addEventListener('canplaythrough', render);
	function render() {
		ctx.drawImage(videoElem, 0, 0, 1920, 1080, 0, 0, canvas.width, canvas.height);
		requestAnimationFrame(render);
	}
	*/
}
function destroyVideo() {
  $("#video").off("ended");
  bgMov = $("#video")[0];
  bgMov.src = "";
}

//-- 배경이미지
function initBackground($target, $url, $mode, $dim) {
  var $imgHolder = $target.find(".img_holder");
  $(".img_container").removeClass("pan-off");
  $imgHolder.css("background-image", 'url("' + IMG_PATH + $url + '")');

  if ($dim) {
    $target
      .find(".img_holder")
      .css(
        "background-image",
        'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url("' +
          IMG_PATH +
          $url +
          '")'
      );
  } else {
    $target
      .find(".img_holder")
      .css("background-image", 'url("' + IMG_PATH + $url + '")');
  }

  if ($mode == "static" || device == "mobile") {
    $target.find(".img_holder").width("1900px");
    $target.find(".img_holder").height("1080px");
    var ratio = windowWidth / 1900;
    var tx = (windowWidth - 1900) / 2;
    var ty = (windowHeight - 1080) / 2;
    //cLog('ratio : ' + ratio + ' , tx : ' + tx + ' , ty : ' + ty);
    gsap.set($target.find(".img_holder"), { scale: ratio, x: tx, y: ty });
  } else if ($mode == null || $mode == "move" || $mode == "drag") {
    var params = {};
    if (device != "mobile") {
      params.mouseControl = "proportional";
      params.proportionalSmoothing = 0.9;
    } else {
      params.mouseControl = "kinetic";
      params.kineticDamping = 0.8;
    }
    bgImg = $target.pan(params);
  }
}
function destroyBackground() {
  $(".img_holder").css("background-image", "none");
  $(".img_container").addClass("pan-off");
  if (bgImg != null) {
    bgImg.destroy();
    bgImg = null;
  }
}

//-- Timer
function initTimer() {
  clearInterval(timer);
  count = 0;
  //$('#timer em').html(convertSeconds(limit - count));
  timer = setInterval(function () {
    count++;
    /*
		$('#timer em').html(convertSeconds(limit - count));
		if (count >= limit) {
			clearInterval(timer);
			cLog('TIME OVER');
		}
		*/
    $("#timer em").html(convertSeconds(count));
  }, 1000);
}

function convertSeconds(seconds) {
  var hour =
    parseInt(seconds / 3600) < 10
      ? "0" + parseInt(seconds / 3600)
      : parseInt(seconds / 3600);
  var min =
    parseInt((seconds % 3600) / 60) < 10
      ? "0" + parseInt((seconds % 3600) / 60)
      : parseInt((seconds % 3600) / 60);
  var sec = seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60;

  return hour + ":" + min + ":" + sec;
}

//-- 자막처리
function playCaption($target, $delay) {
  cLog("playCaption");
  $target.parent().find(".caption_container").hide();
  $target.show();

  $(".chapter .w-inner").css("position", "fixed");
  $(".chapter .w-inner").css("z-index", 101);
  var len = $target.find("div").length;
  $target.find("div").each(function (idx) {
    $(this).css("position", "absolute");
    gsap.killTweensOf($(this));
    gsap.set($(this), { opacity: 0, y: 30 });
    gsap.to($(this), {
      keyframes: [
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: $delay + idx * 3,
          ease: "power1.out",
        },
        { opacity: 0, y: -30, duration: 0.5, delay: 2, ease: "power1.in" },
      ],
      onComplete: function () {
        if (idx == len - 1) {
          $(".chapter .w-inner").css("position", "absolute");
          $(".chapter .w-inner").css("z-index", 3);
        }
      },
    });
  });

  //gsap.from($target, {delay:$delay, opacity:0, duration:0.5, ease:Linear.easeOut, onComplete:function(){
}

//-- 인벤토리 / 단서
function openIventory() {
  $("#tool .clue").addClass("active");
  //animation
}
function closeInventory() {
  $("#tool .clue").removeClass("active");
  //animation
}
// 단서를 찾았다
function findClue($name, $desc) {
  cLog("단서를 찾았다!! " + $name + " : " + $desc);
  openClue($name, "auto", 'addClue("' + $name + '","' + $desc + '")');
}
// 단서를 추가한다
function addClue($name, $desc) {
  //cLog('단서를 추가한다!! ' + $name + ' : ' + $desc);
  openIventory();
  clues.push($name);
  $("#tools .clue ul").append(
    '<li class="item_' +
      $name +
      '" data-id="' +
      $name +
      '"><a href="javascript:void(0);">' +
      $desc +
      "</a></li>"
  );
}
// 단서를 열어본다
function openClue($name, $mode, $callback) {
  var $target = $("#pop_clue").find("#" + $name);
  $("#pop_clue .pop_clue_item").removeClass("active");
  $target.addClass("active");
  openPop("pop_clue", $mode, $callback);
}

//-- 힌트
function setHints($chapter) {
  cLog("setHints : " + $chapter);
  var useCnt = hints[$chapter].useCnt;
  $("#tools .hint_wrap").data("chapter", $chapter);
  $("#tools .hint_wrap li").removeClass("open").addClass("lock").text("lock");
  for (var i = 0; i < 2; i++) {
    if (i < useCnt) {
      $("#tools .hint")
        .find("#hint_txt" + (i + 1))
        .removeClass("lock")
        .removeClass("open")
        .html(hints[$chapter]["txt" + (i + 1)]);
    } else if (i == useCnt) {
      //open
      if (locale == "ko") {
        $("#tools .hint")
          .find("#hint_txt" + (i + 1))
          .removeClass("lock")
          .addClass("open")
          .html(i + 1 + "단계 힌트 확인");
      } else {
        $("#tools .hint")
          .find("#hint_txt" + (i + 1))
          .removeClass("lock")
          .addClass("open")
          .html("View hint #" + (i + 1));
      }
    } else {
      //lock
      if (locale == "ko") {
        $("#tools .hint")
          .find("#hint_txt" + (i + 1))
          .removeClass("open")
          .addClass("lock")
          .html(i + 1 + "단계 힌트 확인");
      } else {
        $("#tools .hint")
          .find("#hint_txt" + (i + 1))
          .removeClass("open")
          .addClass("lock")
          .html("View hint #" + (i + 1));
      }
    }
  }
}
function openHints() {
  $("#tools .hint").addClass("active");
}
function closeHints() {
  $("#tools .hint").removeClass("active");
}

//-- 키보드UI
function setKeyboardUI($keyboard, $target, $keys, $fn) {
  cLog("setKeyboardUI");
  //랜덤으로 섞는다
  $keys.pop();
  $keys.splice(9, 1);
  var ranArr = $keys.sort(() => Math.random() - 0.5);
  var tmp = ranArr.pop();
  ranArr.push("back");
  ranArr.push(tmp);
  ranArr.push("enter");
  $keyboard.find("li").each(function (idx) {
    if (ranArr[idx] == "enter" || ranArr[idx] == "back") {
      $(this).data("key", ranArr[idx]).html('<a href="#">&nbsp;</a>');
    } else {
      $(this)
        .data("key", ranArr[idx])
        .html('<a href="#">' + ranArr[idx] + "</a>");
    }
  });
  $keyboard.find("li").on("click", function () {
    //var txt = $target.text();
    var txt = $target.val();
    //cLog('txt : ' + txt);
    var ret = "";
    gsap.killTweensOf($target);
    gsap.to($target, 0.5, {
      data: 1,
      onComplete: function () {
        //$target.focus();
      },
    });
    if ($(this).data("key") == "enter") {
      new Function($fn)();
      return;
    } else if ($(this).data("key") == "back") {
      ret = txt.substr(0, txt.length - 1);
    } else {
      if (txt.length < $target.attr("maxlength")) {
        ret = txt + $(this).data("key");
      } else {
        ret = txt;
      }
    }
    //$target.text(ret);
    $target.val(ret);
  });
}
function destroyKeyboardUI($keyboard) {
  $keyboard.find("li").off("click");
}
//-- popup
$(function () {
  $("#popup_content").wrap(
    '<div class="div_table"><div class="div_table_cell"></div></div>'
  );
  $(".popup_close").on("click", function () {
    var $name = $(this).data("name");
    closePop($name);
  });
});
//$target : 대상 id
//$mode : def : 기본창 // auto : 5초 후 닫힘
//$callback : 닫힌 후 콜백
function openPop($name, $mode, $callback) {
  if ($name == "") return;
  $("#popup_content > div").removeClass("active");
  $target = $("#popup_content").find("#" + $name);
  //cLog($name);
  //cLog($target);
  $target.addClass("active");
  $("html").css("overflow-y", "hidden");
  $("html").on("scroll touchmove", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  //자동닫힘 설정
  if ($mode == "auto") {
    $(".popup_close").hide();
    setTimeout(function () {
      new Function($callback)();
      closePop();
    }, 5000);
  } else {
    $(".popup_close").show();
  }
  $("#popup_wrap").addClass("active");
  $(".img_container").addClass("pan-off");
}
function closePop($name) {
  $target = $("#popup_content").find("#" + $name);
  $target.removeClass("active");
  $("html").css("overflow-y", "auto");
  $("html").off("scroll touchmove");
  $("#popup_wrap").removeClass("active");
  $(".img_container").removeClass("pan-off");
}

//-- bgm
function initBgm() {
  //bgm = new Audio(AUDIO_PATH + 'bgm_2.mp3');
  changeBgm("bgm_2.mp3");
  //bgm.play();
  /*
	bgm.addEventListener('ended', function(){
		cLog('bgm is ended');
		this.currentTime = 0;
		this.play();
	}, false);
	*/
  $("footer .audio .btn").on("click", function () {
    //cLog('bgm play');
    if ($(this).hasClass("on")) {
      useBgm = false;
      stopBgm();
    } else {
      useBgm = true;
      playBgm();
    }
  });
  //playBgm();
}
function changeBgm($url, $autoplay) {
  if (bgm) {
    //cLog(bgm.readyState);
    //bgm.pause();
    gsap.killTweensOf(bgm);
    gsap.to(bgm, 3, {
      volume: 0,
      playbackRate: 0.5,
      onComplete: function () {
        bgm.pause();
        bgm = new Audio(AUDIO_PATH + $url);
        bgm.loop = true;
        if ($autoplay) {
          playBgm();
        }
      },
    });
  } else {
    bgm = new Audio(AUDIO_PATH + $url);
    bgm.loop = true;
    if ($autoplay) {
      playBgm();
    }
  }
}
function playBgm() {
  if (!useBgm) return;
  $("footer .audio .btn").addClass("on");
  //$('footer .audio .btn').text('BGM ON');
  //bgm.play();
  gsap.killTweensOf(bgm);
  if (bgm.paused) {
    gsap.set(bgm, { volume: 0, playbackRate: 0.5 });
  }
  gsap.to(bgm, 2, { volume: 1, playbackRate: 1 });
  bgm.play();
  /*try {
		bgm.play();
	} catch (e)	{
		console.warn('bgm play not ready.');
	}*/
  //bgMov = $('#video')[0];
  gsap.killTweensOf(bgMov);
  gsap.to(bgMov, 2, { volume: 1 });

  var $btn = $("footer .audio .btn .audio-icon div");
  gsap.killTweensOf($btn);
  gsap.utils.toArray($btn).forEach(function (bar) {
    gsap.to(bar, {
      duration: 1,
      /*height: gsap.utils.random(2, 20),
			ease: "none",
			yoyo: true,
			repeat: -1,
			repeatRefresh: true,
			*/
      height: bar.dataset.height,
      ease: "power1.out",
    });
  });
}
function stopBgm() {
  $("footer .audio .btn").removeClass("on");
  //$('footer .audio .btn').text('BGM OFF');
  //bgm.pause();
  gsap.killTweensOf(bgm);
  gsap.to(bgm, 2, {
    volume: 0,
    playbackRate: 0.5,
    onComplete: bgm.pause,
    callbackScope: bgm,
  });
  gsap.killTweensOf(bgMov);
  gsap.to(bgMov, 2, { volume: 0 });

  var $btn = $("footer .audio .btn .audio-icon div");
  gsap.killTweensOf($btn);
  gsap.utils.toArray($btn).forEach(function (bar) {
    gsap.to(bar, {
      duration: 1,
      height: 4,
      ease: "power1.out",
      yoyo: false,
    });
  });
}

//-- 공유하기

//-- viewport
function getViewports() {
  windowWidth = window.innerWidth;
  windowHeight = $(window).height();
  //cLog('windowWidth : ' + windowWidth);
  if (windowWidth > 1200) {
    $("html")
      .addClass("is-desktop")
      .removeClass("is-mobile")
      .removeClass("is-disabled");
    //device = 'desktop';
  } else if (windowWidth > 750) {
    $("html")
      .addClass("is-mobile")
      .removeClass("is-desktop")
      .removeClass("is-disabled");
    //device = 'mobile';
  } else {
    $("html")
      .addClass("is-disabled")
      .removeClass("is-desktop")
      .removeClass("is-mobile");
  }

  //모바일 가로화면
  if (device == "mobile") {
    if (
      window.location.pathname == "/mo_index.html" ||
      window.location.pathname == "/mo_index_en.html" ||
      window.location.pathname == "/"
    ) {
      if (windowWidth < windowHeight) {
        if ($("#app_container").is(":visible")) {
          //alert('가로화면으로 변경해 주세요.');
          $(".rotate_view").addClass("active");
          $("#app_container").hide();
        }
      } else {
        $(".rotate_view").removeClass("active");
        $("#app_container").show();
      }
    }
  }

  //pan
  try {
    if (bgImg) {
      if (device != "mobile") {
        bgImg.resize();
      }
    } else {
      var $target = $("#" + stages[nowStage] + " .img_container");
      var ratio = windowWidth / 1900;
      var tx = (windowWidth - 1900) / 2;
      var ty = (windowHeight - 1080) / 2;
      gsap.set($target.find(".img_holder"), { scale: ratio, x: tx, y: ty });
    }
  } catch (e) {}
}

//Cookie
function setCookie(cookie_name, value, days) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + days); // 설정 일수만큼 현재시간에 만료값으로 지정
  var cookie_value =
    escape(value) + (days == null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = cookie_name + "=" + cookie_value;
}
function getCookie(cookie_name) {
  var x, y;
  var val = document.cookie.split(";");
  for (var i = 0; i < val.length; i++) {
    x = val[i].substr(0, val[i].indexOf("="));
    y = val[i].substr(val[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, ""); // 앞과 뒤의 공백 제거하기
    if (x == cookie_name) {
      return unescape(y); // unescape로 디코딩 후 값 리턴
    }
  }
}
function addCookie(id) {
  var items = getCookie("storedCookie"); // 이미 저장된 값을 쿠키에서 가져오기
  var maxItemNum = 5; // 최대 저장 가능한 아이템개수
  var expire = 7; // 쿠키값을 저장할 기간
  if (items) {
    var itemArray = items.split(",");
    if (itemArray.indexOf(id) != -1) {
      // 이미 존재하는 경우 종료
      console.log("Already exists.");
    } else {
      // 새로운 값 저장 및 최대 개수 유지하기
      itemArray.unshift(id);
      if (itemArray.length > maxItemNum) itemArray.length = 5;
      items = itemArray.join(",");
      setCookie("storedCookie", items, expire);
    }
  } else {
    // 신규 id값 저장하기
    setCookie("storedCookie", id, expire);
  }
}

//이벤트 당첨 대원
function openWinner() {
  //alert('준비중입니다.');
  openPop("pop_winner");
}

/**
 * 공유하기
 * @param type
 * @returns
 */
var StringTool = {
  format: function () {
    let args = arguments;
    return args[0].replace(/{(\d+)}/g, function (match, num) {
      num = Number(num) + 1;
      return typeof args[num] != undefined ? args[num] : match;
    });
  },
};
function sharedSNS(type) {
  cLog("Share SNS : " + type);
  logEvent("Share SNS", type);
  var metaurl = $('meta[name="metaurl"]').attr("content");
  var metatitle = $('meta[name="metatitle"]').attr("content");
  var metadesc = $('meta[name="metadesc"]').attr("content");
  var metaimage = $('meta[name="metaimage"]').attr("content");
  var metatype = $('meta[name="metatype"]').attr("content");
  var metasite = $('meta[name="metasite"]').attr("content");

  /*	console.log("type : " , type);
	console.log("metaurl : " , metaurl);
	console.log("metatitle : " , metatitle);
	console.log("metadesc : " , metadesc);
	console.log("metaimage : " , metaimage);
	console.log("metatype : " , metatype);
	console.log("metasite : " , metasite);*/

  //URL 복사
  if (type == "url") {
    fnCopyUrlToClipboard(metaurl);
  } else if (type == "band") {
    fnShareNaverBand(metaurl, metatitle, metadesc);
  } else if (type == "kakao") {
    //fnShareKakaoLink(metaurl, metatitle, metadesc, metaimage);
    fnShareKakaoLink(
      metaurl,
      metatitle,
      metadesc,
      "https://www.thesilentsea.net/resources/images/1000x1000.jpg"
    );
  } else if (type == "twitter") {
    if (locale == "ko") {
      fnShareTwitter(
        metasite,
        metatitle + " #고요의바다 #달탈출 #thesilentsea #escapemoon",
        metaurl
      );
    } else {
      fnShareTwitter(
        metasite,
        metatitle + " #thesilentsea #escapemoon",
        metaurl
      );
    }
  } else if (type == "facebook") {
    //fnShareFacebookLink(metaurl);
    fnShareFaceBookLink_v2(metaurl, metatitle);
  } else if (type == "blog") {
    blogLink(metatitle, metaurl);
  } else if (type == "insta") {
    intragramLink();
  }
}

/**
 * URL을 클립보드에 복사
 * @param url
 * @returns
 */
function fnCopyUrlToClipboard(url) {
  var obShareUrl = $("#ShareUrl");
  if (!obShareUrl) {
    obShrareUrl = $("<input>").attr({
      type: "hidden",
      id: "ShareUrl",
      name: "ShareUrl",
    });
    $(document).append(obShrareUrl);
  }
  obShareUrl.val(url);
  obShareUrl.attr("type", "text");
  try {
    obShareUrl.select();
    var success = document.execCommand("copy");
    obShareUrl.attr("type", "hidden");
    if (success) alert(common_messages[locale].alert_copied);
    else alert(common_messages[locale].alert_copied_err);
  } catch (err) {
    alert(common_messages[locale].alert_copied_err + "[" + err + "]");
  }
}

function fnCopuUrlToClipboardMobile(url) {
  if (Clipboard) {
    var clipboard = new Clipboard(".clipboard", {
      text: function () {
        return url;
      },
    });
    clipboard.on("success", function (e) {
      alert(common_messages[locale].alert_copied);
    });
    clipboard.on("error", function (e) {
      alert(common_messages[locale].alert_copied_err + "[" + e + "]");
    });
  } else {
    alert(common_messages[locale].alert_copied_err);
  }
}

function fnShareNaverBand(url, title, content) {
  var encodeBody = encodeURIComponent(
    StringTool.format("{0}\n{1}\n{2}", title, content, url)
  );
  var encodeRoute = encodeURIComponent(url);
  var link = StringTool.format(
    "http://band.us/plugin/share?body={0}&route={1}",
    encodeBody,
    encodeRoute
  );
  window.open(link, "share_band", "width=410, height=720, resizeable=no");
}

function fnShareKakaoLink(url, title, description, image) {
  //발급후 적용
  console.log("fnShareKakaoLink : " + url);
  var javascript_key = "a9be32bbf4d572d9a84728761646e42e";
  var templateId = 52783;
  if (!Kakao.isInitialized()) {
    Kakao.init(javascript_key);
  }

  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: title,
      description: description,
      imageUrl: image,
      link: {
        mobileWebUrl: url,
        webUrl: url,
        /*mobileWebUrl: window.location.href,
				webUrl: window.location.href*/
      },
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: url,
          webUrl: url,
          /*mobileWebUrl: window.location.href,
					webUrl: window.location.href*/
        },
      },
    ],
  });

  /*Kakao.Link.sendCustom({
		templateId : templateId,
		templateArgs : {
			'url' : url,
			'img' : image,
			'title' : title,
			'remark' : description
		}
	});*/
}

function fnShareFacebookLink(url) {
  // url = 'http://zin.branchline.co.kr';
  window.open(
    "http://www.facebook.com/sharer.php?display=popup&u=" + url,
    "share_facebook",
    "width=410, height=720, resizeable=no"
  );
}

function fnShareFaceBookLink_v2(url, title) {
  console.log("share facebook : " + url);
  //DocImage = encodeURIComponent("http://www.kocca.kr/images/common/header/logo_kocca.gif");
  //var newwindow = window.open('http://www.facebook.com./sharer.php?s=100&p[url]='+encodeURIComponent(url)+'&p[title]='+encodeURIComponent(title), 'share_facebook', 'toolbar=0, status=0, width=626, height=436');
  var newwindow = window.open(
    "http://www.facebook.com/sharer.php?display=popup&u=" + url,
    "share_facebook",
    "width=410, height=720, resizeable=no"
  );
  if (window.focus) {
    newwindow.focus();
  }
}

function fnShareTwitter(site_nm, title, url) {
  //var str = site_nm + " | " + title + " " + url;
  //var sitelink = "http://twitter.com/home?status=" + encodeURIComponent(str);
  var str = site_nm + "\n" + title;
  var sitelink =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(str) +
    "&url=" +
    encodeURIComponent(url);
  window.open(
    sitelink,
    "share_twitter",
    "width=410, height=720, resizeable=no"
  );
}

function blogLink(title, url) {
  window.open(
    "http://blog.naver.com/openapi/share?url=" +
      url +
      "&title=" +
      encodeURI(title),
    "share_blog",
    "width=410, height=720, resizeable=no"
  );
}
function intragramLink() {
  /*
	if(os !="pc"){
		if(os == "ios"){
			setTimeout( function() {
				window.open('https://www.instagram.com/');
			}, 1500);
			location.href = 'instagram://media';
		}else{
			location.href = 'intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end';
		}
	} else {
		window.open('https://www.instagram.com/');
	}
	*/
  window.open("https://www.instagram.com/");
}

function logEvent($name, $action) {
  try {
    gtag("event", $action, {
      event_category: $action,
      event_label: $name,
      value: $action,
    });
    wcs.event($name, $action);
  } catch (e) {}
}

//-- logger
function cLog($text) {
  console.log($text);
  $("#debuger").append($text + "\n");
  $("#debuger").scrollTop($("#debuger").prop("scrollHeight"));
}
