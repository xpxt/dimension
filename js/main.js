app.scene.load = function () {
	window.document.body.style.background = '#000';
	app.scene.menu ();
}

app.scene.menu = function () {
	app.wipe ();

	//app.create.block ({ fill: '#f00', h: 20, w: 800, x: 300, y: 600, z: 1 }).load ();
	//app.create.block ({ fill: '#f00', h: 10, w: 800, x: 300, y: 190, z: 1 }).load ();

	let s = 24;
	let h = Math.floor (canvas.height / s);
	let w = Math.floor (canvas.width / s);
	for (let i = 0; i < w; i++) {
		for (let j = 0; j < h; j++) {
			let x = i * s;
			let y = j * s;
			app.create.sprite ({ h: s, i: app.i.grass, w: s, x: x, y: y }).load ();
		}
	}

	let hero = app.create.unit ({ h: 85, i: app.i.pussy, speed: 5, w: 25, x: 500, y: 400, z: 2 });
		hero.load ();

	app.create.animation ({ a: app.a.pussy_move, delay: 150, get stop () { return !hero.animation.walk; }, h: 85, i: app.i.pussy, link: hero, x: 100, y: 100, w: 25, z: 2 }).load ();

	app.create.animation ({ a: app.a.pussy_say, delay: 150, get stop () { return !hero.animation.say; }, h: 85, i: app.i.pussy, link: hero, x: 100, y: 100, w: 25, z: 2 }).load ();
}
