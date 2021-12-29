import { Grid } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from '@/components/PageHeader';

import ArbitrageTimeSeries  from '@/content/Arbitrage/ArbitrageTimeSeries';

const QUERY = gql`
    query Arbitrage ($market: ArbitrageMarket!) {
        arbitrageForMarket(market: $market) {
            items {
                at
                value
            }
        }
    }
`;

function NexusLiquidContent() {
  const { data, loading, error } = useQuery(QUERY, {
    variables: {
      market: 'NEXUS'
    },
  });

  return (
    <>
      <PageTitleWrapper>
        <PageHeader
          title="Nexus liquid pool arbitrage"
          subtitle="Arbitrage opportunities for the Nexus Liquid pool. A value of 0.95 means a 5% discount on UST"
        />
      </PageTitleWrapper>
      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <ArbitrageTimeSeries
            data={data && data.arbitrageForMarket.items}
            loading={loading}
            error={error}
            chartTitle={'Nexus bPsiDP'}
            yAxisTitle={'pr dollar cost'}
            xAxisTitle={'dates'}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default NexusLiquidContent;
