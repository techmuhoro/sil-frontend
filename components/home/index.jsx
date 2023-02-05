import Landing from '@/components/home/Landing';
import Scroll from '@/components/widgets/Scroll';
import OffersSection from '@/components/home/Offers';
import Footer from '@/components/home/Footer';

export default function HomePage() {
    return (
        <>
            <Landing />
            <Scroll />
            <OffersSection />
            <Footer />
        </>
    );
}
