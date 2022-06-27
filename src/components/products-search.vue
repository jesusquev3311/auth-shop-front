/* eslint-disable vuejs-accessibility/form-control-has-label */
<template>
    <div class="products-search">
        <div class="field has-addons">
            <p class="control">
                <span class="select">
                    <label for="type">
                        <select
                            v-model="type"
                            name="type"
                        >
                            <option value="books">Books</option>
                            <option value="Music">Music</option>
                            <option value="Games">Games</option>
                        </select>
                    </label>
                </span>
            </p>
            <p class="control is-expanded">
                <label for="query">
                    <input
                        v-model="query"
                        class="input"
                        type="text"
                        placeholder="Search by name"
                    >
                </label>
            </p>
            <p class="control">
                <button
                    class="button"
                    @click="searchHandler()"
                >
                    Search
                </button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductSearch",
    data() {
        return {
            query: "",
            type: "Category",
        };
    },
    methods: {
        searchHandler() {
            this.$emit("search", { query: this.query, type: this.type });
        },
    },
};
</script>

<style>

</style>
