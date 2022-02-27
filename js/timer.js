class Timer {
  construct() {
    this._minutes = 0;
    this._seconds = 0;
  }
  
  get minutes() {
    return this._minutes;
  }
  
  set minutes(value) {
    this._minutes = value;
  }
  
  get seconds() {
    return this._seconds;
  }
  
  set seconds(value) {
    this._seconds = value;
  }
  
  get time() {
    return [this.minutes, this.seconds];
  }
  
  countSecond() {
    if (this.seconds > 0) {
      this.seconds--;
      return true;
    } else if (this.seconds == 0 && this.minutes > 0) {
      this.minutes--;
      this.seconds = 59;
      return true;
    }
    return false;
  }
}
