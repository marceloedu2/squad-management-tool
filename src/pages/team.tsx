import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Form } from '@unform/web'
import debounce from 'lodash/debounce'
import { FormHandles } from '@unform/core'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

import Header from '@/components/Header'
import {
  ContainerTeam,
  ContentTeam,
  DivTeam,
  ContainerRadio,
  ContainerInputTag,
  DivSearch
} from '@/styles/pages/Team'
import Input from '@/components/Input'
import Radio from '@/components/Radio'
import TagInput from '@/components/TagInput'
import TextArea from '@/components/TextArea'
import MyFormation from '@/components/MyFormation'
import Button from '@/components/Button'
import { useFootball, IMyTeams, IPlayer } from '@/hooks/football'
import Select from '@/components/Select'
import getValidationErrors from '@/utils/getValidationErrors'
import { formations } from '@/mocks/myFormations'
import CardPlayer from '@/components/cardPlayer'
import { useFormation } from '@/hooks/formation'
import { arrayGenerator } from '@/utils/generatorArrays'

const areaContainerSm = `
  header
  body
`
const areaBodySm = `
  titleInfo
  teamInfo1
  teamInfo2
  titleConfig
  configSquad2
  configSquad1
`

const areaBodyMd = `
  titleInfo
  teamInfo1
  teamInfo2
  titleConfig
  configSquad2
  configSquad1
`
const areaBodyLg = `
  titleInfo titleInfo
  teamInfo1 teamInfo2
  titleConfig titleConfig
  configSquad1 configSquad2
`

const Team: React.FC = () => {
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const { createFormation } = useFormation()

  const [team, setTeam] = useState<IMyTeams>({} as IMyTeams)

  const [players, setPlayers] = useState([])

  const { id } = router.query

  const {
    indexMyTeam,
    searchPlayer,
    createMyTeams,
    updateMyTeams
  } = useFootball()

  useEffect(() => {
    if (id) {
      setTeam(indexMyTeam(String(id)))
      createFormation(indexMyTeam(String(id)).formationObject)
    }else {
      setTeam({} as IMyTeams)
      createFormation([])
    }
  }, [id])

  const handlerSelectFormation = useCallback(event => {
    event.preventDefault()
    const formation = event.target.value
    if (formation) {
      createFormation(arrayGenerator(`${formation}-1`))
    } else {
      createFormation([])
    }
  }, [])

  const handlerChangePlayer = useCallback(
    debounce(async ({ target: { value } }) => {
      const response: IPlayer[] = await searchPlayer(value)
      setPlayers(response)
    }, 500),
    []
  )

  const handlerSubmit = useCallback(async data => {
    formRef.current?.setErrors({})
    try {
      const formationObjectValidate = JSON.parse(data.formationObject)
      let validade = false
      formationObjectValidate.length > 0
        ? formationObjectValidate.map(formArray => {
            formArray.map(form => {
              if (JSON.stringify(form) === '{}') {
                validade = true
              }
            })
          })
        : (validade = true)
      const schema = Yup.object().shape({
        teamName: Yup.string().required('Team name is required'),
        teamDescription: Yup.string().required('Description is required'),
        formation: Yup.string().required('Formation is required'),
        formationObject:
          validade &&
          Yup.string().max(0, 'All players in formation is requered'),
        teamWebsite: Yup.string()
          .matches(
            /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct website!'
          )
          .required('Website is required!')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      if (id) {
        await updateMyTeams({ ...data, id })
      } else {
        await createMyTeams(data)
      }

      return router.push('/')
    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors)
      window.scrollTo(0, 100)
    }
  }, [])

  return (
    <ContainerTeam areas={areaContainerSm}>
      {Container => (
        <Form ref={formRef} onSubmit={handlerSubmit}>
          <Container.Header>
            <Header />
          </Container.Header>

          <Container.Body>
            <ContentTeam
              areas={areaBodySm}
              areasMd={areaBodyMd}
              areasLg={areaBodyLg}
              templateCols={'1fr'}
              templateColsMd={'1fr'}
              templateColsLg={'1fr 1fr'}
            >
              {Area => (
                <>
                  <Area.TitleInfo>
                    <h3>TEAM INFORMATION</h3>
                  </Area.TitleInfo>
                  <Area.TeamInfo1>
                    <DivTeam>
                      <Input
                        name="teamName"
                        nameLabel="Team name"
                        type="text"
                        defaultValue={team.name}
                      />
                      <TextArea
                        name="teamDescription"
                        nameLabel="Description"
                        defaultValue={team.description}
                      />
                    </DivTeam>
                  </Area.TeamInfo1>
                  <Area.TeamInfo2>
                    <DivTeam>
                      <Input
                        name="teamWebsite"
                        nameLabel="Team website"
                        type="text"
                        defaultValue={team.website}
                      />
                      <ContainerRadio>
                        <div>
                          <Radio
                            name="teamType"
                            label="Team type"
                            type="radio"
                            defaultValue={
                              team.type === 'real' ? 'real' : 'fantasy'
                            }
                            options={[
                              { id: 'real', label: 'Real' },
                              { id: 'fantasy', label: 'Fantasy' }
                            ]}
                          />
                        </div>
                      </ContainerRadio>
                      <ContainerInputTag>
                        <TagInput
                          name="tags"
                          nameLabel="Tags"
                          defValue={team.tags && team.tags.split(',')}
                        />
                      </ContainerInputTag>
                    </DivTeam>
                  </Area.TeamInfo2>
                  <Area.TitleConfig>
                    <h3>CONFIGURE SQUAD</h3>
                  </Area.TitleConfig>
                  <Area.ConfigSquad1>
                    <DivTeam>
                      <Select
                        name="formation"
                        nameLabel="Formation"
                        onChange={handlerSelectFormation}
                        defaultValue={team.formation}
                      >
                        <>
                          <option value="">Select Formation</option>
                          {formations.map(form => (
                            <option
                              value={form.title}
                              key={form.id}
                              selected={team.formation === form.title}
                            >
                              {form.title}
                            </option>
                          ))}
                        </>
                      </Select>
                      <MyFormation
                        formation={team.formation ? `${team.formation}-1` : ''}
                      />
                      <Button type="submit">Save</Button>
                    </DivTeam>
                  </Area.ConfigSquad1>
                  <Area.ConfigSquad2>
                    <DivSearch>
                      <Input
                        type="text"
                        nameLabel="Search Player"
                        name="search"
                        placeholder="Search"
                        onKeyDown={event => {
                          event.persist()
                          handlerChangePlayer(event)
                        }}
                      />
                      <div>
                        {players.map(player => (
                          <CardPlayer key={player.id} player={player} />
                        ))}
                      </div>
                    </DivSearch>
                  </Area.ConfigSquad2>
                </>
              )}
            </ContentTeam>
          </Container.Body>
        </Form>
      )}
    </ContainerTeam>
  )
}

export default Team
