export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  
  export const verifyPassword = (pw) => {
    //check empty password field
    if (pw == "") {
      return { status: false, msg: "**Fill the password please!" };
    }
  
    //minimum password length validation
    if (pw.length < 8) {
      return {
        status: false,
        msg: "**Password length must be atleast 8 characters"
      };
    }
  
    //maximum length of password validation
    if (pw.length > 15) {
      return {
        status: false,
        msg: "**Password length must not exceed 15 characters"
      };
    }
    return { status: true, msg: "Valid password" };
  };
  