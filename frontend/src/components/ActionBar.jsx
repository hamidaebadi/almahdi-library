
const ActionBar = ({children}) => {
    return(
        <div className="fixed flex w-full gap-2 py-2 px-4 bg-white">
            {children}
        </div>
    )
}

export default ActionBar