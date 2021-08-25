class AuthService{
    login(email, password) {
        return this.fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, 
                password
            })
        })
          .then(res => {
            if(res.type == 'success'){
                this.setToken(res.token) // Setting the token in localStorage
                return Promise.resolve(res); 
            } else {
                return Promise.reject(res)
            }
        })
    }
}