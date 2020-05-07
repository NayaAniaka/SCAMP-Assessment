// limit - sets the bounds on range of sequence
// current - the number to compute the sequence for
// previous (optional) - the number preceding curr
// result (optional) - the array that will hold the results of the computation, returned at the end 
function fibonacci(limit, current, previous = 0, result = []) { 
    result.push(previous);
    return limit <= 0 ? result : fibonacci(limit - 1, current + previous, current, result);
}
