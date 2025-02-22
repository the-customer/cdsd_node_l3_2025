const adminUser = {
    username: "admin",
    password: "password" //utilser bcrypt en production pour hasher le mot de passe
}

export const loginForm = (req, res) =>{
    res.render("auth/login",{
        title: "Connexion",
        error:undefined
    });
}

export const login = (req, res) =>{
    const {username,password} = req.body;

    if(!username.trim() || !password.trim()){
        return res.status(404).send("Login et/ou mot de passe requis!")
    }
    if(username === adminUser.username && password === adminUser.password){
        req.session.isAuthenticated = true;
        res.redirect("/admin");
    }else{
        res.render("auth/login",{
            title: "Connexion",
            error:"Identifiants incorrects!!!"
        })
    }
}

export const logout = (req,res) =>{
    req.session.destroy(()=>{
        res.redirect("/login")
    })
}