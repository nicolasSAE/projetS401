export const formulaire_contactValidation = (req, res, next) => {
    let email = req.body.email;
    let nom =  req.body.nom;
    let prenom = req.body.prenom;
    let message = req.body.message;
    console.log(email, nom, prenom, message);
    let isValid = true;
    let errorMsg;

    // Validation
    if (!email || !nom || !prenom || !message){
        errorMsg = "Une des informations est manquante";
        isValid = false;
    }


    console.log("validated : " + isValid);
    if (!isValid){
        res.status(400).send({success:1, data:errorMsg});
    } else {
        next();
    }
}