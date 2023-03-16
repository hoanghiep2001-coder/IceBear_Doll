let isDone;
const Game = cc.Class({
  extends: cc.Component,

  properties: {
    Hand: cc.Node,
    characterHand: cc.Node,
    characterBody: cc.Node,
    characterFace: cc.Node,
    characterShirt: cc.Node,
    characterHair: cc.Node,
    NextButton: cc.Node,
    ItemDress1: cc.Node,
    ItemDress2: cc.Node,
    ItemDress3: cc.Node,
    ItemDress4: cc.Node,
    ItemHair1: cc.Node,
    ItemHair2: cc.Node,
    ItemHair3: cc.Node,
    ItemHair4: cc.Node,
    Dress1: cc.Node,
    Dress2: cc.Node,
    Dress3: cc.Node,
    Dress4: cc.Node,
    Coat2: cc.Node,
    Coat3: cc.Node,
    Coat4: cc.Node,
    Shoe1: cc.Node,
    Shoe2: cc.Node,
    Shoe3: cc.Node,
    Shoe4: cc.Node,
  },

  onLoad() {
    this.init();
  },

  init() {
    // get sound Of Game
    let AudioManager = this.getComponent("AudioManager");
    let clickSound = AudioManager.playClickMusic;

    // active hand after 0.6s (after shop's item ainm finish)
    this.handleActiveHand()
    // let keys = Object.keys(this.children)

    // 
    this.ItemDress1.on("touchend", () => {
        this.characterHand.active = true;
        this.characterShirt.active = false;
        this.Dress2.active = false;
        this.Dress3.active = false;
        this.Dress4.active = false;
        this.Shoe2.active = false;
        this.Shoe3.active = false;
        this.Shoe4.active = false;
        this.Coat2.active = false;
        this.Coat3.active = false;
        this.Coat4.active = false;
        this.Dress1.active = true;
        this.Shoe1.active = true;
        this.NextButton.active = true;
        this.hanldeRemoveHand();
    });

    this.ItemDress2.on("touchend", () => {
        this.characterShirt.active = false;
        this.characterHand.active = true;
        this.Dress2.active = false;
        this.Dress3.active = false;
        this.Dress4.active = false;
        this.Shoe2.active = false;
        this.Shoe3.active = false;
        this.Shoe4.active = false;
        this.Coat3.active = false;
        this.Coat4.active = false;
        this.Coat2.active = true;
        this.Dress2.active = true;
        this.Shoe2.active = true;
        this.NextButton.active = true;
        this.hanldeRemoveHand();
    });

    this.ItemDress3.on("touchend", () => {
        this.characterShirt.active = false;
        this.characterHand.active = false;
        this.Dress1.active = false;
        this.Dress2.active = false;
        this.Dress4.active = false;
        this.Shoe1.active = false;
        this.Shoe2.active = false;
        this.Shoe4.active = false;
        this.Coat2.active = false;
        this.Coat4.active = true;
        this.Coat3.active = true;
        this.Dress3.active = true;
        this.Shoe3.active = true;
        this.NextButton.active = true;
        this.hanldeRemoveHand();
    });

    this.ItemDress4.on("touchend", () => {
        this.characterShirt.active = false;
        this.characterHand.active = false;
        this.Dress1.active = false;
        this.Dress2.active = false;
        this.Dress3.active = false;
        this.Shoe1.active = false;
        this.Shoe2.active = false;
        this.Shoe4.active = false;
        this.Coat2.active = false;
        this.Coat3.active = false;
        this.Coat4.active = false;
        this.Dress4.active = true;
        this.Shoe4.active = true;
        this.NextButton.active = true;
        this.hanldeRemoveHand();
    });

    
  },

  handleActiveHand() {
    const delay = cc.delayTime(0.6);
    const callFuncAction = cc.callFunc(() => {
      this.Hand.active = true;
    }, this);

    const sequenceAction = cc.sequence(delay, callFuncAction);
    this.node.runAction(sequenceAction);
  },

  hanldeRemoveHand() {
    this.Hand.active = false;
  },

});
