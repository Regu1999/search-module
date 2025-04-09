import HistoryCard from "./ui/HistoryCard";
import Recomended from "./Recomended";
import { fetchProduct, searchFood } from "../util/http.js"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
const SearchedHistory = () => {
    const { data:product, isLoading, isError } = useQuery({
        queryKey: ["foods"],
        queryFn: fetchProduct
    });
    
    return <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Search History</h2>
            <button className="yellow-Btn">Clear</button>
        </div>
        {isLoading && <h5 style={{textAlign:'center'}}>Loading...</h5>}
        {product &&
            <>{product?.searchHistroy.length===0?<h5 style={{textAlign:'center'}}>No history.</h5>:
                <div className="flex-container">
                    <HistoryCard foods={product.searchHistroy} />
                </div>
            }
                <div>
                    <Recomended foods={product.recomended} />
                </div>
            </>
        }
    </>
}

export default SearchedHistory