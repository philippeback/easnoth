define("amber-easnoth/Easnoth-GameStates", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Easnoth-GameStates');
$core.packages["Easnoth-GameStates"].transport = {"type":"amd","amdNamespace":"amber-easnoth"};

$core.addClass('CWState', $globals.Object, [], 'Easnoth-GameStates');

$globals.CWState.klass.iVarNames = ['default'];
$core.addMethod(
$core.method({
selector: "default",
protocol: 'instance creation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@default"];
if(($receiver = $2) == null || $receiver.isNil){
self["@default"]=self._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"default",{},$globals.CWState.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.CWState.klass);


$core.addClass('CWCellState', $globals.CWState, [], 'Easnoth-GameStates');
$core.addMethod(
$core.method({
selector: "addSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "cell:addMonster:",
protocol: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "cell:canBeAttackedBy:",
protocol: 'cell state API',
fn: function (aCell,side){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "darken:",
protocol: 'cell state API',
fn: function (cell){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell"],
source: "darken: cell\x0a\x09\x22do nothing\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "isFree",
protocol: 'cell state API',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFree\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "isFreeSelected",
protocol: 'cell state API',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFreeSelected\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "lighten:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "lighten: aCell\x0a\x09\x22do nothing\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "mouseClick:context:",
protocol: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subClassResponsbility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09self subClassResponsbility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subClassResponsbility"]
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "mouseMove:context:",
protocol: 'cell state API',
fn: function (cell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(cell)._root())._lighten();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell", "gameContext"],
source: "mouseMove: cell context: gameContext\x0a\x09cell root lighten.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lighten", "root"]
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "removeMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "removeSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aCell)._removeGameOverTile();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09aCell removeGameOverTile",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeGameOverTile"]
}),
$globals.CWCellState);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},$globals.CWCellState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWCellState);



$core.addClass('CWFree', $globals.CWCellState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWFree.comment="I am the state of a cell that has no monsters on it and that has no game selector on it.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFreeSelected(){return $globals.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aCell)._addGreenSelector();
$recv(aCell)._changeState_($CWFreeSelected());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},$globals.CWFree)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "addSelector: aCell\x0a\x09aCell addGreenSelector.\x0a\x09aCell changeState: CWFreeSelected",
referencedClasses: ["CWFreeSelected"],
//>>excludeEnd("ide");
messageSends: ["addGreenSelector", "changeState:"]
}),
$globals.CWFree);

$core.addMethod(
$core.method({
selector: "cell:addMonster:",
protocol: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
function $CWHasMonster(){return $globals.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._parent_(aCell);
$recv(aCell)._monster_(aMonster);
$recv(aCell)._changeState_($CWHasMonster());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},$globals.CWFree)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09aMonster parent: aCell.\x0a\x09aCell monster: aMonster.\x0a\x09aCell changeState: CWHasMonster",
referencedClasses: ["CWHasMonster"],
//>>excludeEnd("ide");
messageSends: ["parent:", "monster:", "changeState:"]
}),
$globals.CWFree);

$core.addMethod(
$core.method({
selector: "isFree",
protocol: 'cell state API',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFree\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWFree);

$core.addMethod(
$core.method({
selector: "mouseClick:context:",
protocol: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(gameContext)._shouldRestartTurn();
if($core.assert($1)){
$2=$recv(gameContext)._restartTurn();
return $2;
};
$recv($recv(aCell)._root())._showActiveMonsters();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},$globals.CWFree)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext shouldRestartTurn ifTrue: [ ^ gameContext restartTurn ].\x0a\x09aCell root showActiveMonsters",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "shouldRestartTurn", "restartTurn", "showActiveMonsters", "root"]
}),
$globals.CWFree);

$core.addMethod(
$core.method({
selector: "removeMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot remove a monster from a cell that has no monster on it");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},$globals.CWFree)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self error: 'cannot remove a monster from a cell that has no monster on it'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWFree);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "showActiveMonster: aCell",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWFree);



