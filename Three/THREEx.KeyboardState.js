var THREEx=THREEx||{};THREEx.KeyboardState=function(){this.keyCodes={};this.modifiers={};var e=this;this._onKeyDown=function(t){e._onKeyChange(t,true)};this._onKeyUp=function(t){e._onKeyChange(t,false)};document.addEventListener("keydown",this._onKeyDown,false);document.addEventListener("keyup",this._onKeyUp,false)};THREEx.KeyboardState.prototype.destroy=function(){document.removeEventListener("keydown",this._onKeyDown,false);document.removeEventListener("keyup",this._onKeyUp,false)};THREEx.KeyboardState.MODIFIERS=["shift","ctrl","alt","meta"];THREEx.KeyboardState.ALIAS={left:37,up:38,right:39,down:40,space:32,pageup:33,pagedown:34,tab:9};THREEx.KeyboardState.prototype._onKeyChange=function(e,t){var n=e.keyCode;this.keyCodes[n]=t;this.modifiers["shift"]=e.shiftKey;this.modifiers["ctrl"]=e.ctrlKey;this.modifiers["alt"]=e.altKey;this.modifiers["meta"]=e.metaKey};THREEx.KeyboardState.prototype.pressed=function(e){var t=e.split("+");for(var n=0;n<t.length;n++){var r=t[n];var i;if(THREEx.KeyboardState.MODIFIERS.indexOf(r)!==-1){i=this.modifiers[r]}else if(Object.keys(THREEx.KeyboardState.ALIAS).indexOf(r)!=-1){i=this.keyCodes[THREEx.KeyboardState.ALIAS[r]]}else{i=this.keyCodes[r.toUpperCase().charCodeAt(0)]}if(!i||$("#searchvalue").is(":focus"))return false}return true}