function d(x) {
	return 2*(x*x);
}
function w(y) {
	return 4/y;
}
function s(z) {
	return Math.round(z);
}

console.log(s(w(d(1.1))));
