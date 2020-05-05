let tags = []
        fetch('https://spaceflightnewsapi.net/api/v1/blogs?news_site=planetarysociety')
          .then(r => r.json())
          .then(data => {
            tagsSort(data)
  

        }).catch(err => console.log(err))


        let tagsSort = (data) =>
        {
          for(let o = 0; o < data.docs.length;o++)
            {
            for(let i = 0;i < data.docs[o].tags.length;i++)
        
          {
            let tempIndex = tags.findIndex(tag => tag.tag === data.docs[o].tags[i])
            console.log(data.docs[o].tags[i])
            console.log(tempIndex)
          if(tempIndex === -1)
          {
              let newObj = new Object()
              newObj.tag = data.docs[o].tags[i]
              newObj.count = 0
              tags.push(newObj)
          }
          else
          {
            console.log("found")
              tags[tempIndex].count++
          }}
        }
        
          
          console.log(tags.sort(function(a,b){return b.count - a.count}))
        }