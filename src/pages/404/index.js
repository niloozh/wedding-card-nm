import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import NotFound from "@/components/publicWebPages/NotFound";

const NotFoundPage = () => {
  return (
    <Seo
      title="صفحه پیدا نشد"
      description="متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد."
      keywords="404"
    >
      <PageContainer pageIdentifier="home">
        <NotFound />
      </PageContainer>
    </Seo>
  );
};

export default NotFoundPage;
