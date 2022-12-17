import { useRouter } from "next/router";

const ToolHtml = () => {
  const route = useRouter();
  const { tool } = route.query;
  return (<section>
    <h1>HTML {tool}</h1>
  </section>);
}

export default ToolHtml;