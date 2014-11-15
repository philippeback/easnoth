define("amber-easnoth/Easnoth-MapUI", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web", "amber-easnoth/Easnoth-Export"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-MapUI');
$core.packages["Easnoth-MapUI"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWEventDispatcher', $globals.Object, ['canvas', 'map', 'drawer', 'game', 'suspended', 'currentCell'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWEventDispatcher.comment="I dispatch event from eventManager canvas to cells. \x0a\x0aThis class is a huge hack that is why it has so many instance variables ...";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return $globals.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($CWEasnothAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "canvas",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@canvas"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvas\x0a\x09^ canvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "cellAt:y:",
protocol: 'accessing',
fn: function (i,j){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._rowAt_(i))._childAt_(j);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:",{i:i,j:j},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "j"],
source: "cellAt: i y: j\x0a\x09^ (self rowAt: i) childAt: j",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["childAt:", "rowAt:"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "cellAt:y:ifAbsent:",
protocol: 'accessing',
fn: function (i,j,aBlock){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._rowAt_(i))._childAt_(j);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:ifAbsent:",{i:i,j:j,aBlock:aBlock},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "j", "aBlock"],
source: "cellAt: i y: j ifAbsent: aBlock\x0a\x09\x22need to change the implementation\x22\x0a\x09^ [(self rowAt: i) childAt: j] on: Error do: [ aBlock value ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "childAt:", "rowAt:", "value"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "currentCell:",
protocol: 'calculs',
fn: function (anEvent){
var self=this;
var x,y,cood;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
x=$recv(anEvent)._offsetX();
y=$recv(anEvent)._offsetY();
cood=self._mouseCoodToHexCoodX_y_(x,y);
$1=self._cellAt_y_ifAbsent_($recv(cood)._x(),$recv(cood)._y(),(function(){
return nil;

}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEvent"],
source: "currentCell: anEvent\x0a\x09|x y cood|\x0a\x09\x0a\x09\x22((jQuery at: #browser) at: #mozilla) notNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09x := anEvent clientX - anEvent target offsetLeft - anEvent target offsetParent offsetLeft.\x0a\x09\x09\x09y := anEvent clientY - anEvent target offsetTop - anEvent target offsetParent offsetTop ]\x0a\x09\x09ifFalse: [\x22\x0a\x09\x09\x09x := anEvent offsetX.\x0a\x09\x09\x09y := anEvent offsetY. \x22 ].\x22\x0a\x09\x09\x0a     cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09^ self cellAt: cood x y: cood y ifAbsent: [ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["offsetX", "offsetY", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "dispatchMouseClick:",
protocol: 'events',
fn: function (event){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@suspended"];
if(!$core.assert($1)){
$2=self["@currentCell"];
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv(self["@currentCell"])._mouseClick_($recv(self["@game"])._gameContext());
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "dispatchMouseClick: event\x0a\x09suspended ifFalse: [\x0a\x09\x09currentCell ifNotNil: [ \x0a\x09\x09\x09currentCell mouseClick: game gameContext ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "ifNotNil:", "mouseClick:", "gameContext"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "dispatchMouseMove:",
protocol: 'events',
fn: function (event){
var self=this;
var lastCell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$receiver;
$1=self["@suspended"];
if(!$core.assert($1)){
lastCell=self["@currentCell"];
lastCell;
self["@currentCell"]=self._currentCell_(event);
self["@currentCell"];
$2=$recv(lastCell).__eq_eq(self["@currentCell"]);
if(!$core.assert($2)){
$3=self["@currentCell"];
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
$4=$recv(self["@game"])._gameContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gameContext"]=1;
//>>excludeEnd("ctx");
$recv($4)._relatedCell_(lastCell);
$recv(self["@currentCell"])._mouseMove_($recv(self["@game"])._gameContext());
};
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dispatchMouseMove:",{event:event,lastCell:lastCell},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "dispatchMouseMove: event\x0a\x09| lastCell |\x0a\x09suspended ifFalse: [\x0a\x09\x09lastCell := currentCell.\x0a\x09\x09currentCell := self currentCell: event.\x0a\x09\x09lastCell == currentCell ifFalse: [\x0a\x09\x09\x09currentCell ifNotNil: [ \x0a\x09\x09\x09\x09game gameContext relatedCell: lastCell.\x0a\x09\x09\x09\x09currentCell mouseMove: game gameContext ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "currentCell:", "==", "ifNotNil:", "relatedCell:", "gameContext", "mouseMove:"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "endGame",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv(self["@canvas"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._css_put_("z-index",(990));
self["@map"]=nil;
$4=self._canvas();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["canvas"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._off_("mousemove");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["off:"]=1;
//>>excludeEnd("ctx");
$recv($recv($recv(self._canvas())._element())._asJQuery())._off_("click");
self["@drawer"]=nil;
self["@game"]=nil;
self["@currentCell"]=nil;
self["@canvas"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endGame",{},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endGame\x0a\x09\x22reinitialize eventHandling for new game\x22\x0a\x09canvas asJQuery css: 'z-index' put: 990.\x0a\x09map := nil.\x0a\x09self canvas element asJQuery off: 'mousemove'.\x0a\x09self canvas element asJQuery off: 'click'.\x0a\x09drawer := nil.\x0a\x09game := nil.\x0a\x09currentCell := nil.\x0a\x09canvas := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["css:put:", "asJQuery", "off:", "element", "canvas"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "eventManagerLayerId",
protocol: 'accessing',
fn: function (){
var self=this;
return "#eventManager";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "eventManagerLayerId\x0a\x09^ '#eventManager'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWEventDispatcher.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@suspended"]=false;
$1=$recv(self._eventManagerLayerId())._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$2=$recv($HTMLCanvas())._onJQuery_($3);
self["@canvas"]=$recv($TagBrush())._fromJQuery_canvas_($1,$2);
$recv($recv(self["@canvas"])._asJQuery())._css_put_("z-index",(998));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09suspended := false.\x0a\x09canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09canvas asJQuery css: 'z-index' put: 998.",
referencedClasses: ["TagBrush", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:", "css:put:"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "initializeEventHandling",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._canvas();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["canvas"]=1;
//>>excludeEnd("ctx");
$recv($1)._onClick_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._dispatchMouseClick_(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._canvas())._onMouseMove_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._dispatchMouseMove_(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeEventHandling\x0a\x09self canvas onClick: [:e | \x0a\x09\x09self dispatchMouseClick: e].\x0a\x09self canvas onMouseMove: [:e | \x0a\x09\x09self dispatchMouseMove: e].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onClick:", "canvas", "dispatchMouseClick:", "onMouseMove:", "dispatchMouseMove:"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "initializeForMap:game:",
protocol: 'initialize-release',
fn: function (aMap,aGame){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@game"]=aGame;
self["@map"]=aMap;
self["@drawer"]=$recv(aMap)._drawer();
self._initializeEventHandling();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap", "aGame"],
source: "initializeForMap: aMap game: aGame\x0a\x09game := aGame.\x0a\x09map := aMap.\x0a\x09drawer := aMap drawer.\x0a\x09self initializeEventHandling.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawer", "initializeEventHandling"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "mouseCoodToHexCoodX:y:",
protocol: 'calculs',
fn: function (x,y){
var self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=self._padding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["padding"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._x();
array=self._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,$1,$recv(self._padding())._y());
$4=$recv(array)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__at($recv(array)._at_((2)));
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,array:array},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x22algo is in javascript as Nicolas Petton refused to inline arthmetics\x22\x0a\x0a\x09| array |\x0a                \x0a\x09array:= self mouseCoodToHexCoodX: x y: y mapX: self padding x mapY: self padding y.\x0a    \x0a\x09^ (array at: 1) @ (array at: 2).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseCoodToHexCoodX:y:mapX:mapY:", "x", "padding", "y", "@", "at:"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
protocol: 'calculs',
fn: function (x,y,mapDisplayX,mapDisplayY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-(Math.floor(3*xHex/2))+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:mapX:mapY:",{x:x,y:y,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y", "mapDisplayX", "mapDisplayY"],
source: "mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x0a\x09\x09var cosmaingridx = 0.882947593;\x0a\x09\x09var sinmaingridx = 0.469471563;\x0a\x09\x09var cosmaingridy = -0.130526192;\x0a\x09\x09var sinmaingridy = 0.991444861;\x0a\x09\x09\x0a\x09\x09var cosothergridx = 0.4539905;\x0a\x09\x09var sinothergridx = 0.891006524;\x0a\x09\x09var cosothergridy = -0.882947593;\x0a\x09\x09var sinothergridy = 0.469471563;\x0a\x09\x09\x0a\x09\x09var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));\x0a\x09\x09var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09var xConstante = 9 + (mod(nb,3));\x0a\x09\x09var yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09var nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09var nbCheck = 7-(Math.floor(3*xHex/2))+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a        var a = new Array(2);\x0a        a[0] = xHex;\x0a        a[1] = yHex;\x0a        return a>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "padding",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@drawer"])._padding();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"padding",{},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "padding\x0a\x09^ drawer padding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["padding"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "resume",
protocol: 'suspending',
fn: function (){
var self=this;
self["@suspended"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resume\x0a\x09suspended := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "rowAt:",
protocol: 'accessing',
fn: function (index){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@map"])._childAt_(index);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index},$globals.CWEventDispatcher)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index"],
source: "rowAt: index\x0a\x09^ map childAt: index",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["childAt:"]
}),
$globals.CWEventDispatcher);

$core.addMethod(
$core.method({
selector: "suspend",
protocol: 'suspending',
fn: function (){
var self=this;
self["@suspended"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "suspend\x0a\x09suspended := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWEventDispatcher);



$core.addClass('CWLayer', $globals.Widget, [], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWLayer.comment="I represent a layer in the map where yu can draw things.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "down:",
protocol: 'not yet classified',
fn: function (incr){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "down: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWLayer);

$core.addMethod(
$core.method({
selector: "left:",
protocol: 'not yet classified',
fn: function (incr){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "left: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWLayer);

$core.addMethod(
$core.method({
selector: "right:",
protocol: 'not yet classified',
fn: function (incr){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "right: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWLayer);

$core.addMethod(
$core.method({
selector: "up:",
protocol: 'not yet classified',
fn: function (incr){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "up: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWLayer);



$core.addClass('CWArrayLayer', $globals.CWLayer, ['array'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWArrayLayer.comment="I represent a layer that is implemented as a 2 dimentianal array of images, canvas or anything.\x0a\x0aThis is faster than the canvas one (40% faster), but cannot permit isometric transformation or stuff like that. On the other hand it permits to have JQuery animation.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clean",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "down:",
protocol: 'map move',
fn: function (incr){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._vertical_(incr);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"down:",{incr:incr},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "down: incr\x0a\x09self vertical: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vertical:"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "horizontal:",
protocol: 'map move',
fn: function (incr){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._move_way_(incr,"left");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"horizontal:",{incr:incr},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "horizontal: incr\x0a\x09self move: incr way: 'left'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["move:way:"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "initializeForMap:",
protocol: 'initialize-release',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "leafHeight",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leafHeight\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "leafWidth",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leafWidth\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "left:",
protocol: 'map move',
fn: function (incr){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._horizontal_(incr);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left:",{incr:incr},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "left: incr\x0a\x09self horizontal: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["horizontal:"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "move:way:",
protocol: 'map move',
fn: function (incr,way){
var self=this;
var t,px;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$recv(self["@array"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = each) == null || $receiver.isNil){
return each;
} else {
$1=$recv(each)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
t=$recv($1)._css_(way);
t;
px=$recv($recv(t)._tokenize_("px"))._first();
px;
return $recv($recv(each)._asJQuery())._css_value_(way,$recv($recv($recv($recv(px)._asNumber()).__plus(incr))._asString()).__comma("px"));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"move:way:",{incr:incr,way:way,t:t,px:px},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr", "way"],
source: "move: incr way: way\x0a\x09| t px |\x0a\x09array do: [ :each |\x0a\x09\x09each ifNotNil: [\x0a\x09\x09t := each asJQuery css: way. \x0a\x09\x09px := (t tokenize: 'px') first.\x0a\x09\x09each asJQuery css: way value: (px asNumber + incr) asString , 'px' ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifNotNil:", "css:", "asJQuery", "first", "tokenize:", "css:value:", ",", "asString", "+", "asNumber"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "newLeaf:",
protocol: 'factory',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "newLeaf: html\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "newLeaf:point:",
protocol: 'factory',
fn: function (html,point){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$9,$8,$7,$6,$5,$3,$1;
$2=self._newLeaf_(html);
$recv($2)._width_(self._leafWidth());
$recv($2)._height_(self._leafHeight());
$4=$2;
$9=$recv($recv(point)._y()).__plus(self._yShift());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$8="position: absolute; top: ".__comma($9);
$7=$recv($8).__comma("px; left: ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($recv($recv(point)._x()).__plus(self._xShift()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("px;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._style_($5);
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLeaf:point:",{html:html,point:point},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "point"],
source: "newLeaf: html point: point\x0a\x09\x09^ (self newLeaf: html)\x0a\x09\x09\x09\x09width: self leafWidth;\x0a\x09\x09\x09\x09height: self leafHeight;\x0a\x09\x09\x09\x09style: 'position: absolute; top: ', (point y + self yShift), 'px; left: ', (point x + self xShift), 'px;'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "newLeaf:", "leafWidth", "height:", "leafHeight", "style:", ",", "+", "y", "yShift", "x", "xShift"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "right:",
protocol: 'map move',
fn: function (incr){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._horizontal_(incr);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right:",{incr:incr},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "right: incr\x0a\x09self horizontal: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["horizontal:"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "up:",
protocol: 'map move',
fn: function (incr){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._vertical_(incr);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"up:",{incr:incr},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "up: incr\x0a\x09self vertical: incr",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vertical:"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "vertical:",
protocol: 'map move',
fn: function (incr){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._move_way_(incr,"top");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vertical:",{incr:incr},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["incr"],
source: "vertical: incr\x0a\x09self move: incr way: 'top'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["move:way:"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "xShift",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xShift",{},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xShift\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);

$core.addMethod(
$core.method({
selector: "yShift",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yShift",{},$globals.CWArrayLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yShift\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWArrayLayer);



$core.addClass('CWGOTLayer', $globals.CWArrayLayer, ['invis'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGOTLayer.comment="This layer is specific to GOTs";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "clean",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@array"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._asJQuery())._attr_put_("src",$recv(self["@invis"])._src());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.CWGOTLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09array do: [:each |\x0a\x09    each asJQuery attr: 'src' put: invis src ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "attr:put:", "asJQuery", "src"]
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "#got";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ '#got'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "initializeForMap:",
protocol: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWGameOverTile(){return $globals.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
function $CWTwoDimArray(){return $globals.CWTwoDimArray||(typeof CWTwoDimArray=="undefined"?nil:CWTwoDimArray)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
self["@invis"]=$recv($recv($CWGameOverTile())._imageArray())._at_($recv($CWGameOverTile())._invisIndex());
$3=$recv(aMap)._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__at($recv($recv($recv(aMap)._childAt_((1)))._children())._size());
self["@array"]=$recv($CWTwoDimArray())._new_($1);
self._renderOn_map_($recv($HTMLCanvas())._onJQuery_($recv(self._id())._asJQuery()),aMap);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},$globals.CWGOTLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09invis := CWGameOverTile imageArray at: CWGameOverTile invisIndex.\x0a\x09array := CWTwoDimArray new: aMap children size @ (aMap childAt: 1) children size.\x0a\x09self renderOn: (HTMLCanvas onJQuery: self id asJQuery) map: aMap",
referencedClasses: ["CWGameOverTile", "CWTwoDimArray", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["at:", "imageArray", "invisIndex", "new:", "@", "size", "children", "childAt:", "renderOn:map:", "onJQuery:", "asJQuery", "id"]
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "leafHeight",
protocol: 'accessing',
fn: function (){
var self=this;
return (84);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leafHeight\x0a\x09^ 84",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "leafWidth",
protocol: 'accessing',
fn: function (){
var self=this;
return (126);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leafWidth\x0a\x09^ 126",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "newLeaf:",
protocol: 'initialize-release',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._img();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},$globals.CWGOTLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "newLeaf: html \x0a\x09^ html img",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["img"]
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "renderOn:map:",
protocol: 'rendering',
fn: function (html,map){
var self=this;
var tempImage;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(map)._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$recv($1)._withIndexDo_((function(row,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(row)._children())._withIndexDo_((function(cell,j){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
tempImage=self._newLeaf_point_(html,$recv(cell)._firstCoods());
tempImage;
$recv($recv(cell)._gameOverTile())._htmlImage_(tempImage);
return $recv(self["@array"])._i_j_put_(i,j,tempImage);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:map:",{html:html,map:map,tempImage:tempImage},$globals.CWGOTLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "map"],
source: "renderOn: html map: map\x0a\x09| tempImage |\x0a\x09map children withIndexDo: [ :row :i |\x0a\x09\x09row children withIndexDo: [ :cell :j |\x0a\x09\x09\x09tempImage := self newLeaf: html point: cell firstCoods.\x0a\x09\x09\x09cell gameOverTile htmlImage: tempImage.\x0a\x09\x09\x09array i: i j: j put: tempImage ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "children", "newLeaf:point:", "firstCoods", "htmlImage:", "gameOverTile", "i:j:put:"]
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "xShift",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(14)._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xShift",{},$globals.CWGOTLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xShift\x0a\x09^ 14 negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated"]
}),
$globals.CWGOTLayer);

$core.addMethod(
$core.method({
selector: "yShift",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(9)._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yShift",{},$globals.CWGOTLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yShift\x0a\x09^ 9 negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated"]
}),
$globals.CWGOTLayer);



$core.addClass('CWMonsterLayer', $globals.CWArrayLayer, [], 'Easnoth-MapUI');
$core.addMethod(
$core.method({
selector: "clean",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $receiver;
$recv(self["@array"])._do_((function(each){
var elem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
if(($receiver = each) == null || $receiver.isNil){
return each;
} else {
elem=$recv(each)._element();
elem;
return $recv($recv(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),$recv(elem)._width(),$recv(elem)._height());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,elem:elem},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.CWMonsterLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09\x09array do: [:each | | elem |\x0a\x09\x09\x09each ifNotNil: [\x0a\x09\x09\x09\x09elem := each element.\x0a\x09\x09\x09\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height ]. ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifNotNil:", "element", "clearRect:y:width:height:", "getContext:", "width", "height"]
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "id",
protocol: 'accessing',
fn: function (){
var self=this;
return "#monster";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^ '#monster'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "initializeForMap:",
protocol: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWTwoDimArray(){return $globals.CWTwoDimArray||(typeof CWTwoDimArray=="undefined"?nil:CWTwoDimArray)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(aMap)._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__at($recv($recv($recv(aMap)._childAt_((1)))._children())._size());
self["@array"]=$recv($CWTwoDimArray())._new_($1);
self._renderOn_map_($recv($HTMLCanvas())._onJQuery_($recv(self._id())._asJQuery()),aMap);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},$globals.CWMonsterLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09array := CWTwoDimArray new: aMap children size @ (aMap childAt: 1) children size.\x0a\x09self renderOn: (HTMLCanvas onJQuery: self id asJQuery) map: aMap",
referencedClasses: ["CWTwoDimArray", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["new:", "@", "size", "children", "childAt:", "renderOn:map:", "onJQuery:", "asJQuery", "id"]
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "leafHeight",
protocol: 'accessing',
fn: function (){
var self=this;
return (150);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leafHeight\x0a\x09^ 150",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "leafWidth",
protocol: 'accessing',
fn: function (){
var self=this;
return (150);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leafWidth\x0a\x09^ 150",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "newLeaf:",
protocol: 'factory',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._canvas();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},$globals.CWMonsterLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "newLeaf: html\x0a\x09^ html canvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["canvas"]
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "renderOn:map:",
protocol: 'rendering',
fn: function (html,map){
var self=this;
var tempCanvas;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv(map)._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$recv($1)._withIndexDo_((function(row,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(row)._children())._withIndexDo_((function(cell,j){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(cell)._monster();
if(($receiver = $2) == null || $receiver.isNil){
return $2;
} else {
var m;
m=$receiver;
tempCanvas=self._newLeaf_point_(html,$recv(cell)._firstCoods());
tempCanvas;
$recv(m)._canvas_(tempCanvas);
$recv($recv(tempCanvas)._asJQuery())._css_put_("z-index",$recv(cell)._zIndex());
return $recv(self["@array"])._i_j_put_(i,j,tempCanvas);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:map:",{html:html,map:map,tempCanvas:tempCanvas},$globals.CWMonsterLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html", "map"],
source: "renderOn: html map: map\x0a\x09| tempCanvas |\x0a\x09map children withIndexDo: [ :row :i |\x0a\x09\x09row children withIndexDo: [ :cell :j |\x0a\x09\x09\x09cell monster ifNotNil: [ :m | \x0a\x09\x09\x09\x09tempCanvas := self newLeaf: html point: cell firstCoods.\x0a\x09\x09\x09\x09m canvas: tempCanvas.\x0a\x09\x09\x09\x09tempCanvas asJQuery css: 'z-index' put: cell zIndex.\x0a\x09\x09\x09\x09array i: i j: j put: tempCanvas ] ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "children", "ifNotNil:", "monster", "newLeaf:point:", "firstCoods", "canvas:", "css:put:", "asJQuery", "zIndex", "i:j:put:"]
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "xShift",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(4)._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xShift",{},$globals.CWMonsterLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xShift\x0a\x09^ 4 negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated"]
}),
$globals.CWMonsterLayer);

$core.addMethod(
$core.method({
selector: "yShift",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(50)._negated();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"yShift",{},$globals.CWMonsterLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "yShift\x0a\x09^ 50 negated",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated"]
}),
$globals.CWMonsterLayer);



$core.addClass('CWCanvasLayer', $globals.CWLayer, ['canvas'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWCanvasLayer.comment="I represent a layer which is implement as a unique canvas. Used for background.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "canvasForId:",
protocol: 'factory',
fn: function (id){
var self=this;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(id)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv($TagBrush())._fromJQuery_canvas_($2,$recv($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canvasForId:",{id:id},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "canvasForId: id\x0a\x09\x22Answers amber canvas from a html id\x22\x0a\x0a\x09^ TagBrush fromJQuery: id asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)",
referencedClasses: ["TagBrush", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["fromJQuery:canvas:", "asJQuery", "onJQuery:"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "clean",
protocol: 'rendering',
fn: function (){
var self=this;
var elem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
elem=$recv(self["@canvas"])._element();
$recv($recv(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),$recv(elem)._width(),$recv(elem)._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{elem:elem},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09| elem |\x0a\x09elem := canvas element.\x0a\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["element", "clearRect:y:width:height:", "getContext:", "width", "height"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@canvas"])._element())._getContext_("2d");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"context",{},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ canvas element getContext: '2d'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getContext:", "element"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "display:",
protocol: 'rendering',
fn: function (object){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._display_cood_(object,(0).__at((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"display:",{object:object},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "display: object\x0a\x09self display: object cood: 0@0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["display:cood:", "@"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "display:cood:",
protocol: 'rendering',
fn: function (object,aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._context())._drawImage_x_y_($recv(object)._image(),$recv(aPoint)._x(),$recv(aPoint)._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"display:cood:",{object:object,aPoint:aPoint},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "aPoint"],
source: "display: object cood: aPoint\x0a\x09self context\x0a\x09\x09drawImage: object image\x0a\x09\x09x: aPoint x\x0a\x09\x09y: aPoint y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawImage:x:y:", "context", "image", "x", "y"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "drawImage:x:y:",
protocol: 'rendering',
fn: function (img,x,y){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._context())._drawImage_x_y_(img,x,y);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawImage:x:y:",{img:img,x:x,y:y},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["img", "x", "y"],
source: "drawImage: img x: x y: y\x0a\x09self context drawImage: img x: x y: y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawImage:x:y:", "context"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "drawIsometric:point:",
protocol: 'rendering',
fn: function (object,point){
var self=this;
function $Number(){return $globals.Number||(typeof Number=="undefined"?nil:Number)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._safeDraw_((function(context){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(context)._translate_y_($recv($recv(point)._x()).__plus((45)),$recv($recv(point)._y()).__minus((7)));
$recv(context)._scale_y_((1),(0.5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scale:y:"]=1;
//>>excludeEnd("ctx");
$recv(context)._rotate_($recv($recv($Number())._pi()).__slash((4)));
$1=$recv(context)._scale_y_((1.4),(1.33));
$1;
return self._display_(object);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({context:context},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawIsometric:point:",{object:object,point:point},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object", "point"],
source: "drawIsometric: object point: point\x0a\x0a\x09self safeDraw: [ :context |\x0a\x09\x09context \x0a\x09\x09\x09translate: point x + 45 y: point y - 7;\x0a\x09\x09\x09scale: 1 y: 0.5;\x0a\x09\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09\x09scale: 1.4 y: 1.33.\x0a\x09self display: object ]",
referencedClasses: ["Number"],
//>>excludeEnd("ide");
messageSends: ["safeDraw:", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "initializeWithId:",
protocol: 'initialize-release',
fn: function (id){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@canvas"]=self._canvasForId_(id);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithId:",{id:id},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "initializeWithId: id\x0a\x09canvas := self canvasForId: id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["canvasForId:"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "reverseDisplay:point:xPad:yPad:",
protocol: 'rendering',
fn: function (monster,point,aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5,$6,$7;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$2=$1;
$4=$recv(point)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(aX);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$recv($2)._translate_y_($3,(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["translate:y:"]=1;
//>>excludeEnd("ctx");
$5=$recv($1)._scale_y_((-1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["scale:y:"]=1;
//>>excludeEnd("ctx");
$5;
return self._display_cood_(monster,(0).__at($recv($recv(point)._y()).__minus(aY)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=self._context();
$recv($6)._scale_y_((-1),(1));
$7=$recv($6)._translate_y_($recv($recv($recv(point)._x()).__plus(aX))._negated(),(0));
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reverseDisplay:point:xPad:yPad:",{monster:monster,point:point,aX:aX,aY:aY},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["monster", "point", "aX", "aY"],
source: "reverseDisplay: monster point: point xPad: aX yPad: aY\x0a\x0a\x09[self context\x0a\x09\x09\x09translate: point x + aX y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09self display: monster cood: 0@(point y - aY) ]\x0a\x09ensure: [\x22faster than save and restore\x22\x0a\x09self context\x0a\x09\x09scale: -1 y: 1;\x0a\x09\x09translate: (point x + aX) negated y: 0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", "translate:y:", "context", "+", "x", "scale:y:", "display:cood:", "@", "-", "y", "negated"]
}),
$globals.CWCanvasLayer);

$core.addMethod(
$core.method({
selector: "safeDraw:",
protocol: 'rendering',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$recv($1)._save();
$2=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["context"]=2;
//>>excludeEnd("ctx");
return $recv(aBlock)._value_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._context())._restore();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"safeDraw:",{aBlock:aBlock},$globals.CWCanvasLayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "safeDraw: aBlock\x0a\x09\x22ensure that the drawing context will be restored\x22\x0a\x0a\x09[ self context save.\x0a\x09aBlock value: self context ]\x0a\x09\x09ensure: [ self context restore ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", "save", "context", "value:", "restore"]
}),
$globals.CWCanvasLayer);



$core.addClass('CWMapDrawer', $globals.CWVisitor, ['executionContext', 'layers', 'padding', 'map', 'menus'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMapDrawer.comment="I am a drawer that can draw the business objects through a visit of its tree.\x0aI am an implementation of the interpreter design pattern so I have a context of execution as instance variable.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return $globals.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($CWEasnothAnnouncer())._current();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "backTileImage",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWBackground(){return $globals.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($CWBackground())._imageCacheAt_("back");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backTileImage",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backTileImage\x0a\x09^ CWBackground imageCacheAt: 'back'",
referencedClasses: ["CWBackground"],
//>>excludeEnd("ide");
messageSends: ["imageCacheAt:"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "backgroundCanvasId",
protocol: 'constant',
fn: function (){
var self=this;
return "#background";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundCanvasId\x0a\x09\x22id of the background canvas for the css\x22\x0a\x0a\x09^ '#background'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "backgroundLayer",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@layers"])._at_((1));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundLayer",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backgroundLayer\x0a\x09^ layers at: 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "canvasLayerForId:",
protocol: 'factory',
fn: function (id){
var self=this;
function $CWCanvasLayer(){return $globals.CWCanvasLayer||(typeof CWCanvasLayer=="undefined"?nil:CWCanvasLayer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($CWCanvasLayer())._new())._initializeWithId_(id);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canvasLayerForId:",{id:id},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["id"],
source: "canvasLayerForId: id\x0a\x09\x22Answers a CWLayer from a html id\x22\x0a\x0a\x09^ CWCanvasLayer new initializeWithId: id",
referencedClasses: ["CWCanvasLayer"],
//>>excludeEnd("ide");
messageSends: ["initializeWithId:", "new"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "canvasPadding",
protocol: 'constant',
fn: function (){
var self=this;
return (50);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvasPadding\x0a\x09\x22padding between the border of the web page and the map (left and top)\x22\x0a\x0a\x09^ 50",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "clean",
protocol: 'public',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@layers"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._clean();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09layers do: [ :each | each clean ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "clean"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "currentPoint",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._executionContext())._currentPoint();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPoint\x0a\x09^ self executionContext currentPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentPoint", "executionContext"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "down",
protocol: 'map move',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self["@padding"];
$3=self._moveIncrement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveIncrement"]=1;
//>>excludeEnd("ctx");
$2=(0).__at($3);
self["@padding"]=$recv($1).__plus($2);
$recv(self["@layers"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._down_(self._moveIncrement());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"down",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "down\x0a\x09padding := padding + (0 @ self moveIncrement).\x0a\x09layers do: [ :each |\x0a\x09\x09each down: self moveIncrement ].\x0a\x09self updateMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "@", "moveIncrement", "do:", "down:", "updateMap"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "drawBackTile",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3;
$1=self._backgroundLayer();
$2=self._backTileImage();
$5=self._currentPoint();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentPoint"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
$3=$recv($4).__minus((4));
$recv($1)._drawImage_x_y_($2,$3,$recv($recv(self._currentPoint())._y()).__plus((20)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawBackTile",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawBackTile\x0a\x09self backgroundLayer drawImage: self backTileImage x: self currentPoint x - 4 y: self currentPoint y + 20",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawImage:x:y:", "backgroundLayer", "backTileImage", "-", "x", "currentPoint", "+", "y"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "drawBackground:",
protocol: 'rendering',
fn: function (object){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._backgroundLayer())._drawIsometric_point_(object,self._currentPoint());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawBackground:",{object:object},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "drawBackground: object\x0a\x09self backgroundLayer drawIsometric: object point: self currentPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawIsometric:point:", "backgroundLayer", "currentPoint"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "executionContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@executionContext"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "executionContext\x0a\x09^ executionContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWMapDrawer.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._initializeCanvasLayers();
self._padding_($recv(self._canvasPadding()).__at((0)));
self._initializeEventHandling();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self initializeCanvasLayers.\x0a\x09self padding: (self canvasPadding @ 0).\x0a\x09self initializeEventHandling.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "initializeCanvasLayers", "padding:", "@", "canvasPadding", "initializeEventHandling"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "initializeCanvasLayers",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($Array())._new_((3));
$recv($1)._at_put_((1),self._canvasLayerForId_(self._backgroundCanvasId()));
$2=$recv($1)._yourself();
self["@layers"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeCanvasLayers",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeCanvasLayers\x0a\x09layers := (Array new: 3)\x0a\x09\x09at: 1 put: (self canvasLayerForId: self backgroundCanvasId);\x0a\x09\x09yourself.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "canvasLayerForId:", "backgroundCanvasId", "yourself"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "initializeEventHandling",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWMapMoveEvent(){return $globals.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._on_do_($CWMapMoveEvent(),(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._perform_($recv(event)._directionMethod());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWMapMoveEvent\x0a\x09\x09do: [ :event | self perform: event directionMethod ]",
referencedClasses: ["CWMapMoveEvent"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer", "perform:", "directionMethod"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "initializeForMap:",
protocol: 'initialize-release',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$7,$6,$5,$4,$2;
self["@map"]=aMap;
$1=self._padding();
$3=self._canvasPadding();
$7=$recv($recv($recv(self["@map"])._children())._at_((1)))._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._size();
$5=$recv($6).__star(self._tileUnit());
$4=$recv($5).__star((1.17));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($4);
$recv($1)._x_($2);
self._initializeImageLayers();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09map := aMap.\x0a\x09self padding x: self canvasPadding + ((map children at: 1) children size * self tileUnit * 1.17).\x0a\x09self initializeImageLayers.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "padding", "+", "canvasPadding", "*", "size", "children", "at:", "tileUnit", "initializeImageLayers"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "initializeImageLayers",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._setUpFirstCoods();
$recv(self["@layers"])._at_put_((2),self._newGOTLayer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(self["@layers"])._at_put_((3),self._newMonsterLayer());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeImageLayers",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeImageLayers\x0a\x09self setUpFirstCoods.\x0a\x09layers at: 2 put: self newGOTLayer.\x0a\x09layers at: 3 put: self newMonsterLayer.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setUpFirstCoods", "at:put:", "newGOTLayer", "newMonsterLayer"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "left",
protocol: 'map move',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=self["@padding"];
$4=self._moveIncrement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveIncrement"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at((0));
self["@padding"]=$recv($1).__plus($2);
$recv(self["@layers"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._left_($recv(self._moveIncrement())._negated());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"left",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "left\x0a\x09padding := padding + (self moveIncrement negated @ 0).\x0a\x09layers do: [ :each |\x0a\x09\x09each left: self moveIncrement negated ].\x0a\x09self updateMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "@", "negated", "moveIncrement", "do:", "left:", "updateMap"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "moveIncrement",
protocol: 'map move',
fn: function (){
var self=this;
return (50);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveIncrement\x0a\x09^ 50",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "newGOTLayer",
protocol: 'factory',
fn: function (){
var self=this;
function $CWGOTLayer(){return $globals.CWGOTLayer||(typeof CWGOTLayer=="undefined"?nil:CWGOTLayer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($CWGOTLayer())._new())._initializeForMap_(self["@map"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newGOTLayer",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newGOTLayer\x0a\x09^ CWGOTLayer new initializeForMap: map",
referencedClasses: ["CWGOTLayer"],
//>>excludeEnd("ide");
messageSends: ["initializeForMap:", "new"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "newGlobalDrawingContext",
protocol: 'factory',
fn: function (){
var self=this;
function $CWGlobalDrawingContext(){return $globals.CWGlobalDrawingContext||(typeof CWGlobalDrawingContext=="undefined"?nil:CWGlobalDrawingContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($CWGlobalDrawingContext())._new())._reset_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newGlobalDrawingContext",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newGlobalDrawingContext\x0a\x09^ CWGlobalDrawingContext new reset: self",
referencedClasses: ["CWGlobalDrawingContext"],
//>>excludeEnd("ide");
messageSends: ["reset:", "new"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "newMonsterLayer",
protocol: 'factory',
fn: function (){
var self=this;
function $CWMonsterLayer(){return $globals.CWMonsterLayer||(typeof CWMonsterLayer=="undefined"?nil:CWMonsterLayer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($CWMonsterLayer())._new())._initializeForMap_(self["@map"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newMonsterLayer",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newMonsterLayer\x0a\x09^ CWMonsterLayer new initializeForMap: map",
referencedClasses: ["CWMonsterLayer"],
//>>excludeEnd("ide");
messageSends: ["initializeForMap:", "new"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "padding",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@padding"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "padding\x0a\x09^ padding",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "padding:",
protocol: 'accessing',
fn: function (aPoint){
var self=this;
self["@padding"]=aPoint;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "padding: aPoint\x0a\x09padding := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "right",
protocol: 'map move',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self["@padding"];
$3=self._moveIncrement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveIncrement"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__at((0));
self["@padding"]=$recv($1).__plus($2);
$recv(self["@layers"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._right_(self._moveIncrement());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"right",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "right\x0a\x09padding := padding + (self moveIncrement @ 0).\x0a\x09layers do: [ :each |\x0a\x09\x09each right: self moveIncrement ].\x0a\x09self updateMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "@", "moveIncrement", "do:", "right:", "updateMap"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "setUpFirstCoods",
protocol: 'initialize-release',
fn: function (){
var self=this;
var tempContext,tempCoods,rowSize;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv(self["@map"])._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=1;
//>>excludeEnd("ctx");
rowSize=$recv($1)._size();
tempContext=self._newGlobalDrawingContext();
$2=$recv(self["@map"])._children();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["children"]=2;
//>>excludeEnd("ctx");
$recv($2)._withIndexDo_((function(row,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(tempContext)._nextRow();
return $recv($recv(row)._children())._withIndexDo_((function(cell,j){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(tempContext)._nextCell();
$recv(cell)._firstCoods_($recv(tempContext)._currentPoint());
$3=$recv((100).__plus(j)).__plus($recv(i).__star(rowSize));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return $recv(cell)._zIndex_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUpFirstCoods",{tempContext:tempContext,tempCoods:tempCoods,rowSize:rowSize},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUpFirstCoods\x0a\x09\x22initialize the coods in the web pages of the cells and their z-index\x22\x0a\x0a\x09| tempContext tempCoods rowSize |\x0a\x09rowSize := map children size.\x0a\x09tempContext := self newGlobalDrawingContext.\x0a\x09map children withIndexDo: [ :row :i |\x0a\x09\x09tempContext nextRow.\x0a\x09\x09row children withIndexDo: [ :cell :j |\x0a\x09\x09\x09tempContext nextCell.\x0a\x09\x09\x09cell firstCoods: tempContext currentPoint.\x0a\x09\x09\x09cell zIndex: 100 + j + (i * rowSize) ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "children", "newGlobalDrawingContext", "withIndexDo:", "nextRow", "nextCell", "firstCoods:", "currentPoint", "zIndex:", "+", "*"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "tileUnit",
protocol: 'constant',
fn: function (){
var self=this;
return (50);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tileUnit\x0a\x09\x22scale of the images\x22\x0a\x0a\x09^ 50",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "up",
protocol: 'map move',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=self["@padding"];
$4=self._moveIncrement();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveIncrement"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._negated();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["negated"]=1;
//>>excludeEnd("ctx");
$2=(0).__at($3);
self["@padding"]=$recv($1).__plus($2);
$recv(self["@layers"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._up_($recv(self._moveIncrement())._negated());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._updateMap();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"up",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "up\x0a\x09padding := padding + (0 @ self moveIncrement negated).\x0a\x09layers do: [ :each |\x0a\x09\x09each up: self moveIncrement negated ].\x0a\x09self updateMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "@", "negated", "moveIncrement", "do:", "up:", "updateMap"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "updateMap",
protocol: 'public',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._backgroundLayer())._clean();
self["@executionContext"]=self._newGlobalDrawingContext();
self._visitTree_(self["@map"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateMap",{},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateMap\x0a\x09self backgroundLayer clean.\x0a\x09executionContext := self newGlobalDrawingContext.\x0a\x09self visitTree: map.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clean", "backgroundLayer", "newGlobalDrawingContext", "visitTree:"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitCell:",
protocol: 'visiting',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._executionContext())._nextCell();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self executionContext nextCell.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextCell", "executionContext"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitGameOverTile:",
protocol: 'visiting',
fn: function (got){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["got"],
source: "visitGameOverTile: got\x0a\x09\x22do nothing anymore\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitHeros:",
protocol: 'visiting',
fn: function (heros){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x22do nothing anymore\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitMap:",
protocol: 'visiting',
fn: function (aMap){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "visitMap: aMap\x0a\x09\x22nothing to do here\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitOverTile:",
protocol: 'visiting',
fn: function (ot){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._executionContext())._visitOverTile_(ot);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ot"],
source: "visitOverTile: ot\x0a\x09self executionContext visitOverTile: ot",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitOverTile:", "executionContext"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitRow:",
protocol: 'visiting',
fn: function (aRow){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._executionContext())._nextRow();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self executionContext nextRow.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextRow", "executionContext"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitTile:",
protocol: 'visiting',
fn: function (aTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._executionContext())._visitTile_(aTile);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},$globals.CWMapDrawer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self executionContext visitTile: aTile",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitTile:", "executionContext"]
}),
$globals.CWMapDrawer);

$core.addMethod(
$core.method({
selector: "visitUnit:",
protocol: 'visiting',
fn: function (aUnit){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09\x22do nothing anymore\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapDrawer);



$core.addClass('CWMapInterpreterContext', $globals.Object, ['rowIndex', 'cellIndex'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWMapInterpreterContext.comment="general context just to know the coods in the map of cells";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "nextCell",
protocol: 'context alteration',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@cellIndex"]=$recv(self["@cellIndex"]).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextCell",{},$globals.CWMapInterpreterContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextCell\x0a\x09cellIndex := cellIndex + 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.CWMapInterpreterContext);

$core.addMethod(
$core.method({
selector: "nextRow",
protocol: 'context alteration',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@rowIndex"]=$recv(self["@rowIndex"]).__plus((1));
self["@cellIndex"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextRow",{},$globals.CWMapInterpreterContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextRow\x0a\x09rowIndex := rowIndex + 1.\x0a\x09cellIndex := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.CWMapInterpreterContext);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'initialize-release',
fn: function (){
var self=this;
self["@rowIndex"]=(0);
self["@cellIndex"]=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09rowIndex := 0.\x0a\x09cellIndex := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMapInterpreterContext);



$core.addClass('CWGlobalDrawingContext', $globals.CWMapInterpreterContext, ['currentPointCache', 'drawer'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGlobalDrawingContext.comment="I represent the execution context of the CWMapDrawer.\x0aWith this context, the CWMap drawer will redraw the whole map.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "calculCanvasCoods",
protocol: 'calculs',
fn: function (){
var self=this;
var xpos,ypos,temp,sin45,sin15,sin135,sin75,padding,tileUnit;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$5,$4,$2,$1,$6,$10,$11,$9,$8,$7,$12,$14,$13;
padding=$recv(self["@drawer"])._padding();
tileUnit=$recv(self["@drawer"])._tileUnit();
sin45=(0.707106781);
sin15=(0.258819045);
sin135=(0.233445364);
sin75=(0.965925826);
$3=self["@cellIndex"];
$5=$recv(self["@rowIndex"]).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__or((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=1;
//>>excludeEnd("ctx");
$6=$recv(sin15).__plus(sin75);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
temp=$recv($1).__star($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$10=self["@rowIndex"];
$11=$recv(sin45).__plus(sin75);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=5;
//>>excludeEnd("ctx");
$9=$recv($10).__star($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__minus(temp);
$7=$recv($8).__star(tileUnit);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
xpos=$recv($7).__plus($recv(padding)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=4;
//>>excludeEnd("ctx");
$12=$recv($recv($recv(temp).__slash((2))).__plus($recv(self["@rowIndex"]).__star(sin135))).__star(tileUnit);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
ypos=$recv($12).__plus($recv(padding)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=6;
//>>excludeEnd("ctx");
$14=$recv(xpos).__or((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["|"]=2;
//>>excludeEnd("ctx");
$13=$recv($14).__at($recv(ypos).__or((0)));
return $13;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods",{xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,padding:padding,tileUnit:tileUnit},$globals.CWGlobalDrawingContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "calculCanvasCoods\x0a\x09\x22Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page\x22\x0a\x0a\x09| xpos ypos temp sin45 sin15 sin135 sin75 padding tileUnit |\x0a\x09\x0a\x09padding := drawer padding.\x0a\x09tileUnit := drawer tileUnit.\x0a\x09\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := ((cellIndex + ((rowIndex + 1)/2)) | 0) * (sin15 + sin75).\x0a\x09xpos := (rowIndex * (sin45 + sin75) - (temp)) * tileUnit + padding x.\x0a\x09ypos := (temp / 2 + (rowIndex * sin135)) * tileUnit + padding y.\x0a\x09\x0a\x09^ xpos | 0 @ (ypos | 0)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["padding", "tileUnit", "*", "|", "+", "/", "-", "x", "y", "@"]
}),
$globals.CWGlobalDrawingContext);

$core.addMethod(
$core.method({
selector: "currentPoint",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@currentPointCache"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentPointCache"]=self._calculCanvasCoods();
$1=self["@currentPointCache"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},$globals.CWGlobalDrawingContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPoint\x0a\x09^ currentPointCache ifNil: [ currentPointCache := self calculCanvasCoods ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "calculCanvasCoods"]
}),
$globals.CWGlobalDrawingContext);

$core.addMethod(
$core.method({
selector: "nextCell",
protocol: 'context alteration',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWGlobalDrawingContext.superclass.fn.prototype._nextCell.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@currentPointCache"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextCell",{},$globals.CWGlobalDrawingContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextCell\x0a\x09super nextCell.\x0a\x09currentPointCache := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextCell"]
}),
$globals.CWGlobalDrawingContext);

$core.addMethod(
$core.method({
selector: "reset:",
protocol: 'initialize-release',
fn: function (aDrawer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWGlobalDrawingContext.superclass.fn.prototype._reset.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@currentPointCache"]=nil;
self["@drawer"]=aDrawer;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset:",{aDrawer:aDrawer},$globals.CWGlobalDrawingContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDrawer"],
source: "reset: aDrawer\x0a\x09super reset.\x0a\x09currentPointCache := nil.\x0a\x09drawer := aDrawer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reset"]
}),
$globals.CWGlobalDrawingContext);

$core.addMethod(
$core.method({
selector: "visitOverTile:",
protocol: 'visiting',
fn: function (ot){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@drawer"])._drawBackground_(ot);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},$globals.CWGlobalDrawingContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ot"],
source: "visitOverTile: ot\x0a\x09drawer drawBackground: ot",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawBackground:"]
}),
$globals.CWGlobalDrawingContext);

$core.addMethod(
$core.method({
selector: "visitTile:",
protocol: 'visiting',
fn: function (aTile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@drawer"])._drawBackTile();
$recv(self["@drawer"])._drawBackground_(aTile);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},$globals.CWGlobalDrawingContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTile"],
source: "visitTile: aTile\x0a\x09drawer drawBackTile.\x0a\x09drawer drawBackground: aTile",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawBackTile", "drawBackground:"]
}),
$globals.CWGlobalDrawingContext);



$core.addClass('CWTwoDimArray', $globals.Object, ['array'], 'Easnoth-MapUI');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWTwoDimArray.comment="I am an Array with two dimension.\x0a\x0aI can be created through new: aPoint, aPoint being my x and y dimensions.\x0a\x0aBasic API :\x0ai:j: -> Answers element at (i,j)\x0ai:j:put: -> Put element at (i,j)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@array"])._do_((function(subArray){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(subArray)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({subArray:subArray},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.CWTwoDimArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09array do: [ :subArray |\x0a\x09\x09subArray do: [ :each |\x0a\x09\x09\x09aBlock value: each ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "value:"]
}),
$globals.CWTwoDimArray);

$core.addMethod(
$core.method({
selector: "i:j:",
protocol: 'accessing',
fn: function (i,j){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@array"])._at_(i))._at_(j);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"i:j:",{i:i,j:j},$globals.CWTwoDimArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "j"],
source: "i: i j: j\x0a\x09^ (array at: i) at: j",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.CWTwoDimArray);

$core.addMethod(
$core.method({
selector: "i:j:put:",
protocol: 'accessing',
fn: function (i,j,value){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@array"])._at_(i))._at_put_(j,value);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"i:j:put:",{i:i,j:j,value:value},$globals.CWTwoDimArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["i", "j", "value"],
source: "i: i j: j put: value\x0a\x09^ (array at: i) at: j put: value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "at:"]
}),
$globals.CWTwoDimArray);

$core.addMethod(
$core.method({
selector: "initializeWithSize:",
protocol: 'initialize - release',
fn: function (aPoint){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
self["@array"]=$recv($Array())._new_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new:"]=1;
//>>excludeEnd("ctx");
(1)._to_do_($recv(aPoint)._x(),(function(index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@array"])._at_put_(index,$recv($Array())._new_($recv(aPoint)._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithSize:",{aPoint:aPoint},$globals.CWTwoDimArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "initializeWithSize: aPoint\x0a\x09array := Array new: aPoint x.\x0a\x091 to: aPoint x do: [ :index |\x0a\x09\x09array at: index put: (Array new: aPoint y) ]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new:", "x", "to:do:", "at:put:", "y"]
}),
$globals.CWTwoDimArray);

$core.addMethod(
$core.method({
selector: "rowsDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@array"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowsDo:",{aBlock:aBlock},$globals.CWTwoDimArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "rowsDo: aBlock\x0a\x09array do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.CWTwoDimArray);

$core.addMethod(
$core.method({
selector: "rowsWithIndexDo:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@array"])._withIndexDo_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rowsWithIndexDo:",{aBlock:aBlock},$globals.CWTwoDimArray)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "rowsWithIndexDo: aBlock\x0a\x09array withIndexDo: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:"]
}),
$globals.CWTwoDimArray);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._shouldNotImplement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.CWTwoDimArray.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09self shouldNotImplement",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldNotImplement"]
}),
$globals.CWTwoDimArray.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (aPoint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._basicNew();
$recv($2)._initialize();
$recv($2)._initializeWithSize_(aPoint);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aPoint:aPoint},$globals.CWTwoDimArray.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "new: aPoint\x0a\x09^ self basicNew\x0a\x09\x09initialize;\x0a\x09\x09initializeWithSize: aPoint;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "basicNew", "initializeWithSize:", "yourself"]
}),
$globals.CWTwoDimArray.klass);

});
