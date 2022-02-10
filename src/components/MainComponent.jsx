import ActionBarComponent from "./Sidebar/ActionBar/ActionBarComponent";
import PreviewerComponent from "./Sidebar/Previewer/PreviewerComponent";
import React, { useState } from "react";

function MainComponent(props) {

    // First Div = Actions (buttons to change what is shown in the previewer)
    // Second Div = PreviewerSidebar (thumbnails, table of contents, etc)
    // Third Div = Content Area for the pdf

    const [selected, setSelected] = useState(0);
    const callbackFunction = (childData) => {
        setSelected(childData)
    }

    function getComponent() {
        let component;
        switch(selected) {
            case 0:
                component = <p>1</p>
                break;
            case 1:
                component = <p>2</p>
                break;
            case 2:
                component = <p>3</p>
                break;
            case 3:
                component = <p>4</p>
                break;
            default:
                component = <p>1</p>
            
        }
        return component;
    }

    return (
        <div className="flex flex-row">
            <div className="flex flex-col bg-[#4A314D] h-screen w-16">
                <ActionBarComponent parentCallback={callbackFunction}/>
            </div>
            <div className="flex flex-col bg-[#F2F5F0] h-screen w-72">
                <PreviewerComponent/>
            </div>
            <div className="flex flex-col bg-[#FBFEF9] w-screen h-screen">
                {getComponent()}
            </div>
        </div>
            
    )
}
export default MainComponent;