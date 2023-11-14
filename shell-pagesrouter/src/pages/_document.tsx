import { revalidate, flushChunks, FlushedChunks } from '@module-federation/nextjs-mf/utils'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   console.log('context', ctx.req)
  //   if (process.env.NODE_ENV === 'development' && ctx.req && ctx.req.url && !ctx.req.url.includes('_next')) {
  //     await revalidate().then((shouldReload) => {
  //       if (shouldReload) {
  //         if (!ctx.res) throw Error('No res on reload')
  //         if (!ctx.req) throw Error('No req on reload')

  //         ctx.res.writeHead(302, { Location: ctx.req.url })
  //         ctx.res.end()
  //       }
  //     })
  //   } else {
  //     ctx?.res?.on('finish', () => {
  //       revalidate()
  //     })
  //   }

  //   const chunks = await flushChunks()
  //   console.log('chunks', chunks)
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {
  //     ...initialProps,
  //     chunks
  //   }
  // }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
