console.log(rxjs)
rxjs.fromEvent(document.querySelector('input'), 'input')
  .pipe(
    rxjs.operators.throttleTime(2000),
    rxjs.operators.map(e => e.target.value),
    rxjs.operators.scan((nromal, str) => nromal + str, 't'),
    rxjs.operators.map(v => v + 'asd')
  )
  .subscribe((e) => console.log(e))