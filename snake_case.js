
//takes string in snake_case and converts to camelCase
function camelConverter(string) {
 var Case = '';
 var camel = string.split('_');
 var toCapitalize = camel.slice(1, camel.length);
 toCapitalize.reduce(function(prev, curr) {
     Case += curr.charAt(0).toUpperCase() + curr.slice(1);
   }, 0);
  return camel[0] + Case
}

console.log(camelConverter('hello_world'));
