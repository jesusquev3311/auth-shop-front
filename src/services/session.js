import Api from "@/services/API";

export const login = async (url, user) => {
    const logged = await Api().post(url, user);

    return logged;
};

export const logout = async (url) => Api.get(url);
