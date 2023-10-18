function sortAnArrayByTwoCriteria(array) {

    array.sort((a, b) => {
        const firstCriteria  = a.length - b.length
        const secondCriteria = a.localeCompare(b)
        return firstCriteria || secondCriteria
    })

    console.log(array.join('\n'));


}
sortAnArrayByTwoCriteria(['alpha',
    'beta',
    'gamma']
)
sortAnArrayByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
)
sortAnArrayByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']
)
