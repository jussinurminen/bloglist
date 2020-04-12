const dummy = ( ) => {
  return 1
}

const totalLikes = ( blogs ) => {
  return blogs.reduce(function (sum, currentValue) {
    return sum + currentValue.likes
  }, 0)
}

const favoriteBlog = ( blogs ) => {
  // palauttaa blogin, jolla eniten tykkäyksiä. Jos näitä monta niin palauttaa jonkun niistä
  const likesMax = Math.max.apply(null, blogs.map(function(o) { return o.likes }))
  //const maxLikesObject = blogs.filter(function(o) { return o.likes === likesMax })[0]
  const maxLikesObject = blogs.filter(function(o) { return o.likes === likesMax })
  return maxLikesObject
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}