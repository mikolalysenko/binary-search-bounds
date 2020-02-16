"use strict"

function Age(a,l,h,y){var i=h+1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(x>=y){i=m;h=m-1}else{l=m+1}}return i};
function Pge(a,l,h,y,c){var i=h+1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(c(x,y)>=0){i=m;h=m-1}else{l=m+1}}return i};

function Agt(a,l,h,y){var i=h+1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(x>y){i=m;h=m-1}else{l=m+1}}return i};
function Pgt(a,l,h,y,c){var i=h+1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(c(x,y)>0){i=m;h=m-1}else{l=m+1}}return i};

function Alt(a,l,h,y){var i=l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(x<y){i=m;l=m+1}else{h=m-1}}return i};
function Plt(a,l,h,y,c){var i=l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(c(x,y)<0){i=m;l=m+1}else{h=m-1}}return i};

function Ale(a,l,h,y){var i=l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(x<=y){i=m;l=m+1}else{h=m-1}}return i};
function Ple(a,l,h,y,c){var i=l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(c(x,y)<=0){i=m;l=m+1}else{h=m-1}}return i};

function Aeq(a,l,h,y){l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];if(x===y){return m}else if(x<=y){l=m+1}else{h=m-1}}return -1};
function Peq(a,l,h,y,c){l-1;while(l<=h){var m=(l+h)>>>1,x=a[m];var p=c(x,y);if(p===0){return m}else if(p<=0){l=m+1}else{h=m-1}}return -1};

function exec(a,y,c,l,h,A,P) {
  if(typeof(c)==='function'){return P(a,(l===void 0)?0:l|0,(h===void 0)?a.length-1:h|0,y,c)}else{return A(a,(c===void 0)?0:c|0,(l===void 0)?a.length-1:l|0,y)}
}

module.exports = {
  ge: function(a,y,c,l,h){return exec(a,y,c,l,h,Age,Pge)},
  gt: function(a,y,c,l,h){return exec(a,y,c,l,h,Agt,Pgt)},
  lt: function(a,y,c,l,h){return exec(a,y,c,l,h,Alt,Plt)},
  le: function(a,y,c,l,h){return exec(a,y,c,l,h,Ale,Ple)},
  eq: function(a,y,c,l,h){return exec(a,y,c,l,h,Aeq,Peq)}
}
