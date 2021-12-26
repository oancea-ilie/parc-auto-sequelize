import viewLogin from "./viewLogin.js";

export default  class viewRegister{
    constructor(){
        this.body = document.querySelector('body');

        this.setHeader();
        this.setMain();

        this.loginBtn = document.querySelector('.login-btn')
        this.loginBtn.addEventListener('click',this.handleLoginBtn);

        this.registerBtn = document.querySelector('.sign-btn');
        this.registerBtn.addEventListener('click',this.handleRegisterBtn);
    }

    setHeader=()=>{
        this.body.innerHTML  ='';
        this.body.innerHTML +=
        `
        <section class="login-header">
            <h1>Register</h1>
        </section>

        `;
    }

    setMain=()=>{
        this.body.innerHTML +=
        `
        <section class="login-container">
            
            <p>Name:</p>
            <input type="text">
            <p>Password:</p>
            <input type="password">
            <p>Email:</p>
            <input type="text">
            <p>Phone:</p>
            <input type="tel">
            <p>Address:</p>
            <input type="text">

            <section class="login-btns">
                <a href="#" class="sign-btn">Sign In</a>
                <a href="#" class="login-btn">Login In</a>
            </section>
        </section>

        `;
    }

    handleLoginBtn=()=>{
        let nou = new viewLogin();
    }

    handleRegisterBtn=()=>{
        // add
    }

    
}