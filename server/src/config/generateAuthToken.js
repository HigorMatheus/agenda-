const generateAuthToken = function (user) {
    const token = jwt.sign({ 
        id: user.id, 
        email: user.email, 
        // isAdmin: user.role == 'admin'
    }, AUTH_UTILS.JWT_KEY);
    return token;
}