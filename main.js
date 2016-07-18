function firstReverse(string){
	var split = string.split('');
	var reverse = split.reverse();
	var join = reverse.join('');

	return join;
}
console.log(firstReverse('whatsup'));