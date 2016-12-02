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

	let hero = app.create.unit ({ h: 170, speed: 7, w: 50, x: 500, y: 400, z: 2 });
		hero.load ();

	app.create.animation ({ a: app.a.pussy_move, delay: 500, h: 170, i: app.i.pussy, link: hero, x: 100, y: 100, w: 50, z: 3 }).load ();


}
