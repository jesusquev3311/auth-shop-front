import Api from "@/services/API";

export default {
    Products(url = "products") {
        return {
            getAll: () => Api().get(url),
            getOne: (id) => Api().get(`${url}/${id}`),
            createOne: (product) => Api().post(url, product),
            updateOne: (id, product) => Api().put(`${url}/${id}`, product),
            deleteOne: (id) => Api().delete(`${url}/${id}`),
        };
    },
};