$core.addClass('CWFreeSelected', $globals.CWCellState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWFreeSelected.comment="I am the state of a cell that has no monsters on it, that has a game selector on it.\x0aThe cell cannot be a wall.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot add a selector to a cell that has already a *green* selector");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'cannot add a selector to a cell that has already a *green* selector'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "cell:addMonster:",
protocol: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "darken:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aCell)._gameOverTile())._darken();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"darken:",{aCell:aCell},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "darken: aCell\x0a\x09aCell gameOverTile darken",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["darken", "gameOverTile"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "isFree",
protocol: 'cell state API',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFree\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "isFreeSelected",
protocol: 'cell state API',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFreeSelected\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "lighten:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aCell)._gameOverTile())._lighten();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lighten:",{aCell:aCell},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "lighten: aCell\x0a\x09aCell gameOverTile lighten",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lighten", "gameOverTile"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "mouseClick:context:",
protocol: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(gameContext)._currentMonster())._moveTo_inContext_(aCell,gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster moveTo: aCell inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:inContext:", "currentMonster"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "mouseMove:context:",
protocol: 'cell state API',
fn: function (cell,gameContext){
var self=this;
var path;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWFreeSelected.superclass.fn.prototype._mouseMove_context_.apply($recv(self), [cell,gameContext]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
path=$recv($recv(gameContext)._currentMonster())._pathTo_(cell);
$recv(path)._do_((function(c){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(c)._darken();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext,path:path},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell", "gameContext"],
source: "mouseMove: cell context: gameContext\x0a\x09| path |\x0a\x09super mouseMove: cell context: gameContext.\x0a\x09path := gameContext currentMonster pathTo: cell.\x0a\x09path do: [ :c | c darken ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseMove:context:", "pathTo:", "currentMonster", "do:", "darken"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "removeMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot remove a monster from a cell that has no monster on it");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09\x09self error: 'cannot remove a monster from a cell that has no monster on it'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "removeSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFree(){return $globals.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWFreeSelected.superclass.fn.prototype._removeSelector_.apply($recv(self), [aCell]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aCell)._changeState_($CWFree());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09super removeSelector: aCell.\x0a\x09aCell changeState: CWFree",
referencedClasses: ["CWFree"],
//>>excludeEnd("ide");
messageSends: ["removeSelector:", "changeState:"]
}),
$globals.CWFreeSelected);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},$globals.CWFreeSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWFreeSelected);



$core.addClass('CWHasMonster', $globals.CWCellState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWHasMonster.comment="I am the state of a cell that has some monsters on it and that has no game selector on it.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
function $CWHasMonsterSelected(){return $globals.CWHasMonsterSelected||(typeof CWHasMonsterSelected=="undefined"?nil:CWHasMonsterSelected)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aCell)._addRedSelector();
$recv(aCell)._changeState_($CWHasMonsterSelected());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},$globals.CWHasMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "addSelector: aCell\x0a\x09aCell addRedSelector.\x0a\x09aCell changeState: CWHasMonsterSelected",
referencedClasses: ["CWHasMonsterSelected"],
//>>excludeEnd("ide");
messageSends: ["addRedSelector", "changeState:"]
}),
$globals.CWHasMonster);

$core.addMethod(
$core.method({
selector: "cell:addMonster:",
protocol: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot add a monster on a cell that has already one");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},$globals.CWHasMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster on a cell that has already one'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMonster);

$core.addMethod(
$core.method({
selector: "cell:canBeAttackedBy:",
protocol: 'cell state API',
fn: function (aCell,side){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(aCell)._side()).__eq(side))._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},$globals.CWHasMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09^ (aCell side = side) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "=", "side"]
}),
$globals.CWHasMonster);

$core.addMethod(
$core.method({
selector: "mouseClick:context:",
protocol: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aCell)._monster())._selectInContext_(gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},$globals.CWHasMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09aCell monster selectInContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectInContext:", "monster"]
}),
$globals.CWHasMonster);

