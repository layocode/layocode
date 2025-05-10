import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import PortfolioV4Data from "../../../src/assets/jsonData/portfolio/PortfolioV4Data.json";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import ProjectDetailsLightContent from "../../components/project/ProjectDetailsLightContent";

const ProjectDetailsLightPage = () => {
    const { id } = useParams();
    const data = PortfolioV4Data.find(
        (portfolio) => portfolio.id === parseInt(id || "0")
    );

    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb
                    title="Case Studies"
                    breadCrumb="project-details-light"
                    LightMode={true}
                />
                {data && (
                    <ProjectDetailsLightContent
                        projectInfo={data}
                        totalProjects={PortfolioV4Data.length}
                    />
                )}
            </LayoutV1Light>
        </>
    );
};

export default ProjectDetailsLightPage;
