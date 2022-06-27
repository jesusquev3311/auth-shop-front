<template>
    <div class="shop-login">
        <form action="">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                    >
                </div>
            </div>

            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left has-icons-right">
                    <input
                        class="input is-success"
                        type="text"
                        placeholder="Text input"
                        value="bulma"
                    >
                    <span class="icon is-small is-left">
                        <i class="fas fa-user" />
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check" />
                    </span>
                </div>
                <p class="help is-success">
                    This username is available
                </p>
            </div>

            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">
                        Submit
                    </button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ShopLogin",
};
</script>

<style>

</style>
