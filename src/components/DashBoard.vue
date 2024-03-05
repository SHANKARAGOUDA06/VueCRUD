<template>
    <div>
        <div class="btnDiv">
            <button type="button" class="btn btn-dark" @click="logOut">LogOut</button>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Sl No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in details" :key="index">
                        <th>{{ index + 1 }}</th>
                        <td>{{ item.UserName }}</td>
                        <td>{{ item.Email }}</td>
                        <td>{{ item.Password }}</td>
                        <td><button type="button" class="btn btn-primary" @click="Update(index)">Edit</button></td>
                        <td><button type="button" class="btn btn-danger" @click="Delete(index)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <modal :show="openModal">
        <UpDate :index=index @close="close" />
    </modal>
</template>

<script>
import modal from "./Modal.vue"
import UpDate from "./UpDate.vue"
export default {
    name: "DashBoard",
    data() {
        return {
            details: {},
            openModal: false,
            index: null
        }
    },
    components: {
        modal,
        UpDate
    },
    created() {
        let user = sessionStorage.getItem("User-Login");
        if (user) {
            let result = JSON.parse(localStorage.getItem("user_info"))
            this.details = result
        } else {
            this.$router.push({ path: "SignIn" });
        }

    },
    methods: {
        logOut() {
            sessionStorage.removeItem("User-Login");
            this.$router.push({ path: "SignIn" });
        },
        Update(index) {
            this.index = index;
            this.openModal = true;
        },
        close() {
            this.openModal = false;
        },
        Delete(i) {
            let result = JSON.parse(localStorage.getItem("user_info"))
            result.splice(i, 1)
            localStorage.setItem('user_info', JSON.stringify(result));
            window.location.reload();
        }
    }
}
</script>

<style scoped>
.btn-dark {
    width: 8%;
    margin-right: 20px;
}

.btnDiv {
    margin: 0;
    margin-top: 12px;
    display: flex;
    justify-content: end;
}
</style>