import TopMenu from "../../user/TopMenu";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Homepage = () => {
    // const { user: currentUser } = useSelector((state) => state.auth);
    //
    // if (!currentUser) {
    //     return <Navigate to="/login" />;
    // }
    // let navigate = useNavigate()
    // const isAuth = useSelector(state => state.user.isAuth)
    // useEffect(()=>{
    //     if (isAuth){
    //         navigate('/user/mainPageUser')
    //     }
    //     if(!isAuth){
    //         navigate('/login')
    //     }
    // },[])
    return (
        <main>
            <TopMenu />
            <div>
                <h2 className="home">Welcome to the homepage!</h2>
            </div>
        </main>
    );
};

export default Homepage;