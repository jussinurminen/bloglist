const dummy = ( ) => {
  return 1
}

const totalLikes = ( blogs ) => {
  return blogs.reduce(function (sum, currentValue) {
    return sum + currentValue.likes
  }, 0)
}

module.exports = {
  dummy,
  totalLikes
}