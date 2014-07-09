var sum = 0;
var nbArgs = process.argv.length;
for (i=2; i<nbArgs; i++) {
	sum += Number(process.argv[i]);
}
console.log(sum);
