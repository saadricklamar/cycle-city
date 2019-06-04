export const cleanBikePaths = bikePaths => {
  return bikePaths.networks.map(path => {
    let onlyCityName = path.location.city.split(", ");
    if (onlyCityName.length > 1) {
      path.location.city = onlyCityName.shift();
    }
    const { company, href, id, location, name } = path;
    return {
      company,
      href,
      id,
      location,
      name,
      favorited: false
    };
  });
};

// const websiteArray = [
//   'https://healthyridepgh.com/',
//   'https://www.jerseybikeshare.com/',
//   'https://www.jerseybikeshare.com/',
//   'https://skybikewpb.com/',
//   'https://www.kent.edu/recservices/flashfleet',
//   'https://www.jerseybikeshare.com/',
//   'https://www.jerseybikeshare.com/',
//   'https://www.jerseybikeshare.com/',
//   'https://www.jerseybikeshare.com/',
//   'https://www.jerseybikeshare.com/',
//   'https://www.we-cycle.org/',
//   'https://citibikemiami.com/',
//   'http://www.decobike.com/',
//   'https://battlecreek.bcycle.com/',
//   'https://desmoines.bcycle.com/',
//   'https://greenville.bcycle.com/',
//   'https://nashville.bcycle.com/',
//   'https://columbiacounty.bcycle.com/',
//   'https://rapidcity.bcycle.com/',
//   'https://bikewalksavannah.org/',
//   'none'
// ]