$core.addMethod(
$core.method({
selector: "removeMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFree(){return $globals.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aCell)._monster_(nil);
$recv(aCell)._changeState_($CWFree());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},$globals.CWHasMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09aCell monster: nil.\x0a\x09aCell changeState: CWFree",
referencedClasses: ["CWFree"],
//>>excludeEnd("ide");
messageSends: ["monster:", "changeState:"]
}),
$globals.CWHasMonster);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aCell)._monster())._showActiveMonster();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},$globals.CWHasMonster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09aCell monster showActiveMonster.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["showActiveMonster", "monster"]
}),
$globals.CWHasMonster);



$core.addClass('CWHasMonsterSelected', $globals.CWCellState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWHasMonsterSelected.comment="I am the state of a cell that has a monsters on it and a game selector.\x0aThe monster has to be on the opposite side of the current playing monster.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot add a selector to a cell that has already a *red* selector");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'cannot add a selector to a cell that has already a *red* selector'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "cell:addMonster:",
protocol: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot add a monster to a cell that has already a monster and a *red* selector");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster to a cell that has already a monster and a *red* selector'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "cell:canBeAttackedBy:",
protocol: 'cell state API',
fn: function (aCell,side){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(aCell)._side()).__eq(side))._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09\x22This method should be removed. but seems to have problem then with move + attack. Dont know why.\x22\x0a\x09^ (aCell side = side) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "=", "side"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "mouseClick:context:",
protocol: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(gameContext)._currentMonster())._attackTo_inContext_(aCell,gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster attackTo: aCell inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attackTo:inContext:", "currentMonster"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "mouseMove:context:",
protocol: 'cell state API',
fn: function (cell,gameContext){
var self=this;
var path;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWHasMonsterSelected.superclass.fn.prototype._mouseMove_context_.apply($recv(self), [cell,gameContext]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv($recv(gameContext)._currentMonster())._cellToMoveBeforeAttack_context_(cell,gameContext))._mouseMove_(gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext,path:path},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["cell", "gameContext"],
source: "mouseMove: cell context: gameContext\x0a\x09| path |\x0a\x09super mouseMove: cell context: gameContext.\x0a\x09(gameContext currentMonster cellToMoveBeforeAttack: cell context: gameContext) mouseMove: gameContext.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseMove:context:", "mouseMove:", "cellToMoveBeforeAttack:context:", "currentMonster"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "removeMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self error: 'cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "removeSelector:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
function $CWHasMonster(){return $globals.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.CWHasMonsterSelected.superclass.fn.prototype._removeSelector_.apply($recv(self), [aCell]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aCell)._changeState_($CWHasMonster());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09super removeSelector: aCell.\x0a\x09aCell changeState: CWHasMonster",
referencedClasses: ["CWHasMonster"],
//>>excludeEnd("ide");
messageSends: ["removeSelector:", "changeState:"]
}),
$globals.CWHasMonsterSelected);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'cell state API',
fn: function (aCell){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},$globals.CWHasMonsterSelected)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMonsterSelected);



