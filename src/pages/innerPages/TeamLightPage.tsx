import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";
import TeamV1 from "../../components/team/TeamV1";

const TeamLightPage = () => {
    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb
                    title="Team Experts"
                    breadCrumb="team-light"
                    LightMode={true}
                />
                <TeamV1 sectionClass="bg-gray" />
            </LayoutV1Light>
        </>
    );
};

export default TeamLightPage;
