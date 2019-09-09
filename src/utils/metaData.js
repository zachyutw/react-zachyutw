const metaData = {};
export const metaImage = meta => {
  let imageUrl = null;
  if (meta['og:image']) {
    imageUrl = meta['og:image'];
  } else if (meta['twitter:image:src']) {
    imageUrl = meta['twitter:image:src'];
  } else if (meta['twitter:image']) {
    imageUrl = meta['twitter:image'];
  }
  return imageUrl;
};

export const metaDescription = meta => {
  let description = '';
  if (meta['og:description']) {
    description = meta['og:description'];
  } else if (meta['twitter:description']) {
    description = meta['twitter:description'];
  } else if (meta['description']) {
    description = meta['description'];
  }
  return description;
};
metaData.metaImage = metaImage;
metaData.metaDescription = metaDescription;
export default metaData;
