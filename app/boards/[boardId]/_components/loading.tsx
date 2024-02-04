import { Skeleton } from "@/components/ui/skeleton";
import { Loader } from "lucide-react";
import { Participants, ParticipantsSkeleton } from "./participants";
import { Info, InfoSkelton } from "./info";
import { ToolBar, ToolBarSkeleton } from "./toolbar";
export const Loading = () => {
    return (
        <main className="h-full relative w-full bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
            <InfoSkelton />
            <ParticipantsSkeleton />
            <ToolBarSkeleton />
        </main>
    )
}