$core.addClass('CWMonsterState', $globals.CWState, [], 'Easnoth-GameStates');
$core.addMethod(
$core.method({
selector: "activate:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot activate a non inactive monster");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "activate: aMonster\x0a\x09self error: 'cannot activate a non inactive monster'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "changeStateAfterAttacking:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "changeStateAfterMoving:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "desactivate:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWInactive(){return $globals.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._changeState_($CWInactive());
$recv(aMonster)._currentMove_((0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "desactivate: aMonster\x0a\x09aMonster changeState: CWInactive.\x0a\x09aMonster currentMove: 0",
referencedClasses: ["CWInactive"],
//>>excludeEnd("ide");
messageSends: ["changeState:", "currentMove:"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "hasPlayed:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "hasPlayed: aMonster\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "isInactive",
protocol: 'monster state API',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInactive\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "monster:attackTo:inContext:",
protocol: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "monster:moveTo:inContext:",
protocol: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._moveTo_inContext_callback_(aCell,gameContext,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09aMonster moveTo: aCell inContext: gameContext callback: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:inContext:callback:"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "readyToPick:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("cannot prepare a monster for picking if he is not Inactive");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "readyToPick: aMonster\x0a\x09self error: 'cannot prepare a monster for picking if he is not Inactive'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "select:inContext:",
protocol: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.CWMonsterState);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(aMonster)._parent())._addWhiteSelector();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},$globals.CWMonsterState)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "showActiveMonster: aMonster\x0a\x09aMonster parent addWhiteSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addWhiteSelector", "parent"]
}),
$globals.CWMonsterState);



$core.addClass('CWActive', $globals.CWMonsterState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWActive.comment="Monster can move and attack";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changeStateAfterAttacking:",
protocol: 'private',
fn: function (aMonster){
var self=this;
function $CWHasAttacked(){return $globals.CWHasAttacked||(typeof CWHasAttacked=="undefined"?nil:CWHasAttacked)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._changeState_($CWHasAttacked());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},$globals.CWActive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09aMonster changeState: CWHasAttacked",
referencedClasses: ["CWHasAttacked"],
//>>excludeEnd("ide");
messageSends: ["changeState:"]
}),
$globals.CWActive);

$core.addMethod(
$core.method({
selector: "changeStateAfterMoving:",
protocol: 'private',
fn: function (aMonster){
var self=this;
function $CWHasMoved(){return $globals.CWHasMoved||(typeof CWHasMoved=="undefined"?nil:CWHasMoved)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aMonster)._currentMove()).__eq((0));
if($core.assert($1)){
$recv(aMonster)._changeState_($CWHasMoved());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},$globals.CWActive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09aMonster currentMove = 0 \x0a\x09\x09ifTrue: [ aMonster changeState: CWHasMoved ]",
referencedClasses: ["CWHasMoved"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "currentMove", "changeState:"]
}),
$globals.CWActive);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09\x22do nothing for now\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWActive);

$core.addMethod(
$core.method({
selector: "hasPlayed:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(aMonster)._currentMove()).__eq($recv(aMonster)._move()))._not();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasPlayed:",{aMonster:aMonster},$globals.CWActive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "hasPlayed: aMonster\x0a\x09^ (aMonster currentMove = aMonster move) not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "=", "currentMove", "move"]
}),
$globals.CWActive);

$core.addMethod(
$core.method({
selector: "monster:attackTo:inContext:",
protocol: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
var toMoveCell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
toMoveCell=$recv(aMonster)._cellToMoveBeforeAttack_context_(aCell,gameContext);
$recv(aMonster)._moveTo_inContext_callback_(toMoveCell,gameContext,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aMonster)._attack_inContext_($recv(aCell)._monster(),gameContext);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,toMoveCell:toMoveCell},$globals.CWActive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09| toMoveCell |\x0a\x09toMoveCell := aMonster cellToMoveBeforeAttack: aCell context: gameContext.\x0a\x09aMonster moveTo: toMoveCell inContext: gameContext callback: [\x0a\x09\x09aMonster attack: aCell monster inContext: gameContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cellToMoveBeforeAttack:context:", "moveTo:inContext:callback:", "attack:inContext:", "monster"]
}),
$globals.CWActive);

$core.addMethod(
$core.method({
selector: "select:inContext:",
protocol: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._selectActionCells();
$recv(gameContext)._currentMonster_(aMonster);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWActive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster selectActionCells.\x0a\x09gameContext currentMonster: aMonster.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectActionCells", "currentMonster:"]
}),
$globals.CWActive);



$core.addClass('CWHasAttacked', $globals.CWMonsterState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWHasAttacked.comment="Monster can only move";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changeStateAfterAttacking:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},$globals.CWHasAttacked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasAttacked);

