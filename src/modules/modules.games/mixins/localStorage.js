const localVars = {
    selectedLanguage: ""
};

const localStorageManager = {
    data() {
        return localVars;
    },
    watch: {},
    beforeMount() {
        Object.getOwnPropertyNames(this.$data).forEach(localVar => {
            let value = localStorage.getItem(localVar);
            if (value)
                this[localVar] = value
        })
    }
};

Object.getOwnPropertyNames(localVars).forEach(localVar => {
    localStorageManager.watch[localVar] = function(value) {
        localStorage.setItem(localVar, value);
    }
});

export default localStorageManager;