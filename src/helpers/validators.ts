class Validators {
  static isNotEmpty(value: any): string | boolean {
    if (typeof value !== undefined && !value) {
      return 'Should not be empty'
    } else {
      return true
    }
  };

  static minLength(value: string): string | boolean {
    if (value && value?.length < 5) {
      return 'min 5 character'
    } else {
      return true
    }
  };

  static maxLength(value: string): string | boolean {
    if (value && value?.length > 50) {
      return 'max 50 character'
    } else {
      return true
    }
  };

  static onlyLetters(value: any): boolean {
    return typeof value !== "undefined" ?? !!value.match(/^[a-zA-Z]+$/)
  }

  static min(value: number): string | boolean {
    if (value && value < 18) {
      return 'min value is 18';
    } else {
      return true;
    }
  }

  static max(value: number): string | boolean {
    if (value && value > 100) {
      return 'max value is 100';
    } else {
      return true;
    }
  }

  static onlyNumbers(value: any): string | boolean {
    return typeof value !== "undefined" ?? !!value.match(/^[0-9]+$/)
  }

  static isEmail(value: any): string | boolean {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value && !value.toLowerCase().match(regEx)) {
      return 'Is not valid email e.g bob@app.com'
    } else {
      return true
    }
  }

  static isPhoneNumber(value: any): string | boolean {
    const regEx = /\+\d{5}[ ]?(\d+(-| )?)+/;
    if (value && !value.toLowerCase().match(regEx)) {
      return 'Is not valid phone number e.g +1234567890'
    } else {
      return true
    }
  }
}

export default Validators;
