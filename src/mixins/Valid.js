export default {
    methods: {
        ValidName(Name) {
            if (!Name.length) {
                return { valid: false, error: "Name is Required" }
            }
            else if (!Name.match(/^[A-Za-z\s]+$/)) {
                return { valid: false, error: "name Should contain only alphabets" }
            }
            return { valid: true, error: null }
        },
        ValidEmail(Email) {
            if (!Email.length) {
                return { valid: false, error: "Email is Required" }
            }
            else if (!Email.match(/^\w+([.-]?\w+)*@\w+([_.-]?\w+)*\.\w{2,3}$/)) {
                return { valid: false, error: "Enter Valid Email" }
            }
            return { valid: true, error: null }
        },
        ValidPassword(Password) {
            if (!Password.length) {
                return { valid: false, error: "Password is Required" }
            }
            else if (Password.length < 6) {
                return { valid: false, error: "Password is Short" }
            }
            return { valid: true, error: null }
        }
    }
}