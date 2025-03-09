class CustomArray {
  arrayBuffer = null;
  array = null;
  byteSize = null;
  len = 0;
  constructor(size, byteSize) {
    this.byteSize = byteSize;
    this.arrayBuffer = new ArrayBuffer(size * (byteSize / 8));
    switch (byteSize) {
      case 8:
        this.array = new Uint8Array(this.arrayBuffer);
        break;
      case 16:
        this.array = new Uint16Array(this.arrayBuffer);
        break;
      case 32:
        this.array = new Uint32Array(this.arrayBuffer);
        break;
      default:
        throw Error('Given View Size is not matching! Supported: 8, 16, 32');
    }
  }
  length() {
    return this.len;
  }
  size() {
    return this.array.length;
  }
  push(value) {
    if (this.len >= this.size()) {
      throw Error('Array out of bound Error!');
    }
    this.array[this.len] = value;
    this.len++;
  }
  pop() {
    if (this.len > 0) {
      this.array[this.len - 1] = 0;
      this.len--;
    } else {
      throw Error('Nothing to pop!');
    }
  }
  insertAt(value, index) {
    if (index >= this.size()) {
      throw Error('Index out of bound Error!');
    }
    this.array[index] = value;
    if (index >= this.len) this.len = index + 1;
  }
  shift() {
    if (this.len > 0) {
      for (let i = 1; i < this.len; i++) {
        this.array[i - 1] = this.array[i];
      }
      this.array[this.len - 1] = 0;
      this.len--;
    } else {
      throw Error('Nothing to shift!');
    }
  }
  unshift(values) {
    if (values.length + this.len <= this.size()) {
      for (let i = this.len - 1; i >= 0; i--) {
        this.array[values.length + i] = this.array[i];
      }
      for (let i = 0; i < values.length; i++) {
        this.array[i] = values[i];
      }
    } else {
      throw Error('Array out of bound Error!');
    }
    this.len += values.length;
  }
  find(index) {
    if (index >= this.len || index < 0) {
      throw Error('Index out of bound! Error');
    }
    return this.array[index];
  }
  findIndex(value) {
    for (let i = 0; i < this.len; i++) {
      if (this.array[i] === value) return i;
    }
    return -1;
  }
  findLastIndex(value) {
    for (let i = this.len - 1; i >= 0; i--) {
      if (this.array[i] === value) return i;
    }
    return -1;
  }
  slice(start, end = this.len) {
    if (start > end) return [];
    const arr = new Array();
    for (let i = start; i < end; i++) {
      arr.push(this.array[i]);
    }
    return arr;
  }
  splice(start, deleteCount = 0, items) {
    const moveTo = items.length - deleteCount;
    if (moveTo > 0 && this.len + moveTo > this.size())
      throw Error('Array out of bound Error!');
    if (moveTo > 0) {
      for (let i = this.len + moveTo; i >= start; i--) {
        this.array[i + moveTo] = this.array[i];
      }
    } else if (moveTo < 0) {
      for (let i = start; i < this.len + moveTo; i++) {
        this.array[i] = this.array[i - moveTo];
      }
    }
    for (let i = 0; i < items.length; i++) {
      this.array[start + i] = items[i];
    }
    for (let i = this.len + moveTo; i < this.len; i++) {
      this.array[i] = 0;
    }
    this.len += moveTo;
  }
  print() {
    console.log(this.array);
  }
}

module.exports = CustomArray;
