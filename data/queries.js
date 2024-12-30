import groq from "groq";

const queries = {};

queries.image = groq`{
  _type,
  ...(asset-> {
    '_id': _id,
    'url': url,
    'alt': altText,
    'width': metadata.dimensions.width,
    'height': metadata.dimensions.height,
  }),
}`;

queries.seo = groq`{
  title,
  description,
  url,
  image {
    asset-> {url}
  }
}`;

queries.menu = groq`{
  mainMenu {
    _type,
    links [] {
      _type,
      title,
      url,
      reference -> {
        _type,
        slug
      }
    },
  }
}`;

// Components

queries.contactForm = groq`{
  ...
}`;

queries.components = groq`{
  _type,
  _type == 'module.contactForm' => ${queries.contactForm},
}`;

queries.defaultContent = groq`{
  seo ${queries.seo},
  hero,
  components[] ${queries.components},
}`;

queries.settings = groq`{
  seo ${queries.seo},
  companyName,
  socialMedia,
  terms {
    reference -> {...}
  },
  private {
    reference -> {...}
  },
}`;

queries.home = groq`{
  "slug": '/',
  _type,
  _type == 'home' => ${queries.defaultContent},
}`;

queries.page = groq`{
  _updatedAt,
  _type,
  seo ${queries.seo},
  title,
  slug,
  hero,
  components[] ${queries.components},
}`;

queries.legal = groq`{
  _type,
  _updatedAt,
  seo ${queries.seo},
  title,
  slug,
  lastUpdated,
  components[] ${queries.components},
}`;

export default queries;
