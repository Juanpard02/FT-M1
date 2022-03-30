
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10
  console.log(a); //8
  var f = function(a, b, c) {
    b = a;
    console.log(b);//8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9  
}
c(8,9,10);
console.log(b); //10
console.log(x); //1
```

```javascript
console.log(bar); //undefined
console.log(baz); //undefined
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);//franco
```

```javascript
var instructor = "Tony";
console.log(instructor); //Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //The flash
    console.log(pm); //Reverse flash
}
console.log(instructor);//The flash
console.log(pm); //Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        //2
"2" * "3"      //6
4 + 5 + "px"   //9px
"$" + 4 + 5    //$9
"4" - 2        //2
"4px" - 2      //NaN
7 / 0          //Infinity
{}[0]          //[0]
parseInt("09") //9
5 && 2         //2
2 && 5         //5
5 || 0         //5
0 || 5         //5
[3]+[3]-[10]   //[23]
3>2>1          //False
[] == ![]      //True
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:  console.log(a) devuelve undefined porque esta definida la variable despues del console log pero, console.log(foo()) devuelve 2 porque esta definida dentro otra funcion que tiene un return

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? : undefined

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué: Con console.log(obj.prop.getFullname()) devuelve Aurelio De Rosa debido a que llama la función en cambio con console.log(test()) devuelve Juan Perez ya que la variable test fue asignada a la variable fullname.

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test()); 
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué? 1, 4, 3, 2 porque al recorrer el codigo primero pasa por console.log(1), luego hay una espera de 1 segundo para el numero 2 por lo que lo manda a una apis, luego manda el 3 a la apis por un instante y antes de devolver el 3 pasa por el console.log(4).

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
