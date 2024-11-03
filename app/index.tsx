import { ScrollView } from 'react-native';
import { Header } from '@/app/header';
import { Banner } from '@/app/banner';
import { Footer } from '@/app/footer';
import { Products } from '@/app/products';

export default function Index() {
  return (
    <ScrollView>
      <Header/>
      <Banner/>
      <Products/>
      <Footer/>
    </ScrollView>
  );
}

