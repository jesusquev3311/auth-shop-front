<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ product.title }}
            </p>
        </header>

        <div class="card-content">
            <div class="content">
                <p>{{ product.description }}</p>
            </div>
        </div>
        <footer class="card-footer">
            <a
                href="#"
                class="card-footer-item"
            >Add</a>
            <a
                href="#"
                class="card-footer-item"
            >amount</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        product: {
            type: Object,
            default: () => {},
        },
    },
};
</script>

<style>

</style>
