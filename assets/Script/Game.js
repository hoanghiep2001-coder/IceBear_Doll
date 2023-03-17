let isDone;
const Game = cc.Class({
  extends: cc.Component,

  properties: {
    background: cc.Node,
    background2: cc.Node,
    overlay: cc.Node,
    overlayContent: cc.Node,
    Hand: cc.Node,
    character: cc.Node,
    characterHand: cc.Node,
    characterBody: cc.Node,
    characterFace: cc.Node,
    characterShirt: cc.Node,
    characterHair: cc.Node,
    NextButton: cc.Node,
    NextButton2: cc.Node,
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
    Hair1: cc.Node,
    Hair2: cc.Node,
    Hair2_Sub: cc.Node,
    Hair3: cc.Node,
    Hair3_Sub: cc.Node,
    Hair4: cc.Node,
    Hair4_Sub: cc.Node,
    ShopItem1: cc.Node,
    ShopItem2: cc.Node,
    ShopItem3: cc.Node,
    ShopItem4: cc.Node,
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

    this.NextButton.on("touchend", () => {
      this.ShopItem1.getComponent(cc.Animation).play("Item_1_ChangeShop_Anim");
      this.ShopItem2.getComponent(cc.Animation).play("Item_2_ChangeShop_Anim");
      this.ShopItem3.getComponent(cc.Animation).play("Item_3_ChangeShop_Anim");
      this.ShopItem4.getComponent(cc.Animation).play("Item_4_ChangeShop_Anim");

      this.scheduleOnce(() => {
        this.ShopItem1.getComponent(cc.Animation).play("Item_1_Anim");
        this.ShopItem2.getComponent(cc.Animation).play("Item_2_Anim");
        this.ShopItem3.getComponent(cc.Animation).play("Item_3_Anim");
        this.ShopItem4.getComponent(cc.Animation).play("Item_4_Anim");
        this.NextButton.getComponent(cc.Animation).play("ButtonAnim2");

        this.ItemDress1.active = false;
        this.ItemDress2.active = false;
        this.ItemDress3.active = false;
        this.ItemDress4.active = false;
        this.ItemHair1.active = true;
        this.ItemHair2.active = true;
        this.ItemHair3.active = true;
        this.ItemHair4.active = true;
      }, 1)
    });

    this.ItemHair1.on("touchend", () => {
      this.characterHair.active = false;
      this.NextButton2.active = true;
      this.Hair2.active = false;
      this.Hair2_Sub.active = false;
      this.Hair3.active = false;
      this.Hair3_Sub.active = false;
      this.Hair4.active = false;
      this.Hair4_Sub.active = false;
      this.Hair1.active = true;
    });

    this.ItemHair2.on("touchend", () => {
      this.characterHair.active = false;
      this.NextButton2.active = true;
      this.Hair1.active = false;
      this.Hair3.active = false;
      this.Hair3_Sub.active = false;
      this.Hair4.active = false;
      this.Hair4_Sub.active = false;
      this.Hair2.active = true;
      this.Hair2_Sub.active = true;
    });

    this.ItemHair3.on("touchend", () => {
      this.characterHair.active = false;
      this.NextButton2.active = true;
      this.Hair1.active = false;
      this.Hair2.active = false;
      this.Hair2_Sub.active = false;
      this.Hair4.active = false;
      this.Hair4_Sub.active = false;
      this.Hair3.active = true;
      this.Hair3_Sub.active = true;
    });

    this.ItemHair4.on("touchend", () => {
      this.characterHair.active = false;
      this.NextButton2.active = true;
      this.Hair1.active = false;
      this.Hair2.active = false;
      this.Hair2_Sub.active = false;
      this.Hair3.active = false;
      this.Hair3_Sub.active = false;
      this.Hair4.active = true;
      this.Hair4_Sub.active = true;
    });

    this.NextButton2.on("touchend", () => {
      this.NextButton2.getComponent(cc.Animation).play("ButtonAnim2");
      this.ShopItem1.getComponent(cc.Animation).play("Item_1_ChangeShop_Anim");
      this.ShopItem2.getComponent(cc.Animation).play("Item_2_ChangeShop_Anim");
      this.ShopItem3.getComponent(cc.Animation).play("Item_3_ChangeShop_Anim");
      this.ShopItem4.getComponent(cc.Animation).play("Item_4_ChangeShop_Anim");

      this.scheduleOnce(() => {
        this.ShopItem1.active = false;
        this.ShopItem2.active = false;
        this.ShopItem3.active = false;
        this.ShopItem4.active = false;
        this.character.getComponent(cc.Animation).play("Character_Anim");
      }, 1);

      this.scheduleOnce(() => {
          this.background.active = false;
          this.background2.active = true;
          this.overlay.active = true;
          this.overlayContent.active = true;
      }, 1.8)
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
