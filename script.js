function D(x) {
	return 2*(x*x);
}
function W(y) {
	return 4/y;
}
function S(z) {
	return Math.round(z);
}

console.log(S(W(D(1.1))));