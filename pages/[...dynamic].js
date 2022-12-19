export default function Dynamic() {

}

export const getServerSideProps = async ctx => {
  if (ctx.res.statusCode = 404) {
    return {
      props: {
        pageNotFound: true
      }
    }
  }
}