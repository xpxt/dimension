app.create.block = function (_) {
	let block = app.create.box (_);
		block.type = 'block';

	return block;
}

app.create.unit = function (_) {
	let unit = app.create.sprite (_);
		unit.control = _.control;
		unit.g = _.g;
		unit.hp = _.hp || [1, 1];
		unit.speed = _.speed || 1;
		unit.vx = _.vx || unit.x;
		unit.vy = _.vy || unit.y;

		unit.blocked = function () {
			for (let id in app.object) {
				if (app.object[id].type == 'block') {
					if (app.get.binbox (unit, app.object[id])) { return true; }
				}
			}
			return false;
		}

		unit.go = function () {
			unit.vr = app.get.ab ({ x: unit.x, y: unit.y }, { x: unit.vx, y: unit.vy });
			if (unit.vr > unit.speed) {
				let v = app.get.abr ({ x: unit.x, y: unit.y }, { x: unit.vx, y: unit.vy }, unit.speed);
				let x = unit.x;
				let y = unit.y;
				unit.x = v.x;
				unit.y = v.y;
				if (!unit.blocked ()) {
					unit.move (v.x, v.y);
				} else {
					unit.x = x;
					unit.y = y;
					unit.vx = x;
					unit.vy = y;
				}
			}
		}

		unit.goto = function (event) {
			switch (unit.control) {
				case 'key':
					if (event.type == 'keydown') {
						unit.going = true;
						switch (event.keyCode) {
							case 65:
								unit.vx = (unit.vx > 0) ? unit.vx - unit.speed : unit.vx;
								unit.vy -= unit.g * unit.g / unit.vr;
								break;
							case 68:
								unit.vx = (unit.vx + unit.w < canvas.width) ? unit.vx + unit.speed : unit.vx;
								unit.vy -= unit.g * unit.g / unit.vr;
								break;
							case 83:
								unit.vy = (unit.vy + unit.h < canvas.height) ? unit.vy + unit.speed : unit.vy;
								break;
							case 87:
								unit.vy = (unit.vy > 0) ? unit.vy - unit.speed : unit.vy;
								break;
						}
						console.log (event.keyCode);
					}
					break;

				case 'mouse':
					if (event.type == 'mousedown') {
						unit.going = true;
						unit.vx = event.x - 0.5 * unit.w;
						unit.vy = event.y - 0.5 * unit.h;
					}
					break;
			}
		}

		unit.gravity = function () {
			if (unit.g) {
				if (!unit.blocked ()) {
					unit.vy += (unit.vy + unit.h + unit.g < canvas.height) ? unit.g : 0;
				}
			}
		}

		unit.keydown = function (event) {
			unit.goto (event);
		}

		unit.keyup = function (event) {
			unit.going = false;
		}

		unit.mousedown = function (event) {
			unit.goto (event);
		}

		unit.mousemove = function (event) {
			if (unit.going) { unit. goto (event); }
		}

		unit.mouseup = function () {
			unit.going = false;
		}

		unit.tick = function () {
			unit.go ();
			unit.gravity ();
		}

	return unit;
}
