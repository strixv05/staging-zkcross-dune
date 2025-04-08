import axios from "axios";

export const baseUrl = "https://api.zkcross.network/api/v1";

const BK_ENDPOINT = "https://soon-market-place.onrender.com/api";

export async function createNftApi({ name, description, imageUrl, createdBy, price, royalty, nftAddress }: { name: string; description: string; imageUrl: string; createdBy: string; price: number; royalty: number; nftAddress: string }) {
    const response = await axios.post(`${BK_ENDPOINT}/nft/new`, { name, description, imageUrl, createdBy, price, royalty, nftAddress }, { headers: { "ngrok-skip-browser-warning": "true" } });
    return response?.data;
}

export async function getAllNftsApi({ page, limit }: { page: number; limit: number }) {
    const response = await axios.get(`${BK_ENDPOINT}/nft/all`, { headers: { "ngrok-skip-browser-warning": "true" }, params: { page, limit } });
    return response?.data;
}
