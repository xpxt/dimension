app.scene.load = function () {
	window.document.body.style.background = '#000';
	app.scene.menu ();
}

app.scene.menu = function () {
	app.wipe ();
	app.create.block ({ fill: '#f00', h: 20, w: 500, x: 300, y: 600 }).load ();
	app.create.box ({ fill: '#bbf', h: 200, w: 700, x: 200, y: 400 }).load ();
	app.create.unit ({ g: 5, h: 170, i: app.i.pussy, speed: 5, w: 50, x: 500, y: 400, z: 1 }).load ();
}
