import axios from 'axios';
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {

    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("error message: ", error.message);
            return error.message;
        } else {
            console.log("unnexpected error: ", error);
            return "An unexpected error occurred";
        }
        
    }
};