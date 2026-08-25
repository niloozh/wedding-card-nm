import Div from "@/baseComponents/Div";
import Anchor from "@/baseComponents/Anchor";

const DisplayAnchor = () => {
  return (
    <>
      <Div>
        <Anchor to="https://google.com" internal={false}>
          Visit Google
        </Anchor>
      </Div>
    </>
  );
};

export default DisplayAnchor;
