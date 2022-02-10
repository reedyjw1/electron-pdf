import PreviewerComponent from "./Sidebar/Previewer/PreviewerComponent";

function MainComponent(props) {

    // First Div = Actions (buttons to change what is shown in the previewer)
    // Second Div = PreviewerSidebar (thumbnails, table of contents, etc)
    // Third Div = Content Area for the pdf

    return (
        <div className="flex flex-row">
            <div className="flex flex-col bg-[#4A314D] h-screen w-16">
                
            </div>
            <div className="flex flex-col bg-[#F2F5F0] h-screen w-72">
                <PreviewerComponent/>
            </div>
            <div className="flex flex-col bg-[#FBFEF9] w-screen h-screen">
                
            </div>
        </div>
            
    )
}
export default MainComponent;