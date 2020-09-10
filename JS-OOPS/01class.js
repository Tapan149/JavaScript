class User {

    constructor(name) {
      // invokes the setter
      this.aname = name;
    }
  
    get name() {
      return this.aname;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this.aname = value;
    }
  
  }
  
  let user = new User("John");
  alert(user.name); // John
  
  user = new User(""); // Name is too short.