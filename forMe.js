//var Circle = (function() {		
 //   var instance;		
 //     size=100;     		
 //   function Circle() {		
 //     if (instance) return instance;		
 //     instance = this;		
 //   }		
 		
 		
 //   Circle.prototype.getSize =function() {return size;};		
 //   Circle.prototype.setSize =function(NewSize) { size=NewSize;};		
 		
 //   return Circle;		
 // })();		
 // const a = new Circle();		
 // const b = new Circle();		
 // console.log(a==b);		
 // a.setSize(200);		
 // console.log(a.getSize(),b.getSize());		
 		
 // function check(exp) {		
 //   var exp = exp.replace(/[^\(\)\{\}\[\]]/g, "").split("");		
 //   if ((exp.length) % 2 !== 0) {		
 //     return console.log(false);		
 //   }		
 //   var middle = (exp.length)/2		
 //   for (i=middle-1,j=middle; i >=0; i--,j++) {		
 //       if (exp[i] !== exp[j]){ 		
 //         return console.log(false);		
 //       }		
 //     }		
 //  return console.log(true);		
 //  return Rx.Observable.of(a)		
 // }		
 // check("asd${}[][(s)]assad()");		
 // debugger;		
 // var svinegret = { 		
 //   kartoshka: 5,		
 //   ekla: 3,		
 //   morkva: 3,		
 //   goroshek: 100 		
 //   };		
 //   function mix (a) { 		
 //     this[a] = (svinegret.a)%2; 		
 //   }  		
 //   Object.keys(svinegret).forEach(mix); 		
 //   console.log( goroshek ); 		
 // var a = 1;		
 // function persik(callback) {		
 //   var a = 16; return callback();		
 // }		
 // a = persik(function gruzin() {		
 //   return a;		
 // });		
 // console.log(a);		
 		
 // function sum() {		
 //   let result = arguments[0];		
 		
 //   function summa() {		
 //     if (arguments.length === 0) {		
 //       return result;		
 //     }		
 //     else {		
 //       result += arguments[0];		
 //       return summa;		
 //     }		
 //   }		
 //   summa.toString =function(){return result} ;		
 //   return summa;		
 // }		
 // console.log(sum(2)(3)());		
 // console.log(sum(2)(3));		
 // console.log(sum(1));		
 		
 // const sum1 = function (a) {		
 //   var result = a;                              // Первый вызов, инициализация		
 //   const innersum = a => (result += a, innersum); // Функция возвращает себя же		
 //   innersum.toString = () => result;            // сериализация значения для вывода		
 //   return innersum;		
 // };		
 		
 // console.log(sum1(2)(3)());		
 // console.log(sum1(2)(3));		
 		
 		
 // var i = 1; 		
 // for ( i; i < 5; i++ ) { 		
 // setTimeout(function(item){ 		
 //   return function(){		
 //  console.log(item) 		
 // }}(i), 100); 		
 // }		
 		
  		
 // for (let i; i < 5; i++ ) { 		
 // setTimeout(function(){		
 //  console.log(i) 		
 // }, 10); 		
 // }		
 		
 // var a = 'р̼̥̍̌оей̥ечт̼'; var ў = function() { var a = 'воо̍ще̦ер̼̍̌';  console.log(a);  }; ў();		
 		
 // function sum() {		
 //   let result = arguments[0];		
 		
 //   function summa() {		
 //       if (arguments.length === 0) {		
 //           return result;		
 //       }		
 //       else {		
 //           result += arguments[0];		
 //           return summa;		
 //       }		
 //   }		
 //   summa.toString = () => result;		
 		
 //   return summa;		
 // }		
 		
 // console.log(sum(2)(3)());		
 // console.log(sum(2)(3));		
 		
 		
   		
 // function sum(a,b){		
 //   var sum=0		
 //   if(b){ 		
 //   return a+b;		
 //   }		
 //     return function(b){		
 //     return  a+b;		
 //   }		
 // }		
 		
 // console.log(sum(1 ,2)) ; 		
 // console.log(sum(1)(2));		
 		
 		
 var person=function(name,age){		
   this.name=name;		
   this.age=age;		
 }		
 var person2=function(name,age,random){		
   this.random=random;		
   person.apply(this,[name,age])		
 }		
 person.prototype.getName=function(){		
   return name;		
 }		
 person2.prototype=Object.create(person.prototype);		
  person2.getName=function(){		
  return person.prototype.getName.call(this);		
  }		
 var a= new person("ni",2);		
 console.log(a.__proto__);		
 console.log(a.getName());		
 		
 var b = new person2("sas",2,"s");		
 console.log(b.__proto__);		
 console.log(b.getName());