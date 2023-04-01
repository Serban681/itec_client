import { useState } from "react"

export const useDaysWoked = () => {
    const [totalDays, setTotalDays] = useState(0)

    const calculateTotalDays = (startDate) => {
        const date1 = new Date()
        const date2 = new Date(startDate)
        const diffTime = Math.abs(date2 - date1)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        setTotalDays(diffDays)
    }

    return {totalDays, calculateTotalDays}
}