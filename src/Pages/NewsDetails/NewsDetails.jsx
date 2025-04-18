
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightNavbar from "../../Components/LayoutComponents/RightNavbar/RightNavbar";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
    const detail = useLoaderData();
    // console.log(details.data[0]);
    const detailsData = detail.data[0];

    // const { _id, details, image_url, title,category_id } = detailsData

    return (
        <div className="font-apply max-w-6xl mx-auto pb-16">
            <header className="flex justify-center pb-20">
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-6">

                <section className="col-span-9 ">
                    <h2>Dragon News</h2>
                    {/* card  */}
                    <div className="border border-[#E7E7E7] rounded-lg">
                        <div className="card bg-base-100 shadow-sm p-6 ">
                            <figure>
                                <img
                                    src={detailsData?.image_url}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{detailsData?.title}</h2>
                                <p>{detailsData?.details}</p>
                                <div className="card-actions">
                                    <Link to={`/category/${detailsData?.category_id}`} className="text-white bg-[#D72050] btn font-normal">
                                        <span><FaArrowLeftLong className="text-sm" /></span>All news in this category
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;