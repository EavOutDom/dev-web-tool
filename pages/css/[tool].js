import { useRouter } from "next/router";

const ToolCss = () => {
  const router = useRouter();
  const { tool } = router.query;
  return (<section>
    <h1>Hello: {tool}</h1>
  </section>);
}

export default ToolCss;