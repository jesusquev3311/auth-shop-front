<template>
    <div class="container">
        <h1 class="title is-1">
            Products Page
        </h1>

        <productSearch @search="searchPRoduct($event)" />

        <template v-if="products">
            <div class="columns">
                <productCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    class="column mt-6"
                />
            </div>
        </template>
    </div>
</template>

<script>
import productSearch from "@/components/products-search.vue";
import productCard from "@/components/product-card.vue";
import ProductsService from "@/services/products";

export default {
    name: "ShopProducts",
    components: { productSearch, productCard },
    data() {
        return {
            products: [],
        };
    },
    mounted() { if (!this.data) this.getProducts(); },
    methods: {
        async getProducts() {
            const resp = await ProductsService.Products().getAll();
            console.log(resp, "here");
            this.products = resp.data;
        },
        searchPRoduct(payload) {
            const filtered = this.products.filter((product) => product.type === payload.type && product.name.toLowerCase().includes(payload.name));

            this.products = filtered.length > 0 ? filtered : this.getProducts();
        },
    },

};
</script>

<style>

</style>
