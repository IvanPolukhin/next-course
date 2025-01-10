import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";

const id = ({ user }) => {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <h1> user with id: {query.id}</h1>
      <h3>user name - {user.name}</h3>
    </MainContainer>
  );
};

export default id;

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}
