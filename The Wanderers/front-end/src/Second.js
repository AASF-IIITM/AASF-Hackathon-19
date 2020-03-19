import Navbar1 from './Navbar'

import React from "react";
import ReactDOM from "react-dom";
import "./Second.css";
const paths = [
  <path
    d="M271,113L241,321L172,54Z"
    fill="rgb(19, 19, 19)"
    fill-opacity="0.61"
  />,
  <path
    d="M510,170L363,481L343,281Z"
    fill="rgb(103, 103, 103)"
    fill-opacity="0.72"
  />,
  <path
    d="M252,93L164,67L119,130Z"
    fill="rgb(47, 47, 47)"
    fill-opacity="0.67"
  />,
  <path
    d="M227,269L161,262L215,218Z"
    fill="rgb(54, 54, 54)"
    fill-opacity="0.46"
  />,
  <path
    d="M223,324L183,263L919,192Z"
    fill="rgb(169, 169, 169)"
    fill-opacity="0.63"
  />,
  <path
    d="M207,116L220,213L133,120Z"
    fill="rgb(218, 218, 218)"
    fill-opacity="0.59"
  />,
  <path
    d="M281,154L477,-100L193,-1Z"
    fill="rgb(227, 227, 227)"
    fill-opacity="0.91"
  />,
  <path
    d="M247,250L328,184L241,202Z"
    fill="rgb(230, 230, 230)"
    fill-opacity="0.68"
  />,
  <path d="M271,152L216,68L233,205Z" fill="rgb(0, 0, 0)" fill-opacity="0.64" />,
  <path
    d="M269,135L228,80L190,63Z"
    fill="rgb(50, 50, 50)"
    fill-opacity="0.61"
  />,
  <path
    d="M241,313L231,316L261,263Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.41"
  />,
  <path
    d="M138,89L267,141L249,96Z"
    fill="rgb(18, 18, 18)"
    fill-opacity="0.46"
  />,
  <path
    d="M152,323L150,307L186,287Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.33"
  />,
  <path
    d="M0,291L-32,-25L225,-5Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.57"
  />,
  <path
    d="M219,281L247,248L277,270Z"
    fill="rgb(95, 95, 95)"
    fill-opacity="0.62"
  />,
  <path
    d="M168,103L118,129L153,66Z"
    fill="rgb(55, 55, 55)"
    fill-opacity="0.38"
  />,
  <path
    d="M154,184L179,150L172,210Z"
    fill="rgb(24, 24, 24)"
    fill-opacity="0.30"
  />,
  <path
    d="M345,286L297,409L388,497Z"
    fill="rgb(172, 172, 172)"
    fill-opacity="0.62"
  />,
  <path
    d="M298,78L175,66L104,-145Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.82"
  />,
  <path
    d="M438,450L389,480L358,306Z"
    fill="rgb(70, 70, 70)"
    fill-opacity="0.76"
  />,
  <path
    d="M127,129L149,77L130,160Z"
    fill="rgb(128, 128, 128)"
    fill-opacity="0.95"
  />,
  <path
    d="M186,299L144,317L176,290Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.26"
  />,
  <path
    d="M252,19L319,283L269,162Z"
    fill="rgb(225, 225, 225)"
    fill-opacity="0.75"
  />,
  <path
    d="M236,253L225,242L155,319Z"
    fill="rgb(204, 204, 204)"
    fill-opacity="0.41"
  />,
  <path
    d="M230,183L159,169L189,150Z"
    fill="rgb(168, 168, 168)"
    fill-opacity="0.76"
  />,
  <path
    d="M168,185L176,205L147,206Z"
    fill="rgb(98, 98, 98)"
    fill-opacity="0.43"
  />,
  <path
    d="M213,106L263,178L269,152Z"
    fill="rgb(11, 11, 11)"
    fill-opacity="0.50"
  />,
  <path
    d="M336,322L695,2L337,133Z"
    fill="rgb(169, 169, 169)"
    fill-opacity="0.65"
  />,
  <path
    d="M321,398L333,376L280,449Z"
    fill="rgb(37, 37, 37)"
    fill-opacity="0.42"
  />,
  <path
    d="M133,176L149,174L142,154Z"
    fill="rgb(36, 36, 36)"
    fill-opacity="0.26"
  />,
  <path
    d="M18,-85L162,231L-59,496Z"
    fill="rgb(238, 238, 238)"
    fill-opacity="0.87"
  />,
  <path
    d="M256,218L256,178L238,215Z"
    fill="rgb(160, 160, 160)"
    fill-opacity="0.92"
  />,
  <path
    d="M184,270L215,196L250,218Z"
    fill="rgb(78, 78, 78)"
    fill-opacity="0.36"
  />,
  <path
    d="M140,333L95,286L125,273Z"
    fill="rgb(10, 10, 10)"
    fill-opacity="0.10"
  />,
  <path
    d="M227,172L169,184L181,233Z"
    fill="rgb(253, 253, 253)"
    fill-opacity="0.30"
  />,
  <path
    d="M151,270L214,201L220,224Z"
    fill="rgb(178, 178, 178)"
    fill-opacity="0.50"
  />,
  <path
    d="M253,279L236,289L208,343Z"
    fill="rgb(196, 196, 196)"
    fill-opacity="1.00"
  />,
  <path
    d="M206,109L248,225L204,161Z"
    fill="rgb(117, 117, 117)"
    fill-opacity="0.49"
  />,
  <path
    d="M179,303L184,292L188,308Z"
    fill="rgb(14, 14, 14)"
    fill-opacity="0.18"
  />,
  <path
    d="M173,219L178,225L136,219Z"
    fill="rgb(74, 74, 74)"
    fill-opacity="0.33"
  />,
  <path
    d="M278,154L242,238L313,282Z"
    fill="rgb(226, 226, 226)"
    fill-opacity="0.74"
  />,
  <path
    d="M179,269L247,226L176,253Z"
    fill="rgb(69, 69, 69)"
    fill-opacity="0.33"
  />,
  <path
    d="M-51,603L122,287L73,294Z"
    fill="rgb(215, 215, 215)"
    fill-opacity="0.94"
  />,
  <path
    d="M213,153L170,105L125,157Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.34"
  />,
  <path
    d="M161,82L188,77L182,102Z"
    fill="rgb(43, 43, 43)"
    fill-opacity="0.74"
  />,
  <path
    d="M259,173L229,190L214,250Z"
    fill="rgb(77, 77, 77)"
    fill-opacity="0.75"
  />,
  <path
    d="M353,389L323,431L375,374Z"
    fill="rgb(73, 73, 73)"
    fill-opacity="0.58"
  />,
  <path
    d="M415,326L389,412L377,366Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.18"
  />,
  <path
    d="M251,101L201,62L166,67Z"
    fill="rgb(103, 103, 103)"
    fill-opacity="0.38"
  />,
  <path
    d="M316,290L304,276L382,325Z"
    fill="rgb(113, 113, 113)"
    fill-opacity="0.38"
  />,
  <path
    d="M299,285L290,270L204,239Z"
    fill="rgb(84, 84, 84)"
    fill-opacity="0.31"
  />,
  <path
    d="M253,276L215,299L260,256Z"
    fill="rgb(11, 11, 11)"
    fill-opacity="0.17"
  />,
  <path
    d="M197,160L163,100L231,138Z"
    fill="rgb(182, 182, 182)"
    fill-opacity="0.24"
  />,
  <path
    d="M238,91L244,203L260,113Z"
    fill="rgb(10, 10, 10)"
    fill-opacity="0.52"
  />,
  <path
    d="M152,206L157,199L166,207Z"
    fill="rgb(7, 7, 7)"
    fill-opacity="0.21"
  />,
  <path
    d="M185,216L137,305L130,254Z"
    fill="rgb(240, 240, 240)"
    fill-opacity="0.47"
  />,
  <path
    d="M201,92L194,212L185,85Z"
    fill="rgb(247, 247, 247)"
    fill-opacity="0.10"
  />,
  <path d="M140,116L162,107L142,76Z" fill="rgb(6, 6, 6)" fill-opacity="0.16" />,
  <path
    d="M221,198L224,182L190,157Z"
    fill="rgb(202, 202, 202)"
    fill-opacity="0.34"
  />,
  <path
    d="M340,302L252,283L249,319Z"
    fill="rgb(218, 218, 218)"
    fill-opacity="0.45"
  />,
  <path
    d="M311,384L304,393L299,434Z"
    fill="rgb(7, 7, 7)"
    fill-opacity="0.32"
  />,
  <path
    d="M374,388L364,402L374,409Z"
    fill="rgb(9, 9, 9)"
    fill-opacity="0.42"
  />,
  <path
    d="M203,94L211,108L225,97Z"
    fill="rgb(67, 67, 67)"
    fill-opacity="0.90"
  />,
  <path
    d="M217,306L189,297L252,260Z"
    fill="rgb(161, 161, 161)"
    fill-opacity="0.52"
  />,
  <path
    d="M191,57L281,117L168,-232Z"
    fill="rgb(233, 233, 233)"
    fill-opacity="0.81"
  />,
  <path
    d="M355,304L367,315L364,356Z"
    fill="rgb(86, 86, 86)"
    fill-opacity="0.53"
  />,
  <path
    d="M233,311L78,316L111,560Z"
    fill="rgb(226, 226, 226)"
    fill-opacity="0.39"
  />,
  <path
    d="M260,277L287,262L258,206Z"
    fill="rgb(253, 253, 253)"
    fill-opacity="0.17"
  />,
  <path
    d="M250,216L266,188L227,238Z"
    fill="rgb(66, 66, 66)"
    fill-opacity="0.40"
  />,
  <path
    d="M194,105L146,110L216,122Z"
    fill="rgb(101, 101, 101)"
    fill-opacity="0.45"
  />,
  <path
    d="M314,427L375,367L368,347Z"
    fill="rgb(250, 250, 250)"
    fill-opacity="0.17"
  />,
  <path
    d="M148,161L132,162L138,156Z"
    fill="rgb(126, 126, 126)"
    fill-opacity="0.53"
  />,
  <path
    d="M219,128L231,136L233,243Z"
    fill="rgb(67, 67, 67)"
    fill-opacity="0.52"
  />,
  <path
    d="M281,279L277,304L286,284Z"
    fill="rgb(108, 108, 108)"
    fill-opacity="0.33"
  />,
  <path
    d="M258,200L253,179L247,184Z"
    fill="rgb(248, 248, 248)"
    fill-opacity="0.26"
  />,
  <path
    d="M182,352L184,360L186,344Z"
    fill="rgb(52, 52, 52)"
    fill-opacity="0.28"
  />,
  <path
    d="M85,20L153,80L177,23Z"
    fill="rgb(236, 236, 236)"
    fill-opacity="0.67"
  />,
  <path
    d="M244,291L229,318L246,316Z"
    fill="rgb(3, 3, 3)"
    fill-opacity="0.21"
  />,
  <path
    d="M61,245L-118,-308L26,521Z"
    fill="rgb(237, 237, 237)"
    fill-opacity="0.99"
  />,
  <path
    d="M296,351L302,282L347,310Z"
    fill="rgb(205, 205, 205)"
    fill-opacity="0.93"
  />,
  <path
    d="M156,339L114,294L129,325Z"
    fill="rgb(139, 139, 139)"
    fill-opacity="0.25"
  />,
  <path
    d="M133,134L140,125L123,112Z"
    fill="rgb(3, 3, 3)"
    fill-opacity="0.20"
  />,
  <path
    d="M151,308L180,294L155,312Z"
    fill="rgb(1, 1, 1)"
    fill-opacity="0.30"
  />,
  <path
    d="M89,396L66,397L109,416Z"
    fill="rgb(50, 50, 50)"
    fill-opacity="0.18"
  />,
  <path
    d="M179,166L198,168L187,172Z"
    fill="rgb(31, 31, 31)"
    fill-opacity="0.26"
  />,
  <path
    d="M181,154L191,159L168,159Z"
    fill="rgb(61, 61, 61)"
    fill-opacity="0.31"
  />,
  <path
    d="M234,212L247,224L224,236Z"
    fill="rgb(42, 42, 42)"
    fill-opacity="0.29"
  />,
  <path
    d="M256,199L266,187L264,177Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.19"
  />,
  <path
    d="M255,258L245,239L228,263Z"
    fill="rgb(73, 73, 73)"
    fill-opacity="0.54"
  />,
  <path
    d="M164,180L159,170L178,165Z"
    fill="rgb(2, 2, 2)"
    fill-opacity="0.17"
  />,
  <path
    d="M348,355L327,358L316,396Z"
    fill="rgb(231, 231, 231)"
    fill-opacity="0.36"
  />,
  <path
    d="M136,180L130,166L150,169Z"
    fill="rgb(3, 3, 3)"
    fill-opacity="0.13"
  />,
  <path
    d="M192,167L198,162L131,154Z"
    fill="rgb(239, 239, 239)"
    fill-opacity="0.36"
  />,
  <path
    d="M29,166L66,311L161,178Z"
    fill="rgb(239, 239, 239)"
    fill-opacity="0.53"
  />,
  <path
    d="M153,216L137,224L185,223Z"
    fill="rgb(88, 88, 88)"
    fill-opacity="0.16"
  />,
  <path
    d="M201,76L239,51L183,9Z"
    fill="rgb(240, 240, 240)"
    fill-opacity="0.27"
  />,
  <path
    d="M398,324L428,268L326,293Z"
    fill="rgb(155, 155, 155)"
    fill-opacity="0.58"
  />,
  <path
    d="M223,264L190,311L211,254Z"
    fill="rgb(246, 246, 246)"
    fill-opacity="0.20"
  />,
  <path
    d="M213,294L207,299L226,311Z"
    fill="rgb(15, 15, 15)"
    fill-opacity="0.12"
  />,
  <path
    d="M140,82L131,122L141,99Z"
    fill="rgb(241, 241, 241)"
    fill-opacity="0.23"
  />,
  <path
    d="M119,277L122,289L142,269Z"
    fill="rgb(13, 13, 13)"
    fill-opacity="0.11"
  />,
  <path
    d="M199,166L209,147L272,166Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.10"
  />,
  <path d="M157,71L163,72L137,87Z" fill="rgb(4, 4, 4)" fill-opacity="0.12" />,
  <path
    d="M251,253L245,219L288,269Z"
    fill="rgb(233, 233, 233)"
    fill-opacity="0.51"
  />,
  <path
    d="M140,93L150,109L169,96Z"
    fill="rgb(29, 29, 29)"
    fill-opacity="0.26"
  />,
  <path
    d="M166,300L136,316L161,245Z"
    fill="rgb(212, 212, 212)"
    fill-opacity="0.70"
  />,
  <path
    d="M197,403L202,324L195,400Z"
    fill="rgb(120, 120, 120)"
    fill-opacity="0.43"
  />,
  <path
    d="M186,245L204,240L220,163Z"
    fill="rgb(180, 180, 180)"
    fill-opacity="0.41"
  />,
  <path
    d="M154,308L177,290L170,307Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.23"
  />,
  <path
    d="M331,328L338,317L352,307Z"
    fill="rgb(21, 21, 21)"
    fill-opacity="0.26"
  />,
  <path
    d="M268,263L244,274L255,255Z"
    fill="rgb(42, 42, 42)"
    fill-opacity="0.22"
  />,
  <path
    d="M409,-127L263,173L300,234Z"
    fill="rgb(218, 218, 218)"
    fill-opacity="0.63"
  />,
  <path
    d="M373,380L324,429L367,397Z"
    fill="rgb(250, 250, 250)"
    fill-opacity="0.29"
  />,
  <path
    d="M151,256L180,268L171,255Z"
    fill="rgb(159, 159, 159)"
    fill-opacity="0.56"
  />,
  <path
    d="M181,297L187,274L155,259Z"
    fill="rgb(225, 225, 225)"
    fill-opacity="0.61"
  />,
  <path
    d="M-21,313L150,266L170,232Z"
    fill="rgb(238, 238, 238)"
    fill-opacity="0.75"
  />,
  <path
    d="M167,95L148,125L175,116Z"
    fill="rgb(128, 128, 128)"
    fill-opacity="0.28"
  />,
  <path
    d="M212,99L213,70L231,96Z"
    fill="rgb(51, 51, 51)"
    fill-opacity="0.54"
  />,
  <path
    d="M135,141L121,119L119,124Z"
    fill="rgb(152, 152, 152)"
    fill-opacity="0.73"
  />,
  <path
    d="M220,98L227,119L204,98Z"
    fill="rgb(69, 69, 69)"
    fill-opacity="0.72"
  />,
  <path
    d="M226,296L228,284L243,271Z"
    fill="rgb(91, 91, 91)"
    fill-opacity="0.27"
  />,
  <path
    d="M63,320L131,159L105,73Z"
    fill="rgb(238, 238, 238)"
    fill-opacity="0.79"
  />,
  <path
    d="M262,134L302,94L306,149Z"
    fill="rgb(223, 223, 223)"
    fill-opacity="0.68"
  />,
  <path
    d="M133,154L140,117L187,155Z"
    fill="rgb(254, 254, 254)"
    fill-opacity="0.32"
  />,
  <path
    d="M372,334L357,367L488,350Z"
    fill="rgb(107, 107, 107)"
    fill-opacity="0.38"
  />,
  <path
    d="M145,166L130,170L141,161Z"
    fill="rgb(244, 244, 244)"
    fill-opacity="0.38"
  />,
  <path
    d="M176,294L156,310L178,288Z"
    fill="rgb(23, 23, 23)"
    fill-opacity="0.35"
  />,
  <path
    d="M175,201L170,187L169,204Z"
    fill="rgb(11, 11, 11)"
    fill-opacity="0.22"
  />,
  <path
    d="M197,370L205,303L205,321Z"
    fill="rgb(50, 50, 50)"
    fill-opacity="0.24"
  />,
  <path
    d="M396,398L389,356L451,416Z"
    fill="rgb(98, 98, 98)"
    fill-opacity="0.83"
  />,
  <path
    d="M308,352L245,296L300,408Z"
    fill="rgb(253, 253, 253)"
    fill-opacity="0.19"
  />,
  <path
    d="M323,115L418,71L296,321Z"
    fill="rgb(195, 195, 195)"
    fill-opacity="0.46"
  />,
  <path
    d="M236,273L219,298L172,273Z"
    fill="rgb(220, 220, 220)"
    fill-opacity="0.14"
  />,
  <path
    d="M171,43L199,77L163,60Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.13"
  />,
  <path
    d="M250,199L244,199L245,185Z"
    fill="rgb(22, 22, 22)"
    fill-opacity="0.41"
  />,
  <path
    d="M239,206L259,201L239,218Z"
    fill="rgb(189, 189, 189)"
    fill-opacity="0.37"
  />,
  <path
    d="M162,75L187,64L182,86Z"
    fill="rgb(89, 89, 89)"
    fill-opacity="0.61"
  />,
  <path
    d="M207,46L176,70L166,29Z"
    fill="rgb(241, 241, 241)"
    fill-opacity="0.35"
  />,
  <path
    d="M132,236L206,214L190,233Z"
    fill="rgb(220, 220, 220)"
    fill-opacity="0.54"
  />,
  <path
    d="M167,158L161,119L143,196Z"
    fill="rgb(237, 237, 237)"
    fill-opacity="0.56"
  />,
  <path
    d="M272,284L240,309L257,276Z"
    fill="rgb(211, 211, 211)"
    fill-opacity="0.29"
  />,
  <path
    d="M194,102L260,112L205,111Z"
    fill="rgb(9, 9, 9)"
    fill-opacity="0.29"
  />,
  <path
    d="M165,220L188,166L196,219Z"
    fill="rgb(250, 250, 250)"
    fill-opacity="0.25"
  />,
  <path
    d="M133,123L126,123L126,111Z"
    fill="rgb(42, 42, 42)"
    fill-opacity="0.36"
  />,
  <path
    d="M177,317L180,285L163,339Z"
    fill="rgb(222, 222, 222)"
    fill-opacity="0.45"
  />,
  <path
    d="M260,261L266,282L278,265Z"
    fill="rgb(136, 136, 136)"
    fill-opacity="0.53"
  />,
  <path
    d="M313,409L322,388L340,370Z"
    fill="rgb(3, 3, 3)"
    fill-opacity="0.16"
  />,
  <path
    d="M196,168L202,173L181,172Z"
    fill="rgb(117, 117, 117)"
    fill-opacity="0.47"
  />,
  <path
    d="M351,328L311,374L344,314Z"
    fill="rgb(228, 228, 228)"
    fill-opacity="0.25"
  />,
  <path
    d="M355,334L348,310L345,312Z"
    fill="rgb(5, 5, 5)"
    fill-opacity="0.23"
  />,
  <path
    d="M145,215L136,200L182,219Z"
    fill="rgb(226, 226, 226)"
    fill-opacity="0.82"
  />,
  <path
    d="M247,184L264,125L220,89Z"
    fill="rgb(15, 15, 15)"
    fill-opacity="0.66"
  />,
  <path
    d="M295,414L305,409L308,388Z"
    fill="rgb(23, 23, 23)"
    fill-opacity="0.24"
  />,
  <path
    d="M240,272L238,230L251,249Z"
    fill="rgb(78, 78, 78)"
    fill-opacity="0.64"
  />,
  <path
    d="M354,146L363,279L564,154Z"
    fill="rgb(171, 171, 171)"
    fill-opacity="0.46"
  />,
  <path
    d="M285,341L267,277L310,265Z"
    fill="rgb(136, 136, 136)"
    fill-opacity="0.10"
  />,
  <path
    d="M206,159L197,114L149,127Z"
    fill="rgb(244, 244, 244)"
    fill-opacity="0.16"
  />,
  <path
    d="M231,101L228,79L247,103Z"
    fill="rgb(101, 101, 101)"
    fill-opacity="0.21"
  />,
  <path
    d="M258,181L235,205L246,174Z"
    fill="rgb(164, 164, 164)"
    fill-opacity="0.10"
  />,
  <path
    d="M207,102L214,105L207,98Z"
    fill="rgb(247, 247, 247)"
    fill-opacity="0.21"
  />,
  <path
    d="M318,310L335,326L321,343Z"
    fill="rgb(101, 101, 101)"
    fill-opacity="0.10"
  />,
  <path
    d="M166,300L146,265L172,294Z"
    fill="rgb(216, 216, 216)"
    fill-opacity="0.56"
  />,
  <path
    d="M41,31L119,101L175,56Z"
    fill="rgb(237, 237, 237)"
    fill-opacity="0.74"
  />,
  <path
    d="M231,183L201,268L220,162Z"
    fill="rgb(121, 121, 121)"
    fill-opacity="0.34"
  />,
  <path
    d="M287,270L320,113L353,265Z"
    fill="rgb(206, 206, 206)"
    fill-opacity="0.29"
  />,
  <path
    d="M264,262L242,237L254,207Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.43"
  />,
  <path
    d="M354,-105L227,19L264,127Z"
    fill="rgb(229, 229, 229)"
    fill-opacity="0.49"
  />,
  <path d="M161,85L181,85L195,108Z" fill="rgb(7, 7, 7)" fill-opacity="0.22" />,
  <path
    d="M235,316L254,279L236,305Z"
    fill="rgb(3, 3, 3)"
    fill-opacity="0.28"
  />,
  <path
    d="M130,139L129,132L74,189Z"
    fill="rgb(237, 237, 237)"
    fill-opacity="0.58"
  />,
  <path
    d="M162,186L190,187L141,158Z"
    fill="rgb(100, 100, 100)"
    fill-opacity="0.10"
  />,
  <path
    d="M336,430L334,408L361,385Z"
    fill="rgb(40, 40, 40)"
    fill-opacity="0.25"
  />,
  <path
    d="M261,171L259,179L265,194Z"
    fill="rgb(160, 160, 160)"
    fill-opacity="0.67"
  />,
  <path
    d="M172,172L188,194L195,174Z"
    fill="rgb(225, 225, 225)"
    fill-opacity="0.64"
  />,
  <path
    d="M323,394L342,374L316,421Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.26"
  />,
  <path
    d="M199,74L207,74L198,70Z"
    fill="rgb(239, 239, 239)"
    fill-opacity="0.29"
  />,
  <path d="M156,79L160,73L147,77Z" fill="rgb(4, 4, 4)" fill-opacity="0.15" />,
  <path
    d="M197,117L182,73L184,62Z"
    fill="rgb(18, 18, 18)"
    fill-opacity="0.24"
  />,
  <path
    d="M134,147L131,159L127,142Z"
    fill="rgb(136, 136, 136)"
    fill-opacity="0.49"
  />,
  <path
    d="M198,112L211,164L222,133Z"
    fill="rgb(134, 134, 134)"
    fill-opacity="0.39"
  />,
  <path
    d="M219,288L239,272L239,264Z"
    fill="rgb(217, 217, 217)"
    fill-opacity="0.17"
  />,
  <path
    d="M206,80L214,72L195,76Z"
    fill="rgb(66, 66, 66)"
    fill-opacity="0.73"
  />,
  <path
    d="M121,280L126,301L127,277Z"
    fill="rgb(46, 46, 46)"
    fill-opacity="0.10"
  />,
  <path
    d="M235,250L171,267L237,236Z"
    fill="rgb(129, 129, 129)"
    fill-opacity="0.39"
  />,
  <path
    d="M204,304L191,290L199,284Z"
    fill="rgb(227, 227, 227)"
    fill-opacity="0.37"
  />,
  <path
    d="M241,230L190,268L266,189Z"
    fill="rgb(57, 57, 57)"
    fill-opacity="0.11"
  />,
  <path
    d="M203,99L195,86L206,91Z"
    fill="rgb(26, 26, 26)"
    fill-opacity="0.60"
  />,
  <path
    d="M189,296L190,290L176,304Z"
    fill="rgb(7, 7, 7)"
    fill-opacity="0.10"
  />,
  <path
    d="M252,149L223,152L263,194Z"
    fill="rgb(10, 10, 10)"
    fill-opacity="0.15"
  />,
  <path
    d="M222,175L206,241L199,197Z"
    fill="rgb(172, 172, 172)"
    fill-opacity="0.23"
  />,
  <path
    d="M185,355L186,346L198,355Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.41"
  />,
  <path
    d="M178,180L164,183L175,199Z"
    fill="rgb(194, 194, 194)"
    fill-opacity="0.32"
  />,
  <path
    d="M194,301L189,293L194,293Z"
    fill="rgb(94, 94, 94)"
    fill-opacity="0.30"
  />,
  <path
    d="M83,34L136,117L133,121Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.28"
  />,
  <path
    d="M183,434L223,326L230,403Z"
    fill="rgb(225, 225, 225)"
    fill-opacity="0.33"
  />,
  <path
    d="M272,267L295,283L248,274Z"
    fill="rgb(172, 172, 172)"
    fill-opacity="0.35"
  />,
  <path
    d="M222,132L221,117L267,137Z"
    fill="rgb(22, 22, 22)"
    fill-opacity="0.62"
  />,
  <path
    d="M310,164L264,218L267,109Z"
    fill="rgb(254, 254, 254)"
    fill-opacity="0.10"
  />,
  <path
    d="M282,116L277,103L257,122Z"
    fill="rgb(220, 220, 220)"
    fill-opacity="0.41"
  />,
  <path
    d="M375,362L368,361L373,391Z"
    fill="rgb(203, 203, 203)"
    fill-opacity="0.10"
  />,
  <path
    d="M229,126L223,106L196,136Z"
    fill="rgb(103, 103, 103)"
    fill-opacity="0.17"
  />,
  <path
    d="M226,280L203,293L236,260Z"
    fill="rgb(140, 140, 140)"
    fill-opacity="0.41"
  />,
  <path
    d="M251,299L265,326L261,262Z"
    fill="rgb(215, 215, 215)"
    fill-opacity="0.35"
  />,
  <path
    d="M211,169L210,200L202,168Z"
    fill="rgb(251, 251, 251)"
    fill-opacity="0.22"
  />,
  <path
    d="M241,235L235,220L249,213Z"
    fill="rgb(60, 60, 60)"
    fill-opacity="0.38"
  />,
  <path
    d="M127,132L123,128L128,129Z"
    fill="rgb(14, 14, 14)"
    fill-opacity="0.28"
  />,
  <path
    d="M207,135L163,158L210,148Z"
    fill="rgb(201, 201, 201)"
    fill-opacity="0.27"
  />,
  <path
    d="M156,259L158,250L146,254Z"
    fill="rgb(166, 166, 166)"
    fill-opacity="0.20"
  />,
  <path
    d="M264,163L255,154L264,180Z"
    fill="rgb(18, 18, 18)"
    fill-opacity="0.24"
  />,
  <path
    d="M225,172L271,154L257,176Z"
    fill="rgb(25, 25, 25)"
    fill-opacity="0.20"
  />,
  <path
    d="M147,86L131,137L146,113Z"
    fill="rgb(97, 97, 97)"
    fill-opacity="0.50"
  />,
  <path
    d="M131,200L170,202L139,170Z"
    fill="rgb(219, 219, 219)"
    fill-opacity="0.27"
  />,
  <path
    d="M249,100L240,92L297,131Z"
    fill="rgb(210, 210, 210)"
    fill-opacity="0.68"
  />,
  <path
    d="M192,362L50,344L84,394Z"
    fill="rgb(221, 221, 221)"
    fill-opacity="0.56"
  />,
  <path
    d="M312,278L324,209L263,95Z"
    fill="rgb(222, 222, 222)"
    fill-opacity="0.31"
  />,
  <path
    d="M159,204L169,179L144,207Z"
    fill="rgb(64, 64, 64)"
    fill-opacity="0.10"
  />,
  <path
    d="M334,389L348,378L328,403Z"
    fill="rgb(139, 139, 139)"
    fill-opacity="0.35"
  />,
  <path
    d="M312,286L306,277L327,294Z"
    fill="rgb(112, 112, 112)"
    fill-opacity="0.33"
  />,
  <path
    d="M252,208L240,203L241,218Z"
    fill="rgb(201, 201, 201)"
    fill-opacity="0.26"
  />,
  <path
    d="M358,388L352,377L323,411Z"
    fill="rgb(253, 253, 253)"
    fill-opacity="0.16"
  />,
  <path
    d="M267,191L242,226L254,223Z"
    fill="rgb(253, 253, 253)"
    fill-opacity="0.16"
  />,
  <path
    d="M287,277L278,318L292,281Z"
    fill="rgb(213, 213, 213)"
    fill-opacity="0.32"
  />,
  <path
    d="M188,72L175,46L197,11Z"
    fill="rgb(235, 235, 235)"
    fill-opacity="0.35"
  />,
  <path
    d="M350,389L391,358L339,410Z"
    fill="rgb(33, 33, 33)"
    fill-opacity="0.10"
  />,
  <path
    d="M190,263L201,291L173,268Z"
    fill="rgb(198, 198, 198)"
    fill-opacity="0.32"
  />,
  <path
    d="M240,330L227,299L205,333Z"
    fill="rgb(194, 194, 194)"
    fill-opacity="0.33"
  />,
  <path
    d="M189,259L160,259L193,249Z"
    fill="rgb(13, 13, 13)"
    fill-opacity="0.10"
  />,
  <path
    d="M177,298L195,307L180,314Z"
    fill="rgb(172, 172, 172)"
    fill-opacity="0.35"
  />,
  <path
    d="M321,292L332,298L342,317Z"
    fill="rgb(235, 235, 235)"
    fill-opacity="0.30"
  />,
  <path
    d="M248,314L247,295L236,320Z"
    fill="rgb(140, 140, 140)"
    fill-opacity="0.39"
  />,
  <path
    d="M144,175L153,167L147,161Z"
    fill="rgb(40, 40, 40)"
    fill-opacity="0.12"
  />,
  <path
    d="M325,179L488,49L340,126Z"
    fill="rgb(194, 194, 194)"
    fill-opacity="0.57"
  />,
  <path
    d="M159,231L142,220L151,214Z"
    fill="rgb(158, 158, 158)"
    fill-opacity="0.20"
  />,
  <path
    d="M187,214L195,168L170,190Z"
    fill="rgb(235, 235, 235)"
    fill-opacity="0.25"
  />,
  <path
    d="M393,-34L450,5L306,113Z"
    fill="rgb(216, 216, 216)"
    fill-opacity="0.77"
  />,
  <path
    d="M94,207L158,183L168,201Z"
    fill="rgb(250, 250, 250)"
    fill-opacity="0.10"
  />,
  <path
    d="M196,60L180,102L190,68Z"
    fill="rgb(61, 61, 61)"
    fill-opacity="0.38"
  />,
  <path
    d="M252,118L249,97L263,120Z"
    fill="rgb(64, 64, 64)"
    fill-opacity="0.31"
  />,
  <path
    d="M176,94L175,98L164,89Z"
    fill="rgb(220, 220, 220)"
    fill-opacity="0.15"
  />,
  <path
    d="M248,255L308,277L287,276Z"
    fill="rgb(104, 104, 104)"
    fill-opacity="0.22"
  />,
  <path
    d="M135,295L130,249L129,299Z"
    fill="rgb(235, 235, 235)"
    fill-opacity="0.33"
  />,
  <path
    d="M140,167L149,169L136,170Z"
    fill="rgb(53, 53, 53)"
    fill-opacity="0.34"
  />,
  <path
    d="M166,321L171,303L144,315Z"
    fill="rgb(172, 172, 172)"
    fill-opacity="0.23"
  />,
  <path
    d="M313,365L298,441L306,377Z"
    fill="rgb(67, 67, 67)"
    fill-opacity="0.10"
  />,
  <path
    d="M163,311L164,334L144,323Z"
    fill="rgb(220, 220, 220)"
    fill-opacity="0.42"
  />,
  <path
    d="M87,395L120,437L72,415Z"
    fill="rgb(83, 83, 83)"
    fill-opacity="0.27"
  />,
  <path
    d="M210,74L207,66L207,80Z"
    fill="rgb(12, 12, 12)"
    fill-opacity="0.22"
  />,
  <path
    d="M162,79L155,57L160,83Z"
    fill="rgb(224, 224, 224)"
    fill-opacity="0.53"
  />,
  <path
    d="M250,186L255,209L255,177Z"
    fill="rgb(249, 249, 249)"
    fill-opacity="0.14"
  />,
  <path
    d="M365,326L357,303L368,320Z"
    fill="rgb(62, 62, 62)"
    fill-opacity="0.39"
  />,
  <path
    d="M170,79L164,82L173,62Z"
    fill="rgb(105, 105, 105)"
    fill-opacity="0.98"
  />,
  <path
    d="M340,295L328,292L354,327Z"
    fill="rgb(43, 43, 43)"
    fill-opacity="0.10"
  />,
  <path
    d="M210,279L191,297L239,260Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.14"
  />,
  <path
    d="M166,162L175,153L204,157Z"
    fill="rgb(122, 122, 122)"
    fill-opacity="0.19"
  />,
  <path
    d="M257,183L257,195L250,204Z"
    fill="rgb(250, 250, 250)"
    fill-opacity="0.21"
  />,
  <path
    d="M138,114L138,105L159,116Z"
    fill="rgb(56, 56, 56)"
    fill-opacity="0.35"
  />,
  <path
    d="M265,158L271,174L283,159Z"
    fill="rgb(223, 223, 223)"
    fill-opacity="0.40"
  />,
  <path
    d="M225,244L230,258L189,271Z"
    fill="rgb(167, 167, 167)"
    fill-opacity="0.37"
  />,
  <path
    d="M89,86L133,128L116,118Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.24"
  />,
  <path
    d="M152,307L124,301L150,332Z"
    fill="rgb(212, 212, 212)"
    fill-opacity="0.41"
  />,
  <path
    d="M204,171L176,161L190,161Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.20"
  />,
  <path
    d="M394,374L371,398L383,359Z"
    fill="rgb(8, 8, 8)"
    fill-opacity="0.13"
  />,
  <path
    d="M246,104L233,102L242,86Z"
    fill="rgb(41, 41, 41)"
    fill-opacity="0.12"
  />,
  <path
    d="M144,95L153,85L161,93Z"
    fill="rgb(92, 92, 92)"
    fill-opacity="0.72"
  />,
  <path
    d="M221,211L228,245L204,249Z"
    fill="rgb(96, 96, 96)"
    fill-opacity="0.41"
  />,
  <path
    d="M229,133L220,165L234,147Z"
    fill="rgb(65, 65, 65)"
    fill-opacity="0.55"
  />,
  <path
    d="M150,124L134,104L128,114Z"
    fill="rgb(137, 137, 137)"
    fill-opacity="0.35"
  />,
  <path
    d="M168,79L164,71L158,94Z"
    fill="rgb(59, 59, 59)"
    fill-opacity="0.27"
  />,
  <path
    d="M165,167L171,165L166,182Z"
    fill="rgb(8, 8, 8)"
    fill-opacity="0.10"
  />,
  <path
    d="M149,91L149,78L146,84Z"
    fill="rgb(242, 242, 242)"
    fill-opacity="0.40"
  />,
  <path
    d="M154,78L145,84L161,66Z"
    fill="rgb(241, 241, 241)"
    fill-opacity="0.29"
  />,
  <path
    d="M237,53L291,130L254,108Z"
    fill="rgb(232, 232, 232)"
    fill-opacity="0.47"
  />,
  <path
    d="M236,280L220,361L241,279Z"
    fill="rgb(211, 211, 211)"
    fill-opacity="0.19"
  />,
  <path
    d="M377,395L399,414L348,419Z"
    fill="rgb(122, 122, 122)"
    fill-opacity="0.47"
  />,
  <path
    d="M247,286L222,326L247,275Z"
    fill="rgb(215, 215, 215)"
    fill-opacity="0.32"
  />,
  <path
    d="M58,450L70,379L43,367Z"
    fill="rgb(158, 158, 158)"
    fill-opacity="0.10"
  />,
  <path
    d="M228,315L204,302L229,309Z"
    fill="rgb(83, 83, 83)"
    fill-opacity="0.10"
  />,
  <path
    d="M130,101L130,110L142,88Z"
    fill="rgb(200, 200, 200)"
    fill-opacity="0.64"
  />,
  <path
    d="M78,323L82,298L97,320Z"
    fill="rgb(193, 193, 193)"
    fill-opacity="0.36"
  />,
  <path
    d="M178,351L144,352L128,337Z"
    fill="rgb(168, 168, 168)"
    fill-opacity="0.14"
  />,
  <path
    d="M228,294L242,289L218,260Z"
    fill="rgb(125, 125, 125)"
    fill-opacity="0.18"
  />,
  <path
    d="M225,265L221,272L240,253Z"
    fill="rgb(53, 53, 53)"
    fill-opacity="0.27"
  />,
  <path
    d="M176,201L170,193L170,205Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.14"
  />,
  <path
    d="M174,91L182,96L142,59Z"
    fill="rgb(169, 169, 169)"
    fill-opacity="0.18"
  />,
  <path
    d="M345,313L350,309L358,308Z"
    fill="rgb(20, 20, 20)"
    fill-opacity="0.36"
  />,
  <path
    d="M317,342L291,361L315,295Z"
    fill="rgb(218, 218, 218)"
    fill-opacity="0.44"
  />,
  <path
    d="M220,129L205,116L208,103Z"
    fill="rgb(44, 44, 44)"
    fill-opacity="0.24"
  />,
  <path
    d="M125,338L100,326L117,298Z"
    fill="rgb(233, 233, 233)"
    fill-opacity="0.23"
  />,
  <path
    d="M209,8L118,85L169,69Z"
    fill="rgb(235, 235, 235)"
    fill-opacity="0.69"
  />,
  <path
    d="M156,75L154,78L172,67Z"
    fill="rgb(29, 29, 29)"
    fill-opacity="0.18"
  />,
  <path
    d="M339,380L358,382L347,317Z"
    fill="rgb(184, 184, 184)"
    fill-opacity="0.55"
  />,
  <path
    d="M237,203L246,196L242,203Z"
    fill="rgb(4, 4, 4)"
    fill-opacity="0.29"
  />,
  <path
    d="M157,205L161,201L151,204Z"
    fill="rgb(3, 3, 3)"
    fill-opacity="0.24"
  />,
  <path
    d="M191,166L176,166L205,174Z"
    fill="rgb(60, 60, 60)"
    fill-opacity="0.12"
  />,
  <path
    d="M170,302L173,313L168,320Z"
    fill="rgb(254, 254, 254)"
    fill-opacity="0.27"
  />,
  <path
    d="M168,223L168,254L153,220Z"
    fill="rgb(229, 229, 229)"
    fill-opacity="0.32"
  />,
  <path
    d="M219,129L221,127L219,120Z"
    fill="rgb(245, 245, 245)"
    fill-opacity="0.19"
  />,
  <path
    d="M373,337L340,246L392,370Z"
    fill="rgb(153, 153, 153)"
    fill-opacity="0.29"
  />,
  <path
    d="M186,105L169,102L189,122Z"
    fill="rgb(95, 95, 95)"
    fill-opacity="0.19"
  />,
  <path
    d="M344,399L322,413L350,379Z"
    fill="rgb(252, 252, 252)"
    fill-opacity="0.16"
  />,
  <path
    d="M189,293L217,264L171,288Z"
    fill="rgb(201, 201, 201)"
    fill-opacity="0.66"
  />,
  <path
    d="M194,299L206,303L210,294Z"
    fill="rgb(213, 213, 213)"
    fill-opacity="0.39"
  />,
  <path
    d="M145,146L150,163L181,152Z"
    fill="rgb(241, 241, 241)"
    fill-opacity="0.52"
  />,
  <path
    d="M211,104L183,88L179,81Z"
    fill="rgb(82, 82, 82)"
    fill-opacity="0.62"
  />,
  <path
    d="M184,185L163,168L155,182Z"
    fill="rgb(133, 133, 133)"
    fill-opacity="0.19"
  />,
  <path
    d="M154,72L146,82L139,87Z"
    fill="rgb(23, 23, 23)"
    fill-opacity="0.21"
  />,
  <path
    d="M209,75L209,81L215,81Z"
    fill="rgb(244, 244, 244)"
    fill-opacity="0.21"
  />,
  <path
    d="M122,273L150,296L156,266Z"
    fill="rgb(189, 189, 189)"
    fill-opacity="0.18"
  />,
  <path
    d="M254,118L221,77L262,118Z"
    fill="rgb(41, 41, 41)"
    fill-opacity="0.50"
  />,
  <path
    d="M105,303L129,297L115,280Z"
    fill="rgb(196, 196, 196)"
    fill-opacity="0.44"
  />,
  <path
    d="M205,72L179,64L197,64Z"
    fill="rgb(47, 47, 47)"
    fill-opacity="0.10"
  />,
  <path d="M167,80L176,77L191,104Z" fill="rgb(0, 0, 0)" fill-opacity="0.15" />,
  <path
    d="M220,320L262,329L249,442Z"
    fill="rgb(219, 219, 219)"
    fill-opacity="0.31"
  />,
  <path
    d="M120,167L146,166L145,162Z"
    fill="rgb(221, 221, 221)"
    fill-opacity="0.50"
  />,
  <path
    d="M239,202L243,195L240,188Z"
    fill="rgb(253, 253, 253)"
    fill-opacity="0.12"
  />,
  <path
    d="M219,312L213,308L211,316Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.48"
  />,
  <path
    d="M131,118L155,125L180,116Z"
    fill="rgb(182, 182, 182)"
    fill-opacity="0.24"
  />,
  <path
    d="M152,162L133,161L142,154Z"
    fill="rgb(83, 83, 83)"
    fill-opacity="0.10"
  />,
  <path
    d="M45,238L143,214L139,269Z"
    fill="rgb(238, 238, 238)"
    fill-opacity="0.72"
  />,
  <path
    d="M368,303L307,304L352,308Z"
    fill="rgb(200, 200, 200)"
    fill-opacity="0.25"
  />,
  <path
    d="M262,101L224,80L210,-66Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.49"
  />,
  <path
    d="M289,266L261,257L272,264Z"
    fill="rgb(236, 236, 236)"
    fill-opacity="0.29"
  />,
  <path
    d="M206,168L205,163L159,136Z"
    fill="rgb(209, 209, 209)"
    fill-opacity="0.26"
  />,
  <path
    d="M166,111L165,105L126,123Z"
    fill="rgb(25, 25, 25)"
    fill-opacity="0.10"
  />,
  <path
    d="M335,145L356,252L325,249Z"
    fill="rgb(190, 190, 190)"
    fill-opacity="0.45"
  />,
  <path
    d="M199,179L187,155L194,180Z"
    fill="rgb(192, 192, 192)"
    fill-opacity="0.37"
  />,
  <path
    d="M172,221L169,205L179,203Z"
    fill="rgb(215, 215, 215)"
    fill-opacity="0.60"
  />,
  <path
    d="M235,308L238,319L243,292Z"
    fill="rgb(8, 8, 8)"
    fill-opacity="0.16"
  />,
  <path
    d="M355,353L350,323L372,347Z"
    fill="rgb(120, 120, 120)"
    fill-opacity="0.28"
  />,
  <path
    d="M238,141L236,178L250,207Z"
    fill="rgb(18, 18, 18)"
    fill-opacity="0.23"
  />,
  <path
    d="M206,145L226,170L212,172Z"
    fill="rgb(112, 112, 112)"
    fill-opacity="0.39"
  />,
  <path d="M154,97L147,107L158,103Z" fill="rgb(3, 3, 3)" fill-opacity="0.24" />,
  <path
    d="M239,281L273,275L241,272Z"
    fill="rgb(57, 57, 57)"
    fill-opacity="0.10"
  />,
  <path
    d="M394,378L372,352L370,332Z"
    fill="rgb(28, 28, 28)"
    fill-opacity="0.15"
  />,
  <path
    d="M261,300L257,284L253,309Z"
    fill="rgb(240, 240, 240)"
    fill-opacity="0.21"
  />,
  <path
    d="M226,89L219,70L239,92Z"
    fill="rgb(130, 130, 130)"
    fill-opacity="0.22"
  />,
  <path
    d="M282,302L293,311L280,326Z"
    fill="rgb(183, 183, 183)"
    fill-opacity="0.39"
  />,
  <path
    d="M282,285L290,273L280,297Z"
    fill="rgb(55, 55, 55)"
    fill-opacity="0.10"
  />,
  <path
    d="M237,259L222,273L231,262Z"
    fill="rgb(222, 222, 222)"
    fill-opacity="0.29"
  />,
  <path
    d="M181,112L219,122L222,115Z"
    fill="rgb(90, 90, 90)"
    fill-opacity="0.34"
  />,
  <path
    d="M156,188L171,195L149,205Z"
    fill="rgb(161, 161, 161)"
    fill-opacity="0.28"
  />,
  <path
    d="M197,81L221,110L209,80Z"
    fill="rgb(84, 84, 84)"
    fill-opacity="0.36"
  />,
  <path
    d="M234,87L238,94L249,96Z"
    fill="rgb(107, 107, 107)"
    fill-opacity="0.80"
  />,
  <path
    d="M180,352L182,354L192,343Z"
    fill="rgb(12, 12, 12)"
    fill-opacity="0.10"
  />,
  <path
    d="M253,105L253,109L257,106Z"
    fill="rgb(183, 183, 183)"
    fill-opacity="0.46"
  />,
  <path
    d="M136,131L176,142L195,117Z"
    fill="rgb(248, 248, 248)"
    fill-opacity="0.23"
  />,
  <path
    d="M341,305L437,238L404,299Z"
    fill="rgb(158, 158, 158)"
    fill-opacity="0.49"
  />,
  <path
    d="M199,130L177,109L155,123Z"
    fill="rgb(217, 217, 217)"
    fill-opacity="0.12"
  />,
  <path
    d="M270,266L264,267L249,250Z"
    fill="rgb(86, 86, 86)"
    fill-opacity="0.31"
  />,
  <path
    d="M202,324L205,318L205,308Z"
    fill="rgb(5, 5, 5)"
    fill-opacity="0.15"
  />,
  <path
    d="M343,313L333,325L353,307Z"
    fill="rgb(14, 14, 14)"
    fill-opacity="0.10"
  />,
  <path
    d="M120,72L126,126L111,102Z"
    fill="rgb(239, 239, 239)"
    fill-opacity="0.40"
  />,
  <path
    d="M170,67L203,78L168,69Z"
    fill="rgb(84, 84, 84)"
    fill-opacity="0.36"
  />,
  <path
    d="M143,180L140,169L135,182Z"
    fill="rgb(204, 204, 204)"
    fill-opacity="0.69"
  />,
  <path
    d="M389,364L395,401L384,416Z"
    fill="rgb(48, 48, 48)"
    fill-opacity="0.42"
  />,
  <path
    d="M226,297L237,305L226,301Z"
    fill="rgb(242, 242, 242)"
    fill-opacity="0.34"
  />,
  <path
    d="M224,302L219,283L212,290Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.14"
  />,
  <path
    d="M329,303L332,297L352,328Z"
    fill="rgb(252, 252, 252)"
    fill-opacity="0.14"
  />,
  <path
    d="M220,132L201,141L205,161Z"
    fill="rgb(161, 161, 161)"
    fill-opacity="0.27"
  />,
  <path
    d="M134,261L163,270L168,260Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.17"
  />,
  <path
    d="M260,181L260,203L254,203Z"
    fill="rgb(4, 4, 4)"
    fill-opacity="0.12"
  />,
  <path
    d="M189,294L180,303L182,295Z"
    fill="rgb(55, 55, 55)"
    fill-opacity="0.23"
  />,
  <path
    d="M204,315L205,301L206,316Z"
    fill="rgb(17, 17, 17)"
    fill-opacity="0.13"
  />,
  <path
    d="M174,28L214,72L250,82Z"
    fill="rgb(236, 236, 236)"
    fill-opacity="0.59"
  />,
  <path
    d="M191,115L174,155L202,152Z"
    fill="rgb(213, 213, 213)"
    fill-opacity="0.39"
  />,
  <path
    d="M187,355L182,377L182,350Z"
    fill="rgb(74, 74, 74)"
    fill-opacity="0.10"
  />,
  <path
    d="M267,138L254,180L241,90Z"
    fill="rgb(19, 19, 19)"
    fill-opacity="0.25"
  />,
  <path
    d="M154,306L152,316L163,303Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.14"
  />,
  <path
    d="M179,222L168,228L158,215Z"
    fill="rgb(74, 74, 74)"
    fill-opacity="0.10"
  />,
  <path
    d="M251,100L222,130L267,167Z"
    fill="rgb(18, 18, 18)"
    fill-opacity="0.41"
  />,
  <path
    d="M128,290L121,281L128,296Z"
    fill="rgb(145, 145, 145)"
    fill-opacity="0.45"
  />,
  <path
    d="M241,217L247,265L236,252Z"
    fill="rgb(74, 74, 74)"
    fill-opacity="0.52"
  />,
  <path
    d="M94,225L152,199L150,183Z"
    fill="rgb(238, 238, 238)"
    fill-opacity="0.52"
  />,
  <path
    d="M344,367L341,331L309,319Z"
    fill="rgb(203, 203, 203)"
    fill-opacity="0.31"
  />,
  <path
    d="M98,284L79,293L96,292Z"
    fill="rgb(209, 209, 209)"
    fill-opacity="0.49"
  />,
  <path
    d="M184,61L206,75L187,69Z"
    fill="rgb(209, 209, 209)"
    fill-opacity="0.16"
  />,
  <path
    d="M122,145L111,125L131,134Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.44"
  />,
  <path
    d="M238,206L254,190L236,218Z"
    fill="rgb(140, 140, 140)"
    fill-opacity="0.32"
  />,
  <path
    d="M154,110L168,117L152,103Z"
    fill="rgb(121, 121, 121)"
    fill-opacity="0.35"
  />,
  <path
    d="M183,218L201,235L211,173Z"
    fill="rgb(212, 212, 212)"
    fill-opacity="0.31"
  />,
  <path
    d="M353,138L294,175L355,51Z"
    fill="rgb(209, 209, 209)"
    fill-opacity="0.28"
  />,
  <path d="M188,95L178,82L181,101Z" fill="rgb(1, 1, 1)" fill-opacity="0.19" />,
  <path
    d="M228,270L224,270L241,253Z"
    fill="rgb(217, 217, 217)"
    fill-opacity="0.19"
  />,
  <path
    d="M287,235L249,215L243,234Z"
    fill="rgb(229, 229, 229)"
    fill-opacity="0.48"
  />,
  <path
    d="M194,90L198,97L189,87Z"
    fill="rgb(226, 226, 226)"
    fill-opacity="0.10"
  />,
  <path
    d="M232,253L231,262L249,244Z"
    fill="rgb(60, 60, 60)"
    fill-opacity="0.30"
  />,
  <path
    d="M126,316L148,338L130,312Z"
    fill="rgb(154, 154, 154)"
    fill-opacity="0.26"
  />,
  <path
    d="M212,88L246,142L218,101Z"
    fill="rgb(24, 24, 24)"
    fill-opacity="0.49"
  />,
  <path
    d="M232,216L229,180L212,208Z"
    fill="rgb(95, 95, 95)"
    fill-opacity="0.28"
  />,
  <path
    d="M335,324L335,327L324,320Z"
    fill="rgb(134, 134, 134)"
    fill-opacity="0.44"
  />,
  <path
    d="M252,207L265,186L261,199Z"
    fill="rgb(150, 150, 150)"
    fill-opacity="0.58"
  />,
  <path
    d="M126,133L122,124L134,120Z"
    fill="rgb(98, 98, 98)"
    fill-opacity="0.28"
  />,
  <path
    d="M261,192L303,199L258,170Z"
    fill="rgb(231, 231, 231)"
    fill-opacity="0.10"
  />,
  <path
    d="M242,186L254,175L258,185Z"
    fill="rgb(108, 108, 108)"
    fill-opacity="0.24"
  />,
  <path
    d="M311,354L327,333L312,386Z"
    fill="rgb(198, 198, 198)"
    fill-opacity="0.72"
  />,
  <path d="M189,85L196,110L181,75Z" fill="rgb(1, 1, 1)" fill-opacity="0.16" />,
  <path d="M197,67L204,63L199,70Z" fill="rgb(0, 0, 0)" fill-opacity="0.10" />,
  <path
    d="M156,147L168,149L151,183Z"
    fill="rgb(239, 239, 239)"
    fill-opacity="0.45"
  />,
  <path
    d="M237,245L232,170L236,162Z"
    fill="rgb(60, 60, 60)"
    fill-opacity="0.39"
  />,
  <path
    d="M359,292L319,289L391,103Z"
    fill="rgb(181, 181, 181)"
    fill-opacity="0.31"
  />,
  <path
    d="M91,327L121,338L72,333Z"
    fill="rgb(184, 184, 184)"
    fill-opacity="0.19"
  />,
  <path
    d="M188,301L176,311L196,284Z"
    fill="rgb(254, 254, 254)"
    fill-opacity="0.13"
  />,
  <path
    d="M188,125L187,87L190,100Z"
    fill="rgb(138, 138, 138)"
    fill-opacity="0.25"
  />,
  <path
    d="M363,339L370,392L375,363Z"
    fill="rgb(118, 118, 118)"
    fill-opacity="0.39"
  />,
  <path
    d="M222,110L200,100L212,116Z"
    fill="rgb(29, 29, 29)"
    fill-opacity="0.44"
  />,
  <path
    d="M206,175L199,171L182,172Z"
    fill="rgb(8, 8, 8)"
    fill-opacity="0.10"
  />,
  <path
    d="M153,204L144,258L143,198Z"
    fill="rgb(181, 181, 181)"
    fill-opacity="0.10"
  />,
  <path d="M222,78L205,75L215,73Z" fill="rgb(0, 0, 0)" fill-opacity="0.15" />,
  <path
    d="M179,295L156,267L172,283Z"
    fill="rgb(140, 140, 140)"
    fill-opacity="0.32"
  />,
  <path
    d="M249,271L254,277L250,284Z"
    fill="rgb(163, 163, 163)"
    fill-opacity="0.49"
  />,
  <path
    d="M165,277L188,279L157,263Z"
    fill="rgb(243, 243, 243)"
    fill-opacity="0.22"
  />,
  <path
    d="M226,304L228,309L224,311Z"
    fill="rgb(139, 139, 139)"
    fill-opacity="0.31"
  />,
  <path
    d="M221,170L219,201L211,172Z"
    fill="rgb(163, 163, 163)"
    fill-opacity="0.21"
  />,
  <path
    d="M203,294L199,292L220,281Z"
    fill="rgb(137, 137, 137)"
    fill-opacity="0.27"
  />,
  <path
    d="M253,306L235,320L247,336Z"
    fill="rgb(184, 184, 184)"
    fill-opacity="0.26"
  />,
  <path
    d="M186,303L183,294L181,301Z"
    fill="rgb(53, 53, 53)"
    fill-opacity="0.15"
  />,
  <path
    d="M215,88L207,87L195,75Z"
    fill="rgb(101, 101, 101)"
    fill-opacity="0.28"
  />,
  <path
    d="M159,194L162,164L150,190Z"
    fill="rgb(190, 190, 190)"
    fill-opacity="0.32"
  />,
  <path
    d="M177,330L189,322L187,350Z"
    fill="rgb(202, 202, 202)"
    fill-opacity="0.51"
  />,
  <path
    d="M78,391L91,396L66,397Z"
    fill="rgb(170, 170, 170)"
    fill-opacity="0.22"
  />,
  <path
    d="M97,164L128,135L127,173Z"
    fill="rgb(240, 240, 240)"
    fill-opacity="0.45"
  />,
  <path
    d="M220,103L222,94L219,96Z"
    fill="rgb(192, 192, 192)"
    fill-opacity="0.19"
  />,
  <path
    d="M347,366L304,421L347,373Z"
    fill="rgb(236, 236, 236)"
    fill-opacity="0.16"
  />,
  <path
    d="M150,282L145,308L162,303Z"
    fill="rgb(198, 198, 198)"
    fill-opacity="0.46"
  />,
  <path
    d="M366,380L371,381L328,495Z"
    fill="rgb(231, 231, 231)"
    fill-opacity="0.12"
  />,
  <path
    d="M128,307L145,306L157,286Z"
    fill="rgb(240, 240, 240)"
    fill-opacity="0.16"
  />,
  <path
    d="M177,293L175,291L161,306Z"
    fill="rgb(14, 14, 14)"
    fill-opacity="0.25"
  />,
  <path
    d="M140,121L134,146L152,126Z"
    fill="rgb(246, 246, 246)"
    fill-opacity="0.26"
  />,
  <path
    d="M261,130L255,148L270,159Z"
    fill="rgb(49, 49, 49)"
    fill-opacity="0.24"
  />,
  <path
    d="M277,154L278,168L263,141Z"
    fill="rgb(218, 218, 218)"
    fill-opacity="0.18"
  />,
  <path
    d="M53,376L41,397L50,353Z"
    fill="rgb(192, 192, 192)"
    fill-opacity="0.30"
  />,
  <path
    d="M243,228L248,215L234,218Z"
    fill="rgb(52, 52, 52)"
    fill-opacity="0.24"
  />,
  <path
    d="M222,107L217,104L227,117Z"
    fill="rgb(198, 198, 198)"
    fill-opacity="0.10"
  />,
  <path
    d="M198,382L197,380L195,405Z"
    fill="rgb(57, 57, 57)"
    fill-opacity="0.23"
  />,
  <path
    d="M194,407L198,350L173,440Z"
    fill="rgb(222, 222, 222)"
    fill-opacity="0.63"
  />,
  <path
    d="M300,263L325,312L326,299Z"
    fill="rgb(134, 134, 134)"
    fill-opacity="0.10"
  />,
  <path
    d="M328,329L331,337L320,326Z"
    fill="rgb(69, 69, 69)"
    fill-opacity="0.12"
  />,
  <path
    d="M202,97L194,87L172,82Z"
    fill="rgb(141, 141, 141)"
    fill-opacity="0.10"
  />,
  <path
    d="M222,149L226,161L195,122Z"
    fill="rgb(122, 122, 122)"
    fill-opacity="0.24"
  />,
  <path
    d="M178,74L176,74L177,95Z"
    fill="rgb(224, 224, 224)"
    fill-opacity="0.10"
  />,
  <path
    d="M258,274L238,308L255,276Z"
    fill="rgb(48, 48, 48)"
    fill-opacity="0.28"
  />,
  <path
    d="M201,68L204,64L207,70Z"
    fill="rgb(250, 250, 250)"
    fill-opacity="0.27"
  />,
  <path
    d="M231,316L246,319L241,310Z"
    fill="rgb(116, 116, 116)"
    fill-opacity="0.22"
  />,
  <path
    d="M167,312L178,298L178,331Z"
    fill="rgb(235, 235, 235)"
    fill-opacity="0.30"
  />,
  <path
    d="M170,309L177,294L148,317Z"
    fill="rgb(106, 106, 106)"
    fill-opacity="0.18"
  />,
  <path
    d="M146,98L142,85L157,98Z"
    fill="rgb(94, 94, 94)"
    fill-opacity="0.39"
  />,
  <path d="M160,85L164,100L160,103Z" fill="rgb(0, 0, 0)" fill-opacity="0.23" />,
  <path
    d="M257,257L379,183L379,229Z"
    fill="rgb(202, 202, 202)"
    fill-opacity="0.12"
  />,
  <path
    d="M317,287L294,260L345,239Z"
    fill="rgb(195, 195, 195)"
    fill-opacity="0.39"
  />,
  <path
    d="M184,351L190,359L193,346Z"
    fill="rgb(255, 255, 255)"
    fill-opacity="0.40"
  />,
  <path
    d="M249,315L258,284L252,284Z"
    fill="rgb(181, 181, 181)"
    fill-opacity="0.23"
  />,
  <path
    d="M313,300L312,316L271,300Z"
    fill="rgb(208, 208, 208)"
    fill-opacity="0.43"
  />,
  <path
    d="M191,71L183,72L215,97Z"
    fill="rgb(54, 54, 54)"
    fill-opacity="0.32"
  />,
  <path
    d="M323,290L335,275L354,300Z"
    fill="rgb(168, 168, 168)"
    fill-opacity="0.49"
  />,
  <path
    d="M173,197L171,206L168,201Z"
    fill="rgb(13, 13, 13)"
    fill-opacity="0.16"
  />,
  <path
    d="M179,161L168,154L178,175Z"
    fill="rgb(174, 174, 174)"
    fill-opacity="0.54"
  />,
  <path
    d="M196,178L188,179L194,165Z"
    fill="rgb(200, 200, 200)"
    fill-opacity="0.39"
  />,
  <path
    d="M194,268L216,257L166,264Z"
    fill="rgb(146, 146, 146)"
    fill-opacity="0.33"
  />,
  <path
    d="M316,382L333,377L336,364Z"
    fill="rgb(236, 236, 236)"
    fill-opacity="0.19"
  />,
  <path
    d="M321,376L313,407L329,371Z"
    fill="rgb(242, 242, 242)"
    fill-opacity="0.21"
  />,
  <path
    d="M221,282L219,336L214,346Z"
    fill="rgb(186, 186, 186)"
    fill-opacity="0.50"
  />,
  <path
    d="M139,100L148,54L136,99Z"
    fill="rgb(237, 237, 237)"
    fill-opacity="0.29"
  />,
  <path
    d="M174,265L198,230L157,259Z"
    fill="rgb(157, 157, 157)"
    fill-opacity="0.17"
  />,
  <path
    d="M348,320L349,335L341,309Z"
    fill="rgb(240, 240, 240)"
    fill-opacity="0.16"
  />,
  <path
    d="M244,218L243,201L251,206Z"
    fill="rgb(220, 220, 220)"
    fill-opacity="0.12"
  />,
  <path
    d="M324,387L311,412L324,391Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.18"
  />,
  <path
    d="M147,321L138,319L148,309Z"
    fill="rgb(237, 237, 237)"
    fill-opacity="0.32"
  />,
  <path
    d="M134,278L142,269L156,266Z"
    fill="rgb(171, 171, 171)"
    fill-opacity="0.13"
  />,
  <path
    d="M173,294L151,264L168,283Z"
    fill="rgb(234, 234, 234)"
    fill-opacity="0.29"
  />,
  <path
    d="M264,119L245,135L262,132Z"
    fill="rgb(25, 25, 25)"
    fill-opacity="0.20"
  />,
  <path
    d="M350,296L333,322L348,310Z"
    fill="rgb(204, 204, 204)"
    fill-opacity="0.20"
  />,
  <path
    d="M252,214L252,209L239,222Z"
    fill="rgb(65, 65, 65)"
    fill-opacity="0.30"
  />,
  <path
    d="M236,268L241,255L232,269Z"
    fill="rgb(69, 69, 69)"
    fill-opacity="0.30"
  />,
  <path
    d="M313,403L323,346L324,364Z"
    fill="rgb(146, 146, 146)"
    fill-opacity="0.21"
  />,
  <path
    d="M157,439L158,355L86,393Z"
    fill="rgb(222, 222, 222)"
    fill-opacity="0.49"
  />,
  <path
    d="M146,79L143,85L155,74Z"
    fill="rgb(14, 14, 14)"
    fill-opacity="0.13"
  />,
  <path
    d="M274,414L303,415L287,371Z"
    fill="rgb(202, 202, 202)"
    fill-opacity="0.49"
  />,
  <path
    d="M395,375L386,358L403,337Z"
    fill="rgb(129, 129, 129)"
    fill-opacity="0.20"
  />,
  <path
    d="M357,330L348,313L354,311Z"
    fill="rgb(239, 239, 239)"
    fill-opacity="0.10"
  />,
  <path
    d="M196,250L203,263L234,217Z"
    fill="rgb(63, 63, 63)"
    fill-opacity="0.10"
  />,
  <path
    d="M211,78L207,82L205,73Z"
    fill="rgb(17, 17, 17)"
    fill-opacity="0.16"
  />,
  <path
    d="M239,98L243,106L236,84Z"
    fill="rgb(116, 116, 116)"
    fill-opacity="0.31"
  />,
  <path
    d="M227,257L235,240L203,272Z"
    fill="rgb(209, 209, 209)"
    fill-opacity="0.10"
  />,
  <path
    d="M255,257L244,269L249,255Z"
    fill="rgb(132, 132, 132)"
    fill-opacity="0.30"
  />,
  <path
    d="M209,94L197,101L194,113Z"
    fill="rgb(39, 39, 39)"
    fill-opacity="0.43"
  />,
  <path
    d="M250,175L256,170L254,150Z"
    fill="rgb(0, 0, 0)"
    fill-opacity="0.37"
  />,
  <path
    d="M232,293L235,282L223,288Z"
    fill="rgb(76, 76, 76)"
    fill-opacity="0.12"
  />,
  <path
    d="M393,138L447,109L360,106Z"
    fill="rgb(194, 194, 194)"
    fill-opacity="0.45"
  />,
  <path
    d="M226,135L228,154L209,113Z"
    fill="rgb(77, 77, 77)"
    fill-opacity="0.37"
  />,
  <path
    d="M223,81L226,81L230,87Z"
    fill="rgb(41, 41, 41)"
    fill-opacity="0.50"
  />,
  <path
    d="M308,390L312,379L318,378Z"
    fill="rgb(193, 193, 193)"
    fill-opacity="0.48"
  />,
  <path
    d="M173,234L182,248L207,226Z"
    fill="rgb(189, 189, 189)"
    fill-opacity="0.37"
  />,
  <path
    d="M176,288L180,261L185,296Z"
    fill="rgb(229, 229, 229)"
    fill-opacity="0.23"
  />,
  <path
    d="M144,113L152,106L145,121Z"
    fill="rgb(56, 56, 56)"
    fill-opacity="0.31"
  />,
  <path
    d="M306,277L251,231L274,263Z"
    fill="rgb(216, 216, 216)"
    fill-opacity="0.48"
  />,
  <path
    d="M228,171L204,162L192,153Z"
    fill="rgb(110, 110, 110)"
    fill-opacity="0.25"
  />,
  <path
    d="M228,202L205,250L181,243Z"
    fill="rgb(146, 146, 146)"
    fill-opacity="0.11"
  />,
  <path
    d="M148,173L134,170L134,177Z"
    fill="rgb(9, 9, 9)"
    fill-opacity="0.10"
  />,
  <path
    d="M316,282L249,257L286,268Z"
    fill="rgb(114, 114, 114)"
    fill-opacity="0.14"
  />,
  <path
    d="M158,94L173,94L168,89Z"
    fill="rgb(245, 245, 245)"
    fill-opacity="0.10"
  />
];
export default function Second() {
  const [reverse, setReverse] = React.useState(null);
  return (
    <div className="App" onClick={() => setReverse(!reverse)}>
    <Navbar1 />
    <div>
		<h2><a href="www.github.com/shadowshot-x">Ujjwal Sharma</a><br />
		<a a href="www.github.com/dungeonmaster51">Sanchit Bansal</a><br />
		<a a href="www.github.com/siddharthjain1611">Siddharth Jain</a><br /></h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        clip-path="url(#clip)"
        className={reverse ? "reverse" : ""}
      >
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <rect x="0" y="0" width="400" height="400" />
          </clipPath>
        </defs>
        {paths.map((path, index) => (
          <g
            key={index}
            className={
              !reverse ? ` cl-${index}  reverse` : `cl-${index}  initial`
            }
          >
            {path}
          </g>
        ))}
      </svg>
      
    </div>
  );
}
