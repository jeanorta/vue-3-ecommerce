interface User{
    name: string;
    email: string|null;
    state: "Active"|"Inactive"
}

const user: User = { //constante de la interfase
    name: "Jeanmar",
    email: "jeanorta@gmail.com",
    state: "Active"
}

const user2: User = { //constante de la interfase
    name: "santiago",
    email: "jeanorta@gmail.com",
    state: "Active"
}

function saludo(user:User){
    console.log("Hola "+user.name);
}

function saludo2(users:Array<User>){
    users.forEach(u => {
        console.log("Hola "+u.name);
    });
    
}

//saludo(user);
//saludo2([user,user2])

// Ahora con classes

class Cuser implements User {
    name: string;
    email: string|null;
    state: "Active"|"Inactive";

    constructor(name: string,email:string, state: "Active"|"Inactive"){
        this.name = name;
        this.email = email;
        this.state = state;        
    }
}

const user3: Cuser = new Cuser(
    "Juan",
    "juan@gmail.com",
    "Active"
)

function greeting(u: Cuser){
    if (u instanceof Cuser){
        console.log("Hello "+u.name);
    }
} 

greeting(user3);