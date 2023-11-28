import GetCurrentUser from '../../../hooks/GetCurrentUser';
import useAuth from '../../../hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    const userdata = GetCurrentUser();

    return (
        <div className='shadow-xl'>
            <div className="w-full mx-auto bg-white p-8 rounded  h-[200px]  ">
                <h1 className="text-2xl font-semibold mb-4">Welcome, {userdata?.name}!</h1>

                <div className="flex items-center mb-4">
                    <img
                        src={userdata?.profilepic} // Assuming profilePic is the URL of the profile picture
                        alt="Profile"
                        className="w-20 h-20 rounded-full mr-4"
                    />
                    <div>
                        <p className="text-lg font-semibold">Name:{userdata?.name}</p>
                        <p className="text-gray-600">Email:{user?.email}</p>
                    </div>
                </div>

                {/* Display user badge (if applicable) */}
                {userdata.badge && (
                    <div className="mb-4">
                        <span className=" text-orange-500 rounded-md font-semibold">
                            Badge:{userdata?.badge}
                        </span>
                    </div>
                )}

                {/* Display total posts */}
                <p className="text-gray-700 mb-4 font-semibold">
                    Total Posts: {userdata?.totalPosts ? userdata?.totalPosts : 0}
                </p>


            </div>
            <div className="w-full mx-auto bg-white p-8 rounded  h-[400px] mt-6">
                <h1 className="text-2xl font-semibold mb-4">Instructions</h1>

                {/* My Posts Tab */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">My Posts</h2>
                    <p className="text-gray-700">
                        View your previous posts and interactions with them in the "My Posts" tab.
                    </p>
                </div>

                {/* New Post Tab */}
                <div className="mb-4">
                    <h2 className="text-lg font-semibold mb-2">New Post</h2>
                    <p className="text-gray-700">
                        Create a new post in the "New Post" tab. Provide the necessary details and click
                        the submit button to share your thoughts.
                    </p>
                </div>

                {/* Interactions on My Post Tab */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Interactions on My Post</h2>
                    <p className="text-gray-700">
                        Explore interactions with your posts in the "Interactions on My Post" tab.
                        See comments, upvotes, and downvotes from other users.
                    </p>
                </div>

                {/* Add more tabs and instructions as needed */}
            </div>

        </div>
    );
};

export default UserProfile;
