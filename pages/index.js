import Head from "next/head";
import Image from "next/image";
import AddContact from "../components/AddContact";
import ContactCard from "../components/ContactCard";
import ContactList from "../components/ContactList";
import NavBar from "../components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          {" "}
          <NavBar />
          <AddContact />
          <ContactCard />
          <ContactList />
        </Box>
      </Container>
    </>
  );
}
