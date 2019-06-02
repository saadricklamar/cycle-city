export const cleanBikePaths = (bikePaths) => {
    return bikePaths.networks.map(path => {
      const {company, href, id, location, name} = path;
      return ({
        company,
        href,
        id,
        location,
        name,
        favorited: false
      })
    })
  }