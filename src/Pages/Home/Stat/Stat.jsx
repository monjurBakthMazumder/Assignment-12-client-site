
import useGetAllStart from '../../../Hock/useGetAllStart';

const Stat = () => {
    const stat = useGetAllStart()
    console.log("object,",stat);
    return (
        <div className="max-w-7xl w-full mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div className="border border-pink-500 rounded text-center p-5 md:p-10">
            <h1 className="text-6xl font-bold text-pink-500">{stat?.totalMaleBiodata}</h1>
            <h1 className="text-xl font-bold">Total Male biodatas</h1>
          </div>
          <div className="border border-pink-500 rounded text-center p-5 md:p-10">
            <h1 className="text-6xl font-bold text-pink-500">
              {" "}
              {stat?.totalFemaleBiodata}
            </h1>
            <h1 className="text-xl font-bold">Total Female biodatas</h1>
          </div>
          <div className="border border-pink-500 rounded text-center p-5 md:p-10">
            <h1 className="text-6xl font-bold text-pink-500">
              {" "}
              {stat?.marriage}
            </h1>
            <h1 className="text-xl font-bold">Total marriage story</h1>
          </div>
        </div>
        </div>
    );
};

export default Stat;