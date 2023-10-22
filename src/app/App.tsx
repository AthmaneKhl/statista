import { useState } from 'react'

import { AppWrapper, Count, PageSection, Toolbar } from './app.style'
import { TextInput } from './uiComonents/TextInput'
import { useApi } from '../api'
import { Card, CardList } from './uiComonents/Card'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme/theme'
import { TopBar } from './topBar/TopBar'
import { Pages } from './uiComonents/Pages'



function App() {
  const [value, setValue] = useState<string>()
  const [page, setPage] = useState<number | undefined>()
  const { data, total } = useApi(value, page)

  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <AppWrapper>
        <Toolbar>
          <Count>Total: {total}</Count>
          <PageSection>
            Page:
            <Pages count={total} onChange={p => setPage(p)} />
          </PageSection>
        </Toolbar>
        <TextInput value={value} onChange={setValue} placeholder={'Search'} />
        <CardList>
          {data.map(x => <Card key={x.identifier}>
            <h4>{x.title}</h4>
            <p>{x.description}</p>
          </Card>)}
        </CardList>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
