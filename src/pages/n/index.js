import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import { getAbsoluteUrl } from "@/constants/siteMeta";
import Home from "../../components/publicWebPages/Home";

const BrideInvitationPage = () => {
  return (
    <Seo url={getAbsoluteUrl("/n")}>
      <PageContainer pageIdentifier="home">
        <Home guestSide="n" />
      </PageContainer>
    </Seo>
  );
};

export default BrideInvitationPage;
