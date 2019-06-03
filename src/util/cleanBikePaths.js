export const cleanBikePaths = (bikePaths) => {
    return bikePaths.networks.map(path => {
      let onlyCityName = path.location.city.split(', ');
      if(onlyCityName.length > 1) {
        path.location.city = onlyCityName.shift();
      }
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