<template>
    <div class="container">
        <h1 class="title is-1">
            Products Page
        </h1>

        <productSearch />

        <template v-if="products">
            <div class="columns">
                <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                />
            </div>
        </template>
    </div>
</template>

<script>
import productSearch from "@/components/products-search.vue";
import productCard from "@/components/product-card.vue";

export default {
    name: "ShopProducts",
    components: { productSearch, productCard },
    data() {
        return {
            products: [],
        };
    },

};
</script>

<style>

</style>
