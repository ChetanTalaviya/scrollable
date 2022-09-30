
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

    constructor() {
        super("Level");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorCreate() {

        // dinoContainer
        const dinoContainer = this.add.container(0, 0);

        this.dinoContainer = dinoContainer;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Container} */
    dinoContainer;

    /* START-USER-CODE */

    // Write more your code here
    preload() {
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            //url: 'src/plugin/rexuiplugin.js',
            sceneKey: 'rexUI'
        });
    }
    create() {

        this.editorCreate();
        const COLOR_PRIMARY = 0x4e342e;
        this.COLOR_LIGHT = 0x937d2e;
        const COLOR_DARK = 0x260e04;
       // this.addTankScrollbar();
       const profilePrefab = new ProfilePrefab(this, 289, 336);

        profilePrefab.setData();
        profilePrefab.addTankScrollbar();

    }
    addTankScrollbar() {
        var scrollablePanel = this.rexUI.add.scrollablePanel({
            x: 200,
            y: 200,
            width: 350,
            height: 500,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10),

            panel: {
                child: this.createGrid(this),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            slider: {
                track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10),
                thumb: this.rexUI.add.roundRectangle(0, 0, 16, 60, 3, this.COLOR_LIGHT),
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
        // Create table body
        var sizer = scene.rexUI.add.fixWidthSizer({
            space: {
                left: 3,
                right: 3,
                top: 3,
                bottom: 3,
                item: 8,
                line: 8,
            },
        })
            .addBackground(scene.rexUI.add.roundRectangle(0, 0, 10, 10, 0))
        for (var i = 0; i < 20; i++) {
            var tempCard = this.add.image(i + 100, i + 500, "dino");

            sizer.add(scene.rexUI.add.label({
                width: 200, height: 200,
                // background: scene.add.image(0, 0, 'commontankbg'),
                // icon: scene.add.image(0, 0, "dino").setScale(0.2).setInteractive({ useHandCursor: true }),
                icon: scene.add.container(0, 0).add(tempCard),//add containr here

                align: 'center',
                space: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10,
                }
            }));
        }
        return sizer;
    }




    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
