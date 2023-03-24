import {
  FEATURE_GRAPHQL_FIELDS,
  DETAIL_GRAPHQL_FIELDS
} from "./fields";
import { Detail, Feature } from "./types";

const {
  CONTENTFUL_BASE_URL,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT_ID,
  CONTENTFUL_DELIVERY_TOKEN
} = process.env;

async function fetchGraphQL(query: string) {
  return fetch(
    `${CONTENTFUL_BASE_URL}/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  );
}

export async function getEntries(): Promise<{ details: Detail[], features: Feature[]; }> {
  const detailResponse = await fetchGraphQL(
    `query {
       detailCollection(order: id_ASC, skip: 0, limit: 15) {
         items {
           ${DETAIL_GRAPHQL_FIELDS}
         }
       }
     }`
  );

  const featureResponse = await fetchGraphQL(
    `query {
       featuredCollection(order: id_ASC, skip: 0, limit: 15) {
         items {
           ${FEATURE_GRAPHQL_FIELDS}
         }
       }
     }`
  );

  if (!detailResponse.ok || !featureResponse.ok) {
    // throw new Error('Failed to fetch data');
  }

  const detailEntries = await detailResponse.json();
  const featureEntries = await featureResponse.json();

  return {
    details: detailEntries?.data?.detailCollection?.items,
    features: featureEntries?.data?.featuredCollection?.items,
  };
}