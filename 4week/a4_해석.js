//문제풀이 해 주신 코드(해석 후 코드 다시 짜기)
function solution(n) {
  const answer = [];

  function hanoi (n, from, to) {
    const by = 6-from-to;

    if (n === 1) {
      answer.push([from, to]);
    } else {
      hanoi(n-1, from, by);
      answer.push([from, to]);
      hanoi(n-1, by, to);
    }
  }
  hanoi(n, 1, 3);

  return answer;
}

function solution (n) {
  const result = [];
  function hanoi (n, from, to) {
    const arr = [];
    let temp = 1;
    let by = 6-from-to;
    while (temp > 0) {
      while (n >1) {
        arr.push(to);
        arr.push(by);
        arr.push(from);
        arr.push(n);
        n--;
        arr.push(to);
        to = by;
        by = arr.pop();
      }
      result.push([from, to]);
      if (arr.length -1 > 0) {
        n = arr.pop();
        from = arr.pop();
        by = arr.pop();
        to = arr.pop();
        result.push([from, to]);
        n --;
        arr.push(from);
        from = by;
        by = arr.pop();
      } else {
        temp = 0;
      }
    }
  }
  hanoi (n, 1, 3);
  return result
}
