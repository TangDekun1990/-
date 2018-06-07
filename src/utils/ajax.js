
import qs from 'qs';


const fetchHeader = {
	'Accept': 'application/json',
	'Content-Type': 'application/json; charset=utf-8',
	// 'Content-Type': 'application/x-www-form-urlencoded',
	'Host': 'crm-new.100credit.com'
}


//function getParam(obj) {
//	if(!obj) return ""
//
//  let _ = encodeURIComponent
//  return '?' + Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
//}


function toLogin(json) {
//	if(json.fail_reason) {
//		if((json.fail_reason.status == '103' || json.fail_reason.status == '102' || json.fail_reason.status == '101') && window.location.pathname != '/login') {
//			window.location.href = '/login';
//		}
//	}
	if(json.code == '11000' || json.code == '12000' || json.code == '403') {
		window.location.href = '/login';
	}
}

async function getData(url,obj) {
	obj = obj || {};
//	if(localStorage.getItem('crm-session')) {
//		obj.token = JSON.parse(localStorage.getItem('crm-session')).token;
//	}


	var cfg = {
		method: 'GET',
		credentials: 'include',
//		headers: fetchHeader,
	}
	
//	if(obj.token) {
//		cfg.headers = fetchHeader
//	}
	

	let res = await fetch(url + '?' + qs.stringify(obj) ,cfg);
    let json = await res.json()

    toLogin(json)

	return json

}

async function postData(url,obj) {
	obj = obj || {};
//	if(localStorage.getItem('crm-session')) {
//		obj.token = JSON.parse(localStorage.getItem('crm-session')).token;
//	}
	var cfg = {
		method: 'POST',
		credentials: 'include',
		headers: fetchHeader,
		body: JSON.stringify(obj)
	}

    let res = await fetch(url ,cfg);
    let json = await res.json()

    toLogin(json)

	return json

}

async function putData(url,obj) {
	obj = obj || {};
//	if(localStorage.getItem('crm-session')) {
//		obj.token = JSON.parse(localStorage.getItem('crm-session')).token;
//	}
	var cfg = {
		method: 'PUT',
		credentials: 'include',
		headers: fetchHeader,
		body: JSON.stringify(obj)
	}

	let res = await fetch(url ,cfg);
    let json = await res.json()

    toLogin(json)

	return json
}

async function deleteData(url,obj) {
	obj = obj || {};
//	if(localStorage.getItem('crm-session')) {
//		obj.token = JSON.parse(localStorage.getItem('crm-session')).token;
//	}
	var cfg = {
		method: 'DELETE',
		credentials: 'include',
		headers: fetchHeader,
		body: JSON.stringify(obj)
	}

	let res = await fetch(url + '?' + qs.stringify(obj) ,cfg);
    let json = await res.json()

    toLogin(json)

	return json
}


export default {
	get: getData,
	post: postData,
	put: putData,
	delete: deleteData
}
