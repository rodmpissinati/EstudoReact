import React from "react";
import {useLocation} from "react-router-dom";

function useQuery(){
    // No locatiom terá o search, e por ele poderemos manipular a query
    return new URLSearchParams(useLocation().serach)
}

function Video(){

    
    const query = useQuery()

    return(
        <div className="">

        <iframe width="560" height="315" src= {`https://www.youtube.com/embed/${query.get("v")}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
    )


}

export default Video;