document.cookie = "username=me@me.com"
document.cookie = "password=super_safe_password"
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {
	let query = new URL(window.location).searchParams.get('query')
	document.getElementById('query-input').value = query
	document.getElementById('query-output').innerHTML = query
}
//? Try adding a <img src onerror="alert('Hacked')"> to see why it's a problem
//! CHange last line with InnerText to solve problem