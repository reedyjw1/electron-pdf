import ListItemComponent from "./ListItemComponent"
import {VscListUnordered, VscFiles} from "react-icons/vsc"
import { useState } from "react";

function ActionBarComponent(props) {

    const ICON_SIZE = 36;
    
    const [selected, setSelected] = useState(0);

    function returnToParent(value) {
        setSelected(value)
        props.parentCallback(value);
    }

    return (
        <div className="flex flex-col place-items-center">
            <ListItemComponent icon={<VscFiles size={ICON_SIZE}/>} onClick={() => returnToParent(0)} selected={selected === 0 ? true : false }/>
            <ListItemComponent icon={<VscListUnordered size={ICON_SIZE}/>} onClick={() => returnToParent(1)} selected={selected === 1 ? true : false }/>
        </div>
    )
}

export default ActionBarComponent;