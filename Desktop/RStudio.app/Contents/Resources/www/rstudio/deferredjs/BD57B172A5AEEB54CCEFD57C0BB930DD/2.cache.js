$wnd.rstudio.runAsyncCallback2("function DGd(a){this.a=a}\nfunction HGd(a){this.a=a}\nfunction MGd(a){this.a=a}\nfunction JGd(a,b){this.a=a;this.b=b}\nfunction Azd(a,b){this.a=a;this.b=b}\nfunction FGd(a){this.a=a;Gb.call(this)}\nfunction Kbc(a){Mbc(a,xpc((!wpc&&(wpc=new Apc),u6b(),a.u)))}\nfunction HWc(a){var b;b=new LWc(a.c,a.b,a.a);b.f=a.f;b.d=a.d;b.e=a.e;return b}\nfunction Fgc(a){var b,c;for(c=0;c<a.xl();++c){for(b=0;b<a.wl(c);++b){Egc(a,c,b,false)}}}\nfunction FWc(){EWc();var a,b;a=qD(kU,gkh,345,DWc.b.length,0,1);for(b=0;b<a.length;b++)a[b]=HWc(lac(DWc,b));return a}\nfunction OGd(a,b,c){Fgd.call(this,a,c);this.a=new Drc;Ke(this.a,YFh,RFh);_jc(this.a,b)}\nfunction KWc(a,b){DIc(b,oWb(a.c)+'');DIc(b,a.b);DIc(b,a.a);DIc(b,a.f+'');if(a.f!=0){DIc(b,Txc(a.e.a));DIc(b,a.d)}mzc(b.b,Hph);b.a=true}\nfunction IWc(a){var b,c;if(Byc(a.a,Tqh))return a.a;c=t$c('\\\\\"method\\\\\":\\\\s*\\\\\"([^\"]+)\\\\\"');b=p$c(c,a.a,0);if(!b)return null;return b.match[1]}\nfunction MWc(a){var b,c,d,e,f,g,h;if(a.length==0||a.length==1&&a[0].length==0)return null;e=cxc(a[0]);d=a[1];c=a[2];h=bxc(a[3]);g=null;f=null;if(h!=0){g=Uxc(cxc(a[4]));f=a[5]}b=new LWc(e,d,c);b.f=h;b.e=g;b.d=f;return b}\nfunction LGd(a,b){var c,d,e,f,g,h;h=new wIc(b);c=new wac;e=new zIc(h);g=yIc(e)[0];while(e.a<e.b.a.length){f=yIc(e);d=MWc(f);!!d&&(c.b[c.b.length]=d,true)}a.a.e=cxc(g);a.a.b=vac(c,qD(kU,gkh,345,0,0,1));xGd(a.a,false,true)}\nfunction vGd(a){var b,c,d,e;d=a.a;e=a.d;c=new thc;(u6b(),c.yb).style[Dlh]=(zr(),Wlh);b=new $ec;Tec(b,'Request ID: '+a.b+'\\n\\n'+'== REQUEST ======\\n'+d+'\\n\\n'+'== RESPONSE ======\\n'+e+Hph);b.yb.style[uoh]=gmh;M8b(c,b,c.yb);AZb(this,c)}\nfunction xGd(a,b,c){var d,e,f,g,h;if(b){a.b=FWc();a.e=_Vb(ai())}H8b(a.f);a.j=a.b[0].c;d=lWb(a.e,a.j);h=DD(mWb(d)*a.g);a.o=a.b.length*15;Ke(a.f,h+xlh,a.o+xlh);for(g=0,e=a.b.length;g<e;g++){f=a.b[g];wGd(a,g,f)}if(c){Nbc(a.i,0);Kbc(a.i)}}\nfunction wGd(a,b,c){var d,e,f,g,h,i,j;j=a.o-(b+1)*15;h=DD(mWb(lWb(c.c,a.j))*a.g);f=c.e?c.e.a:a.e;i=ayc(0,DD(mWb(lWb(a.e,f))*a.g)-1);d=c.f==0;g=new $ec;(u6b(),g.yb).style[Dlh]=(zr(),Tlh);g.yb.style[uoh]=fmh;Tec(g,IWc(c)+(d?' (active)':''));d&&(g.yb.style[OFh]=(Pq(),Bth),undefined);switch(c.f){case 2:e='red';break;case 0:e='#f99';break;case 1:e='#88f';break;case 3:e='#E0E0E0';break;case 4:default:e='yellow';}g.yb.style[Smh]=e;g.yb.style[Pyh]=($o(),Exh);gf(g,new JGd(a,c),(bv(),bv(),av));pkc(a.f,g);Ckc(a.f,g,j,(Ks(),Js),15,Js);xkc(a.f,g,h,Js,i,Js);g.wb.d.style[Dlh]=Tlh}\nfunction yGd(){var a;this.f=new Fkc;ro(ye(this.f).style,'borderRight','2px dashed #888');this.i=new Zid(this.f);Obc(this.i,Dnh,Dnh);gf(this.i,new DGd(this),(bv(),bv(),av));a=new Mpc;(u6b(),a.yb).style[Smh]=Ksh;a.yb.style[anh]='500';Ym(a.yb.style,0.9);this.a=new sbc;ro(ye(this.a).style,Smh,'#FFE');this.d=new $ec;Zec(this.d,'<p>Click on a request to see details. Click on the background to show these instructions again.<\\/p><h4>Available commands:<\\/h4><ul><li>Esc: Close<\\/li><li>P: Play/pause<\\/li><li>E: Export<\\/li><li>I: Import<\\/li><li>+/-: Zoom in/out<\\/li><\\/ul>');this.a.il(this.d);nfc(a,this.a,200);Ipc(a,this.i,(Pfc(),Ifc),0,null);AZb(this,a);this.c=I6b(this);this.n=new FGd(this);xGd(this,true,true)}\nAVb(28,11,Wnh);_.Sk=function J8b(){H8b(this)};AVb(241,257,Wnh);_.Sk=function pec(){H8b(this.$)};AVb(695,28,Boh);_.Sk=function Xgc(){Fgc(this)};AVb(129,71,Ynh);_.Sk=function vhc(){rhc(this)};AVb(2892,2891,PUh);_.Sk=function Arc(){throw new Czc('Use TabLayoutPanel.clear() to alter the DeckLayoutPanel')};AVb(1088,1,kBh);_.Sg=function zzd(){var a,b;b=new yGd;a=dpc();skc(a,b,a.C.c);Akc(a,b,10,(Ks(),Js),10,Js);xkc(a,b,10,Js,10,Js);hf(b,new Azd(a,b),cx?cx:(cx=new nv))};AVb(1089,1,jnh,Azd);_.zh=function Bzd(a){ukc(this.a,this.b)};var o_=Mwc(1089);AVb(2854,knh,lnh,vGd);var k1=Mwc(2854);AVb(2540,knh,fGh,yGd);_.Ah=function zGd(a){return hf(this,a,cx?cx:(cx=new nv))};_.pg=function AGd(){Aj((tj(),sj),new HGd(this))};_.Bi=function BGd(a){var b,c,d,e,f,g,h;if(H6b(a.d)==128){g=_m(a.d);if(g==27){fx(this,this,false);Zvc(this.c.a)}else if(g==82&&YOc(a.d)==0){xGd(this,true,true)}else if(g==80){if(this.k)Db(this.n);else{xGd(this.n.a,true,false);Fb(this.n,flh)}this.k=!this.k}else if(g==69){h=new EIc;DIc(h,oWb(this.e)+'');mzc(h.b,Hph);h.a=true;for(d=this.b,e=0,f=d.length;e<f;++e){c=d[e];KWc(c,h)}b=new OGd(WJh,h.b.a,null);vTc(b)}else if(g==73){b=new OGd('Import','',new MGd(this));vTc(b)}}else if(H6b(a.d)==256){if(_m(a.d)==43){this.g*=2;xGd(this,false,false)}else if(_m(a.d)==45){this.g/=2;xGd(this,false,false)}}};_.qg=function CGd(){Db(this.n)};_.e={l:0,m:0,h:0};_.g=0.02;_.j={l:0,m:0,h:0};_.k=false;_.o=0;var r1=Mwc(2540);AVb(2541,1,joh,DGd);_.lh=function EGd(a){this.a.a.il(this.a.d)};var l1=Mwc(2541);AVb(2542,100,{},FGd);_.Zf=function GGd(){xGd(this.a,true,false)};var m1=Mwc(2542);AVb(2543,1,hlh,HGd);_.Ug=function IGd(){Nbc(this.a.i,0);Kbc(this.a.i)};var n1=Mwc(2543);AVb(2544,1,joh,JGd);_.lh=function KGd(a){var b;gn(a.a);this.a.a.Sk();b=new vGd(this.b);(u6b(),b.yb).style[Mkh]=Dnh;b.yb.style[Kkh]=Dnh;this.a.a.il(b)};var o1=Mwc(2544);AVb(2545,1,{},MGd);_.Zm=function NGd(a){LGd(this,a)};var p1=Mwc(2545);AVb(750,156,soh,OGd);_.Lq=function PGd(){return Vjc(this.a)};_.On=function QGd(){return this.a};_.Mq=function RGd(a){return true};var q1=Mwc(750);AVb(4098,188,hTh);_.Sk=function g2f(){fRc(Iad(this.d),QUh)};Wjh(Ci)(2);\n//# sourceURL=rstudio-2.js\n")