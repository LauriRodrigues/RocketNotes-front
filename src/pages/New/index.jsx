import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { NoteItem } from '../../components/NoteItem'
import { Link } from 'react-router-dom'


export function New() {
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <Textarea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem value="" isNew placeholder="Novo link"/>
          </Section>
        
          <Section title="Marcadores">
            <div class="tags">
              <NoteItem value="react"/>
              <NoteItem value="" isNew placeholder="Nova tag"/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}