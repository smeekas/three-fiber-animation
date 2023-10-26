type ParallaxHtmlProp = {
  heading: string;
  buttonContent: string;
  top: number;
};
function ParallaxHtml(props: ParallaxHtmlProp) {
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

export default ParallaxHtml;
