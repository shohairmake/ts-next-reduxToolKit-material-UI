import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import withRedux from "next-redux-wrapper"
import { AppProps } from "next/app"
import React from "react"
import { Provider } from "react-redux"
import { MuiTheme } from "../components/MuiTheme"
import { makeStore } from "../store/configureStore"

interface Props extends AppProps {
  store: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
 */
export const MyApp = ({ store, Component, pageProps }: Props) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentNode?.removeChild(jssStyles)
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={MuiTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default withRedux(makeStore, {
  debug: false,
})(MyApp)
