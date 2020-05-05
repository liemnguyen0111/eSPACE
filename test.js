let tagCount = []

let tagCount = (data) =>
{
    let tempIndex = tagCount.findIndex(tag => tag.count === data.docs[index].tags[i])
    if(tempIndex === -1)
    {
        let newObj = new Object()
        newObj.tag = data.docs[index].tags[i]
        newObj.count = 0
        tagCount.push(newObj)
    }
    else
    {
        tagCount[tempIndex].count++
    }
}