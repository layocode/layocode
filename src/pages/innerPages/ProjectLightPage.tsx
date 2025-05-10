import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import PortfolioV2 from "../../components/portfolio/PortfolioV2";

const ProjectLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb
                    title="Case Studies"
                    breadCrumb="Project-light"
                    LightMode={true}
                />
                <PortfolioV2 moreBtn={true} sectionClass="default-padding" />
            </LayoutV1Light>
        </>
    );
};

export default ProjectLightPage;
