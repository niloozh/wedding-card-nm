import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import { getAbsoluteUrl } from "@/constants/siteMeta";
import Home from "../../components/publicWebPages/Home";

const GroomInvitationPage = () => {
  return (
    <Seo url={getAbsoluteUrl("/m")}>
      <PageContainer pageIdentifier="home">
        <Home guestSide="m" />
      </PageContainer>
    </Seo>
  );
};

export default GroomInvitationPage;
