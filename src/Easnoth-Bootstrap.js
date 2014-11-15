define("amber-easnoth/Easnoth-Bootstrap", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-Bootstrap');
$core.packages["Easnoth-Bootstrap"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWBootstrapper', $globals.Object, ['objectToLoad', 'objectLoaded', 'loadingBar', 'hasStarted'], 'Easnoth-Bootstrap');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWBootstrapper.comment="Bootstrap the system. Currently work only for games, not for the map editor";
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "bootstrap:",
protocol: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWLoadingBar(){return $globals.CWLoadingBar||(typeof CWLoadingBar=="undefined"?nil:CWLoadingBar)}
function $CWGame(){return $globals.CWGame||(typeof CWGame=="undefined"?nil:CWGame)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@loadingBar"]=$recv($CWLoadingBar())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($recv($CWGame())._new())._initializeWithSettings_(gameSettings);
self["@hasStarted"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["gameSettings"],
source: "bootstrap: gameSettings\x0a\x09loadingBar := CWLoadingBar new.\x0a\x09CWGame new initializeWithSettings: gameSettings.\x0a\x09hasStarted := false.",
referencedClasses: ["CWLoadingBar", "CWGame"],
//>>excludeEnd("ide");
messageSends: ["new", "initializeWithSettings:"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "checkIfReady",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@objectToLoad"]).__eq(self["@objectLoaded"])).__and($recv(self["@hasStarted"])._not());
if($core.assert($1)){
self._startGame();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "checkIfReady\x0a\x09objectToLoad = objectLoaded & hasStarted not\x0a\x09\x09ifTrue: [ self startGame ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "&", "=", "not", "startGame"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "imagesToPreload",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Array())._new_((5));
$recv($2)._at_put_((1),"red");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_((2),"green");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_((3),"white");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_((4),"invis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv($2)._at_put_((5),"darkGreen");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imagesToPreload",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "imagesToPreload\x0a\x09^ (Array new: 5)\x0a\x09\x09at: 1 put: 'red';\x0a\x09\x09at: 2 put: 'green';\x0a\x09\x09at: 3 put: 'white';\x0a\x09\x09at: 4 put: 'invis';\x0a\x09\x09at: 5 put: 'darkGreen';\x0a\x09\x09yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "yourself"]
}),
$globals.CWBootstrapper);

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
$globals.CWBootstrapper.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@hasStarted"]=true;
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
self._initializeSidePanels();
self._initializeEventHandling();
self._preloadImages();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09hasStarted := true.\x0a\x09objectToLoad := 0.\x0a\x09objectLoaded := 0.\x0a\x09self initializeSidePanels.\x0a\x09self initializeEventHandling.\x0a\x09self preloadImages",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "initializeSidePanels", "initializeEventHandling", "preloadImages"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "initializeEventHandling",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWWaitForObject(){return $globals.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return $globals.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
function $CWMapMoveEvent(){return $globals.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_($CWWaitForObject(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@objectToLoad"]=$recv(self["@objectToLoad"]).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return self["@objectToLoad"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$2=self._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=2;
//>>excludeEnd("ctx");
$recv($2)._on_do_($CWObjectLoaded(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@objectLoaded"]=$recv(self["@objectLoaded"]).__plus((1));
self["@objectLoaded"];
return self._checkIfReady();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=2;
//>>excludeEnd("ctx");
$recv(self._announcer())._on_do_($CWMapMoveEvent(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updateSidePanels();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeEventHandling\x0a\x09self announcer \x0a\x09\x09on: CWWaitForObject \x0a\x09\x09do: [ objectToLoad := objectToLoad + 1 ].\x0a\x09self announcer \x0a\x09\x09on: CWObjectLoaded \x0a\x09\x09do: [ objectLoaded := objectLoaded + 1.\x0a\x09\x09\x09\x09self checkIfReady].\x0a\x09self announcer\x0a\x09\x09on: CWMapMoveEvent\x0a\x09\x09do: [ self updateSidePanels ].",
referencedClasses: ["CWWaitForObject", "CWObjectLoaded", "CWMapMoveEvent"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer", "+", "checkIfReady", "updateSidePanels"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "initializeSidePanels",
protocol: 'initialize-release',
fn: function (){
var self=this;
var html,global,sidePanels;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3,$4,$receiver;
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._sidePanels();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sidePanels"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
return self;
};
$3="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
html=$recv($HTMLCanvas())._onJQuery_($3);
global="#global"._asJQuery();
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
$recv($4)._sidePanels_($recv($Array())._new());
(4)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._class())._sidePanels())._add_($recv($recv(html)._div())._class_("sidePanel"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self._onWindowResize_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._updateSidePanels();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["updateSidePanels"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
self._updateSidePanels();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeSidePanels",{html:html,global:global,sidePanels:sidePanels},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeSidePanels\x0a\x09| html global sidePanels |\x0a\x09self class sidePanels ifNotNil: [ ^ self ].\x0a\x09html := HTMLCanvas onJQuery: 'body' asJQuery.\x0a\x09global := '#global' asJQuery.\x0a\x09self class sidePanels: Array new.\x0a\x094 timesRepeat: [ self class sidePanels add: (html div class: 'sidePanel') ].\x0a\x09self onWindowResize: [ self updateSidePanels ].\x0a\x09self updateSidePanels.",
referencedClasses: ["HTMLCanvas", "Array"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "sidePanels", "class", "onJQuery:", "asJQuery", "sidePanels:", "new", "timesRepeat:", "add:", "class:", "div", "onWindowResize:", "updateSidePanels"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "onWindowResize:",
protocol: 'initialize-release',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
jQuery(window).resize(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onWindowResize:",{aBlock:aBlock},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onWindowResize: aBlock\x0a\x09<jQuery(window).resize(aBlock)>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "preloadImages",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWGameOverTile(){return $globals.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
function $CWBackground(){return $globals.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._imagesToPreload())._do_((function(key){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($CWGameOverTile())._newImageFrom_(key);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["newImageFrom:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($CWBackground())._newImageFrom_("back");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"preloadImages",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "preloadImages\x0a\x09self imagesToPreload do: [ :key |\x0a\x09\x09CWGameOverTile newImageFrom: key ].\x0a\x09CWBackground newImageFrom: 'back'.",
referencedClasses: ["CWGameOverTile", "CWBackground"],
//>>excludeEnd("ide");
messageSends: ["do:", "imagesToPreload", "newImageFrom:"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'events',
fn: function (){
var self=this;
function $CWGameStart(){return $globals.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@hasStarted"]=true;
$recv(self["@loadingBar"])._hide();
$recv(self._announcer())._announce_($recv($CWGameStart())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09hasStarted := true.\x0a\x09loadingBar hide.\x0a\x09self announcer announce: CWGameStart new.",
referencedClasses: ["CWGameStart"],
//>>excludeEnd("ide");
messageSends: ["hide", "announce:", "announcer", "new"]
}),
$globals.CWBootstrapper);

$core.addMethod(
$core.method({
selector: "updateSidePanels",
protocol: 'initialize-release',
fn: function (){
var self=this;
var global,height,width,sidePanels;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$8,$7,$9,$6,$10,$13,$12,$14,$11,$15,$20,$19,$18,$17,$16,$21,$24,$23,$22;
global="#global"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$1=$recv(window)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
height=$recv($1)._height();
width=$recv($recv(window)._asJQuery())._width();
sidePanels=$recv(self._class())._sidePanels();
$2=$recv(height).__gt((640));
if($core.assert($2)){
$3=global;
$4=$recv($recv($recv($recv(height).__minus((640))).__slash((2)))._asString()).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($3)._css_put_("margin-top",$4);
};
$5=$recv(sidePanels)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$8="position: absolute; top: 0; left: 0; height: ".__comma(height);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$7=$recv($8).__comma("px; width:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$9=$recv(global)._css_("margin-left");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__comma($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($5)._style_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$10=$recv(sidePanels)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$13="position: absolute; top: 0; right: 0; height: ".__comma(height);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=7;
//>>excludeEnd("ctx");
$12=$recv($13).__comma("px; width:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=6;
//>>excludeEnd("ctx");
$14=$recv(global)._css_("margin-right");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__comma($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv($10)._style_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=2;
//>>excludeEnd("ctx");
$15=$recv(sidePanels)._at_((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$20=$recv(global)._css_("margin-top");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:"]=3;
//>>excludeEnd("ctx");
$19="position: absolute; top: 0; left: 0; height: ".__comma($20);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=11;
//>>excludeEnd("ctx");
$18=$recv($19).__comma("; width:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=10;
//>>excludeEnd("ctx");
$17=$recv($18).__comma(width);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=9;
//>>excludeEnd("ctx");
$16=$recv($17).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=8;
//>>excludeEnd("ctx");
$recv($15)._style_($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=3;
//>>excludeEnd("ctx");
$21=$recv(sidePanels)._at_((4));
$24=$recv("position: absolute; bottom: 0; left: 0; height: ".__comma($recv(global)._css_("margin-bottom"))).__comma("; width:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=14;
//>>excludeEnd("ctx");
$23=$recv($24).__comma(width);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=13;
//>>excludeEnd("ctx");
$22=$recv($23).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=12;
//>>excludeEnd("ctx");
$recv($21)._style_($22);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateSidePanels",{global:global,height:height,width:width,sidePanels:sidePanels},$globals.CWBootstrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateSidePanels\x0a\x09| global height width sidePanels |\x0a\x09\x0a\x09global := '#global' asJQuery.\x0a\x09height := window asJQuery height.\x0a\x09width := window asJQuery width.\x0a\x09sidePanels := self class sidePanels.\x0a\x09\x0a\x09height > 640 ifTrue: [\x0a\x09\x09global css: 'margin-top' put: ((height - 640) / 2) asString, 'px' ].\x0a\x09\x09\x0a\x09(sidePanels at: 1)\x0a\x09\x09style: 'position: absolute; top: 0; left: 0; height: ', height, 'px; width:', (global css: 'margin-left').\x0a\x09(sidePanels at: 2)\x0a\x09\x09style: 'position: absolute; top: 0; right: 0; height: ', height, 'px; width:', (global css: 'margin-right').\x0a\x09(sidePanels at: 3)\x0a\x09\x09style: 'position: absolute; top: 0; left: 0; height: ', (global css: 'margin-top'), '; width:', width, 'px'.\x0a\x09(sidePanels at: 4)\x0a\x09\x09style: 'position: absolute; bottom: 0; left: 0; height: ', (global css: 'margin-bottom'), '; width:', width, 'px'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "height", "width", "sidePanels", "class", "ifTrue:", ">", "css:put:", ",", "asString", "/", "-", "style:", "at:", "css:"]
}),
$globals.CWBootstrapper);


$globals.CWBootstrapper.klass.iVarNames = ['sidePanels'];
$core.addMethod(
$core.method({
selector: "bootstrap:",
protocol: 'instance creation',
fn: function (gameSettings){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._bootstrap_(gameSettings);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},$globals.CWBootstrapper.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["gameSettings"],
source: "bootstrap: gameSettings\x0a\x09^ self new bootstrap: gameSettings",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bootstrap:", "new"]
}),
$globals.CWBootstrapper.klass);

$core.addMethod(
$core.method({
selector: "sidePanels",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sidePanels"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sidePanels\x0a\x09^ sidePanels",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWBootstrapper.klass);

$core.addMethod(
$core.method({
selector: "sidePanels:",
protocol: 'accessing',
fn: function (object){
var self=this;
self["@sidePanels"]=object;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["object"],
source: "sidePanels: object\x0a\x09sidePanels := object",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWBootstrapper.klass);


$core.addClass('CWGameSettings', $globals.Object, ['players', 'mapNumber', 'afterGameBlock'], 'Easnoth-Bootstrap');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGameSettings.comment="I represent the game settings. My instance variables are set before the game, in the start menus. Then, the CWBootstrapper handles my data to launch corectly the game.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addPlayer:",
protocol: 'accessing',
fn: function (aPlayer){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@players"])._add_(aPlayer);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addPlayer:",{aPlayer:aPlayer},$globals.CWGameSettings)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPlayer"],
source: "addPlayer: aPlayer\x0a\x09players add: aPlayer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "afterGameBlock",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@afterGameBlock"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "afterGameBlock\x0a\x09^ afterGameBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "afterGameBlock:",
protocol: 'accessing',
fn: function (block){
var self=this;
self["@afterGameBlock"]=block;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["block"],
source: "afterGameBlock: block\x0a\x09afterGameBlock := block",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'intialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWGameSettings.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._resetPlayers();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWGameSettings)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self resetPlayers.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "resetPlayers"]
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "mapNumber",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@mapNumber"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mapNumber\x0a\x09^ mapNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "mapNumber:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@mapNumber"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "mapNumber: int\x0a\x09mapNumber := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "players",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@players"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "players\x0a\x09^ players",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'intialize-release',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(aStream)._nextPutAll_("settings(map n.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(self["@mapNumber"])._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(aStream)._nextPutAll_("; ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(self["@players"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._printOn_(aStream);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CWGameSettings)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'settings(map n.';\x0a\x09\x09nextPutAll: mapNumber printString;\x0a\x09\x09nextPutAll: '; '.\x0a\x09players do: [ :each |\x0a\x09\x09each printOn: aStream ].\x0a\x09aStream nextPutAll: ')'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "printString", "do:", "printOn:"]
}),
$globals.CWGameSettings);

$core.addMethod(
$core.method({
selector: "resetPlayers",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@players"]=$recv($Array())._new();
$1=self["@players"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetPlayers",{},$globals.CWGameSettings)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetPlayers\x0a\x09^ players := Array new.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CWGameSettings);



$core.addClass('CWCampaignSettings', $globals.CWGameSettings, ['playerArmy', 'wonMatches'], 'Easnoth-Bootstrap');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWCampaignSettings.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@wonMatches"]=$recv($Array())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWCampaignSettings)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09wonMatches := Array new.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.CWCampaignSettings);

$core.addMethod(
$core.method({
selector: "playerArmy",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@playerArmy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "playerArmy\x0a\x09^ playerArmy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCampaignSettings);

$core.addMethod(
$core.method({
selector: "playerArmy:",
protocol: 'accessing',
fn: function (anArmy){
var self=this;
self["@playerArmy"]=anArmy;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArmy"],
source: "playerArmy: anArmy\x0a\x09playerArmy := anArmy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCampaignSettings);

$core.addMethod(
$core.method({
selector: "wonMatches",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@wonMatches"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "wonMatches\x0a\x09^ wonMatches",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCampaignSettings);

$core.addMethod(
$core.method({
selector: "wonMatches:",
protocol: 'accessing',
fn: function (list){
var self=this;
self["@wonMatches"]=list;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["list"],
source: "wonMatches: list\x0a\x09wonMatches := list",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCampaignSettings);



$core.addClass('CWLoadingBar', $globals.Widget, ['box'], 'Easnoth-Bootstrap');
$core.addMethod(
$core.method({
selector: "hide",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@box"])._asJQuery())._hide();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hide",{},$globals.CWLoadingBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hide\x0a\x09box asJQuery hide",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hide", "asJQuery"]
}),
$globals.CWLoadingBar);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._appendToJQuery_("#global"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWLoadingBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09self appendToJQuery: '#global' asJQuery.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "asJQuery"]
}),
$globals.CWLoadingBar);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._img();
$recv($1)._class_("loadBar");
$2=$recv($1)._src_("ressources/images/start/loading.png");
self["@box"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWLoadingBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09box := html img\x0a\x09\x09class: 'loadBar';\x0a\x09\x09src: 'ressources/images/start/loading.png'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "img", "src:"]
}),
$globals.CWLoadingBar);

$core.addMethod(
$core.method({
selector: "show",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@box"])._asJQuery())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"show",{},$globals.CWLoadingBar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "show\x0a\x09box asJQuery show",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["show", "asJQuery"]
}),
$globals.CWLoadingBar);


$globals.CWLoadingBar.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self["@default"];
if(($receiver = $1) == null || $receiver.isNil){
self["@default"]=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWLoadingBar.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$2=self["@default"];
return $2;
} else {
$1;
};
$recv(self["@default"])._show();
$3=self["@default"];
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.CWLoadingBar.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09default ifNil: [ ^ default := super new].\x0a\x09default show.\x0a\x09^ default",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "show"]
}),
$globals.CWLoadingBar.klass);


$core.addClass('CWStartMenu', $globals.Widget, ['box', 'subBox', 'frontImages', 'backButton', 'history', 'gameSettings'], 'Easnoth-Bootstrap');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWStartMenu.comment="menu with custom game and stuff here.\x0a\x0aThis is currently the worst class of the system in term of code quality.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addFrontImages",
protocol: 'rendering',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$5,$6,$8,$7,$9,$4,$10,$12,$13,$15,$14,$16,$11,$17,$18,$2;
self["@frontImages"]=$recv($Array())._new_((3));
$recv(self["@box"])._append_((function(html2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html2)._div();
$recv($1)._style_("height: 100%; width: 100%; position: relative");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=self["@frontImages"];
$5=$recv(html2)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["img"]=1;
//>>excludeEnd("ctx");
$6=$5;
$8=self._ressourcesFolder();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["ressourcesFolder"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__comma("fey.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($6)._src_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["src:"]=1;
//>>excludeEnd("ctx");
$9=$recv($5)._style_("position: absolute; bottom: 1px; left: 121px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=2;
//>>excludeEnd("ctx");
$4=$9;
$recv($3)._at_put_((1),$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$10=self["@frontImages"];
$12=$recv(html2)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["img"]=2;
//>>excludeEnd("ctx");
$13=$12;
$15=self._ressourcesFolder();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["ressourcesFolder"]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__comma("monster.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv($13)._src_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["src:"]=2;
//>>excludeEnd("ctx");
$16=$recv($12)._style_("position: absolute; top: 1px; right: 121px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=3;
//>>excludeEnd("ctx");
$11=$16;
$recv($10)._at_put_((2),$11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$17=$recv(html2)._img();
$recv($17)._src_($recv(self._ressourcesFolder()).__comma("battle_text.png"));
$18=$recv($17)._style_("position: absolute; bottom: 65px; right: 150px");
return $recv(self["@frontImages"])._at_put_((3),$18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html2:html2},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFrontImages",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addFrontImages\x0a\x09frontImages := Array new: 3.\x0a\x09\x22frontImages at: 1 put:\x22 \x0a\x09box append: [ :html2 | html2 div\x0a\x09\x09style: 'height: 100%; width: 100%; position: relative';\x0a\x09\x09with: [\x0a\x09\x09\x09frontImages at: 1 put: (html2 img \x0a\x09\x09\x09\x09src: self ressourcesFolder, 'fey.png';\x0a\x09\x09\x09\x09style: 'position: absolute; bottom: 1px; left: 121px').\x0a\x09\x09\x09frontImages at: 2 put: (html2 img \x0a\x09\x09\x09\x09src: self ressourcesFolder, 'monster.png';\x0a\x09\x09\x09\x09style: 'position: absolute; top: 1px; right: 121px').\x0a\x09\x09\x09frontImages at: 3 put: (html2 img \x0a\x09\x09\x09\x09src: self ressourcesFolder, 'battle_text.png';\x0a\x09\x09\x09\x09style: 'position: absolute; bottom: 65px; right: 150px').\x0a\x09\x09] ].",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new:", "append:", "style:", "div", "with:", "at:put:", "src:", "img", ",", "ressourcesFolder"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "armyButton:on:",
protocol: 'rendering',
fn: function (armyName,html){
var self=this;
var but;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7;
$1=$recv(html)._button();
$recv($1)._class_("armyButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._h4();
$recv($2)._class_("subTitle");
$3=$recv($2)._with_($recv(armyName)._upFirstLetter());
$3;
$5="ressources/images/monsters/".__comma(armyName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__comma("/cavalry-heros.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv(html)._img_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img:"]=1;
//>>excludeEnd("ctx");
$6=$recv("ressources/images/monsters/".__comma(armyName)).__comma("/range-heros.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
return $recv(html)._img_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@gameSettings"])._playerArmy_(armyName);
$recv(self["@history"])._add_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._campaign();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
return self._campaign2();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$7=$recv($1)._yourself();
but=$7;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"armyButton:on:",{armyName:armyName,html:html,but:but},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["armyName", "html"],
source: "armyButton: armyName on: html\x0a\x09| but |\x0a\x09but := html button\x0a\x09\x09\x09\x09\x09class: 'armyButton';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html h4 \x0a\x09\x09\x09\x09\x09\x09\x09class: 'subTitle'; \x0a\x09\x09\x09\x09\x09\x09\x09with: armyName upFirstLetter.\x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/cavalry-heros.png'.\x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/range-heros.png' ];\x0a\x09\x09\x09\x09\x09onClick: [ gameSettings playerArmy: armyName.\x0a\x09\x09\x09\x09\x09\x09history add: [ self campaign].\x0a\x09\x09\x09\x09\x09\x09self campaign2 ];\x0a\x09\x09\x09\x09\x09\x09yourself.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "h4", "upFirstLetter", "img:", ",", "onClick:", "playerArmy:", "add:", "campaign", "campaign2", "yourself"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "armyNames",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=["elves", "kingdom", "merfolks", "dwarves", "outlaws"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "armyNames\x0a\x09^ #( 'elves' 'kingdom' 'merfolks' 'dwarves' 'outlaws' )",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "armySelectBox:on:",
protocol: 'rendering',
fn: function (playerNumber,html){
var self=this;
var selectBox;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
selectBox=$recv(html)._select();
$1=selectBox;
$2=$1;
$3=$recv(self._selectBoxClasses())._at_(playerNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($2)._class_($3);
$recv($1)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(self["@gameSettings"])._players())._at_(playerNumber))._team_($recv($recv(selectBox)._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._armyNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(html)._option())._with_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"armySelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["playerNumber", "html"],
source: "armySelectBox: playerNumber on: html\x0a\x09| selectBox |\x0a\x09selectBox := html select.\x0a\x09selectBox\x0a\x09\x09class:  (self selectBoxClasses at: playerNumber);\x0a\x09\x09onChange: [ (gameSettings players at: playerNumber) team: selectBox asJQuery val ];\x0a\x09\x09with: [\x0a\x09\x09\x09self armyNames do: [ :each |\x0a\x09\x09\x09\x09html option with: each ] ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select", "class:", "at:", "selectBoxClasses", "onChange:", "team:", "players", "val", "asJQuery", "with:", "do:", "armyNames", "option"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "back",
protocol: 'rendering',
fn: function (){
var self=this;
var last;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
last=$recv(self["@history"])._last();
$recv(self["@history"])._remove_(last);
$recv(last)._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"back",{last:last},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "back\x0a\x09| last |\x0a\x09last := history last.\x0a\x09history remove: last.\x0a\x09last value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "remove:", "value"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "backButton",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=$recv(self["@history"])._isEmpty();
if($core.assert($1)){
$3=$recv(self["@backButton"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._hide();
return $2;
};
$recv($recv(self["@backButton"])._asJQuery())._show();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backButton",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "backButton\x0a\x09history isEmpty ifTrue: [ ^ backButton asJQuery hide ].\x0a\x09backButton asJQuery show.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isEmpty", "hide", "asJQuery", "show"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "campaign",
protocol: 'rendering - main',
fn: function (){
var self=this;
function $CWCampaignSettings(){return $globals.CWCampaignSettings||(typeof CWCampaignSettings=="undefined"?nil:CWCampaignSettings)}
function $CWGameSettings(){return $globals.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$6,$7,$4;
self._hideFrontImages();
self["@gameSettings"]=$recv($CWCampaignSettings())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._button();
$recv($1)._class_("backButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._toggleFrontImages();
self["@gameSettings"]=$recv($CWGameSettings())._new();
self["@gameSettings"];
return self._back();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self["@backButton"]=$2;
self["@backButton"];
self._backButton();
$3=$recv(html)._div();
$recv($3)._style_("margin-top: 6%; margin-left: 26%; width: 100%");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._h3();
$recv($5)._class_("mainTitle");
$6=$recv($5)._with_("Choose your army");
$6;
return $recv(self._armyNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(each).__eq("dwarves");
if(!$core.assert($7)){
return self._armyButton_on_(each,html);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"campaign",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "campaign\x0a\x09self hideFrontImages.\x0a\x09gameSettings := CWCampaignSettings new.\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09backButton := html button \x0a\x09\x09\x09class: 'backButton';\x0a\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09self toggleFrontImages.\x0a\x09\x09\x09\x09gameSettings := CWGameSettings new.\x0a\x09\x09\x09\x09self back ].\x0a\x09\x09self backButton.\x0a\x09\x09html div\x0a\x09\x09\x09style: 'margin-top: 6%; margin-left: 26%; width: 100%';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html h3 \x0a\x09\x09\x09\x09\x09class: 'mainTitle';\x0a\x09\x09\x09\x09\x09with: 'Choose your army'.\x0a\x09\x09\x09\x09self armyNames do: [:each |\x0a\x09\x09\x09\x09\x09each = 'dwarves' ifFalse: [\x0a\x09\x09\x09\x09\x09\x09self armyButton: each on: html ] ]\x0a\x09\x09\x09\x09 ].\x0a\x09]",
referencedClasses: ["CWCampaignSettings", "CWGameSettings"],
//>>excludeEnd("ide");
messageSends: ["hideFrontImages", "new", "contents:", "class:", "button", "onClick:", "toggleFrontImages", "back", "backButton", "style:", "div", "with:", "h3", "do:", "armyNames", "ifFalse:", "=", "armyButton:on:"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "campaign2",
protocol: 'rendering - main',
fn: function (){
var self=this;
var armies;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$6,$5,$2;
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderBackButtonOn_(html);
$1=$recv(html)._div();
$recv($1)._style_("margin-top: 6%; margin-left: 26%; width: 100%");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._h3();
$recv($3)._class_("mainTitle");
$4=$recv($3)._with_("Choose next game opponent");
$4;
armies=$recv(self._armyNames())._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$6=$recv(each).__eq("dwarves");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__or($recv(each).__eq($recv(self["@gameSettings"])._playerArmy()));
return $recv($5)._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,3)});
//>>excludeEnd("ctx");
}));
armies;
return $recv(armies)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._renderStartFightButton_on_(each,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"campaign2",{armies:armies},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "campaign2\x0a\x09| armies |\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09self renderBackButtonOn: html.\x0a\x09\x09html div\x0a\x09\x09\x09style: 'margin-top: 6%; margin-left: 26%; width: 100%';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html h3 \x0a\x09\x09\x09\x09\x09class: 'mainTitle';\x0a\x09\x09\x09\x09\x09with: 'Choose next game opponent'.\x0a\x09\x09\x09\x09armies := self armyNames select: [:each |\x0a\x09\x09\x09\x09\x09(each = 'dwarves' | (each = gameSettings playerArmy)) not ].\x0a\x09\x09\x09\x09armies do: [ :each |\x0a\x09\x09\x09\x09\x09self renderStartFightButton: each on: html ].\x0a\x09\x09\x09\x09 ].\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderBackButtonOn:", "style:", "div", "with:", "class:", "h3", "select:", "armyNames", "not", "|", "=", "playerArmy", "do:", "renderStartFightButton:on:"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "choosePlayers",
protocol: 'game settings',
fn: function (){
var self=this;
function $CWStartMenu(){return $globals.CWStartMenu||(typeof CWStartMenu=="undefined"?nil:CWStartMenu)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@gameSettings"])._resetPlayers();
$recv(self["@gameSettings"])._afterGameBlock_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($CWStartMenu())._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self["@gameSettings"];
$2=self._defaultPlayer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["defaultPlayer"]=1;
//>>excludeEnd("ctx");
$recv($1)._addPlayer_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addPlayer:"]=1;
//>>excludeEnd("ctx");
$recv(self["@gameSettings"])._addPlayer_(self._defaultPlayer());
self._playerMenu();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"choosePlayers",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "choosePlayers\x0a\x09gameSettings resetPlayers.\x0a\x09gameSettings afterGameBlock: [ CWStartMenu start ].\x0a\x09gameSettings addPlayer: self defaultPlayer.\x0a\x09gameSettings addPlayer: self defaultPlayer.\x0a\x09self playerMenu",
referencedClasses: ["CWStartMenu"],
//>>excludeEnd("ide");
messageSends: ["resetPlayers", "afterGameBlock:", "start", "addPlayer:", "defaultPlayer", "playerMenu"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "credits",
protocol: 'rendering - main',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$2;
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderBackButtonOn_(html);
$1=$recv(html)._ul();
$recv($1)._class_("menu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._style_("font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: 2%");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$4=$recv(html)._strong();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["strong"]=1;
//>>excludeEnd("ctx");
$recv($4)._with_("Development ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["br"]=1;
//>>excludeEnd("ctx");
$5=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["a"]=1;
//>>excludeEnd("ctx");
$recv($5)._class_("creditLink");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$recv($5)._with_("Clément Béra");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$recv($5)._target_("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["target:"]=1;
//>>excludeEnd("ctx");
$6=$recv($5)._href_("http://clementbera.wordpress.com/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["href:"]=1;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$7=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["li"]=2;
//>>excludeEnd("ctx");
$recv($7)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$8=$recv(html)._strong();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["strong"]=2;
//>>excludeEnd("ctx");
$recv($8)._with_("Graphics ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["br"]=2;
//>>excludeEnd("ctx");
$9=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["a"]=2;
//>>excludeEnd("ctx");
$recv($9)._class_("creditLink");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$recv($9)._with_("Lusy Dolia");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
$recv($9)._target_("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["target:"]=2;
//>>excludeEnd("ctx");
$10=$recv($9)._href_("https://www.facebook.com/lusy.dolya");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["href:"]=2;
//>>excludeEnd("ctx");
$10;
$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["br"]=3;
//>>excludeEnd("ctx");
$11=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["a"]=3;
//>>excludeEnd("ctx");
$recv($11)._class_("creditLink");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=4;
//>>excludeEnd("ctx");
$recv($11)._with_("Battle for Wesnoth");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$recv($11)._target_("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["target:"]=3;
//>>excludeEnd("ctx");
$12=$recv($11)._href_("http://www.wesnoth.org/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["href:"]=3;
//>>excludeEnd("ctx");
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv($recv(html)._strong())._with_("Thanks to ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
$recv(html)._br();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["br"]=4;
//>>excludeEnd("ctx");
$13=$recv(html)._a();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["a"]=4;
//>>excludeEnd("ctx");
$recv($13)._class_("creditLink");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["class:"]=5;
//>>excludeEnd("ctx");
$recv($13)._with_("Amber web framework");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
$recv($13)._target_("_blank");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["target:"]=4;
//>>excludeEnd("ctx");
$14=$recv($13)._href_("http://amber-lang.net/");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["href:"]=4;
//>>excludeEnd("ctx");
$14;
$recv(html)._br();
$15=$recv(html)._a();
$recv($15)._class_("creditLink");
$recv($15)._with_("Nicolas Petton (Amber core developer)");
$recv($15)._target_("_blank");
$16=$recv($15)._href_("http://www.nicolas-petton.fr/");
return $16;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"credits",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "credits\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09\x09\x09self renderBackButtonOn: html.\x0a\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09style: 'font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: 2%';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Development '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Clément Béra';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://clementbera.wordpress.com/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Graphics '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Lusy Dolia';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'https://www.facebook.com/lusy.dolya'.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Battle for Wesnoth';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://www.wesnoth.org/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Thanks to '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Amber web framework';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://amber-lang.net/'.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Nicolas Petton (Amber core developer)';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://www.nicolas-petton.fr/' ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderBackButtonOn:", "class:", "ul", "style:", "with:", "li", "strong", "br", "a", "target:", "href:"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "defaultPlayer",
protocol: 'accessing',
fn: function (){
var self=this;
function $CWHuman(){return $globals.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($CWHuman())._new())._team_("elves");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defaultPlayer",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "defaultPlayer\x0a\x09^ CWHuman new team: 'elves'",
referencedClasses: ["CWHuman"],
//>>excludeEnd("ide");
messageSends: ["team:", "new"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "hideFrontImages",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@frontImages"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._asJQuery())._hide();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hideFrontImages",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hideFrontImages\x0a\x09frontImages do: [ :each | each asJQuery hide]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "hide", "asJQuery"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initalize-release',
fn: function (){
var self=this;
function $CWBootstrapper(){return $globals.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWStartMenu.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._reset();
$recv($CWBootstrapper())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self reset.\x0a\x09CWBootstrapper new. \x22setUp side panels ...\x22",
referencedClasses: ["CWBootstrapper"],
//>>excludeEnd("ide");
messageSends: ["initialize", "reset", "new"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "menuWith:",
protocol: 'rendering - main',
fn: function (dict){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$5,$6,$4,$7,$1;
$2=self["@subBox"];
$recv($2)._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderBackButtonOn_(html);
$3=$recv(html)._ul();
$recv($3)._class_("menu");
$recv($3)._style_("margin-top: 5%");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(dict)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$5=$recv(html)._a();
$recv($5)._href_("#");
$recv($5)._with_(key);
$6=$recv($5)._onClick_(value);
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({key:key,value:value},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7=$recv($2)._yourself();
$1=$7;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"menuWith:",{dict:dict},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["dict"],
source: "menuWith: dict\x0a\x09^ subBox\x0a\x09\x09\x09\x09contents: [ :html |\x0a\x09\x09\x09\x09\x09self renderBackButtonOn: html.\x0a\x09\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09\x09style: 'margin-top: 5%';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09dict keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [ html a \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09with: key; \x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: value ] ] ] ];\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderBackButtonOn:", "class:", "ul", "style:", "with:", "keysAndValuesDo:", "li", "href:", "a", "onClick:", "yourself"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "playerMenu",
protocol: 'rendering - main',
fn: function (){
var self=this;
var selectBox;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv(self["@subBox"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._renderBackButtonOn_(html);
$1=$recv(html)._ul();
$recv($1)._class_("menu");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return (1)._to_do_((2),(function(n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._playerSelection_on_(n,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({n:n},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$2;
$3=$recv(html)._button();
$recv($3)._class_("startButton");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._startBeta();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"playerMenu",{selectBox:selectBox},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "playerMenu\x0a\x09| selectBox |\x0a\x09subBox contents: [ :html | \x0a\x09\x09\x09\x09self renderBackButtonOn: html.\x0a\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x091 to: 2 do: [ :n |\x0a\x09\x09\x09\x09\x09\x09\x09self playerSelection: n on: html ] ].\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'startButton';\x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self startBeta ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderBackButtonOn:", "class:", "ul", "with:", "to:do:", "playerSelection:on:", "button", "onClick:", "startBeta"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "playerSelectBox:on:",
protocol: 'rendering',
fn: function (playerNumber,html){
var self=this;
var selectBox;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$8,$7,$10,$11,$12,$13,$9;
selectBox=$recv(html)._select();
$1=selectBox;
$2=$1;
$3=$recv(self._selectBoxClasses())._at_(playerNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($2)._class_($3);
$recv($1)._onChange_((function(){
var oldTeam;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(self["@gameSettings"])._players();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["players"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._at_(playerNumber);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
oldTeam=$recv($4)._team();
oldTeam;
$6=$recv(self["@gameSettings"])._players();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["players"]=2;
//>>excludeEnd("ctx");
$8=$recv($recv($Smalltalk())._current())._at_($recv($recv(selectBox)._asJQuery())._val());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._new();
$recv($6)._at_put_(playerNumber,$7);
return $recv($recv($recv(self["@gameSettings"])._players())._at_(playerNumber))._team_(oldTeam);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({oldTeam:oldTeam},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$9=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=$recv(html)._option();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["option"]=1;
//>>excludeEnd("ctx");
$recv($10)._with_("human");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$11=$recv($10)._value_("CWHuman");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$11;
$12=$recv(html)._option();
$recv($12)._with_("AI type 1");
$13=$recv($12)._value_("CWAggressWeakestAI");
return $13;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"playerSelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["playerNumber", "html"],
source: "playerSelectBox: playerNumber on: html\x0a\x09| selectBox |\x0a\x09\x09selectBox := html select. \x0a\x09\x09selectBox \x0a\x09\x09\x09class: (self selectBoxClasses at: playerNumber);\x0a\x09\x09\x09onChange: [ \x0a\x09\x09\x09\x09| oldTeam |\x0a\x09\x09\x09\x09oldTeam := (gameSettings players at: playerNumber) team.\x0a\x09\x09\x09\x09gameSettings players at: playerNumber put: (Smalltalk current at: selectBox asJQuery val) new.\x0a\x09\x09\x09\x09(gameSettings players at: playerNumber) team: oldTeam ];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html option \x0a\x09\x09\x09\x09\x09with: 'human';\x0a\x09\x09\x09\x09\x09value: 'CWHuman'.\x0a\x09\x09\x09\x09html option \x0a\x09\x09\x09\x09\x09with: 'AI type 1';\x0a\x09\x09\x09\x09\x09value: 'CWAggressWeakestAI'].",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["select", "class:", "at:", "selectBoxClasses", "onChange:", "team", "players", "at:put:", "new", "current", "val", "asJQuery", "team:", "with:", "option", "value:"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "playerSelection:on:",
protocol: 'rendering',
fn: function (playerNumber,html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._li();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["li"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_("Player ".__comma(playerNumber));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$recv($recv(html)._li())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._playerSelectBox_on_(playerNumber,html);
return self._armySelectBox_on_(playerNumber,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"playerSelection:on:",{playerNumber:playerNumber,html:html},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["playerNumber", "html"],
source: "playerSelection: playerNumber on: html\x0a\x09html li with: 'Player ', playerNumber.\x0a\x09html li with: [\x0a\x09\x09self playerSelectBox: playerNumber on: html.\x0a\x09\x09self armySelectBox: playerNumber on: html ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "li", ",", "playerSelectBox:on:", "armySelectBox:on:"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "renderBackButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._button();
$recv($1)._class_("backButton");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._back();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@backButton"]=$2;
self._backButton();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderBackButtonOn:",{html:html},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderBackButtonOn: html\x0a\x09\x09backButton := html button \x0a\x09\x09\x09\x09class: 'backButton';\x0a\x09\x09\x09\x09onClick: [ self back ].\x0a\x09\x09self backButton.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "onClick:", "back", "backButton"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'initalize-release',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["div"]=1;
//>>excludeEnd("ctx");
self["@box"]=$recv($1)._class_("intro");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
self._addFrontImages();
$recv(self["@box"])._append_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@subBox"]=$recv($recv(html)._div())._class_("introMenu");
return self["@subBox"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._menuWith_(self._startingMenuDict());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09box := html div\x0a\x09\x09class: 'intro'.\x0a\x09self addFrontImages.\x0a\x09box append: [ subBox := html div class: 'introMenu' ].\x0a\x09self menuWith: self startingMenuDict.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "addFrontImages", "append:", "menuWith:", "startingMenuDict"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "renderStartFightButton:on:",
protocol: 'rendering',
fn: function (armyName,html){
var self=this;
var but;
function $CWAI(){return $globals.CWAI||(typeof CWAI=="undefined"?nil:CWAI)}
function $CWHuman(){return $globals.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
function $CWAggressWeakestAI(){return $globals.CWAggressWeakestAI||(typeof CWAggressWeakestAI=="undefined"?nil:CWAggressWeakestAI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$7,$6,$8,$10,$11,$12,$14,$13,$9;
$1=$recv(html)._button();
$recv($1)._class_("armyButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(html)._h4();
$recv($2)._class_("subTitle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$4=$2;
$5="VS ".__comma($recv(armyName)._upFirstLetter());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._with_($5);
$3;
$7="ressources/images/monsters/".__comma(armyName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$6=$recv($7).__comma("/troop-heros.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$recv(html)._img_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img:"]=1;
//>>excludeEnd("ctx");
$8=$recv("ressources/images/monsters/".__comma(armyName)).__comma("/cavalry-heros.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
return $recv(html)._img_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
$9=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@gameSettings"])._afterGameBlock_((function(loserArray){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._toggle();
$10=$recv($recv(loserArray)._size()).__eq((1));
if($core.assert($10)){
$11=$recv($recv(loserArray)._at_((1)))._isKindOf_($CWAI());
if($core.assert($11)){
$recv($recv(self["@gameSettings"])._wonMatches())._add_(armyName);
return $recv(but)._class_("armyButton done");
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({loserArray:loserArray},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$recv(self["@gameSettings"])._resetPlayers();
$12=self["@gameSettings"];
$14=$recv($CWHuman())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$13=$recv($14)._team_($recv(self["@gameSettings"])._playerArmy());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["team:"]=1;
//>>excludeEnd("ctx");
$recv($12)._addPlayer_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["addPlayer:"]=1;
//>>excludeEnd("ctx");
$recv(self["@gameSettings"])._addPlayer_($recv($recv($CWAggressWeakestAI())._new())._team_(armyName));
return self._startBeta();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
but=$9;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderStartFightButton:on:",{armyName:armyName,html:html,but:but},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["armyName", "html"],
source: "renderStartFightButton: armyName on: html\x0a\x09| but |\x0a\x09but := html button\x0a\x09\x09\x09\x09\x09class: 'armyButton';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html h4 \x0a\x09\x09\x09\x09\x09\x09\x09class: 'subTitle'; \x0a\x09\x09\x09\x09\x09\x09\x09with: 'VS ', armyName upFirstLetter. \x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/troop-heros.png'.\x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/cavalry-heros.png' ];\x0a\x09\x09\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09\x09\x09gameSettings afterGameBlock: [ :loserArray |\x0a\x09\x09\x09\x09\x09\x09\x09\x09self toggle.\x0a\x09\x09\x09\x09\x09\x09\x09\x09loserArray size = 1 ifTrue: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09((loserArray at: 1) isKindOf: CWAI) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09gameSettings wonMatches add: armyName.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09but class: 'armyButton done' \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09] ] ].\x0a\x09\x09\x09\x09\x09\x09gameSettings resetPlayers.\x0a\x09\x09\x09\x09\x09\x09gameSettings addPlayer: (CWHuman new team: gameSettings playerArmy).\x0a\x09\x09\x09\x09\x09\x09gameSettings addPlayer: (CWAggressWeakestAI new team: armyName).\x0a\x09\x09\x09\x09\x09\x09self startBeta ].",
referencedClasses: ["CWAI", "CWHuman", "CWAggressWeakestAI"],
//>>excludeEnd("ide");
messageSends: ["class:", "button", "with:", "h4", ",", "upFirstLetter", "img:", "onClick:", "afterGameBlock:", "toggle", "ifTrue:", "=", "size", "isKindOf:", "at:", "add:", "wonMatches", "resetPlayers", "addPlayer:", "team:", "new", "playerArmy", "startBeta"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "reset",
protocol: 'initalize-release',
fn: function (){
var self=this;
function $CWGameSettings(){return $globals.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@gameSettings"]=$recv($CWGameSettings())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self["@history"]=$recv($Array())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09gameSettings := CWGameSettings new.\x0a\x09history :=  Array new.",
referencedClasses: ["CWGameSettings", "Array"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "ressourcesFolder",
protocol: 'accessing',
fn: function (){
var self=this;
return "ressources/images/start/";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ressourcesFolder\x0a\x09^ 'ressources/images/start/'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "selectBoxClasses",
protocol: 'accessing',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($Array())._new_((2));
$recv($2)._at_put_((1),"styledSelect styledSelectGreen");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_((2),"styledSelect styledSelectRed");
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectBoxClasses",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectBoxClasses\x0a\x09^ (Array new: 2)\x0a\x09\x09at: 1 put: 'styledSelect styledSelectGreen';\x0a\x09\x09at: 2 put: 'styledSelect styledSelectRed';\x0a\x09\x09yourself",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new:", "yourself"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "startBeta",
protocol: 'game settings',
fn: function (){
var self=this;
function $CWBootstrapper(){return $globals.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._toggle();
$recv(self["@gameSettings"])._mapNumber_((8));
$recv($CWBootstrapper())._bootstrap_(self["@gameSettings"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startBeta",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startBeta\x0a\x09self toggle.\x0a\x09gameSettings mapNumber: 8.\x0a\x09CWBootstrapper bootstrap: gameSettings",
referencedClasses: ["CWBootstrapper"],
//>>excludeEnd("ide");
messageSends: ["toggle", "mapNumber:", "bootstrap:"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "startingBlock",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._menuWith_(self._startingMenuDict());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startingBlock",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startingBlock\x0a\x09^ [ self menuWith: self startingMenuDict ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["menuWith:", "startingMenuDict"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "startingMenuDict",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$6,$7,$8,$9,$1;
$2=$recv($Dictionary())._new();
$recv($2)._at_put_("Tutorial",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=self["@history"];
$4=self._startingBlock();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["startingBlock"]=1;
//>>excludeEnd("ctx");
$recv($3)._add_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
return self._tutorial();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._at_put_("Campaign",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self["@history"];
$6=self._startingBlock();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["startingBlock"]=2;
//>>excludeEnd("ctx");
$recv($5)._add_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
return self._campaign();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._at_put_("Custom game",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=self["@history"];
$8=self._startingBlock();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["startingBlock"]=3;
//>>excludeEnd("ctx");
$recv($7)._add_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
return self._choosePlayers();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$recv($2)._at_put_("Credits",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self["@history"])._add_(self._startingBlock());
return self._credits();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$9=$recv($2)._yourself();
$1=$9;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startingMenuDict",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startingMenuDict\x0a\x09^ Dictionary new\x0a\x09\x09at: 'Tutorial' put: [ history add: self startingBlock. self tutorial. ];\x0a\x09\x09at: 'Campaign' put: [ history add: self startingBlock. self campaign ];\x0a\x09\x09at: 'Custom game' put: [ history add: self startingBlock. self choosePlayers ];\x0a\x09\x09\x22at: 'Map Editor' put: [window alert: 'for future use, click on custom game' ];\x22\x0a\x09\x09at: 'Credits' put: [ history add: self startingBlock. self credits ];\x0a\x09\x09yourself",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "new", "add:", "startingBlock", "tutorial", "campaign", "choosePlayers", "credits", "yourself"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "toggle",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@box"])._asJQuery())._toggle();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggle",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggle\x0a\x09box asJQuery toggle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toggle", "asJQuery"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "toggleFrontImages",
protocol: 'rendering',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@frontImages"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._asJQuery())._toggle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleFrontImages",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleFrontImages\x0a\x09frontImages do: [ :each | each asJQuery toggle]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "toggle", "asJQuery"]
}),
$globals.CWStartMenu);

$core.addMethod(
$core.method({
selector: "tutorial",
protocol: 'rendering - main',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$7,$8,$9,$10,$11,$15,$14,$13,$16,$17,$12,$18,$22,$21,$20,$23,$24,$19,$25,$26,$27,$28,$30,$29,$6,$2;
self._toggleFrontImages();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["toggleFrontImages"]=1;
//>>excludeEnd("ctx");
$1=self["@subBox"];
$recv($1)._style_("font-size: 18px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._button();
$recv($3)._class_("backButton");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._toggleFrontImages();
$recv(self["@subBox"])._style_("font-size: 20px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=2;
//>>excludeEnd("ctx");
return self._back();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
self["@backButton"]=$4;
self["@backButton"];
self._backButton();
$5=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["div"]=1;
//>>excludeEnd("ctx");
$recv($5)._style_("margin-top: 6%; margin-left: 26%; width: 100%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["style:"]=3;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$7=$recv(html)._h3();
$recv($7)._class_("mainTitle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=2;
//>>excludeEnd("ctx");
$8=$recv($7)._with_("GOAL : kill all your ennemy army");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._h4();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["h4"]=1;
//>>excludeEnd("ctx");
$recv($9)._class_("subTitle");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["class:"]=3;
//>>excludeEnd("ctx");
$10=$recv($9)._with_("Basics");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$10;
$11=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=2;
//>>excludeEnd("ctx");
$recv($11)._style_("height: 50px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=4;
//>>excludeEnd("ctx");
$12=$recv($11)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$15=self._ressourcesFolder();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["ressourcesFolder"]=1;
//>>excludeEnd("ctx");
$14=$recv($15).__comma("tuto1.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx[","]=1;
//>>excludeEnd("ctx");
$13=$recv(html)._img_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["img:"]=1;
//>>excludeEnd("ctx");
$recv($13)._style_("height: 84px; width: auto; float: left; margin-right: 6px; border: 3px solid gray");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["style:"]=5;
//>>excludeEnd("ctx");
$16=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["p"]=1;
//>>excludeEnd("ctx");
$recv($16)._style_("padding-top: 10px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["style:"]=6;
//>>excludeEnd("ctx");
$17=$recv($16)._with_("When you start your turn, all your activable creatures are surrounded by a white halo. \x0a\x09\x09\x09\x09\x09\x09Click on one of them to activate it. You can activate only one creature per turn.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
return $17;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$12;
$18=$recv(html)._div();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["div"]=3;
//>>excludeEnd("ctx");
$recv($18)._style_("height: 105px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=7;
//>>excludeEnd("ctx");
$19=$recv($18)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$22=self._ressourcesFolder();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["ressourcesFolder"]=2;
//>>excludeEnd("ctx");
$21=$recv($22).__comma("tuto2.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx[","]=2;
//>>excludeEnd("ctx");
$20=$recv(html)._img_($21);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["img:"]=2;
//>>excludeEnd("ctx");
$recv($20)._style_("height: 100px; width: auto; float: right; margin-left: 6px; border: 3px solid gray");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["style:"]=8;
//>>excludeEnd("ctx");
$23=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["p"]=2;
//>>excludeEnd("ctx");
$recv($23)._style_("padding-top: 25px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["style:"]=9;
//>>excludeEnd("ctx");
$24=$recv($23)._with_("When a creature is activated, a bunch of tiles become colored. On click, the selected creature will move to a green tile and attack the ennemy on a red tiles.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
return $24;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
$19;
$25=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["p"]=3;
//>>excludeEnd("ctx");
$recv($25)._with_("When the creature has moved its full move and attacked (or is not able to attack), it is the other player turn. \x0a\x09\x09\x09\x09\x09If you have remaining move but you want to finish your turn, please click on the End turn button.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=8;
//>>excludeEnd("ctx");
$26=$recv(html)._h4();
$recv($26)._class_("subTitle");
$27=$recv($26)._with_("Advanced");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=9;
//>>excludeEnd("ctx");
$27;
$28=$recv(html)._div();
$recv($28)._style_("height: 145px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=10;
//>>excludeEnd("ctx");
$29=$recv($28)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv($recv(html)._img_($recv(self._ressourcesFolder()).__comma("tuto3.png")))._style_("height: 140px; width: auto; float: left; margin-right: 6px;");
$30=$recv(html)._p();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["p"]=4;
//>>excludeEnd("ctx");
$recv($30)._with_("When you click on a creature, you can see on the top left its capabilities. \x0a\x09\x09\x09\x09\x09\x09\x09For example a creature can roll from 1 to 6 dices to attack, each dices having from 30% to 70% chances of hitting.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=11;
//>>excludeEnd("ctx");
return $recv($recv(html)._p())._with_("Lastly, fast or cavalry creatures are better against range creatures, \x0a\x09\x09\x09\x09\x09\x09\x09which are better against foot creatures, which are then better against fast or cavalry ones.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=10;
//>>excludeEnd("ctx");
return $29;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tutorial",{},$globals.CWStartMenu)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tutorial\x0a\x09self toggleFrontImages.\x0a\x09subBox \x0a\x09\x09style: 'font-size: 18px';\x0a\x09\x09contents: [ :html | \x0a\x09\x09backButton := html button \x0a\x09\x09\x09class: 'backButton';\x0a\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09self toggleFrontImages.\x0a\x09\x09\x09\x09subBox style: 'font-size: 20px'.\x0a\x09\x09\x09\x09self back ].\x0a\x09\x09self backButton.\x0a\x09\x09html div\x0a\x09\x09\x09style: 'margin-top: 6%; margin-left: 26%; width: 100%';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09html h3 \x0a\x09\x09\x09\x09class: 'mainTitle';\x0a\x09\x09\x09\x09with: 'GOAL : kill all your ennemy army'.\x0a\x09\x09\x09html h4 \x0a\x09\x09\x09\x09class: 'subTitle';\x0a\x09\x09\x09\x09with: 'Basics'.\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09style: 'height: 50px';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09(html img: self ressourcesFolder, 'tuto1.png') style: 'height: 84px; width: auto; float: left; margin-right: 6px; border: 3px solid gray'.\x0a\x09\x09\x09\x09html p \x0a\x09\x09\x09\x09\x09style: 'padding-top: 10px';\x0a\x09\x09\x09\x09\x09with: 'When you start your turn, all your activable creatures are surrounded by a white halo. \x0a\x09\x09\x09\x09\x09\x09Click on one of them to activate it. You can activate only one creature per turn.'. ].\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09style: 'height: 105px';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09(html img: self ressourcesFolder, 'tuto2.png') style: 'height: 100px; width: auto; float: right; margin-left: 6px; border: 3px solid gray'.\x0a\x09\x09\x09\x09html p\x0a\x09\x09\x09\x09\x09style: 'padding-top: 25px';\x0a\x09\x09\x09\x09\x09with: 'When a creature is activated, a bunch of tiles become colored. On click, the selected creature will move to a green tile and attack the ennemy on a red tiles.'. ].\x0a\x09\x09\x09\x09html p with: 'When the creature has moved its full move and attacked (or is not able to attack), it is the other player turn. \x0a\x09\x09\x09\x09\x09If you have remaining move but you want to finish your turn, please click on the End turn button.'.\x0a\x09\x09\x09html h4 \x0a\x09\x09\x09\x09class: 'subTitle';\x0a\x09\x09\x09\x09with: 'Advanced'.\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09style: 'height: 145px';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09(html img: self ressourcesFolder, 'tuto3.png') style: 'height: 140px; width: auto; float: left; margin-right: 6px;'.\x0a\x09\x09\x09\x09\x09html p \x0a\x09\x09\x09\x09\x09\x09with: 'When you click on a creature, you can see on the top left its capabilities. \x0a\x09\x09\x09\x09\x09\x09\x09For example a creature can roll from 1 to 6 dices to attack, each dices having from 30% to 70% chances of hitting.'.\x0a\x09\x09\x09\x09\x09html p \x0a\x09\x09\x09\x09\x09\x09with: 'Lastly, fast or cavalry creatures are better against range creatures, \x0a\x09\x09\x09\x09\x09\x09\x09which are better against foot creatures, which are then better against fast or cavalry ones.'. ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toggleFrontImages", "style:", "contents:", "class:", "button", "onClick:", "back", "backButton", "div", "with:", "h3", "h4", "img:", ",", "ressourcesFolder", "p"]
}),
$globals.CWStartMenu);


$globals.CWStartMenu.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "start",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$5,$3,$receiver;
$1=self["@default"];
if(($receiver = $1) == null || $receiver.isNil){
self["@default"]=$recv(self._new())._appendToJQuery_("#global"._asJQuery());
$2=self["@default"];
return $2;
} else {
$1;
};
$4=self["@default"];
$recv($4)._reset();
$recv($4)._menuWith_($recv(self["@default"])._startingMenuDict());
$5=$recv($4)._toggle();
$3=$5;
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.CWStartMenu.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09default ifNil: [ ^ default := self new appendToJQuery: '#global' asJQuery ].\x0a\x09^ default \x0a\x09\x09reset;\x0a\x09\x09menuWith: default startingMenuDict;\x0a\x09\x09toggle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "appendToJQuery:", "new", "asJQuery", "reset", "menuWith:", "startingMenuDict", "toggle"]
}),
$globals.CWStartMenu.klass);

});
