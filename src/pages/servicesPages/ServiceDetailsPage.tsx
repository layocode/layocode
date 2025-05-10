import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServiceDetailsContent from "../../components/services/ServiceDetailsContent";

const ServiceDetailsPage = () => {
    const { id } = useParams();
    const data = ServicesV1Data.find(
        (service) => service.id === parseInt(id || "0")
    );

    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title="Our Services" breadCrumb="service-details" />
                {data && (
                    <ServiceDetailsContent
                        serviceInfo={data}
                        sectionClass="default-padding-bottom"
                    />
                )}
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;
