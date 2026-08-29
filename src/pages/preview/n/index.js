import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import { getAbsoluteUrl } from "@/constants/siteMeta";
import HomeAlt from "../../../components/publicWebPages/HomeAlt";

const PreviewBridePage = () => {
  return (
    <Seo url={getAbsoluteUrl("/preview/n")}>
      <PageContainer pageIdentifier="home">
        <HomeAlt guestSide="n" />
      </PageContainer>
    </Seo>
  );
};

export default PreviewBridePage;
