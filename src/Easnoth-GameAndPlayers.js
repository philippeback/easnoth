define("amber-easnoth/Easnoth-GameAndPlayers", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-GameAndPlayers');
$core.packages["Easnoth-GameAndPlayers"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWGame', $globals.Object, ['map', 'context', 'playerPool', 'endGameBlock'], 'Easnoth-GameAndPlayers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGame.comment="Represent the game. Includes the god game logic (turn system)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'event',
fn: function (event){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(event);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.CWGame);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "currentPlayer",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._gameContext())._currentPlayer();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPlayer\x0a\x09^ self gameContext currentPlayer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentPlayer", "gameContext"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "endGameEvent:",
protocol: 'initialize-release',
fn: function (ev){
var self=this;
function $CWEndGameEvent(){return $globals.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_($CWEndGameEvent(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(self._announcer())._reset();
$recv(ev)._endGame();
$recv(self["@map"])._removeSelection();
$recv(self["@map"])._desactivateMonsters();
$recv(self["@map"])._clean();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["clean"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self["@map"])._clean();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((500));
return $recv(self["@endGameBlock"])._value_($recv(self["@playerPool"])._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(each)._hasLost();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,3)});
//>>excludeEnd("ctx");
})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endGameEvent:",{ev:ev},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ev"],
source: "endGameEvent: ev\x0a\x09self announcer\x0a\x09\x09on: CWEndGameEvent\x0a\x09\x09do: [ self announcer reset. \x0a\x09\x09\x09ev endGame.\x0a\x09\x09\x09map removeSelection.\x0a\x09\x09\x09map desactivateMonsters.\x0a\x09\x09\x09map clean.\x0a\x09\x09\x09[ map clean ] valueWithTimeout: 500.\x0a\x09\x09\x09endGameBlock value: (playerPool select: [ :each | each hasLost ]) ].",
referencedClasses: ["CWEndGameEvent"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer", "reset", "endGame", "removeSelection", "desactivateMonsters", "clean", "valueWithTimeout:", "value:", "select:", "hasLost"]
}),
$globals.CWGame);

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
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "firstTurn",
protocol: 'game logic',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._gameContext())._nextTurn_($recv(self["@playerPool"])._at_((2)._atRandom()));
$recv(self._currentPlayer())._startTurn_(self["@map"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstTurn\x0a\x09self gameContext nextTurn: (playerPool at: 2 atRandom).\x0a\x09self currentPlayer startTurn: map.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextTurn:", "gameContext", "at:", "atRandom", "startTurn:", "currentPlayer"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "gameContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gameContext\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWGameContext(){return $globals.CWGameContext||(typeof CWGameContext=="undefined"?nil:CWGameContext)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWGame.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@context"]=$recv($CWGameContext())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09context := CWGameContext new.",
referencedClasses: ["CWGameContext"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "initializeAI:",
protocol: 'initialize-release',
fn: function (eventDispatcher){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@playerPool"])._do_((function(player){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(player)._eventDispatcher_(eventDispatcher);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeAI:",{eventDispatcher:eventDispatcher},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["eventDispatcher"],
source: "initializeAI: eventDispatcher\x0a\x09playerPool do: [ :player |\x0a\x09\x09player eventDispatcher: eventDispatcher ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "eventDispatcher:"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "initializeEventHandling",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWGameStart(){return $globals.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
function $CWNextTurnEvent(){return $globals.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._announcer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announcer"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_do_($CWGameStart(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._startGame();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:do:"]=1;
//>>excludeEnd("ctx");
$recv(self._announcer())._on_do_($CWNextTurnEvent(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._nextTurn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWGameStart\x0a\x09\x09do: [ self startGame ].\x0a\x09self announcer\x0a\x09\x09on: CWNextTurnEvent\x0a\x09\x09do: [ self nextTurn ].",
referencedClasses: ["CWGameStart", "CWNextTurnEvent"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "announcer", "startGame", "nextTurn"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "initializePlayerMonsters",
protocol: 'initialize-release',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@playerPool"])._do_((function(player){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(player)._addMonstersToMap_(self["@map"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializePlayerMonsters",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializePlayerMonsters\x0a\x09playerPool do: [ :player |\x0a\x09\x09player addMonstersToMap: map ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "addMonstersToMap:"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "initializePlayers",
protocol: 'initialize-release',
fn: function (){
var self=this;
function $CWAI(){return $globals.CWAI||(typeof CWAI=="undefined"?nil:CWAI)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self["@playerPool"])._withIndexDo_((function(player,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(player)._side_($recv($recv(i).__minus((1.5))).__star((2)));
$recv(player)._initializeWithMap_(self["@map"]);
$1=$recv(player)._isKindOf_($CWAI());
if($core.assert($1)){
return $recv(player)._gameContext_(self._gameContext());
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({player:player,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializePlayers",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializePlayers\x0a\x09\x22To check and refactor\x22\x0a\x0a\x09playerPool withIndexDo: [ :player :i |\x0a\x09\x09player side: i - 1.5 * 2. \x22works only for 2 players. Enough for now\x22\x0a\x09\x09player initializeWithMap: map.\x0a\x09\x09(player isKindOf: CWAI) ifTrue: [ player gameContext: self gameContext ] ]",
referencedClasses: ["CWAI"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "side:", "*", "-", "initializeWithMap:", "ifTrue:", "isKindOf:", "gameContext:", "gameContext"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "initializeWithSettings:",
protocol: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWMap(){return $globals.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
function $CWFightMenu(){return $globals.CWFightMenu||(typeof CWFightMenu=="undefined"?nil:CWFightMenu)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@map"]=$recv($CWMap())._newWithMapIndex_($recv(gameSettings)._mapNumber());
$recv($CWFightMenu())._new();
self["@endGameBlock"]=$recv(gameSettings)._afterGameBlock();
self["@playerPool"]=$recv(gameSettings)._players();
self._initializePlayers();
self._initializeEventHandling();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithSettings:",{gameSettings:gameSettings},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["gameSettings"],
source: "initializeWithSettings: gameSettings\x0a\x09map := CWMap newWithMapIndex: gameSettings mapNumber.\x0a\x09CWFightMenu new.\x0a\x09endGameBlock := gameSettings afterGameBlock.\x0a\x09playerPool := gameSettings players.\x0a\x09self initializePlayers.\x0a\x09self initializeEventHandling.",
referencedClasses: ["CWMap", "CWFightMenu"],
//>>excludeEnd("ide");
messageSends: ["newWithMapIndex:", "mapNumber", "new", "afterGameBlock", "players", "initializePlayers", "initializeEventHandling"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "nextPlayer",
protocol: 'game logic',
fn: function (){
var self=this;
var index;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
index=$recv(self["@playerPool"])._indexOf_(self._currentPlayer());
$1=$recv(self["@playerPool"])._at_ifAbsent_($recv(index).__plus((1)),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@playerPool"])._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextPlayer",{index:index},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextPlayer\x0a\x09| index |\x0a\x09index := playerPool indexOf: self currentPlayer.\x0a\x09^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["indexOf:", "currentPlayer", "at:ifAbsent:", "+", "at:"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "nextTurn",
protocol: 'game logic',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._currentPlayer();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentPlayer"]=1;
//>>excludeEnd("ctx");
$recv($1)._endTurn_(self["@map"]);
$recv(self._gameContext())._nextTurn_(self._nextPlayer());
$recv(self._currentPlayer())._startTurn_(self["@map"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextTurn",{},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextTurn\x0a\x09self currentPlayer endTurn: map.\x0a\x09self gameContext nextTurn: self nextPlayer.\x0a\x09self currentPlayer startTurn: map",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["endTurn:", "currentPlayer", "nextTurn:", "gameContext", "nextPlayer", "startTurn:"]
}),
$globals.CWGame);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'initialize-release',
fn: function (){
var self=this;
var eventDispatcher;
function $CWEventDispatcher(){return $globals.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._initializePlayerMonsters();
$recv(self["@map"])._initializeDrawer();
eventDispatcher=$recv($recv($CWEventDispatcher())._new())._initializeForMap_game_(self["@map"],self);
self._initializeAI_(eventDispatcher);
self._endGameEvent_(eventDispatcher);
$recv(self["@map"])._updateMap();
$recv(self["@map"])._removeSelection();
self._firstTurn();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{eventDispatcher:eventDispatcher},$globals.CWGame)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09| eventDispatcher |\x0a\x09self initializePlayerMonsters.\x0a\x09map initializeDrawer.\x0a\x09eventDispatcher := CWEventDispatcher new initializeForMap: map game: self.\x0a\x09self initializeAI: eventDispatcher.\x0a\x09self endGameEvent: eventDispatcher.\x0a\x09map updateMap.\x0a\x09map removeSelection. \x22initialize got to invis image\x22\x0a\x09self firstTurn.",
referencedClasses: ["CWEventDispatcher"],
//>>excludeEnd("ide");
messageSends: ["initializePlayerMonsters", "initializeDrawer", "initializeForMap:game:", "new", "initializeAI:", "endGameEvent:", "updateMap", "removeSelection", "firstTurn"]
}),
$globals.CWGame);



$core.addClass('CWGameContext', $globals.Object, ['currentPlayer', 'currentCell', 'relatedCell'], 'Easnoth-GameAndPlayers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWGameContext.comment="Represents the current context of the game, typcally, which player is playing and what monster is currently about to attack / move";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "currentCell",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentCell"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentCell\x0a\x09^ currentCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "currentCell:",
protocol: 'accessing',
fn: function (aCurrentCell){
var self=this;
self["@currentCell"]=aCurrentCell;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCurrentCell"],
source: "currentCell: aCurrentCell \x0a\x09currentCell := aCurrentCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "currentMonster",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@currentCell"])._monster();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentMonster",{},$globals.CWGameContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentMonster\x0a\x09^ currentCell monster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monster"]
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "currentMonster:",
protocol: 'accessing',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@currentCell"]=$recv(aMonster)._parent();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentMonster:",{aMonster:aMonster},$globals.CWGameContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "currentMonster: aMonster\x0a\x09currentCell := aMonster parent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["parent"]
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "currentPlayer",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@currentPlayer"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPlayer\x0a\x09^ currentPlayer",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "currentPlayerSide",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@currentPlayer"])._side();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentPlayerSide",{},$globals.CWGameContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentPlayerSide\x0a\x09^ currentPlayer side",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["side"]
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "nextTurn:",
protocol: 'game logic',
fn: function (nextPlayer){
var self=this;
self["@currentPlayer"]=nextPlayer;
self["@currentCell"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["nextPlayer"],
source: "nextTurn: nextPlayer\x0a\x09currentPlayer := nextPlayer.\x0a\x09currentCell := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "relatedCell",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@relatedCell"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "relatedCell\x0a\x09^ relatedCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "relatedCell:",
protocol: 'accessing',
fn: function (aCell){
var self=this;
self["@relatedCell"]=aCell;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "relatedCell: aCell\x0a\x09relatedCell := aCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "restartTurn",
protocol: 'game logic',
fn: function (){
var self=this;
var map;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
map=$recv(self._currentCell())._root();
$1=self._currentPlayer();
$recv($1)._endTurn_(map);
$2=$recv($1)._startTurn_(map);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restartTurn",{map:map},$globals.CWGameContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restartTurn\x0a\x09| map |\x0a\x09map := self currentCell root.\x0a\x09self currentPlayer\x0a\x09\x09endTurn: map;\x0a\x09\x09startTurn: map.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["root", "currentCell", "endTurn:", "currentPlayer", "startTurn:"]
}),
$globals.CWGameContext);

$core.addMethod(
$core.method({
selector: "shouldRestartTurn",
protocol: 'game logic',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._currentCell();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
$2=self._currentMonster();
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
var m;
m=$receiver;
$3=$recv($recv(m)._hasPlayed())._not();
return $3;
};
};
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shouldRestartTurn",{},$globals.CWGameContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "shouldRestartTurn\x0a\x09self currentCell ifNotNil: [ self currentMonster ifNotNil: [ :m | ^ m hasPlayed not ] ].\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "currentCell", "currentMonster", "not", "hasPlayed"]
}),
$globals.CWGameContext);



$core.addClass('CWPlayer', $globals.Object, ['side', 'team'], 'Easnoth-GameAndPlayers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWPlayer.comment="I represent a player playing Easnoth.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addMonstersToMap:",
protocol: 'initialize-release',
fn: function (aMap){
var self=this;
var positions;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
positions=self._monstersPositionArray();
$recv(positions)._withIndexDo_((function(point,n){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(aMap)._childAt_($recv(point)._x()))._childAt_($recv(point)._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["childAt:"]=1;
//>>excludeEnd("ctx");
return $recv($1)._addMonster_($recv(self["@team"])._at_(n));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({point:point,n:n},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addMonstersToMap:",{aMap:aMap,positions:positions},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "addMonstersToMap: aMap\x0a\x09\x22hack for now\x22\x0a\x09\x0a\x09| positions |\x0a\x09positions := self monstersPositionArray.\x0a\x09\x22((aMap childAt: positions first x) childAt: positions first y) addMonster: (team at: 1) \x22\x0a\x09positions withIndexDo: [ :point :n |\x0a\x09\x09((aMap childAt: point x) childAt: point y) addMonster: (team at: n) ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["monstersPositionArray", "withIndexDo:", "addMonster:", "childAt:", "x", "y", "at:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "announce:",
protocol: 'events',
fn: function (event){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._announcer())._announce_(event);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["announce:", "announcer"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "announcer",
protocol: 'events',
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
referencedClasses: ["CWEasnothAnnouncer"],
//>>excludeEnd("ide");
messageSends: ["current"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "endGame",
protocol: 'events',
fn: function (){
var self=this;
function $CWEndGameEvent(){return $globals.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(window)._alert_("Someone just won. Guess who ? loser : ".__comma(self._endGamePrintString()));
self._announce_($recv($CWEndGameEvent())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endGame",{},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endGame\x0a\x09window alert: 'Someone just won. Guess who ? loser : ' , self endGamePrintString.\x0a\x09self announce: CWEndGameEvent new.",
referencedClasses: ["CWEndGameEvent"],
//>>excludeEnd("ide");
messageSends: ["alert:", ",", "endGamePrintString", "announce:", "new"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "endGamePrintString",
protocol: 'printing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endGamePrintString",{},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endGamePrintString\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "endTurn:",
protocol: 'game logic',
fn: function (map){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(map)._desactivateMonsters();
$recv(map)._removeSelection();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endTurn:",{map:map},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["map"],
source: "endTurn: map\x0a\x09map desactivateMonsters.\x0a\x09map removeSelection.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["desactivateMonsters", "removeSelection"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "hasLost",
protocol: 'game logic',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._team())._isEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasLost",{},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasLost\x0a\x09^ self team isEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isEmpty", "team"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "initializeWithMap:",
protocol: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWWaitForObject(){return $globals.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return $globals.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=$recv($CWWaitForObject())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._announce_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["announce:"]=1;
//>>excludeEnd("ctx");
$2=jQuery;
$3=$recv("ressources/json/armies/".__comma(self._team())).__comma(".json");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($2)._getJSON_onSuccess_($3,(function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._initializeWithMap_army_(aMap,data);
return self._announce_($recv($CWObjectLoaded())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:",{aMap:aMap},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "initializeWithMap: aMap\x0a\x09\x22get the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the players\x22\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09jQuery \x0a\x09\x09getJSON: 'ressources/json/armies/', self team, '.json' \x0a\x09\x09onSuccess: [:data |\x0a\x09\x09\x09self initializeWithMap: aMap army: data.\x0a\x09\x09\x09self announce: CWObjectLoaded new]",
referencedClasses: ["CWWaitForObject", "CWObjectLoaded"],
//>>excludeEnd("ide");
messageSends: ["announce:", "new", "getJSON:onSuccess:", ",", "team", "initializeWithMap:army:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "initializeWithMap:army:",
protocol: 'initialize-release',
fn: function (aMap,data){
var self=this;
var monsters;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$7,$9,$8;
monsters=$recv($Array())._new_((9));
$1=monsters;
$3=$recv(data)._troop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["troop"]=1;
//>>excludeEnd("ctx");
$2=self._newTroop_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newTroop:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((7),$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(monsters)._at_put_((8),self._newTroopHeros_($recv(data)._troopHeros()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(monsters)._at_put_((9),self._newTroop_($recv(data)._troop()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$4=monsters;
$6=$recv(data)._range();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["range"]=1;
//>>excludeEnd("ctx");
$5=self._newRange_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newRange:"]=1;
//>>excludeEnd("ctx");
$recv($4)._at_put_((4),$5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
$recv(monsters)._at_put_((5),self._newRangeHeros_($recv(data)._rangeHeros()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$recv(monsters)._at_put_((6),self._newRange_($recv(data)._range()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$7=monsters;
$9=$recv(data)._cavalry();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["cavalry"]=1;
//>>excludeEnd("ctx");
$8=self._newCavalry_($9);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newCavalry:"]=1;
//>>excludeEnd("ctx");
$recv($7)._at_put_((1),$8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv(monsters)._at_put_((2),self._newCavalryHeros_($recv(data)._cavalryHeros()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv(monsters)._at_put_((3),self._newCavalry_($recv(data)._cavalry()));
self["@team"]=monsters;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:army:",{aMap:aMap,data:data,monsters:monsters},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap", "data"],
source: "initializeWithMap: aMap army: data\x0a\x09\x09\x22initialize the monsters of the player. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player\x22\x0a\x09\x09| monsters |\x0a\x09\x09monsters := Array new: 9.\x0a\x09\x09monsters at: 7 put: (self newTroop: data troop).\x0a\x09\x09monsters at: 8 put: (self newTroopHeros: data troopHeros).\x0a\x09\x09monsters at: 9 put: (self newTroop: data troop).\x0a\x09\x09monsters at: 4 put: (self newRange: data range).\x0a\x09\x09monsters at: 5 put: (self newRangeHeros: data rangeHeros).\x0a\x09\x09monsters at: 6 put: (self newRange: data range).\x0a\x09\x09monsters at: 1 put: (self newCavalry: data cavalry).\x0a\x09\x09monsters at: 2 put: (self newCavalryHeros: data cavalryHeros).\x0a\x09\x09monsters at: 3 put: (self newCavalry: data cavalry).\x0a\x09\x09team := monsters.",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["new:", "at:put:", "newTroop:", "troop", "newTroopHeros:", "troopHeros", "newRange:", "range", "newRangeHeros:", "rangeHeros", "newCavalry:", "cavalry", "newCavalryHeros:", "cavalryHeros"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "monstersPositionArray",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$1;
$2=$recv(self._side()).__eq((1));
if($core.assert($2)){
$3=(3).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$4=(4).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$5=(5).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(1).__at((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$7=(2).__at((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$8=(2).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$9=(1).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$10=(1).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$11=(1).__at((6));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
$1=[$3,$4,$5,$6,$7,$8,$9,$10,$11];
} else {
$12=(6).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$13=(7).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$14=(8).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=12;
//>>excludeEnd("ctx");
$15=(9).__at((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=13;
//>>excludeEnd("ctx");
$16=(9).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=14;
//>>excludeEnd("ctx");
$17=(10).__at((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=15;
//>>excludeEnd("ctx");
$18=(10).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=16;
//>>excludeEnd("ctx");
$19=(10).__at((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=17;
//>>excludeEnd("ctx");
$1=[$12,$13,$14,$15,$16,$17,$18,$19,(10).__at((3))];
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monstersPositionArray",{},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "monstersPositionArray\x0a\x09\x22hack for now. should be stored in database\x22\x0a\x09\x0a\x09^ self side = 1\x0a\x09\x09ifTrue: [ { 3@8 . 4@8 . 5@8 . 1@7. 2@7 . 2@8 . 1@4 . 1@5 . 1@6 } ]\x0a\x09\x09ifFalse: [ { 6@1 . 7@1 . 8@1. 9@1 . 9@2 . 10@2 . 10@5 . 10@4 . 10@3} ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "side", "@"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newCavalry:",
protocol: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return $globals.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWCavalryStrategy(){return $globals.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWCavalryStrategy());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCavalry:",{jsonStat:jsonStat},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat"],
source: "newCavalry: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWCavalryStrategy",
referencedClasses: ["CWUnitStrategy", "CWCavalryStrategy"],
//>>excludeEnd("ide");
messageSends: ["newMonster:heros:type:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newCavalryHeros:",
protocol: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return $globals.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWCavalryStrategy(){return $globals.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWCavalryStrategy());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newCavalryHeros:",{jsonStat:jsonStat},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat"],
source: "newCavalryHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWCavalryStrategy",
referencedClasses: ["CWHerosStrategy", "CWCavalryStrategy"],
//>>excludeEnd("ide");
messageSends: ["newMonster:heros:type:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newMonster:heros:type:",
protocol: 'factory',
fn: function (jsonStat,strat,aType){
var self=this;
function $CWMonster(){return $globals.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($CWMonster())._new())._initializeWithStat_army_player_heros_type_(jsonStat,self._team(),self,strat,aType);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newMonster:heros:type:",{jsonStat:jsonStat,strat:strat,aType:aType},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat", "strat", "aType"],
source: "newMonster: jsonStat heros: strat type: aType\x0a\x09\x09\x22creates a new monster with self as player\x22\x0a\x09\x09^ CWMonster new initializeWithStat: jsonStat army: self team player: self heros: strat type: aType",
referencedClasses: ["CWMonster"],
//>>excludeEnd("ide");
messageSends: ["initializeWithStat:army:player:heros:type:", "new", "team"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newRange:",
protocol: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return $globals.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWRangeStrategy(){return $globals.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWRangeStrategy());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newRange:",{jsonStat:jsonStat},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat"],
source: "newRange: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWRangeStrategy",
referencedClasses: ["CWUnitStrategy", "CWRangeStrategy"],
//>>excludeEnd("ide");
messageSends: ["newMonster:heros:type:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newRangeHeros:",
protocol: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return $globals.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWRangeStrategy(){return $globals.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWRangeStrategy());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newRangeHeros:",{jsonStat:jsonStat},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat"],
source: "newRangeHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWRangeStrategy",
referencedClasses: ["CWHerosStrategy", "CWRangeStrategy"],
//>>excludeEnd("ide");
messageSends: ["newMonster:heros:type:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newTroop:",
protocol: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return $globals.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWTroopStrategy(){return $globals.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWTroopStrategy());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newTroop:",{jsonStat:jsonStat},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat"],
source: "newTroop: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWTroopStrategy",
referencedClasses: ["CWUnitStrategy", "CWTroopStrategy"],
//>>excludeEnd("ide");
messageSends: ["newMonster:heros:type:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "newTroopHeros:",
protocol: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return $globals.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWTroopStrategy(){return $globals.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWTroopStrategy());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newTroopHeros:",{jsonStat:jsonStat},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["jsonStat"],
source: "newTroopHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWTroopStrategy",
referencedClasses: ["CWHerosStrategy", "CWTroopStrategy"],
//>>excludeEnd("ide");
messageSends: ["newMonster:heros:type:"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(aStream)._nextPutAll_($recv(self._class())._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
$1=$recv(self["@side"])._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_("-");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(aStream)._nextPutAll_($recv(self["@team"])._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
$2=$recv(aStream)._nextPutAll_(")");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: side printString;\x0a\x09\x09nextPutAll: '-';\x0a\x09\x09nextPutAll: team printString;\x0a\x09\x09nextPutAll: ')'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nextPutAll:", "name", "class", "printString"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "removeMonster:",
protocol: 'game logic',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$recv(self._team())._remove_(aMonster);
$recv(aMonster)._player_(nil);
$1=self._hasLost();
if($core.assert($1)){
self._endGame();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aMonster:aMonster},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "removeMonster: aMonster\x0a\x09self team remove: aMonster.\x0a\x09aMonster player: nil.\x0a\x09self hasLost\x0a\x09\x09ifTrue: [ self endGame ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:", "team", "player:", "ifTrue:", "hasLost", "endGame"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "side",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@side"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "side\x0a\x09^ side",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "side:",
protocol: 'accessing',
fn: function (int){
var self=this;
self["@side"]=int;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["int"],
source: "side: int\x0a\x09side := int",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "startTurn:",
protocol: 'game logic',
fn: function (map){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._hasLost();
if($core.assert($1)){
$2=self._endGame();
return $2;
};
$recv(self._team())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(each)._readyToBePicked();
return $recv($recv(each)._parent())._showActiveMonsters();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},$globals.CWPlayer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["map"],
source: "startTurn: map\x0a\x09self hasLost ifTrue: [ ^ self endGame ].\x0a\x09self team do: [ :each |\x0a\x09\x09each readyToBePicked.\x0a\x09\x09each parent showActiveMonsters ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasLost", "endGame", "do:", "team", "readyToBePicked", "showActiveMonsters", "parent"]
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "team",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@team"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "team\x0a\x09^ team",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWPlayer);

$core.addMethod(
$core.method({
selector: "team:",
protocol: 'accessing',
fn: function (aTeam){
var self=this;
self["@team"]=aTeam;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTeam"],
source: "team: aTeam\x0a\x09team := aTeam",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWPlayer);



$core.addClass('CWAI', $globals.CWPlayer, ['gameContext', 'eventDispatcher'], 'Easnoth-GameAndPlayers');
$core.addMethod(
$core.method({
selector: "endGamePrintString",
protocol: 'game logic',
fn: function (){
var self=this;
return "Artificial Intelligence player";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endGamePrintString\x0a\x09^ 'Artificial Intelligence player'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAI);

$core.addMethod(
$core.method({
selector: "endTurn:",
protocol: 'game logic',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWAI.superclass.fn.prototype._endTurn_.apply($recv(self), [aMap]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._eventDispatcher())._resume();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endTurn:",{aMap:aMap},$globals.CWAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "endTurn: aMap\x0a\x09super endTurn: aMap.\x0a\x09self eventDispatcher resume",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["endTurn:", "resume", "eventDispatcher"]
}),
$globals.CWAI);

$core.addMethod(
$core.method({
selector: "eventDispatcher",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@eventDispatcher"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "eventDispatcher\x0a\x09^ eventDispatcher",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAI);

$core.addMethod(
$core.method({
selector: "eventDispatcher:",
protocol: 'accessing',
fn: function (ev){
var self=this;
self["@eventDispatcher"]=ev;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["ev"],
source: "eventDispatcher: ev\x0a\x09eventDispatcher := ev",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAI);

$core.addMethod(
$core.method({
selector: "gameContext",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gameContext"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gameContext\x0a\x09^ gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAI);

$core.addMethod(
$core.method({
selector: "gameContext:",
protocol: 'accessing',
fn: function (aCtx){
var self=this;
self["@gameContext"]=aCtx;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCtx"],
source: "gameContext: aCtx\x0a\x09gameContext := aCtx",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAI);

$core.addMethod(
$core.method({
selector: "startTurn:",
protocol: 'game logic',
fn: function (aMap){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._eventDispatcher())._suspend();
$recv(self["@gameContext"])._relatedCell_(nil);
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWAI.superclass.fn.prototype._startTurn_.apply($recv(self), [aMap]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startTurn:",{aMap:aMap},$globals.CWAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMap"],
source: "startTurn: aMap\x0a\x09self eventDispatcher suspend.\x0a\x09gameContext relatedCell: nil.\x0a\x09super startTurn: aMap",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["suspend", "eventDispatcher", "relatedCell:", "startTurn:"]
}),
$globals.CWAI);



$core.addClass('CWAggressWeakestAI', $globals.CWAI, ['monsterToPlay', 'cellToTarget'], 'Easnoth-GameAndPlayers');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWAggressWeakestAI.comment="For each move, I calcul a score which correspond to :\x0a- how many damage the attacking monster will do (depends on number of dices + attack percentage )\x0a- how many hp left have the foe ( I try to attack the weakest foe)\x0a Then I execute the move that has the highest score.\x0a \x0a If I cannot attack, I just do some random move.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "calculBestMove",
protocol: 'game logic',
fn: function (){
var self=this;
var score,bestScore;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
bestScore=(9999)._negated();
$recv(self._team())._do_((function(monster){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(monster)._currentMove_($recv(monster)._move());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["currentMove:"]=1;
//>>excludeEnd("ctx");
$recv($recv(monster)._attackableNeighbours())._do_((function(target){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(target)._monster();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["monster"]=1;
//>>excludeEnd("ctx");
$1=$recv(monster)._attackPotentialFor_($2);
score=$recv($1).__minus($recv($recv(target)._monster())._defensePotential());
score;
$3=$recv(score).__gt(bestScore);
if($core.assert($3)){
bestScore=score;
bestScore;
self["@monsterToPlay"]=monster;
self["@monsterToPlay"];
self["@cellToTarget"]=target;
return self["@cellToTarget"];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({target:target},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv(monster)._currentMove_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"calculBestMove",{score:score,bestScore:bestScore},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "calculBestMove\x0a\x09\x22Calcul the best move for the AI player. see class comment for details\x22 \x0a\x0a\x09| score bestScore |\x0a\x09bestScore := 9999 negated.\x0a\x09self team do: [ :monster |\x0a\x09\x09monster currentMove: monster move.\x0a\x09\x09monster attackableNeighbours do: [ :target |\x0a\x09\x09\x09score := (monster attackPotentialFor: target monster) - target monster defensePotential. \x0a\x09\x09\x09score > bestScore ifTrue: [ \x0a\x09\x09\x09\x09bestScore := score.\x0a\x09\x09\x09\x09monsterToPlay := monster.\x0a\x09\x09\x09\x09cellToTarget := target ] ].\x0a\x09\x09monster currentMove: 0. ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["negated", "do:", "team", "currentMove:", "move", "attackableNeighbours", "-", "attackPotentialFor:", "monster", "defensePotential", "ifTrue:", ">"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'game logic',
fn: function (monster){
var self=this;
function $CWNextTurnEvent(){return $globals.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(monster)._isInactive();
if(!$core.assert($1)){
self._announce_($recv($CWNextTurnEvent())._new());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{monster:monster},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["monster"],
source: "checkForNextTurn: monster\x0a\x09\x22After the monster has played, either the game has automatically triggered the next turn event (and then set the current monster to inactive state), or the AI player needs to do it manually\x22\x0a\x0a\x09monster isInactive \x0a\x09\x09ifFalse: [ self announce: CWNextTurnEvent new ]",
referencedClasses: ["CWNextTurnEvent"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "isInactive", "announce:", "new"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "executeAttack",
protocol: 'game logic',
fn: function (){
var self=this;
var relatedTargetCell,duration;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
$1=self["@monsterToPlay"];
$2=self["@cellToTarget"];
$3=self._gameContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gameContext"]=1;
//>>excludeEnd("ctx");
relatedTargetCell=$recv($1)._cellToMoveBeforeAttack_context_($2,$3);
duration=$recv($recv($recv($recv(self["@monsterToPlay"])._pathTo_(relatedTargetCell))._size()).__minus((1))).__star((300));
$recv(self["@cellToTarget"])._mouseClick_(self._gameContext());
$4=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._checkForNextTurn_(self["@monsterToPlay"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
$5=$recv($recv(duration).__plus((2000))).__plus(self._time());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$recv($4)._valueWithTimeout_($5);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeAttack",{relatedTargetCell:relatedTargetCell,duration:duration},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "executeAttack\x0a\x09| relatedTargetCell duration |\x0a\x09relatedTargetCell := monsterToPlay cellToMoveBeforeAttack: cellToTarget context: self gameContext.\x0a\x09duration := (monsterToPlay pathTo: relatedTargetCell) size - 1 * 300.\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + 2000 + self time.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cellToMoveBeforeAttack:context:", "gameContext", "*", "-", "size", "pathTo:", "mouseClick:", "valueWithTimeout:", "checkForNextTurn:", "+", "time"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "executeBestMove",
protocol: 'game logic',
fn: function (){
var self=this;
var duration,relatedTargetCell,hasAttack;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$recv($recv(self["@monsterToPlay"])._parent())._mouseClick_(self._gameContext());
$1=self["@cellToTarget"];
if(($receiver = $1) == null || $receiver.isNil){
(1)._halt();
} else {
$1;
};
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self["@cellToTarget"])._hasMonster();
if($core.assert($2)){
return self._executeAttack();
} else {
return self._executeMove();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(self._time());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeBestMove",{duration:duration,relatedTargetCell:relatedTargetCell,hasAttack:hasAttack},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "executeBestMove\x0a\x09\x22Assumes that the bestMove instance variable is now set to an Array(a Monster to play . aCell to move / attack). Executes this best move\x22\x0a\x0a\x09| duration relatedTargetCell hasAttack |\x0a\x09monsterToPlay parent mouseClick: self gameContext.\x0a\x09cellToTarget ifNil: [1halt].\x0a\x09[ \x0a\x09cellToTarget hasMonster \x0a\x09\x09\x09ifTrue: [ self executeAttack ]\x0a\x09\x09\x09ifFalse: [ self executeMove ].\x0a\x09] valueWithTimeout: self time.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseClick:", "parent", "gameContext", "ifNil:", "halt", "valueWithTimeout:", "ifTrue:ifFalse:", "hasMonster", "executeAttack", "executeMove", "time"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "executeMove",
protocol: 'game logic',
fn: function (){
var self=this;
var duration;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
duration=$recv($recv($recv($recv(self["@monsterToPlay"])._pathTo_(self["@cellToTarget"]))._size()).__minus((1))).__star((300));
$recv(self["@cellToTarget"])._mouseClick_(self._gameContext());
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._checkForNextTurn_(self["@monsterToPlay"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_($recv(duration).__plus(self._time()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"executeMove",{duration:duration},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "executeMove\x0a\x09| duration |\x0a\x09duration := (monsterToPlay pathTo: cellToTarget) size - 1 * 300.\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + self time.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "-", "size", "pathTo:", "mouseClick:", "gameContext", "valueWithTimeout:", "checkForNextTurn:", "+", "time"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "randomMove",
protocol: 'game logic',
fn: function (){
var self=this;
var cellsToGo;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
self["@monsterToPlay"]=$recv(self._team())._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$recv(self["@monsterToPlay"])._currentMove_($recv(self["@monsterToPlay"])._move());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentMove:"]=1;
//>>excludeEnd("ctx");
cellsToGo=$recv(self["@monsterToPlay"])._movableNeighbours();
$recv(self["@monsterToPlay"])._currentMove_((0));
$recv(cellsToGo)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._checkForNextTurn_(self["@monsterToPlay"]);
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@cellToTarget"]=$recv(cellsToGo)._atRandom();
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"randomMove",{cellsToGo:cellsToGo},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "randomMove\x0a\x09\x22Assumes that no monster can attack. Set bestMove to some random move of some random monster\x22\x0a\x09| cellsToGo |\x0a\x09monsterToPlay := self team atRandom.\x0a\x09\x0a\x09monsterToPlay currentMove: monsterToPlay move.\x0a\x09cellsToGo := monsterToPlay movableNeighbours.\x0a\x09monsterToPlay currentMove: 0.\x0a\x09\x0a\x09cellsToGo ifEmpty: [ ^ self checkForNextTurn: monsterToPlay ]. \x22Case where the monster cannot move (surrounded by allies)\x22\x0a\x09cellToTarget := cellsToGo atRandom.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atRandom", "team", "currentMove:", "move", "movableNeighbours", "ifEmpty:", "checkForNextTurn:"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "reinitialize",
protocol: 'game logic',
fn: function (){
var self=this;
self["@monsterToPlay"]=nil;
self["@cellToTarget"]=nil;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reinitialize\x0a\x09monsterToPlay := nil.\x0a\x09cellToTarget := nil.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "startTurn:",
protocol: 'game logic',
fn: function (map){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv(self._team())._isEmpty();
if($core.assert($1)){
return self;
};
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWAggressWeakestAI.superclass.fn.prototype._startTurn_.apply($recv(self), [map]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._reinitialize();
self._calculBestMove();
$2=self["@monsterToPlay"];
if(($receiver = $2) == null || $receiver.isNil){
self._randomMove();
} else {
$2;
};
return self._executeBestMove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_(self._time());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},$globals.CWAggressWeakestAI)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["map"],
source: "startTurn: map\x0a\x09self team isEmpty ifTrue: [^ self].\x0a\x09super startTurn: map.\x0a\x09[\x0a\x09\x09self reinitialize.\x0a\x09\x09self calculBestMove.\x0a\x09\x09monsterToPlay ifNil: [ self randomMove ].\x0a\x09\x09self executeBestMove\x0a\x09] valueWithTimeout: self time",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isEmpty", "team", "startTurn:", "valueWithTimeout:", "reinitialize", "calculBestMove", "ifNil:", "randomMove", "executeBestMove", "time"]
}),
$globals.CWAggressWeakestAI);

$core.addMethod(
$core.method({
selector: "time",
protocol: 'accessing',
fn: function (){
var self=this;
return (500);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "time\x0a\x09\x22time for user to see what AI is doing\x22\x0a\x09^ 500",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWAggressWeakestAI);



$core.addClass('CWHuman', $globals.CWPlayer, [], 'Easnoth-GameAndPlayers');
$core.addMethod(
$core.method({
selector: "endGamePrintString",
protocol: 'accessing',
fn: function (){
var self=this;
return "Human player";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endGamePrintString\x0a\x09^ 'Human player'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWHuman);

$core.addMethod(
$core.method({
selector: "eventDispatcher:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "eventDispatcher: anObject\x0a\x09\x22not used for humans\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWHuman);


$core.addMethod(
$core.method({
selector: "reset",
protocol: '*Easnoth-GameAndPlayers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self.length = 0;;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reset",{},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reset\x0a\x09<self.length = 0;>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "truncated",
protocol: '*Easnoth-GameAndPlayers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return self | 0;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"truncated",{},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "truncated\x0a\x09<return self | 0>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "at:ifPresent:",
protocol: '*Easnoth-GameAndPlayers',
fn: function (index,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 if((1 < index) || (index < self.length)) {return aBlock(self[index - 1])}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{index:index,aBlock:aBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index", "aBlock"],
source: "at: index ifPresent: aBlock\x0a\x09< if((1 < index) || (index < self.length)) {return aBlock(self[index - 1])}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "at:ifPresent:ifAbsent:",
protocol: '*Easnoth-GameAndPlayers',
fn: function (index,aBlock,anotherBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv($recv(index).__lt_eq(self._size()))._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(index).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$1=$recv(aBlock)._value_(self._at_(index));
} else {
$1=$recv(anotherBlock)._value();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{index:index,aBlock:aBlock,anotherBlock:anotherBlock},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["index", "aBlock", "anotherBlock"],
source: "at: index ifPresent: aBlock ifAbsent: anotherBlock\x0a\x0a\x09^(index <= self size and: [ index > 0 ])\x0a\x09\x09ifTrue: [ aBlock value: (self at: index) ]\x0a\x09\x09ifFalse: [ anotherBlock value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "<=", "size", ">", "value:", "at:", "value"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "upFirstLetter",
protocol: '*Easnoth-GameAndPlayers',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._first())._asUppercase()).__comma(self._allButFirst());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"upFirstLetter",{},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "upFirstLetter\x0a\x09^ self first asUppercase, self allButFirst",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asUppercase", "first", "allButFirst"]
}),
$globals.String);

});
