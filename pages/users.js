import Link from "next/link";
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users page"}>
      <h1>User list</h1>
      <ul>
        {Array.isArray(users) &&
          users.map((user) => (
            <Link key={user.id} href={`/users/${user.id}`} legacyBehavior>
              <a>
                <li>{user.name}</li>
              </a>
            </Link>
          ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();
  return {
    props: { users },
  };
}
