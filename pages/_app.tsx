import React from "react"
import App from "next/app"
import Head from "next/head"
import { ApolloProvider } from "@apollo/react-hooks"
import withApollo from "../lib/withApollo"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"


// since "apollo" isn't a native Next.js prop we have to declare it's type.
interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}
// adds our custom props interface to the generic App base class.
class MyApp extends App<IProps> {
  render() {
    // instead of creating a client here, we use the rehydrated apollo client provided by our own withApollo provider. 
    const { Component, pageProps, apollo } = this.props;

    return (
      <React.Fragment>
         <Head>
      <title>Hello</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
      />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
        {/* adds the apollo provider to provide it's children with the apollo scope. */}
        <ApolloProvider client={apollo}>
            <Component {...pageProps} />
        </ApolloProvider>
      </React.Fragment>
    )
  }
}

// before exporting our App we wrapp it with our own withApollo provider to have access to the our rehydrated apollo client.
export default withApollo(MyApp)
