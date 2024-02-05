import { Circle, MousePointer, MousePointer2, Pen, Square, StickyNote, Type } from "lucide-react"
import { ToolButton } from "./tool-button"


export const ToolBar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => { }}
                    isActive={false} />
                <ToolButton
                    label="Sticky"
                    icon={StickyNote}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Rectangle"
                    icon={Square}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Ellipse"
                    icon={Circle}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Pen"
                    icon={Pen}
                    onClick={() => { }}
                    isActive={false}
                />
                <ToolButton
                    label="Text"
                    icon={Type}
                    onClick={() => { }}
                    isActive={false}
                />


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