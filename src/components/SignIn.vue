<template>
    <div class="main">
        <div class="register">
            <h1>SignIn</h1>
            <div id="content">
                <input type="email" id="Email" placeholder="Enter Your Email" v-model="this.details.Email">
                <span class="error-msg" v-if="error.Email">{{ this.error.Email }}</span>
                <input type="password" id="Password" placeholder="Enter Your Password" v-model="this.details.Password">
                <span class="error-msg" v-if="error.Password">{{ this.error.Password }}</span>
            </div>
            <button type="submit" @click="SignIn">Sign In</button>
            <span class="error-msg">{{ this.error.register }}</span>
            <router-link to="/"> <a>Sign Up</a> </router-link>
        </div>
    </div>
</template>

<script>
import "../css/SignUp.css"
import ValidMixin from "../mixins/Valid.js"
export default {
    name: 'SignIn',
    mixins: [ValidMixin],
    data() {
        return {
            details: {
                Email: '',
                Password: ''
            },
            error: {
                Email: "",
                Password: "",
                register: ""
            }
        }
    },
    methods: {
        SignIn() {
            let Email = this.ValidEmail(this.details.Email);
            let Password = this.ValidPassword(this.details.Password);
            if (!Email.valid || !Password.valid) {
                this.error.Email = Email.error;
                this.error.Password = Password.error;
                return;
            }
            else {
                this.error.UserName = null;
                this.error.Email = null;
                this.error.Password = null;

                let result = JSON.parse(localStorage.getItem("user_info"))
                if (result) {
                    let userlogin = result.find(result =>
                        result.Email == this.details.Email &&
                        result.Password == this.details.Password
                    )
                    if (userlogin) {
                        sessionStorage.setItem("User-Login", JSON.stringify(this.details))
                        this.$router.push({ path: "DashBoard" })
                    }
                    else {
                        this.error.register = "InValid User";
                    }
                }
                else {
                    this.error.register = "InValid User"
                }
            }
        }
    }

}
</script>

<style scoped></style>