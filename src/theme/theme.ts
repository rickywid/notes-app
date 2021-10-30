import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                background:"#1a1c1f",
                // background: `#1a1c1f url(${process.env.PUBLIC_URL}/skull.png) no-repeat center`,
                // backgroundSize: '600px'

            }
        }
    }
})

export default theme;