export const publicationYears = () =>{
    let yearsOptions = []
    Array.from({length: new Date().getFullYear() - 1900+1}, (_,i) =>{
        const year = 1900 + i
        const yearObj = {value: year, label: year}
        yearsOptions.push(yearObj)
    })

    return yearsOptions
}