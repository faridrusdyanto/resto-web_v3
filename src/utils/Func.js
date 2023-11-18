/* eslint-disable curly */
const Func = {
  sum: arr => arr.reduce((acc, n) => acc + n, 0),
  validateDate(inputDate, multipleLine = false) {
    const date = new Date(inputDate);
    const today = new Date();

    if (this.isSameDay(date, today)) {
      return `Today,${multipleLine ? '\n' : ' '}${this.formatTime(date)}`;
    } else if (this.isSameDay(this.addDays(today, -1), date)) {
      return `Yesterday,${multipleLine ? '\n' : ' '}${this.formatTime(date)}`;
    } else if (this.isSameDay(this.addDays(today, 1), date)) {
      return `Tomorrow,${multipleLine ? '\n' : ' '}${this.formatTime(date)}`;
    } else {
      return `${this.formatDate(date)},${
        multipleLine ? '\n' : ' '
      }${this.formatTime(date)}`;
    }
  },

  isSameDay(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  },
  addDays(date, days) {
    const result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
  },
  formatDate(date) {
    return `${this.getDayOfWeek(date)} ${
      date.getMonth() + 1
    }, ${date.getFullYear()}`;
  },
  formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  },
  getDayOfWeek(date) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[date.getDay()];
  },
  number_only_input(num) {
    let formattedNum = num.replace(/[^0-9]/g, '');
    return formattedNum;
  },
  idrCurrency(amount) { 
    let value = `${amount}`
    if (value[0] === '0') {
      return '';
    } else if (value.length === 1 && value[0] === '0') {
      return '';
    } else {
      let valueFromInput = value;
      let newValueFromInput = valueFromInput.replace(/\./g, '');
      const valuetoBeUpdated = newValueFromInput
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d)+)/g, '.');
      return valuetoBeUpdated;
    }
  },
  formatCurrency(nominal, isInput) {
    if (isInput) {
      var letters = /^[A-Za-z]+$/;
      if (nominal.match(letters)) return '';
      else return this.idrCurrency(this.number_only_input(nominal));
    } else {
      if (isNaN(nominal) || nominal <= 0) {
        return 'Rp' + 0;
      } else {
        return (
          'Rp' + this.idrCurrency(this.number_only_input(nominal.toString()))
        );
      }
    }
  },
  toNumbers(priceString) {
    if (!priceString) {
      return 0;
    }
    priceString = priceString.split('.').join('');
    priceString = priceString.split(',').join('.');
    return Number(priceString.replace(/[^0-9.]/g, ''));
  },
};

export default Func;
