class Storage {
  constructor(props = {}) {
    this.keyName = props.key || 'app';
  }

  setData(data) {
    return localStorage.setItem(this.keyName, JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem(this.keyName)) || {};
  }
}

export default Storage;
