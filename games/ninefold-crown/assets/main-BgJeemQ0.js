const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./build-DONUU1-K.js","./rolldown-runtime-XKyaHtl9.js","./bundler-BvtR3xrj.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,O=1031,ne=1033,k=33776,re=33777,A=33778,ie=33779,j=35840,ae=35841,oe=35842,se=35843,ce=36196,le=37492,ue=37496,de=37488,M=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,N=2301,Ie=2302,Le=2303,Re=2400,P=2401,ze=2402,Be=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=2e3;function Je(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ye(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Xe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ze(){let e=Xe(`canvas`);return e.style.display=`block`,e}var Qe={};function $e(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function et(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function F(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function I(...e){e=et(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function tt(...e){let t=e.join(` `);t in Qe||(Qe[t]=!0,F(...e))}function nt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var rt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},it=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},at=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ot=1234567,st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(at[e&255]+at[e>>8&255]+at[e>>16&255]+at[e>>24&255]+`-`+at[t&255]+at[t>>8&255]+`-`+at[t>>16&15|64]+at[t>>24&255]+`-`+at[n&63|128]+at[n>>8&255]+`-`+at[n>>16&255]+at[n>>24&255]+at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function pt(e,t,n){return e===t?0:(n-e)/(t-e)}function mt(e,t,n){return(1-n)*e+n*t}function ht(e,t,n,r){return mt(e,t,1-Math.exp(-n*r))}function gt(e,t=1){return t-Math.abs(dt(e,t*2)-t)}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function vt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function yt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bt(e,t){return e+Math.random()*(t-e)}function xt(e){return e*(.5-Math.random())}function St(e){e!==void 0&&(ot=e);let t=ot+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ct(e){return e*st}function wt(e){return e*ct}function Tt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Et(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Dt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ot(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:F(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function At(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var jt={DEG2RAD:st,RAD2DEG:ct,generateUUID:lt,clamp:ut,euclideanModulo:dt,mapLinear:ft,inverseLerp:pt,lerp:mt,damp:ht,pingpong:gt,smoothstep:_t,smootherstep:vt,randInt:yt,randFloat:bt,randFloatSpread:xt,seededRandom:St,degToRad:Ct,radToDeg:wt,isPowerOfTwo:Tt,ceilPowerOfTwo:Et,floorPowerOfTwo:Dt,setQuaternionFromProperEuler:Ot,normalize:At,denormalize:kt},Mt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:F(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pt.copy(this).projectOnVector(e),this.sub(Pt)}reflect(e){return this.sub(Pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pt=new L,Ft=new Nt,It=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return tt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Lt.makeScale(e,t)),this}rotate(e){return tt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Lt.makeRotation(-e)),this}translate(e,t){return tt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lt=new It,Rt=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zt=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bt(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ut(e.r),e.g=Ut(e.g),e.b=Ut(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return tt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return tt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var Vt=Bt();function Ht(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ut(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Wt,Gt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wt===void 0&&(Wt=Xe(`canvas`)),Wt.width=e.width,Wt.height=e.height;let t=Wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Xe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ht(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ht(t[e]/255)*255):t[e]=Ht(t[e]);return{data:t,width:e.width,height:e.height}}return F(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Kt=0,qt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Jt(r[t].image)):e.push(Jt(r[t]))}else e=Jt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Jt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Gt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(F(`Texture: Unable to serialize Texture.`),{})}var Yt=0,Xt=new L,Zt=class r extends it{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=lt(),this.name=``,this.source=new qt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xt).x}get height(){return this.source.getSize(Xt).y}get depth(){return this.source.getSize(Xt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){F(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?F(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null,Zt.DEFAULT_MAPPING=300,Zt.DEFAULT_ANISOTROPY=1;var Qt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$t=class extends it{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];let r=new Zt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new qt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},en=class extends $t{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},tn=class extends Zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nn=class extends Zt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},rn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/an.setFromMatrixColumn(e,0).length(),i=1/an.setFromMatrixColumn(e,1).length(),a=1/an.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sn,e,cn)}lookAt(e,t,n){let r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ln.crossVectors(n,dn),ln.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ln.crossVectors(n,dn)),ln.normalize(),un.crossVectors(dn,ln),r[0]=ln.x,r[4]=un.x,r[8]=dn.x,r[1]=ln.y,r[5]=un.y,r[9]=dn.y,r[2]=ln.z,r[6]=un.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],k=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*te+c*re,i[4]=a*S+o*E+s*O+c*A,i[8]=a*C+o*D+s*ne+c*ie,i[12]=a*w+o*ee+s*k+c*j,i[1]=l*x+u*T+d*te+f*re,i[5]=l*S+u*E+d*O+f*A,i[9]=l*C+u*D+d*ne+f*ie,i[13]=l*w+u*ee+d*k+f*j,i[2]=p*x+m*T+h*te+g*re,i[6]=p*S+m*E+h*O+g*A,i[10]=p*C+m*D+h*ne+g*ie,i[14]=p*w+m*ee+h*k+g*j,i[3]=_*x+v*T+y*te+b*re,i[7]=_*S+v*E+y*O+b*A,i[11]=_*C+v*D+y*ne+b*ie,i[15]=_*w+v*ee+y*k+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=an.set(r[0],r[1],r[2]).length(),o=an.set(r[4],r[5],r[6]).length(),s=an.set(r[8],r[9],r[10]).length();i<0&&(a=-a),on.copy(this);let c=1/a,l=1/o,u=1/s;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=l,on.elements[5]*=l,on.elements[6]*=l,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,t.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=qe,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},an=new L,on=new rn,sn=new L(0,0,0),cn=new L(1,1,1),ln=new L,un=new L,dn=new L,fn=new rn,pn=new Nt,mn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:F(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pn.setFromEuler(this),this.setFromQuaternion(pn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER=`XYZ`;var hn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},gn=0,_n=new L,vn=new Nt,yn=new rn,bn=new L,xn=new L,Sn=new L,Cn=new Nt,wn=new L(1,0,0),Tn=new L(0,1,0),En=new L(0,0,1),Dn={type:`added`},On={type:`removed`},kn={type:`childadded`,child:null},An={type:`childremoved`,child:null},jn=class e extends it{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gn++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new mn,r=new Nt,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rn},normalMatrix:{value:new It}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.multiply(vn),this}rotateOnWorldAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.premultiply(vn),this}rotateX(e){return this.rotateOnAxis(wn,e)}rotateY(e){return this.rotateOnAxis(Tn,e)}rotateZ(e){return this.rotateOnAxis(En,e)}translateOnAxis(e,t){return _n.copy(e).applyQuaternion(this.quaternion),this.position.add(_n.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wn,e)}translateY(e){return this.translateOnAxis(Tn,e)}translateZ(e){return this.translateOnAxis(En,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bn.copy(e):bn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(xn,bn,this.up):yn.lookAt(bn,xn,this.up),this.quaternion.setFromRotationMatrix(yn),r&&(yn.extractRotation(r.matrixWorld),vn.setFromRotationMatrix(yn),this.quaternion.premultiply(vn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(I(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null):I(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(On),An.child=e,this.dispatchEvent(An),An.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dn),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,e,Sn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xn,Cn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};jn.DEFAULT_UP=new L(0,1,0),jn.DEFAULT_MATRIX_AUTO_UPDATE=!0,jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var R=class extends jn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Mn={type:`move`},Nn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new R,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new R,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new R,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new R;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},In={h:0,s:0,l:0};function Ln(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Rn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Vt.workingColorSpace){if(e=dt(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ln(i,r,e+1/3),this.g=Ln(i,r,e),this.b=Ln(i,r,e-1/3)}return Vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&F(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:F(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);F(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=Pn[e.toLowerCase()];return n===void 0?F(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}copyLinearToSRGB(e){return this.r=Ut(e.r),this.g=Ut(e.g),this.b=Ut(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return Vt.workingToColorSpace(zn.copy(this),e),Math.round(ut(zn.r*255,0,255))*65536+Math.round(ut(zn.g*255,0,255))*256+Math.round(ut(zn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.workingToColorSpace(zn.copy(this),t);let n=zn.r,r=zn.g,i=zn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Vt.workingColorSpace){return Vt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Ve){Vt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,r=zn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(In);let n=mt(Fn.h,In.h,t),r=mt(Fn.s,In.s,t),i=mt(Fn.l,In.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new Rn;Rn.NAMES=Pn;var Bn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Rn(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vn=class extends jn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new L,Un=new L,Wn=new L,Gn=new L,Kn=new L,qn=new L,Jn=new L,Yn=new L,Xn=new L,Zn=new L,Qn=new Qt,$n=new Qt,er=new Qt,tr=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Hn.subVectors(e,t),r.cross(Hn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Hn.subVectors(r,t),Un.subVectors(n,t),Wn.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(Un),s=Hn.dot(Wn),c=Un.dot(Un),l=Un.dot(Wn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gn)!==null&&Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Gn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Gn.x),s.addScaledVector(a,Gn.y),s.addScaledVector(o,Gn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Qn.setScalar(0),$n.setScalar(0),er.setScalar(0),Qn.fromBufferAttribute(e,t),$n.fromBufferAttribute(e,n),er.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qn,i.x),a.addScaledVector($n,i.y),a.addScaledVector(er,i.z),a}static isFrontFacing(e,t,n,r){return Hn.subVectors(n,t),Un.subVectors(e,t),Hn.cross(Un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),Hn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Kn.subVectors(r,n),qn.subVectors(i,n),Yn.subVectors(e,n);let s=Kn.dot(Yn),c=qn.dot(Yn);if(s<=0&&c<=0)return t.copy(n);Xn.subVectors(e,r);let l=Kn.dot(Xn),u=qn.dot(Xn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Kn,a);Zn.subVectors(e,i);let f=Kn.dot(Zn),p=qn.dot(Zn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(qn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Jn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Jn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Kn,a).addScaledVector(qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ir.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ir.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ir.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ir):ir.fromBufferAttribute(r,t),ir.applyMatrix4(e.matrixWorld),this.expandByPoint(ir);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ir),ir.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),pr.subVectors(this.max,fr),or.subVectors(e.a,fr),sr.subVectors(e.b,fr),cr.subVectors(e.c,fr),lr.subVectors(sr,or),ur.subVectors(cr,sr),dr.subVectors(or,cr);let t=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-dr.z,dr.y,lr.z,0,-lr.x,ur.z,0,-ur.x,dr.z,0,-dr.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-dr.y,dr.x,0];return!gr(t,or,sr,cr,pr)||(t=[1,0,0,0,1,0,0,0,1],!gr(t,or,sr,cr,pr))?!1:(mr.crossVectors(lr,ur),t=[mr.x,mr.y,mr.z],gr(t,or,sr,cr,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ir).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ir).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rr=[new L,new L,new L,new L,new L,new L,new L,new L],ir=new L,ar=new nr,or=new L,sr=new L,cr=new L,lr=new L,ur=new L,dr=new L,fr=new L,pr=new L,mr=new L,hr=new L;function gr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){hr.fromArray(e,a);let o=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),s=t.dot(hr),c=n.dot(hr),l=r.dot(hr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var _r=new L,vr=new Mt,yr=0,br=class extends it{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix4(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.applyNormalMatrix(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_r.fromBufferAttribute(this,t),_r.transformDirection(e),this.setXYZ(t,_r.x,_r.y,_r.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},xr=class extends br{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Sr=class extends br{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Cr=class extends br{constructor(e,t,n){super(new Float32Array(e),t,n)}},wr=new nr,Tr=new L,Er=new L,Dr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?wr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Tr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(Er)),this.expandByPoint(Tr.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Or=0,kr=new rn,Ar=new jn,jr=new L,Mr=new nr,Nr=new nr,Pr=new L,Fr=class e extends it{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Or++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Je(e)?Sr:xr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new It().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kr.makeRotationFromQuaternion(e),this.applyMatrix4(kr),this}rotateX(e){return kr.makeRotationX(e),this.applyMatrix4(kr),this}rotateY(e){return kr.makeRotationY(e),this.applyMatrix4(kr),this}rotateZ(e){return kr.makeRotationZ(e),this.applyMatrix4(kr),this}translate(e,t,n){return kr.makeTranslation(e,t,n),this.applyMatrix4(kr),this}scale(e,t,n){return kr.makeScale(e,t,n),this.applyMatrix4(kr),this}lookAt(e){return Ar.lookAt(e),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Cr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&F(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)I(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Mr.setFromBufferAttribute(n),this.morphTargetsRelative?(Pr.addVectors(this.boundingBox.min,Mr.min),this.boundingBox.expandByPoint(Pr),Pr.addVectors(this.boundingBox.max,Mr.max),this.boundingBox.expandByPoint(Pr)):(this.boundingBox.expandByPoint(Mr.min),this.boundingBox.expandByPoint(Mr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&I(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)I(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);else if(e){let n=this.boundingSphere.center;if(Mr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Nr.setFromBufferAttribute(n),this.morphTargetsRelative?(Pr.addVectors(Mr.min,Nr.min),Mr.expandByPoint(Pr),Pr.addVectors(Mr.max,Nr.max),Mr.expandByPoint(Pr)):(Mr.expandByPoint(Nr.min),Mr.expandByPoint(Nr.max))}Mr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Pr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Pr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Pr.fromBufferAttribute(a,t),o&&(jr.fromBufferAttribute(e,t),Pr.add(jr)),r=Math.max(r,n.distanceToSquared(Pr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&I(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){I(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new br(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new Mt,f=new Mt,p=new Mt,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new br(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pr.fromBufferAttribute(e,t),Pr.normalize(),e.setXYZ(t,Pr.x,Pr.y,Pr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new br(a,r,i)}if(this.index===null)return F(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ir=new L,Lr=new L,Rr=new It,zr=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ir.subVectors(n,t).cross(Lr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ir),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rr.getNormalMatrix(e),r=this.coplanarPoint(Ir).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Br=0,Vr=class extends it{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Br++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){F(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?F(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new zr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new Mt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Hr=new L,Ur=new L,Wr=new L,Gr=new L,Kr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hr.copy(this.origin).addScaledVector(this.direction,t),Hr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ur.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(Ur);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Gr.dot(this.direction),s=-Gr.dot(Wr),c=Gr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ur).addScaledVector(Wr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Hr.subVectors(e.center,this.origin);let n=Hr.dot(this.direction),r=Hr.dot(Hr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,te,O,ne,k,re;if(y>=b&&y>=x?(w=s,D=u,O=p,re=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,te=h,ne=_,k=v):(S=l,C=c,T=f,E=d,ee=h,te=m,ne=v,k=_)):b>=x?(w=c,D=d,O=m,re=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,te=p,ne=v,k=g):(S=s,C=l,T=u,E=f,ee=p,te=h,ne=g,k=v)):(w=l,D=f,O=h,re=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,te=m,ne=g,k=_):(S=c,C=s,T=d,E=u,ee=m,te=p,ne=_,k=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=ee-A*O,ce=te-ie*O,le=ne-A*re,ue=k-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*O+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qr=class extends Vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Rn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jr=new rn,Yr=new Kr,Xr=new Dr,Zr=new L,Qr=new L,$r=new L,ei=new L,ti=new L,ni=new L,ri=new L,ii=new L,z=class extends jn{constructor(e=new Fr,t=new qr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ni.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(ti.fromBufferAttribute(s,e),a?ni.addScaledVector(ti,r):ni.addScaledVector(ti.sub(t),r))}t.add(ni)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Yr.copy(e.ray).recast(e.near),!(Xr.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Xr,Zr)===null||Yr.origin.distanceToSquared(Zr)>(e.far-e.near)**2))&&(Jr.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(Jr),(n.boundingBox===null||Yr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=oi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=oi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=oi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=oi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ai(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ii.copy(s),ii.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ii);return l<n.near||l>n.far?null:{distance:l,point:ii.clone(),object:e}}function oi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Qr),e.getVertexPosition(c,$r),e.getVertexPosition(l,ei);let u=ai(e,t,n,r,Qr,$r,ei,ri);if(u){let e=new L;tr.getBarycoord(ri,Qr,$r,ei,e),i&&(u.uv=tr.getInterpolatedAttribute(i,s,c,l,e,new Mt)),a&&(u.uv1=tr.getInterpolatedAttribute(a,s,c,l,e,new Mt)),o&&(u.normal=tr.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};tr.getNormal(Qr,$r,ei,t.normal),u.face=t,u.barycoord=e}return u}var si=class extends Zt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ci=class extends br{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},li=new rn,ui=new rn,di=[],fi=new nr,pi=new rn,mi=new z,hi=new Dr,gi=class extends z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,pi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),fi.copy(e.boundingBox).applyMatrix4(li),this.boundingBox.union(fi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),hi.copy(e.boundingSphere).applyMatrix4(li),this.boundingSphere.union(hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(mi.geometry=this.geometry,mi.material=this.material,mi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hi.copy(this.boundingSphere),hi.applyMatrix4(n),e.ray.intersectsSphere(hi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,li),ui.multiplyMatrices(n,li),mi.matrixWorld=ui,mi.raycast(e,di);for(let e=0,n=di.length;e<n;e++){let n=di[e];n.instanceId=i,n.object=this,t.push(n)}di.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_i=new Dr,vi=new Mt(.5,.5),yi=new L,bi=class{constructor(e=new zr,t=new zr,n=new zr,r=new zr,i=new zr,a=new zr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qe,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476+vi.distanceTo(e.center),_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(yi.x=r.normal.x>0?e.max.x:e.min.x,yi.y=r.normal.y>0?e.max.y:e.min.y,yi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xi=class extends Vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Rn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Si=new L,Ci=new L,wi=new rn,Ti=new Kr,Ei=new Dr,Di=new L,Oi=new L,ki=class extends jn{constructor(e=new Fr,t=new xi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Si.fromBufferAttribute(t,e-1),Ci.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Si.distanceTo(Ci);e.setAttribute(`lineDistance`,new Cr(n,1))}else F(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere),Ei.applyMatrix4(r),Ei.radius+=i,e.ray.intersectsSphere(Ei)===!1)return;wi.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(wi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ai(this,e,Ti,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ai(this,e,Ti,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ai(this,e,Ti,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ai(this,e,Ti,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Si.fromBufferAttribute(s,i),Ci.fromBufferAttribute(s,a),n.distanceSqToSegment(Si,Ci,Di,Oi)>r)return;Di.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Di);if(!(c<t.near||c>t.far))return{distance:c,point:Oi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ji=new L,Mi=new L,Ni=class extends ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ji.fromBufferAttribute(t,e),Mi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ji.distanceTo(Mi);e.setAttribute(`lineDistance`,new Cr(n,1))}else F(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Pi=class extends Zt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fi=class extends Zt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ii=class extends Fi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Li=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ri=class e extends Fr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Cr(c,3)),this.setAttribute(`normal`,new Cr(l,3)),this.setAttribute(`uv`,new Cr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zi=class e extends Fr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new Mt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Cr(a,3)),this.setAttribute(`normal`,new Cr(o,3)),this.setAttribute(`uv`,new Cr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bi=class e extends Fr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Cr(u,3)),this.setAttribute(`normal`,new Cr(d,3)),this.setAttribute(`uv`,new Cr(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new Mt,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class e extends Fr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Cr(i,3)),this.setAttribute(`normal`,new Cr(i.slice(),3)),this.setAttribute(`uv`,new Cr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new Mt,s=new Mt,c=new Mt;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Hi=new L,Ui=new L,Wi=new L,Gi=new tr,Ki=class extends Fr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(st*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Gi;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Gi.getNormal(Wi),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Gi[c[e]],o=Gi[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Wi.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Wi.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Hi.fromBufferAttribute(a,t),Ui.fromBufferAttribute(a,n),d.push(Hi.x,Hi.y,Hi.z),d.push(Ui.x,Ui.y,Ui.z)}this.setAttribute(`position`,new Cr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},qi=class e extends Vi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ji=class e extends Vi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Yi=class e extends Fr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Cr(p,3)),this.setAttribute(`normal`,new Cr(m,3)),this.setAttribute(`uv`,new Cr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Xi=class e extends Fr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new Mt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Cr(s,3)),this.setAttribute(`normal`,new Cr(c,3)),this.setAttribute(`uv`,new Cr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Zi=class e extends Fr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new L,f=new L,p=new L;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Cr(c,3)),this.setAttribute(`normal`,new Cr(l,3)),this.setAttribute(`uv`,new Cr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Qi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ea(i))i.isRenderTargetTexture?(F(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ea(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function $i(e){let t={};for(let n=0;n<e.length;n++){let r=Qi(e[n]);for(let e in r)t[e]=r[e]}return t}function ea(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ta(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function na(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}var ra={clone:Qi,merge:$i},ia=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oa=class extends Vr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ia,this.fragmentShader=aa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=ta(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Rn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Qt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new It().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new rn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sa=class extends oa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ca=class extends Vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Rn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends Vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Be,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends Vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function da(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function fa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var pa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ma=class extends pa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case P:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case P:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ha=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ga=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_a=class extends pa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ba(n,t,g,y,r);i[p]=va(x,o,_,b,m)}return i}};function va(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ya(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ba(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=va(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ya(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var xa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),fa(e.settings)&&(n.settings={inTangents:da(e.settings.inTangents,Array),outTangents:da(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case N:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return F(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return N;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;fa(this.settings)&&(Sa(this.settings.inTangents,e),Sa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(I(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(I(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){I(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){I(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ye(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){I(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,fa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Sa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}xa.prototype.ValueTypeName=``,xa.prototype.TimeBufferType=Float32Array,xa.prototype.ValueBufferType=Float32Array,xa.prototype.DefaultInterpolation=N;var Ca=class extends xa{constructor(e,t,n){super(e,t,n)}};Ca.prototype.ValueTypeName=`bool`,Ca.prototype.ValueBufferType=Array,Ca.prototype.DefaultInterpolation=Fe,Ca.prototype.InterpolantFactoryMethodLinear=void 0,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName=`color`;var Ta=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName=`number`;var Ea=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Nt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Da=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}};Da.prototype.ValueTypeName=`quaternion`,Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends xa{constructor(e,t,n){super(e,t,n)}};Oa.prototype.ValueTypeName=`string`,Oa.prototype.ValueBufferType=Array,Oa.prototype.DefaultInterpolation=Fe,Oa.prototype.InterpolantFactoryMethodLinear=void 0,Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName=`vector`;var Aa=class extends jn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Rn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ja=class extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ma=new rn,Na=new L,Pa=new L,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Na.setFromMatrixPosition(e.matrixWorld),t.position.copy(Na),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ma,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new L,La=new Nt,Ra=new L,za=class extends jn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=qe,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,La,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Ra.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,La,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ba=new L,Va=new Mt,Ha=new Mt,Ua=class extends za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,t){return this.getViewBounds(e,Va,Ha),t.subVectors(Ha,Va)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wa=class extends Fa{constructor(){super(new Ua(90,1,.5,500)),this.isPointLightShadow=!0}},Ga=class extends Aa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Wa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ka=class extends za{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qa=class extends Fa{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.shadow=new qa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ya=-90,Xa=1,Za=class extends jn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ua(Ya,Xa,e,t);r.layers=this.layers,this.add(r);let i=new Ua(Ya,Xa,e,t);i.layers=this.layers,this.add(i);let a=new Ua(Ya,Xa,e,t);a.layers=this.layers,this.add(a);let o=new Ua(Ya,Xa,e,t);o.layers=this.layers,this.add(o);let s=new Ua(Ya,Xa,e,t);s.layers=this.layers,this.add(s);let c=new Ua(Ya,Xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Qa=class extends Ua{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},$a=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=eo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function eo(){this._document.hidden===!1&&this.reset()}var to=`\\[\\]\\.:\\/`,no=RegExp(`[\\[\\]\\.:\\/]`,`g`),ro=`[^\\[\\]\\.:\\/]`,io=`[^`+to.replace(`\\.`,``)+`]`,ao=`((?:WC+[\\/:])*)`.replace(`WC`,ro),oo=`(WCOD+)?`.replace(`WCOD`,io),so=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ro),co=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ro),lo=RegExp(`^`+ao+oo+so+co+`$`),uo=[`material`,`materials`,`bones`,`map`],fo=class{constructor(e,t,n){let r=n||po.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},po=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(no,``)}static parseTrackName(e){let t=lo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);uo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){F(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){I(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){I(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){I(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){I(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){I(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){I(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;I(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){I(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};po.Composite=fo,po.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},po.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},po.prototype.GetterByBindingType=[po.prototype._getValue_direct,po.prototype._getValue_array,po.prototype._getValue_arrayElement,po.prototype._getValue_toArray],po.prototype.SetterByBindingTypeAndVersioning=[[po.prototype._setValue_direct,po.prototype._setValue_direct_setNeedsUpdate,po.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[po.prototype._setValue_array,po.prototype._setValue_array_setNeedsUpdate,po.prototype._setValue_array_setMatrixWorldNeedsUpdate],[po.prototype._setValue_arrayElement,po.prototype._setValue_arrayElement_setNeedsUpdate,po.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[po.prototype._setValue_fromArray,po.prototype._setValue_fromArray_setNeedsUpdate,po.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mo=new rn,ho=class{constructor(e,t,n=0,r=1/0){this.ray=new Kr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new hn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):I(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return mo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mo),this}intersectObject(e,t=!0,n=[]){return _o(e,this,n,t),n.sort(go),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)_o(e[r],this,n,t);return n.sort(go),n}};function go(e,t){return e.distance-t.distance}function _o(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)_o(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function vo(e,t,n,r){let i=yo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case k:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case A:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case se:return Math.max(e,16)*Math.max(t,8)/4;case j:case oe:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function yo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?F(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function bo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function xo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var So={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},B={common:{diffuse:{value:new Rn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Rn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Rn(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Co={basic:{uniforms:$i([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.fog]),vertexShader:So.meshbasic_vert,fragmentShader:So.meshbasic_frag},lambert:{uniforms:$i([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new Rn(0)},envMapIntensity:{value:1}}]),vertexShader:So.meshlambert_vert,fragmentShader:So.meshlambert_frag},phong:{uniforms:$i([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new Rn(0)},specular:{value:new Rn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:So.meshphong_vert,fragmentShader:So.meshphong_frag},standard:{uniforms:$i([B.common,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.roughnessmap,B.metalnessmap,B.fog,B.lights,{emissive:{value:new Rn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:So.meshphysical_vert,fragmentShader:So.meshphysical_frag},toon:{uniforms:$i([B.common,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.gradientmap,B.fog,B.lights,{emissive:{value:new Rn(0)}}]),vertexShader:So.meshtoon_vert,fragmentShader:So.meshtoon_frag},matcap:{uniforms:$i([B.common,B.bumpmap,B.normalmap,B.displacementmap,B.fog,{matcap:{value:null}}]),vertexShader:So.meshmatcap_vert,fragmentShader:So.meshmatcap_frag},points:{uniforms:$i([B.points,B.fog]),vertexShader:So.points_vert,fragmentShader:So.points_frag},dashed:{uniforms:$i([B.common,B.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:So.linedashed_vert,fragmentShader:So.linedashed_frag},depth:{uniforms:$i([B.common,B.displacementmap]),vertexShader:So.depth_vert,fragmentShader:So.depth_frag},normal:{uniforms:$i([B.common,B.bumpmap,B.normalmap,B.displacementmap,{opacity:{value:1}}]),vertexShader:So.meshnormal_vert,fragmentShader:So.meshnormal_frag},sprite:{uniforms:$i([B.sprite,B.fog]),vertexShader:So.sprite_vert,fragmentShader:So.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:So.background_vert,fragmentShader:So.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:So.backgroundCube_vert,fragmentShader:So.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:So.cube_vert,fragmentShader:So.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:So.equirect_vert,fragmentShader:So.equirect_frag},distance:{uniforms:$i([B.common,B.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:So.distance_vert,fragmentShader:So.distance_frag},shadow:{uniforms:$i([B.lights,B.fog,{color:{value:new Rn(0)},opacity:{value:1}}]),vertexShader:So.shadow_vert,fragmentShader:So.shadow_frag}};Co.physical={uniforms:$i([Co.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Rn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Rn(0)},specularColor:{value:new Rn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:So.meshphysical_vert,fragmentShader:So.meshphysical_frag};var wo={r:0,b:0,g:0},To=new rn,Eo=new It;Eo.set(-1,0,0,0,1,0,0,0,1);function Do(e,t,n,r,i,a){let o=new Rn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new z(new Ri(1,1,1),new oa({name:`BackgroundCubeMaterial`,uniforms:Qi(Co.backgroundCube.uniforms),vertexShader:Co.backgroundCube.vertexShader,fragmentShader:Co.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(To.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Eo),l.material.toneMapped=Vt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new z(new Yi(2,2),new oa({name:`BackgroundMaterial`,uniforms:Qi(Co.background.uniforms),vertexShader:Co.background.vertexShader,fragmentShader:Co.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(wo,na(e)),n.buffers.color.setClear(wo.r,wo.g,wo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Oo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ko(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ao(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(F(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&F(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function jo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new zr,s=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Mo=4,No=6,Po=20,Fo=256,Io=new Ka,Lo=new Rn,Ro=null,zo=0,Bo=0,Vo=!1,Ho=new L,Uo=new L,Wo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ho}=i;Ro=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ro,zo,Bo),this._renderer.xr.enabled=Vo,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ro=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:He,depthBuffer:!1},r=Ko(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Go(r)),this._blurMaterial=Yo(r,e,t),this._ggxMaterial=Jo(r,e,t)}return r}_compileMaterial(e){let t=new z(new Fr,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,r,i){let a=new Ua(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Lo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new Ri,new qr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Lo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;qo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;qo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Mo?n-d+Mo:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,qo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Io),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,qo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Io)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];qo(t,3*l*(r>this._lodMax-Mo?r-this._lodMax+Mo:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Io)}};function Go(e){let t=[],n=[],r=e,i=e-Mo+1+No;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Uo.set(1,r,n):e===1?Uo.set(-n,1,-r):e===2?Uo.set(-n,r,1):e===3?Uo.set(-1,r,-n):e===4?Uo.set(-n,-1,r):Uo.set(n,r,-1),Uo.toArray(l,(e*6+t)*3)}}let u=new Fr;u.setAttribute(`position`,new br(c,3)),u.setAttribute(`outputDirection`,new br(l,3)),n.push(new z(u,null)),r>Mo&&r--}return{lodMeshes:n,sizeLods:t}}function Ko(e,t,n){let r=new en(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function qo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Jo(e,t,n){return new oa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Fo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(e,t,n){return new oa({name:`SphericalGaussianBlur`,defines:{SAMPLES:Po,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xo(){return new oa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zo(){return new oa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $o=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ri(5,5,5),i=new oa({name:`CubemapFromEquirect`,uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new z(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Za(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function es(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new $o(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Wo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Wo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ts(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&tt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ns(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Sr:xr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function rs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function is(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:I(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function as(e,t,n){let r=new WeakMap,i=new Qt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new tn(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Mt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function os(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var ss={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function cs(e,t,n,r,i,a){let o=new en(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Fr;l.setAttribute(`position`,new Cr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Cr([0,2,0,0,2,0],2));let u=new sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new z(l,u),f=new Ka(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new en(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new en(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Vt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=ss[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ls=new Zt,us=new Fi(1,1),ds=new tn,fs=new nn,ps=new Pi,ms=[],hs=[],gs=new Float32Array(16),_s=new Float32Array(9),vs=new Float32Array(4);function ys(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ms[i];if(a===void 0&&(a=new Float32Array(i),ms[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ss(e,t){let n=hs[t];n===void 0&&(n=new Int32Array(t),hs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2fv(this.addr,t),xs(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bs(n,t))return;e.uniform3fv(this.addr,t),xs(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4fv(this.addr,t),xs(n,t)}}function Ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;vs.set(r),e.uniformMatrix2fv(this.addr,!1,vs),xs(n,r)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;_s.set(r),e.uniformMatrix3fv(this.addr,!1,_s),xs(n,r)}}function ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;gs.set(r),e.uniformMatrix4fv(this.addr,!1,gs),xs(n,r)}}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2iv(this.addr,t),xs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3iv(this.addr,t),xs(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4iv(this.addr,t),xs(n,t)}}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2uiv(this.addr,t),xs(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3uiv(this.addr,t),xs(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4uiv(this.addr,t),xs(n,t)}}function Rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(us.compareFunction=n.isReversedDepthBuffer()?518:515,a=us):a=ls,n.setTexture2D(t||a,i)}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fs,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ps,i)}function Vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ds,i)}function Hs(e){switch(e){case 5126:return Cs;case 35664:return ws;case 35665:return Ts;case 35666:return Es;case 35674:return Ds;case 35675:return Os;case 35676:return ks;case 5124:case 35670:return As;case 35667:case 35671:return js;case 35668:case 35672:return Ms;case 35669:case 35673:return Ns;case 5125:return Ps;case 36294:return Fs;case 36295:return Is;case 36296:return Ls;case 35678:case 36198:case 36298:case 36306:case 35682:return Rs;case 35679:case 36299:case 36307:return zs;case 35680:case 36300:case 36308:case 36293:return Bs;case 36289:case 36303:case 36311:case 36292:return Vs}}function Us(e,t){e.uniform1fv(this.addr,t)}function Ws(e,t){let n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function Gs(e,t){let n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function Ks(e,t){let n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function qs(e,t){let n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Js(e,t){let n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ys(e,t){let n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Xs(e,t){e.uniform1iv(this.addr,t)}function Zs(e,t){e.uniform2iv(this.addr,t)}function Qs(e,t){e.uniform3iv(this.addr,t)}function $s(e,t){e.uniform4iv(this.addr,t)}function ec(e,t){e.uniform1uiv(this.addr,t)}function tc(e,t){e.uniform2uiv(this.addr,t)}function nc(e,t){e.uniform3uiv(this.addr,t)}function rc(e,t){e.uniform4uiv(this.addr,t)}function ic(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?us:ls;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ac(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fs,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ps,a[e])}function sc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ds,a[e])}function cc(e){switch(e){case 5126:return Us;case 35664:return Ws;case 35665:return Gs;case 35666:return Ks;case 35674:return qs;case 35675:return Js;case 35676:return Ys;case 5124:case 35670:return Xs;case 35667:case 35671:return Zs;case 35668:case 35672:return Qs;case 35669:case 35673:return $s;case 5125:return ec;case 36294:return tc;case 36295:return nc;case 36296:return rc;case 35678:case 36198:case 36298:case 36306:case 35682:return ic;case 35679:case 36299:case 36307:return ac;case 35680:case 36300:case 36308:case 36293:return oc;case 36289:case 36303:case 36311:case 36292:return sc}}var lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hs(t.type)}},uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cc(t.type)}},dc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fc=/(\w+)(\])?(\[|\.)?/g;function pc(e,t){e.seq.push(t),e.map[t.id]=t}function mc(e,t,n){let r=e.name,i=r.length;for(fc.lastIndex=0;;){let a=fc.exec(r),o=fc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){pc(n,l===void 0?new lc(s,e,t):new uc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new dc(s),pc(n,e)),n=e}}}var hc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);mc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function gc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var _c=37297,vc=0;function yc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var bc=new It;function xc(e){Vt._getMatrix(bc,Vt.workingColorSpace,e);let t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return F(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Sc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+yc(e.getShaderSource(t),r)}return i}function Cc(e,t){let n=xc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var wc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Tc(e,t){let n=wc[t];return n===void 0?(F(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ec=new L;function Dc(){return Vt.getLuminanceCoefficients(Ec),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ec.x.toFixed(4)}, ${Ec.y.toFixed(4)}, ${Ec.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Oc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(jc).join(`
`)}function kc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ac(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function jc(e){return e!==``}function Mc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Pc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(e){return e.replace(Pc,Lc)}var Ic=new Map;function Lc(e,t){let n=So[t];if(n===void 0){let e=Ic.get(t);if(e!==void 0)n=So[e],F(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Fc(n)}var Rc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(e){return e.replace(Rc,Bc)}function Bc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Hc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Uc(e){return Hc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Gc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Wc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Kc={302:`ENVMAP_MODE_REFRACTION`};function qc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Kc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Jc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Jc[e.combine]||`ENVMAP_BLENDING_NONE`}function Xc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Zc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Uc(n),l=Gc(n),u=qc(n),d=Yc(n),f=Xc(n),p=Oc(n),m=kc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(jc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(jc).join(`
`),_.length>0&&(_+=`
`)):(g=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(jc).join(`
`),_=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:So.tonemapping_pars_fragment,n.toneMapping===0?``:Tc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,So.colorspace_pars_fragment,Cc(`linearToOutputTexel`,n.outputColorSpace),Dc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(jc).join(`
`)),o=Fc(o),o=Mc(o,n),o=Nc(o,n),s=Fc(s),s=Mc(s,n),s=Nc(s,n),o=zc(o),s=zc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=gc(i,i.VERTEX_SHADER,y),S=gc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Sc(i,x,`vertex`),n=Sc(i,S,`fragment`);I(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):F(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new hc(i,h),T=Ac(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,_c)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Qc=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new el(e),t.set(e,n)),n}},el=class{constructor(e){this.id=Qc++,this.code=e,this.usedTimes=0}};function tl(e){return e===1030||e===37490||e===36285}function nl(e,t,n,r,i,a){let o=new hn,s=new $c,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&F(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=Co[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),k=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Vt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&tl(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:k,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Vt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Co[t];n=ra.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Zc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function rl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function al(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ol(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||il),r.length>1&&r.sort(t||al),i.length>1&&i.sort(t||al)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function sl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new ol,e.set(t,[i])):n>=r.length?(i=new ol,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function cl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new L,color:new Rn};break;case`SpotLight`:n={position:new L,direction:new L,color:new Rn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new Rn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new Rn,groundColor:new Rn};break;case`RectAreaLight`:n={color:new Rn,position:new L,halfWidth:new L,halfHeight:new L}}return e[t.id]=n,n}}}function ll(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var ul=0;function dl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function fl(e){let t=new cl,n=ll(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new rn,o=new rn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(dl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=B.LTC_FLOAT_1,r.rectAreaLTC2=B.LTC_FLOAT_2):(r.rectAreaLTC1=B.LTC_HALF_1,r.rectAreaLTC2=B.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=ul++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function pl(e){let t=new fl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ml(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new pl(e),t.set(n,[a])):r>=i.length?(a=new pl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var hl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_l=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],vl=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],yl=new rn,bl=new L,xl=new L;function Sl(e,t,n){let i=new bi,a=new Mt,s=new Mt,c=new Qt,l=new la,u=new ua,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:hl,fragmentShader:gl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Fr;y.setAttribute(`position`,new br(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new z(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(F(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){F(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){F(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new en(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Fi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new $o(a.x),p.map.depthTexture=new Ii(a.x,m)):(p.map=new en(a.x,a.y),p.map.depthTexture=new Fi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),bl.setFromMatrixPosition(d.matrixWorld),e.position.copy(bl),xl.copy(e.position),xl.add(_l[t]),e.up.copy(vl[t]),e.lookAt(xl),e.updateMatrixWorld(),n.makeTranslation(-bl.x,-bl.y,-bl.z),yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(yl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new en(a.x,a.y,{format:te,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Cl(e,t){function n(){let t=!1,n=new Qt,r=null,i=new Qt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=rt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Rn(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Qt().fromArray(oe),le=new Qt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:I(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:I(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:I(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:I(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==te&&(re&&e.lineWidth(t),te=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){I(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Rn(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:He}}function wl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Mt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Xe(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),F(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&F(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function O(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];F(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||F(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ue:Vt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,F(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function k(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ae(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&F(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(e,t){let n=f.get(e);if(e.isVideoTexture&&N(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)F(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)F(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Se(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Se(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let he={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ge={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},_e={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ve(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&F(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,he[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,he[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,he[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ge[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ge[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,_e[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ye(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&j(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=be(r.start,t.width,4),c=be(n.start,t.width,4);r.start<=o+1&&s===c&&be(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Se(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ye(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Vt.getPrimaries(Vt.workingColorSpace),n=t.colorSpace===``?null:Vt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=O(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ve(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=k(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&xe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=vo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=vo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Le(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Le(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n){if(t.image.length!==6)return;let r=ye(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Vt.getPrimaries(Vt.workingColorSpace),o=t.colorSpace===``?null:Vt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=k(t,h);ve(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?F(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.normalized,i.colorSpace);Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ee(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,re)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else M(t.depthTexture,0);let a=i.__webglTexture,o=Pe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ee(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ee(t.__webglFramebuffer[0],e,0):Ee(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Te(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Te(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){let r=f.get(e);t!==void 0&&we(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&De(e)}function ke(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,A);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Fe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Te(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)we(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ve(o,r),we(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ve(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else we(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&De(e)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(e){if(e.samples>0){if(Fe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(je.push(a),Me.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Me)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&F(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):I(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Tl(e,t){function n(n,r=``){let i,a=Vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var El=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dl=`
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

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Li(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oa({vertexShader:El,fragmentShader:Dl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kl=class extends it{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Ol,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new Mt,te=null,O=null,ne=new Ua;ne.viewport=new Qt;let k=new Ua;k.viewport=new Qt;let re=[ne,k],A=new Qa,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Nn,C[e]=t),t.getHandSpace()};function ae(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&F(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new en(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Fi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new en(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new L,le=new L;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=k.near=ne.near=t,A.far=k.far=ne.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,ne.layers.mask=A.layers.mask&-5,k.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,ne,k):A.projectionMatrix.copy(ne.projectionMatrix),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new Ua,o.layers.enable(n),o.viewport=new Qt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Li,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let me=new bo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},Al=new rn,jl=new It;jl.set(-1,0,0,0,1,0,0,0,1);function Ml(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,na(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Al.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(jl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Nl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return I(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?F(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):F(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Pl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fl=null;function Il(){return Fl===null&&(Fl=new si(Pl,16,16,te,g),Fl.name=`DFG_LUT`,Fl.minFilter=o,Fl.magFilter=o,Fl.wrapS=t,Fl.wrapT=t,Fl.generateMipmaps=!1,Fl.needsUpdate=!0),Fl}var Ll=class{constructor(e={}){let{canvas:t=Ze(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ne,O,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new L,te=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Qt,he=new Qt,ge=null,_e=new Rn(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Qt(0,0,ye,be),Te=new Qt(0,0,ye,be),Ee=!1,De=new bi,Oe=!1,ke=!1,Ae=new rn,je=new L,Me=new Qt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,Be,He,Ue,We,Ge,Ke,Je,Ye,Xe,Qe,et,tt,rt,it,at,ot,st,ct,lt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ut()}catch(e){throw t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),I(`WebGLRenderer: `+e.message),e}function ut(){Le=new ts(N),Le.init(),st=new Tl(N,Le),Re=new Ao(N,Le,e,st),P=new Cl(N,Le),Re.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new is(N),Be=new rl,He=new wl(N,Le,P,Be,Re,st,ze),Ue=new es(j),We=new xo(N),ct=new Oo(N,We),Ge=new ns(N,We,ze,ct),Ke=new os(N,Ge,We,ct,ze),it=new as(N,Re,He),et=new jo(Be),Je=new nl(j,Ue,Le,Re,ct,et),Ye=new Ml(j,Be),Xe=new sl,Qe=new ml(Le),rt=new Do(j,Ue,P,Ke,x,s),tt=new Sl(j,Ke,Re),lt=new Nl(N,ze,Re,P),at=new ko(N,Le,ze),ot=new rs(N,Le,ze),ze.programs=Je.programs,j.capabilities=Re,j.extensions=Le,j.properties=Be,j.renderLists=Xe,j.shadowMap=tt,j.state=P,j.info=ze}S!==1009&&(ie=new cs(S,t.width,t.height,o,r,i));let dt=new kl(j,N);this.xr=dt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){dt.isPresenting?F(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)I(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){F(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=rt.getClearColor(),r=rt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),rt.dispose(),Xe.dispose(),Qe.dispose(),Be.dispose(),Ue.dispose(),Ke.dispose(),ct.dispose(),lt.dispose(),Je.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,xt),dt.removeEventListener(`sessionend`,St),Ct.stop()};function ft(e){e.preventDefault(),$e(`WebGLRenderer: Context Lost.`),ae=!0}function pt(){$e(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=tt.enabled,n=tt.autoUpdate,r=tt.needsUpdate,i=tt.type;ut(),ze.autoReset=e,tt.enabled=t,tt.autoUpdate=n,tt.needsUpdate=r,tt.type=i}function mt(e){I(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){_t(e),Be.remove(e)}function _t(e){let t=Be.get(e).programs;t!==void 0&&(t.forEach(function(e){Je.releaseProgram(e)}),e.isShaderMaterial&&Je.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=We.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=Be.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&et.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Qe.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=et.init(this.clippingPlanes,ke),Oe===!0&&et.setGlobalState(this.clippingPlanes,t),oe!==null&&tt.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Be.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){Ct.stop()}function St(){Ct.start()}let Ct=new bo;Ct.setAnimationLoop(bt),typeof self<`u`&&Ct.setContext(self),this.setAnimationLoop=function(e){yt=e,dt.setAnimationLoop(e),e===null?Ct.stop():Ct.start()},dt.addEventListener(`sessionstart`,xt),dt.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){I(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Qe.get(e,A.length),k.init(t),k.state.textureUnits=He.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,qe,t.reversedDepth),ke=this.localClippingEnabled,Oe=et.init(this.clippingPlanes,ke),te=Xe.get(e,re.length),te.init(),re.push(te),dt.enabled===!0&&dt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&wt(e,t,-1/0,j.sortObjects)}wt(e,t,0,j.sortObjects),te.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&te.sort(Se,Ce),Pe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Pe&&rt.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&et.beginShadows();let i=k.state.shadowsArray;if(tt.render(i,e,t),Oe===!0&&et.endShadows(),(r&&ie.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Et(n,r,e,a)}Pe&&rt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Tt(te,e,n,n.viewport)}}else r.length>0&&Et(n,r,e,t),Pe&&rt.render(e),Tt(te,e,t)}M!==null&&de===0&&(He.updateMultisampleRenderTarget(M),He.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ct.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],He.setTextureUnits(k.state.textureUnits),Oe===!0&&et.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),te=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function wt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ke.update(e),a=e.material;a.visible&&te.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&te.push(e,i,c,n,Me.z,s,t)}}else a.visible&&te.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)wt(i[e],t,n,r)}function Tt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&et.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Dt(i,t,n),a.length>0&&Dt(a,t,n),o.length>0&&Dt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Et(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new en(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Vt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),u=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&rt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&et.setGlobalState(j.clippingPlanes,r),Dt(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}j.setRenderTarget(s,u,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Dt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ot(o,t,n,s,l,c)}}function Ot(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function kt(e,t,n){t.isScene!==!0&&(t=Ne);let r=Be.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Je.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Je.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Je.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=Je.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=et.uniform),jt(e,s),r.needsLights=Ft(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=hc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=Be.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Mt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Vt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Be.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;et.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==et.numPlanes||v.numIntersection!==et.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=kt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=Mt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,He),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,He),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,He));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&it.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Il()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Pt(E,w),a&&r.fog===!0&&Ye.refreshFogUniforms(E,a),Ye.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}hc.upload(N,At(v),E,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(hc.upload(N,At(v),E,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,x),lt.bind(n,x)}}return x}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ft(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=Be.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Be.get(e.texture).__webglTexture=t,Be.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Be.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=Be.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,Be.get(e.texture).__webglTexture,Be.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Be.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Be.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?Be.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=Be.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Be.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Be.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function It(e){let t=Be.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){I(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=M===null?null:Be.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Be.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,st.convert(l),st.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:Be.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await nt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Be.get(e),r=Be.get(t),h=Be.get(n.__renderTarget),g=Be.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Be.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Be.has(e)){let n=Be.get(e),r=Be.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){Be.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}},Rl=class extends jn{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new Mt(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},zl=new L,Bl=new rn,Vl=new rn,Hl=new L,Ul=new L,Wl=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Bl.copy(t.matrixWorldInverse),Vl.multiplyMatrices(t.projectionMatrix,Bl),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){zl.setFromMatrixPosition(e.matrixWorld),zl.applyMatrix4(Vl);let c=zl.z>=-1&&zl.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=zl.x*i+i,f=-zl.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return Hl.setFromMatrixPosition(e.matrixWorld),Ul.setFromMatrixPosition(t.matrixWorld),Hl.distanceToSquared(Ul)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},Gl={vanguard:{name:`Warrior`,line:`Knight · Paladin · Fighter`,role:`Melee tank / bruiser`,resource:`MP`,resourceColor:`#3f7fe0`,base:{str:10,int:2}},arcanist:{name:`Mage`,line:`Sword Mage · Warlock · Necromancer`,role:`Magic DPS / control; fights up close between spells`,resource:`MP`,resourceColor:`#3f7fe0`,base:{str:3,int:9}},oracle:{name:`Acolyte`,line:`Sage · Monk · Bishop`,role:`Healer / support`,resource:`MP`,resourceColor:`#3f7fe0`,base:{str:5,int:7}}},Kl={vanguard:{range:1.7,every:1.1},arcanist:{range:1.7,every:1.3},oracle:{range:1.7,every:1.2}},ql=e=>Kl[e.occ].range,Jl=Object.keys(Gl);function Yl(e){let t=String(e??``).replace(/[^\p{L}\p{N} _-]/gu,``).trim().slice(0,16);return t.length>=2?t:null}var V=(e,t,n,r,i,a={})=>({id:t,name:n,type:r,lv:e,max:r===`capstone`?1:3,desc:i,...a}),Xl=e=>V(e,`arcane_mind`,`Arcane Mind`,`passive`,[`+10% max MP, +20% MP recovery`,`+20% max MP, +40% MP recovery`,`+30% max MP, +60% MP recovery`],{live:!0}),Zl={vanguard:[V(1,`cleave`,`Cleave`,`active`,[`180° sweep, 110% damage`,`130% damage`,`150% damage`],{live:!0,use:{cost:10,cd:5,reach:1,arc:180,pct:[110,130,150]}}),V(3,`vigor`,`Vigor`,`passive`,[`Recover 0.1% of max HP a second, even in a fight; +25% out of one`,`0.2% a second; +50%`,`0.3% a second; +75%`],{live:!0,regen:{fight:[.1,.2,.3],calm:[25,50,75]}}),V(6,`war_aura`,`War Aura`,`aura`,[`You and allies within 6 tiles deal +5% damage`,`+10%`,`+15%`],{live:!0,aura:{radius:6,dmg:[5,10,15]}}),V(9,`battle_cry`,`Battle Cry`,`active`,[`Taunt 5 tiles, allies +10% damage`,`Allies +15%`,`Allies +20%`],{live:!0,use:{cost:15,cd:25,radius:5,taunt:3,allyRadius:8,buff:[10,15,20],buffS:10}}),V(12,`charge`,`Charge`,`active`,[`Dash 6 tiles, root 1 s`,`7 tiles, 12 s cooldown`,`8 tiles, 10 s cooldown`],{live:!0,use:{cost:8,cd:[14,12,10],range:[6,7,8],root:1,speed:14}})],arcanist:[V(1,`firebolt`,`Firebolt`,`active`,[`120% spell damage, range 7`,`140%`,`160%`],{live:!0,use:{cost:8,cd:0,range:7,pct:[120,140,160],speed:14}}),Xl(1),V(3,`mana_shield`,`Mana Shield`,`active`,[`8 s on yourself: 30% of damage taken drains MP instead`,`40%`,`50%`],{live:!0,use:{cost:10,cd:20,dur:8,pct:[30,40,50]}}),V(6,`blink`,`Blink`,`active`,[`Teleport 5 tiles, 7.5 s cooldown`,`6 s`,`4.5 s`],{live:!0,use:{cost:10,cd:[7.5,6,4.5],range:5}}),V(9,`frost_nova`,`Frost Nova`,`active`,[`Freeze within 2.5 tiles for 2 s`,`2.5 s`,`3 s`],{live:!0,use:{cost:20,cd:18,radius:2.5,freeze:[2,2.5,3]}}),V(12,`arc_chain`,`Arc Chain`,`active`,[`Jumps to 3 targets, -20% per jump`,`4 targets`,`5 targets`],{live:!0,use:{cost:18,cd:6,range:7,jumps:[3,4,5],hop:3.5,falloff:.2}}),V(14,`cataclysm`,`Cataclysm`,`capstone`,[`2 s channel, then a meteor at the cursor: 400% in 3 tiles`],{live:!0,use:{cost:60,cd:60,range:8,radius:3,pct:400,channel:2}})],oracle:[V(1,`smite`,`Smite`,`active`,[`100% holy damage, ×1.5 vs undead`,`120%`,`140%`],{live:!0,use:{cost:8,cd:0,range:6,pct:[100,120,140]}}),V(1,`mend`,`Mend`,`active`,[`Heal yourself or an ally 30 + INT×2`,`Heal 40 + INT×2`,`Heal 50 + INT×2`],{live:!0,use:{cost:10,cd:4,range:6,heal:[30,40,50],int:2}}),Xl(3),V(6,`ward`,`Holy Shield`,`active`,[`Bless yourself or an ally: +15 + INT×0.5 DEF for 12 s`,`+25 + INT×0.5 DEF`,`+35 + INT×0.5 DEF`],{live:!0,use:{cost:15,cd:15,range:6,def:[15,25,35],int:.5,dur:12}}),V(12,`holy_words`,`Holy Words`,`active`,[`Chant 3 s: every 0.5 s, 50% holy damage to all within 7 tiles (×1.5 vs undead), 6 words. Being hit never stops it`,`65% a word, 7 words`,`80% a word, 8 words`],{live:!0,use:{cost:30,cd:14,radius:7,dur:[3,3.5,4],every:.5,pct:[50,65,80]}})]},Ql={knight:{occ:`vanguard`,name:`Knight`,role:`Lance and mount fighter; the dragon line later`,growth:{str:8,int:2},skills:[V(15,`mount`,`Mount / Dismount`,`active`,[`Next to a wild horse: tame it. After that: ride it or get off. A horse carries you faster and hits harder: +10% damage (brown) to +30% (Takoyaki)`],{max:1,live:!0,use:{cost:0,cd:1.5,range:2.5}}),V(18,`skewer_charge`,`Skewer Charge`,`upgrade`,[`Charge hits everyone on its path for 60%`,`80%`,`100%`],{upgrades:`charge`,live:!0,hit:[60,80,100]}),V(21,`valor_aura`,`Aura of Valor`,`aura`,[`You and allies within 6 tiles +10 DEF`,`+15 DEF`,`+20 DEF`],{live:!0,aura:{radius:6,def:[10,15,20]}}),V(23,`wyrm_lance`,`Wyrm Lance`,`capstone`,[`On horseback: dash at an enemy for 600% and stun it 1.5 s; 150% to all in the way`],{live:!0,use:{cost:20,cd:15,range:10,pct:600,path:150,stun:1.5,speed:20}})]},paladin:{locked:!0,occ:`vanguard`,name:`Paladin`,role:`Holy tank: shields, auras, healing hands`,growth:{str:6,int:4},skills:[V(15,`holy_strike`,`Holy Strike`,`active`,[`120% holy damage, heal 30% of it`,`140%`,`160%`]),V(17,`shield_wall`,`Shield Wall`,`active`,[`-40% damage taken for 4 s`,`-50%`,`-60%`]),V(19,`guardians_bash`,`Guardian's Bash`,`upgrade`,[`Shield Bash stuns and taunts enemies beside the target`,`Wider splash`,`Longer taunt`]),V(21,`aura_of_devotion`,`Aura of Devotion`,`aura`,[`Allies within 5 tiles +4 DEF`,`+8 DEF`,`+12 DEF`]),V(23,`sacred_chant`,`Sacred Chant`,`capstone`,[`Chant for 1.5 s, then holy light strikes every enemy in sight for 250% (×1.5 vs undead)`],{live:!0,use:{cost:25,cd:45,channel:1.5,radius:9,pct:250}})]},fighter:{locked:!0,occ:`vanguard`,name:`Fighter`,role:`All-out melee damage`,growth:{str:9,int:1},swing:.9,skills:[V(15,`whirlwind`,`Whirlwind`,`active`,[`Spin for 2 s, 70% per hit around you`,`85%`,`100%`]),V(17,`bloodlust`,`Bloodlust`,`passive`,[`Heal 2% of damage dealt`,`4%`,`6%`]),V(19,`rending_cleave`,`Rending Cleave`,`upgrade`,[`Cleave bleeds 30% over 4 s`,`45%`,`60%`],{upgrades:`cleave`}),V(21,`last_stand`,`Last Stand`,`passive`,[`Below 50% HP: +10% damage`,`+20%`,`+30%`]),V(23,`rampage`,`Rampage`,`capstone`,[`Rush through up to 6 enemies within 6 tiles, 220% each`],{live:!0,use:{cost:22,cd:30,radius:6,hits:6,pct:220,hop:.16}})]},sword_mage:{occ:`arcanist`,name:`Sword Mage`,role:`Spells through a blade, at melee range`,growth:{str:5,int:5},power:{str:.8,int:.8},skills:[V(15,`spellstrike`,`Spellstrike`,`active`,[`Magic runs into your hands and weapon: +20% damage for you alone, 20 s`,`+30%`,`+40%`],{live:!0,use:{cost:18,cd:30,dur:20,pct:[20,30,40]}}),V(17,`flying_edge`,`Flying Edge`,`active`,[`Throw a spectral blade at one enemy, range 7: 150% damage and a 0.5 s stun`,`175%`,`200%`],{live:!0,use:{cost:10,cd:3,range:7,pct:[150,175,200],stun:.5,speed:18}}),V(19,`phantom_step`,`Phantom Step`,`passive`,[`5% chance to evade a hit, MP recovery +15%`,`10%, +30%`,`15%, +45%`],{live:!0,evade:[5,10,15],regen:[15,30,45]}),V(23,`sword_dance`,`Sword Dance`,`capstone`,[`Spectral blades strike every enemy within 9 tiles: 3 waves of 130% (Spellstrike adds to each)`],{live:!0,use:{cost:45,cd:40,radius:9,waves:3,every:.55,rise:.7,pct:130}})]},warlock:{locked:!0,occ:`arcanist`,name:`Warlock`,role:`Curses and runes`,growth:{str:1,int:9},skills:[V(15,`snare_rune`,`Snare Rune`,`active`,[`Rune at the cursor roots the first enemy for 2 s`,`2.5 s`,`3 s`],{live:!0,use:{cost:15,cd:4,range:6,r:.9,root:[2,2.5,3],life:30,max:3}}),V(17,`withering_curse`,`Withering Curse`,`active`,[`150% damage over 8 s`,`200%`,`250%`]),V(19,`glyph_field`,`Glyph Field`,`active`,[`3-tile zone at the cursor slows 30% for 6 s`,`40%`,`50%`],{live:!0,use:{cost:25,cd:14,range:7,radius:3,slow:[30,40,50],dur:6}}),V(21,`script_of_binding`,`Script of Binding`,`active`,[`Three runes at the cursor root everything inside for 3 s`],{max:1,live:!0,use:{cost:40,cd:45,range:7,radius:2.5,root:3}}),V(23,`meteor_storm`,`Meteor Storm`,`capstone`,[`14 meteors rain on the cursor area over 3 s (160% each), then a great one in the middle (300%)`],{live:!0,use:{cost:70,cd:60,range:9,radius:4.5,count:14,dur:3,lead:.7,r:1.6,pct:160,finale:300}})]},necromancer:{occ:`arcanist`,name:`Necromancer`,role:`The dead fight for you`,growth:{str:2,int:8},skills:[V(15,`raise_bonewalker`,`Raise Bonewalker`,`active`,[`Raise a skeleton to fight for you for 30 s (up to 5 at once)`,`Raise 2 at a time`,`Raise 3 at a time`],{live:!0,use:{cost:30,cd:3,life:30,count:[1,2,3],max:5,pct:[60,65,70]}}),V(17,`bone_armor`,`Bone Armor`,`active`,[`Bones close over you: +20 + INT×0.5 DEF for 15 s`,`+30 + INT×0.5 DEF`,`+40 + INT×0.5 DEF`],{live:!0,use:{cost:20,cd:20,def:[20,30,40],int:.5,dur:15}}),V(19,`grave_chill`,`Grave Chill`,`aura`,[`Enemies within 3 tiles slowed 15%`,`20%`,`25%`],{live:!0,aura:{radius:3,slow:[15,20,25]}}),V(23,`bone_dragon`,`Bone Dragon`,`capstone`,[`Raise a great skeleton dragon for 25 s: its breath burns everything in front of it for 90%`],{live:!0,use:{cost:60,cd:37.5,life:25,pct:90}})]},sage:{occ:`oracle`,name:`Sage`,role:`The strongest healer`,growth:{str:2,int:8},skills:[V(15,`gentle_hands`,`Gentle Hands`,`aura`,[`You and allies within 6 tiles: 0.06% of max HP back a second even in a fight, HP and MP recovery +25%`,`0.12% a second, +50%`,`0.2% a second, +75%`],{live:!0,aura:{radius:6,fight:[.06,.12,.2],regen:[25,50,75]}}),V(17,`radiant_mend`,`Radiant Mend`,`upgrade`,[`Mend also heals everyone within 3 tiles of its target for 50%`,`70%`,`90%`],{upgrades:`mend`,live:!0,radius:3,pct:[50,70,90]}),V(19,`grace_aura`,`Aura of Grace`,`aura`,[`You and allies within 6 tiles +8 DEF`,`+12 DEF`,`+16 DEF`],{live:!0,aura:{radius:6,def:[8,12,16]}}),V(23,`litany_of_dawn`,`Litany of Dawn`,`upgrade`,[`Holy Words strikes 50% harder, speaks one more word, and you can walk while you chant (at 40% speed)`],{max:1,capstone:!0,upgrades:`holy_words`,live:!0,bonus:50,words:1,walk:.4})]},monk:{locked:!0,occ:`oracle`,name:`Monk`,role:`Holy fists, in melee`,growth:{str:7,int:3},power:{str:.8,int:.4},swing:.9,skills:[V(15,`righteous_blows`,`Righteous Blows`,`passive`,[`Attacks restore 3 MP, +5% damage`,`+10%`,`+15%`]),V(17,`palm_strike`,`Palm Strike`,`active`,[`130% damage, knock back 2 tiles`,`150%`,`170%`]),V(19,`inner_calm`,`Inner Calm`,`passive`,[`5% chance to dodge`,`10%`,`15%`]),V(21,`flurry`,`Flurry`,`active`,[`Five quick hits, 50% each`,`60% each`,`70% each`]),V(23,`pyre_of_zeal`,`Pyre of Zeal`,`capstone`,[`Spend all MP in a holy nova`])]},bishop:{locked:!0,occ:`oracle`,name:`Bishop`,role:`Protection and hymns for the party`,growth:{str:4,int:6},skills:[V(15,`hymn_of_iron`,`Hymn of Iron`,`aura`,[`Allies within 5 tiles +4 DEF`,`+8 DEF`,`+12 DEF`]),V(17,`bastion_ward`,`Bastion Ward`,`upgrade`,[`Holy Shield also lands on 2 allies at 60%`,`3 allies`,`3 allies, longer`],{upgrades:`ward`}),V(19,`judgement`,`Judgement`,`upgrade`,[`Smite splashes 2 tiles for 50%`,`65%`,`80%`],{upgrades:`smite`}),V(21,`hymn_of_haste`,`Hymn of Haste`,`aura`,[`Allies +3% attack and move speed`,`+6%`,`+9%`]),V(23,`gatekeepers_oath`,`Gatekeeper's Oath`,`capstone`,[`8 s dome: allies inside take 40% less damage`])]}},$l=(e,t,n,r,i,a,o={})=>({id:t,name:n,type:r,lv:e,max:5,desc:i,byUse:a,...o}),eu=60,tu={sword_saint:{from:`sword_mage`,occ:`arcanist`,name:`Sword Saint`,role:`Gives up all magic, and MP, for the sword alone`,growth:{str:10},power:{str:1},noMp:!0,swordsOnly:!0,abandons:[...Zl.arcanist,...Ql.sword_mage.skills].map(e=>e.id),skills:[$l(25,`qi_sword_strike`,`Qi Sword Strike`,`active`,[`A blade of qi, reach 7: 180% damage to one enemy, 4 s cooldown`,`2 blades of 200%: the second cuts the nearest other within 3 tiles, or joins the first (double on one enemy alone); 3.25 s`,`3 blades of 220%; 2.5 s`,`4 blades of 250%; 1.75 s`,`5 blades of 280%; 1 s`],{counts:`casts`,at:[50,150,300,500]},{live:!0,use:{hp:2,cd:[4,3.25,2.5,1.75,1],range:7,pct:[180,200,220,250,280],targets:[1,2,3,4,5],spread:3}}),$l(25,`mountain_breath`,`Breath of the Mountain`,`passive`,[`You only: 0.1% of max HP back a second, even in a fight; HP recovery +20%`,`0.15% a second, +40%`,`0.2% a second, +60%`,`0.25% a second, +80%`,`0.3% a second, +100%`],{counts:`time`,at:[1200,3600,7200,12e3],still:.25},{live:!0,regen:{fight:[.1,.15,.2,.25,.3],calm:[20,40,60,80,100]}}),$l(27,`flowing_breath`,`Flowing Breath`,`passive`,[`4% chance to evade a hit`,`6%`,`8%`,`10%`,`12%`],{counts:`evades`,at:[25,75,150,250]},{live:!0,evade:[4,6,8,10,12]}),$l(27,`gale_step`,`Gale Step`,`active`,[`5% of max HP: move 30% faster and swing 10% faster for 6 s; 20 s cooldown`,`40% faster, swing 15%, 7 s; 18 s`,`50% faster, swing 20%, 8 s; 16 s`,`60% faster, swing 25%, 9 s; 14 s`,`70% faster, swing 30%, 10 s; 12 s`],{counts:`casts`,at:[30,90,180,300]},{live:!0,use:{hp:5,cd:[20,18,16,14,12],dur:[6,7,8,9,10],move:[30,40,50,60,70],swing:[10,15,20,25,30]}}),$l(30,`bond_of_the_blade`,`Bond of the Blade`,`passive`,[`The sword in your hand +4 ATK`,`+8 ATK`,`+12 ATK`,`+16 ATK`,`+20 ATK`],{counts:`swordTime`,at:[900,2700,5400,9e3]},{live:!0,atk:[4,8,12,16,20]})]},dragon_knight:{from:`knight`,occ:`vanguard`,name:`Dragon Knight`,role:`Raises a dragon from a hatchling, fights beside it, then rides it`,growth:{str:9,int:1},abandons:[],skills:[$l(25,`summon_dragon`,`Summon Dragon`,`active`,[`A hatchling dragon follows you and bites what you fight (80%); cast again to send it away`,`A young dragon (100%), big enough to ride: Mount / Dismount gets on and off it (1.5x speed, +15% damage)`,`A grown dragon (125%); ridden, 1.7x speed, +20%`,`A great dragon (150%); ridden, 1.9x speed, +25%`,`A full-grown dragon (180%) that flies, low enough to strike from its back; ridden, 2.2x speed, +35%`],{counts:`dragonTime`,at:[900,2700,5400,9e3]},{live:!0,use:{cost:15,cd:3,pct:[80,100,125,150,180],rest:30}}),$l(27,`dragon_rush`,`Dragon Rush`,`active`,[`On your dragon: rush 6 tiles toward the cursor, faster and faster, 150% to everything in the way`,`7 tiles, 180%`,`8 tiles, 210%`,`9 tiles, 250%`,`10 tiles, 300%`],{counts:`casts`,at:[50,150,300,500]},{live:!0,use:{cost:12,cd:[8,7,6,5,4],range:[6,7,8,9,10],pct:[150,180,210,250,300],speed:15,width:1.1}}),$l(30,`fire_breath`,`Fire Breath`,`active`,[`Your dragon breathes fire 5 tiles ahead in a 90° cone: 160% to everything in it`,`5.5 tiles, 190%`,`6 tiles, 220%`,`6.5 tiles, 260%`,`7 tiles, 300%`],{counts:`casts`,at:[40,120,250,400]},{live:!0,use:{cost:15,cd:[10,9,8,7,6],range:[5,5.5,6,6.5,7],arc:90,pct:[160,190,220,260,300]}})]},saint_of_dawn:{from:`sage`,occ:`oracle`,name:`Saint of Dawn`,role:`Heals, blesses and keeps allies standing`,growth:{str:1,int:9},abandons:[],skills:[$l(25,`dawnlight`,`Dawnlight`,`active`,[`Heal an ally (or yourself) 60 + INT×2.5, and the light leaps on to the most hurt ally within 6 tiles: 1 leap`,`70 + INT×2.5, 2 leaps`,`80 + INT×2.5, 3 leaps`,`90 + INT×2.5, 4 leaps`,`100 + INT×2.5, 5 leaps`],{counts:`healed`,at:[3e3,1e4,25e3,5e4]},{live:!0,use:{cost:18,cd:5,range:7,heal:[60,70,80,90,100],int:2.5,leaps:[1,2,3,4,5],hop:6}}),$l(25,`last_grace`,`Last Grace`,`passive`,[`An ally within 8 tiles of you (or you) who would fall is held up and healed 20% of max HP instead; once each 120 s for each of them`,`25%; 105 s`,`30%; 90 s`,`35%; 75 s`,`40%; 60 s`],{counts:`saves`,at:[5,15,30,50]},{live:!0,grace:{radius:8,heal:[20,25,30,35,40],every:[120,105,90,75,60]}}),$l(27,`dawn_blessing`,`Blessing of Dawn`,`active`,[`Bless an ally (or yourself) and everyone within 3 tiles of them for 60 s: +10% damage, +10 DEF`,`+13% damage, +15 DEF`,`+16% damage, +20 DEF`,`+20% damage, +25 DEF`,`+25% damage, +30 DEF`],{counts:`casts`,at:[50,150,300,500]},{live:!0,use:{cost:25,cd:8,range:7,radius:3,dmg:[10,13,16,20,25],def:[10,15,20,25,30],dur:60}}),$l(30,`sunrise`,`Sunrise`,`active`,[`Pray 2 s, then the sun rises over everyone within 10 tiles: all healed to full, and 30% less damage taken for 6 s; 90 s cooldown`,`35% less; 80 s`,`40% less; 70 s`,`45% less; 60 s`,`50% less; 50 s`],{counts:`casts`,at:[10,30,60,100]},{live:!0,use:{cost:50,cd:[90,80,70,60,50],channel:2,radius:10,guard:[30,35,40,45,50],dur:6}})]}},nu={casts:{what:`casts`,per:1},evades:{what:`hits evaded`,per:1},time:{what:`minutes: full speed in a fight, a quarter standing still out of one`,per:eu},swordTime:{what:`minutes in a fight with a sword in hand`,per:eu},dragonTime:{what:`minutes in a fight with your dragon out`,per:eu},healed:{what:`HP healed`,per:1},saves:{what:`allies kept from falling`,per:1}},ru=(e,t)=>1+e.byUse.at.filter(e=>t>=e).length,iu=[`Wrath`,`Stone`,`Wings`,`Edges`,`Glyphs`,`Ruin`,`Dawn`,`Walls`,`Zeal`],au={fighter:0,bishop:1,knight:2,sword_mage:3,necromancer:4,warlock:5,sage:6,paladin:7,monk:8},ou=e=>au[e]===void 0?null:`shard_of_${iu[au[e]].toLowerCase()}`,su=e=>au[e]===void 0?``:`Shard of ${iu[au[e]]}`,cu=e=>Object.entries(Ql).filter(([,t])=>t.occ===e).map(([e,t])=>({id:e,...t})),lu=e=>Object.entries(tu).filter(([,t])=>t.from===e).map(([e,t])=>({id:e,...t})),uu=e=>Ql[e]?.name??tu[e]?.name??``,du=(e,t)=>!!tu[e.job3]?.abandons.includes(t),fu=(e,t)=>e.use?.hp?Math.ceil(t.hpMax*e.use.hp/100):0,pu=(e,t)=>{let n=fu(e,t);return n>0&&t.hp-n<t.hpMax*10/100},mu=e=>e.type===`active`||e.type===`capstone`,hu={};for(let[e,t]of Object.entries(Zl)){hu[e]={};for(let n of t)hu[e][n.id]={...n,job:null}}for(let[e,t]of Object.entries(Ql))for(let n of t.skills)hu[t.occ][n.id]={...n,job:e};for(let[e,t]of Object.entries(tu))for(let n of t.skills)hu[t.occ][n.id]={...n,job:t.from,job3:e};var gu=(e,t)=>hu[e]?.[t],_u=e=>Object.values(hu[e]??{}),vu=(e,t)=>(e?.get?e.get(t):e?.[t])??0,yu=(e,t)=>Array.isArray(e)?e[Math.max(0,t-1)]:e,bu=(e,t)=>Math.round(yu(e.use?.cost??0,t)*1),xu=()=>1,Su=e=>Zl[e].filter(e=>e.lv===1).map(e=>e.id);function Cu(e,t){let n=gu(e.occ,t);if(!n)return`Unknown skill`;let r=vu(e.skills,t);return r>=n.max?`Already at max rank`:du(e,t)?`Given up with the ${tu[e.job3].name}'s oath`:n.byUse?r?`Ranks up as you use it`:e.job3===n.job3?e.level<n.lv?`Needs Lv ${n.lv}`:`Comes on its own`:`${tu[n.job3].name} skill: swear the 3rd oath at the Crownwarden (Lv 25)`:n.job&&e.job!==n.job?`${Ql[n.job].name} skill: change class at the Oathkeeper (Lv 15)`:e.level<n.lv?`Needs Lv ${n.lv}`:n.upgrades&&vu(e.skills,n.upgrades)<1?`Needs ${gu(e.occ,n.upgrades).name} first`:(e.points??0)<xu(n,r+1)?`No skill points left (one comes with each level)`:null}function wu(e,t){let n=Ql[t];return!n||n.occ!==e.occ?`That class is not open to you`:e.job?`You are already a ${Ql[e.job].name}`:n.locked?`The ${n.name}'s road isn't open yet`:e.level<15?`Come back at Lv 15`:null}function Tu(e,t){let n=tu[t];if(!n||n.from!==e.job)return`That road is not open to you`;if(e.job3)return`You are already a ${tu[e.job3].name}`;if(e.level<25)return`Come back at Lv 25`;let r=ou(e.job);return r&&![...e.bag??[]].includes(r)?`Bring the ${su(e.job)} in your bag: the Shardfall's monsters drop it`:null}var Eu=(e,t)=>_u(e.occ).filter(n=>n.lv===t&&(!n.job||n.job===e.job)&&(!n.job3||n.job3===e.job3));function Du(e,t){let n=e=>vu(t,e),r={};if(e===`vanguard`&&n(`vigor`)){let t=gu(e,`vigor`).regen;r.hpRegen=yu(t.fight,n(`vigor`)),r.regenPct=yu(t.calm,n(`vigor`))}if((e===`arcanist`||e===`oracle`)&&n(`arcane_mind`)&&(r.resPct=10*n(`arcane_mind`),r.resRegenPct=20*n(`arcane_mind`)),e===`arcanist`&&n(`phantom_step`)&&(r.resRegenPct=(r.resRegenPct??0)+yu(gu(e,`phantom_step`).regen,n(`phantom_step`))),e===`arcanist`&&n(`mountain_breath`)){let t=gu(e,`mountain_breath`).regen;r.hpRegen=(r.hpRegen??0)+yu(t.fight,n(`mountain_breath`)),r.regenPct=(r.regenPct??0)+yu(t.calm,n(`mountain_breath`))}return r}var Ou={x:28,z:28},ku={oathgate:{name:`Oathgate`,x0:0,z0:0,w:56,h:56},ashen:{name:`The Ashen Reach`,x0:72,z0:0,w:64,h:64},shardfall:{name:`The Shardfall`,x0:0,z0:72,w:60,h:60}},Au=ku.ashen.x0,ju=ku.shardfall.z0,Mu=[{region:`oathgate`,x:4.5,z:4.5,to:{x:Au+58.5,z:58.5},label:`To the Ashen Reach`},{region:`ashen`,x:Au+60.5,z:60.5,to:{x:7,z:7},label:`To Oathgate`},{region:`oathgate`,x:51.5,z:4.5,to:{x:52.5,z:ju+52.5},label:`To the Shardfall`},{region:`shardfall`,x:55.5,z:ju+55.5,to:{x:48.5,z:7.5},label:`To Oathgate`}],Nu=.8,Pu={x:Au+9,z:9,r:7},Fu={x:Au+49,z:49,r:12};function Iu(e,t){for(let[n,r]of Object.entries(ku))if(e>=r.x0&&e<r.x0+r.w&&t>=r.z0&&t<r.z0+r.h)return n;return`oathgate`}var Lu={GRASS:0,DIRT:1,STONE:2,TRIM:3,VOID:4,ASH:5,CHAR:6,SHARD:7},Ru=[14173483,9080728,5222632,12109016,9071856,16742938,16769162,7324282,15749230],zu={oathkeeper:{name:`Oathkeeper`,title:`Class change`,x:Ou.x+1.5,z:Ou.z+1.5},wiseman:{name:`Wise Man`,title:`Learn skills`,x:Ou.x-3.5,z:Ou.z+.5},merchant:{name:`Hilde`,title:`Weapons & armor`,x:Ou.x+3.5,z:Ou.z-1.5},crownwarden:{name:`Crownwarden`,title:`3rd class`,x:Ou.x-1.5,z:Ou.z+3.5}},Bu=2.2;function Vu(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Hu(e=9){let t=Vu(e),n=new Uint8Array(17952).fill(Lu.VOID),r=new Uint8Array(17952).fill(1),i=[],a=(e,t)=>t*136+e,o=(e,t)=>e>=0&&t>=0&&e<56&&t<56,s=Math.floor(Ou.x),c=Math.floor(Ou.z),l=(e,t)=>{o(e,t)&&(r[a(e,t)]=1)},u=(e,t)=>o(e,t)&&!r[a(e,t)];for(let e=0;e<56;e++)for(let t=0;t<56;t++){let i=Math.abs(t+.5-Ou.x),o=Math.abs(e+.5-Ou.z),c=Math.max(i,o),l=Lu.GRASS;(i<2||o<2)&&(l=Lu.DIRT),c<10&&(l=Lu.TRIM),c<9&&(l=Lu.STONE),Math.abs(t-e)<=1&&t>=4&&t<s-9&&(l=Lu.DIRT),n[a(t,e)]=l,r[a(t,e)]=0}for(let[e,t]of[[s-1,c-1],[s,c-1],[s-1,c],[s,c]])l(e,t);i.push({type:`plinth`,x:Ou.x,z:Ou.z});for(let e=0;e<9;e++){let t=e/9*Math.PI*2-Math.PI/2,n=Math.floor(Ou.x+Math.cos(t)*5.5),r=Math.floor(Ou.z+Math.sin(t)*5.5);l(n,r),i.push({type:`shard`,x:n+.5,z:r+.5,color:Ru[e],k:e})}for(let e of Object.values(zu))l(Math.floor(e.x),Math.floor(e.z));for(let e of[-1,1])for(let n of[-1,1])for(let[r,a]of[[8,8],[8,4],[4,8]]){let o=Math.floor(Ou.x+e*r-+(e<0)),s=Math.floor(Ou.z+n*a-+(n<0));l(o,s),i.push({type:`pillar`,x:o+.5,z:s+.5,broken:t()<.35})}for(let[e,t]of[[-15,-15],[12,-15],[-15,12],[12,12]]){let n=s+e,r=c+t;for(let e=n;e<n+4;e++)for(let t=r;t<r+3;t++)l(e,t);i.push({type:`house`,x:n+2,z:r+3/2,w:4,d:3,roof:[8010282,3824250,5925434,6965866][i.length%4]})}l(s+2,c-9-3),i.push({type:`board`,x:s+2.5,z:c-9-2.5});for(let e=0;e<56;e++)for(let n=0;n<56;n++){let r=Math.min(n,e,55-n,55-e);(r===0||r===1&&t()<.6)&&(l(n,e),i.push({type:t()<.8?`tree`:`rock`,x:n+.5,z:e+.5,s:.8+t()*.5}))}let d=(e,t)=>{let n=Math.abs(e+.5-Ou.x),r=Math.abs(t+.5-Ou.z),i=Math.hypot(e+.5-Mu[0].x,t+.5-Mu[0].z)<4;return n>=3&&r>=3&&Math.max(n,r)>12&&Math.abs(e-t)>2&&!i};for(let e=0;e<220;e++){let e=2+Math.floor(t()*52),n=2+Math.floor(t()*52);if(!d(e,n)||!u(e,n))continue;let r=t(),a=!1;for(let t=-1;t<=1&&!a;t++)for(let r=-1;r<=1;r++)if(!u(e+t,n+r)){a=!0;break}a||(l(e,n),r<.6?i.push({type:`tree`,x:e+.5,z:n+.5,s:.8+t()*.5}):r<.88?i.push({type:`rock`,x:e+.5,z:n+.5,s:.6+t()*.6}):i.push({type:`crystal`,x:e+.5,z:n+.5,s:.7+t()*.5}))}i.push({type:`portal`,x:Mu[0].x,z:Mu[0].z,color:10115839});let f=Mu[2];for(let e=i.length-1;e>=0;e--){let t=i[e];if(![`tree`,`rock`,`crystal`].includes(t.type)||Math.hypot(t.x-f.x,t.z-f.z)>3.6)continue;let n=Math.floor(t.x),o=Math.floor(t.z);Math.min(n,o,55-n,55-o)<=1||(r[a(n,o)]=0,i.splice(e,1))}return i.push({type:`portal`,x:f.x,z:f.z,color:14203135}),Wu(Vu(e+77),n,r,i,a),Uu(Vu(e+151),n,r,i,a),{w:136,h:132,ground:n,solid:r,props:i}}function Uu(e,t,n,r,i){let a=ku.shardfall,o=(e,t)=>i(a.x0+e,a.z0+t),s=(e,t)=>{n[o(e,t)]=1},c=(e,t)=>e>=0&&t>=0&&e<a.w&&t<a.h&&!n[o(e,t)];for(let e=0;e<a.h;e++)for(let r=0;r<a.w;r++)t[o(r,e)]=Math.abs(r-e)<=1?Lu.STONE:Lu.SHARD,n[o(r,e)]=0;let l=()=>Ru[Math.floor(e()*Ru.length)];for(let t=0;t<a.h;t++)for(let n=0;n<a.w;n++){let i=Math.min(n,t,a.w-1-n,a.h-1-t);if(i===0||i===1&&e()<.6){s(n,t);let i=a.x0+n+.5,o=a.z0+t+.5,c=.9+e()*.6;r.push(e()<.55?{type:`crystal`,x:i,z:o,s:c*1.4,color:l()}:{type:`rock`,x:i,z:o,s:c})}}let u={u:Mu[3].x-a.x0,v:Mu[3].z-a.z0};for(let t=0;t<240;t++){let t=2+Math.floor(e()*(a.w-4)),n=2+Math.floor(e()*(a.h-4));if(!c(t,n)||Math.abs(t-n)<=2||Math.hypot(t-u.u,n-u.v)<6)continue;let i=!1;for(let e=-1;e<=1&&!i;e++)for(let r=-1;r<=1;r++)if(!c(t+e,n+r)){i=!0;break}if(i)continue;s(t,n);let o=a.x0+t+.5,d=a.z0+n+.5,f=.7+e()*.7,p=e();p<.5?r.push({type:`crystal`,x:o,z:d,s:f*1.3,color:l()}):p<.88?r.push({type:`rock`,x:o,z:d,s:f}):r.push({type:`bones`,x:o,z:d,s:f})}r.push({type:`portal`,x:Mu[3].x,z:Mu[3].z,color:14203135})}function Wu(e,t,n,r,i){let a=ku.ashen,o=(e,t)=>i(a.x0+e,a.z0+t),s=(e,t)=>{n[o(e,t)]=1},c=(e,t)=>e>=0&&t>=0&&e<a.w&&t<a.h&&!n[o(e,t)],l=(e,t)=>Math.max(Math.abs(e+.5-(Pu.x-a.x0)),Math.abs(t+.5-Pu.z)),u=(e,t)=>Math.hypot(e+.5-(Fu.x-a.x0),t+.5-Fu.z);for(let e=0;e<a.h;e++)for(let r=0;r<a.w;r++){let i=Lu.ASH;u(r,e)<Fu.r&&(i=Lu.GRASS),Math.abs(r-e)<=1&&(i=Lu.DIRT),l(r,e)<Pu.r&&(i=Lu.CHAR),t[o(r,e)]=i,n[o(r,e)]=0}for(let t=0;t<20;t++)for(let n=0;n<20;n++)Math.round(l(n,t))!==Pu.r||Math.abs(n-t)<=2&&n>8||e()<.75&&(s(n,t),r.push({type:`spike`,x:a.x0+n+.5,z:a.z0+t+.5,s:.8+e()*.6}));for(let t=0;t<a.h;t++)for(let n=0;n<a.w;n++){let i=Math.min(n,t,a.w-1-n,a.h-1-t);(i===0||i===1&&e()<.6)&&(s(n,t),r.push({type:e()<.75?`deadtree`:`rock`,x:a.x0+n+.5,z:a.z0+t+.5,s:.8+e()*.5}))}let d={u:Mu[1].x-a.x0,v:Mu[1].z-a.z0};for(let t=0;t<260;t++){let t=2+Math.floor(e()*(a.w-4)),n=2+Math.floor(e()*(a.h-4));if(!c(t,n)||Math.abs(t-n)<=2||l(t,n)<=Pu.r+1||Math.hypot(t-d.u,n-d.v)<5)continue;let i=!1;for(let e=-1;e<=1&&!i;e++)for(let r=-1;r<=1;r++)if(!c(t+e,n+r)){i=!0;break}if(i)continue;let o=u(t,n)<Fu.r,f=e();if(o&&f<.7)continue;s(t,n);let p=a.x0+t+.5,m=a.z0+n+.5,h=.7+e()*.6;o?r.push({type:`tree`,x:p,z:m,s:h}):f<.5?r.push({type:`deadtree`,x:p,z:m,s:h}):f<.85?r.push({type:`rock`,x:p,z:m,s:h}):r.push({type:`bones`,x:p,z:m,s:h})}r.push({type:`portal`,x:Mu[1].x,z:Mu[1].z,color:7000319})}var Gu=Hu();function Ku(e,t){return e<0||t<0||e>=136||t>=132||Gu.solid[t*136+e]===1}function qu(e,t,n=.3){let r=Math.floor(e-n),i=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n);for(let s=a;s<=o;s++)for(let a=r;a<=i;a++){if(!Ku(a,s))continue;let r=Math.max(a,Math.min(e,a+1)),i=Math.max(s,Math.min(t,s+1));if((r-e)**2+(i-t)**2<n*n)return!1}return!0}function Ju(e=Math.random){for(let t=0;t<100;t++){let t=e()*Math.PI*2,n=2.2+e()*1.8,r=Ou.x+Math.cos(t)*n,i=Ou.z+Math.sin(t)*n;if(qu(r,i,.35))return{x:r,z:i}}return{x:Ou.x+3,z:Ou.z+.5}}var Yu=[`main`,`off`,`head`,`armor`,`boots`,`neck`,`ring1`,`ring2`],Xu={main:`Main hand`,off:`Off hand`,head:`Head`,armor:`Armor`,boots:`Boots`,neck:`Necklace`,ring1:`Ring`,ring2:`Ring`},Zu={vanguard:[`rusty_shortsword`,`padded_jerkin`,`worn_boots`],arcanist:[`apprentice_wand`,`linen_robe`,`soft_slippers`],oracle:[`oak_mace`,`novice_vestment`,`pilgrim_sandals`]},H=(e,t,n,r,i,a={})=>({name:e,slot:t,lv:n,for:r,stats:i,...a}),U={rusty_shortsword:H(`Rusty Shortsword`,`main`,1,`vanguard`,{str:2},{atk:3}),ironbound_blade:H(`Ironbound Blade`,`main`,5,`vanguard`,{str:4},{atk:6}),boarbreaker_axe:H(`Boarbreaker Axe`,`main`,10,`vanguard`,{str:7},{atk:10}),militia_sword:H(`Militia Sword`,`main`,3,`vanguard`,{str:3},{atk:5}),arming_sword:H(`Arming Sword`,`main`,8,`vanguard`,{str:5},{atk:9}),emberedge_sword:H(`Emberedge Sword`,`main`,12,`vanguard`,{str:7},{atk:12,crit:3}),ashforged_blade:H(`Ashforged Blade`,`main`,18,`vanguard`,{str:10},{atk:17}),sunsteel_sword:H(`Sunsteel Sword`,`main`,22,`vanguard`,{str:13},{atk:21,crit:4}),iron_greatsword:H(`Iron Greatsword`,`main`,4,`vanguard`,{str:4},{atk:9,twoHand:!0}),claymore:H(`Claymore`,`main`,9,`vanguard`,{str:7},{atk:15,twoHand:!0}),boarbane_zweihander:H(`Boarbane Zweihander`,`main`,13,`vanguard`,{str:10},{atk:20,hp:30,twoHand:!0}),ashen_greatblade:H(`Ashen Greatblade`,`main`,18,`vanguard`,{str:14},{atk:27,crit:3,twoHand:!0}),dawnbreaker:H(`Dawnbreaker`,`main`,22,`vanguard`,{str:18},{atk:34,crit:5,twoHand:!0}),plank_buckler:H(`Plank Buckler`,`off`,1,`vanguard`,{str:1},{def:4}),iron_round_shield:H(`Iron Round Shield`,`off`,3,`vanguard`,{str:1},{def:6}),oaken_kite_shield:H(`Oaken Kite Shield`,`off`,6,`vanguard`,{str:2},{def:8}),tower_shield:H(`Tower Shield`,`off`,11,`vanguard`,{str:3},{def:14,hp:40}),emberward_shield:H(`Emberward Shield`,`off`,18,`vanguard`,{str:5},{def:20,hp:60}),leather_cap:H(`Leather Cap`,`head`,1,`vanguard`,{},{def:2}),iron_nasal_helm:H(`Iron Nasal Helm`,`head`,6,`vanguard`,{str:2},{def:4}),bascinet:H(`Bascinet`,`head`,11,`vanguard`,{str:3},{def:6,hp:20}),ashen_helm:H(`Ashen Helm`,`head`,18,`vanguard`,{str:5},{def:9,hp:35}),padded_jerkin:H(`Padded Jerkin`,`armor`,1,`vanguard`,{str:2},{def:3}),travelers_tunic:H(`Traveler's Tunic`,`armor`,3,`vanguard`,{str:3},{def:4}),ringmail_coat:H(`Ringmail Coat`,`armor`,6,`vanguard`,{str:4},{def:7}),scale_hauberk:H(`Scale Hauberk`,`armor`,10,`vanguard`,{str:6},{def:10,hp:25}),ashplate_cuirass:H(`Ashplate Cuirass`,`armor`,18,`vanguard`,{str:10},{def:16,hp:50}),worn_boots:H(`Worn Boots`,`boots`,1,`vanguard`,{str:1}),marching_greaves:H(`Marching Greaves`,`boots`,6,`vanguard`,{str:2},{def:3}),ironshod_boots:H(`Ironshod Boots`,`boots`,11,`vanguard`,{str:3},{def:4}),ashen_sabatons:H(`Ashen Sabatons`,`boots`,18,`vanguard`,{str:5},{def:6,hp:20}),apprentice_wand:H(`Apprentice Wand`,`main`,1,`arcanist`,{int:2},{atk:3}),ashwood_staff:H(`Ashwood Staff`,`main`,5,`arcanist`,{int:4},{atk:6}),emberglass_rod:H(`Emberglass Rod`,`main`,10,`arcanist`,{int:7},{atk:10}),willow_wand:H(`Willow Wand`,`main`,3,`arcanist`,{int:3},{atk:4,mp:10}),crystal_scepter:H(`Crystal Scepter`,`main`,8,`arcanist`,{int:6},{atk:8,mp:20}),frostglass_rod:H(`Frostglass Rod`,`main`,12,`arcanist`,{int:8},{atk:11,crit:2}),ashen_scepter:H(`Ashen Scepter`,`main`,18,`arcanist`,{int:12},{atk:15,mp:40}),gnarled_greatstaff:H(`Gnarled Greatstaff`,`main`,4,`arcanist`,{int:5},{atk:8,mp:15,twoHand:!0}),moonwood_greatstaff:H(`Moonwood Greatstaff`,`main`,9,`arcanist`,{int:9},{atk:13,mp:30,twoHand:!0}),stormcaller_staff:H(`Stormcaller Staff`,`main`,13,`arcanist`,{int:13},{atk:18,crit:3,twoHand:!0}),archmage_staff:H(`Archmage Staff`,`main`,18,`arcanist`,{int:18},{atk:25,mp:60,twoHand:!0}),ruinweaver_staff:H(`Ruinweaver Staff`,`main`,22,`arcanist`,{int:23},{atk:31,crit:5,twoHand:!0}),cracked_tome:H(`Cracked Tome`,`off`,1,`arcanist`,{int:2}),runed_grimoire:H(`Runed Grimoire`,`off`,6,`arcanist`,{int:5}),astral_codex:H(`Astral Codex`,`off`,12,`arcanist`,{int:7},{mp:30}),pointed_hat:H(`Pointed Hat`,`head`,1,`arcanist`,{int:1}),stargazer_cowl:H(`Stargazer's Cowl`,`head`,6,`arcanist`,{int:4}),sorcerers_hat:H(`Sorcerer's Hat`,`head`,11,`arcanist`,{int:5},{mp:15}),ember_hat:H(`Ember Hat`,`head`,18,`arcanist`,{int:8},{mp:30,crit:2}),linen_robe:H(`Linen Robe`,`armor`,1,`arcanist`,{int:2},{def:1}),apprentice_robe:H(`Apprentice's Robe`,`armor`,3,`arcanist`,{int:3},{def:2,mp:10}),starweave_robe:H(`Starweave Robe`,`armor`,6,`arcanist`,{int:5},{def:3}),twilight_robe:H(`Twilight Robe`,`armor`,10,`arcanist`,{int:7},{def:4,mp:25}),emberweave_robe:H(`Emberweave Robe`,`armor`,18,`arcanist`,{int:11},{def:6,mp:50}),soft_slippers:H(`Soft Slippers`,`boots`,1,`arcanist`,{str:1}),windstep_shoes:H(`Windstep Shoes`,`boots`,6,`arcanist`,{str:3}),silkstep_slippers:H(`Silkstep Slippers`,`boots`,11,`arcanist`,{str:2,int:2}),cinderwalk_shoes:H(`Cinderwalk Shoes`,`boots`,18,`arcanist`,{str:3,int:4},{mp:20}),oak_mace:H(`Oak Mace`,`main`,1,`oracle`,{int:2},{atk:3}),blessed_hammer:H(`Blessed Hammer`,`main`,5,`oracle`,{int:4},{atk:6}),dawnbell_flail:H(`Dawnbell Flail`,`main`,10,`oracle`,{str:1,int:6},{atk:10}),chapel_scepter:H(`Chapel Scepter`,`main`,8,`oracle`,{int:5},{atk:8,hp:15}),hallowed_rod:H(`Hallowed Rod`,`main`,18,`oracle`,{int:11},{atk:15,hp:40}),pilgrim_staff:H(`Pilgrim's Staff`,`main`,4,`oracle`,{str:1,int:4},{atk:8,hp:20,twoHand:!0}),sunwood_greatstaff:H(`Sunwood Greatstaff`,`main`,10,`oracle`,{int:9},{atk:14,mp:25,twoHand:!0}),seraph_staff:H(`Seraph Staff`,`main`,18,`oracle`,{int:15},{atk:22,hp:50,twoHand:!0}),wooden_icon:H(`Wooden Icon`,`off`,1,`oracle`,{str:1,int:1}),sunlit_aegis:H(`Sunlit Aegis`,`off`,6,`oracle`,{int:2},{def:5}),dawnward_aegis:H(`Dawnward Aegis`,`off`,12,`oracle`,{int:4},{def:10,hp:25}),linen_hood:H(`Linen Hood`,`head`,1,`oracle`,{int:1}),halo_circlet:H(`Halo Circlet`,`head`,6,`oracle`,{int:3}),sun_mitre:H(`Sun Mitre`,`head`,11,`oracle`,{int:4},{def:3,hp:15}),seraph_circlet:H(`Seraph Circlet`,`head`,18,`oracle`,{int:7},{def:4,mp:25}),novice_vestment:H(`Novice Vestment`,`armor`,1,`oracle`,{str:1,int:1},{def:2}),pilgrim_cassock:H(`Pilgrim's Cassock`,`armor`,3,`oracle`,{str:1,int:2},{def:3}),chainlinked_habit:H(`Chainlinked Habit`,`armor`,6,`oracle`,{str:3,int:2},{def:5}),sunlit_vestment:H(`Sunlit Vestment`,`armor`,10,`oracle`,{str:2,int:6},{def:7,hp:20}),seraph_raiment:H(`Seraph Raiment`,`armor`,18,`oracle`,{str:4,int:9},{def:11,hp:45}),pilgrim_sandals:H(`Pilgrim Sandals`,`boots`,1,`oracle`,{str:1}),pilgrim_boots:H(`Pilgrim Boots`,`boots`,6,`oracle`,{str:3}),temple_sandals:H(`Temple Sandals`,`boots`,11,`oracle`,{str:2,int:2},{hp:10}),wyrmguard_lance:H(`Wyrmguard Lance`,`main`,15,`knight`,{str:10},{atk:14}),oathbound_warhammer:H(`Oathbound Warhammer`,`main`,15,`paladin`,{str:6,int:4},{atk:13}),twinfang_cleaver:H(`Twinfang Cleaver`,`main`,15,`fighter`,{str:11},{atk:16}),spellsteel_saber:H(`Spellsteel Saber`,`main`,15,`sword_mage`,{str:3,int:7},{atk:14}),hexbone_wand:H(`Hexbone Wand`,`main`,15,`warlock`,{str:2,int:9},{atk:14}),ossuary_staff:H(`Ossuary Staff`,`main`,15,`necromancer`,{str:3,int:8},{atk:14}),lumen_staff:H(`Lumen Staff`,`main`,15,`sage`,{int:11},{atk:13}),pilgrim_knuckles:H(`Pilgrim Knuckles`,`main`,15,`monk`,{str:3,int:7},{atk:15}),crozier_of_walls:H(`Crozier of Walls`,`main`,15,`bishop`,{str:4,int:7},{atk:12,def:4}),wyrmguard_greathelm:H(`Wyrmguard Greathelm`,`head`,15,`knight`,{str:4},{def:8}),wyrmguard_harness:H(`Wyrmguard Harness`,`armor`,15,`knight`,{str:10},{def:14}),wyrmguard_sabatons:H(`Wyrmguard Sabatons`,`boots`,15,`knight`,{str:3},{def:5}),gravecaller_hood:H(`Gravecaller's Hood`,`head`,15,`necromancer`,{int:6},{def:3}),gravecaller_robes:H(`Gravecaller's Robes`,`armor`,15,`necromancer`,{str:3,int:6},{def:6}),gravewalker_wraps:H(`Gravewalker Wraps`,`boots`,15,`necromancer`,{str:3,int:2},{def:2}),kings_crown:H(`The King's Lost Crown`,`head`,20,null,{str:20,int:20},{unique:!0}),sunstride_boots:H(`Sunstride Boots`,`boots`,25,`saint_of_dawn`,{str:8,int:16},{def:12,hp:80,mp:80,speed:25,unique:!0,dropsFrom:`crownless_king`,dropChance:.5}),glass_bead_necklace:H(`Glass Bead Necklace`,`neck`,1,null,{int:1}),tusk_necklace:H(`Tusk Necklace`,`neck`,3,null,{str:3}),moonstone_pendant:H(`Moonstone Pendant`,`neck`,6,null,{int:4}),wardenheart_amulet:H(`Wardenheart Amulet`,`neck`,8,null,{str:4},{def:4}),copper_locket:H(`Copper Locket`,`neck`,2,null,{},{hp:15}),mana_drop_pendant:H(`Mana-drop Pendant`,`neck`,4,null,{},{mp:30}),hunters_fang:H(`Hunter's Fang`,`neck`,7,null,{str:2},{crit:2}),sages_medallion:H(`Sage's Medallion`,`neck`,10,null,{int:5},{mp:35}),vitality_charm:H(`Vitality Charm`,`neck`,12,null,{str:3},{hp:50,def:2}),ashen_heart:H(`Ashen Heart`,`neck`,18,null,{str:5,int:5},{hp:60,crit:2}),starfall_amulet:H(`Starfall Amulet`,`neck`,22,null,{str:6,int:6},{mp:60,crit:4}),mossy_ring:H(`Mossy Ring`,`ring`,1,null,{str:1}),copper_band:H(`Copper Band`,`ring`,2,null,{str:2}),iron_ring:H(`Iron Ring`,`ring`,3,null,{},{def:3}),boar_tusk_ring:H(`Boar-tusk Ring`,`ring`,4,null,{str:4}),garnet_ring:H(`Garnet Ring`,`ring`,5,null,{},{hp:40}),sapphire_loop:H(`Sapphire Loop`,`ring`,6,null,{str:2,int:4}),opal_ring:H(`Opal Ring`,`ring`,7,null,{},{mp:50}),eagle_eye_ring:H(`Eagle-eye Ring`,`ring`,9,null,{},{crit:4}),bloodstone_ring:H(`Bloodstone Ring`,`ring`,12,null,{str:5},{hp:40}),arcane_signet:H(`Arcane Signet`,`ring`,12,null,{int:5},{mp:40}),emberheart_ring:H(`Emberheart Ring`,`ring`,18,null,{str:5},{atk:4,crit:2}),frostmoon_ring:H(`Frostmoon Ring`,`ring`,18,null,{int:7},{mp:40,def:2})};for(let[e,[t,n,r]]of Object.entries({rusty_shortsword:[`sword`,9071178],ironbound_blade:[`sword`,13160668],boarbreaker_axe:[`axe`,13138490],plank_buckler:[`buckler`,9071178],oaken_kite_shield:[`kite`,9071178,10169131],leather_cap:[`cap`,8016434],iron_nasal_helm:[`helm`,10134704],padded_jerkin:[`jerkin`,8018490],ringmail_coat:[`plate`,9082536,10169131],worn_boots:[`boots`,4862496],marching_greaves:[`greaves`,9081502],apprentice_wand:[`wand`,10128576],ashwood_staff:[`staff`,10149738],emberglass_rod:[`rod`,16742938],cracked_tome:[`tome`,7031354],runed_grimoire:[`grimoire`,3811946],pointed_hat:[`hat`,2760540],stargazer_cowl:[`cowl`,1981034],linen_robe:[`robe`,5923445,13153418],starweave_robe:[`starweave`,3878266,9403368],soft_slippers:[`slippers`,4864602],windstep_shoes:[`boots`,4885146],oak_mace:[`mace`,8018490],blessed_hammer:[`hammer`,15786144],dawnbell_flail:[`flail`,16765024],wooden_icon:[`icon`,8018490],sunlit_aegis:[`aegis`,13938487],linen_hood:[`hood`,14209216],halo_circlet:[`circlet`,16769162],novice_vestment:[`vestment`,13616037,9071168],chainlinked_habit:[`habit`,10528944,15262416],pilgrim_sandals:[`sandals`,9071178],pilgrim_boots:[`boots`,5917242],wyrmguard_lance:[`lance`,2775720],oathbound_warhammer:[`warhammer`,15782e3],twinfang_cleaver:[`cleaver`,13650490],spellsteel_saber:[`saber`,10128127],hexbone_wand:[`wand`,9109354],ossuary_staff:[`bonestaff`,9109440],lumen_staff:[`lumen`,16773296],pilgrim_knuckles:[`knuckles`,14721104],crozier_of_walls:[`crozier`,9095423],wyrmguard_greathelm:[`greathelm`,12634324,2771594],wyrmguard_harness:[`knightplate`,12634324,2771594],wyrmguard_sabatons:[`sabatons`,12634324],kings_crown:[`crown`,15910212,9050666],gravecaller_hood:[`gravehood`,2038564],gravecaller_robes:[`graverobe`,2038564,5003836],gravewalker_wraps:[`wraps`,2761776],glass_bead_necklace:[`pendant`,9097471],tusk_necklace:[`pendant`,15260864],moonstone_pendant:[`pendant`,13162751],wardenheart_amulet:[`pendant`,8050943],mossy_ring:[null,6986308],copper_band:[null,13138490],boar_tusk_ring:[null,15260864],sapphire_loop:[null,3828456],militia_sword:[`sword`,10528944],arming_sword:[`sword`,14212582],emberedge_sword:[`sword`,16742970],ashforged_blade:[`sword`,5921380],sunsteel_sword:[`sword`,16769162],iron_greatsword:[`greatsword`,11055292,4862752],claymore:[`greatsword`,13686496,2771594],boarbane_zweihander:[`greatsword`,13148272,6961690],ashen_greatblade:[`greatsword`,4868690,14173483],dawnbreaker:[`greatsword`,16773296,13938487],iron_round_shield:[`buckler`,9081502],tower_shield:[`kite`,6975352,2771594],emberward_shield:[`kite`,3813424,14173483],bascinet:[`helm`,11581636],ashen_helm:[`helm`,4868690],travelers_tunic:[`jerkin`,5925514],scale_hauberk:[`plate`,6978154,5925434],ashplate_cuirass:[`plate`,4868690,14173483],ironshod_boots:[`greaves`,6975352],ashen_sabatons:[`sabatons`,4868690],willow_wand:[`wand`,9097471],crystal_scepter:[`rod`,9071856],frostglass_rod:[`rod`,10481919],ashen_scepter:[`rod`,13650554],gnarled_greatstaff:[`greatstaff`,10149738,5913375],moonwood_greatstaff:[`greatstaff`,13162751,3816026],stormcaller_staff:[`greatstaff`,7000319,2764864],archmage_staff:[`greatstaff`,11963135,2760540],ruinweaver_staff:[`greatstaff`,16734762,2759708],astral_codex:[`grimoire`,1981034],sorcerers_hat:[`hat`,5906236],ember_hat:[`hat`,6953498],apprentice_robe:[`robe`,2775690,13153418],twilight_robe:[`starweave`,2760540,16751312],emberweave_robe:[`robe`,6953498,16742938],silkstep_slippers:[`slippers`,6961802],cinderwalk_shoes:[`boots`,5909034],sunstride_boots:[`winged`,15253584,16774360],chapel_scepter:[`rod`,16769162],hallowed_rod:[`rod`,16774880],pilgrim_staff:[`greatstaff`,15786144,8018490],sunwood_greatstaff:[`greatstaff`,16765024,15262416],seraph_staff:[`greatstaff`,16774880,13938487],dawnward_aegis:[`aegis`,15261888],sun_mitre:[`hood`,15786160],seraph_circlet:[`circlet`,16774880],pilgrim_cassock:[`vestment`,9075290,14205066],sunlit_vestment:[`habit`,15788240,13938487],seraph_raiment:[`vestment`,16774880,16765024],temple_sandals:[`sandals`,13938487],copper_locket:[`pendant`,13138490],mana_drop_pendant:[`pendant`,5933823],hunters_fang:[`pendant`,15260864],sages_medallion:[`pendant`,13938487],vitality_charm:[`pendant`,14696538],ashen_heart:[`pendant`,16734762],starfall_amulet:[`pendant`,12110079],iron_ring:[null,9081502],garnet_ring:[null,10496570],opal_ring:[null,14215408],eagle_eye_ring:[null,13938487],bloodstone_ring:[null,6953514],arcane_signet:[null,9071856],emberheart_ring:[null,16742938],frostmoon_ring:[null,10481919]}))Object.assign(U[e],{look:t,color:n,accent:r});for(let[e,t]of Object.entries(au))U[ou(e)]={name:su(e),slot:`shard`,lv:1,for:e,stats:{},unique:!0,shard:!0,color:Ru[t]};var Qu=e=>e?.color?`#`+e.color.toString(16).padStart(6,`0`):null,$u=new Set([`sword`,`greatsword`]),ed=e=>e.for===`vanguard`&&$u.has(e.look),td=(e,t,n,r=``)=>tu[r]?.swordsOnly&&(e.slot===`off`||e.slot===`main`&&!ed(e))?!1:!e.for||e.for===t||e.for===n||!!r&&e.for===r||n===`sword_mage`&&ed(e),nd=e=>e.for?(Gl[e.for]?.name??Ql[e.for]?.name??tu[e.for]?.name)+(ed(e)?`, Sword Mage`:``):`Anyone`,rd={str:`STR`,int:`INT`},id=e=>[...Object.entries(e.stats).map(([e,t])=>`${rd[e]} +${t}`),e.atk&&`ATK +${e.atk}`,e.def&&`DEF +${e.def}`,e.hp&&`HP +${e.hp}`,e.mp&&`MP +${e.mp}`,e.crit&&`Crit +${e.crit}%`,e.speed&&`Speed +${e.speed}%`].filter(Boolean).join(`, `),ad=e=>e.shard?`Carried: the 3rd oath needs it`:e.twoHand?`Two hands`:Xu[e.slot===`ring`?`ring1`:e.slot],od=e=>(e.stats.str??0)+(e.stats.int??0)+(e.atk??0)*1.2+(e.def??0)+(e.hp??0)/8+(e.mp??0)/8+(e.crit??0)*2+(e.speed??0);function sd(e){let t=U[e],n=od(t);return Math.max(5,Math.round((n*6+10)*(1+t.lv/8)/5)*5)}var cd=e=>Math.max(1,Math.floor(sd(e)/4)),ld=e=>!!U[e]&&!U[e].unique&&!Ql[U[e].for]&&!tu[U[e].for],ud=e=>Yu.indexOf(e.slot===`ring`?`ring1`:e.slot),dd=Object.keys(U).filter(ld).sort((e,t)=>ud(U[e])-ud(U[t])||U[e].lv-U[t].lv);function fd(e,t){let n=U[t];return n?n.shard?`A shard is carried, not worn: keep it in your bag for the 3rd oath`:tu[e.job3]?.swordsOnly&&(n.slot===`off`||n.slot===`main`&&!ed(n))?`A ${tu[e.job3].name} holds a sword alone`:td(n,e.occ,e.job,e.job3)?e.level<n.lv?`Needs Lv ${n.lv}`:null:`Only for ${nd(n)}`:`Unknown item`}function pd(e,t){let n=U[e];return n.slot===`ring`?t.get(`ring1`)?t.get(`ring2`)?`ring1`:`ring2`:`ring1`:n.slot}function md(e){let t={atk:0,def:0,hp:0,mp:0,crit:0,speed:0};for(let n of Yu){let r=U[e?.get?.(n)];if(r){for(let[e,n]of Object.entries(r.stats))t[e]=(t[e]??0)+n;for(let e of[`atk`,`def`,`hp`,`mp`,`crit`,`speed`])t[e]+=r[e]??0}}return t}function hd(e,t){let n=U[e],r=U[t.get(`main`)];return n.twoHand&&t.get(`off`)?[`off`]:n.slot===`off`&&r?.twoHand?[`main`]:[]}var gd={mossling:[1,4],cragboar:[3,8],mosswarden:[60,90],ashhound:[18,30],crownless_king:[600,900]};function _d(e,t=Math.random){let[n,r]=gd[e]??[1,3];return n+Math.floor(t()*(r-n+1))}var vd={mossling:.22,cragboar:.35,mosswarden:1,ashhound:.4,crownless_king:1},yd=2,bd=.3;function xd(e,t){let n=t=>td(t,e.occ,e.job,e.job3),r=Math.min(t,12);return Object.entries(U).filter(([,e])=>n(e)&&!e.shard&&e.lv<15&&e.lv<=r+3&&e.lv>=r-5).map(([e])=>e)}function Sd(e,t,n,r=Math.random){if(r()>=(vd[t]??.2))return[];let i=xd(n,e.level),a=[],o=e.loot?.rolls??(e.boss?yd:1);for(let e=0;e<o&&i.length;e++)a.push(i[Math.floor(r()*i.length)]);let s=e.loot?.special,c=n.bag?.includes(s)||[...n.equip?.values?.()??[]].includes(s);s&&!c&&r()<(e.loot.specialChance??1)&&a.push(s);let l=e=>n.bag?.includes(e)||[...n.equip?.values?.()??[]].includes(e);for(let[e,i]of Object.entries(U))i.dropsFrom===t&&n.job3&&i.for===n.job3&&!l(e)&&r()<(i.dropChance??1)&&a.push(e);if(e.boss&&r()<(e.loot?.jobWeapon??bd)){let e=n.job?[n.job]:Object.keys(Ql).filter(e=>Ql[e].occ===n.occ),t=e[Math.floor(r()*e.length)],i=Object.keys(U).filter(e=>U[e].for===t&&!U[e].shard);i.length&&a.push(i[Math.floor(r()*i.length)])}return a}var Cd=[`str`,`int`],wd={str:`Strength`,int:`Intellect`},Td={vanguard:{str:8,int:2},arcanist:{str:2,int:8},oracle:{str:3,int:7}},Ed=e=>tu[e.job3]?.growth??Ql[e.job]?.growth??Td[e.occ];function Dd(e,t,n,r=``){let i=Rd(e);for(let a=2;a<=n;a++){let n=a>25&&tu[r]?tu[r].growth:a>15&&Ql[t]?Ql[t].growth:Td[e];for(let[e,t]of Object.entries(n))i[e]+=t}return i}var Od={vanguard:{str:1},arcanist:{int:1},oracle:{int:1}},kd=e=>tu[e.job3]?.power??Ql[e.job]?.power??Od[e.occ],Ad={vanguard:80,arcanist:20,oracle:30},jd=1/3,Md={vanguard:3,arcanist:.5,oracle:1.5},Nd=e=>e>=30?0:Math.round(30+20*e**1.6);function Pd(e,t){let n=(8+6*e.level)*(e.aggro>0?1.15:1)*(e.expMul??1),r=t-e.level,i=r>2?Math.max(.1,1-.2*(r-2)):r<0?Math.min(1.5,1-.1*r):1;return Math.max(1,Math.round(n*i))}function Fd(e,t){let n=Du(e.occ,t),r=md(e.equip),i=t=>e[t]+(n[t]??0)+(r[t]??0),a=kd(e),o=Math.round((60+i(`str`)*6+(e.level-1)*8+r.hp)*(1+(n.hpPct??0)/100)),s=tu[e.job3]?.noMp?0:Math.round((Ad[e.occ]+i(`int`)*6+(e.level-1)*4+r.mp)*(1+(n.resPct??0)/100)*jd),c=Math.round(Object.entries(a).reduce((e,[t,n])=>e+i(t)*n,0)),l=.55*c+3,u=vu(t,`bond_of_the_blade`),d=U[e.equip?.get?.(`main`)],f=r.atk+(u&&d&&ed(d)?yu(gu(e.occ,`bond_of_the_blade`).atk,u):0);return{hpMax:o,resMax:s,dmgMin:Math.round(l*1.2+2+f),dmgMax:Math.round(l*1.8+2+f),swingMul:Math.max(.7,1-.02*(e.level-1))*(Ql[e.job]?.swing??1),crit:Math.min(.3,.02+.01*e.level)+r.crit/100,speed:r.speed,def:Math.round(Md[e.occ]*e.level)+(n.def??0)+r.def,regen:{fight:(n.hpRegen??0)/100,calm:1+(n.regenPct??0)/100,res:1+(n.resRegenPct??0)/100},main:Object.keys(a),mainValue:c,stats:Object.fromEntries(Cd.map(e=>[e,i(e)]))}}function Id(e,t=Math.random){let n=t()<e.crit,r=Math.round(e.dmgMin+t()*(e.dmgMax-e.dmgMin));return{dmg:n?Math.round(r*1.5):r,crit:n}}var Ld=(e,t)=>Math.max(1,Math.round(e*100/(100+t))),Rd=e=>({...Gl[e].base}),zd=4.2,Bd=Math.SQRT2,Vd=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Bd],[1,-1,Bd],[-1,1,Bd],[-1,-1,Bd]];function Hd(e,t,n=4){if(!Ku(e,t))return[e,t];for(let r=1;r<=n;r++)for(let n=-r;n<=r;n++)for(let i=-r;i<=r;i++)if(Math.max(Math.abs(n),Math.abs(i))===r&&!Ku(e+n,t+i))return[e+n,t+i];return null}function Ud(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.max(1,Math.ceil(i/.2));for(let i=1;i<=a;i++){let o=i/a;if(!qu(e+(n-e)*o,t+(r-t)*o,.3))return!1}return!0}function Wd(e,t,n,r,i=6e3){let a=Hd(Math.floor(n),Math.floor(r));if(!a)return[];let o=qu(n,r,.3)&&!Ku(Math.floor(n),Math.floor(r))?{x:n,z:r}:{x:a[0]+.5,z:a[1]+.5};if(Ud(e,t,o.x,o.z))return[o];let s=[Math.floor(e),Math.floor(t)],c=(e,t)=>t*136+e,l=c(a[0],a[1]),u=new Map([[c(...s),0]]),d=new Map,f=[[0,s[0],s[1]]],p=(e,t)=>Math.hypot(e-a[0],t-a[1]),m=e=>{f.push(e);for(let e=f.length-1;e>0;){let t=e-1>>1;if(f[t][0]<=f[e][0])break;[f[t],f[e]]=[f[e],f[t]],e=t}},h=()=>{let e=f[0],t=f.pop();if(f.length){f[0]=t;for(let e=0;;){let t=2*e+1,n=t+1,r=e;if(t<f.length&&f[t][0]<f[r][0]&&(r=t),n<f.length&&f[n][0]<f[r][0]&&(r=n),r===e)break;[f[r],f[e]]=[f[e],f[r]],e=r}}return e},g=!1,_=0;for(;f.length&&_++<i;){let[,e,t]=h(),n=c(e,t);if(n===l){g=!0;break}let r=u.get(n);for(let[i,a,o]of Vd){let s=e+i,l=t+a;if(s<0||l<0||s>=136||l>=132||Ku(s,l)||i&&a&&(Ku(e+i,t)||Ku(e,t+a)))continue;let f=c(s,l),h=r+o;h<(u.get(f)??1/0)&&(u.set(f,h),d.set(f,n),m([h+p(s,l),s,l]))}}if(!g)return[];let v=[];for(let e=l;e!==void 0;e=d.get(e))v.push({x:e%136+.5,z:Math.floor(e/136)+.5});v.reverse(),v[v.length-1]=o;let y=[],b={x:e,z:t},x=0;for(;x<v.length;){let e=v.length-1;for(;e>x&&!Ud(b.x,b.z,v[e].x,v[e].z);)e--;y.push(v[e]),b=v[e],x=e+1}return y}function Gd(e,t){let n=(e.speed??4.2)*t;if(e.steer){let t=e.steer.x*n,r=e.steer.z*n,i=!1;qu(e.x+t,e.z,.3)&&(e.x+=t,i=!0),qu(e.x,e.z+r,.3)&&(e.z+=r,i=!0),e.dir=Math.atan2(e.steer.x,e.steer.z),e.moving=i;return}let r=n;for(;r>0&&e.path.length;){let t=e.path[0],n=t.x-e.x,i=t.z-e.z,a=Math.hypot(n,i);a>1e-4&&(e.dir=Math.atan2(n,i)),a<=r?(e.x=t.x,e.z=t.z,e.path.shift(),r-=a):(e.x+=n/a*r,e.z+=i/a*r,r=0)}e.moving=e.path.length>0}function Kd(e,t){return{x:Math.max(0,Math.min(136,e)),z:Math.max(0,Math.min(132,t))}}var qd={mossling:{name:`Mossling`,level:1,hp:34,dmg:[2,4],speed:2.2,radius:.35,aggro:0,attackRange:1,attackEvery:1.6,wander:3},cragboar:{name:`Cragboar`,level:3,hp:70,dmg:[5,8],speed:3.4,radius:.45,aggro:3.5,attackRange:1.2,attackEvery:1.4,wander:4},mosswarden:{name:`Mosswarden`,level:8,hp:900,dmg:[12,18],speed:2.6,radius:.8,aggro:5,attackRange:1.8,attackEvery:2.2,wander:2,boss:!0,respawn:45,expMul:6},ashhound:{name:`Ashhound`,level:16,hp:900,dmg:[26,38],speed:4,radius:.45,aggro:4.5,attackRange:1.3,attackEvery:1.3,wander:4},shard_stalker:{name:`Shard Stalker`,level:22,hp:2600,dmg:[48,64],speed:4.2,radius:.5,aggro:5,attackRange:1.3,attackEvery:1.3,wander:4,shard:.004},prism_golem:{name:`Prism Golem`,level:24,hp:4500,dmg:[65,85],speed:2.4,radius:.85,aggro:4,attackRange:1.8,attackEvery:2.2,wander:2,expMul:2.5,shard:.01},crownless_king:{name:`The Crownless King`,level:35,hp:4e4,dmg:[80,120],speed:3,radius:1.3,aggro:7,attackRange:2.6,attackEvery:2.6,wander:1,boss:!0,respawn:180,expMul:25,splash:3,loot:{rolls:3,jobWeapon:1,special:`kings_crown`}}},Jd={wild_horse:{name:`Wild Horse`,speed:3.2,radius:.5,wander:6,respawn:40,critter:!0},takoyaki:{name:`Takoyaki`,speed:3.2,radius:.5,wander:1.5,respawn:300,critter:!0,secret:!0}},Yd={id:`takoyaki`,kind:`takoyaki`,x:77.5,z:59.5},Xd={bonewalker:{name:`Bonewalker`,speed:3.8,radius:.35,attackRange:1.3,attackEvery:1.3,summon:!0},bone_dragon:{name:`Bone Dragon`,speed:4.4,radius:1.2,attackRange:3.4,attackEvery:1.8,summon:!0,hpMul:3,breath:{reach:4.5,arc:90}},knight_dragon:{name:`Dragon`,speed:4.6,radius:1.1,attackRange:1.6,attackEvery:1.3,summon:!0}};function Zd(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Qd(e=21){let t=Zd(e),n=[];for(let[e,r,i,a]of[[`mossling`,13,12,18],[`cragboar`,7,18,25]]){let o=0;for(let s=0;s<800&&o<r;s++){let r=3+t()*50,s=3+t()*50,c=Math.abs(r-Ou.x),l=Math.abs(s-Ou.z),u=Math.max(c,l);u<i||u>a||c<3||l<3||qu(r,s,.5)&&(n.some(e=>Math.hypot(e.x-r,e.z-s)<4)||(n.push({id:`${e}${o}`,kind:e,x:r,z:s}),o++))}}n.push({id:`mosswarden0`,kind:`mosswarden`,x:6.5,z:50.5});let r=ku.ashen;for(let e=0,i=0;e<2e3&&i<24;e++){let e=r.x0+4+t()*(r.w-8),a=r.z0+4+t()*(r.h-8);Math.hypot(e-Fu.x,a-Fu.z)<Fu.r+4||Math.hypot(e-Pu.x,a-Pu.z)<Pu.r+6||Math.abs(e-r.x0-(a-r.z0))<3||!qu(e,a,.5)||n.some(t=>Math.hypot(t.x-e,t.z-a)<3.5)||n.push({id:`ashhound${i++}`,kind:`ashhound`,x:e,z:a})}n.push({id:`king0`,kind:`crownless_king`,x:Pu.x,z:Pu.z});let i=ku.shardfall,a=Mu[3];for(let[e,r,o]of[[`shard_stalker`,22,3.5],[`prism_golem`,8,5]])for(let s=0,c=0;s<3e3&&c<r;s++){let r=i.x0+4+t()*(i.w-8),s=i.z0+4+t()*(i.h-8);Math.hypot(r-a.x,s-a.z)<(e===`prism_golem`?22:9)||!qu(r,s,qd[e].radius+.2)||n.some(e=>Math.hypot(e.x-r,e.z-s)<o)||n.push({id:`${e}${c++}`,kind:e,x:r,z:s})}return n}function $d(e=5){let t=Zd(e),n=[];for(let e=0;e<400&&n.length<9;e++){let e=t()*Math.PI*2,r=t()*(Fu.r-2),i=Fu.x+Math.cos(e)*r,a=Fu.z+Math.sin(e)*r;!qu(i,a,.6)||Math.hypot(i-Mu[1].x,a-Mu[1].z)<4||n.some(e=>Math.hypot(e.x-i,e.z-a)<2.5)||n.push({id:`horse${n.length}`,kind:`wild_horse`,x:i,z:a})}return n}var ef={size:[.42,.6,.74,.87,1],hpMul:[1.5,2.5,3.5,4.5,6],speed:[1,1.5,1.7,1.9,2.2],atk:[0,15,20,25,35],names:[`Hatchling`,`Young Dragon`,`Dragon`,`Great Dragon`,`Elder Dragon`],rideFrom:2,fliesAt:5},tf=e=>Number(/^dragon(\d)$/.exec(e??``)?.[1]??0);function nf(e){let t=Xd.knight_dragon,n=ef.size[e-1];return{...t,radius:t.radius*n,attackRange:t.attackRange*(.5+n/2),speed:t.speed*(.8+.2*n),hpMul:ef.hpMul[e-1]}}var rf=e=>yu(gu(`vanguard`,`summon_dragon`).use.pct,e),af={dragonOf(e){for(let t of this.pets.values())if(t.owner===e&&t.kind===`knightDragon`&&t.deadAt===null)return t;return null},summonDragon(e,t=1){let n=this.state.players.get(e),r=this.movers.get(e),i=n.skills.get(`summon_dragon`)??1,a=this.summon(e,{type:`knight_dragon`,def:nf(i),life:1/0,pct:rf(i),kind:`knightDragon`,angle:r.dir+Math.PI/2});return a?(a.s.coat=String(i),a.s.hp=Math.max(1,Math.round(a.s.hpMax*t)),a):null},unsummonDragon(e){let t=this.state.players.get(e),n=this.movers.get(e);tf(t.mount)&&this.offDragon(t,n);let r=this.dragonOf(e);r&&this.vanishPet(r)},rideDragon(e){let t=this.state.players.get(e),n=this.movers.get(e),r=this.dragonOf(e);r&&(n.dragonHp=r.s.hp/r.s.hpMax,this.vanishPet(r),t.mount=`dragon${t.skills.get(`summon_dragon`)}`,this.saddleDragon(t,n))},landDragon(e){let t=this.state.players.get(e),n=this.movers.get(e);this.offDragon(t,n),this.summonDragon(e,n.dragonHp??1)||this.send(e,`notice`,{text:`No room here for your dragon: it flew off. Summon it again somewhere clearer.`}),n.dragonHp=null},saddleDragon(e,t){let n=tf(e.mount);Object.assign(t,{riding:!0,rideSpeed:zd*ef.speed[n-1],rideAtk:ef.atk[n-1]}),t.dash||this.setSpeed(t)},offDragon(e,t){e.mount=``,t.riding=!1,t.dash||this.setSpeed(t)},growDragon(e){let t=this.state.players.get(e),n=this.movers.get(e),r=t.skills.get(`summon_dragon`);tf(t.mount)&&(t.mount=`dragon${r}`,this.saddleDragon(t,n));let i=this.dragonOf(e);if(!i)return;let a=i.s.hp/i.s.hpMax,o=nf(r);i.s.hpMax=Math.round(i.s.hpMax*o.hpMul/i.def.hpMul),i.s.hp=Math.max(1,Math.round(i.s.hpMax*a)),Object.assign(i,{def:o,pct:rf(r),speed:o.speed}),i.s.coat=String(r)},dragonFell(e){let t=this.movers.get(e);if(!t)return;let n=gu(`vanguard`,`summon_dragon`).use.rest;t.cds.summon_dragon=Math.max(t.cds.summon_dragon??0,this.time+n),this.send(e,`cooldown`,{skill:`summon_dragon`,cd:n,gcd:0}),this.send(e,`notice`,{text:`Your dragon fell. It can be summoned again in ${n} s.`})}},of=new Set([`firebolt`,`arc_chain`,`smite`,`charge`,`wyrm_lance`,`flying_edge`,`qi_sword_strike`]);function sf(e,t,n,r={}){let i=e.state.players.get(t),a=e.movers.get(t);if(!i||!a)return;let o=r=>e.send(t,`castFail`,{skill:n,why:r}),s=gu(i.occ,n);if(!s?.use||!_f[n])return o(`Unknown skill`);if(du(i,n))return o(`A ${tu[i.job3].name} has given up ${s.name}`);let c=i.skills.get(n)??0;if(!c)return o(s.byUse?`${s.name} comes at Lv ${s.lv}`:`Learn ${s.name} from the Wise Man first`);if(a.channel)return o(`Channeling...`);if(e.time<a.gcd)return;if(e.time<(a.cds[n]??0))return o(`${s.name} isn't ready`);let l=e=>yu(e,c),u=bu(s,c),d=fu(s,i);if(i.res<u)return o(`Not enough ${Gl[i.occ].resource}`);if(pu(s,i))return o(`Too little HP: ${s.name} takes ${s.use.hp}% of your max HP, and never below 10%`);of.has(n)&&typeof r.target!=`string`&&a.combat&&a.chosen&&(r={...r,target:a.combat});let f=of.has(n)&&typeof r.target==`string`?e.mobs.get(r.target):null;if(f&&f.deadAt===null&&lf(f,a)>l(s.use.range)+f.def.radius){e.walkToCast(t,n,r,f);return}let p=_f[n]({room:e,id:t,p:i,m:a,u:s.use,at:l,msg:r});if(typeof p==`string`)return o(p);a.pendingCast=null,p.free||(i.res-=u),d&&(i.hp-=d,e.broadcast(`hit`,{id:t,by:t,dmg:d}));let m=l(s.use.cd);a.cds[n]=e.time+m,a.gcd=e.time+1,a.lastAct=Date.now(),e.send(t,`cooldown`,{skill:n,cd:m,gcd:1}),e.broadcast(`act`,{id:t,kind:`attack`,cast:!0}),e.broadcast(`cast`,{id:t,skill:n,...p})}var cf=e=>e&&e.deadAt===null,lf=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function uf(e,t,n,r){let i=e=>cf(e)&&lf(e,t)<=n+e.def.radius,a=typeof r==`string`?e.mobs.get(r):null;if(i(a))return a;let o=Math.sin(t.dir),s=Math.cos(t.dir),c=null,l=1/0;for(let n of e.mobs.values()){if(!i(n))continue;let e=lf(n,t),r=e+((e<.01?1:((n.x-t.x)*o+(n.z-t.z)*s)/e)<0?3:0);r<l&&(c=n,l=r)}return c}function df(e,t,n,r,i,a){let o=t=>{let i=e.state.players.get(t),o=e.movers.get(t);return i&&o&&lf(o,n)<=r&&(!a||i.hp<i.hpMax)},s=typeof i==`string`&&e.state.players.get(i),c=s&&e.movers.get(i);if(c)return lf(c,n)>r?{why:`${s.name} is too far away`}:a&&s.hp>=s.hpMax?{why:i===t?`You are at full health`:`${s.name} is at full health`}:i;let l=null,u=1/0;for(let n of e.movers.keys()){if(!o(n))continue;let r=e.state.players.get(n),i=r.hp/r.hpMax-(n===t?.001:0);i<u&&(l=n,u=i)}return l}var ff=(e,t)=>{e.dir=Math.atan2(t.x-e.x,t.z-e.z)},W=e=>({x:+e.x.toFixed(2),z:+e.z.toFixed(2)});function pf(e,t,n,r,i,a=0){let o=e.rollFor(n,i);e.hurtMonster(r,{...o,dmg:o.dmg+Math.round(a)},t)}var mf=(e,t)=>e.skills.get(t)??0;function hf(e,t,n,r){let i=e.movers.get(t),a=e.state.players.get(t);i.shield=Math.max(i.shield,n),i.shieldUntil=Math.max(i.shieldUntil,e.time+r),a.shield=i.shield}function gf(e,t,n,r){let i=typeof r.target==`string`?e.mobs.get(r.target):null;if(cf(i)&&lf(i,t)<=n+i.def.radius)return{x:i.x,z:i.z};if(!Number.isFinite(r.x)||!Number.isFinite(r.z))return{x:t.x,z:t.z};let a=Math.hypot(r.x-t.x,r.z-t.z),o=a>n?n/a:1;return{x:t.x+(r.x-t.x)*o,z:t.z+(r.z-t.z)*o}}var _f={cleave({room:e,id:t,p:n,m:r,u:i,at:a}){let o=Kl[n.occ].range+i.reach,s=Math.cos(i.arc/2*Math.PI/180),c=uf(e,r,o);if(!c)return`No enemy in reach`;ff(r,c);let l=Math.sin(r.dir),u=Math.cos(r.dir),d=[];for(let n of e.mobs.values()){if(!cf(n))continue;let c=lf(n,r);c>o+n.def.radius||c>.3&&((n.x-r.x)*l+(n.z-r.z)*u)/c<s-1e-9||(d.push(n.id),pf(e,t,r,n,a(i.pct)))}return{...W(r),dir:+r.dir.toFixed(3),r:o,arc:i.arc,hits:d}},battle_cry({room:e,id:t,m:n,u:r,at:i}){let a=[];for(let i of e.mobs.values())!cf(i)||lf(i,n)>r.radius||(i.target=t,i.homing=!1,i.tauntUntil=e.time+r.taunt,a.push(i.id));let o=[];for(let[t,a]of e.movers)lf(a,n)>r.allyRadius||(a.cry={until:e.time+r.buffS,pct:i(r.buff)},o.push(t));return{...W(n),r:r.radius,hits:a,buffed:o}},charge({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=uf(e,r,a(i.range),o.target);if(!s)return`No enemy in charge range`;let c=mf(n,`skewer_charge`);if(c){let a=yu(gu(n.occ,`skewer_charge`).hit,c),o=Math.max(.01,lf(s,r)),l=(s.x-r.x)/o,u=(s.z-r.z)/o;for(let n of e.mobs.values()){if(n===s||!cf(n))continue;let c=(n.x-r.x)*l+(n.z-r.z)*u,d=Math.abs((n.x-r.x)*u-(n.z-r.z)*l);c>0&&c<o&&d<=.9+n.def.radius&&e.later(c/i.speed,()=>{cf(n)&&pf(e,t,r,n,a)})}}return e.engage(t,s.id),r.path=Wd(r.x,r.z,s.x,s.z),r.speed=i.speed,r.dash={mob:s.id,until:e.time+a(i.range)/i.speed+.6,root:i.root},{target:s.id,...W(r)}},firebolt({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=uf(e,r,i.range,o.target);if(!s)return`No enemy in range`;ff(r,s);let c=lf(s,r)/i.speed,l=a(i.pct);return e.later(c,()=>{cf(s)&&pf(e,t,r,s,l)}),{target:s.id,...W(r),travel:+c.toFixed(2)}},frost_nova({room:e,id:t,p:n,m:r,u:i,at:a}){let o=[];for(let n of e.mobs.values())!cf(n)||lf(n,r)>i.radius+n.def.radius||(n.stunUntil=Math.max(n.stunUntil,e.time+a(i.freeze)),n.stunKind=`freeze`,n.target||=t,n.tagged.add(t),o.push(n.id));return{...W(r),r:i.radius,hits:o}},arc_chain({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=uf(e,r,i.range,o.target);if(!s)return`No enemy in range`;ff(r,s);let c=[s],l=[W(r),W(s)];for(;c.length<a(i.jumps);){let t=c[c.length-1],n=null,r=i.hop;for(let i of e.mobs.values()){if(!cf(i)||c.includes(i))continue;let e=lf(i,t);e<r&&(n=i,r=e)}if(!n)break;c.push(n),l.push(W(n))}return c.forEach((n,a)=>pf(e,t,r,n,100*(1-i.falloff)**a)),{points:l,hits:c.map(e=>e.id)}},blink({room:e,id:t,m:n,u:r,msg:i}){let a=Math.sin(n.dir),o=Math.cos(n.dir);if(Number.isFinite(i.x)&&Number.isFinite(i.z)){let e=Math.hypot(i.x-n.x,i.z-n.z);e>.3&&(a=(i.x-n.x)/e,o=(i.z-n.z)/e)}let s=W(n);for(let i=r.range;i>=1;i-=.25){let r=n.x+a*i,c=n.z+o*i;if(qu(r,c,.3))return e.disengage(t),Object.assign(n,{x:r,z:c,path:[],dir:Math.atan2(a,o)}),{from:s,to:W(n)}}return`Nowhere to blink to`},mana_shield({room:e,m:t,u:n,at:r}){return t.manaShield={until:e.time+n.dur,pct:r(n.pct)},{dur:n.dur}},mend({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=df(e,t,r,i.range,o.ally,!0);if(s?.why)return s.why;if(!s)return`Everyone nearby is at full health`;let c=a(i.heal)+i.int*r.derived.stats.int;e.healPlayer(s,c,t);let l=mf(n,`radiant_mend`),u=[];if(l){let r=gu(n.occ,`radiant_mend`),i=e.movers.get(s);for(let[n,a]of e.movers){let o=e.state.players.get(n);n===s||!o||o.hp>=o.hpMax||lf(a,i)>r.radius||(e.healPlayer(n,c*yu(r.pct,l)/100,t),u.push(n))}}return{target:s,also:u}},smite({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=uf(e,n,r.range,a.target);return o?(ff(n,o),pf(e,t,n,o,i(r.pct)*(o.def.undead?1.5:1)),{target:o.id,...W(o)}):`No enemy in range`},ward({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=df(e,t,n,r.range,a.ally,!1)??t;return o?.why?o.why:(hf(e,o,Math.round(i(r.def)+r.int*n.derived.stats.int),r.dur),{target:o})},holy_words({room:e,id:t,p:n,m:r,u:i,at:a}){let o=e=>cf(e)&&lf(e,r)<=i.radius+e.def.radius,s=mf(n,`litany_of_dawn`)?gu(n.occ,`litany_of_dawn`):null,c=a(i.pct)*(1+(s?.bonus??0)/100),l=a(i.dur)+(s?.words??0)*i.every,u=r.channel={until:e.time+l,walk:s?.walk??0,pulse:{next:e.time+i.every,every:i.every,fn:()=>{let n=[...e.mobs.values()].filter(o);e.broadcast(`fx`,{kind:`holy_word`,...W(r),r:i.radius,hits:n.map(W),litany:!!s||void 0});for(let i of n)pf(e,t,r,i,c*(i.def.undead?1.5:1))}}};return u.walk?r.speed=zd*u.walk:(r.path=[],r.steer=null),e.later(l+.05,()=>{r.channel===u&&(r.channel=null,e.setSpeed(r))}),{...W(r),r:i.radius,channel:l,walk:u.walk||void 0,litany:!!s||void 0}},dawnlight({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=df(e,t,n,r.range,a.ally,!0);if(o?.why)return o.why;if(!o)return`Everyone nearby is at full health`;let s=[o];for(let t=0;t<i(r.leaps);t++){let t=e.movers.get(s.at(-1)),n=null,i=1;for(let[a,o]of e.movers){let c=e.state.players.get(a);s.includes(a)||!c||c.hp>=c.hpMax||lf(o,t)>r.hop||c.hp/c.hpMax<i&&(i=c.hp/c.hpMax,n=a)}if(!n)break;s.push(n)}let c=i(r.heal)+r.int*n.derived.stats.int,l=0;for(let n of s)l+=e.healPlayer(n,c,t);return e.countUse(t,`dawnlight`,l),{...W(n),chain:s.map(t=>({id:t,...W(e.movers.get(t))}))}},dawn_blessing({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=df(e,t,n,r.range,a.ally,!1)??t;if(o?.why)return o.why;let s=e.movers.get(o),c=[];for(let[t,n]of e.movers)lf(n,s)>r.radius||(e.bless(t,{dmg:i(r.dmg),def:i(r.def),until:e.time+r.dur}),c.push({id:t,...W(n)}));return e.countUse(t,`dawn_blessing`),{target:o,...W(s),r:r.radius,blessed:c}},sunrise({room:e,id:t,m:n,u:r,at:i}){let a=n.channel={until:e.time+r.channel};return n.path=[],n.steer=null,e.later(r.channel,()=>{if(n.channel!==a)return;n.channel=null;let o=[];for(let[a,s]of e.movers){let c=e.state.players.get(a);!c||lf(s,n)>r.radius||(e.healPlayer(a,c.hpMax,t),e.guard(a,{pct:i(r.guard),until:e.time+r.dur}),o.push({id:a,...W(s)}))}e.broadcast(`fx`,{kind:`sunrise`,...W(n),r:r.radius,allies:o})}),e.countUse(t,`sunrise`),{...W(n),r:r.radius,channel:r.channel}},mount:({room:e,id:t,u:n})=>e.toggleMount(t,n.range),summon_dragon({room:e,id:t,p:n,m:r}){let i=e.dragonOf(t);if(i||tf(n.mount)){let n=W(i??r);return e.unsummonDragon(t),{gone:!0,...n,free:!0}}let a=e.summonDragon(t);return a?{spawned:[W(a)],rank:n.skills.get(`summon_dragon`)}:`No room for your dragon here`},dragon_rush({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){if(!tf(n.mount))return`Only on your dragon: summon it, then Mount`;let s=a(i.range),c=gf(e,r,s,o),l=lf(c,r),u=l>.3?(c.x-r.x)/l:Math.sin(r.dir),d=l>.3?(c.z-r.z)/l:Math.cos(r.dir),f={x:r.x,z:r.z};for(let e=.25;e<=s+1e-6;e+=.25){let t=r.x+u*e,n=r.z+d*e;if(!qu(t,n,.3))break;f={x:t,z:n}}let p=lf(f,r);if(p<.5)return`No room to rush that way`;let m=2*p/(2*i.speed),h=W(r),g=[...e.mobs.values()].map(e=>({o:e,along:(e.x-r.x)*u+(e.z-r.z)*d,off:Math.abs((e.x-r.x)*d-(e.z-r.z)*u)})).filter(({o:e,along:t,off:n})=>cf(e)&&t>-e.def.radius&&t<p+e.def.radius&&n<=i.width+e.def.radius);r.dir=Math.atan2(u,d),Object.assign(r,{x:f.x,z:f.z,path:[],steer:null});for(let{o:n,along:o}of g)e.later(m*Math.sqrt(Math.min(1,Math.max(0,o)/p)),()=>{cf(n)&&pf(e,t,r,n,a(i.pct))});return e.countUse(t,`dragon_rush`),{from:h,to:W(f),dir:+r.dir.toFixed(3),travel:+m.toFixed(2),hits:g.map(({o:e})=>e.id)}},fire_breath({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=tf(n.mount)>0,c=s?null:e.dragonOf(t);if(!s&&!c)return`Your dragon has to be out: Summon Dragon first`;let l=s?r:c,u=a(i.range),d=uf(e,l,u,o.target);d?ff(l,d):Number.isFinite(o.x)&&Number.isFinite(o.z)&&Math.hypot(o.x-l.x,o.z-l.z)>.3&&ff(l,o);let f=Math.cos(i.arc*Math.PI/360),p=Math.sin(l.dir),m=Math.cos(l.dir),h=[...e.mobs.values()].filter(e=>{if(!cf(e))return!1;let t=lf(e,l);return t<=u+e.def.radius&&(t<.3||((e.x-l.x)*p+(e.z-l.z)*m)/t>=f)});for(let n of h)e.later(.15+lf(n,l)*.04,()=>{cf(n)&&pf(e,t,r,n,a(i.pct))});return e.countUse(t,`fire_breath`),c&&(c.s.dir=c.dir,c.nextSwing=Math.max(c.nextSwing,e.time+1),e.broadcast(`act`,{id:c.id,kind:`attack`,mob:!0})),{...W(l),dir:+l.dir.toFixed(3),r:u,arc:i.arc,hits:h.map(e=>e.id),pet:c?.id}},wyrm_lance({room:e,id:t,p:n,m:r,u:i,msg:a}){if(!n.mount)return`Only on horseback: get on your horse first`;let o=uf(e,r,i.range,a.target);if(!o)return`No enemy in reach of the lance`;let s=W(r),c=Math.max(.01,lf(o,r)),l=(o.x-r.x)/c,u=(o.z-r.z)/c,d={x:r.x,z:r.z};for(let e=o.def.radius+.7;e<c;e+=.25){let t=o.x-l*e,n=o.z-u*e;if(qu(t,n,.3)){d={x:t,z:n};break}}let f=[...e.mobs.values()].filter(e=>{if(e===o||!cf(e))return!1;let t=(e.x-r.x)*l+(e.z-r.z)*u,n=Math.abs((e.x-r.x)*u-(e.z-r.z)*l);return t>0&&t<c&&n<=.9+e.def.radius}),p=Math.max(.12,lf(d,r)/i.speed);return ff(r,o),Object.assign(r,{x:d.x,z:d.z,path:[],steer:null}),e.later(p,()=>{for(let n of f)cf(n)&&pf(e,t,r,n,i.path);cf(o)&&(o.stunUntil=Math.max(o.stunUntil,e.time+i.stun),o.stunKind=`stun`,pf(e,t,r,o,i.pct))}),{from:s,to:W(d),dir:+r.dir.toFixed(3),target:o.id,travel:+p.toFixed(2),hits:f.map(e=>e.id)}},sacred_chant({room:e,id:t,m:n,u:r}){return[...e.mobs.values()].some(e=>cf(e)&&lf(e,n)<=r.radius+e.def.radius)?(n.channel={until:e.time+r.channel},n.path=[],n.steer=null,e.later(r.channel,()=>{n.channel=null;let i=[...e.mobs.values()].filter(e=>cf(e)&&lf(e,n)<=r.radius+e.def.radius);e.broadcast(`fx`,{kind:`judgement`,...W(n),r:r.radius,hits:i.map(W)});for(let a of i)pf(e,t,n,a,r.pct*(a.def.undead?1.5:1))}),{...W(n),r:r.radius,channel:r.channel}):`No enemy in sight`},rampage({room:e,id:t,m:n,u:r}){let i=[...e.mobs.values()].filter(e=>cf(e)&&lf(e,n)<=r.radius+e.def.radius);if(!i.length)return`No enemy in range`;let a=W(n),o=[],s={x:n.x,z:n.z};for(;i.length&&o.length<r.hits;){i.sort((e,t)=>lf(e,s)-lf(t,s));let e=i.shift(),t=Math.max(.01,lf(e,s)),n=e.def.radius+.6,a=e.x+(s.x-e.x)/t*n,c=e.z+(s.z-e.z)/t*n,l=qu(a,c,.3)?{x:a,z:c}:s;o.push({...W(l),t:+((o.length+1)*r.hop).toFixed(2),target:e.id,at:W(e)}),s=l}let c=o.length*r.hop;return n.channel={until:e.time+c+.15},n.path=[],n.steer=null,o.forEach(i=>e.later(i.t,()=>{let a=e.mobs.get(i.target);Object.assign(n,{x:i.x,z:i.z,path:[]}),cf(a)&&(ff(n,a),pf(e,t,n,a,r.pct))})),e.later(c+.15,()=>{n.channel=null}),{from:a,hops:o,hop:r.hop}},spellstrike({room:e,p:t,m:n,u:r,at:i}){return n.enchant={until:e.time+r.dur,pct:i(r.pct)},t.enchant=1,{dur:r.dur}},flying_edge({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=uf(e,n,r.range,a.target);if(!o)return`No enemy in range`;ff(n,o);let s=lf(o,n)/r.speed,c=i(r.pct);return e.later(s,()=>{cf(o)&&(pf(e,t,n,o,c),cf(o)&&e.time>=o.stunUntil&&(o.stunUntil=e.time+r.stun,o.stunKind=`stun`))}),{target:o.id,...W(n),travel:+s.toFixed(2)}},gale_step({room:e,id:t,m:n,u:r,at:i}){return e.haste(t,{move:i(r.move),swing:i(r.swing),until:e.time+i(r.dur)}),e.countUse(t,`gale_step`),{...W(n),dur:i(r.dur),move:i(r.move)}},qi_sword_strike({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=uf(e,n,r.range,a.target);if(!o)return`No enemy in reach`;ff(n,o);let s=i(r.targets),c=[...e.mobs.values()].filter(e=>cf(e)&&e!==o&&lf(e,o)<=r.spread+e.def.radius).sort((e,t)=>lf(e,o)-lf(t,o)).slice(0,s-1),l=[o,...c],u=s-c.length;return l.forEach((a,o)=>pf(e,t,n,a,i(r.pct)*(o?1:u))),e.countUse(t,`qi_sword_strike`),{...W(n),points:l.map(W),hits:l.map(e=>e.id),combined:u}},sword_dance({room:e,id:t,m:n,u:r}){let i=()=>[...e.mobs.values()].filter(e=>cf(e)&&lf(e,n)<=r.radius+e.def.radius);if(!i().length)return`No enemy in sight`;for(let a=0;a<r.waves;a++)e.later(r.rise+a*r.every,()=>{let o=i();e.broadcast(`fx`,{kind:`blades`,id:t,wave:a,...W(n),hits:o.map(W)}),e.later(.22,()=>{for(let i of o)cf(i)&&pf(e,t,n,i,r.pct)})});return{...W(n),r:r.radius,dur:+(r.rise+r.waves*r.every+.3).toFixed(2),waves:r.waves}},meteor_storm({room:e,id:t,m:n,u:r,msg:i}){let a=gf(e,n,r.range,i),o=[];for(let e=0;e<r.count;e++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*(r.radius-.5);o.push({x:+(a.x+Math.cos(t)*n).toFixed(2),z:+(a.z+Math.sin(t)*n).toFixed(2),t:+(r.lead+e*r.dur/r.count).toFixed(2)})}o.push({...W(a),t:+(r.lead+r.dur+.35).toFixed(2),big:!0});for(let i of o)e.later(i.t,()=>{let a=i.big?r.radius:r.r;for(let o of e.mobs.values())cf(o)&&lf(o,i)<=a+o.def.radius&&pf(e,t,n,o,i.big?r.finale:r.pct)});return{...W(a),r:r.radius,impact:r.r,falls:o}},raise_bonewalker({room:e,id:t,m:n,u:r,at:i}){let a=[];for(let o=0;o<i(r.count);o++){let s=[...e.pets.values()].filter(e=>e.owner===t&&e.kind===`raise`&&e.deadAt===null);s.length>=r.max&&e.crumble(s[0]);let c=e.summon(t,{life:r.life,pct:i(r.pct),kind:`raise`,angle:n.dir+Math.PI/2+o*2.1});c&&a.push(W(c))}return a.length?{spawned:a}:`No room to raise a bonewalker here`},bone_armor({room:e,id:t,m:n,u:r,at:i}){return hf(e,t,Math.round(i(r.def)+r.int*n.derived.stats.int),r.dur),{dur:r.dur}},bone_dragon({room:e,id:t,m:n,u:r}){let i=e.summon(t,{type:`bone_dragon`,life:r.life,pct:r.pct,kind:`dragon`,angle:n.dir+Math.PI/2});return i?{spawned:[W(i)]}:`No room to raise the dragon here`},snare_rune({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=gf(e,n,r.range,a),s=e.zones.filter(e=>e.kind===`snare`&&e.owner===t);return s.length>=r.max&&e.endZone(s[0]),{zid:e.addZone({kind:`snare`,...o,r:r.r,until:e.time+r.life,root:i(r.root),owner:t}),...W(o),r:r.r,life:r.life}},glyph_field({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=gf(e,n,r.range,a);return{zid:e.addZone({kind:`glyph`,...o,r:r.radius,until:e.time+r.dur,slow:i(r.slow),owner:t}),...W(o),r:r.radius,dur:r.dur}},script_of_binding({room:e,id:t,m:n,u:r,msg:i}){let a=gf(e,n,r.range,i),o=[];for(let n of e.mobs.values())!cf(n)||lf(n,a)>r.radius+n.def.radius||(n.rootUntil=Math.max(n.rootUntil,e.time+r.root),n.tagged.add(t),n.target||=t,o.push(n.id));return{...W(a),r:r.radius,hits:o}},cataclysm({room:e,id:t,p:n,m:r,u:i,msg:a}){let o=gf(e,r,i.range,a);return r.channel={until:e.time+i.channel},r.path=[],r.steer=null,e.later(i.channel,()=>{r.channel=null,e.broadcast(`fx`,{kind:`meteor`,...W(o),r:i.radius});for(let n of e.mobs.values())cf(n)&&lf(n,o)<=i.radius+n.def.radius&&pf(e,t,r,n,i.pct)}),{...W(o),r:i.radius,channel:i.channel}}},vf=1.2,yf=2.2,bf=14,xf=9,Sf=e=>e&&e.deadAt===null,Cf=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function wf(e,t,n,r){for(let i=0;i<8;i++){let a=t+i*Math.PI/4,o=e.x+Math.sin(a)*n,s=e.z+Math.cos(a)*n;if(qu(o,s,r))return{x:o,z:s}}return null}var Tf={foe(e){let t=this.pets.get(e);return this.movers.get(e)??(t&&t.deadAt===null?t:null)},summon(e,{life:t,pct:n,kind:r,angle:i,type:a=`bonewalker`,def:o=Xd[a]}){let s=this.state.players.get(e),c=this.movers.get(e);if(!s||!c)return null;let l=wf(c,i??c.dir+Math.PI/2,.75+o.radius,o.radius);if(!l)return null;let u=`pet${++this.petSeq}`,d=Math.round((40+c.derived.stats.int*3+s.level*4)*(o.hpMul??1)),f=this.newMonster();Object.assign(f,{kind:a,level:s.level,x:l.x,z:l.z,dir:c.dir,moving:!1,hp:d,hpMax:d,status:``,owner:e}),this.state.monsters.set(u,f);let p={id:u,s:f,def:o,owner:e,kind:r,pct:n,until:this.time+t,x:l.x,z:l.z,dir:c.dir,moving:!1,path:[],steer:null,speed:o.speed,target:null,nextSwing:this.time+.6,repath:0,deadAt:null};return this.pets.set(u,p),p},tickPet(e,t){let{s:n,def:r}=e;if(e.deadAt!==null){this.time-e.deadAt>vf&&(this.state.monsters.delete(e.id),this.pets.delete(e.id));return}let i=this.movers.get(e.owner);if(!i||this.time>e.until){this.crumble(e);return}let a=e.target&&this.mobs.get(e.target);if((!Sf(a)||a.homing||Cf(a,i)>xf)&&(a=null),!a){let t=i.combat&&this.mobs.get(i.combat);a=Sf(t)&&!t.homing?t:this.nearestMob(e.x,e.z,6,t=>!t.homing&&(t.target===e.owner||this.pets.get(t.target)?.owner===e.owner))}if(e.target=a?.id??null,a)e.speed=r.speed,Cf(a,e)<=r.attackRange+a.def.radius?(e.path=[],e.dir=Math.atan2(a.x-e.x,a.z-e.z),this.time>=e.nextSwing&&(e.nextSwing=this.time+r.attackEvery,this.broadcast(`act`,{id:e.id,kind:`attack`,mob:!0}),r.breath?this.breathe(e,i):this.hurtMonster(a,this.rollFor(i,e.pct),e.owner,{from:e,source:e.id}))):this.time>=e.repath&&(e.repath=this.time+.35,e.path=Wd(e.x,e.z,a.x,a.z));else{let t=Cf(e,i);if(t>bf){let t=wf(i,i.dir+Math.PI,.75+r.radius,r.radius);t&&Object.assign(e,{...t,path:[]})}else t>yf&&this.time>=e.repath?(e.repath=this.time+.5,e.speed=t>4?r.speed*1.4:r.speed,e.path=Wd(e.x,e.z,i.x-Math.sin(i.dir),i.z-Math.cos(i.dir))):t<1.2&&(e.path=[])}Gd(e,t),this.spreadPet(e,i,t),n.x=e.x,n.z=e.z,n.dir=e.dir,n.moving=e.moving},breathe(e,t){let{reach:n,arc:r}=e.def.breath,i=Math.cos(r*Math.PI/360),a=Math.sin(e.dir),o=Math.cos(e.dir);for(let r of[...this.mobs.values()]){if(!Sf(r)||r.homing)continue;let s=Cf(r,e);s>n+r.def.radius||s>.3&&((r.x-e.x)*a+(r.z-e.z)*o)/s<i||this.hurtMonster(r,this.rollFor(t,e.pct),e.owner,{from:e,source:e.id})}this.broadcast(`fx`,{kind:`breath`,x:+e.x.toFixed(2),z:+e.z.toFixed(2),dir:+e.dir.toFixed(3),r:n,arc:r})},spreadPet(e,t,n){let r=[t,...[...this.pets.values()].filter(t=>t!==e&&t.deadAt===null)];for(let t of r){let r=e.x-t.x,i=e.z-t.z,a=Math.hypot(r,i),o=e.def.radius*2+.15;if(a>=o)continue;let s=Math.min(o-a,2.5*n)/Math.max(a,.001),c=a<.001?2.5*n:r*s,l=a<.001?0:i*s;qu(e.x+c,e.z+l,.3)&&(e.x+=c,e.z+=l)}},hurtPet(e,t,n){let r=Ld(t,10+e.s.level*2);e.s.hp=Math.max(0,e.s.hp-r),this.broadcast(`hit`,{id:e.id,by:n.id,dmg:r,mob:!0}),e.s.hp===0&&this.crumble(e)},crumble(e,t=!1){e.deadAt===null&&(Object.assign(e,{deadAt:this.time,path:[],moving:!1,target:null}),e.s.hp=0,e.s.moving=!1,this.dropFoes(e),e.kind===`knightDragon`&&!t&&this.dragonFell(e.owner))},vanishPet(e){this.state.monsters.delete(e.id),this.pets.delete(e.id),this.dropFoes(e)},dropFoes(e){let t=this.movers.get(e.owner);for(let n of this.mobs.values())n.target===e.id&&(t&&!this.inTown(t)?n.target=e.owner:this.evade(n))},dismissPets(e){for(let t of this.pets.values())t.owner===e&&this.crumble(t,!0)}},Ef={brown:{name:`Brown`,speed:1.25,atk:10},black:{name:`Black`,speed:1.5,atk:15},white:{name:`White`,speed:1.75,atk:20},takoyaki:{name:`Takoyaki`,speed:2,atk:30,unicorn:!0}},Df=e=>Ef[e]?e:e===!0?`brown`:``,Of=e=>tf(e)?ef.speed[tf(e)-1]:Ef[e]?.speed??1,kf=Object.keys(Ef).filter(e=>!Ef[e].unicorn),Af=()=>kf[Math.floor(Math.random()*kf.length)],jf={spawnCritter(e){let t=Jd[e.kind],n=Math.random()*Math.PI*2,r=this.newMonster();Object.assign(r,{kind:e.kind,level:1,x:e.x,z:e.z,dir:n,moving:!1,hp:1,hpMax:1,status:``,owner:``,coat:e.kind===`takoyaki`?`takoyaki`:Af()}),this.state.monsters.set(e.id,r),this.critters.set(e.id,{id:e.id,spawn:e,def:t,s:r,x:e.x,z:e.z,dir:n,moving:!1,path:[],steer:null,speed:t.speed*.5,nextThink:this.time+Math.random()*4,takenAt:null})},tickCritter(e,t){if(e.takenAt!==null)this.time-e.takenAt>e.def.respawn&&(this.critters.delete(e.id),this.spawnCritter(e.spawn));else{if(this.time>=e.nextThink){e.nextThink=this.time+3+Math.random()*5;let t=Math.random()*Math.PI*2,n=Math.random()*e.def.wander;e.speed=e.def.speed*(Math.random()<.25?1.4:.5),Math.random()<.65&&(e.path=Wd(e.x,e.z,e.spawn.x+Math.cos(t)*n,e.spawn.z+Math.sin(t)*n).slice(0,4))}Gd(e,t),e.s.x=e.x,e.s.z=e.z,e.s.dir=e.dir,e.s.moving=e.moving}},toggleMount(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(tf(n.mount))return this.landDragon(e),{mount:``};if(n.mount)return this.dismount(e),{mount:``};let i=this.dragonOf(e)&&(n.skills.get(`summon_dragon`)??0)<ef.rideFrom;if(this.dragonOf(e)&&!i)return this.rideDragon(e),{mount:n.mount};let a=null,o=t;for(let e of this.critters.values()){let t=Math.hypot(e.x-r.x,e.z-r.z);e.takenAt===null&&t<o&&(a=e,o=t)}if(a){let t=Df(a.s.coat)||`brown`;a.takenAt=this.time,this.state.monsters.delete(a.id);let r=Ef[t].unicorn?`Takoyaki the unicorn`:`a ${Ef[t].name.toLowerCase()} horse`;this.send(e,`notice`,{text:`${n.horse?`You let your old mount go and tamed`:`You tamed`} ${r} (${Ef[t].speed}x speed, +${Ef[t].atk}% damage)! Use Mount / Dismount to get on and off.`}),n.horse=t}return n.horse?(this.ride(e),{mount:n.horse}):i?`Your hatchling is too small to ride yet (Summon Dragon rank ${ef.rideFrom})`:`Find a wild horse first: they graze in the meadow of the Ashen Reach`},ride(e){let t=this.state.players.get(e),n=this.movers.get(e);t.mount=t.horse,Object.assign(n,{riding:!0,rideSpeed:zd*Ef[t.horse].speed,rideAtk:Ef[t.horse].atk}),n.dash||this.setSpeed(n)},dismount(e){let t=this.state.players.get(e),n=this.movers.get(e);t?.mount&&(t.mount=``,n.riding=!1,n.dash||this.setSpeed(n))}},Mf={bless(e,t){let n=this.movers.get(e);n&&(n.blessing=t,this.showBlessed(e))},guard(e,t){let n=this.movers.get(e);n&&(n.aegis=t,this.showBlessed(e))},showBlessed(e){let t=this.state.players.get(e),n=this.movers.get(e);t&&n&&(t.blessed=+!!n.blessing|(n.aegis?2:0))},tickBlessings(e,t){let n=!1;t.blessing&&this.time>t.blessing.until&&(t.blessing=null,n=!0),t.aegis&&this.time>t.aegis.until&&(t.aegis=null,n=!0),n&&this.showBlessed(e)},clearBlessings(e){let t=this.movers.get(e);t&&(t.blessing=null,t.aegis=null,this.showBlessed(e))},lastGrace(e){let t=this.state.players.get(e),n=this.movers.get(e);for(let[r,i]of this.movers){let a=this.state.players.get(r),o=a?.skills.get(`last_grace`)??0;if(!o)continue;let s=gu(a.occ,`last_grace`).grace;if(!(Math.hypot(i.x-n.x,i.z-n.z)>s.radius||this.time<(i.graceCd[e]??0)))return i.graceCd[e]=this.time+yu(s.every,o),t.hp=Math.max(1,Math.round(t.hpMax*yu(s.heal,o)/100)),this.broadcast(`fx`,{kind:`last_grace`,id:e,by:r,x:+n.x.toFixed(2),z:+n.z.toFixed(2)}),this.send(e,`notice`,{text:r===e?`Last Grace held you up.`:`${a.name}'s Last Grace held you up.`}),r!==e&&this.send(r,`notice`,{text:`Last Grace held ${t.name} up.`}),this.countUse(r,`last_grace`),!0}return!1}},Nf={suprememage:{name:`SupremeMage`,occ:`arcanist`,job:`warlock`,level:25,title:`Supreme Mage`,subtitle:`Shard of Ruin`,gear:{main:`hexbone_wand`,off:`runed_grimoire`,head:`pointed_hat`,armor:`starweave_robe`,boots:`windstep_shoes`,neck:`moonstone_pendant`}},sirlance:{name:`SirLance`,occ:`vanguard`,job:`knight`,level:23,title:`Knight`,subtitle:`Shard of Wings`,horse:`white`,gear:{main:`wyrmguard_lance`,off:`oaken_kite_shield`,head:`wyrmguard_greathelm`,armor:`wyrmguard_harness`,boots:`wyrmguard_sabatons`}},lancelord:{name:`Lancelord`,occ:`vanguard`,job:`knight`,level:25,title:`Knight`,subtitle:`Shard of Wings`,horse:`takoyaki`,ownLine:!0,gear:{main:`dawnbreaker`,head:`kings_crown`,armor:`ashplate_cuirass`,boots:`ashen_sabatons`,neck:`starfall_amulet`,ring1:`frostmoon_ring`,ring2:`emberheart_ring`},bag:[`wyrmguard_lance`,`emberward_shield`,`wyrmguard_greathelm`,`wyrmguard_harness`,`wyrmguard_sabatons`,`sunsteel_sword`,`ashen_greatblade`,`ashen_heart`]},gravelord:{name:`Gravelord`,occ:`arcanist`,job:`necromancer`,level:23,title:`Necromancer`,subtitle:`Shard of Glyphs`,gear:{main:`ossuary_staff`,head:`gravecaller_hood`,armor:`gravecaller_robes`,boots:`gravewalker_wraps`}},dawnshield:{name:`Dawnshield`,occ:`vanguard`,job:`paladin`,level:23,title:`Paladin`,subtitle:`Shard of Walls`,gear:{main:`oathbound_warhammer`,off:`oaken_kite_shield`,head:`iron_nasal_helm`,armor:`ringmail_coat`,boots:`marching_greaves`,neck:`wardenheart_amulet`}},ironfang:{name:`Ironfang`,occ:`vanguard`,job:`fighter`,level:23,title:`Fighter`,subtitle:`Shard of Wrath`,gear:{main:`twinfang_cleaver`,head:`leather_cap`,armor:`padded_jerkin`,boots:`marching_greaves`,neck:`tusk_necklace`}},dragonknight:{name:`DragonKnight`,occ:`vanguard`,job:`knight`,job3:`dragon_knight`,level:30,title:`Dragon Knight`,subtitle:`Shard of Wings`,horse:`white`,gear:{main:`wyrmguard_lance`,off:`emberward_shield`,head:`wyrmguard_greathelm`,armor:`wyrmguard_harness`,boots:`wyrmguard_sabatons`,neck:`starfall_amulet`,ring1:`frostmoon_ring`,ring2:`emberheart_ring`}},swordsaint:{name:`SwordSaint`,occ:`arcanist`,job:`sword_mage`,job3:`sword_saint`,level:30,title:`Sword Saint`,subtitle:`Shard of Edges`,gear:{main:`dawnbreaker`,armor:`linen_robe`,boots:`windstep_shoes`}},dawnsaint:{name:`DawnSaint`,occ:`oracle`,job:`sage`,job3:`saint_of_dawn`,level:30,title:`Saint of Dawn`,subtitle:`Shard of Dawn`,gear:{main:`lumen_staff`,off:`sunlit_aegis`,head:`halo_circlet`,armor:`chainlinked_habit`,boots:`sunstride_boots`,neck:`moonstone_pendant`}},shardblade:{name:`Shardblade`,occ:`arcanist`,job:`sword_mage`,level:23,title:`Sword Mage`,subtitle:`Shard of Edges`,gear:{main:`spellsteel_saber`,head:`stargazer_cowl`,armor:`starweave_robe`,boots:`windstep_shoes`}},dawnveil:{name:`Dawnveil`,occ:`oracle`,job:`sage`,level:23,title:`Sage`,subtitle:`Shard of Dawn`,gear:{main:`lumen_staff`,off:`sunlit_aegis`,head:`halo_circlet`,armor:`chainlinked_habit`,boots:`pilgrim_boots`,neck:`moonstone_pendant`}}};function Pf(e){return Nf[String(e??``).toLowerCase()]??null}function Ff(e,t){let n=t.job3??``;if(Object.assign(e,Dd(t.occ,t.job,t.level,n),{name:t.name,occ:t.occ,job:t.job,job3:n,level:t.level,exp:0,expNext:0,points:0,title:t.title,subtitle:t.subtitle}),e.skills.clear(),tu[n])for(let t of tu[n].skills)e.skills.set(t.id,t.max),e.use?.set(t.id,t.byUse.at.at(-1));let r=t.ownLine||n;for(let i of _u(t.occ))i.job3||r&&i.job&&i.job!==t.job||tu[n]?.abandons.includes(i.id)||e.skills.set(i.id,i.max);for(let[n,r]of Object.entries(t.gear??{}))e.equip.set(n,r);e.bag.splice(0,e.bag.length);for(let n of t.bag??[])e.bag.push(n);return`${t.name} the ${t.title} descends upon Oathgate! (${Gl[t.occ].name} → ${uu(n||t.job)}, Lv ${t.level})`}var If=140,Lf=new Set([`attack`,`wave`]),Rf=6,zf=.008,Bf=1.2,Vf=10,Hf=Math.cos(Math.PI*.4),Uf=2,Wf=9999999,Gf=14,Kf=5e-4,qf=.5,Jf=4,Yf=2,Xf=600,Zf=15,Qf=4,$f=25,ep=.2,tp=60,np=([e,t])=>e+Math.floor(Math.random()*(t-e+1)),rp=[[`vanguard`,`war_aura`],[`vanguard`,`valor_aura`],[`oracle`,`gentle_hands`],[`oracle`,`grace_aura`]],ip=[`dmg`,`def`,`fight`,`regen`],ap=class{constructor({state:e,newPlayer:t,newMonster:n,send:r,broadcast:i,log:a=()=>{},secrets:o=!0,restores:s=!1}){Object.assign(this,{state:e,newPlayer:t,newMonster:n,send:r,broadcast:i,log:a,secrets:o,restores:s}),this.movers=new Map,this.mobs=new Map,this.zones=[],this.zoneSeq=0,this.timers=[],this.pets=new Map,this.petSeq=0,this.spawnSeq=0,this.critters=new Map,this.parties=new Map,this.partySeq=0,this.time=0;for(let e of Qd())this.spawnMonster(e);for(let e of $d())this.spawnCritter(e);this.spawnCritter(Yd)}message(e,t,n){let r=op[t];if(!r)return;let i=this.movers.get(e);i&&(i.lastInput=this.time),r(this,e,n)}join(e,t={}){let n=Gl[t.occ]?t.occ:`vanguard`,r=t.sex===`f`?`f`:`m`,i=Yl(t.name)??`Unsworn${Math.floor(Math.random()*900+100)}`,a=Ju(),o=this.newPlayer();Object.assign(o,{name:i,occ:n,sex:r,job:``,job3:``,level:1,x:a.x,z:a.z,dir:Math.PI/4,moving:!1,exp:0,expNext:Nd(1),points:0,gold:0,...Rd(n)});for(let e of Zu[n])o.bag.push(e);for(let e of Su(n))o.skills.set(e,1);o.use||=new Map,this.state.players.set(e,o),this.movers.set(e,{x:a.x,z:a.z,dir:o.dir,moving:!1,path:[],steer:null,lastChat:0,lastAct:0,lastHurt:-99,regen:0,resAcc:0,combat:null,chosen:!1,nextSwing:0,repath:0,cds:{},gcd:0,cry:null,shield:0,shieldUntil:0,dash:null,manaShield:null,aura:{dmg:0,def:0,fight:0,regen:0},enchant:null,channel:null,blessing:null,aegis:null,graceCd:{},lastHit:-99,lastInput:this.time,useAcc:{}});let s=this.secrets?Pf(i):null,c=s?Ff(o,s):`${i} the ${Gl[n].name} has entered Oathgate.`;s?.horse?o.horse=Df(s.horse):this.restores&&t.save&&this.restore(e,t.save),this.recompute(e),o.hp=o.hpMax,o.res=o.resMax,this.broadcast(`system`,{text:c}),this.log(`[world] + ${i} (${r} ${n}) ${e} — ${this.state.players.size} online`)}restore(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||!r||typeof t!=`object`||t.occ!==n.occ)return;let i=(e,t,n)=>Math.max(t,Math.min(n,Math.floor(Number(e))||t)),a=e=>e&&typeof e==`object`?Object.entries(e):[],o=i(t.level,1,30),s=Ql[t.job]?.occ===n.occ&&o>=15?t.job:``,c=s&&tu[t.job3]?.from===s&&o>=25?t.job3:``;Object.assign(n,{level:o,job:s,job3:c,exp:i(t.exp,0,1e9),expNext:o>=30?0:Nd(o)}),Object.assign(n,Dd(n.occ,s,o,c)),n.skills.clear(),n.use.clear();for(let[e,r]of a(t.use))gu(n.occ,e)?.byUse&&n.use.set(e,i(r,0,1e7));for(let[e,r]of a(t.skills)){let t=gu(n.occ,e);!t||t.job&&t.job!==s||t.job3&&t.job3!==c||o<t.lv||du(n,e)||n.skills.set(e,t.byUse?ru(t,n.use.get(e)??0):i(r,1,t.max))}for(let e of tu[c]?.skills??[])o>=e.lv&&!n.skills.has(e.id)&&n.skills.set(e.id,ru(e,n.use.get(e.id)??0));for(let e of Su(n.occ))!n.skills.has(e)&&!du(n,e)&&n.skills.set(e,1);let l=[...n.skills].filter(([e])=>!gu(n.occ,e).byUse).reduce((e,[,t])=>e+t,0)-Su(n.occ).filter(e=>n.skills.has(e)).length,u=Math.max(0,o-1-l);n.points=t.points===void 0?u:Math.min(u,i(t.points,0,999)),n.bag.splice(0,n.bag.length);for(let e of Array.isArray(t.bag)?t.bag.slice(0,24):[])U[e]&&n.bag.push(e);n.equip.clear();for(let[e,r]of a(t.equip))U[r]&&(Yu.includes(e)&&(U[r].slot===e||U[r].slot===`ring`&&e.startsWith(`ring`))&&!fd(n,r)?n.equip.set(e,r):n.bag.length<24&&n.bag.push(r));U[n.equip.get(`main`)]?.twoHand&&n.equip.get(`off`)&&(n.bag.length<24&&n.bag.push(n.equip.get(`off`)),n.equip.delete(`off`));for(let e of Object.keys(U).filter(e=>U[e].unique)){let t=[...n.equip.values()].includes(e);for(let r=0;r<n.bag.length;r++)n.bag[r]===e&&(t&&n.bag.splice(r--,1),t=!0)}if(n.gold=i(t.gold,0,Wf),n.horse=Df(t.horse),n.horse){t.riding&&n.skills.has(`mount`)&&this.ride(e);let r=Ef[n.horse];this.send(e,`notice`,{text:`${r.unicorn?`Takoyaki the unicorn`:`Your ${r.name.toLowerCase()} horse`} came with you${n.mount?``:`: use Mount / Dismount to ride`}.`})}}leave(e){this.leaveParty(e);let t=this.state.players.get(e);this.state.players.delete(e),this.movers.delete(e);for(let t of this.mobs.values())t.target===e&&(t.target=null);this.dismissPets(e),t&&(this.broadcast(`system`,{text:`${t.name} has left.`}),this.log(`[world] - ${t.name} ${e} — ${this.state.players.size} online`))}tick(e){this.time+=e;let t=this.timers.filter(e=>e.at<=this.time);this.timers=this.timers.filter(e=>e.at>this.time);for(let e of t)e.fn();this.tickAuras();for(let[t,n]of this.movers){n.pendingCast&&this.tickPendingCast(t,n),n.combat&&!n.channel&&this.tickCombat(t,n),n.dash&&this.time>n.dash.until&&this.endDash(n),Gd(n,e);let r=this.state.players.get(t);if(!r)continue;let i=Mu.find(e=>Math.hypot(e.x-n.x,e.z-n.z)<Nu);i&&this.warp(t,i.to),r.x=n.x,r.z=n.z,r.dir=n.dir,r.moving=n.moving;let a=this.time-n.lastHurt>Rf,o=n.derived.regen,s=n.aura,c=(a?zf*(o.calm+s.regen/100):0)+o.fight+s.fight/100;if(r.hp<r.hpMax&&c&&(n.regen+=r.hpMax*c*e,n.regen>=1)){let e=Math.floor(n.regen);n.regen-=e,r.hp=Math.min(r.hpMax,r.hp+e)}let l=n.channel?.pulse;if(l&&this.time>=l.next&&(l.next+=l.every,l.fn()),r.res<r.resMax){let t=a&&!n.combat,i=r.resMax*Kf*(t?Jf:1)+qf*(t?Yf:1);if(n.resAcc+=i*(o.res+s.regen/100)*e,n.resAcc>=1){let e=Math.floor(n.resAcc);n.resAcc-=e,r.res=Math.min(r.resMax,r.res+e)}}n.cry&&this.time>n.cry.until&&(n.cry=null),n.enchant&&this.time>n.enchant.until&&(n.enchant=null,r.enchant=0),n.shield&&this.time>n.shieldUntil&&(n.shield=0,r.shield=0),n.manaShield&&this.time>n.manaShield.until&&(n.manaShield=null),this.tickBlessings(t,n),n.haste&&this.time>n.haste.until&&(n.haste=null,!n.dash&&!n.channel&&this.setSpeed(n)),r.job3&&this.tickUse(t,r,n,e)}this.tickZones(e);for(let t of[...this.mobs.values()])this.tickMonster(t,e);for(let t of[...this.pets.values()])this.tickPet(t,e);for(let t of[...this.critters.values()])this.tickCritter(t,e)}later(e,t){this.timers.push({at:this.time+e,fn:t})}tickUse(e,t,n,r){if(this.time-n.lastInput>Xf)return;let i=!!n.combat||this.time-Math.max(n.lastHurt,n.lastHit)<Rf,a=(i,a)=>{if(a&&t.skills.get(i)&&(n.useAcc[i]=(n.useAcc[i]??0)+a*r,n.useAcc[i]>=1)){let t=Math.floor(n.useAcc[i]);n.useAcc[i]-=t,this.countUse(e,i,t)}};a(`mountain_breath`,i?1:n.moving?0:gu(t.occ,`mountain_breath`)?.byUse.still);let o=U[t.equip.get(`main`)];a(`bond_of_the_blade`,i&&o&&ed(o)?1:0),a(`summon_dragon`,i&&(tf(t.mount)||this.dragonOf(e))?1:0)}countUse(e,t,n=1){let r=this.state.players.get(e),i=r?.skills.get(t)??0,a=i&&gu(r.occ,t);if(!a?.byUse)return;let o=(r.use.get(t)??0)+n;r.use.set(t,o);let s=Math.min(a.max,ru(a,o));s<=i||(r.skills.set(t,s),t===`summon_dragon`&&this.growDragon(e),this.recompute(e),this.broadcast(`fx`,{kind:`skill_rank`,id:e,skill:t,rank:s}),this.send(e,`notice`,{text:`${a.name} grew to rank ${s} with use.`}))}tickAuras(){let e=new Map;for(let[t,n]of this.movers){let r=this.state.players.get(t);if(!r)continue;for(let[t,i]of rp){let a=r.occ===t&&r.skills.get(i);if(!a)continue;let o=gu(t,i).aura;for(let t of this.movers.values()){if(Math.hypot(t.x-n.x,t.z-n.z)>o.radius)continue;e.has(t)||e.set(t,{});let r=e.get(t)[i]??={};for(let e of ip)o[e]&&(r[e]=Math.max(r[e]??0,yu(o[e],a)))}}let i=r.occ===`arcanist`&&r.skills.get(`grave_chill`);if(i){let e=gu(`arcanist`,`grave_chill`).aura;for(let t of this.mobs.values())t.deadAt===null&&Math.hypot(t.x-n.x,t.z-n.z)<=e.radius+t.def.radius&&this.slowMob(t,yu(e.slow,i),.3)}}for(let t of this.movers.values()){let n={dmg:0,def:0,fight:0,regen:0};for(let r of Object.values(e.get(t)??{}))for(let e in r)n[e]+=r[e];t.aura=n}}addZone(e){return e.zid=++this.zoneSeq,this.zones.push(e),e.zid}endZone(e,t=!1){e.until=-1,this.broadcast(`fx`,{kind:`zone_end`,zid:e.zid,x:e.x,z:e.z,triggered:t})}tickZones(e){for(let e of this.zones){if(e.until<=this.time)continue;let t=t=>Math.hypot(t.x-e.x,t.z-e.z)<=e.r+(t.def?.radius??0);if(e.kind===`glyph`)for(let n of this.mobs.values())n.deadAt===null&&t(n)&&this.slowMob(n,e.slow,.3);else if(e.kind===`snare`){let n=[...this.mobs.values()].find(e=>e.deadAt===null&&t(e));if(!n)continue;n.rootUntil=Math.max(n.rootUntil,this.time+e.root),n.tagged.add(e.owner),!n.target&&this.movers.has(e.owner)&&(n.target=e.owner),this.endZone(e,!0)}}for(let e of this.zones)e.until>-1&&e.until<=this.time&&e.kind===`snare`&&this.endZone(e);this.zones=this.zones.filter(e=>e.until>this.time)}slowMob(e,t,n){this.time>=e.slowUntil&&(e.slowPct=0),e.slowPct=Math.max(e.slowPct,t),e.slowUntil=Math.max(e.slowUntil,this.time+n)}rollFor(e,t=100){let n=Id(e.derived),r=1+((e.cry?.pct??0)+(e.aura?.dmg??0)+(e.riding?e.rideAtk??0:0)+(e.enchant?.pct??0)+(e.blessing?.dmg??0))/100;return{dmg:Math.max(1,Math.round(n.dmg*t/100*r)),crit:n.crit}}healPlayer(e,t,n,r=!1){let i=this.state.players.get(e);if(!i||i.hp>=i.hpMax)return 0;let a=Math.min(i.hpMax-i.hp,Math.round(t));return i.hp+=a,this.broadcast(`heal`,{id:e,by:n,amount:a,quiet:r}),a}endDash(e){e.dash=null,this.setSpeed(e)}setSpeed(e){let t=(e.haste?1+e.haste.move/100:1)*(1+(e.derived?.speed??0)/100);e.riding?e.speed=e.rideSpeed*t:t===1?delete e.speed:e.speed=zd*t}haste(e,t){let n=this.movers.get(e);n.haste=t,!n.dash&&!n.channel&&this.setSpeed(n)}warp(e,t,{party:n=!0}={}){let r=this.movers.get(e),i=this.state.players.get(e);if(r&&i){if(n&&i.party){let n=Iu(r.x,r.z);this.partyMembers(e).forEach((r,a)=>{let o=this.movers.get(r);if(r===e||!o||Iu(o.x,o.z)!==n)return;let s=a/Qf*Math.PI*2,c={x:t.x+Math.cos(s)*1.2,z:t.z+Math.sin(s)*1.2};this.warp(r,qu(c.x,c.z,.3)?c:t,{party:!1}),this.send(r,`notice`,{text:`You travel with your party (${i.name} went through the portal).`})})}this.disengage(e),r.dash&&this.endDash(r),Object.assign(r,{x:t.x,z:t.z,path:[],steer:null,moving:!1}),Object.assign(i,{x:t.x,z:t.z,moving:!1});for(let t of this.mobs.values())t.target===e&&this.evade(t);this.send(e,`warp`,{x:t.x,z:t.z,region:Iu(t.x,t.z)})}}recompute(e){let t=this.state.players.get(e),n=this.movers.get(e);if(!t||!n)return;let r=Fd(t,t.skills);n.derived=r,!n.dash&&!n.channel&&this.setSpeed(n);let i=t.hpMax?t.hp/t.hpMax:1,a=t.resMax?t.res/t.resMax:1;t.hpMax=r.hpMax,t.resMax=r.resMax,t.hp=Math.min(t.hpMax,Math.max(1,Math.round(t.hpMax*i))),t.res=Math.min(t.resMax,Math.round(t.resMax*a))}classGate(e){return e.level===15&&!e.job?`Lv 15: talk to the Oathkeeper by the Crown Plinth to choose your 2nd class.`:e.level===25&&!e.job3?lu(e.job).length?`Lv 25: talk to the Crownwarden on the plaza to swear your 3rd oath.`:`Lv 25: the ${Ql[e.job]?.name??``} 3rd classes aren't in the game yet. Your EXP waits for them.`:null}grantExp(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||(t&&this.send(e,`exp`,{gain:t}),n.level>=30))return;let i=this.classGate(n);i&&n.exp>=n.expNext?r&&this.time-(r.gateWarn??-99)>30&&(r.gateWarn=this.time,this.send(e,`notice`,{text:i})):(n.exp=i?Math.min(n.expNext,n.exp+t):n.exp+t,this.levelUp(e))}levelUp(e){let t=this.state.players.get(e),n=0,r={};for(;t.level<30&&!this.classGate(t)&&t.exp>=t.expNext;){t.exp-=t.expNext,t.level+=1,n+=1,t.points=Math.min(999,(t.points??0)+1);for(let[e,n]of Object.entries(Ed(t)))t[e]+=n,r[e]=(r[e]??0)+n;t.expNext=Nd(t.level);let i=Eu(t,t.level),a=i.filter(e=>e.byUse),o=i.filter(e=>!e.byUse);for(let e of a)t.skills.set(e.id,1);a.length&&this.send(e,`notice`,{text:`You learned ${a.map(e=>e.name).join(` and `)}.`}),o.length&&this.send(e,`notice`,{text:`New skill${o.length>1?`s`:``} to learn from the Wise Man: ${o.map(e=>e.name).join(`, `)}.`})}if(!n)return;t.level>=30&&(t.exp=0,t.expNext=0),this.classGate(t)&&(t.exp=Math.min(t.exp,t.expNext)),this.recompute(e),t.hp=t.hpMax,t.res=t.resMax,this.broadcast(`levelup`,{id:e,level:t.level}),this.broadcast(`system`,{text:`${t.name} reached Lv ${t.level}!`}),this.send(e,`notice`,{text:`Stats up: ${Object.entries(r).map(([e,t])=>`${wd[e]} +${t}`).join(`, `)}.`});let i=this.classGate(t);i&&this.send(e,`notice`,{text:i})}shardDrop(e,t){let n=this.state.players.get(e),r=this.movers.get(e),i=ou(n?.job);t.def.shard&&i&&r&&!n.job3&&![...n.bag].includes(i)&&(r.shardHunt=(r.shardHunt??0)+1,!(Math.random()>=t.def.shard*(1+r.shardHunt/Zf))&&this.giveItem(e,i,t.def.name)&&(r.shardHunt=0,this.send(e,`notice`,{text:`The ${U[i].name} answers you! Take it to the Crownwarden at Lv 25 to swear your 3rd oath.`}),this.broadcast(`fx`,{kind:`shard_found`,id:e,x:+r.x.toFixed(2),z:+r.z.toFixed(2),color:U[i].color})))}giveItem(e,t,n){let r=this.state.players.get(e),i=U[t];return!r||!i?!1:r.bag.length>=24?(this.send(e,`notice`,{text:`Your bag is full: the ${i.name} was left behind.`}),!1):(r.bag.push(t),this.send(e,`loot`,{item:t,from:n}),!0)}equipItem(e,t){let n=this.state.players.get(e),r=n?.bag[t];if(!r)return;let i=fd(n,r);if(i){this.send(e,`notice`,{text:`${U[r].name}: ${i}.`});return}let a=pd(r,n.equip),o=[a,...hd(r,n.equip)].filter(e=>n.equip.get(e));if(n.bag.length-1+o.length>24)this.send(e,`notice`,{text:`Your bag is too full to swap that in.`});else{n.bag.splice(t,1);for(let e of o)n.bag.push(n.equip.get(e)),n.equip.delete(e);n.equip.set(a,r),this.recompute(e)}}unequipItem(e,t){let n=this.state.players.get(e);n&&Yu.includes(t)&&n.equip.get(t)&&(n.bag.length>=24?this.send(e,`notice`,{text:`Your bag is full.`}):(n.bag.push(n.equip.get(t)),n.equip.delete(t),this.recompute(e)))}discardItem(e,t){let n=this.state.players.get(e),r=n?.bag[t];r&&(n.bag.splice(t,1),this.send(e,`notice`,{text:`Threw away the ${U[r].name}.`}))}giveGold(e,t,n){let r=this.state.players.get(e);!r||t<=0||(r.gold=Math.min(Wf,(r.gold??0)+t),this.send(e,`gold`,{amount:t,from:n}))}shopBlocker(e){let t=this.movers.get(e),n=zu.merchant;return Math.hypot(t.x-n.x,t.z-n.z)>3.7?`Hilde's shop is on the plaza, to the right of the Crown Plinth.`:null}buyItem(e,t){let n=this.state.players.get(e);if(!n||!ld(t))return;let r=this.shopBlocker(e)??(n.bag.length>=24?`Your bag is full.`:(n.gold??0)<sd(t)?`The ${U[t].name} costs ${sd(t)} gold.`:null);r?this.send(e,`notice`,{text:r}):(n.gold-=sd(t),n.bag.push(t),this.send(e,`notice`,{text:`Bought the ${U[t].name} for ${sd(t)} gold.`}))}sellItem(e,t){let n=this.state.players.get(e),r=n?.bag[t];if(!r)return;let i=this.shopBlocker(e)??(U[r].shard?`Hilde won't touch a shard of the Crown. Keep it for your 3rd oath.`:null);i?this.send(e,`notice`,{text:i}):(n.bag.splice(t,1),n.gold=Math.min(Wf,(n.gold??0)+cd(r)),this.send(e,`notice`,{text:`Sold the ${U[r].name} for ${cd(r)} gold.`}))}command(e,t){let n=this.state.players.get(e),[r,i,a]=t.slice(1).trim().toLowerCase().split(/\s+/),o=t=>this.send(e,`notice`,{text:t});if(!this.secrets){o(`Commands are turned off on this server.`);return}if(r===`heal`){n.hp=n.hpMax,n.res=n.resMax;return}if(r===`rc`){let t=this.movers.get(e);t.cds={},t.gcd=0,this.send(e,`cooldownsReset`,{}),o(`Cooldowns reset.`);return}if(r===`rank`){let t=[...n.skills.keys()].map(e=>gu(n.occ,e)).filter(e=>e?.byUse),r=i&&t.find(e=>e.id===i||e.id.startsWith(i)||e.name.toLowerCase().startsWith(i));if(!r){o(`/rank <skill> [1-5]. Yours: ${t.map(e=>e.id).join(`, `)||`none (3rd-class skills only)`}`);return}let s=n.skills.get(r.id),c=Math.min(r.max,Math.floor(Number(a))||s+1);if(c<=s){o(`${r.name} is rank ${s}${s>=r.max?`, the most there is`:``}. Ranks only go up.`);return}this.countUse(e,r.id,r.byUse.at[c-2]-(n.use.get(r.id)??0));return}if(r===`spawn`){if(!qd[i]){o(`/spawn <kind> [count]. Kinds: ${Object.keys(qd).join(`, `)}`);return}let t=this.movers.get(e),n=Math.min(12,Math.max(1,Math.floor(Number(a))||1));for(let e=0,r=0;e<n&&r<60;r++){let n=Math.random()*Math.PI*2,r=3+Math.random()*3,a=t.x+Math.cos(n)*r,o=t.z+Math.sin(n)*r;qu(a,o,qd[i].radius)&&(this.spawnMonster({id:`spawned${++this.spawnSeq}`,kind:i,x:a,z:o,once:!0}),e++)}return}if(r===`gold`){let t=Math.floor(Number(i))||1e3;t>0&&this.giveGold(e,Math.min(t,Wf));return}if(r===`give`){if(U[i]){this.giveItem(e,i);return}o(`/give <item>. For you: ${Object.keys(U).filter(e=>td(U[e],n.occ,n.job,n.job3)).join(`, `)}`);return}if(r!==`level`&&r!==`levelup`&&r!==`lv`){o(`Commands: /level <1-30> goes up to that level, /levelup goes up one, /give <item> gives an item, /gold <n> gives gold, /spawn <kind> [count] brings monsters, /rc resets cooldowns, /rank <skill> [1-5] ranks up a 3rd-class skill, /heal fills HP and MP.`);return}let s=r===`levelup`||!i?n.level+1:Math.min(30,Math.floor(Number(i)));if(!(s>n.level)){o(`You are already Lv ${n.level}.`);return}let c=this.classGate(n);if(c&&n.exp>=n.expNext){o(c);return}let l=-n.exp;for(let e=n.level;e<s;e++)l+=Nd(e);n.exp+=l,this.levelUp(e)}changeJob(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||!r)return;let i=zu.oathkeeper;if(Math.hypot(r.x-i.x,r.z-i.z)>2.7){this.send(e,`notice`,{text:`Walk up to the Oathkeeper first.`});return}let a=wu(n,t);if(a){this.send(e,`notice`,{text:a});return}n.job=t,this.broadcast(`levelup`,{id:e,level:n.level,job:t}),this.broadcast(`system`,{text:`${n.name} swore the oath and became a ${Ql[t].name}!`});let o=Eu(n,15);this.send(e,`notice`,{text:`New skill${o.length>1?`s`:``} to learn from the Wise Man: ${o.map(e=>e.name).join(`, `)}.`}),this.levelUp(e)}changeJob3(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||!r)return;let i=zu.crownwarden;if(Math.hypot(r.x-i.x,r.z-i.z)>2.7){this.send(e,`notice`,{text:`Walk up to the Crownwarden first.`});return}let a=Tu(n,t);if(a){this.send(e,`notice`,{text:a});return}let o=tu[t];n.job3=t;let s=0;for(let e of o.abandons){let t=n.skills.get(e)??0;t&&(s+=t-+!!Su(n.occ).includes(e),n.skills.delete(e))}n.points=Math.min(999,(n.points??0)+s);for(let t of Yu)n.equip.get(t)&&fd(n,n.equip.get(t))&&this.unequipItem(e,t);r.enchant=null,n.enchant=0,r.manaShield=null,r.cry=null;let c=o.skills.filter(e=>e.lv<=n.level);for(let e of c)n.skills.set(e.id,1);this.recompute(e),this.broadcast(`levelup`,{id:e,level:n.level,job:t}),this.broadcast(`system`,{text:`${n.name} swore the third oath and became a ${o.name}!`});let l=o.abandons.length?`Every earlier skill given up${s?` (${s} skill point${s>1?`s`:``} came back)`:``}. `:``;this.send(e,`notice`,{text:`${l}You learned ${c.map(e=>e.name).join(` and `)}.`}),this.levelUp(e)}engage(e,t,n=!0){let r=this.movers.get(e),i=this.state.players.get(e);if(!r||!i)return;let a=typeof t==`string`?this.mobs.get(t):null;if(a&&(a.deadAt!==null||Math.hypot(a.x-r.x,a.z-r.z)>Gf)&&(a=null),!a&&!t&&(a=this.nearestMob(r.x,r.z,9)),!a){if(Date.now()-r.lastAct<600)return;r.lastAct=Date.now(),this.broadcast(`act`,{id:e,kind:`attack`})}else r.pendingCast=null,r.combat===a.id?r.chosen||=n:(r.chosen=n,r.combat=a.id,i.target=a.id,r.steer=null,r.path=[],r.repath=0,r.nextSwing=Math.max(r.nextSwing,this.time))}walkToCast(e,t,n,r){let i=this.movers.get(e),a=this.state.players.get(e);this.disengage(e),i.steer=null,i.pendingCast={skill:t,msg:n,mob:r.id,until:this.time+10},i.path=Wd(i.x,i.z,r.x,r.z),i.repath=this.time+.3,a.target=r.id}tickPendingCast(e,t){let n=t.pendingCast,r=this.state.players.get(e),i=this.mobs.get(n.mob),a=yu(gu(r.occ,n.skill).use.range,r.skills.get(n.skill)??1),o=i?Math.hypot(i.x-t.x,i.z-t.z):1/0;if(!i||i.deadAt!==null||this.time>n.until||o>Gf)t.pendingCast=null,t.path=[],t.combat||(r.target=``);else if(o<=a+i.def.radius-.1){if(t.path=[],this.time<t.gcd)return;t.pendingCast=null,sf(this,e,n.skill,n.msg),t.combat||(r.target=``)}else this.time>=t.repath&&(t.repath=this.time+.3,t.path=Wd(t.x,t.z,i.x,i.z))}partyMembers(e){let t=this.state.players.get(e);return t?.party&&this.parties.get(t.party)?.members||[e]}partyNear(e,t){let n=Iu(t.x,t.z);return this.partyMembers(e).filter(r=>{let i=this.movers.get(r);return r===e||i&&Iu(i.x,i.z)===n&&Math.hypot(i.x-t.x,i.z-t.z)<=$f})}tellParty(e,t){for(let n of this.parties.get(e)?.members??[])this.send(n,`notice`,{text:t})}partyInvite(e,t){let n=this.state.players.get(e),r=this.state.players.get(t),i=this.movers.get(t),a=t=>this.send(e,`notice`,{text:t});if(n&&r&&t!==e){if(n.party&&n.party===r.party)return a(`${r.name} is already in your party.`);if(r.party)return a(`${r.name} is in another party.`);if(this.partyMembers(e).length>=Qf)return a(`A party holds ${Qf} at most.`);(i.invites??=new Map).set(e,this.time+tp),this.send(t,`partyInvite`,{from:e,name:n.name}),a(`You invited ${r.name} to your party.`)}}partyAnswer(e,t,n){let r=this.state.players.get(e),i=this.movers.get(e),a=this.state.players.get(t),o=i?.invites?.get(t);i?.invites?.delete(t),!r||!a||!o||this.time>o?r&&this.send(e,`notice`,{text:`That invite has run out.`}):n?(r.party&&this.leaveParty(e),this.partyMembers(t).length>=Qf?this.send(e,`notice`,{text:`${a.name}'s party is full.`}):(a.party||(a.party=`party${++this.partySeq}`,this.parties.set(a.party,{members:[t]})),this.parties.get(a.party).members.push(e),r.party=a.party,this.tellParty(r.party,`${r.name} joined the party.`))):this.send(t,`notice`,{text:`${r.name} turned down your party invite.`})}leaveParty(e){let t=this.state.players.get(e),n=t?.party&&this.parties.get(t.party);if(!n)return;let r=t.party;if(n.members=n.members.filter(t=>t!==e),t.party=``,this.send(e,`notice`,{text:`You left the party.`}),this.tellParty(r,`${t.name} left the party.`),n.members.length<=1){for(let e of n.members){let t=this.state.players.get(e);t&&(t.party=``),this.send(e,`notice`,{text:`The party broke up.`})}this.parties.delete(r)}}disengage(e){let t=this.movers.get(e),n=this.state.players.get(e);t&&(t.combat=null),n&&(n.target=``)}nearestMob(e,t,n,r=()=>!0){let i=null,a=n;for(let n of this.mobs.values()){if(n.deadAt!==null||!r(n))continue;let o=Math.hypot(n.x-e,n.z-t);o<a&&(i=n,a=o)}return i}tickCombat(e,t){let n=this.mobs.get(t.combat);if(!n||n.deadAt!==null){if(n=this.nearestMob(t.x,t.z,9,t=>t.target===e),!n){this.disengage(e);return}t.combat=n.id,t.chosen=!1,this.state.players.get(e).target=n.id}let r=this.state.players.get(e),i=Math.hypot(n.x-t.x,n.z-t.z);i>Gf?this.disengage(e):i<=ql(r)+n.def.radius&&(!this.inTown(t)||this.inTown(n))?(t.path=[],t.dir=Math.atan2(n.x-t.x,n.z-t.z),t.dash&&(t.dash.mob===n.id&&(n.rootUntil=Math.max(n.rootUntil,this.time+t.dash.root)),this.endDash(t)),this.time>=t.nextSwing&&(t.nextSwing=this.time+Kl[r.occ].every*t.derived.swingMul/(1+(t.haste?.swing??0)/100),this.broadcast(`act`,{id:e,kind:`attack`}),this.hurtMonster(n,this.rollFor(t),e))):this.time>=t.repath&&(t.repath=this.time+.3,t.path=Wd(t.x,t.z,n.x,n.z))}spawnMonster(e){let t=qd[e.kind],n=this.newMonster(),r=Math.random()*Math.PI*2;Object.assign(n,{kind:e.kind,level:t.level,x:e.x,z:e.z,dir:r,moving:!1,hp:t.hp,hpMax:t.hp}),this.state.monsters.set(e.id,n),this.mobs.set(e.id,{id:e.id,spawn:e,def:t,s:n,x:e.x,z:e.z,dir:r,moving:!1,path:[],steer:null,speed:t.speed*.5,target:null,homing:!1,nextThink:this.time+Math.random()*3,nextSwing:0,repath:0,deadAt:null,tagged:new Set,stunUntil:0,stunKind:`stun`,rootUntil:0,tauntUntil:0,evadeUntil:0,slowUntil:0,slowPct:0})}tickMonster(e,t){let{def:n,s:r,spawn:i}=e;if(e.deadAt!==null){if(this.time-e.deadAt>Bf&&this.state.monsters.has(e.id)&&this.state.monsters.delete(e.id),i.once){this.time-e.deadAt>Bf&&this.mobs.delete(e.id);return}this.time-e.deadAt>(n.respawn??14)&&this.spawnMonster(i);return}let a=this.time<e.stunUntil,o=this.time<e.rootUntil,s=this.time<e.slowUntil;if(s||(e.slowPct=0),r.status=a?e.stunKind:o?`root`:s?`slow`:``,a){e.path=[],e.moving=!1,r.moving=!1;return}let c=this.time<e.tauntUntil&&this.movers.has(e.target);if(!e.target&&!e.homing&&n.aggro>0){for(let[t,r]of this.movers)if(Math.hypot(r.x-e.x,r.z-e.z)<n.aggro&&!this.inTown(r)){e.target=t;break}}let l=e.target&&this.foe(e.target),u=Math.hypot(e.x-i.x,e.z-i.z)>33&&!c;if(e.target&&(!l||this.inTown(l)||u)&&this.evade(e),e.target){if(e.speed=n.speed,Math.hypot(l.x-e.x,l.z-e.z)<=n.attackRange){if(e.path=[],e.dir=Math.atan2(l.x-e.x,l.z-e.z),this.time>=e.nextSwing&&(e.nextSwing=this.time+n.attackEvery,this.broadcast(`act`,{id:e.id,kind:`attack`,mob:!0}),this.pets.has(e.target)?this.hurtPet(this.pets.get(e.target),np(n.dmg),e):this.hurtPlayer(e.target,np(n.dmg),e),n.splash)){this.broadcast(`fx`,{kind:`slam`,x:+l.x.toFixed(2),z:+l.z.toFixed(2),r:n.splash});for(let[t,r]of this.movers)t!==e.target&&Math.hypot(r.x-l.x,r.z-l.z)<=n.splash&&this.hurtPlayer(t,Math.round(np(n.dmg)*.6),e)}}else this.time>=e.repath&&(e.repath=this.time+.4,e.path=Wd(e.x,e.z,l.x,l.z))}else if(e.homing)e.speed=n.speed,!e.path.length&&this.time>=e.evadeUntil&&(e.homing=!1,r.hp=r.hpMax,e.tagged.clear());else if(this.time>=e.nextThink){e.speed=n.speed*.5,e.nextThink=this.time+2.5+Math.random()*4;let t=Math.random()*Math.PI*2,r=Math.random()*n.wander,a={x:i.x+Math.cos(t)*r,z:i.z+Math.sin(t)*r};Math.random()<.7&&!this.inTown(a)&&(e.path=Wd(e.x,e.z,a.x,a.z).slice(0,3))}o&&(e.path=[]);let d=e.speed;s&&(e.speed=d*(1-e.slowPct/100)),Gd(e,t),e.speed=d,this.separate(e,t),r.x=e.x,r.z=e.z,r.dir=e.dir,r.moving=e.moving}separate(e,t){for(let n of this.mobs.values()){if(n===e||n.deadAt!==null)continue;let r=e.x-n.x,i=e.z-n.z,a=Math.hypot(r,i),o=e.def.radius+n.def.radius;if(a>=o)continue;let s=Math.min(o-a,2*t)/Math.max(a,.001),c=a<.001?2*t:r*s,l=a<.001?0:i*s;qu(e.x+c,e.z+l,.3)&&(e.x+=c,e.z+=l)}}evade(e){e.target=null,e.homing=!0,e.tauntUntil=0,e.evadeUntil=this.time+Uf,e.path=Wd(e.x,e.z,e.spawn.x,e.spawn.z)}inTown(e){return Math.max(Math.abs(e.x-Ou.x),Math.abs(e.z-Ou.z))<Vf}playerAttack(e,t){let n=this.state.players.get(e);if(!n)return;let r=ql(n),i=Math.sin(t.dir),a=Math.cos(t.dir),o=null,s=1/0;for(let e of this.mobs.values()){if(e.deadAt!==null)continue;let n=e.x-t.x,c=e.z-t.z,l=Math.hypot(n,c);if(l>r+e.def.radius)continue;let u=l+((l<.01?1:(n*i+c*a)/l)<Hf?3:0);u<s&&(o=e,s=u)}o&&(t.moving||(t.dir=Math.atan2(o.x-t.x,o.z-t.z)),this.hurtMonster(o,this.rollFor(t),e))}hurtMonster(e,{dmg:t,crit:n},r,{from:i,source:a}={}){let{s:o}=e,s=this.movers.get(r),c=i??s;if(c&&this.inTown(c))this.broadcast(`hit`,{id:e.id,by:r,dmg:0,evade:!0,mob:!0}),!i&&s&&this.inTown(s)&&this.time-(s.townWarn??-99)>4&&(s.townWarn=this.time,this.send(r,`castFail`,{skill:``,why:`Monsters evade attacks from inside Oathgate. Step off the plaza to fight.`})),e.homing||this.evade(e);else if(e.homing&&(e.homing=!1,e.target=null,e.path=[]),o.hp=Math.max(0,o.hp-t),e.tagged.add(r),!i&&s&&(s.lastHit=this.time),this.broadcast(`hit`,{id:e.id,by:r,dmg:t,crit:n,mob:!0}),o.hp===0){Object.assign(e,{deadAt:this.time,path:[],moving:!1,target:null,homing:!1}),o.moving=!1;let t=this.state.players.get(r);this.broadcast(`system`,{text:`${t?.name??`Someone`} defeated a ${e.def.name}.`});let n=new Set;for(let t of e.tagged){let r=this.state.players.get(t);if(!r)continue;let i=this.partyNear(t,e);for(let t of i){if(n.has(t))continue;n.add(t);let r=this.state.players.get(t);this.grantExp(t,Math.round(Pd(e.def,r.level)*(1+ep*(i.length-1))/i.length))}this.giveGold(t,_d(e.s.kind),e.def.name);for(let n of Sd(e.def,e.s.kind,r))this.giveItem(t,n,e.def.name);this.shardDrop(t,e)}}else(!e.target||a&&e.target===r)&&(e.target=a??r,e.homing=!1)}hurtPlayer(e,t,n){let r=this.state.players.get(e),i=this.movers.get(e);if(!r||!i)return;let a=Ld(t,i.derived.def+(i.shield||0)+(i.aura?.def??0)+(i.blessing?.def??0));i.aegis&&(a=Math.max(1,Math.round(a*(1-i.aegis.pct/100)))),i.lastHurt=this.time;let o=r.skills.get(`phantom_step`)??0,s=r.skills.get(`flowing_breath`)??0,c=(o?yu(gu(r.occ,`phantom_step`).evade,o):0)+(s?yu(gu(r.occ,`flowing_breath`).evade,s):0);if(c&&Math.random()*100<c){this.broadcast(`absorb`,{id:e,amount:0,evade:!0}),s&&this.countUse(e,`flowing_breath`);return}if(i.manaShield&&r.res>0){let t=Math.min(r.res,Math.round(a*i.manaShield.pct/100));if(r.res-=t,a-=t,t&&this.broadcast(`absorb`,{id:e,amount:t,mana:!0}),!a)return}if(a>=r.hp&&tf(r.mount)){this.broadcast(`hit`,{id:e,by:n.id,dmg:a}),this.offDragon(r,i),i.dragonHp=null,this.broadcast(`fx`,{kind:`dragon_fall`,x:+i.x.toFixed(2),z:+i.z.toFixed(2)}),r.hp=Math.max(1,Math.round(r.hpMax/2)),r.res=Math.round(r.resMax/2),this.dragonFell(e);return}if(a>=r.hp&&r.mount){let t=Ef[r.horse];this.broadcast(`hit`,{id:e,by:n.id,dmg:a}),this.dismount(e),this.broadcast(`fx`,{kind:`horse_fall`,x:+i.x.toFixed(2),z:+i.z.toFixed(2),coat:r.horse}),r.horse=``,r.hp=Math.max(1,Math.round(r.hpMax/2)),r.res=Math.round(r.resMax/2),this.send(e,`notice`,{text:`${t.unicorn?`Takoyaki the unicorn`:`Your ${t.name.toLowerCase()} horse`} fell in your place. Tame another in the Ashen Reach's meadow.`});return}if(a>=r.hp&&this.lastGrace(e)||(r.hp=Math.max(0,r.hp-a),this.broadcast(`hit`,{id:e,by:n.id,dmg:a}),r.hp>0&&!i.combat&&!i.path.length&&!i.steer&&!i.channel&&!i.pendingCast&&!i.dash&&this.mobs.has(n.id)&&!this.inTown(i)&&this.engage(e,n.id,!1),r.hp>0))return;let l=Ju();this.disengage(e),i.dash&&this.endDash(i),i.channel=null,i.enchant=null,r.enchant=0,i.manaShield=null,i.haste=null,this.clearBlessings(e),this.dismount(e),this.setSpeed(i),Object.assign(i,{x:l.x,z:l.z,path:[],steer:null,moving:!1,shield:0}),r.shield=0,Object.assign(r,{x:l.x,z:l.z,moving:!1,hp:r.hpMax}),this.send(e,`respawn`,{x:l.x,z:l.z});for(let t of this.mobs.values())t.target===e&&this.evade(t);this.dismissPets(e),this.broadcast(`system`,{text:`${r.name} was struck down by a ${n.def.name} and wakes at the Crown Plinth.`})}};Object.assign(ap.prototype,Tf,jf,af,Mf);var op={partyInvite(e,t,n){typeof n?.target==`string`&&e.partyInvite(t,n.target)},partyAnswer(e,t,n){typeof n?.from==`string`&&e.partyAnswer(t,n.from,!!n.yes)},partyLeave(e,t){e.leaveParty(t)},move(e,t,n){let r=e.movers.get(t);if(!r||!Number.isFinite(n?.x)||!Number.isFinite(n?.z)||r.channel&&!r.channel.walk)return;r.pendingCast=null;let i=Kd(n.x,n.z);e.disengage(t),r.steer=null,r.path=Wd(r.x,r.z,i.x,i.z)},steer(e,t,n){let r=e.movers.get(t);if(!r||r.channel&&!r.channel.walk)return;let i=Number(n?.x)||0,a=Number(n?.z)||0,o=Math.hypot(i,a);o>.01&&e.disengage(t),r.path=[],o>.01&&(r.pendingCast=null),r.steer=o>.01?{x:i/o,z:a/o}:null},chat(e,t,n){let r=e.movers.get(t),i=String(n?.text??``).replace(/[\u0000-\u001f]/g,``).trim().slice(0,If),a=Date.now();if(!r||!i||a-r.lastChat<400)return;if(r.lastChat=a,i.startsWith(`/`)){e.command(t,i);return}let o=e.state.players.get(t);e.broadcast(`chat`,{id:t,name:o.name,text:i})},act(e,t,n){let r=e.movers.get(t),i=Date.now();!r||!Lf.has(n?.kind)||i-r.lastAct<600||(r.lastAct=i,e.broadcast(`act`,{id:t,kind:n.kind},{except:t}),n.kind===`attack`&&e.playerAttack(t,r))},engage:(e,t,n)=>e.engage(t,n?.target),disengage:(e,t)=>e.disengage(t),cast:(e,t,n)=>sf(e,t,String(n?.skill??``),n??{}),changeJob:(e,t,n)=>e.changeJob(t,String(n?.job??``)),changeJob3:(e,t,n)=>e.changeJob3(t,String(n?.job??``)),equip:(e,t,n)=>{Number.isInteger(n?.at)&&e.equipItem(t,n.at)},unequip:(e,t,n)=>e.unequipItem(t,String(n?.slot??``)),discard:(e,t,n)=>{Number.isInteger(n?.at)&&e.discardItem(t,n.at)},buy:(e,t,n)=>e.buyItem(t,String(n?.item??``)),sell:(e,t,n)=>{Number.isInteger(n?.at)&&e.sellItem(t,n.at)},learn(e,t,n){let r=e.state.players.get(t),i=e.movers.get(t),a=String(n?.skill??``);if(!r||!i)return;let o=zu.wiseman;if(!((r.skills.get(a)??0)>0)&&Math.hypot(i.x-o.x,i.z-o.z)>3.7&&!gu(r.occ,a)?.byUse){e.send(t,`notice`,{text:`New skills are learned from the Wise Man by the Crown Plinth (ranks of ones you know can go up anywhere).`});return}let s=Cu(r,a);if(s){e.send(t,`notice`,{text:s});return}let c=gu(r.occ,a),l=(r.skills.get(a)??0)+1;r.points-=xu(c,l),r.skills.set(a,l),e.recompute(t),e.send(t,`notice`,{text:`${c.name} is now rank ${l}.`})}},sp=`modulepreload`,cp=function(e,t){return new URL(e,t).href},lp={},up=function(e){return e.pathname.endsWith(`.css`)},dp=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},fp=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=cp(t,n);let r=s(t),i=up(r);return dp(lp,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:sp,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},pp=`ninefold-crown-v1-`,mp=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`,hp=2e3,gp=8e3;async function _p(e,t){let{Client:n,Callbacks:r}=await fp(async()=>{let{Client:e,Callbacks:t}=await import(`./build-DONUU1-K.js`);return{Client:e,Callbacks:t}},__vite__mapDeps([0,1]),import.meta.url),i=await new n(e).joinOrCreate(`world`,t),a=r.get(i);return{sessionId:i.sessionId,code:null,send:(e,t)=>i.send(e,t),onMessage:(e,t)=>i.onMessage(e,t),onLeave:e=>i.onLeave(t=>e(`The server closed the connection (code ${t}).`)),onAdd:(e,t)=>a.onAdd(e,t),onChange:(e,t)=>{a.onChange(e,t);for(let n of[`bag`,`equip`,`skills`,`use`])e[n]&&(a.onChange(e,n,()=>t()),a.onRemove(e,n,()=>t()))},onRemove:(e,t)=>a.onRemove(e,t),async ping(){let t=performance.now();try{return(await fetch(e.replace(/^ws/,`http`)+`/health`,{cache:`no-store`})).ok?performance.now()-t:null}catch{return null}}}}function vp(){let e={players:new Map,monsters:new Map},t={players:{add:[],remove:[]},monsters:{add:[],remove:[]}},n=new WeakMap,r=(r,i)=>{let a=e[r];for(let[e,o]of Object.entries(i??{})){let i=a.get(e);if(o===null){if(!i)continue;a.delete(e);for(let n of t[r].remove)n(i,e);continue}let s=i??{skills:new Map,use:new Map,equip:new Map,bag:[]};for(let[e,t]of Object.entries(o))if(s[e]instanceof Map){s[e].clear();for(let[n,r]of Object.entries(t))s[e].set(n,r)}else s[e]=t;if(i)for(let e of n.get(i)??[])e();else{a.set(e,s);for(let n of t[r].add)n(s,e)}}};return{colls:e,apply(e){r(`players`,e.p),r(`monsters`,e.m)},onAdd(n,r){t[n].add.push(r);for(let[t,i]of e[n])r(i,t)},onRemove(e,n){t[e].remove.push(n)},onChange(e,t){n.has(e)||n.set(e,[]),n.get(e).push(t)}}}function yp(){let e=new Map;return{on(t,n){e.has(t)||e.set(t,[]),e.get(t).push(n)},emit(t,n){for(let r of e.get(t)??[])r(n)}}}var bp=e=>typeof e==`number`&&!Number.isInteger(e)?Math.round(e*1e3)/1e3:e;function xp(e){let t={};for(let[n,r]of Object.entries(e))t[n]=r instanceof Map?Object.fromEntries(r):Array.isArray(r)?[...r]:bp(r);return t}function Sp(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=e[r];if(!t){n[r]=i;continue}let a=null;for(let e in i)(typeof i[e]==`object`?JSON.stringify(i[e])===JSON.stringify(t[e]):i[e]===t[e])||((a??={})[e]=i[e]);a&&(n[r]=a)}for(let r in e)t[r]||(n[r]=null);return n}var Cp=()=>({name:``,occ:``,job:``,job3:``,sex:``,level:1,x:0,z:0,dir:0,moving:!1,hp:0,hpMax:0,res:0,resMax:0,target:``,exp:0,expNext:0,points:0,gold:0,str:0,int:0,skills:new Map,use:new Map,equip:new Map,bag:[],shield:0,enchant:0,blessed:0,title:``,subtitle:``,mount:``,horse:``,party:``}),wp=()=>({kind:``,level:0,x:0,z:0,dir:0,moving:!1,hp:0,hpMax:0,status:``,owner:``,coat:``});function Tp(e){try{let t=new Worker(URL.createObjectURL(new Blob([`setInterval(() => postMessage(0), 50);`],{type:`text/javascript`})));return t.onmessage=e,()=>t.terminate()}catch{let t=setInterval(e,50);return()=>clearInterval(t)}}var Ep=async()=>(await fp(async()=>{let{Peer:e}=await import(`./bundler-BvtR3xrj.js`);return{Peer:e}},__vite__mapDeps([2,1]),import.meta.url)).Peer,Dp=()=>Array.from({length:4},()=>mp[Math.floor(Math.random()*32)]).join(``),Op=()=>Math.random().toString(36).slice(2,11);async function kp(e,{online:t=!1,dev:n=!1,onStatus:r=()=>{}}={}){let i=`h`+Op(),a=vp(),o=yp(),s=new Map,c=(e,t,n)=>{e===i?queueMicrotask(()=>o.emit(t,n)):s.get(e)?.conn.send({t:`m`,type:t,msg:n})},l=new ap({state:{players:new Map,monsters:new Map},newPlayer:Cp,newMonster:wp,send:c,broadcast:(e,t,{except:n}={})=>{n!==i&&c(i,e,t);for(let r of s.keys())r!==n&&c(r,e,t)},log:e=>console.log(e),restores:!0,secrets:n}),u={p:{},m:{}},d=u,f=()=>{let e={},t={};for(let[t,n]of l.state.players)e[t]=xp(n);for(let[e,n]of l.state.monsters)t[e]=xp(n);return{p:e,m:t}},p=()=>{l.tick(50/1e3),d=f();let e={p:Sp(u.p,d.p),m:Sp(u.m,d.m)};u=d,a.apply(e);for(let t of s.values())t.ready&&t.conn.send({t:`s`,d:e})};l.join(i,e),p();let m=Tp(p),h=null,g=null,_=()=>r(g?`Room ${g} · ${l.state.players.size}/4`:`Solo`);if(t){let e=await Ep();for(let t=0;!h&&t<5;t++)g=Dp(),h=await new Promise((t,n)=>{let r=new e(pp+g);r.on(`open`,()=>t(r)),r.on(`error`,e=>{e.type===`unavailable-id`?(r.destroy(),t(null)):n(Error(`Could not open the room (${e.type}). Are you online?`))})}).catch(e=>{throw m(),e});if(!h)throw m(),Error(`Could not find a free room code. Try again.`);h.on(`connection`,e=>{let t=null;e.on(`data`,r=>{if(r&&typeof r==`object`){if(t&&s.has(t)&&(s.get(t).seen=performance.now()),r.t===`hello`&&!t){if(l.state.players.size>=4){e.send({t:`full`}),setTimeout(()=>e.close(),300);return}t=`g`+Op(),s.set(t,{conn:e,ready:!1,seen:performance.now(),gone:null}),e.send({t:`welcome`,id:t}),l.join(t,r.options??{}),e.send({t:`s`,d}),s.get(t).ready=!0,_()}else r.t===`m`&&t&&typeof r.type==`string`?l.message(t,r.type,r.msg):r.t===`bye`?n():r.t===`ping`&&e.send({t:`pong`,n:r.n})}});let n=()=>{if(t&&s.has(t)){s.delete(t),l.leave(t),_();try{e.close()}catch{}}},r=setInterval(()=>{let e=t&&s.get(t);e?performance.now()-e.seen>gp&&(clearInterval(r),n()):t&&clearInterval(r)},1e3);e.on(`close`,n),e.on(`error`,n)}),h.on(`disconnected`,()=>{try{h.reconnect()}catch{}})}return _(),addEventListener(`pagehide`,()=>{for(let e of s.values())try{e.conn.send({t:`bye`}),e.conn.close()}catch{}}),{sessionId:i,code:g,send:(e,t)=>l.message(i,e,t),onMessage:o.on,onLeave:()=>{},onAdd:a.onAdd,onChange:a.onChange,onRemove:a.onRemove,ping:async()=>null}}async function Ap(e,t){if(e=String(e??``).trim().toUpperCase(),!/^[A-Z0-9]{4}$/.test(e))throw Error(`Enter the 4-letter room code from your friend.`);let n=await Ep(),r=vp(),i=yp(),a=()=>{},o=0,s=0,c=null,l=!1,u=!1,d=performance.now(),f=null,p=()=>{if(!l){l=!0,clearInterval(f);try{h.close(),m.destroy()}catch{}u&&a(`The host ended the session (or the connection dropped).`)}},m=await new Promise((e,t)=>{let r=new n;r.on(`open`,()=>e(r)),r.on(`error`,e=>{r.destroy(),t(Error(`Network error (${e.type}). Are you online?`))})}),h=m.connect(pp+e,{reliable:!0}),g=await new Promise((n,a)=>{let l=e=>{clearTimeout(f),p(),a(Error(e))},f=setTimeout(()=>l(`No answer from room ${e}.`),15e3);m.on(`error`,t=>{u||l(t.type===`peer-unavailable`?`No room with code ${e}. Check the code and try again.`:`Network error (${t.type}).`)}),h.on(`open`,()=>h.send({t:`hello`,options:t})),h.on(`data`,t=>{t&&typeof t==`object`&&(d=performance.now(),t.t===`welcome`?(clearTimeout(f),u=!0,n(t.id)):t.t===`full`?l(`Room ${e} is full (4 players).`):t.t===`s`?r.apply(t.d):t.t===`m`?i.emit(t.type,t.msg):t.t===`pong`&&t.n===o?c=performance.now()-s:t.t===`bye`&&p())})});return f=setInterval(()=>{performance.now()-d>gp?p():h.open&&h.send({t:`hb`})},hp),h.on(`close`,p),h.on(`error`,p),addEventListener(`pagehide`,()=>{try{h.send({t:`bye`})}catch{}}),{sessionId:g,code:e,send:(e,t)=>{h.open&&h.send({t:`m`,type:e,msg:t})},onMessage:i.on,onLeave:e=>{a=e},onAdd:r.onAdd,onChange:r.onChange,onRemove:r.onRemove,async ping(){let e=c;return s=performance.now(),h.open&&h.send({t:`ping`,n:++o}),e}}}var jp=new xi({color:0,transparent:!0,opacity:.35}),Mp=new Map;function Np(e,t=0){let n=e+`:`+t;return Mp.has(n)||Mp.set(n,new ca({color:e,emissive:t,emissiveIntensity:+!!t,flatShading:!0})),Mp.get(n)}function G(e,t,n,r,{x:i=0,y:a=0,z:o=0,rx:s=0,ry:c=0,rz:l=0,emissive:u=0,edges:d=!0}={}){let f=new Ri(e,t,n),p=new z(f,Np(r,u));return p.position.set(i,a,o),p.rotation.set(s,c,l),p.castShadow=!0,p.receiveShadow=!0,d&&p.add(new Ni(new Ki(f),jp)),p}function K(e=0,t=0,n=0,...r){let i=new R;return i.position.set(e,t,n),r.forEach(e=>i.add(e)),i}function Pp(e,t){let n=e.geometry.attributes.position;for(let e=0;e<n.count;e++)n.getY(e)<0&&n.setX(e,n.getX(e)*t);n.needsUpdate=!0,e.geometry.computeVertexNormals();let r=e.children.find(e=>e.isLineSegments);return r&&(r.geometry.dispose(),r.geometry=new Ki(e.geometry)),e}function Fp(e){let t=new R,n=K(0,e.legH,0);t.add(n);let r=K();n.add(r);let i=(t,n,r,i,a,o,s,c,l,u=s)=>{let d=K(t,n,0);return e.limbless||d.add(G(r,i,a,o,{y:-i/2})),s&&d.add(G(r+.02,u,a+.04,c,{y:-i+s/2-.01})),l.add(d),d},a=i(-e.hipX,0,e.legW,e.legH,e.legD,e.c.legs,.16,e.c.boots,n),o=i(e.hipX,0,e.legW,e.legH,e.legD,e.c.legs,.16,e.c.boots,n),s=e.limbless?Rp:null;s?r.add(Pp(G(e.torsoW,s.torsoY1-s.torsoY0,e.torsoD,e.c.torso,{y:(s.torsoY0+s.torsoY1)/2}),s.waist)):r.add(G(e.torsoW,e.torsoH,e.torsoD,e.c.torso,{y:e.torsoH/2}));let c=e.torsoH-.05,l=e.torsoW/2+e.armW/2,u=s?s.handH:.14,d=i(-l,c,e.armW,e.armH,e.armW,e.c.arms,.14,e.c.skin,r,u),f=i(l,c,e.armW,e.armH,e.armW,e.c.arms,.14,e.c.skin,r,u),p=G(e.head,e.head,e.head,e.c.skin,{y:e.head/2});s&&Pp(p,s.jaw);let m=K(0,e.torsoH,0,p),h=e.sex===`f`;if(e.eyes!==!1)for(let t of[-1,1])m.add(G(.07,h?.1:.08,.02,1709072,{x:t*e.head*.2,y:e.head*.55,z:e.head/2+.01,edges:!1})),h&&(m.add(G(.04,.025,.02,1709072,{x:t*(e.head*.2+.05),y:e.head*.55+.05,z:e.head/2+.01,edges:!1})),m.add(G(.07,.035,.02,14715514,{x:t*(e.head*.27),y:e.head*.36,z:e.head/2+.01,edges:!1})));if(r.add(m),h){r.scale.x=.86,m.scale.x=1/.86;for(let e of[a,o])e.scale.x=.88,e.position.x*=.85}let g=[];return{root:t,hips:n,torso:r,head:m,armL:d,armR:f,legL:a,legR:o,d:e,hands:g,hand:t=>{let n=K(0,-e.armH,0);return t.add(n),g.push(n),n}}}var Ip={legH:.6,legW:.26,legD:.28,hipX:.15,torsoW:.64,torsoH:.68,torsoD:.44,head:.48,armW:.22,armH:.68},Lp=e=>({...Ip,sex:e}),Rp={torsoY0:.109,torsoY1:.661,waist:.30218/.32,handH:.186,jaw:.2294/.24},zp=Ip.head;function Bp(e,t,{len:n=.55,locks:r=!0,bangs:i=!0,lockLen:a=.5,joined:o=!1}={}){if(e.add(G(.54,n,.12,t,{y:zp-.02-n/2+.06,z:-.24})),r&&o)for(let n of[-1,1]){let r=a*.827;e.add(G(.1,r,.376,t,{x:n*.27,y:zp+.013-r/2,z:-.038}))}else if(r)for(let n of[-1,1])e.add(G(.1,a,.2,t,{x:n*.27,y:zp*.9-a/2,z:.05})),e.add(G(.1,.12,.3,t,{x:n*.27,y:zp*.9,z:-.02}));i&&e.add(G(.5,.1,.06,t,{y:zp*.86,z:.24}))}function Vp(e,t,{y:n=zp+.04,tie:r=3023384}={}){e.add(G(.14,.1,.14,r,{y:n,z:-.2})),e.add(G(.18,.26,.16,t,{y:n+.1,z:-.3,rx:-.7})),e.add(G(.17,.42,.15,t,{y:n-.14,z:-.45,rx:.25})),e.add(G(.13,.2,.12,t,{y:n-.44,z:-.52,rx:.45}));for(let n of[-1,1])e.add(G(.08,.3,.12,t,{x:n*.27,y:zp*.55,z:.1}))}function Hp(e,t,n){for(let n=0;n<4;n++)e.add(G(.13-n*.012,.15,.12,t,{y:zp*.35-n*.15,z:-.32-n*.02,rz:n%2?.12:-.12}));e.add(G(.1,.06,.1,n,{y:zp*.35-.62,z:-.4}))}function Up(e=`m`){let t={steel:9082536,dark:5068130,gold:13214266,red:10169131,skin:14726284,wood:7031339};e===`f`&&Object.assign(t,{steel:10131108,dark:5917266,red:10504794});let n=Fp({...Lp(e),c:{legs:t.dark,boots:t.steel,torso:t.steel,arms:t.steel,skin:t.skin}});n.torso.add(G(.68,.12,.48,t.gold,{y:.06})),n.torso.add(G(.36,.5,.04,t.red,{y:-.1,z:.25})),n.torso.add(G(.1,.28,.02,t.gold,{y:.4,z:.23}));for(let e of[n.armL,n.armR])e.add(G(.36,.2,.5,t.steel,{y:.04})),e.add(G(.38,.05,.52,t.gold,{y:-.06}));let r=Ip.head;if(e===`f`){Bp(n.head,6960152,{len:.4,bangs:!1,lockLen:.36}),n.head.add(G(.56,.2,.56,t.steel,{y:r+0})),n.head.add(G(.58,.05,.58,t.gold,{y:r-.1}));for(let e of[-1,1])n.head.add(G(.06,.28,.3,t.steel,{x:e*.29,y:r*.62,z:.08}));n.head.add(G(.1,.22,.36,t.red,{y:r+.2,z:.04})),Vp(n.head,6960152,{y:r+.12,tie:t.gold})}else n.head.add(G(.54,.36,.54,t.steel,{y:r-.08})),n.head.add(G(.4,.06,.02,1118481,{y:r*.62,z:.28,edges:!1})),n.head.add(G(.1,.28,.44,t.red,{y:r+.22}));let i=K(0,0,0,G(.08,.26,.08,t.wood),G(.36,.06,.1,t.gold,{y:.15}),G(.1,1,.04,14212579,{y:.68}));i.rotation.x=Math.PI/2,n.hand(n.armR).add(i);let a=K(-.17,-.42,.05,G(.06,.84,.7,t.steel),G(.08,.74,.6,t.red,{x:-.02}),G(.03,.3,.3,t.gold,{x:-.07,rx:Math.PI/4}));return n.armL.add(a),n.armR.rotation.x=-.25,{...n,name:`Vanguard`,sub:`Warrior line`,attack:`swing`,baseArmR:-.25}}function Wp(e=`m`){let t={robe:3878266,trim:9403368,hat:2760540,legs:2300490,gold:13214266,skin:14726284,wood:5913375};e===`f`&&Object.assign(t,{robe:5779534,trim:13208224,hat:4071992,legs:3021352});let n=Fp({...Lp(e),c:{legs:t.legs,boots:2826264,torso:t.robe,arms:t.robe,skin:t.skin}});n.legSwing=.3,n.torso.add(G(.68,.5,.48,t.robe,{y:-.22})),n.torso.add(G(.7,.06,.5,t.trim,{y:-.46})),n.torso.add(G(.1,.9,.02,t.trim,{y:.1,z:.25})),e===`f`?Bp(n.head,14209766,{len:.75,bangs:!1,lockLen:.8}):n.head.add(G(.3,.16,.06,12433066,{y:.08,z:.25}));let r=Ip.head,i=K(0,r,0,G(.82,.06,.82,t.hat,{y:0}),G(.5,.08,.5,t.gold,{y:.07}),G(.48,.24,.48,t.hat,{y:.22}),G(.32,.24,.32,t.hat,{y:.44,x:.03,rz:-.12}),G(.17,.24,.17,t.hat,{y:.63,x:.1,rz:-.35}));n.head.add(i);let a=K(0,0,.05,G(.07,1.9,.07,t.wood,{y:.45}),G(.2,.2,.2,t.gold,{y:1.45,rx:Math.PI/4,rz:Math.PI/4}));a.rotation.x=.95,n.hand(n.armR).add(a),n.armR.rotation.x=-.35;let o=16742938,s=G(.24,.24,.24,o,{emissive:o}),c=K(-.7,1.75,.25,s);c.add(new Ga(o,3,3));let l=[];for(let e=0;e<4;e++){let e=G(.06,.06,.06,16760944,{emissive:16752704,edges:!1});c.add(e),l.push(e)}return n.root.add(c),{...n,name:`Arcanist`,sub:`Mage line`,attack:`cast`,baseArmR:-.35,update(e,t){c.position.y=1.75+Math.sin(e*2.2)*.08,s.rotation.set(e*1.3,e*1.7,0);let n=t===`attack`?1+.5*Math.max(0,Math.sin(e*6.9)):1;s.scale.setScalar(n),l.forEach((t,n)=>{let r=e*2.5+n*Math.PI/2;t.position.set(Math.cos(r)*.3,Math.sin(r*1.3)*.1,Math.sin(r)*.3)})}}}function Gp(e=`m`){let t={robe:15262416,gold:13938487,sash:3829685,skin:15253658,hair:9067051,tome:7027230};e===`f`&&Object.assign(t,{robe:15523026,sash:11033198});let n=Fp({...Lp(e),c:{legs:t.robe,boots:8018490,torso:t.robe,arms:t.robe,skin:t.skin}});n.legSwing=.25,n.torso.add(G(.72,.2,.5,t.robe,{y:-.06})),n.torso.add(G(.82,.2,.56,t.robe,{y:-.25})),n.torso.add(G(.9,.18,.62,t.robe,{y:-.44})),n.torso.add(G(.92,.05,.64,t.gold,{y:-.53})),n.torso.add(G(.1,.85,.02,t.sash,{y:.32,z:.23,rz:.55})),n.torso.add(G(.5,.08,.46,t.gold,{y:.66}));let r=Ip.head;n.head.add(G(.52,.12,.52,t.hair,{y:r+.02})),n.head.add(G(.52,.4,.1,t.hair,{y:r*.6,z:-.24})),e===`f`&&(Bp(n.head,t.hair,{len:.6}),Hp(n.head,t.hair,t.gold),n.head.add(G(.53,.05,.53,t.gold,{y:r*.86})),n.head.add(G(.08,.08,.02,9425151,{y:r*.86,z:.27,emissive:2775680,edges:!1})));let i=K(0,r+.38,0),a=.62,o=.05,s=16769162;for(let[e,t,n,r]of[[0,a/2,a,o],[0,-.62/2,a,o],[a/2,0,o,a],[-.62/2,0,o,a]])i.add(G(n,o,r,s,{x:e,z:t,emissive:s,edges:!1}));let c=new Ga(s,.8,2);i.add(c),n.head.add(i),n.torso.add(K(-.42,-.08,.05,G(.1,.36,.3,t.tome),G(.06,.32,.26,15985362,{x:.04,edges:!1}),G(.11,.08,.08,t.gold,{y:0,z:0})));let l=K(0,0,.04,G(.06,.9,.06,t.gold,{y:.2}),G(.18,.18,.18,16777215,{y:.72,rx:Math.PI/4,rz:Math.PI/4,emissive:8943428}));return l.rotation.x=.4+Math.PI/2,n.hand(n.armR).add(l),n.armR.rotation.x=-.4,{...n,name:`Oracle`,sub:`Priest line`,attack:`cast2`,baseArmR:-.4,update(e,t){i.rotation.y=e*.8,i.position.y=r+.38+Math.sin(e*2)*.03,c.intensity=t===`attack`?.8+3*Math.max(0,Math.sin(e*6.9)):.8}}}function Kp(e=`m`){let t={leather:8018490,pants:4865328,boot:3811866,rope:3023384,cloth:10631722,skin:14726284,hair:5913119,shirt:13219994,wood:11109466,darkWood:7031339,iron:7171955};e===`f`&&Object.assign(t,{hair:8008728,leather:8015944,pants:4863544,cloth:11029082,shirt:13676708});let n=Fp({...Lp(e),c:{legs:t.pants,boots:t.boot,torso:t.leather,arms:t.shirt,skin:t.skin}});n.torso.add(G(.68,.1,.48,t.rope,{y:.06})),n.torso.add(G(.1,.5,.02,6177840,{y:.4,z:.23})),n.torso.add(G(.66,.2,.46,t.leather,{y:-.07}));let r=Ip.head;n.head.add(G(.52,.12,.52,t.hair,{y:r+.02})),n.head.add(G(.52,.18,.1,t.hair,{y:r*.75,z:-.24})),n.head.add(G(.53,.07,.53,t.cloth,{y:r*.82})),n.head.add(G(.06,.2,.04,t.cloth,{x:.12,y:r*.68,z:-.28,rz:.3})),e===`f`&&Vp(n.head,t.hair,{tie:t.cloth});let i=K(0,0,0,G(.07,.22,.07,t.darkWood),G(.24,.05,.08,t.darkWood,{y:.13}),G(.09,.78,.05,t.wood,{y:.55}));return i.rotation.x=Math.PI/2,n.hand(n.armR).add(i),n.armL.add(K(-.15,-.45,.04,G(.05,.42,.42,t.darkWood),G(.06,.42,.07,t.iron,{x:-.01}),G(.06,.07,.42,t.iron,{x:-.01}))),n.armR.rotation.x=-.25,{...n,name:`Vanguard`,sub:`Novice · Lv 1`,attack:`swing`,baseArmR:-.25}}function qp(e=`m`){let t={robe:5923445,dark:4080724,legs:3816e3,rope:13153418,skin:14726284,hair:2826264,wood:7031339};e===`f`&&Object.assign(t,{robe:7232102,dark:4864582,legs:4076600});let n=Fp({...Lp(e),c:{legs:t.legs,boots:2826264,torso:t.robe,arms:t.robe,skin:t.skin}});n.legSwing=.35,n.torso.add(G(.66,.36,.46,t.robe,{y:-.15})),n.torso.add(G(.68,.06,.48,t.rope,{y:.05})),n.torso.add(G(.05,.22,.03,t.rope,{x:.14,y:-.07,z:.25}));let r=Ip.head;n.head.add(G(.5,.14,.5,t.hair,{y:r+.03})),n.head.add(G(.16,.08,.06,t.hair,{x:-.1,y:r-.02,z:.24})),e===`f`&&Bp(n.head,t.hair,{len:.42,lockLen:.42}),n.torso.add(G(.56,.18,.2,t.dark,{y:.72,z:-.2}));let i=K(0,0,.03,G(.05,.6,.05,t.wood,{y:.2}),G(.09,.09,.09,10128576,{y:.52,rx:Math.PI/4,rz:Math.PI/4}));i.rotation.x=.35+Math.PI/2,n.hand(n.armR).add(i),n.armR.rotation.x=-.35;let a=16754784,o=G(.11,.11,.11,a,{emissive:8010256,edges:!1}),s=K(-.55,1.6,.2,o);return s.add(new Ga(a,.6,1.5)),n.root.add(s),{...n,name:`Arcanist`,sub:`Novice · Lv 1`,attack:`cast`,baseArmR:-.35,update(e,t){s.position.y=1.6+Math.sin(e*1.6)*.05,o.rotation.set(e*.8,e,0),o.scale.setScalar(t===`attack`?1+.4*Math.max(0,Math.sin(e*6.9)):1)}}}function Jp(e=`m`){let t={linen:13616037,rope:9071168,skin:15253658,hair:9067051,wood:8018490,book:5914672};e===`f`&&Object.assign(t,{linen:13941934,rope:10116692});let n=Fp({...Lp(e),c:{legs:t.linen,boots:6965802,torso:t.linen,arms:t.linen,skin:t.skin}});n.legSwing=.3,n.torso.add(G(.72,.28,.5,t.linen,{y:-.1})),n.torso.add(G(.8,.26,.56,t.linen,{y:-.36})),n.torso.add(G(.68,.06,.48,t.rope,{y:.06})),n.torso.add(G(.05,.3,.03,t.rope,{x:-.12,y:-.1,z:.25}));let r=Ip.head;n.head.add(G(.52,.12,.52,t.hair,{y:r+.02})),n.head.add(G(.52,.4,.1,t.hair,{y:r*.6,z:-.24})),e===`f`&&(Bp(n.head,t.hair,{len:.6}),n.head.add(G(.1,.1,.06,16052454,{x:-.27,y:r*.82,z:.06,edges:!1})),n.head.add(G(.04,.04,.07,15253568,{x:-.27,y:r*.82,z:.065,edges:!1})));let i=G(.07,.07,.07,16773312,{emissive:8415792,edges:!1}),a=K(0,r+.35,0,i);n.head.add(a),n.torso.add(K(-.42,-.08,.05,G(.08,.3,.24,t.book),G(.05,.26,.2,15260864,{x:.03,edges:!1})));let o=K(0,0,.04,G(.06,.8,.06,t.wood,{y:.18}),G(.13,.13,.13,15262416,{y:.62,rx:Math.PI/4,rz:Math.PI/4}));return o.rotation.x=.4+Math.PI/2,n.hand(n.armR).add(o),n.armR.rotation.x=-.4,{...n,name:`Oracle`,sub:`Novice · Lv 1`,attack:`cast2`,baseArmR:-.4,update(e,t){a.position.set(Math.cos(e)*.15,r+.35+Math.sin(e*2)*.04,Math.sin(e)*.15),i.scale.setScalar(t===`attack`?1+1.5*Math.max(0,Math.sin(e*6.9)):1)}}}var Yp=(e,t,n)=>e+(t-e)*n,Xp=-.62,Zp=new Nt,Qp=new mn;function $p(e,t){for(let n of e.children)n.userData.handY??=n.position.y<-.3?n.position.y:null,n.userData.handY!==null&&(n.position.y=n.userData.handY+(-t-Xp))}function em(e,t,n,r){let i=t-e.position.x,a=n-e.position.y,o=r-e.position.z,s=Math.hypot(i,a,o)||1,c=Math.max(-1,Math.min(1,i/s)),l=Math.sqrt(1-c*c)||1e-6;e.rotation.set(Math.atan2(-o/s/l,-a/s/l),0,Math.asin(c)),$p(e,s)}function tm(e,t,n){let r=Math.cos(t),i=Math.sin(t),a=.17;em(e.armR,n.x,n.y,n.z),em(e.armL,n.x,n.y-r*a,n.z-i*a),Zp.setFromEuler(Qp.set(t,0,0)),e.wield.quaternion.copy(e.armR.quaternion).invert().multiply(Zp)}var nm=(e,t,n)=>({x:Yp(e.x,t.x,n),y:Yp(e.y,t.y,n),z:Yp(e.z,t.z,n)}),rm={tilt:.5,at:{x:0,y:.3,z:.34}},im={tilt:-.55,at:{x:0,y:.62,z:.12}},am={tilt:1.7,at:{x:0,y:.3,z:.44}};function om(e,t,n,r=t*1.1%1){let i=e.legSwing??.6;if(e.torso.position.y=0,e.torso.rotation.y=0,e.legL.rotation.x=e.legR.rotation.x=0,e.armL.rotation.set(0,0,0),e.armR.rotation.set(e.baseArmR,0,0),n===`idle`)e.torso.position.y=Math.sin(t*2)*.02,e.armL.rotation.x=Math.sin(t*2)*.05,e.armR.rotation.x=e.baseArmR-Math.sin(t*2)*.05;else if(n===`walk`){let n=Math.sin(t*8);e.legL.rotation.x=n*i,e.legR.rotation.x=-n*i,e.armL.rotation.x=-n*.5,e.armR.rotation.x=e.baseArmR+n*.4,e.torso.position.y=Math.abs(Math.cos(t*8))*.05}else if(n===`wave`)e.armR.rotation.set(-2.7,0,Math.sin(t*14)*.35),e.torso.position.y=Math.sin(t*2)*.02;else if(n===`attack`){if(e.attack===`swing`){let t=r<.35?Yp(e.baseArmR,-2.7,r/.35):r<.5?Yp(-2.7,-.1,(r-.35)/.15):Yp(-.1,e.baseArmR,(r-.5)/.5);e.armR.rotation.x=t,e.torso.rotation.y=r<.35?-.25*r/.35:r<.5?Yp(-.25,.3,(r-.35)/.15):Yp(.3,0,(r-.5)/.5),e.armL.rotation.x=-.6}else if(e.attack===`cast`){let t=Math.sin(Math.min(r/.6,1)*Math.PI);e.armR.rotation.x=Yp(e.baseArmR,-1.5,t),e.armL.rotation.x=Yp(0,-1.2,t),e.armL.rotation.z=Yp(0,-.4,t)}else{let t=Math.sin(Math.min(r/.6,1)*Math.PI);e.armR.rotation.x=Yp(e.baseArmR,-2.8,t),e.armL.rotation.x=Yp(0,-2.8,t),e.torso.position.y=t*.05}}if(e.wield&&n!==`wave`){let i=rm,a=rm,o=0,s=0;n===`attack`&&(r<.35?(i=rm,a=im,o=r/.35,s=-.2*o):r<.5?(i=im,a=am,o=(r-.35)/.15,s=Yp(-.2,.25,o)):(i=am,a=rm,o=(r-.5)/.5,s=Yp(.25,0,o)),o=o*o*(3-2*o));let c=nm(i.at,a.at,o);n===`idle`&&(c.y+=Math.sin(t*2)*.015),n===`walk`&&(c.y+=Math.abs(Math.cos(t*8))*.02),e.torso.rotation.y=s,tm(e,Yp(i.tilt,a.tilt,o),c)}else e.wield&&(e.wield.quaternion.identity(),$p(e.armL,.62),$p(e.armR,.62));e.update?.(t,n)}var sm={novice:{vanguard:Kp,arcanist:qp,oracle:Jp},base:{vanguard:Up,arcanist:Wp,oracle:Gp}},cm=.8,lm=e=>e>=10?`base`:`novice`;function um(e,t=1,n=`m`,{lights:r=!1,tier:i=lm(t)}={}){let a=(sm[i][e]??sm.novice.vanguard)(n===`f`?`f`:`m`);if(a.sex=n,r)return a;a.root.scale.setScalar(cm);let o=[];return a.root.traverse(e=>{e.isLight&&o.push(e)}),o.forEach(e=>e.removeFromParent()),a}var q=Ip.head,dm=13214266,fm=13616037,pm=3023384,mm={m:14726284,f:15253658},hm=12884594,gm=13159608,_m={vanguard:{m:5913119,f:8008728},arcanist:{m:2826264,f:14209766},oracle:{m:9067051,f:9067051}},vm={vanguard:{attack:`swing`,baseArmR:-.25,legSwing:.6},arcanist:{attack:`cast`,baseArmR:-.35,legSwing:.35},oracle:{attack:`cast2`,baseArmR:-.4,legSwing:.3}},ym=(e,t)=>{let n=e=>Math.max(0,Math.min(255,Math.round(e*t)));return n(e>>16&255)<<16|n(e>>8&255)<<8|n(e&255)},bm=e=>(e.traverse(e=>{e.castShadow=!1}),e);function xm(e,t,n){let r=n?gm:mm[t],i=Fp({...Lp(t),limbless:!0,eyes:!n,c:{legs:r,boots:n?11054234:hm,torso:r,arms:r,skin:r}});for(let e of[i.legL,i.legR])e.add(G(Ip.legW+.04,.24,Ip.legD+.04,fm,{y:-.11}));if(i.torso.add(G(.66,.1,.46,fm,{y:.04})),t===`f`&&i.torso.add(G(.66,.18,.46,fm,{y:.44})),n)Sm(i,t);else if(t===`f`){let t=_m[e].f;i.hairTop=G(.52,.12,.52,t,{y:q+.02}),i.head.add(i.hairTop),e===`vanguard`?Vp(i.head,t):e===`oracle`?(Bp(i.head,t,{len:.6,joined:!0}),Hp(i.head,t,dm)):Bp(i.head,t,{len:.7,bangs:!1,lockLen:.75,joined:!0})}else i.hairTop=G(.52,.12,.52,_m[e].m,{y:q+.02}),i.head.add(i.hairTop),i.head.add(G(.52,.28,.1,_m[e].m,{y:q*.72,z:-.24}));return i}function Sm(e,t){e.torso.rotation.x=.14,e.head.rotation.x=-.1;for(let t of[-1,1])e.head.add(G(.13,.11,.02,2762288,{x:t*q*.2,y:q*.55,z:q/2+.01,edges:!1})),e.head.add(G(.035,.035,.02,11963135,{x:t*q*.2,y:q*.55,z:q/2+.02,emissive:8014544,edges:!1})),e.head.add(G(.04,.12,.02,9212031,{x:t*q*.33,y:q*.3,z:q/2+.01,edges:!1}));e.head.add(G(.14,.025,.02,5921362,{y:q*.2,z:q/2+.01,edges:!1})),t===`f`?(e.head.add(G(.52,.12,.52,2763310,{y:q+.02})),Bp(e.head,2763310,{len:.8,bangs:!1,lockLen:.85,joined:!0})):e.head.add(G(.26,.12,.05,6974052,{y:.06,z:.25}))}function Cm(e,t,n=!0){if(n)for(let n of[e.armL,e.armR])n.add(G(Ip.armW+.08,.12,Ip.armW+.1,t,{y:-.47}))}var wm={cap(e,t){e.head.add(G(.55,.16,.55,t,{y:q+.02})),e.head.add(G(.5,.05,.14,ym(t,.7),{y:q-.05,z:.27}))},helm(e,t){e.head.add(G(.57,.24,.57,t,{y:q-.02})),e.head.add(G(.59,.05,.59,ym(t,.7),{y:q-.12})),e.head.add(G(.06,.2,.03,t,{y:q*.66,z:.29}))},greathelm(e,t,n){e.head.add(G(.58,.6,.58,t,{y:q*.6})),e.head.add(G(.42,.06,.02,1118481,{y:q*.62,z:.295,edges:!1})),e.head.add(G(.04,.2,.02,1118481,{y:q*.45,z:.295,edges:!1})),e.head.add(G(.6,.06,.6,dm,{y:q+.06})),e.head.add(G(.1,.12,.5,dm,{y:q+.14})),e.head.add(G(.12,.34,.46,n,{y:q+.34,z:-.04}))},hat(e,t){e.head.add(K(0,q,0,G(.82,.06,.82,t),G(.5,.08,.5,dm,{y:.07}),G(.48,.24,.48,t,{y:.22}),G(.32,.24,.32,t,{y:.44,x:.03,rz:-.12}),G(.17,.24,.17,t,{y:.63,x:.1,rz:-.35})))},cowl(e,t){e.head.add(bm(K(0,0,0,G(.6,.1,.6,t,{y:q+.04}),G(.08,.46,.58,t,{x:-.3,y:q*.64}),G(.08,.46,.58,t,{x:.3,y:q*.64}),G(.6,.5,.08,t,{y:q*.6,z:-.3}),G(.62,.06,.1,ym(t,1.4),{y:q+0,z:.28}))))},merchanthat(e,t,n){e.head.add(K(0,q,0,G(.9,.05,.9,t),G(.52,.2,.52,t,{y:.12}),G(.54,.06,.54,n,{y:.05}),G(.04,.36,.1,15261896,{x:.26,y:.24,z:-.08,rz:-.5})))},hood(e,t){e.head.add(bm(K(0,0,0,G(.58,.1,.58,t,{y:q+.03}),G(.6,.42,.08,t,{y:q*.62,z:-.29}),G(.07,.3,.5,t,{x:-.29,y:q*.72}),G(.07,.3,.5,t,{x:.29,y:q*.72}))))},circlet(e,t,n,r,i){e.head.add(G(.53,.05,.53,dm,{y:q*.86})),e.head.add(G(.08,.08,.02,9425151,{y:q*.86,z:.27,emissive:2775680,edges:!1}));let a=K(0,q+.38,0),o=.62,s=.05;for(let[e,n,r,i]of[[0,o/2,o,s],[0,-.62/2,o,s],[o/2,0,s,o],[-.62/2,0,s,o]])a.add(G(r,s,i,t,{x:e,z:n,emissive:t,edges:!1}));e.head.add(a),i(e=>{a.rotation.y=e*.8,a.position.y=q+.38+Math.sin(e*2)*.03})},gravehood(e,t){e.head.add(bm(K(0,0,0,G(.6,.1,.6,t,{y:q+.04}),G(.08,.5,.58,t,{x:-.3,y:q*.62}),G(.08,.5,.58,t,{x:.3,y:q*.62}),G(.6,.56,.08,t,{y:q*.58,z:-.3}),G(.52,.08,.14,ym(t,1.4),{y:q,z:.28,rx:.25}),G(.22,.16,.2,t,{y:q+.1,z:-.28,rx:-.5}))))},crown(e,t,n,r,i){let a=q+.06,o=ym(t,.8);e.head.add(G(.46,.14,.46,n,{y:q+.1})),e.head.add(G(.58,.13,.58,t,{y:a,emissive:ym(t,.25)})),e.head.add(G(.6,.03,.6,o,{y:a-.065})),e.head.add(G(.6,.03,.6,o,{y:a+.065}));let s=[];for(let n=0;n<4;n++){let r=K(0,0,0);r.rotation.y=n*Math.PI/2;for(let[e,n]of[[-.2,.13],[0,.22],[.2,.13]])r.add(G(.07,n,.04,t,{x:e,y:a+.065+n/2,z:.28,emissive:ym(t,.25)})),r.add(G(.05,.05,.05,dm,{x:e,y:a+.075+n,z:.28,rx:Math.PI/4,rz:Math.PI/4})),s.push([r,e,a+.11+n]);let i=[14166074,2783968,2799722,2783968][n];r.add(G(.09,.07,.03,i,{y:a,z:.3,emissive:ym(i,.45),edges:!1})),e.head.add(r)}let c=G(.06,.06,.06,16776160,{emissive:16774064,edges:!1});e.head.add(c),i(e=>{let t=Math.floor(e*3)%s.length,n=e*3%1,[r,i,a]=s[t],o=r.rotation.y;c.position.set(i*Math.cos(o)+.28*Math.sin(o),a,.28*Math.cos(o)-i*Math.sin(o)),c.scale.setScalar(Math.sin(n*Math.PI)*1.2+.01),c.rotation.y=e*4})}},Tm={jerkin(e,t){e.torso.add(G(.68,.62,.48,t,{y:.34})),e.torso.add(G(.68,.22,.48,t,{y:-.08})),e.torso.add(G(.7,.08,.5,pm,{y:.06})),e.torso.add(G(.08,.46,.02,ym(t,.7),{y:.38,z:.25})),Cm(e,fm,!1)},plate(e,t,n){e.torso.add(G(.7,.66,.5,t,{y:.34})),e.torso.add(G(.7,.12,.5,dm,{y:.06})),e.torso.add(G(.36,.5,.04,n,{y:-.1,z:.26})),e.torso.add(G(.66,.2,.48,ym(t,.75),{y:-.08})),Cm(e,ym(t,.85));for(let n of[e.armL,e.armR])n.add(G(.36,.2,.5,t,{y:.04})),n.add(G(.38,.05,.52,dm,{y:-.06}))},knightplate(e,t,n){Tm.plate(e,t,n),e.torso.add(G(.5,.62,.04,n,{y:.24,z:.27})),e.torso.add(G(.08,.4,.02,dm,{y:.34,z:.295})),e.torso.add(G(.3,.08,.02,dm,{y:.42,z:.295})),e.torso.add(G(.66,.95,.05,n,{y:.15,z:-.27})),e.torso.add(G(.6,.35,.05,ym(n,.8),{y:-.45,z:-.3,rx:.1}));for(let n of[e.armL,e.armR])n.add(G(.42,.24,.54,t,{y:.1})),n.add(G(.44,.06,.56,dm,{y:0}))},merchant(e,t,n){e.torso.add(G(.68,.62,.48,t,{y:.34})),e.torso.add(G(.68,.24,.48,t,{y:-.08})),e.torso.add(G(.7,.08,.5,pm,{y:.06})),e.torso.add(G(.5,.95,.03,n,{y:.02,z:.26})),e.torso.add(G(.16,.18,.1,8018474,{x:.3,y:-.04,z:.2})),e.torso.add(G(.06,.06,.06,dm,{x:.3,y:.06,z:.26})),Cm(e,fm,!1)},robe(e,t,n=dm){e.torso.add(G(.68,.66,.48,t,{y:.33})),e.torso.add(G(.7,.5,.5,t,{y:-.22})),e.torso.add(G(.72,.06,.52,n,{y:-.46})),e.torso.add(G(.1,.9,.02,n,{y:.1,z:.25})),Cm(e,t)},starweave(e,t,n,r,i){Tm.robe(e,t,n);let a=[[-.2,.45],[.18,.2],[-.1,-.15],[.22,-.32],[-.25,-.38]].map(([t,n])=>{let r=G(.05,.05,.02,16773312,{x:t,y:n,z:.255,emissive:9075264,edges:!1});return e.torso.add(r),r});i(e=>a.forEach((t,n)=>{t.visible=Math.sin(e*2+n*1.7)>-.6}))},vestment(e,t,n){e.torso.add(G(.68,.66,.48,t,{y:.33})),e.torso.add(G(.72,.2,.5,t,{y:-.06})),e.torso.add(G(.82,.2,.56,t,{y:-.25})),e.torso.add(G(.9,.18,.62,t,{y:-.44})),e.torso.add(G(.1,.85,.02,n,{y:.32,z:.25,rz:.55})),e.torso.add(G(.5,.08,.46,dm,{y:.66})),Cm(e,t)},habit(e,t,n){Tm.vestment(e,t,pm),e.torso.add(G(.36,1,.03,n,{y:.05,z:.27})),e.torso.add(G(.36,.06,.03,dm,{y:.45,z:.285}))},graverobe(e,t,n,r,i){let a=ym(t,.75),o=ym(t,1.4),s=14538434,c=11050888;e.torso.add(G(.68,.66,.48,t,{y:.33})),e.torso.add(G(.7,.52,.5,t,{y:-.24})),[[-.27,.3],[-.11,.42],[.06,.26],[.2,.46],[.3,.33]].forEach(([t,n],r)=>{e.torso.add(G(.13,n,.04,r%2?a:o,{x:t,y:-.5-n/2+.12,z:.25,rz:r%2?.05:-.06})),e.torso.add(G(.13,n*.8,.04,a,{x:-t,y:-.5-n*.4+.12,z:-.25}))}),e.torso.add(G(.72,.1,.52,3813926,{y:-.48})),e.torso.add(G(.06,.85,.02,n,{y:.08,z:.245})),e.torso.add(G(.7,.07,.5,2761754,{y:.02}));for(let t=0;t<3;t++)e.torso.add(G(.3-t*.05,.035,.03,s,{y:.38-t*.08,z:.245}));e.torso.add(G(.04,.24,.03,c,{y:.3,z:.255}));for(let t=0;t<7;t++){let n=(t-3)*.26;e.torso.add(G(.04,.09,.03,s,{x:Math.sin(n)*.24,y:.6-Math.cos(n)*.08,z:.24,rz:n,edges:!1}))}e.armL.add(K(0,.06,0,G(.26,.22,.24,s,{y:.05}),G(.06,.06,.02,1709080,{x:-.06,y:.07,z:.125,edges:!1}),G(.06,.06,.02,1709080,{x:.06,y:.07,z:.125,edges:!1}),G(.18,.06,.2,c,{y:-.08,z:.02}))),Cm(e,t);let l=[];for(let t=0;t<3;t++){let t=G(.08,.12,.08,9109440,{emissive:2792042,edges:!1});t.material=t.material.clone(),t.material.transparent=!0,e.root.add(t),l.push(t)}i(e=>l.forEach((t,n)=>{let r=e*.7+n*Math.PI*2/3;t.position.set(Math.cos(r)*.55,.25+Math.sin(e*1.6+n)*.12,Math.sin(r)*.55),t.material.opacity=.35+.3*Math.sin(e*2.2+n*2)}))}},Em=(e,t,n,r,i,a=0)=>{for(let o of[e.legL,e.legR])o.add(G(Ip.legW+t,n,Ip.legD+r,i,{y:-Ip.legH+n/2-.02+a,z:.02}))},Dm={boots(e,t){Em(e,.05,.2,.08,t)},greaves(e,t){Em(e,.05,.22,.08,t),Em(e,.07,.05,.1,ym(t,.7),.17)},sabatons(e,t){Em(e,.06,.24,.1,t),Em(e,.08,.05,.12,dm,.19)},slippers(e,t){Em(e,.04,.14,.06,t)},sandals(e,t){Em(e,.04,.05,.08,t),Em(e,.05,.03,.09,t,.1)},wraps(e,t){Em(e,.04,.2,.06,t),Em(e,.06,.04,.08,11050888,.13)},winged(e,t,n,r,i){Em(e,.05,.18,.08,t),Em(e,.07,.04,.1,n,.14);let a=[];for(let t of[e.legL,e.legR])for(let e of[-1,1]){let r=K(e*(Ip.legW/2+.05),-Ip.legH+.14,-.06,G(.03,.12,.16,n,{y:.04,z:-.05,rx:-.5,emissive:9075264,edges:!1}));t.add(r),a.push([r,e])}i((e,t)=>{let n=t===`walk`?.5+Math.sin(e*14)*.4:.25+Math.sin(e*2)*.08;for(let[e,t]of a)e.rotation.z=t*n})}},Om=(e,t=0)=>(e.rotation.x=Math.PI/2-t,e),km=(e,t)=>(e.rotation.x=-t+.6,e),Am={greatsword:(e,t=4862752)=>Om(K(0,0,0,G(.09,.42,.09,t,{y:-.02}),G(.12,.12,.12,dm,{y:-.27}),G(.52,.08,.12,dm,{y:.22}),G(.17,1.45,.05,e,{y:1}),G(.05,1.3,.056,ym(e,.75),{y:.95,edges:!1}))),greatstaff:(e,t=5913375)=>km(K(0,0,.05,G(.09,2.2,.09,t,{y:.5}),G(.32,.06,.32,dm,{y:1.56}),G(.26,.26,.26,e,{y:1.8,rx:Math.PI/4,rz:Math.PI/4,emissive:ym(e,.45)}),G(.11,.11,.11,e,{x:.22,y:1.64,emissive:ym(e,.45),edges:!1}),G(.11,.11,.11,e,{x:-.22,y:1.64,emissive:ym(e,.45),edges:!1})),-.35),sword:e=>Om(K(0,0,0,G(.08,.26,.08,4862752),G(.36,.06,.1,dm,{y:.15}),G(.1,.95,.04,e,{y:.66}))),axe:e=>Om(K(0,0,0,G(.08,1,.08,5913375,{y:.35}),G(.06,.34,.36,e,{y:.75,z:.16}),G(.07,.1,.1,ym(e,.6),{y:.75}))),cleaver:e=>Om(K(0,0,0,G(.08,.3,.08,2759700),G(.3,.06,.1,3813424,{y:.17}),G(.26,.9,.05,e,{y:.66}),G(.05,.9,.055,15263976,{x:.1,y:.66}))),saber:e=>Om(K(0,0,0,G(.07,.24,.07,2761792),G(.26,.05,.08,dm,{y:.14}),G(.08,.55,.04,13158616,{y:.44}),G(.08,.45,.04,13158616,{y:.9,x:.05,rz:-.2}),G(.03,.9,.05,e,{y:.66,emissive:e,edges:!1}))),lance:e=>Om(K(0,0,0,G(.08,.4,.08,4862752,{y:-.1}),G(.22,.22,.22,e,{y:.15}),G(.1,1.9,.1,14211288,{y:1.15}),G(.06,.4,.06,15790320,{y:2.25}),G(.02,.22,.3,e,{y:1.7,z:.17}))),mace:e=>Om(K(0,0,0,G(.07,.7,.07,5913375,{y:.28}),G(.18,.18,.18,e,{y:.68}))),hammer:e=>Om(K(0,0,0,G(.07,.75,.07,5913375,{y:.3}),G(.34,.18,.2,e,{y:.72}),G(.1,.06,.06,dm,{y:.6}))),warhammer:e=>Om(K(0,0,0,G(.08,1,.08,3811866,{y:.4}),G(.46,.24,.26,e,{y:.92}),G(.06,.24,.06,dm,{y:1.12}))),flail:e=>Om(K(0,0,0,G(.07,.5,.07,5913375,{y:.18}),G(.04,.12,.04,6974058,{y:.5}),G(.04,.12,.04,6974058,{y:.62,z:.04}),G(.2,.2,.2,e,{y:.78,z:.08,rx:.8,ry:.8}))),knuckles:e=>K(0,-.02,0,G(.26,.12,.26,e),G(.28,.05,.08,dm,{y:.06,z:.1})),wand:e=>km(K(0,0,.03,G(.05,.6,.05,7031339,{y:.2}),G(.1,.1,.1,e,{y:.52,rx:Math.PI/4,rz:Math.PI/4,emissive:ym(e,.4)})),-.35),staff:e=>km(K(0,0,.05,G(.07,1.9,.07,5913375,{y:.45}),G(.2,.2,.2,e,{y:1.45,rx:Math.PI/4,rz:Math.PI/4,emissive:ym(e,.35)})),-.35),rod:e=>km(K(0,0,.05,G(.07,1.7,.07,3811866,{y:.4}),G(.18,.06,.18,dm,{y:1.2}),G(.22,.22,.22,e,{y:1.38,emissive:e,edges:!1})),-.35),lumen:e=>km(K(0,0,.05,G(.07,1.8,.07,15262416,{y:.42}),G(.14,.34,.14,e,{y:1.45,emissive:e,edges:!1}),G(.24,.05,.24,dm,{y:1.26})),-.4),crozier:e=>km(K(0,0,.05,G(.07,1.9,.07,dm,{y:.45}),G(.07,.3,.07,dm,{y:1.45,z:.1,rx:.6}),G(.07,.2,.07,dm,{y:1.52,z:.24,rx:2.2}),G(.12,.12,.12,e,{y:1.32,emissive:ym(e,.5),edges:!1})),-.4),bonestaff:e=>km(K(0,0,.05,G(.08,1.7,.08,11050888,{y:.4}),G(.13,.12,.13,14538434,{y:-.45}),G(.1,.3,.1,2761754,{y:.15}),G(.15,.12,.15,14538434,{y:1.22}),G(.26,.24,.24,14538434,{y:1.42}),G(.22,.08,.2,11050888,{y:1.27,z:.02}),G(.06,.06,.02,e,{x:-.06,y:1.44,z:.125,emissive:ym(e,.4),edges:!1}),G(.06,.06,.02,e,{x:.06,y:1.44,z:.125,emissive:ym(e,.4),edges:!1})),-.35)},jm=new Set([`greatsword`,`greatstaff`]),Mm={buckler:(e,t)=>e.armL.add(K(-.15,-.58,.04,G(.05,.42,.42,t),G(.06,.42,.07,7171955,{x:-.01}),G(.06,.07,.42,7171955,{x:-.01}))),kite:(e,t,n)=>e.armL.add(K(-.17,-.52,.05,G(.06,.84,.7,t),G(.08,.74,.6,n,{x:-.02}),G(.03,.3,.3,dm,{x:-.07,rx:Math.PI/4}))),aegis:(e,t)=>e.armL.add(K(-.17,-.55,.05,G(.06,.66,.66,t),G(.07,.3,.3,16773296,{x:-.02,rx:Math.PI/4,emissive:6969888}))),tome:(e,t)=>e.hand(e.armL).add(K(0,-.05,.12,G(.1,.34,.28,t),G(.06,.3,.24,15985362,{x:.04,edges:!1}))),grimoire:(e,t)=>e.hand(e.armL).add(K(0,-.05,.12,G(.12,.38,.32,t),G(.06,.34,.28,15985362,{x:.05,edges:!1}),G(.13,.1,.1,11963135,{emissive:4860554,edges:!1}))),icon:(e,t)=>e.hand(e.armL).add(K(0,-.08,.1,G(.05,.36,.28,t),G(.06,.24,.18,dm,{x:-.01})))},Nm=e=>`${e.occ}|${e.sex}|${e.job}|${e.job3??``}|${[`main`,`off`,`head`,`armor`,`boots`,`neck`].map(t=>e.equip?.get?.(t)??``).join(`|`)}`;function Pm(e){let t=e.job===`necromancer`,n=e.sex===`f`?`f`:`m`,r=xm(e.occ,n,t),i=[],a=e=>i.push(e),o=t=>{if(e.outfit?.[t])return e.outfit[t];let n=U[e.equip?.get?.(t)];return n?.look?n:null},s=(e,t,...i)=>{let s=o(t);s&&e[s.look]?.(r,s.color,s.accent,n,a,...i)};s(Tm,`armor`),s(Dm,`boots`),s(wm,`head`);let c=o(`head`);c&&![`circlet`,`crown`].includes(c.look)&&r.hairTop?.removeFromParent(),s(Mm,`off`);let l=o(`main`);if(l&&jm.has(l.look)){let e=Am[l.look](l.color,l.accent);e.rotation.set(0,0,0),e.position.set(0,0,0),r.wield=K(0,0,0,e),r.hand(r.armR).add(r.wield)}else l&&r.hand(r.armR).add(Am[l.look](l.color,l.accent));r.root.userData.greatsword=l?.look===`greatsword`;let u=o(`neck`);if(u&&(r.torso.add(G(.03,.22,.02,3813416,{y:.56,z:.255,edges:!1})),r.torso.add(G(.1,.1,.04,u.color,{y:.42,z:.26,emissive:ym(u.color,.25),edges:!1}))),e.job3===`sword_saint`){if(!c){r.head.add(G(.6,.08,.6,15527666,{y:q*.72,edges:!1}));for(let e of[-1,1])r.head.add(G(.06,.26,.03,15527666,{x:e*.07,y:q*.6,z:-.31,edges:!1}))}r.torso.add(G(.7,.12,.5,8160140,{y:.12})),r.torso.add(G(.1,.3,.05,8160140,{x:.18,y:-.05,z:.25,edges:!1}))}if(e.job3===`saint_of_dawn`){for(let e of[-1,1])r.torso.add(G(.1,.5,.04,16052454,{x:e*.12,y:.3,z:.255,edges:!1})),r.torso.add(G(.03,.5,.045,14200906,{x:e*.175,y:.3,z:.256,edges:!1}));r.head.add(G(.62,.62,.03,15253584,{y:q*.15,z:-q/2-.08,emissive:6965776,edges:!1})),r.head.add(G(.42,.42,.035,16773296,{y:q*.15,z:-q/2-.085,emissive:9071136,edges:!1}))}e.outfit?.beard&&(r.head.add(G(.4,.36,.08,e.outfit.beard,{y:q*.12,z:q/2+.03})),r.head.add(G(.24,.2,.08,e.outfit.beard,{y:-q*.22,z:q/2+.02})));let d=vm[e.occ]??vm.vanguard;return r.armR.rotation.x=d.baseArmR,r.root.scale.setScalar(cm),{...r,legSwing:d.legSwing,baseArmR:d.baseArmR,attack:t?`raise`:d.attack,update(e,t){for(let n of i)n(e,t)}}}var Fm=`application/x-nc-skill`,Im=null,Lm=e=>{Im=e},Rm=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`],zm={attack:`Attack`,wave:`Wave`},Bm=()=>[`attack`,...Array(Rm.length-2).fill(null),`wave`],Vm=e=>`nc.bar3.${e}`,Hm=e=>{try{return JSON.parse(localStorage.getItem(Vm(e.occ)))}catch{return null}};function Um(e){let t=e.occ;try{let n=JSON.parse(localStorage.getItem(Vm(t)));if(Array.isArray(n)&&n.length===Rm.length)return n.map(n=>zm[n]||gu(t,n)&&!du(e,n)?n:null)}catch{}return Bm()}var Wm=(e,t)=>!!zm[t]||(gu(e,t)?mu(gu(e,t)):!1);function Gm(e,{onUse:t,onChange:n}){let r=null,i=[],a=!1,o=[];function s(){try{localStorage.setItem(Vm(r),JSON.stringify(i))}catch{}n?.()}function c(e,t){if(t){let e=i.indexOf(t);e>=0&&(i[e]=null)}i[e]=t,l(),s()}function l(){e.innerHTML=``,o.length=0;let n=Gl[r].resource;i.forEach((u,d)=>{let f=u&&!zm[u]?gu(r,u):null,p=document.createElement(`div`);if(p.className=`slot`+(u?``:` empty`),p.innerHTML=`<i class="cd"></i><kbd>${Rm[d]}</kbd><span class="nm">${u?zm[u]??f.name:``}</span><b class="cdn"></b>`,f){let e=f.use&&yu(f.use.cd,1);p.title=`${f.name}: ${f.desc[0]}`+(f.use?`\n${f.use.hp?`${f.use.hp}% of max HP`:`${bu(f,1)} ${n}`}${e?` · ${e} s cooldown`:``}`:`
No combat effect yet`)+`
Drag to move · drag off or right-click to clear`}else p.title=u?`${zm[u]}\nDrag to move · drag off or right-click to clear`:`Empty: drag a skill here from Skills (K)`;let m={key:Rm[d],index:d,entry:u,el:p,def:f,cdEl:p.querySelector(`.cd`),cdText:p.querySelector(`.cdn`)};o.push(m),p.onclick=()=>{u&&t(m)},p.oncontextmenu=e=>{e.preventDefault(),u&&c(d,null)},p.draggable=!!u,p.ondragstart=e=>{a=!1,Im={from:`slot`,index:d},e.dataTransfer.setData(Fm,JSON.stringify(Im)),e.dataTransfer.effectAllowed=`move`,p.classList.add(`dragging`)},p.ondragend=()=>{Im=null,p.classList.remove(`dragging`),a||c(d,null)},p.ondragover=e=>{(Im||e.dataTransfer.types.includes(`application/x-nc-skill`))&&(e.preventDefault(),p.classList.add(`over`))},p.ondragleave=()=>p.classList.remove(`over`),p.ondrop=e=>{e.preventDefault(),p.classList.remove(`over`),a=!0;let t=Im;if(!t)try{t=JSON.parse(e.dataTransfer.getData(Fm))}catch{return}if(t.from===`slot`){if(t.index===d)return;[i[d],i[t.index]]=[i[t.index],i[d]],l(),s()}else t.from===`panel`&&Wm(r,t.id)&&c(d,t.id)},e.appendChild(p)})}return{slots:o,setPlayer(e){r=e.occ,i=Um(e);for(let t of tu[e.job3]?.skills??[]){let n=i.indexOf(null);mu(t)&&e.skills.get(t.id)&&!i.includes(t.id)&&n>=0&&(i[n]=t.id)}l(),i.some((t,n)=>t!==Hm(e)?.[n])&&s()},reset(){i=Bm(),l(),s()},layout:()=>[...i],assign(e,t){Wm(r,t)&&c(e,t)},slotForKey(e){let t=o[Rm.indexOf(e)];return t?.entry?t:null},slotFor(e){return o.find(t=>t.entry===e)??null}}}var Km=e=>document.getElementById(e),J=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),qm=()=>{},Jm=null,Ym=()=>{},Xm={barLayout:()=>[],assignSlot:()=>{}},Zm={char:`charPanel`,skills:`skillPanel`,job:`jobPanel`,shop:`shopPanel`,oath3:`oath3Panel`},Qm={char:!1,skills:!1,job:!1,shop:!1,oath3:!1},$m=!1,eh=!1,th=null,nh=-1,rh=-1,ih=0,ah=e=>e.title||tu[e.job3]?.name||Ql[e.job]?.name||Gl[e.occ].name;function oh(e,t,n=Xm){qm=e,Ym=t,Xm=n,Km(`charBtn`).onclick=e=>{_h(`char`),e.currentTarget.blur()},Km(`skillBtn`).onclick=e=>{_h(`skills`),e.currentTarget.blur()};for(let e of document.querySelectorAll(`.panelClose`))e.onclick=()=>_h(e.dataset.panel,!1);Km(`charPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-at]`),n=e.target.closest(`[data-slot]`);t?(qm(`equip`,{at:Number(t.dataset.at)}),Ym()):n&&(qm(`unequip`,{slot:n.dataset.slot}),Ym()),nh=-1}),Km(`charPanel`).addEventListener(`contextmenu`,e=>{let t=e.target.closest(`[data-at]`);if(!t)return;e.preventDefault();let n=Number(t.dataset.at);nh===n?(qm(`discard`,{at:n}),nh=-1,Ym()):nh=n,kh(Jm)}),Km(`shopPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-buy]`),n=e.target.closest(`[data-sell]`);if(t&&!t.classList.contains(`poor`)&&(qm(`buy`,{item:t.dataset.buy}),Ym()),n){let e=Number(n.dataset.sell);rh===e?(qm(`sell`,{at:e}),rh=-1):rh=e,Ym(),Bh(Jm)}}),Km(`skillPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`.sk.learnable`);t&&(qm(`learn`,{skill:t.dataset.id}),Ym())}),Km(`jobPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-job]`);t&&!t.disabled&&(Ym(),th===t.dataset.job?(qm(`changeJob`,{job:t.dataset.job}),th=null):th=t.dataset.job,Ih(Jm))}),Km(`oath3Panel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-job3]`);t&&!t.disabled&&(Ym(),th===t.dataset.job3?(qm(`changeJob3`,{job:t.dataset.job3}),th=null):th=t.dataset.job3,Rh(Jm))}),Km(`skillPanel`).addEventListener(`dragstart`,e=>{let t=e.target.closest(`[data-drag]`);t&&(Lm({from:`panel`,id:t.dataset.drag}),e.dataTransfer.setData(Fm,JSON.stringify({from:`panel`,id:t.dataset.drag})),e.dataTransfer.effectAllowed=`copy`,$m=!0)}),Km(`skillPanel`).addEventListener(`dragend`,()=>{Lm(null),$m=!1,Dh(Jm)}),Km(`skillPanel`).addEventListener(`contextmenu`,e=>{let t=e.target.closest(`[data-drag]`);t&&(e.preventDefault(),sh(t.dataset.drag,e.clientX,e.clientY))}),addEventListener(`pointerdown`,e=>{e.target.closest(`#slotPicker`)||ch()},!0),addEventListener(`keydown`,e=>{e.key===`Escape`&&ch()})}function sh(e,t,n){ch();let r=Xm.barLayout(),i=e=>e?e===`attack`?`Attack`:e===`wave`?`Wave`:lh(e)?.name??e:`empty`,a=document.createElement(`div`);a.id=`slotPicker`,a.innerHTML=`<div class="spHead">Put ${J(i(e))} on key…</div>`+Rm.map((t,n)=>`<button data-i="${n}" class="${r[n]===e?`cur`:``}"><kbd>${t}</kbd><span>${J(i(r[n]))}</span></button>`).join(``),a.onclick=t=>{let n=t.target.closest(`[data-i]`);n&&(Xm.assignSlot(Number(n.dataset.i),e),Ym(),ch())},document.body.append(a);let o=a.getBoundingClientRect();a.style.left=`${Math.min(t,innerWidth-o.width-8)}px`,a.style.top=`${Math.min(n,innerHeight-o.height-8)}px`}function ch(){document.getElementById(`slotPicker`)?.remove()}var lh=e=>[...Object.values(Zl).flat(),...Object.values(Ql).flatMap(e=>e.skills)].find(t=>t.id===e),uh=new Set([`arcanist`,`oracle`,...Object.entries(Ql).filter(([,e])=>e.occ!==`vanguard`).map(([e])=>e)]);function dh(e){let t=e.slot===`main`?uh.has(e.for)?`🪄`:e.twoHand?`⚔️`:`🗡️`:e.slot===`off`?/tome|grimoire|codex|icon/i.test(e.name)?`📖`:`🛡️`:{head:`🪖`,armor:`👕`,boots:`👢`,neck:`📿`,ring:`💍`}[e.slot];return`<span class="slotIco" title="${J(ad(e))}">${t}</span>`}function fh(e,t){let n=U[t];if(!n||fd(e,t))return 0;let r=t=>U[e.equip.get(t)]?od(U[e.equip.get(t)]):0,i=n.slot===`ring`?Math.min(r(`ring1`),r(`ring2`)):r(n.slot),a=od(n)-i;return a>.05?Math.round(a*10)/10:0}var ph=e=>e?`<span class="better" title="Better than what you wear there (+${e})">▲</span>`:``,mh=()=>Qm.char||Qm.skills||Qm.job||Qm.shop||Qm.oath3,hh=e=>Qm[e];function gh(){for(let e of Object.keys(Zm))_h(e,!1)}function _h(e,t=!Qm[e]){Qm[e]=t,Km(Zm[e]).classList.toggle(`hidden`,!t),(e===`job`||e===`oath3`)&&(th=null),e===`shop`&&(rh=-1),e===`char`&&t&&(ih=0,nh=-1),t&&Dh(Jm)}function vh(){Qm.char||(ih+=1),Dh(Jm)}var yh=(e,t,n=``)=>{let r=U[t],i=fd(e,t);return`${r.name}\n${ad(r)} · ${nd(r)} · Lv ${r.lv}\n${id(r)}${i?`\n${i}`:``}${n}`};function bh(e){let t=e.job===`necromancer`?`#c8ccb8`:`#e0b48c`,n=t,r=(t,n)=>Qu(U[e.equip.get(t)])??n,i=r(`head`,null),a=r(`main`,`#c8c0b0`);return`<svg class="dollFig" viewBox="0 0 100 170" aria-hidden="true">
    <rect x="36" y="8" width="28" height="28" rx="3" fill="#d8b48c"/>
    ${i?`<rect x="33" y="4" width="34" height="13" rx="3" fill="${i}"/>`:``}
    ${e.equip.get(`neck`)?`<rect x="46" y="44" width="8" height="8" fill="${r(`neck`)}"/>`:``}
    <rect x="30" y="38" width="40" height="52" rx="4" fill="${r(`armor`,t)}"/>
    <rect x="16" y="40" width="13" height="44" rx="4" fill="${r(`armor`,t)}"/>
    <rect x="71" y="40" width="13" height="44" rx="4" fill="${r(`armor`,t)}"/>
    <rect x="34" y="90" width="14" height="50" rx="3" fill="${n}"/>
    <rect x="52" y="90" width="14" height="50" rx="3" fill="${n}"/>
    <rect x="32" y="84" width="36" height="16" rx="2" fill="#cfc3a5"/>
    ${e.equip.get(`boots`)?`<rect x="31" y="132" width="18" height="18" rx="2" fill="${r(`boots`)}"/><rect x="51" y="132" width="18" height="18" rx="2" fill="${r(`boots`)}"/>`:``}
    ${e.job3===`sword_saint`?`${i?``:`<rect x="35" y="14" width="30" height="5" fill="#eceef2"/><rect x="62" y="16" width="4" height="14" fill="#eceef2"/>`}
      <rect x="30" y="80" width="40" height="7" fill="#7c838c"/><rect x="54" y="84" width="6" height="16" fill="#7c838c"/>`:``}
    ${e.equip.get(`main`)?`<rect x="9" y="20" width="5" height="76" rx="2" fill="${a}"/>`:``}
    ${e.equip.get(`off`)?`<rect x="84" y="56" width="14" height="26" rx="3" fill="#7a6a52"/>`:``}
  </svg>`}function xh(e){let t=t=>{let n=e.equip.get(t),r=U[n],i=Qu(r);return`<div class="gearSlot g-${t}${r?` full`:``}"${r?` data-slot="${t}" title="${J(yh(e,n,`
Click to take off`))}"`:``}>
      <span>${Xu[t]}</span><b>${r?`${dh(r)}${i?`<i style="background:${i}"></i>`:``}${J(r.name)}`:`—`}</b>${r?`<small>${J(id(r))}</small>`:``}</div>`},n=`<div class="dollSide">${[`head`,`main`,`armor`,`ring1`].map(t).join(``)}</div>${bh(e)}
    <div class="dollSide">${[`neck`,`off`,`boots`,`ring2`].map(t).join(``)}</div>`,r=[...e.bag],i=Array.from({length:24},(t,n)=>{let i=r[n],a=U[i];if(!a)return`<div class="bagCell empty"></div>`;let o=fd(e,i),s=o?/^Needs Lv/.test(o)?`later`:`no`:`ok`,c=fh(e,i),l=yh(e,i,(c?`\nBetter than what you wear there (+${c})`:``)+(nh===n?`
Right-click again to throw it away`:o?``:`
Click to wear · right-click twice to throw away`)),u=Qu(a);return`<div class="bagCell ${s}${c?` upgrade`:``}${nh===n?` discard`:``}" data-at="${n}" title="${J(l)}">
      ${ph(c)}<b>${dh(a)}${u?`<i style="background:${u}"></i>`:``}${J(a.name)}</b><small>Lv ${a.lv} · ${J(ad(a))}</small></div>`}).join(``);return`<div class="gearCols">
      <div><h4>Equipment <small>click to take off</small></h4><div class="doll">${n}</div></div>
      <div><h4>Bag <small>${r.length} / 24 · click to wear</small></h4><div class="bag">${i}</div></div>
    </div>`}var Sh={};function Ch(e,t){Sh[e]!==t&&(Km(e).innerHTML=t,Sh[e]=t)}function wh(e){e!==eh&&(eh=e,Dh(Jm))}var Th=e=>[...Zl[e.occ],...Ql[e.job]?.skills??[],...tu[e.job3]?.skills??[]],Eh=e=>Th(e).filter(t=>t.lv<=e.level&&!Cu(e,t.id)).length;function Dh(e){e&&(Jm=e,Oh(`skillBtn`,Eh(e)),Oh(`charBtn`,ih),Qm.char&&kh(e),Qm.skills&&!$m&&Fh(e),Qm.job&&Ih(e),Qm.oath3&&Rh(e),Qm.shop&&Bh(e))}function Oh(e,t){let n=Km(e).querySelector(`.badge`);n.textContent=t>0?t:``,Km(e).classList.toggle(`pts`,t>0)}function kh(e){let t=Gl[e.occ],n=Fd(e,e.skills),r=(Kl[e.occ].every*n.swingMul).toFixed(2),i=Ed(e),a=Cd.map(t=>{let r=n.stats[t]-e[t];return`<tr><th>${wd[t]}${n.main.includes(t)?` <i>main</i>`:``}</th>
      <td>${n.stats[t]}${r?` <small>(+${r})</small>`:``}</td>
      <td class="grow">${i[t]?`+${i[t]}/lv`:``}</td></tr>`}).join(``),o=e.level>=30?`Max level`:`${e.exp} / ${e.expNext}`;Ch(`charBody`,`
    <div class="charHead"><b>${J(e.name)}</b> · Lv ${e.level} ${J(ah(e))} · ${J(e.subtitle||(e.job?`${t.name} line`:`Unsworn`))}<br><small>EXP ${o} · Skill points ${e.points??0} · <span class="shopGold">${e.gold??0} gold</span></small></div>
    <div class="charCols">
      <div><h4>Stats <small>grow by themselves each level</small></h4><table class="stats">${a}</table></div>
      <div><h4>Derived</h4><table class="stats">
        <tr><th>Max HP</th><td>${n.hpMax}</td></tr>
        ${n.resMax?`<tr><th>Max ${t.resource}</th><td>${n.resMax}</td></tr>`:``}
        <tr><th>Attack damage</th><td>${n.dmgMin}–${n.dmgMax}</td></tr>
        <tr><th>Swing time</th><td>${r} s</td></tr>
        <tr><th>Critical hit</th><td>${Math.round(n.crit*100)}%</td></tr>
        <tr><th>Defense</th><td>${n.def} <small>(−${Math.round(100-1e4/(100+n.def))}% damage)</small></td></tr>
        <tr><th>Reach</th><td>${ql(e)} tiles</td></tr>
      </table></div>
    </div>
    ${xh(e)}`)}var Ah={active:`Active`,passive:`Passive`,upgrade:`Upgrade`,aura:`Aura`,capstone:`Capstone`},jh=e=>e.capstone?`Capstone`:Ah[e.type];function Mh(e,t,n){let r=nu[t.byUse.counts],i=e.use?.get?.(t.id)??0;if(n>=t.max)return`<p class="use">Mastered · ${Math.floor(i/r.per)} ${J(r.what.split(`:`)[0])}</p>`;let a=n>1?t.byUse.at[n-2]:0,o=t.byUse.at[n-1],s=Math.max(0,Math.min(100,100*(i-a)/(o-a)));return`<p class="use">Rank ${n+1} at ${Math.floor(i/r.per)} / ${o/r.per} ${J(r.what)}</p>
    <div class="useBar"><i style="width:${s.toFixed(1)}%"></i></div>`}function Nh(e,t){let n=e.skills.get(t.id)??0,r=Cu(e,t.id),i=n>=t.max?`maxed`:t.byUse?n?`waiting`:`locked`:r?/skill points/.test(r)?`waiting`:`locked`:n||eh?`learnable`:`waiting`,a=t.byUse?``:n<t.max&&i!==`locked`?`<p class="price${i===`learnable`?` ok`:``}">${n?`Rank ${n+1}`:`Learn`}: 1 skill point${!n&&!eh?` · at the Wise Man`:``}</p>`:``,o=Array.from({length:t.max},(e,t)=>`<i class="${t<n?`on`:``}"></i>`).join(``),s=n>1?`<p class="now">Rank ${n}: ${J(t.desc[n-1])}</p>`:``,c=(n&&n<t.max?`<p class="next">Next: ${J(t.desc[n])}</p>`:``)+(t.byUse&&n?Mh(e,t,n):``),l=i===`locked`&&!/^Needs Lv/.test(r)&&!t.job?`<p class="why">${J(r)}</p>`:``,u=t.live?``:`<em title="You can learn it now; its effect is coming in a later build">not in combat yet</em>`,d=t.use&&yu(t.use.cd,n||1),f=t.use?.hp?`${t.use.hp}% of max HP`:t.use?`${bu(t,n||1)} ${Gl[e.occ].resource}`:``,p=t.use?`<p class="cost">${f}${d?` · ${d} s cooldown`:``}</p>`:``,m=mu(t)?` draggable="true" data-drag="${t.id}"`:``,h=[i===`learnable`?n?`Click to rank it up`:`Click to learn`:t.byUse?n?`Ranks up as you use it`:`Comes on its own at Lv ${t.lv}`:!r&&`Learn it from the Wise Man by the Crown Plinth`,m&&`Drag onto the skill bar, or right-click to pick a key`].filter(Boolean).join(` · `);return`<div class="sk ${i}${m?` barable`:``}" data-id="${t.id}"${m} title="${h}">
    <div class="skTop"><b>${J(t.name)}</b><span class="pips">${o}</span></div>
    <div class="skType">${jh(t)}</div>
    <p>${J(t.desc[0])}</p>${s}${p}${c}${a}${l}${u}</div>`}function Ph(e,t){let n=t.filter(t=>t.lv<=e.level&&!du(e,t.id)),r=t.find(t=>t.lv>e.level);return`<div class="coreRow">${n.map(t=>Nh(e,t)).join(``)}</div>`+(r?`<p class="skNext">Next: ${J(r.name)} at Lv ${r.lv}</p>`:``)}function Fh(e){let t=Gl[e.occ],n=e.job?`<h4>2nd class · ${J(Ql[e.job].name)}</h4>${Ph(e,Ql[e.job].skills)}`:e.level>=15?`<p class="skNext">Lv 15: talk to the Oathkeeper by the Crown Plinth to choose your 2nd class.</p>`:``,r=tu[e.job3],i=r?`<h4>3rd class · ${J(r.name)} <small>each comes on its own at its level, and ranks 1–5 as you use it</small></h4>${Ph(e,r.skills)}`:e.level>=25&&lu(e.job).length?`<p class="skNext">Lv 25: talk to the Crownwarden on the plaza to swear your 3rd oath.</p>`:``;Ch(`skillBody`,`
    <div class="skHead">Skill points: <b class="${Eh(e)?`pts`:``}">${e.points??0}</b> · ${eh?`<span class="pts">The Wise Man will teach you: click a skill to learn it or rank it up.</span>`:`One comes with each level. Click a skill you know to rank it up anywhere; new skills are learned from the Wise Man by the Crown Plinth.`}
      New skills open up as you level · Drag actives onto the skill bar (keys 1–0), or right-click one to pick a key.</div>
    <h4>Actions</h4>
    <div class="actRow">
      <div class="sk barable act" draggable="true" data-drag="attack" title="Drag onto the skill bar"><b>Attack</b><div class="skType">Combat mode</div></div>
      <div class="sk barable act" draggable="true" data-drag="wave" title="Drag onto the skill bar"><b>Wave</b><div class="skType">Emote</div></div>
    </div>
    ${r?.abandons.length?`<p class="skNext">The ${J(r.name)} gave up every ${J(t.name)} and ${J(Ql[e.job].name)} skill with the oath.</p>`:`<h4>1st class · ${J(t.name)}</h4>${Ph(e,Zl[e.occ])}
    ${n}`}
    ${i}`)}function Ih(e){let t=Gl[e.occ],n;if(e.job)n=`<p class="npcSay">“You walk the ${J(tu[e.job3]?.name??Ql[e.job].name)}'s road now.${e.job3?``:` At Lv 25, the Crownwarden swears the third oaths.`}”</p>`;else{let r=cu(e.occ).filter(t=>!wu(e,t.id)),i=cu(e.occ).filter(e=>e.locked).map(e=>`<div class="branch job locked"><h4>${J(e.name)}</h4><div class="branchSub">Not open yet</div></div>`).join(``);if(!r.length)n=`<p class="npcSay">“Every ${J(t.name)} chooses a road at Lv 15. You are Lv ${e.level}. Come back when you are ready.”</p>`;else{let e=r.map(e=>{let t=th===e.id,n=Object.entries(e.growth).map(([e,t])=>`${wd[e]} +${t}`).join(`, `);return`<div class="branch job"><h4>${J(e.name)}</h4><div class="branchSub">${J(e.role)}</div>
          <ul>${e.skills.map(e=>`<li><span>Lv ${e.lv}</span> ${J(e.name)} <small>${jh(e)}</small></li>`).join(``)}</ul>
          <p class="growLine">Each level: ${n}</p>
          <button data-job="${e.id}" class="${t?`sure`:``}">${t?`Yes, become a ${J(e.name)}`:`Become a ${J(e.name)}`}</button>
          ${t?`<p class="why">This is permanent. Press again to swear the oath.</p>`:``}</div>`}).join(``);n=`<p class="npcSay">“You have grown strong, ${J(t.name)}. Choose your road. The oath is for life.”</p>
        <div class="branches">${e}${i}</div>
        <p class="skHead">You keep all your ${J(t.name)} skills.</p>`}}Ch(`jobBody`,n)}var Lh=3;function Rh(e){let t,n=lu(e.job);if(e.job3){let n=tu[e.job3],r=n.skills.find(t=>t.lv>e.level);t=`<p class="npcSay">“You walk the ${J(n.name)}'s road. Its skills come to you as you grow, and sharpen as you use them.${r?` ${J(r.name)} comes at Lv ${r.lv}.`:``}”</p>`}else if(!e.job||!n.length)t=`<p class="npcSay">“${e.job?`The ${J(Ql[e.job].name)}'s third roads are not open yet.`:`Choose your 2nd class first, at the Oathkeeper.`} Come back when they are.”</p>`;else if(e.level<25)t=`<p class="npcSay">“The third oaths are sworn at Lv 25. You are Lv ${e.level}. Come back when you are ready.”</p>`;else{let r=n.map(t=>{let n=th===t.id,r=Tu(e,t.id),i=Object.entries(t.growth).map(([e,t])=>`${wd[e]} +${t}`).join(`, `),a=t.abandons.length?`every ${Gl[e.occ].name} and ${Ql[e.job].name} skill`:``;return`<div class="branch job"><h4>${J(t.name)}</h4><div class="branchSub">${J(t.role)}</div>
        <ul>${t.skills.map(e=>`<li><span>Lv ${e.lv}</span> ${J(e.name)} <small>${jh(e)}</small></li>`).join(``)}</ul>
        <p class="growLine">Each level: ${i}${t.noMp?` · No MP: its skills cost HP`:``}</p>
        ${a?`<p class="why">Gives up: ${J(a)} (their skill points come back)</p>`:``}
        ${r?`<p class="why">${J(r)}</p>`:``}
        <button data-job3="${t.id}" class="${n?`sure`:``}"${r?` disabled`:``}>${n?`Yes, become a ${J(t.name)}`:`Become a ${J(t.name)}`}</button>
        ${n?`<p class="why">This is permanent. Press again to swear the oath.</p>`:``}</div>`}).join(``),i=Array.from({length:Math.max(0,Lh-n.length)},()=>`<div class="branch job locked"><h4>A road not yet walked</h4><div class="branchSub">Not open yet</div></div>`).join(``);t=`<p class="npcSay">“You have reached the edge of what a ${J(Ql[e.job].name)} can be. Swear the third oath, and the road you choose will shape you.”</p>
      <div class="branches">${r}${i}</div>
      <p class="skHead">3rd-class skills cost no skill points: each comes on its own at its level, and grows as you use it.</p>`}Ch(`oath3Body`,t)}var zh=[[`Weapons`,[`main`]],[`Off hand`,[`off`]],[`Head`,[`head`]],[`Armor`,[`armor`]],[`Boots`,[`boots`]],[`Necklaces`,[`neck`]],[`Rings`,[`ring`]]];function Bh(e){let t=e.gold??0,n=e.bag.length>=24,r=dd.filter(t=>td(U[t],e.occ,e.job,e.job3)),i=r=>{let i=U[r],a=sd(r),o=Qu(i),s=fd(e,r),c=a>t||n,l=`${yh(e,r)}\n${n?`Your bag is full`:a>t?`You need ${a-t} more gold`:`Click to buy for ${a} gold`}`,u=fh(e,r);return`<div class="ware${c?` poor`:``}${s?` later`:``}${u?` upgrade`:``}" data-buy="${r}" title="${J(l+(u?`\nBetter than what you wear there (+${u})`:``))}">
      ${ph(u)}<b>${dh(i)}${o?`<i style="background:${o}"></i>`:``}${J(i.name)}</b>
      <small>Lv ${i.lv} · ${J(ad(i))}</small><span class="st">${J(id(i))}</span><br><span class="price">${a} gold</span></div>`},a=zh.map(([e,t])=>{let n=r.filter(e=>t.includes(U[e].slot));return n.length?`<h4>${e}</h4><div class="shopGrid">${n.map(i).join(``)}</div>`:``}).join(``),o=e.bag.map((t,n)=>{let r=U[t];if(!r)return``;let i=rh===n,a=Qu(r),o=fh(e,t);return`<div class="ware${i?` sure`:``}${o?` upgrade`:``}" data-sell="${n}" title="${J(yh(e,t,(o?`\nBetter than what you wear there (+${o})`:``)+(i?`
Click again to sell it`:`
Click to sell`)))}">
      ${ph(o)}<b>${dh(r)}${a?`<i style="background:${a}"></i>`:``}${J(r.name)}</b>
      <small>Lv ${r.lv} · ${J(ad(r))}</small><span class="price">${i?`Click again: sell for ${cd(t)} gold`:`Sells for ${cd(t)} gold`}</span></div>`}).join(``);Ch(`shopBody`,`
    <p class="npcSay">“Steel for the road, staves for the learned, and a trinket or two. Gold only, mind.”</p>
    <div class="skHead">You have <span class="shopGold">${t} gold</span> · Bag ${e.bag.length} / 24 · Monsters drop gold when they fall.</div>
    <div class="shopCols">
      <div>${a}</div>
      <div><h4>Sell <small>a quarter of the price · take worn things off first (C)</small></h4>
        <div class="shopGrid">${o||`<p class="shopNote">Your bag is empty.</p>`}</div></div>
    </div>`)}function Vh(){let e=new R,t=K(0,0,0,G(.62,.5,.62,5208628,{y:.25}),G(.66,.14,.66,3957032,{y:.07}),G(.5,.1,.5,6986308,{y:.55}),G(.08,.1,.02,1053708,{x:-.13,y:.33,z:.32,edges:!1}),G(.08,.1,.02,1053708,{x:.13,y:.33,z:.32,edges:!1}),G(.14,.04,.02,2759698,{y:.2,z:.32,edges:!1})),n=K(0,.6,0,G(.05,.2,.05,5933616,{y:.1}),G(.16,.04,.08,9093194,{x:.08,y:.2,rz:.4}),G(.16,.04,.08,9093194,{x:-.08,y:.18,rz:-.4}));return t.add(n),e.add(t),{root:e,tagY:1.15,pose(e,r,i){if(t.position.set(0,0,0),t.scale.set(1,1,1),t.rotation.set(0,0,0),r===`walk`){let n=Math.abs(Math.sin(e*7));t.position.y=n*.22,t.scale.set(1+(1-n)*.08,1-(1-n)*.12,1+(1-n)*.08)}else if(r===`attack`){let e=Math.sin(Math.min(i/.5,1)*Math.PI);t.position.z=e*.35,t.position.y=e*.15,t.rotation.x=e*.3}else{let n=Math.sin(e*2.4)*.03;t.scale.set(1-n,1+n,1-n)}n.rotation.z=Math.sin(e*3)*.15}}}function Hh(){let e=new R,t=K(0,.42,0,G(.6,.5,.95,5915700,{y:.1}),G(.64,.14,.7,4600872,{y:-.12,z:.05}),G(.24,.18,.3,8025712,{y:.42,z:.2,rx:.1}),G(.2,.16,.26,9078400,{y:.4,z:-.12,rx:-.1}),G(.16,.12,.2,6973024,{y:.36,z:-.38}),G(.06,.18,.06,3811872,{y:.1,z:-.5,rx:.6})),n=K(0,.12,.6,G(.44,.38,.36,6967360,{z:.16}),G(.26,.2,.14,9071194,{y:-.06,z:.38}),G(.05,.05,.02,1052684,{x:-.06,y:-.04,z:.455,edges:!1}),G(.05,.05,.02,1052684,{x:.06,y:-.04,z:.455,edges:!1}),G(.06,.06,.02,14699050,{x:-.13,y:.08,z:.345,emissive:6297608,edges:!1}),G(.06,.06,.02,14699050,{x:.13,y:.08,z:.345,emissive:6297608,edges:!1}),G(.05,.16,.05,15260864,{x:-.16,y:-.02,z:.36,rx:-.5}),G(.05,.16,.05,15260864,{x:.16,y:-.02,z:.36,rx:-.5}),G(.1,.12,.06,4600872,{x:-.18,y:.22,z:.06,rz:.4}),G(.1,.12,.06,4600872,{x:.18,y:.22,z:.06,rz:-.4}));t.add(n),e.add(t);let r=[[-.2,.3],[.2,.3],[-.2,-.3],[.2,-.3]].map(([t,n])=>{let r=K(t,.4,n,G(.17,.08,.19,2760730,{y:-.36}));return e.add(r),r});return{root:e,tagY:1.35,pose(e,i,a){if(t.position.set(0,.42,0),t.rotation.set(0,0,0),n.rotation.set(0,0,0),r.forEach(e=>{e.rotation.x=0}),i===`walk`){let n=Math.sin(e*11);r.forEach((e,t)=>{e.rotation.x=(t===0||t===3?n:-n)*.6}),t.position.y=.42+Math.abs(Math.cos(e*11))*.04}else if(i===`attack`){let e=a<.4?a/.4:Math.max(0,1-(a-.4)/.4);n.rotation.x=a<.4?e*.5:-e*.7,t.position.z=e*.25}else n.rotation.x=Math.sin(e*1.8)*.06,t.position.y=.42+Math.sin(e*2)*.01}}}function Uh(){let e=new R,t=7236194,n=4867904,r=4155948,i=K(0,1.25,0,G(1.3,1.1,.8,t,{y:.35}),G(1.36,.22,.86,r,{y:.92}),G(.5,.18,.5,6262586,{x:-.3,y:1.06,z:-.1}),G(1,.5,.7,n,{y:-.4}),G(.3,.3,.06,8050943,{y:.4,z:.42,emissive:1731216,edges:!1})),a=K(0,1.28,.12,G(.62,.5,.56,t,{y:.2}),G(.66,.14,.6,r,{y:.48}),G(.12,.08,.02,10481919,{x:-.15,y:.24,z:.29,emissive:2789568,edges:!1}),G(.12,.08,.02,10481919,{x:.15,y:.24,z:.29,emissive:2789568,edges:!1}),G(.4,.08,.02,2762788,{y:.06,z:.29,edges:!1}));i.add(a);let o=[-1,1].map(e=>{let t=K(e*.82,.75,0,G(.5,.42,.5,n,{y:-1.05}),G(.3,.12,.3,r,{y:-.8}));return i.add(t),t});e.add(i);let s=[-.34,.34].map(t=>{let n=K(t,.95,0,G(.48,.2,.56,3815474,{y:-.85,z:.04}));return e.add(n),n});return{root:e,tagY:3.2,pose(e,t,n){if(i.position.set(0,1.25,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.forEach(e=>e.rotation.set(0,0,0)),s.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*5);s[0].rotation.x=t*.45,s[1].rotation.x=-t*.45,o[0].rotation.x=-t*.35,o[1].rotation.x=t*.35,i.position.y=1.25+Math.abs(Math.cos(e*5))*.06,i.rotation.z=t*.04}else if(t===`attack`){let e=n<.5?n/.5:Math.max(0,1-(n-.5)/.15),t=n<.5?0:Math.min(1,(n-.5)/.15)*Math.max(0,1-(n-.75)/.25);o.forEach(n=>{n.rotation.x=-e*2.6-t*1.2}),i.rotation.x=-e*.15+t*.3,a.rotation.x=e*-.2}else{let t=Math.sin(e*1.4);i.position.y=1.25+t*.025,o.forEach((e,n)=>{e.rotation.z=(n?-1:1)*(.05+t*.03)}),a.rotation.y=Math.sin(e*.5)*.3}}}}function Wh(){let e=new R,t=14867659,n=12103836,r=11963135,i=K(0,.78,0,G(.08,.5,.08,n,{y:.2}),...[.32,.2,.08].map((e,n)=>G(.42-n*.04,.05,.24,t,{y:e})),G(.36,.08,.2,n,{y:-.04}),G(.18,.12,.12,5913722,{y:.2,z:-.02,emissive:2756672,edges:!1})),a=K(0,.66,.02,G(.32,.3,.3,t,{y:.14}),G(.26,.1,.24,n,{y:-.04,z:.02}),G(.07,.07,.02,r,{x:-.07,y:.15,z:.155,emissive:6961856,edges:!1}),G(.07,.07,.02,r,{x:.07,y:.15,z:.155,emissive:6961856,edges:!1}),G(.04,.05,.02,2761776,{y:.06,z:.155,edges:!1}));i.add(a);let o=e=>K(e*.26,.36,0,G(.1,.1,.1,n,{y:-.55})),s=o(-1),c=o(1),l=K(0,-.55,.06,G(.05,.05,.16,4864554,{z:.02}),G(.05,.42,.03,9077880,{y:-.04,z:.1,rx:Math.PI/2-.2}));l.position.set(0,-.55,.08),l.rotation.x=-.3,c.add(l),i.add(s,c),e.add(i);let u=[-.1,.1].map(t=>{let r=K(t,.74,0,G(.1,.05,.16,n,{y:-.7,z:.03}));return e.add(r),r});return{root:e,tagY:1.75,pose(e,t,n){if(i.position.set(0,.78,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),s.rotation.set(0,0,0),c.rotation.set(-.3,0,0),u.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*9);u[0].rotation.x=t*.55,u[1].rotation.x=-t*.55,s.rotation.x=-t*.4,i.rotation.z=Math.sign(t)*.05,a.rotation.z=-Math.sign(t)*.08}else if(t===`attack`){let e=n<.45?n/.45:Math.max(0,1-(n-.45)/.2);c.rotation.x=-.3-e*2.2+(n>.45?Math.min(1,(n-.45)/.2)*.9:0),i.rotation.x=n>.45?.15:-.05}else a.rotation.x=Math.sin(e*2.3)*.08,a.rotation.y=Math.sin(e*.9)*.25,i.position.y=.78+Math.sin(e*2)*.01}}}function Gh(){let e=new R,t=new R;t.scale.setScalar(1.5),e.add(t);let n=14867659,r=12103836,i=K(0,1.15,0,G(.14,.14,1.6,r,{y:.32}),G(.42,.3,.7,5913722,{y:.02,emissive:2756672,edges:!1}),G(.6,.16,.3,r,{y:.18,z:-.7}),G(.66,.14,.26,r,{y:.22,z:.6}));for(let[e,t]of[.45,.2,-.05,-.3].entries()){let r=.82-e*.07;for(let e of[-1,1])i.add(G(.06,.55,.08,n,{x:e*r/2,y:.05,z:t,rz:e*.15}));i.add(G(r,.06,.08,n,{y:.3,z:t}))}let a=K(0,.32,.75),o=K(0,.72,.62,G(.44,.32,.5,n,{z:.05}),G(.3,.18,.44,n,{y:-.03,z:.46}),...[-1,1].flatMap(e=>[G(.08,.07,.02,11963135,{x:e*.15,y:.08,z:.31,emissive:6961856,edges:!1}),G(.07,.07,.5,r,{x:e*.15,y:.18,z:-.32,rx:-.45}),G(.04,.07,.04,15986396,{x:e*.1,y:-.15,z:.58,edges:!1})])),s=K(0,-.13,-.12,G(.28,.07,.62,r,{z:.34})),c=G(.16,.1,.4,9109440,{z:.75,y:-.1,emissive:2792042,edges:!1});o.add(s,c),a.add(o),i.add(a);let l=[-1,1].map(e=>{let t=K(e*.3,.32,.4,G(1.3,.08,.08,n,{x:e*.65,y:.16,rz:e*.25}),...[0,1,2].flatMap(t=>[G(.05,.05,.95-t*.15,r,{x:e*(.45+t*.36),y:.12+t*.08,z:-.45+t*.07}),G(.3,.02,.75-t*.15,3811908,{x:e*(.62+t*.36),y:.1+t*.08,z:-.38+t*.07,edges:!1})]));return i.add(t),t}),u=K(0,.28,-.85);for(let e=0;e<6;e++)u.add(G(.13-e*.015,.13-e*.015,.24,r,{y:-e*.07,z:-e*.23}));u.add(G(.05,.16,.2,n,{y:-.36,z:-1.45,rx:.5})),i.add(u),t.add(i);let d=[[-.38,.55],[.38,.55],[-.38,-.55],[.38,-.55]].map(([e,n])=>{let i=K(e,1,n,G(.22,.06,.3,r,{y:-.97,z:.08}));return t.add(i),i});return{root:e,tagY:4.2,pose(e,t,n){i.position.set(0,1.15,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.rotation.set(0,0,0),s.rotation.x=.05,u.rotation.set(0,Math.sin(e*1.6)*.25,0),d.forEach(e=>{e.rotation.x=0}),c.visible=!1;let r=.15+Math.sin(e*1.4)*.08;if(t===`walk`){let t=Math.sin(e*6);d.forEach((e,n)=>{e.rotation.x=(n===0||n===3?t:-t)*.5}),i.position.y=1.15+Math.abs(Math.cos(e*6))*.05,a.rotation.x=Math.sin(e*6)*.06,u.rotation.y=Math.sin(e*3)*.35}else if(t===`attack`){if(n<.35){let e=n/.35;a.rotation.x=-.55*e,o.rotation.x=-.2*e,s.rotation.x=.05+.3*e,r=.15+.7*e}else{let e=Math.min(1,(n-.35)/.15),t=n<.8?1:Math.max(0,1-(n-.8)/.2);a.rotation.x=-.55+.95*e*t,o.rotation.x=-.2+.4*e*t,s.rotation.x=.05+.6*t,i.rotation.x=.08*t,r=.85-.5*e,c.visible=t>.2,c.scale.set(1+t,1+t,1+2*t)}}else o.rotation.y=Math.sin(e*.7)*.3,a.rotation.x=Math.sin(e*1.1)*.05;l.forEach((e,t)=>{e.rotation.z=(t?1:-1)*r})}}}function Kh(){let e=new R,t=4867652,n=3025706,r=16738858,i=K(0,.5,0,G(.42,.36,.9,t,{y:.06}),G(.44,.12,.6,n,{y:-.12,z:.05}),G(.06,.04,.5,r,{y:.25,z:-.05,emissive:9054728,edges:!1}),G(.08,.1,.36,n,{y:.1,z:-.6,rx:.5})),a=K(0,.18,.58,G(.34,.3,.36,t,{z:.12}),G(.2,.16,.24,n,{y:-.06,z:.36}),G(.07,.05,.02,r,{x:-.09,y:.06,z:.305,emissive:10500616,edges:!1}),G(.07,.05,.02,r,{x:.09,y:.06,z:.305,emissive:10500616,edges:!1}),G(.08,.14,.06,n,{x:-.12,y:.2,z:.02,rx:-.3}),G(.08,.14,.06,n,{x:.12,y:.2,z:.02,rx:-.3}));i.add(a),e.add(i);let o=[[-.15,.3],[.15,.3],[-.15,-.3],[.15,-.3]].map(([t,r])=>{let i=K(t,.48,r,G(.13,.06,.16,n,{y:-.44,z:.02}));return e.add(i),i});return{root:e,tagY:1.3,pose(e,t,n){if(i.position.set(0,.5,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*13);o.forEach((e,n)=>{e.rotation.x=(n===0||n===3?t:-t)*.7}),i.position.y=.5+Math.abs(Math.cos(e*13))*.05}else if(t===`attack`){let e=Math.sin(Math.min(n/.5,1)*Math.PI);i.position.z=e*.35,i.rotation.x=e*.15,a.rotation.x=-e*.4}else a.rotation.x=Math.sin(e*2.6)*.05,i.position.y=.5+Math.sin(e*3)*.012}}}function qh(){let e=new R,t=4867670,n=3025720,r=14203135,i=K(0,.55,0,G(.48,.4,1,t,{y:.06}),G(.5,.12,.7,n,{y:-.14,z:.05}),G(.1,.1,.42,n,{y:.12,z:-.66,rx:.4}));Ru.slice(0,5).forEach((e,t)=>i.add(G(.08,.2+t%2*.08,.08,e,{y:.36,z:.36-t*.18,rx:-.3,emissive:new Rn(e).multiplyScalar(.35).getHex(),edges:!1})));let a=K(0,.2,.68,G(.36,.3,.38,t,{z:.12}),G(.22,.16,.26,n,{y:-.06,z:.38}),G(.07,.05,.02,r,{x:-.09,y:.06,z:.315,emissive:9067216,edges:!1}),G(.07,.05,.02,r,{x:.09,y:.06,z:.315,emissive:9067216,edges:!1}),G(.06,.18,.06,12109016,{x:-.12,y:.22,z:.02,rx:-.4,emissive:3818064,edges:!1}),G(.06,.18,.06,12109016,{x:.12,y:.22,z:.02,rx:-.4,emissive:3818064,edges:!1}));i.add(a),e.add(i);let o=[[-.17,.34],[.17,.34],[-.17,-.34],[.17,-.34]].map(([t,r])=>{let i=K(t,.52,r,G(.14,.07,.18,n,{y:-.48,z:.02}));return e.add(i),i});return{root:e,tagY:1.45,pose(e,t,n){if(i.position.set(0,.55,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*12);o.forEach((e,n)=>{e.rotation.x=(n===0||n===3?t:-t)*.7}),i.position.y=.55+Math.abs(Math.cos(e*12))*.05}else if(t===`attack`){let e=Math.sin(Math.min(n/.5,1)*Math.PI);i.position.z=e*.4,i.position.y=.55+e*.12,i.rotation.x=-e*.12,a.rotation.x=-e*.45}else a.rotation.y=Math.sin(e*.8)*.25,i.position.y=.55+Math.sin(e*2.2)*.012}}}function Jh(){let e=new R,t=5920870,n=3815494,r=14203135,i=K(0,1.35,0,G(1.1,1,.7,t),G(.9,.3,.6,n,{y:-.55}),G(.3,.3,.06,r,{y:.1,z:.36,emissive:9067216,edges:!1})),a=[];for(let e of[-1,1])for(let[t,n]of[Ru[2],Ru[6],Ru[4]].entries()){let r=G(.14,.42-t*.08,.14,n,{x:e*(.38+t*.12),y:.62+(t===1?.06:0),z:-.08+t*.08,rz:-e*(.2+t*.15),emissive:new Rn(n).multiplyScalar(.35).getHex(),edges:!1});i.add(r),a.push(r)}let o=K(0,.85,.05,G(.5,.42,.46,t,{y:.2}),G(.3,.06,.02,r,{y:.24,z:.235,emissive:9067216,edges:!1}));i.add(o),e.add(i);let s=[-1,1].map(t=>{let r=K(t*.85,1.75,0,G(.55,.5,.55,n,{y:-1.15}),G(.12,.22,.12,Ru[3],{y:-.82,emissive:3818064,edges:!1}));return e.add(r),r}),c=[-.3,.3].map(t=>{let r=K(t,.8,0,G(.5,.24,.62,n,{y:-.68,z:.05}));return e.add(r),r});return{root:e,tagY:3.2,pose(e,t,n){if(i.position.set(0,1.35,0),i.rotation.set(0,0,0),o.rotation.set(0,0,0),s.forEach(e=>e.rotation.set(0,0,0)),c.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*5);c[0].rotation.x=t*.4,c[1].rotation.x=-t*.4,s[0].rotation.x=-t*.3,s[1].rotation.x=t*.3,i.position.y=1.35+Math.abs(Math.cos(e*5))*.06,i.rotation.z=Math.sin(e*5)*.04}else if(t===`attack`){let e=n<.45?n/.45:Math.max(0,1-(n-.45)/.1),t=n<.45?0:Math.min(1,(n-.45)/.1)*(n<.8?1:(1-n)/.2);s.forEach(n=>{n.rotation.x=-e*2.4-t*1.1}),i.rotation.x=t*.18-e*.1}else o.rotation.y=Math.sin(e*.5)*.2,s.forEach((t,n)=>{t.rotation.z=(n?-1:1)*(.05+Math.sin(e*1.5)*.03)});let r=1+Math.sin(e*3)*.06;a.forEach((e,t)=>e.scale.set(1,r+t%3*.02,1))}}}function Yh(){let e=new R,t=2762280,n=4077626,r=16722458,i=9071146,a=3804690,o=K(0,1.9,0,G(1.5,1.4,.9,t,{y:.4}),G(1.56,.16,.96,n,{y:1.1}),G(1.1,.55,.8,t,{y:-.5}),G(.3,.3,.04,r,{y:.45,z:.46,emissive:10489864,edges:!1}),G(.9,.06,.04,r,{y:0,z:.46,emissive:7342598,edges:!1}),G(1.4,1.9,.08,a,{y:-.1,z:-.5}),G(.5,.7,.08,a,{x:-.4,y:-1.15,z:-.52,rz:.1}),G(.45,.55,.08,a,{x:.35,y:-1.1,z:-.52,rz:-.12})),s=K(0,1.34,.05,G(.7,.66,.66,t,{y:.32}),G(.5,.06,.02,r,{y:.36,z:.335,emissive:12589578,edges:!1}),G(.76,.1,.72,i,{y:.7}));for(let e=0;e<9;e++){let t=e/9*Math.PI*2,n=[.34,.1,.26,.08,.3,.12,.06,.22,.1][e];s.add(G(.09,n,.09,i,{x:Math.cos(t)*.32,y:.75+n/2,z:Math.sin(t)*.32,ry:-t}))}o.add(s);let c=[-1,1].map(e=>{let t=K(e*.95,.95,0,G(.6,.45,.6,n,{y:.05}),G(.12,.28,.12,r,{x:e*.18,y:.34,emissive:7342598,edges:!1}),G(.46,.4,.46,n,{y:-1.15}));return o.add(t),t}),l=K(0,-1.25,.1,G(.14,.5,.14,1709076),G(.7,.12,.16,i,{y:.3}),G(.22,2.3,.07,5919832,{y:1.5}),G(.06,2,.08,r,{y:1.45,emissive:5244934,edges:!1}));l.rotation.x=1.9,c[1].add(l),e.add(o);let u=[-.4,.4].map(t=>{let r=K(t,1.45,0,G(.56,.25,.7,n,{y:-1.32,z:.06}));return e.add(r),r});return{root:e,tagY:4.6,pose(e,t,n){if(o.position.set(0,1.9,0),o.rotation.set(0,0,0),s.rotation.set(0,0,0),c.forEach(e=>e.rotation.set(0,0,0)),u.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*4);u[0].rotation.x=t*.4,u[1].rotation.x=-t*.4,c[0].rotation.x=-t*.25,o.position.y=1.9+Math.abs(Math.cos(e*4))*.08}else if(t===`attack`){let e=n<.55?n/.55:Math.max(0,1-(n-.55)/.12),t=n<.55?0:Math.min(1,(n-.55)/.12)*Math.max(0,1-(n-.8)/.2);c[1].rotation.x=-e*2.4+t*.6,c[0].rotation.x=-e*1.2,o.rotation.x=-e*.12+t*.25}else{let t=Math.sin(e*1.1);o.position.y=1.9+t*.03,s.rotation.y=Math.sin(e*.4)*.35}}}}var Xh={brown:[6965806,1971730],black:[2235418,920072],white:[14999250,12103844],takoyaki:[16183546,15899848,6969990,10104944]};function Zh(){let e=new R,t=new qr({color:16773368,transparent:!0,depthWrite:!1,blending:2}),n=Array.from({length:12},(n,r)=>{let i=new z(new Ri(.08,.08,.08),t.clone());return i.userData={a:r/12*Math.PI*2,r:.5+r%3*.15,phase:r*.37},e.add(i),i}),r=new Ga(16165088,1.2,4);return r.position.set(0,1,0),e.add(r),{root:e,update(e){let t=Math.sin(e*1.6);r.intensity=1.2+t*.35;for(let t of n){let{a:n,r,phase:i}=t.userData,a=(e*.35+i)%1,o=n+e*.6;t.position.set(Math.cos(o)*r,.15+a*2,.3+Math.sin(o)*r*1.8),t.material.opacity=Math.sin(a*Math.PI)*.9,t.rotation.y=e*2+n}}}}function Qh(e,t){let n=e.geometry.attributes.position;for(let e=0;e<n.count;e++)n.setXYZ(e,...t(n.getX(e),n.getY(e),n.getZ(e)));n.needsUpdate=!0,e.geometry.computeVertexNormals();let r=e.children.find(e=>e.isLineSegments);return r&&(r.geometry.dispose(),r.geometry=new Ki(e.geometry)),e}function $h(e=`brown`,{saddle:t=!1}={}){let n=new R,[r,i,a=0,o=0]=Xh[e]??Xh.brown,s=K(0,.95,0,Qh(G(.55,.5,1.25,r,{emissive:a,y:.05}),(e,t,n)=>[t>0?e*.794:e,t,t>0&&n>0?.576:n]),Qh(G(.1,.35,.08,i,{emissive:o,y:0,z:-.68,rx:.4}),(e,t,n)=>t<0?[e*.672,t,n*.709]:[e,t,n]),Qh(G(.12,.5,.1,i,{emissive:o,y:-.25,z:-.72,rx:.15}),(e,t,n)=>t<0?[e*1.253,t,n*1.339]:[e*.749,t,n*.749]));t&&(s.add(G(.6,.12,.5,5909018,{y:.33,z:-.05})),s.add(G(.62,.3,.06,8010274,{y:.15,z:-.05})),s.add(G(.64,.06,.52,13214266,{y:.27,z:-.05})));let c=K(0,.2,.55),l=K(0,.42,.22,Qh(G(.08,.34,.26,i,{emissive:o,y:.08,z:-.2,rx:-.3}),(e,t,n)=>[n<0?e*1.467:e,t,n]),Qh(G(.26,.26,.5,r,{emissive:a,z:.12}),(e,t,n)=>n>0?[e*.799,t>0?.0733:t,n]:[e,t,n]),G(.123,.15,.162,r,{emissive:a,y:-.06,z:.38}),G(.05,.05,.02,920072,{x:-.135,y:.04,z:.12,edges:!1}),G(.05,.05,.02,920072,{x:.135,y:.04,z:.12,edges:!1}),G(.06,.12,.05,r,{emissive:a,x:-.08,y:.18,z:-.05}),G(.06,.12,.05,r,{emissive:a,x:.08,y:.18,z:-.05}));t&&l.add(G(.28,.05,.05,5909018,{y:-.04,z:.3}));let u=null,d=null;e===`takoyaki`&&(l.add(G(.08,.32,.08,16765562,{y:.26,z:.24,rx:.5,emissive:11041320})),l.add(G(.05,.1,.05,16773312,{y:.44,z:.34,rx:.5,emissive:13676640,edges:!1})),u=Zh(),n.add(u.root),d=new Ga(16769696,.6,1.6),d.position.set(0,.5,.38),l.add(d)),c.add(l),s.add(c),n.add(s);let f=[[-.18,.45],[.18,.45],[-.18,-.45],[.18,-.45]].map(([e,t])=>{let r=t>0?.851:.869,i=K(e,.78,t,Qh(G(.207,.1,.305,1709072,{y:-.74}),(e,t,n)=>[n<0?e*r:e,t,n]));return n.add(i),i});return{root:n,tagY:1.95,pose(e,t,n,r=!1){if(u&&(u.update(e),d.intensity=.6+Math.sin(e*1.6)*.25),s.position.set(0,.95,0),s.rotation.set(0,0,0),c.rotation.set(0,0,0),f.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=r?12:7,n=Math.sin(e*t);f.forEach((e,t)=>{e.rotation.x=(t===0||t===3?n:-n)*(r?.75:.45)}),s.position.y=.95+Math.abs(Math.cos(e*t))*(r?.08:.03),s.rotation.x=r?Math.sin(e*t)*.05:0,c.rotation.x=Math.sin(e*t)*.08}else{let t=Math.max(0,Math.sin(e*.35+(n??0)*6))**4;c.rotation.x=t*1.1+Math.sin(e*1.3)*.04}}}}var eg=.85,tg=.8;function ng(e=1,{saddle:t=!1}={}){e=Math.max(1,Math.min(5,e));let n=1.55*ef.size[e-1],r=e>=ef.fliesAt,i=new R,a=new R,o=new R;a.scale.setScalar(n),a.add(o),i.add(a);let s=11022878,c=7216660,l=3811874,u=K(0,tg,0,G(.7,.55,1.4,s,{y:.1}),G(.56,.12,1.2,14723162,{y:-.2}),G(.5,.3,.32,s,{y:.22,z:.62}));for(let[e,t]of[.4,.13,-.14,-.41].entries())u.add(G(.06,.16-e*.02,.14,l,{y:.44,z:t}));t&&(u.add(G(.56,.1,.5,5909018,{y:.42,z:.12})),u.add(G(.6,.05,.52,13214266,{y:.37,z:.12})),u.add(G(.72,.28,.06,8010274,{y:.24,z:.12})));let d=K(0,.3,.72),f=K(0,.45,.3,G(.42,.34,.48,s),G(.3,.2,.42,s,{y:-.04,z:.42}),G(.04,.18,.34,c,{y:.24,z:-.06}),...[-1,1].flatMap(e=>[G(.08,.07,.02,16765498,{x:e*.16,y:.07,z:.245,emissive:10514448,edges:!1}),G(.07,.07,.42,l,{x:e*.13,y:.2,z:-.3,rx:-.5}),G(.05,.04,.03,1706504,{x:e*.08,y:.04,z:.635,edges:!1}),G(.04,.07,.04,15986396,{x:e*.1,y:-.16,z:.56,edges:!1})])),p=K(0,-.15,-.1,G(.26,.07,.56,c,{z:.36})),m=K(0,-.08,.7,G(.18,.14,.5,16752704,{z:.25,emissive:12599312,edges:!1}),G(.1,.08,.3,16773280,{z:.2,emissive:16760896,edges:!1}));f.add(p,m),e<=2&&f.scale.setScalar(e===1?1.4:1.15),d.add(f),u.add(d);let h=[.55,.75,.9,1,1.1][e-1],g=[-1,1].map(e=>{let t=K(e*.32,.36,.3,G(1.25,.1,.1,c,{x:e*.62,y:.05}),G(1.2,.04,.75,9054750,{x:e*.62,z:-.4}),...[0,1,2].map(t=>G(.06,.06,.78-t*.12,c,{x:e*(.3+t*.4),y:.03,z:-.38+t*.04})),G(.07,.12,.07,l,{x:e*1.26,y:.08}));return t.scale.setScalar(h),u.add(t),t}),_=K(0,.12,-.72);for(let e=0;e<6;e++)_.add(G(.22-e*.028,.2-e*.025,.26,e%2?c:s,{y:-e*.05,z:-e*.24}));_.add(G(.26,.04,.24,c,{y:-.3,z:-1.5,ry:Math.PI/4})),u.add(_),o.add(u);let v=[[-.4,.5],[.4,.5],[-.4,-.5],[.4,-.5]].map(([e,t])=>{let n=K(e,.65,t,G(.24,.08,.3,c,{y:-.61,z:.04}),...[-.07,0,.07].map(e=>G(.04,.04,.1,15986396,{x:e,y:-.63,z:.22,edges:!1})));return o.add(n),n}),y=0;return{root:i,tagY:n*1.45+(r?eg*n:0)+.3,flies:r,seatNow:()=>n*(1.175+y),pose(e,t,n,i=!1){u.position.set(0,tg,0),u.rotation.set(0,0,0),d.rotation.set(0,0,0),f.rotation.set(0,0,0),p.rotation.x=.05,_.rotation.set(0,Math.sin(e*1.6)*.25,0),v.forEach(e=>{e.rotation.set(0,0,0),e.position.y=.65}),m.visible=!1;let a=.45+Math.sin(e*1.4)*.08;if(o.position.y=0,r){let n=t===`walk`?i?9:7:4.5;a=.2+Math.sin(e*n)*.6,o.position.y=eg+Math.sin(e*n-.8)*.06,v.forEach(e=>{e.rotation.x=.5,e.position.y=.85}),_.rotation.x=t===`walk`?.15:.05,u.rotation.x=t===`walk`?.06:0}else if(t===`walk`){let t=i?10:6,n=Math.sin(e*t);v.forEach((e,t)=>{e.rotation.x=(t===0||t===3?n:-n)*.5}),u.position.y=tg+Math.abs(Math.cos(e*t))*.05,d.rotation.x=Math.sin(e*t)*.06,_.rotation.y=Math.sin(e*t*.5)*.35}else f.rotation.y=Math.sin(e*.7)*.3;if(t===`attack`){if(n<.35){let e=n/.35;d.rotation.x=-.5*e,f.rotation.x=-.2*e,p.rotation.x=.05+.3*e,a=Math.max(a,.15+.7*e)}else{let e=Math.min(1,(n-.35)/.15),t=n<.8?1:Math.max(0,1-(n-.8)/.2);d.rotation.x=-.5+.9*e*t,f.rotation.x=-.2+.4*e*t,p.rotation.x=.05+.6*t,m.visible=t>.2,m.scale.set(1+.5*t,1+.5*t,1+1.5*t)}}y=o.position.y+(u.position.y-tg),g.forEach((e,t)=>{e.rotation.z=(t?1:-1)*a})}}}function rg(e){return $h(e?.coat)}var ig={mossling:Vh,cragboar:Hh,mosswarden:Uh,bonewalker:Wh,bone_dragon:Gh,ashhound:Kh,crownless_king:Yh,wild_horse:rg,takoyaki:()=>$h(`takoyaki`),knight_dragon:e=>ng(Number(e?.coat)||1),shard_stalker:qh,prism_golem:Jh},ag={crownless_king:1.35,bone_dragon:1.05};function og(e,t){let n=(ig[e]??Vh)(t);return n.root.scale.setScalar(ag[e]??.9),n}var sg=null,cg,lg,ug,dg,fg=0,pg=vg(`nc.music`,!0),mg=vg(`nc.sfx`,!0),hg=.22,gg=.55,_g=.75;function vg(e,t){try{let n=localStorage.getItem(e);return n===null?t:n===`1`}catch{return t}}function yg(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}var bg=()=>({music:pg,sfx:mg});function xg(){if(!sg){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;sg=new e;let t=sg.createDynamicsCompressor();t.connect(sg.destination),dg=sg.createConvolver(),dg.buffer=Og(2.2);let n=Tg(.3);dg.connect(n).connect(t),cg=Tg(mg?gg:0),cg.connect(t),lg=Tg(pg?hg:0),lg.connect(t),ug=Tg(0),ug.connect(lg),document.addEventListener(`visibilitychange`,()=>document.hidden?sg.suspend():sg.resume()),Vg()}sg.state===`suspended`&&!document.hidden&&sg.resume()}function Sg(){return pg=!pg,yg(`nc.music`,pg),sg&&lg.gain.setTargetAtTime(pg?hg:0,sg.currentTime,.2),pg}function Cg(){return mg=!mg,yg(`nc.sfx`,mg),sg&&cg.gain.setTargetAtTime(mg?gg:0,sg.currentTime,.05),mg}function wg(e){sg&&ug.gain.setTargetAtTime(e*_g,sg.currentTime,e>0?.6:2.5),fg=e}function Tg(e){let t=sg.createGain();return t.gain.value=e,t}var Eg=null;function Dg(){if(!Eg){Eg=sg.createBuffer(1,sg.sampleRate,sg.sampleRate);let e=Eg.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}let e=sg.createBufferSource();return e.buffer=Eg,e.loop=!0,e}function Og(e){let t=Math.floor(sg.sampleRate*e),n=sg.createBuffer(2,t,sg.sampleRate);for(let e=0;e<2;e++){let r=n.getChannelData(e);for(let e=0;e<t;e++)r[e]=(Math.random()*2-1)*(1-e/t)**3}return n}function kg(e,t,n=.7){let r=sg.createBiquadFilter();return r.type=e,r.frequency.value=t,r.Q.value=n,r}function Ag(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+r),e.gain.exponentialRampToValueAtTime(1e-4,t+r+i)}function Y(e,t,{type:n=`sine`,f0:r,f1:i=r,glide:a=.1,vol:o=.5,a:s=.005,d:c=.2,lp:l=0}){let u=sg.createOscillator();u.type=n,u.frequency.setValueAtTime(r,t),i!==r&&u.frequency.exponentialRampToValueAtTime(i,t+a);let d=Tg(0);Ag(d,t,o,s,c);let f=u;if(l){let e=kg(`lowpass`,l);u.connect(e),f=e}return f.connect(d).connect(e),u.start(t),u.stop(t+s+c+.05),d}function jg(e,t,{type:n=`bandpass`,f0:r=1e3,f1:i=r,q:a=1,vol:o=.5,a:s=.003,d:c=.15}){let l=Dg(),u=kg(n,r,a);i!==r&&u.frequency.exponentialRampToValueAtTime(i,t+s+c);let d=Tg(0);return Ag(d,t,o,s,c),l.connect(u).connect(d).connect(e),l.start(t,Math.random()*.5),l.stop(t+s+c+.05),d}var Mg={swing(e,t){jg(e,t,{f0:500,f1:2600,q:1.5,vol:.7,a:.04,d:.16})},cast(e,t){Y(e,t,{type:`triangle`,f0:320,f1:980,glide:.18,vol:.35,d:.28}).connect(dg),jg(e,t+.05,{type:`highpass`,f0:3e3,vol:.12,d:.2})},chime(e,t){for(let[n,r]of[[1318,.25],[1976,.15],[2637,.08]])Y(e,t,{f0:n,vol:r,d:.7}).connect(dg)},hit(e,t){jg(e,t,{type:`lowpass`,f0:1400,vol:.6,d:.08}),Y(e,t,{f0:140,f1:50,glide:.1,vol:.6,d:.12})},squish(e,t){Y(e,t,{type:`sine`,f0:380,f1:160,glide:.15,vol:.4,d:.16}),jg(e,t,{type:`lowpass`,f0:600,vol:.35,d:.12})},grunt(e,t){Y(e,t,{type:`sawtooth`,f0:120,f1:70,glide:.2,vol:.45,d:.22,lp:700})},bite(e,t){jg(e,t,{f0:1800,q:3,vol:.4,d:.04}),jg(e,t+.07,{f0:1400,q:3,vol:.35,d:.05})},hurt(e,t){Y(e,t,{f0:180,f1:60,glide:.15,vol:.7,d:.18}),Y(e,t,{type:`sawtooth`,f0:220,f1:140,glide:.15,vol:.18,d:.15,lp:900})},die(e,t){Y(e,t,{type:`square`,f0:440,f1:70,glide:.5,vol:.18,d:.55,lp:1200}),jg(e,t+.25,{type:`lowpass`,f0:400,vol:.4,a:.02,d:.35})},loot(e,t){Y(e,t,{type:`triangle`,f0:1568,vol:.18,d:.18}).connect(dg),Y(e,t+.08,{type:`triangle`,f0:2093,vol:.16,d:.3}).connect(dg)},bones(e,t){for(let n=0;n<4;n++)jg(e,t+n*.035+Math.random()*.02,{f0:2200+n*400,q:6,vol:.32,d:.03})},raise(e,t){Y(e,t,{type:`sawtooth`,f0:90,f1:180,glide:.5,vol:.25,d:.6,lp:600}).connect(dg);for(let n=0;n<5;n++)jg(e,t+.35+n*.05,{f0:2e3+n*300,q:6,vol:.28,d:.03})},respawn(e,t){for(let[n,r]of[[293.7,0],[440,.18],[587.3,.36]])Y(e,t+r,{type:`triangle`,f0:n,vol:.3,d:1.4}).connect(dg)},levelup(e,t){[293.7,370,440,587.3,740].forEach((n,r)=>Y(e,t+r*.08,{type:`triangle`,f0:n,vol:.28,d:.9}).connect(dg)),Y(e,t+.4,{f0:1174.7,vol:.12,d:1.2}).connect(dg),jg(e,t+.35,{type:`highpass`,f0:5e3,vol:.08,a:.1,d:.8})},cleave(e,t){jg(e,t,{f0:300,f1:1800,q:1.2,vol:.8,a:.06,d:.22}),Y(e,t+.05,{f0:90,f1:55,glide:.15,vol:.35,d:.2})},bash(e,t){Y(e,t,{type:`square`,f0:180,f1:90,glide:.08,vol:.3,d:.12,lp:1500}),jg(e,t,{f0:2500,q:6,vol:.35,d:.18})},cry(e,t){Y(e,t,{type:`sawtooth`,f0:110,f1:147,glide:.25,vol:.32,a:.08,d:.8,lp:900}).connect(dg),Y(e,t,{type:`sawtooth`,f0:165,f1:220,glide:.25,vol:.18,a:.08,d:.7,lp:1200})},charge(e,t){jg(e,t,{f0:200,f1:1200,q:.8,vol:.6,a:.1,d:.4})},firebolt(e,t){Y(e,t,{type:`sawtooth`,f0:200,f1:600,glide:.15,vol:.18,d:.25,lp:1800}),jg(e,t,{type:`lowpass`,f0:2200,vol:.4,a:.02,d:.4})},frost(e,t){for(let[n,r]of[[1568,0],[2093,.04],[2637,.08],[3136,.12]])Y(e,t+r,{f0:n,vol:.12,d:.5}).connect(dg);jg(e,t,{type:`highpass`,f0:4e3,vol:.25,a:.01,d:.45})},zap(e,t){for(let n=0;n<4;n++)jg(e,t+n*.035,{f0:3e3+Math.random()*2e3,q:2,vol:.35,d:.04});Y(e,t,{type:`square`,f0:900,f1:300,glide:.2,vol:.08,d:.22,lp:4e3})},blink(e,t){Y(e,t,{type:`sine`,f0:400,f1:1600,glide:.12,vol:.3,d:.14}).connect(dg),Y(e,t+.1,{type:`sine`,f0:1600,f1:800,glide:.1,vol:.15,d:.12}).connect(dg)},heal(e,t){for(let[n,r]of[[880,0],[1108.7,.06],[1318.5,.12]])Y(e,t+r,{f0:n,vol:.16,d:.6}).connect(dg)},smite(e,t){Mg.chime(e,t),Y(e,t,{f0:160,f1:60,glide:.2,vol:.5,d:.25})},sanctuary(e,t){for(let n of[293.7,370,440])Y(e,t,{type:`triangle`,f0:n,vol:.12,a:.25,d:1.6}).connect(dg)},ward(e,t){Y(e,t,{type:`sine`,f0:660,f1:990,glide:.3,vol:.18,a:.05,d:.6}).connect(dg),jg(e,t,{type:`highpass`,f0:6e3,vol:.06,a:.1,d:.5})},rune(e,t){Y(e,t,{type:`triangle`,f0:523.3,f1:784,glide:.1,vol:.14,d:.4}).connect(dg),jg(e,t,{f0:2200,q:4,vol:.12,d:.12})},binding(e,t){[392,523.3,659.3].forEach((n,r)=>Y(e,t+r*.07,{type:`triangle`,f0:n,vol:.15,d:.7}).connect(dg)),Y(e,t+.2,{type:`sawtooth`,f0:98,vol:.12,a:.05,d:.6,lp:500})},edge(e,t){jg(e,t,{f0:800,f1:4e3,q:2,vol:.4,a:.02,d:.3}),Y(e,t,{type:`sawtooth`,f0:110,f1:220,glide:.3,vol:.18,a:.05,d:.5,lp:1200}).connect(dg)},channel(e,t){Y(e,t,{type:`sawtooth`,f0:55,f1:165,glide:1.9,vol:.22,a:.3,d:1.8,lp:600}),jg(e,t,{type:`lowpass`,f0:300,f1:1500,vol:.25,a:1.2,d:.7})},boom(e,t){Y(e,t,{f0:90,f1:30,glide:.5,vol:.9,d:.7}),jg(e,t,{type:`lowpass`,f0:1800,f1:200,vol:.8,a:.005,d:.8}),jg(e,t+.05,{type:`highpass`,f0:3e3,vol:.2,d:.4}).connect(dg)},fail(e,t){Y(e,t,{type:`square`,f0:160,vol:.06,d:.1,lp:800})},cooldown(e,t){Y(e,t,{type:`sine`,f0:210,f1:170,glide:.12,vol:.18,d:.14})},engage(e,t){Y(e,t,{type:`square`,f0:660,vol:.08,d:.06,lp:2500}),Y(e,t+.07,{type:`square`,f0:880,vol:.08,d:.08,lp:2500})},click(e,t){Y(e,t,{type:`square`,f0:1200,vol:.05,d:.03,lp:3e3})}};function Ng(e,{vol:t=1,pan:n=0}={}){if(!sg||!mg||t<=.01||!Mg[e])return;let r=Tg(t),i=sg.createStereoPanner();i.pan.value=Math.max(-1,Math.min(1,n)),r.connect(i).connect(cg),Mg[e](r,sg.currentTime+.005)}var Pg=60/92/2,Fg=[62,64,65,67,69,70,72,74,76,77,79,81],Ig=[[50,57,62,65],[46,53,58,62],[41,53,57,60],[48,55,60,64],[50,57,62,65],[46,53,58,62],[48,55,60,64],[45,52,57,61]],Lg=e=>440*2**((e-69)/12),Rg=0,zg=0,Bg=4;function Vg(){zg=sg.currentTime+.2,setInterval(Hg,40)}function Hg(){if(sg.state!==`running`)zg=Math.max(zg,sg.currentTime+.05);else for(;zg<sg.currentTime+.2;)Gg(Rg,zg),Rg++,zg+=Pg}function Ug(e,t,n){for(let r of t.slice(1))for(let t of[-6,6]){let i=sg.createOscillator();i.type=`sawtooth`,i.frequency.value=Lg(r),i.detune.value=t;let a=kg(`lowpass`,900),o=Tg(0);o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.045,e+n*.35),o.gain.linearRampToValueAtTime(1e-4,e+n*1.05),i.connect(a).connect(o),o.connect(lg),o.connect(dg),i.start(e),i.stop(e+n*1.1)}}function Wg(e,t,n){let r=Y(lg,e,{type:`triangle`,f0:Lg(t),vol:n,a:.004,d:.55,lp:2400});Y(lg,e,{type:`sine`,f0:Lg(t)*2,vol:n*.25,a:.002,d:.2}),r.connect(dg)}function Gg(e,t){let n=Math.floor(e/8)%Ig.length,r=e%8,i=Ig[n],a=Pg*8;r===0&&(Ug(t,i,a),Y(lg,t,{type:`triangle`,f0:Lg(i[0]-12),vol:.35,a:.01,d:a*.45,lp:400})),r===4&&Y(lg,t,{type:`triangle`,f0:Lg(i[0]),vol:.22,a:.01,d:a*.4,lp:400});let o=.42+fg*.3;if(!(n%4==3&&r>=5)&&(r===0||Math.random()<o)){let e=i.map(e=>(e%12+12)%12),n=Bg+Math.round((Math.random()-.5)*3.2);if(n=Math.max(0,Math.min(Fg.length-1,n)),r%4==0){let t=n,r=1/0;Fg.forEach((i,a)=>{e.includes(i%12)&&Math.abs(a-n)<r&&(t=a,r=Math.abs(a-n))}),n=t}Bg=n;let a=Fg[n];i[3]%12==1&&a%12==0&&(a+=1),Wg(t,a,r===0?.22:.15)}let s=(e,t)=>{Y(ug,e,{f0:110,f1:45,glide:.12,vol:t,d:.22})},c=(e,t)=>{Y(ug,e,{f0:220,f1:140,glide:.08,vol:t,d:.12}),jg(ug,e,{type:`bandpass`,f0:900,vol:t*.3,d:.06})};(r===0||r===4)&&s(t,.6),(r===3||r===7)&&c(t,.35),r===6&&n%2&&c(t,.25),r%2==1&&jg(ug,t,{type:`highpass`,f0:6e3,vol:.06,d:.03})}var Kg={[Lu.GRASS]:2897187,[Lu.DIRT]:4864812,[Lu.STONE]:4670012,[Lu.TRIM]:3091239,[Lu.ASH]:3815478,[Lu.CHAR]:2301212,[Lu.SHARD]:3814982},qg=class{constructor(){this.sets=new Map}add(e,t,n,r,i,a,{emissive:o=0,tint:s=1}={}){this.sets.has(e)||this.sets.set(e,{w:t,h:n,d:r,color:i,emissive:o,items:[]});let c=this.sets.get(e);return c.items.push({matrix:a,tint:s}),{set:c,index:c.items.length-1,matrix:a,color:c.color}}build(e){let t=new Rn;for(let n of this.sets.values()){let r=new gi(new Ri(n.w,n.h,n.d),new ca({color:16777215,emissive:n.emissive,flatShading:!0}),n.items.length);n.items.forEach((e,i)=>{r.setMatrixAt(i,e.matrix),r.setColorAt(i,t.setHex(n.color).multiplyScalar(e.tint))}),r.castShadow=!0,r.receiveShadow=!0,e.add(r),n.mesh=r}}},Jg=new rn().makeScale(0,0,0),Yg=new Map;function Xg(e){return Yg.has(e)||Yg.set(e,new ca({color:e,transparent:!0,opacity:.22,depthWrite:!1,flatShading:!0})),Yg.get(e)}function Zg(e,t){let n=e.x-t.x,r=e.z-t.z,i=(n+r)/Math.SQRT2,a=Math.abs(n-r)/Math.SQRT2;return i>-.4&&i<3.6&&a<1.5}var Qg=new rn,$g=new Nt,e_=new mn,t_=new L,n_=new L;function r_(e,t,n,{ry:r=0,rx:i=0,rz:a=0,s:o=1}={}){return Qg.clone().compose(t_.set(e,t,n),$g.setFromEuler(e_.set(i,r,a)),n_.set(o,o,o))}function i_(e){let t=new R;e.add(t);let n=(()=>{let e=1234;return()=>(e=e*16807%2147483647)/2147483647})();{let e=new Ri(.98,.2,.98),r=0;for(let e of Gu.ground)e!==Lu.VOID&&r++;let i=new gi(e,new ca,r),a=new Rn,o=0;for(let e=0;e<Gu.h;e++)for(let t=0;t<Gu.w;t++){let r=Gu.ground[e*Gu.w+t];if(r===Lu.VOID)continue;let s=r===Lu.STONE?-.1:-.1-.02-n()*.03;i.setMatrixAt(o,r_(t+.5,s,e+.5));let c=.85+n()*.3;r===Lu.STONE&&(t+e)%2&&(c*=.9),i.setColorAt(o++,a.setHex(Kg[r]).multiplyScalar(c))}i.receiveShadow=!0,t.add(i)}let r=new qg,i=[],a=[],o=[];for(let e of Gu.props){let s=n();switch(e.type){case`tree`:{let t=e.s*1.45,n=s*Math.PI;o.push({x:e.x,z:e.z,faded:!1,ghost:null,parts:[r.add(`trunk`,.26,1,.26,4862752,r_(e.x,.5*t,e.z,{ry:n,s:t}),{tint:.8+s*.3}),r.add(`leafA`,1.1,.7,1.1,2310175,r_(e.x,1.25*t,e.z,{ry:n,s:t}),{tint:.8+s*.4}),r.add(`leafB`,.7,.5,.7,3035686,r_(e.x,1.8*t,e.z,{ry:n+.4,s:t}),{tint:.8+s*.4})]});break}case`deadtree`:{let t=e.s*1.4,n=s*Math.PI;o.push({x:e.x,z:e.z,faded:!1,ghost:null,parts:[r.add(`deadTrunk`,.24,1.6,.24,4867136,r_(e.x,.8*t,e.z,{ry:n,rz:(s-.5)*.2,s:t}),{tint:.8+s*.3}),r.add(`deadBranch`,.12,.7,.12,4077620,r_(e.x+.18*t,1.25*t,e.z,{ry:n,rz:-.9,s:t}),{tint:.8+s*.3}),r.add(`deadBranch`,.12,.7,.12,4077620,r_(e.x-.14*t,1*t,e.z+.05,{ry:n+1,rz:.8,s:t}),{tint:.8+s*.3})]});break}case`spike`:r.add(`spike`,.4,1,.4,1840664,r_(e.x,.6*e.s,e.z,{ry:s*3,rz:(s-.5)*.3,s:1}).multiply(new rn().makeScale(1,1.3*e.s,1))),r.add(`spikeTip`,.18,.5,.18,5904922,r_(e.x,1.4*e.s,e.z,{ry:s*3,s:e.s}),{emissive:2754054});break;case`bones`:r.add(`bone`,.5,.08,.1,13617332,r_(e.x,.05,e.z,{ry:s*3})),r.add(`bone`,.5,.08,.1,13617332,r_(e.x+.1,.1,e.z,{ry:s*3+1.2})),r.add(`skull`,.24,.2,.24,14209728,r_(e.x-.15,.1,e.z+.1,{ry:s*6}));break;case`portal`:{let n=new z(new Xi(.15,.75,6,1),new qr({color:e.color,transparent:!0,opacity:.7,side:2,depthWrite:!1,blending:2}));n.rotation.x=-Math.PI/2,n.position.y=.06;let r=new z(new Bi(.7,.7,2.2,8,1,!0),new qr({color:e.color,transparent:!0,opacity:.18,side:2,depthWrite:!1,blending:2}));r.position.y=1.1;let i=K(e.x,0,e.z,n,r);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;i.add(G(.26,.9+t%2*.35,.26,4867664,{x:Math.cos(n)*1,y:.45+t%2*.17,z:Math.sin(n)*1,ry:n})),i.add(G(.12,.12,.12,e.color,{x:Math.cos(n)*1,y:1.05+t%2*.35,z:Math.sin(n)*1,emissive:e.color,edges:!1}))}a.push({swirl:n,glow:r}),t.add(i);break}case`rock`:r.add(`rock`,.8,.55,.7,5920336,r_(e.x,.22*e.s,e.z,{ry:s*3,rz:.1,s:e.s}),{tint:.8+s*.3}),r.add(`rockTop`,.45,.35,.45,6973022,r_(e.x+.1,.55*e.s,e.z-.05,{ry:s*5,s:e.s}));break;case`crystal`:for(let t=0;t<3;t++){let n=t*2.1+s*6,i=[1,.7,.55][t]*e.s,a=e.color??6281448;r.add(e.color?`crystal${e.color}`:`crystal`,.22,1,.22,a,r_(e.x+Math.cos(n)*.15*(t>0),i/2-.05,e.z+Math.sin(n)*.15*(t>0),{rx:t?Math.cos(n)*.35:0,rz:t?Math.sin(n)*.35:0,ry:n,s:1}).multiply(new rn().makeScale(1,i,1)),{emissive:e.color?new Rn(a).multiplyScalar(.3).getHex():870997})}break;case`pillar`:{let t=e.broken?1.3+s*.8:3.4;r.add(`pillarBase`,.9,.3,.9,6972506,r_(e.x,.15,e.z)),r.add(`pillarShaft`,.62,1,.62,8222314,r_(e.x,.3+t/2,e.z).multiply(new rn().makeScale(1,t,1)),{tint:.9+s*.2}),e.broken?r.add(`rubble`,.35,.25,.3,8222314,r_(e.x+.55,.12,e.z+.3,{ry:s*3})):r.add(`pillarCap`,.9,.25,.9,6972506,r_(e.x,.3+t+.12,e.z));break}case`house`:{let n=K(e.x,0,e.z,G(e.w-.1,2.6,e.d-.1,9075298,{y:1.3}),G(e.w+.2,.18,e.d+.2,4864554,{y:2.66}),G(e.w+.1,.6,e.d*.75,e.roof,{y:3.05}),G(e.w,.55,e.d*.45,e.roof,{y:3.6}),G(.8,1.7,.06,3811352,{y:.85,z:e.d/2-.02}),G(.5,.45,.06,15908960,{x:-e.w/4-.25,y:1.6,z:e.d/2-.02,emissive:6965776,edges:!1}),G(.5,.45,.06,15908960,{x:e.w/4+.25,y:1.6,z:e.d/2-.02,emissive:6965776,edges:!1}),G(.45,1,.45,5918792,{x:e.w/2-.6,y:3.7,z:-.3}));t.add(n);break}case`board`:t.add(K(e.x,0,e.z,G(.12,1.9,.12,4862752,{x:-.5,y:.95}),G(.12,1.9,.12,4862752,{x:.5,y:.95}),G(1.3,.8,.08,7031339,{y:1.4}),G(.35,.45,.02,15260864,{x:-.3,y:1.4,z:.05,edges:!1,rz:.05}),G(.3,.35,.02,14208176,{x:.25,y:1.45,z:.05,edges:!1,rz:-.08})));break;case`plinth`:{let n=K(e.x,0,e.z,G(2,.3,2,5919818,{y:.15}),G(1.5,.35,1.5,6972506,{y:.47}),G(1,.6,1,8222314,{y:.95}),G(.9,.12,.9,13214266,{y:1.31}));for(let e=0;e<9;e++){let t=e/9*Math.PI*2,r=e%3==1;n.add(G(.1,r?.12:.3,.1,13214266,{x:Math.cos(t)*.36,y:r?1.43:1.52,z:Math.sin(t)*.36,ry:-t}))}n.add(G(.12,.08,.1,13214266,{x:.7,y:.69,z:.55,ry:.6,rz:1.2})),t.add(n);break}case`shard`:{let n=new z(new Ji(.26),new ca({color:e.color,emissive:e.color,emissiveIntensity:.55,flatShading:!0}));n.scale.set(1,1.9,1),n.castShadow=!0;let r=K(e.x,0,e.z,G(.7,.25,.7,3814704,{y:.12}),G(.5,.12,.5,5919818,{y:.3}),n);n.position.y=1,i.push({crystal:n,k:e.k}),t.add(r);break}}}r.build(t);function s(e,n){if(e.faded=n,n&&!e.ghost){e.ghost=new R;for(let t of e.parts){let n=new z(t.set.mesh.geometry,Xg(t.color));n.matrixAutoUpdate=!1,n.matrix.copy(t.matrix),e.ghost.add(n)}t.add(e.ghost)}e.ghost&&(e.ghost.visible=n);for(let t of e.parts)t.set.mesh.setMatrixAt(t.index,n?Jg:t.matrix),t.set.mesh.instanceMatrix.needsUpdate=!0}let c=null;return{root:t,update(e,t){if(t&&(!c||Math.hypot(t.x-c.x,t.z-c.z)>.15)){c={x:t.x,z:t.z};for(let e of o){if(Math.abs(e.x-t.x)>5||Math.abs(e.z-t.z)>5){e.faded&&s(e,!1);continue}let n=Zg(e,t);n!==e.faded&&s(e,n)}}for(let[t,n]of a.entries())n.swirl.rotation.z=e*1.2+t,n.swirl.material.opacity=.55+.2*Math.sin(e*2.4+t),n.glow.material.opacity=.14+.06*Math.sin(e*1.7+t);for(let t of i)t.crystal.position.y=1+Math.sin(e*1.5+t.k*.7)*.08,t.crystal.rotation.y=e*.6+t.k,t.crystal.material.emissiveIntensity=.45+.25*Math.sin(e*2+t.k)}}}var a_={[Lu.GRASS]:`#2a3322`,[Lu.DIRT]:`#5a4632`,[Lu.STONE]:`#5b554d`,[Lu.TRIM]:`#3a352f`,[Lu.ASH]:`#3c3a38`,[Lu.CHAR]:`#2a1c1c`,[Lu.SHARD]:`#3e3a4c`},o_={},s_=ku.oathgate,c_=null;function l_(e){let t=document.createElement(`canvas`);t.width=e.w,t.height=e.h;let n=t.getContext(`2d`);for(let t=0;t<e.h;t++)for(let r=0;r<e.w;r++){let i=(e.z0+t)*Gu.w+e.x0+r;n.fillStyle=Gu.solid[i]?`#141a12`:a_[Gu.ground[i]],n.fillRect(r,t,1,1)}n.translate(-e.x0,-e.z0);for(let e of Gu.props)e.type===`house`&&(n.fillStyle=`#8a6a4a`,n.fillRect(e.x-e.w/2,e.z-e.d/2,e.w,e.d)),e.type===`shard`&&(n.fillStyle=`#`+Ru[e.k].toString(16).padStart(6,`0`),n.fillRect(e.x-.5,e.z-.5,1,1)),e.type===`plinth`&&(n.fillStyle=`#c9a23a`,n.fillRect(e.x-1,e.z-1,2,2)),e.type===`portal`&&(n.fillStyle=`#`+e.color.toString(16).padStart(6,`0`),n.fillRect(e.x-1.5,e.z-1.5,3,3));return t}function u_(e=`oathgate`){s_=ku[e],c_=o_[e]??=l_(s_)}function d_(e,t){let n=e.canvas;e.setTransform(1,0,0,1,0,0),e.translate(n.width/2,n.height/2),e.rotate(Math.PI/4),e.scale(t,t),e.translate(-s_.w/2,-s_.h/2)}function f_(e,t,n){if(!c_)return null;let r=e.getBoundingClientRect(),i=e.width/r.width,a=e.width/(s_.w*Math.SQRT2),o=(t-r.left)*i-e.width/2,s=(n-r.top)*i-e.height/2,c=Math.SQRT1_2,l=(o*c+s*c)/a+s_.w/2+s_.x0,u=(-o*c+s*c)/a+s_.h/2+s_.z0;return l<s_.x0||u<s_.z0||l>s_.x0+s_.w||u>s_.z0+s_.h?null:{x:l,z:u}}function p_(e,t,n,r,i,a=``){if(!c_)return;let o=e.getContext(`2d`),s=e.width/(s_.w*Math.SQRT2);o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,e.width,e.height),o.imageSmoothingEnabled=!1,d_(o,s),o.drawImage(c_,0,0),o.translate(-s_.x0,-s_.z0);for(let e of i?.values()??[]){if(e.deadT>=0||e.secret)continue;let t=e.m.root.position;o.fillStyle=e.pet?`#a07aff`:e.critter?`#d8c08a`:e.boss?`#ff3a2a`:`#d0503a`,o.fillRect(t.x-.6,t.z-.6,1.2,1.2)}for(let e of t.values()){if(e.id===n)continue;let t=e.c.root.position,r=a&&e.server.party===a;o.fillStyle=r?`#5af07a`:`#f2ece0`;let i=r?1.2:.8;o.fillRect(t.x-i,t.z-i,i*2,i*2)}r&&(o.fillStyle=`#ffd24a`,o.fillRect(r.x-1.1,r.z-1.1,2.2,2.2))}var m_={attack:`enemy`,cleave:`self`,charge:`enemy`,battle_cry:`self`,firebolt:`enemy`,frost_nova:`self`,arc_chain:`enemy`,blink:`blink`,mana_shield:`self`,cataclysm:`ground`,spellstrike:`self`,flying_edge:`enemy`,qi_sword_strike:`enemy`,mend:`ally`,smite:`enemy`,ward:`ally`,holy_words:`self`,snare_rune:`ground`,glyph_field:`ground`,script_of_binding:`ground`,mount:`self`,raise_bonewalker:`self`,bone_armor:`self`,bone_dragon:`self`,wyrm_lance:`enemy`,sacred_chant:`self`,rampage:`self`,sword_dance:`self`,meteor_storm:`ground`,summon_dragon:`self`,dragon_rush:`ground`,fire_breath:`enemy`,dawnlight:`ally`,dawn_blessing:`ally`,sunrise:`self`,gale_step:`self`},h_=new Set([`mend`,`ward`,`bone_armor`,`mana_shield`,`battle_cry`,`mount`,`raise_bonewalker`,`bone_dragon`,`spellstrike`,`summon_dragon`,`dawnlight`,`dawn_blessing`,`sunrise`,`gale_step`]),g_=9105568,__=16742986;function v_(e,t){if(e===`attack`)return{kind:`enemy`,range:9,r:0,color:__,chase:!0};let n=gu(t.occ,e)?.use;if(!n)return null;let r=n=>yu(n,t.skills.get(e)||1),i=Kl[t.occ].range,a=e===`mount`?0:r(n.range??0),o=e===`cleave`?i+n.reach:e===`mount`?n.range:r(n.radius??n.r??n.reach??.7);return{kind:m_[e]??`self`,range:a,r:o,color:h_.has(e)?g_:__}}var y_=e=>new qr({transparent:!0,opacity:e,depthWrite:!1,side:2}),b_=e=>(e.rotation.x=-Math.PI/2,e.renderOrder=2,e);function x_(e){let t=b_(new z(new Xi(.975,1,72),y_(.4))),n=b_(new z(new zi(1,48),y_(.16))),r=b_(new z(new Xi(.93,1,48),y_(.85))),i=new R;i.add(n,r);let a=b_(new z(new Xi(.5,.64,32),y_(.9))),o=[t,i,a];for(let t of o)t.visible=!1,e.add(t);let s=(e,t,n,r)=>{e.position.set(t,.05,n),e.scale.setScalar(r),e.visible=!0};return{hide(){for(let e of o)e.visible=!1},update(e,c,l,u,d){for(let e of o)e.visible=!1;if(!e||!c)return;for(let i of[t.material,n.material,r.material,a.material])i.color.setHex(e.color);e.range>0&&s(t,c.x,c.z,e.range);let f=t=>Math.hypot(t.x-c.x,t.z-c.z)<=e.range,p=t=>{let n=Math.hypot(t.x-c.x,t.z-c.z),r=n>e.range?e.range/n:1;return{x:c.x+(t.x-c.x)*r,z:c.z+(t.z-c.z)*r}};if(e.kind===`self`)s(i,c.x,c.z,e.r);else if(e.kind===`ground`){let t=u&&f(u)?u:l?p(l):c;s(i,t.x,t.z,e.r)}else if(e.kind===`blink`&&l){let e=p(l);s(i,e.x,e.z,.45)}else u&&(s(a,u.x,u.z,1),a.material.opacity=e.chase||f(u)?.9:.3,a.rotation.z=d*1.5);r.rotation.z=d*.5,n.material.opacity=.13+.05*Math.sin(d*5)}}}var S_=`https://www.gstatic.com/firebasejs/10.12.2/`,C_={apiKey:`AIzaSyDxhqPV_ZioIawO7K3NZkSLOJ3sGPZF2rQ`,authDomain:`pkrig-games.firebaseapp.com`,projectId:`pkrig-games`,storageBucket:`pkrig-games.firebasestorage.app`,messagingSenderId:`101640624356`,appId:`1:101640624356:web:82bf674ebf21652fe6f4f1`},w_=null;function T_(){return w_??=(async()=>{let[{initializeApp:e},t,n]=await Promise.all([`firebase-app.js`,`firebase-auth.js`,`firebase-firestore.js`].map(e=>import(S_+e))),r=e(C_),i=t.getAuth(r),a=n.getFirestore(r);await t.getRedirectResult(i).catch(()=>{}),await i.authStateReady();let o=()=>n.doc(a,`ninefold`,i.currentUser.uid);return{user:()=>i.currentUser,onUser:e=>t.onAuthStateChanged(i,e),async signInGoogle(){let e=new t.GoogleAuthProvider;try{await t.signInWithPopup(i,e)}catch(n){if(n.code===`auth/popup-blocked`||n.code===`auth/operation-not-supported-in-this-environment`)await t.signInWithRedirect(i,e);else throw n}},signInGuest:()=>t.signInAnonymously(i),signOut:()=>t.signOut(i),async list(){return i.currentUser?(await n.getDoc(o())).data()?.saves??{}:{}},async save(e){let t=await this.list(),r=e.name.toLowerCase();if(!t[r]&&Object.keys(t).length>=12)throw Error(`You can keep 12 heroes; load one and save over it.`);await n.setDoc(o(),{saves:{[r]:e}},{mergeFields:[new n.FieldPath(`saves`,r)]})}}})(),w_.catch(()=>{w_=null}),w_}function E_(e){let t=e=>e instanceof Map?Object.fromEntries(e):e?.toJSON?e.toJSON():{...e},n={name:e.name,occ:e.occ,sex:e.sex,job:e.job,job3:e.job3||``,level:e.level,exp:e.exp,points:e.points??0,gold:e.gold??0,skills:t(e.skills),use:t(e.use??{}),equip:t(e.equip),bag:[...e.bag],horse:e.horse||``,riding:!!e.mount&&e.mount===e.horse,at:Date.now()};for(let t of Object.keys(wd))n[t]=e[t];return n}var X=(e,t=.8)=>new qr({color:e,transparent:!0,opacity:t,depthWrite:!1,blending:2,side:2}),D_=e=>(e.rotation.x=-Math.PI/2,e);function O_(e,{shake:t=()=>{},sound:n=()=>{}}={}){let r=[],i=new Map;function a(t,n,i){e.add(t);let a={obj:t,t:0,life:n,update:i};return r.push(a),t.userData.fx=a,t}let o=e=>{e&&(e.t=e.life)};function s(e,t){let n=new R;n.add(D_(new z(new Xi(t*.82,t,6),X(e,.8))));let r=D_(new z(new Xi(t*.35,t*.45,4),X(e,.9)));return n.add(r),n.userData.inner=r,n}function c(e,t,n,r,i,o,s=.12){let c=D_(new z(new Xi(1-s,1,40),X(n)));c.position.set(e,.06,t),a(c,o,e=>{c.scale.setScalar(r+(i-r)*Math.min(1,e*1.6)),c.material.opacity=.85*(1-e)})}function l(e,t,n,r){let i=new z(new qi(n,0),X(t,.7));i.position.copy(e),a(i,r,e=>{i.scale.setScalar(1+e*1.5),i.material.opacity=.7*(1-e),i.rotation.y+=.2})}function u(e){c(e.x,e.z,10119935,.2,.9,.7),l(new L(e.x,.3,e.z),6969978,.45,.6),l(new L(e.x,.6,e.z),11963135,.25,.4)}function d(e,t){let n=!1;a(new R,Math.max(.001,e),e=>{e>=1&&!n&&(n=!0,t())})}function f(e,t,n,r,i,o=.1){let s=new R;for(let e=0;e<n;e++){let e=new z(new Ri(o,o,o),X(t,.95)),n=Math.random()*Math.PI*2,i=.4+Math.random()*.9,a=r*(.5+Math.random()*.7);e.userData.v=new L(Math.cos(n)*a,i*a,Math.sin(n)*a),s.add(e)}s.position.copy(e),a(s,i,(t,n)=>{for(let r of s.children)r.userData.v.y-=9*n,r.position.addScaledVector(r.userData.v,n),r.position.y<-e.y&&(r.position.y=-e.y,r.userData.v.multiplyScalar(.4),r.userData.v.y*=-.5),r.rotation.x+=n*6,r.rotation.y+=n*5,r.material.opacity=.95*(1-t)})}function p(e,t,n,r,i,o){let s=new R,c=e.distanceTo(t),l=new z(new Ri(r,r*.6,c),X(n,.75));s.add(l),o&&s.add(new z(new Ri(r*.35,r*.25,c),X(o,.95))),s.position.copy(e).lerp(t,.5),s.lookAt(t),a(s,i,e=>{s.children.forEach((t,n)=>{t.material.opacity=(n?.95:.75)*(1-e)**1.5}),s.scale.set(1-e*.6,1-e*.6,1)})}function m(e,t,n,r,i,o=12){let s=new R,c=new z(new Ri(r,o,r),X(n,.75)),l=new z(new Ri(r*.4,o,r*.4),X(16777215,.9));s.add(c,l),s.position.set(e,o/2,t),a(s,i,e=>{let t=Math.min(1,e*5);s.scale.set(1-e*.8,t,1-e*.8),s.position.y=o-o/2*t,c.material.opacity=.75*(1-e),l.material.opacity=.9*(1-e)})}function h(e,t,n){let r=new R;for(let e of[.8,-.8]){let t=new z(new Ri(1.3,.07,.04),X(n,1));t.rotation.z=e,t.add(new z(new Ri(1.3,.025,.05),X(16777215,1))),r.add(t)}r.position.copy(e),r.rotation.y=t,a(r,.35,e=>{r.scale.setScalar(.6+e*.7),r.children.forEach(t=>{t.material.opacity=1-e,t.children[0].material.opacity=1-e})})}function g(e){let t=new R;t.add(new z(new Ri(.1,.03,.9),X(e,.9))),t.add(new z(new Ri(.04,.035,.85),X(16777215,.95)));let n=new z(new Ri(.34,.05,.06),X(e,.9));n.position.z=-.45;let r=new z(new Ri(.06,.05,.22),X(e,.7));return r.position.z=-.58,t.add(n,r),t}function _(e,r,i,o){let s=o?.75:.55,u=o?1.1:.4;d(Math.max(0,r-s),()=>{let t=new R;t.add(new z(new qi(u,0),X(16738842,1))),t.add(new z(new qi(u*.6,0),X(16773280,1)));let n=new z(new Ri(u*.9,u*.9,5),X(16747050,.5));n.position.z=-2.6,t.add(n);let r=new L(e.x-5,15,e.z-5),i=new L(e.x,.3,e.z);t.position.copy(r),t.lookAt(i),a(t,s,(e,n)=>{t.position.copy(r).lerp(i,e*e),t.children[0].rotation.x+=n*8,t.children[1].rotation.y+=n*9})}),d(r,()=>{let r=new L(e.x,.4,e.z);c(e.x,e.z,16756832,.3,i*1.25,o?.9:.5,.25),c(e.x,e.z,16730650,.2,i,o?.7:.4,.45),l(r,16742954,o?1.6:.6,o?.8:.45),l(r.clone().setY(.8),16773280,o?.9:.35,.35),f(r,16747050,o?40:12,o?7:4.5,o?1.4:.9,o?.14:.09);let s=D_(new z(new zi(i*.8,20),new qr({color:1707014,transparent:!0,opacity:.55,depthWrite:!1})));s.position.set(e.x,.03,e.z),a(s,o?4:2.5,e=>{s.material.opacity=.55*(1-e)}),o&&m(e.x,e.z,16738842,2.2,.9,10),t(o?1:.28),n(`boom`,e.x,e.z,o?1:.55)})}function v(e,t){let n=new R,r=e.r,i=[],o=new R;for(let e=0;e<12;e++){let t=D_(new z(new Yi(.16,r*.62),X(e%2?16756848:16769162,.5))),n=e/12*Math.PI*2;t.position.set(Math.cos(n)*r*.5,.06,Math.sin(n)*r*.5),t.rotation.z=-n-Math.PI/2,o.add(t),i.push(t)}let s=D_(new z(new Xi(.9,1.05,32),X(16773312,.85))),c=D_(new z(new Xi(r*.86,r*.9,8),X(16763e3,.7)));s.position.y=.07,c.position.y=.06;let l=new z(new Bi(.7,1.1,9,16,1,!0),X(16771248,.16));l.position.y=4.5;let u=new R;for(let e=0;e<26;e++){let t=new z(new Ri(.09,.09,.09),X(e%3?16769162:16777215,.9)),n=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*r*.9;t.userData={x:Math.cos(n)*i,z:Math.sin(n)*i,s:.6+Math.random()*.9,o:Math.random()},u.add(t)}n.add(o,s,c,l,u),a(n,e.channel+.3,(r,a,d)=>{let f=t(e.id,0);f&&n.position.set(f.x,0,f.z);let p=Math.min(1,d/.4),m=d>e.channel?1-(d-e.channel)/.3:1;o.scale.set(p,p,p),o.rotation.y=d*.6,c.rotation.z=-d*.9,s.rotation.z=d*1.5,i.forEach((e,t)=>{e.material.opacity=(.3+.25*Math.sin(d*5+t))*m}),s.material.opacity=(.6+.3*Math.sin(d*8))*m,c.material.opacity=.7*p*m,l.material.opacity=(.12+.06*Math.sin(d*4))*m;for(let e of u.children){let t=e.userData,n=(d*t.s*.6+t.o)%1;e.position.set(t.x,n*3,t.z),e.material.opacity=.9*(1-n)*m}})}function y(e,t,n,r){let i=new R;for(let e=0;e<n;e++){let r=new z(new Ri(.08,.08,.08),X(t,.9));r.userData={a:e/n*Math.PI*2,r:.25+Math.random()*.2,h:Math.random()*.4,s:.8+Math.random()*.6},i.add(r)}let o=a(i,r,t=>{let n=e();n&&o.position.copy(n);for(let e of i.children){let n=e.userData;e.position.set(Math.cos(n.a+t*3)*n.r,n.h+t*1.4*n.s,Math.sin(n.a+t*3)*n.r),e.material.opacity=.9*(1-t)}})}function b(e,t,n,r){let i=new R,o=[e.clone()],s=Math.max(2,Math.round(e.distanceTo(t)/.5));for(let n=1;n<s;n++){let r=e.clone().lerp(t,n/s);r.x+=(Math.random()-.5)*.35,r.y+=(Math.random()-.5)*.25,r.z+=(Math.random()-.5)*.35,o.push(r)}o.push(t.clone());let c=X(n,.95);for(let e=0;e<o.length-1;e++){let t=new z(new Ri(.06,.06,o[e].distanceTo(o[e+1])),c);t.position.copy(o[e]).lerp(o[e+1],.5),t.lookAt(o[e+1]),i.add(t)}a(i,r,e=>{c.opacity=.95*(1-e)*(.6+.4*Math.random())})}let x={cleave(e){let t=(e.arc??120)*Math.PI/180,n=e.dir-Math.PI/2,r=D_(new z(new Xi(.4,e.r,24,1,n-t/2,t),X(16770736,.7)));r.position.set(e.x,.5,e.z),a(r,.3,e=>{r.material.opacity=.7*(1-e),r.scale.setScalar(.8+e*.3)})},battle_cry(e){c(e.x,e.z,16734778,.5,e.r,.6,.15),c(e.x,e.z,16756832,.3,e.r*.6,.45)},charge(e){c(e.x,e.z,14207144,.3,1.2,.35)},firebolt(e,t){let n=new z(new qi(.16,1),X(16747050,1)),r=new z(new qi(.09,0),X(16773280,1));n.add(r);let i=new L(e.x,1,e.z);n.position.copy(i);let o=!1;a(n,e.travel+.25,(r,a,s)=>{let c=t(e.target,.45)??n.position,u=Math.min(1,s/Math.max(.05,e.travel));n.position.copy(i).lerp(c,u),n.position.y+=Math.sin(u*Math.PI)*.3,u>=1&&!o&&(o=!0,l(c.clone(),16738842,.3,.35),n.visible=!1)})},spellstrike(e,t){let n=t(e.id,0);n&&(c(n.x,n.z,11569919,1.4,.3,.4,.1),c(n.x,n.z,9101567,1,.2,.3,.08),f(new L(n.x,1,n.z),13154559,12,2.5,.5,.07),y(()=>t(e.id,.4),11569919,10,.8))},qi_sword_strike(e){let t=new L(e.x,1,e.z),n=(e.combined??1)-1;e.points.forEach((e,r)=>{let i=new L(e.x,.9,e.z),a=t.clone();if(d(r*.07,()=>{p(a,i,8382672,.16,.3,16777215),c(e.x,e.z,10481884,.2,1.1,.3,.18),f(i,15269880,8,3.5,.4,.07)}),r===0)for(let t=1;t<=n;t++){let r=t/(n+1)*Math.PI,a=new L(Math.cos(r)*.6,.5*Math.sin(r*2),Math.sin(r)*.6);d(t*.06,()=>{p(i.clone().add(a),i.clone().sub(a),8382672,.14,.28,16777215),t===n&&(c(e.x,e.z,15269880,.3,1.1+n*.25,.35,.2),f(i,16777215,6+n*4,4.5,.45,.08))})}t=i})},flying_edge(e,t){let r=g(10128127),i=new L(e.x,1,e.z);r.position.copy(i);let o=!1,s=i.clone();a(r,e.travel+.2,(a,l,u)=>{let d=t(e.target,.6)??r.position.clone(),m=Math.min(1,u/Math.max(.05,e.travel));r.position.copy(i).lerp(d,m),r.lookAt(d),r.position.distanceTo(s)>.35&&(p(s,r.position.clone(),9101567,.06,.25,16777215),s=r.position.clone()),m>=1&&!o&&(o=!0,r.visible=!1,c(d.x,d.z,10128127,.2,1,.35,.25),f(d,13162751,10,3.5,.5,.07),n(`edge`,d.x,d.z,.6))})},frost_nova(e){c(e.x,e.z,10478847,.3,e.r,.5,.2),c(e.x,e.z,16777215,.2,e.r*.8,.35,.08)},arc_chain(e){for(let t=0;t<e.points.length-1;t++){let n=new L(e.points[t].x,t?.5:1,e.points[t].z),r=new L(e.points[t+1].x,.5,e.points[t+1].z);b(n,r,12116223,.3),b(n,r,6990079,.25)}},blink(e){l(new L(e.from.x,.7,e.from.z),11569919,.35,.4),l(new L(e.to.x,.7,e.to.z),11569919,.35,.4)},mend(e,t){y(()=>t(e.target,.2),9105568,10,.9);for(let n of e.also??[])y(()=>t(n,.2),13168800,6,.8)},smite(e,t){let n=t(e.target,0);if(!n)return;let r=new z(new Ri(.35,4,.35),X(16769162,.8));r.position.set(n.x,2,n.z),a(r,.4,e=>{r.material.opacity=.8*(1-e),r.scale.set(1-e*.7,1,1-e*.7)}),c(n.x,n.z,16769162,.2,.9,.35)},ward(e,t){let n=t(e.target,.8);n&&l(n,16769162,.45,.35)},holy_words(e,t){let n=new R,r=D_(new z(new zi(e.r,40),X(16765024,.1))),i=D_(new z(new Xi(e.r-.1,e.r,48),X(16769162,.7)));r.position.y=.04,i.position.y=.05,n.add(r,i),a(n,e.channel+.2,(a,o,s)=>{let c=t(e.id,0);c&&n.position.set(c.x,0,c.z);let l=s>e.channel?1-(s-e.channel)/.2:Math.min(1,s*5);r.material.opacity=(.08+.04*Math.sin(s*6))*l,i.material.opacity=.7*l}),y(()=>t(e.id,.2),16769162,14,e.channel),e.litany&&v(e,t)},mana_shield(e,t){let n=t(e.id,0);n&&c(n.x,n.z,7317759,.2,1.1,.5),y(()=>t(e.id,.3),7317759,8,e.dur)},bone_armor(e,t){let n=t(e.id,0);if(n){for(let r=0;r<8;r++){let i=r/8*Math.PI*2,o=new z(new Ri(.1,.32,.1),X(15261900,.9));a(o,.45,r=>{let a=t(e.id,0)??n,s=1.3*(1-r)+.35;o.position.set(a.x+Math.cos(i+r)*s,.5+r*.6,a.z+Math.sin(i+r)*s),o.rotation.y=i+r*4,o.material.opacity=.9*(1-r*.6)})}d(.4,()=>{let n=t(e.id,0);n&&c(n.x,n.z,10119935,.3,1.2,.4)})}},gale_step(e,t){c(e.x,e.z,14218495,.2,1.4,.4,.12),f(new L(e.x,.8,e.z),15399167,12,4,.5,.07),y(()=>t(e.id,.6),14218495,10,e.dur)},dawnlight(e){let t=new L(e.x,1.2,e.z);e.chain.forEach((e,n)=>{let r=t.clone(),i=new L(e.x,1,e.z);d(n*.12,()=>{p(r,i,16767088,.12,.45,16776168),c(e.x,e.z,16769162,.2,1,.5,.15),f(i,16773296,10,2.5,.7,.07)}),t=i})},dawn_blessing(e){c(e.x,e.z,16767088,.3,e.r,.7,.14);for(let t of e.blessed)m(t.x,t.z,16764778,.5,.7,6),f(new L(t.x,1,t.z),16773296,8,2,.8,.07)},sunrise(e){let t=D_(new z(new Xi(.9,1,72),X(16767088,.7)));t.position.set(e.x,.06,e.z),a(t,e.channel,n=>{t.scale.setScalar(e.r*(1-n*.85)),t.material.opacity=.3+.5*n}),y(()=>new L(e.x,.3,e.z),16771232,14,e.channel)},raise_bonewalker(e){for(let t of e.spawned)u(t)},bone_dragon(e){for(let t of e.spawned)u(t),c(t.x,t.z,9109440,.4,2.2,1,.2),l(new L(t.x,.9,t.z),4864602,1.1,.9)},summon_dragon(e){if(e.gone)l(new L(e.x,.8,e.z),5917252,1,.7),f(new L(e.x,.8,e.z),16747066,10,3,.6,.07);else for(let t of e.spawned)c(t.x,t.z,16738858,.3,1.2+e.rank*.3,.8,.2),c(t.x,t.z,16765024,.2,.8+e.rank*.2,.6,.12),l(new L(t.x,.7,t.z),16747066,.6+e.rank*.15,.6),f(new L(t.x,.6,t.z),16760928,12+e.rank*3,4,.8,.08)},dragon_rush(e){let n=Math.max(5,Math.round(Math.hypot(e.to.x-e.from.x,e.to.z-e.from.z)*1.5));for(let t=1;t<=n;t++){let r=t/n,i=e.from.x+(e.to.x-e.from.x)*r,a=e.from.z+(e.to.z-e.from.z)*r;d(e.travel*Math.sqrt(r),()=>{l(new L(i,.4,a),t%2?16742954:16760912,.18+r*.15,.45),t%2&&f(new L(i,.5,a),16752704,4,2.5,.4,.06)})}d(e.travel,()=>{c(e.to.x,e.to.z,16738858,.3,2,.5,.25),l(new L(e.to.x,.6,e.to.z),6965818,.8,.5),t(.45)})},fire_breath(e,n){let r=e.arc*Math.PI/180,i=e.dir-Math.PI/2,o=D_(new z(new Xi(.6,e.r,24,1,i-r/2,r),X(16747050,.65)));o.position.set(e.x,.5,e.z),a(o,.7,e=>{o.material.opacity=.65*(1-e),o.scale.setScalar(.5+e*.6)});for(let t=1;t<=5;t++){let n=e.r*t/5.5,i=t/5*.8;for(let a of[-1,0,1]){let o=e.dir+a*i*r/2;d(t*.04,()=>l(new L(e.x+Math.sin(o)*n,.9-t*.1,e.z+Math.cos(o)*n),a?16738842:16765024,.12+t*.045,.5))}}for(let t of e.hits)d(.2,()=>{let e=n(t,.6);e&&f(e,16752704,10,3.5,.6,.08)});t(.3)},wyrm_lance(e,r){let i=new L(e.from.x,.9,e.from.z),o=new L(e.to.x,.9,e.to.z),s=i.distanceTo(o),u=new L(o.z-i.z,0,i.x-o.x).normalize(),h=Math.max(6,Math.round(s*2.2)),g=new R,_=new R;_.add(new z(new Ri(.5,.35,.7),X(9099519,.95)));for(let e of[-.18,.18]){let t=new z(new Ri(.06,.06,.5),X(16777215,.95));t.position.set(e,.25,-.3),t.rotation.x=.6,_.add(t)}for(let e=0;e<h;e++){let t=new z(new Ri(.42-.3*e/h,.3-.18*e/h,.5),X(e%2?5943528:9099519,.8));t.visible=!1,g.add(t)}g.add(_),a(g,e.travel+.6,(t,n,r)=>{let a=Math.min(1,r/e.travel);g.children.forEach((t,n)=>{if(t===_)return;let c=a-n/h*.9;if(t.visible=c>0,!t.visible)return;let l=i.clone().lerp(o,c).addScaledVector(u,Math.sin(c*s*1.6-r*10)*.35);l.y=.9+Math.sin(c*s*1.1)*.2,t.position.copy(l),t.lookAt(o.x,l.y,o.z),t.material.opacity=.85*Math.max(0,1-(r-e.travel)/.6)*(1-n/h*.6)}),_.position.copy(i).lerp(o,a),_.position.y=1,_.lookAt(o.x,1,o.z),_.children.forEach(t=>{t.material.opacity=Math.max(0,1-(r-e.travel)/.4)})}),p(i.clone().setY(.5),o.clone().setY(.5),5943528,.5,e.travel+.5,16777215);for(let t=1;t<=4;t++)d(e.travel*t/5,()=>l(i.clone().lerp(o,t/5).setY(.4),12118271,.35,.4));d(e.travel,()=>{let i=r(e.target,.9)??o;c(i.x,i.z,16777215,.3,3.2,.6,.15),c(i.x,i.z,5943528,.2,2.4,.5,.35),l(i,9099519,.9,.5),f(i,9099519,26,6,1.1,.12),m(i.x,i.z,9099519,.7,.5,8),t(.8),n(`boom`,i.x,i.z,.9)})},sacred_chant(e,t){let n=new R,r=D_(new z(new Xi(1.75,1.9,48),X(16769162,.85))),i=D_(new z(new Xi(1.25,1.33,48),X(16769162,.8))),o=D_(new z(new Xi(1.5,1.62,3),X(16773312,.85))),s=D_(new z(new Xi(1.5,1.62,3),X(16773312,.85))),c=D_(new z(new zi(1.9,48),X(16765024,.12)));s.rotation.z=Math.PI;let l=new z(new Ri(1.1,7,1.1),X(16773312,.2));l.position.y=3.5,n.add(c,r,i,o,s,l),n.children.forEach(e=>{e!==l&&(e.position.y=.05)}),a(n,e.channel+.3,(a,c,u)=>{let d=t(e.id,0);d&&n.position.set(d.x,0,d.z);let f=Math.min(1,u/.35),p=u>e.channel?1-(u-e.channel)/.3:1;n.scale.set(f,1,f),r.rotation.z=u*.8,i.rotation.z=-u*1.2,o.rotation.z=u*.5,s.rotation.z=Math.PI+u*.5,[r,i,o,s].forEach(e=>{e.material.opacity=(.65+.3*Math.sin(u*9))*p}),l.material.opacity=.25*Math.min(1,u/e.channel)*p,l.scale.set(.6+.6*Math.min(1,u/e.channel),1,.6+.6*Math.min(1,u/e.channel))}),y(()=>t(e.id,.2),16769162,18,e.channel);for(let n=0;n<6;n++){let r=n/6*Math.PI*2,i=new z(new Xi(.12,.18,4),X(16773312,.9));a(i,e.channel,n=>{let a=t(e.id,0);a&&i.position.set(a.x+Math.cos(r+n*3)*1.6,.3+n*2.4,a.z+Math.sin(r+n*3)*1.6),i.rotation.y=n*8,i.material.opacity=.9*Math.sin(n*Math.PI)})}},rampage(e){let r=new L(e.from.x,.8,e.from.z);for(let i of e.hops){let a=r.clone(),o=new L(i.x,.8,i.z),s=new L(i.at.x,.9,i.at.z);d(Math.max(0,i.t-e.hop*.8),()=>{p(a,o,14173483,.45,.45,16765088),l(a.clone().setY(.5),9054746,.4,.4)}),d(i.t,()=>{h(s,Math.atan2(o.x-a.x,o.z-a.z),16734778),f(s,16742986,10,4,.6,.08),t(.3),n(`cleave`,s.x,s.z,.8)}),r=o}},sword_dance(e,t){let n=new R;for(let e=0;e<8;e++){let t=g(e%2?10128127:9101567);t.userData.a=e/8*Math.PI*2,n.add(t)}let r=D_(new z(new Xi(1.25,1.35,8),X(10128127,.6)));n.add(r),a(n,e.dur,(i,a,o)=>{let s=t(e.id,0);s&&n.position.set(s.x,0,s.z);let c=Math.min(1,o/.5),l=i>.85?(1-i)/.15:1;for(let e of n.children){if(e===r)continue;let t=e.userData.a+o*3.2;e.position.set(Math.cos(t)*1.3,.2+c*1.4+Math.sin(o*6+e.userData.a)*.1,Math.sin(t)*1.3),e.rotation.set(-Math.PI/2,0,0),e.rotateY(t),e.children.forEach(e=>{e.material.opacity=.9*l})}r.position.y=.06,r.rotation.z=-o*2,r.material.opacity=.6*l}),c(e.x,e.z,10128127,.3,1.6,.5,.2)},meteor_storm(e){let t=Math.max(...e.falls.map(e=>e.t)),n=new R,r=D_(new z(new zi(e.r+3,48),new qr({color:0,transparent:!0,opacity:0,depthWrite:!1}))),i=D_(new z(new zi(e.r,48),X(16726554,.12))),o=D_(new z(new Xi(e.r-.14,e.r,48),X(16734762,.85))),c=s(16742970,e.r*.55);r.position.y=.035,i.position.y=.04,o.position.y=.05,c.position.y=.06,n.add(r,i,o,c),n.position.set(e.x,0,e.z),a(n,t+.8,(e,n,a)=>{let s=a>t?1-(a-t)/.8:Math.min(1,a*3);r.material.opacity=.4*s,i.material.opacity=(.1+.06*Math.sin(a*10))*s,o.material.opacity=(.55+.35*Math.sin(a*12))*s,c.rotation.y=a*1.2,c.children.forEach(e=>{e.material.opacity=.8*s})});for(let t of e.falls)_(t,t.t,t.big?e.r:e.impact,t.big)},snare_rune(e){let t=s(11569919,e.r);t.position.set(e.x,.05,e.z),i.set(e.zid,a(t,e.life,(e,n,r)=>{t.rotation.y=r*.8,t.children[0].material.opacity=.35+.2*Math.sin(r*3)}).userData.fx)},glyph_field(e){let t=new R,n=D_(new z(new zi(e.r,40),X(9071856,.14))),r=s(10124543,e.r);n.position.y=.04,r.position.y=.05,t.add(n,r),t.position.set(e.x,0,e.z),i.set(e.zid,a(t,e.dur,(e,t,i)=>{let a=e>.88?(1-e)/.12:Math.min(1,i*4);n.material.opacity=(.12+.05*Math.sin(i*5))*a,r.children.forEach(e=>{e.material.opacity=.75*a}),r.rotation.y=-i*.4}).userData.fx)},script_of_binding(e){c(e.x,e.z,9071856,e.r,e.r,.9,.06);for(let t=0;t<3;t++){let n=-Math.PI/2+t*Math.PI*2/3,r=s(13150463,.45);r.position.set(e.x+Math.cos(n)*e.r,.06,e.z+Math.sin(n)*e.r),a(r,1.2,e=>{r.children.forEach(t=>{t.material.opacity=.9*(1-e)}),r.rotation.y=e*3});let i=(t+1)*(Math.PI*2)/3-Math.PI/2;b(new L(e.x+Math.cos(n)*e.r,.1,e.z+Math.sin(n)*e.r),new L(e.x+Math.cos(i)*e.r,.1,e.z+Math.sin(i)*e.r),13150463,.6)}},cataclysm(e,t){let n=new R,r=D_(new z(new Xi(e.r-.12,e.r,48),X(16734762,.8))),i=D_(new z(new zi(e.r,48),X(16734762,.15)));r.position.y=.05,i.position.y=.04,n.add(r,i),n.position.set(e.x,0,e.z),a(n,e.channel,(e,t,n)=>{i.scale.setScalar(Math.max(.01,e)),r.material.opacity=.5+.4*Math.sin(n*14)});let o=new z(new qi(.55,0),X(16742954,1));o.add(new z(new qi(.32,0),X(16773280,1))),a(o,e.channel,t=>{let n=Math.max(0,(t-.55)/.45);o.visible=n>0,o.position.set(e.x-3*(1-n),14*(1-n)+.3,e.z-3*(1-n)),o.rotation.x+=.2}),t(e.id)&&y(()=>t(e.id,.4),16747066,12,e.channel)}},S={meteor(e){c(e.x,e.z,16756832,.3,e.r*1.2,.6,.25),c(e.x,e.z,16734762,.2,e.r,.45,.4),l(new L(e.x,.6,e.z),16742954,.9,.5),l(new L(e.x,.4,e.z),16773280,.5,.35)},slam(e){c(e.x,e.z,16726554,.3,e.r,.5,.3),c(e.x,e.z,9050634,.2,e.r*.7,.4,.4),l(new L(e.x,.3,e.z),3811878,.7,.5)},breath(e){let t=e.arc*Math.PI/180,n=e.dir-Math.PI/2,r=D_(new z(new Xi(.5,e.r,24,1,n-t/2,t),X(9109440,.6)));r.position.set(e.x,.5,e.z),a(r,.55,e=>{r.material.opacity=.6*(1-e),r.scale.setScalar(.6+e*.5)});for(let t=1;t<=3;t++){let n=e.r*t/3.5;l(new L(e.x+Math.sin(e.dir)*n,1.1-t*.2,e.z+Math.cos(e.dir)*n),t%2?11963135:9109440,.25+t*.1,.5)}},judgement(e){c(e.x,e.z,16769162,.5,e.r,.9,.06),c(e.x,e.z,16773312,.4,e.r*.6,.7,.1),l(new L(e.x,1,e.z),16769162,1.2,.5),t(.7),n(`smite`,e.x,e.z,1);for(let t of e.hits)d(Math.hypot(t.x-e.x,t.z-e.z)*.035,()=>{m(t.x,t.z,16769162,.9,.7),c(t.x,t.z,16769162,.2,1.4,.5,.25),f(new L(t.x,.5,t.z),16773312,12,4,.8,.09)})},holy_word(e){c(e.x,e.z,16769162,.4,e.r,.45,.1),e.litany&&(d(.08,()=>c(e.x,e.z,16756848,.3,e.r*.92,.5,.06)),f(new L(e.x,.8,e.z),16773312,10,3,.6,.08)),n(`smite`,e.x,e.z,.5);for(let t of e.hits)c(t.x,t.z,16773312,.2,.9,.3,.3),f(new L(t.x,.5,t.z),16769162,6,3,.5,.07),e.litany&&m(t.x,t.z,16763e3,.45,.4,8)},blades(e){let r=new L(e.x,2.2,e.z);n(`edge`,e.x,e.z,.9),e.hits.forEach((e,t)=>{let n=g(t%2?10128127:9101567),i=new L(e.x,.7,e.z),o=r.clone().add(new L(Math.cos(t*2.4)*1.2,t%3*.3,Math.sin(t*2.4)*1.2));n.position.copy(o),n.lookAt(i),a(n,.22,e=>{n.position.copy(o).lerp(i,e*e)}),p(o,i,9101567,.12,.35,16777215),d(.22,()=>{c(e.x,e.z,10128127,.2,1.1,.35,.3),f(i,13162751,8,3.5,.5,.07)})}),d(.22,()=>t(.35))},horse_fall(e){let r={brown:9067058,black:3814448,white:15789284,takoyaki:16756960}[e.coat]??9067058;l(new L(e.x,.5,e.z),6969930,.8,.6),l(new L(e.x,.9,e.z),r,.5,.5),c(e.x,e.z,r,.3,1.6,.6,.25),f(new L(e.x,.6,e.z),r,14,4,.7,.09),t(.5),n(`grunt`,e.x,e.z,1)},sunrise(e){c(e.x,e.z,16767088,.5,e.r,1.1,.06),c(e.x,e.z,16774352,.3,e.r*.6,.9,.1);let r=D_(new z(new zi(1,48),X(16769162,.45)));r.position.set(e.x,.05,e.z),a(r,1,t=>{r.scale.setScalar(e.r*Math.min(1,t*2.5)),r.material.opacity=.45*(1-t)});for(let t=0;t<12;t++){let n=t/12*Math.PI*2;p(new L(e.x,.3,e.z),new L(e.x+Math.sin(n)*e.r,.3,e.z+Math.cos(n)*e.r),16767088,.12,.7,16775392)}m(e.x,e.z,16769162,1.2,1,12);for(let t of e.allies)d(.15,()=>{m(t.x,t.z,16764778,.6,.8,8),f(new L(t.x,1,t.z),16773296,12,3,.8,.08)});t(.4),n(`heal`,e.x,e.z,1)},last_grace(e){let t=new L(e.x,1,e.z);l(t,16774352,1,.6),c(e.x,e.z,16769162,.3,2,.7,.2),f(t,16777215,18,4,.9,.09);for(let t of[-1,1])p(new L(e.x,1.4,e.z),new L(e.x+t*1.3,2.2,e.z),16771232,.2,.8,16777215);n(`heal`,e.x,e.z,1)},shard_found(e){m(e.x,e.z,e.color,.8,1.4,12),c(e.x,e.z,e.color,.4,3,1,.2),f(new L(e.x,1,e.z),e.color,24,5,1,.1),t(.4),n(`smite`,e.x,e.z,1)},dragon_fall(e){l(new L(e.x,.6,e.z),4864564,1.1,.8),l(new L(e.x,1,e.z),16738858,.7,.5),c(e.x,e.z,16738858,.3,2.2,.7,.25),f(new L(e.x,.8,e.z),16752704,22,5,.8,.1),t(.6),n(`grunt`,e.x,e.z,1)},zone_end(e){o(i.get(e.zid)),i.delete(e.zid),e.triggered&&c(e.x,e.z,7324282,.3,1.1,.4,.3)}};return{cast(e,t){x[e.skill]?.(e,t)},fx(e){S[e.kind]?.(e)},update(t){for(let n=r.length-1;n>=0;n--){let a=r[n];a.t+=t;let o=Math.min(1,a.t/a.life);if(a.update(o,t,a.t),o>=1){for(let[e,t]of i)t===a&&i.delete(e);e.remove(a.obj),a.obj.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()}),r.splice(n,1)}}}}}var k_=X(10478847,.35),A_=X(16769162,.95),j_=X(7324282,.7),M_=X(9095423,.22),N_=X(10124543,.6);function P_(e,t,n){if(e.statusKind!==t){if(e.statusObj?.removeFromParent(),e.statusObj=null,e.statusKind=t,t===`freeze`)e.statusObj=new z(new Ri(1,.9,1),k_),e.statusObj.position.y=.4;else if(t===`stun`){e.statusObj=new R;for(let t=0;t<3;t++)e.statusObj.add(new z(new Ri(.1,.1,.1),A_));e.statusObj.position.y=e.m.tagY*.75}else t===`root`?(e.statusObj=D_(new z(new Xi(.35,.55,8),j_)),e.statusObj.position.y=.05):t===`slow`&&(e.statusObj=D_(new z(new Xi(.42,.5,20),N_)),e.statusObj.position.y=.06);e.statusObj&&e.m.root.add(e.statusObj)}t===`stun`&&e.statusObj.children.forEach((e,t)=>{let r=n*5+t*Math.PI*2/3;e.position.set(Math.cos(r)*.3,Math.sin(n*8+t)*.04,Math.sin(r)*.3)}),t===`root`&&(e.statusObj.rotation.z=n),t===`slow`&&e.statusObj.scale.setScalar(1+.12*Math.sin(n*4))}var F_=X(11569919,.35),I_=X(15261951,.6);function L_(e,t,n){if(t&&!e.enchantObj){let t=e.c.root.userData.greatsword,n=e.c.wield?e.c.wield.add(new R).children.at(-1):e.c.hand(e.c.armR),r=e.c.hand(e.c.armL),i=new R,a=t?1.6:1.05,o=new z(new Ri(.2,a,.14),F_),s=new z(new Ri(.07,a,.06),I_);o.position.y=s.position.y=.15+a/2,i.add(o,s),e.c.wield||(i.rotation.x=Math.PI/2);let c=new z(new qi(.16,0),I_),l=new z(new qi(.16,0),I_);n.add(i,c),r.add(l);let u=[];for(let e=0;e<8;e++){let t=new z(new Ri(.06,.06,.06),e%2?I_:F_);(e%2?r:n).add(t),u.push(t)}e.enchantObj={right:n,left:r,sheath:i,fistR:c,fistL:l,motes:u,len:a}}else!t&&e.enchantObj&&(e.enchantObj.right.removeFromParent(),e.enchantObj.left.removeFromParent(),e.enchantObj=null);let r=e.enchantObj;if(!r)return;let i=1+Math.sin(n*7)*.12;r.sheath.scale.set(i,1,i),r.fistR.rotation.set(n*2,n*3,0),r.fistL.rotation.set(-n*2,n*2.5,0),r.fistR.scale.setScalar(i),r.fistL.scale.setScalar(i),r.motes.forEach((e,t)=>{let i=(n*.9+t/r.motes.length)%1,a=t*2.4+n*2;e.position.set(Math.cos(a)*.18,i*.5,Math.sin(a)*.18+(t%2?0:i*r.len*.6)),e.scale.setScalar(1-i)})}var R_=X(16767088,.8),z_=X(16767088,.2);function B_(e,t,n){let r={halo:!!(t&1),aegis:!!(t&2)};r.halo&&!e.haloObj?(e.haloObj=new z(new Zi(.42,.05,6,24),R_),e.haloObj.rotation.x=Math.PI/2,e.haloObj.position.y=2.75,e.c.root.add(e.haloObj)):!r.halo&&e.haloObj&&(e.haloObj.removeFromParent(),e.haloObj=null),r.aegis&&!e.aegisObj?(e.aegisObj=new z(new qi(1.35,1),z_),e.aegisObj.position.y=1.1,e.c.root.add(e.aegisObj)):!r.aegis&&e.aegisObj&&(e.aegisObj.removeFromParent(),e.aegisObj=null),e.haloObj&&(e.haloObj.rotation.z=n*1.5,e.haloObj.position.y=2.75+Math.sin(n*2.5)*.05),e.aegisObj&&(e.aegisObj.rotation.y=-n*.5,e.aegisObj.scale.setScalar(1+Math.sin(n*4)*.04))}function V_(e,t,n){t&&!e.wardObj?(e.wardObj=new z(new qi(1.25,1),M_),e.wardObj.position.y=1.1,e.c.root.add(e.wardObj)):!t&&e.wardObj&&(e.wardObj.removeFromParent(),e.wardObj=null),e.wardObj&&(e.wardObj.rotation.y=n*.6,e.wardObj.scale.setScalar(1+Math.sin(n*3)*.03))}var Z=e=>document.getElementById(e),H_=location.origin.replace(/^http/,`ws`);document.body.classList.add(`web`);var U_=110,W_=.9,G_=1.5,K_=1,q_=new Ll({antialias:!0});q_.setPixelRatio(Math.min(devicePixelRatio,2)),q_.setSize(innerWidth,innerHeight),q_.shadowMap.enabled=!0,q_.shadowMap.type=1,q_.domElement.className=`view`,document.body.prepend(q_.domElement);var J_=new Wl({element:Z(`labels`)});J_.setSize(innerWidth,innerHeight);var Y_=new Vn;Y_.background=new Rn(1315087),Y_.fog=new Bn(1315087,40,70);var X_=17,Z_=new L(1,1,1).normalize().multiplyScalar(30),Q_=new Ka(-1,1,1,-1,.1,120);function $_(){let e=innerWidth/innerHeight;Object.assign(Q_,{left:-17*e/2,right:X_*e/2,top:X_/2,bottom:-17/2}),Q_.updateProjectionMatrix()}$_();var ev=new L(Ou.x,0,Ou.z);Q_.position.copy(ev).add(Z_),Q_.lookAt(ev),Y_.add(new ja(12571903,3811866,.85));var tv=new Ja(16773597,1.7);tv.castShadow=!0,tv.shadow.mapSize.set(2048,2048),Object.assign(tv.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60}),tv.shadow.bias=-5e-4,Y_.add(tv,tv.target);var nv=i_(Y_),rv={oathkeeper:[`oracle`,`f`],wiseman:[`arcanist`,`m`],merchant:[`vanguard`,`f`],crownwarden:[`vanguard`,`m`]},iv={wiseman:{armor:{look:`robe`,color:15920868,accent:13214266},head:{look:`hood`,color:15920868},boots:{look:`sandals`,color:9071170},main:{look:`staff`,color:10475775},beard:16052972},merchant:{armor:{look:`merchant`,color:4155978,accent:15260864},head:{look:`merchanthat`,color:6964264,accent:12076590},boots:{look:`boots`,color:5913636},off:{look:`tome`,color:8014378}},crownwarden:{armor:{look:`robe`,color:3422792,accent:13214266},head:{look:`circlet`,color:13214266},boots:{look:`boots`,color:2763312},main:{look:`greatsword`,color:13686496,accent:2763312}}},av={oathkeeper:`job`,wiseman:`skills`,merchant:`shop`,crownwarden:`oath3`},ov=Object.entries(zu).map(([e,t])=>{let[n,r]=rv[e],i=iv[e]?Pm({occ:n,sex:r,job:``,equip:new Map,outfit:iv[e]}):um(n,20,r,{tier:`base`});i.root.position.set(t.x,0,t.z),i.root.rotation.y=Math.PI/4,i.root.userData.npcId=e,Y_.add(i.root);let a=document.createElement(`div`);a.className=`tag npc`,a.innerHTML=`${t.name}<small>${t.title}</small>`;let o=new Rl(a);return o.position.y=2.6,i.root.add(o),{id:e,n:t,c:i}}),sv=0,cv=O_(Y_,{shake:e=>{sv=Math.max(sv,e)},sound:(e,t,n,r)=>Jv(e,t,n,r)}),lv=x_(Y_),uv=new z(new Xi(.36,.43,4,1),new qr({color:13214266,transparent:!0,opacity:.8}));uv.rotation.x=-Math.PI/2,uv.visible=!1,Y_.add(uv);var dv=new z(new Xi(.15,.25,4,1),new qr({color:16769162,transparent:!0}));dv.rotation.x=-Math.PI/2,dv.visible=!1,Y_.add(dv);var fv=0,pv=new z(new Xi(.5,.6,4,1),new qr({color:14173483,transparent:!0,opacity:.85}));pv.rotation.x=-Math.PI/2,pv.visible=!1,Y_.add(pv),addEventListener(`pointerdown`,xg,!0),addEventListener(`keydown`,xg,!0);var mv=localStorage.getItem(`nc.occ`)||`vanguard`,hv=localStorage.getItem(`nc.sex`)===`f`?`f`:`m`,gv=()=>document.querySelectorAll(`#sexes button`).forEach(e=>e.classList.toggle(`on`,e.dataset.sex===hv));document.querySelectorAll(`#sexes button`).forEach(e=>e.onclick=()=>{hv=e.dataset.sex,gv()}),gv(),Z(`name`).value=localStorage.getItem(`nc.name`)||``;for(let e of Jl){let t=Gl[e],n=document.createElement(`div`);n.className=`occ`+(e===mv?` sel`:``),n.innerHTML=`<h3>${t.name}<small>Lv 15: ${t.line}</small></h3><p>${t.role}</p><p><span class="swatch" style="background:${t.resourceColor}"></span>${t.resource}</p>`,n.onclick=()=>{mv=e,document.querySelectorAll(`.occ`).forEach(e=>e.classList.toggle(`sel`,e===n))},Z(`occs`).appendChild(n)}var _v=()=>document.querySelectorAll(`.occ`).forEach((e,t)=>e.classList.toggle(`sel`,Jl[t]===mv)),vv=null;async function yv(){Z(`saveList`).innerHTML=`<span class="none">Loading…</span>`;try{let e=await T_(),t=e.user();Z(`acct`).innerHTML=t?`${t.isAnonymous?`guest, this browser`:ry(t.displayName||t.email||`signed in`)} · <a id="acctOut">sign out</a>`:`<a id="acctIn">sign in</a>`,Z(`acctIn`)&&(Z(`acctIn`).onclick=()=>bv(`Sign in to load heroes you saved, on this device or another.`)),Z(`acctOut`)&&(Z(`acctOut`).onclick=async()=>{await e.signOut(),vv=null,yv()});let n=Object.values(await e.list()).sort((e,t)=>t.at-e.at);Z(`saveList`).innerHTML=n.length?``:`<span class="none">${t?`Nothing saved yet: press 💾 Save while you play.`:`Sign in to load your saved heroes.`}</span>`;for(let e of n){let t=document.createElement(`button`);t.textContent=`${e.name} · Lv ${e.level} ${ah(e)}`,t.onclick=()=>{vv=vv===e?null:e;for(let e of Z(`saveList`).children)e.classList.toggle(`sel`,e===t&&!!vv);vv&&(Z(`name`).value=e.name,mv=e.occ,hv=e.sex,_v(),gv())},Z(`saveList`).append(t)}}catch(e){console.warn(`saved heroes unavailable`,e),Z(`acct`).textContent=``,Z(`saveList`).innerHTML=`<span class="none">Saved heroes are offline right now.</span>`}}function bv(e){Z(`signIn`).querySelector(`p`).textContent=e,Z(`signErr`).textContent=``,Z(`signIn`).classList.remove(`hidden`)}async function xv(e){try{await e(await T_()),Z(`signIn`).classList.add(`hidden`),Q?Sv():yv()}catch(e){Z(`signErr`).textContent=e.code===`auth/popup-closed-by-user`?``:`Sign-in failed (${e.code||e.message}).`}}async function Sv(){let e=kv.get(Ov)?.server;if(!e)return;let t;try{t=await T_()}catch{vy(`Saving is offline right now`),Ng(`fail`);return}if(!t.user())bv(`Sign in with Google to keep your heroes on any device, or save as a guest in this browser only.`);else try{await t.save(E_(e)),vy(`Saved ${e.name} · Lv ${e.level} ${ah(e)}`),Ng(`loot`)}catch(e){console.warn(e),vy(/^You can keep/.test(e.message)?e.message:`Could not save. Try again in a moment.`),Ng(`fail`)}}Z(`saveBtn`).onclick=e=>{e.currentTarget.blur(),Sv()},Z(`signGoogle`).onclick=()=>xv(e=>e.signInGoogle()),Z(`signGuest`).onclick=()=>xv(e=>e.signInGuest()),Z(`signCancel`).onclick=()=>Z(`signIn`).classList.add(`hidden`),yv();var Cv=`solo`;Z(`name`).addEventListener(`keydown`,e=>{e.key===`Enter`&&Dv(Cv)}),Z(`enter`).onclick=()=>Dv(`online`),Z(`soloBtn`).onclick=()=>Dv(`solo`),Z(`hostBtn`).onclick=()=>Dv(`host`),Z(`joinBtn`).onclick=()=>Dv(`join`),Z(`code`).addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.stopPropagation(),Dv(`join`))}),Z(`name`).focus();var wv=new URLSearchParams(location.search),Tv=wv.has(`dev`);Tv||(Z(`help`).textContent=Z(`help`).textContent.replace(/ · \/level 15 in chat = level up \(testing\)/,``)),wv.get(`zoom`)&&(Q_.zoom=jt.clamp(Number(wv.get(`zoom`))||1,.55,2.4),Q_.updateProjectionMatrix());var Ev=!1;async function Dv(e){if(Ev)return;let t=Yl(Z(`name`).value);if(!t){Z(`loginErr`).textContent=`Name must be 2–16 letters or numbers.`;return}localStorage.setItem(`nc.name`,t),localStorage.setItem(`nc.occ`,mv),localStorage.setItem(`nc.sex`,hv);let n={name:t,occ:mv,sex:hv};vv&&vv.name.toLowerCase()===t.toLowerCase()&&vv.occ===mv&&(n.save=vv),Ev=!0,Z(`loginErr`).textContent={online:`Connecting…`,solo:``,host:`Opening a room…`,join:`Joining room ${Z(`code`).value.toUpperCase()}…`}[e];try{let t=e===`online`?await _p(H_,n):e===`join`?await Ap(Z(`code`).value,n):await kp(n,{online:e===`host`,dev:Tv,onStatus:e=>{Z(`roomCode`).textContent=e}});ny(t),e===`host`&&wy(`Your room code is ${t.code}. Friends open this page, press Join and type it in (up to 4 players).`)}catch(t){console.error(t),Z(`loginErr`).textContent=e===`online`?`Could not reach the server at ${H_}. Is it running? (npm run dev)`:t.message,Ev=!1}}wv.get(`name`)&&(Z(`name`).value=wv.get(`name`),Gl[wv.get(`occ`)]&&(mv=wv.get(`occ`)),(wv.get(`sex`)===`f`||wv.get(`sex`)===`m`)&&(hv=wv.get(`sex`)),wv.get(`code`)&&(Z(`code`).value=wv.get(`code`)),Dv(wv.get(`mode`)||Cv));var Q=null,Ov=null,kv=new Map,Av=new Map,jv=[],Mv=[],$=null;function Nv(e,t){let n=Pm(t);n.root.userData.playerId=e,n.root.position.set(t.x,0,t.z),n.root.rotation.y=t.dir,Y_.add(n.root);let r=document.createElement(`div`);r.className=`tag`+(e===Ov?` self`:``),r.innerHTML=`<div class="bubble hidden"></div>[ ${ry(t.name)} ]<small>${ry(ah(t))} · Lv ${t.level}</small>`;let i=new Rl(r);i.position.y=2.6,n.root.add(i);let a={id:e,c:n,el:r,tag:i,sub:r.querySelector(`small`),level:t.level,label:ah(t),look:Nm(t),bubble:r.querySelector(`.bubble`),bubbleT:0,snaps:[],dir:t.dir,moving:t.moving,act:null,actT:0,server:t};kv.set(e,a),e===Ov&&($={x:t.x,z:t.z,dir:t.dir,moving:!1,path:[],steer:null},uv.visible=!0,ev.set(t.x,0,t.z),ay.setPlayer(t),iy()),ty(a,t)}function Pv(e,t){(t.level!==e.level||ah(t)!==e.label)&&(e.level=t.level,e.label=ah(t),e.sub.textContent=`${e.label} · Lv ${t.level}`)}function Fv(e,t){e.look=Nm(t);let n=e.c,r=Pm(t);r.root.userData.playerId=e.id,r.root.position.copy(n.root.position),r.root.rotation.y=n.root.rotation.y,r.root.add(e.tag),Y_.remove(n.root),e.wardObj=null,e.enchantObj=null,e.haloObj=null,e.aegisObj=null,Y_.add(r.root),e.c=r,e.mount&&(e.mount=``,e.horse=null,zv(e,t.mount))}var Iv=.9,Lv=.9/cm,Rv=.54;function zv(e,t){e.mount=t,e.horse&&=(e.horse.root.removeFromParent(),null),e.c.hips.position.y=e.c.d.legH+(t?Iv:0);for(let[n,r]of[[e.c.legL,-1],[e.c.legR,1]])n.rotation.z=t?r*.55:0;e.tag.position.y=2.6+(t?Iv:0);let n=tf(t);t&&(e.horse=n?ng(n,{saddle:!0}):$h(t,{saddle:!0}),e.horse.root.scale.setScalar(n?Lv:1.15),e.c.root.add(e.horse.root)),e.horseAct=null,n&&Vv(e),e.id===Ov&&$&&($.speed=$.mountSpeed=Bv(e.server))}var Bv=e=>zd*(e.mount?Of(e.mount):1)*(1+md(e.equip).speed/100);function Vv(e){let t=e.horse.seatNow()*Lv-Rv;e.c.hips.position.y=e.c.d.legH+t,e.tag.position.y=2.6+t}var Hv=null;function Uv(e){e!==Hv&&(Hv=e,u_(e),Z(`zone`).textContent=e===`oathgate`?`Oathgate · Crown Plinth`:ku[e].name,document.body.classList.toggle(`ashen`,e===`ashen`),document.body.classList.toggle(`shardfall`,e===`shardfall`))}function Wv(e){let t=kv.get(e);t&&(t.el.remove(),Y_.remove(t.c.root),kv.delete(e))}function Gv(e,t){let n=qd[t.kind]??Xd[t.kind]??Jd[t.kind],r=og(t.kind,t);r.root.position.set(t.x,0,t.z),r.root.rotation.y=t.dir,!t.owner&&!n.critter&&(r.root.userData.mobId=e),Y_.add(r.root);let i=document.createElement(`div`);i.className=`tag mob`+(n.aggro?` aggro`:``)+(n.boss?` boss`:``)+(t.owner?` pet`:``)+(t.owner===Ov?` mine`:``)+(n.critter?` critter`:``);let a=t.owner?kv.get(t.owner)?.server.name??``:``,o=Ef[t.coat],s=t.kind===`knight_dragon`?ef.names[(Number(t.coat)||1)-1]:n.name;i.innerHTML=n.critter?`${o?o.unicorn?`${o.name} the Unicorn`:`${o.name} Horse`:n.name}<small>${o?`${o.speed}x speed · `:``}Knights can tame it</small>`:`${s}<small>${t.owner?`${ry(a)}'s · `:``}Lv ${t.level}</small><div class="mobhp"><i></i></div>`;let c=new Rl(i);c.position.y=r.tagY,r.root.add(c);let l=0;for(let t of e)l=(l*31+t.charCodeAt(0))%997;let u={id:e,m:r,el:i,hpEl:i.querySelector(`.mobhp i`),snaps:[],dir:t.dir,act:null,actT:0,hitT:0,deadT:-1,seed:l,server:t,coat:t.coat,pet:!!t.owner,critter:!!n.critter,boss:!!n.boss,secret:!!n.secret};Av.set(e,u),Kv(u),ty(u,t)}function Kv(e){let t=e.server;e.critter||(e.hpEl.style.width=`${100*t.hp/t.hpMax}%`,e.el.classList.toggle(`hurt`,t.hp<t.hpMax),t.hp===0&&e.deadT<0&&(e.deadT=0,e.el.classList.add(`dead`),Jv(e.pet?`bones`:`die`,t.x,t.z)))}function qv(e){let t=Av.get(e);t&&(t.el.remove(),Y_.remove(t.m.root),Av.delete(e))}function Jv(e,t,n,r=1){if(!$)return Ng(e,{vol:r});let i=t-$.x,a=n-$.z;Ng(e,{vol:r*Math.max(0,Math.min(1,1-(Math.hypot(i,a)-3)/14)),pan:(i-a)/Math.SQRT2/9})}var Yv={vanguard:`swing`,arcanist:`swing`,oracle:`swing`};function Xv(e){nb(e.id,e.kind,e.mob);let t=e.mob?Av.get(e.id):kv.get(e.id);if(!t||e.kind!==`attack`||e.cast)return;let n=t.server;Jv(t.pet?`swing`:e.mob?`bite`:Yv[n.occ]??`swing`,n.x,n.z,e.id===Ov||t.server.owner===Ov?1:.6)}function Zv(e){if(e.evade){let t=Av.get(e.id);t&&Qv(t,!0,`Evade`,`evade`);return}if($v(e.id,e.dmg,e.mob,e.by,e.crit),!e.mob&&e.id===Ov){cy=performance.now(),Ng(`hurt`);return}let t=e.mob?Av.get(e.id):kv.get(e.id);if(!t)return;let{x:n,z:r}=t.server,i=e.by===Ov;Jv(`hit`,n,r,i?.9:.5),e.mob&&Jv(t.pet?`bones`:t.server.kind===`mossling`?`squish`:`grunt`,n,r,i?.8:.4)}function Qv(e,t,n,r,{life:i=.9,rise:a=1.2,y:o}={}){let s=document.createElement(`div`);s.className=`dmg `+r,s.textContent=n;let c=new Rl(s),l=(t?e.m:e.c).root.position;c.position.set(l.x+(r===`lvl`?0:(Math.random()-.5)*.4),o??(t?e.m.tagY*.8:1.6),l.z),Y_.add(c),jv.push({obj:c,el:s,t:0,y:c.position.y,life:i,rise:a})}function $v(e,t,n,r,i){let a=n?Av.get(e):kv.get(e);if(!a)return;a.hitT=.18;let o=(!n&&e===Ov?`taken`:r===Ov?`mine`:``)+(i?` crit`:``);Qv(a,n,i?`${t}!`:t,o)}function ey(e,t=`LEVEL UP`){let n=kv.get(e);if(!n)return;let r=new qr({color:16766826,transparent:!0,opacity:.6,depthWrite:!1,blending:2}),i=new z(new Bi(.55,.55,3.2,8,1,!0),r),a=new z(new Xi(.3,.45,16),r.clone());a.rotation.x=-Math.PI/2;let o=new R;o.add(i,a),i.position.y=1.6,a.position.y=.05,o.position.copy(n.c.root.position),Y_.add(o),Mv.push({g:o,col:i,ringMesh:a,follow:n,t:0}),Qv(n,!1,t,`lvl`,{life:1.8,rise:.6,y:2.4})}function ty(e,t){let n=e.snaps[e.snaps.length-1],r=performance.now();n&&r-n.t>100&&e.snaps.push({...n,t:r-50}),e.snaps.push({t:r,x:t.x,z:t.z,dir:t.dir,moving:t.moving}),e.snaps.length>20&&e.snaps.shift()}function ny(e){Q=e,Ov=e.sessionId,wv.has(`debug`)&&(window.nc={room:Q,players:kv,monsters:Av}),Z(`login`).classList.add(`hidden`),Z(`hud`).classList.remove(`hidden`),Q.onAdd(`players`,(e,t)=>{Nv(t,e),Q.onChange(e,()=>{let n=kv.get(t);n&&(ty(n,e),Pv(n,e),Nm(e)!==n.look&&Fv(n,e)),t===Ov&&((e.job3||``)!==oy&&(oy=e.job3||``,ay.setPlayer(e)),iy(),uy(e.target),Dh(e))})}),Q.onRemove(`players`,(e,t)=>Wv(t)),Q.onAdd(`monsters`,(e,t)=>{Gv(t,e),Q.onChange(e,()=>{let n=Av.get(t);n&&(ty(n,e),Kv(n))})}),Q.onRemove(`monsters`,(e,t)=>qv(t)),Q.onMessage(`chat`,e=>{Cy(e.name,e.text);let t=kv.get(e.id);t&&(t.bubble.textContent=e.text,t.bubble.classList.remove(`hidden`),t.bubbleT=5+e.text.length*.05)}),Q.onMessage(`system`,e=>wy(e.text)),Q.onMessage(`notice`,e=>wy(e.text)),Q.onMessage(`partyInvite`,zy),Q.onMessage(`loot`,e=>{let t=U[e.item],n=kv.get(Ov);t&&(Sy(`${e.from?`The ${ry(e.from)} dropped`:`You got`} <b>${ry(t.name)}</b> <small>(Lv ${t.lv} · ${ry(nd(t))})</small>. Open Character (C) to wear it.`,`loot`),n&&Qv(n,!1,t.name,`lootText`,{y:2.4,life:1.6,rise:.7}),Ng(`loot`),vh())}),Q.onMessage(`gold`,e=>{let t=kv.get(Ov);t&&Qv(t,!1,`+${e.amount} gold`,`goldText`,{y:2.3}),e.amount>=50&&Sy(`${e.from?`The ${ry(e.from)} dropped`:`You got`} <b>${e.amount} gold</b>.`,`loot`)}),Q.onMessage(`exp`,e=>{let t=kv.get(Ov);t&&Qv(t,!1,`+${e.gain} EXP`,`exp`,{y:2.1})}),Q.onMessage(`levelup`,e=>{ey(e.id,e.job?uu(e.job).toUpperCase():void 0);let t=kv.get(e.id);t&&Jv(`levelup`,t.server.x,t.server.z,e.id===Ov?1:.5)}),Q.onMessage(`act`,Xv),Q.onMessage(`hit`,Zv),Q.onMessage(`cast`,xy),Q.onMessage(`cooldown`,e=>{let t=performance.now();py[e.skill]={end:t+e.cd*1e3,len:e.cd*1e3},my={end:t+e.gcd*1e3,len:e.gcd*1e3}}),Q.onMessage(`cooldownsReset`,()=>{for(let e of Object.keys(py))delete py[e];my={end:0,len:1}}),Q.onMessage(`castFail`,e=>{vy(e.why),Ng(`fail`)}),Q.onMessage(`heal`,e=>{let t=kv.get(e.id);t&&Qv(t,!1,`+${e.amount}`,e.quiet?`heal small`:`heal`)}),Q.onMessage(`absorb`,e=>{let t=kv.get(e.id);t&&Qv(t,!1,e.parry?`Parry`:e.evade?`Evade`:`(${e.amount})`,`absorb`),t&&e.parry&&Jv(`bash`,t.server.x,t.server.z,.5)}),Q.onMessage(`fx`,e=>{cv.fx(e);let t=e.kind===`skill_rank`&&kv.get(e.id);t&&(Qv(t,!1,`${gu(t.server.occ,e.skill)?.name??``} · rank ${e.rank}`,`exp`,{y:2.6,life:2,rise:.8}),Jv(`levelup`,t.server.x,t.server.z,e.id===Ov?.6:.3)),(e.kind===`meteor`||e.kind===`slam`)&&Jv(`boom`,e.x,e.z,e.kind===`slam`?.7:1),e.kind===`zone_end`&&e.triggered&&Jv(`bash`,e.x,e.z,.6)}),Q.onMessage(`warp`,e=>{Z(`warpFlash`).classList.remove(`go`),Z(`warpFlash`).offsetWidth,Z(`warpFlash`).classList.add(`go`),Ng(`blink`),$&&Object.assign($,{x:e.x,z:e.z,path:[],steer:null}),ev.set(e.x,0,e.z),Uv(e.region),wy(e.region===`ashen`?`You step into the Ashen Reach. Wild horses graze in the meadow; something terrible waits at the top of the Reach.`:e.region===`shardfall`?`You step into the Shardfall, where the Crown's shards came down. Its monsters are for Lv 22 and up, and somewhere among them waits the shard of your 2nd class.`:`You are back in Oathgate.`)}),Q.onMessage(`respawn`,e=>{Ng(`respawn`),$&&(Object.assign($,{x:e.x,z:e.z,path:[]}),ev.set(e.x,0,e.z))}),Q.onLeave(e=>{Z(`dcReason`).textContent=e,Z(`disconnected`).classList.remove(`hidden`)}),oh((e,t)=>Q.send(e,t),()=>Ng(`click`),{barLayout:ay.layout,assignSlot:ay.assign}),Dh(kv.get(Ov)?.server),Uv(Iu(kv.get(Ov)?.server.x??Ou.x,kv.get(Ov)?.server.z??Ou.z)),wy(`Welcome to Oathgate. The nine shards wait around the Crown Plinth.`),setInterval(Ty,3e3)}function ry(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function iy(){let e=kv.get(Ov)?.server;if(!e)return;let t=Gl[e.occ];Z(`cardName`).textContent=e.name,Z(`cardSub`).textContent=`Lv ${e.level} ${ah(e)} · ${e.subtitle||(e.job?`${t.name} line`:`Unsworn`)}`,Z(`hpFill`).style.width=`${100*e.hp/e.hpMax}%`,Z(`hpText`).textContent=`HP ${e.hp} / ${e.hpMax}${e.shield?`  (+${e.shield} DEF)`:``}`,Z(`resFill`).parentElement.classList.toggle(`hidden`,!e.resMax),Z(`resFill`).style.width=`${100*e.res/Math.max(1,e.resMax)}%`,Z(`resFill`).style.background=t.resourceColor,Z(`resText`).textContent=`${t.resource} ${e.res} / ${e.resMax}`;let n=e.level>=30;Z(`expFill`).style.width=n?`100%`:`${100*e.exp/Math.max(1,e.expNext)}%`,Z(`expText`).textContent=n?`EXP max`:`EXP ${e.exp} / ${e.expNext}`,Z(`cardGold`).textContent=`${e.gold??0} gold`}var ay=Gm(Z(`skills`),{onUse:e=>$y(e)}),oy=``,sy=``,cy=-1e9,ly=0;function uy(e){e!==sy&&(e&&!sy&&Ng(`engage`),sy=e,e||Z(`target`).classList.add(`hidden`))}function dy(){let e=sy&&Av.get(sy);if(pv.visible=!!e&&e.deadT<0,!e){Z(`target`).classList.add(`hidden`);return}let t=e.server,n=qd[t.kind];Z(`target`).classList.remove(`hidden`),Z(`targetName`).textContent=`${n.name} · Lv ${t.level}`,Z(`targetFill`).style.width=`${100*t.hp/t.hpMax}%`,Z(`targetText`).textContent=`${t.hp} / ${t.hpMax}`}function fy(){let e=bg();Z(`musicBtn`).classList.toggle(`off`,!e.music),Z(`sfxBtn`).classList.toggle(`off`,!e.sfx)}Z(`musicBtn`).onclick=e=>{Sg(),fy(),e.currentTarget.blur()},Z(`sfxBtn`).onclick=e=>{Cg(),fy(),e.currentTarget.blur()},fy();var py={},my={end:0,len:1},hy=0;function gy(e){let t=kv.get(Ov)?.server;if(t)for(let n of ay.slots){if(n.entry===`attack`&&n.el.classList.toggle(`on`,!!sy),!n.def)continue;let r=t.skills.get(n.entry)??0;n.el.classList.toggle(`unlearned`,!r),n.el.classList.toggle(`inert`,!n.def.use),n.el.classList.toggle(`nores`,!!r&&!!n.def.use&&(t.res<bu(n.def,r)||pu(n.def,t))),n.el.classList.toggle(`blood`,!!n.def.use?.hp),n.el.classList.toggle(`channel`,!!hy&&e<hy);let i=py[n.entry],a=i&&i.end>my.end,o=a?i.end:my.end,s=a?i.len:my.len,c=Math.max(0,o-e);n.cdEl.style.height=`${100*c/s}%`,n.cdText.textContent=c>1e3?Math.ceil(c/1e3):``}}var _y=null;function vy(e){Z(`toast`).textContent=e,Z(`toast`).classList.remove(`hidden`),clearTimeout(_y),_y=setTimeout(()=>Z(`toast`).classList.add(`hidden`),1600)}function yy(e,t=0){let n=Av.get(e)??kv.get(e);if(!n)return null;let r=(n.m??n.c).root.position;return new L(r.x,t,r.z)}var by={cleave:`cleave`,battle_cry:`cry`,charge:`charge`,firebolt:`firebolt`,frost_nova:`frost`,arc_chain:`zap`,blink:`blink`,mana_shield:`ward`,mend:`heal`,smite:`smite`,ward:`ward`,holy_words:`sanctuary`,raise_bonewalker:`raise`,bone_armor:`ward`,bone_dragon:`raise`,mount:`charge`,snare_rune:`rune`,glyph_field:`rune`,script_of_binding:`binding`,cataclysm:`channel`,wyrm_lance:`charge`,sacred_chant:`channel`,rampage:`cry`,sword_dance:`edge`,meteor_storm:`channel`,summon_dragon:`cry`,dragon_rush:`charge`,fire_breath:`firebolt`,dawnlight:`heal`,dawn_blessing:`ward`,sunrise:`channel`,gale_step:`blink`,spellstrike:`edge`,flying_edge:`zap`,qi_sword_strike:`cleave`};function xy(e){if(e.skill===`blink`&&e.id===Ov&&$&&Object.assign($,{x:e.to.x,z:e.to.z,path:[]}),e.channel&&e.walk&&e.id===Ov&&$?($.speed=zd*e.walk,setTimeout(()=>{$&&($.speed=$.mountSpeed)},e.channel*1e3+50)):e.channel&&e.id===Ov&&$&&(hy=performance.now()+e.channel*1e3,$.path=[],$.steer=null),e.skill===`gale_step`&&e.id===Ov&&$&&($.speed=($.mountSpeed??4.2)*(1+e.move/100),setTimeout(()=>{$&&($.speed=$.mountSpeed)},e.dur*1e3)),e.id===Ov&&$){let t=performance.now();if(e.skill===`wyrm_lance`&&($.lunges=[{from:e.from,to:e.to,start:t,dur:e.travel*1e3}]),e.skill===`dragon_rush`&&($.lunges=[{from:e.from,to:e.to,start:t,dur:e.travel*1e3,ease:!0}]),e.skill===`rampage`){let n=e.from;$.lunges=e.hops.map(r=>{let i={from:n,to:r,start:t+(r.t-e.hop)*1e3,dur:e.hop*800};return n=r,i}),hy=t+(e.hops.at(-1).t+.15)*1e3}$.lunges&&($.path=[],$.steer=null)}if(e.skill===`fire_breath`&&!e.pet){let t=kv.get(e.id);t?.horse&&(t.horseAct={t:0})}cv.cast(e,yy);let t=kv.get(e.id);t&&Jv(by[e.skill],t.server.x,t.server.z,e.id===Ov?1:.6)}function Sy(e,t){let n=Z(`chatLog`),r=document.createElement(`div`);for(t&&(r.className=t),r.innerHTML=e,n.appendChild(r);n.children.length>80;)n.firstChild.remove();n.scrollTop=n.scrollHeight}var Cy=(e,t)=>Sy(`<b>${ry(e)}:</b> ${ry(t)}`),wy=e=>Sy(ry(e),`sys`);async function Ty(){if(!Q)return;let e=await Q.ping();Z(`ping`).textContent=e===null?``:`${Math.round(e)} ms`}var Ey=new ho,Dy=new zr(new L(0,1,0),0),Oy=new Mt,ky=!1,Ay=0;function jy(e,t){Oy.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Ey.setFromCamera(Oy,Q_);let n=new L;return Ey.ray.intersectPlane(Dy,n)?n:null}function My(e,t,n){if(!Q||!$||Gy.size||performance.now()<hy)return;Hy=null;let r=jy(e,t);r&&($.steer=null,$.path=Wd($.x,$.z,r.x,r.z),Q.send(`move`,{x:r.x,z:r.z}),Ay=performance.now(),n&&(dv.position.set(r.x,.03,r.z),dv.visible=!0,fv=0))}function Ny(e,t){Oy.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Ey.setFromCamera(Oy,Q_);let n=[...Av.values()].filter(e=>e.deadT<0).map(e=>e.m.root);for(let e of Ey.intersectObjects(n,!0))for(let t=e.object;t;t=t.parent)if(t.userData.mobId)return t.userData.mobId;return null}function Py(e,t){Oy.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Ey.setFromCamera(Oy,Q_);for(let e of Ey.intersectObjects([...kv.values()].map(e=>e.c.root),!0))for(let t=e.object;t;t=t.parent)if(t.userData.playerId)return t.userData.playerId;return null}function Fy(e,t){Oy.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),Ey.setFromCamera(Oy,Q_);for(let e of Ey.intersectObjects(ov.map(e=>e.c.root),!0))for(let t=e.object;t;t=t.parent)if(t.userData.npcId)return ov.find(e=>e.id===t.userData.npcId);return null}var Iy=()=>kv.get(Ov)?.server.party||``;function Ly(e,t,n){let r=kv.get(e)?.server;if(!r)return;let i=Z(`playerMenu`),a=Iy()&&r.party===Iy();i.innerHTML=`<div class="pmHead">${ry(r.name)} · Lv ${r.level} ${ry(ah(r))}</div>`+(a?`<button data-act="leave">Leave the party</button>`:`<button data-act="invite">Invite to party</button>`),i.onclick=t=>{let n=t.target.closest(`[data-act]`)?.dataset.act;n===`invite`&&Q.send(`partyInvite`,{target:e}),n===`leave`&&Q.send(`partyLeave`,{}),n&&Ng(`click`),i.classList.add(`hidden`)},i.style.left=`${Math.min(t,innerWidth-170)}px`,i.style.top=`${Math.min(n,innerHeight-80)}px`,i.classList.remove(`hidden`)}addEventListener(`pointerdown`,e=>{e.target.closest(`#playerMenu`)||Z(`playerMenu`).classList.add(`hidden`)},!0);var Ry=null;function zy(e){Ry=e.from,Z(`partyAskText`).textContent=`${e.name} invites you to their party.`,Z(`partyAsk`).classList.remove(`hidden`),Ng(`loot`)}function By(e){Ry&&Q.send(`partyAnswer`,{from:Ry,yes:e}),Ry=null,Z(`partyAsk`).classList.add(`hidden`)}Z(`partyYes`).onclick=()=>By(!0),Z(`partyNo`).onclick=()=>By(!1),Z(`partyLeave`).onclick=e=>{Q.send(`partyLeave`,{}),e.currentTarget.blur()};function Vy(){let e=Iy();if(Z(`party`).classList.toggle(`hidden`,!e),!e)return;let t=[...kv.values()].filter(t=>t.id!==Ov&&t.server.party===e).map(e=>{let t=e.server;return`<div class="pm${$&&Math.hypot(t.x-$.x,t.z-$.z)>25?` far`:``}">${ry(t.name)} <small>Lv ${t.level} ${ry(ah(t))}</small>
      <div class="pbar"><i style="width:${Math.round(100*t.hp/Math.max(1,t.hpMax))}%"></i></div></div>`}).join(``);Z(`partyList`).innerHTML!==t&&(Z(`partyList`).innerHTML=t)}var Hy=null,Uy=e=>$?Math.hypot($.x-e.n.x,$.z-e.n.z):1/0;function Wy(e){if(!$)return;if(Uy(e)<=2.2){Hy=null,gh(),_h(av[e.id],!0),Ng(`click`);return}let t=$.x-e.n.x,n=$.z-e.n.z,r=Math.hypot(t,n),i={x:e.n.x+t/r*1.2,z:e.n.z+n/r*1.2};$.steer=null,$.path=Wd($.x,$.z,i.x,i.z),Q.send(`move`,i),Hy=e}q_.domElement.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;document.activeElement?.blur();let t=Q&&Ny(e.clientX,e.clientY);if(t){tb(t);return}let n=Q&&Fy(e.clientX,e.clientY);if(n){Wy(n);return}let r=Q&&Py(e.clientX,e.clientY);r&&r!==Ov?Ly(r,e.clientX,e.clientY):(ky=!0,My(e.clientX,e.clientY,!0))}),addEventListener(`pointerup`,()=>{ky=!1}),q_.domElement.addEventListener(`pointermove`,e=>{Oy.lastX=e.clientX,Oy.lastY=e.clientY}),q_.domElement.addEventListener(`wheel`,e=>{Q_.zoom=jt.clamp(Q_.zoom*(e.deltaY>0?.9:1.1),.55,2.4),Q_.updateProjectionMatrix()},{passive:!0}),q_.domElement.addEventListener(`contextmenu`,e=>{e.preventDefault(),Zy()});var Gy=new Set,Ky={KeyW:[-1,-1],KeyS:[1,1],KeyA:[-1,1],KeyD:[1,-1],ArrowUp:[-1,-1],ArrowDown:[1,1],ArrowLeft:[-1,1],ArrowRight:[1,-1]};function qy(){if(!Q||!$||performance.now()<hy)return;let e=0,t=0;for(let n of Gy)e+=Ky[n][0],t+=Ky[n][1];let n=Math.hypot(e,t);$.path=[],$.steer=n>.01?{x:e/n,z:t/n}:null,Q.send(`steer`,{x:e,z:t})}addEventListener(`keydown`,e=>{let t=document.activeElement===Z(`chatInput`);if(e.key===`Enter`){if(!Q)return;if(t){let e=Z(`chatInput`).value.trim();e&&Q.send(`chat`,{text:e}),Z(`chatInput`).value=``,Z(`chatInput`).blur()}else Z(`chatInput`).focus();e.preventDefault();return}if(t){e.key===`Escape`&&Z(`chatInput`).blur();return}if(!Q)return;if(e.key===`Escape`&&(Jy?Zy():mh()?gh():sy&&Q.send(`disengage`)),e.code===`KeyM`&&!e.repeat&&(Sg(),fy()),e.code===`KeyC`&&!e.repeat&&_h(`char`),e.code===`KeyK`&&!e.repeat&&_h(`skills`),e.code===`KeyE`&&!e.repeat){let e=ov.filter(e=>Uy(e)<=Bu).sort((e,t)=>Uy(e)-Uy(t))[0];if(e)Wy(e);else for(let e of[`job`,`shop`,`oath3`])hh(e)&&_h(e,!1)}Ky[e.code]&&!Gy.has(e.code)&&(Gy.add(e.code),qy(),e.preventDefault());let n=/^(Digit|Numpad)(\d)$/.exec(e.code)?.[2],r=n&&ay.slotForKey(n);r&&!e.repeat&&Yy(r,e.code)}),addEventListener(`keyup`,e=>{Gy.delete(e.code)&&qy(),Jy&&e.code===Jy.code&&Xy()}),addEventListener(`blur`,()=>{Zy(),Gy.size&&(Gy.clear(),qy())});var Jy=null;function Yy(e,t){Zy();let n=kv.get(Ov)?.server,r=n&&v_(e.entry,n);r?(Jy={slot:e,code:t,spec:r},e.el.classList.add(`aiming`)):$y(e)}function Xy(){let{slot:e}=Jy;Zy(),$y(e,!0)}function Zy(){Jy&&(Jy.slot.el.classList.remove(`aiming`),Jy=null,lv.hide())}function Qy(e){let t=kv.get(Ov)?.c.root.position,n=Oy.lastX!==void 0,r=Jy.spec.kind,i=n?jy(Oy.lastX,Oy.lastY):null,a=n?r===`ally`?Py(Oy.lastX,Oy.lastY):r===`enemy`||r===`ground`?Ny(Oy.lastX,Oy.lastY):null:null;lv.update(Jy.spec,t,i,a?yy(a):null,e)}Z(`chatInput`).addEventListener(`focus`,()=>{Gy.size&&(Gy.clear(),qy())}),Z(`minimap`).addEventListener(`pointerdown`,e=>{if(e.button!==0||!Q||!$||performance.now()<hy)return;e.preventDefault(),e.stopPropagation();let t=f_(Z(`minimap`),e.clientX,e.clientY);t&&(Hy=null,$.steer=null,$.path=Wd($.x,$.z,t.x,t.z),Q.send(`move`,t),Ng(`click`))});function $y(e,t=!1){Q&&e?.entry&&(e.entry===`attack`?tb(t&&Oy.lastX!==void 0&&Ny(Oy.lastX,Oy.lastY)||void 0):e.entry===`wave`?(nb(Ov,`wave`),Q.send(`act`,{kind:`wave`})):e.def.use?eb(e.entry,t):(vy(`${e.def.name} has no combat effect yet`),Ng(`fail`)),e.el.classList.add(`flash`),setTimeout(()=>e.el.classList.remove(`flash`),150))}function eb(e,t){if((py[e]?.end??0)>performance.now()+50){Ng(`cooldown`);return}let n={skill:e};if(Oy.lastX!==void 0){let e=Ny(Oy.lastX,Oy.lastY);e&&(n.target=e);let r=jy(Oy.lastX,Oy.lastY);r&&(n.x=r.x,n.z=r.z);let i=t&&Py(Oy.lastX,Oy.lastY);i&&(n.ally=i)}let r=n.target&&v_(e,kv.get(Ov)?.server??{}),i=n.target&&yy(n.target),a=r?.kind===`enemy`&&i&&$&&Math.hypot(i.x-$.x,i.z-$.z)>r.range;$&&(a||e===`charge`||e===`blink`)&&($.path=[],$.steer=null),Q.send(`cast`,n)}function tb(e){$&&($.path=[],$.steer=null),Q.send(`engage`,e?{target:e}:{})}function nb(e,t,n){let r=n?Av.get(e):kv.get(e);r&&(r.act=t,r.actT=0)}new ResizeObserver(()=>document.documentElement.style.setProperty(`--bottom-h`,`${Z(`bottom`).offsetHeight}px`)).observe(Z(`bottom`)),addEventListener(`resize`,()=>{q_.setSize(innerWidth,innerHeight),J_.setSize(innerWidth,innerHeight),$_()});function rb(e,t,n){return e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*n}function ib(e,t){let n=t-U_,r=e.snaps;if(!r.length)return null;if(n<=r[0].t)return r[0];for(let e=r.length-1;e>0;e--)if(r[e-1].t<=n){let t=r[e-1],i=r[e],a=Math.min(1,(n-t.t)/Math.max(1,i.t-t.t));return{x:t.x+(i.x-t.x)*a,z:t.z+(i.z-t.z)*a,dir:i.dir,moving:i.moving}}return r[r.length-1]}var ab=new $a;ab.connect(document);var ob=0;q_.setAnimationLoop(()=>{ab.update();let e=Math.min(ab.getDelta(),.1),t=ab.getElapsed(),n=performance.now();if(ky&&Oy.lastX!==void 0&&n-Ay>220&&My(Oy.lastX,Oy.lastY,!1),$?.lunges){let e=$.lunges.find(e=>n<e.start+e.dur)??$.lunges.at(-1),t=Math.max(0,Math.min(1,(n-e.start)/e.dur));e.ease&&(t*=t),$.x=e.from.x+(e.to.x-e.from.x)*t,$.z=e.from.z+(e.to.z-e.from.z)*t,$.dir=Math.atan2(e.to.x-e.from.x,e.to.z-e.from.z),$.moving=t>0&&t<1,n>=$.lunges.at(-1).start+$.lunges.at(-1).dur&&($.lunges=null)}else if($){let t=kv.get(Ov)?.server;if(t){let e=Bv(t);e!==$.mountSpeed&&($.speed===$.mountSpeed&&($.speed=e),$.mountSpeed=e)}if(Gd($,e),t){let n=Math.hypot(t.x-$.x,t.z-$.z);if(t.target&&!$.path.length&&!$.steer){let n=Math.min(1,e*12);$.x+=(t.x-$.x)*n,$.z+=(t.z-$.z)*n,$.dir=t.dir,$.moving=t.moving}else if(n>G_)$.x=t.x,$.z=t.z;else if(!$.moving&&!t.moving&&n>.01){let n=Math.min(1,e*6);$.x+=(t.x-$.x)*n,$.z+=(t.z-$.z)*n}}}for(let r of kv.values()){let i,a,o,s;if(r.id===Ov&&$)({x:i,z:a,dir:o,moving:s}=$);else{let e=ib(r,n);if(!e)continue;({x:i,z:a,dir:o,moving:s}=e)}r.c.root.position.set(i,0,a),r.dir=rb(r.dir,o,Math.min(1,e*14)),r.c.root.rotation.y=r.dir;let c=s?`walk`:`idle`,l;if(r.act&&(r.actT+=e,r.actT>=W_?r.act=null:s&&r.act!==`attack`||(c=r.act,l=r.actT/W_)),r.server.mount!==r.mount&&zv(r,r.server.mount),r.horse){let n=s?`walk`:`idle`,i=0;r.horseAct&&(r.horseAct.t+=e,r.horseAct.t>=W_*1.4?r.horseAct=null:(n=`attack`,i=r.horseAct.t/(W_*1.4))),r.horse.pose(t+r.id.charCodeAt(0),n,i,!0),r.horse.seatNow&&Vv(r),om(r.c,t+r.id.charCodeAt(0),c===`walk`?`idle`:c,l)}else om(r.c,t+r.id.charCodeAt(0),c,l);V_(r,r.server.shield>0,t),L_(r,r.server.enchant>0,t),B_(r,r.server.blessed??0,t),r.bubbleT>0&&(r.bubbleT-=e)<=0&&r.bubble.classList.add(`hidden`)}for(let e of ov)om(e.c,t+3,`idle`);Hy&&Uy(Hy)<=2.2&&Wy(Hy);let r=e=>Uy(ov.find(t=>t.id===e))<=Bu+1;hh(`job`)&&!r(`oathkeeper`)&&_h(`job`,!1),hh(`shop`)&&!r(`merchant`)&&_h(`shop`,!1),hh(`oath3`)&&!r(`crownwarden`)&&_h(`oath3`,!1),wh(r(`wiseman`));for(let r of Av.values()){let i=ib(r,n);if(!i)continue;let a=r.m.root;if(a.position.set(i.x,0,i.z),r.dir=rb(r.dir,i.dir,Math.min(1,e*10)),a.rotation.y=r.dir,r.server.coat!==r.coat&&r.server.kind===`knight_dragon`&&r.deadT<0){qv(r.id),Gv(r.id,r.server);continue}if(P_(r,r.deadT>=0?``:r.server.status,t),r.deadT>=0){r.deadT=Math.min(K_,r.deadT+e);let n=r.deadT/K_;r.m.pose(t+r.seed,`idle`),a.rotation.z=Math.min(1,n*2.5)*Math.PI/2,a.position.y=-n*n*.6;continue}let o=i.moving?`walk`:`idle`,s;if(r.act&&(r.actT+=e,r.actT>=W_?r.act=null:(o=r.act,s=r.actT/W_)),r.m.pose(t+r.seed,o,s),r.hitT>0){r.hitT-=e;let t=Math.max(0,r.hitT)/.18;a.scale.set(.9*(1+t*.15),.9*(1-t*.2),.9*(1+t*.15))}else a.scale.setScalar(.9)}for(let t=jv.length-1;t>=0;t--){let n=jv[t];n.t+=e,n.obj.position.y=n.y+n.t*n.rise,n.el.style.opacity=String(Math.max(0,1-Math.max(0,n.t-n.life*.45)/(n.life*.55))),n.t>n.life&&(n.el.remove(),Y_.remove(n.obj),jv.splice(t,1))}for(let t=Mv.length-1;t>=0;t--){let n=Mv[t];n.t+=e;let r=n.t/1.4;n.g.position.copy(n.follow.c.root.position),n.col.scale.set(1-r*.6,.4+Math.min(1,r*4)*.6,1-r*.6),n.col.material.opacity=.6*(1-r),n.ringMesh.scale.setScalar(1+r*5),n.ringMesh.material.opacity=.8*(1-r),r>=1&&(Y_.remove(n.g),n.col.geometry.dispose(),n.ringMesh.geometry.dispose(),n.col.material.dispose(),n.ringMesh.material.dispose(),Mv.splice(t,1))}$&&(ev.x+=($.x-ev.x)*Math.min(1,e*8),ev.z+=($.z-ev.z)*Math.min(1,e*8),uv.position.set($.x,.02,$.z),uv.rotation.z=t*.6);let i=new L;if(sv>.01?(i.set(Math.random()-.5,0,Math.random()-.5).multiplyScalar(sv*.5),sv*=Math.exp(-e*7)):sv=0,Q_.position.copy(ev).add(Z_).add(i),Q_.lookAt(ev.clone().add(i)),tv.position.set(ev.x+8,16,ev.z+5),tv.target.position.copy(ev),pv.visible){let e=Av.get(sy);!e||e.deadT>=0?pv.visible=!1:(pv.position.set(e.m.root.position.x,.03,e.m.root.position.z),pv.rotation.z=-t*.8)}if(dv.visible&&(fv+=e,dv.scale.setScalar(1+fv*2),dv.material.opacity=1-fv/.6,fv>.6&&(dv.visible=!1)),nv.update(t,$),Jy&&Qy(t),cv.update(e),gy(n),Q&&(ob-=e)<=0){ob=.1,p_(Z(`minimap`),kv,Ov,$,Av,Iy()),Vy(),dy();let e=sy?1:n-cy<5e3?.6:0;e!==ly&&wg(ly=e),Z(`online`).textContent=`${kv.size} online`}q_.render(Y_,Q_),J_.render(Y_,Q_)});