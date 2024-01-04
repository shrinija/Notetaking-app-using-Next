import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Note from "@/components/Note";
import notes from "/public/notes";

const Home = () => {
  return (
    <div>
      <Header />

      {notes.map(newnote => (
        <Note
          key={newnote.key}
          title={newnote.title}
          content={newnote.content}
        />
      ))}

      <Footer />
    </div>
  );
};

export default Home;
