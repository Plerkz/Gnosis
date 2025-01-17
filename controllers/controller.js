const controller = {};


//render controllers
controller.renderIndex = (req, res) => {
    const name = req.session.name;
    res.render('index', {
        name
    });
}

controller.renderLogin = (req, res) => {
    res.render('login');
}

controller.renderSingup = (req, res) => {
    res.render('signup');
}

controller.renderCuestionarios = (req, res)=> {
    res.render('cuestionarios');
}

controller.renderR_invalido = (req, res)=> {
    res.render('r-invalido');
}

controller.renderL_invalido = (req, res)=> {
    res.render('l-invalido');
}

controller.renderL1_invalido = (req, res)=> {
    res.render('l1-invalido');
}

controller.renderNiños = (req, res) => {
    res.render('ninos');
}

controller.renderConexion = (req, res) => {
    res.render('conexion');
}

controller.renderEspacio = (req, res) => {
    res.render('espacio');
}


controller.adduser = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pw = req.body.password;

    console.log(name, email, pw);

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:", err);
            return res.status(500).send("Error en el servidor");
        }

        conn.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                console.log("Ha ocurrdio un error al validar datos", err);
                return res.status(500).send("Error en el servidor");
            }

            if (results.length > 0) {
                return res.render('r-invalido');
            }

            conn.query('INSERT INTO users(name, email, pw) VALUES (?, ?, ?)', [name, email, pw], (err, results) => {
                if (err) {
                    console.error("Error al insertar los datos en la base de datos:", err);
                    return res.status(500).send("Error en el servidor");
                }

                req.session.name = name;
                res.redirect('cuestionarios');
            })
        })
    })
}

controller.loginuser = (req, res) => {
    const email = req.body.email;
    const pw = req.body.password;

    req.getConnection((err, conn) => {
        if (err) {
            console.error("Error al conectar con la base de datos:" ,err);
            return res.status(500).send("Error en el servidor");
        }

        conn.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
            if (err) {
                console.error('Erro al consultar la base de datos:', err);
                return res.status(500).send("Erroe en el servidor");
            }

            if (results.length === 0){
                res.render('l1-invalido');
            }   else {
                const user = results[0];
                if (user.pw === pw) {
                    const name = user.name;
                    req.session.name = name;
                    res.render('cuestionarios');
                } else {
                    res.render('l-invalido');
                }
            }
        })
    })

}

module.exports = controller;