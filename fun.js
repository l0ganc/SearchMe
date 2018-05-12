$(function () {
			$("#form").bootstrapValidator({
					message: 'this is a test',//好像从来没出现过
					feedbackIcons: {//根据验证结果显示的各种图标
							valid: '',
							invalid: 'glyphicon glyphicon-remove',
							validating: ''
					},
					fields: {
							keyword: {
								message: 'The keyword is not vaild',
									validators: {
											notEmpty: {//检测非空,radio也可用
													message: 'Please enter a keyword'
											}
									}
							},

							location: {
								message: 'The location is not vaild',
									validators: {
											notEmpty: {//检测非空,radio也可用
													message: 'Please enter a location'
											}
									}
							}
					}
			});
	});


function gd() {
		document.getElementById("autocomplete").value = "";
		document.getElementById("autocomplete").disabled = true;
}
function text_check() {
		document.getElementById("autocomplete").disabled = false;
}

window.onload = function () {
		getLocation();
};
function getLocation() {
		var xhr = new XMLHttpRequest();
		var method = "POST";
		var url = "http://ip-api.com/json";
		xhr.responseType = "json";
		xhr.onreadystatechange = function () {
				if (xhr.readyState === xhr.DONE) {
						if (xhr.status === 200) {
								cur_lat = xhr.response["lat"];
								cur_lon = xhr.response["lon"]
								document.getElementById('lat').value = cur_lat;
								document.getElementById('lon').value = cur_lon;
								console.log(cur_lat);
								console.log(cur_lon);


						} else {
								console.log(xhr.response);
						}
				}
		};
		xhr.open(method, url, true);
		xhr.send();
}

function getResult() {
	alert("test!");
}
