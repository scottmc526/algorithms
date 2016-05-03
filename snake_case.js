
//takes string in snake_case and converts to camelCase
function camelConverter(functionName) {
 var capital = '';
 var camel = functionName.split('_')
 var toCapitalize = camel.slice(1, camel.length)
 toCapitalize.reduce(function(prev, curr) {
     capital += curr.charAt(0).toUpperCase() + curr.slice(1);
   }, 0)
  return camel[0] + capital
}

console.log(camelConverter('hello_world'));