$core.addMethod(
$core.method({
selector: "changeStateAfterMoving:",
protocol: 'private',
fn: function (aMonster){
var self=this;
function $CWInactive(){return $globals.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aMonster)._currentMove()).__eq((0));
if($core.assert($1)){
$recv(aMonster)._changeState_($CWInactive());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},$globals.CWHasAttacked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09aMonster currentMove = 0 \x0a\x09\x09ifTrue: [ aMonster changeState: CWInactive ]",
referencedClasses: ["CWInactive"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "currentMove", "changeState:"]
}),
$globals.CWHasAttacked);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09\x22do nothing for now\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWHasAttacked);

$core.addMethod(
$core.method({
selector: "monster:attackTo:inContext:",
protocol: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWHasAttacked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasAttacked);

$core.addMethod(
$core.method({
selector: "select:inContext:",
protocol: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._selectMovableCells();
$recv(gameContext)._currentMonster_(aMonster);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWHasAttacked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster selectMovableCells.\x0a\x09gameContext currentMonster: aMonster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectMovableCells", "currentMonster:"]
}),
$globals.CWHasAttacked);



$core.addClass('CWHasMoved', $globals.CWMonsterState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWHasMoved.comment="The monster has moved its full moved there. (currentMove = 0)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changeStateAfterAttacking:",
protocol: 'private',
fn: function (aMonster){
var self=this;
function $CWInactive(){return $globals.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._changeState_($CWInactive());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},$globals.CWHasMoved)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09aMonster changeState: CWInactive",
referencedClasses: ["CWInactive"],
//>>excludeEnd("ide");
messageSends: ["changeState:"]
}),
$globals.CWHasMoved);

$core.addMethod(
$core.method({
selector: "changeStateAfterMoving:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},$globals.CWHasMoved)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMoved);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'monster state public API',
fn: function (aMonster){
var self=this;
var col;
function $CWNextTurnEvent(){return $globals.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
col=$recv(aMonster)._selectAttackableCells();
$recv(col)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aMonster)._announce_($recv($CWNextTurnEvent())._new());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster,col:col},$globals.CWHasMoved)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09| col |\x0a\x09col := \x09aMonster selectAttackableCells.\x0a\x09col ifEmpty: [ aMonster announce: CWNextTurnEvent new ]",
referencedClasses: ["CWNextTurnEvent"],
//>>excludeEnd("ide");
messageSends: ["selectAttackableCells", "ifEmpty:", "announce:", "new"]
}),
$globals.CWHasMoved);

$core.addMethod(
$core.method({
selector: "monster:attackTo:inContext:",
protocol: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._attack_inContext_($recv(aCell)._monster(),gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWHasMoved)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09aMonster attack: aCell monster inContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attack:inContext:", "monster"]
}),
$globals.CWHasMoved);

$core.addMethod(
$core.method({
selector: "monster:moveTo:inContext:",
protocol: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWHasMoved)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWHasMoved);

$core.addMethod(
$core.method({
selector: "select:inContext:",
protocol: 'monster state public API',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._selectAttackableCells();
$recv(gameContext)._currentMonster_(aMonster);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWHasMoved)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster selectAttackableCells.\x0a\x09gameContext currentMonster: aMonster",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selectAttackableCells", "currentMonster:"]
}),
$globals.CWHasMoved);



