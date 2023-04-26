

export const sumRow = (arr) => {
    return arr.reduce((acc, item) => {
        acc += Number(item.value)
        return acc
    }, 0)

}

export const sumColumn = (arr) => {
    return arr.reduce((acc, item) => {
       
        for(let i = 0; i<12; i++){
            const num = Number(item.months[i].value)
            acc[i] += num
        }

       return acc
    }, [0,0,0,0,0,0,0,0,0,0,0,0])

}

export const sumSuper = (arr) => {
    return arr.reduce((acc, item) => {
        acc += Number(item)
        return acc
    }, 0)

}

