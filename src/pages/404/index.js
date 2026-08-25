import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import NotFound from "@/components/publicWebPages/NotFound";

const index = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        keywords="404 Error, Page Not Found."
        description="Oops! The page you're looking for isn't here."
      >
        <PageContainer pageIdentifier="home">
          <NotFound />
        </PageContainer>
      </Seo>
    </>
  );
};

export default index;
