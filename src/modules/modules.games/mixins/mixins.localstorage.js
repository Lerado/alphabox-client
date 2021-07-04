const localStorageManager = (localVars) => {
    let manager = {
        data() {
            return localVars;
        },
        watch: {},
        beforeMount() {
            Object.getOwnPropertyNames(this.$data).forEach(localVar => {
                let value = JSON.parse(localStorage.getItem(localVar));
                if (value)
                    this[localVar] = value
            })
        }
    };

    Object.getOwnPropertyNames(localVars).forEach(localVar => {
        manager.watch[localVar] = function (value) {
            localStorage.setItem(localVar, JSON.stringify(value));
        }
    });

    return manager;
};



export default localStorageManager;