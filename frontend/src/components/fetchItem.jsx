
import { useEffect } from "react";
import { fetchStatusActions } from "../store/fetchingItemsSlice";
import {useDispatch, useSelector} from "react-redux";
import { itemAction } from "../store/itemsSlice";

const FetchItems=()=>{
    const FetchStatus=useSelector((store)=>store.fetchStatus);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(FetchStatus.fetchDone)return;

        const controller=new AbortController();
        const signal=controller.signal;
        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:9898/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{
            
            dispatch(fetchStatusActions.markFetchingFinished());
            dispatch(fetchStatusActions.markFetchDone());
           dispatch(itemAction.addInitialItems(items[0]));
        });
        
        return ()=>{
            controller.abort();
        };


    },[FetchStatus]);
    return(
        <>
        
        </>
    )
}
export default FetchItems;