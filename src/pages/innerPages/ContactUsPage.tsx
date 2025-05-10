import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import ContactV1 from "../../components/contact/ContactV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ContactMap from "../../components/map/ContactMap";

const ContactUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title="Get In Touch" breadCrumb="contact-us" />
                <ContactV1 />
                <ContactMap />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default ContactUsPage;
