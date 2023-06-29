"use client"

import { User } from "@prisma/client";
import Tooltip from "./ToolTip";
import { CiSaveDown2 } from 'react-icons/ci'
import UseWatchLater from "../hooks/useWatchLater";
import { useCallback } from 'react';

interface WatchLaterButtonProps {
    postId: string
    currentUser?: User | null
    setIsLoading: (value: boolean) => void
}

const WatchLaterButton: React.FC<WatchLaterButtonProps> = ({ postId, currentUser, setIsLoading }) => {
    const { hasWatchedLater, toggleWatchLater } = UseWatchLater({ postId, currentUser, });

    const handleToggle = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
        setIsLoading(true);
        await toggleWatchLater(e); 
        setIsLoading(false);
    }, [setIsLoading, toggleWatchLater]);
    return (
        <div onClick={handleToggle}>
            <Tooltip text={hasWatchedLater ? "unsave watch later" : "save watch later"}>
                <span className="sm:p-1 rounded">
                    <CiSaveDown2 size={25} color={hasWatchedLater ? 'red' : 'black'} />
                </span>
            </Tooltip>
        </div>
    )
}

export default WatchLaterButton