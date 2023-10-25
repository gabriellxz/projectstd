import { useState } from "react"

export default function useModal() {
    
    const [open, setOpen] = useState(false)

    // function openModal() {
    //     setOpen(!open)
    // }

    // function closeModal() {
    //     setOpen(open)
    // }

    return{
        open,
        setOpen,
        // openModal
        // closeModal
    }
}