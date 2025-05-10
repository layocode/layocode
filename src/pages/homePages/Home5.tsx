import { Helmet } from "react-helmet-async";
import BannerV4 from "../../components/banner/BannerV4";
import DarkClassV3 from "../../components/classes/DarkClassV3";
import HeaderV5 from "../../components/header/HeaderV5";

const Home5 = () => {
    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <HeaderV5 />
            <BannerV4 />
            <DarkClassV3 />
        </>
    );
};

export default Home5;
