import React, { useEffect, useState } from 'react'

import { ContainerHome } from '@/styles/pages/Home'
import Header from '@/components/Header'
import MyTeams from '@/components/MyTeams'
import TopFive from '@/components/TopFive'
import PickedPlayer from '@/components/PickedPlayer'
import { useFootball } from '@/hooks/football'
import { useFormation, IHighersAvgAge } from '@/hooks/formation'

const areaSm = `
  header
  teams
  topFive
  pickedPlayer
`
const areaMd = `
  header
  teams
  topFive
  pickedPlayer
  `
const areaLg = `
  header header
  teams topFive
  teams pickedPlayer
`
const Home: React.FC = () => {
  const { myTeams } = useFootball()
  const { indexHighestAvgAge } = useFormation()

  const [agePlayers, setAgePlayers] = useState<IHighersAvgAge>(
    ([] as unknown) as IHighersAvgAge
  )

  useEffect(() => {
    setAgePlayers(indexHighestAvgAge() as IHighersAvgAge)
  }, [])

  return (
    <ContainerHome
      areas={areaSm}
      areasMd={areaMd}
      areasLg={areaLg}
      templateCols={'1fr'}
      templateColsMd={'1fr'}
      templateColsLg={'1fr 1fr'}
    >
      {Area => (
        <>
          <Area.Header>
            <Header />
          </Area.Header>
          <Area.Teams>
            <MyTeams myTeams={myTeams} />
          </Area.Teams>
          <Area.TopFive>
            <TopFive agePlayers={agePlayers} />
          </Area.TopFive>
          <Area.PickedPlayer>
            <PickedPlayer />
          </Area.PickedPlayer>
        </>
      )}
    </ContainerHome>
  )
}
export default Home
