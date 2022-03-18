import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}
    @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}


    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button, select, option {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 16px;
      font: inherit;
      vertical-align: baseline;
      font-family: 'Pretendard';
      font-weight: 400;

    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
      background-color:#FCFEFE;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    a, a:hover, a:active, a:visited, a:focus {
      text-decoration: none;
      color:inherit;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    

    /* margin + padding */
    .mt0 {margin-top:0px !important;}   .mb0 {margin-bottom:0 !important;} 
    .mt5 {margin-top:5px !important;}   .mb5 {margin-bottom:5px !important;}
    .mt10 {margin-top:10px !important;}	.mb10 {margin-bottom:10px !important;}	.mtm10 {margin-top:-10px !important;}
    .mt20 {margin-top:20px !important;}	.mb20 {margin-bottom:20px !important;}	.mtm20 {margin-top:-20px !important;}
    .mt30 {margin-top:30px !important;}	.mb30 {margin-bottom:30px !important;}	.mtm30 {margin-top:-30px !important;}
    .mt40 {margin-top:40px !important;}	.mb40 {margin-bottom:40px !important;}	.mtm40 {margin-top:-40px !important;}
    .mt50 {margin-top:50px !important;}	.mb50 {margin-bottom:50px !important;}	.mtm50 {margin-top:-50px !important;}
    .ml0 {margin-left:0 !important;}   
    .ml5 {margin-left:5px !important;}	    .mr5 {margin-right:5px !important;}			
    .ml10 {margin-left:10px !important;}	.mr10 {margin-right:10px !important;}
    .ml20 {margin-left:20px !important;}	.mr20 {margin-right:20px !important;}
    .ml30 {margin-left:30px !important;}	.mr30 {margin-right:30px !important;}
    .ml40 {margin-left:40px !important;}	.mr40 {margin-right:40px !important;}
    .ml50 {margin-left:50px !important;}	.mr50 {margin-right:50px !important;}

    .pt0 {padding-top:0px !important;}      .pb0 {padding-bottom:0 !important;} 
    .pt5 {padding-top:5px !important;}      .pb5 {padding-bottom:5px !important;}
    .pt10 {padding-top:10px !important;}	.pb10 {padding-bottom:10px !important;}	/*.ptm10 {padding-top:-10px !important;}*/
    .pt20 {padding-top:20px !important;}	.pb20 {padding-bottom:20px !important;}	/*.ptm20 {padding-top:-20px !important;}*/
    .pt30 {padding-top:30px !important;}	.pb30 {padding-bottom:30px !important;}	/*.ptm30 {padding-top:-30px !important;}*/
    .pt40 {padding-top:40px !important;}	.pb40 {padding-bottom:40px !important;}	/*.ptm40 {padding-top:-40px !important;}*/
    .pt50 {padding-top:50px !important;}	.pb50 {padding-bottom:50px !important;}	/*.ptm50 {padding-top:-50px !important;}*/
    .pr0 {padding-right:0px !important;}
    .pl5 {padding-left:5px !important;}	  .pr5 {padding-right:5px !important;}			
    .pl10 {padding-left:10px !important;}	.pr10 {padding-right:10px !important;}
    .pl20 {padding-left:20px !important;}	.pr20 {padding-right:20px !important;}
    .pl30 {padding-left:30px !important;}	.pr30 {padding-right:30px !important;}
    .pl40 {padding-left:40px !important;}	.pr40 {padding-right:40px !important;}
    .pl50 {padding-left:50px !important;}	.pr50 {padding-right:50px !important;}


    /* font_color */
    .black {color: #000;}

    /* underline */
    .underline {border-bottom: 3px solid #889CF2; box-sizing: border-box; padding-bottom:8px; margin-bottom: -11px;}

    /* float */
    .fl {float:left; height: 100%}
    .fr {float:right;}

    /* clearfix */
    .clearfix:after {
      display:block;
      content: '';
      clear:both;
    }

    /* font-weight */
    .font600 {
      font-weight: 600;
    }

    /* text-align */
    .tc {
      text-align: center;
    }

    /* 스크롤 바 커스텀 */

    *::-webkit-scrollbar { width:5px; }
    *::-webkit-scrollbar-track { background-color: #eff6f8; border-radius: 100px; } 
    *::-webkit-scrollbar-thumb { background-color: #ccc; border-radius: 100px;  } 
    
    *::-webkit-scrollbar-thumb {  box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5); border-radius: 100px; }

    /* disabled 비활성화 버튼  */
    .disabled {background:#d7d7d7!important; color:#fff!important; cursor:auto!important;}

`;

export default GlobalStyles;
