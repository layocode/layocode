import { Helmet } from "react-helmet-async";
import BlogWithSidebarContent from "../../components/blog/BlogWithSidebarContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";

const BlogWithSidebarPage = () => {
    return (
        <>
            <Helmet>
                <title>Layocode | your development partner</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb
                    title="Blog Sidebar"
                    breadCrumb="blog-with-sidebar"
                />
                <BlogWithSidebarContent sectionClass="default-padding-bottom" />
                <DarkClass />
            </LayoutV1>
        </>
    );
};

export default BlogWithSidebarPage;
