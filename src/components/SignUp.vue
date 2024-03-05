<template>
    <div class="main">
        <div class="register">
            <h1>SignUp</h1>
            <div id="content">
                <input type="text" id="UserName" placeholder="Enter Your Name" v-model="this.details.UserName">
                <span class="error-msg" v-if="error.UserName">{{ this.error.UserName }}</span>
                <input type="email" id="Email" placeholder="Enter Your Email" v-model="this.details.Email">
                <span class="error-msg" v-if="error.Email">{{ this.error.Email }}</span>
                <input type="password" id="Password" placeholder="Enter Your Password" v-model="this.details.Password">
                <span class="error-msg" v-if="error.Password">{{ this.error.Password }}</span>
            </div>
            <button type="submit" @click="SignUp">Sign Up</button>
            <router-link to="/SignIn"> <a>Login</a> </router-link>
        </div>

        <div id="snackbar" v-if="snackbar">Register Successfully..</div>

    </div>
</template>

<script>
import "../css/SignUp.css"
import ValidMixin from "../mixins/Valid.js"
export default {
    name: 'SignUp',
    mixins: [ValidMixin],
    data() {
        return {
            details: {
                UserName: '',
                Email: '',
                Password: ''
            },
            error: {
                UserName: "",
                Email: "",
                Password: ""
            },
            openModal: false,
            snackbar: false
        }
    },
    methods: {
        SignUp() {
            let Name = this.ValidName(this.details.UserName);
            let Email = this.ValidEmail(this.details.Email);
            let Password = this.ValidPassword(this.details.Password);
            if (!Name.valid || !Email.valid || !Password.valid) {
                this.error.UserName = Name.error;
                this.error.Email = Email.error;
                this.error.Password = Password.error;
                return;
            }   
            else {
                this.error.UserName = null;
                this.error.Email = null;
                this.error.Password = null;
                let existingData = JSON.parse(localStorage.getItem("user_info")) || [];
                if (existingData) {
                    // let result=existingData.find(existingData => 
                    //     existingData.Email==this.details.Email
                    // )
                    // if (!result) {
                    existingData.push(this.details);
                    localStorage.setItem("user_info", JSON.stringify(existingData))
                    console.log(existingData)

                    this.myFunction();
                    // }
                    // else{
                    //     this.error.Email="Email already Exists";
                    //     return;
                    // }
                }
            }
        },
        myFunction() {
            this.snackbar = true;
            setTimeout(function () {
                this.snackbar = false;
            }, 2000);
        }
    },
}
</script>

<style scoped>
#snackbar {
    visibility: visible;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: green;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 15px;
    /* bottom: 30px; */
    font-size: 17px;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
</style>