function clock(hour, minute, second) {
  let _hour = hour;
  let _minute = minute;
  let _second = second;

  setInterval(() => {
    if (_second == 60) {
      _minute = _minute + 1;
      _second = 0;
    }

    if (_minute == 60) {
      _hour = _hour + 1;
      _minute = 0;
      _second = 0;
    }

    if (_hour == 24) {
      _hour = 0;
      _minute = 0;
      _second = 0;
    }

    console.log(`24 HOUR FORMAT : ${_hour}:${_minute}:${_second}`);
    console.log(
      `12 HOUR FORMAT : ${
        _hour > 12 ? Math.abs(_hour - 12) : _hour
      }:${_minute}:${_second} ${_hour >= 12 ? "PM" : "AM"}`
    );

    _second = _second + 1;
  }, 1000);
}

const currentTimeMinutes = new Date().getMinutes();
const currentTimeSeconds = new Date().getSeconds();
const currentTimeHour = new Date().getHours();

clock(currentTimeHour, currentTimeMinutes, currentTimeSeconds);
// clock(17, 59, 55);
// clock(23, 59, 55);
