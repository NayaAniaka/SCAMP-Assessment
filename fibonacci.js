function fibonacci(limit, curr, prev = 0, res = []) { 
    res.push(prev);
    return limit <= 0 ? res : fibonacci(limit - 1, curr + prev, curr, res);
}