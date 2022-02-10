const ListItemComponent = ( {icon,selected,onClick} ) => {

    return (
        <div onClick={onClick}>
            <div className={`flex place-content-center hover:text-[#d6c1d7] m-3 ${selected ? "text-[#FBFEF9]" : "text-[#b792b9]"}`}>
                {icon}
            </div>
        </div>
    )
}

export default ListItemComponent;