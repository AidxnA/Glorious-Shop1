"use server"
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: "835thz72xd8o",
  accessToken: 'AbHLaJWaafVatOU4WNl4V_rK2WxZuWaub01RLk-Rlr8',  

  host:'cdn.contentful.com'
});
export async function fetchFeaturedProducts() {
    const response = await client.getEntries(
        {content_type : 'Product'}
    )
    return response
}

export async function fetchProducts() {
    const res = await client.getEntries({
      content_type: 'product',
    });
  
    return res.items.map((item) => ({
      id: item.sys.id,
      ...item.fields
    }));
  }
