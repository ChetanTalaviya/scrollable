
// You can write more code here

/* START OF COMPILED CODE */

class ProfilePrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// cont
		const cont = scene.add.container(-200, -300);
		this.add(cont);

		this.cont = cont;

		/* START-USER-CTR-CODE */
		this.oScene = scene;
		this.oScene.add.existing(this);

		// Write your code here.

		/* END-USER-CTR-CODE */
	}


	/** @type {Phaser.GameObjects.Container} */
	cont;

	/* START-USER-CODE */

	setData() {

		this.oScene.load.scenePlugin({
			key: 'rexuiplugin',
			url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
			sceneKey: 'rexUI'
		});

		const COLOR_PRIMARY = 0x4e342e;
		this.COLOR_LIGHT = 0x937d2e;
		const COLOR_DARK = 0x260e04;
		for (var i = 0; i < 10; i++) {

			var tempCard = this.oScene.add.image(i + 200, i + 400, "dino");
			this.cont.add(tempCard);

			var tempCard = this.oScene.add.image(i + 200, i + 500, "dino");
			this.cont.add(tempCard);
			var tempCard = this.oScene.add.image(i + 200, i + 600, "dino");
			this.cont.add(tempCard);

			var tempCard = this.oScene.add.image(i + 200, i + 700, "dino");
			this.cont.add(tempCard);

			var tempCard = this.oScene.add.image(i + 200, i + 800, "dino");
			this.cont.add(tempCard);

			var tempCard = this.oScene.add.image(i + 200, i + 900, "dino");
			this.cont.add(tempCard);
		}
		console.log(this.cont)


		this.addTankScrollbar();
	}
	addTankScrollbar() {
		var scrollablePanel = this.oScene.rexUI.add.scrollablePanel({
			x: 300,
			y: 200,
			width: 200,
			height: 500,

			scrollMode: 0,

			background: this.oScene.rexUI.add.roundRectangle(0, 0, 2, 2, 10),

			panel: {
				child: this.createGrid(this),
				mask: {
					mask: true,
					padding: 1,
				}
			},

			slider: {
				track: this.oScene.rexUI.add.roundRectangle(0, 0, 20, 10, 10),
				thumb: this.oScene.rexUI.add.roundRectangle(0, 0, 16, 60, 3, this.COLOR_LIGHT),
				// position: 'left'
			},

			mouseWheelScroller: {
				focus: false,
				speed: 0.1
			},

			space: {
				left: 10,
				right: 10,
				top: 10,
				bottom: 10,

				panel: 10,
			}
		})
			.layout()


	}
	createGrid(scene) {
		console.log(scene, this.oScene)
		// Create table body
		var self = this;
		var sizer = this.oScene.rexUI.add.fixWidthSizer({
			space: {
				left: 3,
				right: 3,
				top: 3,
				bottom: 3,
				item: 8,
				line: 8,
			},
		})

			.addBackground(this.oScene.rexUI.add.roundRectangle(0, 0, 10, 10, 0))
		this.oScene.rexUI.add.roundRectangle(0, 0, 16, 60, 3, this.COLOR_LIGHT),
			sizer.add(this.oScene.rexUI.add.label({
				width: 200, height: 200,
				// background: scene.add.image(0, 0, 'commontankbg'),
				// icon: scene.add.image(0, 0, "dino").setScale(0.2).setInteractive({ useHandCursor: true }),
				icon: this.oScene.add.container(0, 0).add(self.cont),//add containr here

				align: 'center',
				space: {
					left: 10,
					right: 10,
					top: 10,
					bottom: 10,
				}
			}));

		return sizer;
	}




	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
