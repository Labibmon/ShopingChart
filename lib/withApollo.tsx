import withApollo from "next-with-apollo"
  import { ApolloClient } from 'apollo-client';
  import { ApolloLink } from 'apollo-link';
  import { onError } from 'apollo-link-error';
  import { HttpLink } from 'apollo-link-http';
  import { InMemoryCache } from 'apollo-cache-inmemory';
   
  export default  withApollo(
    ({ initialState }) => {
      return  new ApolloClient({
          link:ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
              if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                  console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                  ),
                );
              if (networkError) console.log(`[Network error]: ${networkError}`);
            }),
            new HttpLink({
              headers:{
                "Content-Type": "application/graphql",
                "X-Shopify-Storefront-Access-Token" : "ee85e7fd950fe2d5a656b02e5bfff8a0"
              },
              uri: 'https://labibmon.myshopify.com/api/graphql',
            })
          ]),
          cache: new InMemoryCache().restore(initialState || {})
        }) 
    }
  )