class Validators {
  static isNotEmpty(value: any): string | boolean {
    if (typeof value !== undefined && !value) {
      return 'Should not be empty'
    } else {
      return true
    }
  };

  static minLength(value: string): string | boolean {
    if (typeof value !== undefined && value?.length < 5) {
      return 'minimum 5 character'
    } else {
      return true
    }
  };

  static maxLength(value: string): string | boolean {
    if (typeof value !== undefined && value?.length > 50) {
      return 'maximum 50 character'
    } else {
      return true
    }
  };

  static onlyLetters(value: any): boolean {
    return typeof value !== "undefined" ?? !!value.match(/^[a-zA-Z]+$/)
  }

  static min(value: number): string | boolean {
    if (value < 18) {
      return 'min value is 18';
    } else {
      return true;
    }
  }

  static max(value: number): string | boolean {
    if (value > 100) {
      return 'max value is 100';
    } else {
      return true;
    }
  }

  static onlyNumbers(value: any): string | boolean {
    return typeof value !== "undefined" ?? !!value.match(/^[0-9]+$/)
  }

  static isEmail(value: any): boolean {
    let lastAtPos = value.lastIndexOf("@");
    let lastDotPos = value.lastIndexOf(".");
    return lastAtPos < lastDotPos &&
      lastAtPos > 0 &&
      value.indexOf("@@") === -1 &&
      lastDotPos > 2 &&
      value.length - lastDotPos > 2;

  }
}

export default Validators;
