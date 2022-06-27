<template>
    <div class="shop-login">
        <form
            action=""
            class="form box col"
            @submit.prevent="userLogIn"
        >
            <div class="field">
                <label
                    class="label"
                    for="loginName"
                >Name
                    <div class="control">
                        <input
                            id="loginName"
                            v-model="user.loginName"
                            class="input"
                            type="text"
                            placeholder="LoginName"
                            name="loginName"
                        >
                    </div>
                </label>
            </div>

            <div class="field">
                <label
                    for="password"
                    class="label"
                >Password
                    <div class="control has-icons-left has-icons-right">
                        <input
                            v-model="user.password"
                            class="input is-success"
                            type="password"
                            placeholder="Passwordt"
                        >
                    </div>
                </label>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button
                        class="button is-link"
                    >
                        Login
                    </button>
                </div>
                <div class="control">
                    <router-link
                        type="reset"
                        class="button is-link is-light"
                        to="/register"
                    >
                        Register
                    </router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import { login } from "@/services/session";

export default {
    name: "ShopLogin",
    data() {
        return {
            user: {
                loginName: "",
                password: "",
            },
        };
    },
    methods: {
        async userLogIn() {
            await login("login", {
                loginName: this.user.loginName,
                password: this.user.password,
            })
                .then((response) => {
                    if (response.data.success === true) {
                        this.authenticated = true;
                        this.$noty.success("Login Successfully", {
                            killer: true,
                            timeout: 2000,
                            layout: "topRight",
                        });
                        // this.$router.push({ name: "Leads" });
                    } else {
                        this.$noty.error("Something went wrong!", {
                            killer: true,
                            timeout: 4000,
                            layout: "topRight",
                        });
                        // this.$router.push({ name: "Login" });
                    }
                }).catch((err) => console.log(err));
        },
    },
};
</script>

<style>

</style>
