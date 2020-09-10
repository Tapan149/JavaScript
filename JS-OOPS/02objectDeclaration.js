var person = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(typeof person.fullName);
  var person = {
    firstName: "John",
    lastName : "Doe",
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(typeof person.fullName);


  