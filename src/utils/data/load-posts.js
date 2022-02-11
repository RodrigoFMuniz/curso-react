export const loadPosts = async ()=>{
  const postsPromisse = fetch('https://jsonplaceholder.typicode.com/posts')
  const photosPromisse= fetch('https://jsonplaceholder.typicode.com/photos')

  const [posts, photos] = await Promise.all([postsPromisse,photosPromisse])
  const postsJson = await posts.json()
  const photosJson = await photos.json()

  const postsAndPhotos = postsJson.map((post,ind)=>{
    return {...post,cover:photosJson[ind].url}
  })

  return postsAndPhotos
 }