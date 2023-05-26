# Starter App with Next.js and Contentful

A starter app for building websites using Next.js 13's _app_ directory, Tailwind CSS, Contentful CMS, GraphQL, Docker, and Nginx.


## Features
Next.js (container) ---<-<--- GraphQL ---<-<--- Contenful CMS
- Dynamically render using data fetched on Next.js
- Style components with predefined classes from Tailwind CSS
- Manage the site's content with the Contentful CMS interface
- Communicate queries with GraphQL
- Build and run a Docker container using a Dockerfile


## Demo
- https://stemple.dev.yliang.net/

![demo](/public/main.png)



## Getting Started
In this starter application, routes are dynamically rendered on the server at request time using `fetch()` requests without caching to retrieve the latest content data.

* Clone the repository: `git clone https://github.com/y-liang/starter-app-nextjs-contentful.git`
* Install dependencies: `npm install`


### Configure Contentful CMS
*  Create a space in Contentful and fill in environment variables in _.env.local_ file. Go to Settings > API keys to find the _Space ID_ and _Content Delivery API_ access token from the main environment. Note: make sure to select the environments and aliases for API key access.
*  Define content model and add content
![content](/public/content.png)
   * Detail, a content type for text copies.
   ```
   type Detail = {
      id: number;
      label: string;
      title: string;
      subtitle: string;
      description: string;
      link: string;
   };
   ```
   * Feature, a content type for image assets.
   ```
   type Feature = {
      id: number;
      title: string;
      description: string;
      image: Image;
      isIcon: boolean;
      link: string;
   };
   type Image = {
      url: string;
   }
   ```

### Query GraphQL API
* Make requests to the GraphQL API using `fetch()`
```
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
      cache: 'no-store' // opt out of caching behavior for dynamic data fetches
    }
  );
}
```
* Modify queries as needed
```
const detailResponse = await fetchGraphQL(
   `query {
      detailCollection(order: id_ASC, skip: 0, limit: 15) {
         items {
            ${DETAIL_GRAPHQL_FIELDS}
         }
      }
   }`
);
const DETAIL_GRAPHQL_FIELDS = `
   id
   label
   title
   subtitle
   description
   link
`;
```
* Retrieve a piece of content using the `find()` function where the label property is used as an identifier.
```
   const findDetail = (label: string) => {
      return details.find((detail: Detail) => detail.label == label);
   };
```

## Building and Deploying
The Dockerfile included here is referenced from the Next.js [_with-docker_](https://github.com/vercel/next.js/tree/canary/examples/with-docker) example.

### Containerize the app with Docker

* Build the Docker image using a Dockerfile: `sudo docker build -f ./app.Dockerfile -t <image-name> .`
* Run the Docker container in detached mode: `sudo docker run -d -p 3200:3200 --name <container-name> <image-name>`

* Alternatively, create and start a container using a Docker Compose file: `sudo docker compose up -d`

### Reverse Proxy with Nginx
* Configure Nginx to proxy requests and ensure its security by enabling encrypted HTTPS with an SSL certificate.
```
server {
   listen 80;
   listen [::]:80;
   server_name DOMAIN_NAME www.DOMAIN_NAME;

   location / {
      proxy_pass http://0.0.0.0:3200;
      include proxy_params;
   }
}
```

## Running Locally
* Start the development server: `npm run dev`
* The application is running on port 3200, which can be changed by modifying the `"dev": "next dev -p 3200"` and `"start": "next start -p 3200"` scripts in the _package.json_ file.

