var inAnimationDuration = /* YOUR DURATION FOR HOW LONG IT TAKES TO REACH 1 AFTER THE LAYER INPOINT */;
var outAnimationDuration = /* YOUR DURATION FOR HOW LONG IT TAKES TO GO BACK TO 0 AT THE LAYER OUTPOINT */;

if(time >= thisLayer.inPoint) {
	if(time < thisLayer.outPoint - outAnimationDuration) {
		linear(time, thisLayer.inPoint, thisLayer.inPoint + inAnimationDuration, 0, 1);
	}
	else {
		linear(time, thisLayer.outPoint - outAnimationDuration, thisLayer.outPoint, 1, 0);
	}
}