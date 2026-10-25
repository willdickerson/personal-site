(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="180",jf=0,Bl=1,qf=2,Ih=1,Lh=2,Yn=3,dn=0,Vt=1,xt=2,gi=0,gs=1,kl=2,zl=3,Hl=4,Kf=5,Oi=100,Yf=101,$f=102,Jf=103,Zf=104,Qf=200,ed=201,td=202,nd=203,ic=204,sc=205,id=206,sd=207,rd=208,ad=209,od=210,cd=211,ld=212,ud=213,hd=214,rc=0,ac=1,oc=2,vs=3,cc=4,lc=5,uc=6,hc=7,Dh=0,fd=1,dd=2,ti=0,pd=1,md=2,gd=3,bd=4,_d=5,xd=6,vd=7,Gl="attached",yd="detached",Uh=300,ys=301,Ms=302,Ca=303,fc=304,Oa=306,Ss=1e3,vn=1001,Pa=1002,Wt=1003,Fh=1004,tr=1005,vt=1006,Ma=1007,Fn=1008,sn=1009,Nh=1010,Oh=1011,ur=1012,al=1013,bi=1014,Nt=1015,tn=1016,ol=1017,cl=1018,hr=1020,Bh=35902,kh=35899,zh=1021,Hh=1022,Gt=1023,fr=1026,dr=1027,ll=1028,Ba=1029,Gh=1030,ul=1031,hl=1033,Sa=33776,Ta=33777,Ea=33778,wa=33779,dc=35840,pc=35841,mc=35842,gc=35843,bc=36196,_c=37492,xc=37496,vc=37808,yc=37809,Mc=37810,Sc=37811,Tc=37812,Ec=37813,wc=37814,Ac=37815,Rc=37816,Cc=37817,Pc=37818,Ic=37819,Lc=37820,Dc=37821,Uc=36492,Fc=36494,Nc=36495,Oc=36283,Bc=36284,kc=36285,zc=36286,pr=2300,mr=2301,$a=2302,Vl=2400,Wl=2401,Xl=2402,Md=2500,Sd=0,Vh=1,Hc=2,Td=3200,Ed=3201,Wh=0,wd=1,Jn="",Pt="srgb",Bt="srgb-linear",Ia="linear",nt="srgb",Vi=7680,jl=519,Ad=512,Rd=513,Cd=514,Xh=515,Pd=516,Id=517,Ld=518,Dd=519,Gc=35044,ql="300 es",yn=2e3,La=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kl=1234567;const rr=Math.PI/180,Ts=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function ke(s,e,t){return Math.max(e,Math.min(t,s))}function fl(s,e){return(s%e+e)%e}function Ud(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fd(s,e,t){return s!==e?(t-s)/(e-s):0}function ar(s,e,t){return(1-t)*s+t*e}function Nd(s,e,t,n){return ar(s,e,1-Math.exp(-t*n))}function Od(s,e=1){return e-Math.abs(fl(s,e*2)-e)}function Bd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function kd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function zd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hd(s,e){return s+Math.random()*(e-s)}function Gd(s){return s*(.5-Math.random())}function Vd(s){s!==void 0&&(Kl=s);let e=Kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wd(s){return s*rr}function Xd(s){return s*Ts}function jd(s){return(s&s-1)===0&&s!==0}function qd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Kd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ln={DEG2RAD:rr,RAD2DEG:Ts,generateUUID:Mn,clamp:ke,euclideanModulo:fl,mapLinear:Ud,inverseLerp:Fd,lerp:ar,damp:Nd,pingpong:Od,smoothstep:Bd,smootherstep:kd,randInt:zd,randFloat:Hd,randFloatSpread:Gd,seededRandom:Vd,degToRad:Wd,radToDeg:Xd,isPowerOfTwo:jd,ceilPowerOfTwo:qd,floorPowerOfTwo:Kd,setQuaternionFromProperEuler:Yd,normalize:Qe,denormalize:xn};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==f||l!==d||u!==g){let m=1-o;const p=c*f+l*d+u*g+h*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,p*x);m=Math.sin(m*T)/M,o=Math.sin(o*T)/M}const _=o*x;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+b*_,m===1-o){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-o*d,e[t+2]=l*g+u*d+o*f-c*h,e[t+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new P,Yl=new yi;class Ve{constructor(e,t,n,i,r,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],b=i[0],m=i[3],p=i[6],x=i[1],v=i[4],_=i[7],M=i[2],T=i[5],w=i[8];return r[0]=a*b+o*x+c*M,r[3]=a*m+o*v+c*T,r[6]=a*p+o*_+c*w,r[1]=l*b+u*x+h*M,r[4]=l*m+u*v+h*T,r[7]=l*p+u*_+h*w,r[2]=f*b+d*x+g*M,r[5]=f*m+d*v+g*T,r[8]=f*p+d*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*l-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(u*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=d*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ve;function jh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){const s=gr("canvas");return s.style.display="block",s}const $l={};function br(s){s in $l||($l[s]=!0,console.warn(s))}function Jd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Jl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zd(){const s={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(i.r=bs(i.r),i.g=bs(i.g),i.b=bs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?Ia:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bt]:{primaries:e,whitePoint:n,transfer:Ia,toXYZ:Jl,fromXYZ:Zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Jl,fromXYZ:Zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}const Ke=Zd();function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Wi;class Qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=gr("canvas")),Wi.width=e.width,Wi.height=e.height;const i=Wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ep=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qa(i[a].image)):r.push(Qa(i[a]))}else r=Qa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tp=0;const eo=new P;class yt extends Is{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=vn,i=vn,r=vt,a=Fn,o=Gt,c=sn,l=yt.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Mn(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ss:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ss:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Uh;yt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,_=(d+1)/2,M=(p+1)/2,T=(u+f)/4,w=(h+b)/4,R=(g+m)/4;return v>_&&v>M?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=w/n):_>M?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=T/i,r=R/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=w/r,i=R/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-b)/x,this.z=(f-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class np extends Is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new yt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new dl(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends np{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qh extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Pr.subVectors(this.max,Bs),Xi.subVectors(e.a,Bs),ji.subVectors(e.b,Bs),qi.subVectors(e.c,Bs),ai.subVectors(ji,Xi),oi.subVectors(qi,ji),Ti.subVectors(Xi,qi);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ti.z,Ti.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ti.z,0,-Ti.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ti.y,Ti.x,0];return!to(t,Xi,ji,qi,Pr)||(t=[1,0,0,0,1,0,0,0,1],!to(t,Xi,ji,qi,Pr))?!1:(Ir.crossVectors(ai,oi),t=[Ir.x,Ir.y,Ir.z],to(t,Xi,ji,qi,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new P,new P,new P,new P,new P,new P,new P,new P],pn=new P,Cr=new ct,Xi=new P,ji=new P,qi=new P,ai=new P,oi=new P,Ti=new P,Bs=new P,Pr=new P,Ir=new P,Ei=new P;function to(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ei.fromArray(s,r);const o=i.x*Math.abs(Ei.x)+i.y*Math.abs(Ei.y)+i.z*Math.abs(Ei.z),c=e.dot(Ei),l=t.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ip=new ct,ks=new P,no=new P;class Ot{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ip.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(no.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(no)),this.expandByPoint(ks.copy(e.center).sub(no))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wn=new P,io=new P,Lr=new P,ci=new P,so=new P,Dr=new P,ro=new P;class ii{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){io.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(io);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=ci.dot(this.direction),c=-ci.dot(Lr),l=ci.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const b=1/u;h*=b,f*=b,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(io).addScaledVector(Lr,f),d}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),i=Wn.dot(Wn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,i,r){so.subVectors(t,e),Dr.subVectors(n,e),ro.crossVectors(so,Dr);let a=this.direction.dot(ro),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const c=o*this.direction.dot(Dr.crossVectors(ci,Dr));if(c<0)return null;const l=o*this.direction.dot(so.cross(ci));if(l<0||c+l>a)return null;const u=-o*ci.dot(ro);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(e,t,n,i,r,a,o,c,l,u,h,f,d,g,b,m){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,d,g,b,m)}set(e,t,n,i,r,a,o,c,l,u,h,f,d,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,b=l*h;t[0]=f+b*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,b=l*h;t[0]=f-b*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+b,t[1]=c*h,t[5]=b*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-b*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+b,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sp,e,rp)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),li.crossVectors(n,Qt),li.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),li.crossVectors(n,Qt)),li.normalize(),Ur.crossVectors(Qt,li),i[0]=li.x,i[4]=Ur.x,i[8]=Qt.x,i[1]=li.y,i[5]=Ur.y,i[9]=Qt.y,i[2]=li.z,i[6]=Ur.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],v=n[7],_=n[11],M=n[15],T=i[0],w=i[4],R=i[8],S=i[12],y=i[1],C=i[5],I=i[9],D=i[13],F=i[2],k=i[6],B=i[10],Y=i[14],O=i[3],K=i[7],ee=i[11],ce=i[15];return r[0]=a*T+o*y+c*F+l*O,r[4]=a*w+o*C+c*k+l*K,r[8]=a*R+o*I+c*B+l*ee,r[12]=a*S+o*D+c*Y+l*ce,r[1]=u*T+h*y+f*F+d*O,r[5]=u*w+h*C+f*k+d*K,r[9]=u*R+h*I+f*B+d*ee,r[13]=u*S+h*D+f*Y+d*ce,r[2]=g*T+b*y+m*F+p*O,r[6]=g*w+b*C+m*k+p*K,r[10]=g*R+b*I+m*B+p*ee,r[14]=g*S+b*D+m*Y+p*ce,r[3]=x*T+v*y+_*F+M*O,r[7]=x*w+v*C+_*k+M*K,r[11]=x*R+v*I+_*B+M*ee,r[15]=x*S+v*D+_*Y+M*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+b*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],b=e[13],m=e[14],p=e[15],x=h*m*l-b*f*l+b*c*d-o*m*d-h*c*p+o*f*p,v=g*f*l-u*m*l-g*c*d+a*m*d+u*c*p-a*f*p,_=u*b*l-g*h*l+g*o*d-a*b*d-u*o*p+a*h*p,M=g*h*c-u*b*c-g*o*f+a*b*f+u*o*m-a*h*m,T=t*x+n*v+i*_+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=x*w,e[1]=(b*f*r-h*m*r-b*i*d+n*m*d+h*i*p-n*f*p)*w,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*w,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*w,e[4]=v*w,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*w,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*w,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*w,e[8]=_*w,e[9]=(g*h*r-u*b*r-g*n*d+t*b*d+u*n*p-t*h*p)*w,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*w,e[12]=M*w,e[13]=(u*b*i-g*h*i+g*n*f-t*b*f-u*n*m+t*h*m)*w,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*w,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,g=r*h,b=a*u,m=a*h,p=o*h,x=c*l,v=c*u,_=c*h,M=n.x,T=n.y,w=n.z;return i[0]=(1-(b+p))*M,i[1]=(d+_)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-_)*T,i[5]=(1-(f+p))*T,i[6]=(m+x)*T,i[7]=0,i[8]=(g+v)*w,i[9]=(m-x)*w,i[10]=(1-(f+b))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const l=1/r,u=1/a,h=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=yn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===La)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===yn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===La)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new P,mn=new Ie,sp=new P(0,0,0),rp=new P(1,1,1),li=new P,Ur=new P,Qt=new P,Ql=new Ie,eu=new yi;class Sn{constructor(e=0,t=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class pl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ap=0;const tu=new P,Yi=new yi,Xn=new Ie,Fr=new P,zs=new P,op=new P,cp=new yi,nu=new P(1,0,0),iu=new P(0,1,0),su=new P(0,0,1),ru={type:"added"},lp={type:"removed"},$i={type:"childadded",child:null},ao={type:"childremoved",child:null};class ft extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new P,t=new Sn,n=new yi,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ve}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fr.copy(e):Fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(zs,Fr,this.up):Xn.lookAt(Fr,zs,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),Yi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),ao.child=e,this.dispatchEvent(ao),ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,cp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new P(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new P,jn=new P,oo=new P,qn=new P,Ji=new P,Zi=new P,au=new P,co=new P,lo=new P,uo=new P,ho=new $e,fo=new $e,po=new $e;class It{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gn.subVectors(e,t),i.cross(gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gn.subVectors(i,t),jn.subVectors(n,t),oo.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(jn),c=gn.dot(oo),l=jn.dot(jn),u=jn.dot(oo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qn.x),c.addScaledVector(a,qn.y),c.addScaledVector(o,qn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ho.setScalar(0),fo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(e,t),fo.fromBufferAttribute(e,n),po.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(fo,r.y),a.addScaledVector(po,r.z),a}static isFrontFacing(e,t,n,i){return gn.subVectors(n,t),jn.subVectors(e,t),gn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),gn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return It.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ji.subVectors(i,n),Zi.subVectors(r,n),co.subVectors(e,n);const c=Ji.dot(co),l=Zi.dot(co);if(c<=0&&l<=0)return t.copy(n);lo.subVectors(e,i);const u=Ji.dot(lo),h=Zi.dot(lo);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ji,a);uo.subVectors(e,r);const d=Ji.dot(uo),g=Zi.dot(uo);if(g>=0&&d<=g)return t.copy(r);const b=d*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Zi,o);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return au.subVectors(r,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(au,o);const p=1/(m+b+f);return a=b*p,o=f*p,t.copy(n).addScaledVector(Ji,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function mo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=fl(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mo(a,r,e+1/3),this.g=mo(a,r,e),this.b=mo(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ke.workingToColorSpace(Dt.copy(this),e),Math.round(ke(Dt.r*255,0,255))*65536+Math.round(ke(Dt.g*255,0,255))*256+Math.round(ke(Dt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,r=Dt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Pt){Ke.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Nr);const n=ar(ui.h,Nr.h,t),i=ar(ui.s,Nr.s,t),r=ar(ui.l,Nr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Le;Le.NAMES=Yh;let up=0;class On extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=gs,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nn extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zn=hp();function hp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function fp(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ke(s,-65504,65504),Zn.floatView[0]=s;const e=Zn.uint32View[0],t=e>>23&511;return Zn.baseTable[t]+((e&8388607)>>Zn.shiftTable[t])}function dp(s){const e=s>>10;return Zn.uint32View[0]=Zn.mantissaTable[Zn.offsetTable[e]+(s&1023)]+Zn.exponentTable[e],Zn.floatView[0]}class ki{static toHalfFloat(e){return fp(e)}static fromHalfFloat(e){return dp(e)}}const bt=new P,Or=new ze;let pp=0;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=Nt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gc&&(e.usage=this.usage),e}}class $h extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jh extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mp=0;const on=new Ie,go=new ft,Qi=new P,en=new ct,Hs=new ct,Et=new P;class At extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Jh:$h)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return go.lookAt(e),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ct);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(en.min,Hs.min),en.expandByPoint(Et),Et.addVectors(en.max,Hs.max),en.expandByPoint(Et)):(en.expandByPoint(Hs.min),en.expandByPoint(Hs.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Et.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),Et.add(Qi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;const l=new P,u=new P,h=new P,f=new ze,d=new ze,g=new ze,b=new P,m=new P;function p(R,S,y){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),o[R].add(b),o[S].add(b),o[y].add(b),c[R].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,S=x.length;R<S;++R){const y=x[R],C=y.start,I=y.count;for(let D=C,F=C+I;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new P,_=new P,M=new P,T=new P;function w(R){M.fromBufferAttribute(i,R),T.copy(M);const S=o[R];v.copy(S),v.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(T,S);const C=_.dot(c[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,C)}for(let R=0,S=x.length;R<S;++R){const y=x[R],C=y.start,I=y.count;for(let D=C,F=C+I;D<F;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?d=c[b]*o.data.stride+o.offset:d=c[b]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new gt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new Ie,wi=new ii,Br=new Ot,cu=new P,kr=new P,zr=new P,Hr=new P,bo=new P,Gr=new P,lu=new P,Vr=new P;class mt extends ft{constructor(e=new At,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(bo.fromBufferAttribute(h,e),a?Gr.addScaledVector(bo,u):Gr.addScaledVector(bo.sub(t),u))}t.add(Gr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Br.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Br,cu)===null||wi.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(ou.copy(r).invert(),wi.copy(e.ray).applyMatrix4(ou),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=v;_<M;_+=3){const T=o.getX(_),w=o.getX(_+1),R=o.getX(_+2);i=Wr(this,p,e,n,l,u,h,T,w,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){const x=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);i=Wr(this,a,e,n,l,u,h,x,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=f.length;g<b;g++){const m=f[g],p=a[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,M=v;_<M;_+=3){const T=_,w=_+1,R=_+2;i=Wr(this,p,e,n,l,u,h,T,w,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){const x=m,v=m+1,_=m+2;i=Wr(this,a,e,n,l,u,h,x,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function gp(s,e,t,n,i,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===dn,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:s}}function Wr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,kr),s.getVertexPosition(c,zr),s.getVertexPosition(l,Hr);const u=gp(s,e,t,n,kr,zr,Hr,lu);if(u){const h=new P;It.getBarycoord(lu,kr,zr,Hr,h),i&&(u.uv=It.getInterpolatedAttribute(i,o,c,l,h,new ze)),r&&(u.uv1=It.getInterpolatedAttribute(r,o,c,l,h,new ze)),a&&(u.normal=It.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};It.getNormal(kr,zr,Hr,f.normal),u.face=f,u.barycoord=h}return u}class xr extends At{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(b,m,p,x,v,_,M,T,w,R,S){const y=_/w,C=M/R,I=_/2,D=M/2,F=T/2,k=w+1,B=R+1;let Y=0,O=0;const K=new P;for(let ee=0;ee<B;ee++){const ce=ee*C-D;for(let Me=0;Me<k;Me++){const ae=Me*y-I;K[b]=ae*x,K[m]=ce*v,K[p]=F,l.push(K.x,K.y,K.z),K[b]=0,K[m]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(Me/w),h.push(1-ee/R),Y+=1}}for(let ee=0;ee<R;ee++)for(let ce=0;ce<w;ce++){const Me=f+ce+k*ee,ae=f+ce+k*(ee+1),Ce=f+(ce+1)+k*(ee+1),Be=f+(ce+1)+k*ee;c.push(Me,ae,Be),c.push(ae,Ce,Be),O+=6}o.addGroup(d,O,S),d+=O,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(s){const e={};for(let t=0;t<s.length;t++){const n=Es(s[t]);for(const i in n)e[i]=n[i]}return e}function bp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Qh={clone:Es,merge:Ht};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ef extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new P,uu=new ze,hu=new ze;class Ft extends ef{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,uu,hu),t.subVectors(hu,uu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const es=-90,ts=1;class tf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(es,ts,e,t);i.layers=this.layers,this.add(i);const r=new Ft(es,ts,e,t);r.layers=this.layers,this.add(r);const a=new Ft(es,ts,e,t);a.layers=this.layers,this.add(a);const o=new Ft(es,ts,e,t);o.layers=this.layers,this.add(o);const c=new Ft(es,ts,e,t);c.layers=this.layers,this.add(c);const l=new Ft(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nf extends yt{constructor(e=[],t=ys,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sf extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xr(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:gi});r.uniforms.tEquirect.value=t;const a=new mt(i,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=vt),new tf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class zi extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class _o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rf extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new P;class ml{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fu=new P,du=new $e,pu=new $e,Mp=new P,mu=new Ie,Xr=new P,xo=new Ot,gu=new Ie,vo=new ii;class Sp extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gl,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ct),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingBox.expandByPoint(Xr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xr),this.boundingSphere.expandByPoint(Xr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xo.copy(this.boundingSphere),xo.applyMatrix4(i),e.ray.intersectsSphere(xo)!==!1&&(gu.copy(i).invert(),vo.copy(e.ray).applyMatrix4(gu),!(this.boundingBox!==null&&vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;du.fromBufferAttribute(i.attributes.skinIndex,e),pu.fromBufferAttribute(i.attributes.skinWeight,e),fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=pu.getComponent(r);if(a!==0){const o=du.getComponent(r);mu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Mp.copy(fu).applyMatrix4(mu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class af extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _s extends yt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Wt,u=Wt,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=new Ie,Tp=new Ie;class gl{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Tp;bu.multiplyMatrices(o,t[r]),bu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _s(t,e,e,Gt,Nt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new af),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Vc extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ns=new Ie,_u=new Ie,jr=[],xu=new ct,Ep=new Ie,Gs=new mt,Vs=new Ot;class wp extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ep)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),xu.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(xu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Vs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),_u.multiplyMatrices(n,ns),Gs.matrixWorld=_u,Gs.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){const c=jr[a];c.instanceId=r,c.object=this,t.push(c)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(i*this.count),i,this.count,ll,Nt));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yo=new P,Ap=new P,Rp=new Ve;class Dn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=yo.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rp.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ot,Cp=new ze(.5,.5),qr=new P;class vr{constructor(e=new Dn,t=new Dn,n=new Dn,i=new Dn,r=new Dn,a=new Dn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],g=r[8],b=r[9],m=r[10],p=r[11],x=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-a,d-u,p-g,M-x).normalize(),i[1].setComponents(l+a,d+u,p+g,M+x).normalize(),i[2].setComponents(l+o,d+h,p+b,M+v).normalize(),i[3].setComponents(l-o,d-h,p-b,M-v).normalize(),n)i[4].setComponents(c,f,m,_).normalize(),i[5].setComponents(l-c,d-f,p-m,M-_).normalize();else if(i[4].setComponents(l-c,d-f,p-m,M-_).normalize(),t===yn)i[5].setComponents(l+c,d+f,p+m,M+_).normalize();else if(t===La)i[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Cp.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qr.x=i.normal.x>0?e.max.x:e.min.x,qr.y=i.normal.y>0?e.max.y:e.min.y,qr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Rn=new Ie,Cn=new vr;class bl{constructor(){this.coordinateSystem=yn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Cn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Cn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Cn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Cn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const i=t.cameras[n];if(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(Rn,i.coordinateSystem,i.reversedDepth),Cn.containsPoint(e))return!0}return!1}clone(){return new bl}}function Mo(s,e){return s-e}function Pp(s,e){return s.z-e.z}function Ip(s,e){return e.z-s.z}class Lp{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}}const Kt=new Ie,Dp=new Le(1,1,1),vu=new vr,Up=new bl,Kr=new ct,Ri=new Ot,Ws=new P,yu=new P,Fp=new P,So=new Lp,Ut=new mt,Yr=[];function Np(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}function Ci(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++)e[n]=s[n]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class Op extends mt{constructor(e,t,n=t*2,i){super(new At,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new _s(t,e,e,Gt,Nt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new _s(t,e,e,Ba,bi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new _s(t,e,e,Gt,Nt);n.colorSpace=Ke.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,u=new o.constructor(n*c),h=new gt(u,c,l);t.setAttribute(r,h)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new gt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ct);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Kt),this.getBoundingBoxAt(r,Kr).applyMatrix4(Kt),e.union(Kr)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Kt),this.getBoundingSphereAt(r,Ri).applyMatrix4(Kt),e.union(Ri)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Mo),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Kt.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(Dp.toArray(a.image.data,i*4),a.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?a.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Mo),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(i&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const u in n.attributes){const h=t.getAttribute(u),f=n.getAttribute(u);Np(h,f,c);const d=h.itemSize;for(let g=h.count,b=l;g<b;g++){const m=c+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(c*d,l*d)}if(i){const u=o.indexStart,h=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<a.count;f++)r.setX(u+f,c+a.getX(f));for(let f=a.count,d=h;f<d;f++)r.setX(u+f,c);r.needsUpdate=!0,r.addUpdateRange(u,o.reservedIndexCount)}return o.start=i?o.indexStart:o.vertexStart,o.count=i?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const c=i[a],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==t){const{indexStart:u,vertexStart:h,reservedIndexCount:f}=l,d=r.index,g=d.array,b=e-h;for(let m=u;m<u+f;m++)g[m]=g[m]+b;d.array.copyWithin(t,u,u+f),d.addUpdateRange(t,f),l.indexStart=t}t+=l.reservedIndexCount}if(l.vertexStart!==e){const{vertexStart:u,reservedVertexCount:h}=l,f=r.attributes;for(const d in f){const g=f[d],{array:b,itemSize:m}=g;b.copyWithin(e*m,u*m,(u+h)*m),g.addUpdateRange(e*m,h*m)}l.vertexStart=e}e+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const r=new ct,a=n.index,o=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let u=c;a&&(u=a.getX(u)),r.expandByPoint(Ws.fromBufferAttribute(o,u))}i.boundingBox=r}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const r=new Ot;this.getBoundingBoxAt(e,Kr),Kr.getCenter(r.center);const a=n.index,o=n.attributes.position;let c=0;for(let l=i.start,u=i.start+i.count;l<u;l++){let h=l;a&&(h=a.getX(h)),Ws.fromBufferAttribute(o,h),c=Math.max(c,r.center.distanceToSquared(Ws))}r.radius=Math.sqrt(c),i.boundingSphere=r}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Mo);t[t.length-1]===n.length-1;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),r=new Int32Array(e);Ci(this._multiDrawCounts,i),Ci(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,c=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Ci(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Ci(o.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Ci(c.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new At,this._initializeGeometry(r));const a=this.geometry;r.index&&Ci(r.index.array,a.index.array);for(const o in r.attributes)Ci(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,a=this.geometry;Ut.material=this.material,Ut.geometry.index=a.index,Ut.geometry.attributes=a.attributes,Ut.geometry.boundingBox===null&&(Ut.geometry.boundingBox=new ct),Ut.geometry.boundingSphere===null&&(Ut.geometry.boundingSphere=new Ot);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,u=i[l];Ut.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(o,Ut.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ut.geometry.boundingBox),this.getBoundingSphereAt(l,Ut.geometry.boundingSphere),Ut.raycast(e,Yr);for(let h=0,f=Yr.length;h<f;h++){const d=Yr[h];d.object=this,d.batchId=o,t.push(d)}Yr.length=0}Ut.material=null,Ut.geometry.index=null,Ut.geometry.attributes={},Ut.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data,b=n.isArrayCamera?Up:vu;f&&!n.isArrayCamera&&(Kt.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),vu.setFromProjectionMatrix(Kt,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){Kt.copy(this.matrixWorld).invert(),Ws.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Kt),yu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Kt);for(let v=0,_=c.length;v<_;v++)if(c[v].visible&&c[v].active){const M=c[v].geometryIndex;this.getMatrixAt(v,Kt),this.getBoundingSphereAt(M,Ri).applyMatrix4(Kt);let T=!1;if(f&&(T=!b.intersectsSphere(Ri,n)),!T){const w=h[M],R=Fp.subVectors(Ri.center,Ws).dot(yu);So.push(w.start,w.count,R,v)}}const p=So.list,x=this.customSort;x===null?p.sort(r.transparent?Ip:Pp):x.call(this,p,n);for(let v=0,_=p.length;v<_;v++){const M=p[v];l[m]=M.start*o,u[m]=M.count,g[m]=M.index,m++}So.reset()}else for(let p=0,x=c.length;p<x;p++)if(c[p].visible&&c[p].active){const v=c[p].geometryIndex;let _=!1;if(f&&(this.getMatrixAt(p,Kt),this.getBoundingSphereAt(v,Ri).applyMatrix4(Kt),_=!b.intersectsSphere(Ri,n)),!_){const M=h[v];l[m]=M.start*o,u[m]=M.count,g[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class of extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Da=new P,Ua=new P,Mu=new Ie,Xs=new ii,$r=new Ot,To=new P,Su=new P;class _l extends ft{constructor(e=new At,t=new of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Da.fromBufferAttribute(t,i-1),Ua.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Da.distanceTo(Ua);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,e.ray.intersectsSphere($r)===!1)return;Mu.copy(i).invert(),Xs.copy(e.ray).applyMatrix4(Mu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=d,m=g-1;b<m;b+=l){const p=u.getX(b),x=u.getX(b+1),v=Jr(this,e,Xs,c,p,x,b);v&&t.push(v)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(d),p=Jr(this,e,Xs,c,b,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let b=d,m=g-1;b<m;b+=l){const p=Jr(this,e,Xs,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=Jr(this,e,Xs,c,g-1,d,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jr(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(Da.fromBufferAttribute(o,i),Ua.fromBufferAttribute(o,r),t.distanceSqToSegment(Da,Ua,To,Su)>n)return;To.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(To);if(!(l<e.near||l>e.far))return{distance:l,point:Su.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Tu=new P,Eu=new P;class Bp extends _l{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tu.fromBufferAttribute(t,i),Eu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tu.distanceTo(Eu);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kp extends _l{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cf extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wu=new Ie,Wc=new ii,Zr=new Ot,Qr=new P;class zp extends ft{constructor(e=new At,t=new cf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;wu.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(wu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=f,b=d;g<b;g++){const m=l.getX(g);Qr.fromBufferAttribute(h,m),Au(Qr,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,b=d;g<b;g++)Qr.fromBufferAttribute(h,g),Au(Qr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Au(s,e,t,n,i,r,a){const o=Wc.distanceSqToPoint(s);if(o<t){const c=new P;Wc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Hp extends yt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lf extends yt{constructor(e,t,n=bi,i,r,a,o=Wt,c=Wt,l,u=fr,h=1){if(u!==fr&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uf extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ls extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],g=[],b=[],m=[];for(let p=0;p<u;p++){const x=p*f-a;for(let v=0;v<l;v++){const _=v*h-r;g.push(_,-x,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const v=x+l*p,_=x+l*(p+1),M=x+1+l*(p+1),T=x+1+l*p;d.push(v,_,T),d.push(_,M,T)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(b,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class xl extends At{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let h=e;const f=(t-e)/i,d=new P,g=new ze;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let b=0;b<i;b++){const m=b*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,_=x+n+1,M=x+n+2,T=x+1;o.push(v,_,T),o.push(_,M,T)}}this.setIndex(o),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vl extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new P,f=new P,d=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){const T=M/t;h.x=-e*Math.cos(i+T*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+T*r)*Math.sin(a+v*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),b.push(f.x,f.y,f.z),m.push(T+_,1-v),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const v=u[p][x+1],_=u[p][x],M=u[p+1][x],T=u[p+1][x+1];(p!==0||a>0)&&d.push(v,_,T),(p!==n-1||c<Math.PI)&&d.push(_,M,T)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(b,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ws extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wh,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class En extends ws{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Gp extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vp extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ea(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Wp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ru(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function hf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class yr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jp extends yr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:r=e,o=2*t-n;break;case Xl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wl:a=e,c=2*n-t;break;case Xl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-f*m+2*f*b-f*g,x=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*b+.5*g,_=d*m-d*b;for(let M=0;M!==o;++M)r[M]=p*a[u+M]+x*a[l+M]+v*a[c+M]+_*a[h+M];return r}}class qp extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class Kp extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ea(t,this.TimeBufferType),this.values=ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ea(e.times,Array),values:ea(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Wp(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[f+g]||b!==t[d+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=mr;class Ds extends wn{constructor(e,t,n){super(e,t,n)}}Ds.prototype.ValueTypeName="bool";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=pr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class ff extends wn{constructor(e,t,n,i){super(e,t,n,i)}}ff.prototype.ValueTypeName="color";class As extends wn{constructor(e,t,n,i){super(e,t,n,i)}}As.prototype.ValueTypeName="number";class Yp extends yr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)yi.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Rs extends wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Yp(this.times,this.values,this.getValueSize(),e)}}Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends wn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="string";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=pr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Cs extends wn{constructor(e,t,n,i){super(e,t,n,i)}}Cs.prototype.ValueTypeName="vector";class $p{constructor(e="",t=-1,n=[],i=Md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Zp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Xp(c);c=Ru(c,1,u),l=Ru(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new As(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,b){if(d.length!==0){const m=[],p=[];hf(d,m,p,g),m.length!==0&&b.push(new h(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let b=0;b<f[g].morphTargets.length;b++)d[f[g].morphTargets[b]]=-1;for(const b in d){const m=[],p=[];for(let x=0;x!==f[g].morphTargets.length;++x){const v=f[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new As(".morphTargetInfluence["+b+"]",m,p))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Cs,d+".position",f,"pos",i),n(Rs,d+".quaternion",f,"rot",i),n(Cs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Jp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return As;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return ff;case"quaternion":return Rs;case"bool":case"boolean":return Ds;case"string":return Us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Zp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Jp(s.type);if(s.times===void 0){const t=[],n=[];hf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Qn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class df{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Qp=new df;class Hi{constructor(e){this.manager=e!==void 0?e:Qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class em extends Error{constructor(e,t){super(e),this.response=t}}class yl extends Hi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Kn[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let b=0;const m=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:d});for(let T=0,w=u.length;T<w;T++){const R=u[T];R.onProgress&&R.onProgress(M)}p.enqueue(_),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new em(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Qn.add(`file:${e}`,l);const u=Kn[e];delete Kn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Kn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Kn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const is=new WeakMap;class tm extends Hi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=is.get(a);h===void 0&&(h=[],is.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=gr("img");function c(){u(),t&&t(this);const h=is.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}is.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Qn.remove(`image:${e}`);const f=is.get(this)||[];for(let d=0;d<f.length;d++){const g=f[d];g.onError&&g.onError(h)}is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class nm extends Hi{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new _s,o=new yl(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:vn,a.wrapT=l.wrapT!==void 0?l.wrapT:vn,a.magFilter=l.magFilter!==void 0?l.magFilter:vt,a.minFilter=l.minFilter!==void 0?l.minFilter:vt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Fn),l.mipmapCount===1&&(a.minFilter=vt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class pf extends Hi{constructor(e){super(e)}load(e,t,n,i){const r=new yt,a=new tm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ml extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Eo=new Ie,Cu=new P,Pu=new P;class Sl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),Eo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class im extends Sl{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sm extends Ml{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new im}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Iu=new Ie,js=new P,wo=new P;class rm extends Sl{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),wo.copy(n.position),wo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wo),n.updateMatrixWorld(),i.makeTranslation(-js.x,-js.y,-js.z),Iu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu,n.coordinateSystem,n.reversedDepth)}}class am extends Ml{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ka extends ef{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class om extends Sl{constructor(){super(new ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mf extends Ml{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new om}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ao=new WeakMap;class cm extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Ao.has(a)===!0)i&&i(Ao.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ao.set(c,l),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class lm extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Tl="\\[\\]\\.:\\/",hm=new RegExp("["+Tl+"]","g"),El="[^"+Tl+"]",fm="[^"+Tl.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",El),pm=/(WCOD+)?/.source.replace("WCOD",fm),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",El),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",El),bm=new RegExp("^"+dm+pm+mm+gm+"$"),_m=["material","materials","bones","map"];class xm{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hm,"")}static parseTrackName(e){const t=bm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);_m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=xm;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Lu=new Ie;class vm{constructor(e,t,n=0,i=1/0){this.ray=new ii(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new pl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lu),this}intersectObject(e,t=!0,n=[]){return Xc(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Xc(e[i],this,n,t);return n.sort(Du),n}}function Du(s,e){return s.distance-e.distance}function Xc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Xc(r[a],e,t,!0)}}const Uu=new P,ta=new P,ss=new P,rs=new P,Ro=new P,ym=new P,Mm=new P;class Bn{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Uu.subVectors(e,this.start),ta.subVectors(this.end,this.start);const n=ta.dot(ta);let r=ta.dot(Uu)/n;return t&&(r=ke(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=ym,n=Mm){const i=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,u=e.end;ss.subVectors(l,o),rs.subVectors(u,c),Ro.subVectors(o,c);const h=ss.dot(ss),f=rs.dot(rs),d=rs.dot(Ro);if(h<=i&&f<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(h<=i)r=0,a=d/f,a=ke(a,0,1);else{const g=ss.dot(Ro);if(f<=i)a=0,r=ke(-g/h,0,1);else{const b=ss.dot(rs),m=h*f-b*b;m!==0?r=ke((b*d-g*f)/m,0,1):r=0,a=(b*r+d)/f,a<0?(a=0,r=ke(-g/h,0,1)):a>1&&(a=1,r=ke((b-g)/h,0,1))}}return t.copy(o).add(ss.multiplyScalar(r)),n.copy(c).add(rs.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Fu(s,e,t,n){const i=Sm(n);switch(t){case zh:return s*e;case ll:return s*e/i.components*i.byteLength;case Ba:return s*e/i.components*i.byteLength;case Gh:return s*e*2/i.components*i.byteLength;case ul:return s*e*2/i.components*i.byteLength;case Hh:return s*e*3/i.components*i.byteLength;case Gt:return s*e*4/i.components*i.byteLength;case hl:return s*e*4/i.components*i.byteLength;case Sa:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ea:case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pc:case gc:return Math.max(s,16)*Math.max(e,8)/4;case dc:case mc:return Math.max(s,8)*Math.max(e,8)/2;case bc:case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Uc:case Fc:case Nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Oc:case Bc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kc:case zc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sm(s){switch(s){case sn:case Nh:return{byteLength:1,components:1};case ur:case Oh:case tn:return{byteLength:2,components:1};case ol:case cl:return{byteLength:2,components:4};case bi:case al:case Nt:return{byteLength:4,components:1};case Bh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tm(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],b=h[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++f,h[f]=b)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const b=h[d];s.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Em=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Om=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$m=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,db=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ib=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Db=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ob=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Em,alphahash_pars_fragment:wm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Im,aomap_pars_fragment:Lm,batching_pars_vertex:Dm,batching_vertex:Um,begin_vertex:Fm,beginnormal_vertex:Nm,bsdfs:Om,iridescence_fragment:Bm,bumpmap_pars_fragment:km,clipping_planes_fragment:zm,clipping_planes_pars_fragment:Hm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:jm,color_vertex:qm,common:Km,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:$m,displacementmap_pars_vertex:Jm,displacementmap_vertex:Zm,emissivemap_fragment:Qm,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:bg,envmap_vertex:og,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:ug,fog_pars_fragment:hg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:dg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:_g,lights_toon_pars_fragment:xg,lights_phong_fragment:vg,lights_phong_pars_fragment:yg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Tg,lights_fragment_maps:Eg,lights_fragment_end:wg,logdepthbuf_fragment:Ag,logdepthbuf_pars_fragment:Rg,logdepthbuf_pars_vertex:Cg,logdepthbuf_vertex:Pg,map_fragment:Ig,map_pars_fragment:Lg,map_particle_fragment:Dg,map_particle_pars_fragment:Ug,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Og,morphcolor_vertex:Bg,morphnormal_vertex:kg,morphtarget_pars_vertex:zg,morphtarget_vertex:Hg,normal_fragment_begin:Gg,normal_fragment_maps:Vg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:jg,normalmap_pars_fragment:qg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Jg,opaque_fragment:Zg,packing:Qg,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:sb,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:ob,shadowmap_vertex:cb,shadowmask_pars_fragment:lb,skinbase_vertex:ub,skinning_pars_vertex:hb,skinning_vertex:fb,skinnormal_vertex:db,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:bb,transmission_fragment:_b,transmission_pars_fragment:xb,uv_pars_fragment:vb,uv_pars_vertex:yb,uv_vertex:Mb,worldpos_vertex:Sb,background_vert:Tb,background_frag:Eb,backgroundCube_vert:wb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:Pb,depth_frag:Ib,distanceRGBA_vert:Lb,distanceRGBA_frag:Db,equirect_vert:Ub,equirect_frag:Fb,linedashed_vert:Nb,linedashed_frag:Ob,meshbasic_vert:Bb,meshbasic_frag:kb,meshlambert_vert:zb,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:Wb,meshnormal_frag:Xb,meshphong_vert:jb,meshphong_frag:qb,meshphysical_vert:Kb,meshphysical_frag:Yb,meshtoon_vert:$b,meshtoon_frag:Jb,points_vert:Zb,points_frag:Qb,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},fe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Un={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Un.physical={uniforms:Ht([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const na={r:0,b:0,g:0},Pi=new Sn,s_=new Ie;function r_(s,e,t,n,i,r,a){const o=new Le(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function b(v){let _=!1;const M=g(v);M===null?p(o,c):M&&M.isColor&&(p(M,1),_=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Oa)?(u===void 0&&(u=new mt(new xr(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Es(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Pi.copy(_.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(s_.makeRotationFromEuler(Pi)),u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,(h!==M||f!==M.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new mt(new Ls(2,2),new zn({name:"BackgroundMaterial",uniforms:Es(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(na,Zh(s)),n.buffers.color.setClear(na.r,na.g,na.b,_,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:b,addToRenderList:m,dispose:x}}function a_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,C,I,D,F){let k=!1;const B=h(D,I,C);r!==B&&(r=B,l(r.object)),k=d(y,D,I,F),k&&g(y,D,I,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,_(y,C,I,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,C,I){const D=I.wireframe===!0;let F=n[y.id];F===void 0&&(F={},n[y.id]=F);let k=F[C.id];k===void 0&&(k={},F[C.id]=k);let B=k[D];return B===void 0&&(B=f(c()),k[D]=B),B}function f(y){const C=[],I=[],D=[];for(let F=0;F<t;F++)C[F]=0,I[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:D,object:y,attributes:{},index:null}}function d(y,C,I,D){const F=r.attributes,k=C.attributes;let B=0;const Y=I.getAttributes();for(const O in Y)if(Y[O].location>=0){const ee=F[O];let ce=k[O];if(ce===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function g(y,C,I,D){const F={},k=C.attributes;let B=0;const Y=I.getAttributes();for(const O in Y)if(Y[O].location>=0){let ee=k[O];ee===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),F[O]=ce,B++}r.attributes=F,r.attributesNum=B,r.index=D}function b(){const y=r.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const I=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;I[y]=1,D[y]===0&&(s.enableVertexAttribArray(y),D[y]=1),F[y]!==C&&(s.vertexAttribDivisor(y,C),F[y]=C)}function x(){const y=r.newAttributes,C=r.enabledAttributes;for(let I=0,D=C.length;I<D;I++)C[I]!==y[I]&&(s.disableVertexAttribArray(I),C[I]=0)}function v(y,C,I,D,F,k,B){B===!0?s.vertexAttribIPointer(y,C,I,F,k):s.vertexAttribPointer(y,C,I,D,F,k)}function _(y,C,I,D){b();const F=D.attributes,k=I.getAttributes(),B=C.defaultAttributeValues;for(const Y in k){const O=k[Y];if(O.location>=0){let K=F[Y];if(K===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const ee=K.normalized,ce=K.itemSize,Me=e.get(K);if(Me===void 0)continue;const ae=Me.buffer,Ce=Me.type,Be=Me.bytesPerElement,q=Ce===s.INT||Ce===s.UNSIGNED_INT||K.gpuType===al;if(K.isInterleavedBufferAttribute){const Z=K.data,be=Z.stride,Ne=K.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<O.locationSize;Se++)p(O.location+Se,Z.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<O.locationSize;Se++)m(O.location+Se);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Se=0;Se<O.locationSize;Se++)v(O.location+Se,ce/O.locationSize,Ce,ee,be*Be,(Ne+ce/O.locationSize*Se)*Be,q)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<O.locationSize;Z++)p(O.location+Z,K.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<O.locationSize;Z++)m(O.location+Z);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let Z=0;Z<O.locationSize;Z++)v(O.location+Z,ce/O.locationSize,Ce,ee,ce*Be,ce/O.locationSize*Z*Be,q)}}else if(B!==void 0){const ee=B[Y];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(O.location,ee);break;case 3:s.vertexAttrib3fv(O.location,ee);break;case 4:s.vertexAttrib4fv(O.location,ee);break;default:s.vertexAttrib1fv(O.location,ee)}}}}x()}function M(){R();for(const y in n){const C=n[y];for(const I in C){const D=C[I];for(const F in D)u(D[F].object),delete D[F];delete C[I]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const I in C){const D=C[I];for(const F in D)u(D[F].object),delete D[F];delete C[I]}delete n[y.id]}function w(y){for(const C in n){const I=n[C];if(I[y.id]===void 0)continue;const D=I[y.id];for(const F in D)u(D[F].object),delete D[F];delete I[y.id]}}function R(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function o_(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b]*f[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function c_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Gt&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==sn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Nt&&!R)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:M,maxSamples:T}}function l_(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Dn,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const x=r?0:n,v=x*4;let _=p.clippingState||null;c.value=_,_=u(g,f,v,d);for(let M=0;M!==v;++M)_[M]=t[M];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=d+b*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==b;++v,_+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function u_(s){let e=new WeakMap;function t(a,o){return o===Ca?a.mapping=ys:o===fc&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ca||o===fc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new sf(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ps=4,Nu=[.125,.215,.35,.446,.526,.582],Bi=20,Co=new ka,Ou=new Le;let Po=null,Io=0,Lo=0,Do=!1;const Ni=(1+Math.sqrt(5))/2,as=1/Ni,Bu=[new P(-Ni,as,0),new P(Ni,as,0),new P(-as,0,Ni),new P(as,0,Ni),new P(0,Ni,-as),new P(0,Ni,as),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],h_=new P;class jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=h_}=r;Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Io,Lo),this._renderer.xr.enabled=Do,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:tn,format:Gt,colorSpace:Bt,depthBuffer:!1},i=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f_(r)),this._blurMaterial=d_(r,e,t)}return i}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,i,r){const c=new Ft(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ou),h.toneMapping=ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const b=new Nn({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new mt(new xr,b);let p=!1;const x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,p=!0):(b.color.copy(Ou),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):_===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const M=this._cubeSize;ia(i,_*M,v>2?M:0,M,M),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ys||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bu[(i-r-1)%Bu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Bi-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):Bi;m>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let x=0;for(let w=0;w<Bi;++w){const R=w/b,S=Math.exp(-R*R/2);p.push(S),w===0?x+=S:w<m&&(x+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const _=this._sizeLods[i],M=3*_*(i>v-ps?i-v+ps:0),T=4*(this._cubeSize-_);ia(t,M,T,3*_,2*_),c.setRenderTarget(t),c.render(h,Co)}}function f_(s){const e=[],t=[],n=[];let i=s;const r=s-ps+1+Nu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ps?c=Nu[a-s+ps-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,b=3,m=2,p=1,x=new Float32Array(b*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,R=T>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];x.set(S,b*g*T),v.set(f,m*g*T);const y=[T,T,T,T,T,T];_.set(y,p*g*T)}const M=new At;M.setAttribute("position",new gt(x,b)),M.setAttribute("uv",new gt(v,m)),M.setAttribute("faceIndex",new gt(_,p)),e.push(M),i>ps&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ku(s,e,t){const n=new kn(s,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function d_(s,e,t){const n=new Float32Array(Bi),i=new P(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function zu(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Hu(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ca||c===fc,u=c===ys||c===Ms;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new jc(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new jc(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function m_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&br("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function g_(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function l(h){const f=[],d=h.index,g=h.attributes.position;let b=0;if(d!==null){const x=d.array;b=d.version;for(let v=0,_=x.length;v<_;v+=3){const M=x[v+0],T=x[v+1],w=x[v+2];f.push(M,T,T,w,w,M)}}else if(g!==void 0){const x=g.array;b=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){const M=v+0,T=v+1,w=v+2;f.push(M,T,T,w,w,M)}}else return;const m=new(jh(f)?Jh:$h)(f,1);m.version=b;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function b_(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*a,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,b,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*b[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function __(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function x_(s,e,t){const n=new WeakMap,i=new $e;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let _=o.attributes.position.count*v,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*M*4*h),w=new qh(T,_,M,h);w.type=Nt,w.needsUpdate=!0;const R=v*4;for(let y=0;y<h;y++){const C=m[y],I=p[y],D=x[y],F=_*M*4*y;for(let k=0;k<C.count;k++){const B=k*R;d===!0&&(i.fromBufferAttribute(C,k),T[F+B+0]=i.x,T[F+B+1]=i.y,T[F+B+2]=i.z,T[F+B+3]=0),g===!0&&(i.fromBufferAttribute(I,k),T[F+B+4]=i.x,T[F+B+5]=i.y,T[F+B+6]=i.z,T[F+B+7]=0),b===!0&&(i.fromBufferAttribute(D,k),T[F+B+8]=i.x,T[F+B+9]=i.y,T[F+B+10]=i.z,T[F+B+11]=D.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new ze(_,M)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<l.length;b++)d+=l[b];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function v_(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const bf=new yt,Gu=new lf(1,1),_f=new qh,xf=new Kh,vf=new nf,Vu=[],Wu=[],Xu=new Float32Array(16),ju=new Float32Array(9),qu=new Float32Array(4);function Fs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function za(s,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function y_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function M_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function S_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function E_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;qu.set(n),s.uniformMatrix2fv(this.addr,!1,qu),St(t,n)}}function w_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ju.set(n),s.uniformMatrix3fv(this.addr,!1,ju),St(t,n)}}function A_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Xu.set(n),s.uniformMatrix4fv(this.addr,!1,Xu),St(t,n)}}function R_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),St(t,e)}}function P_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),St(t,e)}}function I_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),St(t,e)}}function L_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function D_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),St(t,e)}}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),St(t,e)}}function F_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),St(t,e)}}function N_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Gu.compareFunction=Xh,r=Gu):r=bf,t.setTexture2D(e||r,i)}function O_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xf,i)}function B_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vf,i)}function k_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_f,i)}function z_(s){switch(s){case 5126:return y_;case 35664:return M_;case 35665:return S_;case 35666:return T_;case 35674:return E_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return D_;case 36295:return U_;case 36296:return F_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return k_}}function H_(s,e){s.uniform1fv(this.addr,e)}function G_(s,e){const t=Fs(e,this.size,2);s.uniform2fv(this.addr,t)}function V_(s,e){const t=Fs(e,this.size,3);s.uniform3fv(this.addr,t)}function W_(s,e){const t=Fs(e,this.size,4);s.uniform4fv(this.addr,t)}function X_(s,e){const t=Fs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function j_(s,e){const t=Fs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function q_(s,e){const t=Fs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K_(s,e){s.uniform1iv(this.addr,e)}function Y_(s,e){s.uniform2iv(this.addr,e)}function $_(s,e){s.uniform3iv(this.addr,e)}function J_(s,e){s.uniform4iv(this.addr,e)}function Z_(s,e){s.uniform1uiv(this.addr,e)}function Q_(s,e){s.uniform2uiv(this.addr,e)}function ex(s,e){s.uniform3uiv(this.addr,e)}function tx(s,e){s.uniform4uiv(this.addr,e)}function nx(s,e,t){const n=this.cache,i=e.length,r=za(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||bf,r[a])}function ix(s,e,t){const n=this.cache,i=e.length,r=za(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xf,r[a])}function sx(s,e,t){const n=this.cache,i=e.length,r=za(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vf,r[a])}function rx(s,e,t){const n=this.cache,i=e.length,r=za(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_f,r[a])}function ax(s){switch(s){case 5126:return H_;case 35664:return G_;case 35665:return V_;case 35666:return W_;case 35674:return X_;case 35675:return j_;case 35676:return q_;case 5124:case 35670:return K_;case 35667:case 35671:return Y_;case 35668:case 35672:return $_;case 35669:case 35673:return J_;case 5125:return Z_;case 36294:return Q_;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}class ox{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}}class cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ax(t.type)}}class lx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function Ku(s,e){s.seq.push(e),s.map[e.id]=e}function ux(s,e,t){const n=s.name,i=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),a=Uo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ku(t,l===void 0?new ox(o,s,e):new cx(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new lx(o),Ku(t,h)),t=h}}}class Aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ux(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Yu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const hx=37297;let fx=0;function dx(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $u=new Ve;function px(s){Ke._getMatrix($u,Ke.workingColorSpace,s);const e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Ia:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ju(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dx(s.getShaderSource(e),o)}else return r}function mx(s,e){const t=px(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gx(s,e){let t;switch(e){case pd:t="Linear";break;case md:t="Reinhard";break;case gd:t="Cineon";break;case bd:t="ACESFilmic";break;case xd:t="AgX";break;case vd:t="Neutral";break;case _d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sa=new P;function bx(){Ke.getLuminanceCoefficients(sa);const s=sa.x.toFixed(4),e=sa.y.toFixed(4),t=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _x(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function xx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vx(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function nr(s){return s!==""}function Zu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(s){return s.replace(yx,Sx)}const Mx=new Map;function Sx(s,e){let t=We[e];if(t===void 0){const n=Mx.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qc(t)}const Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(s){return s.replace(Tx,Ex)}function Ex(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function th(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ax(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function Cx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case fd:e="ENVMAP_BLENDING_MIX";break;case dd:e="ENVMAP_BLENDING_ADD";break}return e}function Px(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ix(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=wx(t),l=Ax(t),u=Rx(t),h=Cx(t),f=Px(t),d=_x(t),g=xx(r),b=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(m=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?We.tonemapping_pars_fragment:"",t.toneMapping!==ti?gx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,mx("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=qc(a),a=Zu(a,t),a=Qu(a,t),o=qc(o),o=Zu(o,t),o=Qu(o,t),a=eh(a),o=eh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+m+a,_=x+p+o,M=Yu(i,i.VERTEX_SHADER,v),T=Yu(i,i.FRAGMENT_SHADER,_);i.attachShader(b,M),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(C){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(b)||"",D=i.getShaderInfoLog(M)||"",F=i.getShaderInfoLog(T)||"",k=I.trim(),B=D.trim(),Y=F.trim();let O=!0,K=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,M,T);else{const ee=Ju(i,M,"vertex"),ce=Ju(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+ee+`
`+ce)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(B===""||Y==="")&&(K=!1);K&&(C.diagnostics={runnable:O,programLog:k,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(M),i.deleteShader(T),R=new Aa(i,b),S=vx(i,b)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,hx)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=T,this}let Lx=0;class Dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ux(e),t.set(e,n)),n}}class Ux{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}}function Fx(s,e,t,n,i,r,a){const o=new pl,c=new Dx,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,I,D){const F=I.fog,k=D.geometry,B=S.isMeshStandardMaterial?I.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),O=Y&&Y.mapping===Oa?Y.image.height:null,K=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const ee=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=ee!==void 0?ee.length:0;let Me=0;k.morphAttributes.position!==void 0&&(Me=1),k.morphAttributes.normal!==void 0&&(Me=2),k.morphAttributes.color!==void 0&&(Me=3);let ae,Ce,Be,q;if(K){const Ze=Un[K];ae=Ze.vertexShader,Ce=Ze.fragmentShader}else ae=S.vertexShader,Ce=S.fragmentShader,c.update(S),Be=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);const Z=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,Se=D.isBatchedMesh===!0,Xe=!!S.map,Tt=!!S.matcap,U=!!Y,it=!!S.aoMap,J=!!S.lightMap,le=!!S.bumpMap,ne=!!S.normalMap,Te=!!S.displacementMap,he=!!S.emissiveMap,Ee=!!S.metalnessMap,Ye=!!S.roughnessMap,at=S.anisotropy>0,L=S.clearcoat>0,E=S.dispersion>0,G=S.iridescence>0,X=S.sheen>0,Q=S.transmission>0,j=at&&!!S.anisotropyMap,Re=L&&!!S.clearcoatMap,oe=L&&!!S.clearcoatNormalMap,ye=L&&!!S.clearcoatRoughnessMap,we=G&&!!S.iridescenceMap,se=G&&!!S.iridescenceThicknessMap,me=X&&!!S.sheenColorMap,Fe=X&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,de=!!S.specularColorMap,Ge=!!S.specularIntensityMap,N=Q&&!!S.transmissionMap,re=Q&&!!S.thicknessMap,ue=!!S.gradientMap,_e=!!S.alphaMap,te=S.alphaTest>0,$=!!S.alphaHash,ve=!!S.extensions;let He=ti;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(He=s.toneMapping);const rt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:Ce,defines:S.defines,customVertexShaderID:Be,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Se,batchingColor:Se&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Bt,alphaToCoverage:!!S.alphaToCoverage,map:Xe,matcap:Tt,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:O,aoMap:it,lightMap:J,bumpMap:le,normalMap:ne,displacementMap:f&&Te,emissiveMap:he,normalMapObjectSpace:ne&&S.normalMapType===wd,normalMapTangentSpace:ne&&S.normalMapType===Wh,metalnessMap:Ee,roughnessMap:Ye,anisotropy:at,anisotropyMap:j,clearcoat:L,clearcoatMap:Re,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:E,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:se,sheen:X,sheenColorMap:me,sheenRoughnessMap:Fe,specularMap:Ae,specularColorMap:de,specularIntensityMap:Ge,transmission:Q,transmissionMap:N,thicknessMap:re,gradientMap:ue,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:_e,alphaTest:te,alphaHash:$,combine:S.combine,mapUv:Xe&&b(S.map.channel),aoMapUv:it&&b(S.aoMap.channel),lightMapUv:J&&b(S.lightMap.channel),bumpMapUv:le&&b(S.bumpMap.channel),normalMapUv:ne&&b(S.normalMap.channel),displacementMapUv:Te&&b(S.displacementMap.channel),emissiveMapUv:he&&b(S.emissiveMap.channel),metalnessMapUv:Ee&&b(S.metalnessMap.channel),roughnessMapUv:Ye&&b(S.roughnessMap.channel),anisotropyMapUv:j&&b(S.anisotropyMap.channel),clearcoatMapUv:Re&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(S.sheenRoughnessMap.channel),specularMapUv:Ae&&b(S.specularMap.channel),specularColorMapUv:de&&b(S.specularColorMap.channel),specularIntensityMapUv:Ge&&b(S.specularIntensityMap.channel),transmissionMapUv:N&&b(S.transmissionMap.channel),thicknessMapUv:re&&b(S.thicknessMap.channel),alphaMapUv:_e&&b(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ne||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Xe||_e),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:Xe&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xt,flipSided:S.side===Vt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(y,S),v(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const y=g[S.type];let C;if(y){const I=Un[y];C=Qh.clone(I.uniforms)}else C=S.uniforms;return C}function M(S,y){let C;for(let I=0,D=u.length;I<D;I++){const F=u[I];if(F.cacheKey===y){C=F,++C.usedTimes;break}}return C===void 0&&(C=new Ix(s,y,S,r),u.push(C)),C}function T(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:R}}function Nx(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ox(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ih(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,b,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function o(h,f,d,g,b,m){const p=a(h,f,d,g,b,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,b,m){const p=a(h,f,d,g,b,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Ox),n.length>1&&n.sort(f||nh),i.length>1&&i.sort(f||nh)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function Bx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ih,s.set(n,[a])):i>=r.length?(a=new ih,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function kx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function zx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hx=0;function Gx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vx(s){const e=new kx,t=zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new Ie,a=new Ie;function o(l){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,b=0,m=0,p=0,x=0,v=0,_=0,M=0,T=0,w=0;l.sort(Gx);for(let S=0,y=l.length;S<y;S++){const C=l[S],I=C.color,D=C.intensity,F=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*D,h+=I.g*D,f+=I.b*D;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],D);w++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,O=t.get(C);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=k,n.directionalShadowMatrix[d]=C.shadow.matrix,x++}n.directional[d]=B,d++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(I).multiplyScalar(D),B.distance=F,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[b]=B;const Y=C.shadow;if(C.map&&(n.spotLightMap[M]=C.map,M++,Y.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[b]=Y.matrix,C.castShadow){const O=t.get(C);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,n.spotShadow[b]=O,n.spotShadowMap[b]=k,_++}b++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(I).multiplyScalar(D),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const Y=C.shadow,O=t.get(C);O.shadowIntensity=Y.intensity,O.shadowBias=Y.bias,O.shadowNormalBias=Y.normalBias,O.shadowRadius=Y.radius,O.shadowMapSize=Y.mapSize,O.shadowCameraNear=Y.camera.near,O.shadowCameraFar=Y.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=B,g++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(D),B.groundColor.copy(C.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==b||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==v||R.numSpotShadows!==_||R.numSpotMaps!==M||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=b,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=v,R.numSpotShadows=_,R.numSpotMaps=M,R.numLightProbes=w,n.version=Hx++)}function c(l,u){let h=0,f=0,d=0,g=0,b=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const v=l[p];if(v.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(v.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function sh(s){const e=new Vx(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Wx(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new sh(s),e.set(i,[o])):r>=a.length?(o=new sh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qx(s,e,t){let n=new vr;const i=new ze,r=new ze,a=new $e,o=new Gp({depthPacking:Ed}),c=new Vp,l={},u=t.maxTextureSize,h={[dn]:Vt,[Vt]:dn,[xt]:xt},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Xx,fragmentShader:jx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let p=this.type;this.render=function(T,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),I=s.state;I.setBlending(gi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=p!==Yn&&this.type===Yn,F=p===Yn&&this.type!==Yn;for(let k=0,B=T.length;k<B;k++){const Y=T[k],O=Y.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const K=O.getFrameExtents();if(i.multiply(K),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/K.x),i.x=r.x*K.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/K.y),i.y=r.y*K.y,O.mapSize.y=r.y)),O.map===null||D===!0||F===!0){const ce=this.type!==Yn?{minFilter:Wt,magFilter:Wt}:{};O.map!==null&&O.map.dispose(),O.map=new kn(i.x,i.y,ce),O.map.texture.name=Y.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const ee=O.getViewportCount();for(let ce=0;ce<ee;ce++){const Me=O.getViewport(ce);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),I.viewport(a),O.updateMatrices(Y,ce),n=O.getFrustum(),_(w,R,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===Yn&&x(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,C)};function x(T,w){const R=e.update(b);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new kn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,R,f,b,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,R,d,b,null)}function v(T,w,R,S){let y=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=y.uuid,D=w.uuid;let F=l[I];F===void 0&&(F={},l[I]=F);let k=F[D];k===void 0&&(k=y.clone(),F[D]=k,w.addEventListener("dispose",M)),y=k}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Yn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=s.properties.get(y);I.light=R}return y}function _(T,w,R,S,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const D=e.update(T),F=T.material;if(Array.isArray(F)){const k=D.groups;for(let B=0,Y=k.length;B<Y;B++){const O=k[B],K=F[O.materialIndex];if(K&&K.visible){const ee=v(T,K,S,y);T.onBeforeShadow(s,T,w,R,D,ee,O),s.renderBufferDirect(R,null,D,ee,T,O),T.onAfterShadow(s,T,w,R,D,ee,O)}}}else if(F.visible){const k=v(T,F,S,y);T.onBeforeShadow(s,T,w,R,D,k,null),s.renderBufferDirect(R,null,D,k,T,null),T.onAfterShadow(s,T,w,R,D,k,null)}}const I=T.children;for(let D=0,F=I.length;D<F;D++)_(I[D],w,R,S,y)}function M(T){T.target.removeEventListener("dispose",M);for(const R in l){const S=l[R],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Kx={[rc]:ac,[oc]:uc,[cc]:hc,[vs]:lc,[ac]:rc,[uc]:oc,[hc]:cc,[lc]:vs};function Yx(s,e){function t(){let N=!1;const re=new $e;let ue=null;const _e=new $e(0,0,0,0);return{setMask:function(te){ue!==te&&!N&&(s.colorMask(te,te,te,te),ue=te)},setLocked:function(te){N=te},setClear:function(te,$,ve,He,rt){rt===!0&&(te*=He,$*=He,ve*=He),re.set(te,$,ve,He),_e.equals(re)===!1&&(s.clearColor(te,$,ve,He),_e.copy(re))},reset:function(){N=!1,ue=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,re=!1,ue=null,_e=null,te=null;return{setReversed:function($){if(re!==$){const ve=e.get("EXT_clip_control");$?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),re=$;const He=te;te=null,this.setClear(He)}},getReversed:function(){return re},setTest:function($){$?Z(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function($){ue!==$&&!N&&(s.depthMask($),ue=$)},setFunc:function($){if(re&&($=Kx[$]),_e!==$){switch($){case rc:s.depthFunc(s.NEVER);break;case ac:s.depthFunc(s.ALWAYS);break;case oc:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case cc:s.depthFunc(s.EQUAL);break;case lc:s.depthFunc(s.GEQUAL);break;case uc:s.depthFunc(s.GREATER);break;case hc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=$}},setLocked:function($){N=$},setClear:function($){te!==$&&(re&&($=1-$),s.clearDepth($),te=$)},reset:function(){N=!1,ue=null,_e=null,te=null,re=!1}}}function i(){let N=!1,re=null,ue=null,_e=null,te=null,$=null,ve=null,He=null,rt=null;return{setTest:function(Ze){N||(Ze?Z(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!N&&(s.stencilMask(Ze),re=Ze)},setFunc:function(Ze,Gn,An){(ue!==Ze||_e!==Gn||te!==An)&&(s.stencilFunc(Ze,Gn,An),ue=Ze,_e=Gn,te=An)},setOp:function(Ze,Gn,An){($!==Ze||ve!==Gn||He!==An)&&(s.stencilOp(Ze,Gn,An),$=Ze,ve=Gn,He=An)},setLocked:function(Ze){N=Ze},setClear:function(Ze){rt!==Ze&&(s.clearStencil(Ze),rt=Ze)},reset:function(){N=!1,re=null,ue=null,_e=null,te=null,$=null,ve=null,He=null,rt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,b=!1,m=null,p=null,x=null,v=null,_=null,M=null,T=null,w=new Le(0,0,0),R=0,S=!1,y=null,C=null,I=null,D=null,F=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Y=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=Y>=1):O.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=Y>=2);let K=null,ee={};const ce=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),ae=new $e().fromArray(ce),Ce=new $e().fromArray(Me);function Be(N,re,ue,_e){const te=new Uint8Array(4),$=s.createTexture();s.bindTexture(N,$),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<ue;ve++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(re+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return $}const q={};q[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(s.DEPTH_TEST),a.setFunc(vs),le(!1),ne(Bl),Z(s.CULL_FACE),it(gi);function Z(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function be(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Ne(N,re){return h[N]!==re?(s.bindFramebuffer(N,re),h[N]=re,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=re),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Se(N,re){let ue=d,_e=!1;if(N){ue=f.get(re),ue===void 0&&(ue=[],f.set(re,ue));const te=N.textures;if(ue.length!==te.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let $=0,ve=te.length;$<ve;$++)ue[$]=s.COLOR_ATTACHMENT0+$;ue.length=te.length,_e=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ue)}function Xe(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Tt={[Oi]:s.FUNC_ADD,[Yf]:s.FUNC_SUBTRACT,[$f]:s.FUNC_REVERSE_SUBTRACT};Tt[Jf]=s.MIN,Tt[Zf]=s.MAX;const U={[Qf]:s.ZERO,[ed]:s.ONE,[td]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[od]:s.SRC_ALPHA_SATURATE,[rd]:s.DST_COLOR,[id]:s.DST_ALPHA,[nd]:s.ONE_MINUS_SRC_COLOR,[sc]:s.ONE_MINUS_SRC_ALPHA,[ad]:s.ONE_MINUS_DST_COLOR,[sd]:s.ONE_MINUS_DST_ALPHA,[cd]:s.CONSTANT_COLOR,[ld]:s.ONE_MINUS_CONSTANT_COLOR,[ud]:s.CONSTANT_ALPHA,[hd]:s.ONE_MINUS_CONSTANT_ALPHA};function it(N,re,ue,_e,te,$,ve,He,rt,Ze){if(N===gi){b===!0&&(be(s.BLEND),b=!1);return}if(b===!1&&(Z(s.BLEND),b=!0),N!==Kf){if(N!==m||Ze!==S){if((p!==Oi||_!==Oi)&&(s.blendEquation(s.FUNC_ADD),p=Oi,_=Oi),Ze)switch(N){case gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFunc(s.ONE,s.ONE);break;case zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,v=null,M=null,T=null,w.set(0,0,0),R=0,m=N,S=Ze}return}te=te||re,$=$||ue,ve=ve||_e,(re!==p||te!==_)&&(s.blendEquationSeparate(Tt[re],Tt[te]),p=re,_=te),(ue!==x||_e!==v||$!==M||ve!==T)&&(s.blendFuncSeparate(U[ue],U[_e],U[$],U[ve]),x=ue,v=_e,M=$,T=ve),(He.equals(w)===!1||rt!==R)&&(s.blendColor(He.r,He.g,He.b,rt),w.copy(He),R=rt),m=N,S=!1}function J(N,re){N.side===xt?be(s.CULL_FACE):Z(s.CULL_FACE);let ue=N.side===Vt;re&&(ue=!ue),le(ue),N.blending===gs&&N.transparent===!1?it(gi):it(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),he(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(N){y!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),y=N)}function ne(N){N!==jf?(Z(s.CULL_FACE),N!==C&&(N===Bl?s.cullFace(s.BACK):N===qf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),C=N}function Te(N){N!==I&&(B&&s.lineWidth(N),I=N)}function he(N,re,ue){N?(Z(s.POLYGON_OFFSET_FILL),(D!==re||F!==ue)&&(s.polygonOffset(re,ue),D=re,F=ue)):be(s.POLYGON_OFFSET_FILL)}function Ee(N){N?Z(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Ye(N){N===void 0&&(N=s.TEXTURE0+k-1),K!==N&&(s.activeTexture(N),K=N)}function at(N,re,ue){ue===void 0&&(K===null?ue=s.TEXTURE0+k-1:ue=K);let _e=ee[ue];_e===void 0&&(_e={type:void 0,texture:void 0},ee[ue]=_e),(_e.type!==N||_e.texture!==re)&&(K!==ue&&(s.activeTexture(ue),K=ue),s.bindTexture(N,re||q[N]),_e.type=N,_e.texture=re)}function L(){const N=ee[K];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(N){ae.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function Fe(N){Ce.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function Ae(N,re){let ue=l.get(re);ue===void 0&&(ue=new WeakMap,l.set(re,ue));let _e=ue.get(N);_e===void 0&&(_e=s.getUniformBlockIndex(re,N.name),ue.set(N,_e))}function de(N,re){const _e=l.get(re).get(N);c.get(re)!==_e&&(s.uniformBlockBinding(re,_e,N.__bindingPointIndex),c.set(re,_e))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},K=null,ee={},h={},f=new WeakMap,d=[],g=null,b=!1,m=null,p=null,x=null,v=null,_=null,M=null,T=null,w=new Le(0,0,0),R=0,S=!1,y=null,C=null,I=null,D=null,F=null,ae.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:be,bindFramebuffer:Ne,drawBuffers:Se,useProgram:Xe,setBlending:it,setMaterial:J,setFlipSided:le,setCullFace:ne,setLineWidth:Te,setPolygonOffset:he,setScissorTest:Ee,activeTexture:Ye,bindTexture:at,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:we,texImage3D:se,updateUBOMapping:Ae,uniformBlockBinding:de,texStorage2D:oe,texStorage3D:ye,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:Re,scissor:me,viewport:Fe,reset:Ge}}function $x(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ze,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return d?new OffscreenCanvas(L,E):gr("canvas")}function b(L,E,G){let X=1;const Q=at(L);if((Q.width>G||Q.height>G)&&(X=G/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(X*Q.width),Re=Math.floor(X*Q.height);h===void 0&&(h=g(j,Re));const oe=E?g(j,Re):h;return oe.width=j,oe.height=Re,oe.getContext("2d").drawImage(L,0,0,j,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Re+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(L,E,G,X,Q=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=E;if(E===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),E===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),E===s.RGBA){const Re=Q?Ia:Ke.getTransfer(X);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=Re===nt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(L,E){let G;return L?E===null||E===bi||E===hr?G=s.DEPTH24_STENCIL8:E===Nt?G=s.DEPTH32F_STENCIL8:E===ur&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===bi||E===hr?G=s.DEPTH_COMPONENT24:E===Nt?G=s.DEPTH_COMPONENT32F:E===ur&&(G=s.DEPTH_COMPONENT16),G}function M(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Wt&&L.minFilter!==vt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){const E=L.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&u.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),y(E)}function R(L){const E=n.get(L);if(E.__webglInit===void 0)return;const G=L.source,X=f.get(G);if(X){const Q=X[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(L),Object.keys(X).length===0&&f.delete(G)}n.remove(L)}function S(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const G=L.source,X=f.get(G);delete X[E.__cacheKey],a.memory.textures--}function y(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(E.__webglFramebuffer[X]))for(let Q=0;Q<E.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[X]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[X])}else{if(Array.isArray(E.__webglFramebuffer))for(let X=0;X<E.__webglFramebuffer.length;X++)s.deleteFramebuffer(E.__webglFramebuffer[X]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let X=0;X<E.__webglColorRenderbuffer.length;X++)E.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[X]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=L.textures;for(let X=0,Q=G.length;X<Q;X++){const j=n.get(G[X]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[X])}n.remove(L)}let C=0;function I(){C=0}function D(){const L=C;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),C+=1,L}function F(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function k(L,E){const G=n.get(L);if(L.isVideoTexture&&Ee(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const X=L.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,L,E);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function B(L,E){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){q(G,L,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function Y(L,E){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){q(G,L,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function O(L,E){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Z(G,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const K={[Ss]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},ee={[Wt]:s.NEAREST,[Fh]:s.NEAREST_MIPMAP_NEAREST,[tr]:s.NEAREST_MIPMAP_LINEAR,[vt]:s.LINEAR,[Ma]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},ce={[Ad]:s.NEVER,[Dd]:s.ALWAYS,[Rd]:s.LESS,[Xh]:s.LEQUAL,[Cd]:s.EQUAL,[Ld]:s.GEQUAL,[Pd]:s.GREATER,[Id]:s.NOTEQUAL};function Me(L,E){if(E.type===Nt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===vt||E.magFilter===Ma||E.magFilter===tr||E.magFilter===Fn||E.minFilter===vt||E.minFilter===Ma||E.minFilter===tr||E.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,K[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ee[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Wt||E.minFilter!==tr&&E.minFilter!==Fn||E.type===Nt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ae(L,E){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));const X=E.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const j=F(E);if(j!==L.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[j].usedTimes++;const Re=Q[L.__cacheKey];Re!==void 0&&(Q[L.__cacheKey].usedTimes--,Re.usedTimes===0&&S(E)),L.__cacheKey=j,L.__webglTexture=Q[j].texture}return G}function Ce(L,E,G){return Math.floor(Math.floor(L/G)/E)}function Be(L,E,G,X){const j=L.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,X,E.data);else{j.sort((se,me)=>se.start-me.start);let Re=0;for(let se=1;se<j.length;se++){const me=j[Re],Fe=j[se],Ae=me.start+me.count,de=Ce(Fe.start,E.width,4),Ge=Ce(me.start,E.width,4);Fe.start<=Ae+1&&de===Ge&&Ce(Fe.start+Fe.count-1,E.width,4)===de?me.count=Math.max(me.count,Fe.start+Fe.count-me.start):(++Re,j[Re]=Fe)}j.length=Re+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),ye=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let se=0,me=j.length;se<me;se++){const Fe=j[se],Ae=Math.floor(Fe.start/4),de=Math.ceil(Fe.count/4),Ge=Ae%E.width,N=Math.floor(Ae/E.width),re=de,ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ge,N,re,ue,G,X,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function q(L,E,G){let X=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(X=s.TEXTURE_3D);const Q=ae(L,E),j=E.source;t.bindTexture(X,L.__webglTexture,s.TEXTURE0+G);const Re=n.get(j);if(j.version!==Re.__version||Q===!0){t.activeTexture(s.TEXTURE0+G);const oe=Ke.getPrimaries(Ke.workingColorSpace),ye=E.colorSpace===Jn?null:Ke.getPrimaries(E.colorSpace),we=E.colorSpace===Jn||oe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=b(E.image,!1,i.maxTextureSize);se=Ye(E,se);const me=r.convert(E.format,E.colorSpace),Fe=r.convert(E.type);let Ae=v(E.internalFormat,me,Fe,E.colorSpace,E.isVideoTexture);Me(X,E);let de;const Ge=E.mipmaps,N=E.isVideoTexture!==!0,re=Re.__version===void 0||Q===!0,ue=j.dataReady,_e=M(E,se);if(E.isDepthTexture)Ae=_(E.format===dr,E.type),re&&(N?t.texStorage2D(s.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Ae,se.width,se.height,0,me,Fe,null));else if(E.isDataTexture)if(Ge.length>0){N&&re&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)de=Ge[te],N?ue&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,me,Fe,de.data):t.texImage2D(s.TEXTURE_2D,te,Ae,de.width,de.height,0,me,Fe,de.data);E.generateMipmaps=!1}else N?(re&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,se.width,se.height),ue&&Be(E,se,me,Fe)):t.texImage2D(s.TEXTURE_2D,0,Ae,se.width,se.height,0,me,Fe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ae,Ge[0].width,Ge[0].height,se.depth);for(let te=0,$=Ge.length;te<$;te++)if(de=Ge[te],E.format!==Gt)if(me!==null)if(N){if(ue)if(E.layerUpdates.size>0){const ve=Fu(de.width,de.height,E.format,E.type);for(const He of E.layerUpdates){const rt=de.data.subarray(He*ve/de.data.BYTES_PER_ELEMENT,(He+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,He,de.width,de.height,1,me,rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,se.depth,me,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Ae,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,se.depth,me,Fe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Ae,de.width,de.height,se.depth,0,me,Fe,de.data)}else{N&&re&&t.texStorage2D(s.TEXTURE_2D,_e,Ae,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)de=Ge[te],E.format!==Gt?me!==null?N?ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ue&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,me,Fe,de.data):t.texImage2D(s.TEXTURE_2D,te,Ae,de.width,de.height,0,me,Fe,de.data)}else if(E.isDataArrayTexture)if(N){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Ae,se.width,se.height,se.depth),ue)if(E.layerUpdates.size>0){const te=Fu(se.width,se.height,E.format,E.type);for(const $ of E.layerUpdates){const ve=se.data.subarray($*te/se.data.BYTES_PER_ELEMENT,($+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,se.width,se.height,1,me,Fe,ve)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,Fe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,me,Fe,se.data);else if(E.isData3DTexture)N?(re&&t.texStorage3D(s.TEXTURE_3D,_e,Ae,se.width,se.height,se.depth),ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,Fe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,me,Fe,se.data);else if(E.isFramebufferTexture){if(re)if(N)t.texStorage2D(s.TEXTURE_2D,_e,Ae,se.width,se.height);else{let te=se.width,$=se.height;for(let ve=0;ve<_e;ve++)t.texImage2D(s.TEXTURE_2D,ve,Ae,te,$,0,me,Fe,null),te>>=1,$>>=1}}else if(Ge.length>0){if(N&&re){const te=at(Ge[0]);t.texStorage2D(s.TEXTURE_2D,_e,Ae,te.width,te.height)}for(let te=0,$=Ge.length;te<$;te++)de=Ge[te],N?ue&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,me,Fe,de):t.texImage2D(s.TEXTURE_2D,te,Ae,me,Fe,de);E.generateMipmaps=!1}else if(N){if(re){const te=at(se);t.texStorage2D(s.TEXTURE_2D,_e,Ae,te.width,te.height)}ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Fe,se)}else t.texImage2D(s.TEXTURE_2D,0,Ae,me,Fe,se);m(E)&&p(X),Re.__version=j.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Z(L,E,G){if(E.image.length!==6)return;const X=ae(L,E),Q=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const j=n.get(Q);if(Q.version!==j.__version||X===!0){t.activeTexture(s.TEXTURE0+G);const Re=Ke.getPrimaries(Ke.workingColorSpace),oe=E.colorSpace===Jn?null:Ke.getPrimaries(E.colorSpace),ye=E.colorSpace===Jn||Re===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,me=[];for(let $=0;$<6;$++)!we&&!se?me[$]=b(E.image[$],!0,i.maxCubemapSize):me[$]=se?E.image[$].image:E.image[$],me[$]=Ye(E,me[$]);const Fe=me[0],Ae=r.convert(E.format,E.colorSpace),de=r.convert(E.type),Ge=v(E.internalFormat,Ae,de,E.colorSpace),N=E.isVideoTexture!==!0,re=j.__version===void 0||X===!0,ue=Q.dataReady;let _e=M(E,Fe);Me(s.TEXTURE_CUBE_MAP,E);let te;if(we){N&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Ge,Fe.width,Fe.height);for(let $=0;$<6;$++){te=me[$].mipmaps;for(let ve=0;ve<te.length;ve++){const He=te[ve];E.format!==Gt?Ae!==null?N?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,He.width,He.height,Ae,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,0,0,He.width,He.height,Ae,de,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve,Ge,He.width,He.height,0,Ae,de,He.data)}}}else{if(te=E.mipmaps,N&&re){te.length>0&&_e++;const $=at(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(se){N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,me[$].width,me[$].height,Ae,de,me[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,me[$].width,me[$].height,0,Ae,de,me[$].data);for(let ve=0;ve<te.length;ve++){const rt=te[ve].image[$].image;N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,rt.width,rt.height,Ae,de,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ge,rt.width,rt.height,0,Ae,de,rt.data)}}else{N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae,de,me[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Ae,de,me[$]);for(let ve=0;ve<te.length;ve++){const He=te[ve];N?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,0,0,Ae,de,He.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ve+1,Ge,Ae,de,He.image[$])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function be(L,E,G,X,Q,j){const Re=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),ye=v(G.internalFormat,Re,oe,G.colorSpace),we=n.get(E),se=n.get(G);if(se.__renderTarget=E,!we.__hasExternalTextures){const me=Math.max(1,E.width>>j),Fe=Math.max(1,E.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,ye,me,Fe,E.depth,0,Re,oe,null):t.texImage2D(Q,j,ye,me,Fe,0,Re,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),he(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,se.__webglTexture,0,Te(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(L,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const X=E.depthTexture,Q=X&&X.isDepthTexture?X.type:null,j=_(E.stencilBuffer,Q),Re=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Te(E);he(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,j,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,j,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,j,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,L)}else{const X=E.textures;for(let Q=0;Q<X.length;Q++){const j=X[Q],Re=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),ye=v(j.internalFormat,Re,oe,j.colorSpace),we=Te(E);G&&he(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,ye,E.width,E.height):he(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,ye,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ye,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(E.depthTexture);X.__renderTarget=E,(!X.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const Q=X.__webglTexture,j=Te(E);if(E.depthTexture.format===fr)he(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(E.depthTexture.format===dr)he(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Xe(L){const E=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const X=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),X){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=X}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const X=L.texture.mipmaps;X&&X.length>0?Se(E.__webglFramebuffer[0],L):Se(E.__webglFramebuffer,L)}else if(G){E.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[X]),E.__webglDepthbuffer[X]===void 0)E.__webglDepthbuffer[X]=s.createRenderbuffer(),Ne(E.__webglDepthbuffer[X],L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else{const X=L.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ne(E.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(L,E,G){const X=n.get(L);E!==void 0&&be(X.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Xe(L)}function U(L){const E=L.texture,G=n.get(L),X=n.get(E);L.addEventListener("dispose",w);const Q=L.textures,j=L.isWebGLCubeRenderTarget===!0,Re=Q.length>1;if(Re||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=E.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)G.__webglFramebuffer[oe][ye]=s.createFramebuffer()}else G.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)G.__webglFramebuffer[oe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Re)for(let oe=0,ye=Q.length;oe<ye;oe++){const we=n.get(Q[oe]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&he(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const ye=Q[oe];G.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const we=r.convert(ye.format,ye.colorSpace),se=r.convert(ye.type),me=v(ye.internalFormat,we,se,ye.colorSpace,L.isXRRenderTarget===!0),Fe=Te(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,me,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Me(s.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)be(G.__webglFramebuffer[oe][ye],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ye);else be(G.__webglFramebuffer[oe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let oe=0,ye=Q.length;oe<ye;oe++){const we=Q[oe],se=n.get(we);let me=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),Me(me,we),be(G.__webglFramebuffer,L,we,s.COLOR_ATTACHMENT0+oe,me,0),m(we)&&p(me)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,X.__webglTexture),Me(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)be(G.__webglFramebuffer[ye],L,E,s.COLOR_ATTACHMENT0,oe,ye);else be(G.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,oe,0);m(E)&&p(oe),t.unbindTexture()}L.depthBuffer&&Xe(L)}function it(L){const E=L.textures;for(let G=0,X=E.length;G<X;G++){const Q=E[G];if(m(Q)){const j=x(L),Re=n.get(Q).__webglTexture;t.bindTexture(j,Re),p(j),t.unbindTexture()}}}const J=[],le=[];function ne(L){if(L.samples>0){if(he(L)===!1){const E=L.textures,G=L.width,X=L.height;let Q=s.COLOR_BUFFER_BIT;const j=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(L),oe=E.length>1;if(oe)for(let we=0;we<E.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ye=L.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let we=0;we<E.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const se=n.get(E[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,G,X,0,0,G,X,Q,s.NEAREST),c===!0&&(J.length=0,le.length=0,J.push(s.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(J.push(j),le.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<E.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Re.__webglColorRenderbuffer[we]);const se=n.get(E[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Te(L){return Math.min(i.maxSamples,L.samples)}function he(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ye(L,E){const G=L.colorSpace,X=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Bt&&G!==Jn&&(Ke.getTransfer(G)===nt?(X!==Gt||Q!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function at(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=Y,this.setTextureCube=O,this.rebindTextures=Tt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=he}function Jx(s,e){function t(n,i=Jn){let r;const a=Ke.getTransfer(i);if(n===sn)return s.UNSIGNED_BYTE;if(n===ol)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return s.BYTE;if(n===Oh)return s.SHORT;if(n===ur)return s.UNSIGNED_SHORT;if(n===al)return s.INT;if(n===bi)return s.UNSIGNED_INT;if(n===Nt)return s.FLOAT;if(n===tn)return s.HALF_FLOAT;if(n===zh)return s.ALPHA;if(n===Hh)return s.RGB;if(n===Gt)return s.RGBA;if(n===fr)return s.DEPTH_COMPONENT;if(n===dr)return s.DEPTH_STENCIL;if(n===ll)return s.RED;if(n===Ba)return s.RED_INTEGER;if(n===Gh)return s.RG;if(n===ul)return s.RG_INTEGER;if(n===hl)return s.RGBA_INTEGER;if(n===Sa||n===Ta||n===Ea||n===wa)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===_c||n===xc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===_c)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===yc||n===Mc||n===Sc||n===Tc||n===Ec||n===wc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ec)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Cc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ic)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dc)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===Fc||n===Nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uc)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===Bc||n===kc||n===zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new uf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zn({vertexShader:Zx,fragmentShader:Qx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t0 extends Is{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const b=typeof XRWebGLBinding<"u",m=new e0,p={},x=t.getContextAttributes();let v=null,_=null;const M=[],T=[],w=new ze;let R=null;const S=new Ft;S.viewport=new $e;const y=new Ft;y.viewport=new $e;const C=[S,y],I=new lm;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=M[q];return Z===void 0&&(Z=new _o,M[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=M[q];return Z===void 0&&(Z=new _o,M[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=M[q];return Z===void 0&&(Z=new _o,M[q]=Z),Z.getHandSpace()};function k(q){const Z=T.indexOf(q.inputSource);if(Z===-1)return;const be=M[Z];be!==void 0&&(be.update(q.inputSource,q.frame,l||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<M.length;q++){const Z=T[q];Z!==null&&(T[q]=null,M[q].disconnect(Z))}D=null,F=null,m.reset();for(const q in p)delete p[q];e.setRenderTarget(v),d=null,f=null,h=null,i=null,_=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",B),i.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ne=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=x.stencil?dr:fr,Ne=x.stencil?hr:bi);const Xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new kn(f.textureWidth,f.textureHeight,{format:Gt,type:sn,depthTexture:new lf(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const be={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new kn(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(q){for(let Z=0;Z<q.removed.length;Z++){const be=q.removed[Z],Ne=T.indexOf(be);Ne>=0&&(T[Ne]=null,M[Ne].disconnect(be))}for(let Z=0;Z<q.added.length;Z++){const be=q.added[Z];let Ne=T.indexOf(be);if(Ne===-1){for(let Xe=0;Xe<M.length;Xe++)if(Xe>=T.length){T.push(be),Ne=Xe;break}else if(T[Xe]===null){T[Xe]=be,Ne=Xe;break}if(Ne===-1)break}const Se=M[Ne];Se&&Se.connect(be)}}const O=new P,K=new P;function ee(q,Z,be){O.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(be.matrixWorld);const Ne=O.distanceTo(K),Se=Z.projectionMatrix.elements,Xe=be.projectionMatrix.elements,Tt=Se[14]/(Se[10]-1),U=Se[14]/(Se[10]+1),it=(Se[9]+1)/Se[5],J=(Se[9]-1)/Se[5],le=(Se[8]-1)/Se[0],ne=(Xe[8]+1)/Xe[0],Te=Tt*le,he=Tt*ne,Ee=Ne/(-le+ne),Ye=Ee*-le;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ye),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const at=Tt+Ee,L=U+Ee,E=Te-Ye,G=he+(Ne-Ye),X=it*U/L*at,Q=J*U/L*at;q.projectionMatrix.makePerspective(E,G,X,Q,at,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,be=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(be=m.depthFar)),I.near=y.near=S.near=Z,I.far=y.far=S.far=be,(D!==I.near||F!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),D=I.near,F=I.far),I.layers.mask=q.layers.mask|6,S.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const Ne=q.parent,Se=I.cameras;ce(I,Ne);for(let Xe=0;Xe<Se.length;Xe++)ce(Se[Xe],Ne);Se.length===2?ee(I,S,y):I.projectionMatrix.copy(S.projectionMatrix),Me(q,I,Ne)};function Me(q,Z,be){be===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ts*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return p[q]};let ae=null;function Ce(q,Z){if(u=Z.getViewerPose(l||a),g=Z,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ne=!1;be.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let U=0;U<be.length;U++){const it=be[U];let J=null;if(d!==null)J=d.getViewport(it);else{const ne=h.getViewSubImage(f,it);J=ne.viewport,U===0&&(e.setRenderTargetTextures(_,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(_))}let le=C[U];le===void 0&&(le=new Ft,le.layers.enable(U),le.viewport=new $e,C[U]=le),le.matrix.fromArray(it.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(it.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(J.x,J.y,J.width,J.height),U===0&&(I.matrix.copy(le.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(le)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const U=h.getDepthInformation(be[0]);U&&U.isValid&&U.texture&&m.init(U,i.renderState)}if(Se&&Se.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let U=0;U<be.length;U++){const it=be[U].camera;if(it){let J=p[it];J||(J=new uf,p[it]=J);const le=h.getCameraImage(it);J.sourceTexture=le}}}}for(let be=0;be<M.length;be++){const Ne=T[be],Se=M[be];Ne!==null&&Se!==void 0&&Se.update(Ne,Z,l||a)}ae&&ae(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Be=new gf;Be.setAnimationLoop(Ce),this.setAnimationLoop=function(q){ae=q},this.dispose=function(){}}}const Ii=new Sn,n0=new Ie;function i0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,Ii.copy(_),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(Ii)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s0(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const _=v.program;n.uniformBlockBinding(x,_)}function l(x,v){let _=i[x.id];_===void 0&&(g(x),_=u(x),i[x.id]=_,x.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(x,M);const T=e.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function u(x){const v=h();x.__bindingPointIndex=v;const _=s.createBuffer(),M=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,M,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=i[x.id],_=x.uniforms,M=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let T=0,w=_.length;T<w;T++){const R=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,y=R.length;S<y;S++){const C=R[S];if(d(C,T,S,M)===!0){const I=C.__offset,D=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let k=0;k<D.length;k++){const B=D[k],Y=b(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,I+F,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,_,M){const T=x.value,w=v+"_"+_;if(M[w]===void 0)return typeof T=="number"||typeof T=="boolean"?M[w]=T:M[w]=T.clone(),!0;{const R=M[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return M[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(x){const v=x.uniforms;let _=0;const M=16;for(let w=0,R=v.length;w<R;w++){const S=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,C=S.length;y<C;y++){const I=S[y],D=Array.isArray(I.value)?I.value:[I.value];for(let F=0,k=D.length;F<k;F++){const B=D[F],Y=b(B),O=_%M,K=O%Y.boundary,ee=O+K;_+=K,ee!==0&&M-ee<Y.storage&&(_+=M-ee),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=Y.storage}}}const T=_%M;return T>0&&(_+=M-T),x.__size=_,x.__cache={},this}function b(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class r0{constructor(e={}){const{canvas:t=$d(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let M=!1;this._outputColorSpace=Pt;let T=0,w=0,R=null,S=-1,y=null;const C=new $e,I=new $e;let D=null;const F=new Le(0);let k=0,B=t.width,Y=t.height,O=1,K=null,ee=null;const ce=new $e(0,0,B,Y),Me=new $e(0,0,B,Y);let ae=!1;const Ce=new vr;let Be=!1,q=!1;const Z=new Ie,be=new P,Ne=new $e,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Tt(){return R===null?O:1}let U=n;function it(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",te,!1),U===null){const z="webgl2";if(U=it(z,A),U===null)throw it(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,le,ne,Te,he,Ee,Ye,at,L,E,G,X,Q,j,Re,oe,ye,we,se,me,Fe,Ae,de,Ge;function N(){J=new m_(U),J.init(),Ae=new Jx(U,J),le=new c_(U,J,e,Ae),ne=new Yx(U,J),le.reversedDepthBuffer&&f&&ne.buffers.depth.setReversed(!0),Te=new __(U),he=new Nx,Ee=new $x(U,J,ne,he,le,Ae,Te),Ye=new u_(_),at=new p_(_),L=new Tm(U),de=new a_(U,L),E=new g_(U,L,Te,de),G=new v_(U,E,L,Te),se=new x_(U,le,Ee),oe=new l_(he),X=new Fx(_,Ye,at,J,le,de,oe),Q=new i0(_,he),j=new Bx,Re=new Wx(J),we=new r_(_,Ye,at,ne,G,d,c),ye=new qx(_,G,le),Ge=new s0(U,Te,le,ne),me=new o_(U,J,Te),Fe=new b_(U,J,Te),Te.programs=X.programs,_.capabilities=le,_.extensions=J,_.properties=he,_.renderLists=j,_.shadowMap=ye,_.state=ne,_.info=Te}N();const re=new t0(_,U);this.xr=re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(B,Y,!1))},this.getSize=function(A){return A.set(B,Y)},this.setSize=function(A,z,V=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Y=z,t.width=Math.floor(A*O),t.height=Math.floor(z*O),V===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(B*O,Y*O).floor()},this.setDrawingBufferSize=function(A,z,V){B=A,Y=z,O=V,t.width=Math.floor(A*V),t.height=Math.floor(z*V),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,z,V,W){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,z,V,W),ne.viewport(C.copy(ce).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(Me)},this.setScissor=function(A,z,V,W){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,z,V,W),ne.scissor(I.copy(Me).multiplyScalar(O).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){ne.setScissorTest(ae=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,V=!0){let W=0;if(A){let H=!1;if(R!==null){const ie=R.texture.format;H=ie===hl||ie===ul||ie===Ba}if(H){const ie=R.texture.type,pe=ie===sn||ie===bi||ie===ur||ie===hr||ie===ol||ie===cl,xe=we.getClearColor(),ge=we.getClearAlpha(),Ue=xe.r,Oe=xe.g,Pe=xe.b;pe?(g[0]=Ue,g[1]=Oe,g[2]=Pe,g[3]=ge,U.clearBufferuiv(U.COLOR,0,g)):(b[0]=Ue,b[1]=Oe,b[2]=Pe,b[3]=ge,U.clearBufferiv(U.COLOR,0,b))}else W|=U.COLOR_BUFFER_BIT}z&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",te,!1),we.dispose(),j.dispose(),Re.dispose(),he.dispose(),Ye.dispose(),at.dispose(),G.dispose(),de.dispose(),Ge.dispose(),X.dispose(),re.dispose(),re.removeEventListener("sessionstart",An),re.removeEventListener("sessionend",Ll),Mi.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Te.autoReset,z=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,H=ye.type;N(),Te.autoReset=A,ye.enabled=z,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=H}function te(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $(A){const z=A.target;z.removeEventListener("dispose",$),ve(z)}function ve(A){He(A),he.remove(A)}function He(A){const z=he.get(A).programs;z!==void 0&&(z.forEach(function(V){X.releaseProgram(V)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,V,W,H,ie){z===null&&(z=Se);const pe=H.isMesh&&H.matrixWorld.determinant()<0,xe=zf(A,z,V,W,H);ne.setMaterial(W,pe);let ge=V.index,Ue=1;if(W.wireframe===!0){if(ge=E.getWireframeAttribute(V),ge===void 0)return;Ue=2}const Oe=V.drawRange,Pe=V.attributes.position;let qe=Oe.start*Ue,tt=(Oe.start+Oe.count)*Ue;ie!==null&&(qe=Math.max(qe,ie.start*Ue),tt=Math.min(tt,(ie.start+ie.count)*Ue)),ge!==null?(qe=Math.max(qe,0),tt=Math.min(tt,ge.count)):Pe!=null&&(qe=Math.max(qe,0),tt=Math.min(tt,Pe.count));const dt=tt-qe;if(dt<0||dt===1/0)return;de.setup(H,W,xe,V,ge);let ot,st=me;if(ge!==null&&(ot=L.get(ge),st=Fe,st.setIndex(ot)),H.isMesh)W.wireframe===!0?(ne.setLineWidth(W.wireframeLinewidth*Tt()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(H.isLine){let De=W.linewidth;De===void 0&&(De=1),ne.setLineWidth(De*Tt()),H.isLineSegments?st.setMode(U.LINES):H.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else H.isPoints?st.setMode(U.POINTS):H.isSprite&&st.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const De=H._multiDrawStarts,ut=H._multiDrawCounts,Je=H._multiDrawCount,Jt=ge?L.get(ge).bytesPerElement:1,Gi=he.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<Je;Zt++)Gi.setValue(U,"_gl_DrawID",Zt),st.render(De[Zt]/Jt,ut[Zt])}else if(H.isInstancedMesh)st.renderInstances(qe,dt,H.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ut=Math.min(V.instanceCount,De);st.renderInstances(qe,dt,ut)}else st.render(qe,dt)};function rt(A,z,V){A.transparent===!0&&A.side===xt&&A.forceSinglePass===!1?(A.side=Vt,A.needsUpdate=!0,Rr(A,z,V),A.side=dn,A.needsUpdate=!0,Rr(A,z,V),A.side=xt):Rr(A,z,V)}this.compile=function(A,z,V=null){V===null&&(V=A),p=Re.get(V),p.init(z),v.push(p),V.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==V&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const W=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const xe=ie[pe];rt(xe,V,H),W.add(xe)}else rt(ie,V,H),W.add(ie)}),p=v.pop(),W},this.compileAsync=function(A,z,V=null){const W=this.compile(A,z,V);return new Promise(H=>{function ie(){if(W.forEach(function(pe){he.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){H(A);return}setTimeout(ie,10)}J.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ze=null;function Gn(A){Ze&&Ze(A)}function An(){Mi.stop()}function Ll(){Mi.start()}const Mi=new gf;Mi.setAnimationLoop(Gn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(A){Ze=A,re.setAnimationLoop(A),A===null?Mi.stop():Mi.start()},re.addEventListener("sessionstart",An),re.addEventListener("sessionend",Ll),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(z),z=re.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,z,R),p=Re.get(A,v.length),p.init(z),v.push(p),Z.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ce.setFromProjectionMatrix(Z,yn,z.reversedDepth),q=this.localClippingEnabled,Be=oe.init(this.clippingPlanes,q),m=j.get(A,x.length),m.init(),x.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=_.xr.getDepthSensingMesh();ie!==null&&Ka(ie,z,-1/0,_.sortObjects)}Ka(A,z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(K,ee),Xe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Xe&&we.addToRenderList(m,A),this.info.render.frame++,Be===!0&&oe.beginShadows();const V=p.state.shadowsArray;ye.render(V,A,z),Be===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ie=z.cameras;if(H.length>0)for(let pe=0,xe=ie.length;pe<xe;pe++){const ge=ie[pe];Ul(W,H,A,ge)}Xe&&we.render(A);for(let pe=0,xe=ie.length;pe<xe;pe++){const ge=ie[pe];Dl(m,A,ge,ge.viewport)}}else H.length>0&&Ul(W,H,A,z),Xe&&we.render(A),Dl(m,A,z);R!==null&&w===0&&(Ee.updateMultisampleRenderTarget(R),Ee.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,z),de.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],Be===!0&&oe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ka(A,z,V,W){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ce.intersectsSprite(A)){W&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const pe=G.update(A),xe=A.material;xe.visible&&m.push(A,pe,xe,V,Ne.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ce.intersectsObject(A))){const pe=G.update(A),xe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ne.copy(pe.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(xe)){const ge=pe.groups;for(let Ue=0,Oe=ge.length;Ue<Oe;Ue++){const Pe=ge[Ue],qe=xe[Pe.materialIndex];qe&&qe.visible&&m.push(A,pe,qe,V,Ne.z,Pe)}}else xe.visible&&m.push(A,pe,xe,V,Ne.z,null)}}const ie=A.children;for(let pe=0,xe=ie.length;pe<xe;pe++)Ka(ie[pe],z,V,W)}function Dl(A,z,V,W){const H=A.opaque,ie=A.transmissive,pe=A.transparent;p.setupLightsView(V),Be===!0&&oe.setGlobalState(_.clippingPlanes,V),W&&ne.viewport(C.copy(W)),H.length>0&&Ar(H,z,V),ie.length>0&&Ar(ie,z,V),pe.length>0&&Ar(pe,z,V),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Ul(A,z,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?tn:sn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ie=p.state.transmissionRenderTarget[W.id],pe=W.viewport||C;ie.setSize(pe.z*_.transmissionResolutionScale,pe.w*_.transmissionResolutionScale);const xe=_.getRenderTarget(),ge=_.getActiveCubeFace(),Ue=_.getActiveMipmapLevel();_.setRenderTarget(ie),_.getClearColor(F),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&we.render(V);const Oe=_.toneMapping;_.toneMapping=ti;const Pe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Be===!0&&oe.setGlobalState(_.clippingPlanes,W),Ar(A,V,W),Ee.updateMultisampleRenderTarget(ie),Ee.updateRenderTargetMipmap(ie),J.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let tt=0,dt=z.length;tt<dt;tt++){const ot=z[tt],st=ot.object,De=ot.geometry,ut=ot.material,Je=ot.group;if(ut.side===xt&&st.layers.test(W.layers)){const Jt=ut.side;ut.side=Vt,ut.needsUpdate=!0,Fl(st,V,W,De,ut,Je),ut.side=Jt,ut.needsUpdate=!0,qe=!0}}qe===!0&&(Ee.updateMultisampleRenderTarget(ie),Ee.updateRenderTargetMipmap(ie))}_.setRenderTarget(xe,ge,Ue),_.setClearColor(F,k),Pe!==void 0&&(W.viewport=Pe),_.toneMapping=Oe}function Ar(A,z,V){const W=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ie=A.length;H<ie;H++){const pe=A[H],xe=pe.object,ge=pe.geometry,Ue=pe.group;let Oe=pe.material;Oe.allowOverride===!0&&W!==null&&(Oe=W),xe.layers.test(V.layers)&&Fl(xe,z,V,ge,Oe,Ue)}}function Fl(A,z,V,W,H,ie){A.onBeforeRender(_,z,V,W,H,ie),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,z,V,W,A,ie),H.transparent===!0&&H.side===xt&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,_.renderBufferDirect(V,z,W,H,A,ie),H.side=dn,H.needsUpdate=!0,_.renderBufferDirect(V,z,W,H,A,ie),H.side=xt):_.renderBufferDirect(V,z,W,H,A,ie),A.onAfterRender(_,z,V,W,H,ie)}function Rr(A,z,V){z.isScene!==!0&&(z=Se);const W=he.get(A),H=p.state.lights,ie=p.state.shadowsArray,pe=H.state.version,xe=X.getParameters(A,H.state,ie,z,V),ge=X.getProgramCacheKey(xe);let Ue=W.programs;W.environment=A.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(A.isMeshStandardMaterial?at:Ye).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ue===void 0&&(A.addEventListener("dispose",$),Ue=new Map,W.programs=Ue);let Oe=Ue.get(ge);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===pe)return Ol(A,xe),Oe}else xe.uniforms=X.getUniforms(A),A.onBeforeCompile(xe,_),Oe=X.acquireProgram(xe,ge),Ue.set(ge,Oe),W.uniforms=xe.uniforms;const Pe=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Ol(A,xe),W.needsLights=Gf(A),W.lightsStateVersion=pe,W.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMap.value=H.state.directionalShadowMap,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotShadowMap.value=H.state.spotShadowMap,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMap.value=H.state.pointShadowMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Nl(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Aa.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ol(A,z){const V=he.get(A);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function zf(A,z,V,W,H){z.isScene!==!0&&(z=Se),Ee.resetTextureUnits();const ie=z.fog,pe=W.isMeshStandardMaterial?z.environment:null,xe=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Bt,ge=(W.isMeshStandardMaterial?at:Ye).get(W.envMap||pe),Ue=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!V.morphAttributes.position,qe=!!V.morphAttributes.normal,tt=!!V.morphAttributes.color;let dt=ti;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dt=_.toneMapping);const ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=ot!==void 0?ot.length:0,De=he.get(W),ut=p.state.lights;if(Be===!0&&(q===!0||A!==y)){const kt=A===y&&W.id===S;oe.setState(W,A,kt)}let Je=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ut.state.version||De.outputColorSpace!==xe||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==ge||W.fog===!0&&De.fog!==ie||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==Oe||De.morphTargets!==Pe||De.morphNormals!==qe||De.morphColors!==tt||De.toneMapping!==dt||De.morphTargetsCount!==st)&&(Je=!0):(Je=!0,De.__version=W.version);let Jt=De.currentProgram;Je===!0&&(Jt=Rr(W,z,H));let Gi=!1,Zt=!1,Os=!1;const ht=Jt.getUniforms(),rn=De.uniforms;if(ne.useProgram(Jt.program)&&(Gi=!0,Zt=!0,Os=!0),W.id!==S&&(S=W.id,Zt=!0),Gi||y!==A){ne.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",A.projectionMatrix),ht.setValue(U,"viewMatrix",A.matrixWorldInverse);const qt=ht.map.cameraPosition;qt!==void 0&&qt.setValue(U,be.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),y!==A&&(y=A,Zt=!0,Os=!0)}if(H.isSkinnedMesh){ht.setOptional(U,H,"bindMatrix"),ht.setOptional(U,H,"bindMatrixInverse");const kt=H.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ht.setValue(U,"boneTexture",kt.boneTexture,Ee))}H.isBatchedMesh&&(ht.setOptional(U,H,"batchingTexture"),ht.setValue(U,"batchingTexture",H._matricesTexture,Ee),ht.setOptional(U,H,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",H._indirectTexture,Ee),ht.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",H._colorsTexture,Ee));const an=V.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&se.update(H,V,Jt),(Zt||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,ht.setValue(U,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=ge,rn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Zt&&(ht.setValue(U,"toneMappingExposure",_.toneMappingExposure),De.needsLights&&Hf(rn,Os),ie&&W.fog===!0&&Q.refreshFogUniforms(rn,ie),Q.refreshMaterialUniforms(rn,W,O,Y,p.state.transmissionRenderTarget[A.id]),Aa.upload(U,Nl(De),rn,Ee)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Aa.upload(U,Nl(De),rn,Ee),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(U,"center",H.center),ht.setValue(U,"modelViewMatrix",H.modelViewMatrix),ht.setValue(U,"normalMatrix",H.normalMatrix),ht.setValue(U,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kt=W.uniformsGroups;for(let qt=0,Ya=kt.length;qt<Ya;qt++){const Si=kt[qt];Ge.update(Si,Jt),Ge.bind(Si,Jt)}}return Jt}function Hf(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Gf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,V){const W=he.get(A);W.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),he.get(A.texture).__webglTexture=z,he.get(A.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:V,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const V=he.get(A);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0};const Vf=U.createFramebuffer();this.setRenderTarget=function(A,z=0,V=0){R=A,T=z,w=V;let W=!0,H=null,ie=!1,pe=!1;if(A){const ge=he.get(A);if(ge.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(U.FRAMEBUFFER,null),W=!1;else if(ge.__webglFramebuffer===void 0)Ee.setupRenderTarget(A);else if(ge.__hasExternalTextures)Ee.rebindTextures(A,he.get(A.texture).__webglTexture,he.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(ge.__boundDepthTexture!==Pe){if(Pe!==null&&he.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(A)}}const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const Oe=he.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?H=Oe[z][V]:H=Oe[z],ie=!0):A.samples>0&&Ee.useMultisampledRTT(A)===!1?H=he.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[V]:H=Oe,C.copy(A.viewport),I.copy(A.scissor),D=A.scissorTest}else C.copy(ce).multiplyScalar(O).floor(),I.copy(Me).multiplyScalar(O).floor(),D=ae;if(V!==0&&(H=Vf),ne.bindFramebuffer(U.FRAMEBUFFER,H)&&W&&ne.drawBuffers(A,H),ne.viewport(C),ne.scissor(I),ne.setScissorTest(D),ie){const ge=he.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,ge.__webglTexture,V)}else if(pe){const ge=z;for(let Ue=0;Ue<A.textures.length;Ue++){const Oe=he.get(A.textures[Ue]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,V,ge)}}else if(A!==null&&V!==0){const ge=he.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,V)}S=-1},this.readRenderTargetPixels=function(A,z,V,W,H,ie,pe,xe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=he.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge){ne.bindFramebuffer(U.FRAMEBUFFER,ge);try{const Ue=A.textures[xe],Oe=Ue.format,Pe=Ue.type;if(!le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-W&&V>=0&&V<=A.height-H&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe),U.readPixels(z,V,W,H,Ae.convert(Oe),Ae.convert(Pe),ie))}finally{const Ue=R!==null?he.get(R).__webglFramebuffer:null;ne.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(A,z,V,W,H,ie,pe,xe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=he.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&pe!==void 0&&(ge=ge[pe]),ge)if(z>=0&&z<=A.width-W&&V>=0&&V<=A.height-H){ne.bindFramebuffer(U.FRAMEBUFFER,ge);const Ue=A.textures[xe],Oe=Ue.format,Pe=Ue.type;if(!le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qe),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+xe),U.readPixels(z,V,W,H,Ae.convert(Oe),Ae.convert(Pe),0);const tt=R!==null?he.get(R).__webglFramebuffer:null;ne.bindFramebuffer(U.FRAMEBUFFER,tt);const dt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jd(U,dt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,qe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(qe),U.deleteSync(dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,V=0){const W=Math.pow(2,-V),H=Math.floor(A.image.width*W),ie=Math.floor(A.image.height*W),pe=z!==null?z.x:0,xe=z!==null?z.y:0;Ee.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,pe,xe,H,ie),ne.unbindTexture()};const Wf=U.createFramebuffer(),Xf=U.createFramebuffer();this.copyTextureToTexture=function(A,z,V=null,W=null,H=0,ie=null){ie===null&&(H!==0?(br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let pe,xe,ge,Ue,Oe,Pe,qe,tt,dt;const ot=A.isCompressedTexture?A.mipmaps[ie]:A.image;if(V!==null)pe=V.max.x-V.min.x,xe=V.max.y-V.min.y,ge=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,Oe=V.min.y,Pe=V.isBox3?V.min.z:0;else{const an=Math.pow(2,-H);pe=Math.floor(ot.width*an),xe=Math.floor(ot.height*an),A.isDataArrayTexture?ge=ot.depth:A.isData3DTexture?ge=Math.floor(ot.depth*an):ge=1,Ue=0,Oe=0,Pe=0}W!==null?(qe=W.x,tt=W.y,dt=W.z):(qe=0,tt=0,dt=0);const st=Ae.convert(z.format),De=Ae.convert(z.type);let ut;z.isData3DTexture?(Ee.setTexture3D(z,0),ut=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ee.setTexture2DArray(z,0),ut=U.TEXTURE_2D_ARRAY):(Ee.setTexture2D(z,0),ut=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Je=U.getParameter(U.UNPACK_ROW_LENGTH),Jt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Gi=U.getParameter(U.UNPACK_SKIP_PIXELS),Zt=U.getParameter(U.UNPACK_SKIP_ROWS),Os=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,Oe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pe);const ht=A.isDataArrayTexture||A.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const an=he.get(A),kt=he.get(z),qt=he.get(an.__renderTarget),Ya=he.get(kt.__renderTarget);ne.bindFramebuffer(U.READ_FRAMEBUFFER,qt.__webglFramebuffer),ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ya.__webglFramebuffer);for(let Si=0;Si<ge;Si++)ht&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,he.get(A).__webglTexture,H,Pe+Si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,he.get(z).__webglTexture,ie,dt+Si)),U.blitFramebuffer(Ue,Oe,pe,xe,qe,tt,pe,xe,U.DEPTH_BUFFER_BIT,U.NEAREST);ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||he.has(A)){const an=he.get(A),kt=he.get(z);ne.bindFramebuffer(U.READ_FRAMEBUFFER,Wf),ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xf);for(let qt=0;qt<ge;qt++)ht?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,an.__webglTexture,H,Pe+qt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,an.__webglTexture,H),rn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,ie,dt+qt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,ie),H!==0?U.blitFramebuffer(Ue,Oe,pe,xe,qe,tt,pe,xe,U.COLOR_BUFFER_BIT,U.NEAREST):rn?U.copyTexSubImage3D(ut,ie,qe,tt,dt+qt,Ue,Oe,pe,xe):U.copyTexSubImage2D(ut,ie,qe,tt,Ue,Oe,pe,xe);ne.bindFramebuffer(U.READ_FRAMEBUFFER,null),ne.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else rn?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(ut,ie,qe,tt,dt,pe,xe,ge,st,De,ot.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(ut,ie,qe,tt,dt,pe,xe,ge,st,ot.data):U.texSubImage3D(ut,ie,qe,tt,dt,pe,xe,ge,st,De,ot):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,qe,tt,pe,xe,st,De,ot.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,qe,tt,ot.width,ot.height,st,ot.data):U.texSubImage2D(U.TEXTURE_2D,ie,qe,tt,pe,xe,st,De,ot);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Jt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Gi),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Os),ie===0&&z.generateMipmaps&&U.generateMipmap(ut),ne.unbindTexture()},this.initRenderTarget=function(A){he.get(A).__webglFramebuffer===void 0&&Ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,ne.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}function a0(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new At;let l=0;for(let u=0;u<s.length;++u){const h=s[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=rh(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let b=0;b<a[u].length;++b)d.push(a[u][b][f]);const g=rh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function rh(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new gt(a,t,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const b=u.getComponent(f,g);o.setComponent(f+h,g,b)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function ah(s,e){if(e===Sd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Hc||e===Vh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Hc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class yf extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new h0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new E0(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=or.extractUrlBase(e);a=or.resolveURL(l,this.path)}else a=or.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Mf){try{a[je.KHR_BINARY_GLTF]=new w0(e)}catch(h){i&&i(h);return}r=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new k0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case je.KHR_MATERIALS_UNLIT:a[h]=new l0;break;case je.KHR_DRACO_MESH_COMPRESSION:a[h]=new A0(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[h]=new R0;break;case je.KHR_MESH_QUANTIZATION:a[h]=new C0;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function o0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class c0{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Le(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Bt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new mf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new am(u),l.distance=h;break;case"spot":l=new sm(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class l0{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Bt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(i)}}class u0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class h0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}}class f0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class d0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class p0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Bt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class m0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class g0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(o[0],o[1],o[2],Bt),Promise.all(r)}}class b0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class _0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(o[0],o[1],o[2],Bt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Pt)),Promise.all(r)}}class x0{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class v0{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class y0{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class M0{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class S0{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class T0{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class E0{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==cn.TRIANGLES&&l.mode!==cn.TRIANGLE_STRIP&&l.mode!==cn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const b=new Ie,m=new P,p=new yi,x=new P(1,1,1),v=new wp(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,p,x));for(const _ in c)if(_==="_COLOR_0"){const M=c[_];v.instanceColor=new Vc(M.array,M.itemSize,M.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ft.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Mf="glTF",qs=12,oh={JSON:1313821514,BIN:5130562};class w0{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qs,r=new DataView(e,qs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===oh.JSON){const l=new Uint8Array(e,qs+a,o);this.content=n.decode(l)}else if(c===oh.BIN){const l=qs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class A0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Kc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Kc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=xs[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const g in d.attributes){const b=d.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}h(d)},o,l,Bt,f)})})}}class R0{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class C0{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Sf extends yr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,b=g-l,m=-2*d+3*f,p=d-f,x=1-m,v=p-f+h;for(let _=0;_!==o;_++){const M=a[b+_+o],T=a[b+_+c]*u,w=a[g+_+o],R=a[g+_]*u;r[_]=x*M+v*T+m*w+p*R}return r}}const P0=new yi;class I0 extends Sf{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return P0.fromArray(r).normalize().toArray(r),r}}const cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ch={9728:Wt,9729:vt,9984:Fh,9985:Ma,9986:tr,9987:Fn},lh={33071:vn,33648:Pa,10497:Ss},Fo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Kc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},L0={CUBICSPLINE:void 0,LINEAR:mr,STEP:pr},No={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function D0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ws({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:dn})),s.DefaultMaterial}function Li(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function U0(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function F0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function N0(s){let e;const t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Oo(t.attributes):e=s.indices+":"+Oo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Oo(s.targets[n]);return e}function Oo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Yc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function O0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const B0=new Ie;class k0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new o0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new pf(this.options.manager):this.textureLoader=new cm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Li(r,o,i),Pn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(or.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Fo[i.type],o=xs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new gt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Fo[i.type],l=xs[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(d&&d!==h){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(x);v||(b=new l(o,p*d,i.count*d/u),v=new yp(b,d/u),t.cache.add(x,v)),m=new ml(v,c,f%d/u,g)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),m=new gt(b,c,g);if(i.sparse!==void 0){const p=Fo.SCALAR,x=xs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new x(a[1],v,i.sparse.count*p),T=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=M.length;w<R;w++){const S=M[w];if(m.setX(S,T[w*c]),c>=2&&m.setY(S,T[w*c+1]),c>=3&&m.setZ(S,T[w*c+2]),c>=4&&m.setW(S,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=ch[f.magFilter]||vt,u.minFilter=ch[f.minFilter]||Fn,u.wrapS=lh[f.wrapS]||Ss,u.wrapT=lh[f.wrapT]||Ss,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==vt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(b){const m=new yt(b);m.needsUpdate=!0,f(m)}),t.load(or.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Pn(h,a),h.userData.mimeType=a.mimeType||O0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new cf,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new of,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ws}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const h=i[je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bt),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Pt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=xt);const u=r.alphaMode||No.OPAQUE;if(u===No.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===No.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Nn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nn){const h=r.emissiveFactor;o.emissive=new Le().setRGB(h[0],h[1],h[2],Bt)}return r.emissiveTexture!==void 0&&a!==Nn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Pn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Li(i,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return uh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=N0(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=uh(new At,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?D0(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const b=u[d],m=a[d];let p;const x=l[d];if(m.mode===cn.TRIANGLES||m.mode===cn.TRIANGLE_STRIP||m.mode===cn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Sp(b,x):new mt(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===cn.TRIANGLE_STRIP?p.geometry=ah(p.geometry,Vh):m.mode===cn.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,Hc));else if(m.mode===cn.LINES)p=new Bp(b,x);else if(m.mode===cn.LINE_STRIP)p=new _l(b,x);else if(m.mode===cn.LINE_LOOP)p=new kp(b,x);else if(m.mode===cn.POINTS)p=new zp(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&F0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Pn(p,r),m.extensions&&Li(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Li(i,h[0],r),h[0];const f=new zi;r.extensions&&Li(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ft(Ln.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ka(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new Ie;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],g=i.samplers[d.sampler],b=d.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],b=h[3],m=h[4],p=[];for(let v=0,_=f.length;v<_;v++){const M=f[v],T=d[v],w=g[v],R=b[v],S=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const y=n._createAnimationTracks(M,T,w,R,S);if(y)for(let C=0;C<y.length;C++)p.push(y[C])}const x=new $p(r,void 0,p);return Pn(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,B0)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new af:l.length>1?u=new zi:l.length===1?u=l[0]:u=new ft,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Pn(u,r),r.extensions&&Li(n,u,r),r.matrix!==void 0){const h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new zi;n.name&&(r.name=i.createUniqueName(n.name)),Pn(r,n),n.extensions&&Li(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof On||f instanceof yt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];fi[r.path]===fi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(fi[r.path]){case fi.weights:l=As;break;case fi.rotation:l=Rs;break;case fi.translation:case fi.scale:l=Cs;break;default:switch(n.itemSize){case 1:l=As;break;case 2:case 3:default:l=Cs;break}break}const u=i.interpolation!==void 0?L0[i.interpolation]:mr,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+fi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Rs?I0:Sf;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function z0(s,e,t){const n=e.attributes,i=new ct;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const u=Yc(xs[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,c=new P;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const b=Yc(xs[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ot;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function uh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Kc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Pn(s,e),z0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?U0(s,e.targets,t):s})}class H0 extends nm{constructor(e){super(e),this.type=tn}parse(e){const a=function(R,S){switch(R){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},h=function(R,S,y){S=S||1024;let I=R.pos,D=-1,F=0,k="",B=String.fromCharCode.apply(null,new Uint16Array(R.subarray(I,I+128)));for(;0>(D=B.indexOf(`
`))&&F<S&&I<R.byteLength;)k+=B,F+=B.length,I+=128,B+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(I,I+128)));return-1<D?(R.pos+=F+D+1,k+B.slice(0,D)):!1},f=function(R){const S=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let k,B;for((R.pos>=R.byteLength||!(k=h(R)))&&a(1,"no header found"),(B=k.match(S))||a(3,"bad initial token"),F.valid|=1,F.programtype=B[1],F.string+=k+`
`;k=h(R),k!==!1;){if(F.string+=k+`
`,k.charAt(0)==="#"){F.comments+=k+`
`;continue}if((B=k.match(y))&&(F.gamma=parseFloat(B[1])),(B=k.match(C))&&(F.exposure=parseFloat(B[1])),(B=k.match(I))&&(F.valid|=2,F.format=B[1]),(B=k.match(D))&&(F.valid|=4,F.height=parseInt(B[1],10),F.width=parseInt(B[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||a(3,"missing format specifier"),F.valid&4||a(3,"missing image size specifier"),F},d=function(R,S,y){const C=S;if(C<8||C>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);C!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");const I=new Uint8Array(4*S*y);I.length||a(4,"unable to allocate buffer space");let D=0,F=0;const k=4*C,B=new Uint8Array(4),Y=new Uint8Array(k);let O=y;for(;O>0&&F<R.byteLength;){F+4>R.byteLength&&a(1),B[0]=R[F++],B[1]=R[F++],B[2]=R[F++],B[3]=R[F++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=C)&&a(3,"bad rgbe scanline format");let K=0,ee;for(;K<k&&F<R.byteLength;){ee=R[F++];const Me=ee>128;if(Me&&(ee-=128),(ee===0||K+ee>k)&&a(3,"bad scanline data"),Me){const ae=R[F++];for(let Ce=0;Ce<ee;Ce++)Y[K++]=ae}else Y.set(R.subarray(F,F+ee),K),K+=ee,F+=ee}const ce=C;for(let Me=0;Me<ce;Me++){let ae=0;I[D]=Y[Me+ae],ae+=C,I[D+1]=Y[Me+ae],ae+=C,I[D+2]=Y[Me+ae],ae+=C,I[D+3]=Y[Me+ae],D+=4}O--}return I},g=function(R,S,y,C){const I=R[S+3],D=Math.pow(2,I-128)/255;y[C+0]=R[S+0]*D,y[C+1]=R[S+1]*D,y[C+2]=R[S+2]*D,y[C+3]=1},b=function(R,S,y,C){const I=R[S+3],D=Math.pow(2,I-128)/255;y[C+0]=ki.toHalfFloat(Math.min(R[S+0]*D,65504)),y[C+1]=ki.toHalfFloat(Math.min(R[S+1]*D,65504)),y[C+2]=ki.toHalfFloat(Math.min(R[S+2]*D,65504)),y[C+3]=ki.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=f(m),x=p.width,v=p.height,_=d(m.subarray(m.pos),x,v);let M,T,w;switch(this.type){case Nt:w=_.length/4;const R=new Float32Array(w*4);for(let y=0;y<w;y++)g(_,y*4,R,y*4);M=R,T=Nt;break;case tn:w=_.length/4;const S=new Uint16Array(w*4);for(let y=0;y<w;y++)b(_,y*4,S,y*4);M=S,T=tn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:v,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Nt:case tn:a.colorSpace=Bt,a.minFilter=vt,a.magFilter=vt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}var G0=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var M=0,v=0;v<p.length;++v)x[M++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,M)}function c(p,x,v,_,M,T,w){var R=p.exports.sbrk,S=_+3&-4,y=R(S*M),C=R(T.length),I=new Uint8Array(p.exports.memory.buffer);I.set(T,C);var D=x(y,_,M,C,T.length);if(D==0&&w&&w(y,S,M),v.set(I.subarray(y,y+_*M)),R(y-R(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function g(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),M=h.length;M<p;++M)h[M]=d(_);for(var M=p;M<h.length;++M)h[M].object.postMessage({});h.length=p,URL.revokeObjectURL(_)}function b(p,x,v,_,M){for(var T=h[0],w=1;w<h.length;++w)h[w].pending<T.pending&&(T=h[w]);return new Promise(function(R,S){var y=new Uint8Array(v),C=++f;T.pending+=p,T.requests[C]={resolve:R,reject:S},T.object.postMessage({id:C,count:p,size:x,source:y,mode:_,filter:M},[y.buffer])})}function m(p){var x=p.data;if(!x.id)return self.close();self.ready.then(function(v){try{var _=new Uint8Array(x.count*x.size);c(v,v.exports[x.mode],_,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(M){self.postMessage({id:x.id,count:x.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,v,_,M){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,v,_,r.exports[l[M]])},decodeIndexBuffer:function(p,x,v,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){c(r,r.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,M,T){c(r,r.exports[u[M]],p,x,v,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,x,v,_,M){return h.length>0?b(p,x,v,u[_],l[M]):a.then(function(){var T=new Uint8Array(p*x);return c(r,r.exports[u[_]],T,p,x,v,r.exports[l[M]]),T})}}})();class Ha extends mt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ft;const n=this,i=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||Ha.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Dn,h=new P,f=new P,d=new P,g=new Ie,b=new P(0,0,-1),m=new $e,p=new P,x=new P,v=new $e,_=new Ie,M=this.camera,T=new kn(r,a,{samples:l,type:tn}),w=new zn({name:c.name!==void 0?c.name:"unspecified",uniforms:Qh.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=T.texture,w.uniforms.color.value=i,w.uniforms.textureMatrix.value=_,this.material=w,this.onBeforeRender=function(R,S,y){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(f,d),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(f),g.extractRotation(y.matrixWorld),b.set(0,0,-1),b.applyMatrix4(g),b.add(d),x.subVectors(f,b),x.reflect(h).negate(),x.add(f),M.position.copy(p),M.up.set(0,1,0),M.up.applyMatrix4(g),M.up.reflect(h),M.lookAt(x),M.far=y.far,M.updateMatrixWorld(),M.projectionMatrix.copy(y.projectionMatrix),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(M.projectionMatrix),_.multiply(M.matrixWorldInverse),_.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(M.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const I=M.projectionMatrix;v.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],v.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],v.z=-1,v.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(v)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-o,I.elements[14]=m.w,n.visible=!1;const D=R.getRenderTarget(),F=R.xr.enabled,k=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(T),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(S,M),R.xr.enabled=F,R.shadowMap.autoUpdate=k,R.setRenderTarget(D);const B=y.viewport;B!==void 0&&R.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}}Ha.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Tf=0,V0=1,W0=2,hh=2,Bo=1.25,fh=1,cr=32,Ga=65535,X0=Math.pow(2,-24),ko=Symbol("SKIP_GENERATION");function j0(s){return s.index?s.index.count:s.attributes.position.count}function Ns(s){return j0(s)/3}function q0(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function K0(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=q0(t,n);s.setIndex(new gt(i,1));for(let r=0;r<t;r++)i[r]=r}}function Ef(s,e){const t=Ns(s),n=e||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,i),o=Math.min(t,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function wf(s,e){if(!s.groups||!s.groups.length)return Ef(s,e);const t=[],n=new Set,i=e||s.drawRange,r=i.start/3,a=(i.start+i.count)/3;for(const c of s.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(u-l)})}return t}function Y0(s,e){const t=Ns(s),n=wf(s,e).sort((a,o)=>a.offset-o.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let r=0;return n.forEach(({count:a})=>r+=a),t!==r}function zo(s,e,t,n,i){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,b=-1/0,m=-1/0;for(let p=e*6,x=(e+t)*6;p<x;p+=6){const v=s[p+0],_=s[p+1],M=v-_,T=v+_;M<r&&(r=M),T>c&&(c=T),v<h&&(h=v),v>g&&(g=v);const w=s[p+2],R=s[p+3],S=w-R,y=w+R;S<a&&(a=S),y>l&&(l=y),w<f&&(f=w),w>b&&(b=w);const C=s[p+4],I=s[p+5],D=C-I,F=C+I;D<o&&(o=D),F>u&&(u=F),C<d&&(d=C),C>m&&(m=C)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=f,i[2]=d,i[3]=g,i[4]=b,i[5]=m}function $0(s,e=null,t=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,a=Ns(s),o=i.normalized;let c;e===null?(c=new Float32Array(a*6),t=0,n=a):(c=e,t=t||0,n=n||a);const l=i.array,u=i.offset||0;let h=3;i.isInterleavedBufferAttribute&&(h=i.data.stride);const f=["getX","getY","getZ"];for(let d=t;d<t+n;d++){const g=d*3,b=d*6;let m=g+0,p=g+1,x=g+2;r&&(m=r[m],p=r[p],x=r[x]),o||(m=m*h+u,p=p*h+u,x=x*h+u);for(let v=0;v<3;v++){let _,M,T;o?(_=i[f[v]](m),M=i[f[v]](p),T=i[f[v]](x)):(_=l[m+v],M=l[p+v],T=l[x+v]);let w=_;M<w&&(w=M),T<w&&(w=T);let R=_;M>R&&(R=M),T>R&&(R=T);const S=(R-w)/2,y=v*2;c[b+y+0]=w+S,c[b+y+1]=S+(Math.abs(w)+S)*X0}}return c}function pt(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function dh(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function ph(s,e){e.set(s)}function mh(s,e,t){let n,i;for(let r=0;r<3;r++){const a=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[a],i=e[a],t[a]=n>i?n:i}}function ra(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],a=i-r,o=i+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Ks(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const $n=32,J0=(s,e)=>s.candidate-e.candidate,di=new Array($n).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),aa=new Float32Array(6);function Z0(s,e,t,n,i,r){let a=-1,o=0;if(r===Tf)a=dh(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===V0)a=dh(s),a!==-1&&(o=Q0(t,n,i,a));else if(r===W0){const c=Ks(s);let l=Bo*i;const u=n*6,h=(n+i)*6;for(let f=0;f<3;f++){const d=e[f],m=(e[f+3]-d)/$n;if(i<$n/4){const p=[...di];p.length=i;let x=0;for(let _=u;_<h;_+=6,x++){const M=p[x];M.candidate=t[_+2*f],M.count=0;const{bounds:T,leftCacheBounds:w,rightCacheBounds:R}=M;for(let S=0;S<3;S++)R[S]=1/0,R[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0;ra(_,t,T)}p.sort(J0);let v=i;for(let _=0;_<v;_++){const M=p[_];for(;_+1<v&&p[_+1].candidate===M.candidate;)p.splice(_+1,1),v--}for(let _=u;_<h;_+=6){const M=t[_+2*f];for(let T=0;T<v;T++){const w=p[T];M>=w.candidate?ra(_,t,w.rightCacheBounds):(ra(_,t,w.leftCacheBounds),w.count++)}}for(let _=0;_<v;_++){const M=p[_],T=M.count,w=i-M.count,R=M.leftCacheBounds,S=M.rightCacheBounds;let y=0;T!==0&&(y=Ks(R)/c);let C=0;w!==0&&(C=Ks(S)/c);const I=fh+Bo*(y*T+C*w);I<l&&(a=f,l=I,o=M.candidate)}}else{for(let v=0;v<$n;v++){const _=di[v];_.count=0,_.candidate=d+m+v*m;const M=_.bounds;for(let T=0;T<3;T++)M[T]=1/0,M[T+3]=-1/0}for(let v=u;v<h;v+=6){let T=~~((t[v+2*f]-d)/m);T>=$n&&(T=$n-1);const w=di[T];w.count++,ra(v,t,w.bounds)}const p=di[$n-1];ph(p.bounds,p.rightCacheBounds);for(let v=$n-2;v>=0;v--){const _=di[v],M=di[v+1];mh(_.bounds,M.rightCacheBounds,_.rightCacheBounds)}let x=0;for(let v=0;v<$n-1;v++){const _=di[v],M=_.count,T=_.bounds,R=di[v+1].rightCacheBounds;M!==0&&(x===0?ph(T,aa):mh(T,aa,aa)),x+=M;let S=0,y=0;x!==0&&(S=Ks(aa)/c);const C=i-x;C!==0&&(y=Ks(R)/c);const I=fh+Bo*(S*x+y*C);I<l&&(a=f,l=I,o=_.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Q0(s,e,t,n){let i=0;for(let r=e,a=e+t;r<a;r++)i+=s[r*6+n*2];return i/t}class Ho{constructor(){this.boundingData=new Float32Array(6)}}function ev(s,e,t,n,i,r){let a=n,o=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let h=e[a*3+u];e[a*3+u]=e[o*3+u],e[o*3+u]=h}for(let u=0;u<6;u++){let h=t[a*6+u];t[a*6+u]=t[o*6+u],t[o*6+u]=h}a++,o--}else return a}}function tv(s,e,t,n,i,r){let a=n,o=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let u=s[a];s[a]=s[o],s[o]=u;for(let h=0;h<6;h++){let f=t[a*6+h];t[a*6+h]=t[o*6+h],t[o*6+h]=f}a++,o--}else return a}}function $t(s,e){return e[s+15]===65535}function nn(s,e){return e[s+6]}function ln(s,e){return e[s+14]}function un(s){return s+8}function hn(s,e){return e[s+6]}function Af(s,e){return e[s+7]}let Rf,ir,Ra,Cf;const nv=Math.pow(2,32);function $c(s){return"count"in s?1:1+$c(s.left)+$c(s.right)}function iv(s,e,t){return Rf=new Float32Array(t),ir=new Uint32Array(t),Ra=new Uint16Array(t),Cf=new Uint8Array(t),Jc(s,e)}function Jc(s,e){const t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Rf[t+a]=r[a];if(i)if(e.buffer){const a=e.buffer;Cf.set(new Uint8Array(a),s);for(let o=s,c=s+a.byteLength;o<c;o+=cr){const l=o/2;$t(l,Ra)||(ir[o/4+6]+=t)}return s+a.byteLength}else{const a=e.offset,o=e.count;return ir[t+6]=a,Ra[n+14]=o,Ra[n+15]=Ga,s+cr}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=Jc(s+cr,a),l/4>nv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ir[t+6]=l/4,l=Jc(l,o),ir[t+7]=c,l}}function sv(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function rv(s,e,t,n,i){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=i,h=s._indirectBuffer,f=s.geometry,d=f.index?f.index.array:null,g=u?tv:ev,b=Ns(f),m=new Float32Array(6);let p=!1;const x=new Ho;return zo(e,t,n,x.boundingData,m),_(x,t,n,m),x;function v(M){l&&l(M/b)}function _(M,T,w,R=null,S=0){if(!p&&S>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),w<=o||S>=r)return v(T+w),M.offset=T,M.count=w,M;const y=Z0(M.boundingData,R,e,T,w,c);if(y.axis===-1)return v(T+w),M.offset=T,M.count=w,M;const C=g(h,d,e,T,w,y);if(C===T||C===T+w)v(T+w),M.offset=T,M.count=w;else{M.splitAxis=y.axis;const I=new Ho,D=T,F=C-T;M.left=I,zo(e,D,F,I.boundingData,m),_(I,D,F,m,S+1);const k=new Ho,B=C,Y=w-F;M.right=k,zo(e,B,Y,k.boundingData,m),_(k,B,Y,m,S+1)}return M}}function av(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=sv(t,e.useSharedArrayBuffer),Y0(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||K0(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=$0(t),r=e.indirect?Ef(t,e.range):wf(t,e.range);s._roots=r.map(a=>{const o=rv(s,i,a.offset,a.count,e),c=$c(o),l=new n(cr*c);return iv(0,o,l),l})}class si{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],c=e.dot(o);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}si.prototype.setFromBox=(function(){const s=new P;return function(t,n){const i=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);const h=t.dot(s);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}})();const ov=(function(){const s=new P,e=new P,t=new P;return function(i,r,a){const o=i.start,c=s,l=r.start,u=e;t.subVectors(o,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const h=t.dot(u),f=u.dot(c),d=u.dot(u),g=t.dot(c),m=c.dot(c)*d-f*f;let p,x;m!==0?p=(h*f-g*d)/m:p=0,x=(h+p*f)/d,a.x=p,a.y=x}})(),Al=(function(){const s=new ze,e=new P,t=new P;return function(i,r,a,o){ov(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),i.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?i.at(0,a):i.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;const f=e,d=t;if(i.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),f.distanceToSquared(h)<=d.distanceToSquared(u)){a.copy(f),o.copy(h);return}else{a.copy(u),o.copy(d);return}}}})(),cv=(function(){const s=new P,e=new P,t=new Dn,n=new Bn;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:h}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o))return!0;const b=a.getPlane(t);if(Math.abs(b.distanceToPoint(c))<=o){const p=b.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),lv=1e-15;function Go(s){return Math.abs(s)<lv}class Tn extends It{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new si),this.points=[this.a,this.b,this.c],this.sphere=new Ot,this.plane=new Dn,this.needsUpdate=!0}intersectsSphere(e){return cv(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,i);const l=r[1],u=a[1];l.subVectors(e,t),u.setFromPoints(l,i);const h=r[2],f=a[2];h.subVectors(t,n),f.setFromPoints(h,i);const d=r[3],g=a[3];d.subVectors(n,e),g.setFromPoints(d,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Tn.prototype.closestPointToSegment=(function(){const s=new P,e=new P,t=new Bn;return function(i,r=null,a=null){const{start:o,end:c}=i,l=this.points;let u,h=1/0;for(let f=0;f<3;f++){const d=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[d]),Al(t,i,s,e),u=s.distanceToSquared(e),u<h&&(h=u,r&&r.copy(s),a&&a.copy(e))}return this.closestPointToPoint(o,s),u=o.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),a&&a.copy(o)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),a&&a.copy(c)),Math.sqrt(h)}})();Tn.prototype.intersectsTriangle=(function(){const s=new Tn,e=new Array(3),t=new Array(3),n=new si,i=new si,r=new P,a=new P,o=new P,c=new P,l=new P,u=new Bn,h=new Bn,f=new Bn,d=new P;function g(b,m,p){const x=b.points;let v=0,_=-1;for(let M=0;M<3;M++){const{start:T,end:w}=u;T.copy(x[M]),w.copy(x[(M+1)%3]),u.delta(a);const R=Go(m.distanceToPoint(T));if(Go(m.normal.dot(a))&&R){p.copy(u),v=2;break}const S=m.intersectLine(u,d);if(!S&&R&&d.copy(T),(S||R)&&!Go(d.distanceTo(w))){if(v<=1)(v===1?p.start:p.end).copy(d),R&&(_=v);else if(v>=2){(_===1?p.start:p.end).copy(d),v=2;break}if(v++,v===2&&_===-1)break}}return v}return function(m,p=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);const v=this.plane,_=m.plane;if(Math.abs(v.normal.dot(_.normal))>1-1e-10){const M=this.satBounds,T=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let S=0;S<4;S++){const y=M[S],C=T[S];if(n.setFromPoints(C,t),y.isSeparated(n))return!1}const w=m.satBounds,R=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const y=w[S],C=R[S];if(n.setFromPoints(C,e),y.isSeparated(n))return!1}for(let S=0;S<4;S++){const y=T[S];for(let C=0;C<4;C++){const I=R[C];if(r.crossVectors(y,I),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return p&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const M=g(this,_,h);if(M===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(M!==2)return!1;const T=g(m,v,f);if(T===1&&this.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(T!==2)return!1;if(h.delta(o),f.delta(c),o.dot(c)<0){let D=f.start;f.start=f.end,f.end=D}const w=h.start.dot(o),R=h.end.dot(o),S=f.start.dot(o),y=f.end.dot(o),C=R<S,I=w<y;return w!==y&&S!==R&&C===I?!1:(p&&(l.subVectors(h.start,f.start),l.dot(o)>0?p.start.copy(h.start):p.start.copy(f.start),l.subVectors(h.end,f.end),l.dot(o)<0?p.end.copy(h.end):p.end.copy(f.end)),!0)}}})();Tn.prototype.distanceToPoint=(function(){const s=new P;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Tn.prototype.distanceToTriangle=(function(){const s=new P,e=new P,t=["a","b","c"],n=new Bn,i=new Bn;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let f;const d=t[h],g=a[d];this.closestPointToPoint(g,s),f=g.distanceToSquared(s),f<u&&(u=f,o&&o.copy(s),c&&c.copy(g));const b=this[d];a.closestPointToPoint(b,s),f=b.distanceToSquared(s),f<u&&(u=f,o&&o.copy(b),c&&c.copy(s))}for(let h=0;h<3;h++){const f=t[h],d=t[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){const b=t[g],m=t[(g+1)%3];i.set(a[b],a[m]),Al(n,i,s,e);const p=s.distanceToSquared(e);p<u&&(u=p,o&&o.copy(s),c&&c.copy(e))}}return Math.sqrt(u)}})();class jt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new Ie,this.invMatrix=new Ie,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new si),this.alignedSatBounds=new Array(3).fill().map(()=>new si),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}jt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const f=1*l|2*u|4*h,d=i[f];d.x=l?n.x:t.x,d.y=u?n.y:t.y,d.z=h?n.z:t.z,d.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=i[0];for(let l=0;l<3;l++){const u=a[l],h=r[l],f=1<<l,d=i[f];u.subVectors(o,d),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();jt.prototype.intersectsBox=(function(){const s=new si;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,o[0].isSeparated(s)||(s.min=n.y,s.max=i.y,o[1].isSeparated(s))||(s.min=n.z,s.max=i.z,o[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(s.setFromBox(l,t),u.isSeparated(s))return!1}return!0}})();jt.prototype.intersectsTriangle=(function(){const s=new Tn,e=new Array(3),t=new si,n=new si,i=new P;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let f=0;f<3;f++){const d=o[f],g=c[f];if(t.setFromPoints(g,e),d.isSeparated(t))return!1}const l=a.satBounds,u=a.satAxes,h=this.points;for(let f=0;f<3;f++){const d=l[f],g=u[f];if(t.setFromPoints(g,h),d.isSeparated(t))return!1}for(let f=0;f<3;f++){const d=c[f];for(let g=0;g<4;g++){const b=u[g];if(i.crossVectors(d,b),t.setFromPoints(i,e),n.setFromPoints(i,h),t.isSeparated(n))return!1}}return!0}})();jt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();jt.prototype.distanceToPoint=(function(){const s=new P;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();jt.prototype.distanceToBox=(function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new Bn),t=new Array(12).fill().map(()=>new Bn),n=new P,i=new P;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=o*o,h=a.min,f=a.max,d=this.points;let g=1/0;for(let m=0;m<8;m++){const p=d[m];i.copy(p).clamp(h,f);const x=p.distanceToSquared(i);if(x<g&&(g=x,c&&c.copy(p),l&&l.copy(i),x<u))return Math.sqrt(x)}let b=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const v=(m+1)%3,_=(m+2)%3,M=p<<v|x<<_,T=1<<m|p<<v|x<<_,w=d[M],R=d[T];e[b].set(w,R);const y=s[m],C=s[v],I=s[_],D=t[b],F=D.start,k=D.end;F[y]=h[y],F[C]=p?h[C]:f[C],F[I]=x?h[I]:f[C],k[y]=f[y],k[C]=p?h[C]:f[C],k[I]=x?h[I]:f[C],b++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){i.x=m?f.x:h.x,i.y=p?f.y:h.y,i.z=x?f.z:h.z,this.closestPointToPoint(i,n);const v=i.distanceToSquared(n);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(i),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const p=e[m];for(let x=0;x<12;x++){const v=t[x];Al(p,v,n,i);const _=n.distanceToSquared(i);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();class Rl{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class uv extends Rl{constructor(){super(()=>new Tn)}}const fn=new uv;class hv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const lt=new hv;let mi,ms;const os=[],oa=new Rl(()=>new ct);function fv(s,e,t,n,i,r){mi=oa.getPrimitive(),ms=oa.getPrimitive(),os.push(mi,ms),lt.setBuffer(s._roots[e]);const a=Zc(0,s.geometry,t,n,i,r);lt.clearBuffer(),oa.releasePrimitive(mi),oa.releasePrimitive(ms),os.pop(),os.pop();const o=os.length;return o>0&&(ms=os[o-1],mi=os[o-2]),a}function Zc(s,e,t,n,i=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=lt;let u=s*2;if($t(u,c)){const f=nn(s,l),d=ln(u,c);return pt(s,o,mi),n(f,d,!1,a,r+s,mi)}else{let y=function(I){const{uint16Array:D,uint32Array:F}=lt;let k=I*2;for(;!$t(k,D);)I=un(I),k=I*2;return nn(I,F)},C=function(I){const{uint16Array:D,uint32Array:F}=lt;let k=I*2;for(;!$t(k,D);)I=hn(I,F),k=I*2;return nn(I,F)+ln(k,D)};const f=un(s),d=hn(s,l);let g=f,b=d,m,p,x,v;if(i&&(x=mi,v=ms,pt(g,o,x),pt(b,o,v),m=i(x),p=i(v),p<m)){g=d,b=f;const I=m;m=p,p=I,x=v}x||(x=mi,pt(g,o,x));const _=$t(g*2,c),M=t(x,_,m,a+1,r+g);let T;if(M===hh){const I=y(g),F=C(g)-I;T=n(I,F,!0,a+1,r+g,x)}else T=M&&Zc(g,e,t,n,i,r,a+1);if(T)return!0;v=ms,pt(b,o,v);const w=$t(b*2,c),R=t(v,w,p,a+1,r+b);let S;if(R===hh){const I=y(b),F=C(b)-I;S=n(I,F,!0,a+1,r+b,v)}else S=R&&Zc(b,e,t,n,i,r,a+1);return!!S}}const Ys=new P,Vo=new P;function dv(s,e,t={},n=0,i=1/0){const r=n*n,a=i*i;let o=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(Ys.copy(e).clamp(u.min,u.max),Ys.distanceToSquared(e)),intersectsBounds:(u,h,f)=>f<o&&f<a,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,Ys);const f=e.distanceToSquared(Ys);return f<o&&(Vo.copy(Ys),o=f,c=h),f<r}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Vo):t.point=Vo.clone(),t.distance=l,t.faceIndex=c,t}const pv=parseInt(Na)>=169,Di=new P,Ui=new P,Fi=new P,ca=new ze,la=new ze,ua=new ze,gh=new P,bh=new P,_h=new P,$s=new P;function mv(s,e,t,n,i,r,a,o){let c;if(r===Vt?c=s.intersectTriangle(n,t,e,!0,i):c=s.intersectTriangle(e,t,n,r!==xt,i),c===null)return null;const l=s.origin.distanceTo(i);return l<a||l>o?null:{distance:l,point:i.clone()}}function gv(s,e,t,n,i,r,a,o,c,l,u){Di.fromBufferAttribute(e,r),Ui.fromBufferAttribute(e,a),Fi.fromBufferAttribute(e,o);const h=mv(s,Di,Ui,Fi,$s,c,l,u);if(h){const f=new P;It.getBarycoord($s,Di,Ui,Fi,f),n&&(ca.fromBufferAttribute(n,r),la.fromBufferAttribute(n,a),ua.fromBufferAttribute(n,o),h.uv=It.getInterpolation($s,Di,Ui,Fi,ca,la,ua,new ze)),i&&(ca.fromBufferAttribute(i,r),la.fromBufferAttribute(i,a),ua.fromBufferAttribute(i,o),h.uv1=It.getInterpolation($s,Di,Ui,Fi,ca,la,ua,new ze)),t&&(gh.fromBufferAttribute(t,r),bh.fromBufferAttribute(t,a),_h.fromBufferAttribute(t,o),h.normal=It.getInterpolation($s,Di,Ui,Fi,gh,bh,_h,new P),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:a,c:o,normal:new P,materialIndex:0};It.getNormal(Di,Ui,Fi,d.normal),h.face=d,h.faceIndex=r,pv&&(h.barycoord=f)}return h}function Va(s,e,t,n,i,r,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const h=s.index;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:f,normal:d,uv:g,uv1:b}=s.attributes,m=gv(t,f,d,g,b,c,l,u,e,r,a);return m?(m.faceIndex=n,i&&i.push(m),m):null}function _t(s,e,t,n){const i=s.a,r=s.b,a=s.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function bv(s,e,t,n,i,r,a,o){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)Va(c,e,t,u,r,a,o)}function _v(s,e,t,n,i,r,a){const{geometry:o,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=Va(o,e,t,h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function xv(s,e,t,n,i,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=s,h=e+s;u<h;u++){let f;if(f=u,_t(a,f*3,c,l),a.needsUpdate=!0,n(a,f,i,r))return!0}return!1}function vv(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,o,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const b=f*2;if(o[b+15]===Ga){const p=a[f+6],x=o[b+14];let v=1/0,_=1/0,M=1/0,T=-1/0,w=-1/0,R=-1/0;for(let S=3*p,y=3*(p+x);S<y;S++){let C=n[S];const I=i.getX(C),D=i.getY(C),F=i.getZ(C);I<v&&(v=I),I>T&&(T=I),D<_&&(_=D),D>w&&(w=D),F<M&&(M=F),F>R&&(R=F)}return c[f+0]!==v||c[f+1]!==_||c[f+2]!==M||c[f+3]!==T||c[f+4]!==w||c[f+5]!==R?(c[f+0]=v,c[f+1]=_,c[f+2]=M,c[f+3]=T,c[f+4]=w,c[f+5]=R,!0):!1}else{const p=f+8,x=a[f+6],v=p+d,_=x+d;let M=g,T=!1,w=!1;e?M||(T=e.has(v),w=e.has(_),M=!T&&!w):(T=!0,w=!0);const R=M||T,S=M||w;let y=!1;R&&(y=h(p,d,M));let C=!1;S&&(C=h(x,d,M));const I=y||C;if(I)for(let D=0;D<3;D++){const F=p+D,k=x+D,B=c[F],Y=c[F+3],O=c[k],K=c[k+3];c[f+D]=B<O?B:O,c[f+D+3]=Y>K?Y:K}return I}}}function _i(s,e,t,n,i){let r,a,o,c,l,u;const h=1/t.direction.x,f=1/t.direction.y,d=1/t.direction.z,g=t.origin.x,b=t.origin.y,m=t.origin.z;let p=e[s],x=e[s+3],v=e[s+1],_=e[s+3+1],M=e[s+2],T=e[s+3+2];return h>=0?(r=(p-g)*h,a=(x-g)*h):(r=(x-g)*h,a=(p-g)*h),f>=0?(o=(v-b)*f,c=(_-b)*f):(o=(_-b)*f,c=(v-b)*f),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),d>=0?(l=(M-m)*d,u=(T-m)*d):(l=(T-m)*d,u=(M-m)*d),r>u||l>a)?!1:((l>r||r!==r)&&(r=l),(u<a||a!==a)&&(a=u),r<=i&&a>=n)}function yv(s,e,t,n,i,r,a,o){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let f=l?l[u]:u;Va(c,e,t,f,r,a,o)}}function Mv(s,e,t,n,i,r,a){const{geometry:o,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,f=n+i;h<f;h++){let d;d=Va(o,e,t,c?c[h]:h,null,r,a),d&&d.distance<l&&(u=d,l=d.distance)}return u}function Sv(s,e,t,n,i,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=s,h=e+s;u<h;u++){let f;if(f=t.resolveTriangleIndex(u),_t(a,f*3,c,l),a.needsUpdate=!0,n(a,f,i,r))return!0}return!1}function Tv(s,e,t,n,i,r,a){lt.setBuffer(s._roots[e]),Qc(0,s,t,n,i,r,a),lt.clearBuffer()}function Qc(s,e,t,n,i,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=lt,u=s*2;if($t(u,c)){const f=nn(s,l),d=ln(u,c);bv(e,t,n,f,d,i,r,a)}else{const f=un(s);_i(f,o,n,r,a)&&Qc(f,e,t,n,i,r,a);const d=hn(s,l);_i(d,o,n,r,a)&&Qc(d,e,t,n,i,r,a)}}const Ev=["x","y","z"];function wv(s,e,t,n,i,r){lt.setBuffer(s._roots[e]);const a=el(0,s,t,n,i,r);return lt.clearBuffer(),a}function el(s,e,t,n,i,r){const{float32Array:a,uint16Array:o,uint32Array:c}=lt;let l=s*2;if($t(l,o)){const h=nn(s,c),f=ln(l,o);return _v(e,t,n,h,f,i,r)}else{const h=Af(s,c),f=Ev[h],g=n.direction[f]>=0;let b,m;g?(b=un(s),m=hn(s,c)):(b=hn(s,c),m=un(s));const x=_i(b,a,n,i,r)?el(b,e,t,n,i,r):null;if(x){const M=x.point[f];if(g?M<=a[m+h]:M>=a[m+h+3])return x}const _=_i(m,a,n,i,r)?el(m,e,t,n,i,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const ha=new ct,cs=new Tn,ls=new Tn,Js=new Ie,xh=new jt,fa=new jt;function Av(s,e,t,n){lt.setBuffer(s._roots[e]);const i=tl(0,s,t,n);return lt.clearBuffer(),i}function tl(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:o}=lt;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),xh.set(t.boundingBox.min,t.boundingBox.max,n),i=xh),$t(c,a)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,g=t.attributes.position,b=nn(s,o),m=ln(c,a);if(Js.copy(n).invert(),t.boundsTree)return pt(s,r,fa),fa.matrix.copy(Js),fa.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>fa.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=b*3,_=(m+b)*3;v<_;v+=3)if(_t(ls,v,h,f),ls.needsUpdate=!0,x.intersectsTriangle(ls))return!0;return!1}});for(let p=b*3,x=(m+b)*3;p<x;p+=3){_t(cs,p,h,f),cs.a.applyMatrix4(Js),cs.b.applyMatrix4(Js),cs.c.applyMatrix4(Js),cs.needsUpdate=!0;for(let v=0,_=d.count;v<_;v+=3)if(_t(ls,v,d,g),ls.needsUpdate=!0,cs.intersectsTriangle(ls))return!0}}else{const u=s+8,h=o[s+6];return pt(u,r,ha),!!(i.intersectsBox(ha)&&tl(u,e,t,n,i)||(pt(h,r,ha),i.intersectsBox(ha)&&tl(h,e,t,n,i)))}}const da=new Ie,Wo=new jt,Zs=new jt,Rv=new P,Cv=new P,Pv=new P,Iv=new P;function Lv(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Wo.set(e.boundingBox.min,e.boundingBox.max,t),Wo.needsUpdate=!0;const o=s.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,h=e.index,f=fn.getPrimitive(),d=fn.getPrimitive();let g=Rv,b=Cv,m=null,p=null;i&&(m=Pv,p=Iv);let x=1/0,v=null,_=null;return da.copy(t).invert(),Zs.matrix.copy(da),s.shapecast({boundsTraverseOrder:M=>Wo.distanceToBox(M),intersectsBounds:(M,T,w)=>w<x&&w<a?(T&&(Zs.min.copy(M.min),Zs.max.copy(M.max),Zs.needsUpdate=!0),!0):!1,intersectsRange:(M,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:R=>Zs.distanceToBox(R),intersectsBounds:(R,S,y)=>y<x&&y<a,intersectsRange:(R,S)=>{for(let y=R,C=R+S;y<C;y++){_t(d,3*y,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let I=M,D=M+T;I<D;I++){_t(f,3*I,l,c),f.needsUpdate=!0;const F=f.distanceToTriangle(d,g,m);if(F<x&&(b.copy(g),p&&p.copy(m),x=F,v=I,_=y),F<r)return!0}}}});{const w=Ns(e);for(let R=0,S=w;R<S;R++){_t(d,3*R,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let y=M,C=M+T;y<C;y++){_t(f,3*y,l,c),f.needsUpdate=!0;const I=f.distanceToTriangle(d,g,m);if(I<x&&(b.copy(g),p&&p.copy(m),x=I,v=y,_=R),I<r)return!0}}}}}),fn.releasePrimitive(f),fn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=x,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(da),b.applyMatrix4(da),i.distance=b.sub(i.point).length(),i.faceIndex=_),n)}function Dv(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,o,c,l=0;const u=s._roots;for(let f=0,d=u.length;f<d;f++)r=u[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(f,d,g=!1){const b=f*2;if(o[b+15]===Ga){const p=a[f+6],x=o[b+14];let v=1/0,_=1/0,M=1/0,T=-1/0,w=-1/0,R=-1/0;for(let S=p,y=p+x;S<y;S++){const C=3*s.resolveTriangleIndex(S);for(let I=0;I<3;I++){let D=C+I;D=n?n[D]:D;const F=i.getX(D),k=i.getY(D),B=i.getZ(D);F<v&&(v=F),F>T&&(T=F),k<_&&(_=k),k>w&&(w=k),B<M&&(M=B),B>R&&(R=B)}}return c[f+0]!==v||c[f+1]!==_||c[f+2]!==M||c[f+3]!==T||c[f+4]!==w||c[f+5]!==R?(c[f+0]=v,c[f+1]=_,c[f+2]=M,c[f+3]=T,c[f+4]=w,c[f+5]=R,!0):!1}else{const p=f+8,x=a[f+6],v=p+d,_=x+d;let M=g,T=!1,w=!1;e?M||(T=e.has(v),w=e.has(_),M=!T&&!w):(T=!0,w=!0);const R=M||T,S=M||w;let y=!1;R&&(y=h(p,d,M));let C=!1;S&&(C=h(x,d,M));const I=y||C;if(I)for(let D=0;D<3;D++){const F=p+D,k=x+D,B=c[F],Y=c[F+3],O=c[k],K=c[k+3];c[f+D]=B<O?B:O,c[f+D+3]=Y>K?Y:K}return I}}}function Uv(s,e,t,n,i,r,a){lt.setBuffer(s._roots[e]),nl(0,s,t,n,i,r,a),lt.clearBuffer()}function nl(s,e,t,n,i,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=lt,u=s*2;if($t(u,c)){const f=nn(s,l),d=ln(u,c);yv(e,t,n,f,d,i,r,a)}else{const f=un(s);_i(f,o,n,r,a)&&nl(f,e,t,n,i,r,a);const d=hn(s,l);_i(d,o,n,r,a)&&nl(d,e,t,n,i,r,a)}}const Fv=["x","y","z"];function Nv(s,e,t,n,i,r){lt.setBuffer(s._roots[e]);const a=il(0,s,t,n,i,r);return lt.clearBuffer(),a}function il(s,e,t,n,i,r){const{float32Array:a,uint16Array:o,uint32Array:c}=lt;let l=s*2;if($t(l,o)){const h=nn(s,c),f=ln(l,o);return Mv(e,t,n,h,f,i,r)}else{const h=Af(s,c),f=Fv[h],g=n.direction[f]>=0;let b,m;g?(b=un(s),m=hn(s,c)):(b=hn(s,c),m=un(s));const x=_i(b,a,n,i,r)?il(b,e,t,n,i,r):null;if(x){const M=x.point[f];if(g?M<=a[m+h]:M>=a[m+h+3])return x}const _=_i(m,a,n,i,r)?il(m,e,t,n,i,r):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}const pa=new ct,us=new Tn,hs=new Tn,Qs=new Ie,vh=new jt,ma=new jt;function Ov(s,e,t,n){lt.setBuffer(s._roots[e]);const i=sl(0,s,t,n);return lt.clearBuffer(),i}function sl(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:o}=lt;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),vh.set(t.boundingBox.min,t.boundingBox.max,n),i=vh),$t(c,a)){const u=e.geometry,h=u.index,f=u.attributes.position,d=t.index,g=t.attributes.position,b=nn(s,o),m=ln(c,a);if(Qs.copy(n).invert(),t.boundsTree)return pt(s,r,ma),ma.matrix.copy(Qs),ma.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>ma.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=b,_=m+b;v<_;v++)if(_t(hs,3*e.resolveTriangleIndex(v),h,f),hs.needsUpdate=!0,x.intersectsTriangle(hs))return!0;return!1}});for(let p=b,x=m+b;p<x;p++){const v=e.resolveTriangleIndex(p);_t(us,3*v,h,f),us.a.applyMatrix4(Qs),us.b.applyMatrix4(Qs),us.c.applyMatrix4(Qs),us.needsUpdate=!0;for(let _=0,M=d.count;_<M;_+=3)if(_t(hs,_,d,g),hs.needsUpdate=!0,us.intersectsTriangle(hs))return!0}}else{const u=s+8,h=o[s+6];return pt(u,r,pa),!!(i.intersectsBox(pa)&&sl(u,e,t,n,i)||(pt(h,r,pa),i.intersectsBox(pa)&&sl(h,e,t,n,i)))}}const ga=new Ie,Xo=new jt,er=new jt,Bv=new P,kv=new P,zv=new P,Hv=new P;function Gv(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Xo.set(e.boundingBox.min,e.boundingBox.max,t),Xo.needsUpdate=!0;const o=s.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,h=e.index,f=fn.getPrimitive(),d=fn.getPrimitive();let g=Bv,b=kv,m=null,p=null;i&&(m=zv,p=Hv);let x=1/0,v=null,_=null;return ga.copy(t).invert(),er.matrix.copy(ga),s.shapecast({boundsTraverseOrder:M=>Xo.distanceToBox(M),intersectsBounds:(M,T,w)=>w<x&&w<a?(T&&(er.min.copy(M.min),er.max.copy(M.max),er.needsUpdate=!0),!0):!1,intersectsRange:(M,T)=>{if(e.boundsTree){const w=e.boundsTree;return w.shapecast({boundsTraverseOrder:R=>er.distanceToBox(R),intersectsBounds:(R,S,y)=>y<x&&y<a,intersectsRange:(R,S)=>{for(let y=R,C=R+S;y<C;y++){const I=w.resolveTriangleIndex(y);_t(d,3*I,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let D=M,F=M+T;D<F;D++){const k=s.resolveTriangleIndex(D);_t(f,3*k,l,c),f.needsUpdate=!0;const B=f.distanceToTriangle(d,g,m);if(B<x&&(b.copy(g),p&&p.copy(m),x=B,v=D,_=y),B<r)return!0}}}})}else{const w=Ns(e);for(let R=0,S=w;R<S;R++){_t(d,3*R,h,u),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let y=M,C=M+T;y<C;y++){const I=s.resolveTriangleIndex(y);_t(f,3*I,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(d,g,m);if(D<x&&(b.copy(g),p&&p.copy(m),x=D,v=y,_=R),D<r)return!0}}}}}),fn.releasePrimitive(f),fn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=x,n.faceIndex=v,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(ga),b.applyMatrix4(ga),i.distance=b.sub(i.point).length(),i.faceIndex=_),n)}function Vv(){return typeof SharedArrayBuffer<"u"}const lr=new lt.constructor,Fa=new lt.constructor,pi=new Rl(()=>new ct),fs=new ct,ds=new ct,jo=new ct,qo=new ct;let Ko=!1;function Wv(s,e,t,n){if(Ko)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ko=!0;const i=s._roots,r=e._roots;let a,o=0,c=0;const l=new Ie().copy(t).invert();for(let u=0,h=i.length;u<h;u++){lr.setBuffer(i[u]),c=0;const f=pi.getPrimitive();pt(0,lr.float32Array,f),f.applyMatrix4(l);for(let d=0,g=r.length;d<g&&(Fa.setBuffer(r[d]),a=_n(0,0,t,l,n,o,c,0,0,f),Fa.clearBuffer(),c+=r[d].length,!a);d++);if(pi.releasePrimitive(f),lr.clearBuffer(),o+=i[u].length,a)break}return Ko=!1,a}function _n(s,e,t,n,i,r=0,a=0,o=0,c=0,l=null,u=!1){let h,f;u?(h=Fa,f=lr):(h=lr,f=Fa);const d=h.float32Array,g=h.uint32Array,b=h.uint16Array,m=f.float32Array,p=f.uint32Array,x=f.uint16Array,v=s*2,_=e*2,M=$t(v,b),T=$t(_,x);let w=!1;if(T&&M)u?w=i(nn(e,p),ln(e*2,x),nn(s,g),ln(s*2,b),c,a+e,o,r+s):w=i(nn(s,g),ln(s*2,b),nn(e,p),ln(e*2,x),o,r+s,c,a+e);else if(T){const R=pi.getPrimitive();pt(e,m,R),R.applyMatrix4(t);const S=un(s),y=hn(s,g);pt(S,d,fs),pt(y,d,ds);const C=R.intersectsBox(fs),I=R.intersectsBox(ds);w=C&&_n(e,S,n,t,i,a,r,c,o+1,R,!u)||I&&_n(e,y,n,t,i,a,r,c,o+1,R,!u),pi.releasePrimitive(R)}else{const R=un(e),S=hn(e,p);pt(R,m,jo),pt(S,m,qo);const y=l.intersectsBox(jo),C=l.intersectsBox(qo);if(y&&C)w=_n(s,R,t,n,i,r,a,o,c+1,l,u)||_n(s,S,t,n,i,r,a,o,c+1,l,u);else if(y)if(M)w=_n(s,R,t,n,i,r,a,o,c+1,l,u);else{const I=pi.getPrimitive();I.copy(jo).applyMatrix4(t);const D=un(s),F=hn(s,g);pt(D,d,fs),pt(F,d,ds);const k=I.intersectsBox(fs),B=I.intersectsBox(ds);w=k&&_n(R,D,n,t,i,a,r,c,o+1,I,!u)||B&&_n(R,F,n,t,i,a,r,c,o+1,I,!u),pi.releasePrimitive(I)}else if(C)if(M)w=_n(s,S,t,n,i,r,a,o,c+1,l,u);else{const I=pi.getPrimitive();I.copy(qo).applyMatrix4(t);const D=un(s),F=hn(s,g);pt(D,d,fs),pt(F,d,ds);const k=I.intersectsBox(fs),B=I.intersectsBox(ds);w=k&&_n(S,D,n,t,i,a,r,c,o+1,I,!u)||B&&_n(S,F,n,t,i,a,r,c,o+1,I,!u),pi.releasePrimitive(I)}}return w}const ba=new jt,yh=new ct,Xv={strategy:Tf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Wa{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:i.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:i,index:a?a.array:null,indirectBuffer:r},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:a}=e,o=new Wa(t,{...n,[ko]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new gt(e.index,1,!1);t.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Xv,[ko]:!1},t),t.useSharedArrayBuffer&&!Vv())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[ko]||(av(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ct))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?Dv:vv)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===Ga;if(u){const h=i[o+6],f=r[l+14];e(c,u,new Float32Array(n,o*4,6),h,f)}else{const h=o+cr/4,f=i[o+6],d=i[o+7];e(c,u,new Float32Array(n,o*4,6),d)||(a(h,c+1),a(f,c+1))}}}raycast(e,t=dn,n=0,i=1/0){const r=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),u=a.groups,h=c?t.side:t,f=this.indirect?Uv:Tv;for(let d=0,g=r.length;d<g;d++){const b=l?t[u[d].materialIndex].side:h,m=o.length;if(f(this,d,b,e,o,n,i),l){const p=u[d].materialIndex;for(let x=m,v=o.length;x<v;x++)o[x].face.materialIndex=p}}return o}raycastFirst(e,t=dn,n=0,i=1/0){const r=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const u=a.groups,h=o?t.side:t,f=this.indirect?Nv:wv;for(let d=0,g=r.length;d<g;d++){const b=c?t[u[d].materialIndex].side:h,m=f(this,d,b,e,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?Ov:Av;for(let a=0,o=i.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=fn.getPrimitive(),n=this.indirect?Sv:xv;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const h=a;a=(f,d,g,b,m)=>h(f,d,g,b,m)?!0:n(f,d,this,o,g,b,t)}else a||(o?a=(h,f,d,g)=>n(h,f,this,o,d,g,t):a=(h,f,d)=>d);let c=!1,l=0;const u=this._roots;for(let h=0,f=u.length;h<f;h++){const d=u[h];if(c=fv(this,h,r,a,i,l),c)break;l+=d.byteLength}return fn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const a=fn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const b=this.resolveTriangleIndex(g);_t(a,b*3,o,c)}:g=>{_t(a,g*3,o,c)},u=fn.getPrimitive(),h=e.geometry.index,f=e.geometry.attributes.position,d=e.indirect?g=>{const b=e.resolveTriangleIndex(g);_t(u,b*3,h,f)}:g=>{_t(u,g*3,h,f)};if(r){const g=(b,m,p,x,v,_,M,T)=>{for(let w=p,R=p+x;w<R;w++){d(w),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let S=b,y=b+m;S<y;S++)if(l(S),a.needsUpdate=!0,r(a,u,S,w,v,_,M,T))return!0}return!1};if(i){const b=i;i=function(m,p,x,v,_,M,T,w){return b(m,p,x,v,_,M,T,w)?!0:g(m,p,x,v,_,M,T,w)}}else i=g}return Wv(this,e,t,i)}intersectsBox(e,t){return ba.set(e.min,e.max,t),ba.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ba.intersectsBox(n),intersectsTriangle:n=>ba.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,a=1/0){return(this.indirect?Gv:Lv)(this,e,t,n,i,r,a)}closestPointToPoint(e,t={},n=0,i=1/0){return dv(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{pt(0,new Float32Array(n),yh),e.union(yh)}),e}}function Mh(s,e,t){return s===null?null:(s.point.applyMatrix4(e.matrixWorld),s.distance=s.point.distanceTo(t.ray.origin),s.object=e,s)}const _a=new ii,Sh=new P,Th=new Ie,jv=mt.prototype.raycast,qv=Op.prototype.raycast,Eh=new P,Ct=new mt,xa=[];function Kv(s,e){this.isBatchedMesh?Yv.call(this,s,e):$v.call(this,s,e)}function Yv(s,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Ct.material=this.material,Ct.geometry=this.geometry;const a=Ct.geometry.boundsTree,o=Ct.geometry.drawRange;Ct.geometry.boundingSphere===null&&(Ct.geometry.boundingSphere=new Ot);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const u=n[c].geometryIndex;if(Ct.geometry.boundsTree=t[u],this.getMatrixAt(c,Ct.matrixWorld).premultiply(r),!Ct.geometry.boundsTree){this.getBoundingBoxAt(u,Ct.geometry.boundingBox),this.getBoundingSphereAt(u,Ct.geometry.boundingSphere);const h=i[u];Ct.geometry.setDrawRange(h.start,h.count)}Ct.raycast(s,xa);for(let h=0,f=xa.length;h<f;h++){const d=xa[h];d.object=this,d.batchId=c,e.push(d)}xa.length=0}Ct.geometry.boundsTree=a,Ct.geometry.drawRange=o,Ct.material=null,Ct.geometry=null}else qv.call(this,s,e)}function $v(s,e){if(this.geometry.boundsTree){if(this.material===void 0)return;Th.copy(this.matrixWorld).invert(),_a.copy(s.ray).applyMatrix4(Th),Eh.setFromMatrixScale(this.matrixWorld),Sh.copy(_a.direction).multiply(Eh);const t=Sh.length(),n=s.near/t,i=s.far/t,r=this.geometry.boundsTree;if(s.firstHitOnly===!0){const a=Mh(r.raycastFirst(_a,this.material,n,i),this,s);a&&e.push(a)}else{const a=r.raycast(_a,this.material,n,i);for(let o=0,c=a.length;o<c;o++){const l=Mh(a[o],this,s);l&&e.push(l)}}}else jv.call(this,s,e)}function Jv(s={}){return this.boundsTree=new Wa(this,s),this.boundsTree}function Zv(){this.boundsTree=null}const Qv=matchMedia("(pointer: coarse)").matches,ey=Qv||(navigator.deviceMemory??8)<8,ri=ey?{model:"house_mobile.glb",lightmapSuffix:"_half",shadowSize:2048,msaa:2,probeSize:64,mirrorRes:512,maxPixelRatio:1.5}:{model:"house_baked.glb",lightmapSuffix:"",shadowSize:4096,msaa:4,probeSize:128,mirrorRes:1024,maxPixelRatio:2};async function ty(s,e,t){const{size:n,logMin:i,logMax:r}=e.lut,a=new Uint16Array(await(await fetch(t)).arrayBuffer()),o=new Uint16Array(n**3*4);for(let ae=0;ae<n**3;ae++){for(let Ce=0;Ce<3;Ce++)o[ae*4+Ce]=ki.toHalfFloat(a[ae*3+Ce]/65535);o[ae*4+3]=ki.toHalfFloat(1)}const c=new Kh(o,n,n,n);c.type=tn,c.format=Gt,c.minFilter=c.magFilter=vt,c.wrapS=c.wrapT=c.wrapR=vn,c.unpackAlignment=1,c.needsUpdate=!0;const l=Math.min(devicePixelRatio,ri.maxPixelRatio),u=1/l;let h=Math.min(1,1.5/l);s.setPixelRatio(l);const f=s.extensions,d=f.has("EXT_color_buffer_float")||f.has("EXT_color_buffer_half_float"),g=new kn(1,1,{type:d?tn:sn,samples:ri.msaa,stencilBuffer:!0}),b=64,m=36,p=new kn(b,m,{type:sn}),x=new Uint8Array(b*m*4),v=new zn({uniforms:{tHDR:{value:g.texture},tLUT:{value:c},exposure:{value:2**e.exposure},uvScale:{value:1},logMin:{value:i},logMax:{value:r},lutSize:{value:n},dither:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      precision highp sampler3D;
      uniform sampler2D tHDR; uniform sampler3D tLUT;
      uniform float exposure, logMin, logMax, lutSize, dither, uvScale;
      varying vec2 vUv;
      float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec3 c = max(texture2D(tHDR, vUv * uvScale).rgb * exposure, vec3(0.0));
        vec3 t = clamp((log2(max(c, vec3(1e-9))) - logMin) / (logMax - logMin), 0.0, 1.0);
        vec3 o = texture(tLUT, t * (lutSize - 1.0) / lutSize + 0.5 / lutSize).rgb;
        o += dither * (hash(gl_FragCoord.xy) - 0.5) / 255.0;
        gl_FragColor = vec4(o, 1.0);
      }`,depthTest:!1,depthWrite:!1}),_=new mt(new Ls(2,2),v);_.frustumCulled=!1;const M=new rf;M.add(_);const T=new ka;let w=e.exposure,R=e.exposure,S=0,y=0,C=!1;const I=new Float32Array(b*m);let D=1/60,F=0,k=innerWidth,B=innerHeight;function Y(){v.uniforms.dither.value=0,s.setRenderTarget(p),s.render(M,T),v.uniforms.dither.value=1}function O(){for(let ae=0;ae<I.length;ae++)I[ae]=(.2126*x[ae*4]+.7152*x[ae*4+1]+.0722*x[ae*4+2])/255;return I.sort(),Math.max(I[I.length>>1],1e-4)}const K=(ae,Ce,Be)=>Ln.clamp(ae+(Math.log(Be)-Math.log(Ce))/.35,-1,8);function ee(ae,Ce){k=ae,B=Ce,s.setSize(k,B,!1),s.domElement.style.width=`${k}px`,s.domElement.style.height=`${B}px`,g.setSize(Math.round(k*l),Math.round(B*l)),ce()}function ce(){const ae=Math.max(1,Math.round(g.width*h)),Ce=Math.max(1,Math.round(g.height*h));g.viewport.set(0,0,ae,Ce),g.scissor.set(0,0,ae,Ce),g.scissorTest=h<1,v.uniforms.uvScale.value=h}function Me(ae){if(D+=(ae-D)*.05,(F+=ae)<.5)return;const Ce=D>1/55?h*.92:D<1/80?h*1.04:h,Be=Ln.clamp(Ce,u,1);Math.abs(Be-h)>.005&&(h=Be,ce(),F=0)}return ee(innerWidth,innerHeight),{get exposure(){return w},snap(){y=4},setSize:ee,render(ae,Ce,Be,q){if(s.setRenderTarget(g),s.render(ae,Ce),v.uniforms.exposure.value=2**w,q==null)R=e.exposure;else if(y>0)Y(),s.readRenderTargetPixels(p,0,0,b,m,x),w=R=K(w,O(),q),y--;else if(!C&&S++%6===0){const Z=w;Y(),C=!0,s.readRenderTargetPixelsAsync(p,0,0,b,m,x).then(()=>{R=K(Z,O(),q)}).finally(()=>{C=!1})}y===0&&Me(Be),w+=(R-w)*(1-Math.exp(-Be/.6)),v.uniforms.exposure.value=2**w,s.setRenderTarget(null),s.render(M,T)}}}const ny=1,iy=.9;function sy(s,e,t){const n=s.extensions,i=n.has("EXT_color_buffer_float")||n.has("EXT_color_buffer_half_float"),r=new sf(ri.probeSize,{type:i?tn:sn,generateMipmaps:!1}),a=new tf(.05,300,r),o=a.children;let c=null,l=-1;const u=new P(1/0,0,0);function h(g){const b=s.getRenderTarget(),m=s.clippingPlanes;s.clippingPlanes=[],s.setRenderTarget(r,g),s.render(e,o[g]),s.setRenderTarget(b),s.clippingPlanes=m}function f(){c=t.fromCubemap(r.texture,c),e.environment=c.texture}function d(g){u.copy(g),a.position.copy(g),a.coordinateSystem!==s.coordinateSystem&&(a.coordinateSystem=s.coordinateSystem,a.updateCoordinateSystem()),a.updateMatrixWorld(!0)}return{update(g,b=!1){if(b){d(g);for(let m=0;m<6;m++)h(m);f(),l=-1;return}if(l===-1){if(g.distanceToSquared(u)<iy**2)return;d(g),l=0}l<6?h(l++):(f(),l=-1)}}}function ry(s,e="pad"){const t={move:new ze,turn:0,onLook:null,onTap:null,lookScale:null,active:!1,show(){}};if(!matchMedia("(pointer: coarse)").matches)return t;const n=172,i="rgba(255,255,255,.16)",r="rgba(255,255,255,.75)",a=document.createElement("div");a.style.cssText=`position:fixed;left:calc(18px + env(safe-area-inset-left));bottom:calc(22px + env(safe-area-inset-bottom));width:${n}px;height:${n}px;z-index:5;touch-action:none;opacity:0;transition:opacity .4s;pointer-events:none;border-radius:50%;background:radial-gradient(circle at 50% 42%, rgba(0,0,0,.34), rgba(0,0,0,.18) 70%, rgba(0,0,0,.05));box-shadow:inset 0 3px 8px rgba(0,0,0,.45), 0 1px 0 rgba(255,255,255,.12);perspective:420px`;const o=52,c=148,l=(c-o)/2,u=l+o,h=7,f=`M${l},${h} Q${l},0 ${l+h},0 H${u-h} Q${u},0 ${u},${h} V${l} H${c-h} Q${c},${l} ${c},${l+h} V${u-h} Q${c},${u} ${c-h},${u} H${u} V${c-h} Q${u},${c} ${u-h},${c} H${l+h} Q${l},${c} ${l},${c-h} V${u} H${h} Q0,${u} 0,${u-h} V${l+h} Q0,${l} ${h},${l} H${l} Z`,d=(O,K,ee)=>`<path d="M0,-7 L7,5 L-7,5 Z" transform="translate(${O} ${K}) rotate(${ee})"/>`,g=c/2,b=21,m=document.createElement("div");m.style.cssText=`position:absolute;left:${(n-c)/2}px;top:${(n-c)/2}px;width:${c}px;height:${c}px;transition:transform .09s ease-out;filter:drop-shadow(0 4px 3px rgba(0,0,0,.5))`,m.innerHTML=`<svg width="${c}" height="${c}" viewBox="0 0 ${c} ${c}">
    <defs>
      <linearGradient id="dp-face" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#4a4a50"/><stop offset=".5" stop-color="#2c2c31"/><stop offset="1" stop-color="#1b1b1f"/>
      </linearGradient>
      <radialGradient id="dp-dimple" cx=".5" cy=".42" r=".6">
        <stop offset="0" stop-color="#141417"/><stop offset=".8" stop-color="#2a2a2f"/><stop offset="1" stop-color="#3a3a40"/>
      </radialGradient>
    </defs>
    <path d="${f}" fill="url(#dp-face)" stroke="rgba(0,0,0,.55)" stroke-width="1.2"/>
    <path d="${f}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="1.2" transform="translate(0 1)"/>
    <circle cx="${g}" cy="${g}" r="15" fill="url(#dp-dimple)"/>
    <g data-dir="up" fill="${i}">${d(g,g-o-b+30,0)}</g>
    <g data-dir="down" fill="${i}">${d(g,g+o+b-30,180)}</g>
    <g data-dir="left" fill="${i}">${d(g-o-b+30,g,-90)}</g>
    <g data-dir="right" fill="${i}">${d(g+o+b-30,g,90)}</g>
  </svg>`,a.appendChild(m);const p=Object.fromEntries([...m.querySelectorAll("[data-dir]")].map(O=>[O.dataset.dir,O]));document.body.appendChild(a),t.show=()=>{e==="pad"&&(a.style.opacity=1,a.style.pointerEvents="auto")};let x=null;function v(O,K){const ee={up:O>0,down:O<0,left:K>0,right:K<0};for(const[Me,ae]of Object.entries(p))ae.setAttribute("fill",ee[Me]?r:i);const ce=9;m.style.transform=O||K?`rotateX(${O*ce}deg) rotateY(${-K*ce}deg) scale(.985)`:"",m.style.filter=O||K?"drop-shadow(0 2px 2px rgba(0,0,0,.5))":"drop-shadow(0 4px 3px rgba(0,0,0,.5))"}function _(O){const K=a.getBoundingClientRect(),ee=O.clientX-(K.left+K.width/2),ce=O.clientY-(K.top+K.height/2);let Me=0,ae=0;if(Math.hypot(ee,ce)>14){const Ce=Math.round(Math.atan2(-ce,ee)/(Math.PI/4));Me=Ce>=1&&Ce<=3?1:Ce<=-1&&Ce>=-3?-1:0,ae=Math.abs(Ce)>=3?1:Math.abs(Ce)<=1?-1:0}t.move.set(0,Me),t.turn=ae,v(Me,ae)}function M(){x=null,t.move.set(0,0),t.turn=0,v(0,0)}a.addEventListener("pointerdown",O=>{if(x===null){x=O.pointerId,t.active=!0;try{a.setPointerCapture(O.pointerId)}catch{}_(O),O.preventDefault()}}),a.addEventListener("pointermove",O=>{O.pointerId===x&&_(O)}),a.addEventListener("pointerup",O=>{O.pointerId===x&&M()}),a.addEventListener("pointercancel",O=>{O.pointerId===x&&M()});let T=null,w=0,R=0,S=0,y=0,C=0,I=0,D=0,F=0,k=0;s.style.touchAction="none",s.addEventListener("pointerdown",O=>{O.pointerType!=="touch"||T!==null||(t.active=!0,k=0,F=0,T=O.pointerId,w=S=O.clientX,R=y=O.clientY,C=D=performance.now(),I=0)}),s.addEventListener("pointermove",O=>{if(O.pointerId!==T||(I=Math.max(I,Math.hypot(O.clientX-S,O.clientY-y)),I<8))return;const K=performance.now(),ee=O.clientX-w;K>D&&(F+=(ee/(K-D)-F)*.5),t.onLook?.(ee,O.clientY-R),w=O.clientX,R=O.clientY,D=K});const B=O=>{if(O.pointerId===T){if(T=null,O.type==="pointerup"&&I<12&&performance.now()-C<700){t.onTap?.(O.clientX,O.clientY);return}performance.now()-D<60&&Math.abs(F)>.25&&(k=F,Y(performance.now()))}};function Y(O){requestAnimationFrame(K=>{if(!k)return;const ee=Math.min(K-O,50);t.onLook?.(k*ee,0),k*=Math.exp(-ee/320),Math.abs(k)<.02?k=0:Y(K)})}return s.addEventListener("pointerup",B),s.addEventListener("pointercancel",B),t}const bn=.24,ay=1.72,Yo=1.5,va=1.7,wh=3.6,oy=9,cy=7,ly=18,$o=.0021,uy=.035,hy=2.4,fy=.16,dy=.5,py=.09,Jo=70,my=75,Ah=4,Zo=.3,Rh=.55;function gy({camera:s,dom:e,meshes:t,touch:n}){const i=a0(t.map(Tt)),r=new Wa(i);i.boundsTree=r;const a=new P,o=new P;let c=!1,l=0,u=0,h=0,f=0,d=0,g=0,b=Jo;const m=new Set;addEventListener("keydown",J=>m.add(J.code)),addEventListener("keyup",J=>m.delete(J.code)),addEventListener("blur",()=>m.clear());const p=()=>document.pointerLockElement===e;e.addEventListener("mousemove",J=>{p()&&(f-=J.movementX*$o,d=Ln.clamp(d-J.movementY*$o,-1.45,1.45))}),n.onLook=(J,le)=>{const ne=n.lookScale??$o*1.6;f-=J*ne,d=Ln.clamp(d-le*ne,-q,q)};const x=new Bn,v=new ct,_=new P,M=new P,T=new P,w=new P,R=new P;function S(){x.start.set(a.x,a.y+Zo+bn,a.z),x.end.set(a.x,a.y+ay-bn,a.z),w.copy(x.start);for(let J=0;J<3;J++){v.makeEmpty().expandByPoint(x.start).expandByPoint(x.end),v.min.addScalar(-bn),v.max.addScalar(bn);let le=!1;if(r.shapecast({intersectsBounds:ne=>ne.intersectsBox(v),intersectsTriangle:ne=>{const Te=ne.closestPointToSegment(x,_,M);if(Te<bn){if(T.subVectors(M,_).setY(0),T.lengthSq()<1e-12)return;T.normalize(),x.start.addScaledVector(T,bn-Te),x.end.addScaledVector(T,bn-Te),le=!0}}}),!le)break}return R.subVectors(x.start,w),a.x=x.start.x,a.z=x.start.z,R}const y=new ii(new P,new P(0,-1,0));function C(J,le,ne){y.origin.set(J,le,ne);const Te=r.raycastFirst(y,xt);return Te?Te.point.y:null}const I=new ii,D=new P,F=new P;function k(J){for(let le=0;le<2;le++)B(J)}function B(J){if(!(J.x*J.x+J.z*J.z<1e-8)){D.set(J.x,0,J.z).normalize();for(const le of[.5,1.3]){I.origin.set(a.x,a.y+le,a.z),I.direction.copy(D);const ne=r.raycastFirst(I,xt,0,bn+Rh);if(!ne)continue;F.copy(ne.face.normal).setY(0).normalize(),F.dot(D)>0&&F.negate();const Te=-(J.x*F.x+J.z*F.z);if(Te<=0)continue;const he=Ln.clamp((ne.distance-bn)/Rh,0,1),Ee=he*he*(3-2*he);J.x+=F.x*Te*(1-Ee),J.z+=F.z*Te*(1-Ee)}}}const Y=[[0,0],[1,0],[-1,0],[0,1],[0,-1]].map(([J,le])=>[J*bn*.8,le*bn*.8]);function O(J,le,ne){let Te=null;for(const[he,Ee]of Y){const Ye=C(J+he,le,ne+Ee);Ye!==null&&(Te===null||Ye>Te)&&(Te=Ye)}return Te}const K=new P,ee=new P,ce=new P,Me=new Sn(0,0,0,"YXZ");let ae=null,Ce=0,Be=0,q=1.45;const Z=new P;function be(J){ae=new P(J.x,0,J.z),Ce=0,Z.copy(a)}function Ne(J){const le=Be*(1-Math.exp(-J/.16));if(f+=le,Be-=le,Math.abs(Be)<.001&&(Be=0),!ae)return;const ne=ae.x-a.x,Te=ae.z-a.z,he=Math.hypot(ne,Te);if(he<.12){ae=null;return}if(he>.6){let Ee=Math.atan2(-ne,-Te)-f;Ee=Math.atan2(Math.sin(Ee),Math.cos(Ee)),Math.abs(Ee)<1.2&&(f+=Ee*(1-Math.exp(-J/.7)))}Ce=J>0&&a.distanceToSquared(Z)<(.25*J)**2?Ce+J:0,Z.copy(a),Ce>.4&&(ae=null)}function Se(){const J=ae.x-a.x,le=ae.z-a.z,ne=Math.hypot(J,le),Te=Math.min(va,ne*1.6+.15);ce.set(J/ne*Te,0,le/ne*Te)}function Xe(J){const le=Ln.clamp((m.has("ArrowLeft")?1:0)-(m.has("ArrowRight")?1:0)+n.turn,-1,1);g+=(le*hy-g)*(1-Math.exp(-J/fy)),f+=g*J,(m.has("ArrowLeft")||m.has("ArrowRight")||m.has("ArrowUp")||m.has("ArrowDown")||n.turn||n.move.y||ae||Be)&&(d*=Math.exp(-J/dy)),Ne(J),d=Ln.clamp(d,-q,q);const ne=1-Math.exp(-J/uy);u+=(f-u)*ne,h+=(d-h)*ne,K.set(-Math.sin(u),0,-Math.cos(u)),ee.set(-K.z,0,K.x),ce.set(0,0,0),(m.has("KeyW")||m.has("ArrowUp"))&&ce.add(K),(m.has("KeyS")||m.has("ArrowDown"))&&ce.sub(K),m.has("KeyD")&&ce.add(ee),m.has("KeyA")&&ce.sub(ee),ce.addScaledVector(K,n.move.y).addScaledVector(ee,n.move.x);let Te=Math.min(1,ce.length());const he=m.has("ShiftLeft")||m.has("ShiftRight");Te>0?(ce.setLength(Te*(he?wh:va)),ae=null):ae&&(Se(),Te=Math.min(1,ce.length()/va)),Te>0&&k(ce);const Ee=1-Math.exp(-J*(Te>0?oy:cy));o.x+=(ce.x-o.x)*Ee,o.z+=(ce.z-o.z)*Ee;const Ye=J/Ah;for(let E=0;E<Ah;E++){a.x+=o.x*Ye,a.z+=o.z*Ye;const G=S();if(G.lengthSq()>1e-10){G.normalize();const Q=o.x*G.x+o.z*G.z;Q<0&&(o.x-=G.x*Q,o.z-=G.z*Q)}const X=O(a.x,a.y+Zo+.05,a.z);X!==null&&X>=a.y-Zo&&(c||X>=a.y+o.y*Ye)?(a.y=X,o.y=0,c=!0):(c=!1,o.y-=ly*Ye,a.y+=o.y*Ye,X!==null&&a.y<X&&(a.y=X,o.y=0,c=!0))}a.y<-20&&it(U),l+=(a.y+Yo-l)*(1-Math.exp(-J/py)),s.position.set(a.x,l,a.z),s.quaternion.setFromEuler(Me.set(h,u,0));const at=Math.hypot(o.x,o.z),L=Jo+(my-Jo)*Ln.smoothstep(at,va,wh);b+=(L-b)*(1-Math.exp(-J/.25)),Math.abs(s.fov-b)>.01&&(s.fov=b,s.updateProjectionMatrix())}function Tt(J){const le=J.geometry.attributes.position,ne=new Float32Array(le.count*3),Te=new P;for(let Ye=0;Ye<le.count;Ye++)Te.fromBufferAttribute(le,Ye).applyMatrix4(J.matrixWorld).toArray(ne,Ye*3);const he=new At;he.setAttribute("position",new gt(ne,3));const Ee=J.geometry.index;return he.setIndex(new gt(Ee?Uint32Array.from(Ee.array):Uint32Array.from({length:le.count},(Ye,at)=>at),1)),he}let U=null;function it(J){U=J;const[le,ne,Te]=J.pos;a.set(le,C(le,ne+.2,Te)??ne-Yo,Te),o.set(0,0,0),g=0,ae=null,Be=0,l=a.y+Yo;const he=new P(...J.dir);u=f=Math.atan2(-he.x,-he.z),h=d=0,Xe(0)}return{update:Xe,teleport:it,bvh:r,walkTo:be,turnBy(J){Be+=J},stop(){ae=null},get walking(){return ae!==null},set pitchLimit(J){q=J},get position(){return a},get speed(){return Math.hypot(o.x,o.z)}}}const Ch=[["Living room","toward window (photo 00)"],["Kitchen","kitchen"],["Dining","dining"],["Primary bedroom","primary bedroom"],["Primary bath","primary bath"],["Bedroom 2","bedroom 1"],["Bedroom 3","bedroom 2"],["Hall bath","hall bath"],["Back yard","back yard"]],by=`
  .tour { position: fixed; z-index: 6; opacity: 0; pointer-events: none; transition: opacity .4s;
    font: 600 17px/1.2 system-ui, -apple-system, sans-serif; color: #fff; -webkit-tap-highlight-color: transparent; }
  .tour.on { opacity: 1; pointer-events: auto; }
  .tour-bar { left: 0; right: 0; bottom: 0; display: flex; gap: 10px; overflow-x: auto; scrollbar-width: none;
    padding: 12px calc(14px + env(safe-area-inset-right)) calc(14px + env(safe-area-inset-bottom)) calc(14px + env(safe-area-inset-left));
    background: linear-gradient(transparent, rgba(0,0,0,.55) 35%); scroll-snap-type: x proximity; }
  .tour-bar::-webkit-scrollbar { display: none; }
  .tour button { font: inherit; color: inherit; border: 1.5px solid rgba(255,255,255,.55); cursor: pointer;
    background: rgba(18,18,20,.72); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
  .tour-room { flex: none; min-height: 52px; padding: 0 18px; border-radius: 26px; scroll-snap-align: start;
    white-space: nowrap; }
  .tour-room.here { background: #f2f0ec; color: #141414; border-color: #f2f0ec; }
  .tour-turn { bottom: calc(96px + env(safe-area-inset-bottom)); width: 64px; height: 64px; border-radius: 50%;
    display: grid; place-items: center; }
  .tour-turn svg { width: 30px; height: 30px; }
  .tour-turn:active, .tour-room:active { transform: scale(.95); }
`;function _y({views:s,goTo:e,turnBy:t}){const n=document.createElement("style");n.textContent=by,document.head.appendChild(n);const i=document.createElement("div");i.className="tour tour-bar";const r=[],a=Ch[0][1],o=document.createElement("button");o.className="tour-room",o.textContent="⟲ Start over",i.appendChild(o);for(const[f,d]of Ch){const g=s.find(m=>m.name===d);if(!g)continue;const b=document.createElement("button");b.className="tour-room",b.textContent=f,b.addEventListener("click",()=>{c(b),e(g)}),i.appendChild(b),r.push([b,d])}o.addEventListener("click",()=>{const[f]=r.find(([,d])=>d===a);c(f),e(s.find(d=>d.name===a)),i.scrollTo({left:0,behavior:"smooth"})});function c(f){for(const[d]of r)d.classList.toggle("here",d===f);f.scrollIntoView({inline:"nearest",behavior:"smooth",block:"nearest"})}const l=f=>`<svg viewBox="0 0 24 24" style="transform:scaleX(${f})"><path d="M14.5 5 7.5 12l7 7"
    fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,u=document.createElement("button"),h=document.createElement("button");return u.className=h.className="tour tour-turn",u.style.left="calc(14px + env(safe-area-inset-left))",h.style.right="calc(14px + env(safe-area-inset-right))",u.innerHTML=l(1),h.innerHTML=l(-1),u.setAttribute("aria-label","Turn left"),h.setAttribute("aria-label","Turn right"),u.addEventListener("click",()=>t(Math.PI/4)),h.addEventListener("click",()=>t(-Math.PI/4)),document.body.append(i,u,h),c(r[0][0]),{show(){for(const f of[i,u,h])f.classList.add("on")},here(f){const d=r.find(([,g])=>g===f);d&&c(d[0])}}}At.prototype.computeBoundsTree=Jv;At.prototype.disposeBoundsTree=Zv;mt.prototype.raycast=Kv;const Mr="/house/",Rt=new r0({antialias:!1,powerPreference:"high-performance"});Rt.setSize(innerWidth,innerHeight);Rt.toneMapping=ti;Rt.shadowMap.enabled=!0;Rt.shadowMap.type=Lh;Rt.shadowMap.autoUpdate=!1;document.body.appendChild(Rt.domElement);const Hn=new rf,wt=new Ft(70,innerWidth/innerHeight,.06,500);wt.layers.enable(1);const sr=document.documentElement.dataset.nav??"pad",Xa=ry(Rt.domElement,sr),Ps=document.getElementById("overlay"),Sr=document.getElementById("progress"),Tr=new df;let Cl=!1;Tr.onProgress=(s,e,t)=>{Cl||(Sr.textContent=`Loading ${Math.round(e/t*100)}%`)};const xy=s=>{s.total&&!Cl&&(Sr.textContent=`Loading ${Math.round(s.loaded/s.total*100)}%`)},ya=s=>fetch(`${Mr}${s}`,{cache:"no-cache"}).then(e=>e.json()),[xi,vy,yy,Pl]=await Promise.all([ya("look/meta.json"),ya("models/views.json"),ya("lightmaps/atlases.json"),ya("models/versions.json")]),Pf=s=>`${Mr}models/${s}.glb?v=${Pl[s]??""}`,Er=await ty(Rt,xi,`${Mr}look/look_lut.bin?v=${Pl.lut??""}`),If=new jc(Rt),Il=sy(Rt,Hn,If),My=new pf(Tr),Lf=Rt.capabilities.getMaxAnisotropy(),Df=[],Sy=yy.map(s=>{let e;return Df.push(new Promise(t=>{e=t})),My.load(`${Mr}lightmaps/atlas_${s.index}${ri.lightmapSuffix}.webp?v=${s.v??""}`,t=>{t.flipY=!1,t.colorSpace=Jn,t.channel=1,t.anisotropy=Lf,t.needsUpdate=!0,e()},void 0,e)}),Ty=(1/2**xi.exposure).toFixed(8);function Ey(s){s.fragmentShader=s.fragmentShader.replace("#include <emissivemap_fragment>",`
    #ifdef USE_EMISSIVEMAP
      vec3 lmE = pow( texture2D( emissiveMap, vEmissiveMapUv ).rgb, vec3( 2.2 ) );
      totalEmissiveRadiance = lmE / max( vec3( 1.0 ) - lmE, vec3( 1e-4 ) ) * ${Ty};
    #endif`).replace("#include <aomap_fragment>",`
      reflectedLight.directDiffuse = vec3( 0.0 );
      reflectedLight.directSpecular = vec3( 0.0 );
      #include <aomap_fragment>`)}const ja=await new H0(Tr).loadAsync(`${Mr}look/sky.hdr?v=${Pl.sky??""}`);ja.mapping=Ca;const wy=Iy(ja,xi.sun.dir);Hn.background=ja;Hn.backgroundRotation.set(0,wy,0);If.fromEquirectangular(ja).texture;const vi=new mf(new Le(...xi.sun.color),xi.sun.strength);vi.position.set(...xi.sun.dir).multiplyScalar(80);vi.castShadow=!0;vi.shadow.mapSize.set(ri.shadowSize,ri.shadowSize);vi.shadow.bias=-2e-4;vi.shadow.normalBias=.03;Object.assign(vi.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:200});Hn.add(vi,vi.target);const Ay=await new yf(Tr).setMeshoptDecoder(G0).loadAsync(Pf(ri.model.replace(".glb","")),xy),qa=Ay.scene,Qo=new Map,ec=new Map,tc=new Map;let nc=null;const rl=[];let Uf=null,Ff=null;qa.traverse(s=>{if(s.isMesh){s.castShadow=!0,s.receiveShadow=!0,s.material=Array.isArray(s.material)?s.material.map(e=>Ph(e,s)):Ph(s.material,s),(s.isInstancedMesh||/tree|shrub/i.test(s.name))&&s.layers.set(ny);for(const e of[].concat(s.material))e.metalness>.5&&!e.transparent&&(e.side=xt);for(const e of[].concat(s.material))e.name==="Sink basin steel"&&!rl.includes(e)&&rl.push(Object.assign(e,{envMapIntensity:.3}))}});Hn.add(qa);for(const s of xi.bulbs??[]){const e=new mt(new vl(s.radius,16,12),new Nn({color:new Le(...s.color).multiplyScalar(s.radiance)}));e.position.set(...s.pos),Hn.add(e)}qa.updateMatrixWorld(!0);Rt.shadowMap.needsUpdate=!0;const Nf=(await new yf(Tr).loadAsync(Pf("collision"))).scene;Nf.updateMatrixWorld(!0);const Of=[];Nf.traverse(s=>s.isMesh&&Of.push(s));const Yt=gy({camera:wt,dom:Rt.domElement,meshes:Of,touch:Xa});function Ph(s,e){const t=/^BAKED_(\d+)_r(\d+)(?:_s(\d+)_q(\d+))?/.exec(s.name);if(t){if(!Qo.has(s.name)){const r=t[3]?En:ws,a=new r({name:s.name,color:0,metalness:0,roughness:+t[2]/100,...t[3]&&{sheen:+t[3]/100,sheenRoughness:Math.max(.1,+t[4]/100),sheenColor:16777215},emissive:16777215,emissiveMap:Sy[+t[1]],side:xt});a.onBeforeCompile=Ey,a.customProgramCacheKey=()=>t[3]?"baked-sheen":"baked",Qo.set(s.name,a)}return Qo.get(s.name)}const n=s.name.toLowerCase();s.transmission&&(s.transmission=0);const i={"glass - amber":[1,.36,.06,.02,.55],"pink glass dish":[1,.3,.26,.85,.95]}[n];if(i){const[r,a,o,c,l]=i;return e.castShadow=!1,new ws({name:s.name,color:new Le(r*.12,a*.12,o*.12),emissive:new Le(r*c,a*c,o*c),roughness:.1,metalness:0,envMapIntensity:1.3,transparent:!0,opacity:l,depthWrite:!1})}if(/glass|mirror/.test(n)&&!/opal|globe/.test(n))n.includes("mirror")?Object.assign(s,{metalness:1,roughness:.02,color:new Le(.9,.9,.9)}):(Object.assign(s,{transparent:!0,opacity:n.includes("frosted")?.55:.12,roughness:n.includes("frosted")?.35:.02,metalness:0,depthWrite:!1}),e.castShadow=!1);else{if(e.geometry.attributes.color&&/island_tree|shrub|leaves|branches/.test(n))return Ry(s);if(n.includes("chain link"))return Cy();/pellicle|cane/.test(n)&&Object.assign(s,{transparent:!0,opacity:.75})}return s}function Ry(s){if(tc.has(s))return tc.get(s);const e=/leaves|shrub/.test(s.name.toLowerCase()),t=new Nn({name:s.name,map:e&&s.map?Py(s.map):s.map,vertexColors:!0,color:new Le(8,8,8),side:e?xt:dn,...e&&{alphaTest:.01,alphaToCoverage:!0}});return e&&(t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <alphatest_fragment>",`
        #ifdef USE_MAP
        {
          vec2 texel = vMapUv * vec2(textureSize(map, 0));
          float lod = max(0.0, 0.5 * log2(max(dot(dFdx(texel), dFdx(texel)), dot(dFdy(texel), dFdy(texel)))));
          float a = diffuseColor.a * (1.0 + lod * 0.25);
          diffuseColor.a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0);
        }
        #endif
        #include <alphatest_fragment>`)},t.customProgramCacheKey=()=>"foliage-a2c"),tc.set(s,t),t}function Cy(){if(nc)return nc;const s=new ws({name:"chain link",color:10132895,metalness:.8,roughness:.4,side:xt,alphaTest:.01,alphaToCoverage:!0});return s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFenceP;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vFenceP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFenceP;`).replace("#include <alphatest_fragment>",`
        {
          float along = vFenceP.x + vFenceP.z;                       // fences run along x or z
          vec2 g = vec2(along + vFenceP.y, along - vFenceP.y) / 0.07;  // 5 cm diamonds, rotated 45 degrees
          vec2 f = abs(fract(g) - 0.5);
          float d = 0.5 - max(f.x, f.y);                              // distance to the nearest wire
          float aa = max(fwidth(d), 1e-4);
          diffuseColor.a = 1.0 - smoothstep(0.035 - aa, 0.035 + aa, d);
        }
        #include <alphatest_fragment>`)},s.customProgramCacheKey=()=>"chainlink",nc=s,s}function Py(s){if(ec.has(s))return ec.get(s);const{width:e,height:t}=s.image,n=document.createElement("canvas");Object.assign(n,{width:e,height:t});const i=n.getContext("2d",{willReadFrequently:!0});i.drawImage(s.image,0,0);const r=i.getImageData(0,0,e,t),a=r.data;for(let c=0;c<a.length;c+=4){const l=Math.max(a[c],a[c+1],a[c+2]);a[c+3]=Math.min(255,Math.max(0,(l-6)*24))}i.putImageData(r,0,0);const o=new Hp(n);return Object.assign(o,{flipY:s.flipY,colorSpace:s.colorSpace,wrapS:s.wrapS,wrapT:s.wrapT,anisotropy:Lf,channel:s.channel}),ec.set(s,o),o}function Iy(s,e){const{data:t,width:n,height:i}=s.image,r=t instanceof Uint16Array,a=f=>r?ki.fromHalfFloat(t[f]):t[f];let o=0,c=0;for(let f=0;f<n*i;f+=3){const d=a(f*4)+a(f*4+1)+a(f*4+2);d>o&&(o=d,c=f)}const u=((c%n+.5)/n-.5)*Math.PI*2;return Math.atan2(e[2],e[0])-u}const wr=matchMedia("(pointer: coarse)").matches;await Promise.all(Df);Cl=!0;Sr.textContent=wr?"Tap to explore":"Click to explore";let ei=!1;const Ly=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"]);addEventListener("keydown",s=>{s.code.startsWith("Arrow")&&s.preventDefault(),!(wr||In)&&(!ei&&Ly.has(s.code)?(ei=!0,Ps.classList.add("hidden")):ei&&s.code==="Escape"&&document.pointerLockElement!==Rt.domElement&&(ei=!1,Sr.textContent="Paused · click or press an arrow key to continue",Ps.classList.remove("hidden")))});function Bf(){const s=Rt.domElement;Promise.resolve(s.requestPointerLock({unadjustedMovement:!0})).catch(()=>s.requestPointerLock()).catch(()=>{})}Ps.addEventListener("click",()=>{if(wr){Ps.classList.add("hidden"),ei=!0,Xa.show(),kf?.show(),Ff?.();return}Bf()});Rt.domElement.addEventListener("click",()=>{ei&&!wr&&Bf()});document.addEventListener("pointerlockchange",()=>{const s=document.pointerLockElement===Rt.domElement;Ps.classList.toggle("hidden",s),ei=s,s||(Sr.textContent="Paused · click or press an arrow key to continue")});const _r=vy.filter(s=>s.name!=="dollhouse");function Dy(s){let e=null,t=1/0;for(const i of _r){const r=(i.pos[0]-s.x)**2+(i.pos[2]-s.z)**2;r<t&&(t=r,e=i)}const n=xi.meterTargets;return e?.name.includes("toward")?n.toward:e?.name.includes("bath")?n.bath:n.default}let kf=null;wr&&(Xa.lookScale=-Ln.degToRad(wt.fov)/innerHeight);if(sr==="tap"||sr==="tour"){Yt.pitchLimit=.5;const s=new mt(new xl(.16,.22,48).rotateX(-Math.PI/2),new Nn({color:16777215,transparent:!0,opacity:0,depthWrite:!1}));s.renderOrder=2,Hn.add(s);let e=1;Uf=c=>{e=Math.min(1,e+c/.9),s.material.opacity=.85*(1-e)**1.5,s.scale.setScalar(1+e*.35)};const t=new vm,n=new ze,i=new P,r=document.createElement("div");r.textContent="Tap the floor to walk there",r.style.cssText=`position:fixed;left:50%;transform:translateX(-50%);z-index:6;pointer-events:none;bottom:calc(${sr==="tour"?172:40}px + env(safe-area-inset-bottom));padding:12px 18px;border-radius:24px;background:rgba(18,18,20,.78);color:#fff;font:600 17px/1.2 system-ui,-apple-system,sans-serif;opacity:0;transition:opacity .5s;white-space:nowrap`,document.body.appendChild(r);let a=!1;Ff=()=>{a=!0,r.style.opacity=1;const c=new P(0,0,-2.2).applyQuaternion(wt.quaternion).setY(0);s.position.set(Yt.position.x+c.x,Yt.position.y+.01,Yt.position.z+c.z);const l=()=>{a&&(e=0,setTimeout(l,1100))};l(),setTimeout(()=>o(),7e3)};const o=()=>{a=!1,r.style.opacity=0};if(Xa.onTap=(c,l)=>{if(!ei)return;o(),n.set(c/innerWidth*2-1,-(l/innerHeight)*2+1),t.setFromCamera(n,wt);const u=Yt.bvh.raycastFirst(t.ray,xt);if(!u)return;const h=u.point.clone();(u.face.normal.y<.7||h.y>Yt.position.y+.45)&&(i.copy(t.ray.direction).setY(0).normalize(),h.addScaledVector(i,-.55),h.y=Yt.position.y),Yt.walkTo(h),s.position.set(h.x,(u.face.normal.y>=.7?u.point.y:Yt.position.y)+.01,h.z),e=0},sr==="tour"){const c=document.createElement("div");c.style.cssText="position:fixed;inset:0;background:#000;opacity:0;pointer-events:none;transition:opacity .22s;z-index:4",document.body.appendChild(c);let l=!1;kf=_y({views:_r,turnBy:u=>Yt.turnBy(u),goTo:u=>{l||(l=!0,c.style.opacity=1,setTimeout(()=>{const[h,,f]=u.dir,d=Math.hypot(h,f)||1;Yt.teleport({...u,pos:[u.pos[0]+h/d*.3,u.pos[1],u.pos[2]+f/d*.3]}),Il.update(wt.position,!0),Er.snap(),c.style.opacity=0,l=!1},240))}})}}qa.traverse(s=>{s.isMesh&&[s.material].flat().every(e=>e.name.startsWith("Mirror"))&&Uy(s)});function Uy(s){const e=new ct().setFromObject(s),t=e.getSize(new P),n=e.getCenter(new P),i=["x","y","z"].reduce((u,h)=>t[h]<t[u]?h:u),r=new P().setComponent("xyz".indexOf(i),1),a=u=>{const h=n.clone().addScaledVector(u,t[i]/2+.01);return Yt.bvh.raycastFirst(new ii(h,u),xt)?.distance??10};a(r.clone().negate())>a(r)&&r.negate();const[o,c]=i==="x"?[t.z,t.y]:i==="z"?[t.x,t.y]:[t.x,t.z],l=new Ha(new Ls(o,c),{textureWidth:ri.mirrorRes,textureHeight:Math.round(ri.mirrorRes*c/o),clipBias:.003,color:14606046});l.position.copy(n).addScaledVector(r,t[i]/2+.002),l.lookAt(l.position.clone().add(r)),l.camera.layers.enableAll(),Hn.add(l),s.visible=!1}const In=(()=>{const s=new URLSearchParams(location.search);return s.get("pose")?.split(",").map(Number),_r.find(e=>e.name===s.get("shot"))})();In?(Ps.classList.add("hidden"),Er.setSize(innerWidth,innerWidth/In.aspect),Object.assign(wt,{fov:In.fov,aspect:In.aspect}),wt.updateProjectionMatrix(),wt.position.set(...In.pos),wt.up.set(...In.up),wt.lookAt(wt.position.clone().add(new P(...In.dir)))):Yt.teleport(_r.find(s=>/toward window/.test(s.name))??_r[0]);Il.update(wt.position,!0);for(const s of rl)s.envMap=Hn.environment;Er.snap();const Fy=new um;Rt.setAnimationLoop(()=>{const s=Math.min(Fy.getDelta(),.05);In||(Yt.update(ei?s:0),Il.update(wt.position),Uf?.(s)),Er.render(Hn,wt,s,Dy(wt.position))});addEventListener("resize",()=>{In||(wt.aspect=innerWidth/innerHeight,wt.updateProjectionMatrix(),Er.setSize(innerWidth,innerHeight))});
