import A from "./A";
import Head from "next/head";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keyword={"ulbi tv, nextjs" + keywords} />
        <title>Home page</title>
      </Head>
      <div className="navbar">
        <A href={"/users"} text="Users" />
        <A href={"/"} text="Home"></A>
      </div>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