$core.addClass('CWInactive', $globals.CWMonsterState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWInactive.comment="Monster cannot do anything :)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "activate:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWActive(){return $globals.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._changeState_($CWActive());
$recv(aMonster)._currentMove_($recv(aMonster)._move());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "activate: aMonster\x0a\x09aMonster changeState: CWActive.\x0a\x09aMonster currentMove: aMonster move",
referencedClasses: ["CWActive"],
//>>excludeEnd("ide");
messageSends: ["changeState:", "currentMove:", "move"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "changeStateAfterAttacking:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster has attacked whereas he is Inactive. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster has attacked whereas he is Inactive. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "changeStateAfterMoving:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster has moved whereas he is Inactive. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster has moved whereas he is Inactive. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWNextTurnEvent(){return $globals.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._announce_($recv($CWNextTurnEvent())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09aMonster announce: CWNextTurnEvent new",
referencedClasses: ["CWNextTurnEvent"],
//>>excludeEnd("ide");
messageSends: ["announce:", "new"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "desactivate:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "desactivate: aMonster\x0a\x09\x22Do nothing already inactive\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "isInactive",
protocol: 'monster state API',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInactive\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "monster:attackTo:inContext:",
protocol: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster is trying to attack whereas he is inactive. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas he is inactive. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "monster:moveTo:inContext:",
protocol: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster is trying to move whereas he is inactive. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas he is inactive. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "readyToPick:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWToPick(){return $globals.CWToPick||(typeof CWToPick=="undefined"?nil:CWToPick)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aMonster)._changeState_($CWToPick());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "readyToPick: aMonster\x0a\x09aMonster changeState: CWToPick",
referencedClasses: ["CWToPick"],
//>>excludeEnd("ide");
messageSends: ["changeState:"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "select:inContext:",
protocol: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(gameContext)._shouldRestartTurn();
if($core.assert($1)){
$2=$recv(gameContext)._restartTurn();
return $2;
};
$recv($recv(aMonster)._root())._showActiveMonsters();
$recv(gameContext)._currentMonster_(aMonster);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWInactive)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09gameContext shouldRestartTurn ifTrue: [ ^ gameContext restartTurn ].\x0a\x09aMonster root showActiveMonsters.\x0a\x09gameContext currentMonster: aMonster.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "shouldRestartTurn", "restartTurn", "showActiveMonsters", "root", "currentMonster:"]
}),
$globals.CWInactive);

$core.addMethod(
$core.method({
selector: "showActiveMonster:",
protocol: 'monster state API',
fn: function (aMonster){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "showActiveMonster: aMonster\x0a\x09\x22Just do nothing, this monster is not actve\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.CWInactive);



$core.addClass('CWToPick', $globals.CWMonsterState, [], 'Easnoth-GameStates');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.CWToPick.comment="The player has to choice one of the toPick monster to activate them";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changeStateAfterAttacking:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster has attacked whereas the game is in a picking phase. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},$globals.CWToPick)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster has attacked whereas the game is in a picking phase. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWToPick);

$core.addMethod(
$core.method({
selector: "changeStateAfterMoving:",
protocol: 'private',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster has moved whereas the game is in a picking phase. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},$globals.CWToPick)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster has moved whereas the game is in a picking phase. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWToPick);

$core.addMethod(
$core.method({
selector: "checkForNextTurn:",
protocol: 'monster state public API',
fn: function (aMonster){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},$globals.CWToPick)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09self error: 'seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWToPick);

$core.addMethod(
$core.method({
selector: "monster:attackTo:inContext:",
protocol: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWToPick)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWToPick);

$core.addMethod(
$core.method({
selector: "monster:moveTo:inContext:",
protocol: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},$globals.CWToPick)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.CWToPick);

$core.addMethod(
$core.method({
selector: "select:inContext:",
protocol: 'monster state public API',
fn: function (aMonster,gameContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aMonster)._root();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["root"]=1;
//>>excludeEnd("ctx");
$recv($1)._removeSelection();
$recv($recv(aMonster)._root())._desactivateMonsters();
$recv(aMonster)._activate();
$recv(aMonster)._selectInContext_(gameContext);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},$globals.CWToPick)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster root removeSelection.\x0a\x09aMonster root desactivateMonsters.\x0a\x09aMonster activate.\x0a\x09aMonster selectInContext: gameContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeSelection", "root", "desactivateMonsters", "activate", "selectInContext:"]
}),
$globals.CWToPick);


});
