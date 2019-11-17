class User{
    constructor(email,pass){
        console.log(email)
        console.log(pass)
        this.adm = false
    }
    isAdmin(){
        console.log(`Adm: ${this.adm}`)
    }
}

class Admin extends User{
    constructor(email,pass){
        super(email,pass)
        this.adm = true
    }
}

const NewUser = new User('email@user.com','pass123')
NewUser.isAdmin() // Return should be false

const NewAdmin = new Admin('email@adm.com','pass321')
NewAdmin.isAdmin() // Return should be true