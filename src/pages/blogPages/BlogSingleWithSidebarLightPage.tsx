import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import BlogV3Data from "../../../src/assets/jsonData/blog/BlogV3Data.json";
import BlogSingleWithSidebarContentLight from "../../components/blog/BlogSingleWithSidebarContentLight";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1Light from "../../components/layouts/LayoutV1Light";

const BlogSingleWithSidebarLightPage = () => {
    const { id } = useParams();
    const data = BlogV3Data.find(
        (portfolio) => portfolio.id === parseInt(id || "0")
    );

    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1Light>
                <Breadcrumb
                    title="Blog Single"
                    breadCrumb="blog-single-with-sidebar-light"
                    LightMode={true}
                />
                {data && (
                    <BlogSingleWithSidebarContentLight
                        sectionClass="default-padding"
                        blogInfo={data}
                        totalBlogs={BlogV3Data.length}
                    />
                )}
            </LayoutV1Light>
        </>
    );
};

export default BlogSingleWithSidebarLightPage;
