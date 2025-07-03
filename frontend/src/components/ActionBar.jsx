
const ActionBar = ({children}) => {
    return(
        <div className="fixed flex mt-15 w-full gap-2 py-2 px-4">
            {children}
        </div>
    )
}

export default ActionBar