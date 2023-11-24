import UseAuth from '../../../Hock/UseAuth';

const Header = () => {
    const { user } = UseAuth();
    return (
        <>
            {user ? (
        <div className="bg-pink-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5  max-w-[100rem] w-full mx-auto  py-3 sm:px-6 lg:px-8">
            <h1 className="text-pink-900  text-sm font-semibold">
              Discover Love&#39;s Journey on MingleHeart&#39;s Pathway.
            </h1>
            <div className="flex items-center gap-2">
              <div className="relative inline-block">
                <img
                  className="inline-block h-[1.8rem] w-[1.8rem] rounded-md"
                  src={user?.photoURL}
                  alt="Image Description"
                />
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full transform -translate-y-1/2 translate-x-1/2 bg-pink-400"></span>
              </div>
              <h1 className="text-pink-900  text-sm font-semibold">
                {user.displayName}
              </h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
        </>
    );
};

export default Header;