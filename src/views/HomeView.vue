<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <ShopLogin />
    </div>
</template>

<script>
// @ is an alias to /src
import ShopLogin from "@/components/login-form.vue";

export default {
    name: "HomeView",
    components: {
        ShopLogin,
    },
};
</script>
