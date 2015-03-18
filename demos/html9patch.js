$(document).ready(function(){
	/**
	 * INFO
	 * Images directory is not in the ./images/ , please modify the imageDirectory variable
	 */
	var imageDirectory = './images/';

	var replaceDOM = function (id, html) {
		$(id).replaceWith(html);
	}
	// btn_hovered.9.png set vars START
	var btn_hovered = $('#btn_hovered');
	var btn_hovered_html = "<div id='btn_hovered' class='nine-patch'>	<div id='btn_hovered_content' style='top:12px; bottom:12px; left:12px; right:12px;'>		Entry Content	</div>	<table id='btn_hovered_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='12px' height='18px' style='background-image:url(" + imageDirectory + "btn_hovered_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_hovered_1.png);'><img class='f' /></td>			<td width='12px' style='background-image:url(" + imageDirectory + "btn_hovered_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "btn_hovered_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "btn_hovered_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_hovered_5.png);'></td>		</tr>		<tr>			<td height='19px' style='background-image:url(" + imageDirectory + "btn_hovered_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_hovered_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_hovered_8.png);'></td>		</tr>	</table></div>";
	var btn_hovered_state = btn_hovered.attr('state');
	// btn_normal.9.png set vars START
	var btn_normal = $('#btn_normal');
	var btn_normal_html = "<div id='btn_normal' class='nine-patch'>	<div id='btn_normal_content' style='top:12px; bottom:12px; left:12px; right:12px;'>		Entry Content	</div>	<table id='btn_normal_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='12px' height='18px' style='background-image:url(" + imageDirectory + "btn_normal_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_normal_1.png);'><img class='f' /></td>			<td width='12px' style='background-image:url(" + imageDirectory + "btn_normal_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "btn_normal_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "btn_normal_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_normal_5.png);'></td>		</tr>		<tr>			<td height='19px' style='background-image:url(" + imageDirectory + "btn_normal_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_normal_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_normal_8.png);'></td>		</tr>	</table></div>";
	var btn_normal_state = btn_normal.attr('state');
	// btn_pressed.9.png set vars START
	var btn_pressed = $('#btn_pressed');
	var btn_pressed_html = "<div id='btn_pressed' class='nine-patch'>	<div id='btn_pressed_content' style='top:12px; bottom:12px; left:12px; right:12px;'>		Entry Content	</div>	<table id='btn_pressed_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='12px' height='18px' style='background-image:url(" + imageDirectory + "btn_pressed_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_pressed_1.png);'><img class='f' /></td>			<td width='12px' style='background-image:url(" + imageDirectory + "btn_pressed_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "btn_pressed_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "btn_pressed_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_pressed_5.png);'></td>		</tr>		<tr>			<td height='19px' style='background-image:url(" + imageDirectory + "btn_pressed_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_pressed_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "btn_pressed_8.png);'></td>		</tr>	</table></div>";
	var btn_pressed_state = btn_pressed.attr('state');
	// chat_pop.9.png set vars START
	var chat_pop = $('#chat_pop');
	var chat_pop_html = "<div id='chat_pop' class='nine-patch'>	<div id='chat_pop_content' style='top:8px; bottom:8px; left:15px; right:8px;'>		Entry Content	</div>	<table id='chat_pop_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='19px' height='23px' style='background-image:url(" + imageDirectory + "chat_pop_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "chat_pop_1.png);'><img class='f' /></td>			<td width='12px' style='background-image:url(" + imageDirectory + "chat_pop_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "chat_pop_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "chat_pop_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "chat_pop_5.png);'></td>		</tr>		<tr>			<td height='23px' style='background-image:url(" + imageDirectory + "chat_pop_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "chat_pop_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "chat_pop_8.png);'></td>		</tr>	</table></div>";
	var chat_pop_state = chat_pop.attr('state');
	// html_ul_li_icon.9.png set vars START
	var html_ul_li_icon = $('#html_ul_li_icon');
	var html_ul_li_icon_html = "<div id='html_ul_li_icon' class='nine-patch'>	<div id='html_ul_li_icon_content' style='top:4px; bottom:4px; left:27px; right:3px;'>		Entry Content	</div>	<table id='html_ul_li_icon_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='27px' height='23px' style='background-image:url(" + imageDirectory + "html_ul_li_icon_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "html_ul_li_icon_1.png);'><img class='f' /></td>			<td width='3px' style='background-image:url(" + imageDirectory + "html_ul_li_icon_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "html_ul_li_icon_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "html_ul_li_icon_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "html_ul_li_icon_5.png);'></td>		</tr>	</table></div>";
	var html_ul_li_icon_state = html_ul_li_icon.attr('state');
	// popup_inline_error_above.9.png set vars START
	var popup_inline_error_above = $('#popup_inline_error_above');
	var popup_inline_error_above_html = "<div id='popup_inline_error_above' class='nine-patch'>	<div id='popup_inline_error_above_content' style='top:21px; bottom:33px; left:30px; right:28px;'>		Entry Content	</div>	<table id='popup_inline_error_above_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='33px' height='21px' style='background-image:url(" + imageDirectory + "popup_inline_error_above_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_inline_error_above_1.png);'><img class='f' /></td>			<td width='45px' style='background-image:url(" + imageDirectory + "popup_inline_error_above_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "popup_inline_error_above_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "popup_inline_error_above_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_inline_error_above_5.png);'></td>		</tr>		<tr>			<td height='33px' style='background-image:url(" + imageDirectory + "popup_inline_error_above_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_inline_error_above_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_inline_error_above_8.png);'></td>		</tr>	</table></div>";
	var popup_inline_error_above_state = popup_inline_error_above.attr('state');
	// popup_window_bg.9.png set vars START
	var popup_window_bg = $('#popup_window_bg');
	var popup_window_bg_html = "<div id='popup_window_bg' class='nine-patch'>	<div id='popup_window_bg_content' style='top:22px; bottom:42px; left:32px; right:32px;'>		Entry Content	</div>	<table id='popup_window_bg_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='48px' height='46px' style='background-image:url(" + imageDirectory + "popup_window_bg_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_window_bg_1.png);'><img class='f' /></td>			<td width='46px' style='background-image:url(" + imageDirectory + "popup_window_bg_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "popup_window_bg_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "popup_window_bg_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_window_bg_5.png);'></td>		</tr>		<tr>			<td height='48px' style='background-image:url(" + imageDirectory + "popup_window_bg_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_window_bg_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "popup_window_bg_8.png);'></td>		</tr>	</table></div>";
	var popup_window_bg_state = popup_window_bg.attr('state');
	// scrollbar_handle.9.png set vars START
	var scrollbar_handle = $('#scrollbar_handle');
	var scrollbar_handle_html = "<div id='scrollbar_handle' class='nine-patch'>	<div id='scrollbar_handle_content' style='top:31px; bottom:5px; left:7px; right:10px;'>		Entry Content	</div>	<table id='scrollbar_handle_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='28px' height='30px' style='background-image:url(" + imageDirectory + "scrollbar_handle_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_1.png);'><img class='f' /></td>			<td width='17px' style='background-image:url(" + imageDirectory + "scrollbar_handle_2.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_3.png);'><img class='f' /><img class='f' /><img class='f' /></td>			<td width='29px' style='background-image:url(" + imageDirectory + "scrollbar_handle_4.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_5.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_8.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_9.png);'></td>		</tr>		<tr>			<td height='25px' style='background-image:url(" + imageDirectory + "scrollbar_handle_10.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_11.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_12.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_13.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_14.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_15.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_16.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_17.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_18.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_19.png);'></td>		</tr>		<tr>			<td height='4px' style='background-image:url(" + imageDirectory + "scrollbar_handle_20.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_21.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_22.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_23.png);'></td>			<td style='background-image:url(" + imageDirectory + "scrollbar_handle_24.png);'></td>		</tr>	</table></div>";
	var scrollbar_handle_state = scrollbar_handle.attr('state');
	// textfield_selected.9.png set vars START
	var textfield_selected = $('#textfield_selected');
	var textfield_selected_html = "<div id='textfield_selected' class='nine-patch'>	<div id='textfield_selected_content' style='top:10px; bottom:17px; left:16px; right:16px;'>		Entry Content	</div>	<table id='textfield_selected_table' cellpadding='0' cellspacing='0'>		<tr>			<td width='16px' height='32px' style='background-image:url(" + imageDirectory + "textfield_selected_0.png);'></td>			<td style='background-image:url(" + imageDirectory + "textfield_selected_1.png);'><img class='f' /></td>			<td width='16px' style='background-image:url(" + imageDirectory + "textfield_selected_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(" + imageDirectory + "textfield_selected_3.png);'><img /></td>			<td style='background-image:url(" + imageDirectory + "textfield_selected_4.png);'></td>			<td style='background-image:url(" + imageDirectory + "textfield_selected_5.png);'></td>		</tr>		<tr>			<td height='39px' style='background-image:url(" + imageDirectory + "textfield_selected_6.png);'></td>			<td style='background-image:url(" + imageDirectory + "textfield_selected_7.png);'></td>			<td style='background-image:url(" + imageDirectory + "textfield_selected_8.png);'></td>		</tr>	</table></div>";
	var textfield_selected_state = textfield_selected.attr('state');

	// btn_hovered.9.png set DOM START
	if(btn_hovered[0] != undefined) {

		// get attrs
		var btn_hovered_style = btn_hovered.attr('style') == undefined ? '' : btn_hovered.attr('style') + ' ';
		var btn_hovered_class = btn_hovered.attr('class') == undefined ? '' : btn_hovered.attr('class') + ' ';
		var btn_hovered_child = btn_hovered.html();

		// replace template
		replaceDOM('#btn_hovered', btn_hovered_html);
		// re-selected id
		btn_hovered = $('#btn_hovered');
		// set class
		btn_hovered.attr('class', btn_hovered_class + btn_hovered.attr('class'));
		// set style
		btn_hovered.attr('style', btn_hovered_style);
		$('#btn_hovered_content').html(btn_hovered_child);
	}
	// btn_normal.9.png set DOM START
	if(btn_normal[0] != undefined) {

		// get attrs
		var btn_normal_style = btn_normal.attr('style') == undefined ? '' : btn_normal.attr('style') + ' ';
		var btn_normal_class = btn_normal.attr('class') == undefined ? '' : btn_normal.attr('class') + ' ';
		var btn_normal_child = btn_normal.html();

		// replace template
		replaceDOM('#btn_normal', btn_normal_html);
		// re-selected id
		btn_normal = $('#btn_normal');
		// set class
		btn_normal.attr('class', btn_normal_class + btn_normal.attr('class'));
		// set style
		btn_normal.attr('style', btn_normal_style);
		$('#btn_normal_content').html(btn_normal_child);
	}
	// btn_pressed.9.png set DOM START
	if(btn_pressed[0] != undefined) {

		// get attrs
		var btn_pressed_style = btn_pressed.attr('style') == undefined ? '' : btn_pressed.attr('style') + ' ';
		var btn_pressed_class = btn_pressed.attr('class') == undefined ? '' : btn_pressed.attr('class') + ' ';
		var btn_pressed_child = btn_pressed.html();

		// replace template
		replaceDOM('#btn_pressed', btn_pressed_html);
		// re-selected id
		btn_pressed = $('#btn_pressed');
		// set class
		btn_pressed.attr('class', btn_pressed_class + btn_pressed.attr('class'));
		// set style
		btn_pressed.attr('style', btn_pressed_style);
		$('#btn_pressed_content').html(btn_pressed_child);
	}
	// chat_pop.9.png set DOM START
	if(chat_pop[0] != undefined) {

		// get attrs
		var chat_pop_style = chat_pop.attr('style') == undefined ? '' : chat_pop.attr('style') + ' ';
		var chat_pop_class = chat_pop.attr('class') == undefined ? '' : chat_pop.attr('class') + ' ';
		var chat_pop_child = chat_pop.html();

		// replace template
		replaceDOM('#chat_pop', chat_pop_html);
		// re-selected id
		chat_pop = $('#chat_pop');
		// set class
		chat_pop.attr('class', chat_pop_class + chat_pop.attr('class'));
		// set style
		chat_pop.attr('style', chat_pop_style);
		$('#chat_pop_content').html(chat_pop_child);
	}
	// html_ul_li_icon.9.png set DOM START
	if(html_ul_li_icon[0] != undefined) {

		// get attrs
		var html_ul_li_icon_style = html_ul_li_icon.attr('style') == undefined ? '' : html_ul_li_icon.attr('style') + ' ';
		var html_ul_li_icon_class = html_ul_li_icon.attr('class') == undefined ? '' : html_ul_li_icon.attr('class') + ' ';
		var html_ul_li_icon_child = html_ul_li_icon.html();

		// replace template
		replaceDOM('#html_ul_li_icon', html_ul_li_icon_html);
		// re-selected id
		html_ul_li_icon = $('#html_ul_li_icon');
		// set class
		html_ul_li_icon.attr('class', html_ul_li_icon_class + html_ul_li_icon.attr('class'));
		// set style
		html_ul_li_icon.attr('style', html_ul_li_icon_style);
		$('#html_ul_li_icon_content').html(html_ul_li_icon_child);
	}
	// popup_inline_error_above.9.png set DOM START
	if(popup_inline_error_above[0] != undefined) {

		// get attrs
		var popup_inline_error_above_style = popup_inline_error_above.attr('style') == undefined ? '' : popup_inline_error_above.attr('style') + ' ';
		var popup_inline_error_above_class = popup_inline_error_above.attr('class') == undefined ? '' : popup_inline_error_above.attr('class') + ' ';
		var popup_inline_error_above_child = popup_inline_error_above.html();

		// replace template
		replaceDOM('#popup_inline_error_above', popup_inline_error_above_html);
		// re-selected id
		popup_inline_error_above = $('#popup_inline_error_above');
		// set class
		popup_inline_error_above.attr('class', popup_inline_error_above_class + popup_inline_error_above.attr('class'));
		// set style
		popup_inline_error_above.attr('style', popup_inline_error_above_style);
		$('#popup_inline_error_above_content').html(popup_inline_error_above_child);
	}
	// popup_window_bg.9.png set DOM START
	if(popup_window_bg[0] != undefined) {

		// get attrs
		var popup_window_bg_style = popup_window_bg.attr('style') == undefined ? '' : popup_window_bg.attr('style') + ' ';
		var popup_window_bg_class = popup_window_bg.attr('class') == undefined ? '' : popup_window_bg.attr('class') + ' ';
		var popup_window_bg_child = popup_window_bg.html();

		// replace template
		replaceDOM('#popup_window_bg', popup_window_bg_html);
		// re-selected id
		popup_window_bg = $('#popup_window_bg');
		// set class
		popup_window_bg.attr('class', popup_window_bg_class + popup_window_bg.attr('class'));
		// set style
		popup_window_bg.attr('style', popup_window_bg_style);
		$('#popup_window_bg_content').html(popup_window_bg_child);
	}
	// scrollbar_handle.9.png set DOM START
	if(scrollbar_handle[0] != undefined) {

		// get attrs
		var scrollbar_handle_style = scrollbar_handle.attr('style') == undefined ? '' : scrollbar_handle.attr('style') + ' ';
		var scrollbar_handle_class = scrollbar_handle.attr('class') == undefined ? '' : scrollbar_handle.attr('class') + ' ';
		var scrollbar_handle_child = scrollbar_handle.html();

		// replace template
		replaceDOM('#scrollbar_handle', scrollbar_handle_html);
		// re-selected id
		scrollbar_handle = $('#scrollbar_handle');
		// set class
		scrollbar_handle.attr('class', scrollbar_handle_class + scrollbar_handle.attr('class'));
		// set style
		scrollbar_handle.attr('style', scrollbar_handle_style);
		$('#scrollbar_handle_content').html(scrollbar_handle_child);
	}
	// textfield_selected.9.png set DOM START
	if(textfield_selected[0] != undefined) {

		// get attrs
		var textfield_selected_style = textfield_selected.attr('style') == undefined ? '' : textfield_selected.attr('style') + ' ';
		var textfield_selected_class = textfield_selected.attr('class') == undefined ? '' : textfield_selected.attr('class') + ' ';
		var textfield_selected_child = textfield_selected.html();

		// replace template
		replaceDOM('#textfield_selected', textfield_selected_html);
		// re-selected id
		textfield_selected = $('#textfield_selected');
		// set class
		textfield_selected.attr('class', textfield_selected_class + textfield_selected.attr('class'));
		// set style
		textfield_selected.attr('style', textfield_selected_style);
		$('#textfield_selected_content').html(textfield_selected_child);
	}

	// btn_hovered.9.png set stats START
	if(btn_hovered_state != undefined) {
		var btn_hovered_state_array = btn_hovered_state.split("|");
		for (var i = 0; i < btn_hovered_state_array.length; i++) {
			var btn_hovered_var = eval(btn_hovered_state_array[i] + '_html');
			$('#btn_hovered_table').after(btn_hovered_var.substring(btn_hovered_var.indexOf('<table'), btn_hovered_var.indexOf('</table>')+8));
			$('#' + btn_hovered_state_array[i] + '_table').hide();
		}
	}
	// btn_normal.9.png set stats START
	if(btn_normal_state != undefined) {
		var btn_normal_state_array = btn_normal_state.split("|");
		for (var i = 0; i < btn_normal_state_array.length; i++) {
			var btn_normal_var = eval(btn_normal_state_array[i] + '_html');
			$('#btn_normal_table').after(btn_normal_var.substring(btn_normal_var.indexOf('<table'), btn_normal_var.indexOf('</table>')+8));
			$('#' + btn_normal_state_array[i] + '_table').hide();
		}
	}
	// btn_pressed.9.png set stats START
	if(btn_pressed_state != undefined) {
		var btn_pressed_state_array = btn_pressed_state.split("|");
		for (var i = 0; i < btn_pressed_state_array.length; i++) {
			var btn_pressed_var = eval(btn_pressed_state_array[i] + '_html');
			$('#btn_pressed_table').after(btn_pressed_var.substring(btn_pressed_var.indexOf('<table'), btn_pressed_var.indexOf('</table>')+8));
			$('#' + btn_pressed_state_array[i] + '_table').hide();
		}
	}
	// chat_pop.9.png set stats START
	if(chat_pop_state != undefined) {
		var chat_pop_state_array = chat_pop_state.split("|");
		for (var i = 0; i < chat_pop_state_array.length; i++) {
			var chat_pop_var = eval(chat_pop_state_array[i] + '_html');
			$('#chat_pop_table').after(chat_pop_var.substring(chat_pop_var.indexOf('<table'), chat_pop_var.indexOf('</table>')+8));
			$('#' + chat_pop_state_array[i] + '_table').hide();
		}
	}
	// html_ul_li_icon.9.png set stats START
	if(html_ul_li_icon_state != undefined) {
		var html_ul_li_icon_state_array = html_ul_li_icon_state.split("|");
		for (var i = 0; i < html_ul_li_icon_state_array.length; i++) {
			var html_ul_li_icon_var = eval(html_ul_li_icon_state_array[i] + '_html');
			$('#html_ul_li_icon_table').after(html_ul_li_icon_var.substring(html_ul_li_icon_var.indexOf('<table'), html_ul_li_icon_var.indexOf('</table>')+8));
			$('#' + html_ul_li_icon_state_array[i] + '_table').hide();
		}
	}
	// popup_inline_error_above.9.png set stats START
	if(popup_inline_error_above_state != undefined) {
		var popup_inline_error_above_state_array = popup_inline_error_above_state.split("|");
		for (var i = 0; i < popup_inline_error_above_state_array.length; i++) {
			var popup_inline_error_above_var = eval(popup_inline_error_above_state_array[i] + '_html');
			$('#popup_inline_error_above_table').after(popup_inline_error_above_var.substring(popup_inline_error_above_var.indexOf('<table'), popup_inline_error_above_var.indexOf('</table>')+8));
			$('#' + popup_inline_error_above_state_array[i] + '_table').hide();
		}
	}
	// popup_window_bg.9.png set stats START
	if(popup_window_bg_state != undefined) {
		var popup_window_bg_state_array = popup_window_bg_state.split("|");
		for (var i = 0; i < popup_window_bg_state_array.length; i++) {
			var popup_window_bg_var = eval(popup_window_bg_state_array[i] + '_html');
			$('#popup_window_bg_table').after(popup_window_bg_var.substring(popup_window_bg_var.indexOf('<table'), popup_window_bg_var.indexOf('</table>')+8));
			$('#' + popup_window_bg_state_array[i] + '_table').hide();
		}
	}
	// scrollbar_handle.9.png set stats START
	if(scrollbar_handle_state != undefined) {
		var scrollbar_handle_state_array = scrollbar_handle_state.split("|");
		for (var i = 0; i < scrollbar_handle_state_array.length; i++) {
			var scrollbar_handle_var = eval(scrollbar_handle_state_array[i] + '_html');
			$('#scrollbar_handle_table').after(scrollbar_handle_var.substring(scrollbar_handle_var.indexOf('<table'), scrollbar_handle_var.indexOf('</table>')+8));
			$('#' + scrollbar_handle_state_array[i] + '_table').hide();
		}
	}
	// textfield_selected.9.png set stats START
	if(textfield_selected_state != undefined) {
		var textfield_selected_state_array = textfield_selected_state.split("|");
		for (var i = 0; i < textfield_selected_state_array.length; i++) {
			var textfield_selected_var = eval(textfield_selected_state_array[i] + '_html');
			$('#textfield_selected_table').after(textfield_selected_var.substring(textfield_selected_var.indexOf('<table'), textfield_selected_var.indexOf('</table>')+8));
			$('#' + textfield_selected_state_array[i] + '_table').hide();
		}
	}

});