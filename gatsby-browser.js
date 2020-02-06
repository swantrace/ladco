import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./src/context/ApolloContext"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)

export const onInitialClientRender = () => {
  var mainScript = document.createElement("script")
  mainScript.src = "/main.js"
  document.body.appendChild(mainScript)
}
