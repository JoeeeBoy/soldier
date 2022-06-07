const soldier = {
  name: "Andrey",
  health: 10,
  weapon: {
    name: "ak47",
    bullets: 30,
  },
  supplies: 3,
  shoot: function () {
    if (this.weapon.bullets < 1) {
      console.log("обойма пуста. Перезаредитесь");
    }
    this.weapon.bullets--;
    console.log("бах-бах");
  },
  recharge: function () {
    if (this.supplies < 1) {
      console.log("обойма пуста. Перезаредитесь");
    }
    this.weapon.bullets = 30;
    this.supplies--;
    console.log("перезарядка...");
  },
  wound: function () {
    if (this.health < 1) {
      console.log("Ты проиграл");
    }
    this.health--;
    console.log("ранен");
  },
};
