import { useLocation, useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { Input, PrimaryButton } from "../../ui";
import { useAuth } from "../service";

const Container = tw.div`bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl`
const Header = tw.div`mb-4`
const Title = tw.h1`text-gray-900 text-2xl`
const ContainerForm = tw.div`flex mt-4`;
const Form = tw.form``;

export function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();
  
    let from = location.state?.from?.pathname || "/";
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
  
      let formData = new FormData(event.currentTarget);
      let username = formData.get("username") as string;
  
      auth.signin(username, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    }
  
    return (
      <Container>
        <Header>
            <Title>You must log in to view the page at {from}</Title>
        </Header>
        <Form onSubmit={handleSubmit}>
        <ContainerForm>
            <Input name="username" type="text" placeholder="username" />
            <PrimaryButton type="submit">Login</PrimaryButton>
            </ContainerForm>    
        </Form>
      </Container>
    );
  }