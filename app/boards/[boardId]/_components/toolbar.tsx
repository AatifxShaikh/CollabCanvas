

export const ToolBar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <div>
                    adding
                </div>

                <div>
                    data
                </div>

                <div>
                    for
                </div>
                <div>
                    testing
                </div>

            </div>
            <div className="bg-white rounded-md flex p-1.5 flex-col items-center  shadow-md">
                <div>
                    Undo
                </div>
                <div>
                    redo
                </div>
            </div>
        </div>
    )
}
export const ToolBarSkeleton = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360] w-[52px] shadow-md rounded-md" />


    )
}