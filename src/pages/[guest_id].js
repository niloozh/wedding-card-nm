import fs from "fs";
import path from "path";
import Papa from "papaparse";

import Seo from "@/components/wrappers/Seo";
import PageContainer from "@/components/wrappers/PageContainer";
import { getAbsoluteUrl } from "@/constants/siteMeta";
import Home from "../components/publicWebPages/Home";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "public", "sr_guests_with_ids.csv");
  const file = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse(file, { header: true });

  const validRows = parsed.data.filter(
    (row) => typeof row.guest_id === "string" && row.guest_id.trim() !== ""
  );

  const paths = validRows.map((row) => ({
    params: { guest_id: row.guest_id.trim() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "public", "sr_guests_with_ids.csv");
  const file = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse(file, { header: true });

  const guest = parsed.data.find(
    (row) => row.guest_id?.trim() === params.guest_id
  );

  if (!guest) {
    return { notFound: true };
  }

  return {
    props: { guest },
  };
}

const GuestInvitationPage = ({ guest }) => {
  const guestId = guest.guest_id?.trim();

  return (
    <Seo url={getAbsoluteUrl(`/${guestId}`)}>
      <PageContainer pageIdentifier="home">
        <Home guest={guest} />
      </PageContainer>
    </Seo>
  );
};

export default GuestInvitationPage;
