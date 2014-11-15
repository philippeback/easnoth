Smalltalk createPackage: 'Easnoth'!
Object subclass: #Easnoth
	instanceVariableNames: ''
	package: 'Easnoth'!

!Easnoth methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
! !

!Easnoth methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!Easnoth class methodsFor: 'starting'!

start
	self new augmentPage
! !

