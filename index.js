$(function() {

	let count = 3;
	var countdown = () => {
		if(count == -1) {
			location.href = 'https://youtube.com';
		}
		$('#countdown').text("Redirect for "+ count +"s...")
		count--;
		console.log(count);
		setTimeout(countdown, 1000);
	}
	countdown();
})