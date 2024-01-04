import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Note from "@/components/Note";
import notes from "/public/Note";


function passnote(newnote) {
  return(
    <Note
    key={newnote.key}
    title={newnote.title}
    content={newnote.content}
    />
  )
}

const Home = () => {

  return (
    <div>
      <Header />
      {notes.map(passnote)}
      <Footer />
    </div>
  );
};

export default Home;
