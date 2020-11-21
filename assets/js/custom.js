jQuery('#frmRegister').on('submit', function (e) {
	jQuery('.error_field').html('');

	jQuery.ajax({
		url: 'login_register_submit.php',
		type: 'post',
		data: jQuery('#frmRegister').serialize(),
		success: function (result) {
			var data = jQuery.parseJSON(result);
			if (data.status == 'error') {
				jQuery('#' + data.field).html(data.msg);
			}
			if (data.status == 'success') {
				jQuery('#' + data.field).html(data.msg);
				jQuery('#frmRegister')[0].reset();
			}
		}

	});
	e.preventDefault();
});



jQuery('#frmLogin').on('submit', function (e) {
	jQuery('.error_field').html('');
	//	jQuery('#login_submit').attr('disabled',true);
	//	jQuery('#form_login_msg').html('Please wait...');
	jQuery.ajax({
		url: 'login_register_submit.php',
		type: 'post',
		data: jQuery('#frmLogin').serialize(),
		success: function (result) {
			//			jQuery('#form_login_msg').html('');
			//			jQuery('#login_submit').attr('disabled',false);
			var data = jQuery.parseJSON(result);
			if (data.status == 'error') {
				jQuery('#form_login_msg').html(data.msg);
			}
			if (data.status == 'success') {
				//jQuery('#form_login_msg').html(data.msg);
				window.location.href = 'shop.php';
			}
		}

	});
	e.preventDefault();
});