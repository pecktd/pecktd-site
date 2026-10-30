const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./build-DONUU1-K.js","./rolldown-runtime-XKyaHtl9.js","./bundler-BvtR3xrj.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,O=1031,ne=1033,k=33776,re=33777,A=33778,ie=33779,j=35840,ae=35841,oe=35842,se=35843,ce=36196,le=37492,ue=37496,de=37488,M=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,N=2301,Ie=2302,Le=2303,Re=2400,P=2401,ze=2402,F=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,I(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=1234567,ot=Math.PI/180,st=180/Math.PI;function ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function lt(e,t,n){return Math.max(t,Math.min(n,e))}function ut(e,t){return(e%t+t)%t}function dt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ft(e,t,n){return e===t?0:(n-e)/(t-e)}function pt(e,t,n){return(1-n)*e+n*t}function mt(e,t,n,r){return pt(e,t,1-Math.exp(-n*r))}function ht(e,t=1){return t-Math.abs(ut(e,t*2)-t)}function gt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _t(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yt(e,t){return e+Math.random()*(t-e)}function bt(e){return e*(.5-Math.random())}function xt(e){e!==void 0&&(at=e);let t=at+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function St(e){return e*ot}function Ct(e){return e*st}function wt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Et(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:I(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function kt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var At={DEG2RAD:ot,RAD2DEG:st,generateUUID:ct,clamp:lt,euclideanModulo:ut,mapLinear:dt,inverseLerp:ft,lerp:pt,damp:mt,pingpong:ht,smoothstep:gt,smootherstep:_t,randInt:vt,randFloat:yt,randFloatSpread:bt,seededRandom:xt,degToRad:St,radToDeg:Ct,isPowerOfTwo:wt,ceilPowerOfTwo:Tt,floorPowerOfTwo:Et,setQuaternionFromProperEuler:Dt,normalize:kt,denormalize:Ot},R=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},jt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mt.copy(this).projectOnVector(e),this.sub(Mt)}reflect(e){return this.sub(Mt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mt=new z,Nt=new jt,B=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Pt.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Pt.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pt=new B,Ft=new B().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new B().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lt(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var Rt=Lt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=Ye(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=zt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Kt=0,qt=new z,Jt=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=ct(),this.name=``,this.source=new Wt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qt).x}get height(){return this.source.getSize(qt).y}get depth(){return this.source.getSize(qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=300,Jt.DEFAULT_ANISOTROPY=1;var Yt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r=new Jt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zt=class extends Xt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qt=class extends Jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$t=class extends Jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},en=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],k=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*te+c*re,i[4]=a*S+o*E+s*O+c*A,i[8]=a*C+o*D+s*ne+c*ie,i[12]=a*w+o*ee+s*k+c*j,i[1]=l*x+u*T+d*te+f*re,i[5]=l*S+u*E+d*O+f*A,i[9]=l*C+u*D+d*ne+f*ie,i[13]=l*w+u*ee+d*k+f*j,i[2]=p*x+m*T+h*te+g*re,i[6]=p*S+m*E+h*O+g*A,i[10]=p*C+m*D+h*ne+g*ie,i[14]=p*w+m*ee+h*k+g*j,i[3]=_*x+v*T+y*te+b*re,i[7]=_*S+v*E+y*O+b*A,i[11]=_*C+v*D+y*ne+b*ie,i[15]=_*w+v*ee+y*k+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=tn.set(r[0],r[1],r[2]).length(),o=tn.set(r[4],r[5],r[6]).length(),s=tn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),nn.copy(this);let c=1/a,l=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=l,nn.elements[5]*=l,nn.elements[6]*=l,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new z,nn=new en,rn=new z(0,0,0),an=new z(1,1,1),on=new z,sn=new z,cn=new z,ln=new en,un=new jt,dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-lt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},pn=0,mn=new z,hn=new jt,gn=new en,_n=new z,vn=new z,yn=new z,bn=new jt,xn=new z(1,0,0),Sn=new z(0,1,0),Cn=new z(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new dn,r=new jt,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new en},normalMatrix:{value:new B}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};On.DEFAULT_UP=new z(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},An={type:`move`},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(An)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var In=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=ut(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Fn(i,r,e+1/3),this.g=Fn(i,r,e),this.b=Fn(i,r,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=Mn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(lt(Ln.r*255,0,255))*65536+Math.round(lt(Ln.g*255,0,255))*256+Math.round(lt(Ln.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Be){Rt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pn);let n=pt(Nn.h,Pn.h,t),r=pt(Nn.s,Pn.s,t),i=pt(Nn.l,Pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new In;In.NAMES=Mn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new In(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new z,Vn=new z,Hn=new z,Un=new z,Wn=new z,Gn=new z,Kn=new z,qn=new z,Jn=new z,Yn=new z,Xn=new Yt,Zn=new Yt,Qn=new Yt,$n=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new z,new z,new z,new z,new z,new z,new z,new z],nr=new z,rr=new er,ir=new z,ar=new z,or=new z,sr=new z,cr=new z,lr=new z,ur=new z,dr=new z,fr=new z,pr=new z;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new z,gr=new R,_r=0,vr=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ot(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ot(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ot(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ot(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),r=kt(r,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new z,wr=new z,Tr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new en,Or=new On,kr=new z,Ar=new er,jr=new er,Mr=new z,Nr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new B().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let c=new z,l=new z,u=new z,d=new R,f=new R,p=new R,m=new z,h=new z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new z,y=new z,b=new z,x=new z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=new z,Fr=new z,Ir=new B,Lr=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pr.subVectors(n,t).cross(Fr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ir.getNormalMatrix(e),r=this.coplanarPoint(Pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rr=0,zr=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rr++}),this.uuid=ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new In(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new In().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Lr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Br=new z,Vr=new z,Hr=new z,Ur=new z,Wr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vr.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Vr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Ur.dot(this.direction),s=-Ur.dot(Hr),c=Ur.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Vr).addScaledVector(Hr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Br.subVectors(e.center,this.origin);let n=Br.dot(this.direction),r=Br.dot(Br)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,ee,te,O,ne,k,re;if(y>=b&&y>=x?(w=s,D=u,O=p,re=g,s>=0?(S=c,C=l,T=d,E=f,ee=m,te=h,ne=_,k=v):(S=l,C=c,T=f,E=d,ee=h,te=m,ne=v,k=_)):b>=x?(w=c,D=d,O=m,re=_,c>=0?(S=l,C=s,T=f,E=u,ee=h,te=p,ne=v,k=g):(S=s,C=l,T=u,E=f,ee=p,te=h,ne=g,k=v)):(w=l,D=f,O=h,re=v,l>=0?(S=s,C=c,T=u,E=d,ee=p,te=m,ne=g,k=_):(S=c,C=s,T=d,E=u,ee=m,te=p,ne=_,k=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=ee-A*O,ce=te-ie*O,le=ne-A*re,ue=k-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*O+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gr=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kr=new en,qr=new Wr,Jr=new Tr,Yr=new z,Xr=new z,Zr=new z,Qr=new z,$r=new z,ei=new z,ti=new z,ni=new z,V=class extends On{constructor(e=new Nr,t=new Gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($r.fromBufferAttribute(s,e),a?ei.addScaledVector($r,r):ei.addScaledVector($r.sub(t),r))}t.add(ei)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),qr.copy(e.ray).recast(e.near),!(Jr.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Jr,Yr)===null||qr.origin.distanceToSquared(Yr)>(e.far-e.near)**2))&&(Kr.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Kr),(n.boundingBox===null||qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ni.copy(s),ni.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ni);return l<n.near||l>n.far?null:{distance:l,point:ni.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xr),e.getVertexPosition(c,Zr),e.getVertexPosition(l,Qr);let u=ri(e,t,n,r,Xr,Zr,Qr,ti);if(u){let e=new z;$n.getBarycoord(ti,Xr,Zr,Qr,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};$n.getNormal(Xr,Zr,Qr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Jt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new en,ci=new en,li=[],ui=new er,di=new en,fi=new V,pi=new Tr,mi=class extends V{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new Tr,gi=new R(.5,.5),_i=new z,vi=class{constructor(e=new Lr,t=new Lr,n=new Lr,r=new Lr,i=new Lr,a=new Lr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476+gi.distanceTo(e.center),hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_i.x=r.normal.x>0?e.max.x:e.min.x,_i.y=r.normal.y>0?e.max.y:e.min.y,_i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_i)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yi=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new In(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bi=new z,xi=new z,Si=new en,Ci=new Wr,wi=new Tr,Ti=new z,Ei=new z,Di=class extends On{constructor(e=new Nr,t=new yi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)bi.fromBufferAttribute(t,e-1),xi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=bi.distanceTo(xi);e.setAttribute(`lineDistance`,new xr(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wi.copy(n.boundingSphere),wi.applyMatrix4(r),wi.radius+=i,e.ray.intersectsSphere(wi)===!1)return;Si.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(Si);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Oi(this,e,Ci,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Oi(this,e,Ci,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Oi(this,e,Ci,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Oi(this,e,Ci,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Oi(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(bi.fromBufferAttribute(s,i),xi.fromBufferAttribute(s,a),n.distanceSqToSegment(bi,xi,Ti,Ei)>r)return;Ti.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ti);if(!(c<t.near||c>t.far))return{distance:c,point:Ei.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ki=new z,Ai=new z,ji=class extends Di{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ki.fromBufferAttribute(t,e),Ai.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ki.distanceTo(Ai);e.setAttribute(`lineDistance`,new xr(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Mi=class extends Jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ni=class extends Jt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Pi=class extends Ni{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fi=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ii=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Li=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new z,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ri=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class e extends Nr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new xr(i,3)),this.setAttribute(`normal`,new xr(i.slice(),3)),this.setAttribute(`uv`,new xr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Bi=new z,Vi=new z,Hi=new z,Ui=new $n,Wi=class extends Nr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(ot*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Ui;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Ui.getNormal(Hi),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Ui[c[e]],o=Ui[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Hi.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Hi.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Bi.fromBufferAttribute(a,t),Vi.fromBufferAttribute(a,n),d.push(Bi.x,Bi.y,Bi.z),d.push(Vi.x,Vi.y,Vi.z)}this.setAttribute(`position`,new xr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gi=class e extends zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ki=class e extends zi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},qi=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ji=class e extends Nr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new R;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new xr(s,3)),this.setAttribute(`normal`,new xr(c,3)),this.setAttribute(`uv`,new xr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Yi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Zi(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Zi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Xi(e){let t={};for(let n=0;n<e.length;n++){let r=Yi(e[n]);for(let e in r)t[e]=r[e]}return t}function Zi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Qi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function $i(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}var ea={clone:Yi,merge:Xi},ta=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,na=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ra=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ta,this.fragmentShader=na,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Qi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new In().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new en().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ia=class extends ra{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},aa=class extends zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oa=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=F,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sa=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ca(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function la(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ua=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},da=class extends ua{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case P:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case P:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},fa=class extends ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},pa=class extends ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ma=class extends ua{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=_a(n,t,g,y,r);i[p]=ha(x,o,_,b,m)}return i}};function ha(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ga(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function _a(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ha(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ga(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var va=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ca(t,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ca(e.times,Array),values:ca(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),la(e.settings)&&(n.settings={inTangents:ca(e.settings.inTangents,Array),outTangents:ca(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case N:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return N;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;la(this.settings)&&(ya(this.settings.inTangents,e),ya(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,la(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ya(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}va.prototype.ValueTypeName=``,va.prototype.TimeBufferType=Float32Array,va.prototype.ValueBufferType=Float32Array,va.prototype.DefaultInterpolation=N;var ba=class extends va{constructor(e,t,n){super(e,t,n)}};ba.prototype.ValueTypeName=`bool`,ba.prototype.ValueBufferType=Array,ba.prototype.DefaultInterpolation=Fe,ba.prototype.InterpolantFactoryMethodLinear=void 0,ba.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends va{constructor(e,t,n,r){super(e,t,n,r)}};xa.prototype.ValueTypeName=`color`;var Sa=class extends va{constructor(e,t,n,r){super(e,t,n,r)}};Sa.prototype.ValueTypeName=`number`;var Ca=class extends ua{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)jt.slerpFlat(i,0,a,c-o,a,c,s);return i}},wa=class extends va{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName=`quaternion`,wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends va{constructor(e,t,n){super(e,t,n)}};Ta.prototype.ValueTypeName=`string`,Ta.prototype.ValueBufferType=Array,Ta.prototype.DefaultInterpolation=Fe,Ta.prototype.InterpolantFactoryMethodLinear=void 0,Ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends va{constructor(e,t,n,r){super(e,t,n,r)}};Ea.prototype.ValueTypeName=`vector`;var Da=class extends On{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new In(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Oa=class extends Da{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new In(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ka=new en,Aa=new z,ja=new z,Ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Aa),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ka,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Na=new z,Pa=new jt,Fa=new z,Ia=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,Pa,Fa),Fa.x===1&&Fa.y===1&&Fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Pa,Fa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Na,Pa,Fa),Fa.x===1&&Fa.y===1&&Fa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Pa,Fa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},La=new z,Ra=new R,za=new R,Ba=class extends Ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=st*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ot*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return st*2*Math.atan(Math.tan(ot*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(La.x,La.y).multiplyScalar(-e/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(La.x,La.y).multiplyScalar(-e/La.z)}getViewSize(e,t){return this.getViewBounds(e,Ra,za),t.subVectors(za,Ra)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ot*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Va=class extends Ma{constructor(){super(new Ba(90,1,.5,500)),this.isPointLightShadow=!0}},Ha=class extends Da{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Va}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ua=class extends Ia{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wa=class extends Ma{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ga=class extends Da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new Wa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ka=-90,qa=1,Ja=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ba(Ka,qa,e,t);r.layers=this.layers,this.add(r);let i=new Ba(Ka,qa,e,t);i.layers=this.layers,this.add(i);let a=new Ba(Ka,qa,e,t);a.layers=this.layers,this.add(a);let o=new Ba(Ka,qa,e,t);o.layers=this.layers,this.add(o);let s=new Ba(Ka,qa,e,t);s.layers=this.layers,this.add(s);let c=new Ba(Ka,qa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ya=class extends Ba{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Xa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Za.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Za(){this._document.hidden===!1&&this.reset()}var Qa=`\\[\\]\\.:\\/`,$a=RegExp(`[\\[\\]\\.:\\/]`,`g`),eo=`[^\\[\\]\\.:\\/]`,to=`[^`+Qa.replace(`\\.`,``)+`]`,no=`((?:WC+[\\/:])*)`.replace(`WC`,eo),ro=`(WCOD+)?`.replace(`WCOD`,to),io=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,eo),ao=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,eo),oo=RegExp(`^`+no+ro+io+ao+`$`),so=[`material`,`materials`,`bones`,`map`],co=class{constructor(e,t,n){let r=n||lo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace($a,``)}static parseTrackName(e){let t=oo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);so.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lo.Composite=co,lo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lo.prototype.GetterByBindingType=[lo.prototype._getValue_direct,lo.prototype._getValue_array,lo.prototype._getValue_arrayElement,lo.prototype._getValue_toArray],lo.prototype.SetterByBindingTypeAndVersioning=[[lo.prototype._setValue_direct,lo.prototype._setValue_direct_setNeedsUpdate,lo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lo.prototype._setValue_array,lo.prototype._setValue_array_setNeedsUpdate,lo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lo.prototype._setValue_arrayElement,lo.prototype._setValue_arrayElement_setNeedsUpdate,lo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lo.prototype._setValue_fromArray,lo.prototype._setValue_fromArray_setNeedsUpdate,lo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uo=new en,fo=class{constructor(e,t,n=0,r=1/0){this.ray=new Wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new fn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):L(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return uo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uo),this}intersectObject(e,t=!0,n=[]){return mo(e,this,n,t),n.sort(po),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)mo(e[r],this,n,t);return n.sort(po),n}};function po(e,t){return e.distance-t.distance}function mo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)mo(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ho(e,t,n,r){let i=go(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case k:case re:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case A:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case se:return Math.max(e,16)*Math.max(t,8)/4;case j:case oe:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function go(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function _o(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function vo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var yo={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},H={common:{diffuse:{value:new In(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new In(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new In(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new In(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},bo={basic:{uniforms:Xi([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:yo.meshbasic_vert,fragmentShader:yo.meshbasic_frag},lambert:{uniforms:Xi([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new In(0)},envMapIntensity:{value:1}}]),vertexShader:yo.meshlambert_vert,fragmentShader:yo.meshlambert_frag},phong:{uniforms:Xi([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new In(0)},specular:{value:new In(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yo.meshphong_vert,fragmentShader:yo.meshphong_frag},standard:{uniforms:Xi([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new In(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yo.meshphysical_vert,fragmentShader:yo.meshphysical_frag},toon:{uniforms:Xi([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new In(0)}}]),vertexShader:yo.meshtoon_vert,fragmentShader:yo.meshtoon_frag},matcap:{uniforms:Xi([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:yo.meshmatcap_vert,fragmentShader:yo.meshmatcap_frag},points:{uniforms:Xi([H.points,H.fog]),vertexShader:yo.points_vert,fragmentShader:yo.points_frag},dashed:{uniforms:Xi([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yo.linedashed_vert,fragmentShader:yo.linedashed_frag},depth:{uniforms:Xi([H.common,H.displacementmap]),vertexShader:yo.depth_vert,fragmentShader:yo.depth_frag},normal:{uniforms:Xi([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:yo.meshnormal_vert,fragmentShader:yo.meshnormal_frag},sprite:{uniforms:Xi([H.sprite,H.fog]),vertexShader:yo.sprite_vert,fragmentShader:yo.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yo.background_vert,fragmentShader:yo.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:yo.backgroundCube_vert,fragmentShader:yo.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yo.cube_vert,fragmentShader:yo.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yo.equirect_vert,fragmentShader:yo.equirect_frag},distance:{uniforms:Xi([H.common,H.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yo.distance_vert,fragmentShader:yo.distance_frag},shadow:{uniforms:Xi([H.lights,H.fog,{color:{value:new In(0)},opacity:{value:1}}]),vertexShader:yo.shadow_vert,fragmentShader:yo.shadow_frag}};bo.physical={uniforms:Xi([bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new In(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new In(0)},specularColor:{value:new In(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:yo.meshphysical_vert,fragmentShader:yo.meshphysical_frag};var xo={r:0,b:0,g:0},So=new en,Co=new B;Co.set(-1,0,0,0,1,0,0,0,1);function wo(e,t,n,r,i,a){let o=new In(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new V(new Ii(1,1,1),new ra({name:`BackgroundCubeMaterial`,uniforms:Yi(bo.backgroundCube.uniforms),vertexShader:bo.backgroundCube.vertexShader,fragmentShader:bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(So.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Co),l.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new qi(2,2),new ra({name:`BackgroundMaterial`,uniforms:Yi(bo.background.uniforms),vertexShader:bo.background.vertexShader,fragmentShader:bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(xo,$i(e)),n.buffers.color.setClear(xo.r,xo.g,xo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function To(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Eo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Do(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Oo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Lr,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ko=4,Ao=6,jo=20,Mo=256,No=new Ua,Po=new In,Fo=null,Io=0,Lo=0,Ro=!1,zo=new z,Bo=new z,Vo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=zo}=i;Fo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Io,Lo),this._renderer.xr.enabled=Ro,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Ve,depthBuffer:!1},r=Uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ho(r)),this._blurMaterial=Ko(r,e,t),this._ggxMaterial=Go(r,e,t)}return r}_compileMaterial(e){let t=new V(new Nr,e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,r,i){let a=new Ba(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Po),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new Ii,new Gr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Po),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Wo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Wo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ko?n-d+ko:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Wo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,No),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Wo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,No)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Wo(t,3*l*(r>this._lodMax-ko?r-this._lodMax+ko:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,No)}};function Ho(e){let t=[],n=[],r=e,i=e-ko+1+Ao;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Bo.set(1,r,n):e===1?Bo.set(-n,1,-r):e===2?Bo.set(-n,r,1):e===3?Bo.set(-1,r,-n):e===4?Bo.set(-n,-1,r):Bo.set(n,r,-1),Bo.toArray(l,(e*6+t)*3)}}let u=new Nr;u.setAttribute(`position`,new vr(c,3)),u.setAttribute(`outputDirection`,new vr(l,3)),n.push(new V(u,null)),r>ko&&r--}return{lodMeshes:n,sizeLods:t}}function Uo(e,t,n){let r=new Zt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Wo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Go(e,t,n){return new ra({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ko(e,t,n){return new ra({name:`SphericalGaussianBlur`,defines:{SAMPLES:jo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function qo(){return new ra({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jo(){return new ra({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Xo=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Mi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),i=new ra({name:`CubemapFromEquirect`,uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ja(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Zo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Xo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Vo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Vo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Qo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function $o(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function es(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ts(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ns(e,t,n){let r=new WeakMap,i=new Yt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Qt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new R(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function rs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var is={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function as(e,t,n,r,i,a){let o=new Zt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Nr;l.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let u=new ia({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new V(l,u),f=new Ua(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Zt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Rt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=is[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var os=new Jt,ss=new Ni(1,1),cs=new Qt,ls=new $t,us=new Mi,ds=[],fs=[],ps=new Float32Array(16),ms=new Float32Array(9),hs=new Float32Array(4);function gs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ds[i];if(a===void 0&&(a=new Float32Array(i),ds[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function _s(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function vs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ys(e,t){let n=fs[t];n===void 0&&(n=new Int32Array(t),fs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function bs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_s(n,t))return;e.uniform2fv(this.addr,t),vs(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_s(n,t))return;e.uniform3fv(this.addr,t),vs(n,t)}}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_s(n,t))return;e.uniform4fv(this.addr,t),vs(n,t)}}function ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_s(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),vs(n,t)}else{if(_s(n,r))return;hs.set(r),e.uniformMatrix2fv(this.addr,!1,hs),vs(n,r)}}function Ts(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_s(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),vs(n,t)}else{if(_s(n,r))return;ms.set(r),e.uniformMatrix3fv(this.addr,!1,ms),vs(n,r)}}function Es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(_s(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),vs(n,t)}else{if(_s(n,r))return;ps.set(r),e.uniformMatrix4fv(this.addr,!1,ps),vs(n,r)}}function Ds(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_s(n,t))return;e.uniform2iv(this.addr,t),vs(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_s(n,t))return;e.uniform3iv(this.addr,t),vs(n,t)}}function As(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_s(n,t))return;e.uniform4iv(this.addr,t),vs(n,t)}}function js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_s(n,t))return;e.uniform2uiv(this.addr,t),vs(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_s(n,t))return;e.uniform3uiv(this.addr,t),vs(n,t)}}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_s(n,t))return;e.uniform4uiv(this.addr,t),vs(n,t)}}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ss.compareFunction=n.isReversedDepthBuffer()?518:515,a=ss):a=os,n.setTexture2D(t||a,i)}function Is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ls,i)}function Ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||us,i)}function Rs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||cs,i)}function zs(e){switch(e){case 5126:return bs;case 35664:return xs;case 35665:return Ss;case 35666:return Cs;case 35674:return ws;case 35675:return Ts;case 35676:return Es;case 5124:case 35670:return Ds;case 35667:case 35671:return Os;case 35668:case 35672:return ks;case 35669:case 35673:return As;case 5125:return js;case 36294:return Ms;case 36295:return Ns;case 36296:return Ps;case 35678:case 36198:case 36298:case 36306:case 35682:return Fs;case 35679:case 36299:case 36307:return Is;case 35680:case 36300:case 36308:case 36293:return Ls;case 36289:case 36303:case 36311:case 36292:return Rs}}function Bs(e,t){e.uniform1fv(this.addr,t)}function Vs(e,t){let n=gs(t,this.size,2);e.uniform2fv(this.addr,n)}function Hs(e,t){let n=gs(t,this.size,3);e.uniform3fv(this.addr,n)}function Us(e,t){let n=gs(t,this.size,4);e.uniform4fv(this.addr,n)}function Ws(e,t){let n=gs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Gs(e,t){let n=gs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ks(e,t){let n=gs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function qs(e,t){e.uniform1iv(this.addr,t)}function Js(e,t){e.uniform2iv(this.addr,t)}function Ys(e,t){e.uniform3iv(this.addr,t)}function Xs(e,t){e.uniform4iv(this.addr,t)}function Zs(e,t){e.uniform1uiv(this.addr,t)}function Qs(e,t){e.uniform2uiv(this.addr,t)}function $s(e,t){e.uniform3uiv(this.addr,t)}function ec(e,t){e.uniform4uiv(this.addr,t)}function tc(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ss:os;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function nc(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ls,a[e])}function rc(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||us,a[e])}function ic(e,t,n){let r=this.cache,i=t.length,a=ys(n,i);_s(r,a)||(e.uniform1iv(this.addr,a),vs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||cs,a[e])}function ac(e){switch(e){case 5126:return Bs;case 35664:return Vs;case 35665:return Hs;case 35666:return Us;case 35674:return Ws;case 35675:return Gs;case 35676:return Ks;case 5124:case 35670:return qs;case 35667:case 35671:return Js;case 35668:case 35672:return Ys;case 35669:case 35673:return Xs;case 5125:return Zs;case 36294:return Qs;case 36295:return $s;case 36296:return ec;case 35678:case 36198:case 36298:case 36306:case 35682:return tc;case 35679:case 36299:case 36307:return nc;case 35680:case 36300:case 36308:case 36293:return rc;case 36289:case 36303:case 36311:case 36292:return ic}}var oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zs(t.type)}},sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ac(t.type)}},cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},lc=/(\w+)(\])?(\[|\.)?/g;function uc(e,t){e.seq.push(t),e.map[t.id]=t}function dc(e,t,n){let r=e.name,i=r.length;for(lc.lastIndex=0;;){let a=lc.exec(r),o=lc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){uc(n,l===void 0?new oc(s,e,t):new sc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new cc(s),uc(n,e)),n=e}}}var fc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);dc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function pc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var mc=37297,hc=0;function gc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var _c=new B;function vc(e){Rt._getMatrix(_c,Rt.workingColorSpace,e);let t=`mat3( ${_c.elements.map(e=>e.toFixed(4))} )`;switch(Rt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function yc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+gc(e.getShaderSource(t),r)}return i}function bc(e,t){let n=vc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var xc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Sc(e,t){let n=xc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Cc=new z;function wc(){return Rt.getLuminanceCoefficients(Cc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Cc.x.toFixed(4)}, ${Cc.y.toFixed(4)}, ${Cc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Tc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Oc).join(`
`)}function Ec(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Dc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Oc(e){return e!==``}function kc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(e){return e.replace(jc,Pc)}var Nc=new Map;function Pc(e,t){let n=yo[t];if(n===void 0){let e=Nc.get(t);if(e!==void 0)n=yo[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Mc(n)}var Fc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(e){return e.replace(Fc,Lc)}function Lc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Rc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var zc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Bc(e){return zc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Vc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Hc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Vc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Uc={302:`ENVMAP_MODE_REFRACTION`};function Wc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Uc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Gc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Kc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Gc[e.combine]||`ENVMAP_BLENDING_NONE`}function qc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Jc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Bc(n),l=Hc(n),u=Wc(n),d=Kc(n),f=qc(n),p=Tc(n),m=Ec(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Oc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Oc).join(`
`),_.length>0&&(_+=`
`)):(g=[Rc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Oc).join(`
`),_=[Rc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:yo.tonemapping_pars_fragment,n.toneMapping===0?``:Sc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,yo.colorspace_pars_fragment,bc(`linearToOutputTexel`,n.outputColorSpace),wc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Oc).join(`
`)),o=Mc(o),o=kc(o,n),o=Ac(o,n),s=Mc(s),s=kc(s,n),s=Ac(s,n),o=Ic(o),s=Ic(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=pc(i,i.VERTEX_SHADER,y),S=pc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=yc(i,x,`vertex`),n=yc(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new fc(i,h),T=Dc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,mc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=hc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Yc=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=Yc++,this.code=e,this.usedTimes=0}};function Qc(e){return e===1030||e===37490||e===36285}function $c(e,t,n,r,i,a){let o=new fn,s=new Xc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=bo[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),k=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,A=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,N=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:A,batchingColor:A&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Qc(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:N,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:k,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&Rt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||A)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=bo[t];n=ea.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Jc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function el(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function tl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function rl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||tl),r.length>1&&r.sort(t||nl),i.length>1&&i.sort(t||nl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function il(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new rl,e.set(t,[i])):n>=r.length?(i=new rl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new In};break;case`SpotLight`:n={position:new z,direction:new z,color:new In,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new In,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new In,groundColor:new In};break;case`RectAreaLight`:n={color:new In,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function ol(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var sl=0;function cl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ll(e){let t=new al,n=ol(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new en,o=new en;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(cl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=H.LTC_FLOAT_1,r.rectAreaLTC2=H.LTC_FLOAT_2):(r.rectAreaLTC1=H.LTC_HALF_1,r.rectAreaLTC2=H.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=sl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ul(e){let t=new ll(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function dl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ul(e),t.set(n,[a])):r>=i.length?(a=new ul(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var fl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pl=`uniform sampler2D shadow_pass;
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
}`,ml=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],hl=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],gl=new en,_l=new z,vl=new z;function yl(e,t,n){let i=new vi,a=new R,s=new R,c=new Yt,l=new oa,u=new sa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ra({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:fl,fragmentShader:pl}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Nr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new V(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Zt(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ni(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Xo(a.x),p.map.depthTexture=new Pi(a.x,m)):(p.map=new Zt(a.x,a.y),p.map.depthTexture=new Ni(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),_l.setFromMatrixPosition(d.matrixWorld),e.position.copy(_l),vl.copy(e.position),vl.add(ml[t]),e.up.copy(hl[t]),e.lookAt(vl),e.updateMatrixWorld(),n.makeTranslation(-_l.x,-_l.y,-_l.z),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Zt(a.x,a.y,{format:te,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function bl(e,t){function n(){let t=!1,n=new Yt,r=null,i=new Yt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new In(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Yt().fromArray(oe),le=new Yt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==te&&(re&&e.lineWidth(t),te=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new In(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function xl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new R,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function O(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?He:Rt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function k(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ae(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(e,t){let n=f.get(e);if(e.isVideoTexture&&N(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Se(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function pe(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Se(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let he={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ge={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},_e={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ve(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,he[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,he[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,he[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ge[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ge[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,_e[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ye(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&j(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=be(r.start,t.width,4),c=be(n.start,t.width,4);r.start<=o+1&&s===c&&be(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Se(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ye(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Rt.getPrimaries(Rt.workingColorSpace),n=t.colorSpace===``?null:Rt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=O(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ve(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=k(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&xe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ho(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ho(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Le(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Le(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n){if(t.image.length!==6)return;let r=ye(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Rt.getPrimaries(Rt.workingColorSpace),o=t.colorSpace===``?null:Rt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=k(t,h);ve(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.normalized,i.colorSpace);Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ee(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,i.__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,re)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else M(t.depthTexture,0);let a=i.__webglTexture,o=Pe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ee(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ee(t.__webglFramebuffer[0],e,0):Ee(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Te(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Te(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){let r=f.get(e);t!==void 0&&we(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&De(e)}function ke(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,A);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Fe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Te(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)we(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ve(o,r),we(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ve(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else we(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&De(e)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(e){if(e.samples>0){if(Fe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(je.push(a),Me.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Me)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Rt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Sl(e,t){function n(n,r=``){let i,a=Rt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Cl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wl=`
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

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ra({vertexShader:Cl,fragmentShader:wl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},El=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Tl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new R,te=null,O=null,ne=new Ba;ne.viewport=new Yt;let k=new Ba;k.viewport=new Yt;let re=[ne,k],A=new Ya,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getHandSpace()};function ae(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),O!==null){let e=O.camera;e.fov=O.fov,e.zoom=O.zoom,e.updateProjectionMatrix(),O=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ni(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Zt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new z,le=new z;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=k.near=ne.near=t,A.far=k.far=ne.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,ne.layers.mask=A.layers.mask&-5,k.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;de(A,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(A,ne,k):A.projectionMatrix.copy(ne.projectionMatrix),O===null&&e.isPerspectiveCamera&&(O={camera:e,fov:e.fov,zoom:e.zoom}),M(e,A,i)};function M(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=st*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let fe=null;function pe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new Ba,o.layers.enable(n),o.viewport=new Yt,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Fi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let me=new _o;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},Dl=new en,Ol=new B;Ol.set(-1,0,0,0,1,0,0,0,1);function kl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,$i(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Dl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ol),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Al(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var jl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ml=null;function Nl(){return Ml===null&&(Ml=new ai(jl,16,16,te,g),Ml.name=`DFG_LUT`,Ml.minFilter=o,Ml.magFilter=o,Ml.wrapS=t,Ml.wrapT=t,Ml.generateMipmaps=!1,Ml.needsUpdate=!0),Ml}var Pl=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ne,O,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new z,te=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Be;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Yt,he=new Yt,ge=null,_e=new In(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Yt(0,0,ye,be),Te=new Yt(0,0,ye,be),Ee=!1,De=new vi,Oe=!1,ke=!1,Ae=new en,je=new z,Me=new Yt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}let Le,Re,P,ze,F,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot,st,ct;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}lt()}catch(e){throw t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),L(`WebGLRenderer: `+e.message),e}function lt(){Le=new Qo(N),Le.init(),ot=new Sl(N,Le),Re=new Do(N,Le,e,ot),P=new bl(N,Le),Re.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new ts(N),F=new el,Ve=new xl(N,Le,P,F,Re,ot,ze),He=new Zo(j),Ue=new vo(N),st=new To(N,Ue),We=new $o(N,Ue,ze,st),Ge=new rs(N,We,Ue,st,ze),rt=new ns(N,Re,Ve),$e=new Oo(F),qe=new $c(j,He,Le,Re,st,$e),Je=new kl(j,F),Ye=new il,Ze=new dl(Le),nt=new wo(j,He,P,Ge,x,s),et=new yl(j,Ge,Re),ct=new Al(N,ze,Re,P),it=new Eo(N,Le,ze),at=new es(N,Le,ze),ze.programs=qe.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Ye,j.shadowMap=et,j.state=P,j.info=ze}S!==1009&&(ie=new as(S,t.width,t.height,o,r,i));let ut=new El(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){ut.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),nt.dispose(),Ye.dispose(),Ze.dispose(),F.dispose(),He.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),qe.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,bt),ut.removeEventListener(`sessionend`,xt),St.stop()};function dt(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ae=!0}function ft(){Qe(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;lt(),ze.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function pt(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),F.remove(e)}function gt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),Oe===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Ze.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),Oe===!0&&$e.setGlobalState(this.clippingPlanes,t),oe!==null&&et.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];_t(o,n,t,e),r.add(o)}else _t(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new _o;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,ut.setAnimationLoop(e),e===null?St.stop():St.start()},ut.addEventListener(`sessionstart`,bt),ut.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Ze.get(e,A.length),k.init(t),k.state.textureUnits=Ve.getTextureUnits(),A.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ke,t.reversedDepth),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),te=Ye.get(e,re.length),te.init(),re.push(te),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,j.sortObjects)}Ct(e,t,0,j.sortObjects),te.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&te.sort(Se,Ce),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&nt.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&$e.beginShadows();let i=k.state.shadowsArray;if(et.render(i,e,t),Oe===!0&&$e.endShadows(),(r&&ie.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(te,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&nt.render(e),wt(te,e,t)}M!==null&&de===0&&(Ve.updateMultisampleRenderTarget(M),Ve.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],Ve.setTextureUnits(k.state.textureUnits),Oe===!0&&$e.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),te=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(De)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let i=Ge.update(e),a=e.material;a.visible&&te.push(e,i,a,n,Me.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(De))){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Me.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&te.push(e,i,c,n,Me.z,s,t)}}else a.visible&&te.push(e,i,a,n,Me.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&$e.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Zt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),u=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&nt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&$e.setGlobalState(j.clippingPlanes,r),Et(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}j.setRenderTarget(s,u,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=qe.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),At(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=fc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function R(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Rt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;$e.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ot(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=R(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(N,`sunShadowMap`,y.state.sunShadowMap,Ve),y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Ve),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Ve),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Ve));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&rt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Nl()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Mt(E,w),a&&r.fog===!0&&Je.refreshFogUniforms(E,a),Je.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}fc.upload(N,kt(v),E,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(fc.upload(N,kt(v),E,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function B(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Re.textureFormatReadable(e.format),t.__typeReadable=Re.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=B(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=B(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}},Fl=class extends On{constructor(e=document.createElement(`div`)){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position=`absolute`,this.element.style.userSelect=`none`,this.element.setAttribute(`draggable`,!1),this.center=new R(.5,.5),this.rotation2D=0,this.addEventListener(`removed`,function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},Il=new z,Ll=new en,Rl=new en,zl=new z,Bl=new z,Vl=class{constructor(e={}){let t=this,n,r,i,a,o={objects:new WeakMap},s=e.element===void 0?document.createElement(`div`):e.element;s.style.overflow=`hidden`,this.domElement=s,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ll.copy(t.matrixWorldInverse),Rl.multiplyMatrices(t.projectionMatrix,Ll),l(e,e,t),this.sortObjects&&f(e)},this.setSize=function(e,t){n=e,r=t,i=n/2,a=r/2,s.style.width=e+`px`,s.style.height=t+`px`};function c(e){e.isCSS2DObject&&(e.element.style.display=`none`);for(let t=0,n=e.children.length;t<n;t++)c(e.children[t])}function l(e,n,r){if(e.visible===!1)c(e);else{if(e.isCSS2DObject){Il.setFromMatrixPosition(e.matrixWorld),Il.applyMatrix4(Rl);let c=Il.z>=-1&&Il.z<=1&&e.layers.test(r.layers)===!0,l=e.element;if(l.style.display=c===!0?``:`none`,c===!0){e.onBeforeRender(t,n,r);let o=100*e.center.x,c=100*e.center.y;l.style.transformOrigin=`${o}% ${c}%`;let u=-e.rotation2D,d=Il.x*i+i,f=-Il.y*a+a;l.style.transform=`translate(${-o}%, ${-c}%) translate(${d}px, ${f}px) rotate(${u}rad)`,l.parentNode!==s&&s.appendChild(l),e.onAfterRender(t,n,r)}let d={distanceToCameraSquared:u(r,e)};o.objects.set(e,d)}for(let t=0,i=e.children.length;t<i;t++)l(e.children[t],n,r)}}function u(e,t){return zl.setFromMatrixPosition(e.matrixWorld),Bl.setFromMatrixPosition(t.matrixWorld),zl.distanceToSquared(Bl)}function d(e){let t=[];return e.traverseVisible(function(e){e.isCSS2DObject&&t.push(e)}),t}function f(e){let t=d(e).sort(function(e,t){return e.renderOrder===t.renderOrder?o.objects.get(e).distanceToCameraSquared-o.objects.get(t).distanceToCameraSquared:t.renderOrder-e.renderOrder}),n=t.length;for(let e=0,r=t.length;e<r;e++)t[e].element.style.zIndex=n-e}}},Hl={vanguard:{name:`Warrior`,line:`Knight · Paladin · Fighter`,role:`Melee tank / bruiser`,resource:`MP`,resourceColor:`#3f7fe0`,base:{str:10,int:2}},arcanist:{name:`Mage`,line:`Sword Mage · Warlock · Necromancer`,role:`Magic DPS / control; fights up close between spells`,resource:`MP`,resourceColor:`#3f7fe0`,base:{str:3,int:9}},oracle:{name:`Acolyte`,line:`Sage · Monk · Bishop`,role:`Healer / support`,resource:`MP`,resourceColor:`#3f7fe0`,base:{str:5,int:7}}},Ul={vanguard:{range:1.7,every:1.1},arcanist:{range:1.7,every:1.3},oracle:{range:1.7,every:1.2}},Wl=e=>Ul[e.occ].range,Gl=Object.keys(Hl);function Kl(e){let t=String(e??``).replace(/[^\p{L}\p{N} _-]/gu,``).trim().slice(0,16);return t.length>=2?t:null}var U=(e,t,n,r,i,a={})=>({id:t,name:n,type:r,lv:e,max:r===`capstone`?1:3,desc:i,...a}),ql=e=>U(e,`arcane_mind`,`Arcane Mind`,`passive`,[`+10% max MP, +20% MP recovery`,`+20% max MP, +40% MP recovery`,`+30% max MP, +60% MP recovery`],{live:!0}),Jl={vanguard:[U(1,`cleave`,`Cleave`,`active`,[`180° sweep, 110% damage`,`130% damage`,`150% damage`],{live:!0,use:{cost:10,cd:5,reach:1,arc:180,pct:[110,130,150]}}),U(3,`vigor`,`Vigor`,`passive`,[`Recover 0.1% of max HP a second, even in a fight; +25% out of one`,`0.2% a second; +50%`,`0.3% a second; +75%`],{live:!0,regen:{fight:[.1,.2,.3],calm:[25,50,75]}}),U(6,`war_aura`,`War Aura`,`aura`,[`You and allies within 6 tiles deal +5% damage`,`+10%`,`+15%`],{live:!0,aura:{radius:6,dmg:[5,10,15]}}),U(9,`battle_cry`,`Battle Cry`,`active`,[`Taunt 5 tiles, allies +10% damage`,`Allies +15%`,`Allies +20%`],{live:!0,use:{cost:15,cd:25,radius:5,taunt:3,allyRadius:8,buff:[10,15,20],buffS:10}}),U(12,`charge`,`Charge`,`active`,[`Dash 6 tiles, root 1 s`,`7 tiles, 12 s cooldown`,`8 tiles, 10 s cooldown`],{live:!0,use:{cost:8,cd:[14,12,10],range:[6,7,8],root:1,speed:14}})],arcanist:[U(1,`firebolt`,`Firebolt`,`active`,[`120% spell damage, range 7`,`140%`,`160%`],{live:!0,use:{cost:8,cd:0,range:7,pct:[120,140,160],speed:14}}),ql(1),U(3,`mana_shield`,`Mana Shield`,`active`,[`8 s on yourself: 30% of damage taken drains MP instead`,`40%`,`50%`],{live:!0,use:{cost:10,cd:20,dur:8,pct:[30,40,50]}}),U(6,`blink`,`Blink`,`active`,[`Teleport 5 tiles, 7.5 s cooldown`,`6 s`,`4.5 s`],{live:!0,use:{cost:10,cd:[7.5,6,4.5],range:5}}),U(9,`frost_nova`,`Frost Nova`,`active`,[`Freeze within 2.5 tiles for 2 s`,`2.5 s`,`3 s`],{live:!0,use:{cost:20,cd:18,radius:2.5,freeze:[2,2.5,3]}}),U(12,`arc_chain`,`Arc Chain`,`active`,[`Jumps to 3 targets, -20% per jump`,`4 targets`,`5 targets`],{live:!0,use:{cost:18,cd:6,range:7,jumps:[3,4,5],hop:3.5,falloff:.2}}),U(14,`cataclysm`,`Cataclysm`,`capstone`,[`2 s channel, then a meteor at the cursor: 400% in 3 tiles`],{live:!0,use:{cost:60,cd:60,range:8,radius:3,pct:400,channel:2}})],oracle:[U(1,`smite`,`Smite`,`active`,[`100% holy damage, ×1.5 vs undead`,`120%`,`140%`],{live:!0,use:{cost:8,cd:0,range:6,pct:[100,120,140]}}),U(1,`mend`,`Mend`,`active`,[`Heal yourself or an ally 30 + INT×2`,`Heal 40 + INT×2`,`Heal 50 + INT×2`],{live:!0,use:{cost:10,cd:4,range:6,heal:[30,40,50],int:2}}),ql(3),U(6,`ward`,`Holy Shield`,`active`,[`Bless yourself or an ally: +15 + INT×0.5 DEF for 12 s`,`+25 + INT×0.5 DEF`,`+35 + INT×0.5 DEF`],{live:!0,use:{cost:15,cd:15,range:6,def:[15,25,35],int:.5,dur:12}}),U(12,`holy_words`,`Holy Words`,`active`,[`Chant 3 s: every 0.5 s, 50% holy damage to all within 7 tiles (×1.5 vs undead). A hit only pauses it 0.2 s`,`65% a word`,`80% a word`],{live:!0,use:{cost:30,cd:14,radius:7,dur:3,every:.5,pause:.2,pct:[50,65,80]}})]},Yl={knight:{occ:`vanguard`,name:`Knight`,role:`Lance and mount fighter; the dragon line later`,growth:{str:8,int:2},skills:[U(15,`mount`,`Mount / Dismount`,`active`,[`Next to a wild horse: tame it. After that: ride it or get off. A horse carries you faster and hits harder: +10% damage (brown) to +30% (Takoyaki)`],{max:1,live:!0,use:{cost:0,cd:1.5,range:2.5}}),U(18,`skewer_charge`,`Skewer Charge`,`upgrade`,[`Charge hits everyone on its path for 60%`,`80%`,`100%`],{upgrades:`charge`,live:!0,hit:[60,80,100]}),U(21,`valor_aura`,`Aura of Valor`,`aura`,[`You and allies within 6 tiles +10 DEF`,`+15 DEF`,`+20 DEF`],{live:!0,aura:{radius:6,def:[10,15,20]}}),U(23,`wyrm_lance`,`Wyrm Lance`,`capstone`,[`On horseback: dash at an enemy for 600% and stun it 1.5 s; 150% to all in the way`],{live:!0,use:{cost:20,cd:15,range:10,pct:600,path:150,stun:1.5,speed:20}})]},paladin:{locked:!0,occ:`vanguard`,name:`Paladin`,role:`Holy tank: shields, auras, healing hands`,growth:{str:6,int:4},skills:[U(15,`holy_strike`,`Holy Strike`,`active`,[`120% holy damage, heal 30% of it`,`140%`,`160%`]),U(17,`shield_wall`,`Shield Wall`,`active`,[`-40% damage taken for 4 s`,`-50%`,`-60%`]),U(19,`guardians_bash`,`Guardian's Bash`,`upgrade`,[`Shield Bash stuns and taunts enemies beside the target`,`Wider splash`,`Longer taunt`]),U(21,`aura_of_devotion`,`Aura of Devotion`,`aura`,[`Allies within 5 tiles +4 DEF`,`+8 DEF`,`+12 DEF`]),U(23,`sacred_chant`,`Sacred Chant`,`capstone`,[`Chant for 1.5 s, then holy light strikes every enemy in sight for 250% (×1.5 vs undead)`],{live:!0,use:{cost:25,cd:45,channel:1.5,radius:9,pct:250}})]},fighter:{locked:!0,occ:`vanguard`,name:`Fighter`,role:`All-out melee damage`,growth:{str:9,int:1},swing:.9,skills:[U(15,`whirlwind`,`Whirlwind`,`active`,[`Spin for 2 s, 70% per hit around you`,`85%`,`100%`]),U(17,`bloodlust`,`Bloodlust`,`passive`,[`Heal 2% of damage dealt`,`4%`,`6%`]),U(19,`rending_cleave`,`Rending Cleave`,`upgrade`,[`Cleave bleeds 30% over 4 s`,`45%`,`60%`],{upgrades:`cleave`}),U(21,`last_stand`,`Last Stand`,`passive`,[`Below 50% HP: +10% damage`,`+20%`,`+30%`]),U(23,`rampage`,`Rampage`,`capstone`,[`Rush through up to 6 enemies within 6 tiles, 220% each`],{live:!0,use:{cost:22,cd:30,radius:6,hits:6,pct:220,hop:.16}})]},sword_mage:{locked:!0,occ:`arcanist`,name:`Sword Mage`,role:`Spells through a blade, at melee range`,growth:{str:5,int:5},power:{str:.8,int:.8},skills:[U(15,`spellstrike`,`Spellstrike`,`passive`,[`Edge sweeps add 10% of INT as fire`,`20%`,`30%`],{live:!0}),U(17,`frost_edge`,`Frost Edge`,`upgrade`,[`After Frost Nova, your hits slow 30% for 8 s`,`Lasts 10 s`,`Slow 40%`],{upgrades:`frost_nova`,live:!0}),U(19,`runic_parry`,`Runic Parry`,`passive`,[`5% chance to parry melee, +5 MP`,`10%`,`15%`],{live:!0}),U(21,`edge_of_the_shard`,`Edge of the Shard`,`active`,[`10 s: Firebolt and Arc Chain become melee sweeps, +40% damage`],{max:1,live:!0,use:{cost:30,cd:60,dur:10,bonus:40,reach:2.4}}),U(23,`sword_dance`,`Sword Dance`,`capstone`,[`Spectral blades strike every enemy in sight: 3 waves of 130% (Spellstrike adds to each)`],{live:!0,use:{cost:45,cd:40,radius:9,waves:3,every:.55,rise:.7,pct:130}})]},warlock:{locked:!0,occ:`arcanist`,name:`Warlock`,role:`Curses and runes`,growth:{str:1,int:9},skills:[U(15,`snare_rune`,`Snare Rune`,`active`,[`Rune at the cursor roots the first enemy for 2 s`,`2.5 s`,`3 s`],{live:!0,use:{cost:15,cd:4,range:6,r:.9,root:[2,2.5,3],life:30,max:3}}),U(17,`withering_curse`,`Withering Curse`,`active`,[`150% damage over 8 s`,`200%`,`250%`]),U(19,`glyph_field`,`Glyph Field`,`active`,[`3-tile zone at the cursor slows 30% for 6 s`,`40%`,`50%`],{live:!0,use:{cost:25,cd:14,range:7,radius:3,slow:[30,40,50],dur:6}}),U(21,`script_of_binding`,`Script of Binding`,`active`,[`Three runes at the cursor root everything inside for 3 s`],{max:1,live:!0,use:{cost:40,cd:45,range:7,radius:2.5,root:3}}),U(23,`meteor_storm`,`Meteor Storm`,`capstone`,[`14 meteors rain on the cursor area over 3 s (160% each), then a great one in the middle (300%)`],{live:!0,use:{cost:70,cd:60,range:9,radius:4.5,count:14,dur:3,lead:.7,r:1.6,pct:160,finale:300}})]},necromancer:{occ:`arcanist`,name:`Necromancer`,role:`The dead fight for you`,growth:{str:2,int:8},skills:[U(15,`raise_bonewalker`,`Raise Bonewalker`,`active`,[`Raise a skeleton to fight for you for 30 s (up to 5 at once)`,`Raise 2 at a time`,`Raise 3 at a time`],{live:!0,use:{cost:30,cd:3,life:30,count:[1,2,3],max:5,pct:[60,65,70]}}),U(17,`bone_armor`,`Bone Armor`,`active`,[`Bones close over you: +20 + INT×0.5 DEF for 15 s`,`+30 + INT×0.5 DEF`,`+40 + INT×0.5 DEF`],{live:!0,use:{cost:20,cd:20,def:[20,30,40],int:.5,dur:15}}),U(19,`grave_chill`,`Grave Chill`,`aura`,[`Enemies within 3 tiles slowed 15%`,`20%`,`25%`],{live:!0,aura:{radius:3,slow:[15,20,25]}}),U(23,`bone_dragon`,`Bone Dragon`,`capstone`,[`Raise a great skeleton dragon for 25 s: its breath burns everything in front of it for 90%`],{live:!0,use:{cost:60,cd:37.5,life:25,pct:90}})]},sage:{occ:`oracle`,name:`Sage`,role:`The strongest healer`,growth:{str:2,int:8},skills:[U(15,`gentle_hands`,`Gentle Hands`,`aura`,[`You and allies within 6 tiles: 0.06% of max HP back a second even in a fight, HP and MP recovery +25%`,`0.12% a second, +50%`,`0.2% a second, +75%`],{live:!0,aura:{radius:6,fight:[.06,.12,.2],regen:[25,50,75]}}),U(17,`radiant_mend`,`Radiant Mend`,`upgrade`,[`Mend also heals everyone within 3 tiles of its target for 50%`,`70%`,`90%`],{upgrades:`mend`,live:!0,radius:3,pct:[50,70,90]}),U(19,`grace_aura`,`Aura of Grace`,`aura`,[`You and allies within 6 tiles +8 DEF`,`+12 DEF`,`+16 DEF`],{live:!0,aura:{radius:6,def:[8,12,16]}}),U(23,`litany_of_dawn`,`Litany of Dawn`,`upgrade`,[`Holy Words strikes 50% harder, and you can walk while you chant (at 40% speed)`],{max:1,capstone:!0,upgrades:`holy_words`,live:!0,bonus:50,walk:.4})]},monk:{locked:!0,occ:`oracle`,name:`Monk`,role:`Holy fists, in melee`,growth:{str:7,int:3},power:{str:.8,int:.4},swing:.9,skills:[U(15,`righteous_blows`,`Righteous Blows`,`passive`,[`Attacks restore 3 MP, +5% damage`,`+10%`,`+15%`]),U(17,`palm_strike`,`Palm Strike`,`active`,[`130% damage, knock back 2 tiles`,`150%`,`170%`]),U(19,`inner_calm`,`Inner Calm`,`passive`,[`5% chance to dodge`,`10%`,`15%`]),U(21,`flurry`,`Flurry`,`active`,[`Five quick hits, 50% each`,`60% each`,`70% each`]),U(23,`pyre_of_zeal`,`Pyre of Zeal`,`capstone`,[`Spend all MP in a holy nova`])]},bishop:{locked:!0,occ:`oracle`,name:`Bishop`,role:`Protection and hymns for the party`,growth:{str:4,int:6},skills:[U(15,`hymn_of_iron`,`Hymn of Iron`,`aura`,[`Allies within 5 tiles +4 DEF`,`+8 DEF`,`+12 DEF`]),U(17,`bastion_ward`,`Bastion Ward`,`upgrade`,[`Holy Shield also lands on 2 allies at 60%`,`3 allies`,`3 allies, longer`],{upgrades:`ward`}),U(19,`judgement`,`Judgement`,`upgrade`,[`Smite splashes 2 tiles for 50%`,`65%`,`80%`],{upgrades:`smite`}),U(21,`hymn_of_haste`,`Hymn of Haste`,`aura`,[`Allies +3% attack and move speed`,`+6%`,`+9%`]),U(23,`gatekeepers_oath`,`Gatekeeper's Oath`,`capstone`,[`8 s dome: allies inside take 40% less damage`])]}},Xl=e=>Object.entries(Yl).filter(([,t])=>t.occ===e).map(([e,t])=>({id:e,...t})),Zl=e=>Yl[e]?.name??``,Ql=e=>e.type===`active`||e.type===`capstone`,$l={};for(let[e,t]of Object.entries(Jl)){$l[e]={};for(let n of t)$l[e][n.id]={...n,job:null}}for(let[e,t]of Object.entries(Yl))for(let n of t.skills)$l[t.occ][n.id]={...n,job:e};var eu=(e,t)=>$l[e]?.[t],tu=e=>Object.values($l[e]??{}),nu=(e,t)=>(e?.get?e.get(t):e?.[t])??0,ru=(e,t)=>Array.isArray(e)?e[Math.max(0,t-1)]:e,iu=[.25,.5,1];function au(e,t){let n=e.max===1?e.type===`capstone`||e.capstone?1.5:.5:iu[t-1]??1;return Math.round(Ku(e.lv)*n)}var ou=999999999,su=e=>Jl[e].filter(e=>e.lv===1).map(e=>e.id);function cu(e,t){let n=eu(e.occ,t);if(!n)return`Unknown skill`;let r=nu(e.skills,t);if(r>=n.max)return`Already at max rank`;if(n.job&&e.job!==n.job)return`${Yl[n.job].name} skill: change class at the Oathkeeper (Lv 15)`;if(e.level<n.lv)return`Needs Lv ${n.lv}`;if(n.upgrades&&nu(e.skills,n.upgrades)<1)return`Needs ${eu(e.occ,n.upgrades).name} first`;let i=au(n,r+1);return e.wisdom<i?`Needs ${i} Wisdom`:null}function lu(e,t){let n=Yl[t];return!n||n.occ!==e.occ?`That class is not open to you`:e.job?`You are already a ${Yl[e.job].name}`:n.locked?`The ${n.name}'s road isn't open yet`:e.level<15?`Come back at Lv 15`:null}var uu=(e,t)=>tu(e.occ).filter(n=>n.lv===t&&(!n.job||n.job===e.job));function du(e,t){let n=e=>nu(t,e),r={};if(e===`vanguard`&&n(`vigor`)){let t=eu(e,`vigor`).regen;r.hpRegen=ru(t.fight,n(`vigor`)),r.regenPct=ru(t.calm,n(`vigor`))}return(e===`arcanist`||e===`oracle`)&&n(`arcane_mind`)&&(r.resPct=10*n(`arcane_mind`),r.resRegenPct=20*n(`arcane_mind`)),r}var fu=[`main`,`off`,`head`,`armor`,`boots`,`neck`,`ring1`,`ring2`],pu={main:`Main hand`,off:`Off hand`,head:`Head`,armor:`Armor`,boots:`Boots`,neck:`Necklace`,ring1:`Ring`,ring2:`Ring`},mu={vanguard:[`rusty_shortsword`,`padded_jerkin`,`worn_boots`],arcanist:[`apprentice_wand`,`linen_robe`,`soft_slippers`],oracle:[`oak_mace`,`novice_vestment`,`pilgrim_sandals`]},W=(e,t,n,r,i,a={})=>({name:e,slot:t,lv:n,for:r,stats:i,...a}),G={rusty_shortsword:W(`Rusty Shortsword`,`main`,1,`vanguard`,{str:2},{atk:3}),ironbound_blade:W(`Ironbound Blade`,`main`,5,`vanguard`,{str:4},{atk:6}),boarbreaker_axe:W(`Boarbreaker Axe`,`main`,10,`vanguard`,{str:7},{atk:10}),militia_sword:W(`Militia Sword`,`main`,3,`vanguard`,{str:3},{atk:5}),arming_sword:W(`Arming Sword`,`main`,8,`vanguard`,{str:5},{atk:9}),emberedge_sword:W(`Emberedge Sword`,`main`,12,`vanguard`,{str:7},{atk:12,crit:3}),ashforged_blade:W(`Ashforged Blade`,`main`,18,`vanguard`,{str:10},{atk:17}),sunsteel_sword:W(`Sunsteel Sword`,`main`,22,`vanguard`,{str:13},{atk:21,crit:4}),iron_greatsword:W(`Iron Greatsword`,`main`,4,`vanguard`,{str:4},{atk:9,twoHand:!0}),claymore:W(`Claymore`,`main`,9,`vanguard`,{str:7},{atk:15,twoHand:!0}),boarbane_zweihander:W(`Boarbane Zweihander`,`main`,13,`vanguard`,{str:10},{atk:20,hp:30,twoHand:!0}),ashen_greatblade:W(`Ashen Greatblade`,`main`,18,`vanguard`,{str:14},{atk:27,crit:3,twoHand:!0}),dawnbreaker:W(`Dawnbreaker`,`main`,22,`vanguard`,{str:18},{atk:34,crit:5,twoHand:!0}),plank_buckler:W(`Plank Buckler`,`off`,1,`vanguard`,{str:1},{def:4}),iron_round_shield:W(`Iron Round Shield`,`off`,3,`vanguard`,{str:1},{def:6}),oaken_kite_shield:W(`Oaken Kite Shield`,`off`,6,`vanguard`,{str:2},{def:8}),tower_shield:W(`Tower Shield`,`off`,11,`vanguard`,{str:3},{def:14,hp:40}),emberward_shield:W(`Emberward Shield`,`off`,18,`vanguard`,{str:5},{def:20,hp:60}),leather_cap:W(`Leather Cap`,`head`,1,`vanguard`,{},{def:2}),iron_nasal_helm:W(`Iron Nasal Helm`,`head`,6,`vanguard`,{str:2},{def:4}),bascinet:W(`Bascinet`,`head`,11,`vanguard`,{str:3},{def:6,hp:20}),ashen_helm:W(`Ashen Helm`,`head`,18,`vanguard`,{str:5},{def:9,hp:35}),padded_jerkin:W(`Padded Jerkin`,`armor`,1,`vanguard`,{str:2},{def:3}),travelers_tunic:W(`Traveler's Tunic`,`armor`,3,`vanguard`,{str:3},{def:4}),ringmail_coat:W(`Ringmail Coat`,`armor`,6,`vanguard`,{str:4},{def:7}),scale_hauberk:W(`Scale Hauberk`,`armor`,10,`vanguard`,{str:6},{def:10,hp:25}),ashplate_cuirass:W(`Ashplate Cuirass`,`armor`,18,`vanguard`,{str:10},{def:16,hp:50}),worn_boots:W(`Worn Boots`,`boots`,1,`vanguard`,{str:1}),marching_greaves:W(`Marching Greaves`,`boots`,6,`vanguard`,{str:2},{def:3}),ironshod_boots:W(`Ironshod Boots`,`boots`,11,`vanguard`,{str:3},{def:4}),ashen_sabatons:W(`Ashen Sabatons`,`boots`,18,`vanguard`,{str:5},{def:6,hp:20}),apprentice_wand:W(`Apprentice Wand`,`main`,1,`arcanist`,{int:2},{atk:3}),ashwood_staff:W(`Ashwood Staff`,`main`,5,`arcanist`,{int:4},{atk:6}),emberglass_rod:W(`Emberglass Rod`,`main`,10,`arcanist`,{int:7},{atk:10}),willow_wand:W(`Willow Wand`,`main`,3,`arcanist`,{int:3},{atk:4,mp:10}),crystal_scepter:W(`Crystal Scepter`,`main`,8,`arcanist`,{int:6},{atk:8,mp:20}),frostglass_rod:W(`Frostglass Rod`,`main`,12,`arcanist`,{int:8},{atk:11,crit:2}),ashen_scepter:W(`Ashen Scepter`,`main`,18,`arcanist`,{int:12},{atk:15,mp:40}),gnarled_greatstaff:W(`Gnarled Greatstaff`,`main`,4,`arcanist`,{int:5},{atk:8,mp:15,twoHand:!0}),moonwood_greatstaff:W(`Moonwood Greatstaff`,`main`,9,`arcanist`,{int:9},{atk:13,mp:30,twoHand:!0}),stormcaller_staff:W(`Stormcaller Staff`,`main`,13,`arcanist`,{int:13},{atk:18,crit:3,twoHand:!0}),archmage_staff:W(`Archmage Staff`,`main`,18,`arcanist`,{int:18},{atk:25,mp:60,twoHand:!0}),ruinweaver_staff:W(`Ruinweaver Staff`,`main`,22,`arcanist`,{int:23},{atk:31,crit:5,twoHand:!0}),cracked_tome:W(`Cracked Tome`,`off`,1,`arcanist`,{int:2}),runed_grimoire:W(`Runed Grimoire`,`off`,6,`arcanist`,{int:5}),astral_codex:W(`Astral Codex`,`off`,12,`arcanist`,{int:7},{mp:30}),pointed_hat:W(`Pointed Hat`,`head`,1,`arcanist`,{int:1}),stargazer_cowl:W(`Stargazer's Cowl`,`head`,6,`arcanist`,{int:4}),sorcerers_hat:W(`Sorcerer's Hat`,`head`,11,`arcanist`,{int:5},{mp:15}),ember_hat:W(`Ember Hat`,`head`,18,`arcanist`,{int:8},{mp:30,crit:2}),linen_robe:W(`Linen Robe`,`armor`,1,`arcanist`,{int:2},{def:1}),apprentice_robe:W(`Apprentice's Robe`,`armor`,3,`arcanist`,{int:3},{def:2,mp:10}),starweave_robe:W(`Starweave Robe`,`armor`,6,`arcanist`,{int:5},{def:3}),twilight_robe:W(`Twilight Robe`,`armor`,10,`arcanist`,{int:7},{def:4,mp:25}),emberweave_robe:W(`Emberweave Robe`,`armor`,18,`arcanist`,{int:11},{def:6,mp:50}),soft_slippers:W(`Soft Slippers`,`boots`,1,`arcanist`,{str:1}),windstep_shoes:W(`Windstep Shoes`,`boots`,6,`arcanist`,{str:3}),silkstep_slippers:W(`Silkstep Slippers`,`boots`,11,`arcanist`,{str:2,int:2}),cinderwalk_shoes:W(`Cinderwalk Shoes`,`boots`,18,`arcanist`,{str:3,int:4},{mp:20}),oak_mace:W(`Oak Mace`,`main`,1,`oracle`,{int:2},{atk:3}),blessed_hammer:W(`Blessed Hammer`,`main`,5,`oracle`,{int:4},{atk:6}),dawnbell_flail:W(`Dawnbell Flail`,`main`,10,`oracle`,{str:1,int:6},{atk:10}),chapel_scepter:W(`Chapel Scepter`,`main`,8,`oracle`,{int:5},{atk:8,hp:15}),hallowed_rod:W(`Hallowed Rod`,`main`,18,`oracle`,{int:11},{atk:15,hp:40}),pilgrim_staff:W(`Pilgrim's Staff`,`main`,4,`oracle`,{str:1,int:4},{atk:8,hp:20,twoHand:!0}),sunwood_greatstaff:W(`Sunwood Greatstaff`,`main`,10,`oracle`,{int:9},{atk:14,mp:25,twoHand:!0}),seraph_staff:W(`Seraph Staff`,`main`,18,`oracle`,{int:15},{atk:22,hp:50,twoHand:!0}),wooden_icon:W(`Wooden Icon`,`off`,1,`oracle`,{str:1,int:1}),sunlit_aegis:W(`Sunlit Aegis`,`off`,6,`oracle`,{int:2},{def:5}),dawnward_aegis:W(`Dawnward Aegis`,`off`,12,`oracle`,{int:4},{def:10,hp:25}),linen_hood:W(`Linen Hood`,`head`,1,`oracle`,{int:1}),halo_circlet:W(`Halo Circlet`,`head`,6,`oracle`,{int:3}),sun_mitre:W(`Sun Mitre`,`head`,11,`oracle`,{int:4},{def:3,hp:15}),seraph_circlet:W(`Seraph Circlet`,`head`,18,`oracle`,{int:7},{def:4,mp:25}),novice_vestment:W(`Novice Vestment`,`armor`,1,`oracle`,{str:1,int:1},{def:2}),pilgrim_cassock:W(`Pilgrim's Cassock`,`armor`,3,`oracle`,{str:1,int:2},{def:3}),chainlinked_habit:W(`Chainlinked Habit`,`armor`,6,`oracle`,{str:3,int:2},{def:5}),sunlit_vestment:W(`Sunlit Vestment`,`armor`,10,`oracle`,{str:2,int:6},{def:7,hp:20}),seraph_raiment:W(`Seraph Raiment`,`armor`,18,`oracle`,{str:4,int:9},{def:11,hp:45}),pilgrim_sandals:W(`Pilgrim Sandals`,`boots`,1,`oracle`,{str:1}),pilgrim_boots:W(`Pilgrim Boots`,`boots`,6,`oracle`,{str:3}),temple_sandals:W(`Temple Sandals`,`boots`,11,`oracle`,{str:2,int:2},{hp:10}),wyrmguard_lance:W(`Wyrmguard Lance`,`main`,15,`knight`,{str:10},{atk:14}),oathbound_warhammer:W(`Oathbound Warhammer`,`main`,15,`paladin`,{str:6,int:4},{atk:13}),twinfang_cleaver:W(`Twinfang Cleaver`,`main`,15,`fighter`,{str:11},{atk:16}),spellsteel_saber:W(`Spellsteel Saber`,`main`,15,`sword_mage`,{str:3,int:7},{atk:14}),hexbone_wand:W(`Hexbone Wand`,`main`,15,`warlock`,{str:2,int:9},{atk:14}),ossuary_staff:W(`Ossuary Staff`,`main`,15,`necromancer`,{str:3,int:8},{atk:14}),lumen_staff:W(`Lumen Staff`,`main`,15,`sage`,{int:11},{atk:13}),pilgrim_knuckles:W(`Pilgrim Knuckles`,`main`,15,`monk`,{str:3,int:7},{atk:15}),crozier_of_walls:W(`Crozier of Walls`,`main`,15,`bishop`,{str:4,int:7},{atk:12,def:4}),wyrmguard_greathelm:W(`Wyrmguard Greathelm`,`head`,15,`knight`,{str:4},{def:8}),wyrmguard_harness:W(`Wyrmguard Harness`,`armor`,15,`knight`,{str:10},{def:14}),wyrmguard_sabatons:W(`Wyrmguard Sabatons`,`boots`,15,`knight`,{str:3},{def:5}),gravecaller_hood:W(`Gravecaller's Hood`,`head`,15,`necromancer`,{int:6},{def:3}),gravecaller_robes:W(`Gravecaller's Robes`,`armor`,15,`necromancer`,{str:3,int:6},{def:6}),gravewalker_wraps:W(`Gravewalker Wraps`,`boots`,15,`necromancer`,{str:3,int:2},{def:2}),kings_crown:W(`The King's Lost Crown`,`head`,20,null,{str:20,int:20},{unique:!0}),glass_bead_necklace:W(`Glass Bead Necklace`,`neck`,1,null,{int:1}),tusk_necklace:W(`Tusk Necklace`,`neck`,3,null,{str:3}),moonstone_pendant:W(`Moonstone Pendant`,`neck`,6,null,{int:4}),wardenheart_amulet:W(`Wardenheart Amulet`,`neck`,8,null,{str:4},{def:4}),copper_locket:W(`Copper Locket`,`neck`,2,null,{},{hp:15}),mana_drop_pendant:W(`Mana-drop Pendant`,`neck`,4,null,{},{mp:30}),hunters_fang:W(`Hunter's Fang`,`neck`,7,null,{str:2},{crit:2}),sages_medallion:W(`Sage's Medallion`,`neck`,10,null,{int:5},{mp:35}),vitality_charm:W(`Vitality Charm`,`neck`,12,null,{str:3},{hp:50,def:2}),ashen_heart:W(`Ashen Heart`,`neck`,18,null,{str:5,int:5},{hp:60,crit:2}),starfall_amulet:W(`Starfall Amulet`,`neck`,22,null,{str:6,int:6},{mp:60,crit:4}),mossy_ring:W(`Mossy Ring`,`ring`,1,null,{str:1}),copper_band:W(`Copper Band`,`ring`,2,null,{str:2}),iron_ring:W(`Iron Ring`,`ring`,3,null,{},{def:3}),boar_tusk_ring:W(`Boar-tusk Ring`,`ring`,4,null,{str:4}),garnet_ring:W(`Garnet Ring`,`ring`,5,null,{},{hp:40}),sapphire_loop:W(`Sapphire Loop`,`ring`,6,null,{str:2,int:4}),opal_ring:W(`Opal Ring`,`ring`,7,null,{},{mp:50}),eagle_eye_ring:W(`Eagle-eye Ring`,`ring`,9,null,{},{crit:4}),bloodstone_ring:W(`Bloodstone Ring`,`ring`,12,null,{str:5},{hp:40}),arcane_signet:W(`Arcane Signet`,`ring`,12,null,{int:5},{mp:40}),emberheart_ring:W(`Emberheart Ring`,`ring`,18,null,{str:5},{atk:4,crit:2}),frostmoon_ring:W(`Frostmoon Ring`,`ring`,18,null,{int:7},{mp:40,def:2})};for(let[e,[t,n,r]]of Object.entries({rusty_shortsword:[`sword`,9071178],ironbound_blade:[`sword`,13160668],boarbreaker_axe:[`axe`,13138490],plank_buckler:[`buckler`,9071178],oaken_kite_shield:[`kite`,9071178,10169131],leather_cap:[`cap`,8016434],iron_nasal_helm:[`helm`,10134704],padded_jerkin:[`jerkin`,8018490],ringmail_coat:[`plate`,9082536,10169131],worn_boots:[`boots`,4862496],marching_greaves:[`greaves`,9081502],apprentice_wand:[`wand`,10128576],ashwood_staff:[`staff`,10149738],emberglass_rod:[`rod`,16742938],cracked_tome:[`tome`,7031354],runed_grimoire:[`grimoire`,3811946],pointed_hat:[`hat`,2760540],stargazer_cowl:[`cowl`,1981034],linen_robe:[`robe`,5923445,13153418],starweave_robe:[`starweave`,3878266,9403368],soft_slippers:[`slippers`,4864602],windstep_shoes:[`boots`,4885146],oak_mace:[`mace`,8018490],blessed_hammer:[`hammer`,15786144],dawnbell_flail:[`flail`,16765024],wooden_icon:[`icon`,8018490],sunlit_aegis:[`aegis`,13938487],linen_hood:[`hood`,14209216],halo_circlet:[`circlet`,16769162],novice_vestment:[`vestment`,13616037,9071168],chainlinked_habit:[`habit`,10528944,15262416],pilgrim_sandals:[`sandals`,9071178],pilgrim_boots:[`boots`,5917242],wyrmguard_lance:[`lance`,2775720],oathbound_warhammer:[`warhammer`,15782e3],twinfang_cleaver:[`cleaver`,13650490],spellsteel_saber:[`saber`,10128127],hexbone_wand:[`wand`,9109354],ossuary_staff:[`bonestaff`,9109440],lumen_staff:[`lumen`,16773296],pilgrim_knuckles:[`knuckles`,14721104],crozier_of_walls:[`crozier`,9095423],wyrmguard_greathelm:[`greathelm`,12634324,2771594],wyrmguard_harness:[`knightplate`,12634324,2771594],wyrmguard_sabatons:[`sabatons`,12634324],kings_crown:[`crown`,15910212,9050666],gravecaller_hood:[`gravehood`,2038564],gravecaller_robes:[`graverobe`,2038564,5003836],gravewalker_wraps:[`wraps`,2761776],glass_bead_necklace:[`pendant`,9097471],tusk_necklace:[`pendant`,15260864],moonstone_pendant:[`pendant`,13162751],wardenheart_amulet:[`pendant`,8050943],mossy_ring:[null,6986308],copper_band:[null,13138490],boar_tusk_ring:[null,15260864],sapphire_loop:[null,3828456],militia_sword:[`sword`,10528944],arming_sword:[`sword`,14212582],emberedge_sword:[`sword`,16742970],ashforged_blade:[`sword`,5921380],sunsteel_sword:[`sword`,16769162],iron_greatsword:[`greatsword`,11055292,4862752],claymore:[`greatsword`,13686496,2771594],boarbane_zweihander:[`greatsword`,13148272,6961690],ashen_greatblade:[`greatsword`,4868690,14173483],dawnbreaker:[`greatsword`,16773296,13938487],iron_round_shield:[`buckler`,9081502],tower_shield:[`kite`,6975352,2771594],emberward_shield:[`kite`,3813424,14173483],bascinet:[`helm`,11581636],ashen_helm:[`helm`,4868690],travelers_tunic:[`jerkin`,5925514],scale_hauberk:[`plate`,6978154,5925434],ashplate_cuirass:[`plate`,4868690,14173483],ironshod_boots:[`greaves`,6975352],ashen_sabatons:[`sabatons`,4868690],willow_wand:[`wand`,9097471],crystal_scepter:[`rod`,9071856],frostglass_rod:[`rod`,10481919],ashen_scepter:[`rod`,13650554],gnarled_greatstaff:[`greatstaff`,10149738,5913375],moonwood_greatstaff:[`greatstaff`,13162751,3816026],stormcaller_staff:[`greatstaff`,7000319,2764864],archmage_staff:[`greatstaff`,11963135,2760540],ruinweaver_staff:[`greatstaff`,16734762,2759708],astral_codex:[`grimoire`,1981034],sorcerers_hat:[`hat`,5906236],ember_hat:[`hat`,6953498],apprentice_robe:[`robe`,2775690,13153418],twilight_robe:[`starweave`,2760540,16751312],emberweave_robe:[`robe`,6953498,16742938],silkstep_slippers:[`slippers`,6961802],cinderwalk_shoes:[`boots`,5909034],chapel_scepter:[`rod`,16769162],hallowed_rod:[`rod`,16774880],pilgrim_staff:[`greatstaff`,15786144,8018490],sunwood_greatstaff:[`greatstaff`,16765024,15262416],seraph_staff:[`greatstaff`,16774880,13938487],dawnward_aegis:[`aegis`,15261888],sun_mitre:[`hood`,15786160],seraph_circlet:[`circlet`,16774880],pilgrim_cassock:[`vestment`,9075290,14205066],sunlit_vestment:[`habit`,15788240,13938487],seraph_raiment:[`vestment`,16774880,16765024],temple_sandals:[`sandals`,13938487],copper_locket:[`pendant`,13138490],mana_drop_pendant:[`pendant`,5933823],hunters_fang:[`pendant`,15260864],sages_medallion:[`pendant`,13938487],vitality_charm:[`pendant`,14696538],ashen_heart:[`pendant`,16734762],starfall_amulet:[`pendant`,12110079],iron_ring:[null,9081502],garnet_ring:[null,10496570],opal_ring:[null,14215408],eagle_eye_ring:[null,13938487],bloodstone_ring:[null,6953514],arcane_signet:[null,9071856],emberheart_ring:[null,16742938],frostmoon_ring:[null,10481919]}))Object.assign(G[e],{look:t,color:n,accent:r});var hu=e=>e?.color?`#`+e.color.toString(16).padStart(6,`0`):null,gu=e=>e.for?Hl[e.for]?.name??Yl[e.for]?.name:`Anyone`,_u={str:`STR`,int:`INT`},vu=e=>[...Object.entries(e.stats).map(([e,t])=>`${_u[e]} +${t}`),e.atk&&`ATK +${e.atk}`,e.def&&`DEF +${e.def}`,e.hp&&`HP +${e.hp}`,e.mp&&`MP +${e.mp}`,e.crit&&`Crit +${e.crit}%`].filter(Boolean).join(`, `),yu=e=>e.twoHand?`Two hands`:pu[e.slot===`ring`?`ring1`:e.slot],bu=e=>(e.stats.str??0)+(e.stats.int??0)+(e.atk??0)*1.2+(e.def??0)+(e.hp??0)/8+(e.mp??0)/8+(e.crit??0)*2;function xu(e){let t=G[e],n=bu(t);return Math.max(5,Math.round((n*6+10)*(1+t.lv/8)/5)*5)}var Su=e=>Math.max(1,Math.floor(xu(e)/4)),Cu=e=>!!G[e]&&!G[e].unique&&!Yl[G[e].for],wu=e=>fu.indexOf(e.slot===`ring`?`ring1`:e.slot),Tu=Object.keys(G).filter(Cu).sort((e,t)=>wu(G[e])-wu(G[t])||G[e].lv-G[t].lv);function Eu(e,t){let n=G[t];return n?n.for&&n.for!==e.occ&&n.for!==e.job?`Only for ${gu(n)}`:e.level<n.lv?`Needs Lv ${n.lv}`:null:`Unknown item`}function Du(e,t){let n=G[e];return n.slot===`ring`?t.get(`ring1`)?t.get(`ring2`)?`ring1`:`ring2`:`ring1`:n.slot}function Ou(e){let t={atk:0,def:0,hp:0,mp:0,crit:0};for(let n of fu){let r=G[e?.get?.(n)];if(r){for(let[e,n]of Object.entries(r.stats))t[e]=(t[e]??0)+n;for(let e of[`atk`,`def`,`hp`,`mp`,`crit`])t[e]+=r[e]??0}}return t}function ku(e,t){let n=G[e],r=G[t.get(`main`)];return n.twoHand&&t.get(`off`)?[`off`]:n.slot===`off`&&r?.twoHand?[`main`]:[]}var Au={mossling:[1,4],cragboar:[3,8],mosswarden:[60,90],ashhound:[18,30],crownless_king:[600,900]};function ju(e,t=Math.random){let[n,r]=Au[e]??[1,3];return n+Math.floor(t()*(r-n+1))}var Mu={mossling:.22,cragboar:.35,mosswarden:1,ashhound:.4,crownless_king:1},Nu=2,Pu=.3;function Fu(e,t){let n=t=>!t.for||t.for===e.occ||t.for===e.job,r=Math.min(t,12);return Object.entries(G).filter(([,e])=>n(e)&&e.lv<15&&e.lv<=r+3&&e.lv>=r-5).map(([e])=>e)}function Iu(e,t,n,r=Math.random){if(r()>=(Mu[t]??.2))return[];let i=Fu(n,e.level),a=[],o=e.loot?.rolls??(e.boss?Nu:1);for(let e=0;e<o&&i.length;e++)a.push(i[Math.floor(r()*i.length)]);let s=e.loot?.special,c=n.bag?.includes(s)||[...n.equip?.values?.()??[]].includes(s);if(s&&!c&&r()<(e.loot.specialChance??1)&&a.push(s),e.boss&&r()<(e.loot?.jobWeapon??Pu)){let e=n.job?[n.job]:Object.keys(Yl).filter(e=>Yl[e].occ===n.occ),t=e[Math.floor(r()*e.length)],i=Object.keys(G).filter(e=>G[e].for===t);i.length&&a.push(i[Math.floor(r()*i.length)])}return a}var Lu=[`str`,`int`],Ru={str:`Strength`,int:`Intellect`},zu={vanguard:{str:8,int:2},arcanist:{str:2,int:8},oracle:{str:3,int:7}},Bu=e=>Yl[e.job]?.growth??zu[e.occ];function Vu(e,t,n){let r=Zu(e);for(let i=2;i<=n;i++){let n=i>15&&Yl[t]?Yl[t].growth:zu[e];for(let[e,t]of Object.entries(n))r[e]+=t}return r}var Hu={vanguard:{str:1},arcanist:{int:1},oracle:{int:1}},Uu=e=>Yl[e.job]?.power??Hu[e.occ],Wu={vanguard:80,arcanist:20,oracle:30},Gu={vanguard:3,arcanist:.5,oracle:1.5},Ku=e=>e>=30?0:Math.round(30+20*e**1.6);function qu(e,t){let n=(8+6*e.level)*(e.aggro>0?1.15:1)*(e.expMul??1),r=t-e.level,i=r>2?Math.max(.1,1-.2*(r-2)):r<0?Math.min(1.5,1-.1*r):1;return Math.max(1,Math.round(n*i))}function Ju(e,t){let n=du(e.occ,t),r=Ou(e.equip),i=t=>e[t]+(n[t]??0)+(r[t]??0),a=Uu(e),o=Math.round((60+i(`str`)*6+(e.level-1)*8+r.hp)*(1+(n.hpPct??0)/100)),s=Math.round((Wu[e.occ]+i(`int`)*6+(e.level-1)*4+r.mp)*(1+(n.resPct??0)/100)),c=Math.round(Object.entries(a).reduce((e,[t,n])=>e+i(t)*n,0)),l=.55*c+3;return{hpMax:o,resMax:s,dmgMin:Math.round(l*1.2+2+r.atk),dmgMax:Math.round(l*1.8+2+r.atk),swingMul:Math.max(.7,1-.02*(e.level-1))*(Yl[e.job]?.swing??1),crit:Math.min(.3,.02+.01*e.level)+r.crit/100,def:Math.round(Gu[e.occ]*e.level)+(n.def??0)+r.def,regen:{fight:(n.hpRegen??0)/100,calm:1+(n.regenPct??0)/100,res:1+(n.resRegenPct??0)/100},main:Object.keys(a),mainValue:c,stats:Object.fromEntries(Lu.map(e=>[e,i(e)]))}}function Yu(e,t=Math.random){let n=t()<e.crit,r=Math.round(e.dmgMin+t()*(e.dmgMax-e.dmgMin));return{dmg:n?Math.round(r*1.5):r,crit:n}}var Xu=(e,t)=>Math.max(1,Math.round(e*100/(100+t))),Zu=e=>({...Hl[e].base}),Qu={x:28,z:28},$u={oathgate:{name:`Oathgate`,x0:0,z0:0,w:56,h:56},ashen:{name:`The Ashen Reach`,x0:72,z0:0,w:64,h:64}},ed=$u.ashen.x0,td=[{region:`oathgate`,x:4.5,z:4.5,to:{x:ed+58.5,z:58.5},label:`To the Ashen Reach`},{region:`ashen`,x:ed+60.5,z:60.5,to:{x:7,z:7},label:`To Oathgate`}],nd=.8,rd={x:ed+9,z:9,r:7},id={x:ed+49,z:49,r:12};function ad(e,t){for(let[n,r]of Object.entries($u))if(e>=r.x0&&e<r.x0+r.w&&t>=r.z0&&t<r.z0+r.h)return n;return`oathgate`}var od={GRASS:0,DIRT:1,STONE:2,TRIM:3,VOID:4,ASH:5,CHAR:6},sd=[14173483,9080728,5222632,12109016,9071856,16742938,16769162,7324282,15749230],cd={oathkeeper:{name:`Oathkeeper`,title:`Class change`,x:Qu.x+1.5,z:Qu.z+1.5},wiseman:{name:`Wise Man`,title:`Learn skills`,x:Qu.x-3.5,z:Qu.z+.5},merchant:{name:`Hilde`,title:`Weapons & armor`,x:Qu.x+3.5,z:Qu.z-1.5}},ld=2.2;function ud(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function dd(e=9){let t=ud(e),n=new Uint8Array(8704).fill(od.VOID),r=new Uint8Array(8704).fill(1),i=[],a=(e,t)=>t*136+e,o=(e,t)=>e>=0&&t>=0&&e<56&&t<56,s=Math.floor(Qu.x),c=Math.floor(Qu.z),l=(e,t)=>{o(e,t)&&(r[a(e,t)]=1)},u=(e,t)=>o(e,t)&&!r[a(e,t)];for(let e=0;e<56;e++)for(let t=0;t<56;t++){let i=Math.abs(t+.5-Qu.x),o=Math.abs(e+.5-Qu.z),c=Math.max(i,o),l=od.GRASS;(i<2||o<2)&&(l=od.DIRT),c<10&&(l=od.TRIM),c<9&&(l=od.STONE),Math.abs(t-e)<=1&&t>=4&&t<s-9&&(l=od.DIRT),n[a(t,e)]=l,r[a(t,e)]=0}for(let[e,t]of[[s-1,c-1],[s,c-1],[s-1,c],[s,c]])l(e,t);i.push({type:`plinth`,x:Qu.x,z:Qu.z});for(let e=0;e<9;e++){let t=e/9*Math.PI*2-Math.PI/2,n=Math.floor(Qu.x+Math.cos(t)*5.5),r=Math.floor(Qu.z+Math.sin(t)*5.5);l(n,r),i.push({type:`shard`,x:n+.5,z:r+.5,color:sd[e],k:e})}for(let e of Object.values(cd))l(Math.floor(e.x),Math.floor(e.z));for(let e of[-1,1])for(let n of[-1,1])for(let[r,a]of[[8,8],[8,4],[4,8]]){let o=Math.floor(Qu.x+e*r-+(e<0)),s=Math.floor(Qu.z+n*a-+(n<0));l(o,s),i.push({type:`pillar`,x:o+.5,z:s+.5,broken:t()<.35})}for(let[e,t]of[[-15,-15],[12,-15],[-15,12],[12,12]]){let n=s+e,r=c+t;for(let e=n;e<n+4;e++)for(let t=r;t<r+3;t++)l(e,t);i.push({type:`house`,x:n+2,z:r+3/2,w:4,d:3,roof:[8010282,3824250,5925434,6965866][i.length%4]})}l(s+2,c-9-3),i.push({type:`board`,x:s+2.5,z:c-9-2.5});for(let e=0;e<56;e++)for(let n=0;n<56;n++){let r=Math.min(n,e,55-n,55-e);(r===0||r===1&&t()<.6)&&(l(n,e),i.push({type:t()<.8?`tree`:`rock`,x:n+.5,z:e+.5,s:.8+t()*.5}))}let d=(e,t)=>{let n=Math.abs(e+.5-Qu.x),r=Math.abs(t+.5-Qu.z),i=Math.hypot(e+.5-td[0].x,t+.5-td[0].z)<4;return n>=3&&r>=3&&Math.max(n,r)>12&&Math.abs(e-t)>2&&!i};for(let e=0;e<220;e++){let e=2+Math.floor(t()*52),n=2+Math.floor(t()*52);if(!d(e,n)||!u(e,n))continue;let r=t(),a=!1;for(let t=-1;t<=1&&!a;t++)for(let r=-1;r<=1;r++)if(!u(e+t,n+r)){a=!0;break}a||(l(e,n),r<.6?i.push({type:`tree`,x:e+.5,z:n+.5,s:.8+t()*.5}):r<.88?i.push({type:`rock`,x:e+.5,z:n+.5,s:.6+t()*.6}):i.push({type:`crystal`,x:e+.5,z:n+.5,s:.7+t()*.5}))}return i.push({type:`portal`,x:td[0].x,z:td[0].z,color:10115839}),fd(ud(e+77),n,r,i,a),{w:136,h:64,ground:n,solid:r,props:i}}function fd(e,t,n,r,i){let a=$u.ashen,o=(e,t)=>i(a.x0+e,a.z0+t),s=(e,t)=>{n[o(e,t)]=1},c=(e,t)=>e>=0&&t>=0&&e<a.w&&t<a.h&&!n[o(e,t)],l=(e,t)=>Math.max(Math.abs(e+.5-(rd.x-a.x0)),Math.abs(t+.5-rd.z)),u=(e,t)=>Math.hypot(e+.5-(id.x-a.x0),t+.5-id.z);for(let e=0;e<a.h;e++)for(let r=0;r<a.w;r++){let i=od.ASH;u(r,e)<id.r&&(i=od.GRASS),Math.abs(r-e)<=1&&(i=od.DIRT),l(r,e)<rd.r&&(i=od.CHAR),t[o(r,e)]=i,n[o(r,e)]=0}for(let t=0;t<20;t++)for(let n=0;n<20;n++)Math.round(l(n,t))!==rd.r||Math.abs(n-t)<=2&&n>8||e()<.75&&(s(n,t),r.push({type:`spike`,x:a.x0+n+.5,z:a.z0+t+.5,s:.8+e()*.6}));for(let t=0;t<a.h;t++)for(let n=0;n<a.w;n++){let i=Math.min(n,t,a.w-1-n,a.h-1-t);(i===0||i===1&&e()<.6)&&(s(n,t),r.push({type:e()<.75?`deadtree`:`rock`,x:a.x0+n+.5,z:a.z0+t+.5,s:.8+e()*.5}))}let d={u:td[1].x-a.x0,v:td[1].z-a.z0};for(let t=0;t<260;t++){let t=2+Math.floor(e()*(a.w-4)),n=2+Math.floor(e()*(a.h-4));if(!c(t,n)||Math.abs(t-n)<=2||l(t,n)<=rd.r+1||Math.hypot(t-d.u,n-d.v)<5)continue;let i=!1;for(let e=-1;e<=1&&!i;e++)for(let r=-1;r<=1;r++)if(!c(t+e,n+r)){i=!0;break}if(i)continue;let o=u(t,n)<id.r,f=e();if(o&&f<.7)continue;s(t,n);let p=a.x0+t+.5,m=a.z0+n+.5,h=.7+e()*.6;o?r.push({type:`tree`,x:p,z:m,s:h}):f<.5?r.push({type:`deadtree`,x:p,z:m,s:h}):f<.85?r.push({type:`rock`,x:p,z:m,s:h}):r.push({type:`bones`,x:p,z:m,s:h})}r.push({type:`portal`,x:td[1].x,z:td[1].z,color:7000319})}var pd=dd();function md(e,t){return e<0||t<0||e>=136||t>=64||pd.solid[t*136+e]===1}function hd(e,t,n=.3){let r=Math.floor(e-n),i=Math.floor(e+n),a=Math.floor(t-n),o=Math.floor(t+n);for(let s=a;s<=o;s++)for(let a=r;a<=i;a++){if(!md(a,s))continue;let r=Math.max(a,Math.min(e,a+1)),i=Math.max(s,Math.min(t,s+1));if((r-e)**2+(i-t)**2<n*n)return!1}return!0}function gd(e=Math.random){for(let t=0;t<100;t++){let t=e()*Math.PI*2,n=2.2+e()*1.8,r=Qu.x+Math.cos(t)*n,i=Qu.z+Math.sin(t)*n;if(hd(r,i,.35))return{x:r,z:i}}return{x:Qu.x+3,z:Qu.z+.5}}var _d=4.2,vd=Math.SQRT2,yd=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,vd],[1,-1,vd],[-1,1,vd],[-1,-1,vd]];function bd(e,t,n=4){if(!md(e,t))return[e,t];for(let r=1;r<=n;r++)for(let n=-r;n<=r;n++)for(let i=-r;i<=r;i++)if(Math.max(Math.abs(n),Math.abs(i))===r&&!md(e+n,t+i))return[e+n,t+i];return null}function xd(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.max(1,Math.ceil(i/.2));for(let i=1;i<=a;i++){let o=i/a;if(!hd(e+(n-e)*o,t+(r-t)*o,.3))return!1}return!0}function Sd(e,t,n,r,i=6e3){let a=bd(Math.floor(n),Math.floor(r));if(!a)return[];let o=hd(n,r,.3)&&!md(Math.floor(n),Math.floor(r))?{x:n,z:r}:{x:a[0]+.5,z:a[1]+.5};if(xd(e,t,o.x,o.z))return[o];let s=[Math.floor(e),Math.floor(t)],c=(e,t)=>t*136+e,l=c(a[0],a[1]),u=new Map([[c(...s),0]]),d=new Map,f=[[0,s[0],s[1]]],p=(e,t)=>Math.hypot(e-a[0],t-a[1]),m=e=>{f.push(e);for(let e=f.length-1;e>0;){let t=e-1>>1;if(f[t][0]<=f[e][0])break;[f[t],f[e]]=[f[e],f[t]],e=t}},h=()=>{let e=f[0],t=f.pop();if(f.length){f[0]=t;for(let e=0;;){let t=2*e+1,n=t+1,r=e;if(t<f.length&&f[t][0]<f[r][0]&&(r=t),n<f.length&&f[n][0]<f[r][0]&&(r=n),r===e)break;[f[r],f[e]]=[f[e],f[r]],e=r}}return e},g=!1,_=0;for(;f.length&&_++<i;){let[,e,t]=h(),n=c(e,t);if(n===l){g=!0;break}let r=u.get(n);for(let[i,a,o]of yd){let s=e+i,l=t+a;if(s<0||l<0||s>=136||l>=64||md(s,l)||i&&a&&(md(e+i,t)||md(e,t+a)))continue;let f=c(s,l),h=r+o;h<(u.get(f)??1/0)&&(u.set(f,h),d.set(f,n),m([h+p(s,l),s,l]))}}if(!g)return[];let v=[];for(let e=l;e!==void 0;e=d.get(e))v.push({x:e%136+.5,z:Math.floor(e/136)+.5});v.reverse(),v[v.length-1]=o;let y=[],b={x:e,z:t},x=0;for(;x<v.length;){let e=v.length-1;for(;e>x&&!xd(b.x,b.z,v[e].x,v[e].z);)e--;y.push(v[e]),b=v[e],x=e+1}return y}function Cd(e,t){let n=(e.speed??4.2)*t;if(e.steer){let t=e.steer.x*n,r=e.steer.z*n,i=!1;hd(e.x+t,e.z,.3)&&(e.x+=t,i=!0),hd(e.x,e.z+r,.3)&&(e.z+=r,i=!0),e.dir=Math.atan2(e.steer.x,e.steer.z),e.moving=i;return}let r=n;for(;r>0&&e.path.length;){let t=e.path[0],n=t.x-e.x,i=t.z-e.z,a=Math.hypot(n,i);a>1e-4&&(e.dir=Math.atan2(n,i)),a<=r?(e.x=t.x,e.z=t.z,e.path.shift(),r-=a):(e.x+=n/a*r,e.z+=i/a*r,r=0)}e.moving=e.path.length>0}function wd(e,t){return{x:Math.max(0,Math.min(136,e)),z:Math.max(0,Math.min(64,t))}}var Td={mossling:{name:`Mossling`,level:1,hp:34,dmg:[2,4],speed:2.2,radius:.35,aggro:0,attackRange:1,attackEvery:1.6,wander:3},cragboar:{name:`Cragboar`,level:3,hp:70,dmg:[5,8],speed:3.4,radius:.45,aggro:3.5,attackRange:1.2,attackEvery:1.4,wander:4},mosswarden:{name:`Mosswarden`,level:8,hp:900,dmg:[12,18],speed:2.6,radius:.8,aggro:5,attackRange:1.8,attackEvery:2.2,wander:2,boss:!0,respawn:45,expMul:6},ashhound:{name:`Ashhound`,level:16,hp:900,dmg:[26,38],speed:4,radius:.45,aggro:4.5,attackRange:1.3,attackEvery:1.3,wander:4},crownless_king:{name:`The Crownless King`,level:35,hp:4e4,dmg:[80,120],speed:3,radius:1.3,aggro:7,attackRange:2.6,attackEvery:2.6,wander:1,boss:!0,respawn:180,expMul:25,splash:3,loot:{rolls:3,jobWeapon:1,special:`kings_crown`}}},Ed={wild_horse:{name:`Wild Horse`,speed:3.2,radius:.5,wander:6,respawn:40,critter:!0},takoyaki:{name:`Takoyaki`,speed:3.2,radius:.5,wander:1.5,respawn:300,critter:!0,secret:!0}},Dd={id:`takoyaki`,kind:`takoyaki`,x:77.5,z:59.5},Od={bonewalker:{name:`Bonewalker`,speed:3.8,radius:.35,attackRange:1.3,attackEvery:1.3,summon:!0},bone_dragon:{name:`Bone Dragon`,speed:4.4,radius:1.2,attackRange:3.4,attackEvery:1.8,summon:!0,hpMul:3,breath:{reach:4.5,arc:90}}};function kd(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ad(e=21){let t=kd(e),n=[];for(let[e,r,i,a]of[[`mossling`,13,12,18],[`cragboar`,7,18,25]]){let o=0;for(let s=0;s<800&&o<r;s++){let r=3+t()*50,s=3+t()*50,c=Math.abs(r-Qu.x),l=Math.abs(s-Qu.z),u=Math.max(c,l);u<i||u>a||c<3||l<3||hd(r,s,.5)&&(n.some(e=>Math.hypot(e.x-r,e.z-s)<4)||(n.push({id:`${e}${o}`,kind:e,x:r,z:s}),o++))}}n.push({id:`mosswarden0`,kind:`mosswarden`,x:6.5,z:50.5});let r=$u.ashen;for(let e=0,i=0;e<2e3&&i<24;e++){let e=r.x0+4+t()*(r.w-8),a=r.z0+4+t()*(r.h-8);Math.hypot(e-id.x,a-id.z)<id.r+4||Math.hypot(e-rd.x,a-rd.z)<rd.r+6||Math.abs(e-r.x0-(a-r.z0))<3||!hd(e,a,.5)||n.some(t=>Math.hypot(t.x-e,t.z-a)<3.5)||n.push({id:`ashhound${i++}`,kind:`ashhound`,x:e,z:a})}return n.push({id:`king0`,kind:`crownless_king`,x:rd.x,z:rd.z}),n}function jd(e=5){let t=kd(e),n=[];for(let e=0;e<400&&n.length<9;e++){let e=t()*Math.PI*2,r=t()*(id.r-2),i=id.x+Math.cos(e)*r,a=id.z+Math.sin(e)*r;!hd(i,a,.6)||Math.hypot(i-td[1].x,a-td[1].z)<4||n.some(e=>Math.hypot(e.x-i,e.z-a)<2.5)||n.push({id:`horse${n.length}`,kind:`wild_horse`,x:i,z:a})}return n}var Md=Math.cos(Math.PI/3),Nd=new Set([`firebolt`,`arc_chain`,`smite`,`charge`,`wyrm_lance`]);function Pd(e,t,n,r={}){let i=e.state.players.get(t),a=e.movers.get(t);if(!i||!a)return;let o=r=>e.send(t,`castFail`,{skill:n,why:r}),s=eu(i.occ,n);if(!s?.use||!Kd[n])return o(`Unknown skill`);let c=i.skills.get(n)??0;if(!c)return o(`Learn ${s.name} from the Wise Man first`);if(a.channel)return o(`Channeling...`);if(e.time<a.gcd)return;if(e.time<(a.cds[n]??0))return o(`${s.name} isn't ready`);let l=e=>ru(e,c),u=l(s.use.cost);if(i.res<u)return o(`Not enough ${Hl[i.occ].resource}`);let d=Nd.has(n)&&!a.edge&&typeof r.target==`string`?e.mobs.get(r.target):null;if(d&&d.deadAt===null&&Id(d,a)>l(s.use.range)+d.def.radius){e.walkToCast(t,n,r,d);return}let f=Kd[n]({room:e,id:t,p:i,m:a,u:s.use,at:l,msg:r});if(typeof f==`string`)return o(f);a.pendingCast=null,i.res-=u;let p=l(s.use.cd);a.cds[n]=e.time+p,a.gcd=e.time+1,a.lastAct=Date.now(),e.send(t,`cooldown`,{skill:n,cd:p,gcd:1}),e.broadcast(`act`,{id:t,kind:`attack`,cast:!0}),e.broadcast(`cast`,{id:t,skill:n,...f})}var Fd=e=>e&&e.deadAt===null,Id=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function Ld(e,t,n,r){let i=e=>Fd(e)&&Id(e,t)<=n+e.def.radius,a=typeof r==`string`?e.mobs.get(r):null;if(i(a))return a;let o=Math.sin(t.dir),s=Math.cos(t.dir),c=null,l=1/0;for(let n of e.mobs.values()){if(!i(n))continue;let e=Id(n,t),r=e+((e<.01?1:((n.x-t.x)*o+(n.z-t.z)*s)/e)<0?3:0);r<l&&(c=n,l=r)}return c}function Rd(e,t,n,r,i,a){let o=t=>{let i=e.state.players.get(t),o=e.movers.get(t);return i&&o&&Id(o,n)<=r&&(!a||i.hp<i.hpMax)},s=typeof i==`string`&&e.state.players.get(i),c=s&&e.movers.get(i);if(c)return Id(c,n)>r?{why:`${s.name} is too far away`}:a&&s.hp>=s.hpMax?{why:i===t?`You are at full health`:`${s.name} is at full health`}:i;let l=null,u=1/0;for(let n of e.movers.keys()){if(!o(n))continue;let r=e.state.players.get(n),i=r.hp/r.hpMax-(n===t?.001:0);i<u&&(l=n,u=i)}return l}var zd=(e,t)=>{e.dir=Math.atan2(t.x-e.x,t.z-e.z)},Bd=e=>({x:+e.x.toFixed(2),z:+e.z.toFixed(2)});function Vd(e,t,n,r,i,a=0){let o=e.rollFor(n,i);e.hurtMonster(r,{...o,dmg:o.dmg+Math.round(a)},t)}var Hd=(e,t)=>e.skills.get(t)??0;function Ud(e,t,n,r){let i=e.movers.get(t),a=e.state.players.get(t);i.shield=Math.max(i.shield,n),i.shieldUntil=Math.max(i.shieldUntil,e.time+r),a.shield=i.shield}function Wd(e,t,n,r){let i=typeof r.target==`string`?e.mobs.get(r.target):null;if(Fd(i)&&Id(i,t)<=n+i.def.radius)return{x:i.x,z:i.z};if(!Number.isFinite(r.x)||!Number.isFinite(r.z))return{x:t.x,z:t.z};let a=Math.hypot(r.x-t.x,r.z-t.z),o=a>n?n/a:1;return{x:t.x+(r.x-t.x)*o,z:t.z+(r.z-t.z)*o}}function Gd(e,t,n,r,i,a){let o=r.edge,s=Ld(e,r,o.reach);if(!s)return`No enemy in reach (Edge of the Shard is a melee stance)`;zd(r,s);let c=Math.sin(r.dir),l=Math.cos(r.dir),u=[],d=.1*Hd(n,`spellstrike`)*r.derived.stats.int;for(let n of e.mobs.values()){if(!Fd(n))continue;let s=Id(n,r);s>o.reach+n.def.radius||!a&&s>.3&&((n.x-r.x)*c+(n.z-r.z)*l)/s<Md||(u.push(n.id),Vd(e,t,r,n,i*(1+o.bonus/100),d))}return{...Bd(r),dir:+r.dir.toFixed(3),r:o.reach,hits:u,sweep:a?`circle`:`arc`}}var Kd={cleave({room:e,id:t,p:n,m:r,u:i,at:a}){let o=Ul[n.occ].range+i.reach,s=Math.cos(i.arc/2*Math.PI/180),c=Ld(e,r,o);if(!c)return`No enemy in reach`;zd(r,c);let l=Math.sin(r.dir),u=Math.cos(r.dir),d=[];for(let n of e.mobs.values()){if(!Fd(n))continue;let c=Id(n,r);c>o+n.def.radius||c>.3&&((n.x-r.x)*l+(n.z-r.z)*u)/c<s-1e-9||(d.push(n.id),Vd(e,t,r,n,a(i.pct)))}return{...Bd(r),dir:+r.dir.toFixed(3),r:o,arc:i.arc,hits:d}},battle_cry({room:e,id:t,m:n,u:r,at:i}){let a=[];for(let i of e.mobs.values())!Fd(i)||Id(i,n)>r.radius||(i.target=t,i.homing=!1,i.tauntUntil=e.time+r.taunt,a.push(i.id));let o=[];for(let[t,a]of e.movers)Id(a,n)>r.allyRadius||(a.cry={until:e.time+r.buffS,pct:i(r.buff)},o.push(t));return{...Bd(n),r:r.radius,hits:a,buffed:o}},charge({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=Ld(e,r,a(i.range),o.target);if(!s)return`No enemy in charge range`;let c=Hd(n,`skewer_charge`);if(c){let a=ru(eu(n.occ,`skewer_charge`).hit,c),o=Math.max(.01,Id(s,r)),l=(s.x-r.x)/o,u=(s.z-r.z)/o;for(let n of e.mobs.values()){if(n===s||!Fd(n))continue;let c=(n.x-r.x)*l+(n.z-r.z)*u,d=Math.abs((n.x-r.x)*u-(n.z-r.z)*l);c>0&&c<o&&d<=.9+n.def.radius&&e.later(c/i.speed,()=>{Fd(n)&&Vd(e,t,r,n,a)})}}return e.engage(t,s.id),r.path=Sd(r.x,r.z,s.x,s.z),r.speed=i.speed,r.dash={mob:s.id,until:e.time+a(i.range)/i.speed+.6,root:i.root},{target:s.id,...Bd(r)}},firebolt({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){if(r.edge)return Gd(e,t,n,r,a(i.pct),!1);let s=Ld(e,r,i.range,o.target);if(!s)return`No enemy in range`;zd(r,s);let c=Id(s,r)/i.speed,l=a(i.pct);return e.later(c,()=>{Fd(s)&&Vd(e,t,r,s,l)}),{target:s.id,...Bd(r),travel:+c.toFixed(2)}},frost_nova({room:e,id:t,p:n,m:r,u:i,at:a}){let o=[];for(let n of e.mobs.values())!Fd(n)||Id(n,r)>i.radius+n.def.radius||(n.stunUntil=Math.max(n.stunUntil,e.time+a(i.freeze)),n.stunKind=`freeze`,n.target||=t,n.tagged.add(t),o.push(n.id));let s=Hd(n,`frost_edge`);return s&&(r.frostEdge={until:e.time+(s>=2?10:8),pct:s>=3?40:30}),{...Bd(r),r:i.radius,hits:o}},arc_chain({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){if(r.edge)return Gd(e,t,n,r,100,!0);let s=Ld(e,r,i.range,o.target);if(!s)return`No enemy in range`;zd(r,s);let c=[s],l=[Bd(r),Bd(s)];for(;c.length<a(i.jumps);){let t=c[c.length-1],n=null,r=i.hop;for(let i of e.mobs.values()){if(!Fd(i)||c.includes(i))continue;let e=Id(i,t);e<r&&(n=i,r=e)}if(!n)break;c.push(n),l.push(Bd(n))}return c.forEach((n,a)=>Vd(e,t,r,n,100*(1-i.falloff)**a)),{points:l,hits:c.map(e=>e.id)}},blink({room:e,id:t,m:n,u:r,msg:i}){let a=Math.sin(n.dir),o=Math.cos(n.dir);if(Number.isFinite(i.x)&&Number.isFinite(i.z)){let e=Math.hypot(i.x-n.x,i.z-n.z);e>.3&&(a=(i.x-n.x)/e,o=(i.z-n.z)/e)}let s=Bd(n);for(let i=r.range;i>=1;i-=.25){let r=n.x+a*i,c=n.z+o*i;if(hd(r,c,.3))return e.disengage(t),Object.assign(n,{x:r,z:c,path:[],dir:Math.atan2(a,o)}),{from:s,to:Bd(n)}}return`Nowhere to blink to`},mana_shield({room:e,m:t,u:n,at:r}){return t.manaShield={until:e.time+n.dur,pct:r(n.pct)},{dur:n.dur}},mend({room:e,id:t,p:n,m:r,u:i,at:a,msg:o}){let s=Rd(e,t,r,i.range,o.ally,!0);if(s?.why)return s.why;if(!s)return`Everyone nearby is at full health`;let c=a(i.heal)+i.int*r.derived.stats.int;e.healPlayer(s,c,t);let l=Hd(n,`radiant_mend`),u=[];if(l){let r=eu(n.occ,`radiant_mend`),i=e.movers.get(s);for(let[n,a]of e.movers){let o=e.state.players.get(n);n===s||!o||o.hp>=o.hpMax||Id(a,i)>r.radius||(e.healPlayer(n,c*ru(r.pct,l)/100,t),u.push(n))}}return{target:s,also:u}},smite({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=Ld(e,n,r.range,a.target);return o?(zd(n,o),Vd(e,t,n,o,i(r.pct)*(o.def.undead?1.5:1)),{target:o.id,...Bd(o)}):`No enemy in range`},ward({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=Rd(e,t,n,r.range,a.ally,!1)??t;return o?.why?o.why:(Ud(e,o,Math.round(i(r.def)+r.int*n.derived.stats.int),r.dur),{target:o})},holy_words({room:e,id:t,p:n,m:r,u:i,at:a}){let o=e=>Fd(e)&&Id(e,r)<=i.radius+e.def.radius;if(![...e.mobs.values()].some(o))return`No enemy nearby`;let s=Hd(n,`litany_of_dawn`)?eu(n.occ,`litany_of_dawn`):null,c=a(i.pct)*(1+(s?.bonus??0)/100),l=r.channel={until:e.time+i.dur,walk:s?.walk??0,pulse:{next:e.time+i.every,every:i.every,pause:i.pause,fn:()=>{let n=[...e.mobs.values()].filter(o);e.broadcast(`fx`,{kind:`holy_word`,...Bd(r),r:i.radius,hits:n.map(Bd)});for(let i of n)Vd(e,t,r,i,c*(i.def.undead?1.5:1))}}};return l.walk?r.speed=_d*l.walk:(r.path=[],r.steer=null),e.later(i.dur+.05,()=>{r.channel===l&&(r.channel=null,e.setSpeed(r))}),{...Bd(r),r:i.radius,channel:i.dur,walk:l.walk||void 0}},mount:({room:e,id:t,u:n})=>e.toggleMount(t,n.range),wyrm_lance({room:e,id:t,p:n,m:r,u:i,msg:a}){if(!n.mount)return`Only on horseback: get on your horse first`;let o=Ld(e,r,i.range,a.target);if(!o)return`No enemy in reach of the lance`;let s=Bd(r),c=Math.max(.01,Id(o,r)),l=(o.x-r.x)/c,u=(o.z-r.z)/c,d={x:r.x,z:r.z};for(let e=o.def.radius+.7;e<c;e+=.25){let t=o.x-l*e,n=o.z-u*e;if(hd(t,n,.3)){d={x:t,z:n};break}}let f=[...e.mobs.values()].filter(e=>{if(e===o||!Fd(e))return!1;let t=(e.x-r.x)*l+(e.z-r.z)*u,n=Math.abs((e.x-r.x)*u-(e.z-r.z)*l);return t>0&&t<c&&n<=.9+e.def.radius}),p=Math.max(.12,Id(d,r)/i.speed);return zd(r,o),Object.assign(r,{x:d.x,z:d.z,path:[],steer:null}),e.later(p,()=>{for(let n of f)Fd(n)&&Vd(e,t,r,n,i.path);Fd(o)&&(o.stunUntil=Math.max(o.stunUntil,e.time+i.stun),o.stunKind=`stun`,Vd(e,t,r,o,i.pct))}),{from:s,to:Bd(d),dir:+r.dir.toFixed(3),target:o.id,travel:+p.toFixed(2),hits:f.map(e=>e.id)}},sacred_chant({room:e,id:t,m:n,u:r}){return[...e.mobs.values()].some(e=>Fd(e)&&Id(e,n)<=r.radius+e.def.radius)?(n.channel={until:e.time+r.channel},n.path=[],n.steer=null,e.later(r.channel,()=>{n.channel=null;let i=[...e.mobs.values()].filter(e=>Fd(e)&&Id(e,n)<=r.radius+e.def.radius);e.broadcast(`fx`,{kind:`judgement`,...Bd(n),r:r.radius,hits:i.map(Bd)});for(let a of i)Vd(e,t,n,a,r.pct*(a.def.undead?1.5:1))}),{...Bd(n),r:r.radius,channel:r.channel}):`No enemy in sight`},rampage({room:e,id:t,m:n,u:r}){let i=[...e.mobs.values()].filter(e=>Fd(e)&&Id(e,n)<=r.radius+e.def.radius);if(!i.length)return`No enemy in range`;let a=Bd(n),o=[],s={x:n.x,z:n.z};for(;i.length&&o.length<r.hits;){i.sort((e,t)=>Id(e,s)-Id(t,s));let e=i.shift(),t=Math.max(.01,Id(e,s)),n=e.def.radius+.6,a=e.x+(s.x-e.x)/t*n,c=e.z+(s.z-e.z)/t*n,l=hd(a,c,.3)?{x:a,z:c}:s;o.push({...Bd(l),t:+((o.length+1)*r.hop).toFixed(2),target:e.id,at:Bd(e)}),s=l}let c=o.length*r.hop;return n.channel={until:e.time+c+.15},n.path=[],n.steer=null,o.forEach(i=>e.later(i.t,()=>{let a=e.mobs.get(i.target);Object.assign(n,{x:i.x,z:i.z,path:[]}),Fd(a)&&(zd(n,a),Vd(e,t,n,a,r.pct))})),e.later(c+.15,()=>{n.channel=null}),{from:a,hops:o,hop:r.hop}},sword_dance({room:e,id:t,p:n,m:r,u:i}){let a=()=>[...e.mobs.values()].filter(e=>Fd(e)&&Id(e,r)<=i.radius+e.def.radius);if(!a().length)return`No enemy in sight`;let o=.1*Hd(n,`spellstrike`)*r.derived.stats.int;for(let n=0;n<i.waves;n++)e.later(i.rise+n*i.every,()=>{let s=a();e.broadcast(`fx`,{kind:`blades`,id:t,wave:n,...Bd(r),hits:s.map(Bd)}),e.later(.22,()=>{for(let n of s)Fd(n)&&Vd(e,t,r,n,i.pct,o)})});return{...Bd(r),r:i.radius,dur:+(i.rise+i.waves*i.every+.3).toFixed(2),waves:i.waves}},meteor_storm({room:e,id:t,m:n,u:r,msg:i}){let a=Wd(e,n,r.range,i),o=[];for(let e=0;e<r.count;e++){let t=Math.random()*Math.PI*2,n=Math.sqrt(Math.random())*(r.radius-.5);o.push({x:+(a.x+Math.cos(t)*n).toFixed(2),z:+(a.z+Math.sin(t)*n).toFixed(2),t:+(r.lead+e*r.dur/r.count).toFixed(2)})}o.push({...Bd(a),t:+(r.lead+r.dur+.35).toFixed(2),big:!0});for(let i of o)e.later(i.t,()=>{let a=i.big?r.radius:r.r;for(let o of e.mobs.values())Fd(o)&&Id(o,i)<=a+o.def.radius&&Vd(e,t,n,o,i.big?r.finale:r.pct)});return{...Bd(a),r:r.radius,impact:r.r,falls:o}},raise_bonewalker({room:e,id:t,m:n,u:r,at:i}){let a=[];for(let o=0;o<i(r.count);o++){let s=[...e.pets.values()].filter(e=>e.owner===t&&e.kind===`raise`&&e.deadAt===null);s.length>=r.max&&e.crumble(s[0]);let c=e.summon(t,{life:r.life,pct:i(r.pct),kind:`raise`,angle:n.dir+Math.PI/2+o*2.1});c&&a.push(Bd(c))}return a.length?{spawned:a}:`No room to raise a bonewalker here`},bone_armor({room:e,id:t,m:n,u:r,at:i}){return Ud(e,t,Math.round(i(r.def)+r.int*n.derived.stats.int),r.dur),{dur:r.dur}},bone_dragon({room:e,id:t,m:n,u:r}){let i=e.summon(t,{type:`bone_dragon`,life:r.life,pct:r.pct,kind:`dragon`,angle:n.dir+Math.PI/2});return i?{spawned:[Bd(i)]}:`No room to raise the dragon here`},snare_rune({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=Wd(e,n,r.range,a),s=e.zones.filter(e=>e.kind===`snare`&&e.owner===t);return s.length>=r.max&&e.endZone(s[0]),{zid:e.addZone({kind:`snare`,...o,r:r.r,until:e.time+r.life,root:i(r.root),owner:t}),...Bd(o),r:r.r,life:r.life}},glyph_field({room:e,id:t,m:n,u:r,at:i,msg:a}){let o=Wd(e,n,r.range,a);return{zid:e.addZone({kind:`glyph`,...o,r:r.radius,until:e.time+r.dur,slow:i(r.slow),owner:t}),...Bd(o),r:r.radius,dur:r.dur}},script_of_binding({room:e,id:t,m:n,u:r,msg:i}){let a=Wd(e,n,r.range,i),o=[];for(let n of e.mobs.values())!Fd(n)||Id(n,a)>r.radius+n.def.radius||(n.rootUntil=Math.max(n.rootUntil,e.time+r.root),n.tagged.add(t),n.target||=t,o.push(n.id));return{...Bd(a),r:r.radius,hits:o}},edge_of_the_shard({room:e,m:t,u:n}){return t.edge={until:e.time+n.dur,bonus:n.bonus,reach:n.reach},{dur:n.dur,r:n.reach}},cataclysm({room:e,id:t,p:n,m:r,u:i,msg:a}){let o=Wd(e,r,i.range,a);return r.channel={until:e.time+i.channel},r.path=[],r.steer=null,e.later(i.channel,()=>{r.channel=null,e.broadcast(`fx`,{kind:`meteor`,...Bd(o),r:i.radius});for(let n of e.mobs.values())Fd(n)&&Id(n,o)<=i.radius+n.def.radius&&Vd(e,t,r,n,i.pct)}),{...Bd(o),r:i.radius,channel:i.channel}}},qd=1.2,Jd=2.2,Yd=14,Xd=9,Zd=e=>e&&e.deadAt===null,Qd=(e,t)=>Math.hypot(e.x-t.x,e.z-t.z);function $d(e,t,n,r){for(let i=0;i<8;i++){let a=t+i*Math.PI/4,o=e.x+Math.sin(a)*n,s=e.z+Math.cos(a)*n;if(hd(o,s,r))return{x:o,z:s}}return null}var ef={foe(e){let t=this.pets.get(e);return this.movers.get(e)??(t&&t.deadAt===null?t:null)},summon(e,{life:t,pct:n,kind:r,angle:i,type:a=`bonewalker`}){let o=this.state.players.get(e),s=this.movers.get(e);if(!o||!s)return null;let c=Od[a],l=$d(s,i??s.dir+Math.PI/2,.75+c.radius,c.radius);if(!l)return null;let u=`pet${++this.petSeq}`,d=Math.round((40+s.derived.stats.int*3+o.level*4)*(c.hpMul??1)),f=this.newMonster();Object.assign(f,{kind:a,level:o.level,x:l.x,z:l.z,dir:s.dir,moving:!1,hp:d,hpMax:d,status:``,owner:e}),this.state.monsters.set(u,f);let p={id:u,s:f,def:c,owner:e,kind:r,pct:n,until:this.time+t,x:l.x,z:l.z,dir:s.dir,moving:!1,path:[],steer:null,speed:c.speed,target:null,nextSwing:this.time+.6,repath:0,deadAt:null};return this.pets.set(u,p),p},tickPet(e,t){let{s:n,def:r}=e;if(e.deadAt!==null){this.time-e.deadAt>qd&&(this.state.monsters.delete(e.id),this.pets.delete(e.id));return}let i=this.movers.get(e.owner);if(!i||this.time>e.until){this.crumble(e);return}let a=e.target&&this.mobs.get(e.target);if((!Zd(a)||a.homing||Qd(a,i)>Xd)&&(a=null),!a){let t=i.combat&&this.mobs.get(i.combat);a=Zd(t)&&!t.homing?t:this.nearestMob(e.x,e.z,6,t=>!t.homing&&(t.target===e.owner||this.pets.get(t.target)?.owner===e.owner))}if(e.target=a?.id??null,a)e.speed=r.speed,Qd(a,e)<=r.attackRange+a.def.radius?(e.path=[],e.dir=Math.atan2(a.x-e.x,a.z-e.z),this.time>=e.nextSwing&&(e.nextSwing=this.time+r.attackEvery,this.broadcast(`act`,{id:e.id,kind:`attack`,mob:!0}),r.breath?this.breathe(e,i):this.hurtMonster(a,this.rollFor(i,e.pct),e.owner,{from:e,source:e.id}))):this.time>=e.repath&&(e.repath=this.time+.35,e.path=Sd(e.x,e.z,a.x,a.z));else{let t=Qd(e,i);if(t>Yd){let t=$d(i,i.dir+Math.PI,.75+r.radius,r.radius);t&&Object.assign(e,{...t,path:[]})}else t>Jd&&this.time>=e.repath?(e.repath=this.time+.5,e.speed=t>4?r.speed*1.4:r.speed,e.path=Sd(e.x,e.z,i.x-Math.sin(i.dir),i.z-Math.cos(i.dir))):t<1.2&&(e.path=[])}Cd(e,t),this.spreadPet(e,i,t),n.x=e.x,n.z=e.z,n.dir=e.dir,n.moving=e.moving},breathe(e,t){let{reach:n,arc:r}=e.def.breath,i=Math.cos(r*Math.PI/360),a=Math.sin(e.dir),o=Math.cos(e.dir);for(let r of[...this.mobs.values()]){if(!Zd(r)||r.homing)continue;let s=Qd(r,e);s>n+r.def.radius||s>.3&&((r.x-e.x)*a+(r.z-e.z)*o)/s<i||this.hurtMonster(r,this.rollFor(t,e.pct),e.owner,{from:e,source:e.id})}this.broadcast(`fx`,{kind:`breath`,x:+e.x.toFixed(2),z:+e.z.toFixed(2),dir:+e.dir.toFixed(3),r:n,arc:r})},spreadPet(e,t,n){let r=[t,...[...this.pets.values()].filter(t=>t!==e&&t.deadAt===null)];for(let t of r){let r=e.x-t.x,i=e.z-t.z,a=Math.hypot(r,i),o=e.def.radius*2+.15;if(a>=o)continue;let s=Math.min(o-a,2.5*n)/Math.max(a,.001),c=a<.001?2.5*n:r*s,l=a<.001?0:i*s;hd(e.x+c,e.z+l,.3)&&(e.x+=c,e.z+=l)}},hurtPet(e,t,n){let r=Xu(t,10+e.s.level*2);e.s.hp=Math.max(0,e.s.hp-r),this.broadcast(`hit`,{id:e.id,by:n.id,dmg:r,mob:!0}),e.s.hp===0&&this.crumble(e)},crumble(e){if(e.deadAt!==null)return;Object.assign(e,{deadAt:this.time,path:[],moving:!1,target:null}),e.s.hp=0,e.s.moving=!1;let t=this.movers.get(e.owner);for(let n of this.mobs.values())n.target===e.id&&(t&&!this.inTown(t)?n.target=e.owner:this.evade(n))},dismissPets(e){for(let t of this.pets.values())t.owner===e&&this.crumble(t)}},tf={brown:{name:`Brown`,speed:1.25,atk:10},black:{name:`Black`,speed:1.5,atk:15},white:{name:`White`,speed:1.75,atk:20},takoyaki:{name:`Takoyaki`,speed:2,atk:30,unicorn:!0}},nf=e=>tf[e]?e:e===!0?`brown`:``,rf=Object.keys(tf).filter(e=>!tf[e].unicorn),af=()=>rf[Math.floor(Math.random()*rf.length)],of={spawnCritter(e){let t=Ed[e.kind],n=Math.random()*Math.PI*2,r=this.newMonster();Object.assign(r,{kind:e.kind,level:1,x:e.x,z:e.z,dir:n,moving:!1,hp:1,hpMax:1,status:``,owner:``,coat:e.kind===`takoyaki`?`takoyaki`:af()}),this.state.monsters.set(e.id,r),this.critters.set(e.id,{id:e.id,spawn:e,def:t,s:r,x:e.x,z:e.z,dir:n,moving:!1,path:[],steer:null,speed:t.speed*.5,nextThink:this.time+Math.random()*4,takenAt:null})},tickCritter(e,t){if(e.takenAt!==null)this.time-e.takenAt>e.def.respawn&&(this.critters.delete(e.id),this.spawnCritter(e.spawn));else{if(this.time>=e.nextThink){e.nextThink=this.time+3+Math.random()*5;let t=Math.random()*Math.PI*2,n=Math.random()*e.def.wander;e.speed=e.def.speed*(Math.random()<.25?1.4:.5),Math.random()<.65&&(e.path=Sd(e.x,e.z,e.spawn.x+Math.cos(t)*n,e.spawn.z+Math.sin(t)*n).slice(0,4))}Cd(e,t),e.s.x=e.x,e.s.z=e.z,e.s.dir=e.dir,e.s.moving=e.moving}},toggleMount(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(n.mount)return this.dismount(e),{mount:``};let i=null,a=t;for(let e of this.critters.values()){let t=Math.hypot(e.x-r.x,e.z-r.z);e.takenAt===null&&t<a&&(i=e,a=t)}if(i){let t=nf(i.s.coat)||`brown`;i.takenAt=this.time,this.state.monsters.delete(i.id);let r=tf[t].unicorn?`Takoyaki the unicorn`:`a ${tf[t].name.toLowerCase()} horse`;this.send(e,`notice`,{text:`${n.horse?`You let your old mount go and tamed`:`You tamed`} ${r} (${tf[t].speed}x speed, +${tf[t].atk}% damage)! Use Mount / Dismount to get on and off.`}),n.horse=t}return n.horse?(this.ride(e),{mount:n.horse}):`Find a wild horse first: they graze in the meadow of the Ashen Reach`},ride(e){let t=this.state.players.get(e),n=this.movers.get(e);t.mount=t.horse,Object.assign(n,{riding:!0,rideSpeed:_d*tf[t.horse].speed,rideAtk:tf[t.horse].atk}),n.dash||this.setSpeed(n)},dismount(e){let t=this.state.players.get(e),n=this.movers.get(e);t?.mount&&(t.mount=``,n.riding=!1,n.dash||this.setSpeed(n))}},sf={suprememage:{name:`SupremeMage`,occ:`arcanist`,job:`warlock`,level:25,title:`Supreme Mage`,subtitle:`Shard of Ruin`,gear:{main:`hexbone_wand`,off:`runed_grimoire`,head:`pointed_hat`,armor:`starweave_robe`,boots:`windstep_shoes`,neck:`moonstone_pendant`}},sirlance:{name:`SirLance`,occ:`vanguard`,job:`knight`,level:23,title:`Knight`,subtitle:`Shard of Wings`,horse:`white`,gear:{main:`wyrmguard_lance`,off:`oaken_kite_shield`,head:`wyrmguard_greathelm`,armor:`wyrmguard_harness`,boots:`wyrmguard_sabatons`}},gravelord:{name:`Gravelord`,occ:`arcanist`,job:`necromancer`,level:23,title:`Necromancer`,subtitle:`Shard of Glyphs`,gear:{main:`ossuary_staff`,head:`gravecaller_hood`,armor:`gravecaller_robes`,boots:`gravewalker_wraps`}},dawnshield:{name:`Dawnshield`,occ:`vanguard`,job:`paladin`,level:23,title:`Paladin`,subtitle:`Shard of Walls`,gear:{main:`oathbound_warhammer`,off:`oaken_kite_shield`,head:`iron_nasal_helm`,armor:`ringmail_coat`,boots:`marching_greaves`,neck:`wardenheart_amulet`}},ironfang:{name:`Ironfang`,occ:`vanguard`,job:`fighter`,level:23,title:`Fighter`,subtitle:`Shard of Wrath`,gear:{main:`twinfang_cleaver`,head:`leather_cap`,armor:`padded_jerkin`,boots:`marching_greaves`,neck:`tusk_necklace`}},shardblade:{name:`Shardblade`,occ:`arcanist`,job:`sword_mage`,level:23,title:`Sword Mage`,subtitle:`Shard of Edges`,gear:{main:`spellsteel_saber`,head:`stargazer_cowl`,armor:`starweave_robe`,boots:`windstep_shoes`}},dawnveil:{name:`Dawnveil`,occ:`oracle`,job:`sage`,level:23,title:`Sage`,subtitle:`Shard of Dawn`,gear:{main:`lumen_staff`,off:`sunlit_aegis`,head:`halo_circlet`,armor:`chainlinked_habit`,boots:`pilgrim_boots`,neck:`moonstone_pendant`}}};function cf(e){return sf[String(e??``).toLowerCase()]??null}function lf(e,t){Object.assign(e,Vu(t.occ,t.job,t.level),{name:t.name,occ:t.occ,job:t.job,level:t.level,exp:0,expNext:0,wisdom:0,title:t.title,subtitle:t.subtitle});for(let n of tu(t.occ))e.skills.set(n.id,n.max);for(let[n,r]of Object.entries(t.gear??{}))e.equip.set(n,r);return e.bag.splice(0,e.bag.length),`${t.name} the ${t.title} descends upon Oathgate! (${Hl[t.occ].name} → ${Yl[t.job].name}, Lv ${t.level})`}var uf=140,df=new Set([`attack`,`wave`]),ff=6,pf=.008,mf=1.2,hf=10,gf=Math.cos(Math.PI*.4),_f=2,vf=9999999,yf=14,bf=.001,xf=4,Sf=25,Cf=.2,wf=60,Tf=([e,t])=>e+Math.floor(Math.random()*(t-e+1)),Ef=[[`vanguard`,`war_aura`],[`vanguard`,`valor_aura`],[`oracle`,`gentle_hands`],[`oracle`,`grace_aura`]],Df=[`dmg`,`def`,`fight`,`regen`],Of=class{constructor({state:e,newPlayer:t,newMonster:n,send:r,broadcast:i,log:a=()=>{},secrets:o=!0,restores:s=!1}){Object.assign(this,{state:e,newPlayer:t,newMonster:n,send:r,broadcast:i,log:a,secrets:o,restores:s}),this.movers=new Map,this.mobs=new Map,this.zones=[],this.zoneSeq=0,this.timers=[],this.pets=new Map,this.petSeq=0,this.spawnSeq=0,this.critters=new Map,this.parties=new Map,this.partySeq=0,this.time=0;for(let e of Ad())this.spawnMonster(e);for(let e of jd())this.spawnCritter(e);this.spawnCritter(Dd)}message(e,t,n){let r=kf[t];r&&r(this,e,n)}join(e,t={}){let n=Hl[t.occ]?t.occ:`vanguard`,r=t.sex===`f`?`f`:`m`,i=Kl(t.name)??`Unsworn${Math.floor(Math.random()*900+100)}`,a=gd(),o=this.newPlayer();Object.assign(o,{name:i,occ:n,sex:r,job:``,level:1,x:a.x,z:a.z,dir:Math.PI/4,moving:!1,exp:0,expNext:Ku(1),wisdom:0,gold:0,...Zu(n)});for(let e of mu[n])o.bag.push(e);for(let e of su(n))o.skills.set(e,1);this.state.players.set(e,o),this.movers.set(e,{x:a.x,z:a.z,dir:o.dir,moving:!1,path:[],steer:null,lastChat:0,lastAct:0,lastHurt:-99,regen:0,resAcc:0,combat:null,nextSwing:0,repath:0,cds:{},gcd:0,cry:null,shield:0,shieldUntil:0,dash:null,manaShield:null,aura:{dmg:0,def:0,fight:0,regen:0},edge:null,frostEdge:null,channel:null});let s=this.secrets?cf(i):null,c=s?lf(o,s):`${i} the ${Hl[n].name} has entered Oathgate.`;s?.horse?o.horse=nf(s.horse):this.restores&&t.save&&this.restore(e,t.save),this.recompute(e),o.hp=o.hpMax,o.res=o.resMax,this.broadcast(`system`,{text:c}),this.log(`[world] + ${i} (${r} ${n}) ${e} — ${this.state.players.size} online`)}restore(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||!r||typeof t!=`object`||t.occ!==n.occ)return;let i=(e,t,n)=>Math.max(t,Math.min(n,Math.floor(Number(e))||t)),a=e=>e&&typeof e==`object`?Object.entries(e):[],o=i(t.level,1,30),s=Yl[t.job]?.occ===n.occ&&o>=15?t.job:``,c=i(t.skillPts,0,999)*Math.round(Ku(Math.min(o,29))*.25);Object.assign(n,{level:o,job:s,exp:i(t.exp,0,1e9),expNext:o>=30?0:Ku(o),wisdom:Math.min(ou,i(t.wisdom,0,ou)+c)}),Object.assign(n,Vu(n.occ,s,o)),n.skills.clear();for(let[e,r]of a(t.skills)){let t=eu(n.occ,e);t&&(!t.job||t.job===s)&&o>=t.lv&&n.skills.set(e,i(r,1,t.max))}for(let e of su(n.occ))n.skills.has(e)||n.skills.set(e,1);n.bag.splice(0,n.bag.length);for(let e of Array.isArray(t.bag)?t.bag.slice(0,24):[])G[e]&&n.bag.push(e);n.equip.clear();for(let[e,r]of a(t.equip))G[r]&&(fu.includes(e)&&(G[r].slot===e||G[r].slot===`ring`&&e.startsWith(`ring`))&&!Eu(n,r)?n.equip.set(e,r):n.bag.length<24&&n.bag.push(r));G[n.equip.get(`main`)]?.twoHand&&n.equip.get(`off`)&&(n.bag.length<24&&n.bag.push(n.equip.get(`off`)),n.equip.delete(`off`));for(let e of Object.keys(G).filter(e=>G[e].unique)){let t=[...n.equip.values()].includes(e);for(let r=0;r<n.bag.length;r++)n.bag[r]===e&&(t&&n.bag.splice(r--,1),t=!0)}if(n.gold=i(t.gold,0,vf),n.horse=nf(t.horse),n.horse){t.riding&&n.skills.has(`mount`)&&this.ride(e);let r=tf[n.horse];this.send(e,`notice`,{text:`${r.unicorn?`Takoyaki the unicorn`:`Your ${r.name.toLowerCase()} horse`} came with you${n.mount?``:`: use Mount / Dismount to ride`}.`})}}leave(e){this.leaveParty(e);let t=this.state.players.get(e);this.state.players.delete(e),this.movers.delete(e);for(let t of this.mobs.values())t.target===e&&(t.target=null);this.dismissPets(e),t&&(this.broadcast(`system`,{text:`${t.name} has left.`}),this.log(`[world] - ${t.name} ${e} — ${this.state.players.size} online`))}tick(e){this.time+=e;let t=this.timers.filter(e=>e.at<=this.time);this.timers=this.timers.filter(e=>e.at>this.time);for(let e of t)e.fn();this.tickAuras();for(let[t,n]of this.movers){n.pendingCast&&this.tickPendingCast(t,n),n.combat&&!n.channel&&this.tickCombat(t,n),n.dash&&this.time>n.dash.until&&this.endDash(n),Cd(n,e);let r=this.state.players.get(t);if(!r)continue;let i=td.find(e=>Math.hypot(e.x-n.x,e.z-n.z)<nd);i&&this.warp(t,i.to),r.x=n.x,r.z=n.z,r.dir=n.dir,r.moving=n.moving;let a=this.time-n.lastHurt>ff,o=n.derived.regen,s=n.aura,c=(a?pf*(o.calm+s.regen/100):0)+o.fight+s.fight/100;if(r.hp<r.hpMax&&c&&(n.regen+=r.hpMax*c*e,n.regen>=1)){let e=Math.floor(n.regen);n.regen-=e,r.hp=Math.min(r.hpMax,r.hp+e)}let l=n.channel?.pulse;if(l&&this.time>=l.next&&(l.next+=l.every,l.fn()),r.res<r.resMax&&(n.resAcc+=r.resMax*bf*(o.res+s.regen/100)*(a&&!n.combat?2:1)*e,n.resAcc>=1)){let e=Math.floor(n.resAcc);n.resAcc-=e,r.res=Math.min(r.resMax,r.res+e)}n.cry&&this.time>n.cry.until&&(n.cry=null),n.edge&&this.time>n.edge.until&&(n.edge=null),n.frostEdge&&this.time>n.frostEdge.until&&(n.frostEdge=null),n.shield&&this.time>n.shieldUntil&&(n.shield=0,r.shield=0),n.manaShield&&this.time>n.manaShield.until&&(n.manaShield=null)}this.tickZones(e);for(let t of[...this.mobs.values()])this.tickMonster(t,e);for(let t of[...this.pets.values()])this.tickPet(t,e);for(let t of[...this.critters.values()])this.tickCritter(t,e)}later(e,t){this.timers.push({at:this.time+e,fn:t})}tickAuras(){let e=new Map;for(let[t,n]of this.movers){let r=this.state.players.get(t);if(!r)continue;for(let[t,i]of Ef){let a=r.occ===t&&r.skills.get(i);if(!a)continue;let o=eu(t,i).aura;for(let t of this.movers.values()){if(Math.hypot(t.x-n.x,t.z-n.z)>o.radius)continue;e.has(t)||e.set(t,{});let r=e.get(t)[i]??={};for(let e of Df)o[e]&&(r[e]=Math.max(r[e]??0,ru(o[e],a)))}}let i=r.occ===`arcanist`&&r.skills.get(`grave_chill`);if(i){let e=eu(`arcanist`,`grave_chill`).aura;for(let t of this.mobs.values())t.deadAt===null&&Math.hypot(t.x-n.x,t.z-n.z)<=e.radius+t.def.radius&&this.slowMob(t,ru(e.slow,i),.3)}}for(let t of this.movers.values()){let n={dmg:0,def:0,fight:0,regen:0};for(let r of Object.values(e.get(t)??{}))for(let e in r)n[e]+=r[e];t.aura=n}}addZone(e){return e.zid=++this.zoneSeq,this.zones.push(e),e.zid}endZone(e,t=!1){e.until=-1,this.broadcast(`fx`,{kind:`zone_end`,zid:e.zid,x:e.x,z:e.z,triggered:t})}tickZones(e){for(let e of this.zones){if(e.until<=this.time)continue;let t=t=>Math.hypot(t.x-e.x,t.z-e.z)<=e.r+(t.def?.radius??0);if(e.kind===`glyph`)for(let n of this.mobs.values())n.deadAt===null&&t(n)&&this.slowMob(n,e.slow,.3);else if(e.kind===`snare`){let n=[...this.mobs.values()].find(e=>e.deadAt===null&&t(e));if(!n)continue;n.rootUntil=Math.max(n.rootUntil,this.time+e.root),n.tagged.add(e.owner),!n.target&&this.movers.has(e.owner)&&(n.target=e.owner),this.endZone(e,!0)}}for(let e of this.zones)e.until>-1&&e.until<=this.time&&e.kind===`snare`&&this.endZone(e);this.zones=this.zones.filter(e=>e.until>this.time)}slowMob(e,t,n){this.time>=e.slowUntil&&(e.slowPct=0),e.slowPct=Math.max(e.slowPct,t),e.slowUntil=Math.max(e.slowUntil,this.time+n)}rollFor(e,t=100){let n=Yu(e.derived),r=1+((e.cry?.pct??0)+(e.aura?.dmg??0)+(e.riding?e.rideAtk??0:0))/100;return{dmg:Math.max(1,Math.round(n.dmg*t/100*r)),crit:n.crit}}healPlayer(e,t,n,r=!1){let i=this.state.players.get(e);if(!i||i.hp>=i.hpMax)return;let a=Math.min(i.hpMax-i.hp,Math.round(t));i.hp+=a,this.broadcast(`heal`,{id:e,by:n,amount:a,quiet:r})}endDash(e){e.dash=null,this.setSpeed(e)}setSpeed(e){e.riding?e.speed=e.rideSpeed:delete e.speed}warp(e,t,{party:n=!0}={}){let r=this.movers.get(e),i=this.state.players.get(e);if(r&&i){if(n&&i.party){let n=ad(r.x,r.z);this.partyMembers(e).forEach((r,a)=>{let o=this.movers.get(r);if(r===e||!o||ad(o.x,o.z)!==n)return;let s=a/xf*Math.PI*2,c={x:t.x+Math.cos(s)*1.2,z:t.z+Math.sin(s)*1.2};this.warp(r,hd(c.x,c.z,.3)?c:t,{party:!1}),this.send(r,`notice`,{text:`You travel with your party (${i.name} went through the portal).`})})}this.disengage(e),r.dash&&this.endDash(r),Object.assign(r,{x:t.x,z:t.z,path:[],steer:null,moving:!1}),Object.assign(i,{x:t.x,z:t.z,moving:!1});for(let t of this.mobs.values())t.target===e&&this.evade(t);this.send(e,`warp`,{x:t.x,z:t.z,region:ad(t.x,t.z)})}}recompute(e){let t=this.state.players.get(e),n=this.movers.get(e);if(!t||!n)return;let r=Ju(t,t.skills);n.derived=r;let i=t.hpMax?t.hp/t.hpMax:1,a=t.resMax?t.res/t.resMax:1;t.hpMax=r.hpMax,t.resMax=r.resMax,t.hp=Math.min(t.hpMax,Math.max(1,Math.round(t.hpMax*i))),t.res=Math.min(t.resMax,Math.round(t.resMax*a))}classGate(e){return e.level===15&&!e.job?`Lv 15: talk to the Oathkeeper by the Crown Plinth to choose your 2nd class.`:e.level===25?`Lv 25: the 3rd classes aren't in the game yet. Your EXP waits for them.`:null}grantExp(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||(n.wisdom=Math.min(ou,n.wisdom+t),t&&this.send(e,`exp`,{gain:t}),n.level>=30))return;let i=this.classGate(n);i&&n.exp>=n.expNext?r&&this.time-(r.gateWarn??-99)>30&&(r.gateWarn=this.time,this.send(e,`notice`,{text:i})):(n.exp=i?Math.min(n.expNext,n.exp+t):n.exp+t,this.levelUp(e))}levelUp(e){let t=this.state.players.get(e),n=0,r={};for(;t.level<30&&!this.classGate(t)&&t.exp>=t.expNext;){t.exp-=t.expNext,t.level+=1,n+=1;for(let[e,n]of Object.entries(Bu(t)))t[e]+=n,r[e]=(r[e]??0)+n;t.expNext=Ku(t.level);let i=uu(t,t.level);i.length&&this.send(e,`notice`,{text:`New skill${i.length>1?`s`:``} to learn from the Wise Man: ${i.map(e=>e.name).join(`, `)}.`})}if(!n)return;t.level>=30&&(t.exp=0,t.expNext=0),this.classGate(t)&&(t.exp=Math.min(t.exp,t.expNext)),this.recompute(e),t.hp=t.hpMax,t.res=t.resMax,this.broadcast(`levelup`,{id:e,level:t.level}),this.broadcast(`system`,{text:`${t.name} reached Lv ${t.level}!`}),this.send(e,`notice`,{text:`Stats up: ${Object.entries(r).map(([e,t])=>`${Ru[e]} +${t}`).join(`, `)}.`});let i=this.classGate(t);i&&this.send(e,`notice`,{text:i})}giveItem(e,t,n){let r=this.state.players.get(e),i=G[t];return!r||!i?!1:r.bag.length>=24?(this.send(e,`notice`,{text:`Your bag is full: the ${i.name} was left behind.`}),!1):(r.bag.push(t),this.send(e,`loot`,{item:t,from:n}),!0)}equipItem(e,t){let n=this.state.players.get(e),r=n?.bag[t];if(!r)return;let i=Eu(n,r);if(i){this.send(e,`notice`,{text:`${G[r].name}: ${i}.`});return}let a=Du(r,n.equip),o=[a,...ku(r,n.equip)].filter(e=>n.equip.get(e));if(n.bag.length-1+o.length>24)this.send(e,`notice`,{text:`Your bag is too full to swap that in.`});else{n.bag.splice(t,1);for(let e of o)n.bag.push(n.equip.get(e)),n.equip.delete(e);n.equip.set(a,r),this.recompute(e)}}unequipItem(e,t){let n=this.state.players.get(e);n&&fu.includes(t)&&n.equip.get(t)&&(n.bag.length>=24?this.send(e,`notice`,{text:`Your bag is full.`}):(n.bag.push(n.equip.get(t)),n.equip.delete(t),this.recompute(e)))}discardItem(e,t){let n=this.state.players.get(e),r=n?.bag[t];r&&(n.bag.splice(t,1),this.send(e,`notice`,{text:`Threw away the ${G[r].name}.`}))}giveGold(e,t,n){let r=this.state.players.get(e);!r||t<=0||(r.gold=Math.min(vf,(r.gold??0)+t),this.send(e,`gold`,{amount:t,from:n}))}shopBlocker(e){let t=this.movers.get(e),n=cd.merchant;return Math.hypot(t.x-n.x,t.z-n.z)>3.7?`Hilde's shop is on the plaza, to the right of the Crown Plinth.`:null}buyItem(e,t){let n=this.state.players.get(e);if(!n||!Cu(t))return;let r=this.shopBlocker(e)??(n.bag.length>=24?`Your bag is full.`:(n.gold??0)<xu(t)?`The ${G[t].name} costs ${xu(t)} gold.`:null);r?this.send(e,`notice`,{text:r}):(n.gold-=xu(t),n.bag.push(t),this.send(e,`notice`,{text:`Bought the ${G[t].name} for ${xu(t)} gold.`}))}sellItem(e,t){let n=this.state.players.get(e),r=n?.bag[t];if(!r)return;let i=this.shopBlocker(e);i?this.send(e,`notice`,{text:i}):(n.bag.splice(t,1),n.gold=Math.min(vf,(n.gold??0)+Su(r)),this.send(e,`notice`,{text:`Sold the ${G[r].name} for ${Su(r)} gold.`}))}command(e,t){let n=this.state.players.get(e),[r,i,a]=t.slice(1).trim().toLowerCase().split(/\s+/),o=t=>this.send(e,`notice`,{text:t});if(!this.secrets){o(`Commands are turned off on this server.`);return}if(r===`rc`){let t=this.movers.get(e);t.cds={},t.gcd=0,this.send(e,`cooldownsReset`,{}),o(`Cooldowns reset.`);return}if(r===`spawn`){if(!Td[i]){o(`/spawn <kind> [count]. Kinds: ${Object.keys(Td).join(`, `)}`);return}let t=this.movers.get(e),n=Math.min(12,Math.max(1,Math.floor(Number(a))||1));for(let e=0,r=0;e<n&&r<60;r++){let n=Math.random()*Math.PI*2,r=3+Math.random()*3,a=t.x+Math.cos(n)*r,o=t.z+Math.sin(n)*r;hd(a,o,Td[i].radius)&&(this.spawnMonster({id:`spawned${++this.spawnSeq}`,kind:i,x:a,z:o,once:!0}),e++)}return}if(r===`gold`){let t=Math.floor(Number(i))||1e3;t>0&&this.giveGold(e,Math.min(t,vf));return}if(r===`give`){if(G[i]){this.giveItem(e,i);return}o(`/give <item>. For you: ${Object.keys(G).filter(e=>!G[e].for||G[e].for===n.occ||G[e].for===n.job).join(`, `)}`);return}if(r!==`level`&&r!==`levelup`&&r!==`lv`){o(`Commands: /level <1-30> goes up to that level, /levelup goes up one, /give <item> gives an item, /gold <n> gives gold, /spawn <kind> [count] brings monsters, /rc resets cooldowns.`);return}let s=r===`levelup`||!i?n.level+1:Math.min(30,Math.floor(Number(i)));if(!(s>n.level)){o(`You are already Lv ${n.level}.`);return}let c=this.classGate(n);if(c&&n.exp>=n.expNext){o(c);return}let l=-n.exp;for(let e=n.level;e<s;e++)l+=Ku(e);n.exp+=l,n.wisdom=Math.min(ou,n.wisdom+l),this.levelUp(e)}changeJob(e,t){let n=this.state.players.get(e),r=this.movers.get(e);if(!n||!r)return;let i=cd.oathkeeper;if(Math.hypot(r.x-i.x,r.z-i.z)>2.7){this.send(e,`notice`,{text:`Walk up to the Oathkeeper first.`});return}let a=lu(n,t);if(a){this.send(e,`notice`,{text:a});return}n.job=t,this.broadcast(`levelup`,{id:e,level:n.level,job:t}),this.broadcast(`system`,{text:`${n.name} swore the oath and became a ${Yl[t].name}!`});let o=uu(n,15);this.send(e,`notice`,{text:`New skill${o.length>1?`s`:``} to learn from the Wise Man: ${o.map(e=>e.name).join(`, `)}.`}),this.levelUp(e)}engage(e,t){let n=this.movers.get(e),r=this.state.players.get(e);if(!n||!r)return;let i=typeof t==`string`?this.mobs.get(t):null;if(i&&(i.deadAt!==null||Math.hypot(i.x-n.x,i.z-n.z)>yf)&&(i=null),!i&&!t&&(i=this.nearestMob(n.x,n.z,9)),!i){if(Date.now()-n.lastAct<600)return;n.lastAct=Date.now(),this.broadcast(`act`,{id:e,kind:`attack`})}else n.pendingCast=null,n.combat!==i.id&&(n.combat=i.id,r.target=i.id,n.steer=null,n.path=[],n.repath=0,n.nextSwing=Math.max(n.nextSwing,this.time))}walkToCast(e,t,n,r){let i=this.movers.get(e),a=this.state.players.get(e);this.disengage(e),i.steer=null,i.pendingCast={skill:t,msg:n,mob:r.id,until:this.time+10},i.path=Sd(i.x,i.z,r.x,r.z),i.repath=this.time+.3,a.target=r.id}tickPendingCast(e,t){let n=t.pendingCast,r=this.state.players.get(e),i=this.mobs.get(n.mob),a=ru(eu(r.occ,n.skill).use.range,r.skills.get(n.skill)??1),o=i?Math.hypot(i.x-t.x,i.z-t.z):1/0;if(!i||i.deadAt!==null||this.time>n.until||o>yf)t.pendingCast=null,t.path=[],t.combat||(r.target=``);else if(o<=a+i.def.radius-.1){if(t.path=[],this.time<t.gcd)return;t.pendingCast=null,Pd(this,e,n.skill,n.msg),t.combat||(r.target=``)}else this.time>=t.repath&&(t.repath=this.time+.3,t.path=Sd(t.x,t.z,i.x,i.z))}partyMembers(e){let t=this.state.players.get(e);return t?.party&&this.parties.get(t.party)?.members||[e]}partyNear(e,t){let n=ad(t.x,t.z);return this.partyMembers(e).filter(r=>{let i=this.movers.get(r);return r===e||i&&ad(i.x,i.z)===n&&Math.hypot(i.x-t.x,i.z-t.z)<=Sf})}tellParty(e,t){for(let n of this.parties.get(e)?.members??[])this.send(n,`notice`,{text:t})}partyInvite(e,t){let n=this.state.players.get(e),r=this.state.players.get(t),i=this.movers.get(t),a=t=>this.send(e,`notice`,{text:t});if(n&&r&&t!==e){if(n.party&&n.party===r.party)return a(`${r.name} is already in your party.`);if(r.party)return a(`${r.name} is in another party.`);if(this.partyMembers(e).length>=xf)return a(`A party holds ${xf} at most.`);(i.invites??=new Map).set(e,this.time+wf),this.send(t,`partyInvite`,{from:e,name:n.name}),a(`You invited ${r.name} to your party.`)}}partyAnswer(e,t,n){let r=this.state.players.get(e),i=this.movers.get(e),a=this.state.players.get(t),o=i?.invites?.get(t);i?.invites?.delete(t),!r||!a||!o||this.time>o?r&&this.send(e,`notice`,{text:`That invite has run out.`}):n?(r.party&&this.leaveParty(e),this.partyMembers(t).length>=xf?this.send(e,`notice`,{text:`${a.name}'s party is full.`}):(a.party||(a.party=`party${++this.partySeq}`,this.parties.set(a.party,{members:[t]})),this.parties.get(a.party).members.push(e),r.party=a.party,this.tellParty(r.party,`${r.name} joined the party.`))):this.send(t,`notice`,{text:`${r.name} turned down your party invite.`})}leaveParty(e){let t=this.state.players.get(e),n=t?.party&&this.parties.get(t.party);if(!n)return;let r=t.party;if(n.members=n.members.filter(t=>t!==e),t.party=``,this.send(e,`notice`,{text:`You left the party.`}),this.tellParty(r,`${t.name} left the party.`),n.members.length<=1){for(let e of n.members){let t=this.state.players.get(e);t&&(t.party=``),this.send(e,`notice`,{text:`The party broke up.`})}this.parties.delete(r)}}disengage(e){let t=this.movers.get(e),n=this.state.players.get(e);t&&(t.combat=null),n&&(n.target=``)}nearestMob(e,t,n,r=()=>!0){let i=null,a=n;for(let n of this.mobs.values()){if(n.deadAt!==null||!r(n))continue;let o=Math.hypot(n.x-e,n.z-t);o<a&&(i=n,a=o)}return i}tickCombat(e,t){let n=this.mobs.get(t.combat);if(!n||n.deadAt!==null){if(n=this.nearestMob(t.x,t.z,9,t=>t.target===e),!n){this.disengage(e);return}t.combat=n.id,this.state.players.get(e).target=n.id}let r=this.state.players.get(e),i=Math.hypot(n.x-t.x,n.z-t.z);i>yf?this.disengage(e):i<=Wl(r)+n.def.radius&&(!this.inTown(t)||this.inTown(n))?(t.path=[],t.dir=Math.atan2(n.x-t.x,n.z-t.z),t.dash&&(t.dash.mob===n.id&&(n.rootUntil=Math.max(n.rootUntil,this.time+t.dash.root)),this.endDash(t)),this.time>=t.nextSwing&&(t.nextSwing=this.time+Ul[r.occ].every*t.derived.swingMul,this.broadcast(`act`,{id:e,kind:`attack`}),this.hurtMonster(n,this.rollFor(t),e))):this.time>=t.repath&&(t.repath=this.time+.3,t.path=Sd(t.x,t.z,n.x,n.z))}spawnMonster(e){let t=Td[e.kind],n=this.newMonster(),r=Math.random()*Math.PI*2;Object.assign(n,{kind:e.kind,level:t.level,x:e.x,z:e.z,dir:r,moving:!1,hp:t.hp,hpMax:t.hp}),this.state.monsters.set(e.id,n),this.mobs.set(e.id,{id:e.id,spawn:e,def:t,s:n,x:e.x,z:e.z,dir:r,moving:!1,path:[],steer:null,speed:t.speed*.5,target:null,homing:!1,nextThink:this.time+Math.random()*3,nextSwing:0,repath:0,deadAt:null,tagged:new Set,stunUntil:0,stunKind:`stun`,rootUntil:0,tauntUntil:0,evadeUntil:0,slowUntil:0,slowPct:0})}tickMonster(e,t){let{def:n,s:r,spawn:i}=e;if(e.deadAt!==null){if(this.time-e.deadAt>mf&&this.state.monsters.has(e.id)&&this.state.monsters.delete(e.id),i.once){this.time-e.deadAt>mf&&this.mobs.delete(e.id);return}this.time-e.deadAt>(n.respawn??14)&&this.spawnMonster(i);return}let a=this.time<e.stunUntil,o=this.time<e.rootUntil,s=this.time<e.slowUntil;if(s||(e.slowPct=0),r.status=a?e.stunKind:o?`root`:s?`slow`:``,a){e.path=[],e.moving=!1,r.moving=!1;return}let c=this.time<e.tauntUntil&&this.movers.has(e.target);if(!e.target&&!e.homing&&n.aggro>0){for(let[t,r]of this.movers)if(Math.hypot(r.x-e.x,r.z-e.z)<n.aggro&&!this.inTown(r)){e.target=t;break}}let l=e.target&&this.foe(e.target),u=Math.hypot(e.x-i.x,e.z-i.z)>33&&!c;if(e.target&&(!l||this.inTown(l)||u)&&this.evade(e),e.target){if(e.speed=n.speed,Math.hypot(l.x-e.x,l.z-e.z)<=n.attackRange){if(e.path=[],e.dir=Math.atan2(l.x-e.x,l.z-e.z),this.time>=e.nextSwing&&(e.nextSwing=this.time+n.attackEvery,this.broadcast(`act`,{id:e.id,kind:`attack`,mob:!0}),this.pets.has(e.target)?this.hurtPet(this.pets.get(e.target),Tf(n.dmg),e):this.hurtPlayer(e.target,Tf(n.dmg),e),n.splash)){this.broadcast(`fx`,{kind:`slam`,x:+l.x.toFixed(2),z:+l.z.toFixed(2),r:n.splash});for(let[t,r]of this.movers)t!==e.target&&Math.hypot(r.x-l.x,r.z-l.z)<=n.splash&&this.hurtPlayer(t,Math.round(Tf(n.dmg)*.6),e)}}else this.time>=e.repath&&(e.repath=this.time+.4,e.path=Sd(e.x,e.z,l.x,l.z))}else if(e.homing)e.speed=n.speed,!e.path.length&&this.time>=e.evadeUntil&&(e.homing=!1,r.hp=r.hpMax,e.tagged.clear());else if(this.time>=e.nextThink){e.speed=n.speed*.5,e.nextThink=this.time+2.5+Math.random()*4;let t=Math.random()*Math.PI*2,r=Math.random()*n.wander,a={x:i.x+Math.cos(t)*r,z:i.z+Math.sin(t)*r};Math.random()<.7&&!this.inTown(a)&&(e.path=Sd(e.x,e.z,a.x,a.z).slice(0,3))}o&&(e.path=[]);let d=e.speed;s&&(e.speed=d*(1-e.slowPct/100)),Cd(e,t),e.speed=d,this.separate(e,t),r.x=e.x,r.z=e.z,r.dir=e.dir,r.moving=e.moving}separate(e,t){for(let n of this.mobs.values()){if(n===e||n.deadAt!==null)continue;let r=e.x-n.x,i=e.z-n.z,a=Math.hypot(r,i),o=e.def.radius+n.def.radius;if(a>=o)continue;let s=Math.min(o-a,2*t)/Math.max(a,.001),c=a<.001?2*t:r*s,l=a<.001?0:i*s;hd(e.x+c,e.z+l,.3)&&(e.x+=c,e.z+=l)}}evade(e){e.target=null,e.homing=!0,e.tauntUntil=0,e.evadeUntil=this.time+_f,e.path=Sd(e.x,e.z,e.spawn.x,e.spawn.z)}inTown(e){return Math.max(Math.abs(e.x-Qu.x),Math.abs(e.z-Qu.z))<hf}playerAttack(e,t){let n=this.state.players.get(e);if(!n)return;let r=Wl(n),i=Math.sin(t.dir),a=Math.cos(t.dir),o=null,s=1/0;for(let e of this.mobs.values()){if(e.deadAt!==null)continue;let n=e.x-t.x,c=e.z-t.z,l=Math.hypot(n,c);if(l>r+e.def.radius)continue;let u=l+((l<.01?1:(n*i+c*a)/l)<gf?3:0);u<s&&(o=e,s=u)}o&&(t.moving||(t.dir=Math.atan2(o.x-t.x,o.z-t.z)),this.hurtMonster(o,this.rollFor(t),e))}hurtMonster(e,{dmg:t,crit:n},r,{from:i,source:a}={}){let{s:o}=e,s=this.movers.get(r),c=i??s;if(c&&this.inTown(c))this.broadcast(`hit`,{id:e.id,by:r,dmg:0,evade:!0,mob:!0}),!i&&s&&this.inTown(s)&&this.time-(s.townWarn??-99)>4&&(s.townWarn=this.time,this.send(r,`castFail`,{skill:``,why:`Monsters evade attacks from inside Oathgate. Step off the plaza to fight.`})),e.homing||this.evade(e);else if(e.homing&&(e.homing=!1,e.target=null,e.path=[]),o.hp=Math.max(0,o.hp-t),e.tagged.add(r),s?.frostEdge&&this.slowMob(e,s.frostEdge.pct,3),this.broadcast(`hit`,{id:e.id,by:r,dmg:t,crit:n,mob:!0}),o.hp===0){Object.assign(e,{deadAt:this.time,path:[],moving:!1,target:null,homing:!1}),o.moving=!1;let t=this.state.players.get(r);this.broadcast(`system`,{text:`${t?.name??`Someone`} defeated a ${e.def.name}.`});let n=new Set;for(let t of e.tagged){let r=this.state.players.get(t);if(!r)continue;let i=this.partyNear(t,e);for(let t of i){if(n.has(t))continue;n.add(t);let r=this.state.players.get(t);this.grantExp(t,Math.round(qu(e.def,r.level)*(1+Cf*(i.length-1))/i.length))}this.giveGold(t,ju(e.s.kind),e.def.name);for(let n of Iu(e.def,e.s.kind,r))this.giveItem(t,n,e.def.name)}}else(!e.target||a&&e.target===r)&&(e.target=a??r,e.homing=!1)}hurtPlayer(e,t,n){let r=this.state.players.get(e),i=this.movers.get(e);if(!r||!i)return;let a=Xu(t,i.derived.def+(i.shield||0)+(i.aura?.def??0));i.lastHurt=this.time;let o=r.skills.get(`runic_parry`)??0;if(o&&Math.random()<.05*o){r.res=Math.min(r.resMax,r.res+5),this.broadcast(`absorb`,{id:e,amount:0,parry:!0});return}if(i.manaShield&&r.res>0){let t=Math.min(r.res,Math.round(a*i.manaShield.pct/100));if(r.res-=t,a-=t,t&&this.broadcast(`absorb`,{id:e,amount:t,mana:!0}),!a)return}if(a>=r.hp&&r.mount){let t=tf[r.horse];this.broadcast(`hit`,{id:e,by:n.id,dmg:a}),this.dismount(e),this.broadcast(`fx`,{kind:`horse_fall`,x:+i.x.toFixed(2),z:+i.z.toFixed(2),coat:r.horse}),r.horse=``,r.hp=Math.max(1,Math.round(r.hpMax/2)),r.res=Math.round(r.resMax/2),this.send(e,`notice`,{text:`${t.unicorn?`Takoyaki the unicorn`:`Your ${t.name.toLowerCase()} horse`} fell in your place. Tame another in the Ashen Reach's meadow.`});return}if(r.hp=Math.max(0,r.hp-a),this.broadcast(`hit`,{id:e,by:n.id,dmg:a}),r.hp>0&&!i.combat&&!i.path.length&&!i.steer&&!i.channel&&!i.pendingCast&&!i.dash&&this.mobs.has(n.id)&&!this.inTown(i)&&this.engage(e,n.id),i.channel?.pulse&&(i.channel.pulse.next+=i.channel.pulse.pause),r.hp>0)return;let s=gd();this.disengage(e),i.dash&&this.endDash(i),i.channel=null,i.edge=null,i.frostEdge=null,i.manaShield=null,this.dismount(e),this.setSpeed(i),Object.assign(i,{x:s.x,z:s.z,path:[],steer:null,moving:!1,shield:0}),r.shield=0,Object.assign(r,{x:s.x,z:s.z,moving:!1,hp:r.hpMax}),this.send(e,`respawn`,{x:s.x,z:s.z});for(let t of this.mobs.values())t.target===e&&this.evade(t);this.dismissPets(e),this.broadcast(`system`,{text:`${r.name} was struck down by a ${n.def.name} and wakes at the Crown Plinth.`})}};Object.assign(Of.prototype,ef,of);var kf={partyInvite(e,t,n){typeof n?.target==`string`&&e.partyInvite(t,n.target)},partyAnswer(e,t,n){typeof n?.from==`string`&&e.partyAnswer(t,n.from,!!n.yes)},partyLeave(e,t){e.leaveParty(t)},move(e,t,n){let r=e.movers.get(t);if(!r||!Number.isFinite(n?.x)||!Number.isFinite(n?.z)||r.channel&&!r.channel.walk)return;r.pendingCast=null;let i=wd(n.x,n.z);e.disengage(t),r.steer=null,r.path=Sd(r.x,r.z,i.x,i.z)},steer(e,t,n){let r=e.movers.get(t);if(!r||r.channel&&!r.channel.walk)return;let i=Number(n?.x)||0,a=Number(n?.z)||0,o=Math.hypot(i,a);o>.01&&e.disengage(t),r.path=[],o>.01&&(r.pendingCast=null),r.steer=o>.01?{x:i/o,z:a/o}:null},chat(e,t,n){let r=e.movers.get(t),i=String(n?.text??``).replace(/[\u0000-\u001f]/g,``).trim().slice(0,uf),a=Date.now();if(!r||!i||a-r.lastChat<400)return;if(r.lastChat=a,i.startsWith(`/`)){e.command(t,i);return}let o=e.state.players.get(t);e.broadcast(`chat`,{id:t,name:o.name,text:i})},act(e,t,n){let r=e.movers.get(t),i=Date.now();!r||!df.has(n?.kind)||i-r.lastAct<600||(r.lastAct=i,e.broadcast(`act`,{id:t,kind:n.kind},{except:t}),n.kind===`attack`&&e.playerAttack(t,r))},engage:(e,t,n)=>e.engage(t,n?.target),disengage:(e,t)=>e.disengage(t),cast:(e,t,n)=>Pd(e,t,String(n?.skill??``),n??{}),changeJob:(e,t,n)=>e.changeJob(t,String(n?.job??``)),equip:(e,t,n)=>{Number.isInteger(n?.at)&&e.equipItem(t,n.at)},unequip:(e,t,n)=>e.unequipItem(t,String(n?.slot??``)),discard:(e,t,n)=>{Number.isInteger(n?.at)&&e.discardItem(t,n.at)},buy:(e,t,n)=>e.buyItem(t,String(n?.item??``)),sell:(e,t,n)=>{Number.isInteger(n?.at)&&e.sellItem(t,n.at)},learn(e,t,n){let r=e.state.players.get(t),i=e.movers.get(t),a=String(n?.skill??``);if(!r||!i)return;let o=cd.wiseman;if(Math.hypot(i.x-o.x,i.z-o.z)>3.7){e.send(t,`notice`,{text:`Skills are learned from the Wise Man by the Crown Plinth.`});return}let s=cu(r,a);if(s){e.send(t,`notice`,{text:s});return}let c=eu(r.occ,a),l=(r.skills.get(a)??0)+1;r.wisdom-=au(c,l),r.skills.set(a,l),e.recompute(t),e.send(t,`notice`,{text:`${c.name} is now rank ${l}.`})}},Af=`modulepreload`,jf=function(e,t){return new URL(e,t).href},Mf={},Nf=function(e){return e.pathname.endsWith(`.css`)},Pf=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ff=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=jf(t,n);let r=s(t),i=Nf(r);return Pf(Mf,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Af,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},If=`ninefold-crown-v1-`,Lf=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`,Rf=2e3,zf=8e3;async function Bf(e,t){let{Client:n,Callbacks:r}=await Ff(async()=>{let{Client:e,Callbacks:t}=await import(`./build-DONUU1-K.js`);return{Client:e,Callbacks:t}},__vite__mapDeps([0,1]),import.meta.url),i=await new n(e).joinOrCreate(`world`,t),a=r.get(i);return{sessionId:i.sessionId,code:null,send:(e,t)=>i.send(e,t),onMessage:(e,t)=>i.onMessage(e,t),onLeave:e=>i.onLeave(t=>e(`The server closed the connection (code ${t}).`)),onAdd:(e,t)=>a.onAdd(e,t),onChange:(e,t)=>{a.onChange(e,t);for(let n of[`bag`,`equip`,`skills`])e[n]&&(a.onChange(e,n,()=>t()),a.onRemove(e,n,()=>t()))},onRemove:(e,t)=>a.onRemove(e,t),async ping(){let t=performance.now();try{return(await fetch(e.replace(/^ws/,`http`)+`/health`,{cache:`no-store`})).ok?performance.now()-t:null}catch{return null}}}}function Vf(){let e={players:new Map,monsters:new Map},t={players:{add:[],remove:[]},monsters:{add:[],remove:[]}},n=new WeakMap,r=(r,i)=>{let a=e[r];for(let[e,o]of Object.entries(i??{})){let i=a.get(e);if(o===null){if(!i)continue;a.delete(e);for(let n of t[r].remove)n(i,e);continue}let s=i??{skills:new Map,equip:new Map,bag:[]};for(let[e,t]of Object.entries(o))if(s[e]instanceof Map){s[e].clear();for(let[n,r]of Object.entries(t))s[e].set(n,r)}else s[e]=t;if(i)for(let e of n.get(i)??[])e();else{a.set(e,s);for(let n of t[r].add)n(s,e)}}};return{colls:e,apply(e){r(`players`,e.p),r(`monsters`,e.m)},onAdd(n,r){t[n].add.push(r);for(let[t,i]of e[n])r(i,t)},onRemove(e,n){t[e].remove.push(n)},onChange(e,t){n.has(e)||n.set(e,[]),n.get(e).push(t)}}}function Hf(){let e=new Map;return{on(t,n){e.has(t)||e.set(t,[]),e.get(t).push(n)},emit(t,n){for(let r of e.get(t)??[])r(n)}}}var Uf=e=>typeof e==`number`&&!Number.isInteger(e)?Math.round(e*1e3)/1e3:e;function Wf(e){let t={};for(let[n,r]of Object.entries(e))t[n]=r instanceof Map?Object.fromEntries(r):Array.isArray(r)?[...r]:Uf(r);return t}function Gf(e,t){let n={};for(let[r,i]of Object.entries(t)){let t=e[r];if(!t){n[r]=i;continue}let a=null;for(let e in i)(typeof i[e]==`object`?JSON.stringify(i[e])===JSON.stringify(t[e]):i[e]===t[e])||((a??={})[e]=i[e]);a&&(n[r]=a)}for(let r in e)t[r]||(n[r]=null);return n}var Kf=()=>({name:``,occ:``,job:``,sex:``,level:1,x:0,z:0,dir:0,moving:!1,hp:0,hpMax:0,res:0,resMax:0,target:``,exp:0,expNext:0,wisdom:0,gold:0,str:0,int:0,skills:new Map,equip:new Map,bag:[],shield:0,title:``,subtitle:``,mount:``,horse:``,party:``}),qf=()=>({kind:``,level:0,x:0,z:0,dir:0,moving:!1,hp:0,hpMax:0,status:``,owner:``,coat:``});function Jf(e){try{let t=new Worker(URL.createObjectURL(new Blob([`setInterval(() => postMessage(0), 50);`],{type:`text/javascript`})));return t.onmessage=e,()=>t.terminate()}catch{let t=setInterval(e,50);return()=>clearInterval(t)}}var Yf=async()=>(await Ff(async()=>{let{Peer:e}=await import(`./bundler-BvtR3xrj.js`);return{Peer:e}},__vite__mapDeps([2,1]),import.meta.url)).Peer,Xf=()=>Array.from({length:4},()=>Lf[Math.floor(Math.random()*32)]).join(``),Zf=()=>Math.random().toString(36).slice(2,11);async function Qf(e,{online:t=!1,dev:n=!1,onStatus:r=()=>{}}={}){let i=`h`+Zf(),a=Vf(),o=Hf(),s=new Map,c=(e,t,n)=>{e===i?queueMicrotask(()=>o.emit(t,n)):s.get(e)?.conn.send({t:`m`,type:t,msg:n})},l=new Of({state:{players:new Map,monsters:new Map},newPlayer:Kf,newMonster:qf,send:c,broadcast:(e,t,{except:n}={})=>{n!==i&&c(i,e,t);for(let r of s.keys())r!==n&&c(r,e,t)},log:e=>console.log(e),restores:!0,secrets:n}),u={p:{},m:{}},d=u,f=()=>{let e={},t={};for(let[t,n]of l.state.players)e[t]=Wf(n);for(let[e,n]of l.state.monsters)t[e]=Wf(n);return{p:e,m:t}},p=()=>{l.tick(50/1e3),d=f();let e={p:Gf(u.p,d.p),m:Gf(u.m,d.m)};u=d,a.apply(e);for(let t of s.values())t.ready&&t.conn.send({t:`s`,d:e})};l.join(i,e),p();let m=Jf(p),h=null,g=null,_=()=>r(g?`Room ${g} · ${l.state.players.size}/4`:`Solo`);if(t){let e=await Yf();for(let t=0;!h&&t<5;t++)g=Xf(),h=await new Promise((t,n)=>{let r=new e(If+g);r.on(`open`,()=>t(r)),r.on(`error`,e=>{e.type===`unavailable-id`?(r.destroy(),t(null)):n(Error(`Could not open the room (${e.type}). Are you online?`))})}).catch(e=>{throw m(),e});if(!h)throw m(),Error(`Could not find a free room code. Try again.`);h.on(`connection`,e=>{let t=null;e.on(`data`,r=>{if(r&&typeof r==`object`){if(t&&s.has(t)&&(s.get(t).seen=performance.now()),r.t===`hello`&&!t){if(l.state.players.size>=4){e.send({t:`full`}),setTimeout(()=>e.close(),300);return}t=`g`+Zf(),s.set(t,{conn:e,ready:!1,seen:performance.now(),gone:null}),e.send({t:`welcome`,id:t}),l.join(t,r.options??{}),e.send({t:`s`,d}),s.get(t).ready=!0,_()}else r.t===`m`&&t&&typeof r.type==`string`?l.message(t,r.type,r.msg):r.t===`bye`?n():r.t===`ping`&&e.send({t:`pong`,n:r.n})}});let n=()=>{if(t&&s.has(t)){s.delete(t),l.leave(t),_();try{e.close()}catch{}}},r=setInterval(()=>{let e=t&&s.get(t);e?performance.now()-e.seen>zf&&(clearInterval(r),n()):t&&clearInterval(r)},1e3);e.on(`close`,n),e.on(`error`,n)}),h.on(`disconnected`,()=>{try{h.reconnect()}catch{}})}return _(),addEventListener(`pagehide`,()=>{for(let e of s.values())try{e.conn.send({t:`bye`}),e.conn.close()}catch{}}),{sessionId:i,code:g,send:(e,t)=>l.message(i,e,t),onMessage:o.on,onLeave:()=>{},onAdd:a.onAdd,onChange:a.onChange,onRemove:a.onRemove,ping:async()=>null}}async function $f(e,t){if(e=String(e??``).trim().toUpperCase(),!/^[A-Z0-9]{4}$/.test(e))throw Error(`Enter the 4-letter room code from your friend.`);let n=await Yf(),r=Vf(),i=Hf(),a=()=>{},o=0,s=0,c=null,l=!1,u=!1,d=performance.now(),f=null,p=()=>{if(!l){l=!0,clearInterval(f);try{h.close(),m.destroy()}catch{}u&&a(`The host ended the session (or the connection dropped).`)}},m=await new Promise((e,t)=>{let r=new n;r.on(`open`,()=>e(r)),r.on(`error`,e=>{r.destroy(),t(Error(`Network error (${e.type}). Are you online?`))})}),h=m.connect(If+e,{reliable:!0}),g=await new Promise((n,a)=>{let l=e=>{clearTimeout(f),p(),a(Error(e))},f=setTimeout(()=>l(`No answer from room ${e}.`),15e3);m.on(`error`,t=>{u||l(t.type===`peer-unavailable`?`No room with code ${e}. Check the code and try again.`:`Network error (${t.type}).`)}),h.on(`open`,()=>h.send({t:`hello`,options:t})),h.on(`data`,t=>{t&&typeof t==`object`&&(d=performance.now(),t.t===`welcome`?(clearTimeout(f),u=!0,n(t.id)):t.t===`full`?l(`Room ${e} is full (4 players).`):t.t===`s`?r.apply(t.d):t.t===`m`?i.emit(t.type,t.msg):t.t===`pong`&&t.n===o?c=performance.now()-s:t.t===`bye`&&p())})});return f=setInterval(()=>{performance.now()-d>zf?p():h.open&&h.send({t:`hb`})},Rf),h.on(`close`,p),h.on(`error`,p),addEventListener(`pagehide`,()=>{try{h.send({t:`bye`})}catch{}}),{sessionId:g,code:e,send:(e,t)=>{h.open&&h.send({t:`m`,type:e,msg:t})},onMessage:i.on,onLeave:e=>{a=e},onAdd:r.onAdd,onChange:r.onChange,onRemove:r.onRemove,async ping(){let e=c;return s=performance.now(),h.open&&h.send({t:`ping`,n:++o}),e}}}var ep=new yi({color:0,transparent:!0,opacity:.35}),tp=new Map;function np(e,t=0){let n=e+`:`+t;return tp.has(n)||tp.set(n,new aa({color:e,emissive:t,emissiveIntensity:+!!t,flatShading:!0})),tp.get(n)}function K(e,t,n,r,{x:i=0,y:a=0,z:o=0,rx:s=0,ry:c=0,rz:l=0,emissive:u=0,edges:d=!0}={}){let f=new Ii(e,t,n),p=new V(f,np(r,u));return p.position.set(i,a,o),p.rotation.set(s,c,l),p.castShadow=!0,p.receiveShadow=!0,d&&p.add(new ji(new Wi(f),ep)),p}function q(e=0,t=0,n=0,...r){let i=new kn;return i.position.set(e,t,n),r.forEach(e=>i.add(e)),i}function rp(e){let t=new kn,n=q(0,e.legH,0);t.add(n);let r=q();n.add(r);let i=(e,t,n,r,i,a,o,s,c)=>{let l=q(e,t,0,K(n,r,i,a,{y:-r/2}));return o&&l.add(K(n+.02,o,i+.04,s,{y:-r+o/2-.01})),c.add(l),l},a=i(-e.hipX,0,e.legW,e.legH,e.legD,e.c.legs,.16,e.c.boots,n),o=i(e.hipX,0,e.legW,e.legH,e.legD,e.c.legs,.16,e.c.boots,n);r.add(K(e.torsoW,e.torsoH,e.torsoD,e.c.torso,{y:e.torsoH/2}));let s=e.torsoH-.05,c=e.torsoW/2+e.armW/2,l=i(-c,s,e.armW,e.armH,e.armW,e.c.arms,.14,e.c.skin,r),u=i(c,s,e.armW,e.armH,e.armW,e.c.arms,.14,e.c.skin,r),d=q(0,e.torsoH,0,K(e.head,e.head,e.head,e.c.skin,{y:e.head/2})),f=e.sex===`f`;if(e.eyes!==!1)for(let t of[-1,1])d.add(K(.07,f?.1:.08,.02,1709072,{x:t*e.head*.2,y:e.head*.55,z:e.head/2+.01,edges:!1})),f&&(d.add(K(.04,.025,.02,1709072,{x:t*(e.head*.2+.05),y:e.head*.55+.05,z:e.head/2+.01,edges:!1})),d.add(K(.07,.035,.02,14715514,{x:t*(e.head*.27),y:e.head*.36,z:e.head/2+.01,edges:!1})));if(r.add(d),f){r.scale.x=.86,d.scale.x=1/.86;for(let e of[a,o])e.scale.x=.88,e.position.x*=.85}let p=[];return{root:t,hips:n,torso:r,head:d,armL:l,armR:u,legL:a,legR:o,d:e,hands:p,hand:t=>{let n=q(0,-e.armH,0);return t.add(n),p.push(n),n}}}var ip={legH:.6,legW:.26,legD:.28,hipX:.15,torsoW:.64,torsoH:.68,torsoD:.44,head:.48,armW:.22,armH:.68},ap=e=>({...ip,sex:e}),op=ip.head;function sp(e,t,{len:n=.55,locks:r=!0,bangs:i=!0,lockLen:a=.5}={}){if(e.add(K(.54,n,.12,t,{y:op-.02-n/2+.06,z:-.24})),r)for(let n of[-1,1])e.add(K(.1,a,.2,t,{x:n*.27,y:op*.9-a/2,z:.05})),e.add(K(.1,.12,.3,t,{x:n*.27,y:op*.9,z:-.02}));i&&e.add(K(.5,.1,.06,t,{y:op*.86,z:.24}))}function cp(e,t,{y:n=op+.04,tie:r=3023384}={}){e.add(K(.14,.1,.14,r,{y:n,z:-.2})),e.add(K(.18,.26,.16,t,{y:n+.1,z:-.3,rx:-.7})),e.add(K(.17,.42,.15,t,{y:n-.14,z:-.45,rx:.25})),e.add(K(.13,.2,.12,t,{y:n-.44,z:-.52,rx:.45}));for(let n of[-1,1])e.add(K(.08,.3,.12,t,{x:n*.27,y:op*.55,z:.1}))}function lp(e,t,n){for(let n=0;n<4;n++)e.add(K(.13-n*.012,.15,.12,t,{y:op*.35-n*.15,z:-.32-n*.02,rz:n%2?.12:-.12}));e.add(K(.1,.06,.1,n,{y:op*.35-.62,z:-.4}))}function up(e=`m`){let t={steel:9082536,dark:5068130,gold:13214266,red:10169131,skin:14726284,wood:7031339};e===`f`&&Object.assign(t,{steel:10131108,dark:5917266,red:10504794});let n=rp({...ap(e),c:{legs:t.dark,boots:t.steel,torso:t.steel,arms:t.steel,skin:t.skin}});n.torso.add(K(.68,.12,.48,t.gold,{y:.06})),n.torso.add(K(.36,.5,.04,t.red,{y:-.1,z:.25})),n.torso.add(K(.1,.28,.02,t.gold,{y:.4,z:.23}));for(let e of[n.armL,n.armR])e.add(K(.36,.2,.5,t.steel,{y:.04})),e.add(K(.38,.05,.52,t.gold,{y:-.06}));let r=ip.head;if(e===`f`){sp(n.head,6960152,{len:.4,bangs:!1,lockLen:.36}),n.head.add(K(.56,.2,.56,t.steel,{y:r+0})),n.head.add(K(.58,.05,.58,t.gold,{y:r-.1}));for(let e of[-1,1])n.head.add(K(.06,.28,.3,t.steel,{x:e*.29,y:r*.62,z:.08}));n.head.add(K(.1,.22,.36,t.red,{y:r+.2,z:.04})),cp(n.head,6960152,{y:r+.12,tie:t.gold})}else n.head.add(K(.54,.36,.54,t.steel,{y:r-.08})),n.head.add(K(.4,.06,.02,1118481,{y:r*.62,z:.28,edges:!1})),n.head.add(K(.1,.28,.44,t.red,{y:r+.22}));let i=q(0,0,0,K(.08,.26,.08,t.wood),K(.36,.06,.1,t.gold,{y:.15}),K(.1,1,.04,14212579,{y:.68}));i.rotation.x=Math.PI/2,n.hand(n.armR).add(i);let a=q(-.17,-.42,.05,K(.06,.84,.7,t.steel),K(.08,.74,.6,t.red,{x:-.02}),K(.03,.3,.3,t.gold,{x:-.07,rx:Math.PI/4}));return n.armL.add(a),n.armR.rotation.x=-.25,{...n,name:`Vanguard`,sub:`Warrior line`,attack:`swing`,baseArmR:-.25}}function dp(e=`m`){let t={robe:3878266,trim:9403368,hat:2760540,legs:2300490,gold:13214266,skin:14726284,wood:5913375};e===`f`&&Object.assign(t,{robe:5779534,trim:13208224,hat:4071992,legs:3021352});let n=rp({...ap(e),c:{legs:t.legs,boots:2826264,torso:t.robe,arms:t.robe,skin:t.skin}});n.legSwing=.3,n.torso.add(K(.68,.5,.48,t.robe,{y:-.22})),n.torso.add(K(.7,.06,.5,t.trim,{y:-.46})),n.torso.add(K(.1,.9,.02,t.trim,{y:.1,z:.25})),e===`f`?sp(n.head,14209766,{len:.75,bangs:!1,lockLen:.8}):n.head.add(K(.3,.16,.06,12433066,{y:.08,z:.25}));let r=ip.head,i=q(0,r,0,K(.82,.06,.82,t.hat,{y:0}),K(.5,.08,.5,t.gold,{y:.07}),K(.48,.24,.48,t.hat,{y:.22}),K(.32,.24,.32,t.hat,{y:.44,x:.03,rz:-.12}),K(.17,.24,.17,t.hat,{y:.63,x:.1,rz:-.35}));n.head.add(i);let a=q(0,0,.05,K(.07,1.9,.07,t.wood,{y:.45}),K(.2,.2,.2,t.gold,{y:1.45,rx:Math.PI/4,rz:Math.PI/4}));a.rotation.x=.95,n.hand(n.armR).add(a),n.armR.rotation.x=-.35;let o=16742938,s=K(.24,.24,.24,o,{emissive:o}),c=q(-.7,1.75,.25,s);c.add(new Ha(o,3,3));let l=[];for(let e=0;e<4;e++){let e=K(.06,.06,.06,16760944,{emissive:16752704,edges:!1});c.add(e),l.push(e)}return n.root.add(c),{...n,name:`Arcanist`,sub:`Mage line`,attack:`cast`,baseArmR:-.35,update(e,t){c.position.y=1.75+Math.sin(e*2.2)*.08,s.rotation.set(e*1.3,e*1.7,0);let n=t===`attack`?1+.5*Math.max(0,Math.sin(e*6.9)):1;s.scale.setScalar(n),l.forEach((t,n)=>{let r=e*2.5+n*Math.PI/2;t.position.set(Math.cos(r)*.3,Math.sin(r*1.3)*.1,Math.sin(r)*.3)})}}}function fp(e=`m`){let t={robe:15262416,gold:13938487,sash:3829685,skin:15253658,hair:9067051,tome:7027230};e===`f`&&Object.assign(t,{robe:15523026,sash:11033198});let n=rp({...ap(e),c:{legs:t.robe,boots:8018490,torso:t.robe,arms:t.robe,skin:t.skin}});n.legSwing=.25,n.torso.add(K(.72,.2,.5,t.robe,{y:-.06})),n.torso.add(K(.82,.2,.56,t.robe,{y:-.25})),n.torso.add(K(.9,.18,.62,t.robe,{y:-.44})),n.torso.add(K(.92,.05,.64,t.gold,{y:-.53})),n.torso.add(K(.1,.85,.02,t.sash,{y:.32,z:.23,rz:.55})),n.torso.add(K(.5,.08,.46,t.gold,{y:.66}));let r=ip.head;n.head.add(K(.52,.12,.52,t.hair,{y:r+.02})),n.head.add(K(.52,.4,.1,t.hair,{y:r*.6,z:-.24})),e===`f`&&(sp(n.head,t.hair,{len:.6}),lp(n.head,t.hair,t.gold),n.head.add(K(.53,.05,.53,t.gold,{y:r*.86})),n.head.add(K(.08,.08,.02,9425151,{y:r*.86,z:.27,emissive:2775680,edges:!1})));let i=q(0,r+.38,0),a=.62,o=.05,s=16769162;for(let[e,t,n,r]of[[0,a/2,a,o],[0,-.62/2,a,o],[a/2,0,o,a],[-.62/2,0,o,a]])i.add(K(n,o,r,s,{x:e,z:t,emissive:s,edges:!1}));let c=new Ha(s,.8,2);i.add(c),n.head.add(i),n.torso.add(q(-.42,-.08,.05,K(.1,.36,.3,t.tome),K(.06,.32,.26,15985362,{x:.04,edges:!1}),K(.11,.08,.08,t.gold,{y:0,z:0})));let l=q(0,0,.04,K(.06,.9,.06,t.gold,{y:.2}),K(.18,.18,.18,16777215,{y:.72,rx:Math.PI/4,rz:Math.PI/4,emissive:8943428}));return l.rotation.x=.4+Math.PI/2,n.hand(n.armR).add(l),n.armR.rotation.x=-.4,{...n,name:`Oracle`,sub:`Priest line`,attack:`cast2`,baseArmR:-.4,update(e,t){i.rotation.y=e*.8,i.position.y=r+.38+Math.sin(e*2)*.03,c.intensity=t===`attack`?.8+3*Math.max(0,Math.sin(e*6.9)):.8}}}function pp(e=`m`){let t={leather:8018490,pants:4865328,boot:3811866,rope:3023384,cloth:10631722,skin:14726284,hair:5913119,shirt:13219994,wood:11109466,darkWood:7031339,iron:7171955};e===`f`&&Object.assign(t,{hair:8008728,leather:8015944,pants:4863544,cloth:11029082,shirt:13676708});let n=rp({...ap(e),c:{legs:t.pants,boots:t.boot,torso:t.leather,arms:t.shirt,skin:t.skin}});n.torso.add(K(.68,.1,.48,t.rope,{y:.06})),n.torso.add(K(.1,.5,.02,6177840,{y:.4,z:.23})),n.torso.add(K(.66,.2,.46,t.leather,{y:-.07}));let r=ip.head;n.head.add(K(.52,.12,.52,t.hair,{y:r+.02})),n.head.add(K(.52,.18,.1,t.hair,{y:r*.75,z:-.24})),n.head.add(K(.53,.07,.53,t.cloth,{y:r*.82})),n.head.add(K(.06,.2,.04,t.cloth,{x:.12,y:r*.68,z:-.28,rz:.3})),e===`f`&&cp(n.head,t.hair,{tie:t.cloth});let i=q(0,0,0,K(.07,.22,.07,t.darkWood),K(.24,.05,.08,t.darkWood,{y:.13}),K(.09,.78,.05,t.wood,{y:.55}));return i.rotation.x=Math.PI/2,n.hand(n.armR).add(i),n.armL.add(q(-.15,-.45,.04,K(.05,.42,.42,t.darkWood),K(.06,.42,.07,t.iron,{x:-.01}),K(.06,.07,.42,t.iron,{x:-.01}))),n.armR.rotation.x=-.25,{...n,name:`Vanguard`,sub:`Novice · Lv 1`,attack:`swing`,baseArmR:-.25}}function mp(e=`m`){let t={robe:5923445,dark:4080724,legs:3816e3,rope:13153418,skin:14726284,hair:2826264,wood:7031339};e===`f`&&Object.assign(t,{robe:7232102,dark:4864582,legs:4076600});let n=rp({...ap(e),c:{legs:t.legs,boots:2826264,torso:t.robe,arms:t.robe,skin:t.skin}});n.legSwing=.35,n.torso.add(K(.66,.36,.46,t.robe,{y:-.15})),n.torso.add(K(.68,.06,.48,t.rope,{y:.05})),n.torso.add(K(.05,.22,.03,t.rope,{x:.14,y:-.07,z:.25}));let r=ip.head;n.head.add(K(.5,.14,.5,t.hair,{y:r+.03})),n.head.add(K(.16,.08,.06,t.hair,{x:-.1,y:r-.02,z:.24})),e===`f`&&sp(n.head,t.hair,{len:.42,lockLen:.42}),n.torso.add(K(.56,.18,.2,t.dark,{y:.72,z:-.2}));let i=q(0,0,.03,K(.05,.6,.05,t.wood,{y:.2}),K(.09,.09,.09,10128576,{y:.52,rx:Math.PI/4,rz:Math.PI/4}));i.rotation.x=.35+Math.PI/2,n.hand(n.armR).add(i),n.armR.rotation.x=-.35;let a=16754784,o=K(.11,.11,.11,a,{emissive:8010256,edges:!1}),s=q(-.55,1.6,.2,o);return s.add(new Ha(a,.6,1.5)),n.root.add(s),{...n,name:`Arcanist`,sub:`Novice · Lv 1`,attack:`cast`,baseArmR:-.35,update(e,t){s.position.y=1.6+Math.sin(e*1.6)*.05,o.rotation.set(e*.8,e,0),o.scale.setScalar(t===`attack`?1+.4*Math.max(0,Math.sin(e*6.9)):1)}}}function hp(e=`m`){let t={linen:13616037,rope:9071168,skin:15253658,hair:9067051,wood:8018490,book:5914672};e===`f`&&Object.assign(t,{linen:13941934,rope:10116692});let n=rp({...ap(e),c:{legs:t.linen,boots:6965802,torso:t.linen,arms:t.linen,skin:t.skin}});n.legSwing=.3,n.torso.add(K(.72,.28,.5,t.linen,{y:-.1})),n.torso.add(K(.8,.26,.56,t.linen,{y:-.36})),n.torso.add(K(.68,.06,.48,t.rope,{y:.06})),n.torso.add(K(.05,.3,.03,t.rope,{x:-.12,y:-.1,z:.25}));let r=ip.head;n.head.add(K(.52,.12,.52,t.hair,{y:r+.02})),n.head.add(K(.52,.4,.1,t.hair,{y:r*.6,z:-.24})),e===`f`&&(sp(n.head,t.hair,{len:.6}),n.head.add(K(.1,.1,.06,16052454,{x:-.27,y:r*.82,z:.06,edges:!1})),n.head.add(K(.04,.04,.07,15253568,{x:-.27,y:r*.82,z:.065,edges:!1})));let i=K(.07,.07,.07,16773312,{emissive:8415792,edges:!1}),a=q(0,r+.35,0,i);n.head.add(a),n.torso.add(q(-.42,-.08,.05,K(.08,.3,.24,t.book),K(.05,.26,.2,15260864,{x:.03,edges:!1})));let o=q(0,0,.04,K(.06,.8,.06,t.wood,{y:.18}),K(.13,.13,.13,15262416,{y:.62,rx:Math.PI/4,rz:Math.PI/4}));return o.rotation.x=.4+Math.PI/2,n.hand(n.armR).add(o),n.armR.rotation.x=-.4,{...n,name:`Oracle`,sub:`Novice · Lv 1`,attack:`cast2`,baseArmR:-.4,update(e,t){a.position.set(Math.cos(e)*.15,r+.35+Math.sin(e*2)*.04,Math.sin(e)*.15),i.scale.setScalar(t===`attack`?1+1.5*Math.max(0,Math.sin(e*6.9)):1)}}}var gp=(e,t,n)=>e+(t-e)*n;function _p(e,t,n,r=t*1.1%1){let i=e.legSwing??.6;if(e.torso.position.y=0,e.torso.rotation.y=0,e.legL.rotation.x=e.legR.rotation.x=0,e.armL.rotation.set(0,0,0),e.armR.rotation.set(e.baseArmR,0,0),n===`idle`)e.torso.position.y=Math.sin(t*2)*.02,e.armL.rotation.x=Math.sin(t*2)*.05,e.armR.rotation.x=e.baseArmR-Math.sin(t*2)*.05;else if(n===`walk`){let n=Math.sin(t*8);e.legL.rotation.x=n*i,e.legR.rotation.x=-n*i,e.armL.rotation.x=-n*.5,e.armR.rotation.x=e.baseArmR+n*.4,e.torso.position.y=Math.abs(Math.cos(t*8))*.05}else if(n===`wave`)e.armR.rotation.set(-2.7,0,Math.sin(t*14)*.35),e.torso.position.y=Math.sin(t*2)*.02;else if(n===`attack`){if(e.attack===`swing`){let t=r<.35?gp(e.baseArmR,-2.7,r/.35):r<.5?gp(-2.7,-.1,(r-.35)/.15):gp(-.1,e.baseArmR,(r-.5)/.5);e.armR.rotation.x=t,e.torso.rotation.y=r<.35?-.25*r/.35:r<.5?gp(-.25,.3,(r-.35)/.15):gp(.3,0,(r-.5)/.5),e.armL.rotation.x=-.6}else if(e.attack===`cast`){let t=Math.sin(Math.min(r/.6,1)*Math.PI);e.armR.rotation.x=gp(e.baseArmR,-1.5,t),e.armL.rotation.x=gp(0,-1.2,t),e.armL.rotation.z=gp(0,-.4,t)}else{let t=Math.sin(Math.min(r/.6,1)*Math.PI);e.armR.rotation.x=gp(e.baseArmR,-2.8,t),e.armL.rotation.x=gp(0,-2.8,t),e.torso.position.y=t*.05}}e.update?.(t,n)}var vp={novice:{vanguard:pp,arcanist:mp,oracle:hp},base:{vanguard:up,arcanist:dp,oracle:fp}},yp=.8,bp=e=>e>=10?`base`:`novice`;function xp(e,t=1,n=`m`,{lights:r=!1,tier:i=bp(t)}={}){let a=(vp[i][e]??vp.novice.vanguard)(n===`f`?`f`:`m`);if(a.sex=n,r)return a;a.root.scale.setScalar(yp);let o=[];return a.root.traverse(e=>{e.isLight&&o.push(e)}),o.forEach(e=>e.removeFromParent()),a}var J=ip.head,Sp=13214266,Cp=13616037,wp=3023384,Tp={m:14726284,f:15253658},Ep=12884594,Dp=13159608,Op={vanguard:{m:5913119,f:8008728},arcanist:{m:2826264,f:14209766},oracle:{m:9067051,f:9067051}},kp={vanguard:{attack:`swing`,baseArmR:-.25,legSwing:.6},arcanist:{attack:`cast`,baseArmR:-.35,legSwing:.35},oracle:{attack:`cast2`,baseArmR:-.4,legSwing:.3}},Ap=(e,t)=>{let n=e=>Math.max(0,Math.min(255,Math.round(e*t)));return n(e>>16&255)<<16|n(e>>8&255)<<8|n(e&255)},jp=e=>(e.traverse(e=>{e.castShadow=!1}),e);function Mp(e,t,n){let r=n?Dp:Tp[t],i=rp({...ap(t),eyes:!n,c:{legs:r,boots:n?11054234:Ep,torso:r,arms:r,skin:r}});for(let e of[i.legL,i.legR])e.add(K(ip.legW+.04,.24,ip.legD+.04,Cp,{y:-.11}));if(i.torso.add(K(.66,.1,.46,Cp,{y:.04})),t===`f`&&i.torso.add(K(.66,.18,.46,Cp,{y:.44})),n)Np(i,t);else if(t===`f`){let t=Op[e].f;i.hairTop=K(.52,.12,.52,t,{y:J+.02}),i.head.add(i.hairTop),e===`vanguard`?cp(i.head,t):e===`oracle`?(sp(i.head,t,{len:.6}),lp(i.head,t,Sp)):sp(i.head,t,{len:.7,bangs:!1,lockLen:.75})}else i.hairTop=K(.52,.12,.52,Op[e].m,{y:J+.02}),i.head.add(i.hairTop),i.head.add(K(.52,.28,.1,Op[e].m,{y:J*.72,z:-.24}));return i}function Np(e,t){e.torso.rotation.x=.14,e.head.rotation.x=-.1;for(let t of[-1,1])e.head.add(K(.13,.11,.02,2762288,{x:t*J*.2,y:J*.55,z:J/2+.01,edges:!1})),e.head.add(K(.035,.035,.02,11963135,{x:t*J*.2,y:J*.55,z:J/2+.02,emissive:8014544,edges:!1})),e.head.add(K(.04,.12,.02,9212031,{x:t*J*.33,y:J*.3,z:J/2+.01,edges:!1}));e.head.add(K(.14,.025,.02,5921362,{y:J*.2,z:J/2+.01,edges:!1})),t===`f`?(e.head.add(K(.52,.12,.52,2763310,{y:J+.02})),sp(e.head,2763310,{len:.8,bangs:!1,lockLen:.85})):e.head.add(K(.26,.12,.05,6974052,{y:.06,z:.25}))}function Pp(e,t,n=!0){for(let r of[e.armL,e.armR])r.add(K(ip.armW+.04,n?.56:.3,ip.armW+.04,t,{y:n?-.29:-.15}))}var Fp={cap(e,t){e.head.add(K(.55,.16,.55,t,{y:J+.02})),e.head.add(K(.5,.05,.14,Ap(t,.7),{y:J-.05,z:.27}))},helm(e,t){e.head.add(K(.57,.24,.57,t,{y:J-.02})),e.head.add(K(.59,.05,.59,Ap(t,.7),{y:J-.12})),e.head.add(K(.06,.2,.03,t,{y:J*.66,z:.29}))},greathelm(e,t,n){e.head.add(K(.58,.6,.58,t,{y:J*.6})),e.head.add(K(.42,.06,.02,1118481,{y:J*.62,z:.295,edges:!1})),e.head.add(K(.04,.2,.02,1118481,{y:J*.45,z:.295,edges:!1})),e.head.add(K(.6,.06,.6,Sp,{y:J+.06})),e.head.add(K(.1,.12,.5,Sp,{y:J+.14})),e.head.add(K(.12,.34,.46,n,{y:J+.34,z:-.04}))},hat(e,t){e.head.add(q(0,J,0,K(.82,.06,.82,t),K(.5,.08,.5,Sp,{y:.07}),K(.48,.24,.48,t,{y:.22}),K(.32,.24,.32,t,{y:.44,x:.03,rz:-.12}),K(.17,.24,.17,t,{y:.63,x:.1,rz:-.35})))},cowl(e,t){e.head.add(jp(q(0,0,0,K(.6,.1,.6,t,{y:J+.04}),K(.08,.46,.58,t,{x:-.3,y:J*.64}),K(.08,.46,.58,t,{x:.3,y:J*.64}),K(.6,.5,.08,t,{y:J*.6,z:-.3}),K(.62,.06,.1,Ap(t,1.4),{y:J+0,z:.28}))))},merchanthat(e,t,n){e.head.add(q(0,J,0,K(.9,.05,.9,t),K(.52,.2,.52,t,{y:.12}),K(.54,.06,.54,n,{y:.05}),K(.04,.36,.1,15261896,{x:.26,y:.24,z:-.08,rz:-.5})))},hood(e,t){e.head.add(jp(q(0,0,0,K(.58,.1,.58,t,{y:J+.03}),K(.6,.42,.08,t,{y:J*.62,z:-.29}),K(.07,.3,.5,t,{x:-.29,y:J*.72}),K(.07,.3,.5,t,{x:.29,y:J*.72}))))},circlet(e,t,n,r,i){e.head.add(K(.53,.05,.53,Sp,{y:J*.86})),e.head.add(K(.08,.08,.02,9425151,{y:J*.86,z:.27,emissive:2775680,edges:!1}));let a=q(0,J+.38,0),o=.62,s=.05;for(let[e,n,r,i]of[[0,o/2,o,s],[0,-.62/2,o,s],[o/2,0,s,o],[-.62/2,0,s,o]])a.add(K(r,s,i,t,{x:e,z:n,emissive:t,edges:!1}));e.head.add(a),i(e=>{a.rotation.y=e*.8,a.position.y=J+.38+Math.sin(e*2)*.03})},gravehood(e,t){e.head.add(jp(q(0,0,0,K(.6,.1,.6,t,{y:J+.04}),K(.08,.5,.58,t,{x:-.3,y:J*.62}),K(.08,.5,.58,t,{x:.3,y:J*.62}),K(.6,.56,.08,t,{y:J*.58,z:-.3}),K(.52,.08,.14,Ap(t,1.4),{y:J,z:.28,rx:.25}),K(.22,.16,.2,t,{y:J+.1,z:-.28,rx:-.5}))))},crown(e,t,n,r,i){let a=J+.06,o=Ap(t,.8);e.head.add(K(.46,.14,.46,n,{y:J+.1})),e.head.add(K(.58,.13,.58,t,{y:a,emissive:Ap(t,.25)})),e.head.add(K(.6,.03,.6,o,{y:a-.065})),e.head.add(K(.6,.03,.6,o,{y:a+.065}));let s=[];for(let n=0;n<4;n++){let r=q(0,0,0);r.rotation.y=n*Math.PI/2;for(let[e,n]of[[-.2,.13],[0,.22],[.2,.13]])r.add(K(.07,n,.04,t,{x:e,y:a+.065+n/2,z:.28,emissive:Ap(t,.25)})),r.add(K(.05,.05,.05,Sp,{x:e,y:a+.075+n,z:.28,rx:Math.PI/4,rz:Math.PI/4})),s.push([r,e,a+.11+n]);let i=[14166074,2783968,2799722,2783968][n];r.add(K(.09,.07,.03,i,{y:a,z:.3,emissive:Ap(i,.45),edges:!1})),e.head.add(r)}let c=K(.06,.06,.06,16776160,{emissive:16774064,edges:!1});e.head.add(c),i(e=>{let t=Math.floor(e*3)%s.length,n=e*3%1,[r,i,a]=s[t],o=r.rotation.y;c.position.set(i*Math.cos(o)+.28*Math.sin(o),a,.28*Math.cos(o)-i*Math.sin(o)),c.scale.setScalar(Math.sin(n*Math.PI)*1.2+.01),c.rotation.y=e*4})}},Ip={jerkin(e,t){e.torso.add(K(.68,.62,.48,t,{y:.34})),e.torso.add(K(.68,.22,.48,t,{y:-.08})),e.torso.add(K(.7,.08,.5,wp,{y:.06})),e.torso.add(K(.08,.46,.02,Ap(t,.7),{y:.38,z:.25})),Pp(e,Cp,!1)},plate(e,t,n){e.torso.add(K(.7,.66,.5,t,{y:.34})),e.torso.add(K(.7,.12,.5,Sp,{y:.06})),e.torso.add(K(.36,.5,.04,n,{y:-.1,z:.26})),e.torso.add(K(.66,.2,.48,Ap(t,.75),{y:-.08})),Pp(e,Ap(t,.85));for(let n of[e.armL,e.armR])n.add(K(.36,.2,.5,t,{y:.04})),n.add(K(.38,.05,.52,Sp,{y:-.06}))},knightplate(e,t,n){Ip.plate(e,t,n),e.torso.add(K(.5,.62,.04,n,{y:.24,z:.27})),e.torso.add(K(.08,.4,.02,Sp,{y:.34,z:.295})),e.torso.add(K(.3,.08,.02,Sp,{y:.42,z:.295})),e.torso.add(K(.66,.95,.05,n,{y:.15,z:-.27})),e.torso.add(K(.6,.35,.05,Ap(n,.8),{y:-.45,z:-.3,rx:.1}));for(let n of[e.armL,e.armR])n.add(K(.42,.24,.54,t,{y:.1})),n.add(K(.44,.06,.56,Sp,{y:0}))},merchant(e,t,n){e.torso.add(K(.68,.62,.48,t,{y:.34})),e.torso.add(K(.68,.24,.48,t,{y:-.08})),e.torso.add(K(.7,.08,.5,wp,{y:.06})),e.torso.add(K(.5,.95,.03,n,{y:.02,z:.26})),e.torso.add(K(.16,.18,.1,8018474,{x:.3,y:-.04,z:.2})),e.torso.add(K(.06,.06,.06,Sp,{x:.3,y:.06,z:.26})),Pp(e,Cp,!1)},robe(e,t,n=Sp){e.torso.add(K(.68,.66,.48,t,{y:.33})),e.torso.add(K(.7,.5,.5,t,{y:-.22})),e.torso.add(K(.72,.06,.52,n,{y:-.46})),e.torso.add(K(.1,.9,.02,n,{y:.1,z:.25})),Pp(e,t)},starweave(e,t,n,r,i){Ip.robe(e,t,n);let a=[[-.2,.45],[.18,.2],[-.1,-.15],[.22,-.32],[-.25,-.38]].map(([t,n])=>{let r=K(.05,.05,.02,16773312,{x:t,y:n,z:.255,emissive:9075264,edges:!1});return e.torso.add(r),r});i(e=>a.forEach((t,n)=>{t.visible=Math.sin(e*2+n*1.7)>-.6}))},vestment(e,t,n){e.torso.add(K(.68,.66,.48,t,{y:.33})),e.torso.add(K(.72,.2,.5,t,{y:-.06})),e.torso.add(K(.82,.2,.56,t,{y:-.25})),e.torso.add(K(.9,.18,.62,t,{y:-.44})),e.torso.add(K(.1,.85,.02,n,{y:.32,z:.25,rz:.55})),e.torso.add(K(.5,.08,.46,Sp,{y:.66})),Pp(e,t)},habit(e,t,n){Ip.vestment(e,t,wp),e.torso.add(K(.36,1,.03,n,{y:.05,z:.27})),e.torso.add(K(.36,.06,.03,Sp,{y:.45,z:.285}))},graverobe(e,t,n,r,i){let a=Ap(t,.75),o=Ap(t,1.4),s=14538434,c=11050888;e.torso.add(K(.68,.66,.48,t,{y:.33})),e.torso.add(K(.7,.52,.5,t,{y:-.24})),[[-.27,.3],[-.11,.42],[.06,.26],[.2,.46],[.3,.33]].forEach(([t,n],r)=>{e.torso.add(K(.13,n,.04,r%2?a:o,{x:t,y:-.5-n/2+.12,z:.25,rz:r%2?.05:-.06})),e.torso.add(K(.13,n*.8,.04,a,{x:-t,y:-.5-n*.4+.12,z:-.25}))}),e.torso.add(K(.72,.1,.52,3813926,{y:-.48})),e.torso.add(K(.06,.85,.02,n,{y:.08,z:.245})),e.torso.add(K(.7,.07,.5,2761754,{y:.02}));for(let t=0;t<3;t++)e.torso.add(K(.3-t*.05,.035,.03,s,{y:.38-t*.08,z:.245}));e.torso.add(K(.04,.24,.03,c,{y:.3,z:.255}));for(let t=0;t<7;t++){let n=(t-3)*.26;e.torso.add(K(.04,.09,.03,s,{x:Math.sin(n)*.24,y:.6-Math.cos(n)*.08,z:.24,rz:n,edges:!1}))}e.armL.add(q(0,.06,0,K(.26,.22,.24,s,{y:.05}),K(.06,.06,.02,1709080,{x:-.06,y:.07,z:.125,edges:!1}),K(.06,.06,.02,1709080,{x:.06,y:.07,z:.125,edges:!1}),K(.18,.06,.2,c,{y:-.08,z:.02}))),Pp(e,t);let l=[];for(let t=0;t<3;t++){let t=K(.08,.12,.08,9109440,{emissive:2792042,edges:!1});t.material=t.material.clone(),t.material.transparent=!0,e.root.add(t),l.push(t)}i(e=>l.forEach((t,n)=>{let r=e*.7+n*Math.PI*2/3;t.position.set(Math.cos(r)*.55,.25+Math.sin(e*1.6+n)*.12,Math.sin(r)*.55),t.material.opacity=.35+.3*Math.sin(e*2.2+n*2)}))}},Lp=(e,t,n,r,i,a=0)=>{for(let o of[e.legL,e.legR])o.add(K(ip.legW+t,n,ip.legD+r,i,{y:-ip.legH+n/2-.02+a,z:.02}))},Rp={boots(e,t){Lp(e,.05,.24,.08,t)},greaves(e,t){Lp(e,.05,.36,.08,t),Lp(e,.07,.05,.1,Ap(t,.7),.3)},sabatons(e,t){Lp(e,.06,.4,.1,t),Lp(e,.08,.05,.12,Sp,.34)},slippers(e,t){Lp(e,.04,.14,.06,t)},sandals(e,t){Lp(e,.04,.05,.08,t),Lp(e,.05,.03,.09,t,.1)},wraps(e,t){Lp(e,.04,.3,.06,t),Lp(e,.06,.04,.08,11050888,.18)}},zp=(e,t=0)=>(e.rotation.x=Math.PI/2-t,e),Bp=(e,t)=>(e.rotation.x=-t+.6,e),Vp={greatsword:(e,t=4862752)=>zp(q(0,0,0,K(.09,.42,.09,t,{y:-.02}),K(.12,.12,.12,Sp,{y:-.27}),K(.52,.08,.12,Sp,{y:.22}),K(.17,1.45,.05,e,{y:1}),K(.05,1.3,.056,Ap(e,.75),{y:.95,edges:!1}))),greatstaff:(e,t=5913375)=>Bp(q(0,0,.05,K(.09,2.2,.09,t,{y:.5}),K(.32,.06,.32,Sp,{y:1.56}),K(.26,.26,.26,e,{y:1.8,rx:Math.PI/4,rz:Math.PI/4,emissive:Ap(e,.45)}),K(.11,.11,.11,e,{x:.22,y:1.64,emissive:Ap(e,.45),edges:!1}),K(.11,.11,.11,e,{x:-.22,y:1.64,emissive:Ap(e,.45),edges:!1})),-.35),sword:e=>zp(q(0,0,0,K(.08,.26,.08,4862752),K(.36,.06,.1,Sp,{y:.15}),K(.1,.95,.04,e,{y:.66}))),axe:e=>zp(q(0,0,0,K(.08,1,.08,5913375,{y:.35}),K(.06,.34,.36,e,{y:.75,z:.16}),K(.07,.1,.1,Ap(e,.6),{y:.75}))),cleaver:e=>zp(q(0,0,0,K(.08,.3,.08,2759700),K(.3,.06,.1,3813424,{y:.17}),K(.26,.9,.05,e,{y:.66}),K(.05,.9,.055,15263976,{x:.1,y:.66}))),saber:e=>zp(q(0,0,0,K(.07,.24,.07,2761792),K(.26,.05,.08,Sp,{y:.14}),K(.08,.55,.04,13158616,{y:.44}),K(.08,.45,.04,13158616,{y:.9,x:.05,rz:-.2}),K(.03,.9,.05,e,{y:.66,emissive:e,edges:!1}))),lance:e=>zp(q(0,0,0,K(.08,.4,.08,4862752,{y:-.1}),K(.22,.22,.22,e,{y:.15}),K(.1,1.9,.1,14211288,{y:1.15}),K(.06,.4,.06,15790320,{y:2.25}),K(.02,.22,.3,e,{y:1.7,z:.17}))),mace:e=>zp(q(0,0,0,K(.07,.7,.07,5913375,{y:.28}),K(.18,.18,.18,e,{y:.68}))),hammer:e=>zp(q(0,0,0,K(.07,.75,.07,5913375,{y:.3}),K(.34,.18,.2,e,{y:.72}),K(.1,.06,.06,Sp,{y:.6}))),warhammer:e=>zp(q(0,0,0,K(.08,1,.08,3811866,{y:.4}),K(.46,.24,.26,e,{y:.92}),K(.06,.24,.06,Sp,{y:1.12}))),flail:e=>zp(q(0,0,0,K(.07,.5,.07,5913375,{y:.18}),K(.04,.12,.04,6974058,{y:.5}),K(.04,.12,.04,6974058,{y:.62,z:.04}),K(.2,.2,.2,e,{y:.78,z:.08,rx:.8,ry:.8}))),knuckles:e=>q(0,-.02,0,K(.26,.12,.26,e),K(.28,.05,.08,Sp,{y:.06,z:.1})),wand:e=>Bp(q(0,0,.03,K(.05,.6,.05,7031339,{y:.2}),K(.1,.1,.1,e,{y:.52,rx:Math.PI/4,rz:Math.PI/4,emissive:Ap(e,.4)})),-.35),staff:e=>Bp(q(0,0,.05,K(.07,1.9,.07,5913375,{y:.45}),K(.2,.2,.2,e,{y:1.45,rx:Math.PI/4,rz:Math.PI/4,emissive:Ap(e,.35)})),-.35),rod:e=>Bp(q(0,0,.05,K(.07,1.7,.07,3811866,{y:.4}),K(.18,.06,.18,Sp,{y:1.2}),K(.22,.22,.22,e,{y:1.38,emissive:e,edges:!1})),-.35),lumen:e=>Bp(q(0,0,.05,K(.07,1.8,.07,15262416,{y:.42}),K(.14,.34,.14,e,{y:1.45,emissive:e,edges:!1}),K(.24,.05,.24,Sp,{y:1.26})),-.4),crozier:e=>Bp(q(0,0,.05,K(.07,1.9,.07,Sp,{y:.45}),K(.07,.3,.07,Sp,{y:1.45,z:.1,rx:.6}),K(.07,.2,.07,Sp,{y:1.52,z:.24,rx:2.2}),K(.12,.12,.12,e,{y:1.32,emissive:Ap(e,.5),edges:!1})),-.4),bonestaff:e=>Bp(q(0,0,.05,K(.08,1.7,.08,11050888,{y:.4}),K(.13,.12,.13,14538434,{y:-.45}),K(.1,.3,.1,2761754,{y:.15}),K(.15,.12,.15,14538434,{y:1.22}),K(.26,.24,.24,14538434,{y:1.42}),K(.22,.08,.2,11050888,{y:1.27,z:.02}),K(.06,.06,.02,e,{x:-.06,y:1.44,z:.125,emissive:Ap(e,.4),edges:!1}),K(.06,.06,.02,e,{x:.06,y:1.44,z:.125,emissive:Ap(e,.4),edges:!1})),-.35)},Hp={buckler:(e,t)=>e.armL.add(q(-.15,-.45,.04,K(.05,.42,.42,t),K(.06,.42,.07,7171955,{x:-.01}),K(.06,.07,.42,7171955,{x:-.01}))),kite:(e,t,n)=>e.armL.add(q(-.17,-.42,.05,K(.06,.84,.7,t),K(.08,.74,.6,n,{x:-.02}),K(.03,.3,.3,Sp,{x:-.07,rx:Math.PI/4}))),aegis:(e,t)=>e.armL.add(q(-.17,-.42,.05,K(.06,.66,.66,t),K(.07,.3,.3,16773296,{x:-.02,rx:Math.PI/4,emissive:6969888}))),tome:(e,t)=>e.hand(e.armL).add(q(0,-.05,.12,K(.1,.34,.28,t),K(.06,.3,.24,15985362,{x:.04,edges:!1}))),grimoire:(e,t)=>e.hand(e.armL).add(q(0,-.05,.12,K(.12,.38,.32,t),K(.06,.34,.28,15985362,{x:.05,edges:!1}),K(.13,.1,.1,11963135,{emissive:4860554,edges:!1}))),icon:(e,t)=>e.hand(e.armL).add(q(0,-.08,.1,K(.05,.36,.28,t),K(.06,.24,.18,Sp,{x:-.01})))},Up=e=>`${e.occ}|${e.sex}|${e.job}|${[`main`,`off`,`head`,`armor`,`boots`,`neck`].map(t=>e.equip?.get?.(t)??``).join(`|`)}`;function Wp(e){let t=e.job===`necromancer`,n=e.sex===`f`?`f`:`m`,r=Mp(e.occ,n,t),i=[],a=e=>i.push(e),o=t=>{if(e.outfit?.[t])return e.outfit[t];let n=G[e.equip?.get?.(t)];return n?.look?n:null},s=(e,t,...i)=>{let s=o(t);s&&e[s.look]?.(r,s.color,s.accent,n,a,...i)};s(Ip,`armor`),s(Rp,`boots`),s(Fp,`head`);let c=o(`head`);c&&![`circlet`,`crown`].includes(c.look)&&r.hairTop?.removeFromParent(),s(Hp,`off`);let l=o(`main`);l&&r.hand(r.armR).add(Vp[l.look](l.color,l.accent));let u=o(`neck`);u&&(r.torso.add(K(.03,.22,.02,3813416,{y:.56,z:.255,edges:!1})),r.torso.add(K(.1,.1,.04,u.color,{y:.42,z:.26,emissive:Ap(u.color,.25),edges:!1}))),e.outfit?.beard&&(r.head.add(K(.4,.36,.08,e.outfit.beard,{y:J*.12,z:J/2+.03})),r.head.add(K(.24,.2,.08,e.outfit.beard,{y:-J*.22,z:J/2+.02})));let d=kp[e.occ]??kp.vanguard;return r.armR.rotation.x=d.baseArmR,r.root.scale.setScalar(yp),{...r,legSwing:d.legSwing,baseArmR:d.baseArmR,attack:t?`raise`:d.attack,update(e,t){for(let n of i)n(e,t)}}}var Gp=`application/x-nc-skill`,Kp=null,qp=e=>{Kp=e},Jp=[`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`0`],Yp={attack:`Attack`,wave:`Wave`},Xp=()=>[`attack`,...Array(Jp.length-2).fill(null),`wave`],Zp=e=>`nc.bar3.${e}`;function Qp(e){let t=e.occ;try{let e=JSON.parse(localStorage.getItem(Zp(t)));if(Array.isArray(e)&&e.length===Jp.length&&e.every(e=>e===null||Yp[e]||eu(t,e)))return e}catch{}return Xp()}var $p=(e,t)=>!!Yp[t]||(eu(e,t)?Ql(eu(e,t)):!1);function em(e,{onUse:t,onChange:n}){let r=null,i=[],a=!1,o=[];function s(){try{localStorage.setItem(Zp(r),JSON.stringify(i))}catch{}n?.()}function c(e,t){if(t){let e=i.indexOf(t);e>=0&&(i[e]=null)}i[e]=t,l(),s()}function l(){e.innerHTML=``,o.length=0;let n=Hl[r].resource;i.forEach((u,d)=>{let f=u&&!Yp[u]?eu(r,u):null,p=document.createElement(`div`);if(p.className=`slot`+(u?``:` empty`),p.innerHTML=`<i class="cd"></i><kbd>${Jp[d]}</kbd><span class="nm">${u?Yp[u]??f.name:``}</span><b class="cdn"></b>`,f){let e=f.use&&ru(f.use.cd,1);p.title=`${f.name}: ${f.desc[0]}`+(f.use?`\n${ru(f.use.cost,1)} ${n}${e?` · ${e} s cooldown`:``}`:`
No combat effect yet`)+`
Drag to move · drag off or right-click to clear`}else p.title=u?`${Yp[u]}\nDrag to move · drag off or right-click to clear`:`Empty: drag a skill here from Skills (K)`;let m={key:Jp[d],index:d,entry:u,el:p,def:f,cdEl:p.querySelector(`.cd`),cdText:p.querySelector(`.cdn`)};o.push(m),p.onclick=()=>{u&&t(m)},p.oncontextmenu=e=>{e.preventDefault(),u&&c(d,null)},p.draggable=!!u,p.ondragstart=e=>{a=!1,Kp={from:`slot`,index:d},e.dataTransfer.setData(Gp,JSON.stringify(Kp)),e.dataTransfer.effectAllowed=`move`,p.classList.add(`dragging`)},p.ondragend=()=>{Kp=null,p.classList.remove(`dragging`),a||c(d,null)},p.ondragover=e=>{(Kp||e.dataTransfer.types.includes(`application/x-nc-skill`))&&(e.preventDefault(),p.classList.add(`over`))},p.ondragleave=()=>p.classList.remove(`over`),p.ondrop=e=>{e.preventDefault(),p.classList.remove(`over`),a=!0;let t=Kp;if(!t)try{t=JSON.parse(e.dataTransfer.getData(Gp))}catch{return}if(t.from===`slot`){if(t.index===d)return;[i[d],i[t.index]]=[i[t.index],i[d]],l(),s()}else t.from===`panel`&&$p(r,t.id)&&c(d,t.id)},e.appendChild(p)})}return{slots:o,setPlayer(e){r=e.occ,i=Qp(e),l()},reset(){i=Xp(),l(),s()},layout:()=>[...i],assign(e,t){$p(r,t)&&c(e,t)},slotForKey(e){let t=o[Jp.indexOf(e)];return t?.entry?t:null},slotFor(e){return o.find(t=>t.entry===e)??null}}}var tm=e=>document.getElementById(e),nm=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),rm=()=>{},im=null,am=()=>{},om={barLayout:()=>[],assignSlot:()=>{}},sm={char:`charPanel`,skills:`skillPanel`,job:`jobPanel`,shop:`shopPanel`},cm={char:!1,skills:!1,job:!1,shop:!1},lm=!1,um=!1,dm=null,fm=-1,pm=-1,mm=0,hm=e=>e.title||Yl[e.job]?.name||Hl[e.occ].name;function gm(e,t,n=om){rm=e,am=t,om=n,tm(`charBtn`).onclick=e=>{Dm(`char`),e.currentTarget.blur()},tm(`skillBtn`).onclick=e=>{Dm(`skills`),e.currentTarget.blur()};for(let e of document.querySelectorAll(`.panelClose`))e.onclick=()=>Dm(e.dataset.panel,!1);tm(`charPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-at]`),n=e.target.closest(`[data-slot]`);t?(rm(`equip`,{at:Number(t.dataset.at)}),am()):n&&(rm(`unequip`,{slot:n.dataset.slot}),am()),fm=-1}),tm(`charPanel`).addEventListener(`contextmenu`,e=>{let t=e.target.closest(`[data-at]`);if(!t)return;e.preventDefault();let n=Number(t.dataset.at);fm===n?(rm(`discard`,{at:n}),fm=-1,am()):fm=n,Rm(im)}),tm(`shopPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-buy]`),n=e.target.closest(`[data-sell]`);if(t&&!t.classList.contains(`poor`)&&(rm(`buy`,{item:t.dataset.buy}),am()),n){let e=Number(n.dataset.sell);pm===e?(rm(`sell`,{at:e}),pm=-1):pm=e,am(),Km(im)}}),tm(`skillPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`.sk.learnable`);t&&(rm(`learn`,{skill:t.dataset.id}),am())}),tm(`jobPanel`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-job]`);t&&!t.disabled&&(am(),dm===t.dataset.job?(rm(`changeJob`,{job:t.dataset.job}),dm=null):dm=t.dataset.job,Wm(im))}),tm(`skillPanel`).addEventListener(`dragstart`,e=>{let t=e.target.closest(`[data-drag]`);t&&(qp({from:`panel`,id:t.dataset.drag}),e.dataTransfer.setData(Gp,JSON.stringify({from:`panel`,id:t.dataset.drag})),e.dataTransfer.effectAllowed=`copy`,lm=!0)}),tm(`skillPanel`).addEventListener(`dragend`,()=>{qp(null),lm=!1,Im(im)}),tm(`skillPanel`).addEventListener(`contextmenu`,e=>{let t=e.target.closest(`[data-drag]`);t&&(e.preventDefault(),_m(t.dataset.drag,e.clientX,e.clientY))}),addEventListener(`pointerdown`,e=>{e.target.closest(`#slotPicker`)||vm()},!0),addEventListener(`keydown`,e=>{e.key===`Escape`&&vm()})}function _m(e,t,n){vm();let r=om.barLayout(),i=e=>e?e===`attack`?`Attack`:e===`wave`?`Wave`:ym(e)?.name??e:`empty`,a=document.createElement(`div`);a.id=`slotPicker`,a.innerHTML=`<div class="spHead">Put ${nm(i(e))} on key…</div>`+Jp.map((t,n)=>`<button data-i="${n}" class="${r[n]===e?`cur`:``}"><kbd>${t}</kbd><span>${nm(i(r[n]))}</span></button>`).join(``),a.onclick=t=>{let n=t.target.closest(`[data-i]`);n&&(om.assignSlot(Number(n.dataset.i),e),am(),vm())},document.body.append(a);let o=a.getBoundingClientRect();a.style.left=`${Math.min(t,innerWidth-o.width-8)}px`,a.style.top=`${Math.min(n,innerHeight-o.height-8)}px`}function vm(){document.getElementById(`slotPicker`)?.remove()}var ym=e=>[...Object.values(Jl).flat(),...Object.values(Yl).flatMap(e=>e.skills)].find(t=>t.id===e),bm=new Set([`arcanist`,`oracle`,...Object.entries(Yl).filter(([,e])=>e.occ!==`vanguard`).map(([e])=>e)]);function xm(e){let t=e.slot===`main`?bm.has(e.for)?`🪄`:e.twoHand?`⚔️`:`🗡️`:e.slot===`off`?/tome|grimoire|codex|icon/i.test(e.name)?`📖`:`🛡️`:{head:`🪖`,armor:`👕`,boots:`👢`,neck:`📿`,ring:`💍`}[e.slot];return`<span class="slotIco" title="${nm(yu(e))}">${t}</span>`}function Sm(e,t){let n=G[t];if(!n||Eu(e,t))return 0;let r=t=>G[e.equip.get(t)]?bu(G[e.equip.get(t)]):0,i=n.slot===`ring`?Math.min(r(`ring1`),r(`ring2`)):r(n.slot),a=bu(n)-i;return a>.05?Math.round(a*10)/10:0}var Cm=e=>e?`<span class="better" title="Better than what you wear there (+${e})">▲</span>`:``,wm=()=>cm.char||cm.skills||cm.job||cm.shop,Tm=e=>cm[e];function Em(){for(let e of Object.keys(sm))Dm(e,!1)}function Dm(e,t=!cm[e]){cm[e]=t,tm(sm[e]).classList.toggle(`hidden`,!t),e===`job`&&(dm=null),e===`shop`&&(pm=-1),e===`char`&&t&&(mm=0,fm=-1),t&&Im(im)}function Om(){cm.char||(mm+=1),Im(im)}var km=(e,t,n=``)=>{let r=G[t],i=Eu(e,t);return`${r.name}\n${yu(r)} · ${gu(r)} · Lv ${r.lv}\n${vu(r)}${i?`\n${i}`:``}${n}`};function Am(e){let t=e.job===`necromancer`?`#c8ccb8`:`#e0b48c`,n=t,r=(t,n)=>hu(G[e.equip.get(t)])??n,i=r(`head`,null),a=r(`main`,`#c8c0b0`);return`<svg class="dollFig" viewBox="0 0 100 170" aria-hidden="true">
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
    ${e.equip.get(`main`)?`<rect x="9" y="20" width="5" height="76" rx="2" fill="${a}"/>`:``}
    ${e.equip.get(`off`)?`<rect x="84" y="56" width="14" height="26" rx="3" fill="#7a6a52"/>`:``}
  </svg>`}function jm(e){let t=t=>{let n=e.equip.get(t),r=G[n],i=hu(r);return`<div class="gearSlot g-${t}${r?` full`:``}"${r?` data-slot="${t}" title="${nm(km(e,n,`
Click to take off`))}"`:``}>
      <span>${pu[t]}</span><b>${r?`${xm(r)}${i?`<i style="background:${i}"></i>`:``}${nm(r.name)}`:`—`}</b>${r?`<small>${nm(vu(r))}</small>`:``}</div>`},n=`<div class="dollSide">${[`head`,`main`,`armor`,`ring1`].map(t).join(``)}</div>${Am(e)}
    <div class="dollSide">${[`neck`,`off`,`boots`,`ring2`].map(t).join(``)}</div>`,r=[...e.bag],i=Array.from({length:24},(t,n)=>{let i=r[n],a=G[i];if(!a)return`<div class="bagCell empty"></div>`;let o=Eu(e,i),s=o?/^Needs Lv/.test(o)?`later`:`no`:`ok`,c=Sm(e,i),l=km(e,i,(c?`\nBetter than what you wear there (+${c})`:``)+(fm===n?`
Right-click again to throw it away`:o?``:`
Click to wear · right-click twice to throw away`)),u=hu(a);return`<div class="bagCell ${s}${c?` upgrade`:``}${fm===n?` discard`:``}" data-at="${n}" title="${nm(l)}">
      ${Cm(c)}<b>${xm(a)}${u?`<i style="background:${u}"></i>`:``}${nm(a.name)}</b><small>Lv ${a.lv} · ${nm(yu(a))}</small></div>`}).join(``);return`<div class="gearCols">
      <div><h4>Equipment <small>click to take off</small></h4><div class="doll">${n}</div></div>
      <div><h4>Bag <small>${r.length} / 24 · click to wear</small></h4><div class="bag">${i}</div></div>
    </div>`}var Mm={};function Nm(e,t){Mm[e]!==t&&(tm(e).innerHTML=t,Mm[e]=t)}function Pm(e){e!==um&&(um=e,Im(im))}var Fm=e=>[...Jl[e.occ],...Yl[e.job]?.skills??[]].filter(t=>t.lv<=e.level&&!cu(e,t.id)).length;function Im(e){e&&(im=e,Lm(`skillBtn`,Fm(e)),Lm(`charBtn`,mm),cm.char&&Rm(e),cm.skills&&!lm&&Um(e),cm.job&&Wm(e),cm.shop&&Km(e))}function Lm(e,t){let n=tm(e).querySelector(`.badge`);n.textContent=t>0?t:``,tm(e).classList.toggle(`pts`,t>0)}function Rm(e){let t=Hl[e.occ],n=Ju(e,e.skills),r=(Ul[e.occ].every*n.swingMul).toFixed(2),i=Bu(e),a=Lu.map(t=>{let r=n.stats[t]-e[t];return`<tr><th>${Ru[t]}${n.main.includes(t)?` <i>main</i>`:``}</th>
      <td>${n.stats[t]}${r?` <small>(+${r})</small>`:``}</td>
      <td class="grow">${i[t]?`+${i[t]}/lv`:``}</td></tr>`}).join(``),o=e.level>=30?`Max level`:`${e.exp} / ${e.expNext}`;Nm(`charBody`,`
    <div class="charHead"><b>${nm(e.name)}</b> · Lv ${e.level} ${nm(hm(e))} · ${nm(e.subtitle||(e.job?`${t.name} line`:`Unsworn`))}<br><small>EXP ${o} · Wisdom ${e.wisdom} · <span class="shopGold">${e.gold??0} gold</span></small></div>
    <div class="charCols">
      <div><h4>Stats <small>grow by themselves each level</small></h4><table class="stats">${a}</table></div>
      <div><h4>Derived</h4><table class="stats">
        <tr><th>Max HP</th><td>${n.hpMax}</td></tr>
        <tr><th>Max ${t.resource}</th><td>${n.resMax}</td></tr>
        <tr><th>Attack damage</th><td>${n.dmgMin}–${n.dmgMax}</td></tr>
        <tr><th>Swing time</th><td>${r} s</td></tr>
        <tr><th>Critical hit</th><td>${Math.round(n.crit*100)}%</td></tr>
        <tr><th>Defense</th><td>${n.def} <small>(−${Math.round(100-1e4/(100+n.def))}% damage)</small></td></tr>
        <tr><th>Reach</th><td>${Wl(e)} tiles</td></tr>
      </table></div>
    </div>
    ${jm(e)}`)}var zm={active:`Active`,passive:`Passive`,upgrade:`Upgrade`,aura:`Aura`,capstone:`Capstone`},Bm=e=>e.capstone?`Capstone`:zm[e.type];function Vm(e,t){let n=e.skills.get(t.id)??0,r=cu(e,t.id),i=n>=t.max?`maxed`:r?/Wisdom$/.test(r)?`waiting`:`locked`:um?`learnable`:`waiting`,a=n<t.max&&i!==`locked`?`<p class="price${r?``:` ok`}">${n?`Rank ${n+1}`:`Learn`}: ${au(t,n+1)} Wisdom</p>`:``,o=Array.from({length:t.max},(e,t)=>`<i class="${t<n?`on`:``}"></i>`).join(``),s=n?t.desc[n-1]:t.desc[0],c=n&&n<t.max?`<p class="next">Next: ${nm(t.desc[n])}</p>`:``,l=i===`locked`&&!/^Needs Lv/.test(r)&&!t.job?`<p class="why">${nm(r)}</p>`:``,u=t.live?``:`<em title="You can learn it now; its effect is coming in a later build">not in combat yet</em>`,d=t.use&&ru(t.use.cd,n||1),f=t.use?`<p class="cost">${ru(t.use.cost,n||1)} ${Hl[e.occ].resource}${d?` · ${d} s cooldown`:``}</p>`:``,p=Ql(t)?` draggable="true" data-drag="${t.id}"`:``,m=[i===`learnable`?`Click to learn`:!r&&`Learn it from the Wise Man by the Crown Plinth`,p&&`Drag onto the skill bar, or right-click to pick a key`].filter(Boolean).join(` · `);return`<div class="sk ${i}${p?` barable`:``}" data-id="${t.id}"${p} title="${m}">
    <div class="skTop"><b>${nm(t.name)}</b><span class="pips">${o}</span></div>
    <div class="skType">${Bm(t)}</div>
    <p>${nm(s)}</p>${f}${c}${a}${l}${u}</div>`}function Hm(e,t){let n=t.filter(t=>t.lv<=e.level),r=t.find(t=>t.lv>e.level);return`<div class="coreRow">${n.map(t=>Vm(e,t)).join(``)}</div>`+(r?`<p class="skNext">Next: ${nm(r.name)} at Lv ${r.lv}</p>`:``)}function Um(e){let t=Hl[e.occ],n=e.job?`<h4>2nd class · ${nm(Yl[e.job].name)}</h4>${Hm(e,Yl[e.job].skills)}`:e.level>=15?`<p class="skNext">Lv 15: talk to the Oathkeeper by the Crown Plinth to choose your 2nd class.</p>`:``;Nm(`skillBody`,`
    <div class="skHead">Wisdom: <b class="${Fm(e)?`pts`:``}">${e.wisdom}</b> · ${um?`<span class="pts">The Wise Man will teach you: click a skill to buy its next rank.</span>`:`Every EXP you earn is also Wisdom: spend it with the Wise Man by the Crown Plinth.`}
      New skills open up as you level · Drag actives onto the skill bar (keys 1–0), or right-click one to pick a key.</div>
    <h4>Actions</h4>
    <div class="actRow">
      <div class="sk barable act" draggable="true" data-drag="attack" title="Drag onto the skill bar"><b>Attack</b><div class="skType">Combat mode</div></div>
      <div class="sk barable act" draggable="true" data-drag="wave" title="Drag onto the skill bar"><b>Wave</b><div class="skType">Emote</div></div>
    </div>
    <h4>1st class · ${nm(t.name)}</h4>${Hm(e,Jl[e.occ])}
    ${n}`)}function Wm(e){let t=Hl[e.occ],n;if(e.job)n=`<p class="npcSay">“You walk the ${nm(Yl[e.job].name)}'s road now. Come back at Lv 25, when the third oaths are ready.”</p>`;else{let r=Xl(e.occ).filter(t=>!lu(e,t.id)),i=Xl(e.occ).filter(e=>e.locked).map(e=>`<div class="branch job locked"><h4>${nm(e.name)}</h4><div class="branchSub">Not open yet</div></div>`).join(``);if(!r.length)n=`<p class="npcSay">“Every ${nm(t.name)} chooses a road at Lv 15. You are Lv ${e.level}. Come back when you are ready.”</p>`;else{let e=r.map(e=>{let t=dm===e.id,n=Object.entries(e.growth).map(([e,t])=>`${Ru[e]} +${t}`).join(`, `);return`<div class="branch job"><h4>${nm(e.name)}</h4><div class="branchSub">${nm(e.role)}</div>
          <ul>${e.skills.map(e=>`<li><span>Lv ${e.lv}</span> ${nm(e.name)} <small>${Bm(e)}</small></li>`).join(``)}</ul>
          <p class="growLine">Each level: ${n}</p>
          <button data-job="${e.id}" class="${t?`sure`:``}">${t?`Yes, become a ${nm(e.name)}`:`Become a ${nm(e.name)}`}</button>
          ${t?`<p class="why">This is permanent. Press again to swear the oath.</p>`:``}</div>`}).join(``);n=`<p class="npcSay">“You have grown strong, ${nm(t.name)}. Choose your road. The oath is for life.”</p>
        <div class="branches">${e}${i}</div>
        <p class="skHead">You keep all your ${nm(t.name)} skills.</p>`}}Nm(`jobBody`,n)}var Gm=[[`Weapons`,[`main`]],[`Off hand`,[`off`]],[`Head`,[`head`]],[`Armor`,[`armor`]],[`Boots`,[`boots`]],[`Necklaces`,[`neck`]],[`Rings`,[`ring`]]];function Km(e){let t=e.gold??0,n=e.bag.length>=24,r=Tu.filter(t=>!G[t].for||G[t].for===e.occ),i=r=>{let i=G[r],a=xu(r),o=hu(i),s=Eu(e,r),c=a>t||n,l=`${km(e,r)}\n${n?`Your bag is full`:a>t?`You need ${a-t} more gold`:`Click to buy for ${a} gold`}`,u=Sm(e,r);return`<div class="ware${c?` poor`:``}${s?` later`:``}${u?` upgrade`:``}" data-buy="${r}" title="${nm(l+(u?`\nBetter than what you wear there (+${u})`:``))}">
      ${Cm(u)}<b>${xm(i)}${o?`<i style="background:${o}"></i>`:``}${nm(i.name)}</b>
      <small>Lv ${i.lv} · ${nm(yu(i))}</small><span class="st">${nm(vu(i))}</span><br><span class="price">${a} gold</span></div>`},a=Gm.map(([e,t])=>{let n=r.filter(e=>t.includes(G[e].slot));return n.length?`<h4>${e}</h4><div class="shopGrid">${n.map(i).join(``)}</div>`:``}).join(``),o=e.bag.map((t,n)=>{let r=G[t];if(!r)return``;let i=pm===n,a=hu(r),o=Sm(e,t);return`<div class="ware${i?` sure`:``}${o?` upgrade`:``}" data-sell="${n}" title="${nm(km(e,t,(o?`\nBetter than what you wear there (+${o})`:``)+(i?`
Click again to sell it`:`
Click to sell`)))}">
      ${Cm(o)}<b>${xm(r)}${a?`<i style="background:${a}"></i>`:``}${nm(r.name)}</b>
      <small>Lv ${r.lv} · ${nm(yu(r))}</small><span class="price">${i?`Click again: sell for ${Su(t)} gold`:`Sells for ${Su(t)} gold`}</span></div>`}).join(``);Nm(`shopBody`,`
    <p class="npcSay">“Steel for the road, staves for the learned, and a trinket or two. Gold only, mind.”</p>
    <div class="skHead">You have <span class="shopGold">${t} gold</span> · Bag ${e.bag.length} / 24 · Monsters drop gold when they fall.</div>
    <div class="shopCols">
      <div>${a}</div>
      <div><h4>Sell <small>a quarter of the price · take worn things off first (C)</small></h4>
        <div class="shopGrid">${o||`<p class="shopNote">Your bag is empty.</p>`}</div></div>
    </div>`)}function qm(){let e=new kn,t=q(0,0,0,K(.62,.5,.62,5208628,{y:.25}),K(.66,.14,.66,3957032,{y:.07}),K(.5,.1,.5,6986308,{y:.55}),K(.08,.1,.02,1053708,{x:-.13,y:.33,z:.32,edges:!1}),K(.08,.1,.02,1053708,{x:.13,y:.33,z:.32,edges:!1}),K(.14,.04,.02,2759698,{y:.2,z:.32,edges:!1})),n=q(0,.6,0,K(.05,.2,.05,5933616,{y:.1}),K(.16,.04,.08,9093194,{x:.08,y:.2,rz:.4}),K(.16,.04,.08,9093194,{x:-.08,y:.18,rz:-.4}));return t.add(n),e.add(t),{root:e,tagY:1.15,pose(e,r,i){if(t.position.set(0,0,0),t.scale.set(1,1,1),t.rotation.set(0,0,0),r===`walk`){let n=Math.abs(Math.sin(e*7));t.position.y=n*.22,t.scale.set(1+(1-n)*.08,1-(1-n)*.12,1+(1-n)*.08)}else if(r===`attack`){let e=Math.sin(Math.min(i/.5,1)*Math.PI);t.position.z=e*.35,t.position.y=e*.15,t.rotation.x=e*.3}else{let n=Math.sin(e*2.4)*.03;t.scale.set(1-n,1+n,1-n)}n.rotation.z=Math.sin(e*3)*.15}}}function Jm(){let e=new kn,t=q(0,.42,0,K(.6,.5,.95,5915700,{y:.1}),K(.64,.14,.7,4600872,{y:-.12,z:.05}),K(.24,.18,.3,8025712,{y:.42,z:.2,rx:.1}),K(.2,.16,.26,9078400,{y:.4,z:-.12,rx:-.1}),K(.16,.12,.2,6973024,{y:.36,z:-.38}),K(.06,.18,.06,3811872,{y:.1,z:-.5,rx:.6})),n=q(0,.12,.47,K(.44,.38,.36,6967360,{z:.16}),K(.26,.2,.14,9071194,{y:-.06,z:.38}),K(.05,.05,.02,1052684,{x:-.06,y:-.04,z:.455,edges:!1}),K(.05,.05,.02,1052684,{x:.06,y:-.04,z:.455,edges:!1}),K(.06,.06,.02,14699050,{x:-.13,y:.08,z:.345,emissive:6297608,edges:!1}),K(.06,.06,.02,14699050,{x:.13,y:.08,z:.345,emissive:6297608,edges:!1}),K(.05,.16,.05,15260864,{x:-.16,y:-.02,z:.36,rx:-.5}),K(.05,.16,.05,15260864,{x:.16,y:-.02,z:.36,rx:-.5}),K(.1,.12,.06,4600872,{x:-.18,y:.22,z:.06,rz:.4}),K(.1,.12,.06,4600872,{x:.18,y:.22,z:.06,rz:-.4}));t.add(n),e.add(t);let r=[[-.2,.3],[.2,.3],[-.2,-.3],[.2,-.3]].map(([t,n])=>{let r=q(t,.4,n,K(.16,.36,.18,4600872,{y:-.18}),K(.17,.08,.19,2760730,{y:-.36}));return e.add(r),r});return{root:e,tagY:1.35,pose(e,i,a){if(t.position.set(0,.42,0),t.rotation.set(0,0,0),n.rotation.set(0,0,0),r.forEach(e=>{e.rotation.x=0}),i===`walk`){let n=Math.sin(e*11);r.forEach((e,t)=>{e.rotation.x=(t===0||t===3?n:-n)*.6}),t.position.y=.42+Math.abs(Math.cos(e*11))*.04}else if(i===`attack`){let e=a<.4?a/.4:Math.max(0,1-(a-.4)/.4);n.rotation.x=a<.4?e*.5:-e*.7,t.position.z=e*.25}else n.rotation.x=Math.sin(e*1.8)*.06,t.position.y=.42+Math.sin(e*2)*.01}}}function Ym(){let e=new kn,t=7236194,n=4867904,r=4155948,i=q(0,1.25,0,K(1.3,1.1,.8,t,{y:.35}),K(1.36,.22,.86,r,{y:.92}),K(.5,.18,.5,6262586,{x:-.3,y:1.06,z:-.1}),K(1,.5,.7,n,{y:-.4}),K(.3,.3,.06,8050943,{y:.4,z:.42,emissive:1731216,edges:!1})),a=q(0,1.1,.12,K(.62,.5,.56,t,{y:.2}),K(.66,.14,.6,r,{y:.48}),K(.12,.08,.02,10481919,{x:-.15,y:.24,z:.29,emissive:2789568,edges:!1}),K(.12,.08,.02,10481919,{x:.15,y:.24,z:.29,emissive:2789568,edges:!1}),K(.4,.08,.02,2762788,{y:.06,z:.29,edges:!1}));i.add(a);let o=[-1,1].map(e=>{let a=q(e*.82,.75,0,K(.42,.42,.42,r,{y:0}),K(.36,.8,.36,t,{y:-.5}),K(.5,.42,.5,n,{y:-1.05}));return i.add(a),a});e.add(i);let s=[-.34,.34].map(t=>{let r=q(t,.95,0,K(.42,.8,.46,n,{y:-.45}),K(.48,.2,.56,3815474,{y:-.85,z:.04}));return e.add(r),r});return{root:e,tagY:3.2,pose(e,t,n){if(i.position.set(0,1.25,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.forEach(e=>e.rotation.set(0,0,0)),s.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*5);s[0].rotation.x=t*.45,s[1].rotation.x=-t*.45,o[0].rotation.x=-t*.35,o[1].rotation.x=t*.35,i.position.y=1.25+Math.abs(Math.cos(e*5))*.06,i.rotation.z=t*.04}else if(t===`attack`){let e=n<.5?n/.5:Math.max(0,1-(n-.5)/.15),t=n<.5?0:Math.min(1,(n-.5)/.15)*Math.max(0,1-(n-.75)/.25);o.forEach(n=>{n.rotation.x=-e*2.6-t*1.2}),i.rotation.x=-e*.15+t*.3,a.rotation.x=e*-.2}else{let t=Math.sin(e*1.4);i.position.y=1.25+t*.025,o.forEach((e,n)=>{e.rotation.z=(n?-1:1)*(.05+t*.03)}),a.rotation.y=Math.sin(e*.5)*.3}}}}function Xm(){let e=new kn,t=14867659,n=12103836,r=11963135,i=q(0,.78,0,K(.08,.5,.08,n,{y:.2}),...[.32,.2,.08].map((e,n)=>K(.42-n*.04,.05,.24,t,{y:e})),K(.36,.08,.2,n,{y:-.04}),K(.18,.12,.12,5913722,{y:.2,z:-.02,emissive:2756672,edges:!1})),a=q(0,.56,.02,K(.32,.3,.3,t,{y:.14}),K(.26,.1,.24,n,{y:-.04,z:.02}),K(.07,.07,.02,r,{x:-.07,y:.15,z:.155,emissive:6961856,edges:!1}),K(.07,.07,.02,r,{x:.07,y:.15,z:.155,emissive:6961856,edges:!1}),K(.04,.05,.02,2761776,{y:.06,z:.155,edges:!1}));i.add(a);let o=e=>q(e*.26,.36,0,K(.07,.3,.07,t,{y:-.15}),K(.06,.26,.06,n,{y:-.42})),s=o(-1),c=o(1),l=q(0,-.55,.06,K(.05,.05,.16,4864554,{z:.02}),K(.05,.42,.03,9077880,{y:-.04,z:.1,rx:Math.PI/2-.2}));l.position.set(0,-.55,.08),l.rotation.x=-.3,c.add(l),i.add(s,c),e.add(i);let u=[-.1,.1].map(r=>{let i=q(r,.74,0,K(.07,.36,.07,t,{y:-.18}),K(.06,.34,.06,n,{y:-.52}),K(.1,.05,.16,n,{y:-.7,z:.03}));return e.add(i),i});return{root:e,tagY:1.75,pose(e,t,n){if(i.position.set(0,.78,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),s.rotation.set(0,0,0),c.rotation.set(-.3,0,0),u.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*9);u[0].rotation.x=t*.55,u[1].rotation.x=-t*.55,s.rotation.x=-t*.4,i.rotation.z=Math.sign(t)*.05,a.rotation.z=-Math.sign(t)*.08}else if(t===`attack`){let e=n<.45?n/.45:Math.max(0,1-(n-.45)/.2);c.rotation.x=-.3-e*2.2+(n>.45?Math.min(1,(n-.45)/.2)*.9:0),i.rotation.x=n>.45?.15:-.05}else a.rotation.x=Math.sin(e*2.3)*.08,a.rotation.y=Math.sin(e*.9)*.25,i.position.y=.78+Math.sin(e*2)*.01}}}function Zm(){let e=new kn,t=new kn;t.scale.setScalar(1.5),e.add(t);let n=14867659,r=12103836,i=q(0,1.15,0,K(.14,.14,1.6,r,{y:.32}),K(.42,.3,.7,5913722,{y:.02,emissive:2756672,edges:!1}),K(.6,.16,.3,r,{y:.18,z:-.7}),K(.66,.14,.26,r,{y:.22,z:.6}));for(let[e,t]of[.45,.2,-.05,-.3].entries()){let r=.82-e*.07;for(let e of[-1,1])i.add(K(.06,.55,.08,n,{x:e*r/2,y:.05,z:t,rz:e*.15}));i.add(K(r,.06,.08,n,{y:.3,z:t}))}let a=q(0,.32,.75);for(let e=0;e<4;e++)a.add(K(.15-e*.01,.15,.2,r,{y:e*.17,z:e*.15}));let o=q(0,.72,.62,K(.44,.32,.5,n,{z:.05}),K(.3,.18,.44,n,{y:-.03,z:.46}),...[-1,1].flatMap(e=>[K(.08,.07,.02,11963135,{x:e*.15,y:.08,z:.31,emissive:6961856,edges:!1}),K(.07,.07,.5,r,{x:e*.15,y:.18,z:-.32,rx:-.45}),K(.04,.07,.04,15986396,{x:e*.1,y:-.15,z:.58,edges:!1})])),s=q(0,-.13,-.12,K(.28,.07,.62,r,{z:.34})),c=K(.16,.1,.4,9109440,{z:.75,y:-.1,emissive:2792042,edges:!1});o.add(s,c),a.add(o),i.add(a);let l=[-1,1].map(e=>{let t=q(e*.3,.32,.4,K(1.3,.08,.08,n,{x:e*.65,y:.16,rz:e*.25}),...[0,1,2].flatMap(t=>[K(.05,.05,.95-t*.15,r,{x:e*(.45+t*.36),y:.12+t*.08,z:-.45+t*.07}),K(.3,.02,.75-t*.15,3811908,{x:e*(.62+t*.36),y:.1+t*.08,z:-.38+t*.07,edges:!1})]));return i.add(t),t}),u=q(0,.28,-.85);for(let e=0;e<6;e++)u.add(K(.13-e*.015,.13-e*.015,.24,r,{y:-e*.07,z:-e*.23}));u.add(K(.05,.16,.2,n,{y:-.36,z:-1.45,rx:.5})),i.add(u),t.add(i);let d=[[-.38,.55],[.38,.55],[-.38,-.55],[.38,-.55]].map(([e,i])=>{let a=q(e,1,i,K(.13,.5,.13,n,{y:-.25}),K(.1,.48,.1,r,{y:-.72,z:.04}),K(.22,.06,.3,r,{y:-.97,z:.08}));return t.add(a),a});return{root:e,tagY:4.2,pose(e,t,n){i.position.set(0,1.15,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.rotation.set(0,0,0),s.rotation.x=.05,u.rotation.set(0,Math.sin(e*1.6)*.25,0),d.forEach(e=>{e.rotation.x=0}),c.visible=!1;let r=.15+Math.sin(e*1.4)*.08;if(t===`walk`){let t=Math.sin(e*6);d.forEach((e,n)=>{e.rotation.x=(n===0||n===3?t:-t)*.5}),i.position.y=1.15+Math.abs(Math.cos(e*6))*.05,a.rotation.x=Math.sin(e*6)*.06,u.rotation.y=Math.sin(e*3)*.35}else if(t===`attack`){if(n<.35){let e=n/.35;a.rotation.x=-.55*e,o.rotation.x=-.2*e,s.rotation.x=.05+.3*e,r=.15+.7*e}else{let e=Math.min(1,(n-.35)/.15),t=n<.8?1:Math.max(0,1-(n-.8)/.2);a.rotation.x=-.55+.95*e*t,o.rotation.x=-.2+.4*e*t,s.rotation.x=.05+.6*t,i.rotation.x=.08*t,r=.85-.5*e,c.visible=t>.2,c.scale.set(1+t,1+t,1+2*t)}}else o.rotation.y=Math.sin(e*.7)*.3,a.rotation.x=Math.sin(e*1.1)*.05;l.forEach((e,t)=>{e.rotation.z=(t?1:-1)*r})}}}function Qm(){let e=new kn,t=4867652,n=3025706,r=16738858,i=q(0,.5,0,K(.42,.36,.9,t,{y:.06}),K(.44,.12,.6,n,{y:-.12,z:.05}),K(.06,.04,.5,r,{y:.25,z:-.05,emissive:9054728,edges:!1}),K(.08,.1,.36,n,{y:.1,z:-.6,rx:.5})),a=q(0,.18,.46,K(.34,.3,.36,t,{z:.12}),K(.2,.16,.24,n,{y:-.06,z:.36}),K(.07,.05,.02,r,{x:-.09,y:.06,z:.305,emissive:10500616,edges:!1}),K(.07,.05,.02,r,{x:.09,y:.06,z:.305,emissive:10500616,edges:!1}),K(.08,.14,.06,n,{x:-.12,y:.2,z:.02,rx:-.3}),K(.08,.14,.06,n,{x:.12,y:.2,z:.02,rx:-.3}));i.add(a),e.add(i);let o=[[-.15,.3],[.15,.3],[-.15,-.3],[.15,-.3]].map(([r,i])=>{let a=q(r,.48,i,K(.12,.44,.13,t,{y:-.22}),K(.13,.06,.16,n,{y:-.44,z:.02}));return e.add(a),a});return{root:e,tagY:1.3,pose(e,t,n){if(i.position.set(0,.5,0),i.rotation.set(0,0,0),a.rotation.set(0,0,0),o.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*13);o.forEach((e,n)=>{e.rotation.x=(n===0||n===3?t:-t)*.7}),i.position.y=.5+Math.abs(Math.cos(e*13))*.05}else if(t===`attack`){let e=Math.sin(Math.min(n/.5,1)*Math.PI);i.position.z=e*.35,i.rotation.x=e*.15,a.rotation.x=-e*.4}else a.rotation.x=Math.sin(e*2.6)*.05,i.position.y=.5+Math.sin(e*3)*.012}}}function $m(){let e=new kn,t=2762280,n=4077626,r=16722458,i=9071146,a=3804690,o=q(0,1.9,0,K(1.5,1.4,.9,t,{y:.4}),K(1.56,.16,.96,n,{y:1.1}),K(1.1,.55,.8,t,{y:-.5}),K(.3,.3,.04,r,{y:.45,z:.46,emissive:10489864,edges:!1}),K(.9,.06,.04,r,{y:0,z:.46,emissive:7342598,edges:!1}),K(1.4,1.9,.08,a,{y:-.1,z:-.5}),K(.5,.7,.08,a,{x:-.4,y:-1.15,z:-.52,rz:.1}),K(.45,.55,.08,a,{x:.35,y:-1.1,z:-.52,rz:-.12})),s=q(0,1.2,.05,K(.7,.66,.66,t,{y:.32}),K(.5,.06,.02,r,{y:.36,z:.335,emissive:12589578,edges:!1}),K(.76,.1,.72,i,{y:.7}));for(let e=0;e<9;e++){let t=e/9*Math.PI*2,n=[.34,.1,.26,.08,.3,.12,.06,.22,.1][e];s.add(K(.09,n,.09,i,{x:Math.cos(t)*.32,y:.75+n/2,z:Math.sin(t)*.32,ry:-t}))}o.add(s);let c=[-1,1].map(e=>{let i=q(e*.95,.95,0,K(.6,.45,.6,n,{y:.05}),K(.12,.28,.12,r,{x:e*.18,y:.34,emissive:7342598,edges:!1}),K(.4,.9,.4,t,{y:-.55}),K(.46,.4,.46,n,{y:-1.15}));return o.add(i),i}),l=q(0,-1.25,.1,K(.14,.5,.14,1709076),K(.7,.12,.16,i,{y:.3}),K(.22,2.3,.07,5919832,{y:1.5}),K(.06,2,.08,r,{y:1.45,emissive:5244934,edges:!1}));l.rotation.x=1.9,c[1].add(l),e.add(o);let u=[-.4,.4].map(r=>{let i=q(r,1.45,0,K(.5,1.3,.55,t,{y:-.65}),K(.56,.25,.7,n,{y:-1.32,z:.06}));return e.add(i),i});return{root:e,tagY:4.6,pose(e,t,n){if(o.position.set(0,1.9,0),o.rotation.set(0,0,0),s.rotation.set(0,0,0),c.forEach(e=>e.rotation.set(0,0,0)),u.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=Math.sin(e*4);u[0].rotation.x=t*.4,u[1].rotation.x=-t*.4,c[0].rotation.x=-t*.25,o.position.y=1.9+Math.abs(Math.cos(e*4))*.08}else if(t===`attack`){let e=n<.55?n/.55:Math.max(0,1-(n-.55)/.12),t=n<.55?0:Math.min(1,(n-.55)/.12)*Math.max(0,1-(n-.8)/.2);c[1].rotation.x=-e*2.4+t*.6,c[0].rotation.x=-e*1.2,o.rotation.x=-e*.12+t*.25}else{let t=Math.sin(e*1.1);o.position.y=1.9+t*.03,s.rotation.y=Math.sin(e*.4)*.35}}}}var eh={brown:[6965806,1971730],black:[2235418,920072],white:[14999250,12103844],takoyaki:[16183546,15899848,6969990,10104944]};function th(){let e=new kn,t=new Gr({color:16773368,transparent:!0,depthWrite:!1,blending:2}),n=Array.from({length:12},(n,r)=>{let i=new V(new Ii(.08,.08,.08),t.clone());return i.userData={a:r/12*Math.PI*2,r:.5+r%3*.15,phase:r*.37},e.add(i),i}),r=new Ha(16165088,1.2,4);return r.position.set(0,1,0),e.add(r),{root:e,update(e){let t=Math.sin(e*1.6);r.intensity=1.2+t*.35;for(let t of n){let{a:n,r,phase:i}=t.userData,a=(e*.35+i)%1,o=n+e*.6;t.position.set(Math.cos(o)*r,.15+a*2,.3+Math.sin(o)*r*1.8),t.material.opacity=Math.sin(a*Math.PI)*.9,t.rotation.y=e*2+n}}}}function nh(e=`brown`,{saddle:t=!1}={}){let n=new kn,[r,i,a=0,o=0]=eh[e]??eh.brown,s=q(0,.95,0,K(.55,.5,1.25,r,{emissive:a,y:.05}),K(.1,.35,.08,i,{emissive:o,y:0,z:-.68,rx:.4}),K(.12,.5,.1,i,{emissive:o,y:-.25,z:-.72,rx:.15}));t&&(s.add(K(.6,.12,.5,5909018,{y:.33,z:-.05})),s.add(K(.62,.3,.06,8010274,{y:.15,z:-.05})),s.add(K(.64,.06,.52,13214266,{y:.27,z:-.05})));let c=q(0,.2,.55,K(.3,.6,.34,r,{emissive:a,y:.25,z:.08,rx:-.5}),K(.08,.5,.3,i,{emissive:o,y:.32,z:-.02,rx:-.5})),l=q(0,.55,.32,K(.26,.26,.5,r,{emissive:a,z:.12}),K(.22,.18,.18,r,{emissive:a,y:-.06,z:.38}),K(.05,.05,.02,920072,{x:-.135,y:.04,z:.12,edges:!1}),K(.05,.05,.02,920072,{x:.135,y:.04,z:.12,edges:!1}),K(.06,.12,.05,r,{emissive:a,x:-.08,y:.18,z:-.05}),K(.06,.12,.05,r,{emissive:a,x:.08,y:.18,z:-.05}));t&&l.add(K(.28,.05,.05,5909018,{y:-.04,z:.3}));let u=null,d=null;e===`takoyaki`&&(l.add(K(.08,.32,.08,16765562,{y:.26,z:.24,rx:.5,emissive:11041320})),l.add(K(.05,.1,.05,16773312,{y:.44,z:.34,rx:.5,emissive:13676640,edges:!1})),u=th(),n.add(u.root),d=new Ha(16769696,.6,1.6),d.position.set(0,.5,.38),l.add(d)),c.add(l),s.add(c),n.add(s);let f=[[-.18,.45],[.18,.45],[-.18,-.45],[.18,-.45]].map(([e,t])=>{let i=q(e,.78,t,K(.14,.72,.16,r,{emissive:a,y:-.36}),K(.15,.1,.18,1709072,{y:-.74}));return n.add(i),i});return{root:n,tagY:1.95,pose(e,t,n,r=!1){if(u&&(u.update(e),d.intensity=.6+Math.sin(e*1.6)*.25),s.position.set(0,.95,0),s.rotation.set(0,0,0),c.rotation.set(0,0,0),f.forEach(e=>{e.rotation.x=0}),t===`walk`){let t=r?12:7,n=Math.sin(e*t);f.forEach((e,t)=>{e.rotation.x=(t===0||t===3?n:-n)*(r?.75:.45)}),s.position.y=.95+Math.abs(Math.cos(e*t))*(r?.08:.03),s.rotation.x=r?Math.sin(e*t)*.05:0,c.rotation.x=Math.sin(e*t)*.08}else{let t=Math.max(0,Math.sin(e*.35+(n??0)*6))**4;c.rotation.x=t*1.1+Math.sin(e*1.3)*.04}}}}function rh(e){return nh(e?.coat)}var ih={mossling:qm,cragboar:Jm,mosswarden:Ym,bonewalker:Xm,bone_dragon:Zm,ashhound:Qm,crownless_king:$m,wild_horse:rh,takoyaki:()=>nh(`takoyaki`)},ah={crownless_king:1.35,bone_dragon:1.05};function oh(e,t){let n=(ih[e]??qm)(t);return n.root.scale.setScalar(ah[e]??.9),n}var sh=null,ch,lh,uh,dh,fh=0,ph=vh(`nc.music`,!0),mh=vh(`nc.sfx`,!0),hh=.22,gh=.55,_h=.75;function vh(e,t){try{let n=localStorage.getItem(e);return n===null?t:n===`1`}catch{return t}}function yh(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}var bh=()=>({music:ph,sfx:mh});function xh(){if(!sh){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;sh=new e;let t=sh.createDynamicsCompressor();t.connect(sh.destination),dh=sh.createConvolver(),dh.buffer=Oh(2.2);let n=Th(.3);dh.connect(n).connect(t),ch=Th(mh?gh:0),ch.connect(t),lh=Th(ph?hh:0),lh.connect(t),uh=Th(0),uh.connect(lh),document.addEventListener(`visibilitychange`,()=>document.hidden?sh.suspend():sh.resume()),Vh()}sh.state===`suspended`&&!document.hidden&&sh.resume()}function Sh(){return ph=!ph,yh(`nc.music`,ph),sh&&lh.gain.setTargetAtTime(ph?hh:0,sh.currentTime,.2),ph}function Ch(){return mh=!mh,yh(`nc.sfx`,mh),sh&&ch.gain.setTargetAtTime(mh?gh:0,sh.currentTime,.05),mh}function wh(e){sh&&uh.gain.setTargetAtTime(e*_h,sh.currentTime,e>0?.6:2.5),fh=e}function Th(e){let t=sh.createGain();return t.gain.value=e,t}var Eh=null;function Dh(){if(!Eh){Eh=sh.createBuffer(1,sh.sampleRate,sh.sampleRate);let e=Eh.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}let e=sh.createBufferSource();return e.buffer=Eh,e.loop=!0,e}function Oh(e){let t=Math.floor(sh.sampleRate*e),n=sh.createBuffer(2,t,sh.sampleRate);for(let e=0;e<2;e++){let r=n.getChannelData(e);for(let e=0;e<t;e++)r[e]=(Math.random()*2-1)*(1-e/t)**3}return n}function kh(e,t,n=.7){let r=sh.createBiquadFilter();return r.type=e,r.frequency.value=t,r.Q.value=n,r}function Ah(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+r),e.gain.exponentialRampToValueAtTime(1e-4,t+r+i)}function Y(e,t,{type:n=`sine`,f0:r,f1:i=r,glide:a=.1,vol:o=.5,a:s=.005,d:c=.2,lp:l=0}){let u=sh.createOscillator();u.type=n,u.frequency.setValueAtTime(r,t),i!==r&&u.frequency.exponentialRampToValueAtTime(i,t+a);let d=Th(0);Ah(d,t,o,s,c);let f=u;if(l){let e=kh(`lowpass`,l);u.connect(e),f=e}return f.connect(d).connect(e),u.start(t),u.stop(t+s+c+.05),d}function jh(e,t,{type:n=`bandpass`,f0:r=1e3,f1:i=r,q:a=1,vol:o=.5,a:s=.003,d:c=.15}){let l=Dh(),u=kh(n,r,a);i!==r&&u.frequency.exponentialRampToValueAtTime(i,t+s+c);let d=Th(0);return Ah(d,t,o,s,c),l.connect(u).connect(d).connect(e),l.start(t,Math.random()*.5),l.stop(t+s+c+.05),d}var Mh={swing(e,t){jh(e,t,{f0:500,f1:2600,q:1.5,vol:.7,a:.04,d:.16})},cast(e,t){Y(e,t,{type:`triangle`,f0:320,f1:980,glide:.18,vol:.35,d:.28}).connect(dh),jh(e,t+.05,{type:`highpass`,f0:3e3,vol:.12,d:.2})},chime(e,t){for(let[n,r]of[[1318,.25],[1976,.15],[2637,.08]])Y(e,t,{f0:n,vol:r,d:.7}).connect(dh)},hit(e,t){jh(e,t,{type:`lowpass`,f0:1400,vol:.6,d:.08}),Y(e,t,{f0:140,f1:50,glide:.1,vol:.6,d:.12})},squish(e,t){Y(e,t,{type:`sine`,f0:380,f1:160,glide:.15,vol:.4,d:.16}),jh(e,t,{type:`lowpass`,f0:600,vol:.35,d:.12})},grunt(e,t){Y(e,t,{type:`sawtooth`,f0:120,f1:70,glide:.2,vol:.45,d:.22,lp:700})},bite(e,t){jh(e,t,{f0:1800,q:3,vol:.4,d:.04}),jh(e,t+.07,{f0:1400,q:3,vol:.35,d:.05})},hurt(e,t){Y(e,t,{f0:180,f1:60,glide:.15,vol:.7,d:.18}),Y(e,t,{type:`sawtooth`,f0:220,f1:140,glide:.15,vol:.18,d:.15,lp:900})},die(e,t){Y(e,t,{type:`square`,f0:440,f1:70,glide:.5,vol:.18,d:.55,lp:1200}),jh(e,t+.25,{type:`lowpass`,f0:400,vol:.4,a:.02,d:.35})},loot(e,t){Y(e,t,{type:`triangle`,f0:1568,vol:.18,d:.18}).connect(dh),Y(e,t+.08,{type:`triangle`,f0:2093,vol:.16,d:.3}).connect(dh)},bones(e,t){for(let n=0;n<4;n++)jh(e,t+n*.035+Math.random()*.02,{f0:2200+n*400,q:6,vol:.32,d:.03})},raise(e,t){Y(e,t,{type:`sawtooth`,f0:90,f1:180,glide:.5,vol:.25,d:.6,lp:600}).connect(dh);for(let n=0;n<5;n++)jh(e,t+.35+n*.05,{f0:2e3+n*300,q:6,vol:.28,d:.03})},respawn(e,t){for(let[n,r]of[[293.7,0],[440,.18],[587.3,.36]])Y(e,t+r,{type:`triangle`,f0:n,vol:.3,d:1.4}).connect(dh)},levelup(e,t){[293.7,370,440,587.3,740].forEach((n,r)=>Y(e,t+r*.08,{type:`triangle`,f0:n,vol:.28,d:.9}).connect(dh)),Y(e,t+.4,{f0:1174.7,vol:.12,d:1.2}).connect(dh),jh(e,t+.35,{type:`highpass`,f0:5e3,vol:.08,a:.1,d:.8})},cleave(e,t){jh(e,t,{f0:300,f1:1800,q:1.2,vol:.8,a:.06,d:.22}),Y(e,t+.05,{f0:90,f1:55,glide:.15,vol:.35,d:.2})},bash(e,t){Y(e,t,{type:`square`,f0:180,f1:90,glide:.08,vol:.3,d:.12,lp:1500}),jh(e,t,{f0:2500,q:6,vol:.35,d:.18})},cry(e,t){Y(e,t,{type:`sawtooth`,f0:110,f1:147,glide:.25,vol:.32,a:.08,d:.8,lp:900}).connect(dh),Y(e,t,{type:`sawtooth`,f0:165,f1:220,glide:.25,vol:.18,a:.08,d:.7,lp:1200})},charge(e,t){jh(e,t,{f0:200,f1:1200,q:.8,vol:.6,a:.1,d:.4})},firebolt(e,t){Y(e,t,{type:`sawtooth`,f0:200,f1:600,glide:.15,vol:.18,d:.25,lp:1800}),jh(e,t,{type:`lowpass`,f0:2200,vol:.4,a:.02,d:.4})},frost(e,t){for(let[n,r]of[[1568,0],[2093,.04],[2637,.08],[3136,.12]])Y(e,t+r,{f0:n,vol:.12,d:.5}).connect(dh);jh(e,t,{type:`highpass`,f0:4e3,vol:.25,a:.01,d:.45})},zap(e,t){for(let n=0;n<4;n++)jh(e,t+n*.035,{f0:3e3+Math.random()*2e3,q:2,vol:.35,d:.04});Y(e,t,{type:`square`,f0:900,f1:300,glide:.2,vol:.08,d:.22,lp:4e3})},blink(e,t){Y(e,t,{type:`sine`,f0:400,f1:1600,glide:.12,vol:.3,d:.14}).connect(dh),Y(e,t+.1,{type:`sine`,f0:1600,f1:800,glide:.1,vol:.15,d:.12}).connect(dh)},heal(e,t){for(let[n,r]of[[880,0],[1108.7,.06],[1318.5,.12]])Y(e,t+r,{f0:n,vol:.16,d:.6}).connect(dh)},smite(e,t){Mh.chime(e,t),Y(e,t,{f0:160,f1:60,glide:.2,vol:.5,d:.25})},sanctuary(e,t){for(let n of[293.7,370,440])Y(e,t,{type:`triangle`,f0:n,vol:.12,a:.25,d:1.6}).connect(dh)},ward(e,t){Y(e,t,{type:`sine`,f0:660,f1:990,glide:.3,vol:.18,a:.05,d:.6}).connect(dh),jh(e,t,{type:`highpass`,f0:6e3,vol:.06,a:.1,d:.5})},rune(e,t){Y(e,t,{type:`triangle`,f0:523.3,f1:784,glide:.1,vol:.14,d:.4}).connect(dh),jh(e,t,{f0:2200,q:4,vol:.12,d:.12})},binding(e,t){[392,523.3,659.3].forEach((n,r)=>Y(e,t+r*.07,{type:`triangle`,f0:n,vol:.15,d:.7}).connect(dh)),Y(e,t+.2,{type:`sawtooth`,f0:98,vol:.12,a:.05,d:.6,lp:500})},edge(e,t){jh(e,t,{f0:800,f1:4e3,q:2,vol:.4,a:.02,d:.3}),Y(e,t,{type:`sawtooth`,f0:110,f1:220,glide:.3,vol:.18,a:.05,d:.5,lp:1200}).connect(dh)},channel(e,t){Y(e,t,{type:`sawtooth`,f0:55,f1:165,glide:1.9,vol:.22,a:.3,d:1.8,lp:600}),jh(e,t,{type:`lowpass`,f0:300,f1:1500,vol:.25,a:1.2,d:.7})},boom(e,t){Y(e,t,{f0:90,f1:30,glide:.5,vol:.9,d:.7}),jh(e,t,{type:`lowpass`,f0:1800,f1:200,vol:.8,a:.005,d:.8}),jh(e,t+.05,{type:`highpass`,f0:3e3,vol:.2,d:.4}).connect(dh)},fail(e,t){Y(e,t,{type:`square`,f0:160,vol:.06,d:.1,lp:800})},cooldown(e,t){Y(e,t,{type:`sine`,f0:210,f1:170,glide:.12,vol:.18,d:.14})},engage(e,t){Y(e,t,{type:`square`,f0:660,vol:.08,d:.06,lp:2500}),Y(e,t+.07,{type:`square`,f0:880,vol:.08,d:.08,lp:2500})},click(e,t){Y(e,t,{type:`square`,f0:1200,vol:.05,d:.03,lp:3e3})}};function Nh(e,{vol:t=1,pan:n=0}={}){if(!sh||!mh||t<=.01||!Mh[e])return;let r=Th(t),i=sh.createStereoPanner();i.pan.value=Math.max(-1,Math.min(1,n)),r.connect(i).connect(ch),Mh[e](r,sh.currentTime+.005)}var Ph=60/92/2,Fh=[62,64,65,67,69,70,72,74,76,77,79,81],Ih=[[50,57,62,65],[46,53,58,62],[41,53,57,60],[48,55,60,64],[50,57,62,65],[46,53,58,62],[48,55,60,64],[45,52,57,61]],Lh=e=>440*2**((e-69)/12),Rh=0,zh=0,Bh=4;function Vh(){zh=sh.currentTime+.2,setInterval(Hh,40)}function Hh(){if(sh.state!==`running`)zh=Math.max(zh,sh.currentTime+.05);else for(;zh<sh.currentTime+.2;)Gh(Rh,zh),Rh++,zh+=Ph}function Uh(e,t,n){for(let r of t.slice(1))for(let t of[-6,6]){let i=sh.createOscillator();i.type=`sawtooth`,i.frequency.value=Lh(r),i.detune.value=t;let a=kh(`lowpass`,900),o=Th(0);o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.045,e+n*.35),o.gain.linearRampToValueAtTime(1e-4,e+n*1.05),i.connect(a).connect(o),o.connect(lh),o.connect(dh),i.start(e),i.stop(e+n*1.1)}}function Wh(e,t,n){let r=Y(lh,e,{type:`triangle`,f0:Lh(t),vol:n,a:.004,d:.55,lp:2400});Y(lh,e,{type:`sine`,f0:Lh(t)*2,vol:n*.25,a:.002,d:.2}),r.connect(dh)}function Gh(e,t){let n=Math.floor(e/8)%Ih.length,r=e%8,i=Ih[n],a=Ph*8;r===0&&(Uh(t,i,a),Y(lh,t,{type:`triangle`,f0:Lh(i[0]-12),vol:.35,a:.01,d:a*.45,lp:400})),r===4&&Y(lh,t,{type:`triangle`,f0:Lh(i[0]),vol:.22,a:.01,d:a*.4,lp:400});let o=.42+fh*.3;if(!(n%4==3&&r>=5)&&(r===0||Math.random()<o)){let e=i.map(e=>(e%12+12)%12),n=Bh+Math.round((Math.random()-.5)*3.2);if(n=Math.max(0,Math.min(Fh.length-1,n)),r%4==0){let t=n,r=1/0;Fh.forEach((i,a)=>{e.includes(i%12)&&Math.abs(a-n)<r&&(t=a,r=Math.abs(a-n))}),n=t}Bh=n;let a=Fh[n];i[3]%12==1&&a%12==0&&(a+=1),Wh(t,a,r===0?.22:.15)}let s=(e,t)=>{Y(uh,e,{f0:110,f1:45,glide:.12,vol:t,d:.22})},c=(e,t)=>{Y(uh,e,{f0:220,f1:140,glide:.08,vol:t,d:.12}),jh(uh,e,{type:`bandpass`,f0:900,vol:t*.3,d:.06})};(r===0||r===4)&&s(t,.6),(r===3||r===7)&&c(t,.35),r===6&&n%2&&c(t,.25),r%2==1&&jh(uh,t,{type:`highpass`,f0:6e3,vol:.06,d:.03})}var Kh={[od.GRASS]:2897187,[od.DIRT]:4864812,[od.STONE]:4670012,[od.TRIM]:3091239,[od.ASH]:3815478,[od.CHAR]:2301212},qh=class{constructor(){this.sets=new Map}add(e,t,n,r,i,a,{emissive:o=0,tint:s=1}={}){this.sets.has(e)||this.sets.set(e,{w:t,h:n,d:r,color:i,emissive:o,items:[]});let c=this.sets.get(e);return c.items.push({matrix:a,tint:s}),{set:c,index:c.items.length-1,matrix:a,color:c.color}}build(e){let t=new In;for(let n of this.sets.values()){let r=new mi(new Ii(n.w,n.h,n.d),new aa({color:16777215,emissive:n.emissive,flatShading:!0}),n.items.length);n.items.forEach((e,i)=>{r.setMatrixAt(i,e.matrix),r.setColorAt(i,t.setHex(n.color).multiplyScalar(e.tint))}),r.castShadow=!0,r.receiveShadow=!0,e.add(r),n.mesh=r}}},Jh=new en().makeScale(0,0,0),Yh=new Map;function Xh(e){return Yh.has(e)||Yh.set(e,new aa({color:e,transparent:!0,opacity:.22,depthWrite:!1,flatShading:!0})),Yh.get(e)}function Zh(e,t){let n=e.x-t.x,r=e.z-t.z,i=(n+r)/Math.SQRT2,a=Math.abs(n-r)/Math.SQRT2;return i>-.4&&i<3.6&&a<1.5}var Qh=new en,$h=new jt,eg=new dn,tg=new z,ng=new z;function rg(e,t,n,{ry:r=0,rx:i=0,rz:a=0,s:o=1}={}){return Qh.clone().compose(tg.set(e,t,n),$h.setFromEuler(eg.set(i,r,a)),ng.set(o,o,o))}function ig(e){let t=new kn;e.add(t);let n=(()=>{let e=1234;return()=>(e=e*16807%2147483647)/2147483647})();{let e=new Ii(.98,.2,.98),r=0;for(let e of pd.ground)e!==od.VOID&&r++;let i=new mi(e,new aa,r),a=new In,o=0;for(let e=0;e<pd.h;e++)for(let t=0;t<pd.w;t++){let r=pd.ground[e*pd.w+t];if(r===od.VOID)continue;let s=r===od.STONE?-.1:-.1-.02-n()*.03;i.setMatrixAt(o,rg(t+.5,s,e+.5));let c=.85+n()*.3;r===od.STONE&&(t+e)%2&&(c*=.9),i.setColorAt(o++,a.setHex(Kh[r]).multiplyScalar(c))}i.receiveShadow=!0,t.add(i)}let r=new qh,i=[],a=[],o=[];for(let e of pd.props){let s=n();switch(e.type){case`tree`:{let t=e.s*1.45,n=s*Math.PI;o.push({x:e.x,z:e.z,faded:!1,ghost:null,parts:[r.add(`trunk`,.26,1,.26,4862752,rg(e.x,.5*t,e.z,{ry:n,s:t}),{tint:.8+s*.3}),r.add(`leafA`,1.1,.7,1.1,2310175,rg(e.x,1.25*t,e.z,{ry:n,s:t}),{tint:.8+s*.4}),r.add(`leafB`,.7,.5,.7,3035686,rg(e.x,1.8*t,e.z,{ry:n+.4,s:t}),{tint:.8+s*.4})]});break}case`deadtree`:{let t=e.s*1.4,n=s*Math.PI;o.push({x:e.x,z:e.z,faded:!1,ghost:null,parts:[r.add(`deadTrunk`,.24,1.6,.24,4867136,rg(e.x,.8*t,e.z,{ry:n,rz:(s-.5)*.2,s:t}),{tint:.8+s*.3}),r.add(`deadBranch`,.12,.7,.12,4077620,rg(e.x+.18*t,1.25*t,e.z,{ry:n,rz:-.9,s:t}),{tint:.8+s*.3}),r.add(`deadBranch`,.12,.7,.12,4077620,rg(e.x-.14*t,1*t,e.z+.05,{ry:n+1,rz:.8,s:t}),{tint:.8+s*.3})]});break}case`spike`:r.add(`spike`,.4,1,.4,1840664,rg(e.x,.6*e.s,e.z,{ry:s*3,rz:(s-.5)*.3,s:1}).multiply(new en().makeScale(1,1.3*e.s,1))),r.add(`spikeTip`,.18,.5,.18,5904922,rg(e.x,1.4*e.s,e.z,{ry:s*3,s:e.s}),{emissive:2754054});break;case`bones`:r.add(`bone`,.5,.08,.1,13617332,rg(e.x,.05,e.z,{ry:s*3})),r.add(`bone`,.5,.08,.1,13617332,rg(e.x+.1,.1,e.z,{ry:s*3+1.2})),r.add(`skull`,.24,.2,.24,14209728,rg(e.x-.15,.1,e.z+.1,{ry:s*6}));break;case`portal`:{let n=new V(new Ji(.15,.75,6,1),new Gr({color:e.color,transparent:!0,opacity:.7,side:2,depthWrite:!1,blending:2}));n.rotation.x=-Math.PI/2,n.position.y=.06;let r=new V(new Ri(.7,.7,2.2,8,1,!0),new Gr({color:e.color,transparent:!0,opacity:.18,side:2,depthWrite:!1,blending:2}));r.position.y=1.1;let i=q(e.x,0,e.z,n,r);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;i.add(K(.26,.9+t%2*.35,.26,4867664,{x:Math.cos(n)*1,y:.45+t%2*.17,z:Math.sin(n)*1,ry:n})),i.add(K(.12,.12,.12,e.color,{x:Math.cos(n)*1,y:1.05+t%2*.35,z:Math.sin(n)*1,emissive:e.color,edges:!1}))}a.push({swirl:n,glow:r}),t.add(i);break}case`rock`:r.add(`rock`,.8,.55,.7,5920336,rg(e.x,.22*e.s,e.z,{ry:s*3,rz:.1,s:e.s}),{tint:.8+s*.3}),r.add(`rockTop`,.45,.35,.45,6973022,rg(e.x+.1,.55*e.s,e.z-.05,{ry:s*5,s:e.s}));break;case`crystal`:for(let t=0;t<3;t++){let n=t*2.1+s*6,i=[1,.7,.55][t]*e.s;r.add(`crystal`,.22,1,.22,6281448,rg(e.x+Math.cos(n)*.15*(t>0),i/2-.05,e.z+Math.sin(n)*.15*(t>0),{rx:t?Math.cos(n)*.35:0,rz:t?Math.sin(n)*.35:0,ry:n,s:1}).multiply(new en().makeScale(1,i,1)),{emissive:870997})}break;case`pillar`:{let t=e.broken?1.3+s*.8:3.4;r.add(`pillarBase`,.9,.3,.9,6972506,rg(e.x,.15,e.z)),r.add(`pillarShaft`,.62,1,.62,8222314,rg(e.x,.3+t/2,e.z).multiply(new en().makeScale(1,t,1)),{tint:.9+s*.2}),e.broken?r.add(`rubble`,.35,.25,.3,8222314,rg(e.x+.55,.12,e.z+.3,{ry:s*3})):r.add(`pillarCap`,.9,.25,.9,6972506,rg(e.x,.3+t+.12,e.z));break}case`house`:{let n=q(e.x,0,e.z,K(e.w-.1,2.6,e.d-.1,9075298,{y:1.3}),K(e.w+.2,.18,e.d+.2,4864554,{y:2.66}),K(e.w+.1,.6,e.d*.75,e.roof,{y:3.05}),K(e.w,.55,e.d*.45,e.roof,{y:3.6}),K(.8,1.7,.06,3811352,{y:.85,z:e.d/2-.02}),K(.5,.45,.06,15908960,{x:-e.w/4-.25,y:1.6,z:e.d/2-.02,emissive:6965776,edges:!1}),K(.5,.45,.06,15908960,{x:e.w/4+.25,y:1.6,z:e.d/2-.02,emissive:6965776,edges:!1}),K(.45,1,.45,5918792,{x:e.w/2-.6,y:3.7,z:-.3}));t.add(n);break}case`board`:t.add(q(e.x,0,e.z,K(.12,1.9,.12,4862752,{x:-.5,y:.95}),K(.12,1.9,.12,4862752,{x:.5,y:.95}),K(1.3,.8,.08,7031339,{y:1.4}),K(.35,.45,.02,15260864,{x:-.3,y:1.4,z:.05,edges:!1,rz:.05}),K(.3,.35,.02,14208176,{x:.25,y:1.45,z:.05,edges:!1,rz:-.08})));break;case`plinth`:{let n=q(e.x,0,e.z,K(2,.3,2,5919818,{y:.15}),K(1.5,.35,1.5,6972506,{y:.47}),K(1,.6,1,8222314,{y:.95}),K(.9,.12,.9,13214266,{y:1.31}));for(let e=0;e<9;e++){let t=e/9*Math.PI*2,r=e%3==1;n.add(K(.1,r?.12:.3,.1,13214266,{x:Math.cos(t)*.36,y:r?1.43:1.52,z:Math.sin(t)*.36,ry:-t}))}n.add(K(.12,.08,.1,13214266,{x:.7,y:.69,z:.55,ry:.6,rz:1.2})),t.add(n);break}case`shard`:{let n=new V(new Ki(.26),new aa({color:e.color,emissive:e.color,emissiveIntensity:.55,flatShading:!0}));n.scale.set(1,1.9,1),n.castShadow=!0;let r=q(e.x,0,e.z,K(.7,.25,.7,3814704,{y:.12}),K(.5,.12,.5,5919818,{y:.3}),n);n.position.y=1,i.push({crystal:n,k:e.k}),t.add(r);break}}}r.build(t);function s(e,n){if(e.faded=n,n&&!e.ghost){e.ghost=new kn;for(let t of e.parts){let n=new V(t.set.mesh.geometry,Xh(t.color));n.matrixAutoUpdate=!1,n.matrix.copy(t.matrix),e.ghost.add(n)}t.add(e.ghost)}e.ghost&&(e.ghost.visible=n);for(let t of e.parts)t.set.mesh.setMatrixAt(t.index,n?Jh:t.matrix),t.set.mesh.instanceMatrix.needsUpdate=!0}let c=null;return{root:t,update(e,t){if(t&&(!c||Math.hypot(t.x-c.x,t.z-c.z)>.15)){c={x:t.x,z:t.z};for(let e of o){if(Math.abs(e.x-t.x)>5||Math.abs(e.z-t.z)>5){e.faded&&s(e,!1);continue}let n=Zh(e,t);n!==e.faded&&s(e,n)}}for(let[t,n]of a.entries())n.swirl.rotation.z=e*1.2+t,n.swirl.material.opacity=.55+.2*Math.sin(e*2.4+t),n.glow.material.opacity=.14+.06*Math.sin(e*1.7+t);for(let t of i)t.crystal.position.y=1+Math.sin(e*1.5+t.k*.7)*.08,t.crystal.rotation.y=e*.6+t.k,t.crystal.material.emissiveIntensity=.45+.25*Math.sin(e*2+t.k)}}}var ag={[od.GRASS]:`#2a3322`,[od.DIRT]:`#5a4632`,[od.STONE]:`#5b554d`,[od.TRIM]:`#3a352f`,[od.ASH]:`#3c3a38`,[od.CHAR]:`#2a1c1c`},og={},sg=$u.oathgate,cg=null;function lg(e){let t=document.createElement(`canvas`);t.width=e.w,t.height=e.h;let n=t.getContext(`2d`);for(let t=0;t<e.h;t++)for(let r=0;r<e.w;r++){let i=(e.z0+t)*pd.w+e.x0+r;n.fillStyle=pd.solid[i]?`#141a12`:ag[pd.ground[i]],n.fillRect(r,t,1,1)}n.translate(-e.x0,-e.z0);for(let e of pd.props)e.type===`house`&&(n.fillStyle=`#8a6a4a`,n.fillRect(e.x-e.w/2,e.z-e.d/2,e.w,e.d)),e.type===`shard`&&(n.fillStyle=`#`+sd[e.k].toString(16).padStart(6,`0`),n.fillRect(e.x-.5,e.z-.5,1,1)),e.type===`plinth`&&(n.fillStyle=`#c9a23a`,n.fillRect(e.x-1,e.z-1,2,2)),e.type===`portal`&&(n.fillStyle=`#`+e.color.toString(16).padStart(6,`0`),n.fillRect(e.x-1.5,e.z-1.5,3,3));return t}function ug(e=`oathgate`){sg=$u[e],cg=og[e]??=lg(sg)}function dg(e,t){let n=e.canvas;e.setTransform(1,0,0,1,0,0),e.translate(n.width/2,n.height/2),e.rotate(Math.PI/4),e.scale(t,t),e.translate(-sg.w/2,-sg.h/2)}function fg(e,t,n){if(!cg)return null;let r=e.getBoundingClientRect(),i=e.width/r.width,a=e.width/(sg.w*Math.SQRT2),o=(t-r.left)*i-e.width/2,s=(n-r.top)*i-e.height/2,c=Math.SQRT1_2,l=(o*c+s*c)/a+sg.w/2+sg.x0,u=(-o*c+s*c)/a+sg.h/2+sg.z0;return l<sg.x0||u<sg.z0||l>sg.x0+sg.w||u>sg.z0+sg.h?null:{x:l,z:u}}function pg(e,t,n,r,i,a=``){if(!cg)return;let o=e.getContext(`2d`),s=e.width/(sg.w*Math.SQRT2);o.setTransform(1,0,0,1,0,0),o.clearRect(0,0,e.width,e.height),o.imageSmoothingEnabled=!1,dg(o,s),o.drawImage(cg,0,0),o.translate(-sg.x0,-sg.z0);for(let e of i?.values()??[]){if(e.deadT>=0||e.secret)continue;let t=e.m.root.position;o.fillStyle=e.pet?`#a07aff`:e.critter?`#d8c08a`:e.boss?`#ff3a2a`:`#d0503a`,o.fillRect(t.x-.6,t.z-.6,1.2,1.2)}for(let e of t.values()){if(e.id===n)continue;let t=e.c.root.position,r=a&&e.server.party===a;o.fillStyle=r?`#5af07a`:`#f2ece0`;let i=r?1.2:.8;o.fillRect(t.x-i,t.z-i,i*2,i*2)}r&&(o.fillStyle=`#ffd24a`,o.fillRect(r.x-1.1,r.z-1.1,2.2,2.2))}var mg={attack:`enemy`,cleave:`self`,charge:`enemy`,battle_cry:`self`,firebolt:`enemy`,frost_nova:`self`,arc_chain:`enemy`,blink:`blink`,mana_shield:`self`,cataclysm:`ground`,mend:`ally`,smite:`enemy`,ward:`ally`,holy_words:`self`,snare_rune:`ground`,glyph_field:`ground`,script_of_binding:`ground`,edge_of_the_shard:`self`,mount:`self`,raise_bonewalker:`self`,bone_armor:`self`,bone_dragon:`self`,wyrm_lance:`enemy`,sacred_chant:`self`,rampage:`self`,sword_dance:`self`,meteor_storm:`ground`},hg=new Set([`mend`,`ward`,`bone_armor`,`mana_shield`,`battle_cry`,`mount`,`raise_bonewalker`,`bone_dragon`,`edge_of_the_shard`]),gg=9105568,_g=16742986;function vg(e,t){if(e===`attack`)return{kind:`enemy`,range:9,r:0,color:_g,chase:!0};let n=eu(t.occ,e)?.use;if(!n)return null;let r=n=>ru(n,t.skills.get(e)||1),i=Ul[t.occ].range,a=e===`mount`?0:r(n.range??0),o=e===`cleave`?i+n.reach:e===`mount`?n.range:r(n.radius??n.r??n.reach??.7);return{kind:mg[e]??`self`,range:a,r:o,color:hg.has(e)?gg:_g}}var yg=e=>new Gr({transparent:!0,opacity:e,depthWrite:!1,side:2}),bg=e=>(e.rotation.x=-Math.PI/2,e.renderOrder=2,e);function xg(e){let t=bg(new V(new Ji(.975,1,72),yg(.4))),n=bg(new V(new Li(1,48),yg(.16))),r=bg(new V(new Ji(.93,1,48),yg(.85))),i=new kn;i.add(n,r);let a=bg(new V(new Ji(.5,.64,32),yg(.9))),o=[t,i,a];for(let t of o)t.visible=!1,e.add(t);let s=(e,t,n,r)=>{e.position.set(t,.05,n),e.scale.setScalar(r),e.visible=!0};return{hide(){for(let e of o)e.visible=!1},update(e,c,l,u,d){for(let e of o)e.visible=!1;if(!e||!c)return;for(let i of[t.material,n.material,r.material,a.material])i.color.setHex(e.color);e.range>0&&s(t,c.x,c.z,e.range);let f=t=>Math.hypot(t.x-c.x,t.z-c.z)<=e.range,p=t=>{let n=Math.hypot(t.x-c.x,t.z-c.z),r=n>e.range?e.range/n:1;return{x:c.x+(t.x-c.x)*r,z:c.z+(t.z-c.z)*r}};if(e.kind===`self`)s(i,c.x,c.z,e.r);else if(e.kind===`ground`){let t=u&&f(u)?u:l?p(l):c;s(i,t.x,t.z,e.r)}else if(e.kind===`blink`&&l){let e=p(l);s(i,e.x,e.z,.45)}else u&&(s(a,u.x,u.z,1),a.material.opacity=e.chase||f(u)?.9:.3,a.rotation.z=d*1.5);r.rotation.z=d*.5,n.material.opacity=.13+.05*Math.sin(d*5)}}}var Sg=`https://www.gstatic.com/firebasejs/10.12.2/`,Cg={apiKey:`AIzaSyDxhqPV_ZioIawO7K3NZkSLOJ3sGPZF2rQ`,authDomain:`pkrig-games.firebaseapp.com`,projectId:`pkrig-games`,storageBucket:`pkrig-games.firebasestorage.app`,messagingSenderId:`101640624356`,appId:`1:101640624356:web:82bf674ebf21652fe6f4f1`},wg=null;function Tg(){return wg??=(async()=>{let[{initializeApp:e},t,n]=await Promise.all([`firebase-app.js`,`firebase-auth.js`,`firebase-firestore.js`].map(e=>import(Sg+e))),r=e(Cg),i=t.getAuth(r),a=n.getFirestore(r);await t.getRedirectResult(i).catch(()=>{}),await i.authStateReady();let o=()=>n.doc(a,`ninefold`,i.currentUser.uid);return{user:()=>i.currentUser,onUser:e=>t.onAuthStateChanged(i,e),async signInGoogle(){let e=new t.GoogleAuthProvider;try{await t.signInWithPopup(i,e)}catch(n){if(n.code===`auth/popup-blocked`||n.code===`auth/operation-not-supported-in-this-environment`)await t.signInWithRedirect(i,e);else throw n}},signInGuest:()=>t.signInAnonymously(i),signOut:()=>t.signOut(i),async list(){return i.currentUser?(await n.getDoc(o())).data()?.saves??{}:{}},async save(e){let t=await this.list(),r=e.name.toLowerCase();if(!t[r]&&Object.keys(t).length>=12)throw Error(`You can keep 12 heroes; load one and save over it.`);await n.setDoc(o(),{saves:{[r]:e}},{mergeFields:[new n.FieldPath(`saves`,r)]})}}})(),wg.catch(()=>{wg=null}),wg}function Eg(e){let t=e=>e instanceof Map?Object.fromEntries(e):e?.toJSON?e.toJSON():{...e},n={name:e.name,occ:e.occ,sex:e.sex,job:e.job,level:e.level,exp:e.exp,wisdom:e.wisdom,gold:e.gold??0,skills:t(e.skills),equip:t(e.equip),bag:[...e.bag],horse:e.horse||``,riding:!!e.mount,at:Date.now()};for(let t of Object.keys(Ru))n[t]=e[t];return n}var X=(e,t=.8)=>new Gr({color:e,transparent:!0,opacity:t,depthWrite:!1,blending:2,side:2}),Dg=e=>(e.rotation.x=-Math.PI/2,e);function Og(e,{shake:t=()=>{},sound:n=()=>{}}={}){let r=[],i=new Map;function a(t,n,i){e.add(t);let a={obj:t,t:0,life:n,update:i};return r.push(a),t.userData.fx=a,t}let o=e=>{e&&(e.t=e.life)};function s(e,t){let n=new kn;n.add(Dg(new V(new Ji(t*.82,t,6),X(e,.8))));let r=Dg(new V(new Ji(t*.35,t*.45,4),X(e,.9)));return n.add(r),n.userData.inner=r,n}function c(e){let t=e.sweep===`circle`?Math.PI*2:120*Math.PI/180,n=e.dir-Math.PI/2,r=Dg(new V(new Ji(.3,e.r,32,1,n-t/2,t),X(16751178,.75)));r.position.set(e.x,.55,e.z),a(r,.3,e=>{r.material.opacity=.75*(1-e),r.scale.setScalar(.85+e*.3),r.rotation.z=e*.6})}function l(e,t,n,r,i,o,s=.12){let c=Dg(new V(new Ji(1-s,1,40),X(n)));c.position.set(e,.06,t),a(c,o,e=>{c.scale.setScalar(r+(i-r)*Math.min(1,e*1.6)),c.material.opacity=.85*(1-e)})}function u(e,t,n,r){let i=new V(new Gi(n,0),X(t,.7));i.position.copy(e),a(i,r,e=>{i.scale.setScalar(1+e*1.5),i.material.opacity=.7*(1-e),i.rotation.y+=.2})}function d(e){l(e.x,e.z,10119935,.2,.9,.7),u(new z(e.x,.3,e.z),6969978,.45,.6),u(new z(e.x,.6,e.z),11963135,.25,.4)}function f(e,t){let n=!1;a(new kn,Math.max(.001,e),e=>{e>=1&&!n&&(n=!0,t())})}function p(e,t,n,r,i,o=.1){let s=new kn;for(let e=0;e<n;e++){let e=new V(new Ii(o,o,o),X(t,.95)),n=Math.random()*Math.PI*2,i=.4+Math.random()*.9,a=r*(.5+Math.random()*.7);e.userData.v=new z(Math.cos(n)*a,i*a,Math.sin(n)*a),s.add(e)}s.position.copy(e),a(s,i,(t,n)=>{for(let r of s.children)r.userData.v.y-=9*n,r.position.addScaledVector(r.userData.v,n),r.position.y<-e.y&&(r.position.y=-e.y,r.userData.v.multiplyScalar(.4),r.userData.v.y*=-.5),r.rotation.x+=n*6,r.rotation.y+=n*5,r.material.opacity=.95*(1-t)})}function m(e,t,n,r,i,o){let s=new kn,c=e.distanceTo(t),l=new V(new Ii(r,r*.6,c),X(n,.75));s.add(l),o&&s.add(new V(new Ii(r*.35,r*.25,c),X(o,.95))),s.position.copy(e).lerp(t,.5),s.lookAt(t),a(s,i,e=>{s.children.forEach((t,n)=>{t.material.opacity=(n?.95:.75)*(1-e)**1.5}),s.scale.set(1-e*.6,1-e*.6,1)})}function h(e,t,n,r,i,o=12){let s=new kn,c=new V(new Ii(r,o,r),X(n,.75)),l=new V(new Ii(r*.4,o,r*.4),X(16777215,.9));s.add(c,l),s.position.set(e,o/2,t),a(s,i,e=>{let t=Math.min(1,e*5);s.scale.set(1-e*.8,t,1-e*.8),s.position.y=o-o/2*t,c.material.opacity=.75*(1-e),l.material.opacity=.9*(1-e)})}function g(e,t,n){let r=new kn;for(let e of[.8,-.8]){let t=new V(new Ii(1.3,.07,.04),X(n,1));t.rotation.z=e,t.add(new V(new Ii(1.3,.025,.05),X(16777215,1))),r.add(t)}r.position.copy(e),r.rotation.y=t,a(r,.35,e=>{r.scale.setScalar(.6+e*.7),r.children.forEach(t=>{t.material.opacity=1-e,t.children[0].material.opacity=1-e})})}function _(e){let t=new kn;t.add(new V(new Ii(.1,.03,.9),X(e,.9))),t.add(new V(new Ii(.04,.035,.85),X(16777215,.95)));let n=new V(new Ii(.34,.05,.06),X(e,.9));n.position.z=-.45;let r=new V(new Ii(.06,.05,.22),X(e,.7));return r.position.z=-.58,t.add(n,r),t}function v(e,r,i,o){let s=o?.75:.55,c=o?1.1:.4;f(Math.max(0,r-s),()=>{let t=new kn;t.add(new V(new Gi(c,0),X(16738842,1))),t.add(new V(new Gi(c*.6,0),X(16773280,1)));let n=new V(new Ii(c*.9,c*.9,5),X(16747050,.5));n.position.z=-2.6,t.add(n);let r=new z(e.x-5,15,e.z-5),i=new z(e.x,.3,e.z);t.position.copy(r),t.lookAt(i),a(t,s,(e,n)=>{t.position.copy(r).lerp(i,e*e),t.children[0].rotation.x+=n*8,t.children[1].rotation.y+=n*9})}),f(r,()=>{let r=new z(e.x,.4,e.z);l(e.x,e.z,16756832,.3,i*1.25,o?.9:.5,.25),l(e.x,e.z,16730650,.2,i,o?.7:.4,.45),u(r,16742954,o?1.6:.6,o?.8:.45),u(r.clone().setY(.8),16773280,o?.9:.35,.35),p(r,16747050,o?40:12,o?7:4.5,o?1.4:.9,o?.14:.09);let s=Dg(new V(new Li(i*.8,20),new Gr({color:1707014,transparent:!0,opacity:.55,depthWrite:!1})));s.position.set(e.x,.03,e.z),a(s,o?4:2.5,e=>{s.material.opacity=.55*(1-e)}),o&&h(e.x,e.z,16738842,2.2,.9,10),t(o?1:.28),n(`boom`,e.x,e.z,o?1:.55)})}function y(e,t,n,r){let i=new kn;for(let e=0;e<n;e++){let r=new V(new Ii(.08,.08,.08),X(t,.9));r.userData={a:e/n*Math.PI*2,r:.25+Math.random()*.2,h:Math.random()*.4,s:.8+Math.random()*.6},i.add(r)}let o=a(i,r,t=>{let n=e();n&&o.position.copy(n);for(let e of i.children){let n=e.userData;e.position.set(Math.cos(n.a+t*3)*n.r,n.h+t*1.4*n.s,Math.sin(n.a+t*3)*n.r),e.material.opacity=.9*(1-t)}})}function b(e,t,n,r){let i=new kn,o=[e.clone()],s=Math.max(2,Math.round(e.distanceTo(t)/.5));for(let n=1;n<s;n++){let r=e.clone().lerp(t,n/s);r.x+=(Math.random()-.5)*.35,r.y+=(Math.random()-.5)*.25,r.z+=(Math.random()-.5)*.35,o.push(r)}o.push(t.clone());let c=X(n,.95);for(let e=0;e<o.length-1;e++){let t=new V(new Ii(.06,.06,o[e].distanceTo(o[e+1])),c);t.position.copy(o[e]).lerp(o[e+1],.5),t.lookAt(o[e+1]),i.add(t)}a(i,r,e=>{c.opacity=.95*(1-e)*(.6+.4*Math.random())})}let x={cleave(e){let t=(e.arc??120)*Math.PI/180,n=e.dir-Math.PI/2,r=Dg(new V(new Ji(.4,e.r,24,1,n-t/2,t),X(16770736,.7)));r.position.set(e.x,.5,e.z),a(r,.3,e=>{r.material.opacity=.7*(1-e),r.scale.setScalar(.8+e*.3)})},battle_cry(e){l(e.x,e.z,16734778,.5,e.r,.6,.15),l(e.x,e.z,16756832,.3,e.r*.6,.45)},charge(e){l(e.x,e.z,14207144,.3,1.2,.35)},firebolt(e,t){if(e.sweep)return c(e);let n=new V(new Gi(.16,1),X(16747050,1)),r=new V(new Gi(.09,0),X(16773280,1));n.add(r);let i=new z(e.x,1,e.z);n.position.copy(i);let o=!1;a(n,e.travel+.25,(r,a,s)=>{let c=t(e.target,.45)??n.position,l=Math.min(1,s/Math.max(.05,e.travel));n.position.copy(i).lerp(c,l),n.position.y+=Math.sin(l*Math.PI)*.3,l>=1&&!o&&(o=!0,u(c.clone(),16738842,.3,.35),n.visible=!1)})},frost_nova(e){l(e.x,e.z,10478847,.3,e.r,.5,.2),l(e.x,e.z,16777215,.2,e.r*.8,.35,.08)},arc_chain(e){if(e.sweep)return c(e);for(let t=0;t<e.points.length-1;t++){let n=new z(e.points[t].x,t?.5:1,e.points[t].z),r=new z(e.points[t+1].x,.5,e.points[t+1].z);b(n,r,12116223,.3),b(n,r,6990079,.25)}},blink(e){u(new z(e.from.x,.7,e.from.z),11569919,.35,.4),u(new z(e.to.x,.7,e.to.z),11569919,.35,.4)},mend(e,t){y(()=>t(e.target,.2),9105568,10,.9);for(let n of e.also??[])y(()=>t(n,.2),13168800,6,.8)},smite(e,t){let n=t(e.target,0);if(!n)return;let r=new V(new Ii(.35,4,.35),X(16769162,.8));r.position.set(n.x,2,n.z),a(r,.4,e=>{r.material.opacity=.8*(1-e),r.scale.set(1-e*.7,1,1-e*.7)}),l(n.x,n.z,16769162,.2,.9,.35)},ward(e,t){let n=t(e.target,.8);n&&u(n,16769162,.45,.35)},holy_words(e,t){let n=new kn,r=Dg(new V(new Li(e.r,40),X(16765024,.1))),i=Dg(new V(new Ji(e.r-.1,e.r,48),X(16769162,.7)));r.position.y=.04,i.position.y=.05,n.add(r,i),a(n,e.channel+.2,(a,o,s)=>{let c=t(e.id,0);c&&n.position.set(c.x,0,c.z);let l=s>e.channel?1-(s-e.channel)/.2:Math.min(1,s*5);r.material.opacity=(.08+.04*Math.sin(s*6))*l,i.material.opacity=.7*l}),y(()=>t(e.id,.2),16769162,14,e.channel)},mana_shield(e,t){let n=t(e.id,0);n&&l(n.x,n.z,7317759,.2,1.1,.5),y(()=>t(e.id,.3),7317759,8,e.dur)},bone_armor(e,t){let n=t(e.id,0);if(n){for(let r=0;r<8;r++){let i=r/8*Math.PI*2,o=new V(new Ii(.1,.32,.1),X(15261900,.9));a(o,.45,r=>{let a=t(e.id,0)??n,s=1.3*(1-r)+.35;o.position.set(a.x+Math.cos(i+r)*s,.5+r*.6,a.z+Math.sin(i+r)*s),o.rotation.y=i+r*4,o.material.opacity=.9*(1-r*.6)})}f(.4,()=>{let n=t(e.id,0);n&&l(n.x,n.z,10119935,.3,1.2,.4)})}},raise_bonewalker(e){for(let t of e.spawned)d(t)},bone_dragon(e){for(let t of e.spawned)d(t),l(t.x,t.z,9109440,.4,2.2,1,.2),u(new z(t.x,.9,t.z),4864602,1.1,.9)},wyrm_lance(e,r){let i=new z(e.from.x,.9,e.from.z),o=new z(e.to.x,.9,e.to.z),s=i.distanceTo(o),c=new z(o.z-i.z,0,i.x-o.x).normalize(),d=Math.max(6,Math.round(s*2.2)),g=new kn,_=new kn;_.add(new V(new Ii(.5,.35,.7),X(9099519,.95)));for(let e of[-.18,.18]){let t=new V(new Ii(.06,.06,.5),X(16777215,.95));t.position.set(e,.25,-.3),t.rotation.x=.6,_.add(t)}for(let e=0;e<d;e++){let t=new V(new Ii(.42-.3*e/d,.3-.18*e/d,.5),X(e%2?5943528:9099519,.8));t.visible=!1,g.add(t)}g.add(_),a(g,e.travel+.6,(t,n,r)=>{let a=Math.min(1,r/e.travel);g.children.forEach((t,n)=>{if(t===_)return;let l=a-n/d*.9;if(t.visible=l>0,!t.visible)return;let u=i.clone().lerp(o,l).addScaledVector(c,Math.sin(l*s*1.6-r*10)*.35);u.y=.9+Math.sin(l*s*1.1)*.2,t.position.copy(u),t.lookAt(o.x,u.y,o.z),t.material.opacity=.85*Math.max(0,1-(r-e.travel)/.6)*(1-n/d*.6)}),_.position.copy(i).lerp(o,a),_.position.y=1,_.lookAt(o.x,1,o.z),_.children.forEach(t=>{t.material.opacity=Math.max(0,1-(r-e.travel)/.4)})}),m(i.clone().setY(.5),o.clone().setY(.5),5943528,.5,e.travel+.5,16777215);for(let t=1;t<=4;t++)f(e.travel*t/5,()=>u(i.clone().lerp(o,t/5).setY(.4),12118271,.35,.4));f(e.travel,()=>{let i=r(e.target,.9)??o;l(i.x,i.z,16777215,.3,3.2,.6,.15),l(i.x,i.z,5943528,.2,2.4,.5,.35),u(i,9099519,.9,.5),p(i,9099519,26,6,1.1,.12),h(i.x,i.z,9099519,.7,.5,8),t(.8),n(`boom`,i.x,i.z,.9)})},sacred_chant(e,t){let n=new kn,r=Dg(new V(new Ji(1.75,1.9,48),X(16769162,.85))),i=Dg(new V(new Ji(1.25,1.33,48),X(16769162,.8))),o=Dg(new V(new Ji(1.5,1.62,3),X(16773312,.85))),s=Dg(new V(new Ji(1.5,1.62,3),X(16773312,.85))),c=Dg(new V(new Li(1.9,48),X(16765024,.12)));s.rotation.z=Math.PI;let l=new V(new Ii(1.1,7,1.1),X(16773312,.2));l.position.y=3.5,n.add(c,r,i,o,s,l),n.children.forEach(e=>{e!==l&&(e.position.y=.05)}),a(n,e.channel+.3,(a,c,u)=>{let d=t(e.id,0);d&&n.position.set(d.x,0,d.z);let f=Math.min(1,u/.35),p=u>e.channel?1-(u-e.channel)/.3:1;n.scale.set(f,1,f),r.rotation.z=u*.8,i.rotation.z=-u*1.2,o.rotation.z=u*.5,s.rotation.z=Math.PI+u*.5,[r,i,o,s].forEach(e=>{e.material.opacity=(.65+.3*Math.sin(u*9))*p}),l.material.opacity=.25*Math.min(1,u/e.channel)*p,l.scale.set(.6+.6*Math.min(1,u/e.channel),1,.6+.6*Math.min(1,u/e.channel))}),y(()=>t(e.id,.2),16769162,18,e.channel);for(let n=0;n<6;n++){let r=n/6*Math.PI*2,i=new V(new Ji(.12,.18,4),X(16773312,.9));a(i,e.channel,n=>{let a=t(e.id,0);a&&i.position.set(a.x+Math.cos(r+n*3)*1.6,.3+n*2.4,a.z+Math.sin(r+n*3)*1.6),i.rotation.y=n*8,i.material.opacity=.9*Math.sin(n*Math.PI)})}},rampage(e){let r=new z(e.from.x,.8,e.from.z);for(let i of e.hops){let a=r.clone(),o=new z(i.x,.8,i.z),s=new z(i.at.x,.9,i.at.z);f(Math.max(0,i.t-e.hop*.8),()=>{m(a,o,14173483,.45,.45,16765088),u(a.clone().setY(.5),9054746,.4,.4)}),f(i.t,()=>{g(s,Math.atan2(o.x-a.x,o.z-a.z),16734778),p(s,16742986,10,4,.6,.08),t(.3),n(`cleave`,s.x,s.z,.8)}),r=o}},sword_dance(e,t){let n=new kn;for(let e=0;e<8;e++){let t=_(e%2?10128127:9101567);t.userData.a=e/8*Math.PI*2,n.add(t)}let r=Dg(new V(new Ji(1.25,1.35,8),X(10128127,.6)));n.add(r),a(n,e.dur,(i,a,o)=>{let s=t(e.id,0);s&&n.position.set(s.x,0,s.z);let c=Math.min(1,o/.5),l=i>.85?(1-i)/.15:1;for(let e of n.children){if(e===r)continue;let t=e.userData.a+o*3.2;e.position.set(Math.cos(t)*1.3,.2+c*1.4+Math.sin(o*6+e.userData.a)*.1,Math.sin(t)*1.3),e.rotation.set(-Math.PI/2,0,0),e.rotateY(t),e.children.forEach(e=>{e.material.opacity=.9*l})}r.position.y=.06,r.rotation.z=-o*2,r.material.opacity=.6*l}),l(e.x,e.z,10128127,.3,1.6,.5,.2)},meteor_storm(e){let t=Math.max(...e.falls.map(e=>e.t)),n=new kn,r=Dg(new V(new Li(e.r+3,48),new Gr({color:0,transparent:!0,opacity:0,depthWrite:!1}))),i=Dg(new V(new Li(e.r,48),X(16726554,.12))),o=Dg(new V(new Ji(e.r-.14,e.r,48),X(16734762,.85))),c=s(16742970,e.r*.55);r.position.y=.035,i.position.y=.04,o.position.y=.05,c.position.y=.06,n.add(r,i,o,c),n.position.set(e.x,0,e.z),a(n,t+.8,(e,n,a)=>{let s=a>t?1-(a-t)/.8:Math.min(1,a*3);r.material.opacity=.4*s,i.material.opacity=(.1+.06*Math.sin(a*10))*s,o.material.opacity=(.55+.35*Math.sin(a*12))*s,c.rotation.y=a*1.2,c.children.forEach(e=>{e.material.opacity=.8*s})});for(let t of e.falls)v(t,t.t,t.big?e.r:e.impact,t.big)},snare_rune(e){let t=s(11569919,e.r);t.position.set(e.x,.05,e.z),i.set(e.zid,a(t,e.life,(e,n,r)=>{t.rotation.y=r*.8,t.children[0].material.opacity=.35+.2*Math.sin(r*3)}).userData.fx)},glyph_field(e){let t=new kn,n=Dg(new V(new Li(e.r,40),X(9071856,.14))),r=s(10124543,e.r);n.position.y=.04,r.position.y=.05,t.add(n,r),t.position.set(e.x,0,e.z),i.set(e.zid,a(t,e.dur,(e,t,i)=>{let a=e>.88?(1-e)/.12:Math.min(1,i*4);n.material.opacity=(.12+.05*Math.sin(i*5))*a,r.children.forEach(e=>{e.material.opacity=.75*a}),r.rotation.y=-i*.4}).userData.fx)},script_of_binding(e){l(e.x,e.z,9071856,e.r,e.r,.9,.06);for(let t=0;t<3;t++){let n=-Math.PI/2+t*Math.PI*2/3,r=s(13150463,.45);r.position.set(e.x+Math.cos(n)*e.r,.06,e.z+Math.sin(n)*e.r),a(r,1.2,e=>{r.children.forEach(t=>{t.material.opacity=.9*(1-e)}),r.rotation.y=e*3});let i=(t+1)*(Math.PI*2)/3-Math.PI/2;b(new z(e.x+Math.cos(n)*e.r,.1,e.z+Math.sin(n)*e.r),new z(e.x+Math.cos(i)*e.r,.1,e.z+Math.sin(i)*e.r),13150463,.6)}},edge_of_the_shard(e,t){let n=new kn,r=Dg(new V(new Ji(.55,.7,24),X(16747066,.7))),i=Dg(new V(new Ji(.85,.92,6),X(11569919,.7)));n.add(r,i),a(n,e.dur,(a,o,s)=>{let c=t(e.id,.06);c&&n.position.copy(c);let l=a>.9?(1-a)/.1:1;r.material.opacity=(.5+.25*Math.sin(s*6))*l,i.material.opacity=.7*l,i.rotation.z=s*1.5});let o=t(e.id,.8);o&&u(o,16747066,.5,.4)},cataclysm(e,t){let n=new kn,r=Dg(new V(new Ji(e.r-.12,e.r,48),X(16734762,.8))),i=Dg(new V(new Li(e.r,48),X(16734762,.15)));r.position.y=.05,i.position.y=.04,n.add(r,i),n.position.set(e.x,0,e.z),a(n,e.channel,(e,t,n)=>{i.scale.setScalar(Math.max(.01,e)),r.material.opacity=.5+.4*Math.sin(n*14)});let o=new V(new Gi(.55,0),X(16742954,1));o.add(new V(new Gi(.32,0),X(16773280,1))),a(o,e.channel,t=>{let n=Math.max(0,(t-.55)/.45);o.visible=n>0,o.position.set(e.x-3*(1-n),14*(1-n)+.3,e.z-3*(1-n)),o.rotation.x+=.2}),t(e.id)&&y(()=>t(e.id,.4),16747066,12,e.channel)}},S={meteor(e){l(e.x,e.z,16756832,.3,e.r*1.2,.6,.25),l(e.x,e.z,16734762,.2,e.r,.45,.4),u(new z(e.x,.6,e.z),16742954,.9,.5),u(new z(e.x,.4,e.z),16773280,.5,.35)},slam(e){l(e.x,e.z,16726554,.3,e.r,.5,.3),l(e.x,e.z,9050634,.2,e.r*.7,.4,.4),u(new z(e.x,.3,e.z),3811878,.7,.5)},breath(e){let t=e.arc*Math.PI/180,n=e.dir-Math.PI/2,r=Dg(new V(new Ji(.5,e.r,24,1,n-t/2,t),X(9109440,.6)));r.position.set(e.x,.5,e.z),a(r,.55,e=>{r.material.opacity=.6*(1-e),r.scale.setScalar(.6+e*.5)});for(let t=1;t<=3;t++){let n=e.r*t/3.5;u(new z(e.x+Math.sin(e.dir)*n,1.1-t*.2,e.z+Math.cos(e.dir)*n),t%2?11963135:9109440,.25+t*.1,.5)}},judgement(e){l(e.x,e.z,16769162,.5,e.r,.9,.06),l(e.x,e.z,16773312,.4,e.r*.6,.7,.1),u(new z(e.x,1,e.z),16769162,1.2,.5),t(.7),n(`smite`,e.x,e.z,1);for(let t of e.hits)f(Math.hypot(t.x-e.x,t.z-e.z)*.035,()=>{h(t.x,t.z,16769162,.9,.7),l(t.x,t.z,16769162,.2,1.4,.5,.25),p(new z(t.x,.5,t.z),16773312,12,4,.8,.09)})},holy_word(e){l(e.x,e.z,16769162,.4,e.r,.45,.1),n(`smite`,e.x,e.z,.5);for(let t of e.hits)l(t.x,t.z,16773312,.2,.9,.3,.3),p(new z(t.x,.5,t.z),16769162,6,3,.5,.07)},blades(e){let r=new z(e.x,2.2,e.z);n(`edge`,e.x,e.z,.9),e.hits.forEach((e,t)=>{let n=_(t%2?10128127:9101567),i=new z(e.x,.7,e.z),o=r.clone().add(new z(Math.cos(t*2.4)*1.2,t%3*.3,Math.sin(t*2.4)*1.2));n.position.copy(o),n.lookAt(i),a(n,.22,e=>{n.position.copy(o).lerp(i,e*e)}),m(o,i,9101567,.12,.35,16777215),f(.22,()=>{l(e.x,e.z,10128127,.2,1.1,.35,.3),p(i,13162751,8,3.5,.5,.07)})}),f(.22,()=>t(.35))},horse_fall(e){let r={brown:9067058,black:3814448,white:15789284,takoyaki:16756960}[e.coat]??9067058;u(new z(e.x,.5,e.z),6969930,.8,.6),u(new z(e.x,.9,e.z),r,.5,.5),l(e.x,e.z,r,.3,1.6,.6,.25),p(new z(e.x,.6,e.z),r,14,4,.7,.09),t(.5),n(`grunt`,e.x,e.z,1)},zone_end(e){o(i.get(e.zid)),i.delete(e.zid),e.triggered&&l(e.x,e.z,7324282,.3,1.1,.4,.3)}};return{cast(e,t){x[e.skill]?.(e,t)},fx(e){S[e.kind]?.(e)},update(t){for(let n=r.length-1;n>=0;n--){let a=r[n];a.t+=t;let o=Math.min(1,a.t/a.life);if(a.update(o,t,a.t),o>=1){for(let[e,t]of i)t===a&&i.delete(e);e.remove(a.obj),a.obj.traverse(e=>{e.geometry?.dispose(),e.material?.dispose?.()}),r.splice(n,1)}}}}}var kg=X(10478847,.35),Ag=X(16769162,.95),jg=X(7324282,.7),Mg=X(9095423,.22),Ng=X(10124543,.6);function Pg(e,t,n){if(e.statusKind!==t){if(e.statusObj?.removeFromParent(),e.statusObj=null,e.statusKind=t,t===`freeze`)e.statusObj=new V(new Ii(1,.9,1),kg),e.statusObj.position.y=.4;else if(t===`stun`){e.statusObj=new kn;for(let t=0;t<3;t++)e.statusObj.add(new V(new Ii(.1,.1,.1),Ag));e.statusObj.position.y=e.m.tagY*.75}else t===`root`?(e.statusObj=Dg(new V(new Ji(.35,.55,8),jg)),e.statusObj.position.y=.05):t===`slow`&&(e.statusObj=Dg(new V(new Ji(.42,.5,20),Ng)),e.statusObj.position.y=.06);e.statusObj&&e.m.root.add(e.statusObj)}t===`stun`&&e.statusObj.children.forEach((e,t)=>{let r=n*5+t*Math.PI*2/3;e.position.set(Math.cos(r)*.3,Math.sin(n*8+t)*.04,Math.sin(r)*.3)}),t===`root`&&(e.statusObj.rotation.z=n),t===`slow`&&e.statusObj.scale.setScalar(1+.12*Math.sin(n*4))}function Fg(e,t,n){t&&!e.wardObj?(e.wardObj=new V(new Gi(1.25,1),Mg),e.wardObj.position.y=1.1,e.c.root.add(e.wardObj)):!t&&e.wardObj&&(e.wardObj.removeFromParent(),e.wardObj=null),e.wardObj&&(e.wardObj.rotation.y=n*.6,e.wardObj.scale.setScalar(1+Math.sin(n*3)*.03))}var Z=e=>document.getElementById(e),Ig=location.origin.replace(/^http/,`ws`);document.body.classList.add(`web`);var Lg=110,Rg=.9,zg=1.5,Bg=1,Vg=new Pl({antialias:!0});Vg.setPixelRatio(Math.min(devicePixelRatio,2)),Vg.setSize(innerWidth,innerHeight),Vg.shadowMap.enabled=!0,Vg.shadowMap.type=1,Vg.domElement.className=`view`,document.body.prepend(Vg.domElement);var Hg=new Vl({element:Z(`labels`)});Hg.setSize(innerWidth,innerHeight);var Ug=new zn;Ug.background=new In(1315087),Ug.fog=new Rn(1315087,40,70);var Wg=17,Gg=new z(1,1,1).normalize().multiplyScalar(30),Kg=new Ua(-1,1,1,-1,.1,120);function qg(){let e=innerWidth/innerHeight;Object.assign(Kg,{left:-17*e/2,right:Wg*e/2,top:Wg/2,bottom:-17/2}),Kg.updateProjectionMatrix()}qg();var Jg=new z(Qu.x,0,Qu.z);Kg.position.copy(Jg).add(Gg),Kg.lookAt(Jg),Ug.add(new Oa(12571903,3811866,.85));var Yg=new Ga(16773597,1.7);Yg.castShadow=!0,Yg.shadow.mapSize.set(2048,2048),Object.assign(Yg.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:60}),Yg.shadow.bias=-5e-4,Ug.add(Yg,Yg.target);var Xg=ig(Ug),Zg={oathkeeper:[`oracle`,`f`],wiseman:[`arcanist`,`m`],merchant:[`vanguard`,`f`]},Qg={wiseman:{armor:{look:`robe`,color:15920868,accent:13214266},head:{look:`hood`,color:15920868},boots:{look:`sandals`,color:9071170},main:{look:`staff`,color:10475775},beard:16052972},merchant:{armor:{look:`merchant`,color:4155978,accent:15260864},head:{look:`merchanthat`,color:6964264,accent:12076590},boots:{look:`boots`,color:5913636},off:{look:`tome`,color:8014378}}},$g={oathkeeper:`job`,wiseman:`skills`,merchant:`shop`},e_=Object.entries(cd).map(([e,t])=>{let[n,r]=Zg[e],i=Qg[e]?Wp({occ:n,sex:r,job:``,equip:new Map,outfit:Qg[e]}):xp(n,20,r,{tier:`base`});i.root.position.set(t.x,0,t.z),i.root.rotation.y=Math.PI/4,i.root.userData.npcId=e,Ug.add(i.root);let a=document.createElement(`div`);a.className=`tag npc`,a.innerHTML=`${t.name}<small>${t.title}</small>`;let o=new Fl(a);return o.position.y=2.6,i.root.add(o),{id:e,n:t,c:i}}),t_=0,n_=Og(Ug,{shake:e=>{t_=Math.max(t_,e)},sound:(e,t,n,r)=>R_(e,t,n,r)}),r_=xg(Ug),i_=new V(new Ji(.36,.43,4,1),new Gr({color:13214266,transparent:!0,opacity:.8}));i_.rotation.x=-Math.PI/2,i_.visible=!1,Ug.add(i_);var a_=new V(new Ji(.15,.25,4,1),new Gr({color:16769162,transparent:!0}));a_.rotation.x=-Math.PI/2,a_.visible=!1,Ug.add(a_);var o_=0,s_=new V(new Ji(.5,.6,4,1),new Gr({color:14173483,transparent:!0,opacity:.85}));s_.rotation.x=-Math.PI/2,s_.visible=!1,Ug.add(s_),addEventListener(`pointerdown`,xh,!0),addEventListener(`keydown`,xh,!0);var c_=localStorage.getItem(`nc.occ`)||`vanguard`,l_=localStorage.getItem(`nc.sex`)===`f`?`f`:`m`,u_=()=>document.querySelectorAll(`#sexes button`).forEach(e=>e.classList.toggle(`on`,e.dataset.sex===l_));document.querySelectorAll(`#sexes button`).forEach(e=>e.onclick=()=>{l_=e.dataset.sex,u_()}),u_(),Z(`name`).value=localStorage.getItem(`nc.name`)||``;for(let e of Gl){let t=Hl[e],n=document.createElement(`div`);n.className=`occ`+(e===c_?` sel`:``),n.innerHTML=`<h3>${t.name}<small>Lv 15: ${t.line}</small></h3><p>${t.role}</p><p><span class="swatch" style="background:${t.resourceColor}"></span>${t.resource}</p>`,n.onclick=()=>{c_=e,document.querySelectorAll(`.occ`).forEach(e=>e.classList.toggle(`sel`,e===n))},Z(`occs`).appendChild(n)}var d_=()=>document.querySelectorAll(`.occ`).forEach((e,t)=>e.classList.toggle(`sel`,Gl[t]===c_)),f_=null;async function p_(){Z(`saveList`).innerHTML=`<span class="none">Loading…</span>`;try{let e=await Tg(),t=e.user();Z(`acct`).innerHTML=t?`${t.isAnonymous?`guest, this browser`:q_(t.displayName||t.email||`signed in`)} · <a id="acctOut">sign out</a>`:`<a id="acctIn">sign in</a>`,Z(`acctIn`)&&(Z(`acctIn`).onclick=()=>m_(`Sign in to load heroes you saved, on this device or another.`)),Z(`acctOut`)&&(Z(`acctOut`).onclick=async()=>{await e.signOut(),f_=null,p_()});let n=Object.values(await e.list()).sort((e,t)=>t.at-e.at);Z(`saveList`).innerHTML=n.length?``:`<span class="none">${t?`Nothing saved yet: press 💾 Save while you play.`:`Sign in to load your saved heroes.`}</span>`;for(let e of n){let t=document.createElement(`button`);t.textContent=`${e.name} · Lv ${e.level} ${hm(e)}`,t.onclick=()=>{f_=f_===e?null:e;for(let e of Z(`saveList`).children)e.classList.toggle(`sel`,e===t&&!!f_);f_&&(Z(`name`).value=e.name,c_=e.occ,l_=e.sex,d_(),u_())},Z(`saveList`).append(t)}}catch(e){console.warn(`saved heroes unavailable`,e),Z(`acct`).textContent=``,Z(`saveList`).innerHTML=`<span class="none">Saved heroes are offline right now.</span>`}}function m_(e){Z(`signIn`).querySelector(`p`).textContent=e,Z(`signErr`).textContent=``,Z(`signIn`).classList.remove(`hidden`)}async function h_(e){try{await e(await Tg()),Z(`signIn`).classList.add(`hidden`),Q?g_():p_()}catch(e){Z(`signErr`).textContent=e.code===`auth/popup-closed-by-user`?``:`Sign-in failed (${e.code||e.message}).`}}async function g_(){let e=C_.get(S_)?.server;if(!e)return;let t;try{t=await Tg()}catch{sv(`Saving is offline right now`),Nh(`fail`);return}if(!t.user())m_(`Sign in with Google to keep your heroes on any device, or save as a guest in this browser only.`);else try{await t.save(Eg(e)),sv(`Saved ${e.name} · Lv ${e.level} ${hm(e)}`),Nh(`loot`)}catch(e){console.warn(e),sv(/^You can keep/.test(e.message)?e.message:`Could not save. Try again in a moment.`),Nh(`fail`)}}Z(`saveBtn`).onclick=e=>{e.currentTarget.blur(),g_()},Z(`signGoogle`).onclick=()=>h_(e=>e.signInGoogle()),Z(`signGuest`).onclick=()=>h_(e=>e.signInGuest()),Z(`signCancel`).onclick=()=>Z(`signIn`).classList.add(`hidden`),p_();var __=`solo`;Z(`name`).addEventListener(`keydown`,e=>{e.key===`Enter`&&x_(__)}),Z(`enter`).onclick=()=>x_(`online`),Z(`soloBtn`).onclick=()=>x_(`solo`),Z(`hostBtn`).onclick=()=>x_(`host`),Z(`joinBtn`).onclick=()=>x_(`join`),Z(`code`).addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.stopPropagation(),x_(`join`))}),Z(`name`).focus();var v_=new URLSearchParams(location.search),y_=v_.has(`dev`);y_||(Z(`help`).textContent=Z(`help`).textContent.replace(/ · \/level 15 in chat = level up \(testing\)/,``)),v_.get(`zoom`)&&(Kg.zoom=At.clamp(Number(v_.get(`zoom`))||1,.55,2.4),Kg.updateProjectionMatrix());var b_=!1;async function x_(e){if(b_)return;let t=Kl(Z(`name`).value);if(!t){Z(`loginErr`).textContent=`Name must be 2–16 letters or numbers.`;return}localStorage.setItem(`nc.name`,t),localStorage.setItem(`nc.occ`,c_),localStorage.setItem(`nc.sex`,l_);let n={name:t,occ:c_,sex:l_};f_&&f_.name.toLowerCase()===t.toLowerCase()&&f_.occ===c_&&(n.save=f_),b_=!0,Z(`loginErr`).textContent={online:`Connecting…`,solo:``,host:`Opening a room…`,join:`Joining room ${Z(`code`).value.toUpperCase()}…`}[e];try{let t=e===`online`?await Bf(Ig,n):e===`join`?await $f(Z(`code`).value,n):await Qf(n,{online:e===`host`,dev:y_,onStatus:e=>{Z(`roomCode`).textContent=e}});K_(t),e===`host`&&pv(`Your room code is ${t.code}. Friends open this page, press Join and type it in (up to 4 players).`)}catch(t){console.error(t),Z(`loginErr`).textContent=e===`online`?`Could not reach the server at ${Ig}. Is it running? (npm run dev)`:t.message,b_=!1}}v_.get(`name`)&&(Z(`name`).value=v_.get(`name`),Hl[v_.get(`occ`)]&&(c_=v_.get(`occ`)),(v_.get(`sex`)===`f`||v_.get(`sex`)===`m`)&&(l_=v_.get(`sex`)),v_.get(`code`)&&(Z(`code`).value=v_.get(`code`)),x_(v_.get(`mode`)||__));var Q=null,S_=null,C_=new Map,w_=new Map,T_=[],E_=[],$=null;function D_(e,t){let n=Wp(t);n.root.userData.playerId=e,n.root.position.set(t.x,0,t.z),n.root.rotation.y=t.dir,Ug.add(n.root);let r=document.createElement(`div`);r.className=`tag`+(e===S_?` self`:``),r.innerHTML=`<div class="bubble hidden"></div>[ ${q_(t.name)} ]<small>${q_(hm(t))} · Lv ${t.level}</small>`;let i=new Fl(r);i.position.y=2.6,n.root.add(i);let a={id:e,c:n,el:r,tag:i,sub:r.querySelector(`small`),level:t.level,label:hm(t),look:Up(t),bubble:r.querySelector(`.bubble`),bubbleT:0,snaps:[],dir:t.dir,moving:t.moving,act:null,actT:0,server:t};C_.set(e,a),e===S_&&($={x:t.x,z:t.z,dir:t.dir,moving:!1,path:[],steer:null},i_.visible=!0,Jg.set(t.x,0,t.z),Y_.setPlayer(t),J_()),G_(a,t)}function O_(e,t){(t.level!==e.level||hm(t)!==e.label)&&(e.level=t.level,e.label=hm(t),e.sub.textContent=`${e.label} · Lv ${t.level}`)}function k_(e,t){e.look=Up(t);let n=e.c,r=Wp(t);r.root.userData.playerId=e.id,r.root.position.copy(n.root.position),r.root.rotation.y=n.root.rotation.y,r.root.add(e.tag),Ug.remove(n.root),e.wardObj=null,Ug.add(r.root),e.c=r,e.mount&&(e.mount=``,e.horse=null,j_(e,t.mount))}var A_=.9;function j_(e,t){e.mount=t,e.horse&&=(e.horse.root.removeFromParent(),null),e.c.hips.position.y=e.c.d.legH+(t?A_:0);for(let[n,r]of[[e.c.legL,-1],[e.c.legR,1]])n.rotation.z=t?r*.55:0;e.tag.position.y=2.6+(t?A_:0),t&&(e.horse=nh(t,{saddle:!0}),e.horse.root.scale.setScalar(1.15),e.c.root.add(e.horse.root)),e.id===S_&&$&&($.speed=$.mountSpeed=t?_d*(tf[t]?.speed??1):void 0)}var M_=null;function N_(e){e!==M_&&(M_=e,ug(e),Z(`zone`).textContent=e===`ashen`?$u.ashen.name:`Oathgate · Crown Plinth`,document.body.classList.toggle(`ashen`,e===`ashen`))}function P_(e){let t=C_.get(e);t&&(t.el.remove(),Ug.remove(t.c.root),C_.delete(e))}function F_(e,t){let n=Td[t.kind]??Od[t.kind]??Ed[t.kind],r=oh(t.kind,t);r.root.position.set(t.x,0,t.z),r.root.rotation.y=t.dir,!t.owner&&!n.critter&&(r.root.userData.mobId=e),Ug.add(r.root);let i=document.createElement(`div`);i.className=`tag mob`+(n.aggro?` aggro`:``)+(n.boss?` boss`:``)+(t.owner?` pet`:``)+(t.owner===S_?` mine`:``)+(n.critter?` critter`:``);let a=t.owner?C_.get(t.owner)?.server.name??``:``,o=tf[t.coat];i.innerHTML=n.critter?`${o?o.unicorn?`${o.name} the Unicorn`:`${o.name} Horse`:n.name}<small>${o?`${o.speed}x speed · `:``}Knights can tame it</small>`:`${n.name}<small>${t.owner?`${q_(a)}'s · `:``}Lv ${t.level}</small><div class="mobhp"><i></i></div>`;let s=new Fl(i);s.position.y=r.tagY,r.root.add(s);let c=0;for(let t of e)c=(c*31+t.charCodeAt(0))%997;let l={id:e,m:r,el:i,hpEl:i.querySelector(`.mobhp i`),snaps:[],dir:t.dir,act:null,actT:0,hitT:0,deadT:-1,seed:c,server:t,pet:!!t.owner,critter:!!n.critter,boss:!!n.boss,secret:!!n.secret};w_.set(e,l),I_(l),G_(l,t)}function I_(e){let t=e.server;e.critter||(e.hpEl.style.width=`${100*t.hp/t.hpMax}%`,e.el.classList.toggle(`hurt`,t.hp<t.hpMax),t.hp===0&&e.deadT<0&&(e.deadT=0,e.el.classList.add(`dead`),R_(e.pet?`bones`:`die`,t.x,t.z)))}function L_(e){let t=w_.get(e);t&&(t.el.remove(),Ug.remove(t.m.root),w_.delete(e))}function R_(e,t,n,r=1){if(!$)return Nh(e,{vol:r});let i=t-$.x,a=n-$.z;Nh(e,{vol:r*Math.max(0,Math.min(1,1-(Math.hypot(i,a)-3)/14)),pan:(i-a)/Math.SQRT2/9})}var z_={vanguard:`swing`,arcanist:`swing`,oracle:`swing`};function B_(e){Gv(e.id,e.kind,e.mob);let t=e.mob?w_.get(e.id):C_.get(e.id);if(!t||e.kind!==`attack`||e.cast)return;let n=t.server;R_(t.pet?`swing`:e.mob?`bite`:z_[n.occ]??`swing`,n.x,n.z,e.id===S_||t.server.owner===S_?1:.6)}function V_(e){if(e.evade){let t=w_.get(e.id);t&&H_(t,!0,`Evade`,`evade`);return}if(U_(e.id,e.dmg,e.mob,e.by,e.crit),!e.mob&&e.id===S_){Z_=performance.now(),Nh(`hurt`);return}let t=e.mob?w_.get(e.id):C_.get(e.id);if(!t)return;let{x:n,z:r}=t.server,i=e.by===S_;R_(`hit`,n,r,i?.9:.5),e.mob&&R_(t.pet?`bones`:t.server.kind===`mossling`?`squish`:`grunt`,n,r,i?.8:.4)}function H_(e,t,n,r,{life:i=.9,rise:a=1.2,y:o}={}){let s=document.createElement(`div`);s.className=`dmg `+r,s.textContent=n;let c=new Fl(s),l=(t?e.m:e.c).root.position;c.position.set(l.x+(r===`lvl`?0:(Math.random()-.5)*.4),o??(t?e.m.tagY*.8:1.6),l.z),Ug.add(c),T_.push({obj:c,el:s,t:0,y:c.position.y,life:i,rise:a})}function U_(e,t,n,r,i){let a=n?w_.get(e):C_.get(e);if(!a)return;a.hitT=.18;let o=(!n&&e===S_?`taken`:r===S_?`mine`:``)+(i?` crit`:``);H_(a,n,i?`${t}!`:t,o)}function W_(e,t=`LEVEL UP`){let n=C_.get(e);if(!n)return;let r=new Gr({color:16766826,transparent:!0,opacity:.6,depthWrite:!1,blending:2}),i=new V(new Ri(.55,.55,3.2,8,1,!0),r),a=new V(new Ji(.3,.45,16),r.clone());a.rotation.x=-Math.PI/2;let o=new kn;o.add(i,a),i.position.y=1.6,a.position.y=.05,o.position.copy(n.c.root.position),Ug.add(o),E_.push({g:o,col:i,ringMesh:a,follow:n,t:0}),H_(n,!1,t,`lvl`,{life:1.8,rise:.6,y:2.4})}function G_(e,t){let n=e.snaps[e.snaps.length-1],r=performance.now();n&&r-n.t>100&&e.snaps.push({...n,t:r-50}),e.snaps.push({t:r,x:t.x,z:t.z,dir:t.dir,moving:t.moving}),e.snaps.length>20&&e.snaps.shift()}function K_(e){Q=e,S_=e.sessionId,v_.has(`debug`)&&(window.nc={room:Q,players:C_,monsters:w_}),Z(`login`).classList.add(`hidden`),Z(`hud`).classList.remove(`hidden`),Q.onAdd(`players`,(e,t)=>{D_(t,e),Q.onChange(e,()=>{let n=C_.get(t);n&&(G_(n,e),O_(n,e),Up(e)!==n.look&&k_(n,e)),t===S_&&(J_(),$_(e.target),Im(e))})}),Q.onRemove(`players`,(e,t)=>P_(t)),Q.onAdd(`monsters`,(e,t)=>{F_(t,e),Q.onChange(e,()=>{let n=w_.get(t);n&&(G_(n,e),I_(n))})}),Q.onRemove(`monsters`,(e,t)=>L_(t)),Q.onMessage(`chat`,e=>{fv(e.name,e.text);let t=C_.get(e.id);t&&(t.bubble.textContent=e.text,t.bubble.classList.remove(`hidden`),t.bubbleT=5+e.text.length*.05)}),Q.onMessage(`system`,e=>pv(e.text)),Q.onMessage(`notice`,e=>pv(e.text)),Q.onMessage(`partyInvite`,Ov),Q.onMessage(`loot`,e=>{let t=G[e.item],n=C_.get(S_);t&&(dv(`${e.from?`The ${q_(e.from)} dropped`:`You got`} <b>${q_(t.name)}</b> <small>(Lv ${t.lv} · ${q_(gu(t))})</small>. Open Character (C) to wear it.`,`loot`),n&&H_(n,!1,t.name,`lootText`,{y:2.4,life:1.6,rise:.7}),Nh(`loot`),Om())}),Q.onMessage(`gold`,e=>{let t=C_.get(S_);t&&H_(t,!1,`+${e.amount} gold`,`goldText`,{y:2.3}),e.amount>=50&&dv(`${e.from?`The ${q_(e.from)} dropped`:`You got`} <b>${e.amount} gold</b>.`,`loot`)}),Q.onMessage(`exp`,e=>{let t=C_.get(S_);t&&H_(t,!1,`+${e.gain} EXP`,`exp`,{y:2.1})}),Q.onMessage(`levelup`,e=>{W_(e.id,e.job?Zl(e.job).toUpperCase():void 0);let t=C_.get(e.id);t&&R_(`levelup`,t.server.x,t.server.z,e.id===S_?1:.5)}),Q.onMessage(`act`,B_),Q.onMessage(`hit`,V_),Q.onMessage(`cast`,uv),Q.onMessage(`cooldown`,e=>{let t=performance.now();nv[e.skill]={end:t+e.cd*1e3,len:e.cd*1e3},rv={end:t+e.gcd*1e3,len:e.gcd*1e3}}),Q.onMessage(`cooldownsReset`,()=>{for(let e of Object.keys(nv))delete nv[e];rv={end:0,len:1}}),Q.onMessage(`castFail`,e=>{sv(e.why),Nh(`fail`)}),Q.onMessage(`heal`,e=>{let t=C_.get(e.id);t&&H_(t,!1,`+${e.amount}`,e.quiet?`heal small`:`heal`)}),Q.onMessage(`absorb`,e=>{let t=C_.get(e.id);t&&H_(t,!1,e.parry?`Parry`:`(${e.amount})`,`absorb`),t&&e.parry&&R_(`bash`,t.server.x,t.server.z,.5)}),Q.onMessage(`fx`,e=>{n_.fx(e),(e.kind===`meteor`||e.kind===`slam`)&&R_(`boom`,e.x,e.z,e.kind===`slam`?.7:1),e.kind===`zone_end`&&e.triggered&&R_(`bash`,e.x,e.z,.6)}),Q.onMessage(`warp`,e=>{Z(`warpFlash`).classList.remove(`go`),Z(`warpFlash`).offsetWidth,Z(`warpFlash`).classList.add(`go`),Nh(`blink`),$&&Object.assign($,{x:e.x,z:e.z,path:[],steer:null}),Jg.set(e.x,0,e.z),N_(e.region),pv(e.region===`ashen`?`You step into the Ashen Reach. Wild horses graze in the meadow; something terrible waits at the top of the Reach.`:`You are back in Oathgate.`)}),Q.onMessage(`respawn`,e=>{Nh(`respawn`),$&&(Object.assign($,{x:e.x,z:e.z,path:[]}),Jg.set(e.x,0,e.z))}),Q.onLeave(e=>{Z(`dcReason`).textContent=e,Z(`disconnected`).classList.remove(`hidden`)}),gm((e,t)=>Q.send(e,t),()=>Nh(`click`),{barLayout:Y_.layout,assignSlot:Y_.assign}),Im(C_.get(S_)?.server),N_(ad(C_.get(S_)?.server.x??Qu.x,C_.get(S_)?.server.z??Qu.z)),pv(`Welcome to Oathgate. The nine shards wait around the Crown Plinth.`),setInterval(mv,3e3)}function q_(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function J_(){let e=C_.get(S_)?.server;if(!e)return;let t=Hl[e.occ];Z(`cardName`).textContent=e.name,Z(`cardSub`).textContent=`Lv ${e.level} ${hm(e)} · ${e.subtitle||(e.job?`${t.name} line`:`Unsworn`)}`,Z(`hpFill`).style.width=`${100*e.hp/e.hpMax}%`,Z(`hpText`).textContent=`HP ${e.hp} / ${e.hpMax}${e.shield?`  (+${e.shield} DEF)`:``}`,Z(`resFill`).style.width=`${100*e.res/e.resMax}%`,Z(`resFill`).style.background=t.resourceColor,Z(`resText`).textContent=`${t.resource} ${e.res} / ${e.resMax}`;let n=e.level>=30;Z(`expFill`).style.width=n?`100%`:`${100*e.exp/Math.max(1,e.expNext)}%`,Z(`expText`).textContent=n?`EXP max`:`EXP ${e.exp} / ${e.expNext}`,Z(`cardGold`).textContent=`${e.gold??0} gold`}var Y_=em(Z(`skills`),{onUse:e=>Hv(e)}),X_=``,Z_=-1e9,Q_=0;function $_(e){e!==X_&&(e&&!X_&&Nh(`engage`),X_=e,e||Z(`target`).classList.add(`hidden`))}function ev(){let e=X_&&w_.get(X_);if(s_.visible=!!e&&e.deadT<0,!e){Z(`target`).classList.add(`hidden`);return}let t=e.server,n=Td[t.kind];Z(`target`).classList.remove(`hidden`),Z(`targetName`).textContent=`${n.name} · Lv ${t.level}`,Z(`targetFill`).style.width=`${100*t.hp/t.hpMax}%`,Z(`targetText`).textContent=`${t.hp} / ${t.hpMax}`}function tv(){let e=bh();Z(`musicBtn`).classList.toggle(`off`,!e.music),Z(`sfxBtn`).classList.toggle(`off`,!e.sfx)}Z(`musicBtn`).onclick=e=>{Sh(),tv(),e.currentTarget.blur()},Z(`sfxBtn`).onclick=e=>{Ch(),tv(),e.currentTarget.blur()},tv();var nv={},rv={end:0,len:1},iv=0;function av(e){let t=C_.get(S_)?.server;if(t)for(let n of Y_.slots){if(n.entry===`attack`&&n.el.classList.toggle(`on`,!!X_),!n.def)continue;let r=t.skills.get(n.entry)??0;n.el.classList.toggle(`unlearned`,!r),n.el.classList.toggle(`inert`,!n.def.use),n.el.classList.toggle(`nores`,!!r&&!!n.def.use&&t.res<ru(n.def.use.cost,r)),n.el.classList.toggle(`channel`,!!iv&&e<iv);let i=nv[n.entry],a=i&&i.end>rv.end,o=a?i.end:rv.end,s=a?i.len:rv.len,c=Math.max(0,o-e);n.cdEl.style.height=`${100*c/s}%`,n.cdText.textContent=c>1e3?Math.ceil(c/1e3):``}}var ov=null;function sv(e){Z(`toast`).textContent=e,Z(`toast`).classList.remove(`hidden`),clearTimeout(ov),ov=setTimeout(()=>Z(`toast`).classList.add(`hidden`),1600)}function cv(e,t=0){let n=w_.get(e)??C_.get(e);if(!n)return null;let r=(n.m??n.c).root.position;return new z(r.x,t,r.z)}var lv={cleave:`cleave`,battle_cry:`cry`,charge:`charge`,firebolt:`firebolt`,frost_nova:`frost`,arc_chain:`zap`,blink:`blink`,mana_shield:`ward`,mend:`heal`,smite:`smite`,ward:`ward`,holy_words:`sanctuary`,raise_bonewalker:`raise`,bone_armor:`ward`,bone_dragon:`raise`,mount:`charge`,snare_rune:`rune`,glyph_field:`rune`,script_of_binding:`binding`,edge_of_the_shard:`edge`,cataclysm:`channel`,wyrm_lance:`charge`,sacred_chant:`channel`,rampage:`cry`,sword_dance:`edge`,meteor_storm:`channel`};function uv(e){if(e.skill===`blink`&&e.id===S_&&$&&Object.assign($,{x:e.to.x,z:e.to.z,path:[]}),e.channel&&e.walk&&e.id===S_&&$?($.speed=_d*e.walk,setTimeout(()=>{$&&($.speed=$.mountSpeed)},e.channel*1e3+50)):e.channel&&e.id===S_&&$&&(iv=performance.now()+e.channel*1e3,$.path=[],$.steer=null),e.id===S_&&$){let t=performance.now();if(e.skill===`wyrm_lance`&&($.lunges=[{from:e.from,to:e.to,start:t,dur:e.travel*1e3}]),e.skill===`rampage`){let n=e.from;$.lunges=e.hops.map(r=>{let i={from:n,to:r,start:t+(r.t-e.hop)*1e3,dur:e.hop*800};return n=r,i}),iv=t+(e.hops.at(-1).t+.15)*1e3}$.lunges&&($.path=[],$.steer=null)}n_.cast(e,cv);let t=C_.get(e.id),n=e.sweep?`cleave`:lv[e.skill];t&&R_(n,t.server.x,t.server.z,e.id===S_?1:.6)}function dv(e,t){let n=Z(`chatLog`),r=document.createElement(`div`);for(t&&(r.className=t),r.innerHTML=e,n.appendChild(r);n.children.length>80;)n.firstChild.remove();n.scrollTop=n.scrollHeight}var fv=(e,t)=>dv(`<b>${q_(e)}:</b> ${q_(t)}`),pv=e=>dv(q_(e),`sys`);async function mv(){if(!Q)return;let e=await Q.ping();Z(`ping`).textContent=e===null?``:`${Math.round(e)} ms`}var hv=new fo,gv=new Lr(new z(0,1,0),0),_v=new R,vv=!1,yv=0;function bv(e,t){_v.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),hv.setFromCamera(_v,Kg);let n=new z;return hv.ray.intersectPlane(gv,n)?n:null}function xv(e,t,n){if(!Q||!$||Pv.size||performance.now()<iv)return;jv=null;let r=bv(e,t);r&&($.steer=null,$.path=Sd($.x,$.z,r.x,r.z),Q.send(`move`,{x:r.x,z:r.z}),yv=performance.now(),n&&(a_.position.set(r.x,.03,r.z),a_.visible=!0,o_=0))}function Sv(e,t){_v.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),hv.setFromCamera(_v,Kg);let n=[...w_.values()].filter(e=>e.deadT<0).map(e=>e.m.root);for(let e of hv.intersectObjects(n,!0))for(let t=e.object;t;t=t.parent)if(t.userData.mobId)return t.userData.mobId;return null}function Cv(e,t){_v.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),hv.setFromCamera(_v,Kg);for(let e of hv.intersectObjects([...C_.values()].map(e=>e.c.root),!0))for(let t=e.object;t;t=t.parent)if(t.userData.playerId)return t.userData.playerId;return null}function wv(e,t){_v.set(e/innerWidth*2-1,-(t/innerHeight)*2+1),hv.setFromCamera(_v,Kg);for(let e of hv.intersectObjects(e_.map(e=>e.c.root),!0))for(let t=e.object;t;t=t.parent)if(t.userData.npcId)return e_.find(e=>e.id===t.userData.npcId);return null}var Tv=()=>C_.get(S_)?.server.party||``;function Ev(e,t,n){let r=C_.get(e)?.server;if(!r)return;let i=Z(`playerMenu`),a=Tv()&&r.party===Tv();i.innerHTML=`<div class="pmHead">${q_(r.name)} · Lv ${r.level} ${q_(hm(r))}</div>`+(a?`<button data-act="leave">Leave the party</button>`:`<button data-act="invite">Invite to party</button>`),i.onclick=t=>{let n=t.target.closest(`[data-act]`)?.dataset.act;n===`invite`&&Q.send(`partyInvite`,{target:e}),n===`leave`&&Q.send(`partyLeave`,{}),n&&Nh(`click`),i.classList.add(`hidden`)},i.style.left=`${Math.min(t,innerWidth-170)}px`,i.style.top=`${Math.min(n,innerHeight-80)}px`,i.classList.remove(`hidden`)}addEventListener(`pointerdown`,e=>{e.target.closest(`#playerMenu`)||Z(`playerMenu`).classList.add(`hidden`)},!0);var Dv=null;function Ov(e){Dv=e.from,Z(`partyAskText`).textContent=`${e.name} invites you to their party.`,Z(`partyAsk`).classList.remove(`hidden`),Nh(`loot`)}function kv(e){Dv&&Q.send(`partyAnswer`,{from:Dv,yes:e}),Dv=null,Z(`partyAsk`).classList.add(`hidden`)}Z(`partyYes`).onclick=()=>kv(!0),Z(`partyNo`).onclick=()=>kv(!1),Z(`partyLeave`).onclick=e=>{Q.send(`partyLeave`,{}),e.currentTarget.blur()};function Av(){let e=Tv();if(Z(`party`).classList.toggle(`hidden`,!e),!e)return;let t=[...C_.values()].filter(t=>t.id!==S_&&t.server.party===e).map(e=>{let t=e.server;return`<div class="pm${$&&Math.hypot(t.x-$.x,t.z-$.z)>25?` far`:``}">${q_(t.name)} <small>Lv ${t.level} ${q_(hm(t))}</small>
      <div class="pbar"><i style="width:${Math.round(100*t.hp/Math.max(1,t.hpMax))}%"></i></div></div>`}).join(``);Z(`partyList`).innerHTML!==t&&(Z(`partyList`).innerHTML=t)}var jv=null,Mv=e=>$?Math.hypot($.x-e.n.x,$.z-e.n.z):1/0;function Nv(e){if(!$)return;if(Mv(e)<=2.2){jv=null,Em(),Dm($g[e.id],!0),Nh(`click`);return}let t=$.x-e.n.x,n=$.z-e.n.z,r=Math.hypot(t,n),i={x:e.n.x+t/r*1.2,z:e.n.z+n/r*1.2};$.steer=null,$.path=Sd($.x,$.z,i.x,i.z),Q.send(`move`,i),jv=e}Vg.domElement.addEventListener(`pointerdown`,e=>{if(e.button!==0)return;document.activeElement?.blur();let t=Q&&Sv(e.clientX,e.clientY);if(t){Wv(t);return}let n=Q&&wv(e.clientX,e.clientY);if(n){Nv(n);return}let r=Q&&Cv(e.clientX,e.clientY);r&&r!==S_?Ev(r,e.clientX,e.clientY):(vv=!0,xv(e.clientX,e.clientY,!0))}),addEventListener(`pointerup`,()=>{vv=!1}),Vg.domElement.addEventListener(`pointermove`,e=>{_v.lastX=e.clientX,_v.lastY=e.clientY}),Vg.domElement.addEventListener(`wheel`,e=>{Kg.zoom=At.clamp(Kg.zoom*(e.deltaY>0?.9:1.1),.55,2.4),Kg.updateProjectionMatrix()},{passive:!0}),Vg.domElement.addEventListener(`contextmenu`,e=>{e.preventDefault(),Bv()});var Pv=new Set,Fv={KeyW:[-1,-1],KeyS:[1,1],KeyA:[-1,1],KeyD:[1,-1],ArrowUp:[-1,-1],ArrowDown:[1,1],ArrowLeft:[-1,1],ArrowRight:[1,-1]};function Iv(){if(!Q||!$||performance.now()<iv)return;let e=0,t=0;for(let n of Pv)e+=Fv[n][0],t+=Fv[n][1];let n=Math.hypot(e,t);$.path=[],$.steer=n>.01?{x:e/n,z:t/n}:null,Q.send(`steer`,{x:e,z:t})}addEventListener(`keydown`,e=>{let t=document.activeElement===Z(`chatInput`);if(e.key===`Enter`){if(!Q)return;if(t){let e=Z(`chatInput`).value.trim();e&&Q.send(`chat`,{text:e}),Z(`chatInput`).value=``,Z(`chatInput`).blur()}else Z(`chatInput`).focus();e.preventDefault();return}if(t){e.key===`Escape`&&Z(`chatInput`).blur();return}if(!Q)return;if(e.key===`Escape`&&(Lv?Bv():wm()?Em():X_&&Q.send(`disengage`)),e.code===`KeyM`&&!e.repeat&&(Sh(),tv()),e.code===`KeyC`&&!e.repeat&&Dm(`char`),e.code===`KeyK`&&!e.repeat&&Dm(`skills`),e.code===`KeyE`&&!e.repeat){let e=e_.filter(e=>Mv(e)<=ld).sort((e,t)=>Mv(e)-Mv(t))[0];e?Nv(e):(Tm(`job`)&&Dm(`job`,!1),Tm(`shop`)&&Dm(`shop`,!1))}Fv[e.code]&&!Pv.has(e.code)&&(Pv.add(e.code),Iv(),e.preventDefault());let n=/^(Digit|Numpad)(\d)$/.exec(e.code)?.[2],r=n&&Y_.slotForKey(n);r&&!e.repeat&&Rv(r,e.code)}),addEventListener(`keyup`,e=>{Pv.delete(e.code)&&Iv(),Lv&&e.code===Lv.code&&zv()}),addEventListener(`blur`,()=>{Bv(),Pv.size&&(Pv.clear(),Iv())});var Lv=null;function Rv(e,t){Bv();let n=C_.get(S_)?.server,r=n&&vg(e.entry,n);r?(Lv={slot:e,code:t,spec:r},e.el.classList.add(`aiming`)):Hv(e)}function zv(){let{slot:e}=Lv;Bv(),Hv(e,!0)}function Bv(){Lv&&(Lv.slot.el.classList.remove(`aiming`),Lv=null,r_.hide())}function Vv(e){let t=C_.get(S_)?.c.root.position,n=_v.lastX!==void 0,r=Lv.spec.kind,i=n?bv(_v.lastX,_v.lastY):null,a=n?r===`ally`?Cv(_v.lastX,_v.lastY):r===`enemy`||r===`ground`?Sv(_v.lastX,_v.lastY):null:null;r_.update(Lv.spec,t,i,a?cv(a):null,e)}Z(`chatInput`).addEventListener(`focus`,()=>{Pv.size&&(Pv.clear(),Iv())}),Z(`minimap`).addEventListener(`pointerdown`,e=>{if(e.button!==0||!Q||!$||performance.now()<iv)return;e.preventDefault(),e.stopPropagation();let t=fg(Z(`minimap`),e.clientX,e.clientY);t&&(jv=null,$.steer=null,$.path=Sd($.x,$.z,t.x,t.z),Q.send(`move`,t),Nh(`click`))});function Hv(e,t=!1){Q&&e?.entry&&(e.entry===`attack`?Wv(t&&_v.lastX!==void 0&&Sv(_v.lastX,_v.lastY)||void 0):e.entry===`wave`?(Gv(S_,`wave`),Q.send(`act`,{kind:`wave`})):e.def.use?Uv(e.entry,t):(sv(`${e.def.name} has no combat effect yet`),Nh(`fail`)),e.el.classList.add(`flash`),setTimeout(()=>e.el.classList.remove(`flash`),150))}function Uv(e,t){if((nv[e]?.end??0)>performance.now()+50){Nh(`cooldown`);return}let n={skill:e};if(_v.lastX!==void 0){let e=Sv(_v.lastX,_v.lastY);e&&(n.target=e);let r=bv(_v.lastX,_v.lastY);r&&(n.x=r.x,n.z=r.z);let i=t&&Cv(_v.lastX,_v.lastY);i&&(n.ally=i)}let r=n.target&&vg(e,C_.get(S_)?.server??{}),i=n.target&&cv(n.target),a=r?.kind===`enemy`&&i&&$&&Math.hypot(i.x-$.x,i.z-$.z)>r.range;$&&(a||e===`charge`||e===`blink`)&&($.path=[],$.steer=null),Q.send(`cast`,n)}function Wv(e){$&&($.path=[],$.steer=null),Q.send(`engage`,e?{target:e}:{})}function Gv(e,t,n){let r=n?w_.get(e):C_.get(e);r&&(r.act=t,r.actT=0)}new ResizeObserver(()=>document.documentElement.style.setProperty(`--bottom-h`,`${Z(`bottom`).offsetHeight}px`)).observe(Z(`bottom`)),addEventListener(`resize`,()=>{Vg.setSize(innerWidth,innerHeight),Hg.setSize(innerWidth,innerHeight),qg()});function Kv(e,t,n){return e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*n}function qv(e,t){let n=t-Lg,r=e.snaps;if(!r.length)return null;if(n<=r[0].t)return r[0];for(let e=r.length-1;e>0;e--)if(r[e-1].t<=n){let t=r[e-1],i=r[e],a=Math.min(1,(n-t.t)/Math.max(1,i.t-t.t));return{x:t.x+(i.x-t.x)*a,z:t.z+(i.z-t.z)*a,dir:i.dir,moving:i.moving}}return r[r.length-1]}var Jv=new Xa;Jv.connect(document);var Yv=0;Vg.setAnimationLoop(()=>{Jv.update();let e=Math.min(Jv.getDelta(),.1),t=Jv.getElapsed(),n=performance.now();if(vv&&_v.lastX!==void 0&&n-yv>220&&xv(_v.lastX,_v.lastY,!1),$?.lunges){let e=$.lunges.find(e=>n<e.start+e.dur)??$.lunges.at(-1),t=Math.max(0,Math.min(1,(n-e.start)/e.dur));$.x=e.from.x+(e.to.x-e.from.x)*t,$.z=e.from.z+(e.to.z-e.from.z)*t,$.dir=Math.atan2(e.to.x-e.from.x,e.to.z-e.from.z),$.moving=t>0&&t<1,n>=$.lunges.at(-1).start+$.lunges.at(-1).dur&&($.lunges=null)}else if($){Cd($,e);let t=C_.get(S_)?.server;if(t){let n=Math.hypot(t.x-$.x,t.z-$.z);if(t.target&&!$.path.length&&!$.steer){let n=Math.min(1,e*12);$.x+=(t.x-$.x)*n,$.z+=(t.z-$.z)*n,$.dir=t.dir,$.moving=t.moving}else if(n>zg)$.x=t.x,$.z=t.z;else if(!$.moving&&!t.moving&&n>.01){let n=Math.min(1,e*6);$.x+=(t.x-$.x)*n,$.z+=(t.z-$.z)*n}}}for(let r of C_.values()){let i,a,o,s;if(r.id===S_&&$)({x:i,z:a,dir:o,moving:s}=$);else{let e=qv(r,n);if(!e)continue;({x:i,z:a,dir:o,moving:s}=e)}r.c.root.position.set(i,0,a),r.dir=Kv(r.dir,o,Math.min(1,e*14)),r.c.root.rotation.y=r.dir;let c=s?`walk`:`idle`,l;r.act&&(r.actT+=e,r.actT>=Rg?r.act=null:s&&r.act!==`attack`||(c=r.act,l=r.actT/Rg)),r.server.mount!==r.mount&&j_(r,r.server.mount),r.horse?(r.horse.pose(t+r.id.charCodeAt(0),s?`walk`:`idle`,0,!0),_p(r.c,t+r.id.charCodeAt(0),c===`walk`?`idle`:c,l)):_p(r.c,t+r.id.charCodeAt(0),c,l),Fg(r,r.server.shield>0,t),r.bubbleT>0&&(r.bubbleT-=e)<=0&&r.bubble.classList.add(`hidden`)}for(let e of e_)_p(e.c,t+3,`idle`);jv&&Mv(jv)<=2.2&&Nv(jv);let r=e=>Mv(e_.find(t=>t.id===e))<=ld+1;Tm(`job`)&&!r(`oathkeeper`)&&Dm(`job`,!1),Tm(`shop`)&&!r(`merchant`)&&Dm(`shop`,!1),Pm(r(`wiseman`));for(let r of w_.values()){let i=qv(r,n);if(!i)continue;let a=r.m.root;if(a.position.set(i.x,0,i.z),r.dir=Kv(r.dir,i.dir,Math.min(1,e*10)),a.rotation.y=r.dir,Pg(r,r.deadT>=0?``:r.server.status,t),r.deadT>=0){r.deadT=Math.min(Bg,r.deadT+e);let n=r.deadT/Bg;r.m.pose(t+r.seed,`idle`),a.rotation.z=Math.min(1,n*2.5)*Math.PI/2,a.position.y=-n*n*.6;continue}let o=i.moving?`walk`:`idle`,s;if(r.act&&(r.actT+=e,r.actT>=Rg?r.act=null:(o=r.act,s=r.actT/Rg)),r.m.pose(t+r.seed,o,s),r.hitT>0){r.hitT-=e;let t=Math.max(0,r.hitT)/.18;a.scale.set(.9*(1+t*.15),.9*(1-t*.2),.9*(1+t*.15))}else a.scale.setScalar(.9)}for(let t=T_.length-1;t>=0;t--){let n=T_[t];n.t+=e,n.obj.position.y=n.y+n.t*n.rise,n.el.style.opacity=String(Math.max(0,1-Math.max(0,n.t-n.life*.45)/(n.life*.55))),n.t>n.life&&(n.el.remove(),Ug.remove(n.obj),T_.splice(t,1))}for(let t=E_.length-1;t>=0;t--){let n=E_[t];n.t+=e;let r=n.t/1.4;n.g.position.copy(n.follow.c.root.position),n.col.scale.set(1-r*.6,.4+Math.min(1,r*4)*.6,1-r*.6),n.col.material.opacity=.6*(1-r),n.ringMesh.scale.setScalar(1+r*5),n.ringMesh.material.opacity=.8*(1-r),r>=1&&(Ug.remove(n.g),n.col.geometry.dispose(),n.ringMesh.geometry.dispose(),n.col.material.dispose(),n.ringMesh.material.dispose(),E_.splice(t,1))}$&&(Jg.x+=($.x-Jg.x)*Math.min(1,e*8),Jg.z+=($.z-Jg.z)*Math.min(1,e*8),i_.position.set($.x,.02,$.z),i_.rotation.z=t*.6);let i=new z;if(t_>.01?(i.set(Math.random()-.5,0,Math.random()-.5).multiplyScalar(t_*.5),t_*=Math.exp(-e*7)):t_=0,Kg.position.copy(Jg).add(Gg).add(i),Kg.lookAt(Jg.clone().add(i)),Yg.position.set(Jg.x+8,16,Jg.z+5),Yg.target.position.copy(Jg),s_.visible){let e=w_.get(X_);!e||e.deadT>=0?s_.visible=!1:(s_.position.set(e.m.root.position.x,.03,e.m.root.position.z),s_.rotation.z=-t*.8)}if(a_.visible&&(o_+=e,a_.scale.setScalar(1+o_*2),a_.material.opacity=1-o_/.6,o_>.6&&(a_.visible=!1)),Xg.update(t,$),Lv&&Vv(t),n_.update(e),av(n),Q&&(Yv-=e)<=0){Yv=.1,pg(Z(`minimap`),C_,S_,$,w_,Tv()),Av(),ev();let e=X_?1:n-Z_<5e3?.6:0;e!==Q_&&wh(Q_=e),Z(`online`).textContent=`${C_.size} online`}Vg.render(Ug,Kg),Hg.render(Ug,Kg)});