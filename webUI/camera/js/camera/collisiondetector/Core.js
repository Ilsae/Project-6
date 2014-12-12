/**
 * Created by ronald on 06-11-14.
 */

function collides(a, b) {

	function px(str) {
		return Number(str.replace("px", ""));
	}

	return !(
		((px(a.style.top) + px(a.style.height)) < (px(b.style.top))) ||
		(px(a.style.top) > (px(b.style.top) + px(b.style.height))) ||
		((px(a.style.left) + px(a.style.width)) < px(b.style.left)) ||
		(px(a.style.left) > (px(b.style.left) + px(b.style.width)))
	);
}