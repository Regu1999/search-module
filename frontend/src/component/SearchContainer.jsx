import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi";
import { LuFilter } from "react-icons/lu";

import SearchedHistory from "./SearchedHistory";
import SearchResult from "./SearchResult";
import { searchFood } from "../util/http"

const SearchContainer = () => {
    const search = useRef();
    const [searchValue, setSearchValue] = useState("");
    let searchData

    const { data: searchedData, isLoading, isError } = useQuery({
        queryKey: ["foods", { query: searchValue }],
        queryFn: () => searchFood(searchValue),
        enabled: searchValue != ""
    })
    if (isLoading) {
        searchData = <h5 style={{ textAlign: 'center' }}>Loading...</h5>;
    }

    if (searchedData) {
        searchData = searchedData.length == 0 ? <h5 style={{ textAlign: 'center' }}>no resut founded.</h5> : <SearchResult foods={searchedData} />
    }

    const handleSearchValue = () => {
        setTimeout(() => {
            setSearchValue(search.current.value);
        }, 3000)
    }

    return <>
        <div>
            <button><IoMdClose className="icon-style" /></button>
            <h2>
                <label htmlFor="search">Search</label>
            </h2>
            <div className="search-container">
                <div className="search-child">
                    <div><IoSearchSharp className="icon-style" /></div>
                    <input ref={search} onChange={handleSearchValue} type="search" name="search" placeholder="Search here" id="search" />
                    <button><HiOutlineMicrophone className="icon-style" /></button>
                </div>
                <div>
                    <button><LuFilter className="icon-style" /></button>
                </div>
            </div>
        </div>
        {searchValue === "" ? <SearchedHistory /> : searchData}

    </>
}

export default SearchContainer