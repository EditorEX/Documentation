import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from "next/link";
import Image from "next/image";
import config from "../next.config.mjs"

export const metadata = {
}

const navbar = (
    <Navbar
        logo={<Image src={`${config.basePath}/images/general/logo.svg`} alt="Logo" width={100} height={20}/>}
    />
)
export default async function RootLayout({children}) {
    return (
        <html
            lang="en"
            dir="ltr"
            suppressHydrationWarning
        >
        <Head>
            <link rel="shortcut icon" href={`${config.basePath}/images/general/icon.svg`}/>
        </Head>
        <body>
        <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/orgs/EditorEX/repositories/tree/main"
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}