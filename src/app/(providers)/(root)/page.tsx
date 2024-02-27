import api from "@/api";
import DealCardsList from "@/components/DealCardsList";
import Heading from "@/components/Heading";
import Page from "@/components/Page";

async function HomePage() {
  const deals = await api.deals.getDeals();
  return (
    <Page fullWidth>
      <Heading>전체 판매글</Heading>
      <DealCardsList deals={deals} />
    </Page>
  );
}

export default HomePage;
