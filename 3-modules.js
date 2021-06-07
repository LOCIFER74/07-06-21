//CommonJS every file is module(by default)
//modules -Encapsulated Code (only share miimum)


const names =require('./4-names')
const sayHi =require('./5-utils')
const data =require('./6-alternative-flavor')
require('./7-mind-grenade')




sayHi('praveen')
sayHi(names.john)
sayHi(names.peter)