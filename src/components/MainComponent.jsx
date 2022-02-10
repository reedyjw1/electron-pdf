import PreviewerComponent from "./Sidebar/Previewer/PreviewerComponent";

function MainComponent(props) {

    // First Div = Actions (buttons to change what is shown in the previewer)
    // Second Div = PreviewerSidebar (thumbnails, table of contents, etc)
    // Third Div = Content Area for the pdf

    return (
        <div className="flex flex-row">
            <div className="bg-[#4A314D]">

            </div>
            <div className="w-64 fixed top-0 left-0 h-screen m-0 flex flex-col bg-white shadow-lg">
                <PreviewerComponent/>
            </div>
            <div className="ml-64 w-screen h-screen">
                
            </div>
        </div>
            
    )
}
export default MainComponent;