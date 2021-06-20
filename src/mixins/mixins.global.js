import { mapGetters } from "vuex";

const globalMixins = {
    computed: {
        ...mapGetters({
            user: "users/getUser",
        }),
        isAuthenticated() {
            if (this.user == null || this.user == undefined)
                return false;
            
            return Object.getOwnPropertyNames(this.user).length != 0;
        },
    }
};

export default globalMixins;