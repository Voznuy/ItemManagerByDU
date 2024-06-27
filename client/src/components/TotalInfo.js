import React, {useContext} from "react";
import {serviceCounter} from "../utils/counters";
import {StoreContext} from "../store/store";
import refreshGif from "../images/icons8-refresh.gif"
import {observer} from "mobx-react";

function Loader(){
    return <img src={refreshGif} alt=".." style={{height: '20px'}}/>
}
function TotalInfo() {
    // const items = store.items

    const store = useContext(StoreContext)
    const {items, pending} = store

    const counterPC = () => {
        return serviceCounter(items, 1)
    }
    const counterSZ = () => {
        return serviceCounter(items, 2)
    }

    return(
        <div className={"search-handlers"}>
            <div className={"info-total"} >
            Всього: {pending? <Loader /> : items.length}
            </div>
            <div className={"info-sz"}>&#10687; - пежежна служба: {pending? <Loader /> :counterPC()}</div>
            <div className={"info-sz"}>&#10687; - служба зв'язку: {pending?<Loader /> : counterSZ()}</div>
            <div className={"info-sz"}>&#10687; - кес: {pending? <Loader /> :counterCIZ()}</div>
            <div className={"info-sz"}>&#10687; - речова служба: {pending? <Loader /> :counterRC()}</div>
            <div className={"info-sz"}>&#10687; - рао: {pending? <Loader /> :counterRAO()}</div>
            <div className={"info-sz"}>&#10687; - тзо: {pending? <Loader /> :counterTZO()}</div>
            <div className={"info-sz"}>&#10687; - медична служба: {pending? <Loader /> :counterMC()}</div>
        </div>
    )
}

export default observer(TotalInfo)