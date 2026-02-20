"use server"
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: "835thz72xd8o",
  accessToken: 'AbHLaJWaafVatOU4WNl4V_rK2WxZuWaub01RLk-Rlr8',

  host: 'cdn.contentful.com'
});
export async function fetchFeaturedProducts() {
  const response = await client.getEntries(
    { content_type: 'product' }
  )
  return response
}

export async function fetchProducts() {
  const res = await client.getEntries({
    content_type: 'product',
  });
  return res
}


export async function getProductBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'product', 
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const item = response.items[0];
    const fields = item.fields;

    return {
      id: item.sys.id,
      slug: fields.slug,
      name: fields.name,
      price: fields.price,
      description: fields.description,
      image: fields.image?.map((img) => ({
        url: `https:${img.fields.file.url}`,
        alt: img.fields.title || fields.name,
        width: img.fields.file.details.image?.width,
        height: img.fields.file.details.image?.height,
      })) || [],
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getproductbyslug(itemsid) {
  try {
    const response = await client.getEntries(
      {
        content_type: 'product',
        'fields.slug': itemsid,
      }
    )
    if (response.items.length === 0){
      return null
    }
    const item = response.items[0]
    const fields = item.fields
    return{
        id: item.sys.id,
        slug: fields.slug,
        name: fields.name,
        price: fields.price,
        description: fields.description,
        image: fields.image.map((img) => ({
          url: `https:${img.fields.file.url}`,
          alt: img.fields.title || fields.name,
          height: img.fields.file.details.image.height
        }) )
      }
    } 
  catch (error) {
    console.log(error)
  }
}