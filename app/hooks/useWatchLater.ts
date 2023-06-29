import { useRouter } from "next/navigation"
import useLoginModal from "./useLoginModal"
import { useCallback, useMemo } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"
import { User } from "@prisma/client"

interface IUseWatchLater {
    postId: string
    currentUser?: User | null
}

const UseWatchLater = ({ postId, currentUser }: IUseWatchLater) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const hasWatchedLater = useMemo(() => {
        const list = currentUser?.watchlaterIds || [];
        return list.includes(postId);
    }, [currentUser, postId])
    

    const toggleWatchLater = useCallback(async(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (!currentUser) {
            return loginModal.onOpen();
        }

        try {
            let request;

            if (hasWatchedLater) {
                request = () => axios.delete(`/api/watchlater/${postId}`)
            } else {
                request = () => axios.post(`/api/watchlater/${postId}`)
            }   

            await request();
            router.refresh();
            toast.success('Success');
        } catch (error) {
            toast.error('Something went wrong')
        }
    },[currentUser, hasWatchedLater, postId, loginModal, router])

    return {
        hasWatchedLater, toggleWatchLater
    }
}

export default UseWatchLater
