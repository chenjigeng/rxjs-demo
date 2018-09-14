// import Rx from '@reactivex/rxjs';
import * as Rx from 'rxjs/Rx';
console.log(Rx);
Rx.Scheduler.async.schedule(function (v) {
	console.log(v);
	this.schedule(v + 1, 2000);
}, 3000, 0);