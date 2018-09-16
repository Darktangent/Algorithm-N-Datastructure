
//area and perimeter

function area(r){
var a = Math.PI * r *r;
return "The area is: " + a;
}
console.log(area(2))

function peri(r){
var p = 2 * Math.PI * r;
return "The perimeter is: " + p;
}
console.log(peri(3))


function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function ()
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));
