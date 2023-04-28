import { useState } from 'react'

const useOpen = () => {
    const [open, setOpen] = useState(false)

    const handleClick = (value)=>{
        setOpen(value)
    }

    return {open , handleClick}
}

export default useOpen