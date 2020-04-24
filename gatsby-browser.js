// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

import "prismjs/themes/prism.css"

import React from "react"
import { Auth0Provider } from "./src/utils/auth"

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const Auth0Domain = process.env.AUTH0_DOMAIN || process.env.GATSBY_AUTH0_DOMAIN
const Auth0ClientID =
  process.env.AUTH0_CLIENT_ID || process.env.GATSBY_AUTH0_CLIENT_ID
const Auth0RedirectURI =
  process.env.AUTH0_CALLBACK_URL || process.env.GATSBY_AUTH0_CALLBACK_URL

export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={Auth0Domain}
    client_id={Auth0ClientID}
    redirect_uri={Auth0RedirectURI}
    onRedirectCallback={onRedirectCallback}
  >
    {element}
  </Auth0Provider>
)
