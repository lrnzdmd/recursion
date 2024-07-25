function fibs(n) {
    const answer = [];
    let a = 0;
    let b = 1;
    let c;

    answer.push(a);
    answer.push(b);

    for (let i = 2 ; i < n; i++) {
        c = a + b;
        a = b;
        b = c;

        answer.push(c);
    }

    console.log(answer);
}

function fibsrec(n)  {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]
  
    const arr = fibsrec(n - 1)
  
    return [...arr, arr[n - 1] + arr[n - 2]]
  }
  