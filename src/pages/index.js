import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import Home from "../components/publicWebPages/Home";

const index = () => {
  return (
    <Seo>
      <PageContainer pageIdentifier="home">
        <Home />
      </PageContainer>
    </Seo>
  );
};

export default index;
