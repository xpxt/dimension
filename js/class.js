app.create.block = function (_) {
	let block = app.create.box (_);
		block.type = 'block';

	return block;
}

app.create.unit = function (_) {
	let unit = app.create.sprite (_);
		unit.animation = _.animation || {};
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
			} else {
				unit.animation.walk = false;
			}
		}

		unit.gravity = function () {
			if (unit.g) {
				if (!unit.blocked ()) {
					unit.vy += (unit.vy + unit.h + unit.g < canvas.height) ? unit.g : 0;
				}
			}
		}

		unit.tick = function () {
			unit.use ();
			unit.vector ();
			unit.gravity ();
			unit.go ();
		}

		unit.use = function () {
			if (app.key[' '] && !unit.animation.walk) {
				unit.animation.say = true;
			} else {
				unit.animation.say = false;
			}
		}

		unit.vector = function () {
			if (app.key.A) {
				unit.vx = (unit.vx > 0) ? unit.vx - unit.speed : unit.vx;
				unit.animation.walk = true;
			}

			if (app.key.D) {
				unit.vx = (unit.vx + unit.w < canvas.width) ? unit.vx + unit.speed : unit.vx;
				unit.animation.walk = true;
			}

			if (app.key.S) {
				unit.vy = (unit.vy + unit.h < canvas.height) ? unit.vy + unit.speed : unit.vy;
				unit.animation.walk = true;
			}

			if (app.key.W) {
				unit.vy = (unit.vy > 0) ? unit.vy - unit.speed : unit.vy;
				unit.animation.walk = true;
			}
		}

	return unit;
}
