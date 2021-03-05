import Link from 'next/link'
import Head from 'next/head'


export default function FirstPost() {
    return (
        <>
            <Head>
                <title>first post</title>
            </Head>
            <h1>First Post</h1>
            <h2><a href="/" ><a>back to home</a></a></h2>
        </>
    )
}