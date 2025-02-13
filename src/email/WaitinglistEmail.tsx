import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";


const baseUrl = "https://www.winea.app/"
export default function WaitinglistEmail() {
  return (
    <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Trouve ton produit gagnant en un clic
      </Preview>
      <Container style={container}>
        <Img
          src="https://i.ibb.co/s9Tc3zq8/logo-purple.png"
          width="65"
          height="26"
          alt="Winea"
          style={logo}
        />
        <Text style={paragraph}>Salut</Text>
        <Text style={paragraph}>
          Bienvenue sur Winea, la plateforme qui vous permet de trouvez des produits gagnants sur le marché e-commerce africain en quelques clics.
          Vous serez informé dans quelques semaines dès que l&apos;applicaton sera finalisé. N&apos;hésitez pas à nous contacter pour plus de renseignements.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={baseUrl}>
            Consultez notre site
          </Button>
        </Section>
        <Text style={paragraph}>
          Merci,
          <br />
          L&apos;équipe Winea
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Tous droits réservés © 2025 Winea
        </Text>
      </Container>
    </Body>
  </Html>
  )
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
  };
  
  const btnContainer = {
    textAlign: 'center' as const,
  };
  
  const button = {
    backgroundColor: '#7224D1',
    borderRadius: '3px',
    color: '#fff',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    padding: '12px',
  };
  
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0',
  };
  
  const footer = {
    color: '#8898aa',
    fontSize: '12px',
  };