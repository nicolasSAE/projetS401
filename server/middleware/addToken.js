addTokenToHeader = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        sessionStorage.setItem('accessToken',token);
    }
    next();
};