(function () {
  /**
   * Quiz by Ivan Savon (IT-21)
   *
   * @version 1 (12 2013)
   */
  eval(function(p, a, c, k, e, r) {
    e = function(c) {
      return (c < a ? '' : e(parseInt(c / a))) + ((c = c%a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
      while (c--)
        r[e(c)] = k[c] || e(c);
      k = [function(e) {
        return r[e]
      }
      ];
      e = function() {
        return '\\w+'
      };
      c = 1
    };
    while (c--)
      if (k[c])
        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
  }('(9(){1L.W.C=9(a){t 1M X(3,a)};1N.W.19=9(a){l(1a.n<1)t u;v(5 i=0;i<3.n;i++){l(3[i]==a){t z}}t u};5 k=0;9 X(){3.1b=++k;3.m=[];3.w={M:"Тестування",1c:"Результати",1d:"Відповіді",A:"1O",G:z,1e:u,1f:u};3.1g(1a)}X.W={1g:9(a){3.o=a[0];l(1h a[1]!="1i"&&a[1].1P==1Q){3.1j(a[1])}l(!3.1k())t u;3.1l()},1j:9(a){v(5 i 1R 3.w){l(1h a[i]!="1i"){3.w[i]=a[i]}}},1k:9(){5 a=0;5 b=z;5 c=3.o.D("*");v(5 i=0;i<c.n;i++){1m(c[i].1n){Y"1S":l(!Z(c[i].10("m-11"))){b=u;1o}5 d=c[i].10("m-B");b=z;3.m[a++]={1p:c[i].q,B:d?Z(d):0,s:Z(c[i].10("m-11")),H:[]};E;Y"1T":l(b){3.m[a-1].H.N(c[i].q)}E}}t 3.m.n!=0},1l:9(){5 a=6.7("I");a.r="C";5 b=6.7("O");b.q=3.w.M;a.8(b);5 c=6.7("1U");v(5 i=0;i<3.m.n;i++){5 d=6.7("1q");d.q=3.m[i].1p;d.8(3.1r(i));c.8(d)}a.8(c);5 e=6.7("I");e.r="1s";a.8(e);5 f=3;5 g=6.7("J");g.A="P";g.Q="Відповісти";g.R=9(){f.1t(f)};e.8(g);5 g=6.7("J");g.A="P";g.Q="Скинути";g.R=9(){f.12(f.o)};e.8(g);5 h=3.o.1u;h.1v(a,3.o);h.1w(3.o);3.o=a},1r:9(a){5 b=6.7("1V");v(5 i=0;i<3.m[a].H.n;i++){5 c=6.7("1q");5 d=6.7("K");5 e=6.7("J");e.A="1W";e.1X="11"+3.1b+a;d.8(e);5 f=6.7("1Y");f.q=3.13(i)+"&1x;&1x;"+3.m[a].H[i];d.8(f);l(3.w.1f&&i+1==3.m[a].s){e.S("L",z);c.r="s"}c.8(d);b.8(c)}t b},13:9(a){5 b,T;1m(3.w.A){Y"1Z":b=20;T=".";E;21:b=22;T=")";E}t 23.24(b+a)+T},1t:9(a){l(!a.1y()&&!25("Ви дали вiдповiдi не на всi питання! Продовжити?")){t u}a.1z();a.1A()},1y:9(){5 a=3.o.D("1B");v(5 i=0;i<a.n;i++){5 b=u;5 c=a[i].D("14");v(5 j=0;j<c.n;j++){l(c[j].L){b=z;E}}l(!b)t u}t z},1z:9(){3.p={s:[],F:[],G:1C,B:0,15:0};5 a=3.o.D("1B");v(5 i=0;i<a.n;i++){5 b=u;5 c=a[i].D("14");v(5 j=0;j<c.n;j++){l(!c[j].L)1o;l(j+1==3.m[i].s){3.p.s.N(i);3.p.B+=3.m[i].B}26{3.p.F.N(i+1)}b=z;E}l(!b)3.p.F.N(i+1);3.p.15+=3.m[i].B}l(3.p.s.n!=3.m.n){5 d=3.p.s.n*1C/3.m.n;3.p.G=d%1?(d).27(2):d}},1A:9(){5 a=6.7("I");a.r="C-1D";5 b=6.7("O");b.q=3.w.1c;a.8(b);5 c=6.7("16");c.S("1E",0);c.S("1F",0);5 d,4;d=6.7("y");4=6.7("4");4.r="K";4.q="Вiрнi вiдповiдi:";d.8(4);4=6.7("4");4.r="U";4.q=3.p.s.n+" iз "+3.m.n;d.8(4);c.8(d);l(3.p.F.n){d=6.7("y");4=6.7("4");4.r="K";4.q="Не вiрнi вiдповiдi, питання:";d.8(4);4=6.7("4");4.r="U";4.q=3.p.F.28(", ");d.8(4);c.8(d)}l(3.w.G){d=6.7("y");4=6.7("4");4.r="K";4.q="Процентне спiввiдношення:";d.8(4);4=6.7("4");4.r="U";4.q=3.p.G+"%";d.8(4);c.8(d)}l(3.w.1e){d=6.7("y");4=6.7("4");4.r="K";4.q="Кiлькiсть балiв:";d.8(4);4=6.7("4");4.r="U";4.q=3.p.B+" iз "+3.p.15;d.8(4);c.8(d)}d=6.7("y");4=6.7("4");4.r="1s";4.S("29",2);5 e=3;5 f=6.7("J");f.A="P";f.Q="Пройти тест ще раз";f.R=9(){e.o.1G.17.18="1H";e.12(e.o);e.o.17.18="2a"};4.8(f);f=6.7("J");f.A="P";f.Q="Вірні відповіді";f.R=9(){e.1I(e)};4.8(f);d.8(4);c.8(d);a.8(c);5 g=3.o.1u;5 h=3.o.1G;l(h&&h.r=="C-1D"){g.1w(h)}3.o.17.18="1H";g.1v(a,3.o)},1I:9(a){5 b=2b.1J("","","2c=2d,2e=2f,2g=2h");b.2i();5 c=b.6.1J();c.2j("<!2k 2l>");c.x("<M>Вiдповiдi</M><2m 2n=\\"2o\\" 2p=\\"C.2q\\" />");c.x("<I 1K=\\"C-H\\"><O>"+a.w.1d+"</O>");c.x("<16 1E=\\"0\\" 1F=\\"1\\"><y><V>Питання</V><V>Вiдповiдь</V></y>");v(5 i=0;i<a.m.n;i++){c.x("<y>");c.x("<4>"+(i+1)+".</4>");c.x("<4 1K=\\""+(a.p.s.19(i)?"s":"F")+"\\">");c.x(a.13(a.m[i].s-1));c.x("</4>");c.x("</y>")}c.x("</16></I>");c.2r()},12:9(a){5 b=a.D("*");v(5 i=0;i<b.n;i++){l(b[i].1n=="14"&&b[i].L){b[i].L=u}}}}})()', 62, 152, '|||this|td|var|document|createElement|appendChild|function||||||||||||if|data|length|elem|result|innerHTML|className|correct|return|false|for|options|write|tr|true|type|point|quiz|getElementsByTagName|break|wrong|percent|answers|div|input|label|checked|title|push|h3|button|value|onclick|setAttribute|sep|field|th|prototype|Quiz|case|parseInt|getAttribute|ans|clearTest|ansName|INPUT|allPoint|table|style|display|inArray|arguments|id|resTitle|ansTitle|points|debug|init|typeof|undefined|setOptions|setData|buildTest|switch|tagName|continue|text|li|buildAns|buttons|showResults|parentNode|insertBefore|removeChild|nbsp|checkTest|calculateRes|buildRes|UL|100|results|cellpadding|cellspacing|previousSibling|none|showAnswers|open|class|HTMLDListElement|new|Array|letter|constructor|Object|in|DT|DD|ol|ul|radio|name|span|number|49|default|97|String|fromCharCode|confirm|else|toFixed|join|colspan|block|window|width|200|height|500|scrollbars|yes|focus|writeln|DOCTYPE|html|link|rel|stylesheet|href|css|close'.split('|'), 0, {}))
})();
