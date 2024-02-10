import { EllipseLayer } from "@/types/Canvas"
import { LayerPreview } from "./layer-preview"
import { colorToCss } from "@/lib/utils"


interface EllipseProps {
    id: string
    layer: EllipseLayer
    onPointerDown: (e: React.PointerEvent, id: string) => void
    selectionColor?: string
}

const Ellipse = ({ id, layer, onPointerDown, selectionColor }: EllipseProps) => {
    return (
        <ellipse
            className="drop-shadow-md"
            onPointerDown={(e) => onPointerDown(e, id)}
            style={{
                transform: `translate(
        ${layer.x}px,
        ${layer.y}px
    )`
            }}
            cx={layer.width / 2}
            cy={layer.height / 2}
            rx={layer.width / 2}
            fill={layer.fill ? colorToCss(layer.fill) : "#000"}
            stroke={selectionColor || "transparent"}
            strokeWidth={"1"}
        />
    )
}

export default Ellipse