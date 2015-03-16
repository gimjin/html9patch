$(document).ready(function(){
	var replaceDOM = function (id, html) {
		$(id).replaceWith(html);
	}
	// Nine patch btn_toggle_off.9.png START
	var btn_toggle_off = $('#btn_toggle_off');
	if(btn_toggle_off[0] != undefined) {
		var btn_toggle_off_html = "<div id='btn_toggle_off' class='nine-patch'>	<div style='top:14px; bottom:14px; left:18px; right:18px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='9px' height='24px' style='background-image:url(images/btn_toggle_off_0.png);'></td>			<td style='background-image:url(images/btn_toggle_off_1.png);'><img /></td>			<td width='6px' style='background-image:url(images/btn_toggle_off_2.png);'></td>			<td style='background-image:url(images/btn_toggle_off_3.png);'><img /></td>			<td width='6px' style='background-image:url(images/btn_toggle_off_4.png);'></td>			<td style='background-image:url(images/btn_toggle_off_5.png);'><img /></td>			<td width='9px' style='background-image:url(images/btn_toggle_off_6.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/btn_toggle_off_7.png);'><img /></td>			<td style='background-image:url(images/btn_toggle_off_8.png);'></td>			<td style='background-image:url(images/btn_toggle_off_9.png);'></td>			<td style='background-image:url(images/btn_toggle_off_10.png);'></td>			<td style='background-image:url(images/btn_toggle_off_11.png);'></td>			<td style='background-image:url(images/btn_toggle_off_12.png);'></td>			<td style='background-image:url(images/btn_toggle_off_13.png);'></td>		</tr>		<tr>			<td height='21px' style='background-image:url(images/btn_toggle_off_14.png);'></td>			<td style='background-image:url(images/btn_toggle_off_15.png);'></td>			<td style='background-image:url(images/btn_toggle_off_16.png);'></td>			<td style='background-image:url(images/btn_toggle_off_17.png);'></td>			<td style='background-image:url(images/btn_toggle_off_18.png);'></td>			<td style='background-image:url(images/btn_toggle_off_19.png);'></td>			<td style='background-image:url(images/btn_toggle_off_20.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = btn_toggle_off.attr('width');
		var _height = btn_toggle_off.attr('height');
		var _style = btn_toggle_off.attr('style') == undefined ? '' : btn_toggle_off.attr('style') + ' ';
		var _class = btn_toggle_off.attr('class') == undefined ? '' : btn_toggle_off.attr('class') + ' ';

		// replace template
		replaceDOM('#btn_toggle_off', btn_toggle_off_html);
		// re-selected id
		btn_toggle_off = $('#btn_toggle_off');
		// set class
		btn_toggle_off.attr('class', _class + btn_toggle_off.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		btn_toggle_off.attr('style', _style);
	}
	// Nine patch btn_toggle_off.9.png END
	// Nine patch btn_toggle_on.9.png START
	var btn_toggle_on = $('#btn_toggle_on');
	if(btn_toggle_on[0] != undefined) {
		var btn_toggle_on_html = "<div id='btn_toggle_on' class='nine-patch'>	<div style='top:14px; bottom:14px; left:18px; right:18px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='9px' height='24px' style='background-image:url(images/btn_toggle_on_0.png);'></td>			<td style='background-image:url(images/btn_toggle_on_1.png);'><img /></td>			<td width='6px' style='background-image:url(images/btn_toggle_on_2.png);'></td>			<td style='background-image:url(images/btn_toggle_on_3.png);'><img /></td>			<td width='6px' style='background-image:url(images/btn_toggle_on_4.png);'></td>			<td style='background-image:url(images/btn_toggle_on_5.png);'><img /></td>			<td width='9px' style='background-image:url(images/btn_toggle_on_6.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/btn_toggle_on_7.png);'><img /></td>			<td style='background-image:url(images/btn_toggle_on_8.png);'></td>			<td style='background-image:url(images/btn_toggle_on_9.png);'></td>			<td style='background-image:url(images/btn_toggle_on_10.png);'></td>			<td style='background-image:url(images/btn_toggle_on_11.png);'></td>			<td style='background-image:url(images/btn_toggle_on_12.png);'></td>			<td style='background-image:url(images/btn_toggle_on_13.png);'></td>		</tr>		<tr>			<td height='21px' style='background-image:url(images/btn_toggle_on_14.png);'></td>			<td style='background-image:url(images/btn_toggle_on_15.png);'></td>			<td style='background-image:url(images/btn_toggle_on_16.png);'></td>			<td style='background-image:url(images/btn_toggle_on_17.png);'></td>			<td style='background-image:url(images/btn_toggle_on_18.png);'></td>			<td style='background-image:url(images/btn_toggle_on_19.png);'></td>			<td style='background-image:url(images/btn_toggle_on_20.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = btn_toggle_on.attr('width');
		var _height = btn_toggle_on.attr('height');
		var _style = btn_toggle_on.attr('style') == undefined ? '' : btn_toggle_on.attr('style') + ' ';
		var _class = btn_toggle_on.attr('class') == undefined ? '' : btn_toggle_on.attr('class') + ' ';

		// replace template
		replaceDOM('#btn_toggle_on', btn_toggle_on_html);
		// re-selected id
		btn_toggle_on = $('#btn_toggle_on');
		// set class
		btn_toggle_on.attr('class', _class + btn_toggle_on.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		btn_toggle_on.attr('style', _style);
	}
	// Nine patch btn_toggle_on.9.png END
	// Nine patch chat_pop.9.png START
	var chat_pop = $('#chat_pop');
	if(chat_pop[0] != undefined) {
		var chat_pop_html = "<div id='chat_pop' class='nine-patch'>	<div style='top:8px; bottom:8px; left:8px; right:15px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='12px' height='23px' style='background-image:url(images/chat_pop_0.png);'></td>			<td style='background-image:url(images/chat_pop_1.png);'><img /></td>			<td width='19px' style='background-image:url(images/chat_pop_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/chat_pop_3.png);'><img /></td>			<td style='background-image:url(images/chat_pop_4.png);'></td>			<td style='background-image:url(images/chat_pop_5.png);'></td>		</tr>		<tr>			<td height='23px' style='background-image:url(images/chat_pop_6.png);'></td>			<td style='background-image:url(images/chat_pop_7.png);'></td>			<td style='background-image:url(images/chat_pop_8.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = chat_pop.attr('width');
		var _height = chat_pop.attr('height');
		var _style = chat_pop.attr('style') == undefined ? '' : chat_pop.attr('style') + ' ';
		var _class = chat_pop.attr('class') == undefined ? '' : chat_pop.attr('class') + ' ';

		// replace template
		replaceDOM('#chat_pop', chat_pop_html);
		// re-selected id
		chat_pop = $('#chat_pop');
		// set class
		chat_pop.attr('class', _class + chat_pop.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		chat_pop.attr('style', _style);
	}
	// Nine patch chat_pop.9.png END
	// Nine patch html_ul_li_icon.9.png START
	var html_ul_li_icon = $('#html_ul_li_icon');
	if(html_ul_li_icon[0] != undefined) {
		var html_ul_li_icon_html = "<div id='html_ul_li_icon' class='nine-patch'>	<div style='top:4px; bottom:4px; left:27px; right:3px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='27px' height='23px' style='background-image:url(images/html_ul_li_icon_0.png);'></td>			<td style='background-image:url(images/html_ul_li_icon_1.png);'><img /></td>			<td width='3px' style='background-image:url(images/html_ul_li_icon_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/html_ul_li_icon_3.png);'><img /></td>			<td style='background-image:url(images/html_ul_li_icon_4.png);'></td>			<td style='background-image:url(images/html_ul_li_icon_5.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = html_ul_li_icon.attr('width');
		var _height = html_ul_li_icon.attr('height');
		var _style = html_ul_li_icon.attr('style') == undefined ? '' : html_ul_li_icon.attr('style') + ' ';
		var _class = html_ul_li_icon.attr('class') == undefined ? '' : html_ul_li_icon.attr('class') + ' ';

		// replace template
		replaceDOM('#html_ul_li_icon', html_ul_li_icon_html);
		// re-selected id
		html_ul_li_icon = $('#html_ul_li_icon');
		// set class
		html_ul_li_icon.attr('class', _class + html_ul_li_icon.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		html_ul_li_icon.attr('style', _style);
	}
	// Nine patch html_ul_li_icon.9.png END
	// Nine patch popup_inline_error_above.9.png START
	var popup_inline_error_above = $('#popup_inline_error_above');
	if(popup_inline_error_above[0] != undefined) {
		var popup_inline_error_above_html = "<div id='popup_inline_error_above' class='nine-patch'>	<div style='top:21px; bottom:33px; left:30px; right:28px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='33px' height='21px' style='background-image:url(images/popup_inline_error_above_0.png);'></td>			<td style='background-image:url(images/popup_inline_error_above_1.png);'><img /></td>			<td width='45px' style='background-image:url(images/popup_inline_error_above_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/popup_inline_error_above_3.png);'><img /></td>			<td style='background-image:url(images/popup_inline_error_above_4.png);'></td>			<td style='background-image:url(images/popup_inline_error_above_5.png);'></td>		</tr>		<tr>			<td height='33px' style='background-image:url(images/popup_inline_error_above_6.png);'></td>			<td style='background-image:url(images/popup_inline_error_above_7.png);'></td>			<td style='background-image:url(images/popup_inline_error_above_8.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = popup_inline_error_above.attr('width');
		var _height = popup_inline_error_above.attr('height');
		var _style = popup_inline_error_above.attr('style') == undefined ? '' : popup_inline_error_above.attr('style') + ' ';
		var _class = popup_inline_error_above.attr('class') == undefined ? '' : popup_inline_error_above.attr('class') + ' ';

		// replace template
		replaceDOM('#popup_inline_error_above', popup_inline_error_above_html);
		// re-selected id
		popup_inline_error_above = $('#popup_inline_error_above');
		// set class
		popup_inline_error_above.attr('class', _class + popup_inline_error_above.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		popup_inline_error_above.attr('style', _style);
	}
	// Nine patch popup_inline_error_above.9.png END
	// Nine patch popup_window_bg.9.png START
	var popup_window_bg = $('#popup_window_bg');
	if(popup_window_bg[0] != undefined) {
		var popup_window_bg_html = "<div id='popup_window_bg' class='nine-patch'>	<div style='top:22px; bottom:42px; left:32px; right:32px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='48px' height='46px' style='background-image:url(images/popup_window_bg_0.png);'></td>			<td style='background-image:url(images/popup_window_bg_1.png);'><img /></td>			<td width='46px' style='background-image:url(images/popup_window_bg_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/popup_window_bg_3.png);'><img /></td>			<td style='background-image:url(images/popup_window_bg_4.png);'></td>			<td style='background-image:url(images/popup_window_bg_5.png);'></td>		</tr>		<tr>			<td height='48px' style='background-image:url(images/popup_window_bg_6.png);'></td>			<td style='background-image:url(images/popup_window_bg_7.png);'></td>			<td style='background-image:url(images/popup_window_bg_8.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = popup_window_bg.attr('width');
		var _height = popup_window_bg.attr('height');
		var _style = popup_window_bg.attr('style') == undefined ? '' : popup_window_bg.attr('style') + ' ';
		var _class = popup_window_bg.attr('class') == undefined ? '' : popup_window_bg.attr('class') + ' ';

		// replace template
		replaceDOM('#popup_window_bg', popup_window_bg_html);
		// re-selected id
		popup_window_bg = $('#popup_window_bg');
		// set class
		popup_window_bg.attr('class', _class + popup_window_bg.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		popup_window_bg.attr('style', _style);
	}
	// Nine patch popup_window_bg.9.png END
	// Nine patch scrollbar_handle.9.png START
	var scrollbar_handle = $('#scrollbar_handle');
	if(scrollbar_handle[0] != undefined) {
		var scrollbar_handle_html = "<div id='scrollbar_handle' class='nine-patch'>	<div style='top:31px; bottom:5px; left:7px; right:10px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='28px' height='30px' style='background-image:url(images/scrollbar_handle_0.png);'></td>			<td style='background-image:url(images/scrollbar_handle_1.png);'><img /></td>			<td width='17px' style='background-image:url(images/scrollbar_handle_2.png);'></td>			<td style='background-image:url(images/scrollbar_handle_3.png);'><img /><img /><img /></td>			<td width='29px' style='background-image:url(images/scrollbar_handle_4.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/scrollbar_handle_5.png);'><img /></td>			<td style='background-image:url(images/scrollbar_handle_6.png);'></td>			<td style='background-image:url(images/scrollbar_handle_7.png);'></td>			<td style='background-image:url(images/scrollbar_handle_8.png);'></td>			<td style='background-image:url(images/scrollbar_handle_9.png);'></td>		</tr>		<tr>			<td height='25px' style='background-image:url(images/scrollbar_handle_10.png);'></td>			<td style='background-image:url(images/scrollbar_handle_11.png);'></td>			<td style='background-image:url(images/scrollbar_handle_12.png);'></td>			<td style='background-image:url(images/scrollbar_handle_13.png);'></td>			<td style='background-image:url(images/scrollbar_handle_14.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/scrollbar_handle_15.png);'><img /></td>			<td style='background-image:url(images/scrollbar_handle_16.png);'></td>			<td style='background-image:url(images/scrollbar_handle_17.png);'></td>			<td style='background-image:url(images/scrollbar_handle_18.png);'></td>			<td style='background-image:url(images/scrollbar_handle_19.png);'></td>		</tr>		<tr>			<td height='4px' style='background-image:url(images/scrollbar_handle_20.png);'></td>			<td style='background-image:url(images/scrollbar_handle_21.png);'></td>			<td style='background-image:url(images/scrollbar_handle_22.png);'></td>			<td style='background-image:url(images/scrollbar_handle_23.png);'></td>			<td style='background-image:url(images/scrollbar_handle_24.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = scrollbar_handle.attr('width');
		var _height = scrollbar_handle.attr('height');
		var _style = scrollbar_handle.attr('style') == undefined ? '' : scrollbar_handle.attr('style') + ' ';
		var _class = scrollbar_handle.attr('class') == undefined ? '' : scrollbar_handle.attr('class') + ' ';

		// replace template
		replaceDOM('#scrollbar_handle', scrollbar_handle_html);
		// re-selected id
		scrollbar_handle = $('#scrollbar_handle');
		// set class
		scrollbar_handle.attr('class', _class + scrollbar_handle.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		scrollbar_handle.attr('style', _style);
	}
	// Nine patch scrollbar_handle.9.png END
	// Nine patch textfield_selected.9.png START
	var textfield_selected = $('#textfield_selected');
	if(textfield_selected[0] != undefined) {
		var textfield_selected_html = "<div id='textfield_selected' class='nine-patch'>	<div style='top:10px; bottom:17px; left:16px; right:16px;'>		Entry Content	</div>	<table cellpadding='0' cellspacing='0'>		<tr>			<td width='16px' height='32px' style='background-image:url(images/textfield_selected_0.png);'></td>			<td style='background-image:url(images/textfield_selected_1.png);'><img /></td>			<td width='16px' style='background-image:url(images/textfield_selected_2.png);'></td>		</tr>		<tr>			<td style='background-image:url(images/textfield_selected_3.png);'><img /></td>			<td style='background-image:url(images/textfield_selected_4.png);'></td>			<td style='background-image:url(images/textfield_selected_5.png);'></td>		</tr>		<tr>			<td height='39px' style='background-image:url(images/textfield_selected_6.png);'></td>			<td style='background-image:url(images/textfield_selected_7.png);'></td>			<td style='background-image:url(images/textfield_selected_8.png);'></td>		</tr>	</table></div>";

		// get attrs
		var _width = textfield_selected.attr('width');
		var _height = textfield_selected.attr('height');
		var _style = textfield_selected.attr('style') == undefined ? '' : textfield_selected.attr('style') + ' ';
		var _class = textfield_selected.attr('class') == undefined ? '' : textfield_selected.attr('class') + ' ';

		// replace template
		replaceDOM('#textfield_selected', textfield_selected_html);
		// re-selected id
		textfield_selected = $('#textfield_selected');
		// set class
		textfield_selected.attr('class', _class + textfield_selected.attr('class'));
		// set style
		if (_width != undefined && _height != undefined) {
			_style += 'width:' + _width + '; height:' + _height;
		} else if (_width != undefined) {
			_style += 'width:' + _width;
		} else if (_height != undefined) {
			_style += 'height:' + _height;
		}
		textfield_selected.attr('style', _style);
	}
	// Nine patch textfield_selected.9.png END
});