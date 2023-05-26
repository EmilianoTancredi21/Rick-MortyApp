export default (data) => {
    let errors = {};

    if(!data.email.includes("@")){
        errors.email = "Email is not valid";
    }
    if(!data.email){
        errors.email2 = "Email is required";
    }
    if(data.email.length > 35){
        errors.email3 = "Email is too long";
    }
    if(!/\d/.test(data.password)){
        errors.password = "Password must contain at least one number";
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.password2 = "Password must be between 6 and 10 characters";
    }
    return errors;
}