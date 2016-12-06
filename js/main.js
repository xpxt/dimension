app.scene.load = function () {
	window.document.body.style.background = '#000';
	app.scene.menu ();
}

app.scene.menu = function () {
	app.wipe ();
	app.create.block ({ fill: '#f00', h: 20, w: 500, x: 300, y: 600, z: 1 }).load ();
	app.create.block ({ fill: '#f00', h: 20, w: 300, x: 820, y: 560, z: 1 }).load ();

	app.create.box ({ fill: '#bbf', h: 200, w: 400, x: 300, y: 400 }).load ();
	app.create.box ({ fill: '#bbf', h: 200, w: 400, x: 700, y: 400 }).load ();
	app.create.box ({ fill: '#bbf', h: 200, w: 400, x: 300, y: 200 }).load ();
	app.create.box ({ fill: '#bbf', h: 200, w: 400, x: 700, y: 200 }).load ();

	let hero = app.create.unit ({ h: 85, i: app.i.pussy, speed: 5, w: 25, x: 500, y: 400, z: 2 });
		hero.load ();

	app.create.animation ({ a: app.a.pussy_move, delay: 150, get stop () { return !hero.animation.walk; }, h: 85, i: app.i.pussy, link: hero, x: 100, y: 100, w: 25, z: 2 }).load ();

	//app.create.animation ({ a: app.a.pussy_say, delay: 150, get stop () { return !hero.animation.say; }, h: 85, i: app.i.pussy, link: hero, x: 100, y: 100, w: 25, z: 2 }).load ();
}
