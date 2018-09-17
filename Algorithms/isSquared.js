def square_of_2(num):
   if num == 2:
         return True
  if num &lt; 2:
         return False
  else:
         square_of_2(num/2.0)

var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
}
