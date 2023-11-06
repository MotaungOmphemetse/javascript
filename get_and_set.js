const student = {
    firstName : 'Omphemetse',

    //accessor property
    get getName(){
        return this.firstName;
    }

    /**
     * @param {string} newName
     */
    set changeName(newName){
        this.firstName=newName;

    }
    console.log(student.newName),

}
