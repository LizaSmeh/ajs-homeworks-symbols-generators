export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    const list = Array.from(this.members);

    for (const item of list) {
      yield item;
    }
  }
}
