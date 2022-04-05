function isBrowserCheck() {
    const agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf('chrome') != -1)
        return 'chrome 사용자 : 주소창 좌측의 자물쇠 모양 아이콘을 클릭하시고 마이크 사용권한을 허용해주십시오.';
    if (agt.indexOf('firefox') != -1)
        return 'firefox 사용자 : 주소창 좌측의 마이크 모양 아이콘을 클릭하시고 마이크 사용권한을 허용해주십시오.';
    if (agt.indexOf('safari') != -1)
        return 'Safari 사용자 : 환경설정 => 웹사이트 => 마이크 => zzz-escape를 허용해주십시오';
    if (agt.indexOf('opera') != -1) return '';
    if (agt.indexOf('edg') != -1)
        return 'edge 사용자 : 주소창 좌측의 자물쇠 모양 아이콘을 클릭하시고 마이크 사용권한을 허용해주십시오.';
    if (agt.indexOf('whale') != -1)
        return 'whale 사용자 : 주소창 좌측의 자물쇠 모양 아이콘을 클릭하시고 마이크 사용권한을 허용해주십시오.';
    if (agt.indexOf('msie') != -1) {
        let rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            let ua = navigator.userAgent;
            var re = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
            if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
        }
        return 'Internet Explorer ' + rv;
    }
}
const mediaAlert = isBrowserCheck();

export default mediaAlert;
