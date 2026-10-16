import PageHeader from "@/components/layout/PageHeader";
import FAQ from "@/components/sections/FAQ";

const ContactPage = () => {
    return (
        <div className="w-full pt-8 md:pt-12">
            <PageHeader eyebrow="Get in touch" title="Contact" description="Questions about the blog and how to contribute."/>
            <FAQ/>
        </div>
    );
};

export default ContactPage;