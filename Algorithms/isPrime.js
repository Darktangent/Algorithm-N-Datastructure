function isPrime(value) {
  //A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
    for(var i = 2; i < value; i++) {
      // We then loop from two all the way up until our number minus one because we know that our number will be divisible by itself and one. If the remainder of our value with the current loop value is zero then we know it is not prime so break out and say s
        console.log(i)
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
isPrime(13)
