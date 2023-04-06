import { Container, Links, Content } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>

      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vel ducimus aperiam odio porro laboriosam, totam dignissimos quam, numquam ut sequi aliquam voluptatibus. Optio et dolorem suscipit fuga sapiente eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi alias quod ipsam illum labore hic amet eum aspernatur tempora sunt iure dignissimos praesentium, dolor, nam quidem molestias! Error, quod sit!</p>

          <Section title="Links úteis">
          <Links>
            <li>
              <a href="#">https://www.rocketseat.com.br/</a>
            </li>
            <li>
              <a href="#">https://www.rocketseat.com.br/</a>
            </li>
          </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="node"/>
          </Section>

          <Button title="Voltar"/>

        </Content>
      </main>

    </Container>
  )
}