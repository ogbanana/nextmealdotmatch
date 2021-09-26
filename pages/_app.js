import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

// const restlink = new RestLink({
//   uri: 'https://api.edamam.com/api/recipes/v2',
// })

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: restlink,
// })

// const simpleQuery = gql`
//   query SimpleQUery {
//     name
//       @rest(
//         type: "Hits"
//         path: "type=public&q=chocolate&app_id=cc8a048e&app_key=0dc862df5ecaa2cf7bc8fda5efdc5ea0&dishType=Desserts&random=true&field=label&field=image"
//       ) {
//       hits
//     }
//   }
// `
// client.query({ query: simpleQuery }).then((response) => {
//   // console.table(response)
// })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
