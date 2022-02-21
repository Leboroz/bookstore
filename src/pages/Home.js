import AddInput from '../components/AddInput';
import List from '../components/List';
import '../index.scss';

const Home = () => {
  return (
    <section className="paddingX">
      <List></List>
      <AddInput />
    </section>
  );
};

export default Home;
