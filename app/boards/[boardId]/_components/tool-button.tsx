"use client"

import { Button } from "@/components/ui/button"
import { Hint } from "@/components/ui/hint"
import { LucideIcon } from "lucide-react"

interface ToolButtonProps {
    label: string
    icon: LucideIcon
    onClick: () => void
    isActive?: boolean
    isDisabled?: boolean
}

export const ToolButton = ({
    label,
    icon: Icon,
    onClick,
    isActive,
    isDisabled
}: ToolButtonProps) => {
    return (
        <Hint label={label} side="right" sideOffset={14}>
            <Button
                disabled={isDisabled}
                onClick={onClick}
                size='icon'
                variant={isActive ? "boardActive" : "board"}>
                <Icon />
            </Button>
        </Hint>
    )
}