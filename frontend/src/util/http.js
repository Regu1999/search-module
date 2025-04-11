import { QueryClient } from "@tanstack/react-query"
export const queryClient = new QueryClient();
// const api_url = "http://localhost:3000/";
const api_url = "https://search-module.vercel.app//";
export const fetchProduct = async () => {
    try {
        const response = await fetch(api_url, {
            method: 'GET',
            credentials: 'include'
        });
        const data = await response.json();
        return data
    } catch (error) {
        throw { message: "Unable to find data" };
    }
}

export const searchFood = async (query) => {
    try {
        const response = await fetch(`${api_url}search?search=${query}`, {
            method: "GET",
            credentials: "include"
        });
        const data = await response.json();
        return data
    } catch (error) {
        throw { message: "unable to find data, Try again later!" }
    }
}