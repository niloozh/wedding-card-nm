import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import { getAbsoluteUrl } from "@/constants/siteMeta";
import HomeAlt from "../../../components/publicWebPages/HomeAlt";

const PreviewGroomPage = () => {
  return (
    <Seo url={getAbsoluteUrl("/preview/m")}>
      <PageContainer pageIdentifier="home">
        <HomeAlt guestSide="m" />
      </PageContainer>
    </Seo>
  );
};

export default PreviewGroomPage;
