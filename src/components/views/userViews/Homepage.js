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
    // const currentUser = useSelector(state => state.user.currentUser)
    const isAuth = useSelector(state => state.user.isAuth)
    // const { role } = useSelector(state => state.user.currentUser)
    console.log(isAuth)
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