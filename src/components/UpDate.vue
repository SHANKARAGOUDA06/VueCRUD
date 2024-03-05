<template>
    <div class="Update">
        <span v-on:click="closetab()" class="close">&times;</span>
        <h1>Edit</h1>
        <div id="content">
            <input type="text" id="UserName" placeholder="Enter Your Name" v-model="this.details.UserName">
            <span class="error-msg" v-if="error.UserName">{{ this.error.UserName }}</span>
            <input type="email" id="Email" placeholder="Enter Your Email" v-model="this.details.Email">
            <span class="error-msg" v-if="error.Email">{{ this.error.Email }}</span>
            <input type="text" id="Password" placeholder="Enter Your Password" v-model="this.details.Password">
            <span class="error-msg" v-if="error.Password">{{ this.error.Password }}</span>
        </div>
        <button type="submit" @click="Save">Save</button>
    </div>
</template>

<script>
import ValidMixin from "../mixins/Valid.js"
export default {
    name: "UpDate",
    mixins: [ValidMixin],
    data() {
        return {
            details: {
                UserName: "",
                Email: "",
                Password: ""
            },
            error: {
                UserName: "",
                Email: "",
                Password: ""
            },
        }
    },
    props: {
        index: Number
    },
    methods: {
        Save() {
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

                let result =JSON.parse(localStorage.getItem("user_info"))
                result[this.index] = this.details;
                console.log(result[this.index])
                console.log(result)
                localStorage.setItem("user_info", JSON.stringify(result))
                window.location.reload();
            }
        },
        closetab() {
            this.$emit('close')
        }
    },
    created() {
        let result = JSON.parse(localStorage.getItem("user_info"));
        let user = result[this.index]
        this.details = user
    }
}
</script>
<style>
.Update {
    width: 100%;
    padding: 0 0 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.close {
    font-size: 28px;
    margin-left: 90%;
    margin-top: 0;
    cursor: pointer;
}
</style>