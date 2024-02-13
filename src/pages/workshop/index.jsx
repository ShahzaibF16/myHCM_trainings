import SEO from "@/src/common/seo";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import CourseArea from "@/src/components/homes/home-2/course-area";
import WrapperFour from "@/src/layout/wrapper-4";

const WorkshopPage = () => {
    return (
        <>
        <WrapperFour>
            <Breadcrumb title="Workshops" subtitle="Our Workshop" isDbbl="Workshop"/>
            <SEO pageTitle={"Workshops"} />
          <CourseArea />
        </WrapperFour>
        </>
    )
}

export default WorkshopPage;