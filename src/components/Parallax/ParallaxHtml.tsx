import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
type ParallaxHtmlProp = {
  heading: string;
  buttonContent: string;
  top: number;
};
function ParallaxHtml(props: ParallaxHtmlProp) {
  const data = useScroll();
  useFrame(() => {
    data.
    data.range(2 / 3, 1 / 3);
    console.log(data, props.heading);
  });
  return (
    <div style={{ top: `${props.top}vh` }} className="scrollContainer">
      <h1>{props.heading}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, aliquid.
      </p>
      <button>{props.buttonContent}</button>
    </div>
  );
}
{
  /* <Particles /> */
}

export default ParallaxHtml;
