import viewRegister from "./viewRegister.js";


export default  class viewLogin{
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
            <h1>Login</h1>
        </section>

        `;
    }

    setMain=()=>{
        this.body.innerHTML +=
        `
        <section class="login-container">
            
            <p>Email:</p>
            <input type="text">
            <p>Password:</p>
            <input type="password">

            <section class="login-btns">
                <a href="#" class="login-btn">Login In</a>
                <a href="#" class="sign-btn">Sign In</a>
            </section>
        </section>

        `;
    }

    handleLoginBtn=()=>{
        // add
    }

    handleRegisterBtn=()=>{
        let nou = new viewRegister();
    }
}